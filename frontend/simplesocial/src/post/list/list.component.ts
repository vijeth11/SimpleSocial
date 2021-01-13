import { ActivatedRoute } from '@angular/router';
import { PostdataService } from '../shared/postdata.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../shared/post.interface';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public usergroups:any = [];
  @Input() inGroupPage:boolean = false;
  @Input() posts:Post[] = [];
  @Input() displayOnlyList:boolean = false;
  public othergroups:any = [];
  isUserAuthenticated:boolean = true;

  constructor(private postDataService:PostdataService, private route:ActivatedRoute) { 
    this.posts = this.route.snapshot.data.post;
  }

  ngOnInit() {
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
