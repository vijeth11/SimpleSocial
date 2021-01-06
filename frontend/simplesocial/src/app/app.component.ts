import { DataService } from './shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'simplesocial';
  isAuthenticated:boolean = false;
  constructor(private service:DataService){
    this.isAuthenticated = service.Authorized();
    
  }
  
  ngOnInit(): void {
    this.service.isUserLoggedIn.subscribe((data:boolean) => {
      this.isAuthenticated = data;
    })
  }

  
  public logout(){
    this.service.logout();
  }
}
