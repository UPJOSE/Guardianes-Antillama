import { UserDecision, EvaluationIndicators, GuardianLevel, FinalReport } from '../types';

export class EvaluationEngine {
  private decisions: UserDecision[];

  constructor(decisions: UserDecision[]) {
    this.decisions = decisions;
  }

  calculateIndicators(): EvaluationIndicators {
    const totalDecisions = this.decisions.length;
    
    if (totalDecisions === 0) {
      return {
        riskIdentification: 0,
        safeDecisions: 0,
        preventiveConsistency: 0,
        messageComprehension: 0,
        averageReactionTime: 0
      };
    }

    const safeDecisions = this.decisions.filter(d => d.user_choice === 'SEGURA').length;
    const riskyDecisions = this.decisions.filter(d => d.user_choice === 'RIESGOSA').length;
    const veryRiskyDecisions = this.decisions.filter(d => d.user_choice === 'MUY_RIESGOSA').length;

    const highRiskSituations = this.decisions.filter(d => d.risk_level === 'alto').length;
    const safeInHighRisk = this.decisions.filter(d => 
      d.risk_level === 'alto' && d.user_choice === 'SEGURA'
    ).length;

    const totalReactionTime = this.decisions.reduce((sum, d) => sum + d.time_taken, 0);
    const averageReactionTime = totalReactionTime / totalDecisions;

    const riskIdentification = highRiskSituations > 0 
      ? (safeInHighRisk / highRiskSituations) * 100 
      : 100;

    const safeDecisionsPercent = (safeDecisions / totalDecisions) * 100;

    const consistencyScore = this.calculateConsistency();

    const comprehensionScore = this.calculateComprehension(
      safeDecisions,
      riskyDecisions,
      veryRiskyDecisions,
      totalDecisions
    );

    return {
      riskIdentification: Math.round(riskIdentification),
      safeDecisions: Math.round(safeDecisionsPercent),
      preventiveConsistency: Math.round(consistencyScore),
      messageComprehension: Math.round(comprehensionScore),
      averageReactionTime: Math.round(averageReactionTime * 10) / 10
    };
  }

  private calculateConsistency(): number {
    if (this.decisions.length < 2) return 100;

    let consistentChoices = 0;
    const totalPairs = this.decisions.length - 1;

    for (let i = 0; i < this.decisions.length - 1; i++) {
      const current = this.decisions[i];
      const next = this.decisions[i + 1];

      if (current.user_choice === 'SEGURA' && next.user_choice === 'SEGURA') {
        consistentChoices++;
      } else if (current.user_choice === 'SEGURA' && next.user_choice !== 'MUY_RIESGOSA') {
        consistentChoices += 0.5;
      }
    }

    return (consistentChoices / totalPairs) * 100;
  }

  private calculateComprehension(
    safe: number,
    risky: number,
    veryRisky: number,
    total: number
  ): number {
    const safeWeight = 1.0;
    const riskyWeight = 0.3;
    const veryRiskyWeight = 0.0;

    const weightedScore = (
      (safe * safeWeight) + 
      (risky * riskyWeight) + 
      (veryRisky * veryRiskyWeight)
    ) / total;

    return weightedScore * 100;
  }

  determineGuardianLevel(indicators: EvaluationIndicators): GuardianLevel {
    const averageScore = (
      indicators.riskIdentification +
      indicators.safeDecisions +
      indicators.preventiveConsistency +
      indicators.messageComprehension
    ) / 4;

    if (averageScore >= 80) {
      return {
        level: 'super',
        title: 'Súper Guardián AntiLlama',
        message: '¡Increíble! Demostraste que sabes muy bien cómo cuidarte del fuego y el calor. Tus decisiones fueron muy seguras y pensaste antes de actuar.',
        icon: '🏆'
      };
    } else if (averageScore >= 60) {
      return {
        level: 'cuidado',
        title: 'Guardián del Cuidado',
        message: '¡Muy bien! Aprendiste cosas importantes sobre cómo prevenir quemaduras. Sigue practicando y siempre pide ayuda a un adulto cuando no estés seguro.',
        icon: '🛡️'
      };
    } else {
      return {
        level: 'aprendiz',
        title: 'Guardián Aprendiz',
        message: '¡Buen trabajo al completar las historias! Recuerda: siempre pide ayuda a un adulto cuando veas algo peligroso con fuego o calor. Así te cuidas mejor.',
        icon: '⭐'
      };
    }
  }

  generatePersonalizedMessage(indicators: EvaluationIndicators): string {
    const messages: string[] = [];

    if (indicators.safeDecisions >= 80) {
      messages.push('Tomaste decisiones muy seguras');
    } else if (indicators.safeDecisions >= 60) {
      messages.push('Hiciste varias elecciones seguras');
    }

    if (indicators.riskIdentification >= 80) {
      messages.push('reconociste muy bien los peligros');
    } else if (indicators.riskIdentification >= 60) {
      messages.push('identificaste algunos peligros importantes');
    }

    if (indicators.preventiveConsistency >= 70) {
      messages.push('fuiste consistente en cuidarte');
    }

    if (messages.length === 0) {
      return 'Completaste las historias y aprendiste cosas nuevas sobre prevención. Recuerda siempre pedir ayuda a un adulto.';
    }

    return `¡Muy bien! ${messages.join(', ')}. Sigue así en la vida real.`;
  }

  generateAchievements(indicators: EvaluationIndicators): string[] {
    const achievements: string[] = [];

    if (indicators.safeDecisions >= 80) {
      achievements.push('Maestro de decisiones seguras');
    }

    if (indicators.riskIdentification >= 80) {
      achievements.push('Detector de peligros');
    }

    if (indicators.preventiveConsistency >= 80) {
      achievements.push('Guardián consistente');
    }

    if (indicators.averageReactionTime < 10) {
      achievements.push('Pensador rápido y seguro');
    }

    if (indicators.messageComprehension >= 80) {
      achievements.push('Comprensión total de prevención');
    }

    if (achievements.length === 0) {
      achievements.push('Completó todas las historias');
      achievements.push('Aprendiz de prevención');
    }

    return achievements;
  }

  generateFinalReport(): FinalReport {
    const indicators = this.calculateIndicators();
    const guardianLevel = this.determineGuardianLevel(indicators);
    const personalizedMessage = this.generatePersonalizedMessage(indicators);
    const achievements = this.generateAchievements(indicators);

    const safeDecisionsCount = this.decisions.filter(d => d.user_choice === 'SEGURA').length;

    return {
      guardianLevel,
      indicators,
      personalizedMessage,
      achievements,
      totalDecisions: this.decisions.length,
      safeDecisionsCount
    };
  }
}
