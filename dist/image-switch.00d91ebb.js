parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pBMn":[function(require,module,exports) {
module.exports="art-img1.85867471.jpg";
},{}],"fkba":[function(require,module,exports) {
module.exports="art-img2.24406656.jpg";
},{}],"xN51":[function(require,module,exports) {
module.exports="art-img3.4e9dd293.jpg";
},{}],"f5NT":[function(require,module,exports) {
module.exports="meme-img1.04e017b7.jpg";
},{}],"qPfB":[function(require,module,exports) {
module.exports="meme-img2.130c15b5.jpg";
},{}],"sDzH":[function(require,module,exports) {
module.exports="meme-img3.b012c5d6.jpg";
},{}],"jGI0":[function(require,module,exports) {
var e=require("../assets/art-img1.jpg"),t=require("../assets/art-img2.jpg"),s=require("../assets/art-img3.jpg"),a=require("../assets/meme-img1.jpg"),r=require("../assets/meme-img2.jpg"),i=require("../assets/meme-img3.jpg"),n=document.getElementById("art-switch-btn"),m=document.getElementById("img-1"),g=document.getElementById("img-2"),o=document.getElementById("img-3"),c=document.getElementsByClassName("art-section"),l=!1,u=anime({targets:".art-wave",r:200,opacity:[{value:.8,duration:250},{value:0,duration:1250}],"stroke-width":[5,18,0],duration:2e3,delay:anime.stagger(500),easing:"easeInOutSine",loop:!0});u.play(),n.addEventListener("click",function(){l=!l,n.classList.toggle("thumbnail-text-style"),l?(n.textContent="thumbnails",m.src=a,g.src=r,o.src=i,u.restart(),u.pause()):(n.textContent="art",m.src=e,g.src=t,o.src=s,u.play()),document.getElementById("art-section").scrollIntoView({behavior:"smooth",block:"start"})});
},{"../assets/art-img1.jpg":"pBMn","../assets/art-img2.jpg":"fkba","../assets/art-img3.jpg":"xN51","../assets/meme-img1.jpg":"f5NT","../assets/meme-img2.jpg":"qPfB","../assets/meme-img3.jpg":"sDzH"}]},{},["jGI0"], null)
//# sourceMappingURL=image-switch.00d91ebb.js.map