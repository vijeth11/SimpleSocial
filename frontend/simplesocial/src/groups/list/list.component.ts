import { GroupDataService } from './../shared/group.data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.interface';
import { DataService } from 'src/app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'group-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userIsAuthenticated:boolean = false;
  public groups:Group[]=[];
  public username:string=''
  
  constructor(
    private groupService:GroupDataService,
    private service:DataService,
    private router:Router
    ) { 
    this.userIsAuthenticated = this.service.Authorized();
    if(this.userIsAuthenticated){
      this.username = this.service.getUserName();
    }
    this.groupService.getGroups().subscribe((data:Group[])=>{
      this.groups = data;
    });
  }

  ngOnInit() {
   
  }

  public loadTheGroup(id:number){
    this.router.navigate(['group',id,'detail']);
  }
}
