import { PostRoutingModule } from './post-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [DetailComponent, ListComponent, FormComponent, UserListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
  ]
})
export class PostModule { }
