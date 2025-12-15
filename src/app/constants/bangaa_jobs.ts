import { Job } from '../models/job';
import { Race } from '../models/race';

export const bangaa_warrior: Job = {
  img: './assets/img/jobs/Ffta2-h-soldier.png', // Placeholder - TODO: Add Bangaa Warrior image
  sprite: './assets/img/jobs/FFTA2-SoldierSprite.jpg', // Placeholder
  name: 'Warrior',
  race: Race.BANGAA,
  base: {
    HP: 96,
    MP: 10,
    WATK: 87,
    WDEF: 88,
    MATK: 58,
    MDEF: 66,
    SPD: 57,
  },
  rate: {
    HP: 9,
    MP: 2,
    WATK: 9,
    WDEF: 8,
    MATK: 6,
    MDEF: 6,
    SPD: 50, // 50% chance per level
  },
};

export const bangaa_white_monk: Job = {
  img: './assets/img/jobs/TA2-HumeFighter.png', // Placeholder - TODO: Add Bangaa White Monk image
  sprite: './assets/img/jobs/FFTA2-FighterSprite.jpg', // Placeholder
  name: 'White Monk',
  race: Race.BANGAA,
  base: {
    HP: 82,
    MP: 12,
    WATK: 89,
    WDEF: 70,
    MATK: 70,
    MDEF: 68,
    SPD: 60,
  },
  rate: {
    HP: 6,
    MP: 2,
    WATK: 9,
    WDEF: 7,
    MATK: 7,
    MDEF: 6,
    SPD: 61, // 61% chance per level
  },
};

export const bangaa_dragoon: Job = {
  img: './assets/img/jobs/TA2-HumePaladin.png', // Placeholder - TODO: Add Bangaa Dragoon image
  sprite: './assets/img/jobs/FFTA2-PaladinSprite.jpg', // Placeholder
  name: 'Dragoon',
  race: Race.BANGAA,
  base: {
    HP: 90,
    MP: 6,
    WATK: 97,
    WDEF: 90,
    MATK: 53,
    MDEF: 62,
    SPD: 60,
  },
  rate: {
    HP: 8,
    MP: 1,
    WATK: 11,
    WDEF: 9,
    MATK: 5,
    MDEF: 5,
    SPD: 62, // 62% chance per level
  },
};

export const bangaa_defender: Job = {
  img: './assets/img/jobs/TA2-HumePaladin.png', // Placeholder - TODO: Add Bangaa Defender image
  sprite: './assets/img/jobs/FFTA2-PaladinSprite.jpg', // Placeholder
  name: 'Defender',
  race: Race.BANGAA,
  base: {
    HP: 90,
    MP: 8,
    WATK: 84,
    WDEF: 98,
    MATK: 60,
    MDEF: 78,
    SPD: 56,
  },
  rate: {
    HP: 8,
    MP: 1,
    WATK: 8,
    WDEF: 11,
    MATK: 6,
    MDEF: 7,
    SPD: 45, // 45% chance per level
  },
};

export const bangaa_gladiator: Job = {
  img: './assets/img/jobs/TA2-HumeFighter.png', // Placeholder - TODO: Add Bangaa Gladiator image
  sprite: './assets/img/jobs/FFTA2-FighterSprite.jpg', // Placeholder
  name: 'Gladiator',
  race: Race.BANGAA,
  base: {
    HP: 92,
    MP: 18,
    WATK: 99,
    WDEF: 90,
    MATK: 57,
    MDEF: 64,
    SPD: 58,
  },
  rate: {
    HP: 8,
    MP: 2,
    WATK: 12,
    WDEF: 8,
    MATK: 6,
    MDEF: 6,
    SPD: 55, // 55% chance per level
  },
};

export const bangaa_master_monk: Job = {
  img: './assets/img/jobs/TA2-HumeNinja.png', // Placeholder - TODO: Add Bangaa Master Monk image
  sprite: './assets/img/jobs/FFTA2-NinjaSprite.jpg', // Placeholder
  name: 'Master Monk',
  race: Race.BANGAA,
  base: {
    HP: 81,
    MP: 14,
    WATK: 95,
    WDEF: 78,
    MATK: 76,
    MDEF: 76,
    SPD: 61,
  },
  rate: {
    HP: 6,
    MP: 3,
    WATK: 11,
    WDEF: 8,
    MATK: 8,
    MDEF: 7,
    SPD: 71, // 71% chance per level
  },
};

export const bangaa_bishop: Job = {
  img: './assets/img/jobs/Ffta2-h-whitemage.png', // Placeholder - TODO: Add Bangaa Bishop image
  sprite: './assets/img/jobs/FFTA2-HumeWhiteMageSprite.jpg', // Placeholder
  name: 'Bishop',
  race: Race.BANGAA,
  base: {
    HP: 80,
    MP: 28,
    WATK: 65,
    WDEF: 69,
    MATK: 82,
    MDEF: 86,
    SPD: 55,
  },
  rate: {
    HP: 6,
    MP: 5,
    WATK: 6,
    WDEF: 6,
    MATK: 9,
    MDEF: 8,
    SPD: 39, // 39% chance per level
  },
};

export const bangaa_templar: Job = {
  img: './assets/img/jobs/TA2-HumePaladin.png', // Placeholder - TODO: Add Bangaa Templar image
  sprite: './assets/img/jobs/FFTA2-PaladinSprite.jpg', // Placeholder
  name: 'Templar',
  race: Race.BANGAA,
  base: {
    HP: 92,
    MP: 20,
    WATK: 86,
    WDEF: 94,
    MATK: 75,
    MDEF: 80,
    SPD: 53,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 9,
    WDEF: 10,
    MATK: 7,
    MDEF: 7,
    SPD: 34, // 34% chance per level
  },
};

export const bangaa_cannoneer: Job = {
  img: './assets/img/jobs/TA2-HumeArcher.png', // Placeholder - TODO: Add Bangaa Cannoneer image
  sprite: './assets/img/jobs/FFTA2-HumeArcherSprite.jpg', // Placeholder
  name: 'Cannoneer',
  race: Race.BANGAA,
  base: {
    HP: 85,
    MP: 19,
    WATK: 76,
    WDEF: 71,
    MATK: 65,
    MDEF: 72,
    SPD: 59,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 7,
    WDEF: 7,
    MATK: 7,
    MDEF: 7,
    SPD: 57, // 57% chance per level
  },
};

export const bangaa_trickster: Job = {
  img: './assets/img/jobs/TA2-HumeIllusionist.png', // Placeholder - TODO: Add Bangaa Trickster image
  sprite: './assets/img/jobs/FFTA2-HumeIllusionistSprite.jpg', // Placeholder
  name: 'Trickster',
  race: Race.BANGAA,
  base: {
    HP: 80,
    MP: 7,
    WATK: 71,
    WDEF: 73,
    MATK: 89,
    MDEF: 74,
    SPD: 64,
  },
  rate: {
    HP: 5,
    MP: 1,
    WATK: 7,
    WDEF: 7,
    MATK: 10,
    MDEF: 7,
    SPD: 88, // 88% chance per level
  },
};

// Export all Bangaa jobs as an array for easy access
export const bangaaJobs: Job[] = [
  bangaa_warrior,
  bangaa_white_monk,
  bangaa_dragoon,
  bangaa_defender,
  bangaa_gladiator,
  bangaa_master_monk,
  bangaa_bishop,
  bangaa_templar,
  bangaa_cannoneer,
  bangaa_trickster,
];