(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{224:function(n,r,e){"use strict";r.name="rationalize",r.factory=function(n,r,o,t){var a=o(e(93)),i=o(e(131)),l=o(e(129)),s=o(e(133)),c=e(3),f=o(e(62)),u=o(e(63)),p=o(e(57)),v=t("rationalize",{string:function(n){return v(s(n),{},!1)},"string, boolean":function(n,r){return v(s(n),{},r)},"string, Object":function(n,r){return v(s(n),r,!1)},"string, Object, boolean":function(n,r,e){return v(s(n),r,e)},Node:function(n){return v(n,{},!1)},"Node, boolean":function(n,r){return v(n,{},r)},"Node, Object":function(n,r){return v(n,r,!1)},"Node, Object, boolean":function(n,r,e){var o=function(){var n=[i,{l:"n+n",r:"2*n"},{l:"n+-n",r:"0"},l,{l:"n*(n1^-1)",r:"n/n1"},{l:"n*n1^-n2",r:"n/n1^n2"},{l:"n1^-1",r:"1/n1"},{l:"n*(n1/n2)",r:"(n*n1)/n2"},{l:"1*n",r:"n"}],r=[{l:"(-n1)/(-n2)",r:"n1/n2"},{l:"(-n1)*(-n2)",r:"n1*n2"},{l:"n1--n2",r:"n1+n2"},{l:"n1-n2",r:"n1+(-n2)"},{l:"(n1+n2)*n3",r:"(n1*n3 + n2*n3)"},{l:"n1*(n2+n3)",r:"(n1*n2+n1*n3)"},{l:"c1*n + c2*n",r:"(c1+c2)*n"},{l:"c1*n + n",r:"(c1+1)*n"},{l:"c1*n - c2*n",r:"(c1-c2)*n"},{l:"c1*n - n",r:"(c1-1)*n"},{l:"v/c",r:"(1/c)*v"},{l:"v/-c",r:"-(1/c)*v"},{l:"-v*-c",r:"c*v"},{l:"-v*c",r:"-c*v"},{l:"v*-c",r:"-c*v"},{l:"v*c",r:"c*v"},{l:"-(-n1*n2)",r:"(n1*n2)"},{l:"-(n1*n2)",r:"(-n1*n2)"},{l:"-(-n1+n2)",r:"(n1-n2)"},{l:"-(n1+n2)",r:"(-n1-n2)"},{l:"(n1^n2)^n3",r:"(n1^(n2*n3))"},{l:"-(-n1/n2)",r:"(n1/n2)"},{l:"-(n1/n2)",r:"(-n1/n2)"}],e=[{l:"(n1/(n2/n3))",r:"((n1*n3)/n2)"},{l:"(n1/n2/n3)",r:"(n1/(n2*n3))"}],o={};return o.firstRules=n.concat(r,e),o.distrDivRules=[{l:"(n1/n2 + n3/n4)",r:"((n1*n4 + n3*n2)/(n2*n4))"},{l:"(n1/n2 + n3)",r:"((n1 + n3*n2)/n2)"},{l:"(n1 + n2/n3)",r:"((n1*n3 + n2)/n3)"}],o.sucDivRules=e,o.firstRulesAgain=n.concat(r),o.finalRules=[i,{l:"n*-n",r:"-n^2"},{l:"n*n",r:"n^2"},l,{l:"n*-n^n1",r:"-n^(n1+1)"},{l:"n*n^n1",r:"n^(n1+1)"},{l:"n^n1*-n^n2",r:"-n^(n1+n2)"},{l:"n^n1*n^n2",r:"n^(n1+n2)"},{l:"n^n1*-n",r:"-n^(n1+1)"},{l:"n^n1*n",r:"n^(n1+1)"},{l:"n^n1/-n",r:"-n^(n1-1)"},{l:"n^n1/n",r:"n^(n1-1)"},{l:"n/-n^n1",r:"-n^(1-n1)"},{l:"n/n^n1",r:"n^(1-n1)"},{l:"n^n1/-n^n2",r:"n^(n1-n2)"},{l:"n^n1/n^n2",r:"n^(n1-n2)"},{l:"n1+(-n2*n3)",r:"n1-n2*n3"},{l:"v*(-c)",r:"-c*v"},{l:"n1+-n2",r:"n1-n2"},{l:"v*c",r:"c*v"},{l:"(n1^n2)^n3",r:"(n1^(n2*n3))"}],o}(),t=function(n,r,e,o){var t=[],i=a(n,o,r,{exactFractions:!1}),l="+-*"+((e=!!e)?"/":"");!function n(r){var e=r.type;if("FunctionNode"===e)throw new Error("There is an unsolved function call");if("OperatorNode"===e)if("^"===r.op){if("unaryMinus"===r.args[1].fn&&(r=r.args[0]),"ConstantNode"!==r.args[1].type||!c.isInteger(parseFloat(r.args[1].value)))throw new Error("There is a non-integer exponent");n(r.args[0])}else{if(-1===l.indexOf(r.op))throw new Error("Operator "+r.op+" invalid in polynomial expression");for(var o=0;o<r.args.length;o++)n(r.args[o])}else if("SymbolNode"===e){var a=r.name,i=t.indexOf(a);-1===i&&t.push(a)}else if("ParenthesisNode"===e)n(r.content);else if("ConstantNode"!==e)throw new Error("type "+e+" is not allowed in polynomial expression")}(i);var s={};return s.expression=i,s.variables=t,s}(n,r,!0,o.firstRules),s=t.variables.length;if(n=t.expression,s>=1){var p,v;n=function n(r,e,o){var t=r.type,a=arguments.length>1;if("OperatorNode"===t&&r.isBinary()){var i,l=!1;if("^"===r.op&&("ParenthesisNode"!==r.args[0].type&&"OperatorNode"!==r.args[0].type||"ConstantNode"!==r.args[1].type||(i=parseFloat(r.args[1].value),l=i>=2&&c.isInteger(i))),l){if(i>2){var s=r.args[0],p=new u("^","pow",[r.args[0].cloneDeep(),new f(i-1)]);r=new u("*","multiply",[s,p])}else r=new u("*","multiply",[r.args[0],r.args[0].cloneDeep()]);a&&("content"===o?e.content=r:e.args[o]=r)}}if("ParenthesisNode"===t)n(r.content,r,"content");else if("ConstantNode"!==t&&"SymbolNode"!==t)for(var v=0;v<r.args.length;v++)n(r.args[v],r,v);if(!a)return r}(n);var w,g=!0,h=!1;for(n=a(n,o.firstRules,{},{exactFractions:!1});v=g?o.distrDivRules:o.sucDivRules,g=!g,(w=(n=a(n,v)).toString())!==p;)h=!0,p=w;h&&(n=a(n,o.firstRulesAgain,{},{exactFractions:!1})),n=a(n,o.finalRules,{},{exactFractions:!1})}var b=[],y={};return"OperatorNode"===n.type&&n.isBinary()&&"/"===n.op?(1===s&&(n.args[0]=d(n.args[0],b),n.args[1]=d(n.args[1])),e&&(y.numerator=n.args[0],y.denominator=n.args[1])):(1===s&&(n=d(n,b)),e&&(y.numerator=n,y.denominator=null)),e?(y.coefficients=b,y.variables=t.variables,y.expression=n,y):n}});function d(n,r){void 0===r&&(r=[]),r[0]=0;var e={cte:1,oper:"+",fire:""},o=0,t="";!function n(e,a,i){var l=e.type;if("FunctionNode"===l)throw new Error("There is an unsolved function call");if("OperatorNode"===l){if(-1==="+-*^".indexOf(e.op))throw new Error("Operator "+e.op+" invalid");if(null!==a){if(("unaryMinus"===e.fn||"pow"===e.fn)&&"add"!==a.fn&&"subtract"!==a.fn&&"multiply"!==a.fn)throw new Error("Invalid "+e.op+" placing");if(("subtract"===e.fn||"add"===e.fn||"multiply"===e.fn)&&"add"!==a.fn&&"subtract"!==a.fn)throw new Error("Invalid "+e.op+" placing");if(("subtract"===e.fn||"add"===e.fn||"unaryMinus"===e.fn)&&0!==i.noFil)throw new Error("Invalid "+e.op+" placing")}"^"!==e.op&&"*"!==e.op||(i.fire=e.op);for(var s=0;s<e.args.length;s++)"unaryMinus"===e.fn&&(i.oper="-"),"+"!==e.op&&"subtract"!==e.fn||(i.fire="",i.cte=1,i.oper=0===s?"+":e.op),i.noFil=s,n(e.args[s],e,i)}else if("SymbolNode"===l){if(e.name!==t&&""!==t)throw new Error("There is more than one variable");if(t=e.name,null===a)return void(r[1]=1);if("^"===a.op&&0!==i.noFil)throw new Error("In power the variable should be the first parameter");if("*"===a.op&&1!==i.noFil)throw new Error("In multiply the variable should be the second parameter");""!==i.fire&&"*"!==i.fire||(o<1&&(r[1]=0),r[1]+=i.cte*("+"===i.oper?1:-1),o=Math.max(1,o))}else{if("ConstantNode"!==l)throw new Error("Type "+l+" is not allowed");var f=parseFloat(e.value);if(null===a)return void(r[0]=f);if("^"===a.op){if(1!==i.noFil)throw new Error("Constant cannot be powered");if(!c.isInteger(f)||f<=0)throw new Error("Non-integer exponent is not allowed");for(var u=o+1;u<f;u++)r[u]=0;return f>o&&(r[f]=0),r[f]+=i.cte*("+"===i.oper?1:-1),void(o=Math.max(f,o))}i.cte=f,""===i.fire&&(r[0]+=i.cte*("+"===i.oper?1:-1))}}(n,null,e);for(var a,i=!0,l=o=r.length-1;l>=0;l--)if(0!==r[l]){var s=new f(i?r[l]:Math.abs(r[l])),v=r[l]<0?"-":"+";if(l>0){var d=new p(t);if(l>1){var w=new f(l);d=new u("^","pow",[d,w])}s=-1===r[l]&&i?new u("-","unaryMinus",[d]):1===Math.abs(r[l])?d:new u("*","multiply",[s,d])}a=i?s:"+"===v?new u("+","add",[a,s]):new u("-","subtract",[a,s]),i=!1}return i?new f(0):a}return v}}}]);