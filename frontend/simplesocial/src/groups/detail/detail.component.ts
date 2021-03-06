import { PostdataService } from './../../post/shared/postdata.service';
import { GroupDataService } from './../shared/group.data.service';
import { DataService } from './../../app/shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/group.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'group-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public userInCurrentGroup:boolean = false;
  public posts:any;
  public group:Group;
  public loggedInUserName:String;

  constructor(private service:DataService,
    private groupService:GroupDataService,
    private route:ActivatedRoute,
    private postService:PostdataService,
    private router:Router) { 
    this.route.params.subscribe(groupId => {
      this.groupService.getGroup(groupId.id).subscribe((detail:Group) => {
        this.group = detail;
        this.loggedInUserName = this.service.getUserName(); 
        this.userInCurrentGroup = this.group.members.findIndex((element) => {return element.email==this.loggedInUserName;}) > -1;
        this.posts = this.route.snapshot.data.posts ? this.route.snapshot.data.posts.filter((ele) => ele.group.id == groupId.id) : [];
      });
    })
  }
  
  public isLoggedInUserAdmin():boolean{
    if(this.group && this.group.adminUser){
    return this.group.adminUser.email == this.loggedInUserName;
    }else{
      return false;
    }
  }
  ngOnInit() {
  }

  isUserAuthenticated():boolean{
    return this.service.Authorized();
  }

  leaveGroup(groupId:number,event:any){
    event.preventDefault();
    this.groupService.leaveGroup(groupId).subscribe(success=>{
      window.location.reload();
    },error =>{
      alert(error.error);
    })
  }

  joinGroup(groupId:number){
    this.groupService.addMember(groupId).subscribe(success=>{
      window.location.reload();
    },
      error => {
        console.log(error);
      })
  }

  deleteGroup(groupId:number){
    if(confirm("are you sure want to delete")){
      this.groupService.deleteGroup(groupId).subscribe(()=>{
        this.router.navigate(['../../../','group']);
      },(error)=>{
        alert(error.error);
      });
    }
  }
}
