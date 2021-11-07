import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';

import { ZipcodeService } from './zipcode/zipcode.service';
import { DropdownService } from './dropdown/dropdown.service';
import { BRStates } from './dropdown/BRStates';
import { BRCities } from './dropdown/BRCities';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  states: BRStates[] = [];
  cities: BRCities[] = [];
  // states!: Observable<BRStates[]>;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownSrv: DropdownService,
    private zipcodeSrv: ZipcodeService
  ) {}

  ngOnInit(): void {
    this.dropdownSrv
      .getBRStates()
      .subscribe((data: any) => (this.states = data));

      this.dropdownSrv
      .getBRCities(11)
      .subscribe((data: any) => (this.cities = data, console.log(data)));

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

    this.form
      .get('fullAddress.state')
      ?.valueChanges.pipe(
        map((state: any) => this.states.filter(s => s.sigla === state)),
        map((states: any) =>
          states && states.length > 0 ? states[0].id : null),
        switchMap((stateId: number) => this.dropdownSrv.getBRCities(stateId)),
        tap(console.log)
      )
      .subscribe(cities => this.cities = cities);
  }

  onSubmit() {
    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .subscribe(
        (data) => {
          alert('Cadastro efetuado com sucesso!');
          this.form.reset();
        },
        (error) => alert(error)
      );
  }

  getZipCode() {
    let zipcode = this.form.get('fullAddress.zipcode')?.value;

    if (zipcode != '' && zipcode != null) {
      this.zipcodeSrv
        .getAddress(zipcode)
        .subscribe((data: any) => this.setAddress(data));
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
      return passwordField?.errors?.minlength;
    }
  }

  checkMaxPassword() {
    let passwordField = this.form.get('password');

    if (passwordField?.value?.length > 20) {
      return passwordField?.errors?.maxlength;
    }
  }

  checkValidTouched(field: any) {
    return (
      !this.form.get(field)?.valid &&
      (this.form.get(field)?.touched || this.form.get(field)?.dirty)
    );
  }
}
