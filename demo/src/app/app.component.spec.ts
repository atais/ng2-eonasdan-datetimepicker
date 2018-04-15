import { TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A2Edatetimepicker } from '../../../src/index';
import { AppComponent } from './app.component';
import { LinkedDatepickersComponent } from './linked-datepickers/linked-datepickers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleDatepickerComponent } from './simple-datepicker/simple-datepicker.component';
import { AdvancedDatepickerComponent } from './advanced-datepicker/advanced-datepicker.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LinkedDatepickersComponent,
        ReactiveFormComponent,
        SimpleDatepickerComponent,
        AdvancedDatepickerComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        A2Edatetimepicker
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
