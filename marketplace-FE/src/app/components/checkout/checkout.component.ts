import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProduct } from 'src/app/models/api-product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  info:any;
  plans:any;
  id:any;
  plan:any;
  price:any;

  apiString:any = localStorage.getItem("api");
  api:any = JSON.parse(this.apiString);

  constructor(private route: ActivatedRoute) {

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

    // this.api.createDeveloper().subscribe(
    //   (res: any) => 
    //     console.log(res)
    // )

    let apiString:any = localStorage.getItem("api");
    let api:ApiProduct = JSON.parse(apiString);

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.plans);
    console.log(typeof this.id);

    for(let index of this.plans){
      if(index.id == this.id){
        this.plan = index.plan;
        this.price = index.price;

      }
    
    console.log("the id is: " +this.id);
    console.log("the plan is: " +this.plan);
    console.log("the price is: " +this.price);

  }}

}

