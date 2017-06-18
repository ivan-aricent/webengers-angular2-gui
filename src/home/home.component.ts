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

  constructor(user:User, router: Router) {
    this.user=user;
    this._router = router;
  }

  ngOnInit() {
    //alert(this.user.username);
    if(this.user.username === undefined){
      this._router.navigateByUrl('login');
    }
  }

  onLogout(){
    this.user.username=undefined;
    this.user.password=undefined;
    this._router.navigateByUrl('login');
  }
}
