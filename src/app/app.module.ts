import { ServicesHomeComponent } from './../services-nav/services-home/services-home.component';
import { ServicesNavComponent } from './../services-nav/services-nav.component';
import { RestService } from './rest.service';
import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    HomeComponent,
    ServicesNavComponent,
    ServicesHomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [User, Chat, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
