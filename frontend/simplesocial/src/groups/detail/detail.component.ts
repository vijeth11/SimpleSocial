import { GroupDataService } from './../shared/group.data.service';
import { DataService } from './../../app/shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'group-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public userInCurrentGroup:boolean = true;
  public posts:any = [];
  public group:Group;
  public loggedInUserName:String;

  constructor(private service:DataService,
    private groupService:GroupDataService,
    private router:ActivatedRoute) { 
    this.router.params.subscribe(groupId => {
      this.groupService.getGroup(groupId.id).subscribe((detail:Group) => {
        this.group = detail;
        this.loggedInUserName = detail.adminuser.username; // needs to be changed to dataservice
      });
    })
  }

  ngOnInit() {
  }

  isUserAuthenticated():boolean{
    return this.service.Authorized();
  }

}
