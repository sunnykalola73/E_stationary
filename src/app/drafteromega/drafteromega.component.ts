import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drafteromega',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class DrafteromegaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public abc = "Drafter Omega";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Zilong Drafter" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Franco Drafter" }
  ];
}
