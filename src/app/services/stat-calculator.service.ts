import { Injectable } from '@angular/core';
import { MAX_SPD, MAX_STAT } from '../constants/functions';
import { CharacterStats, Stat } from '../models/stats';

@Injectable({
  providedIn: 'root',
})
export class StatCalculatorService {
  calculatePrinciple(
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

  getPrinciple(characterStats: CharacterStats, stat: Stat): number {
    switch (stat) {
      case Stat.HP:
        return MAX_STAT - characterStats.stats.HP;
      case Stat.MP:
        return MAX_STAT - characterStats.stats.MP;
      case Stat.WATK:
        return MAX_STAT - characterStats.stats.WATK;
      case Stat.WDEF:
        return MAX_STAT - characterStats.stats.WDEF;
      case Stat.MATK:
        return MAX_STAT - characterStats.stats.MATK;
      case Stat.MDEF:
        return MAX_STAT - characterStats.stats.MDEF;
      case Stat.SPD:
        return MAX_SPD - characterStats.stats.SPD;
      default:
        return 0;
    }
  }

  /**
   * Calculate expected SPD at a given level
   * @param baseSPD Base SPD value
   * @param speedRate Percentage chance to gain +1 SPD per level
   * @param levels Number of levels
   * @returns Expected SPD value
   */
  calculateExpectedSpeed(
    baseSPD: number,
    speedRate: number,
    levels: number
  ): number {
    const chancePerLevel = speedRate / 100;
    return Math.round(baseSPD + levels * chancePerLevel);
  }

  /**
   * Calculate speed range (min/max possible values)
   * @param baseSPD Base SPD value
   * @param levels Number of levels
   * @returns {min: number, max: number}
   */
  calculateSpeedRange(
    baseSPD: number,
    levels: number
  ): { min: number; max: number } {
    return {
      min: baseSPD, // No speed increases
      max: Math.min(baseSPD + levels, MAX_SPD), // Speed increases every level (capped at MAX_SPD)
    };
  }
}
