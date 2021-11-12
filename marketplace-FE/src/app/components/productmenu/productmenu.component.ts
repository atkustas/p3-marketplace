import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productmenu',
  templateUrl: './productmenu.component.html',
  styleUrls: ['./productmenu.component.css']
})



export class ProductmenuComponent implements OnInit {

  constructor(private cs:CartService, private router:Router) { }

  

  ngOnInit(): void {
    console.log(JSON.stringify(this.cs.apis[0]));
  }

  loadDetail(index:number){
    localStorage.setItem("api",JSON.stringify(this.cs.apis[index]));
    this.router.navigateByUrl("/detail");

  }

}
