import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendrive',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class PendriveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "Pendrive";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Guni Pendrive" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Angela Pendrive" }
  ];
}
