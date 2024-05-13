import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { product } from 'src/app/core/interfaces/products';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _ProductsService :ProductsService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2
  ){}
  products:product[]=[]
  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe({
      next:(response)=>{
    this.products=response.data
      }
     }
  
     )
  }
  addproduct(id:string,element:any):void{
    this._Renderer2.setAttribute(element,'disabled','true');
   this._CartService.addtocart(id).subscribe({
    next:(response) =>{
      console.log(response)
      console.log(response.message)
      console.log(response.numOfCartItems)
      this._ToastrService.success(response.message)
      this._CartService.cartnumber.next(response.numOfCartItems)
    }
   })
      }

}
