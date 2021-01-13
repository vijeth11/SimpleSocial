import { PostdataService } from './../../post/shared/postdata.service';
import { Observable } from 'rxjs';
import { GroupDataService } from './../shared/group.data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.interface';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'group-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userIsAuthenticated:boolean = false;
  public groups$:Observable<Group[]>;
  public username:string=''
  public posts:any;

  constructor(
    private groupService:GroupDataService,
    private service:DataService,
    private route:ActivatedRoute,
    private router:Router
    ) { 
    this.userIsAuthenticated = this.service.Authorized();
    if(this.userIsAuthenticated){
      this.username = this.service.getUserName();
    }
    this.posts = this.route.snapshot.data.posts;
  }

  ngOnInit() {
    this.groups$ = this.groupService.getGroups();
  }

  public loadTheGroup(id:number){
    this.router.navigate(['group',id,'detail']);
  }

  public getPostsCount(groupId:number):number{    
    return this.posts ? this.posts.filter((ele)=> ele.group.id == groupId).length : 0;
  }
}
