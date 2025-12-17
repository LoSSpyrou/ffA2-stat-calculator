import { Injectable } from '@angular/core';
import { bangaaJobs } from '../constants/bangaa_jobs';
import { getJobWithBestRate } from '../constants/functions';
import { griaJobs } from '../constants/gria_jobs';
import { humes } from '../constants/hume_jobs';
import { moogleJobs } from '../constants/moogle_jobs';
import { nu_mouJobs } from '../constants/nu_mou_jobs';
import { seeqJobs } from '../constants/seeq_jobs';
import { vieraJobs } from '../constants/viera_jobs';
import { Job } from '../models/job';
import { Race, RaceJobMapping } from '../models/race';
import { Stat } from '../models/stats';

export interface JobRecommendation {
  primaryJob: Job;
  secondaryJob: Job;
}

const RACE_JOB_MAPPINGS: RaceJobMapping[] = [
  { race: Race.HUME, jobs: humes },
  { race: Race.BANGAA, jobs: bangaaJobs },
  { race: Race.VIERA, jobs: vieraJobs },
  { race: Race.NU_MOU, jobs: nu_mouJobs },
  { race: Race.MOOGLE, jobs: moogleJobs },
  { race: Race.GRIA, jobs: griaJobs },
  { race: Race.SEEQ, jobs: seeqJobs },
];

@Injectable({
  providedIn: 'root',
})
export class JobRecommendationService {
  constructor() {}

  /**
   * Finds the best job combinations for optimizing specific stats
   */
  getOptimalJobs(
    availableJobs: Job[],
    primaryStat: Stat,
    secondaryStat: Stat
  ): JobRecommendation {
    const primaryJob = getJobWithBestRate(
      availableJobs,
      primaryStat,
      secondaryStat
    );

    const secondaryJob = getJobWithBestRate(
      availableJobs.filter((job) => job.name !== primaryJob?.name),
      secondaryStat
    );

    return {
      primaryJob,
      secondaryJob,
    };
  }

  /**
   * Gets all available jobs for a specific race
   */
  getJobsForRace(race: Race): Job[] {
    const mapping = RACE_JOB_MAPPINGS.find((m) => m.race === race);
    if (!mapping) {
      throw new Error(`Jobs for race ${race} not yet implemented`);
    }
    return mapping.jobs;
  }

  /**
   * Gets all race-job mappings
   */
  getAllRaceJobMappings(): RaceJobMapping[] {
    return RACE_JOB_MAPPINGS;
  }

  /**
   * Filters secondary stat options (excludes the primary stat)
   */
  getSecondaryStatOptions(primaryStat: Stat): Stat[] {
    return Object.values(Stat).filter((stat) => stat !== primaryStat);
  }
}
