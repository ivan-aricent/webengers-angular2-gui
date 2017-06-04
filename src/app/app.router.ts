import { ServicesNavComponent } from './../services-nav/services-nav.component';
import { LoginComponent } from './../login/login.component';
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from '../home/home.component';
import { ChatComponent } from '../chat/chat.component';

export const router: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'home', /*component:HomeComponent*/ redirectTo:'services-nav', pathMatch:'full'},
    {path:'services-nav', component:ServicesNavComponent},
    {path:'chat', component:ChatComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);