import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { lstat } from 'fs';
import { ApiProduct } from '../../models/api-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //api:ApiProduct;
  //index:number;
  constructor(private cs:CartService, private router:Router) { //index will be a number
  }

  ngOnInit(): void {
    
  }

  itemadded(){
    alert("Item added to Cart");
    let apiString:any =  localStorage.getItem("api");
    let api:ApiProduct  = JSON.parse(apiString);
    if (localStorage.length === 1){
      let cart:ApiProduct[] = [];
      cart.push(api); 
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    else{
      let cartString:string = localStorage.get("cart");
      let cart:ApiProduct[] = JSON.parse(cartString);
      cart.push(api);
      localStorage.setItem("cart",JSON.stringify(cart));
    }
  }

  


}
