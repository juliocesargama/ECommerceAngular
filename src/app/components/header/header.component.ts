import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  static cartItem: number;

  static addCartItem() {
    this.cartItem++;
  }

  setCartItem() {
      return HeaderComponent.cartItem + ' iten(s)';
 }

  constructor() {
    HeaderComponent.cartItem = 0;
   }

  ngOnInit(): void {

  }
}
