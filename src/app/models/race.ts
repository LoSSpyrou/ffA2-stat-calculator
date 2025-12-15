export enum Race {
  HUME = 'Hume',
  BANGAA = 'Bangaa',
  VIERA = 'Viera',
  NU_MOU = 'Nu Mou',
  SEEQ = 'Seeq',
}

export interface RaceJobMapping {
  race: Race;
  jobs: any[]; // Will be properly typed when all job files are created
}