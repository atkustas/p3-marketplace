import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigeeApiService {

  devUrl: string = "https://apigee.googleapis.com/v1/organizations/apitest-331313/developers"
  testDev = {
    "email": "chapman.kevinb@gmail.com",
    "firstName": "Kevin",
    "lastName": "Chapman",
    "userName": "chapankb",
  }

  constructor(private http: HttpClient) { }

  //Create Developer in Apigee Portal
  createDeveloper(): Observable<any>{
    return this.http.post(this.devUrl, this.testDev)
  }
}
