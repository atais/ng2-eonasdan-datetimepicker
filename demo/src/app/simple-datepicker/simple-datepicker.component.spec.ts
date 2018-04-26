import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SimpleDatepickerComponent } from './simple-datepicker.component';
import { FormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';
import * as moment from 'moment';

describe('SimpleDatepickerComponent', () => {
  let component: SimpleDatepickerComponent;
  let fixture: ComponentFixture<SimpleDatepickerComponent>;
  const startTime = moment('2015-11-20T22:10Z');
  const dtFormat = 'YYYY/MM/DD HH:mm';
  const testFields =  (properTime) => {
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual((properTime.format(dtFormat)));
      const output = component.dateModel.format(dtFormat);
      expect(output).toBe(properTime.format(dtFormat));
    });
  };

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
  it('should present current timer', async(() => {
    testFields(startTime.clone());
  }));
  it('should add one hour and present time',  async(() => {
    const btn = fixture.debugElement.query(By.css('button:nth-of-type(2)')).nativeElement;
    btn.click();
    fixture.detectChanges();
    testFields(startTime.clone().add(1, 'h'));
  }));
  it('should add one day and present time',  async(() => {
    const btn = fixture.debugElement.query(By.css('button:nth-of-type(3)')).nativeElement;
    btn.click();
    fixture.detectChanges();
    testFields(startTime.clone().add(1, 'd'));
  }));
  it('should add one week and present time',  async(() => {
    const btn = fixture.debugElement.query(By.css('button:nth-of-type(4)')).nativeElement;
    btn.click();
    fixture.detectChanges();
    testFields(startTime.clone().add(1, 'w'));
  }));
  it('clear the time',  async(() => {
    const btn = fixture.debugElement.query(By.css('button:nth-of-type(5)')).nativeElement;
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toEqual('');
      const output = component.dateModel;
      expect(output).toBeFalsy();
    });
  }));
  it('clear and restore the time - input', async(() => {
      const btn = fixture.debugElement.query(By.css('button:nth-of-type(5)')).nativeElement;
      btn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.debugElement.queryAll(By.css('.input-group-addon'))[0].nativeElement.click();
        fixture.detectChanges();
        testFields(moment());
      });
  }));
  it('clear and restore the time - input group', async(() => {
    const btn = fixture.debugElement.query(By.css('button:nth-of-type(5)')).nativeElement;
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('.input-group-addon'))[1].nativeElement.click();
      fixture.detectChanges();
      testFields(moment());
    });
}));
  it('should set selected date - input',  async(() => {
    const selectedMoment = startTime.clone().date(11);
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('.input-group-addon'))[0].nativeElement.click();
      fixture.debugElement.nativeElement.querySelector('td[data-day="11/11/2015"]').click();
      fixture.detectChanges();
      testFields(selectedMoment);
    });
  }));
  it('should set selected date - input group',  async(() => {
    const selectedMoment = startTime.clone().date(11);
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css('.input-group-addon'))[1].nativeElement.click();
      fixture.debugElement.nativeElement.querySelector('td[data-day="11/11/2015"]').click();
      fixture.detectChanges();
      testFields(selectedMoment);
    });
  }));

});
