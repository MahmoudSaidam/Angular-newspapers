import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListComponent } from './users/list/list.component';

import { ShowComponent } from './users/show/show.component';
import { AddComponent } from './books/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListBookComponent } from './books/list-book/list-book.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { IntercepterService } from '../dashboard/intercepter.service';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';



@NgModule({
  declarations: [
    ListComponent,

    ShowComponent,
    AddComponent,
    ListBookComponent,

  ],
  imports: [


  CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressBarModule,
    TableModule,
    AutoCompleteModule,
    MatAutocompleteModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:IntercepterService,multi:true}
  ]

})
export class DashboardModule { }
