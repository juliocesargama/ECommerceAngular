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
  static cartItems: Cart[] = [];

  static totalPrice: number = 0;
  coupon: string = '';

  static discount: number = 0;
  validCoupon!: boolean;

  zipcode!: string;
  validZipCode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  static onAddCartItem(product: Products, quantity: number) {

    let cartItem: Cart = { product: product, quantity: quantity };

    CartComponent.cartItems.push(cartItem);
    this.totalPrice += product.price * quantity;

    CartComponent.onUpdateCart();

  }

  removeCartItem(id: number) {
    CartComponent.onRemoveCartItem(id);
  }

  static onRemoveCartItem(id: number) {
    CartComponent.cartItems.forEach((element, index) => {
      if (element.product.id == id) {
        this.totalPrice -= element.product.price * element.quantity;
        CartComponent.cartItems.splice(index, 1);
      }
    });

    CartComponent.onUpdateCart();
  }

  static onUpdateCart(){
    HeaderComponent.updateCartItem(CartComponent.cartItems.length);
  }

  getTotalItems() {
    let total = 0;
    CartComponent.cartItems.forEach((element) => {
      total += element.quantity;
    });
    return total;
  }

  getCartItems() {
    return CartComponent.cartItems;
  }

  getTotalPrice() {
    return CartComponent.totalPrice;
  }

  getDiscount() {
    return CartComponent.discount;
  }

  onAddDiscount() {
    console.log(this.coupon);

    if (this.coupon == '10OFF') {
      CartComponent.discount = CartComponent.totalPrice * 0.1;
      CartComponent.totalPrice =
        CartComponent.totalPrice - CartComponent.discount;
      this.validCoupon = true;
    } else {
      CartComponent.discount = 0;
      this.validCoupon = false;
      alert('Cupom inválido.');
    }
  }

  isZipcodeValid() {
    this.validZipCode = true;
  }

  onCheckout() {
    window.localStorage.setItem('purchase', JSON.stringify([CartComponent.cartItems, CartComponent.discount, CartComponent.totalPrice]));
    alert('Compra efetuada com sucesso!');

    CartComponent.cartItems = [];
    CartComponent.onUpdateCart();

  }
}
