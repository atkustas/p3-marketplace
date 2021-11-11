import { Component, OnInit } from '@angular/core';

import { ApigeeApiService } from 'src/app/services/apigee-api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private api: ApigeeApiService) {}

  ngOnInit(): void {

    this.api.createDeveloper().subscribe(
      (res: any) => 
        console.log(res)
    )
  }

}
