import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PassComponent } from './pass/pass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './auth-guard.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'' ,component:PassComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'peoplelist',canActivate:[AuthGuardService],component:PeoplelistComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'update/:id',component:UpdateComponent},
  
  





  
  {path:'**',component:Page404Component},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
