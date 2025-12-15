import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Race } from '../models/race';
import { humes } from '../constants/hume_jobs';
import { bangaaJobs } from '../constants/bangaa_jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private allJobs: Job[] = [
    ...humes,
    ...bangaaJobs
  ];

  constructor() { }

  /**
   * Get all available jobs
   */
  getAllJobs(): Job[] {
    return this.allJobs;
  }

  /**
   * Get jobs filtered by race
   */
  getJobsByRace(race: Race): Job[] {
    return this.allJobs.filter(job => job.race === race);
  }

  /**
   * Get all available races
   */
  getAvailableRaces(): Race[] {
    return Object.values(Race);
  }

  /**
   * Get jobs for Hume race (backward compatibility)
   */
  getHumeJobs(): Job[] {
    return this.getJobsByRace(Race.HUME);
  }

  /**
   * Get jobs for Bangaa race
   */
  getBangaaJobs(): Job[] {
    return this.getJobsByRace(Race.BANGAA);
  }
}