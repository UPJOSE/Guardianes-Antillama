type SpeechCallback = () => void;

export class AudioUtils {
  private static synth: SpeechSynthesis | null = null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static speaking = false;
  private static onStartCb: SpeechCallback | null = null;
  private static onEndCb: SpeechCallback | null = null;
  private static listeners: Array<(speaking: boolean) => void> = [];

  static initialize() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.synth.getVoices();
      if (typeof window !== 'undefined') {
        window.speechSynthesis.onvoiceschanged = () => {
          this.synth?.getVoices();
        };
      }
    }
  }

  static subscribe(cb: (speaking: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private static notify() {
    this.listeners.forEach(cb => cb(this.speaking));
  }

  private static pickBestVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    const latam = voices.find(v =>
      v.lang === 'es-MX' || v.lang === 'es-CO' || v.lang === 'es-PE' ||
      v.lang === 'es-AR' || v.lang === 'es-CL' || v.lang === 'es-419'
    );
    if (latam) return latam;
    const anyEs = voices.find(v => v.lang.startsWith('es'));
    if (anyEs) return anyEs;
    return null;
  }

  static speak(
    text: string,
    opts?: { rate?: number; pitch?: number; onStart?: SpeechCallback; onEnd?: SpeechCallback }
  ) {
    if (!this.synth) this.initialize();
    if (!this.synth) { console.warn('Speech synthesis not supported'); return; }

    this.stop();

    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-MX';
    utt.rate = opts?.rate ?? 0.92;
    utt.pitch = opts?.pitch ?? 1.15;
    utt.volume = 1;

    const voice = this.pickBestVoice();
    if (voice) utt.voice = voice;

    utt.onstart = () => {
      this.speaking = true;
      this.notify();
      opts?.onStart?.();
    };
    utt.onend = () => {
      this.speaking = false;
      this.notify();
      opts?.onEnd?.();
    };
    utt.onerror = () => {
      this.speaking = false;
      this.notify();
    };

    this.currentUtterance = utt;
    this.synth.speak(utt);
  }

  static stop() {
    if (this.synth) {
      this.synth.cancel();
      this.speaking = false;
      this.notify();
    }
  }

  static isSpeaking(): boolean { return this.speaking; }

  static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
}
