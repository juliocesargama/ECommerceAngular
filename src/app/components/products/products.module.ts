import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { FooterComponent } from './../footer/footer.component';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [],
  declarations: [
    ProductsComponent,
    FooterComponent
  ],
  providers: [ProductsService]
})
export class ProductsModule {}
