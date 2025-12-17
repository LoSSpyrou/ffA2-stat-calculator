import { Job } from '../models/job';
import { Race } from '../models/race';

export const gria_hunter: Job = {
  img: './assets/img/jobs/gria/GriaHunter.png',
  sprite: './assets/img/jobs/gria/FFTA2-GriaHunterSprite.png',
  name: 'Hunter',
  race: Race.GRIA,
  base: {
    HP: 84,
    MP: 23,
    WATK: 84,
    WDEF: 66,
    MATK: 68,
    MDEF: 84,
    SPD: 61,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 8,
    WDEF: 6,
    MATK: 7,
    MDEF: 8,
    SPD: 65, // 65% chance per level
  },
};

export const gria_raptor: Job = {
  img: './assets/img/jobs/gria/GriaRaptor.png',
  sprite: './assets/img/jobs/gria/FFTA2-RaptorSprite.png',
  name: 'Raptor',
  race: Race.GRIA,
  base: {
    HP: 90,
    MP: 26,
    WATK: 88,
    WDEF: 68,
    MATK: 82,
    MDEF: 68,
    SPD: 60,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 9,
    WDEF: 6,
    MATK: 8,
    MDEF: 6,
    SPD: 63, // 63% chance per level
  },
};

export const gria_ravager: Job = {
  img: './assets/img/jobs/gria/Gria_Ravager.png',
  sprite: './assets/img/jobs/gria/FFTA2-RavagerSprite.png',
  name: 'Ravager',
  race: Race.GRIA,
  base: {
    HP: 94,
    MP: 18,
    WATK: 92,
    WDEF: 88,
    MATK: 62,
    MDEF: 62,
    SPD: 58,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 10,
    WDEF: 9,
    MATK: 6,
    MDEF: 6,
    SPD: 50, // 50% chance per level
  },
};

export const gria_geomancer: Job = {
  img: './assets/img/jobs/gria/GriaGeomancer.png',
  sprite: './assets/img/jobs/gria/FFTA2-GeomancerSprite.png',
  name: 'Geomancer',
  race: Race.GRIA,
  base: {
    HP: 82,
    MP: 36,
    WATK: 79,
    WDEF: 90,
    MATK: 76,
    MDEF: 90,
    SPD: 59,
  },
  rate: {
    HP: 6,
    MP: 5,
    WATK: 7,
    WDEF: 11,
    MATK: 7,
    MDEF: 11,
    SPD: 52, // 52% chance per level
  },
};

// Export all Gria jobs as an array for easy access
export const griaJobs: Job[] = [
  gria_hunter,
  gria_raptor,
  gria_ravager,
  gria_geomancer,
];
