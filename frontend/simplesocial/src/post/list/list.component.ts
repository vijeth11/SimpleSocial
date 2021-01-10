import { PostdataService } from '../shared/postdata.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.interface';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public usergroups:any = [];
  public posts:Post[] = [];
  public othergroups:any = [];
  isUserAuthenticated:boolean = true;

  constructor(private postDataService:PostdataService) { 
    
  }

  ngOnInit() {
    this.postDataService.getPostList().subscribe((data:Post[])=>{
      this.posts = data;
    })
    this.postDataService.getGroups().subscribe((data)=>{
        data.forEach((ele)=>{
          if(ele.user != null){
          this.usergroups.push(ele);
          }else{
            this.othergroups.push(ele);
          }
        })
    });
  }

}
