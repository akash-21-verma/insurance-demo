import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlanCardComponent } from './car-plan-card.component';

describe('CarPlanCardComponent', () => {
  let component: CarPlanCardComponent;
  let fixture: ComponentFixture<CarPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPlanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
