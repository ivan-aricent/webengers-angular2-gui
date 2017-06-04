import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:User;
  constructor(user:User) {
    this.user=user;
  }

  ngOnInit() {
    //alert(this.user.username);
  }

}
