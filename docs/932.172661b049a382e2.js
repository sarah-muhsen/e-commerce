"use strict";(self.webpackChunkflashcart=self.webpackChunkflashcart||[]).push([[932],{6666:(C,_,l)=>{l.r(_),l.d(_,{LoginComponent:()=>I});var g=l(6814),r=l(95),o=l(4769),u=l(9410),p=l(7163);function f(e,a){1&e&&(o.TgZ(0,"p"),o._uU(1,"name is required"),o.qZA())}function d(e,a){1&e&&(o.TgZ(0,"p"),o._uU(1,"the email is invalid"),o.qZA())}function c(e,a){if(1&e&&(o.TgZ(0,"div",12),o.YNc(1,f,2,0,"p",13),o.YNc(2,d,2,0,"p",13),o.qZA()),2&e){const i=o.oxw();let n,t;o.xp6(1),o.Q6J("ngIf",null==(n=i.loginform.get("email"))?null:n.getError("required")),o.xp6(1),o.Q6J("ngIf",null==(t=i.loginform.get("email"))?null:t.getError("email"))}}function h(e,a){1&e&&(o.TgZ(0,"p"),o._uU(1,"password is required"),o.qZA())}function v(e,a){1&e&&(o.TgZ(0,"p"),o._uU(1,"invalid password"),o.qZA())}function Z(e,a){if(1&e&&(o.TgZ(0,"div",12),o.YNc(1,h,2,0,"p",13),o.YNc(2,v,2,0,"p",13),o.qZA()),2&e){const i=o.oxw();let n,t;o.xp6(1),o.Q6J("ngIf",null==(n=i.loginform.get("password"))?null:n.getError("required")),o.xp6(1),o.Q6J("ngIf",null==(t=i.loginform.get("password"))?null:t.getError("pattern"))}}function T(e,a){1&e&&o._UZ(0,"i",14)}function A(e,a){if(1&e&&(o.TgZ(0,"div",15),o._uU(1),o.qZA()),2&e){const i=o.oxw();o.xp6(1),o.Oqu(i.msgerror)}}let I=(()=>{class e{constructor(i,n,t){this._AuthService=i,this._Router=n,this._FormBuilder=t,this.msgerror="",this.isloading=!1,this.loginform=this._FormBuilder.group({email:["",[r.kI.email,r.kI.required]],password:["",[r.kI.required,r.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]})}handleform(){const i=this.loginform.value;this.isloading=!0,!0===this.loginform.valid&&this._AuthService.getlogin(i).subscribe({next:n=>{"success"==n.message&&(localStorage.setItem("etoken",n.token),this._AuthService.decoder(),this._Router.navigate(["/home"]),this.isloading=!1)},error:n=>{this.msgerror=n.error.message,this.isloading=!1}})}static#o=this.\u0275fac=function(n){return new(n||e)(o.Y36(u.e),o.Y36(p.F0),o.Y36(r.qu))};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[o.jDz],decls:18,vars:5,consts:[[1,"w-75","mx-auto","shadow","p-4","rounded","bg-main-light","my-4"],[1,"my-2"],[3,"formGroup"],[1,"form-item"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"main-btn","mt-2","d-block","ms-auto","py-1","px-5",3,"click"],["class","fas fa-spin fa-spinner",4,"ngIf"],["class","alert alert-danger mt-2",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","mt-2"]],template:function(n,t){if(1&n&&(o.TgZ(0,"section",0)(1,"h1",1),o._uU(2,"login Now"),o.qZA(),o.TgZ(3,"form",2)(4,"div",3)(5,"label",4),o._uU(6,"email:"),o.qZA(),o._UZ(7,"input",5),o.YNc(8,c,3,2,"div",6),o.qZA(),o.TgZ(9,"div",3)(10,"label",7),o._uU(11,"password:"),o.qZA(),o._UZ(12,"input",8),o.YNc(13,Z,3,2,"div",6),o.qZA()(),o.TgZ(14,"button",9),o.NdJ("click",function(){return t.handleform()}),o._uU(15,"login "),o.YNc(16,T,1,0,"i",10),o.qZA(),o.YNc(17,A,2,1,"div",11),o.qZA()),2&n){let s,m;o.xp6(3),o.Q6J("formGroup",t.loginform),o.xp6(5),o.Q6J("ngIf",(null==(s=t.loginform.get("email"))?null:s.errors)&&(null==(s=t.loginform.get("email"))?null:s.touched)),o.xp6(5),o.Q6J("ngIf",(null==(m=t.loginform.get("password"))?null:m.errors)&&(null==(m=t.loginform.get("password"))?null:m.touched)),o.xp6(3),o.Q6J("ngIf",t.isloading),o.xp6(1),o.Q6J("ngIf",t.msgerror)}},dependencies:[g.ez,g.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()}}]);