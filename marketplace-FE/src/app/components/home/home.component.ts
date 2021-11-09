import { Component, OnInit, ViewChild } from '@angular/core';
//import {Browser};
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //urls for images in the carousel
  images:string[] = ["assets/money.jpg", "assets/presentation.jpg", "assets/twopeopleworking.jpg", 
                     "assets/pointingatalaptop.jpg"];
  
  //flags used to control caroulel params
  private paused:boolean = false;
  private unpauseOnArrow:boolean = false;
  pauseOnIndicator:boolean = false;
  pauseOnHover:boolean = true;
  pauseOnFocus:boolean = true;
  descriptionTitles:string[] = ["Account Verification", "Alternative Employment and Income Data",
                                "Automated Data View", "Consumer Credit Report"];
  descriptionsCaptions:string[] = ["Authenticate account numbers presented by consumers", 
                                   "Consumer-provided employment and income information",
                                   "Audit the quality of customer’s data stored in the Equifax files",
                                   "Delivers better predictive consumer data for fast, well-informed decisions"];
  

  //@ViewChild('carousel', {static : true}) carousel:NgbCarousel;
carousel:any = null;
  //carousel control functions
  togglePaused() {
    if (this.paused){
      this.carousel.cycle();
    }
    else{
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent:NgbSlideEvent){
    let fromArrows:boolean = ((slideEvent.source === NgbSlideEventSource.ARROW_LEFT) || 
                              (slideEvent.source === NgbSlideEventSource.ARROW_RIGHT));
    let fromIndicator:boolean = slideEvent.source === NgbSlideEventSource.INDICATOR;
    if(this.unpauseOnArrow && slideEvent.paused && fromArrows){
      this.togglePaused();
    }
    if(this.pauseOnIndicator && !slideEvent.paused && fromIndicator){
      this.togglePaused();
    }
  }
  

  constructor() { }

  ngOnInit(): void {

  }

}
