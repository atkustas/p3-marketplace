import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
    ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //urls for images in the carousel
  images:string[] = ["assets/money.jpg", "assets/presentation.jpg", "assets/twopeopleworking.jpg", 
                     "assets/pointingatalaptop.jpg"];
  
  
  noWrapSlides:boolean = false;
  showIndicator = true;
  //Titles for APIs
  descriptionTitles:string[] = ["Account Verification", "Alternative Employment and Income Data",
                                "Automated Data View", "Consumer Credit Report"];
  //descriptions of the APIs
  descriptionCaptions:string[] = ["Authenticate account numbers presented by consumers", 
                                   "Consumer-provided employment and income information",
                                   "Audit the quality of customer’s data stored in the Equifax files",
                                   "Delivers better predictive consumer data for fast, well-informed decisions"];
  
  
                                   

  constructor() { }

  ngOnInit(): void {

  }

}
