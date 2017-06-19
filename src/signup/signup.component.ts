import { PasswordValidator } from './password.validator';
import { SignupUser } from './../shared/signup.user';
import { Component, Input } from '@angular/core';
import { RestService } from '../app/rest.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RestService]
})
export class SignupComponent {

  private _restService: RestService;
  private _router: Router;

  public signupUser: SignupUser;

  private complexForm : FormGroup;

  constructor(restService: RestService, router: Router, signupUser: SignupUser, fb: FormBuilder) {
    this._restService = restService;
    this._router = router;
    this.signupUser = signupUser;

    this.complexForm = fb.group({
      'username': [null, Validators.required],
      'inputPassword': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      // 'confirmPassword': [null, PasswordValidator.matchPassword]
      // 'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])] //for all checks other than passwords-match check also
      'confirmPassword': [] //for only passwords-match check
    },
    {
      validator: PasswordValidator.matchPassword //my custom validator for passwords-match check
    });

  }

  jsonData: string = "";
  signupUrl: string = 'http://localhost:8888/users';

  signupApiResponse = "";
  isSuccess: boolean = false;
  isError: boolean = false;

  onSubmit() {
    this.jsonData = JSON.stringify(this.signupUser);

    this._restService.postJson(this.signupUrl, this.jsonData).subscribe(data => {
      this.signupApiResponse = "User signed up successfully!";
      this.isSuccess = true;
      
        setTimeout(() => {
          this._router.navigateByUrl('login');
        }, 1500);
      
    }, error => {
      this.signupApiResponse = "An error occurred during signup!";
      this.isError = true;
    //   console.log(error.json());
    });

  }

}
