import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watercolor',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class WatercolorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "Water Color";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Aptitude" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Database" }  
  ];
}
