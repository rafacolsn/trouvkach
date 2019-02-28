(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{129:function(e,n,r){"use strict";n.math=!0,n.name="simplifyConstant",n.path="algebra.simplify",n.factory=function(e,n,t,i,o){var a=t(r(130)),s=a.isCommutative,u=a.isAssociative,f=a.allChildren,c=a.createMakeNodeFunction,d=o.expression.node.ConstantNode,p=o.expression.node.OperatorNode,l=o.expression.node.FunctionNode;function N(n,r,t){try{return w(o[n].apply(null,r),t)}catch(i){return r=r.map(function(n){return e.isFraction(n)?n.valueOf():n}),w(o[n].apply(null,r),t)}}var v=i({Fraction:function(e){var n,r=e.s*e.n;return n=r<0?new p("-","unaryMinus",[new d(-r)]):new d(r),1===e.d?n:new p("/","divide",[n,new d(e.d)])},number:function(e){return e<0?y(new d(-e)):new d(e)},BigNumber:function(e){return e<0?y(new d(-e)):new d(e)},Complex:function(e){throw new Error("Cannot convert Complex number to Node")}});function m(e,n){if(n&&!1!==n.exactFractions&&isFinite(e)){var r=o.fraction(e);if(r.valueOf()===e)return r}return e}var w=i({"string, Object":function(e,r){return"BigNumber"===n.number?o.bignumber(e):"Fraction"===n.number?o.fraction(e):m(parseFloat(e),r)},"Fraction, Object":function(e,n){return e},"BigNumber, Object":function(e,n){return e},"number, Object":function(e,n){return m(e,n)},"Complex, Object":function(e,n){return 0!==e.im?e:m(e.re,n)}});function y(e){return new p("-","unaryMinus",[e])}function g(n,r,t,i){return r.reduce(function(r,o){if(e.isNode(r)||e.isNode(o))e.isNode(r)?e.isNode(o)||(o=v(o)):r=v(r);else{try{return N(n,[r,o],i)}catch(e){}r=v(r),o=v(o)}return t([r,o])})}return function(n,r){var t=function n(r,t){switch(r.type){case"SymbolNode":return r;case"ConstantNode":return"number"!=typeof r.value&&isNaN(r.value)?r:w(r.value,t);case"FunctionNode":if(o[r.name]&&o[r.name].rawArgs)return r;if(-1===["add","multiply"].indexOf(r.name)){var i=r.args.map(function(e){return n(e,t)});if(!i.some(e.isNode))try{return N(r.name,i,t)}catch(e){}return i=i.map(function(n){return e.isNode(n)?n:v(n)}),new l(r.name,i)}case"OperatorNode":var a,d,p=r.fn.toString(),m=c(r);if(r.isUnary())a=[n(r.args[0],t)],d=e.isNode(a[0])?m(a):N(p,a,t);else if(u(r))if(a=(a=f(r)).map(function(e){return n(e,t)}),s(p)){for(var y=[],b=[],C=0;C<a.length;C++)e.isNode(a[C])?b.push(a[C]):y.push(a[C]);y.length>1?(d=g(p,y,m,t),b.unshift(d),d=g(p,b,m,t)):d=g(p,a,m,t)}else d=g(p,a,m,t);else a=r.args.map(function(e){return n(e,t)}),d=g(p,a,m,t);return d;case"ParenthesisNode":return n(r.content,t);case"AccessorNode":case"ArrayNode":case"AssignmentNode":case"BlockNode":case"FunctionAssignmentNode":case"IndexNode":case"ObjectNode":case"RangeNode":case"UpdateNode":case"ConditionalNode":default:throw new Error("Unimplemented node type in simplifyConstant: ".concat(r.type))}}(n,r);return e.isNode(t)?t:v(t)}}},131:function(e,n,r){"use strict";n.math=!0,n.name="simplifyCore",n.path="algebra.simplify",n.factory=function(e,n,t,i,o){var a=t(r(54)),s=t(r(64)),u=t(r(15)),f=t(r(16)),c=t(r(10)),d=t(r(47)),p=t(r(44)),l=o.expression.node.ConstantNode,N=o.expression.node.OperatorNode,v=o.expression.node.FunctionNode,m=o.expression.node.ParenthesisNode,w=new l(0),y=new l(1);return function n(r){if(e.isOperatorNode(r)&&r.isUnary()){var t=n(r.args[0]);if("+"===r.op)return t;if("-"===r.op){if(e.isOperatorNode(t)){if(t.isUnary()&&"-"===t.op)return t.args[0];if(t.isBinary()&&"subtract"===t.fn)return new N("-","subtract",[t.args[1],t.args[0]])}return new N(r.op,r.fn,[t])}}else if(e.isOperatorNode(r)&&r.isBinary()){var i=n(r.args[0]),o=n(r.args[1]);if("+"===r.op){if(e.isConstantNode(i)){if(s(i.value))return o;if(e.isConstantNode(o))return new l(u(i.value,o.value))}return e.isConstantNode(o)&&s(o.value)?i:e.isOperatorNode(o)&&o.isUnary()&&"-"===o.op?new N("-","subtract",[i,o.args[0]]):new N(r.op,r.fn,o?[i,o]:[i])}if("-"===r.op){if(e.isConstantNode(i)&&o){if(e.isConstantNode(o))return new l(f(i.value,o.value));if(s(i.value))return new N("-","unaryMinus",[o])}if("subtract"===r.fn)return e.isConstantNode(o)&&s(o.value)?i:e.isOperatorNode(o)&&o.isUnary()&&"-"===o.op?n(new N("+","add",[i,o.args[0]])):new N(r.op,r.fn,[i,o])}else{if("*"===r.op){if(e.isConstantNode(i)){if(s(i.value))return w;if(a(i.value,1))return o;if(e.isConstantNode(o))return new l(c(i.value,o.value))}if(e.isConstantNode(o)){if(s(o.value))return w;if(a(o.value,1))return i;if(e.isOperatorNode(i)&&i.isBinary()&&i.op===r.op){var g=i.args[0];if(e.isConstantNode(g)){var b=new l(c(g.value,o.value));return new N(r.op,r.fn,[b,i.args[1]],r.implicit)}}return new N(r.op,r.fn,[o,i],r.implicit)}return new N(r.op,r.fn,[i,o],r.implicit)}if("/"===r.op){if(e.isConstantNode(i)){if(s(i.value))return w;if(e.isConstantNode(o)&&(a(o.value,1)||a(o.value,2)||a(o.value,4)))return new l(d(i.value,o.value))}return new N(r.op,r.fn,[i,o])}if("^"===r.op){if(e.isConstantNode(o)){if(s(o.value))return y;if(a(o.value,1))return i;if(e.isConstantNode(i))return new l(p(i.value,o.value));if(e.isOperatorNode(i)&&i.isBinary()&&"^"===i.op){var C=i.args[1];if(e.isConstantNode(C))return new N(r.op,r.fn,[i.args[0],new l(c(C.value,o.value))])}}return new N(r.op,r.fn,[i,o])}}}else{if(e.isParenthesisNode(r)){var h=n(r.content);return e.isParenthesisNode(h)||e.isSymbolNode(h)||e.isConstantNode(h)?h:new m(h)}if(e.isFunctionNode(r)){var O=r.args.map(n).map(function(n){return e.isParenthesisNode(n)?n.content:n});return new v(n(r.fn),O)}}return r}}},223:function(e,n,r){"use strict";n.math=!0,n.name="resolve",n.path="algebra.simplify",n.factory=function(e,n,r,t,i){var o=i.expression.node.Node,a=i.expression.node.OperatorNode,s=i.expression.node.FunctionNode,u=i.expression.node.ParenthesisNode;return function n(r,t){if(!t)return r;if(e.isSymbolNode(r)){var f=t[r.name];if(f instanceof o)return n(f,t);if("number"==typeof f)return i.parse(String(f))}else{if(e.isOperatorNode(r)){var c=r.args.map(function(e){return n(e,t)});return new a(r.op,r.fn,c,r.implicit)}if(e.isParenthesisNode(r))return new u(n(r.content,t));if(e.isFunctionNode(r)){var d=r.args.map(function(e){return n(e,t)});return new s(r.name,d)}}return r}}}}]);