import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    dateTo: any = null;
    dateModel: any = null;
    a2eOptions = {
      format: 'MM.DD.YYYY hh:mm A'
    }
    dateToChange(e: any) {
      this.dateModel = e.format('MM.DD.YYYY hh:mm A')
    }
}