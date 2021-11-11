import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipcodeService {
  constructor(private http: HttpClient) {}

  getAddress(zipcode: string) {

     return this.http.get(`https://viacep.com.br/ws/${zipcode}/json`)


  }
}
