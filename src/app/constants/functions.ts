import { Job } from '../models/job';
import { Stat } from '../models/stats';

export const MAX_LEVEL = 99;
export const MAX_STAT = 999;
export const MAX_SPD = 149;
export const BASE_LEVEL = 30;

export function calculatePrinciple(
  base: number,
  rate: number,
  level: number,
  isSpd = false
): number {
  return isSpd ? MAX_SPD - base - level * rate : MAX_STAT - base - level * rate;
}

export function getPrinciple(value: number, isSpd = false) {
  return isSpd ? MAX_SPD - value : MAX_STAT - value;
}

export function getRequiredLevels(
  principle: number,
  rate1: number,
  rate2: number,
  level: number
) {
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
