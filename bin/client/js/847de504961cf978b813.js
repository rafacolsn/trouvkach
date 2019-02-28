(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{4:function(n,e,t){"use strict";var i=t(6);function r(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}e.isNumber=function(n){return"number"==typeof n},e.isInteger=function(n){return"boolean"==typeof n||!!isFinite(n)&&n===Math.round(n)},e.sign=Math.sign||function(n){return n>0?1:n<0?-1:0},e.format=function(n,t){if("function"==typeof t)return t(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var r,o="auto";switch(t&&(t.notation&&(o=t.notation),e.isNumber(t)?r=t:e.isNumber(t.precision)&&(r=t.precision)),o){case"fixed":return e.toFixed(n,r);case"exponential":return e.toExponential(n,r);case"engineering":return e.toEngineering(n,r);case"auto":if(t&&t.exponential&&(void 0!==t.exponential.lower||void 0!==t.exponential.upper)){var a=i.map(t,function(n){return n});return a.exponential=void 0,void 0!==t.exponential.lower&&(a.lowerExp=Math.round(Math.log(t.exponential.lower)/Math.LN10)),void 0!==t.exponential.upper&&(a.upperExp=Math.round(Math.log(t.exponential.upper)/Math.LN10)),console.warn("Deprecation warning: Formatting options exponential.lower and exponential.upper (minimum and maximum value) are replaced with exponential.lowerExp and exponential.upperExp (minimum and maximum exponent) since version 4.0.0. Replace "+JSON.stringify(t)+" with "+JSON.stringify(a)),e.toPrecision(n,r,a)}return e.toPrecision(n,r,t&&t).replace(/((\.\d*?)(0+))($|e)/,function(){var n=arguments[2],e=arguments[4];return"."!==n?n+e:e});default:throw new Error('Unknown notation "'+o+'". Choose "auto", "exponential", or "fixed".')}},e.splitNumber=function(n){var e=String(n).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],i=e[2],r=parseFloat(e[4]||"0"),o=i.indexOf(".");r+=-1!==o?o-1:i.length-1;var a=i.replace(".","").replace(/^0*/,function(n){return r-=n.length,""}).replace(/0*$/,"").split("").map(function(n){return parseInt(n)});return 0===a.length&&(a.push(0),r++),{sign:t,coefficients:a,exponent:r}},e.toEngineering=function(n,t){if(isNaN(n)||!isFinite(n))return String(n);var i=e.roundDigits(e.splitNumber(n),t),o=i.exponent,a=i.coefficients,u=o%3==0?o:o<0?o-3-o%3:o-o%3;if(e.isNumber(t))t>a.length&&(a=a.concat(r(t-a.length)));else{var p=o>=0?o:Math.abs(u);a.length-1<p&&(a=a.concat(r(p-(a.length-1))))}for(var s=Math.abs(o-u),c=1;--s>=0;)c++;var l=a.slice(c).join(""),f=e.isNumber(t)&&l.length||l.match(/[1-9]/)?"."+l:"",g=a.slice(0,c).join("")+f+"e"+(o>=0?"+":"")+u.toString();return i.sign+g},e.toFixed=function(n,t){if(isNaN(n)||!isFinite(n))return String(n);var i=e.splitNumber(n),o="number"==typeof t?e.roundDigits(i,i.exponent+1+t):i,a=o.coefficients,u=o.exponent+1,p=u+(t||0);return a.length<p&&(a=a.concat(r(p-a.length))),u<0&&(a=r(1-u).concat(a),u=1),u<a.length&&a.splice(u,0,0===u?"0.":"."),o.sign+a.join("")},e.toExponential=function(n,t){if(isNaN(n)||!isFinite(n))return String(n);var i=e.splitNumber(n),o=t?e.roundDigits(i,t):i,a=o.coefficients,u=o.exponent;a.length<t&&(a=a.concat(r(t-a.length)));var p=a.shift();return o.sign+p+(a.length>0?"."+a.join(""):"")+"e"+(u>=0?"+":"")+u},e.toPrecision=function(n,t,i){if(isNaN(n)||!isFinite(n))return String(n);var o=i&&void 0!==i.lowerExp?i.lowerExp:-3,a=i&&void 0!==i.upperExp?i.upperExp:5,u=e.splitNumber(n);if(u.exponent<o||u.exponent>=a)return e.toExponential(n,t);var p=t?e.roundDigits(u,t):u,s=p.coefficients,c=p.exponent;s.length<t&&(s=s.concat(r(t-s.length))),s=s.concat(r(c-s.length+1+(s.length<t?t-s.length:0)));var l=c>0?c:0;return l<(s=r(-c).concat(s)).length-1&&s.splice(l+1,0,"."),p.sign+s.join("")},e.roundDigits=function(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},i=t.coefficients;e<=0;)i.unshift(0),t.exponent++,e++;if(i.length>e&&i.splice(e,i.length-e)[0]>=5){var r=e-1;for(i[r]++;10===i[r];)i.pop(),0===r&&(i.unshift(0),t.exponent++,r++),i[--r]++}return t},e.digits=function(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length},e.DBL_EPSILON=Number.EPSILON||2.220446049250313e-16,e.nearlyEqual=function(n,t,i){if(null==i)return n===t;if(n===t)return!0;if(isNaN(n)||isNaN(t))return!1;if(isFinite(n)&&isFinite(t)){var r=Math.abs(n-t);return r<e.DBL_EPSILON||r<=Math.max(Math.abs(n),Math.abs(t))*i}return!1}}}]);