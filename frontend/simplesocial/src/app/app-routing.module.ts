import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path:'logout', component: LogoutComponent},
  {path: 'login',component: LoginComponent},
  {path: '*', redirectTo: "['/login',{'type':'login'}]",pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
