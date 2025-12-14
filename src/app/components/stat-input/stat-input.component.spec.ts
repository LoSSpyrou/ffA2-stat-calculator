import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatInputComponent } from './stat-input.component';

describe('StatInputComponent', () => {
  let component: StatInputComponent;
  let fixture: ComponentFixture<StatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
