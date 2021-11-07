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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    CheckoutComponent,
    ProductmenuComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
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
              "859187453401-d49epm15k5mihmsof5isdki2v2qf80ro.apps.googleusercontent.com"
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
