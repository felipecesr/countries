_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(n,e,t){t("74v/"),n.exports=t("nOHt")},"74v/":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("hUgY")}])},hUgY:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t.n(r),a=t("h4VS"),l=t("vOnD"),i=function(){return"\n    --color-elements: var(--dark-blue);\n    --color-background: var(--very-dark-blue);\n    --color-text: var(--white);\n  "},c="\n    :root {\n    --dark-blue: hsl(209, 23%, 22%);\n    --very-dark-blue: hsl(207, 26%, 17%);\n    --dark-gray: hsl(0, 0%, 52%);\n    --very-light-gray: hsl(0, 0%, 98%);\n    --black: hsl(200, 15%, 8%);\n    --white: hsl(0, 0%, 100%);\n    --color-mode: 'light';\n    --color-elements: var(--white);\n    --color-background: var(--very-light-gray);\n    --color-text: var(--black);\n\n    &[data-theme='dark'] {\n      ".concat(i(),"\n    }\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --color-mode: 'dark';\n\n      &:not([data-theme]) {\n        ").concat(i(),"\n      }\n    }\n  }\n");function u(){var n=Object(a.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html,\n  body,\n  ul,\n  ol,\n  figure,\n  p {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    background-color: var(--color-background);\n    font-family: 'Nunito Sans', sans-serif;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  img {\n    width: 100%;\n    display: block;\n  }\n\n  ","\n"]);return u=function(){return n},n}var d=Object(l.a)(u(),c),m=t("ibEc");function s(){var n=Object(a.a)(["\n    max-width: 1280px;\n    margin: 0 auto;\n  "]);return s=function(){return n},n}var h=l.c.main.withConfig({displayName:"styled__LayoutWrapper",componentId:"sc-1o63omz-0"})(["padding:1.714rem 1rem;",""],m.a.greaterThan("medium")(s()));function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,a=void 0;try{for(var l,i=n[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!e||t.length!==e);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=t("YFqc"),b=t.n(p),y=l.c.header.withConfig({displayName:"styled__PageHeaderWrapper",componentId:"kz5i8b-0"})(["align-items:center;background-color:var(--color-elements);box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);color:var(--color-text);display:flex;justify-content:space-between;padding:2.071em 1.143em;"]),w=l.c.h1.withConfig({displayName:"styled__PageHeaderTitle",componentId:"kz5i8b-1"})(["font-size:1rem;font-weight:800;line-height:1.6;margin:0;"]),v=function(){var n=Object(r.useState)(""),e=n[0],t=n[1],o=function(n){window.localStorage.setItem("theme",n),t(n)},a=Object(r.useCallback)((function(){switch(e){case"light":o("dark");break;case"dark":o("light");break;default:"light"===function(n){var e=getComputedStyle(document.documentElement).getPropertyValue(n);return e.length&&(e=e.replace(/"/g,"").trim()),e}("--color-mode")?o("dark"):o("light")}}),[e]);return Object(r.useEffect)((function(){var n=window.localStorage.getItem("theme");n&&(document.documentElement.setAttribute("data-theme",n),t(n))}),[e,a]),[e,a]},k=l.c.button.withConfig({displayName:"styled__ButtonThemeWrapper",componentId:"a5485e-0"})(["background:none;border:none;color:var(--toggle-theme-color);padding:0;font-size:0.9rem;font-weight:600;"]),_=l.c.svg.withConfig({displayName:"styled__ButtonThemeIcon",componentId:"a5485e-1"})(["display:inline-block;margin-right:8px;height:12px;width:12px;"]),x=t("mrSG"),E=t("OXR1"),C=r.forwardRef((function(n,e){return r.createElement(E.a,Object(x.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"-.125em",iconViewBox:"0 0 512 512"},n,{ref:e}),r.createElement("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z",key:"k0"}))}));C.displayName="Moon";var O=r.forwardRef((function(n,e){return r.createElement(E.a,Object(x.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"-.125em",iconViewBox:"0 0 512 512"},n,{ref:e}),r.createElement("path",{fill:"currentColor",d:"M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 00279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z",key:"k0"}))}));O.displayName="Moon";var j=o.a.createElement,A=function(n){var e=n.theme,t=n.toggleTheme;return j(k,{onClick:t,"aria-pressed":"dark"===e},j(_,"light"===e?{as:O}:{as:C}),"Dark mode")},N=o.a.createElement,S=function(){var n=f(v(),2),e=n[0],t=n[1];return N(y,null,N(w,null,N(b.a,{href:"/"},N("a",null,"Where in the world?"))),N(A,{theme:e,toggleTheme:t}))},I=o.a.createElement,z=function(n){var e=n.children;return I(o.a.Fragment,null,I(S,null),I(h,null,e))},T=o.a.createElement;e.default=function(n){var e=n.Component,t=n.pageProps;return T(z,null,T(d,null),T(e,t))}}},[[0,0,2,1,3]]]);