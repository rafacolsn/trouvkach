(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{184:function(t,n,r){"use strict";t.exports=[r(185),r(188),r(189),r(193),r(197),r(200),r(71),r(72),r(208),r(209),r(210)]},189:function(t,n,r){"use strict";t.exports=[r(190),r(192)]},190:function(t,n,r){"use strict";var o=r(9).format,e=r(5).lazy;n.name="Chain",n.path="type",n.factory=function(t,n,r,i,u){function a(n){if(!(this instanceof a))throw new SyntaxError("Constructor must be called with the new operator");t.isChain(n)?this.value=n.value:this.value=n}function c(t,n){"function"==typeof n&&(a.prototype[t]=f(n))}function f(t){return function(){for(var n=[this.value],r=0;r<arguments.length;r++)n[r+1]=arguments[r];return new a(t.apply(t,n))}}return a.prototype.type="Chain",a.prototype.isChain=!0,a.prototype.done=function(){return this.value},a.prototype.valueOf=function(){return this.value},a.prototype.toString=function(){return o(this.value)},a.prototype.toJSON=function(){return{mathjs:"Chain",value:this.value}},a.fromJSON=function(t){return new a(t.value)},a.createProxy=function(t,n){if("string"==typeof t)c(t,n);else for(var r in t)t.hasOwnProperty(r)&&c(r,t[r])},a.createProxy(u),u.on("import",function(t,n,r){void 0===r&&function(t,n){e(a.prototype,t,function(){var t=n();if("function"==typeof t)return f(t)})}(t,n)}),a},n.math=!0,n.lazy=!1},192:function(t,n,r){"use strict";n.name="chain",n.factory=function(t,n,r,o){return o("chain",{"":function(){return new t.Chain},any:function(n){return new t.Chain(n)}})}},193:function(t,n,r){"use strict";t.exports=[r(89),r(195)]},195:function(t,n,r){"use strict";var o=r(0);n.name="complex",n.factory=function(t,n,e,i){var u=r(4),a=i("complex",{"":function(){return t.Complex.ZERO},number:function(n){return new t.Complex(n,0)},"number, number":function(n,r){return new t.Complex(n,r)},"BigNumber, BigNumber":function(n,r){return new t.Complex(n.toNumber(),r.toNumber())},Complex:function(t){return t.clone()},string:function(n){return t.Complex(n)},null:function(n){return t.Complex(0)},Object:function(n){if("re"in n&&"im"in n)return new t.Complex(n.re,n.im);if("r"in n&&"phi"in n||"abs"in n&&"arg"in n)return new t.Complex(n);throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")},"Array | Matrix":function(t){return o(t,a)}});return a.toTex={0:"0",1:"\\left(${args[0]}\\right)",2:"\\left(\\left(${args[0]}\\right)+".concat(u.symbols.i,"\\cdot\\left(${args[1]}\\right)\\right)")},a}},197:function(t,n,r){"use strict";t.exports=[r(198),r(90)]},198:function(t,n,r){"use strict";var o=r(199);o.prototype.type="Fraction",o.prototype.isFraction=!0,o.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},o.fromJSON=function(t){return new o(t)},n.name="Fraction",n.path="type",n.factory=function(t,n,r,e){return o}},89:function(t,n,r){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=r(194),i=r(3).format,u=r(3).isNumber;n.name="Complex",n.path="type",n.factory=function(t,n,r,a,c){return e.prototype.type="Complex",e.prototype.isComplex=!0,e.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},e.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},e.prototype.format=function(t){var n=this.im,r=this.re,o=i(this.re,t),e=i(this.im,t),a=u(t)?t:t?t.precision:null;if(null!==a){var c=Math.pow(10,-a);Math.abs(r/n)<c&&(r=0),Math.abs(n/r)<c&&(n=0)}return 0===n?o:0===r?1===n?"i":-1===n?"-i":e+"i":n<0?-1===n?o+" - i":o+" - "+e.substring(1)+"i":1===n?o+" + i":o+" + "+e+"i"},e.fromPolar=function(n){switch(arguments.length){case 1:var r=arguments[0];if("object"===o(r))return e(r);throw new TypeError("Input has to be an object with r and phi keys.");case 2:var i=arguments[0],a=arguments[1];if(u(i)){if(t.isUnit(a)&&a.hasBase("ANGLE")&&(a=a.toNumber("rad")),u(a))return new e({r:i,phi:a});throw new TypeError("Phi is not a number nor an angle unit.")}throw new TypeError("Radius r is not a number.");default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},e.prototype.valueOf=e.prototype.toString,e.fromJSON=function(t){return new e(t)},e.EPSILON=n.epsilon,c.on("config",function(t,n){t.epsilon!==n.epsilon&&(e.EPSILON=t.epsilon)}),e.compare=function(t,n){return t.re>n.re?1:t.re<n.re?-1:t.im>n.im?1:t.im<n.im?-1:0},e},n.math=!0},90:function(t,n,r){"use strict";var o=r(0);n.name="fraction",n.factory=function(t,n,r,e){var i=e("fraction",{number:function(n){if(!isFinite(n)||isNaN(n))throw new Error(n+" cannot be represented as a fraction");return new t.Fraction(n)},string:function(n){return new t.Fraction(n)},"number, number":function(n,r){return new t.Fraction(n,r)},null:function(n){return new t.Fraction(0)},BigNumber:function(n){return new t.Fraction(n.toString())},Fraction:function(t){return t},Object:function(n){return new t.Fraction(n)},"Array | Matrix":function(t){return o(t,i)}});return i}}}]);