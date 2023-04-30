(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6710)}])},6710:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(3457),i=n.n(o),s=n(9008),a=n.n(s),l=JSON.parse('{"@context":"https://schema.org","@type":"Person","name":"Dalimil Hajek","givenName":"Dalimil","familyName":"Hajek","email":"mailto:dalimilhajek@gmail.com","address":"Vancouver, Canada","url":"https://dalimil.github.io/","image":"https://dalimil.github.io/images/dali-career-profile.jpg","sameAs":"https://www.linkedin.com/in/dalimil/","birthDate":"1996-07-27","gender":"https://schema.org/Male","jobTitle":"Software Engineer","worksFor":{"@type":"Organization","name":"Twitter","url":"https://twitter.com"},"alumniOf":{"@type":"Organization","name":"The University of Edinburgh","url":"https://www.ed.ac.uk/"}}');let p={url:"https://dalimil.github.io/",imageUrl:"https://dalimil.github.io/images/career/banner.jpg",author:"Dalimil Hajek",title:"Dalimil Hajek - Personal Website and Portfolio",description:"Software Engineering Portfolio of Dalimil Hajek. This is a software engineering portfolio page containing a selection of technical projects, built apps, and relevant experience.",keywords:"Dalimil, Hajek, Dali, Dalimil Hajek, portfolio, JavaScript, React, software engineer, developer, hackathon, University of Edinburgh, Computer Science"},c=()=>(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"language",content:"en"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("title",{children:p.title}),(0,r.jsx)("meta",{name:"author",content:p.author}),(0,r.jsx)("meta",{name:"description",content:p.description}),(0,r.jsx)("meta",{name:"keywords",content:p.keywords}),(0,r.jsx)("meta",{property:"og:url",content:p.url}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:p.title}),(0,r.jsx)("meta",{property:"og:site_name",content:p.title}),(0,r.jsx)("meta",{property:"og:description",content:p.description}),(0,r.jsx)("meta",{property:"og:image",content:p.imageUrl}),(0,r.jsx)("meta",{name:"twitter:card",content:"app"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/images/icons/suitcase16.png",sizes:"16x16"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/images/icons/suitcase32.png",sizes:"32x32"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/images/icons/suitcase256.png",sizes:"256x256"}),(0,r.jsx)("link",{href:"/manifest.json",rel:"manifest"}),(0,r.jsx)("link",{rel:"canonical",href:p.url}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l)}})]});n(8804);let u=e=>{let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(i(),{color:"#29D",startPosition:.3,stopDelayMs:200,height:3}),(0,r.jsx)(t,{...n})]})};var m=u},8804:function(){},9008:function(e,t,n){e.exports=n(2636)},1163:function(e,t,n){e.exports=n(6885)},3457:function(e,t,n){var r,o=Object.create,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,c=e=>i(e,"__esModule",{value:!0}),u=(e,t)=>i(e,"name",{value:t,configurable:!0}),m=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of a(t))!p.call(e,o)&&(n||"default"!==o)&&i(e,o,{get:()=>t[o],enumerable:!(r=s(t,o))||r.enumerable});return e},f=(e,t)=>m(c(i(null!=e?o(l(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),d=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>r&&r.get(e)||(t=m(c({}),e,1),r&&r.set(e,t),t)),g={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(g,{default:()=>x});var h=f(n(1163)),y=f(n(4865)),b=f(n(5697)),v=f(n(7294));function x({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:r=3,showOnShallow:o=!0,options:i,nonce:s}){let a=null;v.useEffect(()=>(i&&y.configure(i),h.default.events.on("routeChangeStart",l),h.default.events.on("routeChangeComplete",p),h.default.events.on("routeChangeError",p),()=>{h.default.events.off("routeChangeStart",l),h.default.events.off("routeChangeComplete",p),h.default.events.off("routeChangeError",p)}),[]);let l=u((e,{shallow:n})=>{(!n||o)&&(y.set(t),y.start())},"routeChangeStart"),p=u((e,{shallow:t})=>{(!t||o)&&(a&&clearTimeout(a),a=setTimeout(()=>{y.done(!0)},n))},"routeChangeEnd");return v.createElement("style",{nonce:s},`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${e};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${r}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${e};
        border-left-color: ${e};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `)}u(x,"NextNProgress"),x.propTypes={color:b.string,startPosition:b.number,stopDelayMs:b.number,height:b.number,showOnShallow:b.bool,options:b.object,nonce:b.string},e.exports=d(g)},4865:function(e,t,n){var r,o;void 0!==(r="function"==typeof(o=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=i(e,o.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(o.barSelector),p=o.speed,c=o.easing;return n.offsetWidth,s(function(t){var i,s;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),a(l,(i=e,(s="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+i)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+i)*100+"%,0)"}:{"margin-left":(-1+i)*100+"%"}).transition="all "+p+"ms "+c,s)),1===e?(a(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){a(n,{transition:"all "+p+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},p)},p)):setTimeout(t,p)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*i(Math.random()*t,.1,.95)),t=i(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,i,s=t.querySelector(o.barSelector),l=e?"-100":(-1+(r.status||0))*100,c=document.querySelector(o.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),!o.showSpinner&&(i=t.querySelector(o.spinnerSelector))&&m(i),c!=document.body&&p(c,"nprogress-custom-parent"),c.appendChild(t),t},r.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var s=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var i;r=t[i=(i=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[i]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+i)in n)return r;return t}(i)),n.style[r]=o}return function(e,t){var r,o,i=arguments;if(2==i.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,i[1],i[2])}}();function l(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function p(e,t){var n=u(e);l(n,t)||(e.className=(n+t).substring(1))}function c(e,t){var n,r=u(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?o.call(t,n,t,e):o)&&(e.exports=r)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);