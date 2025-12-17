import { Component } from '@angular/core';
import {
  BASE_LEVEL,
  validateLevel,
  VALIDATION_LIMITS,
} from '../constants/functions';
import { Job } from '../models/job';
import { Race } from '../models/race';
import { CharacterStats, defaultCharacterStats, Stat } from '../models/stats';
import { JobRecommendationService } from '../services/job-recommendation.service';
import { StatOptimizationService } from '../services/stat-optimization.service';

@Component({
  selector: 'app-stat-calculator',
  templateUrl: './stat-calculator.component.html',
  standalone: false,
})
export class StatCalculatorComponent {
  charStats: CharacterStats = defaultCharacterStats;

  jobs: Job[] = [];
  baseStats: CharacterStats[] = [];

  // Race selection
  selectedRace: Race = Race.HUME;
  Race = Race; // Make Race enum available in template
  
  // Custom dropdown state
  isJobDropdownOpen: boolean = false;
  isTargetJobDropdownOpen: boolean = false;

  constructor(
    private statOptimizationService: StatOptimizationService,
    private jobRecommendationService: JobRecommendationService
  ) {
    this.initializeJobs();
  }

  private initializeJobs(): void {
    if (this.selectedRace) {
      this.jobs = this.jobRecommendationService.getJobsForRace(this.selectedRace);
      this.baseStats = this.jobs.map((job) =>
        this.statOptimizationService.calculateStatsAtTargetLevel(job, 30)
      );
    }
  }
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

  // UI state
  isCalculating: boolean = false;
  isOptimizing: boolean = false;

  setBaseStats(): void {
    if (!this.selectedBaseJob) {
      return;
    }
    this.charStats = this.statOptimizationService.setBaseStatsFromJob(
      this.selectedBaseJob,
      BASE_LEVEL
    );
  }

  calculateFinalStats(): void {
    if (!this.selectedFirstJob || !this.targetLevel) {
      return;
    }

    this.isCalculating = true;

    // Add a small delay to show loading state
    setTimeout(() => {
      this.chatStatsAtTargetLevel =
        this.statOptimizationService.calculateStatsAtTargetLevel(
          this.selectedFirstJob!,
          this.targetLevel!
        );
      this.isCalculating = false;
    }, 150);
  }

  optimizeStats(): void {
    if (!this.selectedSecondaryStat || !this.selectedOptimizeStat) {
      return;
    }

    // Validate optimization feasibility first
    if (!this.validateOptimization()) {
      return; // Error message is already set in validateOptimization
    }

    this.isOptimizing = true;

    // Add a small delay to show loading state
    setTimeout(() => {
      // Clear any previous optimization errors
      this.optimizationError = '';

      // Update secondary stats filter using job recommendation service
      this.secondaryStats =
        this.jobRecommendationService.getSecondaryStatOptions(
          this.selectedOptimizeStat!
        );

      // Get optimal job recommendations
      const jobRecommendation = this.jobRecommendationService.getOptimalJobs(
        this.jobs,
        this.selectedOptimizeStat!,
        this.selectedSecondaryStat!
      );

      // Perform optimization calculation using the service
      const optimizationResult = this.statOptimizationService.optimizeStats(
        this.charStats,
        this.selectedOptimizeStat!,
        this.selectedSecondaryStat!,
        jobRecommendation.primaryJob,
        jobRecommendation.secondaryJob
      );

      console.log('Principle:', optimizationResult.principle);
      console.log(
        `${optimizationResult.primaryLevels} as ${optimizationResult.primaryJob.name}, ${optimizationResult.secondaryLevels} as ${optimizationResult.secondaryJob.name}`
      );

      this.levelGuide = optimizationResult.levelGuide;
      this.isOptimizing = false;
    }, 300);
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

    const validation = this.statOptimizationService.validateOptimization(
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

  /**
   * Handle race selection change
   */
  onRaceChange(): void {
    // Reset job selection when race changes
    this.selectedBaseJob = undefined;
    this.selectedFirstJob = undefined;
    
    // Initialize jobs for the selected race
    this.initializeJobs();
    
    // Reset character stats
    this.charStats = { ...defaultCharacterStats };
  }

  /**
   * Toggle job dropdown visibility
   */
  toggleJobDropdown(): void {
    this.isJobDropdownOpen = !this.isJobDropdownOpen;
  }

  /**
   * Select a job from the custom dropdown
   */
  selectJob(job: Job): void {
    this.selectedBaseJob = job;
    this.isJobDropdownOpen = false;
    this.setBaseStats(); // Call existing method to update stats
  }

  /**
   * Toggle target job dropdown visibility
   */
  toggleTargetJobDropdown(): void {
    this.isTargetJobDropdownOpen = !this.isTargetJobDropdownOpen;
  }

  /**
   * Select a target job from the custom dropdown
   */
  selectTargetJob(job: Job): void {
    this.selectedFirstJob = job;
    this.isTargetJobDropdownOpen = false;
    this.calculateFinalStats(); // Call existing method to update calculations
  }
}
