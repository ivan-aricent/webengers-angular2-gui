import { SignupUser } from './../shared/signup.user';
import { SignupComponent } from './../signup/signup.component';
import { ServicesNewComponent } from './../services-nav/services-new/services-new.component';
import { ServicesHomeComponent } from './../services-nav/services-home/services-home.component';
import { ServicesNavComponent } from './../services-nav/services-nav.component';
import { RestService } from './rest.service';
import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.router';
import {User} from '../shared/user'
import { Chat } from './../shared/chat';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ServicesHomeComponent,
    ServicesNavComponent,
    ServicesNewComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [User, SignupUser, Chat, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
