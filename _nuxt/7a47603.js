(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{302:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("4e5b8f84",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r(302)},304:function(t,e,r){var o=r(31)(!1);o.push([t.i,".pageHeader[data-v-3710cd2e]{position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.pageHeader__imageContainer[data-v-3710cd2e]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.pageHeader__imageContainer>img[data-v-3710cd2e]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(15px);transform:scale(1.1);opacity:.5;transition:all .2s ease}.pageHeader__imageContainer>img[lazy=loaded][data-v-3710cd2e]{transform:scale(1.05);filter:blur(5px)}.pageHeader__container[data-v-3710cd2e]{text-align:center;max-width:var(--max-width-lg);padding:5em 0;z-index:1}.pageHeader__title[data-v-3710cd2e]{font-size:3em}.pageHeader__subtitle[data-v-3710cd2e]{font-weight:500;margin-top:1em}",""]),t.exports=o},307:function(t,e,r){"use strict";r.r(e);var o={props:{title:{type:String,required:!0},subtitle:{type:String,default:null},image:{type:Object,default:null},color:{type:String,default:null}}},n=(r(303),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pageHeader",style:{background:t.color?"linear-gradient(to right, rgb("+t.color+"), var(--color-bg))":"linear-gradient(to right, var(--color-primary), var(--color-primary-light))"}},[t.image?r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"pageHeader__imageContainer"},[r("img",{attrs:{"data-src":t.image.image,"data-loading":t.image.placeholder,alt:""}})]):t._e(),t._v(" "),r("div",{staticClass:"pageHeader__container"},[r("h1",{staticClass:"pageHeader__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("h2",{staticClass:"pageHeader__subtitle"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")])])])}),[],!1,null,"3710cd2e",null);e.default=component.exports},309:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=309},323:function(t,e,r){"use strict";(function(t){r(590),r(593),r(35);var o=r(8),n=(r(26),r(3));e.a={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d,f,m,h,v,y,_,w,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.error,l=t.app,d=t.env,f=l.i18n.locale,m=d.DEFAULT_LOCALE,h=f===m,e.next=6,r("blog",{deep:!0}).where({dir:"/blog/".concat(n.slug,"/locales"),slug:f}).fetch().catch((function(){}));case 6:if(v=e.sent,y=Object(o.a)(v,1),_=y[0],h||_){e.next=15;break}return e.next=12,r("blog",{deep:!0}).where({dir:"/blog/".concat(n.slug,"/locales"),slug:m}).fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 12:w=e.sent,O=Object(o.a)(w,1),_=O[0];case 15:return e.abrupt("return",{post:_});case 16:case"end":return e.stop()}}),e)})))()},data:function(){return{bannerImage:null,thumbnailImage:null}},head:function(){return{title:this.post.title,meta:[{hid:"og:title",property:"og:title",content:this.post.title},{hid:"description",name:"description",content:this.post.description},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"og:image",property:"og:image",content:"".concat(t.env.BASE_URL||"http://localhost:3000").concat(this.thumbnailImage)}]}},created:function(){this.bannerImage=this.getBannerImage(),this.thumbnailImage=this.getThumbnailImage()},methods:{getBannerImage:function(){if(this.post.headerImage)try{return{image:r(305)("./".concat(this.post.dir.substring(1),"/").concat(this.post.headerImage)),placeholder:r(306)("./".concat(this.post.dir.substring(1),"/").concat(this.post.headerImage,""))}}catch(t){return null}else try{return{image:r(594)("./".concat(this.post.dir.substring(1),"/header.jpg")),placeholder:r(595)("./".concat(this.post.dir.substring(1),"/header.jpg"))}}catch(t){return null}},getThumbnailImage:function(){if(this.post.thumbnailImage)try{return r(305)("./".concat(this.post.dir.substring(1),"/").concat(this.post.thumbnailImage))}catch(t){return null}else try{return r(309)("./".concat(this.post.dir.substring(1),"/thumbnail.jpg"))}catch(t){return null}}}}}).call(this,r(132))},352:function(t,e,r){var o=r(7);e.f=o},353:function(t,e,r){var content=r(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("795431e1",content,!0,{sourceMap:!1})},590:function(t,e,r){"use strict";var o=r(2),n=r(6),c=r(27),l=r(9),d=r(19),f=r(128),m=r(197),h=r(5),v=r(18),y=r(95),_=r(14),w=r(4),O=r(39),x=r(42),S=r(71),P=r(56),j=r(57),C=r(73),k=r(89),I=r(591),E=r(127),H=r(49),N=r(23),D=r(91),T=r(33),U=r(20),L=r(126),M=r(92),z=r(72),F=r(93),$=r(7),J=r(352),A=r(592),B=r(50),R=r(40),Q=r(69).forEach,W=M("hidden"),G="Symbol",K=$("toPrimitive"),V=R.set,X=R.getterFor(G),Y=Object.prototype,Z=n.Symbol,tt=c("JSON","stringify"),et=H.f,ot=N.f,nt=I.f,at=D.f,it=L("symbols"),ct=L("op-symbols"),st=L("string-to-symbol-registry"),lt=L("symbol-to-string-registry"),ut=L("wks"),pt=n.QObject,ft=!pt||!pt.prototype||!pt.prototype.findChild,gt=d&&h((function(){return 7!=j(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=et(Y,e);o&&delete Y[e],ot(t,e,r),o&&t!==Y&&ot(Y,e,o)}:ot,mt=function(t,e){var symbol=it[t]=j(Z.prototype);return V(symbol,{type:G,tag:t,description:e}),d||(symbol.description=e),symbol},ht=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},bt=function(t,e,r){t===Y&&bt(ct,e,r),w(t);var o=S(e,!0);return w(r),v(it,o)?(r.enumerable?(v(t,W)&&t[W][o]&&(t[W][o]=!1),r=j(r,{enumerable:P(0,!1)})):(v(t,W)||ot(t,W,P(1,{})),t[W][o]=!0),gt(t,o,r)):ot(t,o,r)},vt=function(t,e){w(t);var r=x(e),o=C(r).concat(Ot(r));return Q(o,(function(e){d&&!yt.call(r,e)||bt(t,e,r[e])})),t},yt=function(t){var e=S(t,!0),r=at.call(this,e);return!(this===Y&&v(it,e)&&!v(ct,e))&&(!(r||!v(this,e)||!v(it,e)||v(this,W)&&this[W][e])||r)},_t=function(t,e){var r=x(t),o=S(e,!0);if(r!==Y||!v(it,o)||v(ct,o)){var n=et(r,o);return!n||!v(it,o)||v(r,W)&&r[W][o]||(n.enumerable=!0),n}},wt=function(t){var e=nt(x(t)),r=[];return Q(e,(function(t){v(it,t)||v(z,t)||r.push(t)})),r},Ot=function(t){var e=t===Y,r=nt(e?ct:x(t)),o=[];return Q(r,(function(t){!v(it,t)||e&&!v(Y,t)||o.push(it[t])})),o};(f||(U((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(t),r=function(t){this===Y&&r.call(ct,t),v(this,W)&&v(this[W],e)&&(this[W][e]=!1),gt(this,e,P(1,t))};return d&&ft&&gt(Y,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return X(this).tag})),U(Z,"withoutSetter",(function(t){return mt(F(t),t)})),D.f=yt,N.f=bt,H.f=_t,k.f=I.f=wt,E.f=Ot,J.f=function(t){return mt($(t),t)},d&&(ot(Z.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),l||U(Y,"propertyIsEnumerable",yt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),Q(C(ut),(function(t){A(t)})),o({target:G,stat:!0,forced:!f},{for:function(t){var e=String(t);if(v(st,e))return st[e];var symbol=Z(e);return st[e]=symbol,lt[symbol]=e,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(v(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),o({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?j(t):vt(j(t),e)},defineProperty:bt,defineProperties:vt,getOwnPropertyDescriptor:_t}),o({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:Ot}),o({target:"Object",stat:!0,forced:h((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(O(t))}}),tt)&&o({target:"JSON",stat:!0,forced:!f||h((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,e,r){for(var o,n=[t],c=1;arguments.length>c;)n.push(arguments[c++]);if(o=e,(_(e)||void 0!==t)&&!ht(t))return y(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!ht(e))return e}),n[1]=e,tt.apply(null,n)}});Z.prototype[K]||T(Z.prototype,K,Z.prototype.valueOf),B(Z,G),z[W]=!0},591:function(t,e,r){var o=r(42),n=r(89).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return n(t)}catch(t){return l.slice()}}(t):n(o(t))}},592:function(t,e,r){var path=r(196),o=r(18),n=r(352),c=r(23).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});o(e,t)||c(e,t,{value:n.f(t)})}},593:function(t,e,r){"use strict";var o=r(2),n=r(19),c=r(6),l=r(18),d=r(14),f=r(23).f,m=r(195),h=c.Symbol;if(n&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof y?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};m(y,h);var _=y.prototype=h.prototype;_.constructor=y;var w=_.toString,O="Symbol(test)"==String(h("test")),x=/^Symbol\((.*)\)[^)]+$/;f(_,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=w.call(symbol);if(l(v,symbol))return"";var desc=O?t.slice(7,-1):t.replace(x,"$1");return""===desc?void 0:desc}}),o({global:!0,forced:!0},{Symbol:y})}},594:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=594},595:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=595},596:function(t,e,r){"use strict";r(353)},597:function(t,e,r){var o=r(31)(!1);o.push([t.i,"[data-v-3e6d53c6] .blogPost__post{line-height:1.8em}[data-v-3e6d53c6] .blogPost__post h1,[data-v-3e6d53c6] .blogPost__post h2{margin:.5em 0 1em}[data-v-3e6d53c6] .blogPost__post h3{margin:.5em 0 .8em}[data-v-3e6d53c6] .blogPost__post p{margin-bottom:1em;color:var(--color-text-semidark)}[data-v-3e6d53c6] .blogPost__post ol,[data-v-3e6d53c6] .blogPost__post ul{margin-bottom:1.2em;color:var(--color-text-semidark)}[data-v-3e6d53c6] .blogPost__post blockquote{padding:0 1em;border-left:.25em solid var(--color-primary)}[data-v-3e6d53c6] .blogPost__post blockquote *{color:var(--color-text-dark)}[data-v-3e6d53c6] .blogPost__post .nuxt-content-highlight pre{background:var(--color-bg-alt);color:var(--color-text-dark);border-radius:.5em;text-shadow:none;margin-bottom:1.2em}[data-v-3e6d53c6] .blogPost__post :not(pre)>code{background:var(--color-bg-alt);padding:.2em .4em;border-radius:.25em;font-size:.9em}",""]),t.exports=o},624:function(t,e,r){"use strict";r.r(e);var o=r(323).a,n=(r(596),r(12)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blogPost"},[r("PageHeader",{attrs:{title:t.post.title,subtitle:t.post.description,image:t.bannerImage,color:t.post.headerColor}}),t._v(" "),r("PageContainer",{attrs:{blog:""}},[r("nuxt-content",{staticClass:"blogPost__post",attrs:{document:t.post}})],1)],1)}),[],!1,null,"3e6d53c6",null);e.default=component.exports;installComponents(component,{PageHeader:r(307).default,PageContainer:r(194).default})}}]);