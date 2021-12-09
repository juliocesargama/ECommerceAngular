import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  static cartItem: number;

  static updateCartItem(totalItems: number) {
    HeaderComponent.cartItem = totalItems;
  }

  setCartItem() {
      return HeaderComponent.cartItem;
 }

  constructor() {
    HeaderComponent.cartItem = 0;
   }

  ngOnInit(): void {

  }
}
