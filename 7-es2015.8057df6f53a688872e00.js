(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0miD":function(t,n,e){"use strict";e.r(n),e.d(n,"GetStartedModule",(function(){return f}));var o=e("nQ6I"),i=e("dLyB"),c=e("PCNd"),r=e("Fk62"),s=e("Ub9n"),a=e("965z"),l=e("FfMK");const u=[{path:"",component:(()=>{class t{constructor(t){this.elementRef=t}onLoad(){this.stripContent(),this.setHeadings()}setHeadings(){const t=[];this.elementRef.nativeElement.querySelectorAll("h2").forEach(n=>t.push(n)),this.headings=t}stripContent(){this.elementRef.nativeElement.querySelector("markdown").querySelectorAll("markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents").forEach(t=>t.remove())}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(s.l))},t.\u0275cmp=s.Db({type:t,selectors:[["app-get-started"]],decls:4,vars:1,consts:[[3,"headings"],["id","getting-started"],["emoji","","src","https://raw.githubusercontent.com/jfcere/ngx-markdown/master/README.md",3,"load"]],template:function(t,n){1&t&&(s.Ob(0,"app-scrollspy-nav-layout",0),s.Ob(1,"h1",1),s.uc(2,"Get Started"),s.Nb(),s.Ob(3,"markdown",2),s.Wb("load",(function(){return n.onLoad()})),s.Nb(),s.Nb()),2&t&&s.ec("headings",n.headings)},directives:[a.a,l.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})()}];let d=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[r.e.forChild(u)],r.e]}),t})();e("SQXh");let f=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[d,o.a.forChild(),i.a,c.a]]}),t})()},"965z":function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var o=e("WRsz");const i=Object(o.k)("zoomAnimation",[Object(o.j)("void => *",[Object(o.i)({opacity:0,transform:"translateY(32px) scale(0)"}),Object(o.e)("400ms cubic-bezier(0.35, 0, 0.25, 1)",Object(o.i)({opacity:1,transform:"translateY(0) scale(1)"}))]),Object(o.j)("* => void",[Object(o.i)({opacity:1,transform:"translateY(0)"}),Object(o.e)("300ms cubic-bezier(0.35, 0, 0.25, 1)",Object(o.i)({opacity:0,transform:"translateY(32px)"}))])]);var c=e("Ub9n"),r=e("qQg5"),s=e("wXtk"),a=e("FfMK"),l=e("Yvf7"),u=e("mcTK"),d=e("lTB+"),f=e("qIlG"),p=e("Fk62");function b(t,n){if(1&t&&(c.Ob(0,"li"),c.Ob(1,"a",2),c.uc(2),c.Nb(),c.Nb()),2&t){const t=n.$implicit;c.zb(1),c.ec("fragment",t.id),c.zb(1),c.vc(t.innerHTML)}}let m=(()=>{class t{constructor(t,n){this.elementRef=t,this.zone=n}ngOnChanges(t){t.headings&&t.headings.currentValue&&this.setScrollSpy()}ngOnDestroy(){this.destroyScrollSpy()}destroyScrollSpy(){this.scrollSpy&&this.scrollSpy.destroy()}setScrollSpy(){this.scrollSpy?this.scrollSpy.setup():this.zone.onStable.pipe(Object(f.a)()).subscribe(()=>{const t=this.elementRef.nativeElement;this.scrollSpy=new d(`${t.tagName}.${t.className} a`,{offset:64,reflow:!0})})}}return t.\u0275fac=function(n){return new(n||t)(c.Jb(c.l),c.Jb(c.z))},t.\u0275cmp=c.Db({type:t,selectors:[["app-scrollspy-nav"]],inputs:{headings:"headings"},features:[c.xb],decls:2,vars:1,consts:[[1,"scrollspy-nav"],[4,"ngFor","ngForOf"],["routerLink",".",3,"fragment"]],template:function(t,n){1&t&&(c.Ob(0,"ul",0),c.tc(1,b,3,2,"li",1),c.Nb()),2&t&&(c.zb(1),c.ec("ngForOf",n.headings))},directives:[l.i,p.d],styles:["ul.scrollspy-nav[_ngcontent-%COMP%]{padding:0}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:2px;font-size:14px;font-weight:500;list-style:none;padding:4px 0 4px 16px}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:active, ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{text-decoration:none}ul.scrollspy-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active){border-color:transparent;opacity:.6}"],changeDetection:0}),t})();var g=e("1xOk");function v(t,n){if(1&t){const t=c.Pb();c.Ob(0,"button",9),c.Wb("click",(function(){return c.mc(t),c.Yb().onScrollUp()})),c.Kb(1,"img",10),c.Nb()}2&t&&c.ec("@zoomAnimation",void 0)}function h(t,n){if(1&t){const t=c.Pb();c.Ob(0,"button",11),c.Wb("click",(function(){return c.mc(t),c.Yb().onScrollUp()})),c.Kb(1,"img",10),c.Nb()}2&t&&c.ec("@zoomAnimation",void 0)}const y=["*"];let O=(()=>{class t{constructor(){this.showScrollUpButton=!1}onWindowScroll(){this.showScrollUpButton=Math.ceil(window.pageYOffset)>64}onScrollUp(){window.scrollTo(0,0),location.hash=""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-scrollspy-nav-layout"]],hostBindings:function(t,n){1&t&&c.Wb("scroll",(function(){return n.onWindowScroll()}),!1,c.lc)},inputs:{headings:"headings"},ngContentSelectors:y,decls:14,vars:3,consts:[["fxLayout","row","fxLayoutGap","40px"],["fxFlex","1 1 calc(100% - 220px)"],[1,"footer"],["emoji","","fxLayout","row","fxLayoutAlign.gt-xs","center",1,"footer-text"],[2,"margin","0 .15em"],["class","scrollup-button--fixed","mat-fab","","color","accent","fxHide.gt-sm","",3,"click",4,"ngIf"],["fxLayout","column","fxFlex","1 0 180px","fxFlexAlign","flex-start","fxHide.lt-md","",1,"sticky"],[3,"headings"],["class","scrollup-button","mat-mini-fab","","color","accent",3,"click",4,"ngIf"],["mat-fab","","color","accent","fxHide.gt-sm","",1,"scrollup-button--fixed",3,"click"],["src","assets/icon-chevron-up.svg"],["mat-mini-fab","","color","accent",1,"scrollup-button",3,"click"]],template:function(t,n){1&t&&(c.dc(),c.Ob(0,"div",0),c.Ob(1,"div",1),c.cc(2),c.Ob(3,"div",2),c.Kb(4,"mat-divider"),c.Ob(5,"markdown",3),c.uc(6," Crafted with :heart: by **jfcere** "),c.Ob(7,"span",4),c.uc(8,"\u2022"),c.Nb(),c.uc(9," Follow on [GitHub](https://github.com/jfcere) "),c.Nb(),c.Nb(),c.tc(10,v,2,1,"button",5),c.Nb(),c.Ob(11,"div",6),c.Kb(12,"app-scrollspy-nav",7),c.tc(13,h,2,1,"button",8),c.Nb(),c.Nb()),2&t&&(c.zb(10),c.ec("ngIf",n.showScrollUpButton),c.zb(2),c.ec("headings",n.headings),c.zb(1),c.ec("ngIf",n.showScrollUpButton))},directives:[r.d,r.e,r.b,s.a,a.a,r.c,l.j,r.a,u.a,m,g.b],styles:[".footer[_ngcontent-%COMP%]{margin:32px 0 8px}.footer-text[_ngcontent-%COMP%]{display:block;font-size:13px;padding-top:4px}.mat-fab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:2px}.sticky[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:80px}.scrollup-button[_ngcontent-%COMP%]{margin:14px}.scrollup-button--fixed[_ngcontent-%COMP%]{position:fixed;bottom:16px;right:16px}"],data:{animation:[i]},changeDetection:0}),t})()},dLyB:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var o=e("Yvf7"),i=e("BGag"),c=e("1xOk"),r=e("wXtk"),s=e("nQ6I"),a=e("Fk62"),l=e("Ub9n");let u=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[o.b,a.e]]}),t})(),d=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,s.a,c.c,r.b,u]]}),t})()},"lTB+":function(t,n,e){var o,i;i="undefined"!=typeof global?global:"undefined"!=typeof window?window:this,void 0===(o=(function(){return function(t){"use strict";var n={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},e=function(t,n,e){if(e.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:e});n.dispatchEvent(o)}},o=function(t){var n=0;if(t.offsetParent)for(;t;)n+=t.offsetTop,t=t.offsetParent;return n>=0?n:0},i=function(t){t&&t.sort((function(t,n){return o(t.content)<o(n.content)?-1:1}))},c=function(n,e,o){var i=n.getBoundingClientRect(),c=function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)}(e);return o?parseInt(i.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(i.top,10)<=c},r=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(t,n){var e=t[t.length-1];if(function(t,n){return!(!r()||!c(t.content,n,!0))}(e,n))return e;for(var o=t.length-1;o>=0;o--)if(c(t[o].content,n))return t[o]},a=function(t,n){if(n.nested&&t.parentNode){var e=t.parentNode.closest("li");e&&(e.classList.remove(n.nestedClass),a(e,n))}},l=function(t,n){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(n.navClass),t.content.classList.remove(n.contentClass),a(o,n),e("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:n}))}},u=function(t,n){if(n.nested){var e=t.parentNode.closest("li");e&&(e.classList.add(n.nestedClass),u(e,n))}};return function(o,c){var r,a,d,f,p,b={setup:function(){r=document.querySelectorAll(o),a=[],Array.prototype.forEach.call(r,(function(t){var n=document.getElementById(decodeURIComponent(t.hash.substr(1)));n&&a.push({nav:t,content:n})})),i(a)},detect:function(){var t=s(a,p);t?d&&t.content===d.content||(l(d,p),function(t,n){if(t){var o=t.nav.closest("li");o&&(o.classList.add(n.navClass),t.content.classList.add(n.contentClass),u(o,n),e("gumshoeActivate",o,{link:t.nav,content:t.content,settings:n}))}}(t,p),d=t):d&&(l(d,p),d=null)}},m=function(n){f&&t.cancelAnimationFrame(f),f=t.requestAnimationFrame(b.detect)},g=function(n){f&&t.cancelAnimationFrame(f),f=t.requestAnimationFrame((function(){i(a),b.detect()}))};return b.destroy=function(){d&&l(d,p),t.removeEventListener("scroll",m,!1),p.reflow&&t.removeEventListener("resize",g,!1),a=null,r=null,d=null,f=null,p=null},p=function(){var t={};return Array.prototype.forEach.call(arguments,(function(n){for(var e in n){if(!n.hasOwnProperty(e))return;t[e]=n[e]}})),t}(n,c||{}),b.setup(),b.detect(),t.addEventListener("scroll",m,!1),p.reflow&&t.addEventListener("resize",g,!1),b}}(i)}).apply(n,[]))||(t.exports=o)},wXtk:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return s}));var o=e("f6B5"),i=e("1rLY"),c=e("Ub9n");let r=(()=>{class t{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(o.a)(t)}get inset(){return this._inset}set inset(t){this._inset=Object(o.a)(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,n){2&t&&(c.Ab("aria-orientation",n.vertical?"vertical":"horizontal"),c.Bb("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,n){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),t})(),s=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[i.d],i.d]}),t})()}}]);