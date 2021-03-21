import { HttpClient } from '@angular/common/http'; //bununla birlikte backende istekte bulunabiliyoruz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  //injecte edilebilecek servis demektir
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:50630/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  //servisten api istegi yapılış şekli
  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl); //apiUrl 'den gelen datayı ProductResponseModel e map edecegini belirtiyoruz
  }
}
