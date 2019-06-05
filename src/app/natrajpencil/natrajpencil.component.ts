import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natrajpencil',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class NatrajpencilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public abc = "Natraj Pencil";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Natalia Pencil" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Chou Pencil" }
];
}
