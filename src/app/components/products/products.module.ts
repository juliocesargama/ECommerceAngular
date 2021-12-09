import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {}
