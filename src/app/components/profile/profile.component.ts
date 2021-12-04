import { FormValidations } from './form-validations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

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
      .getBRCities(0)
      .subscribe((data: any) => (this.cities = data));

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, [Validators.required, Validators.minLength(10)]],
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
        zipcode: [
          null,
          [Validators.required, FormValidations.zipcodeValidator],
        ],
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
        map((state: any) => this.states.filter((s) => s.sigla === state)),
        map((states: any) =>
          states && states.length > 0 ? states[0].id : null
        ),
        switchMap((stateId: number) => this.dropdownSrv.getBRCities(stateId))
      )
      .subscribe((cities) => (this.cities = cities));
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
    this.zipcodeSrv
      .getAddress(this.form.get('fullAddress.zipcode')?.value)
      .subscribe((data: any) => this.setAddress(data));
  }

  setAddress(data: any) {
    console.log(data);
    if (!(data.erro == true)) {
      this.form.get('fullAddress')?.patchValue({
        street: data.logradouro,
        area: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
    } else {

      alert('Cep não encontrado.');
      this.form.get('fullAddress')?.reset();
    }
  }

  cssError(field: any) {
    return {
      'has-error': this.checkRequired(field),
      'has-feedback': this.checkRequired(field),
    };
  }

  checkInvalidEmail() {
    return (
      this.form.get('email')?.hasError('email') &&
      this.form.get('email')?.touched
    );
  }

  checkMinPhone() {
    return this.form.get('phone')?.hasError('minlength');
  }

  checkMinPassword() {
    return this.form.get('password')?.hasError('minlength');
  }

  checkMaxPassword() {
    return this.form.get('password')?.hasError('maxlength');
  }


  checkRequired(field: any) {
    return (
      this.form.get(field)?.hasError('required') &&
      (this.form.get(field)?.touched || this.form.get(field)?.dirty)
    );
  }
}
