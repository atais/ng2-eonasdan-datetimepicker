import { Component, OnInit, ViewChild } from '@angular/core';
import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker';

@Component({
  selector: 'app-advanced-datepicker',
  templateUrl: './advanced-datepicker.component.html',
  styleUrls: ['./advanced-datepicker.component.css']
})
export class AdvancedDatepickerComponent implements OnInit {
  dateModel = null;
  options = {};
  @ViewChild(DateTimePickerDirective) dp: DateTimePickerDirective;
  constructor() { }
  ngOnInit() {
  }

  open() {
    this.dp.datepicker.show();
  }

}
