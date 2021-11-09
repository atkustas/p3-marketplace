import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productmenu',
  templateUrl: './productmenu.component.html',
  styleUrls: ['./productmenu.component.css']
})



export class ProductmenuComponent implements OnInit {

  myLink1: String = "";
  myLink2: String = "";
  myLink3: String = "";
  htmlToAdd: any;
    
  cardFunc1(){
    this.myLink1 = "https://javagcp210907-ak-marketplace.apigee.io/docs/hello-world/1/overview";
      }
cardFunc2(){
  this.myLink2 = "https://javagcp210907-ak-marketplace.apigee.io/docs/hello-world---deployed/1/overview"
}

cardFunc3(){
  this.myLink3 = "https://javagcp210907-ak-marketplace.apigee.io/docs/welcome/1/overview"
}
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
