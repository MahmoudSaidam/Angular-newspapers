import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'users',
    loadChildren:()=>import('./components/pages/dashboard.module').then(x=>x.DashboardModule),
  },
  {
    path:'course',
    loadChildren:()=>import('./components/pages/course/courses.module').then(x=>x.CoursesModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
