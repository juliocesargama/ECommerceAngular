import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductsModule } from './components/products/products.module';
import { ProfileModule } from './components/profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule, IConfig } from 'ngx-mask';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    ProfileModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
})


export class AppModule {}
