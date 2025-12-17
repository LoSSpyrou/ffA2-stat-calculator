import { Job } from '../models/job';
import { Race } from '../models/race';

export const viera_fencer: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-fencer.png',
  sprite: './assets/img/jobs/viera/FFTA2-FencerSprite.png',
  name: 'Fencer',
  race: Race.VIERA,
  base: {
    HP: 89,
    MP: 15,
    WATK: 90,
    WDEF: 78,
    MATK: 69,
    MDEF: 64,
    SPD: 61,
  },
  rate: {
    HP: 8,
    MP: 1,
    WATK: 10,
    WDEF: 7,
    MATK: 6,
    MDEF: 6,
    SPD: 69, // 69% chance per level
  },
};

export const viera_white_mage: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-whitemage.png',
  sprite: './assets/img/jobs/viera/FFTA2-VieraWhiteMageSprite.png',
  name: 'White Mage',
  race: Race.VIERA,
  base: {
    HP: 81,
    MP: 36,
    WATK: 63,
    WDEF: 72,
    MATK: 84,
    MDEF: 80,
    SPD: 59,
  },
  rate: {
    HP: 6,
    MP: 5,
    WATK: 6,
    WDEF: 7,
    MATK: 8,
    MDEF: 8,
    SPD: 58, // 58% chance per level
  },
};

export const viera_green_mage: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-greenmage.png',
  sprite: './assets/img/jobs/viera/FFTA2-GreenMageSprite.png',
  name: 'Green Mage',
  race: Race.VIERA,
  base: {
    HP: 85,
    MP: 30,
    WATK: 73,
    WDEF: 76,
    MATK: 84,
    MDEF: 79,
    SPD: 62,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 7,
    WDEF: 7,
    MATK: 8,
    MDEF: 7,
    SPD: 86, // 86% chance per level
  },
};

export const viera_archer: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-archer.png',
  sprite: './assets/img/jobs/viera/FFTA2-VieraArcherSprite.png',
  name: 'Archer',
  race: Race.VIERA,
  base: {
    HP: 86,
    MP: 19,
    WATK: 75,
    WDEF: 71,
    MATK: 70,
    MDEF: 70,
    SPD: 61,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 8,
    WDEF: 7,
    MATK: 6,
    MDEF: 7,
    SPD: 66, // 66% chance per level
  },
};

export const viera_elementalist: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-elementalist.png',
  sprite: './assets/img/jobs/viera/FFTA2-ElementalistSprite.png',
  name: 'Elementalist',
  race: Race.VIERA,
  base: {
    HP: 80,
    MP: 28,
    WATK: 70,
    WDEF: 74,
    MATK: 88,
    MDEF: 73,
    SPD: 57,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 7,
    WDEF: 7,
    MATK: 10,
    MDEF: 7,
    SPD: 41, // 41% chance per level
  },
};

export const viera_red_mage: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-redmage.png',
  sprite: './assets/img/jobs/viera/FFTA2-RedMageSprite.png',
  name: 'Red Mage',
  race: Race.VIERA,
  base: {
    HP: 83,
    MP: 28,
    WATK: 82,
    WDEF: 63,
    MATK: 86,
    MDEF: 70,
    SPD: 60,
  },
  rate: {
    HP: 6,
    MP: 2,
    WATK: 9,
    WDEF: 6,
    MATK: 9,
    MDEF: 6,
    SPD: 62, // 62% chance per level
  },
};

export const viera_spellblade: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-spellblade.png',
  sprite: './assets/img/jobs/viera/FFTA2-SpellbladeSprite.png',
  name: 'Spellblade',
  race: Race.VIERA,
  base: {
    HP: 80,
    MP: 24,
    WATK: 85,
    WDEF: 80,
    MATK: 76,
    MDEF: 75,
    SPD: 60,
  },
  rate: {
    HP: 5,
    MP: 2,
    WATK: 9,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 64, // 64% chance per level
  },
};

export const viera_summoner: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-summoner.png',
  sprite: './assets/img/jobs/viera/FFTA2-SummonerSprite.png',
  name: 'Summoner',
  race: Race.VIERA,
  base: {
    HP: 74,
    MP: 42,
    WATK: 59,
    WDEF: 61,
    MATK: 90,
    MDEF: 74,
    SPD: 58,
  },
  rate: {
    HP: 5,
    MP: 4,
    WATK: 6,
    WDEF: 6,
    MATK: 11,
    MDEF: 8,
    SPD: 56, // 56% chance per level
  },
};

export const viera_assassin: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-assassin.png',
  sprite: './assets/img/jobs/viera/FFTA2-AssassinSprite.png',
  name: 'Assassin',
  race: Race.VIERA,
  base: {
    HP: 76,
    MP: 16,
    WATK: 77,
    WDEF: 68,
    MATK: 71,
    MDEF: 66,
    SPD: 65,
  },
  rate: {
    HP: 5,
    MP: 1,
    WATK: 8,
    WDEF: 6,
    MATK: 7,
    MDEF: 6,
    SPD: 96, // 96% chance per level
  },
};

export const viera_sniper: Job = {
  img: './assets/img/jobs/viera/Ffta-viera-sniper.png',
  sprite: './assets/img/jobs/viera/FFTA2-SniperSprite.png',
  name: 'Sniper',
  race: Race.VIERA,
  base: {
    HP: 80,
    MP: 18,
    WATK: 93,
    WDEF: 65,
    MATK: 73,
    MDEF: 72,
    SPD: 58,
  },
  rate: {
    HP: 6,
    MP: 1,
    WATK: 11,
    WDEF: 6,
    MATK: 7,
    MDEF: 7,
    SPD: 59, // 59% chance per level
  },
};

export const viera_dancer: Job = {
  img: './assets/img/jobs/viera/FFTA2_Penelo.png',
  sprite: './assets/img/jobs/viera/FFTA2-PeneloSprite.jpg',
  name: 'Dancer',
  race: Race.VIERA,
  base: {
    HP: 78,
    MP: 48,
    WATK: 64,
    WDEF: 60,
    MATK: 87,
    MDEF: 80,
    SPD: 58,
  },
  rate: {
    HP: 6,
    MP: 6,
    WATK: 6,
    WDEF: 6,
    MATK: 8,
    MDEF: 8,
    SPD: 58, // 58% chance per level
  },
};

// Export all Viera jobs as an array for easy access
export const vieraJobs: Job[] = [
  viera_fencer,
  viera_white_mage,
  viera_green_mage,
  viera_archer,
  viera_elementalist,
  viera_red_mage,
  viera_spellblade,
  viera_summoner,
  viera_assassin,
  viera_sniper,
  viera_dancer,
];