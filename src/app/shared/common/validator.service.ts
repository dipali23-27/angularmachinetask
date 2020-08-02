import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  EmailValidator(control: FormControl) {
    const email = control.value;
    if (email) { 
      const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
      if (!(validEmail)) {
        return {
          emailValidation: {
            valid: false
          }
        };
      }
    }
    return null;
  }

 
  PhoneValidator(control: FormControl) {
    const phone = control.value;
    if (phone) {  
      const validphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
      if (!(validphone)) {
        return {
          PhoneValidation: {
            valid: false
          }
        };
      }
    }
    return null;
  }

}
