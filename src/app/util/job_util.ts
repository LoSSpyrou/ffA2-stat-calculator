import { Job } from '../models/job';
import { CharacterStats, CharStatType } from '../models/stats';

export function calculateStats(
  job: Job,
  level: number,
  stats?: CharacterStats
): CharacterStats {
  const baseStats: CharStatType = stats?.stats ?? job.base;

  // Validate inputs to prevent NaN/Infinity
  const validLevel = Math.max(0, Math.min(99, isFinite(level) ? level : 0));

  return {
    job,
    level: stats ? Math.min(99, validLevel + stats.level) : validLevel,
    stats: {
      HP: Math.max(1, baseStats.HP + validLevel * job.rate.HP),
      MP: Math.max(0, baseStats.MP + validLevel * job.rate.MP),
      WATK: Math.max(1, baseStats.WATK + validLevel * job.rate.WATK),
      WDEF: Math.max(1, baseStats.WDEF + validLevel * job.rate.WDEF),
      MATK: Math.max(0, baseStats.MATK + validLevel * job.rate.MATK),
      MDEF: Math.max(1, baseStats.MDEF + validLevel * job.rate.MDEF),
      SPD: calculateSpeedGrowth(baseStats.SPD, job.rate.SPD, validLevel),
    },
  };
}

/**
 * Calculate speed growth using percentage-based mechanics
 * SPD grows by 1 point per level based on percentage chance
 * @param baseSPD - Starting SPD value
 * @param speedRate - Percentage chance (0-100) to gain +1 SPD per level
 * @param levels - Number of levels gained
 * @returns Expected SPD value (average case)
 */
export function calculateSpeedGrowth(
  baseSPD: number,
  speedRate: number,
  levels: number
): number {
  // Validate inputs to prevent NaN/Infinity
  if (!isFinite(baseSPD) || !isFinite(speedRate) || !isFinite(levels)) {
    return Math.max(1, baseSPD || 1); // Return base SPD or 1 if invalid
  }

  // Convert percentage to decimal (50 -> 0.5)
  const chancePerLevel = Math.max(0, Math.min(1, speedRate / 100));
  // Average expected SPD gain = levels * chance
  const expectedGain = Math.max(0, levels) * chancePerLevel;
  const finalSPD = baseSPD + expectedGain;

  // Ensure result is within valid SPD range (1-149)
  return Math.max(1, Math.min(149, Math.round(finalSPD)));
}

/**
 * Calculate minimum possible SPD (no SPD increases)
 */
export function calculateMinSpeedGrowth(baseSPD: number): number {
  return baseSPD;
}

/**
 * Calculate maximum possible SPD (SPD increases every level)
 */
export function calculateMaxSpeedGrowth(
  baseSPD: number,
  levels: number
): number {
  return Math.min(baseSPD + levels, 149); // Max SPD is 149
}

/**
 * Simulate speed reset mechanics - calculate expected levels to reach target SPD
 * The guide mentions "speed reset" - save/reload until you get SPD increases
 * @param currentSPD Current SPD value
 * @param targetSPD Desired SPD value
 * @param speedRate Percentage chance per level
 * @param levelsAvailable How many levels you can gain
 * @returns Probability of reaching target SPD with perfect resets
 */
export function calculateSpeedResetProbability(
  currentSPD: number,
  targetSPD: number,
  speedRate: number,
  levelsAvailable: number
): number {
  const spdNeeded = targetSPD - currentSPD;
  if (spdNeeded <= 0) return 1; // Already at or above target
  if (spdNeeded > levelsAvailable) return 0; // Impossible even with perfect luck

  const chancePerLevel = speedRate / 100;
  // Binomial probability: at least spdNeeded successes in levelsAvailable trials
  return calculateBinomialProbability(
    levelsAvailable,
    spdNeeded,
    chancePerLevel
  );
}

/**
 * Calculate binomial probability (simplified for our use case)
 * Probability of getting at least k successes in n trials with probability p
 */
function calculateBinomialProbability(n: number, k: number, p: number): number {
  // For our purposes, we'll use the normal approximation for large n
  // or exact calculation for small n
  if (n <= 20) {
    return exactBinomialProbability(n, k, p);
  }
  return normalApproximationBinomial(n, k, p);
}

/**
 * Exact binomial calculation for small n
 */
function exactBinomialProbability(n: number, k: number, p: number): number {
  let prob = 0;
  for (let i = k; i <= n; i++) {
    prob += binomialCoeff(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
  }
  return prob;
}

/**
 * Binomial coefficient (n choose k)
 */
function binomialCoeff(n: number, k: number): number {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;

  let result = 1;
  for (let i = 0; i < Math.min(k, n - k); i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return result;
}

/**
 * Normal approximation for large n
 */
function normalApproximationBinomial(n: number, k: number, p: number): number {
  const mean = n * p;
  const variance = n * p * (1 - p);
  const std = Math.sqrt(variance);

  // Continuity correction: P(X >= k) ≈ P(Z >= (k-0.5-mean)/std)
  const z = (k - 0.5 - mean) / std;
  return 1 - normalCDF(z);
}

/**
 * Cumulative distribution function for standard normal distribution
 */
function normalCDF(z: number): number {
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

/**
 * Error function approximation
 */
function erf(x: number): number {
  // Abramowitz and Stegun approximation
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y =
    1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}
