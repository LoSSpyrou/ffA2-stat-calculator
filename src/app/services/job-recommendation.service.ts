import { Injectable } from '@angular/core';
import { getJobWithBestRate } from '../constants/functions';
import { humes } from '../constants/hume_jobs';
import { bangaaJobs } from '../constants/bangaa_jobs';
import { Job } from '../models/job';
import { Stat } from '../models/stats';
import { Race } from '../models/race';

export interface JobRecommendation {
  primaryJob: Job;
  secondaryJob: Job;
}

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
    switch (race) {
      case Race.HUME:
        return humes;
      case Race.BANGAA:
        return bangaaJobs;
      default:
        throw new Error(`Jobs for race ${race} not yet implemented`);
    }
  }

  /**
   * Filters secondary stat options (excludes the primary stat)
   */
  getSecondaryStatOptions(primaryStat: Stat): Stat[] {
    return Object.values(Stat).filter((stat) => stat !== primaryStat);
  }
}
