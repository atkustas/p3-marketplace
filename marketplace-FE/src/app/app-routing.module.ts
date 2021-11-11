import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductmenuComponent } from './components/productmenu/productmenu.component';
import { IntroductionComponent } from './components/detail/introduction/introduction.component';
import { VerificationComponent } from './components/detail/verification/verification.component';
import { HomeComponent } from './components/home/home.component';
import { ConditionsComponent } from './components/conditions/conditions.component';

const routes: Routes = [
  {
   path: "cart/checkout",
   component: CheckoutComponent
  },
  {
    path: "cart",
    component:CartComponent
  },

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductmenuComponent
  },
  {
    path: "cart/product",
    component: ProductmenuComponent
  },

  {
    path: "checkout",
    component: CheckoutComponent
  },

  {
    path: "cart/checkout",
    component: CheckoutComponent
  },

  {
    path: "conditions",
    component: ConditionsComponent
  },

  { path: "login",
    component: LoginComponent},

  {
    path: "detail",
    component: DetailComponent,
    children:[
      {
        path: "introduction",
        component: IntroductionComponent
      },
      {
        path: "verification",
        component: VerificationComponent
      }
      ,
      {
        path: "**",
        redirectTo: 'introduction'
      }
    ]
  },
  {
    path: "navbar",
    component: NavbarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
