import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup;
  loginForm:FormGroup;
  registerView:boolean = false;
  constructor(private service:DataService,private route:ActivatedRoute) {
    this.route.params.subscribe(param => {
      if(param['type'] == 'signup'){
        this.registerView = true;
      }else{
        this.registerView = false;
      }
    });
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      password1: new FormControl()
    });
    
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onRegister(form: FormGroup){
    console.log('Valid?', form.valid);
    console.log('Name',form.value.username);
  }

  onLogin(form:FormGroup){
    this.service.login(form.value.username,form.value.password);
  }

}
