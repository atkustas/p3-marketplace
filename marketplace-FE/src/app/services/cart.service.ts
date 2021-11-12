import { Injectable } from '@angular/core';
import { ApiProduct } from '../models/api-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apis:ApiProduct[];
  //cartApis:ApiProduct[];

  constructor() {
    this.apis = [
      {
        price:500,
        productName: "Hello World",
        description:"A simple hello world API",
        functionality:["Make calls to the Hello World API", "Check authorization", "Receive custom greetings"],
        image:"assets/helloworld.png"
      },
      {
        price:250,
        productName: "Hello World 2",
        description: "A Hello World API deployed to Google App Engine",
        functionality:["Make calls to the Hello World API", "placeholder", "placeholder"],
        image:"assets/hello.png"
      },
      {
        price:100,
        productName: "Welcome",
        description:"A Welcome API deployed to Google Cloud Functions",
        functionality:["Make calls to the Welcome API", "placeholder", "placeholder"],
        image:"assets/welcome.jpg"
      }
    ]
   }
}
