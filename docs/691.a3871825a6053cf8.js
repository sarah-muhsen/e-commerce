"use strict";(self.webpackChunkflashcart=self.webpackChunkflashcart||[]).push([[691],{9691:(f,d,o)=>{o.r(d),o.d(d,{DetailsComponent:()=>v});var r=o(756),i=o(6814),t=o(4769),u=o(7163),_=o(1132),l=o(6286),p=o(2425);function g(s,h){if(1&s&&t._UZ(0,"img",13),2&s){const a=t.oxw().$implicit;t.Q6J("src",a,t.LSH)}}function m(s,h){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",12),t.BQk())}let v=(()=>{class s{constructor(a,n,e,c){this._ActivatedRoute=a,this._ProductsService=n,this._CartService=e,this._ToastrService=c,this.productdata={},this.productdetail={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:700,navText:["",""],items:1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{this.productid=a.get("id")}}),this._ProductsService.getdetail(this.productid).subscribe({next:a=>{this.productdata=a.data}})}addproduct(a,n){this._CartService.addtocart(a).subscribe({next:e=>{console.log(e),console.log(e.message),console.log(e.numOfCartItems),this._ToastrService.success(e.message),this._CartService.cartnumber.next(e.numOfCartItems)}})}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(u.gz),t.Y36(_.s),t.Y36(l.N),t.Y36(p._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:23,vars:10,consts:[[1,"w-75","mx-auto"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h6"],[1,"text-muted","small"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["addbtn",""],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(n,e){if(1&n){const c=t.EpF();t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,m,2,0,"ng-container",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div")(7,"h3",6),t._uU(8),t.qZA(),t.TgZ(9,"p",7),t._uU(10),t.qZA(),t.TgZ(11,"Span"),t._uU(12),t.qZA(),t.TgZ(13,"div",8)(14,"span"),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p"),t._UZ(18,"i",9),t._uU(19),t.qZA()(),t.TgZ(20,"button",10,11),t.NdJ("click",function(){t.CHM(c);const D=t.MAs(21);return t.KtG(e.addproduct(e.productdata._id,D))}),t._uU(22,"Add To Product"),t.qZA()()()()()}2&n&&(t.xp6(3),t.Q6J("options",e.productdetail),t.xp6(1),t.Q6J("ngForOf",e.productdata.images),t.xp6(4),t.Oqu(e.productdata.title),t.xp6(2),t.Oqu(e.productdata.description),t.xp6(2),t.Oqu(e.productdata.category.name),t.xp6(3),t.Oqu(t.xi3(16,7,e.productdata.price,"E\xa3")),t.xp6(4),t.hij(" ",e.productdata.ratingsAverage," "))},dependencies:[i.ez,i.sg,i.H9,r.bB,r.Fy,r.Mp]})}return s})()}}]);