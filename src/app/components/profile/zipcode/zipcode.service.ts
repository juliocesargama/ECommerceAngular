import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZipcodeService {
  constructor(private http: HttpClient) {}

  getAddress(zipcode: string) {
    let validCep = /^[0-9]{8}$/;
    if (validCep.test(zipcode)) {
     return this.http.get(`//viacep.com.br/ws/${zipcode}/json`);
    }
    return of({});
  }
}
