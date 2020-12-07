/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
if ($(".rellax").length) {
    const rellaxin = document.querySelectorAll(".rellax");

    rellaxin.forEach(el => {

        const rellax = new Rellax(el, {
            relativeToWrapper: true,
            wrapper: el.parentElement
        });

        window.addEventListener("scroll", () => { // fix to init
            rellax.refresh();
        });

    });
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
$(document).ready(function () {
    $(".menu-toggle__close").click(function () {
        $(".menu-toggle").removeClass("active")
        $(".menu-toggle__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".product__buy, .product-page__btn__buy").click(function () {
        $(".cart").addClass("active")
        $(".cart__inner").addClass("active")
        $("body").addClass("overflow")
    });
    $(".cart__close").click(function () {
        $(".cart").removeClass("active")
        $(".cart__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".search__icon__close").click(function () {
        $("body").removeClass("overflow")
        $(".search").removeClass("active")
        $(".search__inner").removeClass("active")
    });
    $(".filter__btn__close").click(function () {
        $("body").removeClass('overflow')
        $(".left-sidebar").removeClass('active')
        $(".left-sidebar__inner").removeClass("active")
    });
    $('.product_reviews_show').click(function () {
        $('.product_reviews_item').removeClass("product_reviews_item_hide");
        $('.product_reviews_show').addClass("product_reviews_item_hide");
    });
    if ($("#menu-toggle").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu-toggle')) {
                $("body").toggleClass('overflow')
                $(".menu-toggle").toggleClass('active')
                $(".menu-toggle__inner").toggleClass('active')
            }
        })
    }
    $('.cart__step').each(function () {
        var eventFired = 0;
        var valueShort = $(this).attr("data-short");
        if ($(window).width() < 476) {
            $(this).text(valueShort)
        }

        $(window).on('resize', function () {
            if (!eventFired) {
                if ($(window).width() < 476) {
                    $(this).text(valueShort)
                }
            }
        });
    });
    if ($("#cart").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.cart__btn, .product__buy__btn').length || $(e.target).hasClass('cart')) {
                $("body").toggleClass('overflow')
                $(".cart").toggleClass('active')
                $(".cart__inner").toggleClass('active')
            }
            if ($(e.target).closest('.remove_item').length) {
                $(e.target).closest('.cart__order_item').fadeOut(500)
                setTimeout(function () {
                    $(e.target).closest('.cart__order_item').remove()
                }, 1000);
            }
        })
    }
    if ($("#search").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                $("body").toggleClass('overflow')
                $(".search").toggleClass('active')
                $(".search__inner").toggleClass('active')
            }
        })
    }
    if ($("#left-sidebar").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.filter__btn').length || $(e.target).hasClass('left-sidebar')) {
                $("body").toggleClass('overflow')
                $(".left-sidebar").toggleClass('active')
                $(".left-sidebar__inner").toggleClass("active")
            }
        })
    }
    $(document).on('click', '.counter', function (e) {
        if ($(e.target).closest('.counter')) {
            const input = $(e.target).closest('.counter').find('input')[0];

            if ($(e.target).closest('.counter_subtract').length && input.value > 1) {
                input.value = --input.value;
                $(input).trigger('change');
            }
            if ($(e.target).closest('.counter_add').length) {
                input.value = ++input.value;
                $(input).trigger('change');
            }
        }
    });
    $(".home-slider .home-slider__image").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / 1);
        let numPages = Math.ceil(slick.slideCount / 1);
        $(".home-slider .slides-num").html(`<span>0${page}</span><span class="num__all"> / 0${numPages}</span>`);
    });
    $('.home-slider__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        asNavFor: '.home-slider__text'
    });
    $('.home-slider__text').slick({
        asNavFor: '.home-slider__image',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        arrows: false,
        fade: true,
    });
    $(".top-sales .top-sales__slider .product__list").slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        nextArrow: '.top-sales .next_arrow',
        prevArrow: '.top-sales .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".brands .brands__slider .brands__list").slick({
        slidesToShow: 7,
        slidesToScroll: 6,
        dots: false,
        arrows: true,
        nextArrow: '.brands .next_arrow',
        prevArrow: '.brands .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
        ]
    });
    $(".home-review .home-review__slider .home-review__list").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        nextArrow: '.home-review .next_arrow',
        prevArrow: '.home-review .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $(".catalog__other .catalog__other__slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        nextArrow: '.catalog__other .next_arrow',
        prevArrow: '.catalog__other .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1768,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".catalog-review .catalog-review__slider .catalog-review__list").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        nextArrow: '.catalog-review .next_arrow',
        prevArrow: '.catalog-review .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
$(".product-slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: true,
    cssEase: 'linear',
    customPaging: function (slick, index) {
        var image = $(slick.$slides[index]).find('img').attr('src');
        if (image === undefined) {
            return (
                '<img style="height: 24px" src="img/svg/product-youtube.svg" alt="youtube" /> '
            )
        }
        else {
            return (
                '<img src="' + image + '" alt="" /> '
            )
        }
    }
});
$(".similar-product .similar-product__slider .product__list").slick({
    slidesToShow: 6,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    nextArrow: '.similar-product .next_arrow',
    prevArrow: '.similar-product .previous_arrow',
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});
$(".viewed-product .viewed-product__slider .product__list").slick({
    slidesToShow: 6,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    nextArrow: '.viewed-product .next_arrow',
    prevArrow: '.viewed-product .previous_arrow',
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});
$(".analog-product .analog-product__slider .product__list").slick({
    slidesToShow: 6,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    nextArrow: '.analog-product .next_arrow',
    prevArrow: '.analog-product .previous_arrow',
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});
/* $(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
        $('header').addClass('shadow');
    } else {
        $('header').removeClass('shadow');
    }
}) */
if ($("#similar-product").length) {
    $(window).scroll(function () {
        var hT = $('#similar-product').offset().top,
            hH = $('#similar-product').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        console.log((hT - wH), wS);
        if (wS > (hT + hH - wH + 350)) {
            $('header').addClass('shadow');
        }
        else {
            $('header').removeClass('shadow');
        }
    });
}
if ($(".benefits__inner").length) {
    $(document).ready(function () {

        var show = true;
        var countbox = ".benefits__inner";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".counter-animation__title").css('opacity', '1');
                $('.benefits__number').css('opacity', '1');
                $('.benefits__number').spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });

                show = false;
            }
        });

    });
}
if ($(".catalog__products").length) {
    $(document).ready(function () {

        var show = true;
        var countbox = ".catalog__products";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".catalog__products .product__item").css('animation', '0.3s ease-in-out both fade-in');
                show = false;
            }
        });

    });
}
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-beta.33
*/

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e){return e},a=[n(2)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(e,t,n,i){var a=navigator.userAgent,r=f("touchstart"),o=/iemobile/i.test(a),l=/iphone/i.test(a)&&!o;function u(t,n,a){if(!(this instanceof u))return new u(t,n,a);this.el=i,this.events={},this.maskset=i,this.refreshValue=!1,!0!==a&&(e.isPlainObject(t)?n=t:(n=n||{},t&&(n.alias=t)),this.opts=e.extend(!0,{},this.defaults,n),this.noMasksCache=n&&n.definitions!==i,this.userOptions=n||{},this.isRTL=this.opts.numericInput,c(this.opts.alias,n,this.opts))}function c(t,n,a){var r=u.prototype.aliases[t];return r?(r.alias&&c(r.alias,i,a),e.extend(!0,a,r),e.extend(!0,a,n),!0):(null===a.mask&&(a.mask=t),!1)}function p(t,n){function a(t,a,r){var o=!1;if(null!==t&&""!==t||((o=null!==r.regex)?t=(t=r.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(o=!0,t=".*")),1===t.length&&!1===r.greedy&&0!==r.repeat&&(r.placeholder=""),r.repeat>0||"*"===r.repeat||"+"===r.repeat){var s="*"===r.repeat?0:"+"===r.repeat?1:r.repeat;t=r.groupmarker[0]+t+r.groupmarker[1]+r.quantifiermarker[0]+s+","+r.repeat+r.quantifiermarker[1]}var l,c=o?"regex_"+r.regex:r.numericInput?t.split("").reverse().join(""):t;return u.prototype.masksCache[c]===i||!0===n?(l={mask:t,maskToken:u.prototype.analyseMask(t,o,r),validPositions:{},_buffer:i,buffer:i,tests:{},excludes:{},metadata:a,maskLength:i},!0!==n&&(u.prototype.masksCache[c]=l,l=e.extend(!0,{},u.prototype.masksCache[c]))):l=e.extend(!0,{},u.prototype.masksCache[c]),l}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var r=0;r<t.mask.length;r++)if(t.mask[r].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var o=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(n,a){o.length>1&&(o+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===i||e.isFunction(a.mask)?o+=a:o+=a.mask}),a(o+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==i&&!e.isFunction(t.mask.mask)?a(t.mask.mask,t.mask,t):a(t.mask,t.mask,t)}function f(e){var t=n.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}function m(a,c,p){c=c||this.maskset,p=p||this.opts;var d,h,g,v,k=this,y=this.el,b=this.isRTL,x=!1,P=!1,S=!1,A=!1,C=!1;function M(e,t,n){t=t||0;var a,r,o,s=[],l=0,u=O();do{if(!0===e&&E().validPositions[l])r=(o=E().validPositions[l]).match,a=o.locator.slice(),s.push(!0===n?o.input:!1===n?r.nativeDef:$(l,r));else{r=(o=F(l,a,l-1)).match,a=o.locator.slice();var c=!1!==p.jitMasking?p.jitMasking:r.jit;(!1===c||c===i||l<u||"number"==typeof c&&isFinite(c)&&c>l)&&s.push(!1===n?r.nativeDef:$(l,r))}"auto"===p.keepStatic&&r.newBlockMarker&&null!==r.fn&&(p.keepStatic=l-1),l++}while((g===i||l<g)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===n&&E().maskLength!==i||(E().maskLength=l-1),s}function E(){return c}function w(e){var t=E();t.buffer=i,!0!==e&&(t.validPositions={},t.p=0)}function O(e,t,n){var a=-1,r=-1,o=n||E().validPositions;for(var s in e===i&&(e=-1),o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1===a||a==e?r:-1==r?a:e-a<r-e?a:r}function D(e,t,n){for(var a,r=T(e=e>0?e-1:0,t),o=r.alternation!==i?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(p.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===i||r.alternation!==a.alternation||a.locator[r.alternation]!==i&&L(a.locator[r.alternation].toString().split(","),o)))||!0===n&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function _(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==i?t.toString():""}function j(e,t){for(var n=(e.alternation!=i?e.mloc[_(e)]:e.locator).join("");n.length<t;)n+="0";return n}function F(e,t,n){return E().validPositions[e]||D(e,R(e,t?t.slice():t,n))}function T(e,t){return E().validPositions[e]?E().validPositions[e]:(t||R(e))[0]}function N(e,t){for(var n=!1,i=R(e),a=0;a<i.length;a++)if(i[a].match&&i[a].match.def===t){n=!0;break}return n}function R(t,n,a){var r,o,s,l,u=E().maskToken,c=n?a:0,f=n?n.slice():[0],m=[],d=!1,h=n?n.join(""):"";function g(n,a,o,s){function l(o,s,u){function f(t,n){var i=0===e.inArray(t,n.matches);return i||e.each(n.matches,function(e,a){if(!0===a.isQuantifier?i=f(t,n.matches[e-1]):!0===a.isOptional?i=f(t,a):!0===a.isAlternate&&(i=f(t,a)),i)return!1}),i}function v(t,n,a){var r,o;if((E().tests[t]||E().validPositions[t])&&e.each(E().tests[t]||[E().validPositions[t]],function(e,t){if(t.mloc[n])return r=t,!1;var s=a!==i?a:t.alternation,l=t.locator[s]!==i?t.locator[s].toString().indexOf(n):-1;(o===i||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[n]||r.mloc[s]||r.locator).slice((a!==i?a:r.alternation)+1)}return a!==i?v(t,n):i}function k(e,t){function n(e){for(var t,n,i=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(n=e.charCodeAt(a+1);++t<n;)i.push(String.fromCharCode(t));else t=e.charCodeAt(a),i.push(e.charAt(a));return i.join("")}return p.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==n(t.match.def.replace(/[\[\]]/g,"")).indexOf(n(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function y(e,t){if(t===i||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var n=e.locator[e.alternation];if(n!==i){if("string"==typeof n&&(n=n.split(",")[0]),e.mloc[n]===i&&(e.mloc[n]=e.locator.slice()),t!==i){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===i&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=i}return!1}if(c>5e3)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+E().mask;if(c===t&&o.matches===i)return m.push({match:o,locator:s.reverse(),cd:h,mloc:{}}),!0;if(o.matches!==i){if(o.isGroup&&u!==o){if(o=l(n.matches[e.inArray(o,n.matches)+1],s))return!0}else if(o.isOptional){var b=o;if(o=g(o,a,s,u)){if(r=m[m.length-1].match,u!==i||!f(r,b))return!0;d=!0,c=t}}else if(o.isAlternator){var x,P=o,S=[],A=m.slice(),C=s.length,M=a.length>0?a.shift():-1;if(-1===M||"string"==typeof M){var w,O=c,D=a.slice(),_=[];if("string"==typeof M)_=M.split(",");else for(w=0;w<P.matches.length;w++)_.push(w.toString());if(E().excludes[t]){for(var j=_.slice(),F=0,T=E().excludes[t].length;F<T;F++)_.splice(_.indexOf(E().excludes[t][F].toString()),1);0===_.length&&(E().excludes[t]=i,_=j)}(!0===p.keepStatic||isFinite(parseInt(p.keepStatic))&&O>=p.keepStatic)&&(_=_.slice(0,1));for(var N=0;N<_.length;N++){w=parseInt(_[N]),m=[],a=v(c,w,C)||D.slice(),P.matches[w]&&l(P.matches[w],[w].concat(s),u)&&(o=!0),x=m.slice(),c=O,m=[];for(var R=0;R<x.length;R++){var G=x[R],I=!1;G.alternation=G.alternation||C,y(G);for(var B=0;B<S.length;B++){var L=S[B];if("string"!=typeof M||G.alternation!==i&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){I=!0,y(L,G);break}if(k(G,L)){y(G,L)&&(I=!0,S.splice(S.indexOf(L),0,G));break}if(k(L,G)){y(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,E(),t,!1,p,!1)){y(G,L)&&(I=!0,S.splice(S.indexOf(L),0,G));break}}}I||S.push(G)}}m=A.concat(S),c=t,d=m.length>0,o=S.length>0,a=D.slice()}else o=l(P.matches[M]||n.matches[M],[M].concat(s),u);if(o)return!0}else if(o.isQuantifier&&u!==n.matches[e.inArray(o,n.matches)-1])for(var H=o,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&c<=t;V++){var K=n.matches[e.inArray(H,n.matches)-1];if(o=l(K,[V].concat(s),K)){if((r=m[m.length-1].match).optionalQuantifier=V>H.quantifier.min-1,r.jit=V+K.matches.indexOf(r)>=H.quantifier.jit,f(r,K)&&V>H.quantifier.min-1){d=!0,c=t;break}if(H.quantifier.jit!==i&&isNaN(H.quantifier.max)&&r.optionalQuantifier&&E().validPositions[t-1]===i){m.pop(),d=!0,c=t,h=i;break}return!0}}else if(o=g(o,a,s,u))return!0}else c++;var U,z}for(var u=a.length>0?a.shift():0;u<n.matches.length;u++)if(!0!==n.matches[u].isQuantifier){var f=l(n.matches[u],[u].concat(o),s);if(f&&c===t)return f;if(c>t)break}}if(t>-1){if(n===i){for(var v,k=t-1;(v=E().validPositions[k]||E().tests[k])===i&&k>-1;)k--;v!==i&&k>-1&&(o=k,s=v,l=[],e.isArray(s)||(s=[s]),s.length>0&&(s[0].alternation===i?0===(l=D(o,s.slice()).locator.slice()).length&&(l=s[0].locator.slice()):e.each(s,function(e,t){if(""!==t.def)if(0===l.length)l=t.locator.slice();else for(var n=0;n<l.length;n++)t.locator[n]&&-1===l[n].toString().indexOf(t.locator[n])&&(l[n]+=","+t.locator[n])})),h=(f=l).join(""),c=k)}if(E().tests[t]&&E().tests[t][0].cd===h)return E().tests[t];for(var y=f.shift();y<u.length;y++){if(g(u[y],f,[y])&&c===t||c>t)break}}return(0===m.length||d)&&m.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:h}),n!==i&&E().tests[t]?e.extend(!0,[],m):(E().tests[t]=e.extend(!0,[],m),E().tests[t])}function G(){return E()._buffer===i&&(E()._buffer=M(!1,1),E().buffer===i&&(E().buffer=E()._buffer.slice())),E()._buffer}function I(e){return E().buffer!==i&&!0!==e||(E().buffer=M(!0,O(),!0)),E().buffer}function B(e,t,n){var a,r;if(!0===e)w(),e=0,t=n.length;else for(a=e;a<t;a++)delete E().validPositions[a];for(r=e,a=e;a<t;a++)if(w(!0),n[a]!==p.skipOptionalPartCharacter){var o=V(r,n[a],!0,!0);!1!==o&&(w(!0),r=o.caret!==i?o.caret:o.pos+1)}}function L(t,n,a){for(var r,o=p.greedy?n:n.slice(0,1),s=!1,l=a!==i?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var c=0;c<t.length;c++)if(-1!==e.inArray(t[c],o)){s=!0;break}return s}function H(t,n,a,r,o){var s,l,u,c,f,m,d,h=e.extend(!0,{},E().validPositions),g=!1,v=o!==i?o:O();if(-1===v&&o===i)l=(c=T(s=0)).alternation;else for(;v>=0;v--)if((u=E().validPositions[v])&&u.alternation!==i){if(c&&c.locator[u.alternation]!==u.locator[u.alternation])break;s=v,l=E().validPositions[s].alternation,c=u}if(l!==i){d=parseInt(s),E().excludes[d]=E().excludes[d]||[],!0!==t&&E().excludes[d].push(_(c));var k=[],y=0;for(f=d;f<O(i,!0)+1;f++)(m=E().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?k.push(m.input):f<t&&y++,delete E().validPositions[f];for(;E().excludes[d]&&E().excludes[d].length<10;){var b=-1*y,x=k.slice();for(E().tests[d]=i,w(!0),g=!0;x.length>0;){var P=x.shift();if(P!==p.skipOptionalPartCharacter&&!(g=V(O(i,!0)+1,P,!1,r,!0)))break}if(g&&n!==i){var S=O(t)+1;for(f=d;f<O()+1;f++)((m=E().validPositions[f])===i||null==m.match.fn)&&f<t+b&&b++;g=V((t+=b)>S?S:t,n,a,r,!0)}if(g)break;if(w(),c=T(d),E().validPositions=e.extend(!0,{},h),!E().excludes[d]){g=H(t,n,a,r,d-1);break}var A=_(c);if(-1!==E().excludes[d].indexOf(A)){g=H(t,n,a,r,d-1);break}for(E().excludes[d].push(A),f=d;f<O(i,!0)+1;f++)delete E().validPositions[f]}}return E().excludes[d]=i,g}function V(t,n,a,r,o,s){function l(e){return b?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}a=!0===a;var c=t;function f(n,a,o){var s=!1;return e.each(R(n),function(c,f){var m=f.match;if(I(!0),!1!==(s=null!=m.fn?m.fn.test(a,E(),n,o,p,l(t)):(a===m.def||a===p.skipOptionalPartCharacter)&&""!==m.def&&{c:$(n,m,!0)||m.def,pos:n})){var d=s.c!==i?s.c:a,h=n;return d=d===p.skipOptionalPartCharacter&&null===m.fn?$(n,m,!0)||m.def:d,s.remove!==i&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){U({begin:t,end:t+1})})),s.insert!==i&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){V(t.pos,t.c,!0,r)})),!0!==s&&s.pos!==i&&s.pos!==n&&(h=s.pos),!0!==s&&s.pos===i&&s.c===i?!1:(U(t,e.extend({},f,{input:function(t,n,i){switch(p.casing||n.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var a=E().validPositions[i-1];t=0===i||a&&a.input===String.fromCharCode(u.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(p.casing)){var r=Array.prototype.slice.call(arguments);r.push(E().validPositions),t=p.casing.apply(this,r)}}return t}(d,m,h)}),r,h)||(s=!1),!1)}}),s}t.begin!==i&&(c=b?t.end:t.begin);var m=!0,d=e.extend(!0,{},E().validPositions);if(e.isFunction(p.preValidation)&&!a&&!0!==r&&!0!==s&&(m=p.preValidation(I(),c,n,l(t),p,E())),!0===m){if(K(i,c,!0),(g===i||c<g)&&(m=f(c,n,a),(!a||!0===r)&&!1===m&&!0!==s)){var h=E().validPositions[c];if(!h||null!==h.match.fn||h.match.def!==n&&n!==p.skipOptionalPartCharacter){if((p.insertMode||E().validPositions[Q(c)]===i)&&!z(c,!0))for(var v=c+1,k=Q(c);v<=k;v++)if(!1!==(m=f(v,n,a))){m=K(c,m.pos!==i?m.pos:v)||m,c=v;break}}else m={caret:Q(c)}}!1!==m||null===p.keepStatic||!1===p.keepStatic||a||!0===o||(m=H(c,n,a,r)),!0===m&&(m={pos:c})}if(e.isFunction(p.postValidation)&&!1!==m&&!a&&!0!==r&&!0!==s){var y=p.postValidation(I(!0),m,p);if(y!==i){if(y.refreshFromBuffer&&y.buffer){var x=y.refreshFromBuffer;B(!0===x?x:x.start,x.end,y.buffer)}m=!0===y?m:y}}return m&&m.pos===i&&(m.pos=c),!1!==m&&!0!==s||(w(!0),E().validPositions=e.extend(!0,{},d)),m}function K(t,n,a){var r;if(t===i)for(t=n-1;t>0&&!E().validPositions[t];t--);for(var o=t;o<n;o++)if(E().validPositions[o]===i&&!z(o,!0)){var s=0==o?T(o):E().validPositions[o-1];if(s){var l,u=j(s),c=R(o).slice(),p=i,f=T(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=j(t,u.length);var n=Math.abs(l-u);(p===i||n<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=n,f=t)}),(f=e.extend({},f,{input:$(o,f.match,!0)||f.match.def})).generatedInput=!0,U(o,f,!0),!0!==a){var m=E().validPositions[n].input;E().validPositions[n]=i,r=V(n,m,!0,!0)}}}return r}function U(t,n,a,r){function o(e,t,n){var a=t[e];if(a!==i&&(null===a.match.fn&&!0!==a.match.optionality||a.input===p.radixPoint)){var r=n.begin<=e-1?t[e-1]&&null===t[e-1].match.fn&&t[e-1]:t[e-1],o=n.end>e+1?t[e+1]&&null===t[e+1].match.fn&&t[e+1]:t[e+1];return r&&o}return!1}var s=t.begin!==i?t.begin:t,l=t.end!==i?t.end:t;if(t.begin>t.end&&(s=t.end,l=t.begin),r=r!==i?r:s,s!==l||p.insertMode&&E().validPositions[r]!==i&&a===i){var u=e.extend(!0,{},E().validPositions),c=O(i,!0);for(E().p=s,g=c;g>=s;g--)E().validPositions[g]&&"+"===E().validPositions[g].match.nativeDef&&(p.isNegative=!1),delete E().validPositions[g];var f=!0,m=r,d=(E().validPositions,!1),h=m,g=m;for(n&&(E().validPositions[r]=e.extend(!0,{},n),h++,m++,s<l&&g++);g<=c;g++){var v=u[g];if(v!==i&&(g>=l||g>=s&&!0!==v.generatedInput&&o(g,u,{begin:s,end:l}))){for(;""!==T(h).match.def;){if(!1===d&&u[h]&&u[h].match.nativeDef===v.match.nativeDef)E().validPositions[h]=e.extend(!0,{},u[h]),E().validPositions[h].input=v.input,K(i,h,!0),m=h+1,f=!0;else if(N(h,v.match.def)){var k=V(h,v.input,!0,!0);f=!1!==k,m=k.caret||k.insert?O():h+1,d=!0}else if(!(f=!0===v.generatedInput||v.input===p.radixPoint&&!0===p.numericInput)&&""===T(h).match.def)break;if(f)break;h++}""==T(h).match.def&&(f=!1),h=m}if(!f)break}if(!f)return E().validPositions=e.extend(!0,{},u),w(!0),!1}else n&&(E().validPositions[r]=e.extend(!0,{},n));return w(!0),!0}function z(e,t){var n=F(e).match;if(""===n.def&&(n=T(e).match),null!=n.fn)return n.fn;if(!0!==t&&e>-1){var i=R(e);return i.length>1+(""===i[i.length-1].match.def?1:0)}return!1}function Q(e,t){for(var n=e+1;""!==T(n).match.def&&(!0===t&&(!0!==T(n).match.newBlockMarker||!z(n))||!0!==t&&!z(n));)n++;return n}function q(e,t){var n,i=e;if(i<=0)return 0;for(;--i>0&&(!0===t&&!0!==T(i).match.newBlockMarker||!0!==t&&!z(i)&&((n=R(i)).length<2||2===n.length&&""===n[1].match.def)););return i}function W(t,n,a,r,o){if(r&&e.isFunction(p.onBeforeWrite)){var s=p.onBeforeWrite.call(k,r,n,a,p);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;B(!0===l?l:l.start,l.end,s.buffer||n),n=I(!0)}a!==i&&(a=s.caret!==i?s.caret:a)}}t!==i&&(t.inputmask._valueSet(n.join("")),a===i||r!==i&&"blur"===r.type?le(t,a,0===n.length):ne(t,a),!0===o&&(P=!0,e(t).trigger("input")))}function $(t,n,a){if((n=n||T(t).match).placeholder!==i||!0===a)return e.isFunction(n.placeholder)?n.placeholder(p):n.placeholder;if(null===n.fn){if(t>-1&&E().validPositions[t]===i){var r,o=R(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===i||!1!==o[l].match.fn.test(r.match.def,E(),t,!0,p))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return p.placeholder.charAt(t%p.placeholder.length)}return n.def}return p.placeholder.charAt(t%p.placeholder.length)}var Z,J={on:function(t,n,a){var s=function(t){var n=this;if(n.inputmask===i&&"FORM"!==this.nodeName){var s=e.data(n,"_inputmask_opts");s?new u(s).mask(n):J.off(n)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(n.disabled||n.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===p.tabThrough&&t.keyCode===u.keyCode.TAB))){switch(t.type){case"input":if(!0===P)return P=!1,t.preventDefault();r&&(C=!0);break;case"keydown":x=!1,P=!1;break;case"keypress":if(!0===x)return t.preventDefault();x=!0;break;case"click":if(o||l){var c=arguments;return setTimeout(function(){a.apply(n,c)},0),!1}}var f=a.apply(n,arguments);return C&&(C=!1,setTimeout(function(){ne(n,n.inputmask.caretPos,i,!0)})),!1===f&&(t.preventDefault(),t.stopPropagation()),f}t.preventDefault()}};t.inputmask.events[n]=t.inputmask.events[n]||[],t.inputmask.events[n].push(s),-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).on(n,s):e(t).on(n,s)},off:function(t,n){var i;t.inputmask&&t.inputmask.events&&(n?(i=[])[n]=t.inputmask.events[n]:i=t.inputmask.events,e.each(i,function(n,i){for(;i.length>0;){var a=i.pop();-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).off(n,a):e(t).off(n,a)}delete t.inputmask.events[n]}))}},Y={keydownEvent:function(t){var n=this,i=e(n),a=t.keyCode,r=ne(n);if(a===u.keyCode.BACKSPACE||a===u.keyCode.DELETE||l&&a===u.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&a===u.keyCode.X&&!f("cut"))t.preventDefault(),oe(n,a,r),W(n,I(!0),E().p,t,n.inputmask._valueGet()!==I().join("")),n.inputmask._valueGet()===G().join("")?i.trigger("cleared"):!0===re(I())&&i.trigger("complete");else if(a===u.keyCode.END||a===u.keyCode.PAGE_DOWN){t.preventDefault();var o=Q(O());p.insertMode||o!==E().maskLength||t.shiftKey||o--,ne(n,t.shiftKey?r.begin:o,o,!0)}else a===u.keyCode.HOME&&!t.shiftKey||a===u.keyCode.PAGE_UP?(t.preventDefault(),ne(n,0,t.shiftKey?r.begin:0,!0)):(p.undoOnEscape&&a===u.keyCode.ESCAPE||90===a&&t.ctrlKey)&&!0!==t.altKey?(X(n,!0,!1,d.split("")),i.trigger("click")):a!==u.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===p.tabThrough&&a===u.keyCode.TAB?(!0===t.shiftKey?(null===T(r.begin).match.fn&&(r.begin=Q(r.begin)),r.end=q(r.begin,!0),r.begin=q(r.end,!0)):(r.begin=Q(r.begin,!0),r.end=Q(r.begin,!0),r.end<E().maskLength&&r.end--),r.begin<E().maskLength&&(t.preventDefault(),ne(n,r.begin,r.end))):t.shiftKey||!1===p.insertMode&&(a===u.keyCode.RIGHT?setTimeout(function(){var e=ne(n);ne(n,e.begin)},0):a===u.keyCode.LEFT&&setTimeout(function(){var e=ne(n);ne(n,b?e.begin+1:e.begin-1)},0)):(p.insertMode=!p.insertMode,ne(n,p.insertMode||r.begin!==E().maskLength?r.begin:r.begin-1));p.onKeyDown.call(this,t,I(),ne(n).begin,p),S=-1!==e.inArray(a,p.ignorables)},keypressEvent:function(t,n,a,r,o){var s=this,l=e(s),c=t.which||t.charCode||t.keyCode;if(!(!0===n||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||S))return c===u.keyCode.ENTER&&d!==I().join("")&&(d=I().join(""),setTimeout(function(){l.trigger("change")},0)),!0;if(c){46===c&&!1===t.shiftKey&&""!==p.radixPoint&&(c=p.radixPoint.charCodeAt(0));var f,m=n?{begin:o,end:o}:ne(s),h=String.fromCharCode(c),g=0;if(p._radixDance&&p.numericInput){var v=I().indexOf(p.radixPoint.charAt(0))+1;m.begin<=v&&(c===p.radixPoint.charCodeAt(0)&&(g=1),m.begin-=1,m.end-=1)}E().writeOutBuffer=!0;var k=V(m,h,r);if(!1!==k&&(w(!0),f=k.caret!==i?k.caret:Q(k.pos.begin?k.pos.begin:k.pos),E().p=f),f=(p.numericInput&&k.caret===i?q(f):f)+g,!1!==a&&(setTimeout(function(){p.onKeyValidation.call(s,c,k,p)},0),E().writeOutBuffer&&!1!==k)){var y=I();W(s,y,f,t,!0!==n),!0!==n&&setTimeout(function(){!0===re(y)&&l.trigger("complete")},0)}if(t.preventDefault(),n)return!1!==k&&(k.forwardPosition=f),k}},pasteEvent:function(n){var i,a=this,r=n.originalEvent||n,o=e(a),s=a.inputmask._valueGet(!0),l=ne(a);b&&(i=l.end,l.end=l.begin,l.begin=i);var u=s.substr(0,l.begin),c=s.substr(l.end,s.length);if(u===(b?G().reverse():G()).slice(0,l.begin).join("")&&(u=""),c===(b?G().reverse():G()).slice(l.end).join("")&&(c=""),b&&(i=u,u=c,c=i),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+c;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+c}var f=s;if(e.isFunction(p.onBeforePaste)){if(!1===(f=p.onBeforePaste.call(k,s,p)))return n.preventDefault();f||(f=s)}return X(a,!1,!1,b?f.split("").reverse():f.toString().split("")),W(a,I(),Q(O()),n,d!==I().join("")),!0===re(I())&&o.trigger("complete"),n.preventDefault()},inputFallBackEvent:function(t){var n,i,a=this,r=a.inputmask._valueGet();if(I().join("")!==r){var s=ne(a);if(i=s,"."===(n=r).charAt(i.begin-1)&&""!==p.radixPoint&&((n=n.split(""))[i.begin-1]=p.radixPoint.charAt(0),n=n.join("")),r=function(e,t,n){if(o){var i=t.replace(I().join(""),"");if(1===i.length){var a=t.split("");a.splice(n.begin,0,i),t=a.join("")}}return t}(0,r=n,s),I().join("")!==r){var l=I().join(""),c=!p.numericInput&&r.length>l.length?-1:0,f=r.substr(0,s.begin),m=r.substr(s.begin),d=l.substr(0,s.begin+c),h=l.substr(s.begin+c),g=s,v="",k=!1;if(f!==d){for(var y=(k=f.length>=d.length)?f.length:d.length,b=0;f.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===c&&(g.begin=b),v+=f.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===p.radixPoint||""!==m||f.charAt(g.begin+c-1)!==p.radixPoint||(g.begin--,v=p.radixPoint))),W(a,I(),{begin:g.begin+c,end:g.end+c}),v.length>0)e.each(v.split(""),function(t,n){var i=new e.Event("keypress");i.which=n.charCodeAt(0),S=!1,Y.keypressEvent.call(a,i)});else{g.begin===g.end-1&&(g.begin=q(g.begin+1),g.begin===g.end-1?ne(a,g.begin):ne(a,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=p.numericInput?u.keyCode.BACKSPACE:u.keyCode.DELETE,Y.keydownEvent.call(a,x),!1===p.insertMode&&ne(a,ne(a).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var n=(n=t&&t.detail?t.detail[0]:arguments[1])||this.inputmask._valueGet(!0);e.isFunction(p.onBeforeMask)&&(n=p.onBeforeMask.call(k,n,p)||n),n=n.split(""),X(this,!0,!1,b?n.reverse():n),d=I().join(""),(p.clearMaskOnLostFocus||p.clearIncomplete)&&this.inputmask._valueGet()===G().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,n=t.inputmask._valueGet();p.showMaskOnFocus&&(!p.showMaskOnHover||p.showMaskOnHover&&""===n)&&(t.inputmask._valueGet()!==I().join("")?W(t,I(),Q(O())):!1===A&&ne(t,Q(O()))),!0===p.positionCaretOnTab&&!1===A&&Y.clickEvent.apply(t,[e,!0]),d=I().join("")},mouseleaveEvent:function(e){if(A=!1,p.clearMaskOnLostFocus&&n.activeElement!==this){var t=I().slice(),i=this.inputmask._valueGet();i!==this.getAttribute("placeholder")&&""!==i&&(-1===O()&&i===G().join("")?t=[]:ae(t),W(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(n.activeElement===r){var t=ne(r);if(a&&(b?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(p.positionCaretOnClick){case"none":break;case"select":ne(r,0,I().length);break;case"radixFocus":if(function(t){if(""!==p.radixPoint){var n=E().validPositions;if(n[t]===i||n[t].input===$(t)){if(t<Q(-1))return!0;var a=e.inArray(p.radixPoint,I());if(-1!==a){for(var r in n)if(a<r&&n[r].input!==$(r))return!1;return!0}}}return!1}(t.begin)){var o=I().join("").indexOf(p.radixPoint);ne(r,p.numericInput?Q(o):o);break}default:var s=t.begin,l=O(s,!0),u=Q(l);if(s<u)ne(r,z(s,!0)||z(s-1,!0)?s:Q(s));else{var c=E().validPositions[l],f=F(u,c?c.match.locator:i,c),m=$(u,f.match);if(""!==m&&I()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!z(u,!0)&&f.match.def===m){var d=Q(u);(s>=d||s===u)&&(u=d)}ne(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){ne(t,0,Q(O()))},0)},cutEvent:function(i){var a=this,r=e(a),o=ne(a),s=i.originalEvent||i,l=t.clipboardData||s.clipboardData,c=b?I().slice(o.end,o.begin):I().slice(o.begin,o.end);l.setData("text",b?c.reverse().join(""):c.join("")),n.execCommand&&n.execCommand("copy"),oe(a,u.keyCode.DELETE,o),W(a,I(),E().p,i,d!==I().join("")),a.inputmask._valueGet()===G().join("")&&r.trigger("cleared")},blurEvent:function(t){var n=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=I().slice();""===a&&v===i||(p.clearMaskOnLostFocus&&(-1===O()&&a===G().join("")?r=[]:ae(r)),!1===re(r)&&(setTimeout(function(){n.trigger("incomplete")},0),p.clearIncomplete&&(w(),r=p.clearMaskOnLostFocus?[]:G().slice())),W(this,r,i,t)),d!==I().join("")&&(d=r.join(""),n.trigger("change"))}},mouseenterEvent:function(e){A=!0,n.activeElement!==this&&p.showMaskOnHover&&this.inputmask._valueGet()!==I().join("")&&W(this,I())},submitEvent:function(e){d!==I().join("")&&h.trigger("change"),p.clearMaskOnLostFocus&&-1===O()&&y.inputmask._valueGet&&y.inputmask._valueGet()===G().join("")&&y.inputmask._valueSet(""),p.clearIncomplete&&!1===re(I())&&y.inputmask._valueSet(""),p.removeMaskOnSubmit&&(y.inputmask._valueSet(y.inputmask.unmaskedvalue(),!0),setTimeout(function(){W(y,I())},0))},resetEvent:function(e){y.inputmask.refreshValue=!0,setTimeout(function(){h.trigger("setvalue")},0)}};function X(t,n,a,r,o){var s=r.slice(),l="",c=-1,f=i;if(w(),a||!0===p.autoUnmask)c=Q(c);else{var m=G().slice(0,Q(-1)).join(""),d=s.join("").match(new RegExp("^"+u.escapeRegex(m),"g"));d&&d.length>0&&(s.splice(0,d.length*m.length),c=Q(c))}-1===c?(E().p=Q(c),c=0):E().p=c,e.each(s,function(n,r){if(r!==i)if(E().validPositions[n]===i&&s[n]===$(n)&&z(n,!0)&&!1===V(n,s[n],!0,i,i,!0))E().p++;else{var o=new e.Event("_checkval");o.which=r.charCodeAt(0),l+=r;var u=O(i,!0),m=T(u),d=F(u+1,m?m.locator.slice():i,u);if(g=c,v=l,-1===M(!0,0,!1).slice(g,Q(g)).join("").indexOf(v)||z(g)||T(g).match.nativeDef!==v.charAt(0)&&(" "!==T(g).match.nativeDef||T(g+1).match.nativeDef!==v.charAt(0))||a||p.autoUnmask){var h=a?n:null==d.match.fn&&d.match.optionality&&u+1<E().p?u+1:E().p;(f=Y.keypressEvent.call(t,o,!0,!1,a,h))&&(c=h+1,l="")}else f=Y.keypressEvent.call(t,o,!0,!1,!0,u+1);W(i,I(),f.forwardPosition,o,!1)}var g,v}),n&&W(t,I(),f?f.forwardPosition:i,o||new e.Event("checkval"),o&&"input"===o.type)}function ee(t){if(t){if(t.inputmask===i)return t.value;t.inputmask&&t.inputmask.refreshValue&&Y.setValueEvent.call(t)}var n=[],a=E().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&n.push(a[r].input);var o=0===n.length?"":(b?n.reverse():n).join("");if(e.isFunction(p.onUnMask)){var s=(b?I().slice().reverse():I()).join("");o=p.onUnMask.call(k,s,o,p)}return o}function te(e){return!b||"number"!=typeof e||p.greedy&&""===p.placeholder||(e=y.inputmask._valueGet().length-e),e}function ne(a,r,o,s){var u;if(r===i)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):n.selection&&n.selection.createRange&&(o=(r=0-(u=n.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:s?r:te(r),end:s?o:te(o)};if(e.isArray(r)&&(o=b?r[0]:r[1],r=b?r[1]:r[0]),r.begin!==i&&(o=b?r.begin:r.end,r=b?r.end:r.begin),"number"==typeof r){r=s?r:te(r),o="number"==typeof(o=s?o:te(o))?o:r;var c=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=c>a.scrollWidth?c:0,l||!1!==p.insertMode||r!==o||o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=n.createRange(),a.firstChild===i||null===a.firstChild){var f=n.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());le(a,{begin:r,end:o})}}function ie(t){var n,a,r=I(),o=r.length,s=O(),l={},u=E().validPositions[s],c=u!==i?u.locator.slice():i;for(n=s+1;n<r.length;n++)c=(a=F(n,c,n-1)).locator.slice(),l[n]=e.extend(!0,{},a);var p=u&&u.alternation!==i?u.locator[u.alternation]:i;for(n=o-1;n>s&&(((a=l[n]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[n].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&L(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==R(n)[0].def))&&r[n]===$(n,a.match));n--)o--;return t?{l:o,def:l[o]?l[o].match:i}:o}function ae(e){for(var t,n=ie(),a=e.length,r=E().validPositions[O()];n<a&&!z(n,!0)&&(t=r!==i?F(n,r.locator.slice(""),r):T(n))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||n+1===a&&""===(r!==i?F(n+1,r.locator.slice(""),r):T(n+1)).match.def);)n++;for(;(t=E().validPositions[n-1])&&t&&t.match.optionality&&t.input===p.skipOptionalPartCharacter;)n--;return e.splice(n),e}function re(t){if(e.isFunction(p.isComplete))return p.isComplete(t,p);if("*"===p.repeat)return i;var n=!1,a=ie(!0),r=q(a.l);if(a.def===i||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){n=!0;for(var o=0;o<=r;o++){var s=F(o).match;if(null!==s.fn&&E().validPositions[o]===i&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==$(o,s)){n=!1;break}}}return n}function oe(e,t,n,a,r){if((p.numericInput||b)&&(t===u.keyCode.BACKSPACE?t=u.keyCode.DELETE:t===u.keyCode.DELETE&&(t=u.keyCode.BACKSPACE),b)){var o=n.end;n.end=n.begin,n.begin=o}if(t===u.keyCode.BACKSPACE&&(n.end-n.begin<1||!1===p.insertMode)?(n.begin=q(n.begin),E().validPositions[n.begin]!==i&&E().validPositions[n.begin].input===p.groupSeparator&&n.begin--,!1===p.insertMode&&n.end!==E().maskLength&&n.end--):t===u.keyCode.DELETE&&n.begin===n.end&&(n.end=z(n.end,!0)&&E().validPositions[n.end]&&E().validPositions[n.end].input!==p.radixPoint?n.end+1:Q(n.end)+1,E().validPositions[n.begin]!==i&&E().validPositions[n.begin].input===p.groupSeparator&&n.end++),U(n),!0!==a&&null!==p.keepStatic&&!1!==p.keepStatic){var s=H(!0);s&&(n.begin=s.caret!==i?s.caret:s.pos?Q(s.pos.begin?s.pos.begin:s.pos):O(-1,!0))}var l=O(n.begin,!0);if(l<n.begin||-1===n.begin)E().p=Q(l);else if(!0!==a&&(E().p=n.begin,!0!==r))for(;E().p<l&&E().validPositions[E().p]===i;)E().p++}function se(i){var a=(i.ownerDocument.defaultView||t).getComputedStyle(i,null);var r=n.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,v=n.createElement("div"),i.inputmask.colorMask=v,v.className="im-colormask",i.parentNode.insertBefore(v,i),i.parentNode.removeChild(i),v.appendChild(i),v.appendChild(r),i.style.left=r.offsetLeft+"px",e(v).on("mouseleave",function(e){return Y.mouseleaveEvent.call(i,[e])}),e(v).on("mouseenter",function(e){return Y.mouseenterEvent.call(i,[e])}),e(v).on("click",function(e){return ne(i,function(e){var t,r=n.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",n.body.appendChild(r);var s,l=i.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return n.body.removeChild(r),t}(e.clientX)),Y.clickEvent.call(i,[e])}),e(i).on("keydown",function(e){e.shiftKey||!1===p.insertMode||setTimeout(function(){le(i)},0)})}function le(e,t,a){var r,o,s,l=[],u=!1,c=0;function f(e){if(e===i&&(e=""),u||null!==r.fn&&o.input!==i)if(u&&(null!==r.fn&&o.input!==i||""===r.def)){u=!1;var t=l.length;l[t-1]=l[t-1]+"</span>",l.push(e)}else l.push(e);else u=!0,l.push("<span class='im-static'>"+e)}if(v!==i){var m=I();if(t===i?t=ne(e):t.begin===i&&(t={begin:t,end:t}),!0!==a){var d=O();do{E().validPositions[c]?(o=E().validPositions[c],r=o.match,s=o.locator.slice(),f(m[c])):(o=F(c,s,c-1),r=o.match,s=o.locator.slice(),(!1===p.jitMasking||c<d||"number"==typeof p.jitMasking&&isFinite(p.jitMasking)&&p.jitMasking>c)&&f($(c,r))),c++}while((g===i||c<g)&&(null!==r.fn||""!==r.def)||d>c||u);u&&f(),n.activeElement===e&&(l.splice(t.begin,0,t.begin===t.end||t.end>E().maskLength?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),l.splice(t.end+1,0,"</mark>"))}var h=v.getElementsByTagName("div")[0];h.innerHTML=l.join(""),e.inputmask.positionColorMask(e,h)}}if(u.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},a!==i)switch(a.action){case"isComplete":return y=a.el,re(I());case"unmaskedvalue":return y!==i&&a.value===i||(Z=a.value,Z=(e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,Z,p)||Z).split(""),X(i,!1,!1,b?Z.reverse():Z),e.isFunction(p.onBeforeWrite)&&p.onBeforeWrite.call(k,i,I(),0,p)),ee(y);case"mask":!function(t){J.off(t);var a=function(t,a){var r=t.getAttribute("type"),o="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!o)if("INPUT"===t.tagName){var l=n.createElement("input");l.setAttribute("type",r),o="text"===l.type,l=null}else o="partial";return!1!==o?function(t){var r,o,l;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==O()||!0!==a.nullable?n.activeElement===this&&a.clearMaskOnLostFocus?(b?ae(I().slice()).reverse():ae(I().slice())).join(""):r.call(this):"":r.call(this)}function c(t){o.call(this,t),this.inputmask&&e(this).trigger("setvalue",[t])}if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===s("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):i;p&&p.get&&p.set?(r=p.get,o=p.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"INPUT"!==t.tagName&&(r=function(){return this.textContent},o=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else n.__lookupGetter__&&t.__lookupGetter__("value")&&(r=t.__lookupGetter__("value"),o=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=r,t.inputmask.__valueSet=o}t.inputmask._valueGet=function(e){return b&&!0!==e?r.call(this.el).split("").reverse().join(""):r.call(this.el)},t.inputmask._valueSet=function(e,t){o.call(this.el,null===e||e===i?"":!0!==t&&b?e.split("").reverse().join(""):e)},r===i&&(r=function(){return this.value},o=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===i||!0!==e.valHooks[t].inputmaskpatch)){var n=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==O(i,i,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return n(e)},set:function(t,n){var i,a=e(t);return i=r(t,n),t.inputmask&&a.trigger("setvalue",[n]),i},inputmaskpatch:!0}}}(t.type),l=t,J.on(l,"mouseenter",function(t){var n=e(this);this.inputmask._valueGet()!==I().join("")&&n.trigger("setvalue")}))}}(t):t.inputmask=i,o}(t,p);if(!1!==a&&(h=e(y=t),-1===(g=y!==i?y.maxLength:i)&&(g=i),!0===p.colorMask&&se(y),r&&("inputmode"in y&&(y.inputmode=p.inputmode,y.setAttribute("inputmode",p.inputmode)),!0===p.disablePredictiveText&&("autocorrect"in y?y.autocorrect=!1:(!0!==p.colorMask&&se(y),y.type="password"))),!0===a&&(J.on(y,"submit",Y.submitEvent),J.on(y,"reset",Y.resetEvent),J.on(y,"blur",Y.blurEvent),J.on(y,"focus",Y.focusEvent),!0!==p.colorMask&&(J.on(y,"click",Y.clickEvent),J.on(y,"mouseleave",Y.mouseleaveEvent),J.on(y,"mouseenter",Y.mouseenterEvent)),J.on(y,"dblclick",Y.dblclickEvent),J.on(y,"paste",Y.pasteEvent),J.on(y,"dragdrop",Y.pasteEvent),J.on(y,"drop",Y.pasteEvent),J.on(y,"cut",Y.cutEvent),J.on(y,"complete",p.oncomplete),J.on(y,"incomplete",p.onincomplete),J.on(y,"cleared",p.oncleared),r||!0===p.inputEventOnly?y.removeAttribute("maxLength"):(J.on(y,"keydown",Y.keydownEvent),J.on(y,"keypress",Y.keypressEvent)),J.on(y,"compositionstart",e.noop),J.on(y,"compositionupdate",e.noop),J.on(y,"compositionend",e.noop),J.on(y,"keyup",e.noop),J.on(y,"input",Y.inputFallBackEvent),J.on(y,"beforeinput",e.noop)),J.on(y,"setvalue",Y.setValueEvent),d=G().join(""),""!==y.inputmask._valueGet(!0)||!1===p.clearMaskOnLostFocus||n.activeElement===y)){var o=e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,y.inputmask._valueGet(!0),p)||y.inputmask._valueGet(!0);""!==o&&X(y,!0,!1,b?o.split("").reverse():o.split(""));var l=I().slice();d=l.join(""),!1===re(l)&&p.clearIncomplete&&w(),p.clearMaskOnLostFocus&&n.activeElement!==y&&(-1===O()?l=[]:ae(l)),W(y,l),n.activeElement===y&&ne(y,Q(O()))}}(y);break;case"format":return Z=(e.isFunction(p.onBeforeMask)&&p.onBeforeMask.call(k,a.value,p)||a.value).split(""),X(i,!0,!1,b?Z.reverse():Z),a.metadata?{value:b?I().slice().reverse().join(""):I().join(""),metadata:m.call(this,{action:"getmetadata"},c,p)}:b?I().slice().reverse().join(""):I().join("");case"isValid":a.value?(Z=a.value.split(""),X(i,!0,!0,b?Z.reverse():Z)):a.value=I().join("");for(var ue=I(),ce=ie(),pe=ue.length-1;pe>ce&&!z(pe);pe--);return ue.splice(ce,pe+1-ce),re(ue)&&a.value===I().join("");case"getemptymask":return G().join("");case"remove":if(y&&y.inputmask)e.data(y,"_inputmask_opts",null),h=e(y),y.inputmask._valueSet(p.autoUnmask?ee(y):y.inputmask._valueGet(!0)),J.off(y),y.inputmask.colorMask&&((v=y.inputmask.colorMask).removeChild(y),v.parentNode.insertBefore(y,v),v.parentNode.removeChild(v)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y),"value")&&y.inputmask.__valueGet&&Object.defineProperty(y,"value",{get:y.inputmask.__valueGet,set:y.inputmask.__valueSet,configurable:!0}):n.__lookupGetter__&&y.__lookupGetter__("value")&&y.inputmask.__valueGet&&(y.__defineGetter__("value",y.inputmask.__valueGet),y.__defineSetter__("value",y.inputmask.__valueSet)),y.inputmask=i;return y;case"getmetadata":if(e.isArray(c.metadata)){var fe=M(!0,0,!1).join("");return e.each(c.metadata,function(e,t){if(t.mask===fe)return fe=t,!1}),fe}return c.metadata}}return u.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,n){return e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(this,t,n):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:i,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9１-９]",definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"}},aliases:{},masksCache:{},mask:function(a){var r=this;return"string"==typeof a&&(a=n.getElementById(a)||n.querySelectorAll(a)),a=a.nodeName?[a]:a,e.each(a,function(n,a){var o=e.extend(!0,{},r.opts);if(function(n,a,r,o){if(!0===a.importDataAttributes){var s,l,u,p,f=function(e,a){null!==(a=a!==i?a:n.getAttribute(o+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),r[e]=a)},m=n.getAttribute(o);if(m&&""!==m&&(m=m.replace(/'/g,'"'),l=JSON.parse("{"+m+"}")),l)for(p in u=i,l)if("alias"===p.toLowerCase()){u=l[p];break}for(s in f("alias",u),r.alias&&c(r.alias,r,a),a){if(l)for(p in u=i,l)if(p.toLowerCase()===s.toLowerCase()){u=l[p];break}f(s,u)}}return e.extend(!0,a,r),("rtl"===n.dir||a.rightAlign)&&(n.style.textAlign="right"),("rtl"===n.dir||a.numericInput)&&(n.dir="ltr",n.removeAttribute("dir"),a.isRTL=!0),Object.keys(r).length}(a,o,e.extend(!0,{},r.userOptions),r.dataAttribute)){var s=p(o,r.noMasksCache);s!==i&&(a.inputmask!==i&&(a.inputmask.opts.autoUnmask=!0,a.inputmask.remove()),a.inputmask=new u(i,i,!0),a.inputmask.opts=o,a.inputmask.noMasksCache=r.noMasksCache,a.inputmask.userOptions=e.extend(!0,{},r.userOptions),a.inputmask.isRTL=o.isRTL||o.numericInput,a.inputmask.el=a,a.inputmask.maskset=s,e.data(a,"_inputmask_opts",o),m.call(a.inputmask,{action:"mask"}))}}),a&&a[0]&&a[0].inputmask||this},option:function(t,n){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":s(t))?(e.extend(this.userOptions,t),this.el&&!0!==n&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return m.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||p(this.opts,this.noMasksCache),m.call(this,{action:"format",value:e,metadata:t})},setValue:function(t){this.el&&e(this.el).trigger("setvalue",[t])},analyseMask:function(t,n,a){var r,o,s,l,c,p,f=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,m=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,d=!1,h=new k,g=[],v=[];function k(e,t,n,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function y(t,r,o){o=o!==i?o:t.matches.length;var s=t.matches[o-1];if(n)0===r.indexOf("[")||d&&/\\d|\\s|\\w]/i.test(r)||"."===r?t.matches.splice(o++,0,{fn:new RegExp(r,a.casing?"i":""),optionality:t.isOptional,newBlockMarker:s===i||s.def!==r,casing:null,def:r,placeholder:i,nativeDef:r}):(d&&(r=r[r.length-1]),e.each(r.split(""),function(e,n){s=t.matches[o-1],t.matches.splice(o++,0,{fn:null,optionality:t.isOptional,newBlockMarker:s===i||s.def!==n&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||n,placeholder:a.staticDefinitionSymbol!==i?n:i,nativeDef:n})})),d=!1;else{var l=(a.definitions?a.definitions[r]:i)||u.prototype.definitions[r];l&&!d?t.matches.splice(o++,0,{fn:l.validator?"string"==typeof l.validator?new RegExp(l.validator,a.casing?"i":""):new function(){this.test=l.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:s===i||s.def!==(l.definitionSymbol||r),casing:l.casing,def:l.definitionSymbol||r,placeholder:l.placeholder,nativeDef:r}):(t.matches.splice(o++,0,{fn:null,optionality:t.isOptional,newBlockMarker:s===i||s.def!==r&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||r,placeholder:a.staticDefinitionSymbol!==i?r:i,nativeDef:r}),d=!1)}}function b(){if(g.length>0){if(y(l=g[g.length-1],o),l.isAlternator){c=g.pop();for(var e=0;e<c.matches.length;e++)c.matches[e].isGroup&&(c.matches[e].isGroup=!1);g.length>0?(l=g[g.length-1]).matches.push(c):h.matches.push(c)}}else y(h,o)}function x(e){var t=new k(!0);return t.openGroup=!1,t.matches=e,t}for(n&&(a.optionalmarker[0]=i,a.optionalmarker[1]=i);r=n?m.exec(t):f.exec(t);){if(o=r[0],n)switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}"}if(d)b();else switch(o.charAt(0)){case a.escapeChar:d=!0,n&&b();break;case a.optionalmarker[1]:case a.groupmarker[1]:if((s=g.pop()).openGroup=!1,s!==i)if(g.length>0){if((l=g[g.length-1]).matches.push(s),l.isAlternator){c=g.pop();for(var P=0;P<c.matches.length;P++)c.matches[P].isGroup=!1,c.matches[P].alternatorGroup=!1;g.length>0?(l=g[g.length-1]).matches.push(c):h.matches.push(c)}}else h.matches.push(s);else b();break;case a.optionalmarker[0]:g.push(new k(!1,!0));break;case a.groupmarker[0]:g.push(new k(!0));break;case a.quantifiermarker[0]:var S=new k(!1,!1,!0),A=(o=o.replace(/[{}]/g,"")).split("|"),C=A[0].split(","),M=isNaN(C[0])?C[0]:parseInt(C[0]),E=1===C.length?M:isNaN(C[1])?C[1]:parseInt(C[1]);"*"!==E&&"+"!==E||(M="*"===E?0:1),S.quantifier={min:M,max:E,jit:A[1]};var w=g.length>0?g[g.length-1].matches:h.matches;if((r=w.pop()).isAlternator){w.push(r),w=r.matches;var O=new k(!0),D=w.pop();w.push(O),w=O.matches,r=D}r.isGroup||(n&&null===r.fn&&"."===r.def&&(r.fn=new RegExp(r.def,a.casing?"i":"")),r=x([r])),w.push(r),w.push(S);break;case a.alternatormarker:var _=function(e){var t=e.pop();return t.isQuantifier&&(t=x([e.pop(),t])),t};if(g.length>0){var j=(l=g[g.length-1]).matches[l.matches.length-1];p=l.openGroup&&(j.matches===i||!1===j.isGroup&&!1===j.isAlternator)?g.pop():_(l.matches)}else p=_(h.matches);if(p.isAlternator)g.push(p);else if(p.alternatorGroup?(c=g.pop(),p.alternatorGroup=!1):c=new k(!1,!1,!1,!0),c.matches.push(p),g.push(c),p.openGroup){p.openGroup=!1;var F=new k(!0);F.alternatorGroup=!0,g.push(F)}break;default:b()}}for(;g.length>0;)s=g.pop(),h.matches.push(s);return h.matches.length>0&&(!function t(r){r&&r.matches&&e.each(r.matches,function(e,o){var s=r.matches[e+1];(s===i||s.matches===i||!1===s.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,n||(y(o,a.groupmarker[0],0),!0!==o.openGroup&&y(o,a.groupmarker[1]))),t(o)})}(h),v.push(h)),(a.numericInput||a.isRTL)&&function e(t){for(var n in t.matches=t.matches.reverse(),t.matches)if(t.matches.hasOwnProperty(n)){var r=parseInt(n);if(t.matches[n].isQuantifier&&t.matches[r+1]&&t.matches[r+1].isGroup){var o=t.matches[n];t.matches.splice(n,1),t.matches.splice(r+1,0,o)}t.matches[n].matches!==i?t.matches[n]=e(t.matches[n]):t.matches[n]=((s=t.matches[n])===a.optionalmarker[0]?s=a.optionalmarker[1]:s===a.optionalmarker[1]?s=a.optionalmarker[0]:s===a.groupmarker[0]?s=a.groupmarker[1]:s===a.groupmarker[1]&&(s=a.groupmarker[0]),s)}var s;return t}(v[0]),v}},u.extendDefaults=function(t){e.extend(!0,u.prototype.defaults,t)},u.extendDefinitions=function(t){e.extend(!0,u.prototype.definitions,t)},u.extendAliases=function(t){e.extend(!0,u.prototype.aliases,t)},u.format=function(e,t,n){return u(t).format(e,n)},u.unmask=function(e,t){return u(t).unmaskedvalue(e)},u.isValid=function(e,t){return u(t).isValid(e)},u.remove=function(t){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},u.setValue=function(t,i){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(t,n){n.inputmask?n.inputmask.setValue(i):e(n).trigger("setvalue",[i])})},u.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},u.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},u},a=[n(0),n(5),n(6)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";n(4),n(7),n(8),n(9);var i=o(n(1)),a=o(n(0)),r=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}a.default===r.default&&n(10),window.Inputmask=i.default},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){var n={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return o(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return o(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return o(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return o(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return o(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return o(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return o(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return o(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return o(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return o(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},i={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function a(e){if(!e.tokenizer){var t=[];for(var i in n)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function r(e,i,r){for(var o,s="";o=a(r).exec(e);){if(void 0===i)s+=n[o[0]]?"("+n[o[0]][0]+")":t.escapeRegex(o[0]);else if(n[o[0]])s+=n[o[0]][3].call(i.date);else s+=o[0]}return s}function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function s(e,t,i){var r,o,s,l={date:new Date(1,0,1)},u=e;function c(e,t,n){var a,o;"year"===r?(e[r]=(o=4===(a=t).length?a:(new Date).getFullYear().toString().substr(0,4-a.length)+a,i.min&&i.min.year&&i.max&&i.max.year?(o=o.replace(/[^0-9]/g,""),o+=i.min.year==i.max.year?i.min.year.substr(o.length):(""!==o&&0==i.max.year.indexOf(o)?parseInt(i.max.year)-1:parseInt(i.min.year)+1).toString().substr(o.length)):o=o.replace(/[^0-9]/g,"0"),o),e["raw"+r]=t):e[r]=n.min&&t.match(/[^0-9]/)?n.min[r]:t,void 0!==s&&s.call(e.date,"month"==r?parseInt(e[r])-1:e[r])}if("string"==typeof u){for(;o=a(i).exec(t);){var p=u.slice(0,o[0].length);n.hasOwnProperty(o[0])&&(r=n[o[0]][2],s=n[o[0]][1],c(l,p,i)),u=u.slice(p.length)}return l}}return t.extendAliases({datetime:{mask:function(e){return n.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=i[e.inputFormat]||e.inputFormat,e.displayFormat=i[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=i[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat,e.min=s(e.min,e.inputFormat,e),e.max=s(e.max,e.inputFormat,e),e.regex=r(e.inputFormat,void 0,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},postValidation:function(e,t,n){var i,a,r,o,l,u=t,c=s(e.join(""),n.inputFormat,n);return u&&c.date.getTime()==c.date.getTime()&&(o=c,l=u,u=(u=(!isFinite(o.day)||"29"==o.day&&!isFinite(o.rawyear)||new Date(o.date.getFullYear(),isFinite(o.month)?o.month:o.date.getMonth()+1,0).getDate()>=o.day)&&l)&&(i=c,r=!0,(a=n).min&&a.min.date.getTime()==a.min.date.getTime()&&(r=a.min.date.getTime()<=i.date.getTime()),r&&a.max&&a.max.date.getTime()==a.max.date.getTime()&&(r=a.max.date.getTime()>=i.date.getTime()),r)),u},onKeyDown:function(n,i,r,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=a(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=o(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=o(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=o(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,n){return r(n.outputFormat,s(e,n.inputFormat,n),n)},casing:function(e,t,n,i){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},insertMode:!1}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i;"function"==typeof Symbol&&Symbol.iterator;void 0===(i=function(){return window}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){"use strict";var i;"function"==typeof Symbol&&Symbol.iterator;void 0===(i=function(){return document}.call(t,n,t,e))||(e.exports=i)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,n,i,a){return n-1>-1&&"."!==t.buffer[n-1]?(e=t.buffer[n-1]+e,e=n-2>-1&&"."!==t.buffer[n-2]?t.buffer[n-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,n){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t,n){function i(e,n){for(var i="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||n.definitions[e.charAt(a)]||n.optionalmarker.start===e.charAt(a)||n.optionalmarker.end===e.charAt(a)||n.quantifiermarker.start===e.charAt(a)||n.quantifiermarker.end===e.charAt(a)||n.groupmarker.start===e.charAt(a)||n.groupmarker.end===e.charAt(a)||n.alternatormarker===e.charAt(a)?i+="\\"+e.charAt(a):i+=e.charAt(a);return i}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=n),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=i(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==n){var o=e.decimalProtect?":":e.radixPoint,s=e.digits.toString().split(",");isFinite(s[0])&&s[1]&&isFinite(s[1])?r+=o+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+o+";{1,"+e.digits+"}]":r+=o+";{"+e.digits+"}")}return r+=i(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,i,a,r,o,s){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===n||!o.isNegative,""===t.join("")||{caret:i,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==n&&(isNaN(o.digits)||parseInt(o.digits)>0)){var l=e.inArray(o.radixPoint,t);if(-1!==l&&s.validPositions[l]!==n)return!0===o.numericInput?i===l:{caret:l+1}}return!0},postValidation:function(i,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===n&&a.caret!==n&&!0!==a.dopost)return a;var l=a.caret!==n?a.caret:a.pos,u=i.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==n&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==n&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==n&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===n&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var n="";if(n+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var i=e.join("").split(t.radixPoint);i[1]&&(n+=t.radixPoint+"*{"+i[1].match(/^\d*\??\d*/)[0].length+"}")}return n}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==n)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===n||a.pos!==n?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||i.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(i,a,r,o){if(i)switch(i.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===n&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),n,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,n){return n?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,i,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&i.validPositions[a]!==n&&"~"===i.validPositions[a].match.def&&!s){var u=i.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=i._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===n?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||i.validPositions[a-1]!==n||(l={insert:{pos:a,c:0},pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,n,i,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,n,i,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,n,i,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&n.validPositions[i]&&n.validPositions[i].match.placeholder===r.radixPoint&&(s={caret:i+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,n,i){if(""===n&&!0===i.nullable)return n;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(i.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(i.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,n){var i=e.join("");if(e.slice().join("")!==i)return!1;var a=i.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator)+"([0-9]{3})","g"),"$1"),","===n.radixPoint&&(a=a.replace(t.escapeRegex(n.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,i){if(i.isNegative=n,"number"==typeof e&&""!==i.radixPoint&&(e=e.toString().replace(".",i.radixPoint)),e=e.toString().charAt(e.length-1)===i.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==i.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==i.groupSeparator?parseInt(i.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",i.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",i.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",i.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),0===i.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==i.radixPoint&&isFinite(i.digits)&&-1!==e.indexOf(i.radixPoint)){var l=e.split(i.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(i.digits)<l.toString().length){var u=Math.pow(10,parseInt(i.digits));e=e.replace(t.escapeRegex(i.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",i.radixPoint)}}return e},onKeyDown:function(n,i,a,r){var o=e(this);if(n.ctrlKey)switch(n.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o;"function"==typeof Symbol&&Symbol.iterator;o=function(e,t){function n(e,t){var n=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),i=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return n.localeCompare(i)}var i=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,n,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(n,i,a){i=i||"",a=a||r,""!==i&&(a[i]={});for(var o="",s=a[i]||a,l=n.length-1;l>=0;l--)s[o=(t=n[l].mask||n[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),n.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(n){var i="",r=[];for(var o in n)e.isArray(n[o])?1===n[o].length?r.push(o+n[o]):r.push(o+a.groupmarker[0]+n[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(n[o]));return 1===r.length?i+=r[0]:i+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],i}(r)),t=t.replace(/9/g,"\\9")),i.call(this,t,n,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(n)},onBeforeMask:function(e,t){var n=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(n.indexOf(t.countrycode)>1||-1===n.indexOf(t.countrycode))&&(n="+"+t.countrycode+n),n},onUnMask:function(e,t,n){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t},a=[n(0),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)},function(e,t,n){"use strict";var i,a,r,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(n,i){var a,r=this[0];if(void 0===i&&(i={}),"string"==typeof n)switch(n){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":t.setValue(r,i);break;case"option":if("string"!=typeof i)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i)});if(r&&void 0!==r.inputmask)return r.inputmask.option(i);break;default:return i.alias=n,a=new t(i),this.each(function(){a.mask(this)})}else{if("object"==(void 0===n?"undefined":s(n)))return a=new t(n),void 0===n.mask&&void 0===n.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===n)return this.each(function(){(a=new t(i)).mask(this)})}}),e.fn.inputmask},a=[n(2),n(1)],void 0===(r="function"==typeof(i=o)?i.apply(t,a):i)||(e.exports=r)}]);;
$(".popup_callback__input.popup_callback__input--tel").inputmask("+38(999)999-99-99");
$(".popup_opt_price__input.popup_opt_price__input--tel").inputmask("+38(999)999-99-99");
$(".popup_reminder__input.popup_reminder__input--tel").inputmask("+38(999)999-99-99");
$(".breadcrumb-item").eq(-2).addClass("prev");
$(document).ready(function () {
    $('.stepper').activateStepper();
})
function validateStepOne() {
    // Extract the checked checkboxes from the first step
    if ($('.step').first().find('input[type="checkbox"]:checked').length)
        return true;
    return false;
}

function validateStepThree() {
    var validation = true;
    if ($('.step:nth-child(3) input[type="text"]').val().indexOf('materialize') === -1)
        validation = false;
    if ($('.step:nth-child(3) input[type="checkbox"]:checked').length === 0)
        validation = false;
    return validation;

}

function nextStepThreeHandler() {
    if (validateStepThree())
        $('.stepper').nextStep();
    else {
        $('.stepper ').destroyFeedback(); $('.stepper').getStep($('.stepper').getActiveStep()).addClass('wrong');
    }
}

$(".cart__submit").click(function () {
    if ($('.step').first().hasClass('active')) {
        $('.stepper').openStep(2);
        setTimeout(function () {
            $(".cart__submit").removeAttr("type")
            $(".cart__submit").text("Оформить заказ")
        }, 100);
    }
});
var firstStep = $('.step').first();
var lastStep = $('.step').last();
firstStep.click(function () {
    setTimeout(function () {
        $(".cart__submit").attr('type', 'button')
        $(".cart__submit").text("Далее")
    }, 100);
})
lastStep.click(function () {
    setTimeout(function () {
        $(".cart__submit").removeAttr("type")
        $(".cart__submit").text("Оформить заказ")
    }, 100);
})

var validation = $.isFunction($.fn.valid) ? 1 : 0;

$.fn.isValid = function () {
    if (validation) {
        return this.valid();
    } else {
        return true;
    }
};

if (validation) {
    $.validator.setDefaults({
        errorClass: 'invalid',
        validClass: "valid",
        errorPlacement: function (error, element) {
            if (element.is(':radio') || element.is(':checkbox')) {
                error.insertBefore($(element).parent());
            } else {
                error.insertAfter(element); // default error placement.
                // element.closest('label').data('error', error);
                // element.next().attr('data-error', error);
            }
        },
        success: function (element) {
            if (!$(element).closest('li').find('label.invalid:not(:empty)').length) {
                $(element).closest('li').removeClass('wrong');
            }
        }
    });

    // When parallel stepper is defined we need to consider invisible and
    // hidden fields
    if ($('.stepper.parallel').length) $.validator.setDefaults({ ignore: '' });
}

$.fn.getActiveStep = function () {
    var active = this.find('.step.active');
    return $(this.children('.step:visible')).index($(active)) + 1;
};

$.fn.activateStep = function (callback) {
    if ($(this).hasClass('step')) return;
    var stepper = $(this).closest('ul.stepper');
    stepper.find('>li').removeAttr("data-last");
    $(this).addClass("step").stop().css({ 'width': '0%', 'display': 'inherit' }).animate({ width: '100%' }, 400, function () {
        $(this).css({ 'height': 'auto', 'margin-bottom': '', 'display': 'inherit' }); if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
    });
};

$.fn.deactivateStep = function (callback) {
    if (!$(this).hasClass('step')) return;
    var stepper = $(this).closest('ul.stepper');
    stepper.find('>li').removeAttr("data-last");
    $(this).stop().animate({ width: '0%' }, 400, function () {
        $(this).removeClass("step").hide().css({ 'height': 'auto', 'margin-bottom': '', 'display': 'none', 'width': '' });
        if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
    });
};

$.fn.showError = function (error) {
    if (validation) {
        var name = this.attr('name');
        var form = this.closest('form');
        var obj = {};
        obj[name] = error;
        form.validate().showErrors(obj);
        this.closest('li').addClass('wrong');
    } else {
        this.removeClass('valid').addClass('invalid');
        this.next().attr('data-error', error);
    }
};

$.fn.activateFeedback = function () {
    var active = this.find('.step.active:not(.feedbacking)').addClass('feedbacking').find('.step-content');
    active.prepend('<div class="wait-feedback"> <div class="preloader-wrapper active"> <div class="spinner-layer spinner-blue"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-red"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-yellow"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-green"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>');
};

$.fn.destroyFeedback = function () {
    var active = this.find('.step.active.feedbacking');
    if (active) {
        active.removeClass('feedbacking');
        active.find('.wait-feedback').remove();
    }
    return true;
};

$.fn.resetStepper = function (step) {
    if (!step) step = 1;
    var form = $(this).closest('form');
    $(form)[0].reset();
    Materialize.updateTextFields();
    return $(this).openStep(step);
};

$.fn.submitStepper = function (step) {
    var form = this.closest('form');
    if (form.isValid()) {
        form.submit();
    }
};

$.fn.nextStep = function (callback, activefb, e) {
    var stepper = this;
    var settings = $(stepper).data('settings');
    var form = this.closest('form');
    var active = this.find('.step.active');
    var next = $(this.children('.step:visible')).index($(active)) + 2;
    var feedback = active.find('.next-step').length > 1 ? (e ? $(e.target).data("feedback") : undefined) : active.find('.next-step').data("feedback");
    // If the stepper is parallel, we want to validate the input of the current active step. Not all elements.
    if ((settings.parallel && $(active).validateStep()) || (!settings.parallel && form.isValid())) {
        if (feedback && activefb) {
            if (settings.showFeedbackLoader) stepper.activateFeedback();
            return window[feedback].call();
        }
        active.removeClass('wrong').addClass('done');
        this.openStep(next, callback);
        return this.trigger('nextstep');
    } else {
        return active.removeClass('done').addClass('wrong');
    }
};

$.fn.prevStep = function (callback) {
    var active = this.find('.step.active');
    if (active.hasClass('feedbacking')) return;
    var prev = $(this.children('.step:visible')).index($(active));
    active.removeClass('wrong');
    this.openStep(prev, callback);
    return this.trigger('prevstep');
};

$.fn.openStep = function (step, callback) {
    var settings = $(this).closest('ul.stepper').data('settings');
    var $this = this;
    var step_num = step - 1;
    step = this.find('.step:visible:eq(' + step_num + ')');
    if (step.hasClass('active')) return;
    var active = this.find('.step.active');
    var next;
    var prev_active = next = $(this.children('.step:visible')).index($(active));
    var order = step_num > prev_active ? 1 : 0;
    if (active.hasClass('feedbacking')) $this.destroyFeedback();
    active.closeAction(order);
    step.openAction(order, function () {
        if (settings.autoFocusInput) step.find('input:enabled:visible:first').focus();
        $this.trigger('stepchange').trigger('step' + (step_num + 1));
        if (step.data('event')) $this.trigger(step.data('event'));
        if (callback) callback();
    });
};

$.fn.closeAction = function (order, callback) {
    var closable = this.removeClass('active').find('.step-content');
    if (order == 1) {
        closable.animate({ left: '-100%' }, function () { closable.css({ display: 'none', left: '0%' }, callback); });
    } else {
        closable.animate({ left: '100%' }, function () { closable.css({ display: 'none', left: '0%' }, callback); });
    }
};

$.fn.openAction = function (order, callback) {
    var openable = this.removeClass('done').addClass('active').find('.step-content');
    if (order == 1) {
        openable.css({ left: '100%', display: 'block' }).animate({ left: '0%' }, callback);
    } else {
        openable.css({ left: '-100%', display: 'block' }).animate({ left: '0%' }, callback);
    }
};

$.fn.activateStepper = function (options) {
    var settings = $.extend({
        linearStepsNavigation: true,
        autoFocusInput: true,
        showFeedbackLoader: true,
        autoFormCreation: true,
        parallel: false // By default we don't assume the stepper is parallel
    }, options);
    $(document).on('click', function (e) {
        if (!$(e.target).parents(".stepper").length) {
            $('.stepper.focused').removeClass('focused');
        }
    });

    $(this).each(function () {
        var $stepper = $(this);
        if (!$stepper.parents("form").length && settings.autoFormCreation) {
            var method = $stepper.data('method');
            var action = $stepper.data('action');
            var method = (method ? method : "GET");
            action = (action ? action : "?");
            $stepper.wrap('<form action="' + action + '" method="' + method + '"></form>');
        }

        $stepper.data('settings', { linearStepsNavigation: settings.linearStepsNavigation, autoFocusInput: settings.autoFocusInput, showFeedbackLoader: settings.showFeedbackLoader, parallel: $stepper.hasClass('parallel') });
        $stepper.find('li.step.active').openAction(1);
        $stepper.find('>li').removeAttr("data-last");
        $stepper.find('>li.step').last().attr('data-last', 'true');

        $stepper.on("click", '.step:not(.active)', function () {
            var object = $($stepper.children('.step:visible')).index($(this));
            if ($stepper.data('settings').parallel && validation) { // Invoke parallel stepper behaviour
                $(this).addClass('temp-active');
                $stepper.validatePreviousSteps()
                $stepper.openStep(object + 1);
                $(this).removeClass('temp-active');
            } else if (!$stepper.hasClass('linear')) {
                $stepper.openStep(object + 1);
            } else if (settings.linearStepsNavigation) {
                var active = $stepper.find('.step.active');
                if ($($stepper.children('.step:visible')).index($(active)) + 1 == object) {
                    $stepper.nextStep(undefined, true, undefined);
                } else if ($($stepper.children('.step:visible')).index($(active)) - 1 == object) {
                    $stepper.prevStep(undefined);
                }
            }
        }).on("click", '.next-step', function (e) {
            e.preventDefault();
            $stepper.nextStep(undefined, true, e);
        }).on("click", '.previous-step', function (e) {
            e.preventDefault();
            $stepper.prevStep(undefined);
        }).on("click", "button:submit:not(.next-step, .previous-step)", function (e) {
            e.preventDefault();
            feedback = e ? $(e.target).data("feedback") : undefined;
            var form = $stepper.closest('form');
            if (form.isValid()) {
                if (feedback) {
                    stepper.activateFeedback();
                    return window[feedback].call();
                }
                form.submit();
            }
        }).on("click", function () {
            $('.stepper.focused').removeClass('focused');
            $(this).addClass('focused');
        });
    });
};

/**
 * Return the step element on given index.
 *
 * @param step, index of the step to be returned
 * @returns {*}, the step requested
 */
$.fn.getStep = function (step) {
    var settings = $(this).closest('ul.stepper').data('settings');
    var $this = this;
    var step_num = step - 1;
    step = this.find('.step:visible:eq(' + step_num + ')');
    return step;
};

/**
 * Run validation over all previous steps from the steps this
 * function is called on.
 */
$.fn.validatePreviousSteps = function () {
    var active = $(this).find('.step.temp-active');
    var index = $(this.children('.step')).index($(active));
    // We assume that the validator is set to ignore nothing.
    $(this.children('.step')).each(function (i) {
        if (i >= index) {
            $(this).removeClass('wrong done');
        } else {
            $(this).validateStep();
        }
    });
};

/**
 * Validate the step that this function is called on.
 */
$.fn.validateStep = function () {
    var stepper = this.closest('ul.stepper');
    var form = this.closest('form');
    var step = $(this);
    // Retrieve the custom validator for that step if exists.
    var validator = step.find('.next-step').data("validator");
    if (this.validateStepInput()) { // If initial base validation succeeded go on
        if (validator) { // If a custom validator is given also call that validator
            if (window[validator].call()) {
                step.removeClass('wrong').addClass('done');
                return true;
            }
            else {
                step.removeClass('done').addClass('wrong');
                return false;
            }
        }
        step.removeClass('wrong').addClass('done');
        return true;
    } else {
        step.removeClass('done').addClass('wrong');
        return false;
    }
};

/**
 * Uses the validation variable set by the stepper constructor
 * to run standard validation on the current step.
 * @returns {boolean}
 */
$.fn.validateStepInput = function () {
    var valid = true;
    if (validation) {
        // Find all input fields dat need validation in current step.
        $(this).find('input.validate').each(function () {
            if (!$(this).valid()) {
                valid = false;
                return false;
            }
        });
    }
    return valid;
};