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
  private userId:number = 0;
  public isUserLoggedIn:Subject<boolean> = new Subject<boolean>();
  constructor(private http:HttpClient,private router:Router) { 
    this.isUserLoggedIn.next(false);
  }

  public getUserName():string{
    return this.userName;
  }

  public getUserId():number{
    return this.userId;
  }

  public Authorized():boolean{
    this.getLoggedInUserToken();
    this.isUserLoggedIn.next(this.loggedinUserToken.length > 0);
    return this.loggedinUserToken.length > 0 ?  true: false;
  }

  public getLoggedInUserToken():string{
    this.loggedinUserToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : this.loggedinUserToken;
    this.userName = localStorage.getItem('username') ? localStorage.getItem('username') : this.userName;
    this.userId = localStorage.getItem('userid') && Number(localStorage.getItem('userid')) > 0? Number(localStorage.getItem('userid')) : this.userId;
    return this.loggedinUserToken;
  }
  
  private setLoginTokenAndUsernameAndUserId(username:string,token:string, userid:number){
      this.loggedinUserToken='Token '+token;
      localStorage.setItem('userToken',this.loggedinUserToken);
      this.userName = username;
      localStorage.setItem('username',username);
      this.userId = userid;
      localStorage.setItem('userid', userid.toString());
  }

  public getCSRFToken():string{
    document.cookie.split(';').forEach( ele => {
      let data = ele.split("=");
      if(data[0].trim().toLowerCase()=='csrftoken'){
       return data[1];
      }
   });
   return "";
  }

  public login(email:string,password:string){
    let cookie = this.getCSRFToken();   
    this.http.get('api/get-token?username='+email).subscribe((data:any) => {
      this.isUserLoggedIn.next(true);
      this.setLoginTokenAndUsernameAndUserId(email,data.token,data.user_id);
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
        this.setLoginTokenAndUsernameAndUserId(email,data.token,data.user_id);
        this.router.navigate(['home']);
      },(error)=>{
        if(error.error.non_field_errors && error.error.non_field_errors.length > 0){
          alert(error.error.non_field_errors[0]);
        }
        else if(error.error.email && error.error.email.length > 0){
          alert(error.error.email[0]);
        }
        else if(error.error.password && error.error.password.length > 0){
          alert(error.error.password[0])
        }
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

  public register(email,username,password1,password2){
    let cookie = this.getCSRFToken();
    this.http.post('api/user/',
    {
      "username":username,
      "email":email,
      "password":password1,
      "password2":password2
    },
    {
      headers:
      {
        'X-CSRFToken': cookie
      }
    }).subscribe(()=>{
      this.router.navigate(['login',{'type':'login'}]);
    },
    (error)=>{
      alert(error);
    });
  }
}
