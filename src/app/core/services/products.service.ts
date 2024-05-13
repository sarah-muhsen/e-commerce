import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getproducts(pagenum:number=1):Observable<any>{
 return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pagenum}`)
  }
  getcategory():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  getdetail(id:string|any):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
