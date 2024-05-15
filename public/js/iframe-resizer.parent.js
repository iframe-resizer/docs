/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/parent 5.0.0-beta.5 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="[iframe-resizer]";let i={},t=!1;const n=i=>`${e}[${function(e){return window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}(i)}]`,o=(e,i,...t)=>window?.console[e](n(i),...t),r=(e,...n)=>!0===(e=>i[e]?i[e].log:t)(e)?o("log",e,...n):null,a=(e,...i)=>o("warn",e,...i),s=(i,t)=>console?.warn((e=>i=>window.chrome?e(i.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(i.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((i=>(...t)=>[`${e}[${i}]`,...t].join(" "))(i))(t)),l="5.0.0-beta.5",c="[iFrameSizer]",d=c.length,u=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),f=(e,i,t,n)=>e.addEventListener(i,t,n||!1),p=(e,i,t)=>e.removeEventListener(i,t,!1),m=e=>{if(!e)return"";let i=-559038744,t=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),i=Math.imul(i^n,2246822519),t=Math.imul(t^n,3266489917);return i^=Math.imul(i^t>>>15,1935289751),t^=Math.imul(t^i>>>15,3405138345),i^=t>>>16,t^=i>>>16,(2097152*(t>>>0)+(i>>>11)).toString(36)},h=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),g=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],y=["NWSc3","ihzpj","wyvmlzzpvuhs","ibzpulzz","vlt"],w=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,i)=>[e,Math.max(0,i-1)]))),b=e=>h(g[e]);var v=e=>{const i=e[h("spjluzl")];if(!i)return-1;const t=i.split("-");let n=function(e=""){let i=-2;const t=m(h(e));return t in w&&(i=w[t]),i}(t[0]);return 0===n||(e=>e[2]===m(e[0]+e[1]))(t)||(n=-2),n};var z={};var $=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof z[e.id].onInit&&(s(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),z[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),j={position:null,version:l};function k(e){function i(){W(P),S(D),O("onResized",P)}function t(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function n(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){return A.slice(A.indexOf(":")+7+e)}const s=(e,i)=>(t,n)=>{const o={};var r,a;r=function(){F(`Send ${e} (${t})`,`${e}:${i()}`,n)},o[a=n]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},l=(e,i)=>()=>{const t=i=>()=>{z[a]?e(i,a):o()};function n(e,n){r(a,`${e} listeners for send${i}`),n(window,"scroll",t("scroll")),n(window,"resize",t("resize window"))}function o(){n("Remove ",p),s.disconnect(),l.disconnect()}const a=D,s=new ResizeObserver(t("page observed")),l=new ResizeObserver(t("iframe observed"));n("Add ",f),s.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),l.observe(z[a].iframe,{attributes:!0,childList:!1,subtree:!1}),z[a]&&(z[a][`stop${i}`]=o)},u=e=>()=>{e in z[D]&&(z[D][e](),delete z[D][e])},m=s("pageInfo",(function(){const e=document.body.getBoundingClientRect(),i=P.iframe.getBoundingClientRect(),{scrollY:t,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(i.top-e.top,10),offsetLeft:parseInt(i.left-e.left,10),scrollTop:t,scrollLeft:n,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),h=s("parentInfo",(function(){const{iframe:e}=P,{scrollWidth:i,scrollHeight:t}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:i,scrollHeight:t},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}})})),g=l(m,"PageInfo"),y=l(h,"ParentInfo"),w=u("stopPageInfo"),b=u("stopParentInfo");function v(e){const i=e.getBoundingClientRect();return M(D),{x:Number(i.left)+Number(j.position.x),y:Number(i.top)+Number(j.position.y)}}function $(e){const i=e?v(P.iframe):{x:0,y:0};let t=((e,i)=>({x:e.width+i.x,y:e.height+i.y}))(P,i);r(D,`Reposition requested from iFrame (offset x:${i.x} y:${i.y})`),window.top===window.self?(j.position=t,k(),r(D,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):a(D,"Unable to scroll to requested position, window.parentIFrame not found")}function k(){!1!==O("onScroll",j.position)?S(D):x()}function T(e){let i={};if(0===P.width&&0===P.height){const e=o(9).split(":");i={x:e[1],y:e[0]}}else i={x:P.width,y:P.height};O(e,{iframe:P.iframe,screenX:Number(i.x),screenY:Number(i.y),type:P.type})}const O=(e,i)=>R(D,e,i);let A=e.data,P={},D=null;"[iFrameResizerChild]Ready"!==A?c===`${A}`.slice(0,d)&&A.slice(d).split(":")[0]in z?(P=function(){const e=A.slice(d).split(":"),i=e[1]?Number(e[1]):0,o=z[e[0]]?.iframe,r=getComputedStyle(o);return{iframe:o,id:e[0],height:i+t(r)+n(r),width:Number(e[2]),type:e[3]}}(),D=P.id,D?(function(e){if(!z[e])throw new Error(`${P.type} No settings for ${e}. Message was: ${A}`)}(D),function(){const e=P.type in{true:1,false:1,undefined:1};return e&&r(D,"Ignoring init message from meta parent page"),e}()||(r(D,`Received: ${A}`),z[D].loaded=!0,function(){let e=!0;return null===P.iframe&&(a(D,`The iframe (${P.id}) was not found.`),e=!1),e}()&&function(){const{origin:i,sameDomain:t}=e;if(t)return!0;let n=z[D]?.checkOrigin;if(n&&"null"!=`${i}`&&!(n.constructor===Array?function(){let e=0,t=!1;for(r(D,`Checking connection is from allowed list of origins: ${n}`);e<n.length;e++)if(n[e]===i){t=!0;break}return t}():function(){const e=z[D]?.remoteHost;return r(D,`Checking connection is from: ${e}`),i===e}()))throw new Error(`Unexpected message received from: ${i} for ${P.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(z[D]?.firstRun&&z[D]&&(z[D].firstRun=!1),P.type){case"close":I(P.iframe);break;case"message":e=o(6),r(D,`onMessage passed: {iframe: ${P.iframe.id}, message: ${e}}`),O("onMessage",{iframe:P.iframe,message:JSON.parse(e)}),r(D,"--");break;case"mouseenter":T("onMouseEnter");break;case"mouseleave":T("onMouseLeave");break;case"autoResize":z[D].autoResize=JSON.parse(o(9));break;case"scrollTo":$(!1);break;case"scrollToOffset":$(!0);break;case"pageInfo":m("start",D),g();break;case"parentInfo":h("start",D),y();break;case"pageInfoStop":w();break;case"parentInfoStop":b();break;case"inPageLink":!function(e){const i=e.split("#")[1]||"",t=decodeURIComponent(i);let n=document.getElementById(t)||document.getElementsByName(t)[0];n?function(){const e=v(n);r(D,`Moving to in page link (#${i}) at x: ${e.x} y: ${e.y}`),j.position={x:e.x,y:e.y},k(),r(D,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(i):r(D,`In page link #${i} not found and window.parentIFrame not found`):r(D,`In page link #${i} not found`)}(o(9));break;case"reset":E(P);break;case"init":i(),function(e){try{z[e].sameDomain=!!z[e]?.iframe?.contentWindow?.iframeChildListener}catch(i){z[e].sameDomain=!1}r(e,`sameDomain: ${z[e].sameDomain}`)}(D),C=!0,O("onReady",P.iframe);break;default:if(0===P.width&&0===P.height)return void a(`Unsupported message received (${P.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===P.width||0===P.height)return void r(D,"Ignoring message with 0 height or width");if(document.hidden)return void r(D,"Page hidden - ignored resize request");i()}var e}())):a("iframeResizer received messageData without id, message was: ",A)):r(D,"Ignored:",A):Object.keys(z).forEach((e=>{z[e].mode>=0&&F("iFrame requested init",N(e),e)}))}function R(e,i,t){let n=null,o=null;if(z[e]){if(n=z[e][i],"function"!=typeof n)throw new TypeError(`${i} on iFrame[${e}] is not a function`);o=n(t)}return o}function T(e){const i=e.id;delete z[i]}function I(e){const i=e.id;if(!1!==R(i,"onClose",i)){r(i,`Removing iFrame: ${i}`);try{e.parentNode&&e.remove()}catch(e){a(e)}R(i,"onClosed",i),r(i,"--"),T(e)}else r(i,"Close iframe cancelled by onClose event")}function M(e){null===j.position&&(j.position={x:window.scrollX,y:window.scrollY},r(e,`Get page position: ${j.position.x}, ${j.position.y}`))}function x(){j.position=null}function S(e){null!==j.position&&(window.scrollTo(j.position.x,j.position.y),r(e,`Set page position: ${j.position.x}, ${j.position.y}`),x())}function E(e){r(e.id,"Size reset requested by "+("init"===e.type?"parent page":"child page")),M(e.id),W(e),F("reset","reset",e.id)}function W(e){const i=e.id;function t(t){const n=`${e[t]}px`;e.iframe.style[t]=n,r(i,`IFrame (${i}) ${t} set to ${n}`)}z[i].sizeHeight&&t("height"),z[i].sizeWidth&&t("width")}function F(e,i,t,n){z[t]&&(z[t]?.postMessageTarget?function(){const{postMessageTarget:n,targetOrigin:o}=z[t];if(z[t].sameDomain)try{return z[t].iframe.contentWindow.iframeChildListener(c+i),void r(t,`[${e}] Sending message to iframe[${t}] (${i}) via sameDomain`)}catch(e){r(t,"Same domain connection failed. Trying cross domain"),z[t].sameDomain=!1}r(t,`[${e}] Sending message to iframe[${t}] (${i}) targetOrigin: ${o}`),n.postMessage(c+i,o)}():a(t,`[${e}] IFrame(${t}) not found`),n&&z[t]?.warningTimeout&&(z[t].msgTimeout=setTimeout((function(){void 0!==z[t]&&(z[t].loaded||z[t].loadErrorShown||(z[t].loadErrorShown=!0,s(t,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${t}</>) has not responded within ${z[t].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)))}),z[t].warningTimeout)))}function N(e){const i=z[e];return[e,"8",i.sizeWidth,i.log,"32",i.enablePublicMethods,i.autoResize,i.bodyMargin,i.heightCalculationMethod,i.bodyBackground,i.bodyPadding,i.tolerance,i.inPageLinks,"child",i.widthCalculationMethod,i.mouseEvents,i.offsetHeight,i.offsetWidth,i.sizeHeight,i.license,j.version,i.mode].join(":")}i=z;let O=0,C=!1,A=!1;var P=e=>i=>{function n(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&s(c,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}const c=function(n){if(n&&"string"!=typeof n)throw new TypeError("Invaild id for iFrame. Expected String");var o;return""!==n&&n||(i.id=n=function(){let i=e?.id||$.id+O++;return null!==document.getElementById(i)&&(i+=O++),i}(),o=(e||{}).log,t=o,r(n,`Added missing iframe ID: ${n} (${i.src})`)),n}(i.id);return c in z&&"iFrameResizer"in i?a(c,"Ignored iFrame, already setup."):(function(e){var t,o;z[c]={iframe:i,firstRun:!0,remoteHost:i?.src.split("/").slice(0,3).join("/"),...$,...n(e),mode:v(e)},function(){if("horizontal"===z[c].direction)return z[c].sizeWidth=!0,z[c].sizeHeight=!1,void r(c,'Direction set to "horizontal"');if("none"===z[c].direction)return z[c].sizeWidth=!1,z[c].sizeHeight=!1,z[c].autoResize=!1,void r(c,'Direction set to "none"');if("vertical"!==z[c].direction)throw new TypeError(c,`Direction value of "${z[c].direction}" is not valid`);r(c,'Direction set to "vertical"')}(),t=e?.offset,t&&("vertical"===z[c].direction?(z[c].offsetHeight=t,r(c,`Offset height set to ${t}`)):(z[c].offsetWidth=t,r(c,`Offset width set to ${t}`))),null===z[c].postMessageTarget&&(z[c].postMessageTarget=i.contentWindow),z[c].targetOrigin=!0===z[c].checkOrigin?""===(o=z[c].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*"}(e),function(){const{mode:e}=z[c];e<0&&s("Parent",`${b(e+2)}${b(2)}`),A||e<0||(A=!0,((e,...i)=>{o("info",e,...i)})(`v${l} (${(e=>h(y[e]))(e)})`),e<1&&s("Parent",b(3)))}(),H(),function(){switch(r(c,`IFrame scrolling ${z[c]?.scrolling?"enabled":"disabled"} for ${c}`),i.style.overflow=!1===z[c]?.scrolling?"hidden":"auto",z[c]?.scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=z[c]?z[c].scrolling:"no"}}(),function(){const{bodyMargin:e}=z[c];"number"!=typeof e&&"0"!==e||(z[c].bodyMargin=`${e}px`)}(),function(e){const{id:t}=i;z[c].mode>=0&&(f(i,"load",(function(){F("iFrame.onload",`${e}:${C}`,t,!0),function(){const e=z[c]?.firstRun,t=z[c]?.heightCalculationMethod in u;!e&&t&&E({iframe:i,height:0,width:0,type:"init"})}()})),F("init",`${e}:${C}`,t,!0))}(N(c)),function(){if(z[c]){const e={close:I.bind(null,z[c].iframe),disconnect:T.bind(null,z[c].iframe),removeListeners(){s(c,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:F.bind(null,"Window resize","resize",c),moveToAnchor(e){F("Move to anchor",`moveToAnchor:${e}`,c)},sendMessage(e){F("Send Message",`message:${e=JSON.stringify(e)}`,c)}};z[c].iframe.iframeResizer=e,z[c].iframe.iFrameResizer=e}}()),i?.iFrameResizer};function D(){!1===document.hidden&&(r("document","Trigger event: Visibility change"),function(e,i){const t=e=>z[e]?.autoResize&&!z[e]?.firstRun;Object.keys(z).forEach((function(n){t(n)&&F(e,i,n)}))}("Tab Visible","resize"))}const H=(e=>{let i=!1;return function(){return i?void 0:(i=!0,Reflect.apply(e,this,arguments))}})((()=>{f(window,"message",k),f(document,"visibilitychange",D),window.iframeParentListener=e=>k({data:e,sameDomain:!0})})),L="[iframeResizer] ";window.iframeResize=function(){function e(e){switch(!0){case!e:throw new TypeError(`${L}iframe is not defined`);case!e.tagName:throw new TypeError(`${L}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${L}Expected <IFRAME> tag, found <${e.tagName}>`);default:i(e),t.push(e)}}let i,t;return function(n,o){if("undefined"==typeof window)return[];switch(i=P(n),t=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${L}Unexpected data type (${typeof o})`)}return Object.freeze(t)}}(),window.iFrameResize=function(...e){s("","Deprecated: iFrameResize(), please use iframeResize()"),window.iframeResize(...e)}}();
//# sourceMappingURL=iframe-resizer.parent.js.map
