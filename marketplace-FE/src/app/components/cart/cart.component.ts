import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  info:any;
  plans:any;
  id:any;
  plan:any;
  price:any;
  product:any;
  picture:any;

  // apiString:any = localStorage.getItem("api");
  // api:any = JSON.parse(this.apiString);

  constructor(private route: ActivatedRoute) {

    this.info = [
      {
        price:500,
        description:"A simple hello world API",
        functionality:["Make calls to the Hello World API", "Check authorization", "Receive custom greetings"],
        image:"assets/helloworld.png"
      },
      {
        price:250,
        description:"A Hello World API deployed to Google App Engine",
        functionality:["Make calls to the Hello World API", "placeholder", "placeholder"],
        image:"assets/hello.png"
      },
      {
        price:100,
        description:"A Welcome API deployed to Google Cloud Functions",
        functionality:["Make calls to the Welcome API", "placeholder", "placeholder"],
        image:"assets/welcome.png"
      }
    ]

    

    this.plans = [{id:1,
      plan:"Starter",
      price:"9.99"},
    {id:2,
      plan:"Business",
      price:"29.99"},
    {id:3,
      plan:"Enterprise",
      price:"49.99"}
    ]

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.plans);
    console.log(typeof this.id);
    // this.plan = this.plans.this.id.plan;
    // this.price = this.plans.this.id.price;

    for(let index of this.plans){
      if(index.id == this.id){
        this.plan = index.plan;
        this.price = index.price;

    console.log("the Id is: " +this.id);
    console.log("the plan is: " +this.plan);
    console.log("the price is: " +this.price);
      }
    }

    

    this.product = localStorage.getItem('api');

    console.log(this.product);


    
  }


}