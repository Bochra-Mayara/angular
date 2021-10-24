import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {FormsModule,ReactiveFormsModule}from "@angular/forms" ;
import { RegisterComponent } from './register/register.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PassComponent } from './pass/pass.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from 'angular-bootstrap-md';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateComponent } from './update/update.component';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    Page404Component,
    RegisterComponent,
    ConnexionComponent,
    PassComponent,
    ResetpasswordComponent,
    PeoplelistComponent,
    NavbarComponent,
    AddUserComponent,
    ConfirmationDialogComponent,
    UpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IconsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
