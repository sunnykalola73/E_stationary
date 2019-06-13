import { Component, OnInit } from '@angular/core';
import { item } from '../item';
import { GetcartService } from '../getcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: '../body/body.component.html',
  styleUrls: ['../body/body.component.scss']
})
export class CartComponent implements OnInit {

  items: item[];
  error = '';
  success = '';
  cart = true;
        
  constructor(private carService: GetcartService) {
  }
        
  ngOnInit() {
    this.getCars();
  }
        
  getCars(): void {
    this.carService.getAll().subscribe(
      (res: item[]) => {
        this.items = res;
      },
      (err) => {
        this.error = err;
      }
    )
  }
}
