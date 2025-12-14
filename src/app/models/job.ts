import { CharStatType } from './stats';

export interface Job {
  name: string;
  base: CharStatType;
  rate: CharStatType;
  img?: string;
  sprite: string;
}
