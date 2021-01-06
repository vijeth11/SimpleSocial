import { ActivatedRoute, Router } from '@angular/router';
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
  public displaySuccessMessage:boolean = false;

  constructor(
    private groupService:GroupDataService, 
    private route:ActivatedRoute,
    private router:Router
    ) {
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
    this.groupService.createGroup(form.value.name, form.value.description).subscribe(()=>{
      this.displaySuccessMessage = true;
      setTimeout(()=>{
        this.displaySuccessMessage = false;
        this.router.navigate(['group']);
      },10000)
    });
  }
}
