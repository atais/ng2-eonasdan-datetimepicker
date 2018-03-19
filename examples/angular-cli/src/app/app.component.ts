import { Component, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTo = null;
  dateModel = null;
  a2eOptions: any = {
    format: 'DD.MM.YYYY',
    keepOpen: true
  };
  dateToChange(e) {
    this.dateModel = e.format('DD.MM.YYYY');
  }
}
