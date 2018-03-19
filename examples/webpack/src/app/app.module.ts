import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A2Edatetimepicker } from 'ng2-eonasdan-datetimepicker';

@NgModule({
  imports: [
    BrowserModule,
    A2Edatetimepicker
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }