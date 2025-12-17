import { Job } from './job';

export enum Race {
  HUME = 'hume',
  BANGAA = 'bangaa',
  VIERA = 'viera',
  NU_MOU = 'nu_mou',
  MOOGLE = 'moogle',
  GRIA = 'gria',
  SEEQ = 'seeq',
}

export interface RaceJobMapping {
  race: Race;
  jobs: Job[];
}
