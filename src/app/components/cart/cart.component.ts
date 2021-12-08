import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';

import { Cart } from './cart';
import { Products } from './../products/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  static cartItems: Cart [] = [];

  static totalPrice: number = 0;
  coupon: string = '';
  discount: number = 0;
  active!: boolean;

  constructor() {}

  ngOnInit(): void {

  }

  static onSetCartItem(product: Products, quantity: number) {

    let cartItem: Cart = { product: product, quantity: quantity };

    CartComponent.cartItems.push(cartItem);
    this.totalPrice += product.price * quantity;

    HeaderComponent.addCartItem(this.cartItems.length);

  }

  getCartItems() {
    return CartComponent.cartItems;
  }

  getTotalItems(){
    let total = 0;
    CartComponent.cartItems.forEach(element => {
      total += element.quantity;
    });
    return total;
  }

  getTotalPrice() {
    return CartComponent.totalPrice;
  }

  getDiscount() {
    return this.discount;
  }

  onAddDiscount() {

    console.log(this.coupon);

    if(this.coupon == '10OFF'){
      this.discount = CartComponent.totalPrice * 0.1;
      CartComponent.totalPrice = CartComponent.totalPrice - this.discount;
      this.active = true;
   }else{
      this.discount = 0;
      this.active = false;
      alert('Cupom inválido.');
    }
  }

  isCouponValid() {
    return true;
  }

  onCheckout() {

    alert('Função ainda não implementada, aguarde próximas atualizações.');
  }
}
