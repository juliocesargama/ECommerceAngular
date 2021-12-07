import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductsService } from './products.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  form: FormGroup = new FormGroup({});

  constructor(private productsService: ProductsService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      quantity: [1]});

    this.productsService.getProducts()
    .subscribe((res: Products) => {
      this.products = res;
    });
  }

  addToCart(product: Products, quantity: number) {

    HeaderComponent.addCartItem();

    this.productsService.addToCart(product, quantity);

  }

}
