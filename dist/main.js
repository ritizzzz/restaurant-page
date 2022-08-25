(()=>{"use strict";var n={650:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),a=t.n(o),i=t(645),r=t.n(i),c=t(667),d=t.n(c),s=new URL(t(339),t.b),l=new URL(t(91),t.b),p=r()(a()),u=d()(s),m=d()(l);p.push([n.id,".bgContact{\n    width: 100%;\n    height: 100%;\n    background-color: #262626;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem 2rem;\n    box-sizing: border-box;\n}\n\n.contactContainer{\n    width: max(300px, 60%);\n    height: max-content;\n    background-color: lightgreen;\n    border-radius: 10px;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\n\n.contactHeader{\n    font-style: italic;\n    font-family: cursive;\n}\n\n.locationDiv{\n    padding: 1rem;\n    width: max(40%, 200px);\n    display: grid;\n    grid-template-columns: max-content 1fr 1fr;\n    grid-template-rows: max-content 1fr;\n    gap: 10px;\n}\n\n.locationAddress{\n    display: flex;\n    justify-content: end;\n}\n.locationImage, .managerImage{\n    width: 120px;\n    height: 120px;  \n    background-image: url("+u+"); \n    background-size: cover;\n    grid-area: 1/1/3/2;\n}\n\n.managerDiv{\n    width: max(40%, 200px);\n    padding: 1rem;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: max-content 1fr;\n    gap: 10px;\n}\n\n.managerImage{\n    background-image: url("+m+");\n}\n\n.phoneIcon, .emailIcon{\n    width: 20px;\n    height: 20px;\n}\n\n.phoneDiv, .emailDiv{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.email{\n    display: inline-block;\n}\n.locationText{\n    grid-area: 2/2/3/4;\n}",""]);const g=p},930:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),i=t(645),r=t.n(i),c=t(667),d=t.n(c),s=new URL(t(466),t.b),l=r()(a()),p=d()(s);l.push([n.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody{\n    display: grid;\n    grid-template-rows: max-content auto max-content;\n    width: 100%;\n    min-height: 100vh;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nheader{\n    background-color: lightgreen;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 3rem;\n}\n\nh1{\n    font-weight: bold;\n    font-size: 2rem;\n}\n.links{\n    display: flex;\n    height: 10px;\n    gap: 10px;\n    align-items: end;\n}\n\nfooter{\n    background-color: lightgreen;\n    text-align: center;\n    padding: 1rem;\n}\n.links div{\n    cursor: pointer;\n    transition: 0.3s;\n    border-bottom: 1px solid black;\n    text-decoration: none;\n    color: black;\n}\n\n.links div:hover{\n    padding-bottom: 4px;\n}\n\n.active{\n    padding-bottom: 4px;\n}\n\n.aboutContainer{\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: url("+p+");\n    background-size: cover;\n\n}\n\n.copy{\n    padding: 2rem;\n    background-color: lightgreen;\n    opacity: 0.7;\n    color: black;\n    font-weight: bold;\n    width: 40%;\n    font-size: 24px;\n    line-height: 30px;  \n    transition: 0.3s; \n}\n\n.copy:hover{\n    transform: scale(1.1);\n}\n\n",""]);const u=l},83:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),a=t.n(o),i=t(645),r=t.n(i),c=t(667),d=t.n(c),s=new URL(t(160),t.b),l=new URL(t(29),t.b),p=new URL(t(847),t.b),u=r()(a()),m=d()(s),g=d()(l),h=d()(p);u.push([n.id,".bgMenu{\n    width: 100%;\n    height: 100%;\n    background-color: #262626;\n}\n\n\n.menuContainer{\n  max-width: 60%;\n  margin: auto;\n  box-sizing: border-box;\n  height: 100%;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 10px;\n  padding: 1rem;\n}\n\n\n.topRight{\n    background-image: url("+m+");\n    left: -40px;\n}\n\n\n.bottomLeft{\n    background-image: url("+g+");\n    bottom: 0px;\n    left: -30px;\n}\n\n.topRight, .bottomLeft{\n    width: 100px;\n    height: 100px;\n    background-size: cover;\n    position: absolute;\n}\n\n.item{\n    border: 1px solid black;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    padding: 1rem;\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 150px 1fr;\n    gap: 10px;\n    font-size: 1rem;\n    transition: 0.3s;\n    background-color: lightgreen;\n    cursor: pointer;\n}\n\n.menuItemImg{\n    width: 100%;\n    height: 150px;\n    grid-area: 1/1/3/2;\n    background-image: url("+h+");\n    background-size: cover;\n\n}\n\n.item:hover{\n    transform: scale(1.05);\n}",""]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},r=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=t(i[r]);e[c].references--}for(var d=o(n,a),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},847:(n,e,t)=>{n.exports=t.p+"0759309be2173a5fae6c.png"},339:(n,e,t)=>{n.exports=t.p+"9d93dd3e058f160ae3fe.jpeg"},91:(n,e,t)=>{n.exports=t.p+"bbc60d3b2ec49699063f.jpg"},466:(n,e,t)=>{n.exports=t.p+"3143e0e31ab208f21581.webp"},29:(n,e,t)=>{n.exports=t.p+"9eda7d18d94ebce326c0.png"},160:(n,e,t)=>{n.exports=t.p+"bd5698d6eee53a0b9ad3.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),i=t(569),r=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(930),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=r().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var h=t(83),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var b=t(650),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=r().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const x=t.p+"1b2b2a47f87909121398.svg",y=t.p+"d8e22058455f02f4879b.svg";function w(){document.querySelector("#content").innerHTML=""}function L(){document.querySelectorAll(".link").forEach((n=>{n.classList.remove("active")}))}function C(){document.querySelector(".about").classList.add("active");const n=document.createElement("div");n.classList.add("aboutContainer");const e=document.createElement("div");e.classList.add("copy"),e.innerText="This is a shiba inu petting place. Shibas are considered as heckin good bois all over the world. Petting a shiba inu is a one of the things everyone should experience. So sit down, relax and look through the available shiba inus.",n.appendChild(e),document.querySelector("#content").appendChild(n)}document.querySelector(".about").addEventListener("click",(()=>{w(),L(),C()})),document.querySelector(".menu").addEventListener("click",(()=>{w(),L(),function(){document.querySelector(".menu").classList.add("active");const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("bgMenu");const t=document.createElement("div");t.classList.add("menuContainer");const o=document.createElement("div");o.classList.add("topRight"),t.appendChild(o);const a=document.createElement("div");a.classList.add("bottomLeft"),t.appendChild(a);for(let n=0;n<6;n++){const n=document.createElement("div");n.classList.add("item");const e=document.createElement("div");e.classList.add("menuItemImg"),n.appendChild(e);const o=document.createElement("h3");o.classList.add("itemTitle"),o.innerText="random words",n.appendChild(o);const a=document.createElement("p");a.classList.add("itemDesc"),a.innerText="lots of words because i can seem to get lorem through javascript and i can't be stuffed turning to an online lorem generateor ahhh why is it so annoying to think of new stuff",n.appendChild(a),t.appendChild(n)}e.appendChild(t),n.appendChild(e)}()})),document.querySelector(".contact").addEventListener("click",(()=>{w(),L(),function(){document.querySelector(".contact").classList.add("active");const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("bgContact");const t=document.createElement("div");t.classList.add("contactContainer"),e.appendChild(t);const o=document.createElement("h1");o.innerText="CONTACT US",o.classList.add("contactHeader"),t.appendChild(o);const a=document.createElement("div");a.classList.add("locationDiv");const i=document.createElement("div");i.classList.add("locationImage"),a.appendChild(i);const r=document.createElement("h3");r.classList.add("locationTitle"),r.innerText="Location",a.appendChild(r);const c=document.createElement("h3");c.classList.add("locationAddress"),c.innerText="333 forest road, Japan",a.appendChild(c);const d=document.createElement("h3");d.classList.add("locationText"),d.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",a.appendChild(d);const s=document.createElement("div");s.classList.add("managerDiv");const l=document.createElement("div");l.classList.add("managerImage"),s.appendChild(l);const p=document.createElement("h3");p.classList.add("managerTitle"),p.innerText="Manager",s.appendChild(p);const u=document.createElement("div"),m=document.createElement("div");m.classList.add("phoneDiv");const g=document.createElement("img");g.classList.add("phoneIcon"),g.setAttribute("src",x),m.appendChild(g);const h=document.createElement("p");h.classList.add("phoneNum"),h.innerText="999-999-999",m.appendChild(h);const f=document.createElement("div");f.classList.add("emailDiv");const b=document.createElement("img");b.classList.add("emailIcon"),b.setAttribute("src",y),f.appendChild(b);const v=document.createElement("p");v.classList.add("email"),v.innerText="managershiba@somedomain.com",f.appendChild(v),u.appendChild(m),u.appendChild(f),s.appendChild(u),t.appendChild(a),t.appendChild(s),n.appendChild(e)}()})),C()})()})();