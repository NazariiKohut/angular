import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeedbacksComponent } from './feeedbacks.component';

describe('FeeedbacksComponent', () => {
  let component: FeeedbacksComponent;
  let fixture: ComponentFixture<FeeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
