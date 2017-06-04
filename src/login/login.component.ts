import { Component, Input } from '@angular/core';
import { RestService } from '../app/rest.service';
import { Router } from '@angular/router';
import {User} from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RestService]
})
export class LoginComponent {

  private _restService: RestService;
  private _router: Router;

  public user:User;

  constructor(restService: RestService, router: Router, user:User) {
    this._restService = restService;
    this._router = router;
    this.user=user;
  }

  jsonData: string = "";
  loginUrl: string = 'http://localhost:8888/login';

  loginApiResponse = "";
  isSuccess: boolean = false;
  isError: boolean = false;

  onSubmit() {
    // alert("Hello " + this.user.username + ", paswd= " + this.user.password);

    this.jsonData = JSON.stringify(this.user);
    // alert(this.jsonData);

    this._restService.postJson(this.loginUrl, this.jsonData).subscribe(data => {
      this.loginApiResponse = data.text();
      // alert('ok ' + this.loginApiResponse);
      this.isSuccess = true;
      
        setTimeout(() => {
          this._router.navigateByUrl('home');
        }, 1500);
      
    }, error => {
      this.loginApiResponse = error.text();
      this.isError = true;
      console.log(error.json());
    });

  }

}
