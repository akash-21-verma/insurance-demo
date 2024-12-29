import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancardComponent } from './plancard.component';

describe('PlancardComponent', () => {
  let component: PlancardComponent;
  let fixture: ComponentFixture<PlancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlancardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
