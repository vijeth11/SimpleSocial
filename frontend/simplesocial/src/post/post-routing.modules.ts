import { PostComponent } from './post/post.component';
import { UserListComponent } from './user-list/user-list.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { FormComponent } from './form/form.component';

// Add gaurds for authentication
const routes:Routes = [
    {path:'post',component:ListComponent},
    {path:'post/:id/detail',component:PostComponent},
    {path:'post/:name/userlist',component:UserListComponent},
    {path:'post/create', component:FormComponent},//add gaurd
    {path:'post/:id/update', component:FormComponent}//add gaurd
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class PostRoutingModule{}