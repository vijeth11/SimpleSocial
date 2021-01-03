import { Component, OnInit } from '@angular/core';
import { Form,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'post-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  postForm:FormGroup;
  constructor() {
   }

  ngOnInit() {
    this.postForm = new FormGroup({
      Message: new FormControl(),
      Group:new FormControl()
    })
  }

  public createPost(post:FormGroup){
    console.log(post.value.Message);
  }
}
