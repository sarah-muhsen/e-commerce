import { CarouselModule } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productid!:string|null;
  productdata:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService,private _CartService:CartService,private _ToastrService:ToastrService){}
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
      this.productid= param.get('id')
      }

    })
    this._ProductsService.getdetail(this.productid).subscribe({
      next:(response)=>{
       this.productdata=response.data;
      }

    })

 
}
addproduct(id:string,element:any):void{
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
productdetail: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  items:1,

}
  

}
