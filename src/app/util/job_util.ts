import { Job } from '../models/job';
import { CharacterStats, CharStatType } from '../models/stats';

export function calculateStats(
  job: Job,
  level: number,
  stats?: CharacterStats
): CharacterStats {
  const baseStats: CharStatType = stats?.stats ?? job.base;
  return {
    job,
    level: stats ? level + stats.level : level,
    stats: {
      HP: baseStats.HP + level * job.rate.HP,
      MP: baseStats.MP + level * job.rate.MP,
      WATK: baseStats.WATK + level * job.rate.WATK,
      WDEF: baseStats.WDEF + level * job.rate.WDEF,
      MATK: baseStats.MATK + level * job.rate.MATK,
      MDEF: baseStats.MDEF + level * job.rate.MDEF,
      SPD: baseStats.SPD + level * job.rate.SPD,
    },
  };
}
