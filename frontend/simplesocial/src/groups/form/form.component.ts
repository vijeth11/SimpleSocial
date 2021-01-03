import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import { GroupDataService } from '../shared/group.data.service';
@Component({
  selector: 'group-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public type:string;
  public createGroupForm:FormGroup;
  constructor(private groupService:GroupDataService, private route:ActivatedRoute) {
    this.route.params.subscribe((data)=>{
      this.type = data.type ? data.type.toLowerCase() : 'create';
    });
   }

  ngOnInit() {
    
    this.createGroupForm = new FormGroup({
      name : new FormControl(),
      description : new FormControl()
    })
  }

  onCreate(form:FormGroup){
    this.groupService.createGroup(form.value.name, form.value.description).subscribe();
  }
}
