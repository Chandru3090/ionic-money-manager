import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTrackerPage } from './loan-tracker.page';

describe('LoanTrackerPage', () => {
  let component: LoanTrackerPage;
  let fixture: ComponentFixture<LoanTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
