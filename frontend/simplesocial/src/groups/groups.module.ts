import { GroupRoutingModule } from './group-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [DetailComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupsModule { }
