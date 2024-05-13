import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 decode:string='';
  constructor(private _HttpClient:HttpClient) { }
  getregister(userdata:any):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata)
  }
  getlogin(userdata:any):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata)
      }
      decoder(){
        const encode=localStorage.getItem('etoken')
        if(encode!=null){
         this.decode=jwtDecode(encode)
         console.log(this.decode)
        }
      }
}
