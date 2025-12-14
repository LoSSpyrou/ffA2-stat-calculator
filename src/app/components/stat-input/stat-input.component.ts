import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  clampToValidRange,
  STAT_VALIDATION,
  validateStat,
} from '../../constants/functions';
import { Stat } from '../../models/stats';

@Component({
  selector: 'stat-input',
  templateUrl: './stat-input.component.html',
  styleUrls: ['./stat-input.component.scss'],
  standalone: false,
})
export class StatInputComponent {
  @Input() label: string = '';
  @Input() statValue: number = 0;
  @Input() statType: Stat = Stat.HP; // Which stat this input represents
  @Output() statValueChange = new EventEmitter<number>();

  validationError: string = '';
  isValid: boolean = true;

  get minValue(): number {
    return STAT_VALIDATION[this.statType].min;
  }

  get maxValue(): number {
    return STAT_VALIDATION[this.statType].max;
  }

  onInputChange(value: number) {
    const validation = validateStat(this.statType, value);

    this.isValid = validation.isValid;
    this.validationError = validation.error || '';

    // Auto-correct invalid values
    const correctedValue = validation.isValid
      ? value
      : validation.correctedValue || clampToValidRange(this.statType, value);

    this.statValueChange.emit(correctedValue);
  }

  onInputBlur() {
    // Ensure value is in valid range when user leaves input
    const correctedValue = clampToValidRange(this.statType, this.statValue);
    if (correctedValue !== this.statValue) {
      this.statValueChange.emit(correctedValue);
    }
  }
}
