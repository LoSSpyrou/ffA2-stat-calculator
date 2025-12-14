import { Injectable } from '@angular/core';
import { MAX_SPD, MAX_STAT } from '../constants/functions';
import { CharacterStats } from '../models/character-stats';
import { Stat } from '../models/stats';

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
    return isSpd
      ? MAX_SPD - base - level * rate
      : MAX_STAT - base - level * rate;
  }
  getPrinciple(characterStats: CharacterStats, stat: Stat): number {
    switch (stat) {
      case Stat.HP:
        return MAX_STAT - characterStats.hp;
      case Stat.MP:
        return MAX_STAT - characterStats.mp;
      case Stat.WATK:
        return MAX_STAT - characterStats.watk;
      case Stat.WDEF:
        return MAX_STAT - characterStats.wdef;
      case Stat.MATK:
        return MAX_STAT - characterStats.matk;
      case Stat.MDEF:
        return MAX_STAT - characterStats.mdef;
      case Stat.SPD:
        return MAX_SPD - characterStats.spd;
      default:
        return 0;
    }
  }
}
