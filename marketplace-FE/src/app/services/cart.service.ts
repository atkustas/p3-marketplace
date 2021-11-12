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
        description:"A simple hello world API",
        functionality:["foo", "bar", "baz"],
        image:"assets/helloworld.png"
      },
      {
        price:250,
        description:"placeholder",
        functionality:["foo", "bar", "baz"],
        image:"assets/hello.png"
      },
      {
        price:100,
        description:"placeholder",
        functionality:["foo", "bar", "baz"],
        image:"assets/welcome.png"
      }
    ]
   }
}
