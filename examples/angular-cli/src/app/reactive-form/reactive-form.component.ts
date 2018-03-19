import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      start: ['', Validators.required ],
      end: ['', Validators.required ],
    });
  }

  ngOnInit() {
  }

}
