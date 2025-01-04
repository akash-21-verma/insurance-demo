import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermlifeComponent } from './termlife.component';

describe('TermlifeComponent', () => {
  let component: TermlifeComponent;
  let fixture: ComponentFixture<TermlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermlifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
