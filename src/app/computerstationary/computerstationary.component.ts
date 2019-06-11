import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computerstationary',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class ComputerstationaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public flag = true;
  public abc = "Computer Stationary";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Guni Pendrive" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Angela Pendrive" }
  ];

  public book1 = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Mino Wallet" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"John Wallet" }
  ];
}
