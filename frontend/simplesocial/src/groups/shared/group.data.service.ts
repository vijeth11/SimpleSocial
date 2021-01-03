import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group.interface';
import { DataService } from 'src/app/shared/data.service';
@Injectable()
export class GroupDataService {
  loggedinUserToken:string = '';
  constructor(private http:HttpClient,private authentication:DataService) { }

  public getGroups():Observable<Group[]>{
    return this.http.get<Group[]>("api/group/");
  }

  public getGroup(id:number):Observable<Group>{
      return this.http.get<Group>('api/group/'+id.toString()+'/',{headers:{'Authorization':this.authentication.getLoggedInUserToken()}});
  }

  public createGroup(name:string, description:string):Observable<any>{
     return this.http.post<any>('api/group/',
     {
         'name':name,
         'description':description
     },
     {
         headers:{
             'Authorization':this.authentication.getLoggedInUserToken()
            }
    });
  }
}
