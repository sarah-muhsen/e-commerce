import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _Htppclient:HttpClient) { }
  cartnumber:BehaviorSubject<number>=new BehaviorSubject(0);
  mytoken:any={
   token: localStorage.getItem("etoken")
  }
  addtocart(prodid:string):Observable<any>{
    return this._Htppclient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      productId: prodid
  },
  {
headers:this.mytoken
  }
    )

  }
  getcart():Observable<any>{
    return this._Htppclient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.mytoken
    }

    )
  }
  deletecart(id:string):Observable<any>{
    return this._Htppclient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:this.mytoken
    }

    )
  }
  updatecart(countnum:number,id:string):Observable<any>{
    return this._Htppclient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:countnum
    },
    {
      headers:this.mytoken
    }
   
    )
  }
  clearcart():Observable<any>{
    return this._Htppclient.delete('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.mytoken
    }

    )
  }
  checkout(cartid:string|null,orderinfo:object):Observable<any>{
    return this._Htppclient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`,
    {
      shippingAddress:orderinfo
          
  },{
    headers:this.mytoken
  }
    )
  }
  
}
