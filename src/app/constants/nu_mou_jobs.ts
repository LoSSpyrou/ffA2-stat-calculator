import { Job } from '../models/job';
import { Race } from '../models/race';

export const nu_mou_white_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-whitemage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouWhiteMageSprite.png',
  name: 'White Mage',
  race: Race.NU_MOU,
  base: {
    HP: 79,
    MP: 36,
    WATK: 64,
    WDEF: 73,
    MATK: 84,
    MDEF: 80,
    SPD: 58,
  },
  rate: {
    HP: 5,
    MP: 6,
    WATK: 6,
    WDEF: 7,
    MATK: 8,
    MDEF: 9,
    SPD: 52, // 52% chance per level
  },
};

export const nu_mou_black_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-blackmage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouBlackMageSprite.png',
  name: 'Black Mage',
  race: Race.NU_MOU,
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
    MATK: 11,
    MDEF: 10,
    SPD: 46, // 46% chance per level
  },
};

export const nu_mou_illusionist: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-illusionist.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouIllusionistSprite.png',
  name: 'Illusionist',
  race: Race.NU_MOU,
  base: {
    HP: 76,
    MP: 42,
    WATK: 60,
    WDEF: 63,
    MATK: 92,
    MDEF: 84,
    SPD: 54,
  },
  rate: {
    HP: 5,
    MP: 7,
    WATK: 6,
    WDEF: 6,
    MATK: 9,
    MDEF: 9,
    SPD: 35, // 35% chance per level
  },
};

export const nu_mou_time_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-timemage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouTimeMageSprite.png',
  name: 'Time Mage',
  race: Race.NU_MOU,
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

export const nu_mou_alchemist: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-alchemist.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-AlchemistSprite.png',
  name: 'Alchemist',
  race: Race.NU_MOU,
  base: {
    HP: 81,
    MP: 44,
    WATK: 71,
    WDEF: 64,
    MATK: 90,
    MDEF: 99,
    SPD: 58,
  },
  rate: {
    HP: 6,
    MP: 7,
    WATK: 7,
    WDEF: 6,
    MATK: 10,
    MDEF: 11,
    SPD: 54, // 54% chance per level
  },
};

export const nu_mou_beastmaster: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-beastmaster.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-BeastmasterSprite.png',
  name: 'Beastmaster',
  race: Race.NU_MOU,
  base: {
    HP: 88,
    MP: 19,
    WATK: 91,
    WDEF: 86,
    MATK: 69,
    MDEF: 72,
    SPD: 59,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 10,
    WDEF: 8,
    MATK: 6,
    MDEF: 7,
    SPD: 60, // 60% chance per level
  },
};

export const nu_mou_sage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-sage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-SageSprite.png',
  name: 'Sage',
  race: Race.NU_MOU,
  base: {
    HP: 84,
    MP: 32,
    WATK: 79,
    WDEF: 73,
    MATK: 89,
    MDEF: 77,
    SPD: 56,
  },
  rate: {
    HP: 7,
    MP: 4,
    WATK: 8,
    WDEF: 7,
    MATK: 9,
    MDEF: 8,
    SPD: 48, // 48% chance per level
  },
};

export const nu_mou_scholar: Job = {
  img: './assets/img/jobs/nu_mou/NuMouScholar.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-ScholarSprite.png',
  name: 'Scholar',
  race: Race.NU_MOU,
  base: {
    HP: 85,
    MP: 24,
    WATK: 88,
    WDEF: 77,
    MATK: 78,
    MDEF: 71,
    SPD: 58,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 10,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 58, // 58% chance per level
  },
};

export const nu_mou_arcanist: Job = {
  img: './assets/img/jobs/nu_mou/ArcaneMage.JPG.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-ArcanistSprite.png',
  name: 'Arcanist',
  race: Race.NU_MOU,
  base: {
    HP: 74,
    MP: 48,
    WATK: 59,
    WDEF: 60,
    MATK: 87,
    MDEF: 74,
    SPD: 53,
  },
  rate: {
    HP: 5,
    MP: 8,
    WATK: 5,
    WDEF: 6,
    MATK: 8,
    MDEF: 7,
    SPD: 34, // 34% chance per level
  },
};

// Export all Nu Mou jobs as an array
export const nu_mouJobs: Job[] = [
  nu_mou_white_mage,
  nu_mou_black_mage,
  nu_mou_illusionist,
  nu_mou_time_mage,
  nu_mou_alchemist,
  nu_mou_beastmaster,
  nu_mou_sage,
  nu_mou_scholar,
  nu_mou_arcanist,
];
