import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermListCardComponent } from './term-list-card.component';

describe('TermListCardComponent', () => {
  let component: TermListCardComponent;
  let fixture: ComponentFixture<TermListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
