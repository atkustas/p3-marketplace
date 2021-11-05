import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  descriptionText:string = "placeholder to be changed by some sort of api service or something idk";
  cardTitle:string = "placeholder title";
  benefit1:string = "placeholder for benefit 1";
  benefit2:string = "placeholder for benefit 2";
  benefit3:string = "placeholder for benefit 3";
  benefit1Description:string = "placeholder for benefit 1 description";
  benefit2Description:string = "placeholder for benefit 1 description";
  benefit3Description:string = "placeholder for benefit 1 description";

  ngOnInit(): void {
  }

}
