import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],

  providers: [ProductsService]
})
export class ProductsModule {}
