import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-datepicker',
  templateUrl: './simple-datepicker.component.html',
  styleUrls: ['./simple-datepicker.component.css']
})
export class SimpleDatepickerComponent implements OnInit {

  dateModel = null;
  options = {};

  constructor() { }

  ngOnInit() {
  }

}
