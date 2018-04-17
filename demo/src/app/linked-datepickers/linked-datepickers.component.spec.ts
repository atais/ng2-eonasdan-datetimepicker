import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDatepickersComponent } from './linked-datepickers.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';
import * as moment from 'moment';

describe('LinkedDatepickersComponent', () => {
  let component: LinkedDatepickersComponent;
  let fixture: ComponentFixture<LinkedDatepickersComponent>;
  const opener = '.input-group-addon';

  const date18 = moment('2015-11-18T00:00Z'); // 2015-11-18
  const date20 = moment('2015-11-20T00:00Z'); // 2015-11-20

  const date17 = date18.clone().add(-1, 'd'); // 2015-11-17
  const date19 = date18.clone().add(1, 'd'); // 2015-11-19
  const date21 = date20.clone().add(1, 'd'); // 2015-11-21
  const dateTag =  (time) => {
    const selectDateTag = 'td[data-day="' + time.format('MM/DD/YYYY') + '"]';
    return fixture.debugElement.query(By.css(selectDateTag)).nativeElement;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedDatepickersComponent ],
      imports: [
        FormsModule,
        A2Edatetimepicker
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedDatepickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have disabled dates from outside the range', () => {
    fixture.whenStable().then(() => {
      // pickerFrom should be able to select dates before From but not after To
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      expect(dateTag(date17).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date21).getAttribute('class')).toContain('disabled');
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();

      // pickerTo should be able to select dates after To but not before From
      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
      expect(dateTag(date17).getAttribute('class')).toContain('disabled');
      expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date21).getAttribute('class')).not.toContain('disabled');
      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
    });
 });

  it('should change when new date is selected', () => {
    fixture.whenStable().then(() => {
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      dateTag(date19).click();

      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
      dateTag(date19).click();
      // pickerFrom should be able to select dates before From but not after To
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();
      expect(dateTag(date17).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date18).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date20).getAttribute('class')).toContain('disabled');
      expect(dateTag(date21).getAttribute('class')).toContain('disabled');
      fixture.debugElement.queryAll(By.css(opener))[0].nativeElement.click();

      // pickerTo should be able to select dates after To but not before From
      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
      expect(dateTag(date17).getAttribute('class')).toContain('disabled');
      expect(dateTag(date18).getAttribute('class')).toContain('disabled');
      expect(dateTag(date19).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date20).getAttribute('class')).not.toContain('disabled');
      expect(dateTag(date21).getAttribute('class')).not.toContain('disabled');
      fixture.debugElement.queryAll(By.css(opener))[1].nativeElement.click();
    });
  });
});
