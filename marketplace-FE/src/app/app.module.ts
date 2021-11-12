import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductmenuComponent } from './components/productmenu/productmenu.component';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule} from '@angular/common/http'
import { SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroductionComponent } from './components/detail/introduction/introduction.component';
import { VerificationComponent } from './components/detail/verification/verification.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { PricingComponent } from './components/detail/pricing/pricing.component';

const googleLoginOptions = {
  scope: 'https://www.googleapis.com/auth/cloud-platform'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    CheckoutComponent,
    ProductmenuComponent,
    DetailComponent,
    IntroductionComponent,
    VerificationComponent,
    HomeComponent,
    Navbar2Component,
    ConditionsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [
    {
      //Confifuration for SocialLoginModule with client ID from GCP
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers:[
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "242232238139-q850t2k48src6lfk0m9ptl1rrmmjl46m.apps.googleusercontent.com", googleLoginOptions
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
