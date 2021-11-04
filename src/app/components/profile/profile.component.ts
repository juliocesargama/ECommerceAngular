import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      fullAddress: this.formBuilder.group({
        zipcode: [null, Validators.required],
        street: [null, Validators.required],
        number: [null, Validators.required],
        area: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      }),
      terms: [true, Validators.requiredTrue],
    });
  }

  onSubmit() {
    console.log(this.form);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  getAddress() {
    let zipcode = this.form.get('fullAddress.zipcode')?.value;

    var cep = zipcode?.replace(/\D/g, '');

      if (zipcode?.value != '') {
        let validCep = /^[0-9]{8}$/;
        if (validCep.test(cep)) {
          this.http
            .get(`//viacep.com.br/ws/${cep}/json`)
            .subscribe((data) => this.setAddress(data), (error) => console.log(error));
        }
      }
  }

  setAddress(data: any) {
    this.form.get('fullAddress')?.patchValue({
      street: data.logradouro,
      area: data.bairro,
      city: data.localidade,
      state: data.uf,
    });
  }


  cssError(field: any) {
    return {
      'has-error': this.checkValidTouched(field),
      'has-feedback': this.checkValidTouched(field),
    };
  }

  checkInvalidEmail() {
    let emailField = this.form.get('email');

    if (emailField?.errors?.email) {
      return emailField?.errors?.email && emailField.touched;
    }
  }

  checkMinPassword() {
    let passwordField = this.form.get('password');

    if (passwordField?.value?.length < 6) {
      return passwordField?.errors?.minlength && passwordField.touched;
    }
  }

  checkMaxPassword() {
    let passwordField = this.form.get('password');

    if (passwordField?.value?.length > 20) {
      return passwordField?.errors?.maxlength && passwordField.touched;
    }
  }

  checkValidTouched(field: any) {
    return (
      !this.form.get(field)?.valid &&
      (this.form.get(field)?.touched || this.form.get(field)?.dirty)
    );
  }
}
