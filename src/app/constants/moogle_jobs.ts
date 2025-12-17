import { Job } from '../models/job';
import { Race } from '../models/race';

export const moogle_mog_knight: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-mogknight.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleKnightSprite.png',
  name: 'Mog Knight',
  race: Race.MOOGLE,
  base: {
    HP: 82,
    MP: 21,
    WATK: 85,
    WDEF: 81,
    MATK: 42,
    MDEF: 64,
    SPD: 95,
  },
  rate: {
    HP: 8,
    MP: 4,
    WATK: 9,
    WDEF: 9,
    MATK: 6,
    MDEF: 8,
    SPD: 95, // 95% chance per level
  },
};

export const moogle_flintlock: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gunner.png',
  sprite: './assets/img/jobs/moogle/FFTA2-FlintlockSprite.png',
  name: 'Flintlock',
  race: Race.MOOGLE,
  base: {
    HP: 65,
    MP: 35,
    WATK: 72,
    WDEF: 58,
    MATK: 58,
    MDEF: 52,
    SPD: 108,
  },
  rate: {
    HP: 7,
    MP: 5,
    WATK: 8,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 108, // 108% chance per level
  },
};

export const moogle_gunner: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gunner.png',
  sprite: './assets/img/jobs/moogle/FFTA2-GunnerSprite.png',
  name: 'Gunner',
  race: Race.MOOGLE,
  base: {
    HP: 61,
    MP: 28,
    WATK: 69,
    WDEF: 55,
    MATK: 55,
    MDEF: 48,
    SPD: 102,
  },
  rate: {
    HP: 7,
    MP: 4,
    WATK: 8,
    WDEF: 7,
    MATK: 7,
    MDEF: 6,
    SPD: 102, // 102% chance per level
  },
};

export const moogle_thief: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-thief.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleThiefSprite.png',
  name: 'Thief',
  race: Race.MOOGLE,
  base: {
    HP: 55,
    MP: 22,
    WATK: 63,
    WDEF: 48,
    MATK: 45,
    MDEF: 41,
    SPD: 115,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 7,
    WDEF: 6,
    MATK: 6,
    MDEF: 6,
    SPD: 115, // 115% chance per level
  },
};

export const moogle_black_mage: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-blackmage.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleBlackMageSprite.png',
  name: 'Black Mage',
  race: Race.MOOGLE,
  base: {
    HP: 48,
    MP: 78,
    WATK: 38,
    WDEF: 35,
    MATK: 92,
    MDEF: 82,
    SPD: 88,
  },
  rate: {
    HP: 6,
    MP: 6,
    WATK: 6,
    WDEF: 5,
    MATK: 9,
    MDEF: 8,
    SPD: 88, // 88% chance per level
  },
};

export const moogle_time_mage: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-timemage.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleTimeMageSprite.png',
  name: 'Time Mage',
  race: Race.MOOGLE,
  base: {
    HP: 44,
    MP: 85,
    WATK: 35,
    WDEF: 32,
    MATK: 88,
    MDEF: 85,
    SPD: 92,
  },
  rate: {
    HP: 6,
    MP: 7,
    WATK: 5,
    WDEF: 5,
    MATK: 9,
    MDEF: 9,
    SPD: 92, // 92% chance per level
  },
};

export const moogle_animist: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-animist.png',
  sprite: './assets/img/jobs/moogle/FFTA2-AnimistSprite.png',
  name: 'Animist',
  race: Race.MOOGLE,
  base: {
    HP: 58,
    MP: 65,
    WATK: 48,
    WDEF: 45,
    MATK: 78,
    MDEF: 72,
    SPD: 85,
  },
  rate: {
    HP: 7,
    MP: 6,
    WATK: 6,
    WDEF: 6,
    MATK: 8,
    MDEF: 8,
    SPD: 85, // 85% chance per level
  },
};

export const moogle_gadgeteer: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gadgeteer.png',
  sprite: './assets/img/jobs/moogle/FFTA2-TinkerSprite.png',
  name: 'Gadgeteer',
  race: Race.MOOGLE,
  base: {
    HP: 72,
    MP: 32,
    WATK: 68,
    WDEF: 65,
    MATK: 52,
    MDEF: 48,
    SPD: 78,
  },
  rate: {
    HP: 8,
    MP: 4,
    WATK: 8,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 78, // 78% chance per level
  },
};

export const moogle_juggler: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-juggler.png',
  sprite: './assets/img/jobs/moogle/FFTA2-JugglerSprite.png',
  name: 'Juggler',
  race: Race.MOOGLE,
  base: {
    HP: 62,
    MP: 30,
    WATK: 65,
    WDEF: 52,
    MATK: 50,
    MDEF: 45,
    SPD: 105,
  },
  rate: {
    HP: 7,
    MP: 4,
    WATK: 7,
    WDEF: 6,
    MATK: 7,
    MDEF: 6,
    SPD: 105, // 105% chance per level
  },
};

export const moogle_chocobo_knight: Job = {
  img: './assets/img/jobs/moogle/Ffta-m-chocoknight.png',
  sprite: './assets/img/jobs/moogle/FFTA2-ChocoboKnightSprite.png',
  name: 'Chocobo Knight',
  race: Race.MOOGLE,
  base: {
    HP: 85,
    MP: 18,
    WATK: 82,
    WDEF: 78,
    MATK: 38,
    MDEF: 58,
    SPD: 118,
  },
  rate: {
    HP: 9,
    MP: 4,
    WATK: 9,
    WDEF: 8,
    MATK: 6,
    MDEF: 7,
    SPD: 118, // 118% chance per level
  },
};

export const moogleJobs = [
  moogle_mog_knight,
  moogle_flintlock,
  moogle_gunner,
  moogle_thief,
  moogle_black_mage,
  moogle_time_mage,
  moogle_animist,
  moogle_gadgeteer,
  moogle_juggler,
  moogle_chocobo_knight,
];
