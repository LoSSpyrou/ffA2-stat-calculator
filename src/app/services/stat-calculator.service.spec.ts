import { TestBed } from '@angular/core/testing';

import { StatCalculatorService } from './stat-calculator.service';

describe('StatCalculatorService', () => {
  let service: StatCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
