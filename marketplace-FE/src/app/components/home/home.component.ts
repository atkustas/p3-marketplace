import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myLink: String = "";
  htmlToAdd: any;
  
  cardFunc(){
this.myLink = "https://javagcp210907-ak-marketplace.apigee.io/docs/hello-world/1/overview";
  }
  constructor() { }

  ngOnInit(): void {

    this.htmlToAdd = `<div (click)="cardFunc()" class="card" style="width: 18rem;">
    <a [href]="myLink"> <img class="card-img-top" src="assets/helloworld.png" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </a>
  </div>`
  }

}
