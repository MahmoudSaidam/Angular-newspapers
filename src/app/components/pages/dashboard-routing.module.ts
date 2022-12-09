import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './books/add/add.component';
import { ListBookComponent } from './books/list-book/list-book.component';
import { ListComponent } from './users/list/list.component';
import { ShowComponent } from './users/show/show.component';

const routes: Routes = [

{
  path:'',
  component:ListComponent
},
{
  path:'users/show/:id',
  component:ShowComponent
},
{
  path:'books',
  component:ListBookComponent
},
{
  path:'books/create',
  component:AddComponent
},
{
  path:'books/edit/:id',
  component:AddComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],


exports: [RouterModule]
})
export class DashboardRoutingModule { }
