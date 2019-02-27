(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{343:function(r,n,t){"use strict";var e=t(0);n.name="acos",n.factory=function(r,n,t,a){var u=a("acos",{number:function(t){return t>=-1&&t<=1||n.predictable?Math.acos(t):new r.Complex(t,0).acos()},Complex:function(r){return r.acos()},BigNumber:function(r){return r.acos()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\cos^{-1}\\left(${args[0]}\\right)"},u}},344:function(r,n,t){"use strict";var e=t(0);var a=Math.acosh||function(r){return Math.log(Math.sqrt(r*r-1)+r)};n.name="acosh",n.factory=function(r,n,t,u){var i=u("acosh",{number:function(t){return t>=1||n.predictable?a(t):t<=-1?new r.Complex(Math.log(Math.sqrt(t*t-1)-t),Math.PI):new r.Complex(t,0).acosh()},Complex:function(r){return r.acosh()},BigNumber:function(r){return r.acosh()},"Array | Matrix":function(r){return e(r,i)}});return i.toTex={1:"\\cosh^{-1}\\left(${args[0]}\\right)"},i}},345:function(r,n,t){"use strict";var e=t(0);n.name="acot",n.factory=function(r,n,t,a){var u=a("acot",{number:function(r){return Math.atan(1/r)},Complex:function(r){return r.acot()},BigNumber:function(n){return new r.BigNumber(1).div(n).atan()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\cot^{-1}\\left(${args[0]}\\right)"},u}},346:function(r,n,t){"use strict";var e=t(0);n.name="acoth",n.factory=function(r,n,t,a){var u=a("acoth",{number:function(t){return t>=1||t<=-1||n.predictable?isFinite(t)?(Math.log((t+1)/t)+Math.log(t/(t-1)))/2:0:new r.Complex(t,0).acoth()},Complex:function(r){return r.acoth()},BigNumber:function(n){return new r.BigNumber(1).div(n).atanh()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\coth^{-1}\\left(${args[0]}\\right)"},u}},347:function(r,n,t){"use strict";var e=t(0);n.name="acsc",n.factory=function(r,n,t,a){var u=a("acsc",{number:function(t){return t<=-1||t>=1||n.predictable?Math.asin(1/t):new r.Complex(t,0).acsc()},Complex:function(r){return r.acsc()},BigNumber:function(n){return new r.BigNumber(1).div(n).asin()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\csc^{-1}\\left(${args[0]}\\right)"},u}},348:function(r,n,t){"use strict";var e=t(0);n.name="acsch",n.factory=function(r,n,t,a){var u=a("acsch",{number:function(r){return r=1/r,Math.log(r+Math.sqrt(r*r+1))},Complex:function(r){return r.acsch()},BigNumber:function(n){return new r.BigNumber(1).div(n).asinh()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"},u}},349:function(r,n,t){"use strict";var e=t(0);n.name="asec",n.factory=function(r,n,t,a){var u=a("asec",{number:function(t){return t<=-1||t>=1||n.predictable?Math.acos(1/t):new r.Complex(t,0).asec()},Complex:function(r){return r.asec()},BigNumber:function(n){return new r.BigNumber(1).div(n).acos()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\sec^{-1}\\left(${args[0]}\\right)"},u}},350:function(r,n,t){"use strict";var e=t(0);n.name="asech",n.factory=function(r,n,t,a){var u=a("asech",{number:function(t){if(t<=1&&t>=-1||n.predictable){t=1/t;var e=Math.sqrt(t*t-1);return t>0||n.predictable?Math.log(e+t):new r.Complex(Math.log(e-t),Math.PI)}return new r.Complex(t,0).asech()},Complex:function(r){return r.asech()},BigNumber:function(n){return new r.BigNumber(1).div(n).acosh()},"Array | Matrix":function(r){return e(r,u)}});return u.toTex={1:"\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"},u}},351:function(r,n,t){"use strict";var e=t(0);n.name="asin",n.factory=function(r,n,t,a){var u=a("asin",{number:function(t){return t>=-1&&t<=1||n.predictable?Math.asin(t):new r.Complex(t,0).asin()},Complex:function(r){return r.asin()},BigNumber:function(r){return r.asin()},"Array | Matrix":function(r){return e(r,u,!0)}});return u.toTex={1:"\\sin^{-1}\\left(${args[0]}\\right)"},u}},352:function(r,n,t){"use strict";var e=t(0);n.name="asinh",n.factory=function(r,n,t,a){var u=a("asinh",{number:Math.asinh||function(r){return Math.log(Math.sqrt(r*r+1)+r)},Complex:function(r){return r.asinh()},BigNumber:function(r){return r.asinh()},"Array | Matrix":function(r){return e(r,u,!0)}});return u.toTex={1:"\\sinh^{-1}\\left(${args[0]}\\right)"},u}},353:function(r,n,t){"use strict";var e=t(0);n.name="atan",n.factory=function(r,n,t,a){var u=a("atan",{number:function(r){return Math.atan(r)},Complex:function(r){return r.atan()},BigNumber:function(r){return r.atan()},"Array | Matrix":function(r){return e(r,u,!0)}});return u.toTex={1:"\\tan^{-1}\\left(${args[0]}\\right)"},u}},354:function(r,n,t){"use strict";n.name="atan2",n.factory=function(r,n,e,a){var u=e(t(1)),i=e(t(27)),c=e(t(19)),o=e(t(144)),f=e(t(21)),s=e(t(20)),m=e(t(8)),h=e(t(7)),g=a("atan2",{"number, number":Math.atan2,"BigNumber, BigNumber":function(n,t){return r.BigNumber.atan2(n,t)},"SparseMatrix, SparseMatrix":function(r,n){return o(r,n,g,!1)},"SparseMatrix, DenseMatrix":function(r,n){return i(n,r,g,!0)},"DenseMatrix, SparseMatrix":function(r,n){return c(r,n,g,!1)},"DenseMatrix, DenseMatrix":function(r,n){return m(r,n,g)},"Array, Array":function(r,n){return g(u(r),u(n)).valueOf()},"Array, Matrix":function(r,n){return g(u(r),n)},"Matrix, Array":function(r,n){return g(r,u(n))},"SparseMatrix, number | BigNumber":function(r,n){return f(r,n,g,!1)},"DenseMatrix, number | BigNumber":function(r,n){return h(r,n,g,!1)},"number | BigNumber, SparseMatrix":function(r,n){return s(n,r,g,!0)},"number | BigNumber, DenseMatrix":function(r,n){return h(n,r,g,!0)},"Array, number | BigNumber":function(r,n){return h(u(r),n,g,!1).valueOf()},"number | BigNumber, Array":function(r,n){return h(u(n),r,g,!0).valueOf()}});return g.toTex={2:"\\mathrm{atan2}\\left(${args}\\right)"},g}},355:function(r,n,t){"use strict";var e=t(0);var a=Math.atanh||function(r){return Math.log((1+r)/(1-r))/2};n.name="atanh",n.factory=function(r,n,t,u){var i=u("atanh",{number:function(t){return t<=1&&t>=-1||n.predictable?a(t):new r.Complex(t,0).atanh()},Complex:function(r){return r.atanh()},BigNumber:function(r){return r.atanh()},"Array | Matrix":function(r){return e(r,i,!0)}});return i.toTex={1:"\\tanh^{-1}\\left(${args[0]}\\right)"},i}}}]);