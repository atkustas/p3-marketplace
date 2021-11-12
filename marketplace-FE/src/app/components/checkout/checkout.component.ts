import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApigeeApiService } from 'src/app/services/apigee-api.service';

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

  constructor(private api: ApigeeApiService , private route: ActivatedRoute) {

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

    this.api.createDeveloper().subscribe(
      (res: any) => 
        console.log(res)
    )

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log(this.plans);
    console.log(typeof this.id);

    for(let index of this.plans){
      if(index.id == this.id){
        this.plan = index.plan;
        this.price = index.price;

    console.log("the Id is: " +this.id);
    console.log("the plan is: " +this.plan);
    console.log("the price is: " +this.price);

      }

  }}

}

