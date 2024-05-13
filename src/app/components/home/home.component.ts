import { CartService } from './../../core/services/cart.service';
import { category } from './../../core/interfaces/category';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { product } from 'src/app/core/interfaces/products';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarouselModule,CuttextPipe,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:product[]=[];
  category:category[]=[];
  constructor(private _ProductsService:ProductsService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2
    ){}

    


  ngOnInit(): void {
   this._ProductsService.getproducts().subscribe({
    next:(Response)=>{
      this.products=Response.data
    }
   }

   )
   this._ProductsService.getcategory().subscribe({
    next:(Response)=>{
    this.category=Response.data


    }
   })
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
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      autoplay:true,
      autoplayTimeout:7000,
      autoplaySpeed:1000,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 3
        },
        740: {
          items: 4
        },
        940: {
          items: 6
        }
      },
      nav: false
    }
    minslider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplaySpeed:1000,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        940: {
          items: 1
        }
      },
      nav: false
    }
}

