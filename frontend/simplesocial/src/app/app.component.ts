import { DataService } from './shared/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplesocial';

  constructor(private service:DataService){

  }

  public isAuthenticated():boolean{
    return this.service.Authorized();
  }
}
