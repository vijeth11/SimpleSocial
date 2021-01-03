import { AuthenticationGuard } from './../app/shared/authentication.guard';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
    {path:'group',component:ListComponent},
    {path:'group/:id/detail',component:DetailComponent, canActivate:[AuthenticationGuard]},
    {path:'group/:type',component:FormComponent, canActivate:[AuthenticationGuard]},
]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class GroupRoutingModule{}