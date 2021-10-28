import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable()


export class ProductsService {

  private readonly API = environment.API;

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<Products[]>(this.API);
  }

}
