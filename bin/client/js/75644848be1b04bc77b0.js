(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{44:function(r,e,n){"use strict";var t=n(3).isInteger,o=n(2).size;e.name="pow",e.factory=function(r,e,i,u){var a=n(4),p=i(n(52)),b=i(n(10)),c=i(n(1)),s=i(n(90)),w=i(n(71)),f=u("pow",{"number, number":m,"Complex, Complex":function(r,e){return r.pow(e)},"BigNumber, BigNumber":function(n,t){return t.isInteger()||n>=0||e.predictable?n.pow(t):new r.Complex(n.toNumber(),0).pow(t.toNumber(),0)},"Fraction, Fraction":function(r,n){if(1!==n.d){if(e.predictable)throw new Error("Function pow does not support non-integer exponents for fractions.");return m(r.valueOf(),n.valueOf())}return r.pow(n)},"Array, number":l,"Array, BigNumber":function(r,e){return l(r,e.toNumber())},"Matrix, number":g,"Matrix, BigNumber":function(r,e){return g(r,e.toNumber())},"Unit, number | BigNumber":function(r,e){return r.pow(e)}});function m(n,o){if(e.predictable&&!t(o)&&n<0)try{var i=s(o),u=w(i);if((o===u||Math.abs((o-u)/o)<1e-14)&&i.d%2==1)return(i.n%2==0?1:-1)*Math.pow(-n,o)}catch(r){}return n*n<1&&o===1/0||n*n>1&&o===-1/0?0:e.predictable&&(n<-1&&o===1/0||n>-1&&n<0&&o===-1/0)?NaN:t(o)||n>=0||e.predictable?Math.pow(n,o):new r.Complex(n,0).pow(o,0)}function l(r,e){if(!t(e)||e<0)throw new TypeError("For A^b, b must be a positive integer (value is "+e+")");var n=o(r);if(2!==n.length)throw new Error("For A^b, A must be 2 dimensional (A has "+n.length+" dimensions)");if(n[0]!==n[1])throw new Error("For A^b, A must be square (size is "+n[0]+"x"+n[1]+")");for(var i=p(n[0]).valueOf(),u=r;e>=1;)1==(1&e)&&(i=b(u,i)),e>>=1,u=b(u,u);return i}function g(r,e){return c(l(r.valueOf(),e))}return f.toTex={2:"\\left(${args[0]}\\right)".concat(a.operators.pow,"{${args[1]}}")},f}}}]);