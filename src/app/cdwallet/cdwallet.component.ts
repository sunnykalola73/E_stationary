import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdwallet',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class CdwalletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public abc = "CD Wallet";
  public books = [
    {url: "/assets/images/book.jpg", price:'₹ 200', title:"Mino Wallet" },
  {url: "/assets/images/book.jpg", price:"₹ 300", title:"John Wallet" }
  ];
}
