import { FormControl } from '@angular/forms';

export class FormValidations {
  static zipcodeValidator(control: FormControl) {

    const zipcode = control.value;
    if (zipcode && zipcode !== '') {
      const validZipCode = /^[0-9]{8}$/;
      return validZipCode.test(zipcode) ? null : { invalidZipCode : true };
    }
    return null;
  }

}


