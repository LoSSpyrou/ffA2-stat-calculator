import { Job } from '../models/job';
import { Stat } from '../models/stats';

export const MAX_LEVEL = 99;
export const MAX_STAT = 999;
export const MAX_SPD = 149;
export const BASE_LEVEL = 30;

// Speed mechanics constants
export const SPEED_MECHANICS = {
  MAX_SPD: 149,
  MIN_SPD_RATE: 34, // Lowest SPD rate (Templar)
  MAX_SPD_RATE: 99, // Highest SPD rate (Chocobo Rider)
  AVERAGE_SPD_RATE: 55, // Rough average across all jobs
} as const;

// Validation constants
export const VALIDATION_LIMITS = {
  MIN_STAT: 0,
  MAX_STAT: 999,
  MAX_SPD: 149,
  MIN_LEVEL: 1,
  MAX_LEVEL: 99,
  MIN_BASE_LEVEL: 1,
  MAX_BASE_LEVEL: 50, // Reasonable recruitment level limit
} as const;

// Stat-specific validation rules
export const STAT_VALIDATION = {
  HP: { min: 1, max: 999 }, // HP cannot be 0
  MP: { min: 0, max: 999 },
  WATK: { min: 1, max: 999 }, // Attack cannot be 0
  WDEF: { min: 1, max: 999 }, // Defense cannot be 0
  MATK: { min: 0, max: 999 },
  MDEF: { min: 1, max: 999 }, // Magic defense cannot be 0
  SPD: { min: 1, max: 149 }, // Speed has different max and cannot be 0
} as const;

export function calculatePrinciple(
  base: number,
  rate: number,
  level: number,
  isSpd = false
): number {
  if (isSpd) {
    // For SPD: calculate expected growth with percentage-based mechanics
    const chancePerLevel = rate / 100;
    const expectedGrowth = level * chancePerLevel;
    return MAX_SPD - base - expectedGrowth;
  }
  return MAX_STAT - base - level * rate;
}

export function getPrinciple(value: number, isSpd = false) {
  return isSpd ? MAX_SPD - value : MAX_STAT - value;
}

export function getRequiredLevels(
  principle: number,
  rate1: number,
  rate2: number,
  level: number,
  isSpd = false
) {
  if (isSpd) {
    // For SPD: convert percentage rates to decimal for calculation
    const chance1 = rate1 / 100;
    const chance2 = rate2 / 100;
    const remainingLevels = MAX_LEVEL - level;

    // Handle case where both jobs have the same SPD rate
    if (Math.abs(chance1 - chance2) < 0.001) {
      return remainingLevels / 2; // Split levels evenly if rates are identical
    }

    return (principle - remainingLevels * chance2) / (chance1 - chance2);
  }

  // Handle case where both jobs have the same stat rate
  if (rate1 === rate2) {
    return (MAX_LEVEL - level) / 2; // Split levels evenly if rates are identical
  }

  const requiredLevels =
    (principle - (MAX_LEVEL - level) * rate2) / (rate1 - rate2);
  return requiredLevels;
}

export function getJobWithBestRate(
  jobs: Job[],
  stat: Stat,
  secondaryStat?: Stat
): Job {
  console.log('Stat:', stat);
  const highestStatRate = jobs.reduce(
    (prev, curr) => (prev > curr.rate[stat] ? prev : curr.rate[stat]),
    0
  );
  const allHighestJobs = jobs.filter(
    (job) => job.rate[stat] === highestStatRate
  );

  if (allHighestJobs.length === 1 || !secondaryStat) {
    return allHighestJobs[0];
  } else {
    return getJobWithBestRate(allHighestJobs, secondaryStat);
  }
}

/**
 * Validation utilities for stat inputs and optimization feasibility
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
  correctedValue?: number;
}

/**
 * Validate a stat value against its limits
 */
export function validateStat(stat: Stat, value: number): ValidationResult {
  const limits = STAT_VALIDATION[stat];

  if (isNaN(value)) {
    return {
      isValid: false,
      error: `${stat} must be a number`,
      correctedValue: limits.min,
    };
  }

  if (value < limits.min) {
    return {
      isValid: false,
      error: `${stat} cannot be less than ${limits.min}`,
      correctedValue: limits.min,
    };
  }

  if (value > limits.max) {
    return {
      isValid: false,
      error: `${stat} cannot exceed ${limits.max}`,
      correctedValue: limits.max,
    };
  }

  return { isValid: true };
}

/**
 * Validate level input
 */
export function validateLevel(level: number): ValidationResult {
  if (isNaN(level)) {
    return {
      isValid: false,
      error: 'Level must be a number',
      correctedValue: 1,
    };
  }

  if (level < VALIDATION_LIMITS.MIN_LEVEL) {
    return {
      isValid: false,
      error: `Level cannot be less than ${VALIDATION_LIMITS.MIN_LEVEL}`,
      correctedValue: VALIDATION_LIMITS.MIN_LEVEL,
    };
  }

  if (level > VALIDATION_LIMITS.MAX_LEVEL) {
    return {
      isValid: false,
      error: `Level cannot exceed ${VALIDATION_LIMITS.MAX_LEVEL}`,
      correctedValue: VALIDATION_LIMITS.MAX_LEVEL,
    };
  }

  return { isValid: true };
}

/**
 * Validate if optimization is mathematically feasible
 */
export function validateOptimizationFeasibility(
  currentLevel: number,
  targetStat: Stat,
  currentValue: number,
  targetValue: number
): ValidationResult {
  const remainingLevels = MAX_LEVEL - currentLevel;

  if (remainingLevels <= 0) {
    return {
      isValid: false,
      error: 'Already at max level - no optimization possible',
    };
  }

  const maxPossible = targetStat === Stat.SPD ? MAX_SPD : MAX_STAT;

  if (targetValue > maxPossible) {
    return {
      isValid: false,
      error: `Target ${targetStat} (${targetValue}) exceeds maximum possible (${maxPossible})`,
      correctedValue: maxPossible,
    };
  }

  if (currentValue >= targetValue) {
    return {
      isValid: false,
      error: `Current ${targetStat} (${currentValue}) is already at or above target (${targetValue})`,
    };
  }

  // Check if target is theoretically reachable
  const maxGainPossible =
    targetStat === Stat.SPD
      ? remainingLevels // Max 1 SPD per level
      : remainingLevels * 12; // Max growth rate is 12 (Gladiator WATK)

  if (targetValue - currentValue > maxGainPossible) {
    return {
      isValid: false,
      error: `Target ${targetStat} is unreachable. Need ${
        targetValue - currentValue
      } points but only ${maxGainPossible} possible in ${remainingLevels} levels`,
    };
  }

  return { isValid: true };
}

/**
 * Auto-correct input values to valid ranges
 */
export function clampToValidRange(stat: Stat, value: number): number {
  const limits = STAT_VALIDATION[stat];
  return Math.max(limits.min, Math.min(limits.max, Math.round(value)));
}
