import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pens',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class PensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public flag = true;
  public abc = "Pens";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Miya Pens" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Lesley Pens" }
  ];

}
