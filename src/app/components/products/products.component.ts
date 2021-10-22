import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductsService } from './products.service';
preserveWhitespaces: true;

@Component({
  selector: 'app-home',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
    .subscribe(data => this.products = data);
  }

}
