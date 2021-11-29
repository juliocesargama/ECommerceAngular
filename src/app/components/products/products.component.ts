import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts()
    .subscribe((res: Products) => {
      this.products = res;
    });

  }

  addToCart(){

    HeaderComponent.addCartItem();
    

  }

}
