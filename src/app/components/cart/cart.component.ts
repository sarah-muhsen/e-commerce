import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  cart:any=null;
  constructor(private _CartService:CartService){}
ngOnInit(): void {
 this._CartService.getcart().subscribe({
next:(response)=>{
  console.log(response);
  this.cart=response;
}

})
  
}
removeitem(id:string):void{
  this._CartService.deletecart(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.cart=response;
      this._CartService.cartnumber.next(response.numOfCartItems)
    }
    
    })

}
changecount(count:number,id:string){
  if(count>=1){
    this._CartService.updatecart(count,id).subscribe({
      next:(response)=>{
  console.log(response);
  this.cart=response;
      }
    })
  }
 
  
}
clear(){
  this._CartService.clearcart().subscribe({
    next:(response)=>{
     if(response.message==='success'){
      this.cart=null;
      this._CartService.cartnumber.next(0)
     }
    }
  })

}
}
