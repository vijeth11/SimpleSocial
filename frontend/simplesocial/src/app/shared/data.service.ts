import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loggedinUserToken:string = '';
  constructor(private http:HttpClient,private router:Router) { }

  public Authorized():boolean{
    this.getLoggedInUserToken();
    return this.loggedinUserToken.length > 0 ?  true: false;
  }

  public getLoggedInUserToken():string{
    this.loggedinUserToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : this.loggedinUserToken;
    return this.loggedinUserToken;
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
      this.loggedinUserToken='Token '+data.token;
      localStorage.setItem('userToken',this.loggedinUserToken);
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
        this.loggedinUserToken='Token '+data.token;
        localStorage.setItem('userToken',this.loggedinUserToken);
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
      localStorage.removeItem('usertoken');
      this.router.navigate(['logout']);
    });
  }
}
