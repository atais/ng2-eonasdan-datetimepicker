import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDatepickerComponent } from './advanced-datepicker.component';

describe('AdvancedDatepickerComponent', () => {
  let component: AdvancedDatepickerComponent;
  let fixture: ComponentFixture<AdvancedDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
