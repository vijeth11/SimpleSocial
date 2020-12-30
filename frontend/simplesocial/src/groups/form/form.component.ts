import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public createGroupForm:FormGroup;
  constructor() { }

  ngOnInit() {
    
    this.createGroupForm = new FormGroup({
      name : new FormControl(),
      description : new FormControl()
    })
  }

  onCreate(form:FormGroup){
    console.log(form.value.name);
  }
}
