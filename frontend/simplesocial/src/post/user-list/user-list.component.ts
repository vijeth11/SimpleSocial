import { PostdataService } from './../shared/postdata.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public posts:any = []
  public username="";
  
  constructor(private route:ActivatedRoute,private postService:PostdataService) { 
    this.posts = this.route.snapshot.data.post;
    this.route.params.subscribe(data=>{
      this.username = data['name'];
      if(this.username){
        this.posts = this.route.snapshot.data.post.filter(ele => ele.user.username == this.username);
      }
    });
  }

  ngOnInit() {
  }

}
