import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-craft',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class ArtCraftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public flag = true;
  public abc = "Art & Craft";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Aptitude" },
    {url: "/assets/images/book.jpg", price:"₹ 300", title:"Database" }  
  ];
  public book1  = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Small" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"Big" }
  ];
}
