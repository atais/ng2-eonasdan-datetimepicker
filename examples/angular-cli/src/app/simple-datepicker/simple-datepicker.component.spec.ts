import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatepickerComponent } from './simple-datepicker.component';

describe('SimpleDatepickerComponent', () => {
  let component: SimpleDatepickerComponent;
  let fixture: ComponentFixture<SimpleDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
