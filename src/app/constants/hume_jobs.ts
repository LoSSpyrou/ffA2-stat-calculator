import { Job } from '../models/job';

export const hume_soldier: Job = {
  img: './assets/img/jobs/Ffta2-h-soldier.png',
  sprite: './assets/img/jobs/FFTA2-SoldierSprite.jpg',
  name: 'Soldier',
  base: {
    HP: 90,
    MP: 15,
    WATK: 88,
    WDEF: 84,
    MATK: 60,
    MDEF: 72,
    SPD: 57,
  },
  rate: {
    HP: 8,
    MP: 1,
    WATK: 9,
    WDEF: 8,
    MATK: 6,
    MDEF: 7,
    SPD: 50, // 50% chance per level
  },
};

export const hume_thief: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeThiefSprite.jpg',
  img: './assets/img/jobs/TA2-HumeThief.png',
  name: 'Thief',
  base: {
    HP: 83,
    MP: 15,
    WATK: 76,
    WDEF: 74,
    MATK: 76,
    MDEF: 64,
    SPD: 60,
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
export const hume_white_mage: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeWhiteMageSprite.jpg',
  img: './assets/img/jobs/Ffta2-h-whitemage.png',
  name: 'White Mage',
  base: {
    HP: 84,
    MP: 36,
    WATK: 64,
    WDEF: 73,
    MATK: 84,
    MDEF: 80,
    SPD: 58,
  },
  rate: {
    HP: 6,
    MP: 4,
    WATK: 6,
    WDEF: 7,
    MATK: 8,
    MDEF: 8,
    SPD: 52, // 52% chance per level
  },
};
export const hume_black_mage: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeBlackMageSprite.jpg',
  img: './assets/img/jobs/TA2-HumeBlackMage.png',
  name: 'Black Mage',
  base: {
    HP: 79,
    MP: 38,
    WATK: 60,
    WDEF: 68,
    MATK: 91,
    MDEF: 96,
    SPD: 56,
  },
  rate: {
    HP: 5,
    MP: 5,
    WATK: 6,
    WDEF: 6,
    MATK: 10,
    MDEF: 10,
    SPD: 46, // 46% chance per level
  },
};
export const hume_archer: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeArcherSprite.jpg',
  img: './assets/img/jobs/TA2-HumeArcher.png',
  name: 'Archer',
  base: {
    HP: 86,
    MP: 18,
    WATK: 72,
    WDEF: 72,
    MATK: 64,
    MDEF: 79,
    SPD: 59,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 7,
    WDEF: 7,
    MATK: 6,
    MDEF: 7,
    SPD: 55, // 55% chance per level
  },
};
export const hume_paladin: Job = {
  sprite: './assets/img/jobs/FFTA2-PaladinSprite.jpg',
  img: './assets/img/jobs/TA2-HumePaladin.png',
  name: 'Paladin',
  base: {
    HP: 88,
    MP: 22,
    WATK: 80,
    WDEF: 92,
    MATK: 72,
    MDEF: 88,
    SPD: 56,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 8,
    WDEF: 10,
    MATK: 7,
    MDEF: 9,
    SPD: 48, // 48% chance per level
  },
};
export const hume_fighter: Job = {
  sprite: './assets/img/jobs/FFTA2-FighterSprite.jpg',
  img: './assets/img/jobs/TA2-HumeFighter.png',
  name: 'Fighter',
  base: {
    HP: 84,
    MP: 12,
    WATK: 92,
    WDEF: 86,
    MATK: 56,
    MDEF: 68,
    SPD: 58,
  },
  rate: {
    HP: 6,
    MP: 1,
    WATK: 10,
    WDEF: 8,
    MATK: 5,
    MDEF: 6,
    SPD: 53, // 53% chance per level
  },
};
export const hume_parivir: Job = {
  sprite: './assets/img/jobs/FFTA2-ParivirSprite.jpg',
  img: './assets/img/jobs/Ffta2-humesamurai.png',
  name: 'Parivir',
  base: {
    HP: 86,
    MP: 10,
    WATK: 93,
    WDEF: 69,
    MATK: 68,
    MDEF: 69,
    SPD: 60,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 11,
    WDEF: 7,
    MATK: 6,
    MDEF: 5,
    SPD: 62, // 62% chance per level
  },
};
export const hume_ninja: Job = {
  sprite: './assets/img/jobs/FFTA2-NinjaSprite.jpg',
  img: './assets/img/jobs/TA2-HumeNinja.png',
  name: 'Ninja',
  base: {
    HP: 79,
    MP: 21,
    WATK: 88,
    WDEF: 68,
    MATK: 78,
    MDEF: 76,
    SPD: 65,
  },
  rate: {
    HP: 5,
    MP: 2,
    WATK: 9,
    WDEF: 6,
    MATK: 7,
    MDEF: 7,
    SPD: 90, // 90% chance per level
  },
};
export const hume_illusionist: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeIllusionistSprite.jpg',
  img: './assets/img/jobs/TA2-HumeIllusionist.png',
  name: 'Illusionist',
  base: {
    HP: 76,
    MP: 38,
    MATK: 92,
    MDEF: 84,
    SPD: 54,
    WATK: 60,
    WDEF: 64,
  },
  rate: {
    HP: 5,
    MP: 7,
    MATK: 9,
    MDEF: 8,
    SPD: 0.35,
    WATK: 6,
    WDEF: 6,
  },
};
export const hume_blue_mage: Job = {
  sprite: './assets/img/jobs/FFTA2-BlueMageSprite.jpg',
  img: './assets/img/jobs/TA2-Hume_BlueMage.png',
  name: 'Blue Mage',
  base: {
    HP: 84,
    MP: 30,
    MATK: 84,
    MDEF: 92,
    SPD: 57,
    WATK: 80,
    WDEF: 88,
  },
  rate: {
    HP: 6,
    MP: 3,
    MATK: 8,
    MDEF: 9,
    SPD: 0.5,
    WATK: 8,
    WDEF: 9,
  },
};
export const hume_hunter: Job = {
  sprite: './assets/img/jobs/FFTA2-HumeHunterSprite.jpg',
  img: './assets/img/jobs/TA2-HumeHunter.png',
  name: 'Hunter',
  base: {
    HP: 84,
    MP: 26,
    MATK: 68,
    MDEF: 84,
    SPD: 61,
    WATK: 84,
    WDEF: 66,
  },
  rate: {
    HP: 6,
    MP: 3,
    MATK: 7,
    MDEF: 8,
    SPD: 0.65,
    WATK: 8,
    WDEF: 6,
  },
};
export const hume_seer: Job = {
  sprite: './assets/img/jobs/FFTA2-SeerSprite.jpg',
  img: './assets/img/jobs/TA2_Hume-Devout.png',
  name: 'Seer',
  base: {
    HP: 83,
    MP: 42,
    WATK: 63,
    WDEF: 71,
    MATK: 90,
    MDEF: 99,
    SPD: 55,
  },
  rate: {
    HP: 6,
    MP: 7,
    WATK: 6,
    WDEF: 7,
    MATK: 8,
    MDEF: 11,
    SPD: 40, // 40% chance per level
  },
};
export const hume_sky_pirate: Job = {
  sprite: './assets/img/jobs/FFTA2-VaanSprite.jpg',
  img: './assets/img/jobs/FFTA2Vaan.png',
  name: 'Sky Pirate',
  base: {
    HP: 85,
    MP: 14,
    MATK: 76,
    MDEF: 72,
    SPD: 60,
    WATK: 76,
    WDEF: 74,
  },
  rate: {
    HP: 6,
    MP: 2,
    MATK: 7,
    MDEF: 7,
    SPD: 0.64,
    WATK: 7,
    WDEF: 7,
  },
};
export const hume_heritor: Job = {
  sprite: './assets/img/jobs/FFTA2-AdelSprite.jpg',
  img: './assets/img/jobs/Adel.png',
  name: 'Heritor',
  base: {
    HP: 84,
    MP: 36,
    MATK: 84,
    MDEF: 80,
    SPD: 61,
    WATK: 80,
    WDEF: 86,
  },
  rate: {
    HP: 6,
    MP: 4,
    MATK: 8,
    MDEF: 8,
    SPD: 0.62,
    WATK: 8,
    WDEF: 8,
  },
};
export const hume_agent: Job = {
  sprite: './assets/img/jobs/FFTA2-AlCidSprite.jpg',
  img: './assets/img/jobs/TA2_Al-Cid.png',
  name: 'Agent',
  base: {
    HP: 86,
    MP: 12,
    MATK: 70,
    MDEF: 72,
    SPD: 59,
    WATK: 80,
    WDEF: 83,
  },
  rate: {
    HP: 6,
    MP: 2,
    MATK: 6,
    MDEF: 7,
    SPD: 0.54,
    WATK: 8,
    WDEF: 8,
  },
};
export const humes: Job[] = [
  hume_soldier,
  hume_thief,
  hume_white_mage,
  hume_black_mage,
  hume_archer,
  hume_paladin,
  hume_fighter,
  hume_parivir,
  hume_ninja,
  hume_illusionist,
  hume_blue_mage,
  hume_hunter,
  hume_seer,
  hume_sky_pirate,
  hume_heritor,
  hume_agent,
];
