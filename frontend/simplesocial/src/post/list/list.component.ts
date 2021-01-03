import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public usergroups:any = [];
  public posts:any = [];
  public othergroups:any = [];
  isUserAuthenticated:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
