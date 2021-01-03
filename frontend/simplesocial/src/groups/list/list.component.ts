import { GroupDataService } from './../shared/group.data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.interface';

@Component({
  selector: 'group-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userIsAuthenticated:boolean = false;
  public groups:Group[]=[];
  
  constructor(private groupService:GroupDataService) { 
    this.groupService.getGroups().subscribe((data:Group[])=>{
      this.groups = data;
    });
  }

  ngOnInit() {
   
  }

}
