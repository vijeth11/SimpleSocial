import { GroupDataService } from './../../groups/shared/group.data.service';
import { Post } from './post.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import { map } from 'rxjs/operators';
import { Group } from 'src/groups/shared/group.interface';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(
    private http:HttpClient,
    private authentication:DataService,
    private groupDataService:GroupDataService) { }

  public getPostList():Observable<Post[]>{
    return this.http.get<Post[]>("api/post/",{
      headers: {
        "Authorization":this.authentication.getLoggedInUserToken()
      }
    });
  }

  public getGroups(){    
    return this.groupDataService.getGroups().pipe(map((data:Group[])=>{
      let grouplist = []
      data.forEach(ele=>{
        let user= null;
        if (ele.adminUser.email == this.authentication.getUserName()){
          user= ele.adminUser;
        }else {
          let index = ele.members.findIndex((ele1)=>{return ele1.email == this.authentication.getUserName();});
          if(index > -1){
              user = ele.members[index];
          }
        }
        grouplist.push({"id":ele.id,"name":ele.name,"user":user});
      });
      return grouplist;
    }));
  }


  public createPost(groupId:number, message:string){
    return this.http.post<any>('api/post-create/',{
      "group":groupId,
      "message":message
    },
    {
      headers:{
        "Authorization":this.authentication.getLoggedInUserToken()
      }
    });
  }

  public updatePost(groupId:number, message:string, postId:number){
    return this.http.put<any>('api/post-update/'+postId+'/',{
      "group":groupId,
      "message":message
    },
    {
      headers:{
        "Authorization":this.authentication.getLoggedInUserToken()
      }
    });
  }

  public deletePost(postId:number){
    return this.http.delete<any>('api/post-update/'+postId+'/',
    {
      headers:{
        "Authorization":this.authentication.getLoggedInUserToken()
      }
    });
  }
}
