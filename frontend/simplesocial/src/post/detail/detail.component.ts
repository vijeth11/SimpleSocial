import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { PostdataService } from './../shared/postdata.service';
import { Post } from './../shared/post.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() post:Post;
  public isUserAuthenticated:boolean = false;
  public loggedInUserEmail:string = "";
  constructor(
    private postService:PostdataService,
    private authentication:DataService,
    private router:Router) {
    this.isUserAuthenticated = this.authentication.Authorized();
    this.loggedInUserEmail = this.authentication.getUserName();
    this.authentication.isUserLoggedIn.subscribe((data:boolean) => {
      this.isUserAuthenticated = data;
      console.log(this.isUserAuthenticated);
    });
   }

  ngOnInit() {
  }

  
  public deletePost(postId:number){
    this.postService.deletePost(postId).subscribe(()=>{
      window.location.reload();
    },
    (error)=>{
      alert(error.error);
    })
  }
}
