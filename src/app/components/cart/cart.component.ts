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

  static cartItems: Cart [] = [
    { product: {
      id: 1,
      photo: 'https://images.tcdn.com.br/img/img_prod/663654/chocolate_barra_crunch_nestle_90g_1119_1_20190807172942.png',
      name: 'Nestlé Crunch',
      description: 'Ao leite e crocante, 90gr.',
      price: 5.50 },
    quantity: 1 },
  ];

  static totalPrice: number = 0;
  coupon: string = '';

  discount: number = 0;
  validCoupon!: boolean;

  zipcode!: string;
  validZipCode: boolean = false;

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
      this.validCoupon = true;
   }else{
      this.discount = 0;
      this.validCoupon = false;
      alert('Cupom inválido.');
    }
  }

  isCouponValid() {
    return true;
  }

  isZipcodeValid(){
    this.validZipCode = true;
  }

  onCheckout() {

    alert('Função ainda não implementada, aguarde próximas atualizações.');
  }
}
