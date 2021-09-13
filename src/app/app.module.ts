import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductsModule } from './components/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
  ],
  imports: [
    ProductsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
