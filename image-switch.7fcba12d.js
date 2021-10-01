parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pBMn":[function(require,module,exports) {
module.exports="art-img1.ad4b5ad5.jpg";
},{}],"eHuF":[function(require,module,exports) {
module.exports="art-img1.be4db729.avif";
},{}],"fkba":[function(require,module,exports) {
module.exports="art-img2.85eebc42.jpg";
},{}],"cZ4p":[function(require,module,exports) {
module.exports="art-img2.47f2a341.avif";
},{}],"xN51":[function(require,module,exports) {
module.exports="art-img3.f49e19dc.jpg";
},{}],"ap2z":[function(require,module,exports) {
module.exports="art-img3.d6568c3c.avif";
},{}],"f5NT":[function(require,module,exports) {
module.exports="meme-img1.6b3bd8b0.jpg";
},{}],"nvSD":[function(require,module,exports) {
module.exports="meme-img1.1c89a2c7.avif";
},{}],"qPfB":[function(require,module,exports) {
module.exports="meme-img2.6a2f4002.jpg";
},{}],"o0w8":[function(require,module,exports) {
module.exports="meme-img2.068b7fc8.avif";
},{}],"sDzH":[function(require,module,exports) {
module.exports="meme-img3.e751b90e.jpg";
},{}],"zPEh":[function(require,module,exports) {
module.exports="meme-img3.2d469382.avif";
},{}],"jGI0":[function(require,module,exports) {
var e=require("../assets/art-img1.jpg"),t=require("../assets/art-img1.avif"),s=require("../assets/art-img2.jpg"),r=require("../assets/art-img2.avif"),m=require("../assets/art-img3.jpg"),i=require("../assets/art-img3.avif"),a=require("../assets/meme-img1.jpg"),c=require("../assets/meme-img1.avif"),g=require("../assets/meme-img2.jpg"),n=require("../assets/meme-img2.avif"),u=require("../assets/meme-img3.jpg"),d=require("../assets/meme-img3.avif"),o=document.getElementById("art-switch-btn"),l=document.getElementById("img1src1"),y=document.getElementById("img1src2"),I=document.getElementById("img1src3"),q=document.getElementById("img2src1"),v=document.getElementById("img2src2"),E=document.getElementById("img2src3"),p=document.getElementById("img3src1"),B=document.getElementById("img3src2"),f=document.getElementById("img3src3"),h=!1,j=anime({targets:".art-wave",r:200,opacity:[{value:.8,duration:250},{value:0,duration:1250}],"stroke-width":[5,18,0],duration:2e3,delay:anime.stagger(500),easing:"easeInOutSine",loop:!0});j.play(),o.addEventListener("click",function(){h=!h,o.classList.toggle("thumbnail-text-style"),h?(o.textContent="thumbnails",l.srcset=c,y.srcset=a,I.src=a,q.srcset=n,v.srcset=g,E.src=g,p.srcset=d,B.srcset=u,f.src=u,j.restart(),j.pause()):(o.textContent="art",l.srcset=t,y.srcset=e,I.src=e,q.srcset=r,v.srcset=s,E.src=s,p.srcset=i,B.srcset=m,f.src=m,j.play()),document.getElementById("art-section").scrollIntoView({behavior:"smooth",block:"start"})});
},{"../assets/art-img1.jpg":"pBMn","../assets/art-img1.avif":"eHuF","../assets/art-img2.jpg":"fkba","../assets/art-img2.avif":"cZ4p","../assets/art-img3.jpg":"xN51","../assets/art-img3.avif":"ap2z","../assets/meme-img1.jpg":"f5NT","../assets/meme-img1.avif":"nvSD","../assets/meme-img2.jpg":"qPfB","../assets/meme-img2.avif":"o0w8","../assets/meme-img3.jpg":"sDzH","../assets/meme-img3.avif":"zPEh"}]},{},["jGI0"], null)
//# sourceMappingURL=image-switch.7fcba12d.js.map