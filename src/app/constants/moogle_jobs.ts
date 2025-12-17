import { Job } from '../models/job';
import { Race } from '../models/race';

export const moogle_mog_knight: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-mogknight.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleKnightSprite.png',
  name: 'Moogle Knight',
  race: Race.MOOGLE,
  base: {
    HP: 88,
    MP: 28,
    WATK: 88,
    WDEF: 91,
    MATK: 72,
    MDEF: 84,
    SPD: 56,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 10,
    WDEF: 11,
    MATK: 6,
    MDEF: 9,
    SPD: 48, // 48% chance per level
  },
};

export const moogle_flintlock: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gunner.png',
  sprite: './assets/img/jobs/moogle/FFTA2-FlintlockSprite.png',
  name: 'Flintlock',
  race: Race.MOOGLE,
  base: {
    HP: 76,
    MP: 33,
    WATK: 84,
    WDEF: 72,
    MATK: 78,
    MDEF: 76,
    SPD: 58,
  },
  rate: {
    HP: 5,
    MP: 5,
    WATK: 8,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 52, // 52% chance per level
  },
};

export const moogle_fusilier: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gunner.png',
  sprite: './assets/img/jobs/moogle/FFTA2-GunnerSprite.png',
  name: 'Fusilier',
  race: Race.MOOGLE,
  base: {
    HP: 85,
    MP: 12,
    WATK: 80,
    WDEF: 83,
    MATK: 70,
    MDEF: 72,
    SPD: 59,
  },
  rate: {
    HP: 6,
    MP: 1,
    WATK: 8,
    WDEF: 8,
    MATK: 6,
    MDEF: 7,
    SPD: 54, // 54% chance per level
  },
};

export const moogle_thief: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-thief.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleThiefSprite.png',
  name: 'Thief',
  race: Race.MOOGLE,
  base: {
    HP: 83,
    MP: 15,
    WATK: 76,
    WDEF: 74,
    MATK: 76,
    MDEF: 64,
    SPD: 62,
  },
  rate: {
    HP: 6,
    MP: 1,
    WATK: 7,
    WDEF: 7,
    MATK: 7,
    MDEF: 6,
    SPD: 70, // 70% chance per level
  },
};

export const moogle_black_mage: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-blackmage.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleBlackMageSprite.png',
  name: 'Black Mage',
  race: Race.MOOGLE,
  base: {
    HP: 77,
    MP: 34,
    WATK: 60,
    WDEF: 68,
    MATK: 91,
    MDEF: 96,
    SPD: 56,
  },
  rate: {
    HP: 5,
    MP: 6,
    WATK: 6,
    WDEF: 6,
    MATK: 10,
    MDEF: 10,
    SPD: 46, // 46% chance per level
  },
};

export const moogle_time_mage: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-timemage.png',
  sprite: './assets/img/jobs/moogle/FFTA2-MoogleTimeMageSprite.png',
  name: 'Time Mage',
  race: Race.MOOGLE,
  base: {
    HP: 78,
    MP: 38,
    WATK: 59,
    WDEF: 61,
    MATK: 89,
    MDEF: 96,
    SPD: 57,
  },
  rate: {
    HP: 5,
    MP: 6,
    WATK: 5,
    WDEF: 6,
    MATK: 10,
    MDEF: 10,
    SPD: 50, // 50% chance per level
  },
};

export const moogle_animist: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-animist.png',
  sprite: './assets/img/jobs/moogle/FFTA2-AnimistSprite.png',
  name: 'Animist',
  race: Race.MOOGLE,
  base: {
    HP: 85,
    MP: 22,
    WATK: 81,
    WDEF: 88,
    MATK: 70,
    MDEF: 80,
    SPD: 60,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 8,
    WDEF: 9,
    MATK: 7,
    MDEF: 8,
    SPD: 56, // 56% chance per level
  },
};

export const moogle_gadgeteer: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-gadgeteer.png',
  sprite: './assets/img/jobs/moogle/FFTA2-TinkerSprite.png',
  name: 'Tinker',
  race: Race.MOOGLE,
  base: {
    HP: 82,
    MP: 24,
    WATK: 84,
    WDEF: 86,
    MATK: 82,
    MDEF: 98,
    SPD: 55,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 9,
    WDEF: 9,
    MATK: 8,
    MDEF: 11,
    SPD: 45, // 45% chance per level
  },
};

export const moogle_juggler: Job = {
  img: './assets/img/jobs/moogle/Ffta-moogle-juggler.png',
  sprite: './assets/img/jobs/moogle/FFTA2-JugglerSprite.png',
  name: 'Juggler',
  race: Race.MOOGLE,
  base: {
    HP: 81,
    MP: 18,
    WATK: 82,
    WDEF: 84,
    MATK: 72,
    MDEF: 68,
    SPD: 64,
  },
  rate: {
    HP: 6,
    MP: 1,
    WATK: 9,
    WDEF: 9,
    MATK: 7,
    MDEF: 6,
    SPD: 74, // 74% chance per level
  },
};

export const moogle_chocobo_rider: Job = {
  img: './assets/img/jobs/moogle/Ffta-m-chocoknight.png',
  sprite: './assets/img/jobs/moogle/FFTA2-ChocoboKnightSprite.png',
  name: 'Chocobo Rider',
  race: Race.MOOGLE,
  base: {
    HP: 74,
    MP: 9,
    WATK: 65,
    WDEF: 72,
    MATK: 69,
    MDEF: 69,
    SPD: 65,
  },
  rate: {
    HP: 5,
    MP: 1,
    WATK: 6,
    WDEF: 7,
    MATK: 6,
    MDEF: 7,
    SPD: 99, // 99% chance per level
  },
};

export const moogleJobs = [
  moogle_mog_knight,
  moogle_flintlock,
  moogle_fusilier,
  moogle_thief,
  moogle_black_mage,
  moogle_time_mage,
  moogle_animist,
  moogle_gadgeteer,
  moogle_juggler,
  moogle_chocobo_rider,
];
