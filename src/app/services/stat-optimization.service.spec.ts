import { TestBed } from '@angular/core/testing';

import { StatOptimizationService } from './stat-optimization.service';

describe('StatOptimizationService', () => {
  let service: StatOptimizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatOptimizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
