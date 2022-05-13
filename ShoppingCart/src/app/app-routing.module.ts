import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductsComponent } from './products/products.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  { path : 'welcome/:name', component : WelcomeComponent, canActivate : [RouteGuardService] },
  { path : 'productsearch/:searchText', component : ProductSearchComponent, canActivate : [RouteGuardService] },
  { path : 'products', component : ProductsComponent, canActivate : [RouteGuardService] },
  { path : 'cart', component : CartComponent, canActivate : [RouteGuardService] },
  { path : 'logout', component : LogoutComponent, canActivate : [RouteGuardService] },
  { path : '**', component : ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
