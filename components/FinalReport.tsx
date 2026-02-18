'use client';

import { useEffect, useState, useMemo } from 'react';
import { FinalReport as FinalReportType } from '@/lib/types';
import AudioButton from './AudioButton';
import { Trophy, ShieldCheck, CheckCircle, Target, Clock, ArrowRight, Sparkles, Home, Star } from 'lucide-react';

interface FinalReportProps {
  report: FinalReportType;
  onRestart: () => void;
  onHome?: () => void;
}

function ConfettiEffect() {
  const pieces = useMemo(() => {
    const colors = ['#FF8C42', '#FFD166', '#FF6B6B', '#51CF66', '#74C0FC', '#CC5DE8', '#F783AC'];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 2,
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}

export default function FinalReport({ report, onRestart, onHome }: FinalReportProps) {
  const { guardianLevel, indicators, personalizedMessage, achievements, totalDecisions, safeDecisionsCount } = report;
  const [showConfetti, setShowConfetti] = useState(true);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targets = [
      indicators.riskIdentification,
      indicators.safeDecisions,
      indicators.preventiveConsistency,
      indicators.messageComprehension,
    ];
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValues(targets.map(t => Math.round(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [indicators]);

  const getLevelColor = () => {
    switch (guardianLevel.level) {
      case 'super': return 'var(--warm-green)';
      case 'cuidado': return 'var(--warm-sky)';
      case 'aprendiz': return 'var(--warm-yellow)';
      default: return 'var(--warm-orange)';
    }
  };

  const getLevelGradient = () => {
    switch (guardianLevel.level) {
      case 'super': return 'linear-gradient(135deg, #51CF66, #40C057, #2F9E44)';
      case 'cuidado': return 'linear-gradient(135deg, #74C0FC, #4DABF7, #339AF0)';
      case 'aprendiz': return 'linear-gradient(135deg, #FFD166, #FCC419, #FAB005)';
      default: return 'linear-gradient(135deg, #FF8C42, #FF7A2E)';
    }
  };

  const getIndicatorIcon = (value: number) => {
    if (value >= 80) return '🌟';
    if (value >= 60) return '⭐';
    return '✨';
  };

  const barColors = ['var(--warm-sky)', 'var(--warm-green)', 'var(--warm-orange)', 'var(--warm-purple)'];
  const barBgs = ['rgba(116,192,252,0.1)', 'rgba(81,207,102,0.1)', 'rgba(255,140,66,0.1)', 'rgba(204,93,232,0.1)'];
  const indicatorLabels = ['Detectaste peligros', 'Elegiste bien', 'Fuiste consistente', 'Aprendiste a cuidarte'];
  const indicatorEmojis = ['🔍', '✅', '🎯', '🧠'];

  const finalMessage = "Este juego existe para ayudarte a cuidarte en la vida real. Recuerda siempre pedir ayuda a un adulto cuando veas algo peligroso con fuego o calor.";

  return (
    <div className="min-h-screen p-3 sm:p-4" style={{ background: 'linear-gradient(180deg, var(--warm-cream) 0%, var(--warm-peach) 50%, var(--warm-cream) 100%)' }}>
      {showConfetti && <ConfettiEffect />}

      <div className="max-w-4xl w-full mx-auto py-4 sm:py-8">

        {/* ── LEVEL CARD ── */}
        <div className="card mb-5 sm:mb-6 animate-pop-in overflow-hidden relative">
          <div className="absolute inset-0 opacity-5" style={{ background: getLevelGradient() }} />
          <div className="relative text-center py-4 sm:py-6">
            <div className="text-7xl sm:text-8xl mb-3 animate-tada">{guardianLevel.icon}</div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 animate-slide-up" style={{ color: getLevelColor(), fontFamily: 'var(--font-baloo2), sans-serif' }}>
              {guardianLevel.title}
            </h1>
            <div className="flex justify-center gap-1 mb-4">
              {[0,1,2,3,4].map(i => (
                <Star key={i} size={24} className="animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }}
                  fill={i < (guardianLevel.level === 'super' ? 5 : guardianLevel.level === 'cuidado' ? 3 : 1) ? 'var(--warm-yellow)' : 'rgba(0,0,0,0.1)'}
                  stroke={i < (guardianLevel.level === 'super' ? 5 : guardianLevel.level === 'cuidado' ? 3 : 1) ? 'var(--warm-yellow)' : 'rgba(0,0,0,0.1)'}
                />
              ))}
            </div>
            <div className="flex justify-center mb-4 animate-slide-up animate-delay-100">
              <AudioButton text={`${guardianLevel.title}. ${guardianLevel.message}`} />
            </div>
            <p className="text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto animate-slide-up animate-delay-200" style={{ color: '#3D2E1F' }}>
              {guardianLevel.message}
            </p>
          </div>
        </div>

        {/* ── INDICATORS CARD ── */}
        <div className="card mb-5 sm:mb-6 animate-slide-up animate-delay-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 flex items-center gap-3" style={{ color: 'var(--warm-orange)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
            <Target size={32} style={{ color: 'var(--warm-orange)' }} />
            Tus indicadores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6">
            {indicatorLabels.map((label, i) => (
              <div key={label} className="rounded-2xl p-4 sm:p-6 animate-slide-up" style={{ background: barBgs[i], animationDelay: `${(i + 3) * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{indicatorEmojis[i]}</span>
                    <h3 className="text-base sm:text-lg font-semibold" style={{ color: '#3D2E1F' }}>{label}</h3>
                  </div>
                  <span className="text-2xl animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }}>{getIndicatorIcon(animatedValues[i])}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-1 rounded-full h-4 sm:h-5 overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                    <div className="h-full rounded-full transition-all duration-300 relative overflow-hidden" style={{ width: `${animatedValues[i]}%`, background: barColors[i] }}>
                      <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(90deg, transparent, white, transparent)', backgroundSize: '200% 100%', animation: 'gradient-shift 2s linear infinite' }} />
                    </div>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold min-w-[3rem] text-right" style={{ color: barColors[i] }}>{animatedValues[i]}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-4 sm:p-6" style={{ background: 'rgba(255, 209, 102, 0.1)' }}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: 'var(--warm-orange)' }}>{safeDecisionsCount}/{totalDecisions}</div>
                <p className="text-sm" style={{ color: '#7A6B5D' }}>Decisiones seguras</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-1 flex items-center justify-center gap-2" style={{ color: 'var(--warm-green)' }}>
                  <Clock size={28} />
                  {indicators.averageReactionTime}s
                </div>
                <p className="text-sm" style={{ color: '#7A6B5D' }}>Tiempo promedio</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACHIEVEMENTS CARD ── */}
        <div className="card mb-5 sm:mb-6 animate-slide-up animate-delay-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 flex items-center gap-3" style={{ color: 'var(--warm-yellow)', fontFamily: 'var(--font-baloo2), sans-serif' }}>
            <Trophy size={32} style={{ color: 'var(--warm-yellow)' }} />
            Tus logros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="rounded-xl p-3 sm:p-4 flex items-center gap-3 animate-slide-up" style={{ background: 'rgba(255, 209, 102, 0.08)', border: '2px solid rgba(255, 209, 102, 0.25)', animationDelay: `${(index + 5) * 0.1}s` }}>
                <CheckCircle className="flex-shrink-0" size={28} style={{ color: 'var(--warm-green)' }} />
                <span className="text-base sm:text-lg font-semibold" style={{ color: '#3D2E1F' }}>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── PERSONALIZED MESSAGE CARD ── */}
        <div className="card mb-5 sm:mb-6 animate-slide-up animate-delay-400">
          <div className="rounded-2xl p-5 sm:p-8" style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.06), rgba(81,207,102,0.06))', border: '3px solid var(--warm-orange)' }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 mt-1 flex-shrink-0 animate-sparkle" style={{ color: 'var(--warm-orange)' }} />
              <div className="flex-1">
                <p className="text-lg sm:text-2xl leading-relaxed mb-3 sm:mb-4" style={{ color: '#3D2E1F' }}>
                  {personalizedMessage}
                </p>
                <p className="text-base sm:text-xl leading-relaxed font-semibold" style={{ color: '#5A3E1B' }}>
                  {finalMessage}
                </p>
              </div>
              <AudioButton text={`${personalizedMessage} ${finalMessage}`} />
            </div>
          </div>
        </div>

        {/* ── ACTION BUTTONS ── */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-slide-up animate-delay-500">
          <button onClick={onRestart} className="btn-primary animate-pulse-glow flex items-center justify-center gap-3">
            <ShieldCheck size={24} />
            Jugar otra historia
            <ArrowRight size={22} />
          </button>
          {onHome && (
            <button onClick={onHome} className="btn-secondary flex items-center justify-center gap-3">
              <Home size={22} />
              Volver al inicio
            </button>
          )}
        </div>

        {/* ── FOOTER MESSAGE ── */}
        <div className="text-center mt-6 sm:mt-8 animate-slide-up animate-delay-700">
          <p className="text-lg sm:text-2xl font-bold italic" style={{ color: '#3D2E1F' }}>
            No enseñamos a tener miedo al fuego.<br />
            Enseñamos a cuidarse para la vida real.
          </p>
        </div>
      </div>
    </div>
  );
}
