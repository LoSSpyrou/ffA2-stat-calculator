import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'stat-input',
    templateUrl: './stat-input.component.html',
    styleUrls: ['./stat-input.component.scss'],
    standalone: false
})
export class StatInputComponent {
  @Input() label: string = '';
  @Input() statValue: number = 0;
  @Output() statValueChange = new EventEmitter<number>();
}
