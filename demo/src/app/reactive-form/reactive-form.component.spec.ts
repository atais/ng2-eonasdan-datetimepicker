import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';
import * as moment from 'moment';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;
  const format = 'DD/MM/YYYY';
  const opener = '.input-group-addon';
  const startDate = moment('2015-11-18T00:00Z'); // today date
  const tomorrow = startDate.clone().add(1, 'd'); // tomorrow
  const yesterday = startDate.clone().add(-1, 'd'); // yesterday
  const dateTag =  (time) => {
    const selectDateTag = 'td[data-day="' + time.format('MM/DD/YYYY') + '"]';
    return fixture.debugElement.nativeElement.querySelector(selectDateTag);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        A2Edatetimepicker
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
   it('should clear the start date - form is invalid', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('button'))[0].nativeElement.click();
      fixture.detectChanges();
      // the start input is not valid
      expect(component.form.controls['start'].valid).toBeFalsy();
      // form is not valid
      expect(component.form.valid).toBeFalsy();
    });
  }); });
  it('should clear the end date - form is invalid', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('button'))[1].nativeElement.click();
      fixture.detectChanges();
      // the end input is not valid
      expect(component.form.controls['end'].valid).toBeFalsy();
      // form is not valid
      expect(component.form.valid).toBeFalsy();
    });
  });
  it('should select start date and end date - form is valid', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      fixture.detectChanges();
      dateTag(yesterday).click();
      fixture.detectChanges();
      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
      fixture.detectChanges();
      dateTag(tomorrow).click();
      fixture.detectChanges();
      // the start input is valid
      expect(component.form.controls['start'].valid).toBeTruthy();
      // the end input is valid
      expect(component.form.controls['end'].valid).toBeTruthy();
      // form is valid
      expect(component.form.valid).toBeTruthy();
      // start value
      expect(component.form.value.start.format(format)).toBe(yesterday.format(format));
      // end value
      expect(component.form.value.end.format(format)).toBe(tomorrow.format(format));
    });
  });
});
