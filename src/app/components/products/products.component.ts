import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

  }

}
