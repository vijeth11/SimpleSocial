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
  public groupid:number;
  public createGroupForm:FormGroup;
  public displaySuccessMessage:boolean = false;

  constructor(
    private groupService:GroupDataService, 
    private route:ActivatedRoute,
    private router:Router
    ) {
    this.route.params.subscribe((data)=>{
      this.type = data.type ? data.type.toLowerCase() : 'create';
      if(this.type=='update'){
        this.groupid = data['id'];
      }
    });
   }

  ngOnInit() {
    
    this.createGroupForm = new FormGroup({
      name : new FormControl(),
      description : new FormControl()
    })
  }

  onCreate(form:FormGroup){
    if(this.type=="create"){
        this.groupService.createGroup(form.value.name, form.value.description).subscribe(()=>{
          this.displaySuccessMessage = true;
          setTimeout(()=>{
            this.displaySuccessMessage = false;
            this.router.navigate(['group']);
          },5000)
        },
        (error)=>{
          alert(error.error);
        });
    }else if (this.type == "update"){
      this.groupService.updateGroup(this.groupid,form.value.name, form.value.description).subscribe(()=>{
        this.displaySuccessMessage = true;
        setTimeout(()=>{
          this.displaySuccessMessage = false;
          this.router.navigate(['group']);
        },5000)
      },
      (error)=>{
        if(error.error.name){
          alert(error.error.name[0]);
        }else if(error.error.description){
          alert(error.error.description[0]);
        }else{
          alert("some error has come check with admin");
        }
      });
    }

  }
}
