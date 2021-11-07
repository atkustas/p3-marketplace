import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
   path: "checkout",
   component: CheckoutComponent
  },
  {
    path: "cart",
    component:CartComponent
  },

  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "",
    component: DetailComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
