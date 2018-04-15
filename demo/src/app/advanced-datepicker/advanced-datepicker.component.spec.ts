import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDatepickerComponent } from './advanced-datepicker.component';
import { FormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';

describe('AdvancedDatepickerComponent', () => {
  let component: AdvancedDatepickerComponent;
  let fixture: ComponentFixture<AdvancedDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDatepickerComponent ],
      imports: [
        FormsModule,
        A2Edatetimepicker
      ]
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
