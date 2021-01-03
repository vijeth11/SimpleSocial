import { PostRoutingModule } from './post-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailComponent, ListComponent, FormComponent, UserListComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
  ],
  exports: [
    ListComponent
  ]
})
export class PostModule { }
