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
    return (principle - remainingLevels * chance2) / (chance1 - chance2);
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
