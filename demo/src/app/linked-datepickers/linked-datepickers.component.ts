import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-datepickers',
  templateUrl: './linked-datepickers.component.html',
  styleUrls: ['./linked-datepickers.component.css']
})
export class LinkedDatepickersComponent implements OnInit {
  startDate = null;
  endDate = null;
  startOptions: any = {format: 'DD/MM/YYYY'};
  endOptions: any = {format: 'DD/MM/YYYY'};
  constructor() { }

  ngOnInit() {
  }
  update() {
    this.startOptions.maxDate = this.endDate;
    this.endOptions.minDate = this.startDate;
  }

}
