import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatepickerComponent } from './simple-datepicker.component';
import { FormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';

describe('SimpleDatepickerComponent', () => {
  let component: SimpleDatepickerComponent;
  let fixture: ComponentFixture<SimpleDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDatepickerComponent ],
      imports: [
        FormsModule,
        A2Edatetimepicker
      ]
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
