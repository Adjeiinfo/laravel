/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/**
 * Created by edwin on 11/7/15.
 */

$(document).ready(function(){

    $('#selectAllBoxes').click(function(event){

        if(this.checked) {

            $('.checkBoxes').each(function(){

                this.checked = true;

            });

        } else {


            $('.checkBoxes').each(function(){

                this.checked = false;

            });


        }

    });





    /**************** User Profile **********************/



    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });


    $('[data-toggle="tooltip"]').tooltip();

    //$('button').click(function(e) {
    //    e.preventDefault();
    //    alert("This is a demo.\n :-)");
    //});






});
$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
;(function($, window, document, undefined) {

    var pluginName = "metisMenu",
        defaults = {
            toggle: true,
            doubleTapToGo: false
        };

    function Plugin(element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {

            var $this = this.element,
                $toggle = this.settings.toggle,
                obj = this;

            if (this.isIE() <= 9) {
                $this.find("li.active").has("ul").children("ul").collapse("show");
                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
            } else {
                $this.find("li.active").has("ul").children("ul").addClass("collapse in");
                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
            }

            //add the "doubleTapToGo" class to active items if needed
            if (obj.settings.doubleTapToGo) {
                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
            }

            $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
                e.preventDefault();

                //Do we need to enable the double tap
                if (obj.settings.doubleTapToGo) {

                    //if we hit a second time on the link and the href is valid, navigate to that url
                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
                        e.stopPropagation();
                        document.location = $(this).attr("href");
                        return;
                    }
                }

                $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

                if ($toggle) {
                    $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
                }

            });
        },

        isIE: function() { //https://gist.github.com/padolsey/527683
            var undef,
                v = 3,
                div = document.createElement("div"),
                all = div.getElementsByTagName("i");

            while (
                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                all[0]
            ) {
                return v > 4 ? v : undef;
            }
        },

        //Enable the link on the second click.
        doubleTapToGo: function(elem) {
            var $this = this.element;

            //if the class "doubleTapToGo" exists, remove it and return
            if (elem.hasClass("doubleTapToGo")) {
                elem.removeClass("doubleTapToGo");
                return true;
            }

            //does not exists, add a new class and return false
            if (elem.parent().children("ul").length) {
                 //first remove all other class
                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
                //add the class on the current element
                elem.addClass("doubleTapToGo");
                return false;
            }
        },

        remove: function() {
            this.element.off("." + pluginName);
            this.element.removeData(pluginName);
        }

    };

    $.fn[pluginName] = function(options) {
        this.each(function () {
            var el = $(this);
            if (el.data(pluginName)) {
                el.data(pluginName).remove();
            }
            el.data(pluginName, new Plugin(this, options));
        });
        return this;
    };

})(jQuery, window, document);
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===da||n[0]===ma?ma+n:n}function l(n){return(n+="")[0]===ma?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=ya.length;r>e;++e){var u=ya[e]+t;if(u in n)return u}}function y(){}function M(){}function x(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function b(){ta.event.preventDefault()}function _(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new M,e=0,r=arguments.length;++e<r;)t[arguments[e]]=x(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function S(n){return xa(n,ka),n}function k(n){return"function"==typeof n?n:function(){return ba(n,this)}}function E(n){return"function"==typeof n?n:function(){return _a(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function N(n){return n.trim().replace(/\s+/g," ")}function C(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function q(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(L);var u=n.length;return"function"==typeof t?r:e}function L(n){var t=C(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",N(u+" "+n))):e.setAttribute("class",N(u.replace(t," ")))}}function T(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(){var n=this.parentNode;n&&n.removeChild(this)}function U(n){return{__data__:n}}function j(n){return function(){return Sa(this,n)}}function F(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function H(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function O(n){return xa(n,Aa),n}function Y(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function I(n){var t=n.__transition__;t&&++t.active}function Z(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=V;a>0&&(n=n.slice(0,a));var l=Ca.get(n);return l&&(n=l,c=X),a?t?u:r:t?y:i}function V(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function X(n,t){var e=V(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function $(){var n=".dragsuppress-"+ ++qa,t="click"+n,e=ta.select(oa).on("touchmove"+n,b).on("dragstart"+n,b).on("selectstart"+n,b);if(za){var r=ia.style,u=r[za];r[za]="none"}return function(i){if(e.on(n,null),za&&(r[za]=u),i){var o=function(){e.on(t,null)};e.on(t,function(){b(),o()},!0),setTimeout(o,0)}}}function B(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>La&&(oa.scrollX||oa.scrollY)){e=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();La=!(u.f||u.e),e.remove()}return La?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function W(){return ta.event.changedTouches[0].identifier}function J(){return ta.event.target}function G(){return oa}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nt(n){return n>1?0:-1>n?Da:Math.acos(n)}function tt(n){return n>1?ja:-1>n?-ja:Math.asin(n)}function et(n){return((n=Math.exp(n))-1/n)/2}function rt(n){return((n=Math.exp(n))+1/n)/2}function ut(n){return((n=Math.exp(2*n))-1)/(n+1)}function it(n){return(n=Math.sin(n/2))*n}function ot(){}function at(n,t,e){return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(""+n,_t,at):new at(n,t,e)}function ct(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120))}function lt(n,t,e){return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e)}function st(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Fa)*t,Math.sin(n)*t)}function ft(n,t,e){return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e)}function ht(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=pt(u)*Ja,r=pt(r)*Ga,i=pt(i)*Ka,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i))}function gt(n,t,e){return n>0?new lt(Math.atan2(e,t)*Ha,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n)}function pt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mt(n,t,e){return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(""+n,mt,ct):new mt(n,t,e)}function yt(n){return new mt(n>>16,255&n>>8,255&n)}function Mt(n){return yt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=tc.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=vt((.4124564*n+.3575761*t+.1804375*e)/Ja),u=vt((.2126729*n+.7151522*t+.072175*e)/Ga),i=vt((.0193339*n+.119192*t+.9503041*e)/Ka);return ft(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Nt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Ct(t,e,n,r)}}function Ct(n,t,e,r){function u(){var n,t=c.status;if(!t&&qt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!oa.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(zt(r))}function zt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function qt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Lt(){var n=Tt(),t=Rt()-n;t>24?(isFinite(t)&&(clearTimeout(ic),ic=setTimeout(Lt,t)),uc=0):(uc=1,ac(Lt))}function Tt(){var n=Date.now();for(oc=ec;oc;)n>=oc.t&&(oc.f=oc.c(n-oc.t)),oc=oc.n;return n}function Rt(){for(var n,t=ec,e=1/0;t;)t.f?t=n?n.n=t.n:ec=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return rc=n,e}function Dt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Pt(n,t){var e=Math.pow(10,3*va(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Ut(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:At;return function(n){var e=lc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=sc.get(g)||jt;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function jt(n){return n+""}function Ft(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new hc(e-1)),1),e}function i(n,e){return t(n=new hc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{hc=Ft;var r=new Ft;return r._=n,o(r,t,e)}finally{hc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ot(n);return c.floor=c,c.round=Ot(r),c.ceil=Ot(u),c.offset=Ot(i),c.range=a,n}function Ot(n){return function(t,e){try{hc=Ft;var r=new Ft;return r._=t,n(r,e)._}finally{hc=Date}}}function Yt(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=pc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&hc!==Ft,o=new(i?Ft:hc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in pc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{hc=Ft;var t=new hc;return t._=n,r(t)}finally{hc=Date}}var r=t(n);return e.parse=function(n){try{hc=Ft;var t=r.parse(n);return t&&t._}finally{hc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ce;var M=ta.map(),x=Zt(v),b=Vt(v),_=Zt(d),w=Vt(d),S=Zt(m),k=Vt(m),E=Zt(y),A=Vt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+fc.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(fc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(fc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:oe,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:ne,e:ne,H:ee,I:ee,j:te,L:ie,m:Qt,M:re,p:s,S:ue,U:$t,w:Xt,W:Bt,x:c,X:l,y:Jt,Y:Wt,Z:Gt,"%":ae};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Zt(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Vt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Xt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $t(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Bt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Wt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.y=Kt(+r[0]),e+r[0].length):-1}function Gt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Kt(n){return n+(n>68?1900:2e3)}function Qt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function ne(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function te(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function ee(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function re(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ue(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ie(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function oe(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|va(t)/60,u=va(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function ae(n,t,e){dc.lastIndex=0;var r=dc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ce(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function le(){}function se(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function fe(n,t){n&&xc.hasOwnProperty(n.type)&&xc[n.type](n,t)}function he(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ge(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)he(n[e],t,1);t.polygonEnd()}function pe(){function n(n,t){n*=Fa,t=t*Fa/2+Da/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);_c.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;wc.point=function(o,a){wc.point=n,r=(t=o)*Fa,u=Math.cos(a=(e=a)*Fa/2+Da/4),i=Math.sin(a)},wc.lineEnd=function(){n(t,e)}}function ve(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function de(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function me(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function ye(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Me(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function be(n){return[Math.atan2(n[1],n[0]),tt(n[2])]}function _e(n,t){return va(n[0]-t[0])<Ta&&va(n[1]-t[1])<Ta}function we(n,t){n*=Fa;var e=Math.cos(t*=Fa);Se(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Se(n,t,e){++Sc,Ec+=(n-Ec)/Sc,Ac+=(t-Ac)/Sc,Nc+=(e-Nc)/Sc}function ke(){function n(n,u){n*=Fa;var i=Math.cos(u*=Fa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);kc+=l,Cc+=l*(t+(t=o)),zc+=l*(e+(e=a)),qc+=l*(r+(r=c)),Se(t,e,r)}var t,e,r;Dc.point=function(u,i){u*=Fa;var o=Math.cos(i*=Fa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Dc.point=n,Se(t,e,r)}}function Ee(){Dc.point=we}function Ae(){function n(n,t){n*=Fa;var e=Math.cos(t*=Fa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g);Lc+=p*l,Tc+=p*s,Rc+=p*f,kc+=v,Cc+=v*(r+(r=o)),zc+=v*(u+(u=a)),qc+=v*(i+(i=c)),Se(r,u,i)}var t,e,r,u,i;Dc.point=function(o,a){t=o,e=a,Dc.point=n,o*=Fa;var c=Math.cos(a*=Fa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),Se(r,u,i)},Dc.lineEnd=function(){n(t,e),Dc.lineEnd=Ee,Dc.point=we}}function Ne(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ce(){return!0}function ze(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Le(e,n,null,!0),l=new Le(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new Le(r,n,null,!1),l=new Le(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),qe(i),qe(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qe(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Le(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Te(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Re))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=He(m,p);g.length?(b||(i.polygonStart(),b=!0),ze(g,Pe,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=De(),x=t(M),b=!1;return y}}function Re(n){return n.length>1}function De(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Pe(n,t){return((n=n.x)[0]<0?n[1]-ja-Ta:ja-n[1])-((t=t.x)[0]<0?t[1]-ja-Ta:ja-t[1])}function Ue(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Da:-Da,c=va(i-e);va(c-Da)<Ta?(n.point(e,r=(r+o)/2>0?ja:-ja),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Da&&(va(e-u)<Ta&&(e-=u*Ta),va(i-a)<Ta&&(i-=a*Ta),r=je(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function je(n,t,e,r){var u,i,o=Math.sin(n-e);return va(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Fe(n,t,e,r){var u;if(null==n)u=e*ja,r.point(-Da,u),r.point(0,u),r.point(Da,u),r.point(Da,0),r.point(Da,-u),r.point(0,-u),r.point(-Da,-u),r.point(-Da,0),r.point(-Da,u);else if(va(n[0]-t[0])>Ta){var i=n[0]<t[0]?Da:-Da;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function He(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;_c.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Da/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Da/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>Da,k=p*M;if(_c.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Pa:b,S^h>=e^m>=e){var E=me(ve(f),ve(n));xe(E);var A=me(u,E);xe(A);var N=(S^b>=0?-1:1)*tt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ta>i||Ta>i&&0>_c)^1&o}function Oe(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Da:-Da),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=ve(n),u=ve(t),o=[1,0,0],a=me(r,u),c=de(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=me(o,a),p=Me(o,f),v=Me(a,h);ye(p,v);var d=g,m=de(p,d),y=de(d,d),M=m*m-y*(de(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Me(d,(-m-x)/y);if(ye(b,p),b=be(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=va(A-Da)<Ta,C=N||Ta>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(va(b[0]-w)<Ta?k:E):k<=b[1]&&b[1]<=E:A>Da^(w<=b[0]&&b[0]<=S)){var z=Me(d,(-m+x)/y);return ye(z,p),[b,be(z)]}}}function u(t,e){var r=o?n:Da-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=va(i)>Ta,c=pr(n,6*Fa);return Te(t,e,c,o?[0,-n]:[-Da,n-Da])}function Ye(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ie(n,t,e,r){function u(r,u){return va(r[0]-n)<Ta?u>0?0:3:va(r[0]-e)<Ta?u>0?2:1:va(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Uc,Math.min(Uc,n)),t=Math.max(-Uc,Math.min(Uc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=De(),N=Ye(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&ze(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ze(n){var t=0,e=Da/3,r=or(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},u}function Ve(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Xe(){function n(n,t){Fc+=u*n-r*t,r=n,u=t}var t,e,r,u;Zc.point=function(i,o){Zc.point=n,t=r=i,e=u=o},Zc.lineEnd=function(){n(t,e)}}function $e(n,t){Hc>n&&(Hc=n),n>Yc&&(Yc=n),Oc>t&&(Oc=t),t>Ic&&(Ic=t)}function Be(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=We(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=We(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function We(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Je(n,t){Ec+=n,Ac+=t,++Nc}function Ge(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);Cc+=o*(t+n)/2,zc+=o*(e+r)/2,qc+=o,Je(t=n,e=r)}var t,e;Xc.point=function(r,u){Xc.point=n,Je(t=r,e=u)}}function Ke(){Xc.point=Je}function Qe(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);Cc+=o*(r+n)/2,zc+=o*(u+t)/2,qc+=o,o=u*n-r*t,Lc+=o*(r+n),Tc+=o*(u+t),Rc+=3*o,Je(r=n,u=t)}var t,e,r,u;Xc.point=function(i,o){Xc.point=n,Je(t=r=i,e=u=o)},Xc.lineEnd=function(){n(t,e)}}function nr(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Pa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function tr(n){function t(n){return(a?r:e)(n)}function e(t){return ur(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=ve([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=va(va(w)-1)<Ta||va(r-h)<Ta?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;
(L*L/x>i||va((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Fa),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function er(n){var t=tr(function(t,e){return n([t*Ha,e*Ha])});return function(n){return ar(t(n))}}function rr(n){this.stream=n}function ur(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ir(n){return or(function(){return n})()}function or(n){function t(n){return n=a(n[0]*Fa,n[1]*Fa),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ha,n[1]*Ha]}function r(){a=Ne(o=sr(m,y,M),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=tr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,M=0,x=Pc,b=At,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=ar(x(o,f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Pc):Oe((_=+n)*Fa),u()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?Ie(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Fa,d=n[1]%360*Fa,r()):[v*Ha,d*Ha]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Fa,y=n[1]%360*Fa,M=n.length>2?n[2]%360*Fa:0,r()):[m*Ha,y*Ha,M*Ha]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function ar(n){return ur(n,function(t,e){n.point(t*Fa,e*Fa)})}function cr(n,t){return[n,t]}function lr(n,t){return[n>Da?n-Pa:-Da>n?n+Pa:n,t]}function sr(n,t,e){return n?t||e?Ne(hr(n),gr(t,e)):hr(n):t||e?gr(t,e):lr}function fr(n){return function(t,e){return t+=n,[t>Da?t-Pa:-Da>t?t+Pa:t,e]}}function hr(n){var t=fr(n);return t.invert=fr(-n),t}function gr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),tt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),tt(s*r-a*u)]},e}function pr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=vr(e,u),i=vr(e,i),(o>0?i>u:u>i)&&(u+=o*Pa)):(u=n+o*Pa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=be([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function vr(n,t){var e=ve(t);e[0]-=n,xe(e);var r=nt(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function dr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function mr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function yr(n){return n.source}function Mr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(it(r-t)+u*o*it(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ha,Math.atan2(o,Math.sqrt(r*r+u*u))*Ha]}:function(){return[n*Ha,t*Ha]};return p.distance=h,p}function br(){function n(n,u){var i=Math.sin(u*=Fa),o=Math.cos(u),a=va((n*=Fa)-t),c=Math.cos(a);$c+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Bc.point=function(u,i){t=u*Fa,e=Math.sin(i*=Fa),r=Math.cos(i),Bc.point=n},Bc.lineEnd=function(){Bc.point=Bc.lineEnd=y}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function wr(n,t){function e(n,t){o>0?-ja+Ta>t&&(t=-ja+Ta):t>ja-Ta&&(t=ja-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Da/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-ja]},e):kr}function Sr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return va(u)<Ta?cr:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function kr(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function Er(n){var t,e=ir(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Da*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ar(n,t){return[Math.log(Math.tan(Da/4+t/2)),-n]}function Nr(n){return n[0]}function Cr(n){return n[1]}function zr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qr(n,t){return n[0]-t[0]||n[1]-t[1]}function Lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Tr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Rr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Dr(){eu(this),this.edge=this.site=this.circle=null}function Pr(n){var t=ol.pop()||new Dr;return t.site=n,t}function Ur(n){$r(n),rl.remove(n),ol.push(n),eu(n)}function jr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Ur(n);for(var c=i;c.circle&&va(e-c.circle.x)<Ta&&va(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Ur(c),c=i;a.unshift(c),$r(c);for(var l=o;l.circle&&va(e-l.circle.x)<Ta&&va(r-l.circle.cy)<Ta;)o=l.N,a.push(l),Ur(l),l=o;a.push(l),$r(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Qr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Gr(c.site,l.site,null,u),Xr(c),Xr(l)}function Fr(n){for(var t,e,r,u,i=n.x,o=n.y,a=rl._;a;)if(r=Hr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Or(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Pr(n);if(rl.insert(t,c),t||e){if(t===e)return $r(t),e=Pr(t.site),rl.insert(c,e),c.edge=e.edge=Gr(t.site,c.site),Xr(t),Xr(e),void 0;if(!e)return c.edge=Gr(t.site,c.site),void 0;$r(t),$r(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Qr(e.edge,l,p,x),c.edge=Gr(l,n,null,x),e.edge=Gr(n,p,null,x),Xr(t),Xr(e)}}function Hr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Or(n,t){var e=n.N;if(e)return Hr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Yr(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=el,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(va(r-t)>Ta||va(u-e)>Ta)&&(a.splice(o,0,new nu(Kr(i.site,s,va(r-f)<Ta&&p-u>Ta?{x:f,y:va(t-f)<Ta?e:p}:va(u-p)<Ta&&h-r>Ta?{x:va(e-p)<Ta?t:h,y:p}:va(r-h)<Ta&&u-g>Ta?{x:h,y:va(t-h)<Ta?e:g}:va(u-g)<Ta&&r-f>Ta?{x:va(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Zr(n,t){return t.angle-n.angle}function Vr(){eu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Xr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-Ra)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=al.pop()||new Vr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=il._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}il.insert(y,m),y||(ul=m)}}}}function $r(n){var t=n.circle;t&&(t.P||(ul=t.N),il.remove(t),al.push(t),eu(t),n.circle=null)}function Br(n){for(var t,e=tl,r=Ye(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Wr(t,n)||!r(t)||va(t.a.x-t.b.x)<Ta&&va(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Wr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Jr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Gr(n,t,e,r){var u=new Jr(n,t);return tl.push(u),e&&Qr(u,n,t,e),r&&Qr(u,t,n,r),el[n.i].edges.push(new nu(u,n,t)),el[t.i].edges.push(new nu(u,t,n)),u}function Kr(n,t,e){var r=new Jr(n,null);return r.a=t,r.b=e,tl.push(r),r}function Qr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function nu(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function tu(){this._=null}function eu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ru(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function uu(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function iu(n){for(;n.L;)n=n.L;return n}function ou(n,t){var e,r,u,i=n.sort(au).pop();for(tl=[],el=new Array(n.length),rl=new tu,il=new tu;;)if(u=ul,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(el[i.i]=new Yr(i),Fr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;jr(u.arc)}t&&(Br(t),Ir(t));var o={cells:el,edges:tl};return rl=il=tl=el=null,o}function au(n,t){return t.y-n.y||t.x-n.x}function cu(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function lu(n){return n.x}function su(n){return n.y}function fu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function hu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&hu(n,c[0],e,r,o,a),c[1]&&hu(n,c[1],o,r,u,a),c[2]&&hu(n,c[2],e,a,o,i),c[3]&&hu(n,c[3],o,a,u,i)}}function gu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-p[0],d=e-p[1],m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function pu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function vu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=yu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function du(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mu(n,t){var e,r,u,i=ll.lastIndex=sl.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=ll.exec(n))&&(r=sl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:du(e,r)})),i=sl.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function yu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function Mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(yu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function xu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function bu(n){return function(t){return 1-n(1-t)}}function _u(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function wu(n){return n*n}function Su(n){return n*n*n}function ku(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Eu(n){return function(t){return Math.pow(t,n)}}function Au(n){return 1-Math.cos(n*ja)}function Nu(n){return Math.pow(2,10*(n-1))}function Cu(n){return 1-Math.sqrt(1-n*n)}function zu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Pa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Pa/t)}}function qu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return st(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ht(e+i*n,r+o*n,u+a*n)+""}}function Pu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Uu(n){var t=[n.a,n.b],e=[n.c,n.d],r=Fu(t),u=ju(t,e),i=Fu(Hu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ha,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ha:0}function ju(n,t){return n[0]*t[0]+n[1]*t[1]}function Fu(n){var t=Math.sqrt(ju(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Hu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ou(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:du(a[0],c[0])},{i:3,x:du(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:du(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:du(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:du(g[0],p[0])},{i:e-2,x:du(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Yu(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Iu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Zu(n){for(var t=n.source,e=n.target,r=Xu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Vu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Xu(n,t){if(n===t)return n;for(var e=Vu(n),r=Vu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function $u(n){n.fixed|=2}function Bu(n){n.fixed&=-7}function Wu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Ju(n){n.fixed&=-5}function Gu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Gu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Ku(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ui,n}function Qu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function ni(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ti(n){return n.children}function ei(n){return n.value}function ri(n,t){return t.value-n.value}function ui(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ii(n){return n.x}function oi(n){return n.y}function ai(n,t,e){n.y0=t,n.y=e}function ci(n){return ta.range(n.length)}function li(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function si(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function fi(n){return n.reduce(hi,0)}function hi(n,t){return n+t[1]}function gi(n,t){return pi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function pi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function vi(n){return[ta.min(n),ta.max(n)]}function di(n,t){return n.value-t.value}function mi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function yi(n,t){n._pack_next=t,t._pack_prev=n}function Mi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function xi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(bi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],Si(r,u,i),t(i),mi(r,i),r._pack_prev=i,mi(i,u),u=r._pack_next,o=3;l>o;o++){Si(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Mi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?yi(r,u=a):yi(r=c,u),o--):(mi(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(_i)}}function bi(n){n._pack_next=n._pack_prev=n}function _i(n){delete n._pack_next,delete n._pack_prev}function wi(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)wi(u[i],t,e,r)}function Si(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function ki(n,t){return n.parent==t.parent?1:2}function Ei(n){var t=n.children;return t.length?t[0]:n.t}function Ai(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ni(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ci(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function zi(n,t,e){return n.a.parent===t.parent?n.a:e}function qi(n){return 1+ta.max(n,function(n){return n.y})}function Li(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ti(n){var t=n.children;return t&&t.length?Ti(t[0]):n}function Ri(n){var t,e=n.children;return e&&(t=e.length)?Ri(e[t-1]):n}function Di(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Pi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Ui(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function ji(n){return n.rangeExtent?n.rangeExtent():Ui(n.range())}function Fi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Hi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Oi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:bl}function Yi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ii(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Yi:Fi,c=r?Iu:Yu;return o=u(n,t,c,e),a=u(t,n,c,yu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Pu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return $i(n,t)},i.tickFormat=function(t,e){return Bi(n,t,e)},i.nice=function(t){return Vi(n,t),u()},i.copy=function(){return Ii(n,t,e,r)},u()}function Zi(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Vi(n,t){return Hi(n,Oi(Xi(n,t)[2]))}function Xi(n,t){null==t&&(t=10);var e=Ui(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function $i(n,t){return ta.range.apply(ta,Xi(n,t))}function Bi(n,t,e){var r=Xi(n,t);if(e){var u=lc.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(va(r[0]),va(r[1])));return u[7]||(u[7]="."+Wi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Ji(u[8],r)),e=u.join("")}else e=",."+Wi(r[2])+"f";return ta.format(e)}function Wi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Ji(n,t){var e=Wi(t[2]);return n in _l?Math.abs(e-Wi(Math.max(va(t[0]),va(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Gi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Hi(r.map(u),e?Math:Sl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Ui(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return wl;arguments.length<2?t=wl:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Gi(n.copy(),t,e,r)},Zi(o,n)}function Ki(n,t,e){function r(t){return n(u(t))}var u=Qi(t),i=Qi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return $i(e,n)},r.tickFormat=function(n,t){return Bi(e,n,t)},r.nice=function(n){return r.domain(Vi(e,n))},r.exponent=function(o){return arguments.length?(u=Qi(t=o),i=Qi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ki(n.copy(),t,e)},Zi(r,n)}function Qi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function no(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):0|(l-c)/(n.length-1+a);return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Ui(t.a[0])},e.copy=function(){return no(n,t)},e.domain(n)}function to(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=ta.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[ta.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return to(r,u)},i()}function eo(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return eo(n,t,e)},u()}function ro(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ro(n,t)},e}function uo(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return $i(n,t)},t.tickFormat=function(t,e){return Bi(n,t,e)},t.copy=function(){return uo(n)},t}function io(){return 0}function oo(n){return n.innerRadius}function ao(n){return n.outerRadius}function co(n){return n.startAngle}function lo(n){return n.endAngle}function so(n){return n&&n.padAngle}function fo(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function ho(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function go(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Nr,r=Cr,u=Ce,i=po,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=zl.get(n)||po).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function po(n){return n.join("L")}function vo(n){return po(n)+"Z"}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function xo(n,t){return n.length<4?po(n):n[1]+wo(n.slice(1,-1),So(n,t))}function bo(n,t){return n.length<3?po(n):n[0]+wo((n.push(n[0]),n),So([n[n.length-2]].concat(n,[n[1]]),t))}function _o(n,t){return n.length<3?po(n):n[0]+wo(n,So(n,t))}function wo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return po(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function So(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function ko(n){if(n.length<3)return po(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Co(Tl,o),",",Co(Tl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),zo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function Eo(n){if(n.length<4)return po(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Co(Tl,i)+","+Co(Tl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),zo(e,i,o);return e.join("")}function Ao(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Co(Tl,o),",",Co(Tl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),zo(t,o,a);return t.join("")}function No(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return ko(n)}function Co(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function zo(n,t,e){n.push("C",Co(ql,t),",",Co(ql,e),",",Co(Ll,t),",",Co(Ll,e),",",Co(Tl,t),",",Co(Tl,e))}function qo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Lo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=qo(u,i);++t<e;)r[t]=(o+(o=qo(u=i,i=n[t+1])))/2;return r[t]=o,r}function To(n){for(var t,e,r,u,i=[],o=Lo(n),a=-1,c=n.length-1;++a<c;)t=qo(n[a],n[a+1]),va(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Ro(n){return n.length<3?po(n):n[0]+wo(n,To(n))}function Do(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-ja,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Po(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=Et(e),b=Et(u),_=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Nr,r=Nr,u=0,i=Cr,o=Ce,a=po,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=zl.get(n)||po).key,l=a.reverse||a,s=a.closed?"M":"L",t):c
},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Uo(n){return n.radius}function jo(n){return[n.x,n.y]}function Fo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-ja;return[e*Math.cos(r),e*Math.sin(r)]}}function Ho(){return 64}function Oo(){return"circle"}function Yo(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Io(n,t,e){return xa(n,Fl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return H(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var c=u.time;o=i[r]={tween:new a,time:c,delay:u.delay,duration:u.duration,ease:u.ease},u=null,++i.count,ta.timer(function(u){function a(e){return i.active>r?s(!1):(i.active=r,o.event&&o.event.start.call(n,g,t),o.tween.forEach(function(e,r){(r=r.call(n,g,t))&&d.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return v.c=l(e||1)?Ce:l,1},0,c),void 0)}function l(t){if(i.active!==r)return s(!1);for(var e=t/f,u=h(e),o=d.length;o>0;)d[--o].call(n,u);return e>=1?s(!0):void 0}function s(u){return o.event&&o.event[u?"end":"interrupt"].call(n,g,t),--i.count?delete i[r]:delete n[e],1}var f,h,g=n.__data__,p=o.delay,v=oc,d=[];return v.t=p+c,u>=p?a(u-p):(v.c=a,void 0)},0,c)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Bl,u);return i==Bl.length?[t.year,Xi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Bl[i-1]<Bl[i]/u?i-1:i]:[Gl,Xi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Ui(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Hi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Ui(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Zi(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.0"};Date.now||(Date.now=function(){return+new Date});var ea=[].slice,ra=function(n){return ea.call(n)},ua=document,ia=ua.documentElement,oa=window;try{ra(ia.childNodes)[0].nodeType}catch(aa){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{ua.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.Element.prototype,sa=la.setAttribute,fa=la.setAttributeNS,ha=oa.CSSStyleDeclaration.prototype,ga=ha.setProperty;la.setAttribute=function(n,t){sa.call(this,n,t+"")},la.setAttributeNS=function(n,t,e){fa.call(this,n,t,e+"")},ha.setProperty=function(n,t,e){ga.call(this,n,t+"",e)}}ta.ascending=n,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},ta.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(n),.5):void 0};var pa=r(n);ta.bisectLeft=pa.left,ta.bisect=ta.bisectRight=pa.right,ta.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=0|Math.random()*i--,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var va=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(va(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},ta.map=function(n,t){var e=new a;if(n instanceof a)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var da="__proto__",ma="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),ta.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var ya=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new M,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=x(n);return n},M.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(Ma,"\\$&")};var Ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,xa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ba=function(n,t){return t.querySelector(n)},_a=function(n,t){return t.querySelectorAll(n)},wa=ia.matches||ia[m(ia,"matchesSelector")],Sa=function(n,t){return wa.call(n,t)};"function"==typeof Sizzle&&(ba=function(n,t){return Sizzle(n,t)[0]||null},_a=Sizzle,Sa=Sizzle.matchesSelector),ta.selection=function(){return Na};var ka=ta.selection.prototype=[];ka.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ka.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:Ea,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),Ea.hasOwnProperty(e)?{space:Ea[e],local:n}:n}},ka.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ka.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!C(n[u]).test(t))return!1;return!0}for(t in n)this.each(q(t,n[t]));return this}return this.each(q(n,t))},ka.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(T(n,t,e))},ka.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ka.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ka.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ka.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ka.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ka.remove=function(){return this.each(P)},ka.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=U(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=U(i);for(;f>r;++r)p[r]=U(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=O([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ka.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ka.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ka.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ka.sort=function(n){n=F.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ka.each=function(n){return H(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ka.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},ka.empty=function(){return!this.node()},ka.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ka.size=function(){var n=0;return H(this,function(){++n}),n};var Aa=[];ta.selection.enter=O,ta.selection.enter.prototype=Aa,Aa.append=ka.append,Aa.empty=ka.empty,Aa.node=ka.node,Aa.call=ka.call,Aa.size=ka.size,Aa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Aa.insert=function(n,t){return arguments.length<2&&(t=Y(this)),ka.insert.call(this,n,t)},ka.transition=function(n){for(var t,e,r=Dl||++Hl,u=Xo(n),i=[],o=Pl||{time:Date.now(),ease:ku,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Io(i,u,r)},ka.interrupt=function(n){var t=Xo(n);return this.each(function(){var n=this[t];n&&++n.active})},ta.select=function(n){var t=["string"==typeof n?ba(n,ua):n];return t.parentNode=ia,S([t])},ta.selectAll=function(n){var t=ra("string"==typeof n?_a(n,ua):n);return t.parentNode=ia,S([t])};var Na=ta.select(ia);ka.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(Z(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(Z(n,t,e))};var Ca=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ca.forEach(function(n){"on"+n in ua&&Ca.remove(n)});var za="onselectstart"in ua?null:m(ia.style,"userSelect"),qa=0;ta.mouse=function(n){return B(n,_())};var La=/WebKit/.test(oa.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=_().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return B(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(u()).on(i+d,a).on(o+d,c),y=$(),M=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,ta.mouse,G,"mousemove","mouseup"),i=t(W,ta.touch,J,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},ta.rebind(n,e,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=_().touches),t?ra(t).map(function(t){var e=B(n,t);return e.identifier=t.identifier,e}):[]};var Ta=1e-6,Ra=Ta*Ta,Da=Math.PI,Pa=2*Da,Ua=Pa-Ta,ja=Da/2,Fa=Da/180,Ha=180/Da,Oa=Math.SQRT2,Ya=2,Ia=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rt(v),o=i/(Ya*h)*(e*ut(Oa*t+v)-et(v));return[r+o*l,u+o*s,i*e/rt(Oa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Oa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Ia*f)/(2*i*Ya*h),p=(c*c-i*i-Ia*f)/(2*c*Ya*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Oa;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(z,s).on(Xa+".zoom",h).on("dblclick.zoom",g).on(T,f)}function t(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function e(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function r(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=e(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function i(t,e,i,o){t.__chart__={x:k.x,y:k.y,k:k.k},r(Math.pow(2,o)),u(v=e,i),t=ta.select(t),N>0&&(t=t.transition().duration(N)),t.call(n.event)}function o(){x&&x.domain(M.range().map(function(n){return(n-k.x)/k.k}).map(M.invert)),S&&S.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function a(n){C++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function l(n){--C||n({type:"zoomend"}),v=null}function s(){function n(){s=1,u(ta.mouse(r),h),c(o)}function e(){f.on(q,null).on(L,null),g(s&&ta.event.target===i),l(o)}var r=this,i=ta.event.target,o=R.of(r,arguments),s=0,f=ta.select(oa).on(q,n).on(L,e),h=t(ta.mouse(r)),g=$();I(r),a(o)}function f(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){var t=ta.event.target;ta.select(t).on(x,o).on(_,h),w.push(t);for(var e=ta.event.changedTouches,r=0,u=e.length;u>r;++r)d[e[r].identifier]=null;var a=n(),c=Date.now();if(1===a.length){if(500>c-y){var l=a[0];i(p,l,d[l.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),b()}y=c}else if(a.length>1){var l=a[0],s=a[1],f=l[0]-s[0],g=l[1]-s[1];m=f*f+g*g}}function o(){var n,t,e,i,o=ta.touches(p);I(p);for(var a=0,l=o.length;l>a;++a,i=null)if(e=o[a],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}y=null,u(n,t),c(v)}function h(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(w).on(M,null),S.on(z,s).on(T,f),E(),l(v)}var g,p=this,v=R.of(p,arguments),d={},m=0,M=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+M,_="touchend"+M,w=[],S=ta.select(p),E=$();e(),a(v),S.on(z,null).on(T,e)}function h(){var n=R.of(this,arguments);m?clearTimeout(m):(p=t(v=d||ta.mouse(this)),I(this),a(n)),m=setTimeout(function(){m=null,l(n)},50),b(),r(Math.pow(2,.002*Za())*k.k),u(v,p),c(n)}function g(){var n=ta.mouse(this),e=Math.log(k.k)/Math.LN2;i(this,n,t(n),ta.event.shiftKey?Math.ceil(e)-1:Math.floor(e)+1)}var p,v,d,m,y,M,x,_,S,k={x:0,y:0,k:1},E=[960,500],A=Va,N=250,C=0,z="mousedown.zoom",q="mousemove.zoom",L="mouseup.zoom",T="touchstart.zoom",R=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=R.of(this,arguments),t=k;Dl?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},a(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=v?v[0]:e/2,i=v?v[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){l(n)}).each("end.zoom",function(){l(n)}):(this.__chart__=k,a(n),c(n),l(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Va:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(d=t&&[+t[0],+t[1]],n):d},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(N=+t,n):N},n.x=function(t){return arguments.length?(x=t,M=t.copy(),k={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(S=t,_=t.copy(),k={x:0,y:0,k:1},n):S},ta.rebind(n,R,"on")};var Za,Va=[0,1/0],Xa="onwheel"in ua?(Za=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Za=function(){return ta.event.wheelDelta},"mousewheel"):(Za=function(){return-ta.event.detail},"MozMousePixelScroll");ta.color=ot,ot.prototype.toString=function(){return this.rgb()+""},ta.hsl=at;var $a=at.prototype=new ot;$a.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,this.l/n)},$a.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,n*this.l)},$a.rgb=function(){return ct(this.h,this.s,this.l)},ta.hcl=lt;var Ba=lt.prototype=new ot;Ba.brighter=function(n){return new lt(this.h,this.c,Math.min(100,this.l+Wa*(arguments.length?n:1)))},Ba.darker=function(n){return new lt(this.h,this.c,Math.max(0,this.l-Wa*(arguments.length?n:1)))},Ba.rgb=function(){return st(this.h,this.c,this.l).rgb()},ta.lab=ft;var Wa=18,Ja=.95047,Ga=1,Ka=1.08883,Qa=ft.prototype=new ot;Qa.brighter=function(n){return new ft(Math.min(100,this.l+Wa*(arguments.length?n:1)),this.a,this.b)},Qa.darker=function(n){return new ft(Math.max(0,this.l-Wa*(arguments.length?n:1)),this.a,this.b)},Qa.rgb=function(){return ht(this.l,this.a,this.b)},ta.rgb=mt;var nc=mt.prototype=new ot;nc.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new mt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mt(u,u,u)},nc.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mt(n*this.r,n*this.g,n*this.b)},nc.hsl=function(){return _t(this.r,this.g,this.b)},nc.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var tc=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});tc.forEach(function(n,t){tc.set(n,yt(t))}),ta.functor=Et,ta.xhr=Nt(At),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Ct(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var ec,rc,uc,ic,oc,ac=oa[m(oa,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};rc?rc.n=i:ec=i,rc=i,uc||(ic=clearTimeout(ic),uc=1,ac(Lt))},ta.timer.flush=function(){Tt(),Rt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var cc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Pt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Dt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),cc[8+e/3]};var lc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,sc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Dt(n,t))).toFixed(Math.max(0,Math.min(20,Dt(n*(1+1e-15),t))))}}),fc=ta.time={},hc=Date;Ft.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){gc.setUTCDate.apply(this._,arguments)},setDay:function(){gc.setUTCDay.apply(this._,arguments)},setFullYear:function(){gc.setUTCFullYear.apply(this._,arguments)},setHours:function(){gc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){gc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){gc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){gc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){gc.setUTCSeconds.apply(this._,arguments)},setTime:function(){gc.setTime.apply(this._,arguments)}};var gc=Date.prototype;fc.year=Ht(function(n){return n=fc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),fc.years=fc.year.range,fc.years.utc=fc.year.utc.range,fc.day=Ht(function(n){var t=new hc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),fc.days=fc.day.range,fc.days.utc=fc.day.utc.range,fc.dayOfYear=function(n){var t=fc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=fc[n]=Ht(function(n){return(n=fc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});fc[n+"s"]=e.range,fc[n+"s"].utc=e.utc.range,fc[n+"OfYear"]=function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)}}),fc.week=fc.sunday,fc.weeks=fc.sunday.range,fc.weeks.utc=fc.sunday.utc.range,fc.weekOfYear=fc.sundayOfYear;var pc={"-":"",_:" ",0:"0"},vc=/^\s*\d+/,dc=/^%/;ta.locale=function(n){return{numberFormat:Ut(n),timeFormat:Yt(n)}};var mc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=mc.numberFormat,ta.geo={},le.prototype={s:0,t:0,add:function(n){se(n,this.t,yc),se(yc.s,this.s,this),this.s?this.t+=yc.t:this.s=yc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var yc=new le;ta.geo.stream=function(n,t){n&&Mc.hasOwnProperty(n.type)?Mc[n.type](n,t):fe(n,t)};var Mc={Feature:function(n,t){fe(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)fe(e[r].geometry,t)}},xc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){he(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t,0)},Polygon:function(n,t){ge(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ge(e[r],t)
},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)fe(e[r],t)}};ta.geo.area=function(n){return bc=0,ta.geo.stream(n,wc),bc};var bc,_c=new le,wc={sphere:function(){bc+=4*Da},point:y,lineStart:y,lineEnd:y,polygonStart:function(){_c.reset(),wc.lineStart=pe},polygonEnd:function(){var n=2*_c;bc+=0>n?4*Da+n:n,wc.lineStart=wc.lineEnd=wc.point=y}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=ve([t*Fa,e*Fa]);if(m){var u=me(m,r),i=[u[1],-u[0],0],o=me(i,u);xe(o),o=be(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ha*l,d=va(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ha;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ha;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=va(r)>180?r+(r>0?360:-360):r}else v=n,d=e;wc.point(n,e),t(n,e)}function i(){wc.lineStart()}function o(){u(v,d),wc.lineEnd(),va(y)>Ta&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,wc.polygonStart()},polygonEnd:function(){wc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>_c?(s=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){Sc=kc=Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,Dc);var t=Lc,e=Tc,r=Rc,u=t*t+e*e+r*r;return Ra>u&&(t=Cc,e=zc,r=qc,Ta>kc&&(t=Ec,e=Ac,r=Nc),u=t*t+e*e+r*r,Ra>u)?[0/0,0/0]:[Math.atan2(e,t)*Ha,tt(r/Math.sqrt(u))*Ha]};var Sc,kc,Ec,Ac,Nc,Cc,zc,qc,Lc,Tc,Rc,Dc={sphere:y,point:we,lineStart:ke,lineEnd:Ee,polygonStart:function(){Dc.lineStart=Ae},polygonEnd:function(){Dc.lineStart=ke}},Pc=Te(Ce,Ue,Fe,[-Da,-Da/2]),Uc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ie(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ze(Ve)}).raw=Ve,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ta,f+.12*l+Ta],[s-.214*l-Ta,f+.234*l-Ta]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ta,f+.166*l+Ta],[s-.115*l-Ta,f+.234*l-Ta]]).stream(c).point,n},n.scale(1070)};var jc,Fc,Hc,Oc,Yc,Ic,Zc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Fc=0,Zc.lineStart=Xe},polygonEnd:function(){Zc.lineStart=Zc.lineEnd=Zc.point=y,jc+=va(Fc/2)}},Vc={point:$e,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},Xc={point:Je,lineStart:Ge,lineEnd:Ke,polygonStart:function(){Xc.lineStart=Qe},polygonEnd:function(){Xc.point=Je,Xc.lineStart=Ge,Xc.lineEnd=Ke}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return jc=0,ta.geo.stream(n,u(Zc)),jc},n.centroid=function(n){return Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,u(Xc)),Rc?[Lc/Rc,Tc/Rc]:qc?[Cc/qc,zc/qc]:Nc?[Ec/Nc,Ac/Nc]:[0/0,0/0]},n.bounds=function(n){return Yc=Ic=-(Hc=Oc=1/0),ta.geo.stream(n,u(Vc)),[[Hc,Oc],[Yc,Ic]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||er(n):At,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Be:new nr(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new rr(t);for(var r in n)e[r]=n[r];return e}}},rr.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ir,ta.geo.projectionMutator=or,(ta.geo.equirectangular=function(){return ir(cr)}).raw=cr.invert=cr,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t}return n=sr(n[0]%360*Fa,n[1]*Fa,n.length>2?n[2]*Fa:0),t.invert=function(t){return t=n.invert(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t},t},lr.invert=cr,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=sr(-n[0]*Fa,-n[1]*Fa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ha,n[1]*=Ha}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=pr((t=+r)*Fa,u*Fa),n):t},n.precision=function(r){return arguments.length?(e=pr(t*Fa,(u=+r)*Fa),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Fa,u=n[1]*Fa,i=t[1]*Fa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return va(n%d)>Ta}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return va(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=dr(a,o,90),f=mr(r,e,y),h=dr(l,c,90),g=mr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=yr,u=Mr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return xr(n[0]*Fa,n[1]*Fa,t[0]*Fa,t[1]*Fa)},ta.geo.length=function(n){return $c=0,ta.geo.stream(n,Bc),$c};var $c,Bc={sphere:y,point:y,lineStart:br,lineEnd:y,polygonStart:y,polygonEnd:y},Wc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ir(Wc)}).raw=Wc;var Jc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(ta.geo.azimuthalEquidistant=function(){return ir(Jc)}).raw=Jc,(ta.geo.conicConformal=function(){return Ze(wr)}).raw=wr,(ta.geo.conicEquidistant=function(){return Ze(Sr)}).raw=Sr;var Gc=_r(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ir(Gc)}).raw=Gc,kr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-ja]},(ta.geo.mercator=function(){return Er(kr)}).raw=kr;var Kc=_r(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ir(Kc)}).raw=Kc;var Qc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ir(Qc)}).raw=Qc,Ar.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-ja]},(ta.geo.transverseMercator=function(){var n=Er(Ar),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ar,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(qr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=zr(a),s=zr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Nr,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return xa(n,nl),n};var nl=ta.geom.polygon.prototype=[];nl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},nl.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},nl.clip=function(n){for(var t,e,r,u,i,o,a=Rr(n),c=-1,l=this.length-Rr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Lr(o,s,u)?(Lr(i,s,u)||n.push(Tr(i,o,s,u)),n.push(o)):Lr(i,s,u)&&n.push(Tr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var tl,el,rl,ul,il,ol=[],al=[];Yr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Zr),t.length},nu.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},tu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=iu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,uu(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(uu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?iu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,uu(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ru(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,uu(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ru(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,uu(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return ou(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Nr,u=Cr,i=r,o=u,a=cl;return n?t(n):(t.links=function(n){return ou(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ou(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Zr),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&cu(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?cl:n,t):a===cl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===cl?null:a&&a[1]},t)};var cl=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(va(c-e)+va(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=fu()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=Et(a),x=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=fu();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){hu(n,k,v,d,m,y)},k.find=function(n){return gu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Nr,c=Cr;return(o=arguments.length)?(a=lu,c=su,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=pu,ta.interpolateObject=vu,ta.interpolateNumber=du,ta.interpolateString=mu;var ll=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sl=new RegExp(ll.source,"g");ta.interpolate=yu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?tc.has(t)||/^(#|rgb\(|hsl\()/.test(t)?pu:mu:t instanceof ot?pu:Array.isArray(t)?Mu:"object"===e&&isNaN(t)?vu:du)(n,t)}],ta.interpolateArray=Mu;var fl=function(){return At},hl=ta.map({linear:fl,poly:Eu,quad:function(){return wu},cubic:function(){return Su},sin:function(){return Au},exp:function(){return Nu},circle:function(){return Cu},elastic:zu,back:qu,bounce:function(){return Lu}}),gl=ta.map({"in":At,out:bu,"in-out":_u,"out-in":function(n){return _u(bu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=hl.get(e)||fl,r=gl.get(r)||At,xu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Tu,ta.interpolateHsl=Ru,ta.interpolateLab=Du,ta.interpolateRound=Pu,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Uu(e?e.matrix:pl)})(n)},Uu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var pl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Ou,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Zu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Pa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=vl,h=dl,g=-30,p=ml,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,M,x,b=m.length,_=y.length;for(e=0;_>e;++e)a=y[e],f=a.source,h=a.target,M=h.x-f.x,x=h.y-f.y,(p=M*M+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,M*=p,x*=p,h.x-=M*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=M*(d=1-d),f.y+=x*d);if((d=r*v)&&(M=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(M-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Gu(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(At).on("dragstart.force",$u).on("drag.force",t).on("dragend.force",Bu)),arguments.length?(this.on("mouseover.force",Wu).on("mouseout.force",Ju).call(e),void 0):e},ta.rebind(a,c,"on")};var vl=20,dl=1,ml=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return ni(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ri,e=ti,r=ei;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Qu(t,function(n){n.children&&(n.value=0)}),ni(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Ku(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===yl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=yl,r=0,u=Pa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var yl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=At,e=ci,r=li,u=ai,i=ii,o=oi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ml.get(t)||ci,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:xl.get(t)||li,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var Ml=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(si),i=n.map(fi),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ci}),xl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:li});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=vi,u=gi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return pi(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,ni(a,function(n){n.r=+s(n.value)}),ni(a,xi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;ni(a,function(n){n.r+=f}),ni(a,xi),ni(a,function(n){n.r-=f})}return wi(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(di),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Ku(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(ni(h,e),h.parent.m=-h.z,Qu(h,r),l)Qu(f,i);else{var g=f,p=f,v=f;Qu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Qu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ci(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ai(o),u=Ei(u),o&&u;)c=Ei(c),i=Ai(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ni(zi(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ai(i)&&(i.t=o,i.m+=f-s),u&&!Ei(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=ki,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Ku(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;ni(c,function(n){var t=n.children;t&&t.length?(n.x=Li(t),n.y=qi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Ti(c),f=Ri(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return ni(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=ki,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Ku(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Di,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Di(t):Pi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Pi(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Di:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Ku(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;
do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var bl={floor:At,ceil:At};ta.scale.linear=function(){return Ii([0,1],[0,1],yu,!1)};var _l={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Gi(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var wl=ta.format(".0e"),Sl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Ki(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return no([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(kl)},ta.scale.category20=function(){return ta.scale.ordinal().range(El)},ta.scale.category20b=function(){return ta.scale.ordinal().range(Al)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Nl)};var kl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt),El=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt),Al=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt),Nl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt);ta.scale.quantile=function(){return to([],[])},ta.scale.quantize=function(){return eo(0,1,[0,1])},ta.scale.threshold=function(){return ro([.5],[0,1])},ta.scale.identity=function(){return uo([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-ja,f=a.apply(this,arguments)-ja,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ua)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===Cl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=tt(d/l*Math.sin(m))),n&&(E=tt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=Da?0:1;if(A&&fo(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=Da?0:1;if(E&&fo(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Tr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=ho(null==S?[_,w]:[S,k],[y,M],l,H,g),Y=ho([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^fo(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",H,",",H," 0 0,",v," ",Y[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",Y[0])}else N.push("M",y,",",M);if(null!=S){var I=Math.min(p,(n-F)/(j-1)),Z=ho([y,M],[S,k],n,-I,g),V=ho([_,w],null==x?[y,M]:[x,b],n,-I,g);p===I?N.push("L",V[0],"A",I,",",I," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^fo(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",I,",",I," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",I,",",I," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=oo,r=ao,u=io,i=Cl,o=co,a=lo,c=so;return n.innerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=Et(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Cl?Cl:Et(t),n):i},n.startAngle=function(t){return arguments.length?(o=Et(t),n):o},n.endAngle=function(t){return arguments.length?(a=Et(t),n):a},n.padAngle=function(t){return arguments.length?(c=Et(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-ja;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Cl="auto";ta.svg.line=function(){return go(At)};var zl=ta.map({linear:po,"linear-closed":vo,step:mo,"step-before":yo,"step-after":Mo,basis:ko,"basis-open":Eo,"basis-closed":Ao,bundle:No,cardinal:_o,"cardinal-open":xo,"cardinal-closed":bo,monotone:Ro});zl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ql=[0,2/3,1/3,0],Ll=[0,1/3,2/3,0],Tl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=go(Do);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},yo.reverse=Mo,Mo.reverse=yo,ta.svg.area=function(){return Po(At)},ta.svg.area.radial=function(){var n=Po(Do);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-ja,s=l.call(n,u,r)-ja;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=yr,o=Mr,a=Uo,c=co,l=lo;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(l=Et(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=yr,e=Mr,r=jo;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=jo,e=n.projection;return n.projection=function(n){return arguments.length?e(Fo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(Rl.get(t.call(this,n,r))||Yo)(e.call(this,n,r))}var t=Oo,e=Ho;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var Rl=ta.map({circle:Yo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*jl)),e=t*jl;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ul),e=t*Ul/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ul),e=t*Ul/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=Rl.keys();var Dl,Pl,Ul=Math.sqrt(3),jl=Math.tan(30*Fa),Fl=[],Hl=0;Fl.call=ka.call,Fl.empty=ka.empty,Fl.node=ka.node,Fl.size=ka.size,ta.transition=function(n){return arguments.length?Dl?n.transition():n:Na.transition()},ta.transition.prototype=Fl,Fl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=k(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Io(o,i,u)},Fl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=E(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Io(c,a,o)},Fl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Io(u,this.namespace,this.id)},Fl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):H(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Fl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Ou:yu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Fl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Fl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=oa.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=yu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Zo(this,"style."+n,t,u)},Fl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,oa.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Fl.text=function(n){return Zo(this,"text",n,Vo)},Fl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Fl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),H(this,function(r){r[e][t].ease=n}))},Fl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:H(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Fl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:H(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Fl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Pl,i=Dl;Dl=e,H(this,function(t,u,i){Pl=t[r][e],n.call(t,t.__data__,u,i)}),Pl=u,Dl=i}else H(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Fl.transition=function(){for(var n,t,e,r,u=this.id,i=++Hl,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Io(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=ta.transition(p.exit()).style("opacity",Ta).remove(),m=ta.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,M=ji(f),x=l.selectAll(".domain").data([0]),b=(x.enter().append("path").attr("class","domain"),ta.transition(x));v.append("line"),v.append("text");var _,w,S,k,E=v.select("line"),A=m.select("line"),N=p.select("text").text(g),C=v.select("text"),z=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,_="x",S="y",w="x2",k="y2",N.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),b.attr("d","M"+M[0]+","+q*i+"V0H"+M[1]+"V"+q*i)):(n=Wo,_="y",S="x",w="y2",k="x2",N.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),b.attr("d","M"+q*i+","+M[0]+"H0V"+M[1]+"H"+q*i)),E.attr(k,q*u),C.attr(S,q*y),A.attr(w,0).attr(k,q*u),z.attr(_,0).attr(S,q*y),f.rangeBand){var L=f,T=L.rangeBand()/2;s=f=function(n){return L(n)+T}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=Ol,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Yl?t+"":Ol,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ol="bottom",Yl={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(i){i.each(function(){var i=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Il[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=ta.transition(i),h=ta.transition(o);c&&(s=ji(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=ji(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==ta.event.keyCode&&(N||(y=null,z[0]-=s[1],z[1]-=f[1],N=2),b())}function p(){32==ta.event.keyCode&&2==N&&(z[0]+=s[1],z[1]+=f[1],N=0,b())}function v(){var n=ta.mouse(x),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),N||(ta.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:N?"move":"resize"}))}function d(n,t,e){var r,u,a=ji(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return N&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],N?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),C(),w({type:"brushend"})}var y,M,x=this,_=ta.select(ta.event.target),w=a.of(x,arguments),S=ta.select(x),k=_.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,N=_.classed("extent"),C=$(),z=ta.mouse(x),q=ta.select(oa).on("keydown.brush",u).on("keyup.brush",p);if(ta.event.changedTouches?q.on("touchmove.brush",v).on("touchend.brush",m):q.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),N)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var L=+/w$/.test(k),T=+/^n/.test(k);M=[s[1-L]-z[0],f[1-T]-z[1]],z[0]=s[L],z[1]=f[T]}else ta.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Zl[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Dl?ta.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=Mu(s,t.x),r=Mu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Zl[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Zl[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},ta.rebind(n,a,"on")};var Il={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Zl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Vl=fc.format=mc.timeFormat,Xl=Vl.utc,$l=Xl("%Y-%m-%dT%H:%M:%S.%LZ");Vl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:$l,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=$l.toString,fc.second=Ht(function(n){return new hc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),fc.seconds=fc.second.range,fc.seconds.utc=fc.second.utc.range,fc.minute=Ht(function(n){return new hc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),fc.minutes=fc.minute.range,fc.minutes.utc=fc.minute.utc.range,fc.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new hc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),fc.hours=fc.hour.range,fc.hours.utc=fc.hour.utc.range,fc.month=Ht(function(n){return n=fc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),fc.months=fc.month.range,fc.months.utc=fc.month.utc.range;var Bl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Wl=[[fc.second,1],[fc.second,5],[fc.second,15],[fc.second,30],[fc.minute,1],[fc.minute,5],[fc.minute,15],[fc.minute,30],[fc.hour,1],[fc.hour,3],[fc.hour,6],[fc.hour,12],[fc.day,1],[fc.day,2],[fc.week,1],[fc.month,1],[fc.month,3],[fc.year,1]],Jl=Vl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ce]]),Gl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:At,ceil:At};Wl.year=fc.year,fc.scale=function(){return Go(ta.scale.linear(),Wl,Jl)};var Kl=Wl.map(function(n){return[n[0].utc,n[1]]}),Ql=Xl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ce]]);Kl.year=fc.year.utc,fc.scale.utc=function(){return Go(ta.scale.linear(),Kl,Ql)},ta.text=Nt(function(n){return n.responseText}),ta.json=function(n,t){return Ct(n,"application/json",Qo,t)},ta.html=function(n,t){return Ct(n,"text/html",na,t)},ta.xml=Nt(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();
!function(a){"use strict";function b(a){var b=this.internal=new c(this);b.loadConfig(a),b.init(),function d(a,b,c){Object.keys(a).forEach(function(e){b[e]=a[e].bind(c),Object.keys(a[e]).length>0&&d(a[e],b[e],c)})}(e,this,this)}function c(b){var c=this;c.d3=a.d3?a.d3:"undefined"!=typeof require?require("d3"):void 0,c.api=b,c.config=c.getDefaultConfig(),c.data={},c.cache={},c.axes={}}function d(a,b){function c(a,b){a.attr("transform",function(a){return"translate("+Math.ceil(b(a)+t)+", 0)"})}function d(a,b){a.attr("transform",function(a){return"translate(0,"+Math.ceil(b(a))+")"})}function e(a){var b=a[0],c=a[a.length-1];return c>b?[b,c]:[c,b]}function f(a){var b,c,d=[];if(a.ticks)return a.ticks.apply(a,m);for(c=a.domain(),b=Math.ceil(c[0]);b<c[1];b++)d.push(b);return d.length>0&&d[0]>0&&d.unshift(d[0]-(d[1]-d[0])),d}function g(){var a,c=o.copy();return b.isCategory&&(a=o.domain(),c.domain([a[0],a[1]-1])),c}function h(a){return l?l(a):a}function i(a){if(w)return w;var b={h:11.5,w:5.5};return a.select("text").text(h).each(function(a){var c=this.getBoundingClientRect(),d=h(a),e=c.height,f=d?c.width/d.length:void 0;e&&f&&(b.h=e,b.w=f)}).text(""),w=b,b}function j(j){j.each(function(){function j(a,c){function d(a,b){f=void 0;for(var h=1;h<b.length;h++)if(" "===b.charAt(h)&&(f=h),e=b.substr(0,h+1),g=O.w*e.length,g>c)return d(a.concat(b.substr(0,f?f:h)),b.slice(f?f+1:h));return a.concat(b)}var e,f,g,i=h(a),j=[];return"[object Array]"===Object.prototype.toString.call(i)?i:((!c||0>=c)&&(c=R?95:b.isCategory?Math.ceil(z(A[1])-z(A[0]))-12:110),d(j,i+""))}function l(a,b){var c=O.h;return 0===b&&(c="left"===p||"right"===p?-((P[a.index]-1)*(O.h/2)-3):".71em"),c}function m(a){var b=o(a)+(n?0:t);return F[0]<b&&b<F[1]?q:0}var u,v,w,x=a.select(this),y=this.__chart__||o,z=this.__chart__=g(),A=s?s:f(z),B=x.selectAll(".tick").data(A,z),C=B.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),D=B.exit().remove(),E=a.transition(B).style("opacity",1),F=o.rangeExtent?o.rangeExtent():e(o.range()),G=x.selectAll(".domain").data([0]),H=(G.enter().append("path").attr("class","domain"),a.transition(G));C.append("line"),C.append("text");var I=C.select("line"),J=E.select("line"),K=C.select("text"),L=E.select("text");b.isCategory?(t=Math.ceil((z(1)-z(0))/2),v=n?0:t,w=n?t:0):t=v=0;var M,N,O=i(x.select(".tick")),P=[],Q=Math.max(q,0)+r,R="left"===p||"right"===p;switch(M=B.select("text"),N=M.selectAll("tspan").data(function(a,c){var d=b.tickMultiline?j(a,b.tickWidth):[].concat(h(a));return P[c]=d.length,d.map(function(a){return{index:c,splitted:a}})}),N.enter().append("tspan"),N.exit().remove(),N.text(function(a){return a.splitted}),p){case"bottom":u=c,I.attr("y2",q),K.attr("y",Q),J.attr("x1",v).attr("x2",v).attr("y2",m),L.attr("x",0).attr("y",Q),M.style("text-anchor","middle"),N.attr("x",0).attr("dy",l),H.attr("d","M"+F[0]+","+k+"V0H"+F[1]+"V"+k);break;case"top":u=c,I.attr("y2",-q),K.attr("y",-Q),J.attr("x2",0).attr("y2",-q),L.attr("x",0).attr("y",-Q),M.style("text-anchor","middle"),N.attr("x",0).attr("dy","0em"),H.attr("d","M"+F[0]+","+-k+"V0H"+F[1]+"V"+-k);break;case"left":u=d,I.attr("x2",-q),K.attr("x",-Q),J.attr("x2",-q).attr("y1",w).attr("y2",w),L.attr("x",-Q).attr("y",t),M.style("text-anchor","end"),N.attr("x",-Q).attr("dy",l),H.attr("d","M"+-k+","+F[0]+"H0V"+F[1]+"H"+-k);break;case"right":u=d,I.attr("x2",q),K.attr("x",Q),J.attr("x2",q).attr("y2",0),L.attr("x",Q).attr("y",0),M.style("text-anchor","start"),N.attr("x",Q).attr("dy",l),H.attr("d","M"+k+","+F[0]+"H0V"+F[1]+"H"+k)}if(z.rangeBand){var S=z,T=S.rangeBand()/2;y=z=function(a){return S(a)+T}}else y.rangeBand?y=z:D.call(u,z);C.call(u,y),E.call(u,z)})}var k,l,m,n,o=a.scale.linear(),p="bottom",q=6,r=3,s=null,t=0,u=!0;return b=b||{},k=b.withOuterTick?6:0,j.scale=function(a){return arguments.length?(o=a,j):o},j.orient=function(a){return arguments.length?(p=a in{top:1,right:1,bottom:1,left:1}?a+"":"bottom",j):p},j.tickFormat=function(a){return arguments.length?(l=a,j):l},j.tickCentered=function(a){return arguments.length?(n=a,j):n},j.tickOffset=function(){return t},j.ticks=function(){return arguments.length?(m=arguments,j):m},j.tickCulling=function(a){return arguments.length?(u=a,j):u},j.tickValues=function(a){if("function"==typeof a)s=function(){return a(o.domain())};else{if(!arguments.length)return s;s=a}return j},j}var e,f,g={version:"0.4.9"};g.generate=function(a){return new b(a)},g.chart={fn:b.prototype,internal:{fn:c.prototype}},e=g.chart.fn,f=g.chart.internal.fn,f.init=function(){var a=this,b=a.config;if(a.initParams(),b.data_url)a.convertUrlToData(b.data_url,b.data_mimeType,b.data_keys,a.initWithData);else if(b.data_json)a.initWithData(a.convertJsonToData(b.data_json,b.data_keys));else if(b.data_rows)a.initWithData(a.convertRowsToData(b.data_rows));else{if(!b.data_columns)throw Error("url or json or rows or columns is required.");a.initWithData(a.convertColumnsToData(b.data_columns))}},f.initParams=function(){var a=this,b=a.d3,c=a.config;a.clipId="c3-"+ +new Date+"-clip",a.clipIdForXAxis=a.clipId+"-xaxis",a.clipIdForYAxis=a.clipId+"-yaxis",a.clipIdForGrid=a.clipId+"-grid",a.clipIdForSubchart=a.clipId+"-subchart",a.clipPath=a.getClipPath(a.clipId),a.clipPathForXAxis=a.getClipPath(a.clipIdForXAxis),a.clipPathForYAxis=a.getClipPath(a.clipIdForYAxis),a.clipPathForGrid=a.getClipPath(a.clipIdForGrid),a.clipPathForSubchart=a.getClipPath(a.clipIdForSubchart),a.dragStart=null,a.dragging=!1,a.flowing=!1,a.cancelClick=!1,a.mouseover=!1,a.transiting=!1,a.color=a.generateColor(),a.levelColor=a.generateLevelColor(),a.dataTimeFormat=c.data_xLocaltime?b.time.format:b.time.format.utc,a.axisTimeFormat=c.axis_x_localtime?b.time.format:b.time.format.utc,a.defaultAxisTimeFormat=a.axisTimeFormat.multi([[".%L",function(a){return a.getMilliseconds()}],[":%S",function(a){return a.getSeconds()}],["%I:%M",function(a){return a.getMinutes()}],["%I %p",function(a){return a.getHours()}],["%-m/%-d",function(a){return a.getDay()&&1!==a.getDate()}],["%-m/%-d",function(a){return 1!==a.getDate()}],["%-m/%-d",function(a){return a.getMonth()}],["%Y/%-m/%-d",function(){return!0}]]),a.hiddenTargetIds=[],a.hiddenLegendIds=[],a.focusedTargetIds=[],a.defocusedTargetIds=[],a.xOrient=c.axis_rotated?"left":"bottom",a.yOrient=c.axis_rotated?c.axis_y_inner?"top":"bottom":c.axis_y_inner?"right":"left",a.y2Orient=c.axis_rotated?c.axis_y2_inner?"bottom":"top":c.axis_y2_inner?"left":"right",a.subXOrient=c.axis_rotated?"left":"bottom",a.isLegendRight="right"===c.legend_position,a.isLegendInset="inset"===c.legend_position,a.isLegendTop="top-left"===c.legend_inset_anchor||"top-right"===c.legend_inset_anchor,a.isLegendLeft="top-left"===c.legend_inset_anchor||"bottom-left"===c.legend_inset_anchor,a.legendStep=0,a.legendItemWidth=0,a.legendItemHeight=0,a.currentMaxTickWidths={x:0,y:0,y2:0},a.rotated_padding_left=30,a.rotated_padding_right=c.axis_rotated&&!c.axis_x_show?0:30,a.rotated_padding_top=5,a.withoutFadeIn={},a.intervalForObserveInserted=void 0,a.axes.subx=b.selectAll([])},f.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},f.initWithData=function(b){var c,d,e=this,f=e.d3,g=e.config,h=!0;e.initPie&&e.initPie(),e.initBrush&&e.initBrush(),e.initZoom&&e.initZoom(),e.selectChart="function"==typeof g.bindto.node?g.bindto:f.select(g.bindto),e.selectChart.empty()&&(e.selectChart=f.select(document.createElement("div")).style("opacity",0),e.observeInserted(e.selectChart),h=!1),e.selectChart.html("").classed("c3",!0),e.data.xs={},e.data.targets=e.convertDataToTargets(b),g.data_filter&&(e.data.targets=e.data.targets.filter(g.data_filter)),g.data_hide&&e.addHiddenTargetIds(g.data_hide===!0?e.mapToIds(e.data.targets):g.data_hide),g.legend_hide&&e.addHiddenLegendIds(g.legend_hide===!0?e.mapToIds(e.data.targets):g.legend_hide),e.hasType("gauge")&&(g.legend_show=!1),e.updateSizes(),e.updateScales(),e.x.domain(f.extent(e.getXDomain(e.data.targets))),e.y.domain(e.getYDomain(e.data.targets,"y")),e.y2.domain(e.getYDomain(e.data.targets,"y2")),e.subX.domain(e.x.domain()),e.subY.domain(e.y.domain()),e.subY2.domain(e.y2.domain()),e.orgXDomain=e.x.domain(),e.brush&&e.brush.scale(e.subX),g.zoom_enabled&&e.zoom.scale(e.x),e.svg=e.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return g.onmouseover.call(e)}).on("mouseleave",function(){return g.onmouseout.call(e)}),c=e.svg.append("defs"),e.clipChart=e.appendClip(c,e.clipId),e.clipXAxis=e.appendClip(c,e.clipIdForXAxis),e.clipYAxis=e.appendClip(c,e.clipIdForYAxis),e.clipGrid=e.appendClip(c,e.clipIdForGrid),e.clipSubchart=e.appendClip(c,e.clipIdForSubchart),e.updateSvgSize(),d=e.main=e.svg.append("g").attr("transform",e.getTranslate("main")),e.initSubchart&&e.initSubchart(),e.initTooltip&&e.initTooltip(),e.initLegend&&e.initLegend(),d.append("text").attr("class",i.text+" "+i.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),e.initRegion(),e.initGrid(),d.append("g").attr("clip-path",e.clipPath).attr("class",i.chart),g.grid_lines_front&&e.initGridLines(),e.initEventRect(),e.initChartElements(),d.insert("rect",g.zoom_privileged?null:"g."+i.regions).attr("class",i.zoomRect).attr("width",e.width).attr("height",e.height).style("opacity",0).on("dblclick.zoom",null),g.axis_x_extent&&e.brush.extent(e.getDefaultExtent()),e.initAxis(),e.updateTargets(e.data.targets),h&&(e.updateDimension(),e.config.oninit.call(e),e.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),null==a.onresize&&(a.onresize=e.generateResize()),a.onresize.add&&(a.onresize.add(function(){g.onresize.call(e)}),a.onresize.add(function(){e.api.flush()}),a.onresize.add(function(){g.onresized.call(e)})),e.api.element=e.selectChart.node()},f.smoothLines=function(a,b){var c=this;"grid"===b&&a.each(function(){var a=c.d3.select(this),b=a.attr("x1"),d=a.attr("x2"),e=a.attr("y1"),f=a.attr("y2");a.attr({x1:Math.ceil(b),x2:Math.ceil(d),y1:Math.ceil(e),y2:Math.ceil(f)})})},f.updateSizes=function(){var a=this,b=a.config,c=a.legend?a.getLegendHeight():0,d=a.legend?a.getLegendWidth():0,e=a.isLegendRight||a.isLegendInset?0:c,f=a.hasArcType(),g=b.axis_rotated||f?0:a.getHorizontalAxisHeight("x"),h=b.subchart_show&&!f?b.subchart_size_height+g:0;a.currentWidth=a.getCurrentWidth(),a.currentHeight=a.getCurrentHeight(),a.margin=b.axis_rotated?{top:a.getHorizontalAxisHeight("y2")+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:a.getHorizontalAxisHeight("y")+e+a.getCurrentPaddingBottom(),left:h+(f?0:a.getCurrentPaddingLeft())}:{top:4+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:g+h+e+a.getCurrentPaddingBottom(),left:f?0:a.getCurrentPaddingLeft()},a.margin2=b.axis_rotated?{top:a.margin.top,right:0/0,bottom:20+e,left:a.rotated_padding_left}:{top:a.currentHeight-h-e,right:0/0,bottom:g+e,left:a.margin.left},a.margin3={top:0,right:0/0,bottom:0,left:0},a.updateSizeForLegend&&a.updateSizeForLegend(c,d),a.width=a.currentWidth-a.margin.left-a.margin.right,a.height=a.currentHeight-a.margin.top-a.margin.bottom,a.width<0&&(a.width=0),a.height<0&&(a.height=0),a.width2=b.axis_rotated?a.margin.left-a.rotated_padding_left-a.rotated_padding_right:a.width,a.height2=b.axis_rotated?a.height:a.currentHeight-a.margin2.top-a.margin2.bottom,a.width2<0&&(a.width2=0),a.height2<0&&(a.height2=0),a.arcWidth=a.width-(a.isLegendRight?d+10:0),a.arcHeight=a.height-(a.isLegendRight?0:10),a.hasType("gauge")&&(a.arcHeight+=a.height-a.getGaugeLabelHeight()),a.updateRadius&&a.updateRadius(),a.isLegendRight&&f&&(a.margin3.left=a.arcWidth/2+1.1*a.radiusExpanded)},f.updateTargets=function(a){var b=this;b.updateTargetsForText(a),b.updateTargetsForBar(a),b.updateTargetsForLine(a),b.hasArcType()&&b.updateTargetsForArc&&b.updateTargetsForArc(a),b.updateTargetsForSubchart&&b.updateTargetsForSubchart(a),b.showTargets()},f.showTargets=function(){var a=this;a.svg.selectAll("."+i.target).filter(function(b){return a.isTargetToShow(b.id)}).transition().duration(a.config.transition_duration).style("opacity",1)},f.redraw=function(a,b){var c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,u,v,w,x,y,z,A,B,C,D,E,F,G,H=this,I=H.main,J=H.d3,K=H.config,L=H.getShapeIndices(H.isAreaType),M=H.getShapeIndices(H.isBarType),N=H.getShapeIndices(H.isLineType),O=H.hasArcType(),P=H.filterTargetsToShow(H.data.targets),Q=H.xv.bind(H);if(a=a||{},c=t(a,"withY",!0),d=t(a,"withSubchart",!0),e=t(a,"withTransition",!0),h=t(a,"withTransform",!1),j=t(a,"withUpdateXDomain",!1),k=t(a,"withUpdateOrgXDomain",!1),l=t(a,"withTrimXDomain",!0),p=t(a,"withUpdateXAxis",j),m=t(a,"withLegend",!1),n=t(a,"withEventRect",!0),o=t(a,"withDimension",!0),f=t(a,"withTransitionForExit",e),g=t(a,"withTransitionForAxis",e),w=e?K.transition_duration:0,x=f?w:0,y=g?w:0,b=b||H.generateAxisTransitions(y),m&&K.legend_show?H.updateLegend(H.mapToIds(H.data.targets),a,b):o&&H.updateDimension(!0),H.isCategorized()&&0===P.length&&H.x.domain([0,H.axes.x.selectAll(".tick").size()]),P.length?(H.updateXDomain(P,j,k,l),K.axis_x_tick_values||(B=H.updateXAxisTickValues(P))):(H.xAxis.tickValues([]),H.subXAxis.tickValues([])),K.zoom_rescale&&!a.flow&&(E=H.x.orgDomain()),H.y.domain(H.getYDomain(P,"y",E)),H.y2.domain(H.getYDomain(P,"y2",E)),!K.axis_y_tick_values&&K.axis_y_tick_count&&H.yAxis.tickValues(H.generateTickValues(H.y.domain(),K.axis_y_tick_count)),!K.axis_y2_tick_values&&K.axis_y2_tick_count&&H.y2Axis.tickValues(H.generateTickValues(H.y2.domain(),K.axis_y2_tick_count)),H.redrawAxis(b,O),H.updateAxisLabels(e),(j||p)&&P.length)if(K.axis_x_tick_culling&&B){for(C=1;C<B.length;C++)if(B.length/C<K.axis_x_tick_culling_max){D=C;break}H.svg.selectAll("."+i.axisX+" .tick text").each(function(a){var b=B.indexOf(a);b>=0&&J.select(this).style("display",b%D?"none":"block")})}else H.svg.selectAll("."+i.axisX+" .tick text").style("display","block");q=H.generateDrawArea?H.generateDrawArea(L,!1):void 0,r=H.generateDrawBar?H.generateDrawBar(M):void 0,s=H.generateDrawLine?H.generateDrawLine(N,!1):void 0,u=H.generateXYForText(L,M,N,!0),v=H.generateXYForText(L,M,N,!1),c&&(H.subY.domain(H.getYDomain(P,"y")),H.subY2.domain(H.getYDomain(P,"y2"))),H.tooltip.style("display","none"),H.updateXgridFocus(),I.select("text."+i.text+"."+i.empty).attr("x",H.width/2).attr("y",H.height/2).text(K.data_empty_label_text).transition().style("opacity",P.length?0:1),H.updateGrid(w),H.updateRegion(w),H.updateBar(x),H.updateLine(x),H.updateArea(x),H.updateCircle(),H.hasDataLabel()&&H.updateText(x),H.redrawArc&&H.redrawArc(w,x,h),H.redrawSubchart&&H.redrawSubchart(d,b,w,x,L,M,N),I.selectAll("."+i.selectedCircles).filter(H.isBarType.bind(H)).selectAll("circle").remove(),K.interaction_enabled&&!a.flow&&n&&(H.redrawEventRect(),H.updateZoom&&H.updateZoom()),H.updateCircleY(),F=(H.config.axis_rotated?H.circleY:H.circleX).bind(H),G=(H.config.axis_rotated?H.circleX:H.circleY).bind(H),a.flow&&(A=H.generateFlow({targets:P,flow:a.flow,duration:w,drawBar:r,drawLine:s,drawArea:q,cx:F,cy:G,xv:Q,xForText:u,yForText:v})),w?J.transition().duration(w).each(function(){var b=[];[H.redrawBar(r,!0),H.redrawLine(s,!0),H.redrawArea(q,!0),H.redrawCircle(F,G,!0),H.redrawText(u,v,a.flow,!0),H.redrawRegion(!0),H.redrawGrid(!0)].forEach(function(a){a.forEach(function(a){b.push(a)})}),z=H.generateWait(),b.forEach(function(a){z.add(a)})}).call(z,function(){A&&A(),K.onrendered&&K.onrendered.call(H)}):(H.redrawBar(r),H.redrawLine(s),H.redrawArea(q),H.redrawCircle(F,G),K.onrendered&&K.onrendered.call(H)),H.mapToIds(H.data.targets).forEach(function(a){H.withoutFadeIn[a]=!0})},f.updateAndRedraw=function(a){var b,c=this,d=c.config;a=a||{},a.withTransition=t(a,"withTransition",!0),a.withTransform=t(a,"withTransform",!1),a.withLegend=t(a,"withLegend",!1),a.withUpdateXDomain=!0,a.withUpdateOrgXDomain=!0,a.withTransitionForExit=!1,a.withTransitionForTransform=t(a,"withTransitionForTransform",a.withTransition),c.updateSizes(),a.withLegend&&d.legend_show||(b=c.generateAxisTransitions(a.withTransitionForAxis?d.transition_duration:0),c.updateScales(),c.updateSvgSize(),c.transformAll(a.withTransitionForTransform,b)),c.redraw(a,b)},f.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},f.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},f.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},f.isCustomX=function(){var a=this,b=a.config;return!a.isTimeSeries()&&(b.data_x||s(b.data_xs))},f.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},f.getTranslate=function(a){var b,c,d=this,e=d.config;return"main"===a?(b=p(d.margin.left),c=p(d.margin.top)):"context"===a?(b=p(d.margin2.left),c=p(d.margin2.top)):"legend"===a?(b=d.margin3.left,c=d.margin3.top):"x"===a?(b=0,c=e.axis_rotated?0:d.height):"y"===a?(b=0,c=e.axis_rotated?d.height:0):"y2"===a?(b=e.axis_rotated?0:d.width,c=e.axis_rotated?1:0):"subx"===a?(b=0,c=e.axis_rotated?0:d.height2):"arc"===a&&(b=d.arcWidth/2,c=d.arcHeight/2),"translate("+b+","+c+")"},f.initialOpacity=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?1:0},f.initialOpacityForCircle=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?this.opacityForCircle(a):0},f.opacityForCircle=function(a){var b=this.config.point_show?1:0;return j(a.value)?this.isScatterType(a)?.5:b:0},f.opacityForText=function(){return this.hasDataLabel()?1:0},f.xx=function(a){return a?this.x(a.x):null},f.xv=function(a){var b=this,c=a.value;return b.isTimeSeries()?c=b.parseDate(a.value):b.isCategorized()&&"string"==typeof a.value&&(c=b.config.axis_x_categories.indexOf(a.value)),Math.ceil(b.x(c))},f.yv=function(a){var b=this,c=a.axis&&"y2"===a.axis?b.y2:b.y;return Math.ceil(c(a.value))},f.subxx=function(a){return a?this.subX(a.x):null},f.transformMain=function(a,b){var c,d,e,f=this;b&&b.axisX?c=b.axisX:(c=f.main.select("."+i.axisX),a&&(c=c.transition())),b&&b.axisY?d=b.axisY:(d=f.main.select("."+i.axisY),a&&(d=d.transition())),b&&b.axisY2?e=b.axisY2:(e=f.main.select("."+i.axisY2),a&&(e=e.transition())),(a?f.main.transition():f.main).attr("transform",f.getTranslate("main")),c.attr("transform",f.getTranslate("x")),d.attr("transform",f.getTranslate("y")),e.attr("transform",f.getTranslate("y2")),f.main.select("."+i.chartArcs).attr("transform",f.getTranslate("arc"))},f.transformAll=function(a,b){var c=this;c.transformMain(a,b),c.config.subchart_show&&c.transformContext(a,b),c.legend&&c.transformLegend(a)},f.updateSvgSize=function(){var a=this,b=a.svg.select(".c3-brush .background");a.svg.attr("width",a.currentWidth).attr("height",a.currentHeight),a.svg.selectAll(["#"+a.clipId,"#"+a.clipIdForGrid]).select("rect").attr("width",a.width).attr("height",a.height),a.svg.select("#"+a.clipIdForXAxis).select("rect").attr("x",a.getXAxisClipX.bind(a)).attr("y",a.getXAxisClipY.bind(a)).attr("width",a.getXAxisClipWidth.bind(a)).attr("height",a.getXAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForYAxis).select("rect").attr("x",a.getYAxisClipX.bind(a)).attr("y",a.getYAxisClipY.bind(a)).attr("width",a.getYAxisClipWidth.bind(a)).attr("height",a.getYAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForSubchart).select("rect").attr("width",a.width).attr("height",b.size()?b.attr("height"):0),a.svg.select("."+i.zoomRect).attr("width",a.width).attr("height",a.height),a.selectChart.style("max-height",a.currentHeight+"px")},f.updateDimension=function(a){var b=this;a||(b.config.axis_rotated?(b.axes.x.call(b.xAxis),b.axes.subx.call(b.subXAxis)):(b.axes.y.call(b.yAxis),b.axes.y2.call(b.y2Axis))),b.updateSizes(),b.updateScales(),b.updateSvgSize(),b.transformAll(!1)},f.observeInserted=function(b){var c=this,d=new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&e.previousSibling&&(d.disconnect(),c.intervalForObserveInserted=a.setInterval(function(){b.node().parentNode&&(a.clearInterval(c.intervalForObserveInserted),c.updateDimension(),c.config.oninit.call(c),c.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),b.transition().style("opacity",1))},10))})});d.observe(b.node(),{attributes:!0,childList:!0,characterData:!0})},f.generateResize=function(){function a(){b.forEach(function(a){a()})}var b=[];return a.add=function(a){b.push(a)},a},f.endall=function(a,b){var c=0;a.each(function(){++c}).each("end",function(){--c||b.apply(this,arguments)})},f.generateWait=function(){var a=[],b=function(b,c){var d=setInterval(function(){var b=0;a.forEach(function(a){if(a.empty())return void(b+=1);try{a.transition()}catch(c){b+=1}}),b===a.length&&(clearInterval(d),c&&c())},10)};return b.add=function(b){a.push(b)},b},f.parseDate=function(b){var c,d=this;return c=b instanceof Date?b:"number"!=typeof b&&isNaN(b)?d.dataTimeFormat(d.config.data_xFormat).parse(b):new Date(+b),(!c||isNaN(+c))&&a.console.error("Failed to parse x '"+b+"' to Date object"),c},f.getDefaultConfig=function(){var a={bindto:"#chart",size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,zoom_enabled:!1,zoom_extent:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(a){return a},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_count:void 0,axis_y_tick_time_value:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,area_zerobased:!0,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_expand:!0,gauge_label_show:!0,gauge_label_format:void 0,gauge_expand:!0,gauge_min:0,gauge_max:100,gauge_units:void 0,gauge_width:void 0,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_width:void 0,donut_expand:!0,donut_title:"",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(a,b,c,d){return this.getTooltipContent?this.getTooltipContent(a,b,c,d):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"}};return Object.keys(this.additionalConfig).forEach(function(b){a[b]=this.additionalConfig[b]},this),a},f.additionalConfig={},f.loadConfig=function(a){function b(){var a=d.shift();return a&&c&&"object"==typeof c&&a in c?(c=c[a],b()):a?void 0:c}var c,d,e,f=this.config;Object.keys(f).forEach(function(g){c=a,d=g.split("_"),e=b(),n(e)&&(f[g]=e)})},f.getScale=function(a,b,c){return(c?this.d3.time.scale():this.d3.scale.linear()).range([a,b])},f.getX=function(a,b,c,d){var e,f=this,g=f.getScale(a,b,f.isTimeSeries()),h=c?g.domain(c):g;f.isCategorized()?(d=d||function(){return 0},g=function(a,b){var c=h(a)+d(a);return b?c:Math.ceil(c)}):g=function(a,b){var c=h(a);return b?c:Math.ceil(c)};for(e in h)g[e]=h[e];return g.orgDomain=function(){return h.domain()},f.isCategorized()&&(g.domain=function(a){return arguments.length?(h.domain(a),g):(a=this.orgDomain(),[a[0],a[1]+1])}),g},f.getY=function(a,b,c){var d=this.getScale(a,b,this.isTimeSeriesY());return c&&d.domain(c),d},f.getYScale=function(a){return"y2"===this.getAxisId(a)?this.y2:this.y},f.getSubYScale=function(a){return"y2"===this.getAxisId(a)?this.subY2:this.subY},f.updateScales=function(){var a=this,b=a.config,c=!a.x;a.xMin=b.axis_rotated?1:0,a.xMax=b.axis_rotated?a.height:a.width,a.yMin=b.axis_rotated?0:a.height,a.yMax=b.axis_rotated?a.width:1,a.subXMin=a.xMin,a.subXMax=a.xMax,a.subYMin=b.axis_rotated?0:a.height2,a.subYMax=b.axis_rotated?a.width2:1,a.x=a.getX(a.xMin,a.xMax,c?void 0:a.x.orgDomain(),function(){return a.xAxis.tickOffset()}),a.y=a.getY(a.yMin,a.yMax,c?b.axis_y_default:a.y.domain()),a.y2=a.getY(a.yMin,a.yMax,c?b.axis_y2_default:a.y2.domain()),a.subX=a.getX(a.xMin,a.xMax,a.orgXDomain,function(b){return b%1?0:a.subXAxis.tickOffset()}),a.subY=a.getY(a.subYMin,a.subYMax,c?b.axis_y_default:a.subY.domain()),a.subY2=a.getY(a.subYMin,a.subYMax,c?b.axis_y2_default:a.subY2.domain()),a.xAxisTickFormat=a.getXAxisTickFormat(),a.xAxisTickValues=a.getXAxisTickValues(),a.yAxisTickValues=a.getYAxisTickValues(),a.y2AxisTickValues=a.getY2AxisTickValues(),a.xAxis=a.getXAxis(a.x,a.xOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.subXAxis=a.getXAxis(a.subX,a.subXOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.yAxis=a.getYAxis(a.y,a.yOrient,b.axis_y_tick_format,a.yAxisTickValues,b.axis_y_tick_outer),a.y2Axis=a.getYAxis(a.y2,a.y2Orient,b.axis_y2_tick_format,a.y2AxisTickValues,b.axis_y2_tick_outer),c||(a.brush&&a.brush.scale(a.subX),b.zoom_enabled&&a.zoom.scale(a.x)),a.updateArc&&a.updateArc()},f.getYDomainMin=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasNegativeValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=0>a?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.getAxisId(f)!==h.getAxisId(d)||!k[d]||g&&+a>0||(k[d][b]+=+a)});return h.d3.min(Object.keys(k).map(function(a){return h.d3.min(k[a])}))},f.getYDomainMax=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasPositiveValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=a>0?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.getAxisId(f)!==h.getAxisId(d)||!k[d]||g&&0>+a||(k[d][b]+=+a)});return h.d3.max(Object.keys(k).map(function(a){return h.d3.max(k[a])}))},f.getYDomain=function(a,b,c){var d,e,f,g,h,i,k,l,m,n,o,p=this,r=p.config,t=a.filter(function(a){return p.getAxisId(a.id)===b}),u=c?p.filterByXDomain(t,c):t,v="y2"===b?r.axis_y2_min:r.axis_y_min,w="y2"===b?r.axis_y2_max:r.axis_y_max,x=p.getYDomainMin(u),y=p.getYDomainMax(u),z="y2"===b?r.axis_y2_center:r.axis_y_center,A=p.hasType("bar",u)&&r.bar_zerobased||p.hasType("area",u)&&r.area_zerobased,B="y2"===b?r.axis_y2_inverted:r.axis_y_inverted,C=p.hasDataLabel()&&r.axis_rotated,D=p.hasDataLabel()&&!r.axis_rotated;return x=j(v)?v:j(w)?w>x?x:w-10:x,y=j(w)?w:j(v)?y>v?y:v+10:y,0===u.length?"y2"===b?p.y2.domain():p.y.domain():(isNaN(x)&&(x=0),isNaN(y)&&(y=x),x===y&&(0>x?y=0:x=0),n=x>=0&&y>=0,o=0>=x&&0>=y,(j(v)&&n||j(w)&&o)&&(A=!1),A&&(n&&(x=0),o&&(y=0)),e=Math.abs(y-x),f=g=h=.1*e,"undefined"!=typeof z&&(i=Math.max(Math.abs(x),Math.abs(y)),y=z+i,x=z-i),C?(k=p.getDataLabelLength(x,y,"width"),l=q(p.y.range()),m=[k[0]/l,k[1]/l],g+=e*(m[1]/(1-m[0]-m[1])),h+=e*(m[0]/(1-m[0]-m[1]))):D&&(k=p.getDataLabelLength(x,y,"height"),g+=this.convertPixelsToAxisPadding(k[1],e),h+=this.convertPixelsToAxisPadding(k[0],e)),"y"===b&&s(r.axis_y_padding)&&(g=p.getAxisPadding(r.axis_y_padding,"top",g,e),h=p.getAxisPadding(r.axis_y_padding,"bottom",h,e)),"y2"===b&&s(r.axis_y2_padding)&&(g=p.getAxisPadding(r.axis_y2_padding,"top",g,e),h=p.getAxisPadding(r.axis_y2_padding,"bottom",h,e)),A&&(n&&(h=x),o&&(g=-y)),d=[x-h,y+g],B?d.reverse():d)},f.getXDomainMin=function(a){var b=this,c=b.config;return n(c.axis_x_min)?b.isTimeSeries()?this.parseDate(c.axis_x_min):c.axis_x_min:b.d3.min(a,function(a){return b.d3.min(a.values,function(a){return a.x})})},f.getXDomainMax=function(a){var b=this,c=b.config;return n(c.axis_x_max)?b.isTimeSeries()?this.parseDate(c.axis_x_max):c.axis_x_max:b.d3.max(a,function(a){return b.d3.max(a.values,function(a){return a.x})})},f.getXDomainPadding=function(a){var b,c,d,e,f=this,g=f.config,h=a[1]-a[0];return f.isCategorized()?c=0:f.hasType("bar")?(b=f.getMaxDataCount(),c=b>1?h/(b-1)/2:.5):c=.01*h,"object"==typeof g.axis_x_padding&&s(g.axis_x_padding)?(d=j(g.axis_x_padding.left)?g.axis_x_padding.left:c,e=j(g.axis_x_padding.right)?g.axis_x_padding.right:c):d=e="number"==typeof g.axis_x_padding?g.axis_x_padding:c,{left:d,right:e}},f.getXDomain=function(a){var b=this,c=[b.getXDomainMin(a),b.getXDomainMax(a)],d=c[0],e=c[1],f=b.getXDomainPadding(c),g=0,h=0;return d-e!==0||b.isCategorized()||(b.isTimeSeries()?(d=new Date(.5*d.getTime()),e=new Date(1.5*e.getTime())):(d=0===d?1:.5*d,e=0===e?-1:1.5*e)),(d||0===d)&&(g=b.isTimeSeries()?new Date(d.getTime()-f.left):d-f.left),(e||0===e)&&(h=b.isTimeSeries()?new Date(e.getTime()+f.right):e+f.right),[g,h]},f.updateXDomain=function(a,b,c,d,e){var f=this,g=f.config;return c&&(f.x.domain(e?e:f.d3.extent(f.getXDomain(a))),f.orgXDomain=f.x.domain(),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent(),f.subX.domain(f.x.domain()),f.brush&&f.brush.scale(f.subX)),b&&(f.x.domain(e?e:!f.brush||f.brush.empty()?f.orgXDomain:f.brush.extent()),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent()),d&&f.x.domain(f.trimXDomain(f.x.orgDomain())),f.x.domain()},f.trimXDomain=function(a){var b=this;return a[0]<=b.orgXDomain[0]&&(a[1]=+a[1]+(b.orgXDomain[0]-a[0]),a[0]=b.orgXDomain[0]),b.orgXDomain[1]<=a[1]&&(a[0]=+a[0]-(a[1]-b.orgXDomain[1]),a[1]=b.orgXDomain[1]),a},f.isX=function(a){var b=this,c=b.config;return c.data_x&&a===c.data_x||s(c.data_xs)&&u(c.data_xs,a)},f.isNotX=function(a){return!this.isX(a)},f.getXKey=function(a){var b=this,c=b.config;return c.data_x?c.data_x:s(c.data_xs)?c.data_xs[a]:null},f.getXValuesOfXKey=function(a,b){var c,d=this,e=b&&s(b)?d.mapToIds(b):[];return e.forEach(function(b){d.getXKey(b)===a&&(c=d.data.xs[b])}),c},f.getIndexByX=function(a){var b=this,c=b.filterByX(b.data.targets,a);
return c.length?c[0].index:null},f.getXValue=function(a,b){var c=this;return a in c.data.xs&&c.data.xs[a]&&j(c.data.xs[a][b])?c.data.xs[a][b]:b},f.getOtherTargetXs=function(){var a=this,b=Object.keys(a.data.xs);return b.length?a.data.xs[b[0]]:null},f.getOtherTargetX=function(a){var b=this.getOtherTargetXs();return b&&a<b.length?b[a]:null},f.addXs=function(a){var b=this;Object.keys(a).forEach(function(c){b.config.data_xs[c]=a[c]})},f.hasMultipleX=function(a){return this.d3.set(Object.keys(a).map(function(b){return a[b]})).size()>1},f.isMultipleX=function(){return s(this.config.data_xs)||!this.config.data_xSort||this.hasType("scatter")},f.addName=function(a){var b,c=this;return a&&(b=c.config.data_names[a.id],a.name=b?b:a.id),a},f.getValueOnIndex=function(a,b){var c=a.filter(function(a){return a.index===b});return c.length?c[0]:null},f.updateTargetX=function(a,b){var c=this;a.forEach(function(a){a.values.forEach(function(d,e){d.x=c.generateTargetX(b[e],a.id,e)}),c.data.xs[a.id]=b})},f.updateTargetXs=function(a,b){var c=this;a.forEach(function(a){b[a.id]&&c.updateTargetX([a],b[a.id])})},f.generateTargetX=function(a,b,c){var d,e=this;return d=e.isTimeSeries()?e.parseDate(a?a:e.getXValue(b,c)):e.isCustomX()&&!e.isCategorized()?j(a)?+a:e.getXValue(b,c):c},f.cloneTarget=function(a){return{id:a.id,id_org:a.id_org,values:a.values.map(function(a){return{x:a.x,value:a.value,id:a.id}})}},f.updateXs=function(){var a=this;a.data.targets.length&&(a.xs=[],a.data.targets[0].values.forEach(function(b){a.xs[b.index]=b.x}))},f.getPrevX=function(a){var b=this.xs[a-1];return"undefined"!=typeof b?b:null},f.getNextX=function(a){var b=this.xs[a+1];return"undefined"!=typeof b?b:null},f.getMaxDataCount=function(){var a=this;return a.d3.max(a.data.targets,function(a){return a.values.length})},f.getMaxDataCountTarget=function(a){var b,c=a.length,d=0;return c>1?a.forEach(function(a){a.values.length>d&&(b=a,d=a.values.length)}):b=c?a[0]:null,b},f.getEdgeX=function(a){var b=this;return a.length?[b.d3.min(a,function(a){return a.values[0].x}),b.d3.max(a,function(a){return a.values[a.values.length-1].x})]:[0,0]},f.mapToIds=function(a){return a.map(function(a){return a.id})},f.mapToTargetIds=function(a){var b=this;return a?l(a)?[a]:a:b.mapToIds(b.data.targets)},f.hasTarget=function(a,b){var c,d=this.mapToIds(a);for(c=0;c<d.length;c++)if(d[c]===b)return!0;return!1},f.isTargetToShow=function(a){return this.hiddenTargetIds.indexOf(a)<0},f.isLegendToShow=function(a){return this.hiddenLegendIds.indexOf(a)<0},f.filterTargetsToShow=function(a){var b=this;return a.filter(function(a){return b.isTargetToShow(a.id)})},f.mapTargetsToUniqueXs=function(a){var b=this,c=b.d3.set(b.d3.merge(a.map(function(a){return a.values.map(function(a){return+a.x})}))).values();return c.map(b.isTimeSeries()?function(a){return new Date(+a)}:function(a){return+a})},f.addHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.concat(a)},f.removeHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(b){return a.indexOf(b)<0})},f.addHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.concat(a)},f.removeHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(b){return a.indexOf(b)<0})},f.getValuesAsIdKeyed=function(a){var b={};return a.forEach(function(a){b[a.id]=[],a.values.forEach(function(c){b[a.id].push(c.value)})}),b},f.checkValueInTargets=function(a,b){var c,d,e,f=Object.keys(a);for(c=0;c<f.length;c++)for(e=a[f[c]].values,d=0;d<e.length;d++)if(b(e[d].value))return!0;return!1},f.hasNegativeValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return 0>a})},f.hasPositiveValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return a>0})},f.isOrderDesc=function(){var a=this.config;return"string"==typeof a.data_order&&"desc"===a.data_order.toLowerCase()},f.isOrderAsc=function(){var a=this.config;return"string"==typeof a.data_order&&"asc"===a.data_order.toLowerCase()},f.orderTargets=function(a){var b=this,c=b.config,d=b.isOrderAsc(),e=b.isOrderDesc();return d||e?a.sort(function(a,b){var c=function(a,b){return a+Math.abs(b.value)},e=a.values.reduce(c,0),f=b.values.reduce(c,0);return d?f-e:e-f}):k(c.data_order)&&a.sort(c.data_order),a},f.filterByX=function(a,b){return this.d3.merge(a.map(function(a){return a.values})).filter(function(a){return a.x-b===0})},f.filterRemoveNull=function(a){return a.filter(function(a){return j(a.value)})},f.filterByXDomain=function(a,b){return a.map(function(a){return{id:a.id,id_org:a.id_org,values:a.values.filter(function(a){return b[0]<=a.x&&a.x<=b[1]})}})},f.hasDataLabel=function(){var a=this.config;return"boolean"==typeof a.data_labels&&a.data_labels?!0:"object"==typeof a.data_labels&&s(a.data_labels)?!0:!1},f.getDataLabelLength=function(a,b,c){var d=this,e=[0,0],f=1.3;return d.selectChart.select("svg").selectAll(".dummy").data([a,b]).enter().append("text").text(function(a){return d.dataLabelFormat(a.id)(a)}).each(function(a,b){e[b]=this.getBoundingClientRect()[c]*f}).remove(),e},f.isNoneArc=function(a){return this.hasTarget(this.data.targets,a.id)},f.isArc=function(a){return"data"in a&&this.hasTarget(this.data.targets,a.data.id)},f.findSameXOfValues=function(a,b){var c,d=a[b].x,e=[];for(c=b-1;c>=0&&d===a[c].x;c--)e.push(a[c]);for(c=b;c<a.length&&d===a[c].x;c++)e.push(a[c]);return e},f.findClosestFromTargets=function(a,b){var c,d=this;return c=a.map(function(a){return d.findClosest(a.values,b)}),d.findClosest(c,b)},f.findClosest=function(a,b){var c,d=this,e=100;return a.filter(function(a){return a&&d.isBarType(a.id)}).forEach(function(a){var b=d.main.select("."+i.bars+d.getTargetSelectorSuffix(a.id)+" ."+i.bar+"-"+a.index).node();!c&&d.isWithinBar(b)&&(c=a)}),a.filter(function(a){return a&&!d.isBarType(a.id)}).forEach(function(a){var f=d.dist(a,b);e>f&&(e=f,c=a)}),c},f.dist=function(a,b){var c=this,d=c.config,e=d.axis_rotated?1:0,f=d.axis_rotated?0:1,g=c.circleY(a,a.index),h=c.x(a.x);return Math.pow(h-b[e],2)+Math.pow(g-b[f],2)},f.convertValuesToStep=function(a){var b,c=[].concat(a);if(!this.isCategorized())return a;for(b=a.length+1;b>0;b--)c[b]=c[b-1];return c[0]={x:c[0].x-1,value:c[0].value,id:c[0].id},c[a.length+1]={x:c[a.length].x+1,value:c[a.length].value,id:c[a.length].id},c},f.updateDataAttributes=function(a,b){var c=this,d=c.config,e=d["data_"+a];return"undefined"==typeof b?e:(Object.keys(b).forEach(function(a){e[a]=b[a]}),c.redraw({withLegend:!0}),e)},f.convertUrlToData=function(a,b,c,d){var e=this,f=b?b:"csv";e.d3.xhr(a,function(a,b){var g;g="json"===f?e.convertJsonToData(JSON.parse(b.response),c):"tsv"===f?e.convertTsvToData(b.response):e.convertCsvToData(b.response),d.call(e,g)})},f.convertXsvToData=function(a,b){var c,d=b.parseRows(a);return 1===d.length?(c=[{}],d[0].forEach(function(a){c[0][a]=null})):c=b.parse(a),c},f.convertCsvToData=function(a){return this.convertXsvToData(a,this.d3.csv)},f.convertTsvToData=function(a){return this.convertXsvToData(a,this.d3.tsv)},f.convertJsonToData=function(a,b){var c,d,e=this,f=[];return b?(c=b.value,b.x&&(c.push(b.x),e.config.data_x=b.x),f.push(c),a.forEach(function(a){var b=[];c.forEach(function(c){var d=m(a[c])?null:a[c];b.push(d)}),f.push(b)}),d=e.convertRowsToData(f)):(Object.keys(a).forEach(function(b){f.push([b].concat(a[b]))}),d=e.convertColumnsToData(f)),d},f.convertRowsToData=function(a){var b,c,d=a[0],e={},f=[];for(b=1;b<a.length;b++){for(e={},c=0;c<a[b].length;c++){if(m(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[d[c]]=a[b][c]}f.push(e)}return f},f.convertColumnsToData=function(a){var b,c,d,e=[];for(b=0;b<a.length;b++)for(d=a[b][0],c=1;c<a[b].length;c++){if(m(e[c-1])&&(e[c-1]={}),m(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[c-1][d]=a[b][c]}return e},f.convertDataToTargets=function(a,b){var c,d=this,e=d.config,f=d.d3.keys(a[0]).filter(d.isNotX,d),g=d.d3.keys(a[0]).filter(d.isX,d);return f.forEach(function(c){var f=d.getXKey(c);d.isCustomX()||d.isTimeSeries()?g.indexOf(f)>=0?d.data.xs[c]=(b&&d.data.xs[c]?d.data.xs[c]:[]).concat(a.map(function(a){return a[f]}).filter(j).map(function(a,b){return d.generateTargetX(a,c,b)})):e.data_x?d.data.xs[c]=d.getOtherTargetXs():s(e.data_xs)&&(d.data.xs[c]=d.getXValuesOfXKey(f,d.data.targets)):d.data.xs[c]=a.map(function(a,b){return b})}),f.forEach(function(a){if(!d.data.xs[a])throw new Error('x is not defined for id = "'+a+'".')}),c=f.map(function(b,c){var f=e.data_idConverter(b);return{id:f,id_org:b,values:a.map(function(a,g){var h=d.getXKey(b),i=a[h],j=d.generateTargetX(i,b,g);return d.isCustomX()&&d.isCategorized()&&0===c&&i&&(0===g&&(e.axis_x_categories=[]),e.axis_x_categories.push(i)),(m(a[b])||d.data.xs[b].length<=g)&&(j=void 0),{x:j,value:null===a[b]||isNaN(a[b])?null:+a[b],id:f}}).filter(function(a){return n(a.x)})}}),c.forEach(function(a){var b;e.data_xSort&&(a.values=a.values.sort(function(a,b){var c=a.x||0===a.x?a.x:1/0,d=b.x||0===b.x?b.x:1/0;return c-d})),b=0,a.values.forEach(function(a){a.index=b++}),d.data.xs[a.id].sort(function(a,b){return a-b})}),e.data_type&&d.setTargetType(d.mapToIds(c).filter(function(a){return!(a in e.data_types)}),e.data_type),c.forEach(function(a){d.addCache(a.id_org,a)}),c},f.load=function(a,b){var c=this;a&&(b.filter&&(a=a.filter(b.filter)),(b.type||b.types)&&a.forEach(function(a){c.setTargetType(a.id,b.types?b.types[a.id]:b.type)}),c.data.targets.forEach(function(b){for(var c=0;c<a.length;c++)if(b.id===a[c].id){b.values=a[c].values,a.splice(c,1);break}}),c.data.targets=c.data.targets.concat(a)),c.updateTargets(c.data.targets),c.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),b.done&&b.done()},f.loadFromArgs=function(a){var b=this;a.data?b.load(b.convertDataToTargets(a.data),a):a.url?b.convertUrlToData(a.url,a.mimeType,a.keys,function(c){b.load(b.convertDataToTargets(c),a)}):a.json?b.load(b.convertDataToTargets(b.convertJsonToData(a.json,a.keys)),a):a.rows?b.load(b.convertDataToTargets(b.convertRowsToData(a.rows)),a):a.columns?b.load(b.convertDataToTargets(b.convertColumnsToData(a.columns)),a):b.load(null,a)},f.unload=function(a,b){var c=this;return b||(b=function(){}),a=a.filter(function(a){return c.hasTarget(c.data.targets,a)}),a&&0!==a.length?(c.svg.selectAll(a.map(function(a){return c.selectorTarget(a)})).transition().style("opacity",0).remove().call(c.endall,b),void a.forEach(function(a){c.withoutFadeIn[a]=!1,c.legend&&c.legend.selectAll("."+i.legendItem+c.getTargetSelectorSuffix(a)).remove(),c.data.targets=c.data.targets.filter(function(b){return b.id!==a})})):void b()},f.categoryName=function(a){var b=this.config;return a<b.axis_x_categories.length?b.axis_x_categories[a]:a},f.initEventRect=function(){var a=this;a.main.select("."+i.chart).append("g").attr("class",i.eventRects).style("fill-opacity",0)},f.redrawEventRect=function(){var a,b,c=this,d=c.config,e=c.isMultipleX(),f=c.main.select("."+i.eventRects).style("cursor",d.zoom_enabled?d.axis_rotated?"ns-resize":"ew-resize":null).classed(i.eventRectsMultiple,e).classed(i.eventRectsSingle,!e);f.selectAll("."+i.eventRect).remove(),c.eventRect=f.selectAll("."+i.eventRect),e?(a=c.eventRect.data([0]),c.generateEventRectsForMultipleXs(a.enter()),c.updateEventRect(a)):(b=c.getMaxDataCountTarget(c.data.targets),f.datum(b?b.values:[]),c.eventRect=f.selectAll("."+i.eventRect),a=c.eventRect.data(function(a){return a}),c.generateEventRectsForSingleX(a.enter()),c.updateEventRect(a),a.exit().remove())},f.updateEventRect=function(a){var b,c,d,e,f,g,h=this,i=h.config;a=a||h.eventRect.data(function(a){return a}),h.isMultipleX()?(b=0,c=0,d=h.width,e=h.height):(!h.isCustomX()&&!h.isTimeSeries()||h.isCategorized()?(f=h.getEventRectWidth(),g=function(a){return h.x(a.x)-f/2}):(h.updateXs(),f=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index);return null===b&&null===c?i.axis_rotated?h.height:h.width:(null===b&&(b=h.x.domain()[0]),null===c&&(c=h.x.domain()[1]),Math.max(0,(h.x(c)-h.x(b))/2))},g=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index),d=h.data.xs[a.id][a.index];return null===b&&null===c?0:(null===b&&(b=h.x.domain()[0]),(h.x(d)+h.x(b))/2)}),b=i.axis_rotated?0:g,c=i.axis_rotated?g:0,d=i.axis_rotated?h.width:f,e=i.axis_rotated?f:h.height),a.attr("class",h.classEvent.bind(h)).attr("x",b).attr("y",c).attr("width",d).attr("height",e)},f.generateEventRectsForSingleX=function(a){var b=this,c=b.d3,d=b.config;a.append("rect").attr("class",b.classEvent.bind(b)).style("cursor",d.data_selection_enabled&&d.data_selection_grouped?"pointer":null).on("mouseover",function(a){var c,e,f=a.index;b.dragging||b.flowing||b.hasArcType()||(c=b.data.targets.map(function(a){return b.addName(b.getValueOnIndex(a.values,f))}),e=[],Object.keys(d.data_names).forEach(function(a){for(var b=0;b<c.length;b++)if(c[b]&&c[b].id===a){e.push(c[b]),c.shift(b);break}}),c=e.concat(c),d.point_focus_expand_enabled&&b.expandCircles(f,null,!0),b.expandBars(f,null,!0),b.main.selectAll("."+i.shape+"-"+f).each(function(a){d.data_onmouseover.call(b.api,a)}))}).on("mouseout",function(a){var c=a.index;b.hasArcType()||(b.hideXGridFocus(),b.hideTooltip(),b.unexpandCircles(),b.unexpandBars(),b.main.selectAll("."+i.shape+"-"+c).each(function(a){d.data_onmouseout.call(b.api,a)}))}).on("mousemove",function(a){var e,f=a.index,g=b.svg.select("."+i.eventRect+"-"+f);b.dragging||b.flowing||b.hasArcType()||(b.isStepType(a)&&"step-after"===b.config.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,f))&&(f-=1),e=b.filterTargetsToShow(b.data.targets).map(function(a){return b.addName(b.getValueOnIndex(a.values,f))}),d.tooltip_grouped&&(b.showTooltip(e,this),b.showXGridFocus(e)),(!d.tooltip_grouped||d.data_selection_enabled&&!d.data_selection_grouped)&&b.main.selectAll("."+i.shape+"-"+f).each(function(){c.select(this).classed(i.EXPANDED,!0),d.data_selection_enabled&&g.style("cursor",d.data_selection_grouped?"pointer":null),d.tooltip_grouped||(b.hideXGridFocus(),b.hideTooltip(),d.data_selection_grouped||(b.unexpandCircles(f),b.unexpandBars(f)))}).filter(function(a){return b.isWithinShape(this,a)}).each(function(a){d.data_selection_enabled&&(d.data_selection_grouped||d.data_selection_isselectable(a))&&g.style("cursor","pointer"),d.tooltip_grouped||(b.showTooltip([a],this),b.showXGridFocus([a]),d.point_focus_expand_enabled&&b.expandCircles(f,a.id,!0),b.expandBars(f,a.id,!0))}))}).on("click",function(a){var e=a.index;if(!b.hasArcType()&&b.toggleShape){if(b.cancelClick)return void(b.cancelClick=!1);b.isStepType(a)&&"step-after"===d.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,e))&&(e-=1),b.main.selectAll("."+i.shape+"-"+e).each(function(a){(d.data_selection_grouped||b.isWithinShape(this,a))&&(b.toggleShape(this,a,e),b.config.data_onclick.call(b.api,a,this))})}}).call(d.data_selection_draggable&&b.drag?c.behavior.drag().origin(Object).on("drag",function(){b.drag(c.mouse(this))}).on("dragstart",function(){b.dragstart(c.mouse(this))}).on("dragend",function(){b.dragend()}):function(){})},f.generateEventRectsForMultipleXs=function(a){function b(){c.svg.select("."+i.eventRect).style("cursor",null),c.hideXGridFocus(),c.hideTooltip(),c.unexpandCircles(),c.unexpandBars()}var c=this,d=c.d3,e=c.config;a.append("rect").attr("x",0).attr("y",0).attr("width",c.width).attr("height",c.height).attr("class",i.eventRect).on("mouseout",function(){c.hasArcType()||b()}).on("mousemove",function(){var a,f,g,h,j=c.filterTargetsToShow(c.data.targets);if(!c.dragging&&!c.hasArcType(j)){if(a=d.mouse(this),f=c.findClosestFromTargets(j,a),!c.mouseover||f&&f.id===c.mouseover.id||(e.data_onmouseout.call(c.api,c.mouseover),c.mouseover=void 0),!f)return void b();g=c.isScatterType(f)||!e.tooltip_grouped?[f]:c.filterByX(j,f.x),h=g.map(function(a){return c.addName(a)}),c.showTooltip(h,this),e.point_focus_expand_enabled&&c.expandCircles(f.index,f.id,!0),c.expandBars(f.index,f.id,!0),c.showXGridFocus(h),(c.isBarType(f.id)||c.dist(f,a)<100)&&(c.svg.select("."+i.eventRect).style("cursor","pointer"),c.mouseover||(e.data_onmouseover.call(c.api,f),c.mouseover=f))}}).on("click",function(){var a,b,f=c.filterTargetsToShow(c.data.targets);c.hasArcType(f)||(a=d.mouse(this),b=c.findClosestFromTargets(f,a),b&&(c.isBarType(b.id)||c.dist(b,a)<100)&&c.main.selectAll("."+i.shapes+c.getTargetSelectorSuffix(b.id)).select("."+i.shape+"-"+b.index).each(function(){(e.data_selection_grouped||c.isWithinShape(this,b))&&(c.toggleShape(this,b,b.index),c.config.data_onclick.call(c.api,b,this))}))}).call(d.behavior.drag().origin(Object).on("drag",function(){c.drag(d.mouse(this))}).on("dragstart",function(){c.dragstart(d.mouse(this))}).on("dragend",function(){c.dragend()}))},f.dispatchEvent=function(b,c,d){var e=this,f="."+i.eventRect+(e.isMultipleX()?"":"-"+c),g=e.main.select(f).node(),h=g.getBoundingClientRect(),j=h.left+(d?d[0]:0),k=h.top+(d?d[1]:0),l=document.createEvent("MouseEvents");l.initMouseEvent(b,!0,!0,a,0,j,k,j,k,!1,!1,!1,!1,0,null),g.dispatchEvent(l)},f.getCurrentWidth=function(){var a=this,b=a.config;return b.size_width?b.size_width:a.getParentWidth()},f.getCurrentHeight=function(){var a=this,b=a.config,c=b.size_height?b.size_height:a.getParentHeight();return c>0?c:320/(a.hasType("gauge")?2:1)},f.getCurrentPaddingTop=function(){var a=this.config;return j(a.padding_top)?a.padding_top:0},f.getCurrentPaddingBottom=function(){var a=this.config;return j(a.padding_bottom)?a.padding_bottom:0},f.getCurrentPaddingLeft=function(a){var b=this,c=b.config;return j(c.padding_left)?c.padding_left:c.axis_rotated?c.axis_x_show?Math.max(o(b.getAxisWidthByAxisId("x",a)),40):1:!c.axis_y_show||c.axis_y_inner?b.getYAxisLabelPosition().isOuter?30:1:o(b.getAxisWidthByAxisId("y",a))},f.getCurrentPaddingRight=function(){var a=this,b=a.config,c=10,d=a.isLegendRight?a.getLegendWidth()+20:0;return j(b.padding_right)?b.padding_right+1:b.axis_rotated?c+d:!b.axis_y2_show||b.axis_y2_inner?2+d+(a.getY2AxisLabelPosition().isOuter?20:0):o(a.getAxisWidthByAxisId("y2"))+d},f.getParentRectValue=function(a){for(var b,c=this.selectChart.node();c&&"BODY"!==c.tagName&&!(b=c.getBoundingClientRect()[a]);)c=c.parentNode;return b},f.getParentWidth=function(){return this.getParentRectValue("width")},f.getParentHeight=function(){var a=this.selectChart.style("height");return a.indexOf("px")>0?+a.replace("px",""):0},f.getSvgLeft=function(a){var b=this,c=b.config,d=c.axis_rotated||!c.axis_rotated&&!c.axis_y_inner,e=c.axis_rotated?i.axisX:i.axisY,f=b.main.select("."+e).node(),g=f&&d?f.getBoundingClientRect():{right:0},h=b.selectChart.node().getBoundingClientRect(),j=b.hasArcType(),k=g.right-h.left-(j?0:b.getCurrentPaddingLeft(a));return k>0?k:0},f.getAxisWidthByAxisId=function(a,b){var c=this,d=c.getAxisLabelPositionById(a);return c.getMaxTickWidth(a,b)+(d.isInner?20:40)},f.getHorizontalAxisHeight=function(a){var b=this,c=b.config,d=30;return"x"!==a||c.axis_x_show?"x"===a&&c.axis_x_height?c.axis_x_height:"y"!==a||c.axis_y_show?"y2"!==a||c.axis_y2_show?("x"===a&&!c.axis_rotated&&c.axis_x_tick_rotate&&(d=b.getMaxTickWidth(a)*Math.cos(Math.PI*(90-c.axis_x_tick_rotate)/180)),d+(b.getAxisLabelPositionById(a).isInner?0:10)+("y2"===a?-10:0)):b.rotated_padding_top:!c.legend_show||b.isLegendRight||b.isLegendInset?1:10:8},f.getEventRectWidth=function(){var a,b,c,d,e,f,g=this,h=g.getMaxDataCountTarget(g.data.targets);return h?(a=h.values[0],b=h.values[h.values.length-1],c=g.x(b.x)-g.x(a.x),0===c?g.config.axis_rotated?g.height:g.width:(d=g.getMaxDataCount(),e=g.hasType("bar")?(d-(g.isCategorized()?.25:1))/d:1,f=d>1?c*e/(d-1):c,1>f?1:f)):0},f.getShapeIndices=function(a){var b,c,d=this,e=d.config,f={},g=0;return d.filterTargetsToShow(d.data.targets.filter(a,d)).forEach(function(a){for(b=0;b<e.data_groups.length;b++)if(!(e.data_groups[b].indexOf(a.id)<0))for(c=0;c<e.data_groups[b].length;c++)if(e.data_groups[b][c]in f){f[a.id]=f[e.data_groups[b][c]];break}m(f[a.id])&&(f[a.id]=g++)}),f.__max__=g-1,f},f.getShapeX=function(a,b,c,d){var e=this,f=d?e.subX:e.x;return function(d){var e=d.id in c?c[d.id]:0;return d.x||0===d.x?f(d.x)-a*(b/2-e):0}},f.getShapeY=function(a){var b=this;return function(c){var d=a?b.getSubYScale(c.id):b.getYScale(c.id);return d(c.value)}},f.getShapeOffset=function(a,b,c){var d=this,e=d.orderTargets(d.filterTargetsToShow(d.data.targets.filter(a,d))),f=e.map(function(a){return a.id});return function(a,g){var h=c?d.getSubYScale(a.id):d.getYScale(a.id),i=h(0),j=i;return e.forEach(function(c){var e=d.isStepType(a)?d.convertValuesToStep(c.values):c.values;c.id!==a.id&&b[c.id]===b[a.id]&&f.indexOf(c.id)<f.indexOf(a.id)&&e[g].value*a.value>=0&&(j+=h(e[g].value)-i)}),j}},f.isWithinShape=function(a,b){var c,d=this,e=d.d3.select(a);return d.isTargetToShow(b.id)?"circle"===a.nodeName?c=d.isStepType(b)?d.isWithinStep(a,d.getYScale(b.id)(b.value)):d.isWithinCircle(a,1.5*d.pointSelectR(b)):"path"===a.nodeName&&(c=e.classed(i.bar)?d.isWithinBar(a):!0):c=!1,c},f.getInterpolate=function(a){var b=this;return b.isSplineType(a)?"cardinal":b.isStepType(a)?b.config.line_step_type:"linear"},f.initLine=function(){var a=this;a.main.select("."+i.chart).append("g").attr("class",i.chartLines)},f.updateTargetsForLine=function(a){var b,c,d=this,e=d.config,f=d.classChartLine.bind(d),g=d.classLines.bind(d),h=d.classAreas.bind(d),j=d.classCircles.bind(d),k=d.classFocus.bind(d);b=d.main.select("."+i.chartLines).selectAll("."+i.chartLine).data(a).attr("class",function(a){return f(a)+k(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g),c.append("g").attr("class",h),c.append("g").attr("class",function(a){return d.generateClass(i.selectedCircles,a.id)}),c.append("g").attr("class",j).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null}),a.forEach(function(a){d.main.selectAll("."+i.selectedCircles+d.getTargetSelectorSuffix(a.id)).selectAll("."+i.selectedCircle).each(function(b){b.value=a.values[b.index].value})})},f.updateLine=function(a){var b=this;b.mainLine=b.main.selectAll("."+i.lines).selectAll("."+i.line).data(b.lineData.bind(b)),b.mainLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.mainLine.style("opacity",b.initialOpacity.bind(b)).style("shape-rendering",function(a){return b.isStepType(a)?"crispEdges":""}).attr("transform",null),b.mainLine.exit().transition().duration(a).style("opacity",0).remove()},f.redrawLine=function(a,b){return[(b?this.mainLine.transition():this.mainLine).attr("d",a).style("stroke",this.color).style("opacity",1)]},f.generateDrawLine=function(a,b){var c=this,d=c.config,e=c.d3.svg.line(),f=c.generateGetLinePoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x(i).y(h):e.x(h).y(i),d.line_connectNull||(e=e.defined(function(a){return null!=a.value})),function(a){var f,h=d.line_connectNull?c.filterRemoveNull(a.values):a.values,i=b?c.x:c.subX,j=g.call(c,a.id),k=0,l=0;return c.isLineType(a)?d.data_regions[a.id]?f=c.lineWithRegions(h,i,j,d.data_regions[a.id]):(c.isStepType(a)&&(h=c.convertValuesToStep(h)),f=e.interpolate(c.getInterpolate(a))(h)):(h[0]&&(k=i(h[0].x),l=j(h[0].value)),f=d.axis_rotated?"M "+l+" "+k:"M "+k+" "+l),f?f:"M 0 0"}},f.generateGetLinePoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isLineType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)]]}},f.lineWithRegions=function(a,b,c,d){function e(a,b){var c;for(c=0;c<b.length;c++)if(b[c].start<a&&a<=b[c].end)return!0;return!1}var f,g,h,i,j,k,l,o,p,q,r,s,t=this,u=t.config,v=-1,w="M",x=[];if(n(d))for(f=0;f<d.length;f++)x[f]={},x[f].start=m(d[f].start)?a[0].x:t.isTimeSeries()?t.parseDate(d[f].start):d[f].start,x[f].end=m(d[f].end)?a[a.length-1].x:t.isTimeSeries()?t.parseDate(d[f].end):d[f].end;for(r=u.axis_rotated?function(a){return c(a.value)}:function(a){return b(a.x)},s=u.axis_rotated?function(a){return b(a.x)}:function(a){return c(a.value)},h=t.isTimeSeries()?function(a,d,e,f){var g=a.x.getTime(),h=d.x-a.x,i=new Date(g+h*e),k=new Date(g+h*(e+f));return"M"+b(i)+" "+c(j(e))+" "+b(k)+" "+c(j(e+f))}:function(a,d,e,f){return"M"+b(i(e),!0)+" "+c(j(e))+" "+b(i(e+f),!0)+" "+c(j(e+f))},f=0;f<a.length;f++){if(m(x)||!e(a[f].x,x))w+=" "+r(a[f])+" "+s(a[f]);else for(i=t.getScale(a[f-1].x,a[f].x,t.isTimeSeries()),j=t.getScale(a[f-1].value,a[f].value),k=b(a[f].x)-b(a[f-1].x),l=c(a[f].value)-c(a[f-1].value),o=Math.sqrt(Math.pow(k,2)+Math.pow(l,2)),p=2/o,q=2*p,g=p;1>=g;g+=q)w+=h(a[f-1],a[f],g,p);v=a[f].x}return w},f.updateArea=function(a){var b=this,c=b.d3;b.mainArea=b.main.selectAll("."+i.areas).selectAll("."+i.area).data(b.lineData.bind(b)),b.mainArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.mainArea.style("opacity",b.orgAreaOpacity),b.mainArea.exit().transition().duration(a).style("opacity",0).remove()},f.redrawArea=function(a,b){return[(b?this.mainArea.transition():this.mainArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},f.generateDrawArea=function(a,b){var c=this,d=c.config,e=c.d3.svg.area(),f=c.generateGetAreaPoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(c.getAreaBaseValue(a.id))},j=function(a,b){return d.data_groups.length>0?f(a,b)[1][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x0(i).x1(j).y(h):e.x(h).y0(i).y1(j),d.line_connectNull||(e=e.defined(function(a){return null!==a.value})),function(a){var b,f=d.line_connectNull?c.filterRemoveNull(a.values):a.values,g=0,h=0;return c.isAreaType(a)?(c.isStepType(a)&&(f=c.convertValuesToStep(f)),b=e.interpolate(c.getInterpolate(a))(f)):(f[0]&&(g=c.x(f[0].x),h=c.getYScale(a.id)(f[0].value)),b=d.axis_rotated?"M "+h+" "+g:"M "+g+" "+h),b?b:"M 0 0"}},f.getAreaBaseValue=function(){return 0},f.generateGetAreaPoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isAreaType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,j],[k,l-(e-j)],[k,l-(e-j)],[k,j]]}},f.updateCircle=function(){var a=this;a.mainCircle=a.main.selectAll("."+i.circles).selectAll("."+i.circle).data(a.lineOrScatterData.bind(a)),a.mainCircle.enter().append("circle").attr("class",a.classCircle.bind(a)).attr("r",a.pointR.bind(a)).style("fill",a.color),a.mainCircle.style("opacity",a.initialOpacityForCircle.bind(a)),a.mainCircle.exit().remove()},f.redrawCircle=function(a,b,c){var d=this.main.selectAll("."+i.selectedCircle);return[(c?this.mainCircle.transition():this.mainCircle).style("opacity",this.opacityForCircle.bind(this)).style("fill",this.color).attr("cx",a).attr("cy",b),(c?d.transition():d).attr("cx",a).attr("cy",b)]},f.circleX=function(a){return a.x||0===a.x?this.x(a.x):null},f.updateCircleY=function(){var a,b,c=this;c.config.data_groups.length>0?(a=c.getShapeIndices(c.isLineType),b=c.generateGetLinePoints(a),c.circleY=function(a,c){return b(a,c)[0][1]}):c.circleY=function(a){return c.getYScale(a.id)(a.value)}},f.getCircles=function(a,b){var c=this;return(b?c.main.selectAll("."+i.circles+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+i.circle+(j(a)?"-"+a:""))},f.expandCircles=function(a,b,c){var d=this,e=d.pointExpandedR.bind(d);c&&d.unexpandCircles(),d.getCircles(a,b).classed(i.EXPANDED,!0).attr("r",e)},f.unexpandCircles=function(a){var b=this,c=b.pointR.bind(b);b.getCircles(a).filter(function(){return b.d3.select(this).classed(i.EXPANDED)}).classed(i.EXPANDED,!1).attr("r",c)},f.pointR=function(a){var b=this,c=b.config;return b.isStepType(a)?0:k(c.point_r)?c.point_r(a):c.point_r},f.pointExpandedR=function(a){var b=this,c=b.config;return c.point_focus_expand_enabled?c.point_focus_expand_r?c.point_focus_expand_r:1.75*b.pointR(a):b.pointR(a)},f.pointSelectR=function(a){var b=this,c=b.config;return c.point_select_r?c.point_select_r:4*b.pointR(a)},f.isWithinCircle=function(a,b){var c=this.d3,d=c.mouse(a),e=c.select(a),f=+e.attr("cx"),g=+e.attr("cy");return Math.sqrt(Math.pow(f-d[0],2)+Math.pow(g-d[1],2))<b},f.isWithinStep=function(a,b){return Math.abs(b-this.d3.mouse(a)[1])<30},f.initBar=function(){var a=this;a.main.select("."+i.chart).append("g").attr("class",i.chartBars)},f.updateTargetsForBar=function(a){var b,c,d=this,e=d.config,f=d.classChartBar.bind(d),g=d.classBars.bind(d),h=d.classFocus.bind(d);b=d.main.select("."+i.chartBars).selectAll("."+i.chartBar).data(a).attr("class",function(a){return f(a)+h(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null})},f.updateBar=function(a){var b=this,c=b.barData.bind(b),d=b.classBar.bind(b),e=b.initialOpacity.bind(b),f=function(a){return b.color(a.id)};b.mainBar=b.main.selectAll("."+i.bars).selectAll("."+i.bar).data(c),b.mainBar.enter().append("path").attr("class",d).style("stroke",f).style("fill",f),b.mainBar.style("opacity",e),b.mainBar.exit().transition().duration(a).style("opacity",0).remove()},f.redrawBar=function(a,b){return[(b?this.mainBar.transition():this.mainBar).attr("d",a).style("fill",this.color).style("opacity",1)]},f.getBarW=function(a,b){var c=this,d=c.config,e="number"==typeof d.bar_width?d.bar_width:b?2*a.tickOffset()*d.bar_width_ratio/b:0;return d.bar_width_max&&e>d.bar_width_max?d.bar_width_max:e},f.getBars=function(a,b){var c=this;return(b?c.main.selectAll("."+i.bars+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+i.bar+(j(a)?"-"+a:""))},f.expandBars=function(a,b,c){var d=this;c&&d.unexpandBars(),d.getBars(a,b).classed(i.EXPANDED,!0)},f.unexpandBars=function(a){var b=this;b.getBars(a).classed(i.EXPANDED,!1)},f.generateDrawBar=function(a,b){var c=this,d=c.config,e=c.generateGetBarPoints(a,b);return function(a,b){var c=e(a,b),f=d.axis_rotated?1:0,g=d.axis_rotated?0:1,h="M "+c[0][f]+","+c[0][g]+" L"+c[1][f]+","+c[1][g]+" L"+c[2][f]+","+c[2][g]+" L"+c[3][f]+","+c[3][g]+" z";return h}},f.generateGetBarPoints=function(a,b){var c=this,d=b?c.subXAxis:c.xAxis,e=a.__max__+1,f=c.getBarW(d,e),g=c.getShapeX(f,e,a,!!b),h=c.getShapeY(!!b),i=c.getShapeOffset(c.isBarType,a,!!b),j=b?c.getSubYScale:c.getYScale;return function(a,b){var d=j.call(c,a.id)(0),e=i(a,b)||d,k=g(a),l=h(a);return c.config.axis_rotated&&(0<a.value&&d>l||a.value<0&&l>d)&&(l=d),[[k,e],[k,l-(d-e)],[k+f,l-(d-e)],[k+f,e]]}},f.isWithinBar=function(a){var b=this.d3.mouse(a),c=a.getBoundingClientRect(),d=a.pathSegList.getItem(0),e=a.pathSegList.getItem(1),f=Math.min(d.x,e.x),g=Math.min(d.y,e.y),h=c.width,i=c.height,j=2,k=f-j,l=f+h+j,m=g+i+j,n=g-j;return k<b[0]&&b[0]<l&&n<b[1]&&b[1]<m},f.initText=function(){var a=this;a.main.select("."+i.chart).append("g").attr("class",i.chartTexts),a.mainText=a.d3.selectAll([])},f.updateTargetsForText=function(a){var b,c,d=this,e=d.classChartText.bind(d),f=d.classTexts.bind(d),g=d.classFocus.bind(d);b=d.main.select("."+i.chartTexts).selectAll("."+i.chartText).data(a).attr("class",function(a){return e(a)+g(a)}),c=b.enter().append("g").attr("class",e).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",f)},f.updateText=function(a){var b=this,c=b.config,d=b.barOrLineData.bind(b),e=b.classText.bind(b);b.mainText=b.main.selectAll("."+i.texts).selectAll("."+i.text).data(d),b.mainText.enter().append("text").attr("class",e).attr("text-anchor",function(a){return c.axis_rotated?a.value<0?"end":"start":"middle"}).style("stroke","none").style("fill",function(a){return b.color(a)}).style("fill-opacity",0),b.mainText.text(function(a,c,d){return b.dataLabelFormat(a.id)(a.value,a.id,c,d)
}),b.mainText.exit().transition().duration(a).style("fill-opacity",0).remove()},f.redrawText=function(a,b,c,d){return[(d?this.mainText.transition():this.mainText).attr("x",a).attr("y",b).style("fill",this.color).style("fill-opacity",c?0:this.opacityForText.bind(this))]},f.getTextRect=function(a,b){var c,d=this.d3.select("body").classed("c3",!0),e=d.append("svg").style("visibility","hidden");return e.selectAll(".dummy").data([a]).enter().append("text").classed(b?b:"",!0).text(a).each(function(){c=this.getBoundingClientRect()}),e.remove(),d.classed("c3",!1),c},f.generateXYForText=function(a,b,c,d){var e=this,f=e.generateGetAreaPoints(b,!1),g=e.generateGetBarPoints(b,!1),h=e.generateGetLinePoints(c,!1),i=d?e.getXForText:e.getYForText;return function(a,b){var c=e.isAreaType(a)?f:e.isBarType(a)?g:h;return i.call(e,c(a,b),a,this)}},f.getXForText=function(a,b,c){var d,e,f=this,g=c.getBoundingClientRect();return f.config.axis_rotated?(e=f.isBarType(b)?4:6,d=a[2][1]+e*(b.value<0?-1:1)):d=f.hasType("bar")?(a[2][0]+a[0][0])/2:a[0][0],null===b.value&&(d>f.width?d=f.width-g.width:0>d&&(d=4)),d},f.getYForText=function(a,b,c){var d,e=this,f=c.getBoundingClientRect();return d=e.config.axis_rotated?(a[0][0]+a[2][0]+.6*f.height)/2:a[2][1]+(b.value<0?f.height:e.isBarType(b)?-3:-6),null!==b.value||e.config.axis_rotated||(d<f.height?d=f.height:d>this.height&&(d=this.height-4)),d},f.setTargetType=function(a,b){var c=this,d=c.config;c.mapToTargetIds(a).forEach(function(a){c.withoutFadeIn[a]=b===d.data_types[a],d.data_types[a]=b}),a||(d.data_type=b)},f.hasType=function(a,b){var c=this,d=c.config.data_types,e=!1;return b=b||c.data.targets,b&&b.length?b.forEach(function(b){var c=d[b.id];(c&&c.indexOf(a)>=0||!c&&"line"===a)&&(e=!0)}):Object.keys(d).length?Object.keys(d).forEach(function(b){d[b]===a&&(e=!0)}):e=c.config.data_type===a,e},f.hasArcType=function(a){return this.hasType("pie",a)||this.hasType("donut",a)||this.hasType("gauge",a)},f.isLineType=function(a){var b=this.config,c=l(a)?a:a.id;return!b.data_types[c]||["line","spline","area","area-spline","step","area-step"].indexOf(b.data_types[c])>=0},f.isStepType=function(a){var b=l(a)?a:a.id;return["step","area-step"].indexOf(this.config.data_types[b])>=0},f.isSplineType=function(a){var b=l(a)?a:a.id;return["spline","area-spline"].indexOf(this.config.data_types[b])>=0},f.isAreaType=function(a){var b=l(a)?a:a.id;return["area","area-spline","area-step"].indexOf(this.config.data_types[b])>=0},f.isBarType=function(a){var b=l(a)?a:a.id;return"bar"===this.config.data_types[b]},f.isScatterType=function(a){var b=l(a)?a:a.id;return"scatter"===this.config.data_types[b]},f.isPieType=function(a){var b=l(a)?a:a.id;return"pie"===this.config.data_types[b]},f.isGaugeType=function(a){var b=l(a)?a:a.id;return"gauge"===this.config.data_types[b]},f.isDonutType=function(a){var b=l(a)?a:a.id;return"donut"===this.config.data_types[b]},f.isArcType=function(a){return this.isPieType(a)||this.isDonutType(a)||this.isGaugeType(a)},f.lineData=function(a){return this.isLineType(a)?[a]:[]},f.arcData=function(a){return this.isArcType(a.data)?[a]:[]},f.barData=function(a){return this.isBarType(a)?a.values:[]},f.lineOrScatterData=function(a){return this.isLineType(a)||this.isScatterType(a)?a.values:[]},f.barOrLineData=function(a){return this.isBarType(a)||this.isLineType(a)?a.values:[]},f.initGrid=function(){var a=this,b=a.config,c=a.d3;a.grid=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",i.grid),b.grid_x_show&&a.grid.append("g").attr("class",i.xgrids),b.grid_y_show&&a.grid.append("g").attr("class",i.ygrids),b.grid_focus_show&&a.grid.append("g").attr("class",i.xgridFocus).append("line").attr("class",i.xgridFocus),a.xgrid=c.selectAll([]),b.grid_lines_front||a.initGridLines()},f.initGridLines=function(){var a=this,b=a.d3;a.gridLines=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",i.grid+" "+i.gridLines),a.gridLines.append("g").attr("class",i.xgridLines),a.gridLines.append("g").attr("class",i.ygridLines),a.xgridLines=b.selectAll([])},f.updateXGrid=function(a){var b=this,c=b.config,d=b.d3,e=b.generateGridData(c.grid_x_type,b.x),f=b.isCategorized()?b.xAxis.tickOffset():0;b.xgridAttr=c.axis_rotated?{x1:0,x2:b.width,y1:function(a){return b.x(a)-f},y2:function(a){return b.x(a)-f}}:{x1:function(a){return b.x(a)+f},x2:function(a){return b.x(a)+f},y1:0,y2:b.height},b.xgrid=b.main.select("."+i.xgrids).selectAll("."+i.xgrid).data(e),b.xgrid.enter().append("line").attr("class",i.xgrid),a||b.xgrid.attr(b.xgridAttr).style("opacity",function(){return+d.select(this).attr(c.axis_rotated?"y1":"x1")===(c.axis_rotated?b.height:0)?0:1}),b.xgrid.exit().remove()},f.updateYGrid=function(){var a=this,b=a.config,c=a.yAxis.tickValues()||a.y.ticks(b.grid_y_ticks);a.ygrid=a.main.select("."+i.ygrids).selectAll("."+i.ygrid).data(c),a.ygrid.enter().append("line").attr("class",i.ygrid),a.ygrid.attr("x1",b.axis_rotated?a.y:0).attr("x2",b.axis_rotated?a.y:a.width).attr("y1",b.axis_rotated?0:a.y).attr("y2",b.axis_rotated?a.height:a.y),a.ygrid.exit().remove(),a.smoothLines(a.ygrid,"grid")},f.updateGrid=function(a){var b,c,d,e=this,f=e.main,g=e.config;e.grid.style("visibility",e.hasArcType()?"hidden":"visible"),f.select("line."+i.xgridFocus).style("visibility","hidden"),g.grid_x_show&&e.updateXGrid(),e.xgridLines=f.select("."+i.xgridLines).selectAll("."+i.xgridLine).data(g.grid_x_lines),b=e.xgridLines.enter().append("g").attr("class",function(a){return i.xgridLine+(a["class"]?" "+a["class"]:"")}),b.append("line").style("opacity",0),b.append("text").attr("text-anchor","end").attr("transform",g.axis_rotated?"":"rotate(-90)").attr("dx",-4).attr("dy",-5).style("opacity",0),e.xgridLines.exit().transition().duration(a).style("opacity",0).remove(),g.grid_y_show&&e.updateYGrid(),e.ygridLines=f.select("."+i.ygridLines).selectAll("."+i.ygridLine).data(g.grid_y_lines),c=e.ygridLines.enter().append("g").attr("class",function(a){return i.ygridLine+(a["class"]?" "+a["class"]:"")}),c.append("line").style("opacity",0),c.append("text").attr("text-anchor","end").attr("transform",g.axis_rotated?"rotate(-90)":"").attr("dx",g.axis_rotated?0:-e.margin.top).attr("dy",-5).style("opacity",0),d=e.yv.bind(e),e.ygridLines.select("line").transition().duration(a).attr("x1",g.axis_rotated?d:0).attr("x2",g.axis_rotated?d:e.width).attr("y1",g.axis_rotated?0:d).attr("y2",g.axis_rotated?e.height:d).style("opacity",1),e.ygridLines.select("text").transition().duration(a).attr("x",g.axis_rotated?0:e.width).attr("y",d).text(function(a){return a.text}).style("opacity",1),e.ygridLines.exit().transition().duration(a).style("opacity",0).remove()},f.redrawGrid=function(a){var b=this,c=b.config,d=b.xv.bind(b),e=b.xgridLines.select("line"),f=b.xgridLines.select("text");return[(a?e.transition():e).attr("x1",c.axis_rotated?0:d).attr("x2",c.axis_rotated?b.width:d).attr("y1",c.axis_rotated?d:0).attr("y2",c.axis_rotated?d:b.height).style("opacity",1),(a?f.transition():f).attr("x",c.axis_rotated?b.width:0).attr("y",d).text(function(a){return a.text}).style("opacity",1)]},f.showXGridFocus=function(a){var b=this,c=b.config,d=a.filter(function(a){return a&&j(a.value)}),e=b.main.selectAll("line."+i.xgridFocus),f=b.xx.bind(b);c.tooltip_show&&(b.hasType("scatter")||b.hasArcType()||(e.style("visibility","visible").data([d[0]]).attr(c.axis_rotated?"y1":"x1",f).attr(c.axis_rotated?"y2":"x2",f),b.smoothLines(e,"grid")))},f.hideXGridFocus=function(){this.main.select("line."+i.xgridFocus).style("visibility","hidden")},f.updateXgridFocus=function(){var a=this,b=a.config;a.main.select("line."+i.xgridFocus).attr("x1",b.axis_rotated?0:-10).attr("x2",b.axis_rotated?a.width:-10).attr("y1",b.axis_rotated?-10:0).attr("y2",b.axis_rotated?-10:a.height)},f.generateGridData=function(a,b){var c,d,e,f,g=this,h=[],j=g.main.select("."+i.axisX).selectAll(".tick").size();if("year"===a)for(c=g.getXDomain(),d=c[0].getFullYear(),e=c[1].getFullYear(),f=d;e>=f;f++)h.push(new Date(f+"-01-01 00:00:00"));else h=b.ticks(10),h.length>j&&(h=h.filter(function(a){return(""+a).indexOf(".")<0}));return h},f.getGridFilterToRemove=function(a){return a?function(b){var c=!1;return[].concat(a).forEach(function(a){("value"in a&&b.value===a.value||"class"in a&&b["class"]===a["class"])&&(c=!0)}),c}:function(){return!0}},f.removeGridLines=function(a,b){var c=this,d=c.config,e=c.getGridFilterToRemove(a),f=function(a){return!e(a)},g=b?i.xgridLines:i.ygridLines,h=b?i.xgridLine:i.ygridLine;c.main.select("."+g).selectAll("."+h).filter(e).transition().duration(d.transition_duration).style("opacity",0).remove(),b?d.grid_x_lines=d.grid_x_lines.filter(f):d.grid_y_lines=d.grid_y_lines.filter(f)},f.initTooltip=function(){var a,b=this,c=b.config;if(b.tooltip=b.selectChart.style("position","relative").append("div").attr("class",i.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),c.tooltip_init_show){if(b.isTimeSeries()&&l(c.tooltip_init_x)){for(c.tooltip_init_x=b.parseDate(c.tooltip_init_x),a=0;a<b.data.targets[0].values.length&&b.data.targets[0].values[a].x-c.tooltip_init_x!==0;a++);c.tooltip_init_x=a}b.tooltip.html(c.tooltip_contents.call(b,b.data.targets.map(function(a){return b.addName(a.values[c.tooltip_init_x])}),b.getXAxisTickFormat(),b.getYFormat(b.hasArcType()),b.color)),b.tooltip.style("top",c.tooltip_init_position.top).style("left",c.tooltip_init_position.left).style("display","block")}},f.getTooltipContent=function(a,b,c,d){var e,f,g,h,j,k,l=this,m=l.config,n=m.tooltip_format_title||b,o=m.tooltip_format_name||function(a){return a},p=m.tooltip_format_value||c;for(f=0;f<a.length;f++)a[f]&&(a[f].value||0===a[f].value)&&(e||(g=n?n(a[f].x):a[f].x,e="<table class='"+i.tooltip+"'>"+(g||0===g?"<tr><th colspan='2'>"+g+"</th></tr>":"")),h=p(a[f].value,a[f].ratio,a[f].id,a[f].index),void 0!==h&&(j=o(a[f].name,a[f].ratio,a[f].id,a[f].index),k=l.levelColor?l.levelColor(a[f].value):d(a[f].id),e+="<tr class='"+i.tooltipName+"-"+a[f].id+"'>",e+="<td class='name'><span style='background-color:"+k+"'></span>"+j+"</td>",e+="<td class='value'>"+h+"</td>",e+="</tr>"));return e+"</table>"},f.tooltipPosition=function(a,b,c,d){var e,f,g,h,i,j=this,k=j.config,l=j.d3,m=j.hasArcType(),n=l.mouse(d);return m?(f=(j.width-(j.isLegendRight?j.getLegendWidth():0))/2+n[0],h=j.height/2+n[1]+20):(e=j.getSvgLeft(!0),k.axis_rotated?(f=e+n[0]+100,g=f+b,i=j.currentWidth-j.getCurrentPaddingRight(),h=j.x(a[0].x)+20):(f=e+j.getCurrentPaddingLeft(!0)+j.x(a[0].x)+20,g=f+b,i=e+j.currentWidth-j.getCurrentPaddingRight(),h=n[1]+15),g>i&&(f-=g-i),h+c>j.currentHeight&&(h-=c+30)),0>h&&(h=0),{top:h,left:f}},f.showTooltip=function(a,b){var c,d,e,g=this,h=g.config,i=g.hasArcType(),k=a.filter(function(a){return a&&j(a.value)}),l=h.tooltip_position||f.tooltipPosition;0!==k.length&&h.tooltip_show&&(g.tooltip.html(h.tooltip_contents.call(g,a,g.getXAxisTickFormat(),g.getYFormat(i),g.color)).style("display","block"),c=g.tooltip.property("offsetWidth"),d=g.tooltip.property("offsetHeight"),e=l.call(this,k,c,d,b),g.tooltip.style("top",e.top+"px").style("left",e.left+"px"))},f.hideTooltip=function(){this.tooltip.style("display","none")},f.initLegend=function(){var a=this;return a.legendHasRendered=!1,a.legend=a.svg.append("g").attr("transform",a.getTranslate("legend")),a.config.legend_show?void a.updateLegendWithDefaults():(a.legend.style("visibility","hidden"),void(a.hiddenLegendIds=a.mapToIds(a.data.targets)))},f.updateLegendWithDefaults=function(){var a=this;a.updateLegend(a.mapToIds(a.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},f.updateSizeForLegend=function(a,b){var c=this,d=c.config,e={top:c.isLegendTop?c.getCurrentPaddingTop()+d.legend_inset_y+5.5:c.currentHeight-a-c.getCurrentPaddingBottom()-d.legend_inset_y,left:c.isLegendLeft?c.getCurrentPaddingLeft()+d.legend_inset_x+.5:c.currentWidth-b-c.getCurrentPaddingRight()-d.legend_inset_x+.5};c.margin3={top:c.isLegendRight?0:c.isLegendInset?e.top:c.currentHeight-a,right:0/0,bottom:0,left:c.isLegendRight?c.currentWidth-b:c.isLegendInset?e.left:0}},f.transformLegend=function(a){var b=this;(a?b.legend.transition():b.legend).attr("transform",b.getTranslate("legend"))},f.updateLegendStep=function(a){this.legendStep=a},f.updateLegendItemWidth=function(a){this.legendItemWidth=a},f.updateLegendItemHeight=function(a){this.legendItemHeight=a},f.getLegendWidth=function(){var a=this;return a.config.legend_show?a.isLegendRight||a.isLegendInset?a.legendItemWidth*(a.legendStep+1):a.currentWidth:0},f.getLegendHeight=function(){var a=this,b=0;return a.config.legend_show&&(b=a.isLegendRight?a.currentHeight:Math.max(20,a.legendItemHeight)*(a.legendStep+1)),b},f.opacityForLegend=function(a){return a.classed(i.legendItemHidden)?null:1},f.opacityForUnfocusedLegend=function(a){return a.classed(i.legendItemHidden)?null:.3},f.toggleFocusLegend=function(a,b){var c=this;a=c.mapToTargetIds(a),c.legend.selectAll("."+i.legendItem).filter(function(b){return a.indexOf(b)>=0}).classed(i.legendItemFocused,b).transition().duration(100).style("opacity",function(){var a=b?c.opacityForLegend:c.opacityForUnfocusedLegend;return a.call(c,c.d3.select(this))})},f.revertLegend=function(){var a=this,b=a.d3;a.legend.selectAll("."+i.legendItem).classed(i.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return a.opacityForLegend(b.select(this))})},f.showLegend=function(a){var b=this,c=b.config;c.legend_show||(c.legend_show=!0,b.legend.style("visibility","visible"),b.legendHasRendered||b.updateLegendWithDefaults()),b.removeHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("visibility","visible").transition().style("opacity",function(){return b.opacityForLegend(b.d3.select(this))})},f.hideLegend=function(a){var b=this,c=b.config;c.legend_show&&r(a)&&(c.legend_show=!1,b.legend.style("visibility","hidden")),b.addHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("opacity",0).style("visibility","hidden")};var h={};f.clearLegendItemTextBoxCache=function(){h={}},f.updateLegend=function(a,b,c){function d(a,b){return h[b]||(h[b]=w.getTextRect(a.textContent,i.legendItem)),h[b]}function e(b,c,e){function f(a,b){b||(g=(o-E-n)/2,C>g&&(g=(o-n)/2,E=0,K++)),J[a]=K,I[K]=w.isLegendInset?10:g,F[a]=E,E+=n}var g,h,i=0===e,j=e===a.length-1,k=d(b,c),l=k.width+D+(!j||w.isLegendRight||w.isLegendInset?z:0),m=k.height+y,n=w.isLegendRight||w.isLegendInset?m:l,o=w.isLegendRight||w.isLegendInset?w.getLegendHeight():w.getLegendWidth();return i&&(E=0,K=0,A=0,B=0),x.legend_show&&!w.isLegendToShow(c)?void(G[c]=H[c]=J[c]=F[c]=0):(G[c]=l,H[c]=m,(!A||l>=A)&&(A=l),(!B||m>=B)&&(B=m),h=w.isLegendRight||w.isLegendInset?B:A,void(x.legend_equally?(Object.keys(G).forEach(function(a){G[a]=A}),Object.keys(H).forEach(function(a){H[a]=B}),g=(o-h*a.length)/2,C>g?(E=0,K=0,a.forEach(function(a){f(a)})):f(c,!0)):f(c)))}var f,g,j,k,l,m,o,p,q,r,s,u,v,w=this,x=w.config,y=4,z=10,A=0,B=0,C=10,D=15,E=0,F={},G={},H={},I=[0],J={},K=0,L=w.legend.selectAll("."+i.legendItemFocused).size();b=b||{},p=t(b,"withTransition",!0),q=t(b,"withTransitionForTransform",!0),w.isLegendInset&&(K=x.legend_inset_step?x.legend_inset_step:a.length,w.updateLegendStep(K)),w.isLegendRight?(f=function(a){return A*J[a]},k=function(a){return I[J[a]]+F[a]}):w.isLegendInset?(f=function(a){return A*J[a]+10},k=function(a){return I[J[a]]+F[a]}):(f=function(a){return I[J[a]]+F[a]},k=function(a){return B*J[a]}),g=function(a,b){return f(a,b)+14},l=function(a,b){return k(a,b)+9},j=function(a,b){return f(a,b)},m=function(a,b){return k(a,b)-5},o=w.legend.selectAll("."+i.legendItem).data(a).enter().append("g").attr("class",function(a){return w.generateClass(i.legendItem,a)}).style("visibility",function(a){return w.isLegendToShow(a)?"visible":"hidden"}).style("cursor","pointer").on("click",function(a){x.legend_item_onclick?x.legend_item_onclick.call(w,a):w.d3.event.altKey?(w.api.hide(),w.api.show(a)):(w.api.toggle(a),w.isTargetToShow(a)?w.api.focus(a):w.api.revert())}).on("mouseover",function(a){w.d3.select(this).classed(i.legendItemFocused,!0),!w.transiting&&w.isTargetToShow(a)&&w.api.focus(a),x.legend_item_onmouseover&&x.legend_item_onmouseover.call(w,a)}).on("mouseout",function(a){w.d3.select(this).classed(i.legendItemFocused,!1),w.api.revert(),x.legend_item_onmouseout&&x.legend_item_onmouseout.call(w,a)}),o.append("text").text(function(a){return n(x.data_names[a])?x.data_names[a]:a}).each(function(a,b){e(this,a,b)}).style("pointer-events","none").attr("x",w.isLegendRight||w.isLegendInset?g:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:l),o.append("rect").attr("class",i.legendItemEvent).style("fill-opacity",0).attr("x",w.isLegendRight||w.isLegendInset?j:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:m),o.append("rect").attr("class",i.legendItemTile).style("pointer-events","none").style("fill",w.color).attr("x",w.isLegendRight||w.isLegendInset?g:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:k).attr("width",10).attr("height",10),v=w.legend.select("."+i.legendBackground+" rect"),w.isLegendInset&&A>0&&0===v.size()&&(v=w.legend.insert("g","."+i.legendItem).attr("class",i.legendBackground).append("rect")),r=w.legend.selectAll("text").data(a).text(function(a){return n(x.data_names[a])?x.data_names[a]:a}).each(function(a,b){e(this,a,b)}),(p?r.transition():r).attr("x",g).attr("y",l),s=w.legend.selectAll("rect."+i.legendItemEvent).data(a),(p?s.transition():s).attr("width",function(a){return G[a]}).attr("height",function(a){return H[a]}).attr("x",j).attr("y",m),u=w.legend.selectAll("rect."+i.legendItemTile).data(a),(p?u.transition():u).style("fill",w.color).attr("x",f).attr("y",k),v&&(p?v.transition():v).attr("height",w.getLegendHeight()-12).attr("width",A*(K+1)+10),w.legend.selectAll("."+i.legendItem).classed(i.legendItemHidden,function(a){return!w.isTargetToShow(a)}).transition().style("opacity",function(a){var b=w.d3.select(this);return w.isTargetToShow(a)?!L||b.classed(i.legendItemFocused)?w.opacityForLegend(b):w.opacityForUnfocusedLegend(b):null}),w.updateLegendItemWidth(A),w.updateLegendItemHeight(B),w.updateLegendStep(K),w.updateSizes(),w.updateScales(),w.updateSvgSize(),w.transformAll(q,c),w.legendHasRendered=!0},f.initAxis=function(){var a=this,b=a.config,c=a.main;a.axes.x=c.append("g").attr("class",i.axis+" "+i.axisX).attr("clip-path",a.clipPathForXAxis).attr("transform",a.getTranslate("x")).style("visibility",b.axis_x_show?"visible":"hidden"),a.axes.x.append("text").attr("class",i.axisXLabel).attr("transform",b.axis_rotated?"rotate(-90)":"").style("text-anchor",a.textAnchorForXAxisLabel.bind(a)),a.axes.y=c.append("g").attr("class",i.axis+" "+i.axisY).attr("clip-path",b.axis_y_inner?"":a.clipPathForYAxis).attr("transform",a.getTranslate("y")).style("visibility",b.axis_y_show?"visible":"hidden"),a.axes.y.append("text").attr("class",i.axisYLabel).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",a.textAnchorForYAxisLabel.bind(a)),a.axes.y2=c.append("g").attr("class",i.axis+" "+i.axisY2).attr("transform",a.getTranslate("y2")).style("visibility",b.axis_y2_show?"visible":"hidden"),a.axes.y2.append("text").attr("class",i.axisY2Label).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",a.textAnchorForY2AxisLabel.bind(a))},f.getXAxis=function(a,b,c,e,f,g){var h=this,i=h.config,j={isCategory:h.isCategorized(),withOuterTick:f,tickMultiline:i.axis_x_tick_multiline,tickWidth:i.axis_x_tick_width,withoutTransition:g},k=d(h.d3,j).scale(a).orient(b);return h.isTimeSeries()&&e&&(e=e.map(function(a){return h.parseDate(a)})),k.tickFormat(c).tickValues(e),h.isCategorized()?(k.tickCentered(i.axis_x_tick_centered),r(i.axis_x_tick_culling)&&(i.axis_x_tick_culling=!1)):k.tickOffset=function(){var a=this.scale(),b=h.getEdgeX(h.data.targets),c=a(b[1])-a(b[0]),d=c?c:i.axis_rotated?h.height:h.width;return d/h.getMaxDataCount()/2},k},f.updateXAxisTickValues=function(a,b){var c,d=this,e=d.config;return(e.axis_x_tick_fit||e.axis_x_tick_count)&&(c=d.generateTickValues(d.mapTargetsToUniqueXs(a),e.axis_x_tick_count,d.isTimeSeries())),b?b.tickValues(c):(d.xAxis.tickValues(c),d.subXAxis.tickValues(c)),c},f.getYAxis=function(a,b,c,e,f){var g={withOuterTick:f},h=d(this.d3,g).scale(a).orient(b).tickFormat(c);return this.isTimeSeriesY()?h.ticks(this.d3.time[this.config.axis_y_tick_time_value],this.config.axis_y_tick_time_interval):h.tickValues(e),h},f.getAxisId=function(a){var b=this.config;return a in b.data_axes?b.data_axes[a]:"y"},f.getXAxisTickFormat=function(){var a=this,b=a.config,c=a.isTimeSeries()?a.defaultAxisTimeFormat:a.isCategorized()?a.categoryName:function(a){return 0>a?a.toFixed(0):a};return b.axis_x_tick_format&&(k(b.axis_x_tick_format)?c=b.axis_x_tick_format:a.isTimeSeries()&&(c=function(c){return c?a.axisTimeFormat(b.axis_x_tick_format)(c):""})),k(c)?function(b){return c.call(a,b)}:c},f.getAxisTickValues=function(a,b){return a?a:b?b.tickValues():void 0},f.getXAxisTickValues=function(){return this.getAxisTickValues(this.config.axis_x_tick_values,this.xAxis)},f.getYAxisTickValues=function(){return this.getAxisTickValues(this.config.axis_y_tick_values,this.yAxis)},f.getY2AxisTickValues=function(){return this.getAxisTickValues(this.config.axis_y2_tick_values,this.y2Axis)},f.getAxisLabelOptionByAxisId=function(a){var b,c=this,d=c.config;return"y"===a?b=d.axis_y_label:"y2"===a?b=d.axis_y2_label:"x"===a&&(b=d.axis_x_label),b},f.getAxisLabelText=function(a){var b=this.getAxisLabelOptionByAxisId(a);return l(b)?b:b?b.text:null},f.setAxisLabelText=function(a,b){var c=this,d=c.config,e=c.getAxisLabelOptionByAxisId(a);l(e)?"y"===a?d.axis_y_label=b:"y2"===a?d.axis_y2_label=b:"x"===a&&(d.axis_x_label=b):e&&(e.text=b)},f.getAxisLabelPosition=function(a,b){var c=this.getAxisLabelOptionByAxisId(a),d=c&&"object"==typeof c&&c.position?c.position:b;return{isInner:d.indexOf("inner")>=0,isOuter:d.indexOf("outer")>=0,isLeft:d.indexOf("left")>=0,isCenter:d.indexOf("center")>=0,isRight:d.indexOf("right")>=0,isTop:d.indexOf("top")>=0,isMiddle:d.indexOf("middle")>=0,isBottom:d.indexOf("bottom")>=0}},f.getXAxisLabelPosition=function(){return this.getAxisLabelPosition("x",this.config.axis_rotated?"inner-top":"inner-right")},f.getYAxisLabelPosition=function(){return this.getAxisLabelPosition("y",this.config.axis_rotated?"inner-right":"inner-top")},f.getY2AxisLabelPosition=function(){return this.getAxisLabelPosition("y2",this.config.axis_rotated?"inner-right":"inner-top")},f.getAxisLabelPositionById=function(a){return"y2"===a?this.getY2AxisLabelPosition():"y"===a?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},f.textForXAxisLabel=function(){return this.getAxisLabelText("x")},f.textForYAxisLabel=function(){return this.getAxisLabelText("y")},f.textForY2AxisLabel=function(){return this.getAxisLabelText("y2")},f.xForAxisLabel=function(a,b){var c=this;return a?b.isLeft?0:b.isCenter?c.width/2:c.width:b.isBottom?-c.height:b.isMiddle?-c.height/2:0},f.dxForAxisLabel=function(a,b){return a?b.isLeft?"0.5em":b.isRight?"-0.5em":"0":b.isTop?"-0.5em":b.isBottom?"0.5em":"0"},f.textAnchorForAxisLabel=function(a,b){return a?b.isLeft?"start":b.isCenter?"middle":"end":b.isBottom?"start":b.isMiddle?"middle":"end"},f.xForXAxisLabel=function(){return this.xForAxisLabel(!this.config.axis_rotated,this.getXAxisLabelPosition())},f.xForYAxisLabel=function(){return this.xForAxisLabel(this.config.axis_rotated,this.getYAxisLabelPosition())},f.xForY2AxisLabel=function(){return this.xForAxisLabel(this.config.axis_rotated,this.getY2AxisLabelPosition())},f.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.config.axis_rotated,this.getXAxisLabelPosition())},f.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.config.axis_rotated,this.getYAxisLabelPosition())},f.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.config.axis_rotated,this.getY2AxisLabelPosition())},f.dyForXAxisLabel=function(){var a=this,b=a.config,c=a.getXAxisLabelPosition();return b.axis_rotated?c.isInner?"1.2em":-25-a.getMaxTickWidth("x"):c.isInner?"-0.5em":b.axis_x_height?b.axis_x_height-10:"3em"},f.dyForYAxisLabel=function(){var a=this,b=a.getYAxisLabelPosition();return a.config.axis_rotated?b.isInner?"-0.5em":"3em":b.isInner?"1.2em":-10-(a.config.axis_y_inner?0:a.getMaxTickWidth("y")+10)},f.dyForY2AxisLabel=function(){var a=this,b=a.getY2AxisLabelPosition();return a.config.axis_rotated?b.isInner?"1.2em":"-2.2em":b.isInner?"-0.5em":15+(a.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},f.textAnchorForXAxisLabel=function(){var a=this;return a.textAnchorForAxisLabel(!a.config.axis_rotated,a.getXAxisLabelPosition())},f.textAnchorForYAxisLabel=function(){var a=this;return a.textAnchorForAxisLabel(a.config.axis_rotated,a.getYAxisLabelPosition())},f.textAnchorForY2AxisLabel=function(){var a=this;return a.textAnchorForAxisLabel(a.config.axis_rotated,a.getY2AxisLabelPosition())},f.xForRotatedTickText=function(a){return 8*Math.sin(Math.PI*(a/180))},f.yForRotatedTickText=function(a){return 11.5-2.5*(a/15)*(a>0?1:-1)},f.rotateTickText=function(a,b,c){a.selectAll(".tick text").style("text-anchor",c>0?"start":"end"),b.selectAll(".tick text").attr("y",this.yForRotatedTickText(c)).attr("transform","rotate("+c+")").selectAll("tspan").attr("dx",this.xForRotatedTickText(c))},f.getMaxTickWidth=function(b,c){var d,e,f,g,h,i=this,j=i.config,k=0;return c&&i.currentMaxTickWidths[b]?i.currentMaxTickWidths[b]:(i.svg&&(d=i.filterTargetsToShow(i.data.targets),"y"===b?(e=i.y.copy().domain(i.getYDomain(d,"y")),f=i.getYAxis(e,i.yOrient,j.axis_y_tick_format,i.yAxisTickValues)):"y2"===b?(e=i.y2.copy().domain(i.getYDomain(d,"y2")),f=i.getYAxis(e,i.y2Orient,j.axis_y2_tick_format,i.y2AxisTickValues)):(e=i.x.copy().domain(i.getXDomain(d)),f=i.getXAxis(e,i.xOrient,i.xAxisTickFormat,i.xAxisTickValues),i.updateXAxisTickValues(d,f)),g=this.d3.select("body").classed("c3",!0),h=g.append("svg").style("visibility","hidden"),h.append("g").call(f).each(function(){i.d3.select(this).selectAll("text tspan").each(function(){var a=this.getBoundingClientRect();a.left>=0&&k<a.width&&(k=a.width)})}),a.setTimeout(function(){h.remove()},100),g.classed("c3",!1)),i.currentMaxTickWidths[b]=0>=k?i.currentMaxTickWidths[b]:k,i.currentMaxTickWidths[b])},f.updateAxisLabels=function(a){var b=this,c=b.main.select("."+i.axisX+" ."+i.axisXLabel),d=b.main.select("."+i.axisY+" ."+i.axisYLabel),e=b.main.select("."+i.axisY2+" ."+i.axisY2Label);(a?c.transition():c).attr("x",b.xForXAxisLabel.bind(b)).attr("dx",b.dxForXAxisLabel.bind(b)).attr("dy",b.dyForXAxisLabel.bind(b)).text(b.textForXAxisLabel.bind(b)),(a?d.transition():d).attr("x",b.xForYAxisLabel.bind(b)).attr("dx",b.dxForYAxisLabel.bind(b)).attr("dy",b.dyForYAxisLabel.bind(b)).text(b.textForYAxisLabel.bind(b)),(a?e.transition():e).attr("x",b.xForY2AxisLabel.bind(b)).attr("dx",b.dxForY2AxisLabel.bind(b)).attr("dy",b.dyForY2AxisLabel.bind(b)).text(b.textForY2AxisLabel.bind(b))},f.getAxisPadding=function(a,b,c,d){return j(a[b])?"ratio"===a.unit?a[b]*d:this.convertPixelsToAxisPadding(a[b],d):c},f.convertPixelsToAxisPadding=function(a,b){var c=this.config.axis_rotated?this.width:this.height;return b*(a/c)},f.generateTickValues=function(a,b,c){var d,e,f,g,h,i,j,l=a;if(b)if(d=k(b)?b():b,1===d)l=[a[0]];else if(2===d)l=[a[0],a[a.length-1]];else if(d>2){for(g=d-2,e=a[0],f=a[a.length-1],h=(f-e)/(g+1),l=[e],i=0;g>i;i++)j=+e+h*(i+1),l.push(c?new Date(j):j);l.push(f)}return c||(l=l.sort(function(a,b){return a-b})),l},f.generateAxisTransitions=function(a){var b=this,c=b.axes;return{axisX:a?c.x.transition().duration(a):c.x,axisY:a?c.y.transition().duration(a):c.y,axisY2:a?c.y2.transition().duration(a):c.y2,axisSubX:a?c.subx.transition().duration(a):c.subx}},f.redrawAxis=function(a,b){var c=this,d=c.config;c.axes.x.style("opacity",b?0:1),c.axes.y.style("opacity",b?0:1),c.axes.y2.style("opacity",b?0:1),c.axes.subx.style("opacity",b?0:1),a.axisX.call(c.xAxis),a.axisY.call(c.yAxis),a.axisY2.call(c.y2Axis),a.axisSubX.call(c.subXAxis),!d.axis_rotated&&d.axis_x_tick_rotate&&(c.rotateTickText(c.axes.x,a.axisX,d.axis_x_tick_rotate),c.rotateTickText(c.axes.subx,a.axisSubX,d.axis_x_tick_rotate))},f.getClipPath=function(b){var c=a.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0;return"url("+(c?"":document.URL.split("#")[0])+"#"+b+")"},f.appendClip=function(a,b){return a.append("clipPath").attr("id",b).append("rect")},f.getAxisClipX=function(a){var b=Math.max(30,this.margin.left);return a?-(1+b):-(b-1)},f.getAxisClipY=function(a){return a?-20:-this.margin.top},f.getXAxisClipX=function(){var a=this;return a.getAxisClipX(!a.config.axis_rotated)},f.getXAxisClipY=function(){var a=this;return a.getAxisClipY(!a.config.axis_rotated)},f.getYAxisClipX=function(){var a=this;return a.config.axis_y_inner?-1:a.getAxisClipX(a.config.axis_rotated)},f.getYAxisClipY=function(){var a=this;return a.getAxisClipY(a.config.axis_rotated)},f.getAxisClipWidth=function(a){var b=this,c=Math.max(30,b.margin.left),d=Math.max(30,b.margin.right);return a?b.width+2+c+d:b.margin.left+20},f.getAxisClipHeight=function(a){return(a?this.margin.bottom:this.margin.top+this.height)+20},f.getXAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(!a.config.axis_rotated)},f.getXAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(!a.config.axis_rotated)},f.getYAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(a.config.axis_rotated)+(a.config.axis_y_inner?20:0)},f.getYAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(a.config.axis_rotated)},f.initPie=function(){var a=this,b=a.d3,c=a.config;a.pie=b.layout.pie().value(function(a){return a.values.reduce(function(a,b){return a+b.value},0)}),c.data_order||a.pie.sort(null)},f.updateRadius=function(){var a=this,b=a.config,c=b.gauge_width||b.donut_width;a.radiusExpanded=Math.min(a.arcWidth,a.arcHeight)/2,a.radius=.95*a.radiusExpanded,a.innerRadiusRatio=c?(a.radius-c)/a.radius:.6,a.innerRadius=a.hasType("donut")||a.hasType("gauge")?a.radius*a.innerRadiusRatio:0},f.updateArc=function(){var a=this;a.svgArc=a.getSvgArc(),a.svgArcExpanded=a.getSvgArcExpanded(),a.svgArcExpandedSub=a.getSvgArcExpanded(.98)},f.updateAngle=function(a){var b,c,d=this,e=d.config,f=!1,g=0,h=e.gauge_min,i=e.gauge_max;return d.pie(d.filterTargetsToShow(d.data.targets)).forEach(function(b){f||b.data.id!==a.data.id||(f=!0,a=b,a.index=g),g++}),isNaN(a.endAngle)&&(a.endAngle=a.startAngle),d.isGaugeType(a.data)&&(b=Math.PI/(i-h),c=a.value<h?0:a.value<i?a.value-h:i-h,a.startAngle=-1*(Math.PI/2),a.endAngle=a.startAngle+b*c),f?a:null},f.getSvgArc=function(){var a=this,b=a.d3.svg.arc().outerRadius(a.radius).innerRadius(a.innerRadius),c=function(c,d){var e;return d?b(c):(e=a.updateAngle(c),e?b(e):"M 0 0")};return c.centroid=b.centroid,c},f.getSvgArcExpanded=function(a){var b=this,c=b.d3.svg.arc().outerRadius(b.radiusExpanded*(a?a:1)).innerRadius(b.innerRadius);return function(a){var d=b.updateAngle(a);return d?c(d):"M 0 0"}},f.getArc=function(a,b,c){return c||this.isArcType(a.data)?this.svgArc(a,b):"M 0 0"},f.transformForArcLabel=function(a){var b,c,d,e,f,g=this,h=g.updateAngle(a),i="";return h&&!g.hasType("gauge")&&(b=this.svgArc.centroid(h),c=isNaN(b[0])?0:b[0],d=isNaN(b[1])?0:b[1],e=Math.sqrt(c*c+d*d),f=g.radius&&e?(36/g.radius>.375?1.175-36/g.radius:.8)*g.radius/e:0,i="translate("+c*f+","+d*f+")"),i},f.getArcRatio=function(a){var b=this,c=b.hasType("gauge")?Math.PI:2*Math.PI;return a?(a.endAngle-a.startAngle)/c:null},f.convertToArcData=function(a){return this.addName({id:a.data.id,value:a.value,ratio:this.getArcRatio(a),index:a.index})},f.textForArcLabel=function(a){var b,c,d,e,f,g=this;return g.shouldShowArcLabel()?(b=g.updateAngle(a),c=b?b.value:null,d=g.getArcRatio(b),e=a.data.id,g.hasType("gauge")||g.meetsArcLabelThreshold(d)?(f=g.getArcLabelFormat(),f?f(c,d,e):g.defaultArcValueFormat(c,d)):""):""},f.expandArc=function(b){var c,d=this;return d.transiting?void(c=a.setInterval(function(){d.transiting||(a.clearInterval(c),d.legend.selectAll(".c3-legend-item-focused").size()>0&&d.expandArc(b))},10)):(b=d.mapToTargetIds(b),void d.svg.selectAll(d.selectorTargets(b,"."+i.chartArc)).each(function(a){d.shouldExpand(a.data.id)&&d.d3.select(this).selectAll("path").transition().duration(50).attr("d",d.svgArcExpanded).transition().duration(100).attr("d",d.svgArcExpandedSub).each(function(a){d.isDonutType(a.data)
})}))},f.unexpandArc=function(a){var b=this;b.transiting||(a=b.mapToTargetIds(a),b.svg.selectAll(b.selectorTargets(a,"."+i.chartArc)).selectAll("path").transition().duration(50).attr("d",b.svgArc),b.svg.selectAll("."+i.arc).style("opacity",1))},f.shouldExpand=function(a){var b=this,c=b.config;return b.isDonutType(a)&&c.donut_expand||b.isGaugeType(a)&&c.gauge_expand||b.isPieType(a)&&c.pie_expand},f.shouldShowArcLabel=function(){var a=this,b=a.config,c=!0;return a.hasType("donut")?c=b.donut_label_show:a.hasType("pie")&&(c=b.pie_label_show),c},f.meetsArcLabelThreshold=function(a){var b=this,c=b.config,d=b.hasType("donut")?c.donut_label_threshold:c.pie_label_threshold;return a>=d},f.getArcLabelFormat=function(){var a=this,b=a.config,c=b.pie_label_format;return a.hasType("gauge")?c=b.gauge_label_format:a.hasType("donut")&&(c=b.donut_label_format),c},f.getArcTitle=function(){var a=this;return a.hasType("donut")?a.config.donut_title:""},f.updateTargetsForArc=function(a){var b,c,d=this,e=d.main,f=d.classChartArc.bind(d),g=d.classArcs.bind(d),h=d.classFocus.bind(d);b=e.select("."+i.chartArcs).selectAll("."+i.chartArc).data(d.pie(a)).attr("class",function(a){return f(a)+h(a.data)}),c=b.enter().append("g").attr("class",f),c.append("g").attr("class",g),c.append("text").attr("dy",d.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},f.initArc=function(){var a=this;a.arcs=a.main.select("."+i.chart).append("g").attr("class",i.chartArcs).attr("transform",a.getTranslate("arc")),a.arcs.append("text").attr("class",i.chartArcsTitle).style("text-anchor","middle").text(a.getArcTitle())},f.redrawArc=function(a,b,c){var d,e=this,f=e.d3,g=e.config,h=e.main;d=h.selectAll("."+i.arcs).selectAll("."+i.arc).data(e.arcData.bind(e)),d.enter().append("path").attr("class",e.classArc.bind(e)).style("fill",function(a){return e.color(a.data)}).style("cursor",function(a){return g.interaction_enabled&&g.data_selection_isselectable(a)?"pointer":null}).style("opacity",0).each(function(a){e.isGaugeType(a.data)&&(a.startAngle=a.endAngle=-1*(Math.PI/2)),this._current=a}),d.attr("transform",function(a){return!e.isGaugeType(a.data)&&c?"scale(0)":""}).style("opacity",function(a){return a===this._current?0:1}).on("mouseover",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.expandArc(b.data.id),e.api.focus(b.data.id),e.toggleFocusLegend(b.data.id,!0),e.config.data_onmouseover(c,this))}:null).on("mousemove",g.interaction_enabled?function(a){var b=e.updateAngle(a),c=e.convertToArcData(b),d=[c];e.showTooltip(d,this)}:null).on("mouseout",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.unexpandArc(b.data.id),e.api.revert(),e.revertLegend(),e.hideTooltip(),e.config.data_onmouseout(c,this))}:null).on("click",g.interaction_enabled?function(a,b){var c=e.updateAngle(a),d=e.convertToArcData(c);e.toggleShape&&e.toggleShape(this,d,b),e.config.data_onclick.call(e.api,d,this)}:null).each(function(){e.transiting=!0}).transition().duration(a).attrTween("d",function(a){var b,c=e.updateAngle(a);return c?(isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),b=f.interpolate(this._current,c),this._current=b(0),function(c){var d=b(c);return d.data=a.data,e.getArc(d,!0)}):function(){return"M 0 0"}}).attr("transform",c?"scale(1)":"").style("fill",function(a){return e.levelColor?e.levelColor(a.data.values[0].value):e.color(a.data.id)}).style("opacity",1).call(e.endall,function(){e.transiting=!1}),d.exit().transition().duration(b).style("opacity",0).remove(),h.selectAll("."+i.chartArc).select("text").style("opacity",0).attr("class",function(a){return e.isGaugeType(a.data)?i.gaugeValue:""}).text(e.textForArcLabel.bind(e)).attr("transform",e.transformForArcLabel.bind(e)).style("font-size",function(a){return e.isGaugeType(a.data)?Math.round(e.radius/5)+"px":""}).transition().duration(a).style("opacity",function(a){return e.isTargetToShow(a.data.id)&&e.isArcType(a.data)?1:0}),h.select("."+i.chartArcsTitle).style("opacity",e.hasType("donut")||e.hasType("gauge")?1:0),e.hasType("gauge")&&(e.arcs.select("."+i.chartArcsBackground).attr("d",function(){var a={data:[{value:g.gauge_max}],startAngle:-1*(Math.PI/2),endAngle:Math.PI/2};return e.getArc(a,!0,!0)}),e.arcs.select("."+i.chartArcsGaugeUnit).attr("dy",".75em").text(g.gauge_label_show?g.gauge_units:""),e.arcs.select("."+i.chartArcsGaugeMin).attr("dx",-1*(e.innerRadius+(e.radius-e.innerRadius)/2)+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_min:""),e.arcs.select("."+i.chartArcsGaugeMax).attr("dx",e.innerRadius+(e.radius-e.innerRadius)/2+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_max:""))},f.initGauge=function(){var a=this.arcs;this.hasType("gauge")&&(a.append("path").attr("class",i.chartArcsBackground),a.append("text").attr("class",i.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",i.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",i.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},f.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},f.initRegion=function(){var a=this;a.region=a.main.append("g").attr("clip-path",a.clipPath).attr("class",i.regions)},f.updateRegion=function(a){var b=this,c=b.config;b.region.style("visibility",b.hasArcType()?"hidden":"visible"),b.mainRegion=b.main.select("."+i.regions).selectAll("."+i.region).data(c.regions),b.mainRegion.enter().append("g").attr("class",b.classRegion.bind(b)).append("rect").style("fill-opacity",0),b.mainRegion.exit().transition().duration(a).style("opacity",0).remove()},f.redrawRegion=function(a){var b=this,c=b.mainRegion.selectAll("rect"),d=b.regionX.bind(b),e=b.regionY.bind(b),f=b.regionWidth.bind(b),g=b.regionHeight.bind(b);return[(a?c.transition():c).attr("x",d).attr("y",e).attr("width",f).attr("height",g).style("fill-opacity",function(a){return j(a.opacity)?a.opacity:.1})]},f.regionX=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"start"in a?e(a.start):0:d.axis_rotated?0:"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},f.regionY=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?0:"end"in a?e(a.end):0:d.axis_rotated&&"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},f.regionWidth=function(a){var b,c=this,d=c.config,e=c.regionX(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"end"in a?f(a.end):c.width:d.axis_rotated?c.width:"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.width,e>b?0:b-e},f.regionHeight=function(a){var b,c=this,d=c.config,e=this.regionY(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?c.height:"start"in a?f(a.start):c.height:d.axis_rotated&&"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.height,e>b?0:b-e},f.isRegionOnX=function(a){return!a.axis||"x"===a.axis},f.drag=function(a){var b,c,d,e,f,g,h,j,k=this,l=k.config,m=k.main,n=k.d3;k.hasArcType()||l.data_selection_enabled&&(!l.zoom_enabled||k.zoom.altDomain)&&l.data_selection_multiple&&(b=k.dragStart[0],c=k.dragStart[1],d=a[0],e=a[1],f=Math.min(b,d),g=Math.max(b,d),h=l.data_selection_grouped?k.margin.top:Math.min(c,e),j=l.data_selection_grouped?k.height:Math.max(c,e),m.select("."+i.dragarea).attr("x",f).attr("y",h).attr("width",g-f).attr("height",j-h),m.selectAll("."+i.shapes).selectAll("."+i.shape).filter(function(a){return l.data_selection_isselectable(a)}).each(function(a,b){var c,d,e,l,m,o,p=n.select(this),q=p.classed(i.SELECTED),r=p.classed(i.INCLUDED),s=!1;if(p.classed(i.circle))c=1*p.attr("cx"),d=1*p.attr("cy"),m=k.togglePoint,s=c>f&&g>c&&d>h&&j>d;else{if(!p.classed(i.bar))return;o=v(this),c=o.x,d=o.y,e=o.width,l=o.height,m=k.togglePath,s=!(c>g||f>c+e||d>j||h>d+l)}s^r&&(p.classed(i.INCLUDED,!r),p.classed(i.SELECTED,!q),m.call(k,!q,p,a,b))}))},f.dragstart=function(a){var b=this,c=b.config;b.hasArcType()||c.data_selection_enabled&&(b.dragStart=a,b.main.select("."+i.chart).append("rect").attr("class",i.dragarea).style("opacity",.1),b.dragging=!0)},f.dragend=function(){var a=this,b=a.config;a.hasArcType()||b.data_selection_enabled&&(a.main.select("."+i.dragarea).transition().duration(100).style("opacity",0).remove(),a.main.selectAll("."+i.shape).classed(i.INCLUDED,!1),a.dragging=!1)},f.selectPoint=function(a,b,c){var d=this,e=d.config,f=(e.axis_rotated?d.circleY:d.circleX).bind(d),g=(e.axis_rotated?d.circleX:d.circleY).bind(d),h=d.pointSelectR.bind(d);e.data_onselected.call(d.api,b,a.node()),d.main.select("."+i.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+i.selectedCircle+"-"+c).data([b]).enter().append("circle").attr("class",function(){return d.generateClass(i.selectedCircle,c)}).attr("cx",f).attr("cy",g).attr("stroke",function(){return d.color(b)}).attr("r",function(a){return 1.4*d.pointSelectR(a)}).transition().duration(100).attr("r",h)},f.unselectPoint=function(a,b,c){var d=this;d.config.data_onunselected(b,a.node()),d.main.select("."+i.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+i.selectedCircle+"-"+c).transition().duration(100).attr("r",0).remove()},f.togglePoint=function(a,b,c,d){a?this.selectPoint(b,c,d):this.unselectPoint(b,c,d)},f.selectPath=function(a,b){var c=this;c.config.data_onselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.d3.rgb(c.color(b)).brighter(.75)})},f.unselectPath=function(a,b){var c=this;c.config.data_onunselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.color(b)})},f.togglePath=function(a,b,c,d){a?this.selectPath(b,c,d):this.unselectPath(b,c,d)},f.getToggle=function(a,b){var c,d=this;return"circle"===a.nodeName?c=d.isStepType(b)?function(){}:d.togglePoint:"path"===a.nodeName&&(c=d.togglePath),c},f.toggleShape=function(a,b,c){var d=this,e=d.d3,f=d.config,g=e.select(a),h=g.classed(i.SELECTED),j=d.getToggle(a,b).bind(d);f.data_selection_enabled&&f.data_selection_isselectable(b)&&(f.data_selection_multiple||d.main.selectAll("."+i.shapes+(f.data_selection_grouped?d.getTargetSelectorSuffix(b.id):"")).selectAll("."+i.shape).each(function(a,b){var c=e.select(this);c.classed(i.SELECTED)&&j(!1,c.classed(i.SELECTED,!1),a,b)}),g.classed(i.SELECTED,!h),j(!h,g,b,c))},f.initBrush=function(){var a=this,b=a.d3;a.brush=b.svg.brush().on("brush",function(){a.redrawForBrush()}),a.brush.update=function(){return a.context&&a.context.select("."+i.brush).call(this),this},a.brush.scale=function(b){return a.config.axis_rotated?this.y(b):this.x(b)}},f.initSubchart=function(){var a=this,b=a.config,c=a.context=a.svg.append("g").attr("transform",a.getTranslate("context"));c.style("visibility",b.subchart_show?"visible":"hidden"),c.append("g").attr("clip-path",a.clipPathForSubchart).attr("class",i.chart),c.select("."+i.chart).append("g").attr("class",i.chartBars),c.select("."+i.chart).append("g").attr("class",i.chartLines),c.append("g").attr("clip-path",a.clipPath).attr("class",i.brush).call(a.brush),a.axes.subx=c.append("g").attr("class",i.axisX).attr("transform",a.getTranslate("subx")).attr("clip-path",b.axis_rotated?"":a.clipPathForXAxis)},f.updateTargetsForSubchart=function(a){var b,c,d,e,f=this,g=f.context,h=f.config,j=f.classChartBar.bind(f),k=f.classBars.bind(f),l=f.classChartLine.bind(f),m=f.classLines.bind(f),n=f.classAreas.bind(f);h.subchart_show&&(e=g.select("."+i.chartBars).selectAll("."+i.chartBar).data(a).attr("class",j),d=e.enter().append("g").style("opacity",0).attr("class",j),d.append("g").attr("class",k),c=g.select("."+i.chartLines).selectAll("."+i.chartLine).data(a).attr("class",l),b=c.enter().append("g").style("opacity",0).attr("class",l),b.append("g").attr("class",m),b.append("g").attr("class",n),g.selectAll("."+i.brush+" rect").attr(h.axis_rotated?"width":"height",h.axis_rotated?f.width2:f.height2))},f.updateBarForSubchart=function(a){var b=this;b.contextBar=b.context.selectAll("."+i.bars).selectAll("."+i.bar).data(b.barData.bind(b)),b.contextBar.enter().append("path").attr("class",b.classBar.bind(b)).style("stroke","none").style("fill",b.color),b.contextBar.style("opacity",b.initialOpacity.bind(b)),b.contextBar.exit().transition().duration(a).style("opacity",0).remove()},f.redrawBarForSubchart=function(a,b,c){(b?this.contextBar.transition().duration(c):this.contextBar).attr("d",a).style("opacity",1)},f.updateLineForSubchart=function(a){var b=this;b.contextLine=b.context.selectAll("."+i.lines).selectAll("."+i.line).data(b.lineData.bind(b)),b.contextLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.contextLine.style("opacity",b.initialOpacity.bind(b)),b.contextLine.exit().transition().duration(a).style("opacity",0).remove()},f.redrawLineForSubchart=function(a,b,c){(b?this.contextLine.transition().duration(c):this.contextLine).attr("d",a).style("opacity",1)},f.updateAreaForSubchart=function(a){var b=this,c=b.d3;b.contextArea=b.context.selectAll("."+i.areas).selectAll("."+i.area).data(b.lineData.bind(b)),b.contextArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.contextArea.style("opacity",0),b.contextArea.exit().transition().duration(a).style("opacity",0).remove()},f.redrawAreaForSubchart=function(a,b,c){(b?this.contextArea.transition().duration(c):this.contextArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)},f.redrawSubchart=function(a,b,c,d,e,f,g){var h,i,j,k=this,l=k.d3,m=k.config;k.context.style("visibility",m.subchart_show?"visible":"hidden"),m.subchart_show&&(l.event&&"zoom"===l.event.type&&k.brush.extent(k.x.orgDomain()).update(),a&&(k.brush.empty()||k.brush.extent(k.x.orgDomain()).update(),h=k.generateDrawArea(e,!0),i=k.generateDrawBar(f,!0),j=k.generateDrawLine(g,!0),k.updateBarForSubchart(c),k.updateLineForSubchart(c),k.updateAreaForSubchart(c),k.redrawBarForSubchart(i,c,c),k.redrawLineForSubchart(j,c,c),k.redrawAreaForSubchart(h,c,c)))},f.redrawForBrush=function(){var a=this,b=a.x;a.redraw({withTransition:!1,withY:a.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withDimension:!1}),a.config.subchart_onbrush.call(a.api,b.orgDomain())},f.transformContext=function(a,b){var c,d=this;b&&b.axisSubX?c=b.axisSubX:(c=d.context.select("."+i.axisX),a&&(c=c.transition())),d.context.attr("transform",d.getTranslate("context")),c.attr("transform",d.getTranslate("subx"))},f.getDefaultExtent=function(){var a=this,b=a.config,c=k(b.axis_x_extent)?b.axis_x_extent(a.getXDomain(a.data.targets)):b.axis_x_extent;return a.isTimeSeries()&&(c=[a.parseDate(c[0]),a.parseDate(c[1])]),c},f.initZoom=function(){var a,b=this,c=b.d3,d=b.config;b.zoom=c.behavior.zoom().on("zoomstart",function(){a=c.event.sourceEvent,b.zoom.altDomain=c.event.sourceEvent.altKey?b.x.orgDomain():null,d.zoom_onzoomstart.call(b.api,c.event.sourceEvent)}).on("zoom",function(){b.redrawForZoom.call(b)}).on("zoomend",function(){var e=c.event.sourceEvent;e&&a.clientX===e.clientX&&a.clientY===e.clientY||(b.redrawEventRect(),b.updateZoom(),d.zoom_onzoomend.call(b.api,b.x.orgDomain()))}),b.zoom.scale=function(a){return d.axis_rotated?this.y(a):this.x(a)},b.zoom.orgScaleExtent=function(){var a=d.zoom_extent?d.zoom_extent:[1,10];return[a[0],Math.max(b.getMaxDataCount()/a[1],a[1])]},b.zoom.updateScaleExtent=function(){var a=q(b.x.orgDomain())/q(b.orgXDomain),c=this.orgScaleExtent();return this.scaleExtent([c[0]*a,c[1]*a]),this}},f.updateZoom=function(){var a=this,b=a.config.zoom_enabled?a.zoom:function(){};a.main.select("."+i.zoomRect).call(b).on("dblclick.zoom",null),a.main.selectAll("."+i.eventRect).call(b).on("dblclick.zoom",null)},f.redrawForZoom=function(){var a=this,b=a.d3,c=a.config,d=a.zoom,e=a.x;if(c.zoom_enabled&&0!==a.filterTargetsToShow(a.data.targets).length){if("mousemove"===b.event.sourceEvent.type&&d.altDomain)return e.domain(d.altDomain),void d.scale(e).updateScaleExtent();a.isCategorized()&&e.orgDomain()[0]===a.orgXDomain[0]&&e.domain([a.orgXDomain[0]-1e-10,e.orgDomain()[1]]),a.redraw({withTransition:!1,withY:c.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),"mousemove"===b.event.sourceEvent.type&&(a.cancelClick=!0),c.zoom_onzoom.call(a.api,e.orgDomain())}},f.generateColor=function(){var a=this,b=a.config,c=a.d3,d=b.data_colors,e=s(b.color_pattern)?b.color_pattern:c.scale.category10().range(),f=b.data_color,g=[];return function(a){var b,c=a.id||a.data&&a.data.id||a;return d[c]instanceof Function?b=d[c](a):d[c]?b=d[c]:(g.indexOf(c)<0&&g.push(c),b=e[g.indexOf(c)%e.length],d[c]=b),f instanceof Function?f(b,a):b}},f.generateLevelColor=function(){var a=this,b=a.config,c=b.color_pattern,d=b.color_threshold,e="value"===d.unit,f=d.values&&d.values.length?d.values:[],g=d.max||100;return s(b.color_threshold)?function(a){var b,d,h=c[c.length-1];for(b=0;b<f.length;b++)if(d=e?a:100*a/g,d<f[b]){h=c[b];break}return h}:null},f.getYFormat=function(a){var b=this,c=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.yFormat,d=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.y2Format;return function(a,e,f){var g="y2"===b.getAxisId(f)?d:c;return g.call(b,a,e)}},f.yFormat=function(a){var b=this,c=b.config,d=c.axis_y_tick_format?c.axis_y_tick_format:b.defaultValueFormat;return d(a)},f.y2Format=function(a){var b=this,c=b.config,d=c.axis_y2_tick_format?c.axis_y2_tick_format:b.defaultValueFormat;return d(a)},f.defaultValueFormat=function(a){return j(a)?+a:""},f.defaultArcValueFormat=function(a,b){return(100*b).toFixed(1)+"%"},f.dataLabelFormat=function(a){var b,c=this,d=c.config.data_labels,e=function(a){return j(a)?+a:""};return b="function"==typeof d.format?d.format:"object"==typeof d.format?d.format[a]?d.format[a]===!0?e:d.format[a]:function(){return""}:e},f.hasCaches=function(a){for(var b=0;b<a.length;b++)if(!(a[b]in this.cache))return!1;return!0},f.addCache=function(a,b){this.cache[a]=this.cloneTarget(b)},f.getCaches=function(a){var b,c=[];for(b=0;b<a.length;b++)a[b]in this.cache&&c.push(this.cloneTarget(this.cache[a[b]]));return c};var i=f.CLASS={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"};f.generateClass=function(a,b){return" "+a+" "+a+this.getTargetSelectorSuffix(b)},f.classText=function(a){return this.generateClass(i.text,a.index)},f.classTexts=function(a){return this.generateClass(i.texts,a.id)},f.classShape=function(a){return this.generateClass(i.shape,a.index)},f.classShapes=function(a){return this.generateClass(i.shapes,a.id)},f.classLine=function(a){return this.classShape(a)+this.generateClass(i.line,a.id)},f.classLines=function(a){return this.classShapes(a)+this.generateClass(i.lines,a.id)},f.classCircle=function(a){return this.classShape(a)+this.generateClass(i.circle,a.index)},f.classCircles=function(a){return this.classShapes(a)+this.generateClass(i.circles,a.id)},f.classBar=function(a){return this.classShape(a)+this.generateClass(i.bar,a.index)},f.classBars=function(a){return this.classShapes(a)+this.generateClass(i.bars,a.id)},f.classArc=function(a){return this.classShape(a.data)+this.generateClass(i.arc,a.data.id)},f.classArcs=function(a){return this.classShapes(a.data)+this.generateClass(i.arcs,a.data.id)},f.classArea=function(a){return this.classShape(a)+this.generateClass(i.area,a.id)},f.classAreas=function(a){return this.classShapes(a)+this.generateClass(i.areas,a.id)},f.classRegion=function(a,b){return this.generateClass(i.region,b)+" "+("class"in a?a["class"]:"")},f.classEvent=function(a){return this.generateClass(i.eventRect,a.index)},f.classTarget=function(a){var b=this,c=b.config.data_classes[a],d="";return c&&(d=" "+i.target+"-"+c),b.generateClass(i.target,a)+d},f.classFocus=function(a){return this.classFocused(a)+this.classDefocused(a)},f.classFocused=function(a){return" "+(this.focusedTargetIds.indexOf(a.id)>=0?i.focused:"")},f.classDefocused=function(a){return" "+(this.defocusedTargetIds.indexOf(a.id)>=0?i.defocused:"")},f.classChartText=function(a){return i.chartText+this.classTarget(a.id)},f.classChartLine=function(a){return i.chartLine+this.classTarget(a.id)},f.classChartBar=function(a){return i.chartBar+this.classTarget(a.id)},f.classChartArc=function(a){return i.chartArc+this.classTarget(a.data.id)},f.getTargetSelectorSuffix=function(a){return a||0===a?("-"+a).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g,"-"):""},f.selectorTarget=function(a,b){return(b||"")+"."+i.target+this.getTargetSelectorSuffix(a)},f.selectorTargets=function(a,b){var c=this;return a=a||[],a.length?a.map(function(a){return c.selectorTarget(a,b)}):null},f.selectorLegend=function(a){return"."+i.legendItem+this.getTargetSelectorSuffix(a)},f.selectorLegends=function(a){var b=this;return a&&a.length?a.map(function(a){return b.selectorLegend(a)}):null};var j=f.isValue=function(a){return a||0===a},k=f.isFunction=function(a){return"function"==typeof a},l=f.isString=function(a){return"string"==typeof a},m=f.isUndefined=function(a){return"undefined"==typeof a},n=f.isDefined=function(a){return"undefined"!=typeof a},o=f.ceil10=function(a){return 10*Math.ceil(a/10)},p=f.asHalfPixel=function(a){return Math.ceil(a)+.5},q=f.diffDomain=function(a){return a[1]-a[0]},r=f.isEmpty=function(a){return!a||l(a)&&0===a.length||"object"==typeof a&&0===Object.keys(a).length},s=f.notEmpty=function(a){return Object.keys(a).length>0},t=f.getOption=function(a,b,c){return n(a[b])?a[b]:c},u=f.hasValue=function(a,b){var c=!1;return Object.keys(a).forEach(function(d){a[d]===b&&(c=!0)}),c},v=f.getPathBox=function(a){var b=a.getBoundingClientRect(),c=[a.pathSegList.getItem(0),a.pathSegList.getItem(1)],d=c[0].x,e=Math.min(c[0].y,c[1].y);return{x:d,y:e,width:b.width,height:b.height}};e.focus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),this.revert(),this.defocus(),b.classed(i.focused,!0).classed(i.defocused,!1),c.hasArcType()&&c.expandArc(a),c.toggleFocusLegend(a,!0),c.focusedTargetIds=a,c.defocusedTargetIds=c.defocusedTargetIds.filter(function(b){return a.indexOf(b)<0})},e.defocus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),this.revert(),b.classed(i.focused,!1).classed(i.defocused,!0),c.hasArcType()&&c.unexpandArc(a),c.toggleFocusLegend(a,!1),c.focusedTargetIds=c.focusedTargetIds.filter(function(b){return a.indexOf(b)<0}),c.defocusedTargetIds=a},e.revert=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a)),b.classed(i.focused,!1).classed(i.defocused,!1),c.hasArcType()&&c.unexpandArc(a),c.config.legend_show&&c.showLegend(a.filter(c.isLegendToShow.bind(c))),c.focusedTargetIds=[],c.defocusedTargetIds=[]},e.show=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.removeHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",1,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",1)}),b.withLegend&&d.showLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},e.hide=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.addHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",0,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",0)}),b.withLegend&&d.hideLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},e.toggle=function(a,b){var c=this,d=this.internal;d.mapToTargetIds(a).forEach(function(a){d.isTargetToShow(a)?c.hide(a,b):c.show(a,b)})},e.zoom=function(a){var b=this.internal;return a&&(b.isTimeSeries()&&(a=a.map(function(a){return b.parseDate(a)})),b.brush.extent(a),b.redraw({withUpdateXDomain:!0,withY:b.config.zoom_rescale}),b.config.zoom_onzoom.call(this,b.x.orgDomain())),b.brush.extent()},e.zoom.enable=function(a){var b=this.internal;b.config.zoom_enabled=a,b.updateAndRedraw()},e.unzoom=function(){var a=this.internal;a.brush.clear().update(),a.redraw({withUpdateXDomain:!0})},e.load=function(a){var b=this.internal,c=b.config;return a.xs&&b.addXs(a.xs),"classes"in a&&Object.keys(a.classes).forEach(function(b){c.data_classes[b]=a.classes[b]}),"categories"in a&&b.isCategorized()&&(c.axis_x_categories=a.categories),"axes"in a&&Object.keys(a.axes).forEach(function(b){c.data_axes[b]=a.axes[b]}),"cacheIds"in a&&b.hasCaches(a.cacheIds)?void b.load(b.getCaches(a.cacheIds),a.done):void("unload"in a?b.unload(b.mapToTargetIds("boolean"==typeof a.unload&&a.unload?null:a.unload),function(){b.loadFromArgs(a)}):b.loadFromArgs(a))},e.unload=function(a){var b=this.internal;a=a||{},a instanceof Array?a={ids:a}:"string"==typeof a&&(a={ids:[a]}),b.unload(b.mapToTargetIds(a.ids),function(){b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),a.done&&a.done()})},e.flow=function(a){var b,c,d,e,f,g,h,i,k=this.internal,l=[],m=k.getMaxDataCount(),o=0,p=0;if(a.json)c=k.convertJsonToData(a.json,a.keys);else if(a.rows)c=k.convertRowsToData(a.rows);else{if(!a.columns)return;c=k.convertColumnsToData(a.columns)}b=k.convertDataToTargets(c,!0),k.data.targets.forEach(function(a){var c,d,e=!1;for(c=0;c<b.length;c++)if(a.id===b[c].id){for(e=!0,a.values[a.values.length-1]&&(p=a.values[a.values.length-1].index+1),o=b[c].values.length,d=0;o>d;d++)b[c].values[d].index=p+d,k.isTimeSeries()||(b[c].values[d].x=p+d);a.values=a.values.concat(b[c].values),b.splice(c,1);break}e||l.push(a.id)}),k.data.targets.forEach(function(a){var b,c;for(b=0;b<l.length;b++)if(a.id===l[b])for(p=a.values[a.values.length-1].index+1,c=0;o>c;c++)a.values.push({id:a.id,index:p+c,x:k.isTimeSeries()?k.getOtherTargetX(p+c):p+c,value:null})}),k.data.targets.length&&b.forEach(function(a){var b,c=[];for(b=k.data.targets[0].values[0].index;p>b;b++)c.push({id:a.id,index:b,x:k.isTimeSeries()?k.getOtherTargetX(b):b,value:null});a.values.forEach(function(a){a.index+=p,k.isTimeSeries()||(a.x+=p)}),a.values=c.concat(a.values)}),k.data.targets=k.data.targets.concat(b),d=k.getMaxDataCount(),f=k.data.targets[0],g=f.values[0],n(a.to)?(o=0,i=k.isTimeSeries()?k.parseDate(a.to):a.to,f.values.forEach(function(a){a.x<i&&o++})):n(a.length)&&(o=a.length),m?1===m&&k.isTimeSeries()&&(h=(f.values[f.values.length-1].x-g.x)/2,e=[new Date(+g.x-h),new Date(+g.x+h)],k.updateXDomain(null,!0,!0,!1,e)):(h=k.isTimeSeries()?f.values.length>1?f.values[f.values.length-1].x-g.x:g.x-k.getXDomain(k.data.targets)[0]:1,e=[g.x-h,g.x],k.updateXDomain(null,!0,!0,!1,e)),k.updateTargets(k.data.targets),k.redraw({flow:{index:g.index,length:o,duration:j(a.duration)?a.duration:k.config.transition_duration,done:a.done,orgDataCount:m},withLegend:!0,withTransition:m>1,withTrimXDomain:!1,withUpdateXAxis:!0})},f.generateFlow=function(a){var b=this,c=b.config,d=b.d3;return function(){var e,f,g,h=a.targets,j=a.flow,k=a.drawBar,l=a.drawLine,m=a.drawArea,n=a.cx,o=a.cy,p=a.xv,r=a.xForText,s=a.yForText,t=a.duration,u=1,v=j.index,w=j.length,x=b.getValueOnIndex(b.data.targets[0].values,v),y=b.getValueOnIndex(b.data.targets[0].values,v+w),z=b.x.domain(),A=j.duration||t,B=j.done||function(){},C=b.generateWait(),D=b.xgrid||d.selectAll([]),E=b.xgridLines||d.selectAll([]),F=b.mainRegion||d.selectAll([]),G=b.mainText||d.selectAll([]),H=b.mainBar||d.selectAll([]),I=b.mainLine||d.selectAll([]),J=b.mainArea||d.selectAll([]),K=b.mainCircle||d.selectAll([]);b.flowing=!0,b.data.targets.forEach(function(a){a.values.splice(0,w)}),g=b.updateXDomain(h,!0,!0),b.updateXGrid&&b.updateXGrid(!0),j.orgDataCount?e=1===j.orgDataCount||x.x===y.x?b.x(z[0])-b.x(g[0]):b.isTimeSeries()?b.x(z[0])-b.x(g[0]):b.x(x.x)-b.x(y.x):1!==b.data.targets[0].values.length?e=b.x(z[0])-b.x(g[0]):b.isTimeSeries()?(x=b.getValueOnIndex(b.data.targets[0].values,0),y=b.getValueOnIndex(b.data.targets[0].values,b.data.targets[0].values.length-1),e=b.x(x.x)-b.x(y.x)):e=q(g)/2,u=q(z)/q(g),f="translate("+e+",0) scale("+u+",1)",b.hideXGridFocus(),b.hideTooltip(),d.transition().ease("linear").duration(A).each(function(){C.add(b.axes.x.transition().call(b.xAxis)),C.add(H.transition().attr("transform",f)),C.add(I.transition().attr("transform",f)),C.add(J.transition().attr("transform",f)),C.add(K.transition().attr("transform",f)),C.add(G.transition().attr("transform",f)),C.add(F.filter(b.isRegionOnX).transition().attr("transform",f)),C.add(D.transition().attr("transform",f)),C.add(E.transition().attr("transform",f))}).call(C,function(){var a,d=[],e=[],f=[];if(w){for(a=0;w>a;a++)d.push("."+i.shape+"-"+(v+a)),e.push("."+i.text+"-"+(v+a)),f.push("."+i.eventRect+"-"+(v+a));b.svg.selectAll("."+i.shapes).selectAll(d).remove(),b.svg.selectAll("."+i.texts).selectAll(e).remove(),b.svg.selectAll("."+i.eventRects).selectAll(f).remove(),b.svg.select("."+i.xgrid).remove()}D.attr("transform",null).attr(b.xgridAttr),E.attr("transform",null),E.select("line").attr("x1",c.axis_rotated?0:p).attr("x2",c.axis_rotated?b.width:p),E.select("text").attr("x",c.axis_rotated?b.width:0).attr("y",p),H.attr("transform",null).attr("d",k),I.attr("transform",null).attr("d",l),J.attr("transform",null).attr("d",m),K.attr("transform",null).attr("cx",n).attr("cy",o),G.attr("transform",null).attr("x",r).attr("y",s).style("fill-opacity",b.opacityForText.bind(b)),F.attr("transform",null),F.select("rect").filter(b.isRegionOnX).attr("x",b.regionX.bind(b)).attr("width",b.regionWidth.bind(b)),c.interaction_enabled&&b.redrawEventRect(),B(),b.flowing=!1})}},e.selected=function(a){var b=this.internal,c=b.d3;return c.merge(b.main.selectAll("."+i.shapes+b.getTargetSelectorSuffix(a)).selectAll("."+i.shape).filter(function(){return c.select(this).classed(i.SELECTED)}).map(function(a){return a.map(function(a){var b=a.__data__;return b.data?b.data:b})}))},e.select=function(a,b,c){var d=this.internal,e=d.d3,f=d.config;f.data_selection_enabled&&d.main.selectAll("."+i.shapes).selectAll("."+i.shape).each(function(g,h){var j=e.select(this),k=g.data?g.data.id:g.id,l=d.getToggle(this,g).bind(d),m=f.data_selection_grouped||!a||a.indexOf(k)>=0,o=!b||b.indexOf(h)>=0,p=j.classed(i.SELECTED);
j.classed(i.line)||j.classed(i.area)||(m&&o?f.data_selection_isselectable(g)&&!p&&l(!0,j.classed(i.SELECTED,!0),g,h):n(c)&&c&&p&&l(!1,j.classed(i.SELECTED,!1),g,h))})},e.unselect=function(a,b){var c=this.internal,d=c.d3,e=c.config;e.data_selection_enabled&&c.main.selectAll("."+i.shapes).selectAll("."+i.shape).each(function(f,g){var h=d.select(this),j=f.data?f.data.id:f.id,k=c.getToggle(this,f).bind(c),l=e.data_selection_grouped||!a||a.indexOf(j)>=0,m=!b||b.indexOf(g)>=0,n=h.classed(i.SELECTED);h.classed(i.line)||h.classed(i.area)||l&&m&&e.data_selection_isselectable(f)&&n&&k(!1,h.classed(i.SELECTED,!1),f,g)})},e.transform=function(a,b){var c=this.internal,d=["pie","donut"].indexOf(a)>=0?{withTransform:!0}:null;c.transformTo(b,a,d)},f.transformTo=function(a,b,c){var d=this,e=!d.hasArcType(),f=c||{withTransitionForAxis:e};f.withTransitionForTransform=!1,d.transiting=!1,d.setTargetType(a,b),d.updateTargets(d.data.targets),d.updateAndRedraw(f)},e.groups=function(a){var b=this.internal,c=b.config;return m(a)?c.data_groups:(c.data_groups=a,b.redraw(),c.data_groups)},e.xgrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_x_lines=a,b.redrawWithoutRescale(),c.grid_x_lines):c.grid_x_lines},e.xgrids.add=function(a){var b=this.internal;return this.xgrids(b.config.grid_x_lines.concat(a?a:[]))},e.xgrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!0)},e.ygrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_y_lines=a,b.redrawWithoutRescale(),c.grid_y_lines):c.grid_y_lines},e.ygrids.add=function(a){var b=this.internal;return this.ygrids(b.config.grid_y_lines.concat(a?a:[]))},e.ygrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!1)},e.regions=function(a){var b=this.internal,c=b.config;return a?(c.regions=a,b.redrawWithoutRescale(),c.regions):c.regions},e.regions.add=function(a){var b=this.internal,c=b.config;return a?(c.regions=c.regions.concat(a),b.redrawWithoutRescale(),c.regions):c.regions},e.regions.remove=function(a){var b,c,d,e=this.internal,f=e.config;return a=a||{},b=e.getOption(a,"duration",f.transition_duration),c=e.getOption(a,"classes",[i.region]),d=e.main.select("."+i.regions).selectAll(c.map(function(a){return"."+a})),(b?d.transition().duration(b):d).style("opacity",0).remove(),f.regions=f.regions.filter(function(a){var b=!1;return a["class"]?(a["class"].split(" ").forEach(function(a){c.indexOf(a)>=0&&(b=!0)}),!b):!0}),f.regions},e.data=function(a){var b=this.internal.data.targets;return"undefined"==typeof a?b:b.filter(function(b){return[].concat(a).indexOf(b.id)>=0})},e.data.shown=function(a){return this.internal.filterTargetsToShow(this.data(a))},e.data.values=function(a){var b,c=null;return a&&(b=this.data(a),c=b[0]?b[0].values.map(function(a){return a.value}):null),c},e.data.names=function(a){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",a)},e.data.colors=function(a){return this.internal.updateDataAttributes("colors",a)},e.data.axes=function(a){return this.internal.updateDataAttributes("axes",a)},e.category=function(a,b){var c=this.internal,d=c.config;return arguments.length>1&&(d.axis_x_categories[a]=b,c.redraw()),d.axis_x_categories[a]},e.categories=function(a){var b=this.internal,c=b.config;return arguments.length?(c.axis_x_categories=a,b.redraw(),c.axis_x_categories):c.axis_x_categories},e.color=function(a){var b=this.internal;return b.color(a)},e.x=function(a){var b=this.internal;return arguments.length&&(b.updateTargetX(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},e.xs=function(a){var b=this.internal;return arguments.length&&(b.updateTargetXs(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},e.axis=function(){},e.axis.labels=function(a){var b=this.internal;arguments.length&&(Object.keys(a).forEach(function(c){b.setAxisLabelText(c,a[c])}),b.updateAxisLabels())},e.axis.max=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(j(a.x)&&(c.axis_x_max=a.x),j(a.y)&&(c.axis_y_max=a.y),j(a.y2)&&(c.axis_y2_max=a.y2)):c.axis_y_max=c.axis_y2_max=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_max,y:c.axis_y_max,y2:c.axis_y2_max}},e.axis.min=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(j(a.x)&&(c.axis_x_min=a.x),j(a.y)&&(c.axis_y_min=a.y),j(a.y2)&&(c.axis_y2_min=a.y2)):c.axis_y_min=c.axis_y2_min=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_min,y:c.axis_y_min,y2:c.axis_y2_min}},e.axis.range=function(a){return arguments.length?(n(a.max)&&this.axis.max(a.max),void(n(a.min)&&this.axis.min(a.min))):{max:this.axis.max(),min:this.axis.min()}},e.legend=function(){},e.legend.show=function(a){var b=this.internal;b.showLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},e.legend.hide=function(a){var b=this.internal;b.hideLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},e.resize=function(a){var b=this.internal,c=b.config;c.size_width=a?a.width:null,c.size_height=a?a.height:null,this.flush()},e.flush=function(){var a=this.internal;a.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},e.destroy=function(){var b=this.internal;return a.clearInterval(b.intervalForObserveInserted),a.onresize=null,b.selectChart.classed("c3",!1).html(""),Object.keys(b).forEach(function(a){b[a]=null}),null},e.tooltip=function(){},e.tooltip.show=function(a){var b,c,d=this.internal;a.mouse&&(c=a.mouse),a.data?d.isMultipleX()?(c=[d.x(a.data.x),d.getYScale(a.data.id)(a.data.value)],b=null):b=j(a.data.index)?a.data.index:d.getIndexByX(a.data.x):"undefined"!=typeof a.x?b=d.getIndexByX(a.x):"undefined"!=typeof a.index&&(b=a.index),d.dispatchEvent("mouseover",b,c),d.dispatchEvent("mousemove",b,c)},e.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0)};var w;Function.prototype.bind=Function.prototype.bind||function(a){var b=this;return function(){return b.apply(a,arguments)}},"function"==typeof define&&define.amd?define("c3",["d3"],g):"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=g:a.c3=g}(window);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function(){"use strict";var t=this,i=t.Chart,e=function(t){this.canvas=t.canvas,this.ctx=t;this.width=t.canvas.width,this.height=t.canvas.height;return this.aspectRatio=this.width/this.height,s.retinaScale(this),this};e.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},e.types={};var s=e.helpers={},n=s.each=function(t,i,e){var s=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var n;for(n=0;n<t.length;n++)i.apply(e,[t[n],n].concat(s))}else for(var o in t)i.apply(e,[t[o],o].concat(s))},o=s.clone=function(t){var i={};return n(t,function(e,s){t.hasOwnProperty(s)&&(i[s]=e)}),i},a=s.extend=function(t){return n(Array.prototype.slice.call(arguments,1),function(i){n(i,function(e,s){i.hasOwnProperty(s)&&(t[s]=e)})}),t},h=s.merge=function(){var t=Array.prototype.slice.call(arguments,0);return t.unshift({}),a.apply(null,t)},l=s.indexOf=function(t,i){if(Array.prototype.indexOf)return t.indexOf(i);for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1},r=(s.where=function(t,i){var e=[];return s.each(t,function(t){i(t)&&e.push(t)}),e},s.findNextWhere=function(t,i,e){e||(e=-1);for(var s=e+1;s<t.length;s++){var n=t[s];if(i(n))return n}},s.findPreviousWhere=function(t,i,e){e||(e=t.length);for(var s=e-1;s>=0;s--){var n=t[s];if(i(n))return n}},s.inherits=function(t){var i=this,e=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return i.apply(this,arguments)},s=function(){this.constructor=e};return s.prototype=i.prototype,e.prototype=new s,e.extend=r,t&&a(e.prototype,t),e.__super__=i.prototype,e}),c=s.noop=function(){},u=s.uid=function(){var t=0;return function(){return"chart-"+t++}}(),d=s.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},p=s.amd="function"==typeof define&&define.amd,f=s.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g=s.max=function(t){return Math.max.apply(Math,t)},m=s.min=function(t){return Math.min.apply(Math,t)},v=(s.cap=function(t,i,e){if(f(i)){if(t>i)return i}else if(f(e)&&e>t)return e;return t},s.getDecimalPlaces=function(t){return t%1!==0&&f(t)?t.toString().split(".")[1].length:0}),S=s.radians=function(t){return t*(Math.PI/180)},x=(s.getAngleFromPoint=function(t,i){var e=i.x-t.x,s=i.y-t.y,n=Math.sqrt(e*e+s*s),o=2*Math.PI+Math.atan2(s,e);return 0>e&&0>s&&(o+=2*Math.PI),{angle:o,distance:n}},s.aliasPixel=function(t){return t%2===0?0:.5}),y=(s.splineCurve=function(t,i,e,s){var n=Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)),o=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2)),a=s*n/(n+o),h=s*o/(n+o);return{inner:{x:i.x-a*(e.x-t.x),y:i.y-a*(e.y-t.y)},outer:{x:i.x+h*(e.x-t.x),y:i.y+h*(e.y-t.y)}}},s.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),C=(s.calculateScaleRange=function(t,i,e,s,n){var o=2,a=Math.floor(i/(1.5*e)),h=o>=a,l=g(t),r=m(t);l===r&&(l+=.5,r>=.5&&!s?r-=.5:l+=.5);for(var c=Math.abs(l-r),u=y(c),d=Math.ceil(l/(1*Math.pow(10,u)))*Math.pow(10,u),p=s?0:Math.floor(r/(1*Math.pow(10,u)))*Math.pow(10,u),f=d-p,v=Math.pow(10,u),S=Math.round(f/v);(S>a||a>2*S)&&!h;)if(S>a)v*=2,S=Math.round(f/v),S%1!==0&&(h=!0);else if(n&&u>=0){if(v/2%1!==0)break;v/=2,S=Math.round(f/v)}else v/=2,S=Math.round(f/v);return h&&(S=o,v=f/S),{steps:S,stepValue:v,min:p,max:p+S*v}},s.template=function(t,i){function e(t,i){var e=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):s[t]=s[t];return i?e(i):e}if(t instanceof Function)return t(i);var s={};return e(t,i)}),w=(s.generateLabels=function(t,i,e,s){var o=new Array(i);return labelTemplateString&&n(o,function(i,n){o[n]=C(t,{value:e+s*(n+1)})}),o},s.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)))},easeOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:1==(t/=1)?1:(e||(e=.3),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),s*Math.pow(2,-10*t)*Math.sin(2*(1*t-i)*Math.PI/e)+1)},easeInOutElastic:function(t){var i=1.70158,e=0,s=1;return 0===t?0:2==(t/=.5)?1:(e||(e=.3*1.5),s<Math.abs(1)?(s=1,i=e/4):i=e/(2*Math.PI)*Math.asin(1/s),1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e):s*Math.pow(2,-10*(t-=1))*Math.sin(2*(1*t-i)*Math.PI/e)*.5+1)},easeInBack:function(t){var i=1.70158;return 1*(t/=1)*t*((i+1)*t-i)},easeOutBack:function(t){var i=1.70158;return 1*((t=t/1-1)*t*((i+1)*t+i)+1)},easeInOutBack:function(t){var i=1.70158;return(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},easeInBounce:function(t){return 1-w.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*w.easeInBounce(2*t):.5*w.easeOutBounce(2*t-1)+.5}}),b=s.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),P=(s.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),s.animationLoop=function(t,i,e,s,n,o){var a=0,h=w[e]||w.linear,l=function(){a++;var e=a/i,r=h(e);t.call(o,r,e,a),s.call(o,r,e),i>a?o.animationFrame=b(l):n.apply(o)};b(l)},s.getRelativePosition=function(t){var i,e,s=t.originalEvent||t,n=t.currentTarget||t.srcElement,o=n.getBoundingClientRect();return s.touches?(i=s.touches[0].clientX-o.left,e=s.touches[0].clientY-o.top):(i=s.clientX-o.left,e=s.clientY-o.top),{x:i,y:e}},s.addEvent=function(t,i,e){t.addEventListener?t.addEventListener(i,e):t.attachEvent?t.attachEvent("on"+i,e):t["on"+i]=e}),L=s.removeEvent=function(t,i,e){t.removeEventListener?t.removeEventListener(i,e,!1):t.detachEvent?t.detachEvent("on"+i,e):t["on"+i]=c},k=(s.bindEvents=function(t,i,e){t.events||(t.events={}),n(i,function(i){t.events[i]=function(){e.apply(t,arguments)},P(t.chart.canvas,i,t.events[i])})},s.unbindEvents=function(t,i){n(i,function(i,e){L(t.chart.canvas,e,i)})}),F=s.getMaximumWidth=function(t){var i=t.parentNode;return i.clientWidth},R=s.getMaximumHeight=function(t){var i=t.parentNode;return i.clientHeight},T=(s.getMaximumSize=s.getMaximumWidth,s.retinaScale=function(t){var i=t.ctx,e=t.canvas.width,s=t.canvas.height;window.devicePixelRatio&&(i.canvas.style.width=e+"px",i.canvas.style.height=s+"px",i.canvas.height=s*window.devicePixelRatio,i.canvas.width=e*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio))}),A=s.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},M=s.fontString=function(t,i,e){return i+" "+t+"px "+e},W=s.longestText=function(t,i,e){t.font=i;var s=0;return n(e,function(i){var e=t.measureText(i).width;s=e>s?e:s}),s},z=s.drawRoundedRectangle=function(t,i,e,s,n,o){t.beginPath(),t.moveTo(i+o,e),t.lineTo(i+s-o,e),t.quadraticCurveTo(i+s,e,i+s,e+o),t.lineTo(i+s,e+n-o),t.quadraticCurveTo(i+s,e+n,i+s-o,e+n),t.lineTo(i+o,e+n),t.quadraticCurveTo(i,e+n,i,e+n-o),t.lineTo(i,e+o),t.quadraticCurveTo(i,e,i+o,e),t.closePath()};e.instances={},e.Type=function(t,i,s){this.options=i,this.chart=s,this.id=u(),e.instances[this.id]=this,i.responsive&&this.resize(),this.initialize.call(this,t)},a(e.Type.prototype,{initialize:function(){return this},clear:function(){return A(this.chart),this},stop:function(){return s.cancelAnimFrame.call(t,this.animationFrame),this},resize:function(t){this.stop();var i=this.chart.canvas,e=F(this.chart.canvas),s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:R(this.chart.canvas);return i.width=this.chart.width=e,i.height=this.chart.height=s,T(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:c,render:function(t){return t&&this.reflow(),this.options.animation&&!t?s.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return C(this.options.legendTemplate,this)},destroy:function(){this.clear(),k(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete e.instances[this.id]},showTooltip:function(t,i){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t,function(t,e){t!==this.activeElements[e]&&(i=!0)},this),i)}.call(this,t);if(o||i){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var a,h,r=this.datasets.length-1;r>=0&&(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments,h=l(a,t[0]),-1===h);r--);var c=[],u=[],d=function(){var t,i,e,n,o,a=[],l=[],r=[];return s.each(this.datasets,function(i){t=i.points||i.bars||i.segments,t[h]&&t[h].hasValue()&&a.push(t[h])}),s.each(a,function(t){l.push(t.x),r.push(t.y),c.push(s.template(this.options.multiTooltipTemplate,t)),u.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),o=m(r),e=g(r),n=m(l),i=g(l),{x:n>this.chart.width/2?n:i,y:(o+e)/2}}.call(this,h);new e.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:c,legendColors:u,legendColorBackground:this.options.multiTooltipKeyBackground,title:t[0].label,chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else n(t,function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x),y:Math.round(i.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:C(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),e.Type.extend=function(t){var i=this,s=function(){return i.apply(this,arguments)};if(s.prototype=o(i.prototype),a(s.prototype,t),s.extend=e.Type.extend,t.name||i.prototype.name){var n=t.name||i.prototype.name,l=e.defaults[i.prototype.name]?o(e.defaults[i.prototype.name]):{};e.defaults[n]=a(l,t.defaults),e.types[n]=s,e.prototype[n]=function(t,i){var o=h(e.defaults.global,e.defaults[n],i||{});return new s(t,o,this)}}else d("Name not provided for this chart, so it hasn't been registered");return i},e.Element=function(t){a(this,t),this.initialize.apply(this,arguments),this.save()},a(e.Element.prototype,{initialize:function(){},restore:function(t){return t?n(t,function(t){this[t]=this._saved[t]},this):a(this,this._saved),this},save:function(){return this._saved=o(this),delete this._saved._saved,this},update:function(t){return n(t,function(t,i){this._saved[i]=this[i],this[i]=t},this),this},transition:function(t,i){return n(t,function(t,e){this[e]=(t-this._saved[e])*i+this._saved[e]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return f(this.value)}}),e.Element.extend=r,e.Point=e.Element.extend({display:!0,inRange:function(t,i){var e=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(i-this.y,2)<Math.pow(e,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),e.Arc=e.Element.extend({inRange:function(t,i){var e=s.getAngleFromPoint(this,{x:t,y:i}),n=e.angle>=this.startAngle&&e.angle<=this.endAngle,o=e.distance>=this.innerRadius&&e.distance<=this.outerRadius;return n&&o},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,i=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*i,y:this.y+Math.sin(t)*i}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),e.Rectangle=e.Element.extend({draw:function(){var t=this.ctx,i=this.width/2,e=this.x-i,s=this.x+i,n=this.base-(this.base-this.y),o=this.strokeWidth/2;this.showStroke&&(e+=o,s-=o,n+=o),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(e,this.base),t.lineTo(e,n),t.lineTo(s,n),t.lineTo(s,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,i){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&i>=this.y&&i<=this.base}}),e.Tooltip=e.Element.extend({draw:function(){var t=this.chart.ctx;t.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var i=this.caretPadding=2,e=t.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,n=s+this.caretHeight+i;this.x+e/2>this.chart.width?this.xAlign="left":this.x-e/2<0&&(this.xAlign="right"),this.y-n<0&&(this.yAlign="below");var o=this.x-e/2,a=this.y-n;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-i),t.lineTo(this.x+this.caretHeight,this.y-(i+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(i+this.caretHeight)),t.closePath(),t.fill();break;case"below":a=this.y+i+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+i),t.lineTo(this.x+this.caretHeight,this.y+i+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+i+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":o=this.x-e+(this.cornerRadius+this.caretHeight);break;case"right":o=this.x-(this.cornerRadius+this.caretHeight)}z(t,o,a,e,s,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,o+e/2,a+s/2)}}}),e.MultiTooltip=e.Element.extend({initialize:function(){this.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=M(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,i=W(this.ctx,this.font,this.labels)+this.fontSize+3,e=g([i,t]);this.width=e+2*this.xPadding;var s=this.height/2;this.y-s<0?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var i=this.y-this.height/2+this.yPadding,e=t-1;return 0===t?i+this.titleFontSize/2:i+(1.5*this.fontSize*e+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){if(this.custom)this.custom(this);else{z(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,s.each(this.labels,function(i,e){t.fillStyle=this.textColor,t.fillText(i,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(e+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[e].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(e+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),e.Scale=e.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?W(this.ctx,this.font,this.yLabels):0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var t,i=this.endPoint-this.startPoint;for(this.calculateYRange(i),this.buildYLabels(),this.calculateXLabelRotation();i>this.endPoint-this.startPoint;)i=this.endPoint-this.startPoint,t=this.yLabelWidth,this.calculateYRange(i),this.buildYLabels(),t<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var t,i,e=this.ctx.measureText(this.xLabels[0]).width,s=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=s/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth+10?e/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var n,o=W(this.ctx,this.font,this.xLabels);this.xLabelWidth=o;for(var a=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>a&&0===this.xLabelRotation||this.xLabelWidth>a&&this.xLabelRotation<=90&&this.xLabelRotation>0;)n=Math.cos(S(this.xLabelRotation)),t=n*e,i=n*s,t+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=t+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=n*o;this.xLabelRotation>0&&(this.endPoint-=Math.sin(S(this.xLabelRotation))*o+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:c,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var i=this.drawingArea()/(this.min-this.max);return this.endPoint-i*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),e=i/(this.valuesCount-(this.offsetGridLines?0:1)),s=e*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=e/2),Math.round(s)},update:function(t){s.extend(this,t),this.fit()},draw:function(){var t=this.ctx,i=(this.endPoint-this.startPoint)/this.steps,e=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,n(this.yLabels,function(n,o){var a=this.endPoint-i*o,h=Math.round(a),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(n,e-10,a),0!==o||l||(l=!0),l&&t.beginPath(),o>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),h+=s.aliasPixel(t.lineWidth),l&&(t.moveTo(e,h),t.lineTo(this.width,h),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(e-5,h),t.lineTo(e,h),t.stroke(),t.closePath()},this),n(this.xLabels,function(i,e){var s=this.calculateX(e)+x(this.lineWidth),n=this.calculateX(e-(this.offsetGridLines?.5:0))+x(this.lineWidth),o=this.xLabelRotation>0,a=this.showVerticalLines;0!==e||a||(a=!0),a&&t.beginPath(),e>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),a&&(t.moveTo(n,this.endPoint),t.lineTo(n,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(n,this.endPoint),t.lineTo(n,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(s,o?this.endPoint+12:this.endPoint+8),t.rotate(-1*S(this.xLabelRotation)),t.font=this.font,t.textAlign=o?"right":"center",t.textBaseline=o?"middle":"top",t.fillText(i,0,0),t.restore()},this))}}),e.RadialScale=e.Element.extend({initialize:function(){this.size=m([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var i=this.drawingArea/(this.max-this.min);return(t-this.min)*i},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=v(this.stepValue),i=0;i<=this.steps;i++)this.yLabels.push(C(this.templateString,{value:(this.min+i*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var t,i,e,s,n,o,a,h,l,r,c,u,d=m([this.height/2-this.pointLabelFontSize-5,this.width/2]),p=this.width,g=0;for(this.ctx.font=M(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)t=this.getPointPosition(i,d),e=this.ctx.measureText(C(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=e/2,t.x+s>p&&(p=t.x+s,n=i),t.x-s<g&&(g=t.x-s,a=i)):i<this.valuesCount/2?t.x+e>p&&(p=t.x+e,n=i):i>this.valuesCount/2&&t.x-e<g&&(g=t.x-e,a=i);l=g,r=Math.ceil(p-this.width),o=this.getIndexAngle(n),h=this.getIndexAngle(a),c=r/Math.sin(o+Math.PI/2),u=l/Math.sin(h+Math.PI/2),c=f(c)?c:0,u=f(u)?u:0,this.drawingArea=d-(u+c)/2,this.setCenterPoint(u,c)},setCenterPoint:function(t,i){var e=this.width-i-this.drawingArea,s=t+this.drawingArea;this.xCenter=(s+e)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var i=2*Math.PI/this.valuesCount;return t*i-Math.PI/2},getPointPosition:function(t,i){var e=this.getIndexAngle(t);return{x:Math.cos(e)*i+this.xCenter,y:Math.sin(e)*i+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(n(this.yLabels,function(i,e){if(e>0){var s,n=e*(this.drawingArea/this.steps),o=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var a=0;a<this.valuesCount;a++)s=this.getPointPosition(a,this.calculateCenterOffset(this.min+e*this.stepValue)),0===a?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=M(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=t.measureText(i).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-h/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(i,this.xCenter,o)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var i=this.valuesCount-1;i>=0;i--){if(this.angleLineWidth>0){var e=this.getPointPosition(i,this.calculateCenterOffset(this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(e.x,e.y),t.stroke(),t.closePath()}var s=this.getPointPosition(i,this.calculateCenterOffset(this.max)+5);t.font=M(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var o=this.labels.length,a=this.labels.length/2,h=a/2,l=h>i||i>o-h,r=i===h||i===o-h;t.textAlign=0===i?"center":i===a?"center":a>i?"left":"right",t.textBaseline=r?"middle":l?"bottom":"top",t.fillText(this.labels[i],s.x,s.y)}}}}}),s.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){n(e.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),p?define(function(){return e}):"object"==typeof module&&module.exports&&(module.exports=e),t.Chart=e,e.noConflict=function(){return t.Chart=i,e}}).call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Bar",defaults:s,initialize:function(t){var s=this.options;this.ScaleClass=i.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,i,e){var n=this.calculateBaseWidth(),o=this.calculateX(e)-n/2,a=this.calculateBarWidth(t);return o+a*i+i*s.barDatasetSpacing+a/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*s.barValueSpacing},calculateBarWidth:function(t){var i=this.calculateBaseWidth()-(t-1)*s.barDatasetSpacing;return i/t}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),this.BarClass=i.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,bars:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.bars.push(new this.BarClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.strokeColor,fillColor:i.fillColor,highlightFill:i.highlightFill||i.fillColor,highlightStroke:i.highlightStroke||i.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,i,s){e.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,s,i),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){e.each(this.datasets,function(i,s){e.each(i.bars,t,this,s)},this)},getBarsAtEvent:function(t){for(var i,s=[],n=e.getRelativePosition(t),o=function(t){s.push(t.bars[i])},a=0;a<this.datasets.length;a++)for(i=0;i<this.datasets[a].bars.length;i++)if(this.datasets[a].bars[i].inRange(n.x,n.y))return e.each(this.datasets,o),s;return s},buildScale:function(t){var i=this,s=function(){var t=[];return i.eachBars(function(i){t.push(i.value)}),t},n={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(n,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(n)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].bars.push(new this.BarClass({value:t,label:i,x:this.scale.calculateBarX(this.datasets.length,e,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[e].strokeColor,fillColor:this.datasets[e].fillColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){e.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});
var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();this.chart.ctx;this.scale.draw(i),e.each(this.datasets,function(t,s){e.each(t.bars,function(t,e){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,s,e),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},i).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Doughnut",defaults:s,initialize:function(t){this.segments=[],this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=i.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.calculateTotal(t),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),e||(this.reflow(),this.update())},calculateCircumference:function(t){return 2*Math.PI*(t/this.total)},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this)},update:function(){this.calculateTotal(this.segments),e.each(this.activeElements,function(t){t.restore(["fillColor"])}),e.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(e.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,e.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var i=t?t:1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},i),t.endAngle=t.startAngle+t.circumference,t.draw(),0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle)},this)}}),i.types.Doughnut.extend({name:"Pie",defaults:e.merge(s,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"Line",defaults:s,initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,i){e.extend(t,{x:this.scale.calculateX(i),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),e.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.datasets,function(t){e.each(t.points,function(t){t.inRange(s.x,s.y)&&i.push(t)})},this),i},buildScale:function(t){var s=this,n=function(){var t=[];return s.eachPoints(function(i){t.push(i.value)}),t},o={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var i=e.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);e.extend(this,i)},xLabels:t,font:e.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&e.extend(o,{calculateYRange:e.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new i.Scale(o)},addData:function(t,i){e.each(t,function(t,e){this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.addXLabel(i),this.update()},removeData:function(){this.scale.removeXLabel(),e.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=e.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var i=t||1;this.clear();var s=this.chart.ctx,n=function(t){return null!==t.value},o=function(t,i,s){return e.findNextWhere(i,n,s)||t},a=function(t,i,s){return e.findPreviousWhere(i,n,s)||t};this.scale.draw(i),e.each(this.datasets,function(t){var h=e.where(t.points,n);e.each(t.points,function(t,e){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(e)},i)},this),this.options.bezierCurve&&e.each(h,function(t,i){var s=i>0&&i<h.length-1?this.options.bezierCurveTension:0;t.controlPoints=e.splineCurve(a(t,h,i),t,o(t,h,i),s),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(h,function(t,i){if(0===i)s.moveTo(t.x,t.y);else if(this.options.bezierCurve){var e=a(t,h,i);s.bezierCurveTo(e.controlPoints.outer.x,e.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else s.lineTo(t.x,t.y)},this),s.stroke(),this.options.datasetFill&&h.length>0&&(s.lineTo(h[h.length-1].x,this.scale.endPoint),s.lineTo(h[0].x,this.scale.endPoint),s.fillStyle=t.fillColor,s.closePath(),s.fill()),e.each(h,function(t){t.draw()})},this)}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers,s={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'};i.Type.extend({name:"PolarArea",defaults:s,initialize:function(t){this.segments=[],this.SegmentArc=i.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),e.each(t,function(t,i){this.addData(t,i,!0)},this),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];e.each(this.segments,function(t){t.restore(["fillColor"])}),e.each(i,function(t){t.fillColor=t.highlightColor}),this.showTooltip(i)}),this.render()},getSegmentsAtEvent:function(t){var i=[],s=e.getRelativePosition(t);return e.each(this.segments,function(t){t.inRange(s.x,s.y)&&i.push(t)},this),i},addData:function(t,i,e){var s=i||this.segments.length;this.segments.splice(s,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),e||(this.reflow(),this.update())},removeData:function(t){var i=e.isNumber(t)?t:this.segments.length-1;this.segments.splice(i,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,e.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var i=[];e.each(t,function(t){i.push(t.value)});var s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s,{size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),e.each(this.segments,function(t){t.save()}),this.render()},reflow:function(){e.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),e.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),e.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var i=t||1;this.clear(),e.each(this.segments,function(t,e){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},i),t.endAngle=t.startAngle+t.circumference,0===e&&(t.startAngle=1.5*Math.PI),e<this.segments.length-1&&(this.segments[e+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,i=t.Chart,e=i.helpers;i.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},initialize:function(t){this.PointClass=i.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&e.bindEvents(this,this.options.tooltipEvents,function(t){var i="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),e.each(i,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(i)}),e.each(t.datasets,function(i){var s={label:i.label||null,fillColor:i.fillColor,strokeColor:i.strokeColor,pointColor:i.pointColor,pointStrokeColor:i.pointStrokeColor,points:[]};this.datasets.push(s),e.each(i.data,function(e,n){var o;this.scale.animation||(o=this.scale.getPointPosition(n,this.scale.calculateCenterOffset(e))),s.points.push(new this.PointClass({value:e,label:t.labels[n],datasetLabel:i.label,x:this.options.animation?this.scale.xCenter:o.x,y:this.options.animation?this.scale.yCenter:o.y,strokeColor:i.pointStrokeColor,fillColor:i.pointColor,highlightFill:i.pointHighlightFill||i.pointColor,highlightStroke:i.pointHighlightStroke||i.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){e.each(this.datasets,function(i){e.each(i.points,t,this)},this)},getPointsAtEvent:function(t){var i=e.getRelativePosition(t),s=e.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},i),n=2*Math.PI/this.scale.valuesCount,o=Math.round((s.angle-1.5*Math.PI)/n),a=[];return(o>=this.scale.valuesCount||0>o)&&(o=0),s.distance<=this.scale.drawingArea&&e.each(this.datasets,function(t){a.push(t.points[o])}),a},buildScale:function(t){this.scale=new i.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var i=function(){var i=[];return e.each(t,function(t){t.data?i=i.concat(t.data):e.each(t.points,function(t){i.push(t.value)})}),i}(),s=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:e.calculateScaleRange(i,e.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);e.extend(this.scale,s)},addData:function(t,i){this.scale.valuesCount++,e.each(t,function(t,e){var s=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[e].points.push(new this.PointClass({value:t,label:i,x:s.x,y:s.y,strokeColor:this.datasets[e].pointStrokeColor,fillColor:this.datasets[e].pointColor}))},this),this.scale.labels.push(i),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),e.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){e.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:e.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var i=t||1,s=this.chart.ctx;this.clear(),this.scale.draw(),e.each(this.datasets,function(t){e.each(t.points,function(t,e){t.hasValue()&&t.transition(this.scale.getPointPosition(e,this.scale.calculateCenterOffset(t.value)),i)},this),s.lineWidth=this.options.datasetStrokeWidth,s.strokeStyle=t.strokeColor,s.beginPath(),e.each(t.points,function(t,i){0===i?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)},this),s.closePath(),s.stroke(),s.fillStyle=t.fillColor,s.fill(),e.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this);