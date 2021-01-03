import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() post:any;
  constructor() { }

  ngOnInit() {
  }

  public deletePost(id){
    console.log(id);
  }
}
