import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometrybox',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class GeometryboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "Geo metrybox";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Small" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Big" }
];
}
