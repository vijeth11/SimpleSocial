import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loggedinUserToken:string = '';
  constructor() { }

  public Authorized():boolean{
    return this.loggedinUserToken.length > 0 ?  true: false;
  }
}
