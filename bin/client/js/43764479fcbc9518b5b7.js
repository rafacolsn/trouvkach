(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{150:function(r,n,e){"use strict";n.name="compareText",n.factory=function(r,n,t,a){var i=t(e(1)),u=t(e(26)),o=t(e(8)),f=t(e(7)),c=a("compareText",{"any, any":s,"DenseMatrix, DenseMatrix":function(r,n){return o(r,n,s)},"Array, Array":function(r,n){return c(i(r),i(n)).valueOf()},"Array, Matrix":function(r,n){return c(i(r),n)},"Matrix, Array":function(r,n){return c(r,i(n))},"DenseMatrix, any":function(r,n){return f(r,n,s,!1)},"any, DenseMatrix":function(r,n){return f(n,r,s,!0)},"Array, any":function(r,n){return f(i(r),n,s,!1).valueOf()},"any, Array":function(r,n){return f(i(n),r,s,!0).valueOf()}});function s(n,e){if(!r.isString(n))throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: "+u(n)+", index: 0)");if(!r.isString(e))throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: "+u(e)+", index: 1)");return n===e?0:n>e?1:-1}return c.toTex=void 0,c}},31:function(r,n,e){"use strict";var t=e(306);n.name="compareNatural",n.factory=function(r,n,a,i){var u=a(e(26)),o=a(e(57)),f=o.signatures["boolean,boolean"],c=i("compareNatural",{"any, any":function(n,e){var a,i=u(n),y=u(e);if(!("number"!==i&&"BigNumber"!==i&&"Fraction"!==i||"number"!==y&&"BigNumber"!==y&&"Fraction"!==y))return"0"!==(a=o(n,e)).toString()?a>0?1:-1:t(i,y);if("Array"===i||"Matrix"===i||"Array"===y||"Matrix"===y)return 0!==(a=function n(e,t){return r.isSparseMatrix(e)&&r.isSparseMatrix(t)?s(e.toJSON().values,t.toJSON().values):r.isSparseMatrix(e)?n(e.toArray(),t):r.isSparseMatrix(t)?n(e,t.toArray()):r.isDenseMatrix(e)?n(e.toJSON().data,t):r.isDenseMatrix(t)?n(e,t.toJSON().data):Array.isArray(e)?Array.isArray(t)?s(e,t):n(e,[t]):n([e],t)}(n,e))?a:t(i,y);if(i!==y)return t(i,y);if("Complex"===i)return function(r,n){return r.re>n.re?1:r.re<n.re?-1:r.im>n.im?1:r.im<n.im?-1:0}(n,e);if("Unit"===i)return n.equalBase(e)?c(n.value,e.value):s(n.formatUnits(),e.formatUnits());if("boolean"===i)return f(n,e);if("string"===i)return t(n,e);if("Object"===i)return function(r,n){var e=Object.keys(r),a=Object.keys(n);e.sort(t),a.sort(t);var i=s(e,a);if(0!==i)return i;for(var u=0;u<e.length;u++){var o=c(r[e[u]],n[a[u]]);if(0!==o)return o}return 0}(n,e);if("null"===i)return 0;if("undefined"===i)return 0;throw new TypeError('Unsupported type of value "'+i+'"')}});function s(r,n){for(var e=0,t=Math.min(r.length,n.length);e<t;e++){var a=c(r[e],n[e]);if(0!==a)return a}return r.length>n.length?1:r.length<n.length?-1:0}return c.toTex=void 0,c}},321:function(r,n,e){"use strict";n.name="deepEqual",n.factory=function(r,n,t,a){var i=t(e(53)),u=a("deepEqual",{"any, any":function(r,n){return function r(n,e){if(Array.isArray(n)){if(Array.isArray(e)){var t=n.length;if(t!==e.length)return!1;for(var a=0;a<t;a++)if(!r(n[a],e[a]))return!1;return!0}return!1}return!Array.isArray(e)&&i(n,e)}(r.valueOf(),n.valueOf())}});return u.toTex=void 0,u}},57:function(r,n,e){"use strict";var t=e(3).nearlyEqual,a=e(41);n.name="compare",n.factory=function(r,n,i,u){var o=i(e(1)),f=i(e(19)),c=i(e(73)),s=i(e(20)),y=i(e(8)),l=i(e(7)),x=u("compare",{"boolean, boolean":function(r,n){return r===n?0:r>n?1:-1},"number, number":function(r,e){return r===e||t(r,e,n.epsilon)?0:r>e?1:-1},"BigNumber, BigNumber":function(e,t){return e.eq(t)||a(e,t,n.epsilon)?new r.BigNumber(0):new r.BigNumber(e.cmp(t))},"Fraction, Fraction":function(n,e){return new r.Fraction(n.compare(e))},"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")},"Unit, Unit":function(r,n){if(!r.equalBase(n))throw new Error("Cannot compare units with different base");return x(r.value,n.value)},"SparseMatrix, SparseMatrix":function(r,n){return c(r,n,x)},"SparseMatrix, DenseMatrix":function(r,n){return f(n,r,x,!0)},"DenseMatrix, SparseMatrix":function(r,n){return f(r,n,x,!1)},"DenseMatrix, DenseMatrix":function(r,n){return y(r,n,x)},"Array, Array":function(r,n){return x(o(r),o(n)).valueOf()},"Array, Matrix":function(r,n){return x(o(r),n)},"Matrix, Array":function(r,n){return x(r,o(n))},"SparseMatrix, any":function(r,n){return s(r,n,x,!1)},"DenseMatrix, any":function(r,n){return l(r,n,x,!1)},"any, SparseMatrix":function(r,n){return s(n,r,x,!0)},"any, DenseMatrix":function(r,n){return l(n,r,x,!0)},"Array, any":function(r,n){return l(o(r),n,x,!1).valueOf()},"any, Array":function(r,n){return l(o(n),r,x,!0).valueOf()}});return x.toTex=void 0,x}}}]);