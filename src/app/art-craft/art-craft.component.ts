import { Component, OnInit } from '@angular/core';
import { item } from '../item';
import { AddcartserviceService } from '../addcartservice.service';

@Component({
  selector: 'app-art-craft',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class ArtCraftComponent implements OnInit {

  constructor(private _addcart : AddcartserviceService) { }

  ngOnInit() {
  }

  i = new item('','');
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

  addCart( title,price){
    this.i.title  = title;
    this.i.price = price;

    this._addcart.store(this.i)
      .subscribe(
        data => console.log('SUCCESS'),
        (error) => console.log('ERROOOOOOR')
      );
      console.log(this.i);
  }
}
