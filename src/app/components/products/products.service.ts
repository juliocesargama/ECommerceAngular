import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable()


export class ProductsService {

  private readonly API = 'http://localhost:3000/products';

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<Products[]>(this.API);
  }

}
