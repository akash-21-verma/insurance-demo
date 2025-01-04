import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoterinsuranceComponent } from './moterinsurance.component';

describe('MoterinsuranceComponent', () => {
  let component: MoterinsuranceComponent;
  let fixture: ComponentFixture<MoterinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoterinsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoterinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
