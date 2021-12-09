import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
