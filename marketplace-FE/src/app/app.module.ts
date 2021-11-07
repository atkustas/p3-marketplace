import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductmenuComponent } from './components/productmenu/productmenu.component';
import { DetailComponent } from './components/detail/detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IntroductionComponent } from './components/detail/introduction/introduction.component';
import { VerificationComponent } from './components/detail/verification/verification.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    CheckoutComponent,
    ProductmenuComponent,
    DetailComponent,
    IntroductionComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
