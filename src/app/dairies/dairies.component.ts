import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairies',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class DairiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "Dairies";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"19's dairy" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"20's dairy" }
  ];
}
