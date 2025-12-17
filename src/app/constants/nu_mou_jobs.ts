import { Job } from '../models/job';
import { Race } from '../models/race';

export const nu_mou_white_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-whitemage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouWhiteMageSprite.png',
  name: 'White Mage',
  race: Race.NU_MOU,
  base: {
    HP: 82,
    MP: 28,
    WATK: 58,
    WDEF: 72,
    MATK: 82,
    MDEF: 86,
    SPD: 56,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 5,
    WDEF: 7,
    MATK: 8,
    MDEF: 8,
    SPD: 48, // 48% chance per level
  },
};

export const nu_mou_black_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-blackmage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouBlackMageSprite.png',
  name: 'Black Mage',
  race: Race.NU_MOU,
  base: {
    HP: 76,
    MP: 32,
    WATK: 60,
    WDEF: 68,
    MATK: 86,
    MDEF: 82,
    SPD: 58,
  },
  rate: {
    HP: 5,
    MP: 3,
    WATK: 6,
    WDEF: 6,
    MATK: 9,
    MDEF: 8,
    SPD: 52, // 52% chance per level
  },
};

export const nu_mou_illusionist: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-illusionist.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouIllusionistSprite.png',
  name: 'Illusionist',
  race: Race.NU_MOU,
  base: {
    HP: 78,
    MP: 24,
    WATK: 66,
    WDEF: 70,
    MATK: 78,
    MDEF: 84,
    SPD: 60,
  },
  rate: {
    HP: 6,
    MP: 2,
    WATK: 6,
    WDEF: 7,
    MATK: 7,
    MDEF: 8,
    SPD: 55, // 55% chance per level
  },
};

export const nu_mou_time_mage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-timemage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-NuMouTimeMageSprite.png',
  name: 'Time Mage',
  race: Race.NU_MOU,
  base: {
    HP: 74,
    MP: 36,
    WATK: 54,
    WDEF: 66,
    MATK: 90,
    MDEF: 88,
    SPD: 62,
  },
  rate: {
    HP: 5,
    MP: 4,
    WATK: 5,
    WDEF: 6,
    MATK: 9,
    MDEF: 9,
    SPD: 58, // 58% chance per level
  },
};

export const nu_mou_alchemist: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-alchemist.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-AlchemistSprite.png',
  name: 'Alchemist',
  race: Race.NU_MOU,
  base: {
    HP: 80,
    MP: 20,
    WATK: 72,
    WDEF: 74,
    MATK: 74,
    MDEF: 78,
    SPD: 54,
  },
  rate: {
    HP: 6,
    MP: 2,
    WATK: 7,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 50, // 50% chance per level
  },
};

export const nu_mou_beastmaster: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-beastmaster.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-BeastmasterSprite.png',
  name: 'Beastmaster',
  race: Race.NU_MOU,
  base: {
    HP: 84,
    MP: 16,
    WATK: 78,
    WDEF: 76,
    MATK: 70,
    MDEF: 74,
    SPD: 56,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 8,
    WDEF: 7,
    MATK: 6,
    MDEF: 7,
    SPD: 53, // 53% chance per level
  },
};

export const nu_mou_sage: Job = {
  img: './assets/img/jobs/nu_mou/Ffta-nu-mou-sage.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-SageSprite.png',
  name: 'Sage',
  race: Race.NU_MOU,
  base: {
    HP: 78,
    MP: 40,
    WATK: 56,
    WDEF: 70,
    MATK: 94,
    MDEF: 92,
    SPD: 60,
  },
  rate: {
    HP: 6,
    MP: 4,
    WATK: 5,
    WDEF: 7,
    MATK: 10,
    MDEF: 9,
    SPD: 60, // 60% chance per level
  },
};

export const nu_mou_scholar: Job = {
  img: './assets/img/jobs/nu_mou/NuMouScholar.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-ScholarSprite.png',
  name: 'Scholar',
  race: Race.NU_MOU,
  base: {
    HP: 76,
    MP: 44,
    WATK: 52,
    WDEF: 68,
    MATK: 96,
    MDEF: 94,
    SPD: 64,
  },
  rate: {
    HP: 5,
    MP: 5,
    WATK: 4,
    WDEF: 6,
    MATK: 10,
    MDEF: 9,
    SPD: 62, // 62% chance per level
  },
};

export const nu_mou_arcanist: Job = {
  img: './assets/img/jobs/nu_mou/ArcaneMage.JPG.png',
  sprite: './assets/img/jobs/nu_mou/FFTA2-ArcanistSprite.png',
  name: 'Arcanist',
  race: Race.NU_MOU,
  base: {
    HP: 72,
    MP: 48,
    WATK: 50,
    WDEF: 64,
    MATK: 98,
    MDEF: 96,
    SPD: 66,
  },
  rate: {
    HP: 4,
    MP: 5,
    WATK: 4,
    WDEF: 5,
    MATK: 11,
    MDEF: 10,
    SPD: 65, // 65% chance per level
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
