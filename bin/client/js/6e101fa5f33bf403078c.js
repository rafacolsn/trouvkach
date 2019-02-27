(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{103:function(r,n,t){"use strict";var a=t(49),e=t(85),i=t(66);n.name="max",n.factory=function(r,n,o,u){var c=o(t(36)),f=o(t(40)),m=u("max",{"Array | Matrix":s,"Array | Matrix, number | BigNumber":function(r,n){return e(r,n.valueOf(),y)},"...":function(r){if(i(r))throw new TypeError("Scalar values expected in function max");return s(r)}});return m.toTex="\\max\\left(${args}\\right)",m;function y(r,n){try{return c(r,n)?r:n}catch(r){throw f(r,"max",n)}}function s(r){var n;if(a(r,function(r){try{isNaN(r)&&"number"==typeof r?n=NaN:(void 0===n||c(r,n))&&(n=r)}catch(n){throw f(n,"max",r)}}),void 0===n)throw new Error("Cannot calculate max of an empty array");return n}}},154:function(r,n,t){"use strict";var a=t(2).flatten,e=t(66);n.name="median",n.factory=function(r,n,i,o){var u=i(t(18)),c=i(t(13)),f=i(t(57)),m=i(t(102)),y=i(t(40)),s=o("median",{"Array | Matrix":v,"Array | Matrix, number | BigNumber":function(r,n){throw new Error("median(A, dim) is not yet supported")},"...":function(r){if(e(r))throw new TypeError("Scalar values expected in function median");return v(r)}});function v(r){try{var n=(r=a(r.valueOf())).length;if(0===n)throw new Error("Cannot calculate median of an empty array");if(n%2==0){for(var t=n/2-1,e=m(r,t+1),i=r[t],o=0;o<t;++o)f(r[o],i)>0&&(i=r[o]);return l(i,e)}var u=m(r,(n-1)/2);return w(u)}catch(r){throw y(r,"median")}}var w=o({"number | BigNumber | Complex | Unit":function(r){return r}}),l=o({"number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit":function(r,n){return c(u(r,n),2)}});return s.toTex=void 0,s}},155:function(r,n,t){"use strict";var a=t(2).size,e=t(49),i=t(85),o=t(66);n.name="mean",n.factory=function(r,n,u,c){var f=u(t(15)),m=u(t(47)),y=u(t(40)),s=c("mean",{"Array | Matrix":v,"Array | Matrix, number | BigNumber":function(r,n){try{var t=i(r,n,f),e=Array.isArray(r)?a(r):r.size();return m(t,e[n])}catch(r){throw y(r,"mean")}},"...":function(r){if(o(r))throw new TypeError("Scalar values expected in function mean");return v(r)}});return s.toTex=void 0,s;function v(r){var n=0,t=0;if(e(r,function(r){try{n=f(n,r),t++}catch(n){throw y(n,"mean",r)}}),0===t)throw new Error("Cannot calculate mean of an empty array");return m(n,t)}}},156:function(r,n,t){"use strict";var a=t(49),e=t(85),i=t(66);n.name="min",n.factory=function(r,n,o,u){var c=o(t(43)),f=o(t(40)),m=u("min",{"Array | Matrix":s,"Array | Matrix, number | BigNumber":function(r,n){return e(r,n.valueOf(),y)},"...":function(r){if(i(r))throw new TypeError("Scalar values expected in function min");return s(r)}});return m.toTex="\\min\\left(${args}\\right)",m;function y(r,n){try{return c(r,n)?r:n}catch(r){throw f(r,"min",n)}}function s(r){var n;if(a(r,function(r){try{isNaN(r)&&"number"==typeof r?n=NaN:(void 0===n||c(r,n))&&(n=r)}catch(n){throw f(n,"min",r)}}),void 0===n)throw new Error("Cannot calculate min of an empty array");return n}}},334:function(r,n,t){"use strict";r.exports=[t(335),t(103),t(155),t(154),t(156),t(336),t(337),t(338),t(339),t(104),t(157)]},335:function(r,n,t){"use strict";var a=t(2).flatten;n.name="mad",n.factory=function(r,n,e,i){var o=e(t(24)),u=e(t(148)),c=e(t(154)),f=e(t(16)),m=e(t(40)),y=i("mad",{"Array | Matrix":s,"...":function(r){return s(r)}});return y.toTex=void 0,y;function s(r){if(0===(r=a(r.valueOf())).length)throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");try{var n=c(r);return c(u(r,function(r){return o(f(r,n))}))}catch(r){throw r instanceof TypeError&&-1!==r.message.indexOf("median")?new TypeError(r.message.replace("median","mad")):m(r,"mad")}}}}}]);