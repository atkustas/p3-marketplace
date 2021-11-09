import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ApigeeApiService } from 'src/app/services/apigee-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private authService: SocialAuthService, private apigee: ApigeeApiService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('token', user.authToken);
    });
  }

  signInWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  signOut(): void{
    this.authService.signOut();
  }

  refreshToken(): void{
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID)
  }

  createDev(){
    this.apigee.createDeveloper().subscribe((res:any) => {
      console.log(res)
    })
  }

}
