parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tung":[function(require,module,exports) {
module.exports="ninomae-inanis-website/ina-wah-better.73d14368.mp3";
},{}],"Z0Qu":[function(require,module,exports) {
var e=require("../assets/ina-wah-better.mp3"),a=new Audio(e),t=document.querySelector(".wah-button picture"),n=window.innerWidth,o=anime({targets:".wah-wave-1",r:[20,70],opacity:[{value:.5,duration:800},{value:0,duration:600}],"stroke-width":[10,20,0],duration:3e3,easing:"easeInOutSine",loop:!0}),i=anime({autoplay:!1,targets:".wah-wave",r:[100,5],opacity:[{value:.7,duration:500},{value:.1,duration:1e3}],"stroke-width":[18,5],duration:1800,easing:"easeInOutSine",delay:anime.stagger(500),loop:!1}),u=anime({autoplay:!1,targets:".wah-text",opacity:[{value:1,duration:500},{value:0,duration:1e3}],scale:n>900?3:2,duration:3e3,easing:"easeInOutSine",loop:!1}),r=anime.timeline({autoplay:!1,complete:function(){document.querySelector(".wah-button").onclick=l,t.style.filter="brightness(0.05) drop-shadow(0px 0px 20px rgba(177, 91, 226, 0.733)",o.play()}});r.add({duration:3e3,easing:"easeInOutExpo",update:function(e){t.style.filter="brightness("+(e.progress/100+.1)+")"}}).add({begin:function(){a.play(),u.play()}});var l=function(){document.querySelector(".wah-button").onclick=null,o.restart(),o.pause(),i.play(),r.play()};document.querySelector(".wah-button").onclick=l;
},{"../assets/ina-wah-better.mp3":"Tung"}]},{},["Z0Qu"], null)
//# sourceMappingURL=ninomae-inanis-website/wah.49231ffd.js.map