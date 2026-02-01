import { Component } from '@angular/core';
import { IPagination } from '../shared/Models/IPagination';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  constructor(private shopService: ShopService) { }

  getAllProduct(){
    this.shopService.getAllProducts().subscribe({
      next:(value:IPagination)=>{
        console.log(value);
      }
    })
  }
}
