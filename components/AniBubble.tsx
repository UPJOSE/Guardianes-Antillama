'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, X, Volume2, MessageCircle } from 'lucide-react';
import { AudioUtils } from '@/lib/utils/audioUtils';

interface AniBubbleProps {
  message?: string;
  phase?: string;
}

const TIPS: Record<string, string[]> = {
  landing: [
    '¡Hola! Soy ANI, tu guardián. ¡Haz clic en "Empezar aventura" para jugar!',
    'Este juego te enseñará a protegerte del fuego. ¡Es divertido!',
    '¿Sabías que las quemaduras son uno de los accidentes más comunes en casa?',
  ],
  onboarding: [
    'Lee con atención las instrucciones. ¡Yo te acompaño en toda la aventura!',
    'No hay respuestas malas, solo oportunidades para aprender.',
    'Cuando estés listo, presiona el botón naranja para comenzar.',
  ],
  story: [
    '¡Piensa bien antes de elegir! No hay prisa.',
    'Recuerda: si ves algo peligroso, ¡avisa a un adulto!',
    'Puedes escuchar los textos con el botón verde de audio.',
    'Cada decisión que tomes te acerca a ser un verdadero guardián.',
    '¡Confía en tu instinto! Tú sabes lo que es seguro.',
  ],
  report: [
    '¡Felicidades por completar la historia!',
    'Revisa tus indicadores para ver cómo lo hiciste.',
    '¿Quieres intentar otra historia? ¡Cada una es diferente!',
    'Comparte lo que aprendiste con tu familia.',
  ],
};

export default function AniBubble({ message, phase = 'landing' }: AniBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState('');
  const [tipIndex, setTipIndex] = useState(0);
  const [hasNewTip, setHasNewTip] = useState(true);

  useEffect(() => {
    const tips = TIPS[phase] || TIPS.landing;
    setCurrentTip(message || tips[0]);
    setTipIndex(0);
    setHasNewTip(true);
  }, [phase, message]);

  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      const tips = TIPS[phase] || TIPS.landing;
      const next = (tipIndex + 1) % tips.length;
      setTipIndex(next);
      setCurrentTip(message || tips[next]);
      setHasNewTip(true);
    }, 12000);
    return () => clearInterval(interval);
  }, [phase, tipIndex, isOpen, message]);

  const handleSpeak = () => {
    AudioUtils.speak(currentTip);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Chat bubble */}
      {isOpen && (
        <div
          className="animate-pop-in w-72 sm:w-80 rounded-2xl p-4 shadow-2xl relative"
          style={{
            background: 'white',
            border: '3px solid var(--warm-orange)',
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full transition-colors hover:bg-orange-50"
          >
            <X size={16} style={{ color: '#7A6B5D' }} />
          </button>

          <div className="flex items-start gap-3 pr-6">
            <div
              className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full"
              style={{ background: 'var(--warm-orange)' }}
            >
              <ShieldCheck size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-xs font-bold mb-1"
                style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}
              >
                Guardián ANI
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#3D2E1F' }}>
                {currentTip}
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-3 gap-2">
            <button
              onClick={handleSpeak}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'var(--warm-green)' }}
            >
              <Volume2 size={14} />
              Escuchar
            </button>
          </div>

          {/* Speech triangle */}
          <div
            className="absolute -bottom-2 right-8 w-4 h-4 rotate-45"
            style={{ background: 'white', borderRight: '3px solid var(--warm-orange)', borderBottom: '3px solid var(--warm-orange)' }}
          />
        </div>
      )}

      {/* Floating ANI button */}
      <button
        onClick={() => { setIsOpen(!isOpen); setHasNewTip(false); }}
        className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce-soft"
        style={{
          background: 'linear-gradient(135deg, var(--warm-orange), var(--warm-coral))',
          boxShadow: '0 6px 24px rgba(255, 140, 66, 0.45)',
        }}
        aria-label="Hablar con ANI"
      >
        {isOpen ? (
          <MessageCircle size={26} className="text-white" />
        ) : (
          <ShieldCheck size={28} className="text-white" />
        )}

        {/* Notification dot */}
        {hasNewTip && !isOpen && (
          <span
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white animate-pulse"
            style={{ background: 'var(--warm-coral)' }}
          >
            !
          </span>
        )}
      </button>
    </div>
  );
}
