import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"admin", component:AdmindashboardComponent},
  {path:"customer", component:CustomerdashboardComponent},
  {path:"", redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
