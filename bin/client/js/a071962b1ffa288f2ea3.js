(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{114:function(r,o,n){"use strict";var t=n(0);o.name="fix",o.factory=function(r,o,n,e){var i=e("fix",{number:function(r){return r>0?Math.floor(r):Math.ceil(r)},Complex:function(o){return new r.Complex(o.re>0?Math.floor(o.re):Math.ceil(o.re),o.im>0?Math.floor(o.im):Math.ceil(o.im))},BigNumber:function(r){return r.isNegative()?r.ceil():r.floor()},Fraction:function(r){return r.s<0?r.ceil():r.floor()},"Array | Matrix":function(r){return t(r,i,!0)}});return i.toTex={1:"\\mathrm{${name}}\\left(${args[0]}\\right)"},i}},248:function(r,o,n){"use strict";var t=n(0);o.name="floor",o.factory=function(r,o,n,e){var i=e("floor",{number:Math.floor,Complex:function(r){return r.floor()},BigNumber:function(r){return r.floor()},Fraction:function(r){return r.floor()},"Array | Matrix":function(r){return t(r,i,!0)}});return i.toTex={1:"\\left\\lfloor${args[0]}\\right\\rfloor"},i}}}]);