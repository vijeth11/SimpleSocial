import { ActivatedRoute, Router } from '@angular/router';
import { Group } from './../../groups/shared/group.interface';
import { PostdataService } from './../shared/postdata.service';
import { Component, OnInit } from '@angular/core';
import { Form,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'post-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  postForm:FormGroup;
  groupsList:any = [];
  selectedGroupId:number;
  type:string;  
  public displaySuccessMessage:boolean = false;

  constructor(
    private postDataService:PostdataService,
    private route:ActivatedRoute,
    private router:Router
    ) {
    this.route.params.subscribe(data => { 
      this.selectedGroupId = data['id'];
      if(data['type']){
        this.type = data['type'];
      }
    });
   }

  ngOnInit() {
    this.postDataService.getGroups().subscribe(data => {
      data.forEach((ele)=>{
        if(ele.user != null){
          this.groupsList.push(ele);
        }
      })
    });

    this.postForm = new FormGroup({
      Message: new FormControl(),
      Group:new FormControl()
    })

    this.postForm.get('Group').setValue(this.selectedGroupId ? this.selectedGroupId : 0);
  }

  public createPost(post:FormGroup){
    if(this.type=='update'){
      this.updatePost(post);
    }else{
      this.postDataService.createPost(post.value.Group, post.value.Message).subscribe(()=>{
        this.displaySuccessMessage = true;
        setTimeout(()=>{
          this.displaySuccessMessage = false;
          this.router.navigate(['post']);
        },5000)
      },
      (error)=>{
        if(error.error['group']){
          alert(error.error['group']);
        }else if(error.error['message']){
          alert(error.error['message']);
        }else{
          alert(error.error);
        }
      });
    }
  }

  public updatePost(post:FormGroup){
    console.log(post.value.Message);
    console.log(this.selectedGroupId);
  }
}
