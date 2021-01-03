import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  posts:any = []
  constructor() { }

  ngOnInit() {
  }

}
