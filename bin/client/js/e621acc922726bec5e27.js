(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{336:function(r,e,n){"use strict";var t=n(2).flatten;e.name="mode",e.factory=function(r,e,o,i){var a=o(n(84)),u=o(n(54));return i("mode",{"Array | Matrix":f,"...":function(r){return f(r)}});function f(r){if(0===(r=t(r.valueOf())).length)throw new Error("Cannot calculate mode of an empty array");for(var e={},n=[],o=0,i=0;i<r.length;i++){var f=r[i];if(u(f)&&a(f))throw new Error("Cannot calculate mode of an array containing NaN values");f in e||(e[f]=0),e[f]++,e[f]===o?n.push(f):e[f]>o&&(o=e[f],n=[f])}return n}}},337:function(r,e,n){"use strict";var t=n(49);e.name="prod",e.factory=function(r,e,o,i){var a=o(n(22)),u=o(n(40)),f=i("prod",{"Array | Matrix":w,"Array | Matrix, number | BigNumber":function(r,e){throw new Error("prod(A, dim) is not yet supported")},"...":function(r){return w(r)}});return f.toTex=void 0,f;function w(r){var e;if(t(r,function(r){try{e=void 0===e?r:a(e,r)}catch(e){throw u(e,"prod",r)}}),void 0===e)throw new Error("Cannot calculate prod of an empty array");return e}}},338:function(r,e,n){"use strict";var t=n(3).isInteger,o=n(3).isNumber,i=n(2).flatten,a=n(50);e.name="quantileSeq",e.factory=function(r,e,u,f){var w=u(n(15)),c=u(n(10)),s=u(n(102)),m=u(n(57));function v(r,e,n){var t=i(r),a=t.length;if(0===a)throw new Error("Cannot calculate quantile of an empty sequence");if(o(e)){var u=e*(a-1),f=u%1;if(0===f){var v=n?t[u]:s(t,u);return l(v),v}var h,p,b=Math.floor(u);if(n)h=t[b],p=t[b+1];else{p=s(t,b+1),h=t[b];for(var g=0;g<b;++g)m(t[g],h)>0&&(h=t[g])}return l(h),l(p),w(c(h,1-f),c(p,f))}var y=e.times(a-1);if(y.isInteger()){y=y.toNumber();var d=n?t[y]:s(t,y);return l(d),d}var N,E,q=y.floor(),x=y.minus(q),A=q.toNumber();if(n)N=t[A],E=t[A+1];else{E=s(t,A+1),N=t[A];for(var B=0;B<A;++B)m(t[B],N)>0&&(N=t[B])}l(N),l(E);var S=new x.constructor(1);return w(c(N,S.minus(x)),c(E,x))}var l=f({"number | BigNumber | Unit":function(r){return r}});return function(e,n,i){var u,f,w;if(arguments.length<2||arguments.length>3)throw new SyntaxError("Function quantileSeq requires two or three parameters");if(a(e)){if("boolean"==typeof(i=i||!1)){if(f=e.valueOf(),o(n)){if(n<0)throw new Error("N/prob must be non-negative");if(n<=1)return v(f,n,i);if(n>1){if(!t(n))throw new Error("N must be a positive integer");var c=n+1;u=new Array(n);for(var s=0;s<n;)u[s]=v(f,++s/c,i);return u}}if(r.isBigNumber(n)){if(n.isNegative())throw new Error("N/prob must be non-negative");if(w=new n.constructor(1),n.lte(w))return new r.BigNumber(v(f,n,i));if(n.gt(w)){if(!n.isInteger())throw new Error("N must be a positive integer");var m=n.toNumber();if(m>4294967295)throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");var l=new r.BigNumber(m+1);u=new Array(m);for(var h=0;h<m;)u[h]=new r.BigNumber(v(f,new r.BigNumber(++h).div(l),i));return u}}if(Array.isArray(n)){u=new Array(n.length);for(var p=0;p<u.length;++p){var b=n[p];if(o(b)){if(b<0||b>1)throw new Error("Probability must be between 0 and 1, inclusive")}else{if(!r.isBigNumber(b))throw new TypeError("Unexpected type of argument in function quantileSeq");if(w=new b.constructor(1),b.isNegative()||b.gt(w))throw new Error("Probability must be between 0 and 1, inclusive")}u[p]=v(f,b,i)}return u}throw new TypeError("Unexpected type of argument in function quantileSeq")}throw new TypeError("Unexpected type of argument in function quantileSeq")}throw new TypeError("Unexpected type of argument in function quantileSeq")}}}}]);