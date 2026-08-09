import { readFileSync, writeFileSync } from "node:fs";

const target = new URL("../assets/page-GeminiSequence-v29.js", import.meta.url);
let source = readFileSync(target, "utf8");

function replaceOnce(before, after, label) {
  const matches = source.split(before).length - 1;
  if (matches !== 1) {
    throw new Error(`${label}: expected one match, found ${matches}`);
  }
  source = source.replace(before, after);
}

function replaceRange(start, end, replacement, label) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  if (startIndex < 0 || endIndex < 0) {
    throw new Error(`${label}: range not found`);
  }
  source =
    source.slice(0, startIndex) +
    replacement +
    source.slice(endIndex);
}

replaceOnce(
  "kr=`bosco:intro:v21`,Ar=[`greeting`,`thinking`,`verdict`,`completed`]",
  "kr=`bosco:intro:v29-gemini-sequence`,Ar=[`welcome`,`thinking`,`doubleCheck`,`answer`,`completed`]",
  "intro constants",
);
replaceOnce(
  "function Mr(e){return e<2500?`greeting`:e<7e3?`thinking`:e<8e3?`verdict`:`completed`}",
  "function Mr(e){return e<2500?`welcome`:`thinking`}",
  "intro clock",
);
replaceOnce(
  "[w,ee]=(0,r.useState)(`greeting`)",
  "[w,ee]=(0,r.useState)(`welcome`)",
  "initial state",
);
replaceOnce(
  "ot=(0,r.useRef)(p),W=(0,r.useRef)(null),K=(0,r.useRef)([])",
  "ot=(0,r.useRef)(p),W=(0,r.useRef)(null),_boscoJob=(0,r.useRef)(null),_boscoRun=(0,r.useRef)(null),_boscoStart=(0,r.useRef)(null),_boscoSettle=(0,r.useRef)(null),K=(0,r.useRef)([])",
  "sequence refs",
);

const introEffect = "(0,r.useEffect)(()=>{if(!A||!o)return;";
replaceRange(
  "let Q=(0,r.useCallback)",
  introEffect,
  [
    "let Q=(0,r.useCallback)((t,n)=>{let r=W.current;if(r!==null&&!Nr(r,t)||r===t)return;if(W.current=t,ee(t),t===`welcome`){g(`resting`),b(Mn(`resting`)),Le(`idle`),C(jr(e.firstName));return}if(t===`thinking`){g(`sea`),b(Mn(`sea`)),Le(`observing`),C(`Mmmmh… laisse-moi deux minutes.`),window.setTimeout(()=>_boscoStart.current?.(),0);return}if(t===`doubleCheck`){g(`sea`),b(Mn(`sea`)),Le(`observing`),n&&C(n);return}let i=ot.current;g(i.pose),b(Ln(i.decision)),Le(`idle`),C(i.dialogue)},[e.firstName]),",
    "_boscoLaunch=(0,r.useCallback)(()=>{let t=_boscoJob.current;if(!t||_boscoRun.current===t.key)return;_boscoRun.current=t.key;let n=()=>_boscoRun.current===t.key&&_boscoJob.current?.key===t.key,i=(e,r)=>{if(!n())return;let a={...t.local,dialogue:e};ot.current=a,m(a),r&&(U.current=U.current.map((n,r,i)=>r===i.length-1&&n===t.local.dialogue?e:n),(()=>{try{t.profile.consentToLocalMemory&&window.localStorage.setItem(Ur,JSON.stringify(U.current))}catch{}})()),Q(`answer`),_boscoSettle.current&&window.clearTimeout(_boscoSettle.current),_boscoSettle.current=window.setTimeout(()=>{if(!n())return;_boscoRun.current=null,Q(`completed`);try{window.sessionStorage.setItem(kr,JSON.stringify({status:`completed`,startedAt:Date.now()}))}catch{}dt.current?.(!0)},1e3)};void(async()=>{if(!t.online){await new Promise(e=>window.setTimeout(e,1800)),i(t.local.dialogue,!1);return}let e=await requestBoscoGeneratedDialogue(t.result,t.input,t.profile,t.time,t.safetyPriority,5500);if(!n())return;if(e){i(e,!0);return}let r=[`Attends voir, matelot… j’aime pas trancher quand j’ai un doute.`,`Bouge pas, matelot… je veux être sûr de mon coup.`,`Mmmmh… attends encore un peu. Y a quelque chose qui me chiffonne.`,`Deux secondes, matelot… je préfère regarder deux fois que raconter une ânerie.`],a=[...t.key].reduce((e,t)=>(31*e+t.charCodeAt(0))>>>0,0);Q(`doubleCheck`,r[a%r.length]);let[o]=await Promise.all([requestBoscoGeneratedDialogue(t.result,t.input,t.profile,t.time,t.safetyPriority,2e3),new Promise(e=>window.setTimeout(e,1800))]);n()&&i(o??t.local.dialogue,!!o)})()},[Q]);",
    "(0,r.useEffect)(()=>{_boscoStart.current=_boscoLaunch},[_boscoLaunch]);",
  ].join(""),
  "intro stage and answer sequence",
);

replaceOnce(
  "if(t?.status===`completed`){let e=window.setTimeout(()=>Q(`completed`),0);return()=>window.clearTimeout(e)}t?.status===`running`",
  "t?.status===`running`",
  "completed session restart",
);
replaceOnce(
  "window.sessionStorage.getItem(`bosco:intro:v21`)",
  "window.sessionStorage.getItem(kr)",
  "intro session key read",
);
replaceOnce(
  "if(Q(n),n===`completed`){t!==null&&window.clearInterval(t);try{window.sessionStorage.setItem(kr,JSON.stringify({status:`completed`,startedAt:e}))}catch{}dt.current?.(!0)}",
  "Q(n),n===`thinking`&&t!==null&&window.clearInterval(t)",
  "intro ticker",
);
replaceOnce(
  "W.current!==`completed`&&(t=window.setInterval(n,100))",
  "W.current!==`thinking`&&(t=window.setInterval(n,100))",
  "intro interval stop",
);

const evaluationStart = "(0,r.useEffect)(()=>{if(!o||!A)return;let t=ur(d,e,U.current)";
const labEffect = "(0,r.useEffect)(()=>{if(!N||!A)return;";
replaceRange(
  evaluationStart,
  labEffect,
  "(0,r.useEffect)(()=>{if(!o||!A)return;let t=ur(d,e,U.current),n=wr(t,d,O),r=it.current.get(n);if(!r){let i=n;r=Tr({result:t,input:d,profile:e,timeOfDay:O,consultationId:n},nt.current,i),it.current.set(n,r),nt.current=[...nt.current,Er(r,new Date().toISOString())].slice(-20)}let i={...t,dialogue:r.message};we(r.debug),U.current=[...U.current,i.dialogue].slice(-12),ot.current=i,m(i),_boscoJob.current={key:n,result:t,input:d,profile:e,time:O,safetyPriority:r.safetyPriority,local:i,online:d.connection.online&&d.data.status===`complete`};try{e.consentToLocalMemory&&(window.localStorage.setItem(Ur,JSON.stringify(U.current)),window.localStorage.setItem(dr,JSON.stringify(nt.current)),window.localStorage.setItem(Hr,JSON.stringify({firstName:e.firstName,craftType:e.craftType,level:e.level,favoriteSpot:e.favoriteSpot,units:e.units,lastSelectedSpot:d.spot.name,lastBriefingAt:new Date().toISOString(),lastDecision:i.decision,lastScore:i.score})))}catch{}let a=W.current;a&&a!==`welcome`&&(_boscoRun.current=null,a!==`thinking`?(W.current=null,Q(`thinking`)):window.setTimeout(()=>_boscoStart.current?.(),0))},[A,O,d,e,o,Q]),",
  "weather evaluation",
);

replaceOnce(
  "let At=e.firstName||`Bosco`,jt=(0,r.useMemo)(()=>!N||!xe?p:{...p,decision:F,label:Kr[F],score:he,dialogue:xe.message},[F,xe,N,he,p])",
  "let At=e.firstName||`Bosco`,jt=(0,r.useMemo)(()=>{let e=w===`answer`||w===`completed`?p:{...p,dialogue:x};return!N||!xe?e:{...e,decision:F,label:Kr[F],score:he,dialogue:xe.message}},[w,F,xe,N,he,x,p])",
  "single visible final dialogue",
);
replaceOnce(
  "data-intro-window-look-count\":w===`greeting`?0:1",
  "data-intro-window-look-count\":w===`welcome`?0:1",
  "intro data attribute",
);
replaceOnce(
  "tt.current&&clearTimeout(tt.current),H.current&&clearTimeout(H.current),ct.current?.()",
  "tt.current&&clearTimeout(tt.current),H.current&&clearTimeout(H.current),_boscoSettle.current&&clearTimeout(_boscoSettle.current),ct.current?.()",
  "sequence cleanup",
);

writeFileSync(target, source, "utf8");
console.log(`Patched ${target.pathname}: ${source.length} bytes`);
