import { Job } from '../models/job';
import { Race } from '../models/race';

export const seeq_ranger: Job = {
  img: './assets/img/jobs/seeq/SeeqRanger.png',
  sprite: './assets/img/jobs/seeq/FFTA2-RangerSprite.png',
  name: 'Ranger',
  race: Race.SEEQ,
  base: {
    HP: 86,
    MP: 10,
    WATK: 78,
    WDEF: 82,
    MATK: 72,
    MDEF: 86,
    SPD: 63,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 8,
    WDEF: 8,
    MATK: 7,
    MDEF: 9,
    SPD: 68, // 68% SPD growth rate per docs
  },
};

export const seeq_viking: Job = {
  img: './assets/img/jobs/seeq/SeeqViking.png',
  sprite: './assets/img/jobs/seeq/FFTA2-VikingSprite.png',
  name: 'Viking',
  race: Race.SEEQ,
  base: {
    HP: 90,
    MP: 22,
    WATK: 82,
    WDEF: 73,
    MATK: 78,
    MDEF: 97,
    SPD: 59,
  },
  rate: {
    HP: 7,
    MP: 3,
    WATK: 8,
    WDEF: 7,
    MATK: 7,
    MDEF: 11,
    SPD: 54, // 54% chance per level per docs
  },
};

export const seeq_berserker: Job = {
  img: './assets/img/jobs/seeq/SeeqBerserker.png',
  sprite: './assets/img/jobs/seeq/FFTA2-BerserkerSprite.png',
  name: 'Berserker',
  race: Race.SEEQ,
  base: {
    HP: 94,
    MP: 4,
    WATK: 91,
    WDEF: 69,
    MATK: 61,
    MDEF: 59,
    SPD: 56,
  },
  rate: {
    HP: 7,
    MP: 1,
    WATK: 11,
    WDEF: 6,
    MATK: 6,
    MDEF: 6,
    SPD: 48, // 48% SPD growth rate per docs
  },
};

export const seeq_lanista: Job = {
  img: './assets/img/jobs/seeq/SeeqLanista.png',
  sprite: './assets/img/jobs/seeq/FFTA2-LanistaSprite.png',
  name: 'Lanista',
  race: Race.SEEQ,
  base: {
    HP: 88,
    MP: 19,
    WATK: 86,
    WDEF: 84,
    MATK: 74,
    MDEF: 64,
    SPD: 57,
  },
  rate: {
    HP: 7,
    MP: 2,
    WATK: 9,
    WDEF: 9,
    MATK: 7,
    MDEF: 6,
    SPD: 50, // 50% chance per level per docs
  },
};

export const seeqJobs = [
  seeq_ranger,
  seeq_viking,
  seeq_berserker,
  seeq_lanista,
];