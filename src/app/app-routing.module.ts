import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path:"home",component:HomeComponent

  },
  {
    path:"signin",component:SigninComponent

  },
  {
    path:"userprofile",
    component:UserprofileComponent,canActivate:[AuthGuard]
    
  },
  
  {
    path:"signup",component:SignupComponent

  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
