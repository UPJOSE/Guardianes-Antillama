'use client';

import { useState, useEffect } from 'react';
import { Story, StoryDecisionPoint, Decision, UserDecision } from '@/lib/types';
import AudioButton from './AudioButton';
import StoryIllustration from './StoryIllustration';
import { Clock, BookOpen, AlertTriangle, HelpCircle, ArrowRight, Sparkles, User, Star } from 'lucide-react';

const CATEGORY_COLORS: Record<string, { accent: string; light: string; border: string }> = {
  agua_caliente: { accent: '#FF8C42', light: 'rgba(255,140,66,0.08)', border: 'var(--warm-orange)' },
  cocina: { accent: '#FF6B6B', light: 'rgba(255,107,107,0.06)', border: 'var(--warm-coral)' },
  electricidad: { accent: '#74C0FC', light: 'rgba(116,192,252,0.08)', border: 'var(--warm-sky)' },
  fuego_pequeno: { accent: '#CC5DE8', light: 'rgba(204,93,232,0.06)', border: 'var(--warm-purple)' },
  productos_quimicos: { accent: '#AB47BC', light: 'rgba(171,71,188,0.07)', border: '#AB47BC' },
  sol_calor: { accent: '#F9A825', light: 'rgba(249,168,37,0.08)', border: '#F9A825' },
  pirotecnia: { accent: '#FF7043', light: 'rgba(255,112,67,0.07)', border: '#FF7043' },
};

const OPTION_COLORS = ['var(--warm-sky)', 'var(--warm-purple)', 'var(--warm-green)'];

interface StoryViewerProps {
  story: Story;
  onComplete: (decisions: UserDecision[]) => void;
}

export default function StoryViewer({ story, onComplete }: StoryViewerProps) {
  const [currentPhase, setCurrentPhase] = useState<'intro' | 'context' | 'risk' | 'decision'>('intro');
  const [currentDecisionIndex, setCurrentDecisionIndex] = useState(0);
  const [userDecisions, setUserDecisions] = useState<UserDecision[]>([]);
  const [decisionStartTime, setDecisionStartTime] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const currentDecisionPoint = story.decisionPoints[currentDecisionIndex];
  const theme = CATEGORY_COLORS[story.category] || CATEGORY_COLORS.agua_caliente;

  useEffect(() => {
    if (currentPhase === 'decision') setDecisionStartTime(Date.now());
  }, [currentPhase, currentDecisionIndex]);

  useEffect(() => { setAnimKey(k => k + 1); }, [currentPhase, currentDecisionIndex, showFeedback]);

  const handleNextPhase = () => {
    if (currentPhase === 'intro') setCurrentPhase('context');
    else if (currentPhase === 'context') setCurrentPhase('risk');
    else if (currentPhase === 'risk') setCurrentPhase('decision');
  };

  const handleDecisionSelect = (decision: Decision) => {
    const timeTaken = (Date.now() - decisionStartTime) / 1000;
    const userDecision: UserDecision = {
      story_id: story.id,
      decision_point_id: currentDecisionPoint.id,
      decision_id: decision.id,
      risk_level: decision.riskLevel,
      user_choice: decision.type,
      time_taken: timeTaken,
      timestamp: Date.now()
    };
    setUserDecisions([...userDecisions, userDecision]);
    setSelectedDecision(decision);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedDecision(null);
    if (currentDecisionIndex < story.decisionPoints.length - 1) {
      setCurrentDecisionIndex(currentDecisionIndex + 1);
      setCurrentPhase('decision');
    } else {
      onComplete(userDecisions);
    }
  };

  const progressPercent = ((currentDecisionIndex + (showFeedback ? 1 : 0)) / story.decisionPoints.length) * 100;

  const ProgressBar = () => (
    <div className="mb-4 sm:mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accent }}>
          {story.title}
        </span>
        <span className="text-xs font-semibold" style={{ color: '#7A6B5D' }}>
          {Math.round(progressPercent)}%
        </span>
      </div>
      <div className="rounded-full h-3 sm:h-4 overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-700 relative overflow-hidden"
          style={{ width: `${progressPercent}%`, background: `linear-gradient(90deg, ${theme.accent}, var(--warm-yellow))` }}
        >
          <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)', backgroundSize: '200% 100%', animation: 'gradient-shift 2s linear infinite' }} />
        </div>
      </div>
      <div className="flex justify-between mt-1.5">
        {story.decisionPoints.map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className="h-2.5 w-2.5 rounded-full transition-all duration-300"
              style={{
                background: i < currentDecisionIndex + (showFeedback ? 1 : 0) ? theme.accent : i === currentDecisionIndex && !showFeedback ? 'var(--warm-yellow)' : 'rgba(0,0,0,0.1)',
                transform: i === currentDecisionIndex && !showFeedback ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const CharacterBadge = () => (
    <div className="flex items-center gap-3 mb-4 animate-slide-up">
      <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-md" style={{ background: `linear-gradient(135deg, ${theme.accent}, var(--warm-yellow))` }}>
        <User size={24} className="text-white" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#3D2E1F', fontFamily: 'var(--font-baloo2), sans-serif' }}>
          {story.characterName}, {story.characterAge} años
        </h3>
        <p className="text-xs sm:text-sm" style={{ color: '#7A6B5D' }}>{story.title}</p>
      </div>
    </div>
  );

  // ── FEEDBACK SCREEN ──
  if (showFeedback && selectedDecision) {
    const isSafe = selectedDecision.type === 'SEGURA';
    const isRisky = selectedDecision.type === 'RIESGOSA';
    const feedbackColor = isSafe ? 'var(--warm-green)' : isRisky ? '#D4930D' : 'var(--warm-coral)';
    const feedbackBg = isSafe ? 'rgba(81,207,102,0.1)' : isRisky ? 'rgba(255,209,102,0.12)' : 'rgba(255,107,107,0.1)';
    const feedbackEmoji = isSafe ? '🌟' : isRisky ? '⚠️' : '🚨';
    const feedbackTitle = isSafe ? '¡Excelente decisión!' : isRisky ? '¡Ten cuidado!' : '¡Eso es peligroso!';
    const feedbackBorder = isSafe ? 'var(--warm-green)' : isRisky ? 'var(--warm-yellow)' : 'var(--warm-coral)';

    return (
      <div className={`min-h-screen flex items-center justify-center p-3 sm:p-4 story-bg-${story.category}`}>
        <div className="max-w-3xl w-full" key={animKey}>
          <ProgressBar />
          <div className="card animate-pop-in" style={{ border: `3px solid ${feedbackBorder}` }}>
            <div className="text-center mb-6">
              <div className={`text-6xl sm:text-7xl mb-3 ${isSafe ? 'animate-tada' : isRisky ? 'animate-wiggle' : 'animate-shake'}`}>{feedbackEmoji}</div>
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: feedbackColor, fontFamily: 'var(--font-baloo2), sans-serif' }}>
                {feedbackTitle}
              </h2>
              {isSafe && (
                <div className="flex justify-center gap-1 mt-2">
                  {[0,1,2].map(i => <Star key={i} size={20} fill="var(--warm-yellow)" stroke="var(--warm-yellow)" className="animate-sparkle" style={{ animationDelay: `${i * 0.15}s` }} />)}
                </div>
              )}
            </div>

            <div className="rounded-2xl p-4 sm:p-6 mb-6 animate-slide-up" style={{ background: feedbackBg, border: `2px solid ${feedbackBorder}30` }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-1">
                  <p className="text-lg sm:text-xl leading-relaxed" style={{ color: '#3D2E1F' }}>
                    {selectedDecision.feedback}
                  </p>
                </div>
                <AudioButton text={selectedDecision.feedback} />
              </div>
            </div>

            <div className="flex justify-center animate-slide-up animate-delay-200">
              <button onClick={handleContinue} className="btn-primary flex items-center gap-3 animate-glow-ring">
                {currentDecisionIndex < story.decisionPoints.length - 1 ? 'Continuar historia' : '🎉 Ver mi reporte'}
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── STORY PHASES ──
  return (
    <div className={`min-h-screen flex items-center justify-center p-3 sm:p-4 story-bg-${story.category}`} key={animKey}>
      <div className="max-w-4xl w-full">
        <ProgressBar />

        <div className="card animate-pop-in overflow-hidden">
          {/* Illustration header */}
          <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-3xl" style={{ background: theme.light }}>
            <StoryIllustration category={story.category} className="w-full h-32 sm:h-44 md:h-52" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, white 0%, transparent 40%)' }} />
          </div>

          {currentPhase === 'intro' && (
            <>
              <CharacterBadge />
              <div className="rounded-2xl p-5 sm:p-8 mb-6 animate-slide-up animate-delay-100" style={{ background: theme.light, border: `2px solid ${theme.accent}20` }}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-1">
                    <p className="text-lg sm:text-2xl leading-relaxed" style={{ color: '#3D2E1F' }}>
                      {story.introduction}
                    </p>
                  </div>
                  <AudioButton text={story.introduction} />
                </div>
              </div>
              <div className="flex justify-center animate-slide-up animate-delay-200">
                <button onClick={handleNextPhase} className="btn-primary flex items-center gap-3 animate-glow-ring">
                  <BookOpen size={22} />
                  Escuchar la historia
                  <ArrowRight size={22} />
                </button>
              </div>
            </>
          )}

          {currentPhase === 'context' && (
            <>
              <CharacterBadge />
              <div className="rounded-2xl p-5 sm:p-8 mb-6 animate-slide-up" style={{ background: 'rgba(255, 209, 102, 0.1)', border: '2px solid rgba(255,209,102,0.2)' }}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 mt-1 flex-shrink-0 animate-sparkle" style={{ color: 'var(--warm-yellow)' }} />
                  <div className="flex-1">
                    <p className="text-lg sm:text-2xl leading-relaxed" style={{ color: '#3D2E1F' }}>
                      {story.context}
                    </p>
                  </div>
                  <AudioButton text={story.context} />
                </div>
              </div>
              <div className="flex justify-center animate-slide-up animate-delay-100">
                <button onClick={handleNextPhase} className="btn-secondary flex items-center gap-3">
                  Continuar
                  <ArrowRight size={22} />
                </button>
              </div>
            </>
          )}

          {currentPhase === 'risk' && (
            <>
              <CharacterBadge />
              <div className="rounded-2xl p-5 sm:p-8 mb-6 animate-slide-up animate-rainbow-border" style={{ background: 'rgba(255, 107, 107, 0.06)', borderWidth: '3px', borderStyle: 'solid' }}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <AlertTriangle className="h-7 w-7 sm:h-8 sm:w-8 mt-1 flex-shrink-0 animate-shake" style={{ color: 'var(--warm-coral)' }} />
                  <div className="flex-1">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--warm-coral)' }}>⚡ Situación de riesgo</h3>
                    <p className="text-lg sm:text-2xl leading-relaxed" style={{ color: '#3D2E1F' }}>
                      {story.riskAppearance}
                    </p>
                  </div>
                  <AudioButton text={story.riskAppearance} />
                </div>
              </div>
              <div className="flex justify-center animate-slide-up animate-delay-100">
                <button onClick={handleNextPhase} className="btn-primary flex items-center gap-3 animate-pulse-glow">
                  <HelpCircle size={24} />
                  ¿Qué hago?
                </button>
              </div>
            </>
          )}

          {currentPhase === 'decision' && currentDecisionPoint && (
            <>
              <div className="mb-5 sm:mb-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 animate-slide-up">
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: theme.accent, fontFamily: 'var(--font-baloo2), sans-serif' }}>
                    Decisión {currentDecisionIndex + 1} de {story.decisionPoints.length}
                  </h2>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(255,209,102,0.15)', color: '#7A6B5D' }}>
                    <Clock size={16} />
                    <span className="text-xs font-semibold">Piensa bien</span>
                  </div>
                </div>

                {currentDecisionPoint.context && (
                  <div className="rounded-xl p-3 sm:p-4 mb-4 animate-slide-up" style={{ background: 'rgba(255, 209, 102, 0.08)' }}>
                    <p className="text-base sm:text-lg" style={{ color: '#5A3E1B' }}>{currentDecisionPoint.context}</p>
                  </div>
                )}

                <div className="rounded-2xl p-4 sm:p-6 mb-5 sm:mb-6 animate-slide-up animate-delay-100" style={{ background: theme.light, border: `3px solid ${theme.accent}` }}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <HelpCircle className="h-7 w-7 sm:h-8 sm:w-8 mt-1 flex-shrink-0 animate-bounce-soft" style={{ color: theme.accent }} />
                    <div className="flex-1">
                      <p className="text-lg sm:text-2xl font-semibold" style={{ color: '#3D2E1F' }}>
                        {currentDecisionPoint.question}
                      </p>
                    </div>
                    <AudioButton text={currentDecisionPoint.question} />
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {currentDecisionPoint.options.map((decision, i) => (
                  <button
                    key={decision.id}
                    onClick={() => handleDecisionSelect(decision)}
                    className="group w-full p-4 sm:p-5 rounded-2xl text-left text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl animate-slide-up"
                    style={{
                      animationDelay: `${(i + 2) * 0.1}s`,
                      background: 'white',
                      border: `3px solid ${OPTION_COLORS[i % 3]}`,
                      color: '#3D2E1F',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.accent;
                      e.currentTarget.style.background = theme.light;
                      e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = OPTION_COLORS[i % 3];
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full text-white text-sm sm:text-base font-bold" style={{ background: OPTION_COLORS[i % 3] }}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1">{decision.text}</span>
                      <AudioButton text={decision.text} size={18} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
