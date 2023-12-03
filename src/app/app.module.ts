import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes=[
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"adduser",component:AddUserComponent},
  {path:"showuser",component:ShowuserComponent},
  // {path:"updateuser",component:UpdateuserComponent}
  {path:"updateuser/:id",component:UpdateuserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,
    ShowuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
