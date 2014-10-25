(function e(n,t,a){function r(s,o){if(!t[s]){if(!n[s]){var l=typeof require=="function"&&require;if(!o&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return r(t?t:e)},u,u.exports,e,n,t,a)}return t[s].exports}var i=typeof require=="function"&&require;for(var s=0;s<a.length;s++)r(a[s]);return r})({1:[function(e,n,t){var a=function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function t(e,n){var t=e&&e.exec(n);return t&&t.index==0}function a(e){var n=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);n=n.map(function(e){return e.replace(/^lang(uage)?-/,"")});return n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function r(e,n){var t={};for(var a in e)t[a]=e[a];if(n)for(var a in n)t[a]=n[a];return t}function i(e){var t=[];(function a(e,r){for(var i=e.firstChild;i;i=i.nextSibling){if(i.nodeType==3)r+=i.nodeValue.length;else if(i.nodeType==1){t.push({event:"start",offset:r,node:i});r=a(i,r);if(!n(i).match(/br|hr|img|input/)){t.push({event:"stop",offset:r,node:i})}}}return r})(e,0);return t}function s(t,a,r){var i=0;var s="";var o=[];function l(){if(!t.length||!a.length){return t.length?t:a}if(t[0].offset!=a[0].offset){return t[0].offset<a[0].offset?t:a}return a[0].event=="start"?t:a}function c(t){function a(n){return" "+n.nodeName+'="'+e(n.value)+'"'}s+="<"+n(t)+Array.prototype.map.call(t.attributes,a).join("")+">"}function u(e){s+="</"+n(e)+">"}function d(e){(e.event=="start"?c:u)(e.node)}while(t.length||a.length){var g=l();s+=e(r.substr(i,g[0].offset-i));i=g[0].offset;if(g==t){o.reverse().forEach(u);do{d(g.splice(0,1)[0]);g=l()}while(g==t&&g.length&&g[0].offset==i);o.reverse().forEach(c)}else{if(g[0].event=="start"){o.push(g[0].node)}else{o.pop()}d(g.splice(0,1)[0])}}return s+e(r.substr(i))}function o(e){function n(e){return e&&e.source||e}function t(t,a){return RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}function a(i,s){if(i.compiled)return;i.compiled=true;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var o={};var l=function(n,t){if(e.case_insensitive){t=t.toLowerCase()}t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};if(typeof i.keywords=="string"){l("keyword",i.keywords)}else{Object.keys(i.keywords).forEach(function(e){l(e,i.keywords[e])})}i.keywords=o}i.lexemesRe=t(i.lexemes||/\b[A-Za-z0-9_]+\b/,true);if(s){if(i.beginKeywords){i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"}if(!i.begin)i.begin=/\B|\b/;i.beginRe=t(i.begin);if(!i.end&&!i.endsWithParent)i.end=/\B|\b/;if(i.end)i.endRe=t(i.end);i.terminator_end=n(i.end)||"";if(i.endsWithParent&&s.terminator_end)i.terminator_end+=(i.end?"|":"")+s.terminator_end}if(i.illegal)i.illegalRe=t(i.illegal);if(i.relevance===undefined)i.relevance=1;if(!i.contains){i.contains=[]}var c=[];i.contains.forEach(function(e){if(e.variants){e.variants.forEach(function(n){c.push(r(e,n))})}else{c.push(e=="self"?i:e)}});i.contains=c;i.contains.forEach(function(e){a(e,i)});if(i.starts){a(i.starts,s)}var u=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=u.length?t(u.join("|"),true):{exec:function(e){return null}}}a(e)}function l(n,a,r,i){function s(e,n){for(var a=0;a<n.contains.length;a++){if(t(n.contains[a].beginRe,e)){return n.contains[a]}}}function u(e,n){if(t(e.endRe,n)){return e}if(e.endsWithParent){return u(e.parent,n)}}function d(e,n){return!r&&t(n.illegalRe,e)}function g(e,n){var t=w.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function b(e,n,t,a){var r=a?"":f.classPrefix,i='<span class="'+r,s=t?"":"</span>";i+=e+'">';return i+n+s}function m(){if(!y.keywords)return e(A);var n="";var t=0;y.lexemesRe.lastIndex=0;var a=y.lexemesRe.exec(A);while(a){n+=e(A.substr(t,a.index-t));var r=g(y,a);if(r){S+=r[1];n+=b(r[0],e(a[0]))}else{n+=e(a[0])}t=y.lexemesRe.lastIndex;a=y.lexemesRe.exec(A)}return n+e(A.substr(t))}function h(){if(y.subLanguage&&!p[y.subLanguage]){return e(A)}var n=y.subLanguage?l(y.subLanguage,A,true,x[y.subLanguage]):c(A);if(y.relevance>0){S+=n.relevance}if(y.subLanguageMode=="continuous"){x[y.subLanguage]=n.top}return b(n.language,n.value,false,true)}function v(){return y.subLanguage!==undefined?h():m()}function E(n,t){var a=n.className?b(n.className,"",true):"";if(n.returnBegin){O+=a;A=""}else if(n.excludeBegin){O+=e(t)+a;A=""}else{O+=a;A=t}y=Object.create(n,{parent:{value:y}})}function _(n,t){A+=n;if(t===undefined){O+=v();return 0}var a=s(t,y);if(a){O+=v();E(a,t);return a.returnBegin?0:t.length}var r=u(y,t);if(r){var i=y;if(!(i.returnEnd||i.excludeEnd)){A+=t}O+=v();do{if(y.className){O+="</span>"}S+=y.relevance;y=y.parent}while(y!=r.parent);if(i.excludeEnd){O+=e(t)}A="";if(r.starts){E(r.starts,"")}return i.returnEnd?0:t.length}if(d(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.className||"<unnamed>")+'"');A+=t;return t.length||1}var w=N(n);if(!w){throw new Error('Unknown language: "'+n+'"')}o(w);var y=i||w;var x={};var O="";for(var M=y;M!=w;M=M.parent){if(M.className){O=b(M.className,"",true)+O}}var A="";var S=0;try{var R,C,k=0;while(true){y.terminators.lastIndex=k;R=y.terminators.exec(a);if(!R)break;C=_(a.substr(k,R.index-k),R[0]);k=R.index+C}_(a.substr(k));for(var M=y;M.parent;M=M.parent){if(M.className){O+="</span>"}}return{relevance:S,value:O,language:n,top:y}}catch(T){if(T.message.indexOf("Illegal")!=-1){return{relevance:0,value:e(a)}}else{throw T}}}function c(n,t){t=t||f.languages||Object.keys(p);var a={relevance:0,value:e(n)};var r=a;t.forEach(function(e){if(!N(e)){return}var t=l(e,n,false);t.language=e;if(t.relevance>r.relevance){r=t}if(t.relevance>a.relevance){r=a;a=t}});if(r.language){a.second_best=r}return a}function u(e){if(f.tabReplace){e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n,t,a){return n.replace(/\t/g,f.tabReplace)})}if(f.useBR){e=e.replace(/\n/g,"<br>")}return e}function d(e,n,t){var a=n?v[n]:t,r=[e.trim()];if(!e.match(/(\s|^)hljs(\s|$)/)){r.push("hljs")}if(a){r.push(a)}return r.join(" ").trim()}function g(e){var n=a(e);if(/no(-?)highlight/.test(n))return;var t;if(f.useBR){t=document.createElementNS("http://www.w3.org/1999/xhtml","div");t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")}else{t=e}var r=t.textContent;var o=n?l(n,r,true):c(r);var g=i(t);if(g.length){var b=document.createElementNS("http://www.w3.org/1999/xhtml","div");b.innerHTML=o.value;o.value=s(g,i(b),r)}o.value=u(o.value);e.innerHTML=o.value;e.className=d(e.className,n,o.language);e.result={language:o.language,re:o.relevance};if(o.second_best){e.second_best={language:o.second_best.language,re:o.second_best.relevance}}}var f={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function b(e){f=r(f,e)}function m(){if(m.called)return;m.called=true;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,g)}function h(){addEventListener("DOMContentLoaded",m,false);addEventListener("load",m,false)}var p={};var v={};function E(e,n){var t=p[e]=n(this);if(t.aliases){t.aliases.forEach(function(n){v[n]=e})}}function _(){return Object.keys(p)}function N(e){return p[e]||p[v[e]]}this.highlight=l;this.highlightAuto=c;this.fixMarkup=u;this.highlightBlock=g;this.configure=b;this.initHighlighting=m;this.initHighlightingOnLoad=h;this.registerLanguage=E;this.listLanguages=_;this.getLanguage=N;this.inherit=r;this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*";this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*";this.NUMBER_RE="\\b\\d+(\\.\\d+)?";this.C_NUMBER_RE="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BINARY_NUMBER_RE="\\b(0b[01]+)";this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0};this.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[this.BACKSLASH_ESCAPE]};this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[this.BACKSLASH_ESCAPE]};this.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/};this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$",contains:[this.PHRASAL_WORDS_MODE]};this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/",contains:[this.PHRASAL_WORDS_MODE]};this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$",contains:[this.PHRASAL_WORDS_MODE]};this.NUMBER_MODE={className:"number",begin:this.NUMBER_RE,relevance:0};this.C_NUMBER_MODE={className:"number",begin:this.C_NUMBER_RE,relevance:0};this.BINARY_NUMBER_MODE={className:"number",begin:this.BINARY_NUMBER_RE,relevance:0};this.CSS_NUMBER_MODE={className:"number",begin:this.NUMBER_RE+"("+"%|em|ex|ch|rem"+"|vw|vh|vmin|vmax"+"|cm|mm|in|pt|pc|px"+"|deg|grad|rad|turn"+"|s|ms"+"|Hz|kHz"+"|dpi|dpcm|dppx"+")?",relevance:0};this.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[this.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[this.BACKSLASH_ESCAPE]}]};this.TITLE_MODE={className:"title",begin:this.IDENT_RE,relevance:0};this.UNDERSCORE_TITLE_MODE={className:"title",begin:this.UNDERSCORE_IDENT_RE,relevance:0}};n.exports=a},{}],2:[function(e,n,t){var a=e("./highlight.js"),r=new a;r.registerLanguage("xml",e("./languages/xml"));r.registerLanguage("css",e("./languages/css"));r.registerLanguage("markdown",e("./languages/markdown"));r.registerLanguage("javascript",e("./languages/javascript"));r.registerLanguage("json",e("./languages/json"));r.registerLanguage("livescript",e("./languages/livescript"));r.registerLanguage("makefile",e("./languages/makefile"));r.registerLanguage("scss",e("./languages/scss"));n.exports=r},{"./highlight.js":1,"./languages/css":3,"./languages/javascript":4,"./languages/json":5,"./languages/livescript":6,"./languages/makefile":7,"./languages/markdown":8,"./languages/scss":9,"./languages/xml":10}],3:[function(e,n,t){n.exports=function(e){var n="[a-zA-Z-][a-zA-Z0-9_-]*";var t={className:"function",begin:n+"\\(",returnBegin:true,excludeEnd:true,end:"\\("};return{case_insensitive:true,illegal:"[=/|']",contains:[e.C_BLOCK_COMMENT_MODE,{className:"id",begin:"\\#[A-Za-z0-9_-]+"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{className:"at_rule",begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{className:"at_rule",begin:"@",end:"[{;]",contains:[{className:"keyword",begin:/\S+/},{begin:/\s/,endsWithParent:true,excludeEnd:true,relevance:0,contains:[t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"tag",begin:n,relevance:0},{className:"rules",begin:"{",end:"}",illegal:"[^\\s]",relevance:0,contains:[e.C_BLOCK_COMMENT_MODE,{className:"rule",begin:"[^\\s]",returnBegin:true,end:";",endsWithParent:true,contains:[{className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:true,illegal:"[^\\s]",starts:{className:"value",endsWithParent:true,excludeEnd:true,contains:[t,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"hexcolor",begin:"#[0-9A-Fa-f]+"},{className:"important",begin:"!important"}]}}]}]}]}}},{}],4:[function(e,n,t){n.exports=function(e){return{aliases:["js"],keywords:{keyword:"in if for while finally var new function do return void else break catch "+"instanceof with throw case default try this switch continue typeof delete "+"let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent "+"encodeURI encodeURIComponent escape unescape Object Function Boolean Error "+"EvalError InternalError RangeError ReferenceError StopIteration SyntaxError "+"TypeError URIError Number Math Date String RegExp Array Float32Array "+"Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array "+"Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require "+"module console window document"},contains:[{className:"pi",begin:/^\s*('|")use strict('|")/,relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>;/,relevance:0,subLanguage:"xml"}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:true,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:/["'\(]/}],illegal:/\[|%/},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0}]}}},{}],5:[function(e,n,t){n.exports=function(e){var n={literal:"true false null"};var t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE];var a={className:"value",end:",",endsWithParent:true,excludeEnd:true,contains:t,keywords:n};var r={begin:"{",end:"}",contains:[{className:"attribute",begin:'\\s*"',end:'"\\s*:\\s*',excludeBegin:true,excludeEnd:true,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n",starts:a}],illegal:"\\S"};var i={begin:"\\[",end:"\\]",contains:[e.inherit(a,{className:null})],illegal:"\\S"};t.splice(t.length,0,r,i);return{contains:t,keywords:n,illegal:"\\S"}}},{}],6:[function(e,n,t){n.exports=function(e){var n={keyword:"in if for while finally new do return else break catch instanceof throw try this "+"switch continue typeof delete debugger case default function var with "+"then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super "+"case default function var void const let enum export import native "+"__hasProp __extends __slice __bind __indexOf",literal:"true false null undefined "+"yes no on off it that void",built_in:"npm require console print module global window document"};var t="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*";var a=e.inherit(e.TITLE_MODE,{begin:t});var r={className:"subst",begin:/#\{/,end:/\}/,keywords:n};var i={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:n};var s=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,i]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,i]},{begin:/\\/,end:/(\s|$)/,excludeEnd:true}]},{className:"pi",variants:[{begin:"//",end:"//[gim]*",contains:[r,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{className:"property",begin:"@"+t},{begin:"``",end:"``",excludeBegin:true,excludeEnd:true,subLanguage:"javascript"}];r.contains=s;var o={className:"params",begin:"\\(",returnBegin:true,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(s)}]};return{aliases:["ls"],keywords:n,illegal:/\/\*/,contains:s.concat([{className:"comment",begin:"\\/\\*",end:"\\*\\/"},e.HASH_COMMENT_MODE,{className:"function",contains:[a,o],returnBegin:true,variants:[{begin:"("+t+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",end:"\\->\\*?"},{begin:"("+t+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+t+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:true,illegal:/[:="\[\]]/,contains:[a]},a]},{className:"attribute",begin:t+":",end:":",returnBegin:true,returnEnd:true,relevance:0}])}}},{}],7:[function(e,n,t){n.exports=function(e){var n={className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]};return{aliases:["mk","mak"],contains:[e.HASH_COMMENT_MODE,{begin:/^\w+\s*\W*=/,returnBegin:true,relevance:0,starts:{className:"constant",end:/\s*\W*=/,excludeEnd:true,starts:{end:/$/,relevance:0,contains:[n]}}},{className:"title",begin:/^[\w]+:\s*$/},{className:"phony",begin:/^\.PHONY:/,end:/$/,keywords:".PHONY",lexemes:/[\.\w]+/},{begin:/^\t+/,end:/$/,relevance:0,contains:[e.QUOTE_STRING_MODE,n]}]}}},{}],8:[function(e,n,t){n.exports=function(e){return{aliases:["md","mkdown","mkd"],contains:[{className:"header",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"blockquote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"`.+?`"},{begin:"^( {4}|	)",end:"$",relevance:0}]},{className:"horizontal_rule",begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:true,contains:[{className:"link_label",begin:"\\[",end:"\\]",excludeBegin:true,returnEnd:true,relevance:0},{className:"link_url",begin:"\\]\\(",end:"\\)",excludeBegin:true,excludeEnd:true},{className:"link_reference",begin:"\\]\\[",end:"\\]",excludeBegin:true,excludeEnd:true}],relevance:10},{begin:"^\\[.+\\]:",returnBegin:true,contains:[{className:"link_reference",begin:"\\[",end:"\\]:",excludeBegin:true,excludeEnd:true,starts:{className:"link_url",end:"$"}}]}]}}},{}],9:[function(e,n,t){n.exports=function(e){var n="[a-zA-Z-][a-zA-Z0-9_-]*";var t={className:"variable",begin:"(\\$"+n+")\\b"};var a={className:"function",begin:n+"\\(",returnBegin:true,excludeEnd:true,end:"\\("};var r={className:"hexcolor",begin:"#[0-9A-Fa-f]+"};var i={className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:true,illegal:"[^\\s]",starts:{className:"value",endsWithParent:true,excludeEnd:true,contains:[a,r,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"important",begin:"!important"}]}};return{case_insensitive:true,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{className:"id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{className:"pseudo",begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{className:"pseudo",begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},t,{className:"attribute",begin:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{className:"value",begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{className:"value",begin:":",end:";",contains:[a,t,r,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"important",begin:"!important"}]},{className:"at_rule",begin:"@",end:"[{;]",keywords:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains:[a,t,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,r,e.CSS_NUMBER_MODE,{className:"preprocessor",begin:"\\s[A-Za-z0-9_.-]+",relevance:0}]}]}}},{}],10:[function(e,n,t){n.exports=function(e){var n="[A-Za-z0-9\\._:-]+";var t={begin:/<\?(php)?(?!\w)/,end:/\?>/,subLanguage:"php",subLanguageMode:"continuous"};var a={endsWithParent:true,illegal:/</,relevance:0,contains:[t,{className:"attribute",begin:n,relevance:0},{begin:"=",relevance:0,contains:[{className:"value",contains:[t],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],case_insensitive:true,contains:[{className:"doctype",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},{className:"comment",begin:"<!--",end:"-->",relevance:10},{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{title:"style"},contains:[a],starts:{end:"</style>",returnEnd:true,subLanguage:"css"}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{title:"script"},contains:[a],starts:{end:"</script>",returnEnd:true,subLanguage:"javascript"}},t,{className:"pi",begin:/<\?\w+/,end:/\?>/,relevance:10},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"title",begin:/[^ \/><\n\t]+/,relevance:0},a]}]}}},{}],11:[function(e,n,t){n.exports=function(e,n){var t={id:function(n,t){return(t||e).getElementById(n)},tag:function(n,t){return this.makeArray((t||e).getElementsByTagName(n))},qsa:function(n,t){return this.makeArray((t||e).querySelectorAll(n))},create:function(n,t){var n="!"===n?e.createDocumentFragment():""===n?e.createTextNode(t||""):e.createElement(n);try{if(t){n.className=t}}catch(a){}return n},clone:function(e,n){return e.cloneNode(n||true)},remove:function(e,n){return(n||e.parentNode).removeChild(e)},setAttr:function(e,t){var a=t.length;if(typeof t!=="object"){return}if(typeof t[0]==="object"&&"name"in t[0]){for(var r=0;r<a;r++){if(t[r].value!==n){e.setAttribute(t[r].name,t[r].value)}}}else{for(var i in t){if(t.hasOwnProperty(i)&&t[i]!==n){e.setAttribute(i,t[i])}}}return e},isIgnorable:function(e){return e.nodeName==="WBR"||e.nodeType===Node.COMMENT_NODE},makeArray:function(e){return Array.prototype.slice.call(e)},extend:function(e,n){var t=typeof e==="object"||typeof e==="function"||typeof n==="object";if(!t){return}for(var a in n){if(n.hasOwnProperty(a)){e[a]=n[a]}}return e}};return t}(window.document)},{}],12:[function(e,n,t){void function(n,t,a){var r=Number(16);var i=t.documentElement,s=t.body;var o=e("./lib/yijun.js");var l=t.querySelector("body.manual article.main-content"),c=t.title,u=l.querySelector("h1").textContent;t.title=u+" — "+c;o.qsa("h2, h3, h4, h5, h6",l).forEach(function(e,n){var t=e.lastChild,a=t.nodeValue,r=t.parentNode,i=o.create("a","heading-anchor");e.setAttribute("id","sec-"+n);if(t&&t.nodeType===Node.COMMENT_NODE&&/\s?\#[\w\_\-]+\s?/.test(a)){e.setAttribute("id",a.replace(/\s?\#([\w\_\-]+)\s?/i,"$1"));o.remove(t,r)}a=e.getAttribute("id");i.innerHTML="點此獲取本節網址";i.addEventListener("click",function(e){e.preventDefault();location.hash=a});o.setAttr(i,{hidden:"hidden",title:"點此獲取本節網址",href:"#"+a});r.appendChild(i)});o.qsa("div.info, .example, pre, table",l).forEach(function(e,n){if(!e.getAttribute("id")){e.setAttribute("id","info-"+n)}});var d=o.qsa("nav.layout ol ol"),g=1e3,f=new RegExp("/manual/?$","i").test(location.href.replace(location.hash,"")),b=function(){var e;s.scrollTop=1;e=s.scrollTop==1?s:i;e.scrollTop=0;return e}();function m(e){return new RegExp("^"+location.href.replace(location.hash,"").replace(/\/$/,""),"i").test(e)}function h(e,n){var a=e?t.querySelector(e)||null:null,i=n!==false?function(){location.hash=e}:null;if(!a){return}p(a.offsetTop+1.5*r,100,i)}function p(e,n,t){if(n<=0){if(t){t()}return}var a=b.scrollTop,r=e-a,i=r/n*10;setTimeout(function(){b.scrollTop=a+i;p(e,n-10,t||null)},10)}d.forEach(function(e){e.addEventListener("click",function(e){var n=e.target&&e.target.nodeName==="A"?e.target:null;if(!e.metaKey&&n&&!f&&m(n.href)){e.preventDefault();if(n.hash){h(n.hash)}else{p(0,70,function(){location.hash=""})}}},true)});void["hashchange","DOMContentLoaded"].forEach(function(e){n.addEventListener(e,function(){setTimeout(function(){h(location.hash,false)},100)})});var v=t.querySelector("nav.layout"),E=4.5*r;n.addEventListener("scroll",function(){if(b.scrollTop>=E&&s.getAttribute("data-js-fixed-nav")!==true){s.setAttribute("data-js-fixed-nav",true)}else{s.removeAttribute("data-js-fixed-nav")}});void["mousewheel","DOMMouseScroll"].forEach(function(e){t.addEventListener(e,function(e){v.addEventListener("mouseover",function(){e.preventDefault()})})});n.addEventListener("DOMContentLoaded",function(){var e=v.offsetHeight+2*r;l.style.minHeight=e+"px"});var _=o.qsa(".itff",l);_.forEach(function(e,n){var t=e.innerHTML,a=o.create("iframe"),r,i,s,l;e.style.height=e.offsetHeight+"px";e.innerHTML="";a.setAttribute("src","/itff.html");e.appendChild(a);r=a.contentWindow;r.addEventListener("DOMContentLoaded",function(){i=a.contentDocument;ifroot=i.documentElement;s=i.body;l=o.create("div","wrapper");l.innerHTML=t;s.replaceChild(l,o.id("replacee",i));r.Han.init()})});var N=e("highlight.js");N.initHighlightingOnLoad();var w=e("./share.js")("footer ul.share",{via:"ethantw",desc:"〔分享〕漢字標準格式：印刷品般的漢字排版框架"})}(window,window.document)},{"./lib/yijun.js":11,"./share.js":13,"highlight.js":2}],13:[function(e,n,t){var a=e("./lib/yijun.js");var r=document.title,i=location,s={via:"",desc:""},o={share2twr:"https://twitter.com/intent/tweet?original_referer=%url&text=%desc&url=%url&via=%via",share2fb:"https://www.facebook.com/sharer/sharer.php?u=%url",share2goog:"https://plus.google.com/share?url=%url",share2wbo:"http://service.weibo.com/share/share.php?url=%url&title=%desc"};function l(e,n){document.querySelector(e).addEventListener("click",function(e){var t=e.target.nodeName,a=e.target.getAttribute("id"),s;if(t==="BUTTON"&&o[a]){s=o[a].replace(/\%url/g,i).replace("%via",n.via).replace("%desc",r);window.open(s,"win-share-dialog","width=626,height=436,left=120,top=120")}})}n.exports=function(e,n){var n=a.extend(s,n);l(e,n)}},{"./lib/yijun.js":11}]},{},[12]);