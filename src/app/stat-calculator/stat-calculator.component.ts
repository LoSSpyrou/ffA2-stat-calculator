import { Component } from '@angular/core';
import {
  BASE_LEVEL,
  getJobWithBestRate,
  getPrinciple,
  getRequiredLevels,
  MAX_LEVEL,
} from '../constants/functions';
import { humes } from '../constants/hume_jobs';
import { Job } from '../models/job';
import { CharacterStats, defaultCharacterStats, Stat } from '../models/stats';
import { calculateStats } from '../util/job_util';

@Component({
    selector: 'app-stat-calculator',
    templateUrl: './stat-calculator.component.html',
    standalone: false
})
export class StatCalculatorComponent {
  charStats: CharacterStats = defaultCharacterStats;

  jobs = humes;
  baseStats = this.jobs.map((job) => calculateStats(job, 30));
  stats = Object.values(Stat);

  statsEnum = Stat;

  secondaryStats = Object.values(Stat);

  selectedFirstJob?: Job;
  targetLevel?: number;

  selectedOptimizeStat?: Stat;
  selectedSecondaryStat?: Stat;

  selectedBaseJob?: Job;

  chatStatsAtTargetLevel: CharacterStats = defaultCharacterStats;

  levelGuide?: { firstStats: CharacterStats; secondStats: CharacterStats };

  setBaseStats(): void {
    if (!this.selectedBaseJob) {
      return;
    }
    this.charStats = calculateStats(this.selectedBaseJob, BASE_LEVEL);
  }

  calculateFinalStats(): void {
    if (!this.selectedFirstJob || !this.targetLevel) {
      return;
    }

    this.chatStatsAtTargetLevel = calculateStats(
      this.selectedFirstJob,
      this.targetLevel
    );
  }

  optimizeStats(): void {
    if (!this.selectedSecondaryStat || !this.selectedOptimizeStat) {
      return;
    }
    this.secondaryStats = this.stats.filter(
      (stat) => stat !== this.selectedOptimizeStat
    );
    const primaryJob = getJobWithBestRate(
      this.jobs,
      this.selectedOptimizeStat!,
      this.selectedSecondaryStat
    );
    const secondJob = getJobWithBestRate(
      this.jobs.filter((job) => job.name !== primaryJob?.name),
      this.selectedSecondaryStat
    );

    const principle = getPrinciple(
      this.charStats.stats[this.selectedOptimizeStat],
      this.selectedOptimizeStat === Stat.SPD
    );
    console.log('Principle:', principle);
    const primaryLevels = getRequiredLevels(
      principle,
      primaryJob.rate[this.selectedOptimizeStat],
      secondJob.rate[this.selectedOptimizeStat],
      this.charStats.level
    );

    const secondaryLevels = MAX_LEVEL - this.charStats.level - primaryLevels;
    console.log(
      `${primaryLevels} as ${primaryJob.name}, ${secondaryLevels} as ${secondJob.name}`
    );
    const firstStats = calculateStats(
      primaryJob,
      Math.round(primaryLevels),
      this.charStats
    );
    const secondStats = calculateStats(
      secondJob,
      Math.round(secondaryLevels),
      firstStats
    );
    this.levelGuide = {
      firstStats,
      secondStats,
    };
  }

  debug() {
    console.log(this.selectedOptimizeStat);
  }
}
