//  Ramda v0.17.1
//  https://github.com/ramda/ramda
//  (c) 2013-2015 Scott Sauyet, Michael Hurley, and David Chambers
//  Ramda may be freely distributed under the MIT license.

(function(){"use strict";var n={"@@functional/placeholder":!0},t=function(n,t){switch(n){case 0:return function(){return t.apply(this,arguments)};case 1:return function(n){return t.apply(this,arguments)};case 2:return function(n,r){return t.apply(this,arguments)};case 3:return function(n,r,e){return t.apply(this,arguments)};case 4:return function(n,r,e,u){return t.apply(this,arguments)};case 5:return function(n,r,e,u,i){return t.apply(this,arguments)};case 6:return function(n,r,e,u,i,o){return t.apply(this,arguments)};case 7:return function(n,r,e,u,i,o,c){return t.apply(this,arguments)};case 8:return function(n,r,e,u,i,o,c,a){return t.apply(this,arguments)};case 9:return function(n,r,e,u,i,o,c,a,f){return t.apply(this,arguments)};case 10:return function(n,r,e,u,i,o,c,a,f,s){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}},r=function(n){return new RegExp(n.source,(n.global?"g":"")+(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.sticky?"y":"")+(n.unicode?"u":""))},e=function(n){return function(){return!n.apply(this,arguments)}},u=function(n,t){n=n||[],t=t||[];var r,e=n.length,u=t.length,i=[];for(r=0;e>r;)i[i.length]=n[r],r+=1;for(r=0;u>r;)i[i.length]=t[r],r+=1;return i},i=function(n,t,r){for(var e=0,u=r.length;u>e;){if(n(t,r[e]))return!0;e+=1}return!1},o=function(n){return function t(r){return 0===arguments.length?t:null!=r&&r["@@functional/placeholder"]===!0?t:n.apply(this,arguments)}},c=function(n){return function t(r,e){var u=arguments.length;return 0===u?t:1===u&&null!=r&&r["@@functional/placeholder"]===!0?t:1===u?o(function(t){return n(r,t)}):2===u&&null!=r&&r["@@functional/placeholder"]===!0&&null!=e&&e["@@functional/placeholder"]===!0?t:2===u&&null!=r&&r["@@functional/placeholder"]===!0?o(function(t){return n(t,e)}):2===u&&null!=e&&e["@@functional/placeholder"]===!0?o(function(t){return n(r,t)}):n(r,e)}},a=function(n){return function t(r,e,u){var i=arguments.length;return 0===i?t:1===i&&null!=r&&r["@@functional/placeholder"]===!0?t:1===i?c(function(t,e){return n(r,t,e)}):2===i&&null!=r&&r["@@functional/placeholder"]===!0&&null!=e&&e["@@functional/placeholder"]===!0?t:2===i&&null!=r&&r["@@functional/placeholder"]===!0?c(function(t,r){return n(t,e,r)}):2===i&&null!=e&&e["@@functional/placeholder"]===!0?c(function(t,e){return n(r,t,e)}):2===i?o(function(t){return n(r,e,t)}):3===i&&null!=r&&r["@@functional/placeholder"]===!0&&null!=e&&e["@@functional/placeholder"]===!0&&null!=u&&u["@@functional/placeholder"]===!0?t:3===i&&null!=r&&r["@@functional/placeholder"]===!0&&null!=e&&e["@@functional/placeholder"]===!0?c(function(t,r){return n(t,r,u)}):3===i&&null!=r&&r["@@functional/placeholder"]===!0&&null!=u&&u["@@functional/placeholder"]===!0?c(function(t,r){return n(t,e,r)}):3===i&&null!=e&&e["@@functional/placeholder"]===!0&&null!=u&&u["@@functional/placeholder"]===!0?c(function(t,e){return n(r,t,e)}):3===i&&null!=r&&r["@@functional/placeholder"]===!0?o(function(t){return n(t,e,u)}):3===i&&null!=e&&e["@@functional/placeholder"]===!0?o(function(t){return n(r,t,u)}):3===i&&null!=u&&u["@@functional/placeholder"]===!0?o(function(t){return n(r,e,t)}):n(r,e,u)}},f=function cu(n,r,e){return function(){for(var u=[],i=0,o=n,c=0;c<r.length||i<arguments.length;){var a;c<r.length&&(null==r[c]||r[c]["@@functional/placeholder"]!==!0||i>=arguments.length)?a=r[c]:(a=arguments[i],i+=1),u[c]=a,(null==a||a["@@functional/placeholder"]!==!0)&&(o-=1),c+=1}return 0>=o?e.apply(this,u):t(o,cu(n,u,e))}},s=function(n,t){for(var r=0,e=t.length,u=[];e>r;)n(t[r])&&(u[u.length]=t[r]),r+=1;return u},l=function(n){return{"@@transducer/value":n,"@@transducer/reduced":!0}},p=function(n){return function(t){return s(function(n){return"function"==typeof t[n]},n(t))}},h=function(n,t){return Object.prototype.hasOwnProperty.call(t,n)},g=function(n){return n},d=Array.isArray||function(n){return null!=n&&n.length>=0&&"[object Array]"===Object.prototype.toString.call(n)},y=Number.isInteger||function(n){return n<<0===n},m=function(n){return"[object Number]"===Object.prototype.toString.call(n)},v=function(n){return"[object String]"===Object.prototype.toString.call(n)},w=function(n){return"function"==typeof n["@@transducer/step"]},x=function(n,t){for(var r=0,e=t.length,u=Array(e);e>r;)u[r]=n(t[r]),r+=1;return u},b=function(n,t){return function(){return t.call(this,n.apply(this,arguments))}},j=function(n,t){return function(){var r=this;return n.apply(r,arguments).then(function(n){return t.call(r,n)})}},O=function(n){return'"'+n.replace(/"/g,'\\"')+'"'},S=function(n){return n&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}},E=function au(n,t,r){switch(arguments.length){case 1:return au(n,0,n.length);case 2:return au(n,t,n.length);default:for(var e=[],u=0,i=Math.max(0,Math.min(n.length,r)-t);i>u;)e[u]=n[t+u],u+=1;return e}},A=function(){var n=function(n){return(10>n?"0":"")+n};return"function"==typeof Date.prototype.toISOString?function(n){return n.toISOString()}:function(t){return t.getUTCFullYear()+"-"+n(t.getUTCMonth()+1)+"-"+n(t.getUTCDate())+"T"+n(t.getUTCHours())+":"+n(t.getUTCMinutes())+":"+n(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}(),I=function(){function n(n,t){this.xf=t,this.pred=n,this.lastValue=void 0,this.seenFirstValue=!1}return n.prototype["@@transducer/init"]=function(){return this.xf["@@transducer/init"]()},n.prototype["@@transducer/result"]=function(n){return this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,t)&&(r=!0):this.seenFirstValue=!0,this.lastValue=t,r?n:this.xf["@@transducer/step"](n,t)},c(function(t,r){return new n(t,r)})}(),k={init:function(){return this.xf["@@transducer/init"]()},result:function(n){return this.xf["@@transducer/result"](n)}},N=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){return this.f(t)?this.xf["@@transducer/step"](n,t):n},c(function(t,r){return new n(t,r)})}(),C=function(){function n(n,t){this.xf=t,this.f=n,this.found=!1}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.found||(n=this.xf["@@transducer/step"](n,void 0)),this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){return this.f(t)&&(this.found=!0,n=S(this.xf["@@transducer/step"](n,t))),n},c(function(t,r){return new n(t,r)})}(),M=function(){function n(n,t){this.xf=t,this.f=n,this.idx=-1,this.found=!1}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.found||(n=this.xf["@@transducer/step"](n,-1)),this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){return this.idx+=1,this.f(t)&&(this.found=!0,n=S(this.xf["@@transducer/step"](n,this.idx))),n},c(function(t,r){return new n(t,r)})}(),P=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](n,this.last))},n.prototype["@@transducer/step"]=function(n,t){return this.f(t)&&(this.last=t),n},c(function(t,r){return new n(t,r)})}(),T=function(){function n(n,t){this.xf=t,this.f=n,this.idx=-1,this.lastIdx=-1}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](n,this.lastIdx))},n.prototype["@@transducer/step"]=function(n,t){return this.idx+=1,this.f(t)&&(this.lastIdx=this.idx),n},c(function(t,r){return new n(t,r)})}(),q=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){return this.xf["@@transducer/step"](n,this.f(t))},c(function(t,r){return new n(t,r)})}(),W=function(){function n(n,t){this.xf=t,this.n=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){return 0===this.n?S(n):(this.n-=1,this.xf["@@transducer/step"](n,t))},c(function(t,r){return new n(t,r)})}(),R=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){return this.f(t)?this.xf["@@transducer/step"](n,t):S(n)},c(function(t,r){return new n(t,r)})}(),B=function(){function n(n){this.f=n}return n.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},n.prototype["@@transducer/result"]=function(n){return n},n.prototype["@@transducer/step"]=function(n,t){return this.f(n,t)},function(t){return new n(t)}}(),L=c(function(n,t){return n+t}),U=a(function(n,t,r){if(t>=r.length||t<-r.length)return r;var e=0>t?r.length:0,i=e+t,o=u(r);return o[i]=n(r[i]),o}),F=o(function(n){return function(){return n}}),D=c(function(n,t){for(var r=0,e=t.length-(n-1),u=new Array(e>=0?e:0);e>r;)u[r]=E(t,r,r+n),r+=1;return u}),V=c(function(n,t){return u(t,[n])}),z=c(function(n,t){return n.apply(this,t)}),_=a(function(n,t,r){var e={};for(var u in r)e[u]=r[u];return e[n]=t,e}),K=a(function fu(n,t,r){switch(n.length){case 0:return r;case 1:return _(n[0],t,r);default:return _(n[0],fu(E(n,1),t,Object(r[n[0]])),r)}}),$=c(function(n,r){return t(n.length,function(){return n.apply(r,arguments)})}),H=c(function(n,t){return function(){return n.apply(this,arguments)&&t.apply(this,arguments)}}),X=o(function(n){return function(t,r){return n(t,r)?-1:n(r,t)?1:0}}),Y=o(e),Z=o(function(n){return function(){for(var t=0;t<n.length;){if(n[t][0].apply(this,arguments))return n[t][1].apply(this,arguments);t+=1}}}),G=a(i),J=c(function(n,t){for(var r={},e=t.length,u=0;e>u;){var i=n(t[u]);r[i]=(h(i,r)?r[i]:0)+1,u+=1}return r}),Q=c(function(n,t){var r={};return r[n]=t,r}),nn=c(function(n,r){return 1===n?o(r):t(n,f(n,[],r))}),tn=L(-1),rn=c(function(n,t){return null==t?n:t}),en=a(function(n,t,r){for(var e=[],u=0,i=t.length,o=G(n);i>u;)o(t[u],r)||o(t[u],e)||(e[e.length]=t[u]),u+=1;return e}),un=c(function(n,t){var r={};for(var e in t)e!==n&&(r[e]=t[e]);return r}),on=c(function su(n,t){switch(n.length){case 0:return t;case 1:return un(n[0],t);default:var r=n[0],e=E(n,1);return null==t[r]?t:_(r,su(e,t[r]),t)}}),cn=c(function(n,t){return n/t}),an=c(function(n,t){for(var r=t.length-1;r>=0&&n(t[r]);)r-=1;return E(t,0,r+1)}),fn=c(function(n,t){return function(){return n.apply(this,arguments)||t.apply(this,arguments)}}),sn=o(function(n){if(null!=n&&"function"==typeof n.empty)return n.empty();if(null!=n&&null!=typeof n.constructor&&"function"==typeof n.constructor.empty)return n.constructor.empty();switch(Object.prototype.toString.call(n)){case"[object Array]":return[];case"[object Object]":return{};case"[object String]":return""}}),ln=c(function lu(n,t){var r,e,u,i={};for(e in t)r=n[e],u=typeof r,i[e]="function"===u?r(t[e]):"object"===u?lu(n[e],t[e]):t[e];return i}),pn=o(function(n){for(var t=0,r=n.length,e={};r>t;)d(n[t])&&n[t].length&&(e[n[t][0]]=n[t][1]),t+=1;return e}),hn=c(function(n,t){return n>t}),gn=c(function(n,t){return n>=t}),dn=c(h),yn=c(function(n,t){return n in t}),mn=c(function(n,t){return n===t?0!==n||1/n===1/t:n!==n&&t!==t}),vn=o(g),wn=a(function(n,t,r){return nn(Math.max(n.length,t.length,r.length),function(){return n.apply(this,arguments)?t.apply(this,arguments):r.apply(this,arguments)})}),xn=L(1),bn=a(function(n,t,r){n=n<r.length&&n>=0?n:r.length;var e=E(r);return e.splice(n,0,t),e}),jn=a(function(n,t,r){return n=n<r.length&&n>=0?n:r.length,u(u(E(r,0,n),t),E(r,n))}),On=c(function(n,t){return null!=t&&t.constructor===n||t instanceof n}),Sn=o(function(n){return d(n)?!0:n?"object"!=typeof n?!1:n instanceof String?!1:1===n.nodeType?!!n.length:0===n.length?!0:n.length>0?n.hasOwnProperty(0)&&n.hasOwnProperty(n.length-1):!1:!1}),En=o(function(n){return 0===Object(n).length}),An=o(function(n){return null==n}),In=function(){var n=!{toString:null}.propertyIsEnumerable("toString"),t=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],r=function(n,t){for(var r=0;r<n.length;){if(n[r]===t)return!0;r+=1}return!1};return o("function"==typeof Object.keys?function(n){return Object(n)!==n?[]:Object.keys(n)}:function(e){if(Object(e)!==e)return[];var u,i,o=[];for(u in e)h(u,e)&&(o[o.length]=u);if(n)for(i=t.length-1;i>=0;)u=t[i],h(u,e)&&!r(o,u)&&(o[o.length]=u),i-=1;return o})}(),kn=o(function(n){var t,r=[];for(t in n)r[r.length]=t;return r}),Nn=o(function(n){return null!=n&&On(Number,n.length)?n.length:NaN}),Cn=c(function(n,t){return t>n}),Mn=c(function(n,t){return t>=n}),Pn=a(function(n,t,r){for(var e=0,u=r.length,i=[],o=[t];u>e;)o=n(o[0],r[e]),i[e]=o[1],e+=1;return[o[0],i]}),Tn=a(function(n,t,r){for(var e=r.length-1,u=[],i=[t];e>=0;)i=n(i[0],r[e]),u[e]=i[1],e-=1;return[i[0],u]}),qn=c(function(n,t){return t.match(n)||[]}),Wn=c(function(n,t){return y(n)?!y(t)||1>t?NaN:(n%t+t)%t:NaN}),Rn=c(function(n,t){return t>n?t:n}),Bn=a(function(n,t,r){return n(r)>n(t)?r:t}),Ln=c(function(n,t){for(var r={},e=In(n),u=0;u<e.length;)r[e[u]]=n[e[u]],u+=1;for(e=In(t),u=0;u<e.length;)r[e[u]]=t[e[u]],u+=1;return r}),Un=c(function(n,t){return n>t?t:n}),Fn=a(function(n,t,r){return n(r)<n(t)?r:t}),Dn=c(function(n,t){return n%t}),Vn=c(function(n,t){return n*t}),zn=c(function(n,t){switch(n){case 0:return function(){return t.call(this)};case 1:return function(n){return t.call(this,n)};case 2:return function(n,r){return t.call(this,n,r)};case 3:return function(n,r,e){return t.call(this,n,r,e)};case 4:return function(n,r,e,u){return t.call(this,n,r,e,u)};case 5:return function(n,r,e,u,i){return t.call(this,n,r,e,u,i)};case 6:return function(n,r,e,u,i,o){return t.call(this,n,r,e,u,i,o)};case 7:return function(n,r,e,u,i,o,c){return t.call(this,n,r,e,u,i,o,c)};case 8:return function(n,r,e,u,i,o,c,a){return t.call(this,n,r,e,u,i,o,c,a)};case 9:return function(n,r,e,u,i,o,c,a,f){return t.call(this,n,r,e,u,i,o,c,a,f)};case 10:return function(n,r,e,u,i,o,c,a,f,s){return t.call(this,n,r,e,u,i,o,c,a,f,s)};default:throw new Error("First argument to nAry must be a non-negative integer no greater than ten")}}),_n=o(function(n){return-n}),Kn=o(function(n){return!n}),$n=c(function(n,t){var r=0>n?t.length+n:n;return v(t)?t.charAt(r):t[r]}),Hn=o(function(n){return function(){return $n(n,arguments)}}),Xn=c(function(n,t){return t.charAt(0>n?t.length+n:n)}),Yn=c(function(n,t){return t.charCodeAt(0>n?t.length+n:n)}),Zn=o(function(n){return[n]}),Gn=o(function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments))}}),Jn=function(){var n=function(t){return{value:t,map:function(r){return n(r(t))}}};return a(function(t,r,e){return t(function(t){return n(r(t))})(e).value})}(),Qn=c(function(n,t){if(null!=t){for(var r=t,e=0,u=n.length;u>e&&null!=r;e+=1)r=r[n[e]];return r}}),nt=c(function(n,t){for(var r={},e=0;e<n.length;)n[e]in t&&(r[n[e]]=t[n[e]]),e+=1;return r}),tt=c(function(n,t){for(var r={},e=0,u=n.length;u>e;){var i=n[e];r[i]=t[i],e+=1}return r}),rt=c(function(n,t){var r={};for(var e in t)n(t[e],e,t)&&(r[e]=t[e]);return r}),et=c(function(n,t){return u([n],t)}),ut=c(function(n,t){return t[n]}),it=a(function(n,t,r){return null!=r&&h(t,r)?r[t]:n}),ot=a(function(n,t,r){return n(r[t])}),ct=c(function(n,t){for(var r=n.length,e=[],u=0;r>u;)e[u]=t[n[u]],u+=1;return e}),at=c(function(n,t){if(!m(n)||!m(t))throw new TypeError("Both arguments to range must be numbers");for(var r=[],e=n;t>e;)r.push(e),e+=1;return r}),ft=a(function(n,t,r){for(var e=r.length-1;e>=0;)t=n(t,r[e]),e-=1;return t}),st=o(S),lt=a(function(n,t,r){return u(E(r,0,Math.min(n,r.length)),E(r,Math.min(r.length,n+t)))}),pt=a(function(n,t,r){return r.replace(n,t)}),ht=o(function(n){return E(n).reverse()}),gt=a(function(n,t,r){for(var e=0,u=r.length,i=[t];u>e;)t=n(t,r[e]),i[e+1]=t,e+=1;return i}),dt=a(function(n,t,r){return Jn(n,F(t),r)}),yt=c(function(n,t){return E(t).sort(n)}),mt=c(function(n,t){return E(t).sort(function(t,r){var e=n(t),u=n(r);return u>e?-1:e>u?1:0})}),vt=c(function(n,t){return n-t}),wt=c(function(n,t){for(var r=t.length-1;r>=0&&n(t[r]);)r-=1;return E(t,r+1,1/0)}),xt=c(function(n,t){return n(t),t}),bt=c(function(n,t){return r(n).test(t)}),jt=c(function(n,t){for(var r=Number(t),e=new Array(r),u=0;r>u;)e[u]=n(u),u+=1;return e}),Ot=o(function(n){var t=[];for(var r in n)h(r,n)&&(t[t.length]=[r,n[r]]);return t}),St=o(function(n){var t=[];for(var r in n)t[t.length]=[r,n[r]];return t}),Et=function(){var n="	\n\f\r   ᠎             　\u2028\u2029\ufeff",t="​",r="function"==typeof String.prototype.trim;return o(r&&!n.trim()&&t.trim()?function(n){return n.trim()}:function(t){var r=new RegExp("^["+n+"]["+n+"]*"),e=new RegExp("["+n+"]["+n+"]*$");return t.replace(r,"").replace(e,"")})}(),At=o(function(n){return null===n?"Null":void 0===n?"Undefined":Object.prototype.toString.call(n).slice(8,-1)}),It=o(function(n){return function(){return n(E(arguments))}}),kt=o(function(n){return zn(1,n)}),Nt=c(function(n,t){return nn(n,function(){for(var r,e=1,u=t,i=0;n>=e&&"function"==typeof u;)r=e===n?arguments.length:i+u.length,u=u.apply(this,E(arguments,i,r)),e+=1,i=r;return u})}),Ct=c(function(n,t){for(var r=n(t),e=[];r&&r.length;)e[e.length]=r[0],r=n(r[1]);return e}),Mt=c(function(n,t){for(var r,e=0,u=t.length,o=[];u>e;)r=t[e],i(n,r,o)||(o[o.length]=r),e+=1;return o}),Pt=a(function(n,t,r){return U(F(t),n,r)}),Tt=o(function(n){for(var t=In(n),r=t.length,e=[],u=0;r>u;)e[u]=n[t[u]],u+=1;return e}),qt=o(function(n){var t,r=[];for(t in n)r[r.length]=n[t];return r}),Wt=function(){var n=function(n){return{value:n,map:function(){return this}}};return c(function(t,r){return t(n)(r).value})}(),Rt=c(function(n,t){for(var r in n)if(h(r,n)&&!n[r](t[r]))return!1;return!0}),Bt=c(function(n,t){return nn(n.length,function(){return t.apply(this,u([n],arguments))})}),Lt=c(function(n,t){for(var r,e=0,u=n.length,i=t.length,o=[];u>e;){for(r=0;i>r;)o[o.length]=[n[e],t[r]],r+=1;e+=1}return o}),Ut=c(function(n,t){for(var r=[],e=0,u=Math.min(n.length,t.length);u>e;)r[e]=[n[e],t[e]],e+=1;return r}),Ft=c(function(n,t){for(var r=0,e=n.length,u={};e>r;)u[n[r]]=t[r],r+=1;return u}),Dt=a(function(n,t,r){for(var e=[],u=0,i=Math.min(t.length,r.length);i>u;)e[u]=n(t[u],r[u]),u+=1;return e}),Vt=F(!1),zt=F(!0),_t=function(n,t){return function(){var r=arguments.length;if(0===r)return t();var e=arguments[r-1];return d(e)||"function"!=typeof e[n]?t.apply(this,arguments):e[n].apply(e,E(arguments,0,r-1))}},Kt=function pu(n,t,e){var u=function(r){for(var u=t.length,i=0;u>i;){if(n===t[i])return e[i];i+=1}t[i+1]=n,e[i+1]=r;for(var o in n)r[o]=pu(n[o],t,e);return r};switch(At(n)){case"Object":return u({});case"Array":return u([]);case"Date":return new Date(n);case"RegExp":return r(n);default:return n}},$t=function(n){return function(r){var e=E(arguments,1);return t(Math.max(0,r.length-e.length),function(){return r.apply(this,n(e,arguments))})}},Ht=function(n,t,r){return function(){var e=arguments.length;if(0===e)return r();var u=arguments[e-1];if(!d(u)){var i=E(arguments,0,e-1);if("function"==typeof u[n])return u[n].apply(u,i);if(w(u)){var o=t.apply(null,i);return o(u)}}return r.apply(this,arguments)}},Xt=function hu(n,t,r,e){var u=At(n);if(u!==At(t))return!1;if("Boolean"===u||"Number"===u||"String"===u)return"object"==typeof n?"object"==typeof t&&mn(n.valueOf(),t.valueOf()):mn(n,t);if(mn(n,t))return!0;if("RegExp"===u)return n.source===t.source&&n.global===t.global&&n.ignoreCase===t.ignoreCase&&n.multiline===t.multiline&&n.sticky===t.sticky&&n.unicode===t.unicode;if(Object(n)===n){if("Date"===u&&n.getTime()!==t.getTime())return!1;var i=In(n);if(i.length!==In(t).length)return!1;for(var o=r.length-1;o>=0;){if(r[o]===n)return e[o]===t;o-=1}for(r[r.length]=n,e[e.length]=t,o=i.length-1;o>=0;){var c=i[o];if(!h(c,t)||!hu(t[c],n[c],r,e))return!1;o-=1}return r.pop(),e.pop(),!0}return!1},Yt=function(n,t){return null!=t&&!d(t)&&"function"==typeof t[n]},Zt=function(n){return function t(r){for(var e,u,i,o=[],c=0,a=r.length;a>c;){if(Sn(r[c]))for(e=n?t(r[c]):r[c],u=0,i=e.length;i>u;)o[o.length]=e[u],u+=1;else o[o.length]=r[c];c+=1}return o}},Gt=function(){function n(n,t,r){for(var e=0,u=r.length;u>e;){if(t=n["@@transducer/step"](t,r[e]),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}e+=1}return n["@@transducer/result"](t)}function t(n,t,r){for(var e=r.next();!e.done;){if(t=n["@@transducer/step"](t,e.value),t&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}e=r.next()}return n["@@transducer/result"](t)}function r(n,t,r){return n["@@transducer/result"](r.reduce($(n["@@transducer/step"],n),t))}var e="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(u,i,o){if("function"==typeof u&&(u=B(u)),Sn(o))return n(u,i,o);if("function"==typeof o.reduce)return r(u,i,o);if(null!=o[e])return t(u,i,o[e]());if("function"==typeof o.next)return t(u,i,o);throw new TypeError("reduce: list must be array or iterable")}}(),Jt=function(){var n={"@@transducer/init":Array,"@@transducer/step":function(n,t){return u(n,[t])},"@@transducer/result":g},t={"@@transducer/init":String,"@@transducer/step":function(n,t){return n+t},"@@transducer/result":g},r={"@@transducer/init":Object,"@@transducer/step":function(n,t){return Ln(n,Sn(t)?Q(t[0],t[1]):t)},"@@transducer/result":g};return function(e){if(w(e))return e;if(Sn(e))return n;if("string"==typeof e)return t;if("object"==typeof e)return r;throw new Error("Cannot create transformer for "+e)}}(),Qt=function(){function n(n,t){this.xf=t,this.f=n,this.all=!0}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.all&&(n=this.xf["@@transducer/step"](n,!0)),this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){return this.f(t)||(this.all=!1,n=S(this.xf["@@transducer/step"](n,!1))),n},c(function(t,r){return new n(t,r)})}(),nr=function(){function n(n,t){this.xf=t,this.f=n,this.any=!1}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){return this.any||(n=this.xf["@@transducer/step"](n,!1)),this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){return this.f(t)&&(this.any=!0,n=S(this.xf["@@transducer/step"](n,!0))),n},c(function(t,r){return new n(t,r)})}(),tr=function(){function n(n,t){this.xf=t,this.n=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){return this.n>0?(this.n-=1,n):this.xf["@@transducer/step"](n,t)},c(function(t,r){return new n(t,r)})}(),rr=function(){function n(n,t){this.xf=t,this.f=n}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=k.result,n.prototype["@@transducer/step"]=function(n,t){if(this.f){if(this.f(t))return n;this.f=null}return this.xf["@@transducer/step"](n,t)},c(function(t,r){return new n(t,r)})}(),er=function(){function n(n,t){this.xf=t,this.f=n,this.inputs={}}return n.prototype["@@transducer/init"]=k.init,n.prototype["@@transducer/result"]=function(n){var t;for(t in this.inputs)if(h(t,this.inputs)&&(n=this.xf["@@transducer/step"](n,this.inputs[t]),n["@@transducer/reduced"])){n=n["@@transducer/value"];break}return this.xf["@@transducer/result"](n)},n.prototype["@@transducer/step"]=function(n,t){var r=this.f(t);return this.inputs[r]=this.inputs[r]||[r,[]],this.inputs[r][1]=V(t,this.inputs[r][1]),n},c(function(t,r){return new n(t,r)})}(),ur=o(function(n){return nn(n.length,function(){var t=0,r=arguments[0],e=arguments[arguments.length-1],i=E(arguments);return i[0]=function(){var n=r.apply(this,u(arguments,[t,e]));return t+=1,n},n.apply(this,i)})}),ir=c(Ht("all",Qt,function(n,t){for(var r=0;r<t.length;){if(!n(t[r]))return!1;r+=1}return!0})),or=c(function(n,t){return Yt("and",n)?n.and(t):n&&t}),cr=c(Ht("any",nr,function(n,t){for(var r=0;r<t.length;){if(n(t[r]))return!0;r+=1}return!1})),ar=o(function(n){return zn(2,n)}),fr=o(function(n){return Kt(n,[],[])}),sr=c(function(n,t){if(d(t))return u(n,t);if(Yt("concat",n))return n.concat(t);throw new TypeError("can't concat "+typeof n)}),lr=o(function(n){return nn(n.length,n)}),pr=c(Ht("dropWhile",rr,function(n,t){for(var r=0,e=t.length;e>r&&n(t[r]);)r+=1;return E(t,r)})),hr=c(function(n,t){return Yt("equals",n)?n.equals(t):Yt("equals",t)?t.equals(n):Xt(n,t,[],[])}),gr=c(Ht("filter",N,s)),dr=c(Ht("find",C,function(n,t){for(var r=0,e=t.length;e>r;){if(n(t[r]))return t[r];r+=1}})),yr=c(Ht("findIndex",M,function(n,t){for(var r=0,e=t.length;e>r;){if(n(t[r]))return r;r+=1}return-1})),mr=c(Ht("findLast",P,function(n,t){for(var r=t.length-1;r>=0;){if(n(t[r]))return t[r];r-=1}})),vr=c(Ht("findLastIndex",T,function(n,t){for(var r=t.length-1;r>=0;){if(n(t[r]))return r;r-=1}return-1})),wr=o(Zt(!0)),xr=o(function(n){return lr(function(t,r){var e=E(arguments);return e[0]=r,e[1]=t,n.apply(this,e)})}),br=c(_t("forEach",function(n,t){for(var r=t.length,e=0;r>e;)n(t[e]),e+=1;return t})),jr=o(p(In)),Or=o(p(kn)),Sr=c(Ht("groupBy",er,function(n,t){return Gt(function(t,r){var e=n(r);return t[e]=V(r,t[e]||(t[e]=[])),t},{},t)})),Er=$n(0),Ar=a(function(n,t,r){for(var e=[],u=0;u<t.length;)i(n,t[u],r)&&(e[e.length]=t[u]),u+=1;return Mt(n,e)}),Ir=c(_t("intersperse",function(n,t){for(var r=[],e=0,u=t.length;u>e;)e===u-1?r.push(t[e]):r.push(t[e],n),e+=1;return r})),kr=a(function(n,t,r){return w(n)?Gt(t(n),n["@@transducer/init"](),r):Gt(t(Jt(n)),n,r)}),Nr=o(function(n){for(var t=In(n),r=t.length,e=0,u={};r>e;){var i=t[e],o=n[i],c=h(o,u)?u[o]:u[o]=[];c[c.length]=i,e+=1}return u}),Cr=o(function(n){for(var t=In(n),r=t.length,e=0,u={};r>e;){var i=t[e];u[n[i]]=i,e+=1}return u}),Mr=$n(-1),Pr=c(function(n,t){if(Yt("lastIndexOf",t))return t.lastIndexOf(n);for(var r=t.length-1;r>=0;){if(hr(t[r],n))return r;r-=1}return-1}),Tr=c(Ht("map",q,x)),qr=c(function(n,t){return Gt(function(r,e){return r[e]=n(t[e]),r},{},In(t))}),Wr=c(function(n,t){return Gt(function(r,e){return r[e]=n(t[e],e,t),r},{},In(t))}),Rr=c(e(Ht("any",nr,cr))),Br=c(function(n,t){return Yt("or",n)?n.or(t):n||t}),Lr=lr($t(u)),Ur=lr($t(xr(u))),Fr=c(function(n,t){return Gt(function(t,r){var e=t[n(r)?0:1];return e[e.length]=r,t},[[],[]],t)}),Dr=a(function(n,t,r){return hr(Qn(n,r),t)}),Vr=c(function(n,t){return Tr(ut(n),t)}),zr=a(function(n,t,r){return ot(hr(t),n,r)}),_r=a(function(n,t,r){return ot(On(n),t,r)}),Kr=a(Gt),$r=c(function(n,t){return gr(e(n),t)}),Hr=c(function(n,t){return jt(F(n),t)}),Xr=a(_t("slice",function(n,t,r){return Array.prototype.slice.call(r,n,t)})),Yr=c(function(n,t){if(0>=n)throw new Error("First argument to splitEvery must be a positive integer");for(var r=[],e=0;e<t.length;)r.push(Xr(e,e+=n,t));return r}),Zr=Kr(L,0),Gr=_t("tail",Xr(1,1/0)),Jr=c(Ht("take",W,function(n,t){return Xr(0,0>n?1/0:n,t)})),Qr=c(Ht("takeWhile",R,function(n,t){for(var r=0,e=t.length;e>r&&n(t[r]);)r+=1;return E(t,0,r)})),ne=nn(4,function(n,t,r,e){return Gt(n("function"==typeof t?B(t):t),r,e)}),te=a(function(n,t,r){return Mt(n,u(t,r))}),re=Mt(hr),ee=o(Zt(!1)),ue=lr(function(n){var r=E(arguments,1),e=r.length;return lr(t(e,function(){for(var t=[],u=0;e>u;)t[u]=r[u](arguments[u]),u+=1;return n.apply(this,t.concat(E(arguments,e)))}))}),ie=c(function(n,t){return Rt(qr(hr,n),t)}),oe=function(){var n=function(n){return{"@@transducer/init":k.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,r){var e=n["@@transducer/step"](t,r);return e["@@transducer/reduced"]?l(e):e}}};return function(t){var r=n(t);return{"@@transducer/init":k.init,"@@transducer/result":function(n){return r["@@transducer/result"](n)},"@@transducer/step":function(n,t){return Sn(t)?Gt(r,n,t):Gt(r,n,[t])}}}}(),ce=function(n,t,r){for(var e=r;e<n.length;){if(hr(n[e],t))return e;e+=1}return-1},ae=function(n){return function(r){var e=function(){var t=arguments;return n(function(n){return n.apply(null,t)},r)};return arguments.length>1?e.apply(null,E(arguments,1)):t(Math.max.apply(Math,Vr("length",r)),e)}},fe=c(function(n,t){return Tr(n,oe(t))}),se=o(ae(ir)),le=o(ae(cr)),pe=c(function(n,t){return Yt("ap",n)?n.ap(t):Gt(function(n,r){return u(n,Tr(r,t))},[],n)}),he=lr(function(n){return n.apply(this,E(arguments,1))}),ge=c(Ht("chain",fe,function(n,t){return ee(Tr(n,t))})),de=a(function(n,t,r){function e(t,r){return pe(Tr(V,n(r)),t)}return Gt(e,t([]),r)}),ye=c(function(n,t){if(n>10)throw new Error("Constructor with greater than ten arguments");return 0===n?function(){return new t}:lr(zn(n,function(n,r,e,u,i,o,c,a,f,s){switch(arguments.length){case 1:return new t(n);case 2:return new t(n,r);case 3:return new t(n,r,e);case 4:return new t(n,r,e,u);case 5:return new t(n,r,e,u,i);case 6:return new t(n,r,e,u,i,o);case 7:return new t(n,r,e,u,i,o,c);case 8:return new t(n,r,e,u,i,o,c,a);case 9:return new t(n,r,e,u,i,o,c,a,f);case 10:return new t(n,r,e,u,i,o,c,a,f,s)}}))}),me=nn(3,function(n){var t=E(arguments,1);return nn(Math.max.apply(Math,Vr("length",t)),function(){var r=arguments,e=this;return n.apply(e,x(function(n){return n.apply(e,r)},t))})}),ve=c(Ht("drop",tr,function(n,t){return Xr(Math.max(0,n),1/0,t)})),we=c(function(n,t){return Jr(n<t.length?t.length-n:0,t)}),xe=c(Ht("dropRepeatsWith",I,function(n,t){var r=[],e=1,u=t.length;if(0!==u)for(r[0]=t[0];u>e;)n(Mr(r),t[e])||(r[r.length]=t[e]),e+=1;return r})),be=a(function(n,t,r){return hr(t[n],r[n])}),je=c(function(n,t){return Yt("indexOf",t)?t.indexOf(n):ce(t,n,0)}),Oe=Xr(0,-1),Se=o(function(n){for(var t=n.length,r=0;t>r;){if(ce(n,n[r],r+1)>=0)return!1;r+=1}return!0}),Ee=c(function(n,t){return function(r){return function(e){return Tr(function(n){return t(n,e)},r(n(e)))}}}),Ae=o(function(n){return Ee($n(n),Pt(n))}),Ie=o(function(n){return Ee(ut(n),_(n))}),ke=c(function(n,t){var r=nn(n,t);return nn(n,function(){return Gt(pe,Tr(r,arguments[0]),E(arguments,1))})}),Ne=o(function(n){return Zr(n)/n.length}),Ce=o(function(n){var t=n.length;if(0===t)return NaN;var r=2-t%2,e=(t-r)/2;return Ne(E(n).sort(function(n,t){return t>n?-1:n>t?1:0}).slice(e,e+r))}),Me=o(function(n){return Kr(Ln,{},n)}),Pe=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return nn(arguments[0].length,Kr(b,arguments[0],Gr(arguments)))},Te=function(){if(0===arguments.length)throw new Error("pipeP requires at least one argument");return nn(arguments[0].length,Kr(j,arguments[0],Gr(arguments)))},qe=Kr(Vn,1),We=ue(x,tt,vn),Re=c(function(n,t){return ve(n>=0?t.length-n:0,t)}),Be=function(n,t){return ce(t,n,0)>=0},Le=function gu(n,t){var r=function(r){var e=t.concat([n]);return Be(r,e)?"<Circular>":gu(r,e)},e=function(n,t){return x(function(t){return O(t)+": "+r(n[t])},t.slice().sort())};switch(Object.prototype.toString.call(n)){case"[object Arguments]":return"(function() { return arguments; }("+x(r,n).join(", ")+"))";case"[object Array]":return"["+x(r,n).concat(e(n,$r(bt(/^\d+$/),In(n)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof n?"new Boolean("+r(n.valueOf())+")":n.toString();case"[object Date]":return"new Date("+O(A(n))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof n?"new Number("+r(n.valueOf())+")":1/n===-(1/0)?"-0":n.toString(10);case"[object String]":return"object"==typeof n?"new String("+r(n.valueOf())+")":O(n);case"[object Undefined]":return"undefined";default:return"function"==typeof n.constructor&&"Object"!==n.constructor.name&&"function"==typeof n.toString&&"[object Object]"!==n.toString()?n.toString():"{"+e(n,In(n)).join(", ")+"}"}},Ue=de(vn),Fe=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return Pe.apply(this,ht(arguments))},De=function(){return 0===arguments.length?vn:Fe.apply(this,Tr(ge,arguments))},Ve=function(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return Te.apply(this,ht(arguments))},ze=o(function(n){return ye(n.length,n);
}),_e=c(Be),Ke=c(function(n,t){for(var r=[],e=0,u=n.length;u>e;)Be(n[e],t)||Be(n[e],r)||(r[r.length]=n[e]),e+=1;return r}),$e=o(Ht("dropRepeats",I(hr),xe(hr))),He=c(function(n,t){return re(s(xr(Be)(n),t))}),Xe=o(function(n){return ke(n.length,n)}),Ye=c(function(n,t){var r={};for(var e in t)Be(e,n)||(r[e]=t[e]);return r}),Ze=function(){return De.apply(this,ht(arguments))},Ge=o(function(n){return Le(n,[])}),Je=c(Fe(re,u)),Qe=c(function(n,t){for(var r,e,u=0,i=[],o=[];u<t.length;)e=t[u],r=n(e),Be(r,i)||(o.push(e),i.push(r)),u+=1;return o}),nu=c(function(n,t){return nn(n+1,function(){var r=arguments[n];if(null!=r&&On(Function,r[t]))return r[t].apply(r,E(arguments,0,n));throw new TypeError(Ge(r)+' does not have a method named "'+t+'"')})}),tu=nu(1,"join"),ru=o(function(n){var t={};return function(){var r=Ge(arguments);return h(r,t)||(t[r]=n.apply(this,arguments)),t[r]}}),eu=nu(1,"split"),uu=nu(0,"toLowerCase"),iu=nu(0,"toUpperCase"),ou={F:Vt,T:zt,__:n,add:L,addIndex:ur,adjust:U,all:ir,allPass:se,always:F,and:or,any:cr,anyPass:le,ap:pe,aperture:D,append:V,apply:z,assoc:_,assocPath:K,binary:ar,bind:$,both:H,call:he,chain:ge,clone:fr,commute:Ue,commuteMap:de,comparator:X,complement:Y,compose:Fe,composeK:De,composeP:Ve,concat:sr,cond:Z,construct:ze,constructN:ye,contains:_e,containsWith:G,converge:me,countBy:J,createMapEntry:Q,curry:lr,curryN:nn,dec:tn,defaultTo:rn,difference:Ke,differenceWith:en,dissoc:un,dissocPath:on,divide:cn,drop:ve,dropLast:we,dropLastWhile:an,dropRepeats:$e,dropRepeatsWith:xe,dropWhile:pr,either:fn,empty:sn,eqProps:be,equals:hr,evolve:ln,filter:gr,find:dr,findIndex:yr,findLast:mr,findLastIndex:vr,flatten:wr,flip:xr,forEach:br,fromPairs:pn,functions:jr,functionsIn:Or,groupBy:Sr,gt:hn,gte:gn,has:dn,hasIn:yn,head:Er,identical:mn,identity:vn,ifElse:wn,inc:xn,indexOf:je,init:Oe,insert:bn,insertAll:jn,intersection:He,intersectionWith:Ar,intersperse:Ir,into:kr,invert:Nr,invertObj:Cr,invoker:nu,is:On,isArrayLike:Sn,isEmpty:En,isNil:An,isSet:Se,join:tu,keys:In,keysIn:kn,last:Mr,lastIndexOf:Pr,length:Nn,lens:Ee,lensIndex:Ae,lensProp:Ie,lift:Xe,liftN:ke,lt:Cn,lte:Mn,map:Tr,mapAccum:Pn,mapAccumRight:Tn,mapObj:qr,mapObjIndexed:Wr,match:qn,mathMod:Wn,max:Rn,maxBy:Bn,mean:Ne,median:Ce,memoize:ru,merge:Ln,mergeAll:Me,min:Un,minBy:Fn,modulo:Dn,multiply:Vn,nAry:zn,negate:_n,none:Rr,not:Kn,nth:$n,nthArg:Hn,nthChar:Xn,nthCharCode:Yn,of:Zn,omit:Ye,once:Gn,or:Br,over:Jn,partial:Lr,partialRight:Ur,partition:Fr,path:Qn,pathEq:Dr,pick:nt,pickAll:tt,pickBy:rt,pipe:Pe,pipeK:Ze,pipeP:Te,pluck:Vr,prepend:et,product:qe,project:We,prop:ut,propEq:zr,propIs:_r,propOr:it,propSatisfies:ot,props:ct,range:at,reduce:Kr,reduceRight:ft,reduced:st,reject:$r,remove:lt,repeat:Hr,replace:pt,reverse:ht,scan:gt,set:dt,slice:Xr,sort:yt,sortBy:mt,split:eu,splitEvery:Yr,subtract:vt,sum:Zr,tail:Gr,take:Jr,takeLast:Re,takeLastWhile:wt,takeWhile:Qr,tap:xt,test:bt,times:jt,toLower:uu,toPairs:Ot,toPairsIn:St,toString:Ge,toUpper:iu,transduce:ne,trim:Et,type:At,unapply:It,unary:kt,uncurryN:Nt,unfold:Ct,union:Je,unionWith:te,uniq:re,uniqBy:Qe,uniqWith:Mt,unnest:ee,update:Pt,useWith:ue,values:Tt,valuesIn:qt,view:Wt,where:Rt,whereEq:ie,wrap:Bt,xprod:Lt,zip:Ut,zipObj:Ft,zipWith:Dt};"object"==typeof exports?module.exports=ou:"function"==typeof define&&define.amd?define(function(){return ou}):this.R=ou}).call(this);
