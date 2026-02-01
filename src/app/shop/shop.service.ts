import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IPagination } from '../shared/Models/IPagination';
import { IProduct } from '../shared/Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  category:any;
  baseUrl =environment.baseURL;

  products!:IProduct[] //This tells TypeScript: "Don’t worry, I’ll assign it before using it."
  constructor(private http:HttpClient) {}

  getAllProducts(){
    return this.http.get<IPagination>(this.baseUrl+"/Products/GetAll ")
  }

  getCategory(){
    return this.http.get(this.baseUrl+"/Category/get-all")
  }

 
}
