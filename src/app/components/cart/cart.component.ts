import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartItems = [];

  form: FormGroup = new FormGroup({});

  totalPrice: number;
  discount: number;

  constructor(private formBuilder: FormBuilder) {
    this.totalPrice = 0;
    this.discount = 0;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      discount: [null]
    });
  }

  addDiscount() {
    if (this.form.get('discount')!.value == '10OFF') {
      return (this.discount = this.totalPrice * 0.1);
    }else{
      return (this.discount = 0);
    }

  }

  Checkout() {
    alert('Função ainda não implementada, aguarde próximas atualizações.');
  }
}
