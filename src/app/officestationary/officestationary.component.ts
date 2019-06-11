import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officestationary',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class OfficestationaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public flag = true;
  public abc = "Office Stationary";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"19's dairy" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"20's dairy" }
  ];

  public book1 = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Miya Pens" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Lesley Pens" }
  ];
}
