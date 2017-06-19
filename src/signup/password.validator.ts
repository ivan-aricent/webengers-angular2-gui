import {AbstractControl} from '@angular/forms';
export class PasswordValidator {

    static matchPassword(AC: AbstractControl) {
       let inputPassword = AC.get('inputPassword').value; // to get value from input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value from input tag
        if(inputPassword != confirmPassword) {
            // console.log('false');
            // set the error-name and its boolean value which can be checked and used in html alert div
            AC.get('confirmPassword').setErrors( {matchPassword: true} );
        } else {
            // console.log('true');
            AC.get('confirmPassword').setErrors(null);
            return null;
        }
    }
}