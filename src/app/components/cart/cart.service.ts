import { CartComponent } from './cart.component';
import { Injectable } from '@angular/core';
import { Products } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart!: CartComponent;

  setCartItem(product: Products, quantity: number) {
      this.cart.setCartItem(product, quantity);
  }

  constructor() { }


}
