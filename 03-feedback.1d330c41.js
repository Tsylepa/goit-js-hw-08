!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=y();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?p(e):(o=r=void 0,u)}function T(){var e=y(),n=h(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),h=j.querySelector("[name = email]"),O=j.querySelector("[name = message]"),w="feedback-form-state",T={};!function(){if(localStorage.getItem(w))try{var e=JSON.parse(localStorage.getItem(w));h.value=e.email,O.value=e.message,T.email=e.email,T.message=e.message}catch(e){console.log("Невалідні дані")}}(),j.addEventListener("input",e(t)((function(){h.value||O.value?(localStorage.setItem(w,JSON.stringify(T)),T.email=h.value,T.message=O.value):localStorage.clear()}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),(h.value||O.value)&&(console.log(T),j.reset(),localStorage.clear())}))}();
//# sourceMappingURL=03-feedback.1d330c41.js.map
