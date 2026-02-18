export type RiskLevel = 'bajo' | 'medio' | 'alto';

export type DecisionType = 'SEGURA' | 'RIESGOSA' | 'MUY_RIESGOSA';

export interface Decision {
  id: string;
  text: string;
  type: DecisionType;
  feedback: string;
  riskLevel: RiskLevel;
}

export interface StoryDecisionPoint {
  id: string;
  question: string;
  context: string;
  options: Decision[];
}

export interface Story {
  id: string;
  title: string;
  characterName: string;
  characterAge: number;
  introduction: string;
  context: string;
  riskAppearance: string;
  decisionPoints: StoryDecisionPoint[];
  category: 'agua_caliente' | 'cocina' | 'electricidad' | 'fuego_pequeno' | 'productos_quimicos' | 'sol_calor' | 'pirotecnia';
}

export interface UserDecision {
  story_id: string;
  decision_point_id: string;
  decision_id: string;
  risk_level: RiskLevel;
  user_choice: DecisionType;
  time_taken: number;
  timestamp: number;
}

export interface EvaluationIndicators {
  riskIdentification: number;
  safeDecisions: number;
  preventiveConsistency: number;
  messageComprehension: number;
  averageReactionTime: number;
}

export interface GuardianLevel {
  level: 'aprendiz' | 'cuidado' | 'super';
  title: string;
  message: string;
  icon: string;
}

export interface FinalReport {
  guardianLevel: GuardianLevel;
  indicators: EvaluationIndicators;
  personalizedMessage: string;
  achievements: string[];
  totalDecisions: number;
  safeDecisionsCount: number;
}

export interface GameState {
  currentStory: Story | null;
  currentDecisionPointIndex: number;
  userDecisions: UserDecision[];
  startTime: number;
  isComplete: boolean;
}
