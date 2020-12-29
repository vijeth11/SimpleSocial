import { UserListComponent } from './user-list/user-list.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path:'post',component:ListComponent},
    {path:'post/detail',component:DetailComponent},
    {path:'post/userlist',component:UserListComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class PostRoutingModule{}