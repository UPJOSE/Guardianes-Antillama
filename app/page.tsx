'use client';

import { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import Onboarding from '@/components/Onboarding';
import StoryViewer from '@/components/StoryViewer';
import FinalReport from '@/components/FinalReport';
import AniBubble from '@/components/AniBubble';
import { getRandomStory } from '@/lib/stories/storyDatabase';
import { EvaluationEngine } from '@/lib/evaluation/evaluationEngine';
import { AudioUtils } from '@/lib/utils/audioUtils';
import { Story, UserDecision, FinalReport as FinalReportType } from '@/lib/types';

type GamePhase = 'landing' | 'onboarding' | 'story' | 'report';

export default function Home() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('landing');
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [finalReport, setFinalReport] = useState<FinalReportType | null>(null);

  useEffect(() => {
    AudioUtils.initialize();
  }, []);

  const handleStartAdventure = () => {
    setGamePhase('onboarding');
  };

  const handleOnboardingComplete = () => {
    const story = getRandomStory();
    setCurrentStory(story);
    setGamePhase('story');
  };

  const handleStoryComplete = (decisions: UserDecision[]) => {
    const evaluationEngine = new EvaluationEngine(decisions);
    const report = evaluationEngine.generateFinalReport();
    setFinalReport(report);
    setGamePhase('report');
  };

  const handleRestart = () => {
    const story = getRandomStory();
    setCurrentStory(story);
    setFinalReport(null);
    setGamePhase('story');
  };

  const handleBackToHome = () => {
    setCurrentStory(null);
    setFinalReport(null);
    setGamePhase('landing');
  };

  return (
    <main>
      {gamePhase === 'landing' && (
        <LandingPage onStart={handleStartAdventure} />
      )}

      {gamePhase === 'onboarding' && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}

      {gamePhase === 'story' && currentStory && (
        <StoryViewer story={currentStory} onComplete={handleStoryComplete} />
      )}

      {gamePhase === 'report' && finalReport && (
        <FinalReport report={finalReport} onRestart={handleRestart} onHome={handleBackToHome} />
      )}

      <AniBubble phase={gamePhase} />
    </main>
  );
}
