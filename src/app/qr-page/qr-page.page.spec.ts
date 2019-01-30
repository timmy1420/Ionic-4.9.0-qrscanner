import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPagePage } from './qr-page.page';

describe('QrPagePage', () => {
  let component: QrPagePage;
  let fixture: ComponentFixture<QrPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
