import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdown: boolean = true;

  public isCollapsed = true;

  public dropdownToggle(){
    this.dropdown = !this.dropdown;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
