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
  images:string[] = ["hello", "world"]; //to be filled with business-y stock photos, maybe 3-5
  //flags used to control caroulel params
  private paused:boolean = false;
  private unpauseOnArrow:boolean = false;
  private pauseOnIndicator:boolean = false;
  private pauseOnHover:boolean = true;
  private pauseOnFocus = true;
  descriptions:string[] = ["foo", "bar"];
  testing:string[] = ["success"]

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
