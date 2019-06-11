import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolstationary',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class SchoolstationaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "School Stationary";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Small" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Big" }
  ];

  public book1 = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Natalia Pencil" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Chou Pencil" }
];
}
