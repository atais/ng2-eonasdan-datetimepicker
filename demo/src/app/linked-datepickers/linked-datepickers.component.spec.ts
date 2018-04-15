import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDatepickersComponent } from './linked-datepickers.component';
import { FormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../../src/index';

describe('LinkedDatepickersComponent', () => {
  let component: LinkedDatepickersComponent;
  let fixture: ComponentFixture<LinkedDatepickersComponent>;

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
});
