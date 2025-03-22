import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadcustomerComponent } from './readcustomer/readcustomer.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'readcustomer',component:ReadcustomerComponent},
  {path:'cretecustomer',component:CreatecustomerComponent},
  {path:'deletecustomer/:id', component: ReadcustomerComponent},
  {path:'updatecustomer/:id', component: UpdatecustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
