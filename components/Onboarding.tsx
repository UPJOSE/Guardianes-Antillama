'use client';

import { ShieldCheck, ArrowRight, Sparkles, Heart } from 'lucide-react';
import AudioButton from './AudioButton';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const welcomeText = "¡Hola! Soy el Guardián ANI, tu guía en esta aventura de aprendizaje.";
  const instructionText = "Aquí no hay respuestas malas. Aquí aprendemos a cuidarnos.";
  const howToPlayText = "Vas a escuchar historias reales de niños como tú. En cada historia, tendrás que tomar decisiones. Piensa bien antes de elegir, pero recuerda: estás aquí para aprender, no para tener miedo.";
  const purposeText = "Este juego existe para enseñarte a prevenir quemaduras y a cuidarte en la vida real. Cuando termines, sabrás cómo actuar de forma segura.";

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(180deg, var(--warm-cream) 0%, var(--warm-peach) 100%)' }}>
      <div className="max-w-3xl w-full">
        <div className="card animate-pop-in">
          <div className="text-center mb-8">
            <div className="inline-block rounded-full p-6 mb-4 animate-float" style={{ background: 'var(--warm-orange)' }}>
              <ShieldCheck className="text-white" size={80} />
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
              Guardián ANI
            </h1>
            <p className="text-xl" style={{ color: '#7A6B5D' }}>Tu guía de prevención</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-6 border-3 animate-slide-up" style={{ background: 'rgba(255, 140, 66, 0.08)', borderColor: 'var(--warm-orange)', borderWidth: '3px', borderStyle: 'solid' }}>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-2xl font-semibold mb-3" style={{ color: 'var(--warm-orange)' }}>
                    {welcomeText}
                  </p>
                  <p className="text-xl" style={{ color: '#3D2E1F' }}>
                    {instructionText}
                  </p>
                </div>
                <AudioButton text={`${welcomeText} ${instructionText}`} />
              </div>
            </div>

            <div className="rounded-2xl p-6 animate-slide-up animate-delay-100" style={{ background: 'rgba(255, 209, 102, 0.15)' }}>
              <div className="flex items-start gap-4">
                <Sparkles className="h-8 w-8 mt-1 animate-sparkle flex-shrink-0" style={{ color: 'var(--warm-yellow)' }} />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#D4930D', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                    ¿Cómo jugar?
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: '#5A3E1B' }}>
                    {howToPlayText}
                  </p>
                </div>
                <AudioButton text={howToPlayText} />
              </div>
            </div>

            <div className="rounded-2xl p-6 animate-slide-up animate-delay-200" style={{ background: 'rgba(81, 207, 102, 0.1)' }}>
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 mt-1 animate-bounce-soft flex-shrink-0" style={{ color: 'var(--warm-green)' }} />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--warm-green)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
                    ¿Para qué es este juego?
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: '#2B6E3F' }}>
                    {purposeText}
                  </p>
                </div>
                <AudioButton text={purposeText} />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center animate-slide-up animate-delay-300">
            <button
              onClick={onComplete}
              className="btn-primary animate-pulse-glow flex items-center gap-3"
            >
              Estoy listo para empezar
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
