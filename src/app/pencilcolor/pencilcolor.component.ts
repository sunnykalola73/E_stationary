import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pencilcolor',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class PencilcolorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public abc = "Pencil Color";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Small" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Big" }
];

}
