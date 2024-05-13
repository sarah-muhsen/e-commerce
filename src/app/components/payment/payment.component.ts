import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit { 
  constructor(private _ActivatedRoute:ActivatedRoute ,private _CartService:CartService){}
  cartid:string|null=''
  orderform:FormGroup=new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl(''),
  })
  handleform():void{
    console.log(this.orderform.value)
    this._CartService.checkout(this.cartid,this.orderform.value).subscribe({
      next:(response)=>{
       
        if(response.status =="success"){
          window.open(response.session.url,'_self')
        }
      }
    })
  }
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
this.cartid=params.get('id')
console.log(this.cartid)
        }
      })
  }

}
