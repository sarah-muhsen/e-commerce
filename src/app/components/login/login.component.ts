import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
  {
    constructor(private _AuthService:AuthService ,private _Router:Router,private _FormBuilder:FormBuilder){}
    msgerror:string='';
    isloading:boolean=false;
   loginform:FormGroup=this._FormBuilder.group({
     
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]],
    })
    handleform():void{
      const userdata=this.loginform.value
      this.isloading=true;
  if(this.loginform.valid ===true){
    this._AuthService.getlogin(userdata).subscribe({
      next:(response)=>{
      if(response.message=='success'){
        localStorage.setItem('etoken',response.token)
        this._AuthService.decoder();
  this._Router.navigate(['/home'])
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
