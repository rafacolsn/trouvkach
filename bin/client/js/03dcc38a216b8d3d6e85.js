(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(n,e,t){var o={"./argenta.png":634,"./axa.png":635,"./belfius.png":636,"./beobank.png":637,"./bkcp.png":638,"./bnp.png":639,"./bpost.png":640,"./cbc.png":641,"./crelan.png":642,"./deltalloyd.png":643,"./deutschebank.png":644,"./ing.png":645,"./kbc.png":646,"./keytrade.png":647,"./normal/argenta.png":648,"./normal/axa.png":649,"./normal/belfius.png":650,"./normal/beobank.png":651,"./normal/bkcp.png":652,"./normal/bnp.png":653,"./normal/bpost.png":654,"./normal/cbc.png":655,"./normal/crelan.png":656,"./normal/deltalloyd.png":657,"./normal/deutschebank.png":658,"./normal/ing.png":659,"./normal/kbc.png":660,"./normal/keytrade.png":661,"./terminal-spot.png":662};function a(n){var e=r(n);return t(e)}function r(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}a.keys=function(){return Object.keys(o)},a.resolve=r,n.exports=a,a.id=169},171:function(n,e,t){n.exports=t.p+"assets/gif/giphy.gif"},172:function(n,e,t){n.exports=t(668)},634:function(n,e,t){n.exports=t.p+"images/argenta.png"},635:function(n,e,t){n.exports=t.p+"images/axa.png"},636:function(n,e,t){n.exports=t.p+"images/belfius.png"},637:function(n,e,t){n.exports=t.p+"images/beobank.png"},638:function(n,e,t){n.exports=t.p+"images/bkcp.png"},639:function(n,e,t){n.exports=t.p+"images/bnp.png"},640:function(n,e,t){n.exports=t.p+"images/bpost.png"},641:function(n,e,t){n.exports=t.p+"images/cbc.png"},642:function(n,e,t){n.exports=t.p+"images/crelan.png"},643:function(n,e,t){n.exports=t.p+"images/deltalloyd.png"},644:function(n,e,t){n.exports=t.p+"images/deutschebank.png"},645:function(n,e,t){n.exports=t.p+"images/ing.png"},646:function(n,e,t){n.exports=t.p+"images/kbc.png"},647:function(n,e,t){n.exports=t.p+"images/keytrade.png"},648:function(n,e,t){n.exports=t.p+"images/normal/argenta.png"},649:function(n,e,t){n.exports=t.p+"images/normal/axa.png"},650:function(n,e,t){n.exports=t.p+"images/normal/belfius.png"},651:function(n,e,t){n.exports=t.p+"images/normal/beobank.png"},652:function(n,e,t){n.exports=t.p+"images/normal/bkcp.png"},653:function(n,e,t){n.exports=t.p+"images/normal/bnp.png"},654:function(n,e,t){n.exports=t.p+"images/normal/bpost.png"},655:function(n,e,t){n.exports=t.p+"images/normal/cbc.png"},656:function(n,e,t){n.exports=t.p+"images/normal/crelan.png"},657:function(n,e,t){n.exports=t.p+"images/normal/deltalloyd.png"},658:function(n,e,t){n.exports=t.p+"images/normal/deutschebank.png"},659:function(n,e,t){n.exports=t.p+"images/normal/ing.png"},660:function(n,e,t){n.exports=t.p+"images/normal/kbc.png"},661:function(n,e,t){n.exports=t.p+"images/normal/keytrade.png"},662:function(n,e,t){n.exports=t.p+"images/terminal-spot.png"},663:function(n,e,t){var o=t(664);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(666)(o,a);o.locals&&(n.exports=o.locals)},664:function(n,e,t){(n.exports=t(665)(!1)).push([n.i,".container {\n  text-align: center; }\n\n#map {\n  height: 100%; }\n\n.map {\n  padding-top: 2rem; }\n\nhtml, body {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: #1A2632;\n  overflow: hidden; }\n  html h1, body h1 {\n    color: white; }\n\nul, li, p {\n  margin: 0;\n  padding: 0; }\n\nh4 {\n  color: black;\n  font-size: 1rem;\n  font-weight: 400; }\n\n.banklist {\n  position: relative;\n  height: 30rem;\n  overflow-y: scroll;\n  width: 21%;\n  left: 66rem;\n  background: #ededed;\n  padding: .3rem;\n  border-radius: 5px; }\n\n.infos {\n  display: flex; }\n\n.li-banklist {\n  background: #dbd4d4;\n  padding: .5rem;\n  text-align: left;\n  margin: 0 0 2rem 0;\n  border-radius: 5px; }\n  .li-banklist img {\n    margin-right: .5rem; }\n\n.buttons {\n  text-align: right; }\n",""])},668:function(n,e,t){"use strict";t.r(e);var o=t(3),a=t.n(o),r=t(68),i=t.n(r),l=t(32),c=function(n){return n*(Math.PI/180)},s=function(n,e,t,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"k",r=c(n),i=c(e),s=c(t),p=(c(o)-i)/2,u=(s-r)/2,g=Object(l.sin)(u)*Object(l.sin)(u)+Object(l.cos)(r)*Object(l.cos)(s)*(Object(l.sin)(p)*Object(l.sin)(p)),m=2*Object(l.atan2)(Object(l.sqrt)(g),Object(l.sqrt)(1-g))*6378137;return"k"===a?m/1e3:m},p=t(170),u=t.n(p),g=t(51),m=t(171),f=t.n(m);function d(n){var e,t,o=n.center;if(console.log(n.terminals),n.loaded){try{t=n.terminals.map(function(n){if(n.bank)return{distance:s(n.latitude,n.longitude,o.lat,o.lng,"k").toFixed(3),id:n._id,name:n.bank.name,address:n.address,icon:n.bank.icon}})}catch(n){console.log(n)}t.sort(function(n,e){return n.distance-e.distance})}return n.loaded&&(e=t.map(function(n){try{return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{key:n.id,className:"li-banklist"},a.a.createElement("div",{className:"infos"},a.a.createElement("div",null,a.a.createElement("img",{src:"../images/".concat(n.icon),alt:n.name})),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("strong",null,n.name)),n.address?n.address:"N/A",a.a.createElement("p",null,"à ".concat(n.distance," km")))),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",null,"No cash"),a.a.createElement("button",null,"Delete"))))}catch(n){console.log(n)}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Nearest Banks"),a.a.createElement("ul",null," ",e))}function b(n){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function h(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function y(n,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function k(n){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function v(n,e){return(v=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}t(169),t(169);var x={lat:"",lng:""},w=!1;navigator.geolocation.watchPosition(function(n){x={lat:n.coords.latitude,lng:n.coords.longitude},w=!0},function(n){console.warn("ERREUR (".concat(n.code,"): ").concat(n.message)),w=!1},{enableHighAccuracy:!0,timeout:5e3,maximumAge:5e3});var E=function(n){function e(){var n,t;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=y(this,(n=k(e)).call.apply(n,[this].concat(a)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},terminals:[],loaded:!1,clickedTerm:{lat:0,lng:0},distance:0},t.onMarkerClick=function(n,e){t.setState({selectedPlace:n,activeMarker:e,showingInfoWindow:!0,clickedTerm:{lat:n.position.lat,lng:n.position.lng}})},t.onClose=function(){t.state.showingInfoWindow&&t.setState({showingInfoWindow:!1,activeMarker:null})},t.deleteATM=function(){console.log("deleted !")},t}var t,r,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&v(n,e)}(e,o["Component"]),t=e,(r=[{key:"componentDidMount",value:function(){var n=this,e={lat1:x.lat+.02,lng1:x.lng+.04,lat2:x.lat-.02,lng2:x.lng-.04};u.a.get("/api/pos/".concat(e.lat1,"/").concat(e.lat2,"/").concat(e.lng1,"/").concat(e.lng2)).then(function(e){n.setState({terminals:e.data.terminals,loaded:!0})}).catch(function(n){console.log(n)})}},{key:"render",value:function(){var n=this,e=this.state.terminals.map(function(e){var t=s(e.latitude,e.longitude,x.lat,x.lng,"k").toFixed(2);try{return a.a.createElement(g.Marker,{key:e._id,onClick:n.onMarkerClick,name:"".concat(e.bank.name," - ").concat(e.address?"".concat(e.address," se trouve à ").concat(t," km"):"N/A se trouve à ".concat(t," km")),title:e.bank.name,icon:"../images/".concat(e.bank.icon),position:{lat:e.latitude,lng:e.longitude}})}catch(n){console.log(n)}});return a.a.createElement(a.a.Fragment,null,!w&&a.a.createElement("div",null,a.a.createElement("h3",null,"Looking for localisation...")),!this.state.loaded&&a.a.createElement("div",null,a.a.createElement("h3",null,"Don't worry ! It's loading..."),a.a.createElement("img",{src:f.a,alt:"loading"})),this.state.loaded&&w&&a.a.createElement(g.Map,{google:this.props.google,zoom:15,style:{width:"76%",height:"30rem",margin:"0 0 0 1rem"},initialCenter:x},0!==this.state.clickedTerm.lat&&this.state.showingInfoWindow?a.a.createElement(g.Polyline,{path:[{lat:x.lat,lng:x.lng},{lat:this.state.clickedTerm.lat,lng:this.state.clickedTerm.lng}],strokeColor:"#EB6123",strokeOpacity:.8,strokeWeight:3}):"",a.a.createElement(g.Marker,{onClick:this.onMarkerClick,name:"You're here"}),e,a.a.createElement(g.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},a.a.createElement("div",null,a.a.createElement("h4",null,this.state.selectedPlace.name)))),a.a.createElement("div",{className:"banklist"},a.a.createElement(d,{terminals:this.state.terminals,loaded:this.state.loaded,center:x})))}}])&&h(t.prototype,r),i&&h(t,i),e}(),O=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDalvpxv-7crRgGa3MNhZiWIClcM1urB2o"})(E);t(663);function j(n){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function C(n,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function M(n){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function S(n,e){return(S=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var P=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,M(e).apply(this,arguments))}var t,a,r;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&S(n,e)}(e,o["Component"]),t=e,(a=[{key:"render",value:function(){return o.createElement("div",{className:"container"},o.createElement("h1",null,"Check ATM "),o.createElement("hr",null),o.createElement("div",{className:"map"},o.createElement(O,null)))}}])&&_(t.prototype,a),r&&_(t,r),e}();i.a.render(o.createElement(P,null),document.querySelector("#app"))}},[[172,157,128,103,104,23,127,134,32,45,135,71,33,86,126,83,35,36,85,67,112,51,123,19,41,34,24,55,21,38,102,27,60,111,76,121,141,31,122,54,101,29,107,92,118,46,26,140,63,53,66,47,73,77,110,100,80,72,57,69,79,88,39,68,114,40,50,61,70,116,90,109,25,113,62,22,106,131,119,30,137,94,87,142,49,44,78,132,99,97,133,37,82,138,93,124,136,115,120,81,52,89,65,130,20,74,64,117,96,48,75,95,59,84,42,108,58,43,56,28,125,139,105,91,98,129,4,1,3,5,2,15,13,11,12,14,16,148,147,149,146,145,150,151,153,6,7,8,9,10,17,18,143,144,152,154,155,156]]]);