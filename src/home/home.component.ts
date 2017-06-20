import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:User;
  private _router: Router;
  public chatbot_admin_username:string;

  constructor(user:User, router: Router) {
    this.user=user;
    this._router = router;
    this.chatbot_admin_username = sessionStorage.getItem('chatbot_admin_username'); //save username to session and use it in welcome placeholder.
  }

  ngOnInit() {
    //alert(this.user.username);
    /*if(this.user.username === undefined){
      this._router.navigateByUrl('login');
    }*/
    
    //Check for valid stored username in session to detect any goofy access
    if(sessionStorage.getItem('chatbot_admin_username') === null){
      this._router.navigateByUrl('login');
    }
  }

  onLogout(){
    /*this.user.username=undefined;
    this.user.password=undefined;*/

    sessionStorage.removeItem('chatbot_admin_username'); //remove stored username from session upon logout to prevent any goofy access
    sessionStorage.removeItem('chatbot_admin_sessionUUID'); //remove stored sessionUUID (used for chats /message API) from session
    sessionStorage.clear(); //clear and destroy session
    this._router.navigateByUrl('login');
  }
}
