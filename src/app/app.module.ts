import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
declarations: [  
AppComponent,
UsersComponent,
UserComponent,
UserDetailComponent,
 NavComponent,
UserDataComponent,
LoginComponent,
SignupComponent,
  ],
imports: [
  BrowserModule,
  FontAwesomeModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule
],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }


