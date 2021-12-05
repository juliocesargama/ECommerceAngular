import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CartComponent } from './cart.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  declarations: [CartComponent],
  exports: [],
  providers: []
})
export class CartModule { }
