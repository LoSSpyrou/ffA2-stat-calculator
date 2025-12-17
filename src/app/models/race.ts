export enum Race {
  HUME = 'hume',
  BANGAA = 'bangaa',
  VIERA = 'viera',
  NU_MOU = 'nu_mou',
  MOOGLE = 'moogle',
  SEEQ = 'seeq',
}

export interface RaceJobMapping {
  race: Race;
  jobs: any[]; // Will be properly typed when all job files are created
}
