(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{208:function(t,i,e){"use strict";i.name="FibonacciHeap",i.path="type",i.factory=function(t,i,r,n){var a=r(e(43)),o=r(e(36)),h=1/Math.log((1+Math.sqrt(5))/2);function s(){if(!(this instanceof s))throw new SyntaxError("Constructor must be called with the new operator");this._minimum=null,this._size=0}function l(t,i,e){i.left.right=i.right,i.right.left=i.left,e.degree--,e.child===i&&(e.child=i.right),0===e.degree&&(e.child=null),i.left=t,i.right=t.right,t.right=i,i.right.left=i,i.parent=null,i.mark=!1}s.prototype.type="FibonacciHeap",s.prototype.isFibonacciHeap=!0,s.prototype.insert=function(t,i){var e={key:t,value:i,degree:0};if(this._minimum){var r=this._minimum;e.left=r,e.right=r.right,r.right=e,e.right.left=e,a(t,r.key)&&(this._minimum=e)}else e.left=e,e.right=e,this._minimum=e;return this._size++,e},s.prototype.size=function(){return this._size},s.prototype.clear=function(){this._minimum=null,this._size=0},s.prototype.isEmpty=function(){return 0===this._size},s.prototype.extractMinimum=function(){var t=this._minimum;if(null===t)return t;for(var i=this._minimum,e=t.degree,r=t.child;e>0;){var n=r.right;r.left.right=r.right,r.right.left=r.left,r.left=i,r.right=i.right,i.right=r,r.right.left=r,r.parent=null,r=n,e--}return t.left.right=t.right,t.right.left=t.left,i=t===t.right?null:function(t,i){var e,r=Math.floor(Math.log(i)*h)+1,n=new Array(r),s=0,l=t;if(l)for(s++,l=l.right;l!==t;)s++,l=l.right;for(;s>0;){for(var m=l.degree,p=l.right;e=n[m];){if(o(l.key,e.key)){var f=e;e=l,l=f}u(e,l),n[m]=null,m++}n[m]=l,l=p,s--}t=null;for(var c=0;c<r;c++)(e=n[c])&&(t?(e.left.right=e.right,e.right.left=e.left,e.left=t,e.right=t.right,t.right=e,e.right.left=e,a(e.key,t.key)&&(t=e)):t=e);return t}(i=t.right,this._size),this._size--,this._minimum=i,t},s.prototype.remove=function(t){this._minimum=function(t,i,e){i.key=e;var r=i.parent;return r&&a(i.key,r.key)&&(l(t,i,r),function t(i,e){var r=e.parent;r&&(e.mark?(l(i,e,r),t(r)):e.mark=!0)}(t,r)),a(i.key,t.key)&&(t=i),t}(this._minimum,t,-1),this.extractMinimum()};var u=function(t,i){t.left.right=t.right,t.right.left=t.left,t.parent=i,i.child?(t.left=i.child,t.right=i.child.right,i.child.right=t,t.right.left=t):(i.child=t,t.right=t,t.left=t),i.degree++,t.mark=!1};return s}},209:function(t,i,e){"use strict";var r=e(33),n=r.string,a=r.object,o=Array.isArray,h=n.isString;i.name="ImmutableDenseMatrix",i.path="type",i.factory=function(t,i,n){var s=n(e(52)),l=n(e(43));function u(i,e){if(!(this instanceof u))throw new SyntaxError("Constructor must be called with the new operator");if(e&&!h(e))throw new Error("Invalid datatype: "+e);if(t.isMatrix(i)||o(i)){var n=new s(i,e);this._data=n._data,this._size=n._size,this._datatype=n._datatype,this._min=null,this._max=null}else if(i&&o(i.data)&&o(i.size))this._data=i.data,this._size=i.size,this._datatype=i.datatype,this._min=void 0!==i.min?i.min:null,this._max=void 0!==i.max?i.max:null;else{if(i)throw new TypeError("Unsupported type of data ("+r.types.type(i)+")");this._data=[],this._size=[0],this._datatype=e,this._min=null,this._max=null}}return u.prototype=new s,u.prototype.type="ImmutableDenseMatrix",u.prototype.isImmutableDenseMatrix=!0,u.prototype.subset=function(i){switch(arguments.length){case 1:var e=s.prototype.subset.call(this,i);return t.isMatrix(e)?new u({data:e._data,size:e._size,datatype:e._datatype}):e;case 2:case 3:throw new Error("Cannot invoke set subset on an Immutable Matrix instance");default:throw new SyntaxError("Wrong number of arguments")}},u.prototype.set=function(){throw new Error("Cannot invoke set on an Immutable Matrix instance")},u.prototype.resize=function(){throw new Error("Cannot invoke resize on an Immutable Matrix instance")},u.prototype.reshape=function(){throw new Error("Cannot invoke reshape on an Immutable Matrix instance")},u.prototype.clone=function(){return new u({data:a.clone(this._data),size:a.clone(this._size),datatype:this._datatype})},u.prototype.toJSON=function(){return{mathjs:"ImmutableDenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},u.fromJSON=function(t){return new u(t)},u.prototype.swapRows=function(){throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")},u.prototype.min=function(){if(null===this._min){var t=null;this.forEach(function(i){(null===t||l(i,t))&&(t=i)}),this._min=null!==t?t:void 0}return this._min},u.prototype.max=function(){if(null===this._max){var t=null;this.forEach(function(i){(null===t||l(t,i))&&(t=i)}),this._max=null!==t?t:void 0}return this._max},u}}}]);