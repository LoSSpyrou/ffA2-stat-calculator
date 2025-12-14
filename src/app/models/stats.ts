import { hume_soldier } from '../constants/hume_jobs';
import { Job } from './job';

export enum Stat {
  HP = 'HP',
  MP = 'MP',
  WATK = 'WATK',
  WDEF = 'WDEF',
  MATK = 'MATK',
  MDEF = 'MDEF',
  SPD = 'SPD',
}

export const allStats = Object.values(Stat);

export type StatType = { [key in Stat]: { rate: number; base: number } };
export type CharStatType = { [key in Stat]: number };

export interface CharacterStats {
  job: Job;
  level: number;
  stats: CharStatType;
}

export const defaultCharacterStats = {
  job: hume_soldier,
  level: 0,
  stats: {
    HP: 0,
    MP: 0,
    WATK: 0,
    WDEF: 0,
    MATK: 0,
    MDEF: 0,
    SPD: 0,
  },
};
