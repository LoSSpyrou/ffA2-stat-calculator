import { CharStatType } from './stats';
import { Race } from './race';

export interface Job {
  name: string;
  base: CharStatType;
  rate: CharStatType;
  img?: string;
  sprite: string;
  race?: Race; // Optional for backward compatibility
}
