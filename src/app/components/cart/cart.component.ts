import { Products } from './../products/products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  static cartItems: Cart[] = [];
   form: FormGroup = new FormGroup({});

   static totalPrice: number = 0;
   discount: number = 0;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      discount: [null]
    });
  }

  static setCartItem(product: Products, quantity: number) {
    
    let cartItem: Cart = {  product: product, quantity: quantity };

    this.cartItems.push(cartItem);
    this.totalPrice += product.price * quantity;
  }

  setTotalPrice() {
    return (CartComponent.totalPrice -= this.discount);
  }

  getCartItems(){
    return CartComponent.cartItems;
  }

  addDiscount() {
    if (this.form.get('discount')!.value == '10OFF') {
      return (this.discount = CartComponent.totalPrice * 0.1);
    }else{
      return (this.discount = 0);
    }

  }

  Checkout() {
    alert('Função ainda não implementada, aguarde próximas atualizações.');
  }
}
