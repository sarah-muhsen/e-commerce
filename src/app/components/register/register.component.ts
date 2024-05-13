import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router,private _FormBuilder:FormBuilder){}
  msgerror:string='';
  isloading:boolean=false;
  registerform:FormGroup=this._FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    email:['',[Validators.email,Validators.required]],
    password:['',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    rePassword:[''],
    phone:['',[Validators.pattern(/^01[0125][0-9]{8}$/)]]
  },{validators:[this.confirmpassword]}as FormControlOptions)
  confirmpassword(group:FormGroup):void{
    const password=group.get('password')
    const rePassword=group.get('rePassword')
    if(rePassword?.value ==''){
      rePassword?.setErrors({required:true})
    }
   else if(password?.value!=rePassword?.value){
      rePassword?.setErrors({mismatch:true})

    }
  }
  handleform():void{
    const userdata=this.registerform.value
    this.isloading=true;
if(this.registerform.valid ===true){
  this._AuthService.getregister(userdata).subscribe({
    next:(response)=>{
    if(response.message=='success'){
this._Router.navigate(['/login'])
      this.isloading=false;
    }
    
    },
    error:(err)=>{
      this.msgerror=err.error.message;
      this.isloading=false;
    }
  })
}
  
 }
}
