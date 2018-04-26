import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {A2Edatetimepicker} from '../../../src/index';
import { LinkedDatepickersComponent } from './linked-datepickers/linked-datepickers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleDatepickerComponent } from './simple-datepicker/simple-datepicker.component';
import { AdvancedDatepickerComponent } from './advanced-datepicker/advanced-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkedDatepickersComponent,
    ReactiveFormComponent,
    SimpleDatepickerComponent,
    AdvancedDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    A2Edatetimepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
