import { product } from 'src/app/core/interfaces/products';
import { authGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',canActivate:[authGuard],
    loadComponent:()=>import('./layouts/blanklayout/blanklayout.component').then((m)=>m.BlanklayoutComponent)
,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:'home'},
  {path:'details/:id',loadComponent:()=>import('./components/details/details.component').then((m)=>m.DetailsComponent),title:'productdetails'},
  {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:'cart'},
  {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
  {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:'cart'},
  {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:'products'},

  {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then((m)=>m.PaymentComponent),title:'payment'},

]
},
{path:'',loadComponent:()=>import('./layouts/authlayout/authlayout.component').then((m)=>m.AuthlayoutComponent),
children:[
  {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:'log-in'},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:'register'},
]
},
{path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
