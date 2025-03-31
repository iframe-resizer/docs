/*!
 *  @preserve
 *  
 *  @module      iframe-resizer/jquery 5.4.0 (iife) 
 *
 *  @license     GPL-3.0 for non-commercial use only.
 *               For commercial use, you must purchase a license from
 *               https://iframe-resizer.com/pricing
 * 
 *  @description Keep same and cross domain iFrames sized to their content 
 *
 *  @author      David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see         {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2025, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="font-weight: normal;",t=e+"font-style: italic;",i="default",n={collapsed:!1,defaultEvent:void 0,event:void 0,label:"AutoConsoleGroup",showTime:!0},o={profile:0,profileEnd:0,timeStamp:0,trace:0};const{fromEntries:r,keys:s}=Object,a=e=>[e,console[e]],l=e=>t=>[t,function(i){e[t]=i}],c=(e,t)=>r(s(e).map(t));const u=()=>!(typeof window>"u")&&(null==window?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches),d=u()?"color: #A9C7FB;":"color: #135CD2;",f=u()?"color: #E3E3E3;":"color: #1F1F1F;",p="5.4.0",h="[iFrameSizer]",m=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),y=(e,t,i,n)=>e.addEventListener(t,i,n||!1),g=(e,t,i)=>e.removeEventListener(t,i,!1),b=e=>{if(!e)return"";let t=-559038744,i=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),t=Math.imul(t^n,2246822519),i=Math.imul(i^n,3266489917);return t^=Math.imul(t^i>>>15,1935289751),i^=Math.imul(i^t>>>15,3405138345),t^=i>>>16,i^=t>>>16,(2097152*(i>>>0)+(t>>>11)).toString(36)},w=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),v=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.","<iy><yi>Zvsv spjluzl kvlz uva zbwwvya jyvzz-kvthpu</><iy><iy>Av bzl <p>pmyhtl-ylzpgly</> dpao jyvzz kvthpu pmyhtlz fvb ullk lpaoly aol Wyvmlzzpvuhs vy Ibzpulzz spjluzlz. Mvy klahpsz vu bwnyhkl wypjpun wslhzl jvuahja pumv@pmyhtl-ylzpgly.jvt."],z=["NWSc3","zvsv","wyv","ibzpulzz","vlt"],j=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)]))),$=e=>w(v[e]);var k=e=>{const t=e[w("spjluzl")];if(!t)return-1;const i=t.split("-");let n=function(e=""){let t=-2;const i=b(w(e));return i in j&&(t=j[i]),t}(i[0]);return 0===n||(e=>e[2]===b(e[0]+e[1]))(i)||(n=-2),n};const T=e=>e;var M=e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e((e=>e.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,""))(t));const R=(S=function(r={}){const s={},u={},d=[],f={...n,...r};let p;function h(){d.length=0}function m(){delete f.event,h()}const y=()=>!d.some((([e])=>"error"===e||"warn"===e))&&!!f.collapsed;function g(){if(0!==d.length){console[y()?"groupCollapsed":"group"](`%c${f.label}%c ${(e=>{const t=e.event||e.defaultEvent;return t?`${t}`:""})(f)} %c${f.showTime?p:""}`,e,"font-weight: bold;",t);for(const[e,...t]of d)console[e](...t);console.groupEnd(),m()}else m()}function b(){p=function(){const e=new Date,t=(t,i)=>e[t]().toString().padStart(i,"0");return`@ ${t("getHours",2)}:${t("getMinutes",2)}:${t("getSeconds",2)}.${t("getMilliseconds",3)}`}(),queueMicrotask((()=>queueMicrotask(g)))}function w(e,...t){0===d.length&&b(),d.push([e,...t])}function v(e=i,...t){w("log",`${e}: ${performance.now()-s[e]} ms`,...t)}return{...c(f,l(f)),...c(console,(e=>[e,(...t)=>w(e,...t)])),...c(o,a),count:function(e=i){u[e]?u[e]+=1:u[e]=1,w("log",`${e}: ${u[e]}`)},countReset:function(e=i){delete u[e]},endAutoGroup:g,errorBoundary:e=>(...t)=>{let i;try{i=e(...t)}catch(e){w("error",e)}return i},purge:h,time:function(e=i){s[e]=performance.now()},timeEnd:function(e=i){v(e),delete s[e]},timeLog:v}},S?.__esModule?S.default:S);var S;let x={},I=!1;const E=e=>window.top===window.self?`parent(${e})`:`nested parent(${e})`;const O=e=>(t,...i)=>x[t]?.console[e](...i),W=(C="info",(e,...t)=>!0===(e=>x[e]?x[e].log:I)(e)?O(C)(e,...t):null);var C;const L=O("warn"),A=O("event");const F=(e,...t)=>x[e]?x[e].console.warn(M(T)(...t)):queueMicrotask((()=>console?.warn(M((e=>(...t)=>[`iframeResizer(${e})`,...t].join(" "))(e))(...t)))),N=(e=>(t,i="renamed to")=>(n,o,r="",s="")=>e(s,`<rb>Deprecated ${t}(${n.replace("()","")})</>\n\nThe <b>${n}</> ${t.toLowerCase()} has been ${i} <b>${o}</>. ${r}Use of the old ${t.toLowerCase()} will be removed in a future version of <i>iframe-resizer</>.`))(F),B=N("Method"),H=N("Option");var P={};var D=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,heightCalculationMethod:"auto",id:"iFrameResizer",log:!1,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,waitForLoad:!1,warningTimeout:5e3,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof P[e.id].onInit&&(H("init()","onReady()","",e.id),P[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),q={position:null,version:p};function Q(e){function t(){_(R),Y(S),k("onResized",R)}function i(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function n(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}const o=e=>M.slice(M.indexOf(":")+7+e);const r=(e,t)=>(i,n)=>{const o={};var r,s;r=function(){K(`${i} (${e})`,`${e}:${t()}`,n)},o[s=n]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},s=(e,t)=>()=>{let i=!1;const n=t=>()=>{P[l]?i&&i!==t||(e(t,l),i=t,requestAnimationFrame((()=>{i=!1}))):a()},o=n("scroll"),r=n("resize window");function s(e,t){t(window,"scroll",o),t(window,"resize",r)}function a(){s(0,g),c.disconnect(),u.disconnect()}const l=S,c=new ResizeObserver(n("pageObserver")),u=new ResizeObserver(n("iframeObserver"));s(0,y),c.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),u.observe(P[l].iframe,{attributes:!0,childList:!1,subtree:!1}),P[l]&&(P[l][`stop${t}`]=a)},a=e=>()=>{e in P[S]&&(P[S][e](),delete P[S][e])},l=r("pageInfo",(function(){const e=document.body.getBoundingClientRect(),t=R.iframe.getBoundingClientRect(),{scrollY:i,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:i,scrollLeft:n,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),c=r("parentInfo",(function(){const{iframe:e}=R,{scrollWidth:t,scrollHeight:i}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:i},viewport:{width:n,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:l,scale:c}})})),u=s(l,"PageInfo"),m=s(c,"ParentInfo"),b=a("stopPageInfo"),w=a("stopParentInfo");function v(e){const t=e.getBoundingClientRect();return V(),{x:Number(t.left)+Number(q.position.x),y:Number(t.top)+Number(q.position.y)}}function z(e){const t=e?v(R.iframe):{x:0,y:0};W(S,`Reposition requested (offset x:%c${t.x}%c y:%c${t.y})`,d,f,d);const i=((e,t)=>({x:e.width+t.x,y:e.height+t.y}))(R,t),n=window.parentIframe||window.parentIFrame;n?function(t,i){t["scrollTo"+(e?"Offset":"")](i.x,i.y)}(n,i):function(e){q.position=e,j(S)}(i)}function j(e){const{x:t,y:i}=q.position,n=P[e]?.iframe;!1!==k("onScroll",{iframe:n,top:i,left:t,x:t,y:i})?Y(e):X()}function $(e){let t={};if(0===R.width&&0===R.height){const e=o(9).split(":");t={x:e[1],y:e[0]}}else t={x:R.width,y:R.height};k(e,{iframe:R.iframe,screenX:Number(t.x),screenY:Number(t.y),type:R.type})}const k=(e,t)=>J(S,e,t);function T(){switch(P[S]?.firstRun&&P[S]&&(P[S].firstRun=!1),R.type){case"close":Z(R.iframe);break;case"message":i=o(6),k("onMessage",{iframe:R.iframe,message:JSON.parse(i)});break;case"mouseenter":$("onMouseEnter");break;case"mouseleave":$("onMouseLeave");break;case"autoResize":P[S].autoResize=JSON.parse(o(9));break;case"scrollBy":!function(){const e=R.width,t=R.height,i=window.parentIframe||window.parentIFrame||window;W(S,`scrollBy: x: %c${e}%c y: %c${t}`,d,f,d),i.scrollBy(e,t)}();break;case"scrollTo":z(!1);break;case"scrollToOffset":z(!0);break;case"pageInfo":l("start",S),u();break;case"parentInfo":c("start",S),m();break;case"pageInfoStop":b();break;case"parentInfoStop":w();break;case"inPageLink":!function(e){const t=e.split("#")[1]||"",i=decodeURIComponent(t);let n=document.getElementById(i)||document.getElementsByName(i)[0];n?function(){const e=v(n);W(S,`Moving to in page link: %c#${t}`,d),q.position={x:e.x,y:e.y},j(S),window.location.hash=t}():window.top!==window.self&&function(){const e=window.parentIframe||window.parentIFrame;e&&e.moveToAnchor(t)}()}(o(9));break;case"title":!function(e,t){P[t]?.syncTitle&&(P[t].iframe.title=e,W(t,`Set iframe title attribute: %c${e}`,d))}(R.msg,S);break;case"reset":G(R);break;case"init":t(),function(e){try{P[e].sameDomain=!!P[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){P[e].sameDomain=!1}}(S),(e=R.msg)!==p&&(void 0!==e||F(S,"<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")),ie=!0,k("onReady",R.iframe);break;default:if(0===R.width&&0===R.height)return void L(S,`Unsupported message received (${R.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===R.width||0===R.height)return;if(document.hidden)return;t()}var e,i}let M=e.data,R={},S=null;"[iFrameResizerChild]Ready"!==M?h===`${M}`.slice(0,13)&&M.slice(13).split(":")[0]in P&&(R=function(){const e=M.slice(13).split(":"),t=e[1]?Number(e[1]):0,o=P[e[0]]?.iframe,r=getComputedStyle(o);return{iframe:o,id:e[0],height:t+i(r)+n(r),width:Number(e[2]),type:e[3],msg:e[4]}}(),S=R.id,S?(A(S,R.type),P[S].errorBoundary((function(){!function(e){if(!P[e])throw new Error(`${R.type} No settings for ${e}. Message was: ${M}`)}(S),R.type in{true:1,false:1,undefined:1}||(P[S].loaded=!0,(null!==R.iframe||(L(S,`The iframe (${R.id}) was not found.`),0))&&function(){const{origin:t,sameDomain:i}=e;if(i)return!0;let n=P[S]?.checkOrigin;if(n&&"null"!=`${t}`&&!(n.constructor===Array?function(){let e=0,i=!1;for(;e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){const e=P[S]?.remoteHost;return t===e}()))throw new Error(`Unexpected message received from: ${t} for ${R.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&T())}))()):L("","iframeResizer received messageData without id, message was: ",M)):Object.keys(P).forEach((e=>{P[e].mode>=0&&K("iFrame requested init",ee(e),e)}))}function J(e,t,i){let n=null,o=null;if(P[e]){if(n=P[e][t],"function"!=typeof n)throw new TypeError(`${t} on iFrame[${e}] is not a function`);if("onClose"===t||"onScroll"===t)try{o=n(i)}catch(i){console.error(i),L(e,`Error in ${t} callback`)}else setTimeout((()=>n(i)))}return o}function U(e){const{id:t}=e;delete P[t]}function Z(e){const{id:t}=e;if(!1!==J(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){L(t,e)}J(t,"onClosed",t),U(e)}}function V(e){null===q.position&&(q.position={x:window.scrollX,y:window.scrollY})}function X(){q.position=null}function Y(e){null!==q.position&&(window.scrollTo(q.position.x,q.position.y),W(e,`Set page position: %c${q.position.x}%c, %c${q.position.y}`,d,f,d),X())}function G(e){V(e.id),_(e),K("reset","reset",e.id)}function _(e){function t(t){const n=`${e[t]}px`;e.iframe.style[t]=n,W(i,`Set ${t}: %c${n}`,d)}const{id:i}=e,{sizeHeight:n,sizeWidth:o}=P[i];n&&t("height"),o&&t("width")}function K(e,t,i,n){A(i,e),P[i]&&(P[i]?.postMessageTarget?function(){const{iframe:e,postMessageTarget:n,sameDomain:o,targetOrigin:r}=P[i];if(o)try{return void e.contentWindow.iframeChildListener(h+t)}catch(e){}n.postMessage(h+t,r)}():L(i,`Iframe(${i}) not found`),n&&P[i]?.warningTimeout&&(P[i].msgTimeout=setTimeout((function(){if(void 0===P[i])return;const{iframe:e,loaded:t,loadErrorShown:n,waitForLoad:o}=P[i],{sandbox:r}=e;t||n||(P[i].loadErrorShown=!0,F(i,`<rb>No response from iFrame</>\n            \nThe iframe (<i>${i}</>) has not responded within ${P[i].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n${o?"\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n":""}${!(r?.length>0)||r.contains("allow-scripts")&&r.contains("allow-same-origin")?"":"\nThe iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values.\n"} \n${!(r?.length>0)||r.contains("allow-scripts")&&r.contains("allow-same-origin")?"":"The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values.\n"}This message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`))}),P[i].warningTimeout)))}function ee(e){const t=P[e];return[e,"8",t.sizeWidth,t.log,"32",!0,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,t.license,q.version,t.mode].join(":")}x=P;let te=0,ie=!1,ne=!1;var oe=t=>i=>{function n(e){const{id:t}=i,{mode:n,waitForLoad:o}=P[t];-1!==n&&-2!==n&&(y(i,"load",(function(){K("iFrame.onload",`${e}:${ie}`,t,!0),function(){const e=P[u]?.firstRun,t=P[u]?.heightCalculationMethod in m;!e&&t&&G({iframe:i,height:0,width:0,type:"init"})}()})),!1===o&&K("init",`${e}:${ie}`,t,!0))}function o(e){return e?(("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&F(u,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e):{}}function r(){const{mode:i}=P[u];ne||i>0&&t.vInfoDisable||(ne=!0,function(t,i){queueMicrotask((()=>console.info(`%ciframe-resizer ${t}`,I||i<1?"font-weight: bold;":e)))}(`v${p} (${(e=>w(z[e]))(i)})`,i)),i<0?F("Parent",`${$(i+2)}${$(2)}`):i<1&&F("Parent",$(3))}function s(e){const t=P[e]?.iframe?.title;return""===t||void 0===t}const a=e=>Object.hasOwn(e,"onMouseEnter")||Object.hasOwn(e,"onMouseLeave");function l(e){var t,n;P[u]={...P[u],iframe:i,firstRun:!0,remoteHost:i?.src.split("/").slice(0,3).join("/"),...D,...o(e),mouseEvents:a(e),mode:k(e),syncTitle:s(u)},A(u,"setup"),function(){const{direction:e}=P[u];if("horizontal"===e)return P[u].sizeWidth=!0,void(P[u].sizeHeight=!1);if("none"===e)return P[u].sizeWidth=!1,P[u].sizeHeight=!1,void(P[u].autoResize=!1);if("vertical"!==e)throw new TypeError(u,`Direction value of "${e}" is not valid`)}(),(t=e?.offsetSize||e?.offset)&&("vertical"===P[u].direction?P[u].offsetHeight=t:P[u].offsetWidth=t),e?.offset&&F(u,"<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."),null===P[u].postMessageTarget&&(P[u].postMessageTarget=i.contentWindow),P[u].targetOrigin=!0===P[u].checkOrigin?""===(n=P[u].remoteHost)||null!==n.match(/^(about:blank|javascript:|file:\/\/)/)?"*":n:"*"}const c=()=>"iframeResizer"in i,u=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invalid id for iFrame. Expected String");return""!==e&&e||(e=function(){let e=t?.id||D.id+te++;return null!==document.getElementById(e)&&(e+=te++),e}(),i.id=e),e}(i.id);if("object"!=typeof t)throw new TypeError("Options is not an object");return function(e){-1===e?.log&&(e.log=!1,e.vInfoDisable=!0)}(t),function({enabled:e,iframeId:t}){const i=R({label:E(t)});I=e,x[t]||(x[t]={console:i,errorBoundary:i.errorBoundary})}({enabled:Object.hasOwn(t,"log")?t.log:D.log,iframeId:u}),P[u].errorBoundary((function(e){c()?L(u,`Ignored iframe (${u}), already setup.`):(l(e),r(),se(),function(){switch(i.style.overflow=!1===P[u]?.scrolling?"hidden":"auto",P[u]?.scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=P[u]?P[u].scrolling:"no"}}(),function(){const{bodyMargin:e}=P[u];"number"!=typeof e&&"0"!==e||(P[u].bodyMargin=`${e}px`)}(),n(ee(u)),function(){if(P[u]){const{iframe:e}=P[u],t={close:Z.bind(null,e),disconnect:U.bind(null,e),removeListeners(){F(u,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:K.bind(null,"Window resize","resize",u),moveToAnchor(e){K("Move to anchor",`moveToAnchor:${e}`,u)},sendMessage(e){K("message",`message:${e=JSON.stringify(e)}`,u)}};e.iframeResizer=t,e.iFrameResizer=t}}())}))(t),i?.iFrameResizer};function re(){!1===document.hidden&&function(e,t){const i=e=>P[e]?.autoResize&&!P[e]?.firstRun;Object.keys(P).forEach((function(n){i(n)&&K(e,t,n)}))}("Tab Visible","resize")}const se=(e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}})((()=>{y(window,"message",Q),y(document,"visibilitychange",re),window.iframeParentListener=e=>setTimeout((()=>Q({data:e,sameDomain:!0})))}));switch(!0){case void 0===window.jQuery:L("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:L("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:L("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const t=oe(e);return this.filter("iframe").each(((e,i)=>t(i))).end()},window.jQuery.fn.iFrameResize=function(e){return B("iFrameResize()","iframeResize()","","jQuery"),this.iframeResize(e)}}}();
