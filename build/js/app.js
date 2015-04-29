/**
 * @license
 * lodash 3.7.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce,max,map"`
 */
;(function(){function n(n){return typeof n=="function"||false}function t(n){return typeof n=="string"?n:null==n?"":n+""}function r(n){return n.charCodeAt(0)}function e(n){return!!n&&typeof n=="object"}function o(){}function u(n,t){for(var r=-1,e=n.length,o=Array(e);++r<e;)o[r]=t(n[r],r,n);return o}function c(n,t,r){var e=typeof n;return"function"==e?t===B?n:g(n,t,r):null==n?V:"object"==e?l(n):t===B?W(n):s(n,t)}function i(n,t,r){if(null!=n){n=S(n),r!==B&&r in n&&(t=[r]),r=-1;for(var e=t.length;null!=n&&++r<e;)var o=n=S(n)[t[r]];

return o}}function a(n,t,r,e,o,u){if(n===t)return 0!==n||1/n==1/t;var c=typeof n,i=typeof t;if("function"!=c&&"object"!=c&&"function"!=i&&"object"!=i||null==n||null==t)n=n!==n&&t!==t;else n:{var c=a,i=Dn(n),f=Dn(t),l=Y,s=Y;i||(l=dn.call(n),l==L?l=K:l!=K&&(i=$(n))),f||(s=dn.call(t),s==L?s=K:s!=K&&$(t));var p=l==K&&!gn(n),f=s==K&&!gn(t),s=l==s;if(!s||i||p){if(!e&&(l=p&&jn.call(n,"__wrapped__"),f=f&&jn.call(t,"__wrapped__"),l||f)){n=c(l?n.value():n,f?t.value():t,r,e,o,u);break n}if(s){for(o||(o=[]),
u||(u=[]),l=o.length;l--;)if(o[l]==n){n=u[l]==t;break n}o.push(n),u.push(t),n=(i?v:m)(n,t,c,r,e,o,u),o.pop(),u.pop()}else n=false}else n=b(n,t,l)}return n}function f(n,t){var r=-1,e=Rn(n),o=E(e)?Array(e):[];return $n(n,function(n,e,u){o[++r]=t(n,e,u)}),o}function l(n){var t=Vn(n),r=t.length;if(!r)return M(true);if(1==r){var e=t[0],o=n[e];if(x(o))return function(n){return null==n?false:(n=S(n),n[e]===o&&(o!==B||e in n))}}for(var u=Array(r),c=Array(r);r--;)o=n[t[r]],u[r]=o,c[r]=x(o);return function(n){var r;

if(r=null!=n)n:{n=S(n),r=-1;for(var e=t.length;++r<e;)if(c[r]?u[r]!==n[t[r]]:!(t[r]in n)){r=false;break n}for(r=-1;++r<e;){var o=t[r],i=n[o],f=u[r];if(c[r]?o=i!==B||o in n:(o=B,o===B&&(o=a(f,i,void 0,true))),!o){r=false;break n}}r=true}return r}}function s(n,t){var r=Dn(n),e=w(n)&&x(t),o=n+"";return n=T(n),function(u){if(null==u)return false;var c=o;if(u=S(u),!(!r&&e||c in u)){if(1!=n.length){var c=n,f=0,l=-1,s=-1,p=c.length,f=null==f?0:+f||0;for(0>f&&(f=-f>p?0:p+f),l=l===B||l>p?p:+l||0,0>l&&(l+=p),p=f>l?0:l-f>>>0,
f>>>=0,l=Array(p);++s<p;)l[s]=c[s+f];u=i(u,l)}if(null==u)return false;c=I(n),u=S(u)}return u[c]===t?t!==B||c in u:a(t,u[c],null,true)}}function p(n){return function(t){return null==t?B:S(t)[n]}}function y(n){var t=n+"";return n=T(n),function(r){return i(r,n,t)}}function g(n,t,r){if(typeof n!="function")return V;if(t===B)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,o){return n.call(t,r,e,o)};case 4:return function(r,e,o,u){return n.call(t,r,e,o,u)};case 5:return function(r,e,o,u,c){
return n.call(t,r,e,o,u,c)}}return function(){return n.apply(t,arguments)}}function v(n,t,r,e,o,u,c){var i=-1,a=n.length,f=t.length,l=true;if(a!=f&&(!o||f<=a))return false;for(;l&&++i<a;){var s=n[i],p=t[i],l=B;if(e&&(l=o?e(p,s,i):e(s,p,i)),l===B)if(o)for(var y=f;y--&&(p=t[y],!(l=s&&s===p||r(s,p,e,o,u,c))););else l=s&&s===p||r(s,p,e,o,u,c)}return!!l}function b(n,t,r){switch(r){case G:case q:return+n==+t;case z:return n.name==t.name&&n.message==t.message;case J:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Q:
case X:return n==t+""}return false}function m(n,t,r,e,o,u,c){var i=Vn(n),a=i.length,f=Vn(t).length;if(a!=f&&!o)return false;for(var f=o,l=-1;++l<a;){var s=i[l],p=o?s in t:jn.call(t,s);if(p){var y=n[s],g=t[s],p=B;e&&(p=o?e(g,y,s):e(y,g,s)),p===B&&(p=y&&y===g||r(y,g,e,o,u,c))}if(!p)return false;f||(f="constructor"==s)}return f||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function h(n,t,r){var e=r?kn:_n,o=e,u=o;

return $n(n,function(n,c,i){c=t(n,c,i),((r?c<o:c>o)||c===e&&c===u)&&(o=c,u=n)}),u}function j(n,t,r){var e=o.callback||D,e=e===D?c:e;return r?e(n,t,r):e}function d(n,t){return n=+n,t=null==t?Nn:t,-1<n&&0==n%1&&n<t}function A(n,t,r){if(!N(r))return false;var e=typeof t;return"number"==e?(e=Rn(r),e=E(e)&&d(t,e)):e="string"==e&&t in r,e?(t=r[t],n===n?n===t:t!==t):false}function w(n){var t=typeof n;return"string"==t&&nn.test(n)||"number"==t?true:Dn(n)?false:!Z.test(n)||false}function E(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Nn;

}function x(n){return n===n&&(0===n?0<1/n:!N(n))}function O(n){for(var t=C(n),r=t.length,e=r&&n.length,u=o.support,u=e&&E(e)&&(Dn(n)||u.nonEnumStrings&&F(n)||u.nonEnumArgs&&k(n)),c=-1,i=[];++c<r;){var a=t[c];(u&&d(a,e)||jn.call(n,a))&&i.push(a)}return i}function S(n){if(o.support.unindexedChars&&F(n)){for(var t=-1,r=n.length,e=Object(n);++t<r;)e[t]=n.charAt(t);return e}return N(n)?n:Object(n)}function T(n){if(Dn(n))return n;var r=[];return t(n).replace(tn,function(n,t,e,o){r.push(e?o.replace(on,"$1"):t||n);

}),r}function I(n){var t=n?n.length:0;return t?n[t-1]:B}function _(n,t,r){var e=Dn(n)?u:f;return t=j(t,r,3),e(n,t)}function k(n){return E(e(n)?n.length:B)&&dn.call(n)==L}function N(n){var t=typeof n;return"function"==t||!!n&&"object"==t}function P(n){return null==n?false:dn.call(n)==H?An.test(hn.call(n)):e(n)&&(gn(n)?An:un).test(n)}function F(n){return typeof n=="string"||e(n)&&dn.call(n)==X}function $(n){return e(n)&&E(n.length)&&!!an[dn.call(n)]}function C(n){if(null==n)return[];N(n)||(n=Object(n));

for(var t=n.length,r=o.support,t=t&&E(t)&&(Dn(n)||r.nonEnumStrings&&F(n)||r.nonEnumArgs&&k(n))&&t||0,e=n.constructor,u=-1,e=Mn(e)&&e.prototype||bn,c=e===n,i=Array(t),a=0<t,f=r.enumErrorProps&&(n===vn||n instanceof Error),l=r.enumPrototypes&&Mn(n);++u<t;)i[u]=u+"";for(var s in n)l&&"prototype"==s||f&&("message"==s||"name"==s)||a&&d(s,t)||"constructor"==s&&(c||!jn.call(n,s))||i.push(s);if(r.nonEnumShadows&&n!==bn)for(t=n===mn?X:n===vn?z:dn.call(n),r=Pn[t]||Pn[K],t==K&&(e=bn),t=cn.length;t--;)s=cn[t],
u=r[s],c&&u||(u?!jn.call(n,s):n[s]===e[s])||i.push(s);return i}function R(n){for(var t=Vn(n),r=-1,e=t.length,o=Array(e);++r<e;)o[r]=n[t[r]];return o}function U(n){return(n=t(n))&&en.test(n)?n.replace(rn,"\\$&"):n}function D(n,t,r){return r&&A(n,t,r)&&(t=null),c(n,t)}function M(n){return function(){return n}}function V(n){return n}function W(n){return w(n)?p(n):y(n)}var B,L="[object Arguments]",Y="[object Array]",G="[object Boolean]",q="[object Date]",z="[object Error]",H="[object Function]",J="[object Number]",K="[object Object]",Q="[object RegExp]",X="[object String]",Z=/\.|\[(?:[^[\]]+|(["'])(?:(?!\1)[^\n\\]|\\.)*?)\1\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,rn=/[.*+?^${}()|[\]\/\\]/g,en=RegExp(rn.source),on=/\\(\\)?/g,un=/^\[object .+?Constructor\]$/,cn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),an={};

an["[object Float32Array]"]=an["[object Float64Array]"]=an["[object Int8Array]"]=an["[object Int16Array]"]=an["[object Int32Array]"]=an["[object Uint8Array]"]=an["[object Uint8ClampedArray]"]=an["[object Uint16Array]"]=an["[object Uint32Array]"]=true,an[L]=an[Y]=an["[object ArrayBuffer]"]=an[G]=an[q]=an[z]=an[H]=an["[object Map]"]=an[J]=an[K]=an[Q]=an["[object Set]"]=an[X]=an["[object WeakMap]"]=false;var fn={"function":true,object:true},ln=fn[typeof exports]&&exports&&!exports.nodeType&&exports,sn=fn[typeof module]&&module&&!module.nodeType&&module,pn=fn[typeof self]&&self&&self.Object&&self,yn=fn[typeof window]&&window&&window.Object&&window,fn=sn&&sn.exports===ln&&ln,pn=ln&&sn&&typeof global=="object"&&global&&global.Object&&global||yn!==(this&&this.window)&&yn||pn||this,gn=function(){
try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),yn=Array.prototype,vn=Error.prototype,bn=Object.prototype,mn=String.prototype,hn=Function.prototype.toString,jn=bn.hasOwnProperty,dn=bn.toString,An=RegExp("^"+U(dn).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wn=bn.propertyIsEnumerable,En=yn.splice,xn=P(xn=pn.Uint8Array)&&xn,On=P(On=Array.isArray)&&On,Sn=P(Sn=Object.keys)&&Sn,Tn=Math.max,In=P(In=Date.now)&&In,_n=Number.NEGATIVE_INFINITY,kn=Number.POSITIVE_INFINITY,Nn=Math.pow(2,53)-1,Pn={};

Pn[Y]=Pn[q]=Pn[J]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Pn[G]=Pn[X]={constructor:true,toString:true,valueOf:true},Pn[z]=Pn[H]=Pn[Q]={constructor:true,toString:true},Pn[K]={constructor:true},function(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}(cn,function(n){for(var t in Pn)if(jn.call(Pn,t)){var r=Pn[t];r[n]=jn.call(r,n)}});var Fn=o.support={};!function(n){function t(){this.x=n}var r={0:n,length:n},e=[];t.prototype={valueOf:n,y:n};for(var o in new t)e.push(o);Fn.argsTag=dn.call(arguments)==L,
Fn.enumErrorProps=wn.call(vn,"message")||wn.call(vn,"name"),Fn.enumPrototypes=wn.call(t,"prototype"),Fn.funcDecomp=/\bthis\b/.test(function(){return this}),Fn.funcNames=typeof Function.name=="string",Fn.nonEnumStrings=!wn.call("x",0),Fn.nonEnumShadows=!/valueOf/.test(e),Fn.spliceObjects=(En.call(r,0,1),!r[0]),Fn.unindexedChars="xx"!="x"[0]+Object("x")[0];try{Fn.nonEnumArgs=!wn.call(arguments,1)}catch(u){Fn.nonEnumArgs=true}}(1,0);var $n=function(n,t){return function(r,e){var o=r?Rn(r):0;if(!E(o))return n(r,e);

for(var u=t?o:-1,c=S(r);(t?u--:++u<o)&&false!==e(c[u],u,c););return r}}(function(n,t){return Cn(n,t,Vn)}),Cn=function(n){return function(t,r,e){var o=S(t);e=e(t);for(var u=e.length,c=n?u:-1;n?c--:++c<u;){var i=e[c];if(false===r(o[i],i,o))break}return t}}(),Rn=p("length"),Un=In||function(){return(new Date).getTime()};Fn.argsTag||(k=function(n){return E(e(n)?n.length:B)&&jn.call(n,"callee")&&!wn.call(n,"callee")});var Dn=On||function(n){return e(n)&&E(n.length)&&dn.call(n)==Y},Mn=n(/x/)||xn&&!n(xn)?function(n){
return dn.call(n)==H}:n,Vn=Sn?function(n){if(n)var t=n.constructor,r=n.length;return typeof t=="function"&&t.prototype===n||(typeof n=="function"?o.support.enumPrototypes:E(r))?O(n):N(n)?Sn(n):[]}:O,xn=function(n,t){return function(e,u,i){i&&A(e,u,i)&&(u=null);var a=j(),f=null==u;if(a===c&&f||(f=false,u=a(u,i,3)),f){if(u=Dn(e),u||!F(e))return e=u?e:null==e?[]:E(Rn(e))?o.support.unindexedChars&&F(e)?e.split(""):N(e)?e:Object(e):R(e),n(e);u=r}return h(e,u,t)}}(function(n){for(var t=-1,r=n.length,e=_n;++t<r;){
var o=n[t];o>e&&(e=o)}return e});o.callback=D,o.constant=M,o.debounce=function(n,t,r){function e(){var r=t-(Un()-f);0>=r||r>t?(i&&clearTimeout(i),r=p,i=s=p=B,r&&(y=Un(),a=n.apply(l,c),s||i||(c=l=null))):s=setTimeout(e,r)}function o(){s&&clearTimeout(s),i=s=p=B,(v||g!==t)&&(y=Un(),a=n.apply(l,c),s||i||(c=l=null))}function u(){if(c=arguments,f=Un(),l=this,p=v&&(s||!b),false===g)var r=b&&!s;else{i||b||(y=f);var u=g-(f-y),m=0>=u||u>g;m?(i&&(i=clearTimeout(i)),y=f,a=n.apply(l,c)):i||(i=setTimeout(o,u))}return m&&s?s=clearTimeout(s):s||t===g||(s=setTimeout(e,t)),
r&&(m=true,a=n.apply(l,c)),!m||s||i||(c=l=null),a}var c,i,a,f,l,s,p,y=0,g=false,v=true;if(typeof n!="function")throw new TypeError("Expected a function");if(t=0>t?0:+t||0,true===r)var b=true,v=false;else N(r)&&(b=r.leading,g="maxWait"in r&&Tn(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);return u.cancel=function(){s&&clearTimeout(s),i&&clearTimeout(i),i=s=p=B},u},o.keys=Vn,o.keysIn=C,o.map=_,o.property=W,o.values=R,o.collect=_,o.iteratee=D,o.escapeRegExp=U,o.identity=V,o.isArguments=k,o.isArray=Dn,o.isFunction=Mn,
o.isNative=P,o.isObject=N,o.isString=F,o.isTypedArray=$,o.last=I,o.max=xn,o.now=Un,o.VERSION="3.7.0",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(pn._=o, define(function(){return o})):ln&&sn?fn?(sn.exports=o)._=o:ln._=o:pn._=o}).call(this);
$(function() {
  var setHeight = function() {
   var heights, itemInfos, maxHeight;

    equalize = this.$('.equalize');
    equalize.height('auto');

    heights = _.map(equalize, function(itemInfo) {
      return $(itemInfo).height();
    });

    maxHeight = _.max(heights);

    return equalize.height(maxHeight);
  };

  setHeight();

  $(window).on('resize', _.debounce(setHeight, 150));
});
