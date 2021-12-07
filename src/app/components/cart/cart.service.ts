import { CartComponent } from './cart.component';
import { Injectable } from '@angular/core';
import { Products } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  setCartItem(product: Products, quantity: number): void {

    CartComponent.onSetCartItem(product, quantity);

  }

  constructor() {

  }


}
