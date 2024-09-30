"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new O(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",p="suspendedYield",y="executing",g="completed",d={};function m(){}function v(){}function _(){}var b={};s(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=_.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,r,n){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=l(e,r,n);if("normal"===s.type){if(o=n.done?g:p,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function I(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return v.prototype=_,o(k,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:v,configurable:!0}),v.displayName=s(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),s(k,u,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){asyncGeneratorStep(i,n,o,a,c,"next",t)}function c(t){asyncGeneratorStep(i,n,o,a,c,"throw",t)}a(void 0)}))}}var site_icon_path="site_logo.png",site_logo_path="site_logo.png",site_title="eta_car1nae",code_for_sketch_icon_text="</>",code_for_sketch_text="Code for this Sketch",instagram_icon_src="icon-instagram.svg",instagram_text="Instagram",github_icon_dark_src="icon-github.svg",github_icon_light_src="icon-github-white.svg",github_text="GitHub",copyright_symbol="©",copyright_text="<urit_gupta/>";function initSiteContents(){document.getElementById("site-icon").setAttribute("href",site_icon_path),document.getElementById("site-logo").setAttribute("src",site_logo_path),document.getElementById("site-title").setAttribute("data",site_title),document.getElementById("code-for-sketch-icon").setAttribute("data",code_for_sketch_icon_text),document.getElementById("code-for-sketch-text").setAttribute("data",code_for_sketch_text),document.getElementById("instagram-icon").setAttribute("src",instagram_icon_src),document.getElementById("instagram-text").setAttribute("data",instagram_text),document.getElementById("github-icon").setAttribute("src",github_icon_light_src),document.getElementById("github-text").setAttribute("data",github_text),document.getElementById("copyright-icon").setAttribute("text",copyright_symbol),document.getElementById("copyright-text").setAttribute("data",copyright_text)}initSiteContents(),readCsv();var sketchUrls=[],currentSketchIndex=0,csvData="";function readCsv(){return _readCsv.apply(this,arguments)}function _readCsv(){return(_readCsv=_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,r,n,o,i,a;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("sketchData.csv");case 2:return e=t.sent,t.next=5,e.text();case 5:csvData=t.sent,r=csvData.split("\n"),n=r[0].split(","),o={},i=1;case 10:if(!(i<r.length)){t.next=19;break}if(!((a=r[i].split(","))[0].length<4)){t.next=14;break}return t.abrupt("break",19);case 14:a.length===n.length&&(o[a[0].split("/").pop()]={desc:a[1]||"Description not available",title:a[2]||"",subtitle:a[3]||""}),a.length>0&&sketchUrls.push(a[0].trim());case 16:i++,t.next=10;break;case 19:currentSketchIndex=Math.floor(Math.random()*sketchUrls.length),sketchUrls.length>0&&updateSketchFrame(),console.log(sketchUrls.length);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function prevSketch(){currentSketchIndex=(currentSketchIndex-1+sketchUrls.length)%sketchUrls.length,updateSketchFrame()}function nextSketch(){currentSketchIndex=(currentSketchIndex+1)%sketchUrls.length,updateSketchFrame()}function updateSketchFrame(){document.getElementById("sketch-iframe").setAttribute("src",sketchUrls[currentSketchIndex])}document.onkeydown=function(t){"ArrowRight"==t.key||"ArrowUp"==t.key?nextSketch():"ArrowLeft"!=t.key&&"ArrowDown"!=t.key||prevSketch()};//# sourceMappingURL=script.js.map
