import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  descriptionText:string = "placeholder to be changed by some sort of api service or something idk";
  

  ngOnInit(): void {
  }

}
