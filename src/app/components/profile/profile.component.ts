import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      zipcode: [null, Validators.required],
      address: [null, Validators.required],
      addressNumber: [null, Validators.required],
      area: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      terms: [true, Validators.requiredTrue]
    });
  }

  onSubmit() {

    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    .subscribe(data => console.log(data));

  }

  cssError(field: any) {
    return {
      'has-error': this.checkValidTouched(field),
      'has-feedback': this.checkValidTouched(field)
    }
  }

  checkInvalidEmail(){

    let emailField = this.form.get('email');

    if(emailField?.errors?.email){
      return emailField?.errors?.email;
    }
  }

  checkMinPassword(){

    let passwordField = this.form.get('password');

    if(passwordField?.value?.length < 6){
      return passwordField?.errors?.minlength;
    }
  }

  checkMaxPassword(){

    let passwordField = this.form.get('password');

    if(passwordField?.value?.length > 20){
      return passwordField?.errors?.maxlength;
    }
  }

  checkValidTouched(field: any) {

    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }

}
