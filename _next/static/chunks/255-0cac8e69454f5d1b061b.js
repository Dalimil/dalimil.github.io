(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{2167:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(1063),i=r(4651),l=r(7426);var u={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=s.href,d=s.as,b=e.children,v=e.replace,y=e.shallow,g=e.scroll,O=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var m=(t=a.default.Children.only(b))&&"object"===typeof t&&t.ref,h=l.useIntersection({rootMargin:"200px"}),w=n(h,2),j=w[0],k=w[1],E=a.default.useCallback((function(e){j(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,j]);a.default.useEffect((function(){var e=k&&r&&c.isLocalURL(p),t="undefined"!==typeof O?O:o&&o.locale,n=u[p+"%"+d+(t?"%"+t:"")];e&&!n&&f(o,p,d,{locale:t})}),[d,p,k,O,r,o]);var P={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,o,p,d,v,y,g,O)},onMouseEnter:function(e){c.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof O?O:o&&o.locale,M=o&&o.isLocaleDomain&&c.getDomainLocale(d,_,o&&o.locales,o&&o.domainLocales);P.href=M||c.addBasePath(c.addLocale(d,_,o&&o.defaultLocale))}return a.default.cloneElement(t,P)};t.default=s},7426:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,l=o.useRef(),u=o.useState(!1),f=n(u,2),s=f[0],p=f[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||s||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,t,r){e.exports=r(2167)},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(7294))&&n.__esModule?n:{default:n};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=function(e){return Object.keys(e).map((function(t){return"1"==="".concat(t)?e[t].src:"".concat(e[t].src," ").concat(t,"x")})).join(", ")},f=function(e,t,r){return t.map((function(n,a){var c,i=e[n],l="image/".concat(function(e){var t=Object.keys(e);return e[t[t.length-1]].format}(i));return c="original"===n||0===t.length||!r||a>r.length?void 0:0===a?"(max-width: ".concat(r[a],"px)"):a===t.length-1?"(min-width: ".concat(r[a-1]+1,"px)"):"(min-width: ".concat(r[a-1]+1,"px) and (max-width: ").concat(r[a],"px)"),o.default.createElement("source",{key:"".concat(l,"/").concat(n),type:l,srcSet:u(i),media:c})}))},s=function(e){var t=e.src,r=(e.type,e.webp,e.inline,e.url,e.original,e.sizes),n=(e.densities,e.breakpoints),u=e.style,s=l(e,["src","type","webp","inline","url","original","sizes","densities","breakpoints","style"]),p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u||{}),d=s,b=d.rawSrc,v=l(d,["rawSrc"]);if(!b)throw new Error("Babel plugin 'react-optimized-image/plugin' not installed or this component could not be recognized by it.");var y=function(e,t){var r=e;if(t.fallback){var n=Object.keys(t.fallback).map((function(e){return parseInt(e,10)})).sort((function(e,t){return t-e})).find((function(){return!0}));if(n){var o=Object.keys(t.fallback[n]).map((function(e){return parseInt(e,10)})).sort((function(e,t){return e-t})).find((function(){return!0}));o&&(r=t.fallback[n][o])}}return r}(t,b);return b.webp||1!==Object.keys(b.fallback).length||1!==Object.keys(b.fallback[Object.keys(b.fallback)[0]]).length?o.default.createElement("picture",null,b.webp&&f(b.webp,r||Object.keys(b.webp),n||r),f(b.fallback,r||Object.keys(b.fallback),n||r),o.default.createElement("img",a({src:y.toString()},v,{style:p}))):o.default.createElement("img",a({src:y.toString()},v,{style:p}))};t.default=s},9206:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(7294))&&n.__esModule?n:{default:n};function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=function(e){e.src;var t=a(e,["src"]),r=t.rawSrc,n=a(t,["rawSrc"]);if(!r)throw new Error("Babel plugin 'react-optimized-image/plugin' not installed or this component could not be recognized by it.");var c=r.default||r;if("function"!==typeof c)throw new Error("No react component generated. Please set `includeStrategy` option of optimized-images-loader to 'react'");return o.default.createElement(c,n)};t.default=c},8303:function(e,t,r){"use strict";Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return o.default}});var n=a(r(9206)),o=a(r(564));function a(e){return e&&e.__esModule?e:{default:e}}}}]);