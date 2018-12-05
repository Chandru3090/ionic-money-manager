import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionbyMonthlyPage } from './view-transactionby-monthly.page';

describe('ViewTransactionbyMonthlyPage', () => {
  let component: ViewTransactionbyMonthlyPage;
  let fixture: ComponentFixture<ViewTransactionbyMonthlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransactionbyMonthlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransactionbyMonthlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
