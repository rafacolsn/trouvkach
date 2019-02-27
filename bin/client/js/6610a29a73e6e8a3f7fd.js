(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{75:function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var i=e(4),s=e(9).escape,a=e(5).hasOwnProperty,f=e(2).map,p=e(14).validateSafeMethod,h=e(14).getSafeProperty;n.name="FunctionNode",n.path="expression.node",n.math=!0,n.factory=function(t,n,c,u,y){var d=c(e(17)),l=c(e(56));function g(n,e){if(!(this instanceof g))throw new SyntaxError("Constructor must be called with the new operator");if("string"==typeof n&&(n=new l(n)),!t.isNode(n))throw new TypeError('Node expected as parameter "fn"');if(!Array.isArray(e)||!e.every(t.isNode))throw new TypeError('Array containing Nodes expected for parameter "args"');this.fn=n,this.args=e||[],Object.defineProperty(this,"name",{get:function(){return this.fn.name||""}.bind(this),set:function(){throw new Error("Cannot assign a new name, name is read-only")}});var r=function(){throw new Error("Property `FunctionNode.object` is deprecated, use `FunctionNode.fn` instead")};Object.defineProperty(this,"object",{get:r,set:r})}g.prototype=new d,g.prototype.type="FunctionNode",g.prototype.isFunctionNode=!0,g.prototype._compile=function(n,e){if(!(this instanceof g))throw new TypeError("No valid FunctionNode");var r=f(this.args,function(t){return t._compile(n,e)});if(t.isSymbolNode(this.fn)){var i=this.fn.name,s=i in n?h(n,i):void 0;if("function"==typeof s&&!0===s.rawArgs){var a=this.args;return function(t,e,r){return(i in t?h(t,i):s)(a,n,o({},t,e))}}if(1===r.length){var c=r[0];return function(t,n,e){return(i in t?h(t,i):s)(c(t,n,e))}}if(2===r.length){var u=r[0],y=r[1];return function(t,n,e){return(i in t?h(t,i):s)(u(t,n,e),y(t,n,e))}}return function(t,n,e){return(i in t?h(t,i):s).apply(null,f(r,function(r){return r(t,n,e)}))}}if(t.isAccessorNode(this.fn)&&t.isIndexNode(this.fn.index)&&this.fn.index.isObjectProperty()){var d=this.fn.object._compile(n,e),l=this.fn.index.getObjectProperty(),m=this.args;return function(t,e,i){var s=d(t,e,i);return p(s,l),s[l]&&s[l].rawArgs?s[l](m,n,o({},t,e)):s[l].apply(s,f(r,function(n){return n(t,e,i)}))}}var w=this.fn._compile(n,e),b=this.args;return function(t,e,i){var s=w(t,e,i);return s&&s.rawArgs?s(b,n,o({},t,e)):s.apply(s,f(r,function(n){return n(t,e,i)}))}},g.prototype.forEach=function(t){t(this.fn,"fn",this);for(var n=0;n<this.args.length;n++)t(this.args[n],"args["+n+"]",this)},g.prototype.map=function(t){for(var n=this._ifNode(t(this.fn,"fn",this)),e=[],r=0;r<this.args.length;r++)e[r]=this._ifNode(t(this.args[r],"args["+r+"]",this));return new g(n,e)},g.prototype.clone=function(){return new g(this.fn,this.args.slice(0))};var m=g.prototype.toString;function w(n,e,o){for(var i,s="",a=new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)","ig"),f=0;null!==(i=a.exec(n));)if(s+=n.substring(f,i.index),f=i.index,"$$"===i[0])s+="$",f++;else{f+=i[0].length;var p=e[i[1]];if(!p)throw new ReferenceError("Template: Property "+i[1]+" does not exist.");if(void 0===i[2])switch(r(p)){case"string":s+=p;break;case"object":if(t.isNode(p))s+=p.toTex(o);else{if(!Array.isArray(p))throw new TypeError("Template: "+i[1]+" has to be a Node, String or array of Nodes");s+=p.map(function(n,e){if(t.isNode(n))return n.toTex(o);throw new TypeError("Template: "+i[1]+"["+e+"] is not a Node.")}).join(",")}break;default:throw new TypeError("Template: "+i[1]+" has to be a Node, String or array of Nodes")}else{if(!t.isNode(p[i[2]]&&p[i[2]]))throw new TypeError("Template: "+i[1]+"["+i[2]+"] is not a Node.");s+=p[i[2]].toTex(o)}}return s+=n.slice(f)}g.prototype.toString=function(t){var n,e=this.fn.toString(t);return t&&"object"===r(t.handler)&&a(t.handler,e)&&(n=t.handler[e](this,t)),void 0!==n?n:m.call(this,t)},g.prototype._toString=function(n){var e=this.args.map(function(t){return t.toString(n)});return(t.isFunctionAssignmentNode(this.fn)?"("+this.fn.toString(n)+")":this.fn.toString(n))+"("+e.join(", ")+")"},g.prototype.toJSON=function(){return{mathjs:"FunctionNode",fn:this.fn,args:this.args}},g.fromJSON=function(t){return new g(t.fn,t.args)},g.prototype.toHTML=function(t){var n=this.args.map(function(n){return n.toHTML(t)});return'<span class="math-function">'+s(this.fn)+'</span><span class="math-paranthesis math-round-parenthesis">(</span>'+n.join('<span class="math-separator">,</span>')+'<span class="math-paranthesis math-round-parenthesis">)</span>'};var b=g.prototype.toTex;return g.prototype.toTex=function(t){var n;return t&&"object"===r(t.handler)&&a(t.handler,this.name)&&(n=t.handler[this.name](this,t)),void 0!==n?n:b.call(this,t)},g.prototype._toTex=function(t){var n,e,o=this.args.map(function(n){return n.toTex(t)});switch(!y[this.name]||"function"!=typeof y[this.name].toTex&&"object"!==r(y[this.name].toTex)&&"string"!=typeof y[this.name].toTex||(n=y[this.name].toTex),r(n)){case"function":e=n(this,t);break;case"string":e=w(n,this,t);break;case"object":switch(r(n[o.length])){case"function":e=n[o.length](this,t);break;case"string":e=w(n[o.length],this,t)}}return void 0!==e?e:w(i.defaultTemplate,this,t)},g.prototype.getIdentifier=function(){return this.type+":"+this.name},g}}}]);