function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{tgEQ:function(n,e,t){"use strict";t.r(e);var i,o,r,s=t("ofXK"),a=t("3Pt+"),c=t("fXoL"),l=((o=function(){function n(){_classCallCheck(this,n),this.close=new c.n}return _createClass(n,[{key:"onClose",value:function(){this.close.emit()}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=c.Db({type:o,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(c.Mb(0,"div",0),c.Ub("click",(function(){return e.onClose()})),c.Lb(),c.Mb(1,"div",1),c.Mb(2,"p"),c.gc(3),c.Lb(),c.Mb(4,"div",2),c.Mb(5,"button",3),c.Ub("click",(function(){return e.onClose()})),c.gc(6,"close"),c.Lb(),c.Lb(),c.Lb()),2&n&&(c.zb(3),c.hc(e.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:center}"]}),o),b=((i=function n(e){_classCallCheck(this,n),this.viewContainerRef=e}).\u0275fac=function(n){return new(n||i)(c.Jb(c.N))},i.\u0275dir=c.Eb({type:i,selectors:[["","appPlaceholder",""]]}),i),d=t("npAJ"),u=t("tyNb"),f=((r=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=c.Db({type:r,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(n,e){1&n&&(c.Mb(0,"div",0),c.Kb(1,"div"),c.Kb(2,"div"),c.Kb(3,"div"),c.Kb(4,"div"),c.Lb())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border:8px solid transparent;border-top-color:#dd0b0b}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-ring{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),r);function p(n,e){}function g(n,e){1&n&&(c.Mb(0,"div",5),c.Kb(1,"app-loading-spinner"),c.Lb())}function h(n,e){if(1&n){var t=c.Nb();c.Mb(0,"form",6,7),c.Ub("ngSubmit",(function(){c.cc(t);var n=c.bc(1);return c.Wb().onSubmit(n)})),c.Mb(2,"div",8),c.Mb(3,"label",9),c.gc(4,"Email"),c.Lb(),c.Kb(5,"input",10),c.Lb(),c.Mb(6,"div",8),c.Mb(7,"label",11),c.gc(8,"Password"),c.Lb(),c.Kb(9,"input",12),c.Lb(),c.Kb(10,"hr"),c.Mb(11,"div"),c.Mb(12,"button",13),c.gc(13),c.Lb(),c.gc(14," | "),c.Mb(15,"button",14),c.Ub("click",(function(){return c.cc(t),c.Wb().onSwitchMode()})),c.gc(16),c.Lb(),c.Lb(),c.Lb()}if(2&n){var i=c.bc(1),o=c.Wb();c.zb(12),c.Xb("disabled",!i.valid),c.zb(1),c.hc(o.isLoginMode?"Login":"Sign Up"),c.zb(3),c.ic("Switch to ",o.isLoginMode?"Sign Up":"logIn","")}}var m,v=((m=function(){function n(e,t,i){_classCallCheck(this,n),this.authService=e,this.router=t,this.componentfactoryresolver=i,this.isLoginMode=!0,this.isLoading=!1,this.error=null}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.closeSub&&this.closeSub.unsubscribe()}},{key:"onSwitchMode",value:function(){this.isLoginMode=!this.isLoginMode}},{key:"onSubmit",value:function(n){var e=this;if(n.valid){var t=n.value.email,i=n.value.password;this.isLoading=!0,(this.isLoginMode?this.authService.login(t,i):this.authService.signUp(t,i)).subscribe((function(n){console.log(n),e.isLoading=!1,e.router.navigate(["/recipes"])}),(function(n){console.log(n),e.error=n,e.showErrorAlert(n),e.isLoading=!1})),n.reset()}}},{key:"onHandleError",value:function(){this.error=null}},{key:"showErrorAlert",value:function(n){var e=this,t=this.componentfactoryresolver.resolveComponentFactory(l),i=this.alertHost.viewContainerRef;i.clear();var o=i.createComponent(t);o.instance.message=n,this.closeSub=o.instance.close.subscribe((function(){e.closeSub.unsubscribe(),i.clear()}))}}]),n}()).\u0275fac=function(n){return new(n||m)(c.Jb(d.a),c.Jb(u.c),c.Jb(c.j))},m.\u0275cmp=c.Db({type:m,selectors:[["app-auth"]],viewQuery:function(n,e){var t;1&n&&c.kc(b,!0),2&n&&c.ac(t=c.Vb())&&(e.alertHost=t.first)},decls:5,vars:2,consts:[[1,"row"],["appPlaceholder",""],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center;",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"from-group"],["for","email"],["type","email","id","email","ngModel","","required","","name","email",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","required","","name","password","minlength","6",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,e){1&n&&(c.Mb(0,"div",0),c.fc(1,p,0,0,"ng-template",1),c.Mb(2,"div",2),c.fc(3,g,2,0,"div",3),c.fc(4,h,17,3,"form",4),c.Lb(),c.Lb()),2&n&&(c.zb(3),c.Xb("ngIf",e.isLoading),c.zb(1),c.Xb("ngIf",!e.isLoading))},directives:[b,s.i,f,a.t,a.l,a.m,a.a,a.k,a.n,a.r,a.j],encapsulation:2}),m),w=t("D08e");t.d(e,"AuthModule",(function(){return M}));var y,M=((y=function n(){_classCallCheck(this,n)}).\u0275mod=c.Hb({type:y}),y.\u0275inj=c.Gb({factory:function(n){return new(n||y)},imports:[[s.b,a.i,u.f.forChild([{path:"",component:v}]),w.a]]}),y)}}]);