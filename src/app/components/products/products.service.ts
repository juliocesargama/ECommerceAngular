import { CartComponent } from './../cart/cart.component';
import { Products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class ProductsService {


  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<Products>('assets/productsdata.json').pipe();
  }

  addToCart(product: Products, quantity: number){

    CartComponent.setCartItem(product, quantity);

  }

}
