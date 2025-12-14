import { Component } from '@angular/core';
import {
  BASE_LEVEL,
  getJobWithBestRate,
  getPrinciple,
  getRequiredLevels,
  MAX_LEVEL,
  validateLevel,
  validateOptimizationFeasibility,
  VALIDATION_LIMITS,
} from '../constants/functions';
import { humes } from '../constants/hume_jobs';
import { Job } from '../models/job';
import { CharacterStats, defaultCharacterStats, Stat } from '../models/stats';
import { calculateStats } from '../util/job_util';

@Component({
  selector: 'app-stat-calculator',
  templateUrl: './stat-calculator.component.html',
  standalone: false,
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

  // Validation state
  isLevelValid: boolean = true;
  levelValidationError: string = '';
  optimizationError: string = '';

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

    // Validate optimization feasibility first
    if (!this.validateOptimization()) {
      return; // Error message is already set in validateOptimization
    }

    // Clear any previous optimization errors
    this.optimizationError = '';
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
      this.charStats.level,
      this.selectedOptimizeStat === Stat.SPD
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

  validateAndUpdateLevel(level: number) {
    const validation = validateLevel(level);

    this.isLevelValid = validation.isValid;
    this.levelValidationError = validation.error || '';

    if (!validation.isValid && validation.correctedValue !== undefined) {
      this.charStats.level = validation.correctedValue;
    }
  }

  validateAndUpdateTargetLevel(level: number): void {
    if (level < VALIDATION_LIMITS.MIN_LEVEL) {
      this.targetLevel = VALIDATION_LIMITS.MIN_LEVEL;
    } else if (level > VALIDATION_LIMITS.MAX_LEVEL) {
      this.targetLevel = VALIDATION_LIMITS.MAX_LEVEL;
    } else {
      this.targetLevel = level;
    }
    this.calculateFinalStats();
  }

  onLevelBlur(): void {
    // Clamp level to valid range when user leaves input
    const level = Math.max(
      VALIDATION_LIMITS.MIN_LEVEL,
      Math.min(VALIDATION_LIMITS.MAX_LEVEL, this.charStats.level)
    );
    if (level !== this.charStats.level) {
      this.charStats.level = level;
    }
    this.validateAndUpdateLevel(this.charStats.level);
  }

  validateOptimization(): boolean {
    if (!this.selectedOptimizeStat) return false;

    const currentValue = this.charStats.stats[this.selectedOptimizeStat];
    const targetValue = this.selectedOptimizeStat === Stat.SPD ? 149 : 999; // Assume max target

    const validation = validateOptimizationFeasibility(
      this.charStats.level,
      this.selectedOptimizeStat,
      currentValue,
      targetValue
    );

    this.optimizationError = validation.error || '';
    return validation.isValid;
  }

  debug() {
    console.log(this.selectedOptimizeStat);
  }
}
