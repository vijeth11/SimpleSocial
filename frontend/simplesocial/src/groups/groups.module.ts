import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './../post/post.module';
import { GroupRoutingModule } from './group-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupDataService } from './shared/group.data.service';

@NgModule({
  declarations: [DetailComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GroupRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers:[
    GroupDataService
  ]
})
export class GroupsModule { }
