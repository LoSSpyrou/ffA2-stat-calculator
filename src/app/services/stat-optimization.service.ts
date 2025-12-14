import { Injectable } from '@angular/core';
import {
  BASE_LEVEL,
  getPrinciple,
  getRequiredLevels,
  MAX_LEVEL,
  validateOptimizationFeasibility,
  ValidationResult,
} from '../constants/functions';
import { Job } from '../models/job';
import { CharacterStats, Stat } from '../models/stats';
import { calculateStats } from '../util/job_util';

export interface OptimizationResult {
  levelGuide: {
    firstStats: CharacterStats;
    secondStats: CharacterStats;
  };
  primaryJob: Job;
  secondaryJob: Job;
  primaryLevels: number;
  secondaryLevels: number;
  principle: number;
}

export interface LevelPlanningResult {
  primaryLevels: number;
  secondaryLevels: number;
  principle: number;
  isValid: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StatOptimizationService {
  constructor() {}

  /**
   * Calculates optimal job progression for stat optimization
   */
  optimizeStats(
    currentStats: CharacterStats,
    primaryStat: Stat,
    secondaryStat: Stat,
    primaryJob: Job,
    secondaryJob: Job
  ): OptimizationResult {
    // Calculate principle for the primary stat
    const principle = getPrinciple(
      currentStats.stats[primaryStat],
      primaryStat === Stat.SPD
    );

    // Calculate required levels for optimal progression
    const primaryLevels = getRequiredLevels(
      principle,
      primaryJob.rate[primaryStat],
      secondaryJob.rate[primaryStat],
      currentStats.level,
      primaryStat === Stat.SPD
    );

    const secondaryLevels = MAX_LEVEL - currentStats.level - primaryLevels;

    // Calculate final stats after progression
    const firstStats = calculateStats(
      primaryJob,
      Math.round(primaryLevels),
      currentStats
    );

    const secondStats = calculateStats(
      secondaryJob,
      Math.round(secondaryLevels),
      firstStats
    );

    return {
      levelGuide: {
        firstStats,
        secondStats,
      },
      primaryJob,
      secondaryJob,
      primaryLevels,
      secondaryLevels,
      principle,
    };
  }

  /**
   * Plans level distribution for optimization
   */
  planLevelDistribution(
    currentStats: CharacterStats,
    primaryStat: Stat,
    primaryJob: Job,
    secondaryJob: Job
  ): LevelPlanningResult {
    const principle = getPrinciple(
      currentStats.stats[primaryStat],
      primaryStat === Stat.SPD
    );

    const primaryLevels = getRequiredLevels(
      principle,
      primaryJob.rate[primaryStat],
      secondaryJob.rate[primaryStat],
      currentStats.level,
      primaryStat === Stat.SPD
    );

    const secondaryLevels = MAX_LEVEL - currentStats.level - primaryLevels;

    // Validate the level distribution
    const isValid =
      primaryLevels >= 0 &&
      secondaryLevels >= 0 &&
      primaryLevels + secondaryLevels + currentStats.level === MAX_LEVEL;

    return {
      primaryLevels,
      secondaryLevels,
      principle,
      isValid,
      error: isValid ? undefined : 'Invalid level distribution calculated',
    };
  }

  /**
   * Calculates stats at a target level for a specific job
   */
  calculateStatsAtTargetLevel(
    job: Job,
    targetLevel: number,
    baseStats?: CharacterStats
  ): CharacterStats {
    return calculateStats(job, targetLevel, baseStats);
  }

  /**
   * Sets base stats from a selected job at base level
   */
  setBaseStatsFromJob(
    job: Job,
    baseLevel: number = BASE_LEVEL
  ): CharacterStats {
    return calculateStats(job, baseLevel);
  }

  /**
   * Validates if an optimization is feasible
   */
  validateOptimization(
    currentLevel: number,
    primaryStat: Stat,
    currentValue: number,
    targetValue: number
  ): ValidationResult {
    return validateOptimizationFeasibility(
      currentLevel,
      primaryStat,
      currentValue,
      targetValue
    );
  }
}
