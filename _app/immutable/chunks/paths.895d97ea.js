import{X as u,s as l}from"./index.34f8fa1a.js";const n=[];function d(t,o){return{subscribe:p(t,o).subscribe}}function p(t,o=u){let i;const r=new Set;function c(e){if(l(t,e)&&(t=e,i)){const b=!n.length;for(const s of r)s[1](),n.push(s,t);if(b){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function f(e){c(e(t))}function a(e,b=u){const s=[e,b];return r.add(s),r.size===1&&(i=o(c)||u),e(t),()=>{r.delete(s),r.size===0&&(i(),i=null)}}return{set:c,update:f,subscribe:a}}const h="/cats-on-maps",m=__sveltekit_1x3fm44.assets;export{m as a,h as b,d as r,p as w};
