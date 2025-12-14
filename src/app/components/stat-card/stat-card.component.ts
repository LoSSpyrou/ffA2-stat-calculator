import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  allStats,
  CharacterStats,
  defaultCharacterStats,
} from 'src/app/models/stats';

@Component({
  selector: 'stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StatCardComponent {
  @Input() stats: CharacterStats = defaultCharacterStats;
  @Input() rightArrow?: boolean;

  allStats = allStats;
}
