import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  startOptions: any = {format: 'DD/MM/YYYY'};
  endOptions: any = {format: 'DD/MM/YYYY'};
  constructor(fb: FormBuilder ) {
    this.form = fb.group({
      start: [moment('2015-11-18T00:00Z'), Validators.required],
      end: [moment('2015-11-24T00:00Z'), Validators.required],
      test: ''
    });
  }

  ngOnInit() {
  }
  startReset() {
    this.form.controls['start'].reset();
  }
  endReset() {
    this.form.controls['end'].reset();
  }

}
