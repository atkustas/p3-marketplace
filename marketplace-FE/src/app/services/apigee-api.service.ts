import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigeeApiService {

  token = localStorage.getItem('token') as string;
  devUrl: string = "https://apigee.googleapis.com/v1/organizations/javagcp210907-ak/developers"
  testDev = {
    "email": "chapman.kevinb@gmail.com",
    "firstName": "Kevin",
    "lastName": "Chapman",
    "userName": "chapankb",
  }

  constructor(private http: HttpClient,) { }

  //Create Developer in Apigee Portal
  createDeveloper(): Observable<any>{
    console.log(this.token)
    return this.http.post(this.devUrl, this.testDev, {headers:{'Authorization': "Bearer " + this.token}})
  }

  getAPIProductList(){
    
  }
}
