parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"l9pR":[function(require,module,exports) {
var e=anime.timeline({autoplay:!0,loop:!1,complete:function(){a.play()}});e.add({targets:".hero__name-bg",scaleX:[.1,1],opacity:[.1,1],easing:"easeOutSine",duration:800}).add({targets:".hero__bg",scaleX:[.1,1],opacity:[.1,1],easing:"easeOutSine",duration:800},"-=800").add({targets:"h1, .hero-container p, .hero-container h2, .hero-btn",opacity:[0,1],easing:"easeOutSine",duration:800},"-=400").add({targets:".hero-img",opacity:[0,1],easing:"easeOutSine",duration:800,direction:"normal"},"-=400");var a=anime({autoplay:!1,targets:".hero-img",translateY:[10,-10],easing:"easeInOutSine",duration:2e3,loop:!0,direction:"alternate"});
},{}]},{},["l9pR"], null)
//# sourceMappingURL=hero.e670c370.js.map