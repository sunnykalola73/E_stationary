import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegestationary',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class CollegestationaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "College Stationary";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Zilong Drafter" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Franco Drafter" }
  ];

  public book1 = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Moscow scale" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Selena Scale" }
  ];
}
