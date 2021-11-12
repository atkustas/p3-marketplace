import { Component, OnInit } from '@angular/core';
import { ApiProduct } from '../../../models/api-product';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  apiString:any = localStorage.getItem("api");
  api:any = JSON.parse(this.apiString);
  
  constructor() { 

  }

  ngOnChange(){
    let apiString:any =  localStorage.getItem("api");
    let api:ApiProduct  = JSON.parse(apiString);
  }

  ngOnInit(): void {
    let apiString:any =  localStorage.getItem("api");
    let api:ApiProduct  = JSON.parse(apiString);
  }
}
