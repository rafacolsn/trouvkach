(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{162:function(e,t,o){"use strict";var r=o(5).extend,n=o(14);t.name="Parser",t.path="expression",t.factory=function(e,t,s,p,i){var a=s(o(46));function c(){if(!(this instanceof c))throw new SyntaxError("Constructor must be called with the new operator");this.scope={}}return c.prototype.type="Parser",c.prototype.isParser=!0,c.prototype.parse=function(e){throw new Error("Parser.parse is deprecated. Use math.parse instead.")},c.prototype.compile=function(e){throw new Error("Parser.compile is deprecated. Use math.compile instead.")},c.prototype.eval=function(e){return a(e).compile().eval(this.scope)},c.prototype.get=function(e){return e in this.scope?n.getSafeProperty(this.scope,e):void 0},c.prototype.getAll=function(){return r({},this.scope)},c.prototype.set=function(e,t){return n.setSafeProperty(this.scope,e,t)},c.prototype.remove=function(e){delete this.scope[e]},c.prototype.clear=function(){for(var e in this.scope)this.scope.hasOwnProperty(e)&&delete this.scope[e]},c},t.math=!0},596:function(e,t,o){"use strict";var r=o(5),n=o(9);t.name="Help",t.path="type",t.factory=function(e,t,s,p){var i=s(o(161))();function a(e){if(!(this instanceof a))throw new SyntaxError("Constructor must be called with the new operator");if(!e)throw new Error('Argument "doc" missing');this.doc=e}return a.prototype.type="Help",a.prototype.isHelp=!0,a.prototype.toString=function(){var t=this.doc||{},o="\n";if(t.name&&(o+="Name: "+t.name+"\n\n"),t.category&&(o+="Category: "+t.category+"\n\n"),t.description&&(o+="Description:\n    "+t.description+"\n\n"),t.syntax&&(o+="Syntax:\n    "+t.syntax.join("\n    ")+"\n\n"),t.examples){o+="Examples:\n";for(var r=0;r<t.examples.length;r++){var s=t.examples[r];o+="    "+s+"\n";var p=void 0;try{p=i.eval(s)}catch(e){p=e}void 0===p||e.isHelp(p)||(o+="        "+n.format(p,{precision:14})+"\n")}o+="\n"}return t.seealso&&t.seealso.length&&(o+="See also: "+t.seealso.join(", ")+"\n"),o},a.prototype.toJSON=function(){var e=r.clone(this.doc);return e.mathjs="Help",e},a.fromJSON=function(e){var t={};for(var o in e)"mathjs"!==o&&(t[o]=e[o]);return new a(t)},a.prototype.valueOf=a.prototype.toString,a}}}]);