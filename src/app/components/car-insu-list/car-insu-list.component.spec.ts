import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuListComponent } from './car-insu-list.component';

describe('CarInsuListComponent', () => {
  let component: CarInsuListComponent;
  let fixture: ComponentFixture<CarInsuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarInsuListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInsuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
