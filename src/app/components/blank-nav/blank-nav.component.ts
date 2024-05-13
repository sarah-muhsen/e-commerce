import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-blank-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.scss']
})
export class BlankNavComponent {
  constructor(private _Router:Router,private _CartService:CartService){}
  cartnum:number=0;
  ngOnInit(): void {

    this._CartService.cartnumber.subscribe({
      next:(data)=>{
        this.cartnum=data
      }
    })
    this._CartService.getcart().subscribe({
      next:(response)=>{
       this.cartnum=response.numOfCartItems
      }

    })
  }
signout():void{
  localStorage.removeItem('etoken')
this._Router.navigate(['/login'])
}
}
