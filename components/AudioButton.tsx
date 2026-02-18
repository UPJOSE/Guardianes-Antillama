'use client';

import { useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { AudioUtils } from '@/lib/utils/audioUtils';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: number;
}

export default function AudioButton({ text, className = '', size = 22 }: AudioButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleClick = useCallback(() => {
    if (isSpeaking) {
      AudioUtils.stop();
      setIsSpeaking(false);
    } else {
      AudioUtils.speak(text, {
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
      });
    }
  }, [text, isSpeaking]);

  return (
    <button
      onClick={handleClick}
      className={`relative flex-shrink-0 inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${className}`}
      style={{
        width: size + 20,
        height: size + 20,
        background: isSpeaking ? 'var(--warm-coral)' : 'var(--warm-green)',
        boxShadow: isSpeaking
          ? '0 0 16px rgba(255,107,107,0.5)'
          : '0 4px 12px rgba(81,207,102,0.35)',
      }}
      aria-label={isSpeaking ? 'Detener lectura' : 'Escuchar texto'}
      title={isSpeaking ? 'Detener' : 'Escuchar'}
    >
      {isSpeaking ? (
        <VolumeX size={size} className="text-white" />
      ) : (
        <Volume2 size={size} className="text-white" />
      )}
      {isSpeaking && (
        <>
          <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: 'var(--warm-coral)' }} />
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full animate-pulse" style={{ background: 'var(--warm-yellow)' }} />
        </>
      )}
    </button>
  );
}
