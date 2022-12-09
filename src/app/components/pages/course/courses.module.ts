import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListCoursesComponent,
    EditCourseComponent
  ],
  imports: [

  CommonModule,
    CoursesRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
