import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from './products';
import { CartService } from '../cart/cart.service';

@Injectable()


export class ProductsService {

  service: CartService = new CartService;

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<Products>('assets/productsdata.json').pipe();
  }

  addToCart(product: Products, quantity: number){


     this.service.setCartItem(product, quantity);

  }

}
