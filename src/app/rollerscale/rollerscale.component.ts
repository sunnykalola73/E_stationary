import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rollerscale',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class RollerscaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public abc = "Roller Scale";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Moscow scale" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Selena Scale" }
  ];
}
