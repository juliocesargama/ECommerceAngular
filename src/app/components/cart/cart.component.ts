import { Component, OnInit } from '@angular/core';
import { Cart } from './cart';
import { Products } from './../products/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];

  totalPrice: number = 0;
  discount: number = 0;

  constructor() {}

  ngOnInit(): void {

  }

  setCartItem(product: Products, quantity: number) {
    let cartItem: Cart = { product: product, quantity: quantity };

    this.cartItems.push(cartItem);
    this.totalPrice += product.price * quantity;
  }

  setTotalPrice() {
    return (this.totalPrice -= this.discount);
  }

  setDiscount(){
    return this.discount;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getCartItems() {
    return this.cartItems;
  }

  onAddDiscount() {
      console.log(this.discount);
  }

  onCheckout() {

    alert('Função ainda não implementada, aguarde próximas atualizações.');
  }
}
