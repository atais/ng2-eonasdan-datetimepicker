import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-linked-datepickers',
  templateUrl: './linked-datepickers.component.html',
  styleUrls: ['./linked-datepickers.component.css']
})
export class LinkedDatepickersComponent implements OnInit {
  startDate =  moment('2015-11-18T00:00Z');
  endDate = moment('2015-11-20T00:00Z');
  startOptions: any = {format: 'DD.MM.YYYY'};
  endOptions: any = {format: 'DD.MM.YYYY'};
  constructor() { }

  ngOnInit() {
    this.endOptions.minDate = this.startDate;
    this.startOptions.maxDate = this.endDate;
  }
  update() {
    this.startOptions.maxDate = this.endDate;
    this.endOptions.minDate = this.startDate;
  }

}
