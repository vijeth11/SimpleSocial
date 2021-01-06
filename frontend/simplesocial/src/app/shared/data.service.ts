import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loggedinUserToken:string = '';
  private userName:string ='';
  public isUserLoggedIn:Subject<boolean> = new Subject<boolean>();
  constructor(private http:HttpClient,private router:Router) { 
    this.isUserLoggedIn.next(false);
  }

  public getUserName():string{
    return this.userName;
  }
  public Authorized():boolean{
    this.getLoggedInUserToken();
    this.isUserLoggedIn.next(this.loggedinUserToken.length > 0);
    return this.loggedinUserToken.length > 0 ?  true: false;
  }

  public getLoggedInUserToken():string{
    this.loggedinUserToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : this.loggedinUserToken;
    this.userName = localStorage.getItem('username') ? localStorage.getItem('username') : this.userName;
    return this.loggedinUserToken;
  }
  
  private setLoginTokenandUsername(username:string,token:string){
      this.loggedinUserToken='Token '+token;
      localStorage.setItem('userToken',this.loggedinUserToken);
      this.userName = username;
      localStorage.setItem('username',username);
  }

  public login(email:string,password:string){
    let cookie = '';
    document.cookie.split(';').forEach( ele => {
       let data = ele.split("=");
       if(data[0].trim().toLowerCase()=='csrftoken'){
        cookie = data[1];
       }
    });
    this.http.get('api/get-token?username='+email).subscribe((data:any) => {
      this.isUserLoggedIn.next(true);
      this.setLoginTokenandUsername(email,data.token);
      this.router.navigate(['home']);
    },
    (error) => {
      this.http.post('api/login/',{
        'email':email,
        'password':password
      },{
        headers:{
          'X-CSRFToken': cookie
        }
      }).subscribe((data:any) => {
        this.isUserLoggedIn.next(true);
        this.setLoginTokenandUsername(email,data.token);
        this.router.navigate(['home']);
      });
    });    
  }

  public logout(){
    this.http.get('/api/user/logout/',{
      headers:{
        'Authorization':this.loggedinUserToken
      }
    }).subscribe(() => {
      this.loggedinUserToken = '';
      localStorage.removeItem('userToken');
      this.isUserLoggedIn.next(false);
      this.router.navigate(['logout']);
    });
  }
}
