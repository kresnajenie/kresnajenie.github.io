var ub=Object.defineProperty;var fb=(r,e,t)=>e in r?ub(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Zp=(r,e,t)=>(fb(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="162",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hb=0,Kp=1,db=2,zg=1,pb=2,Xr=3,Ra=0,bi=1,$r=2,Aa=0,Eo=1,jp=2,Jp=3,Qp=4,mb=5,ss=100,gb=101,_b=102,em=103,tm=104,vb=200,xb=201,Mb=202,bb=203,vd=204,xd=205,Sb=206,Eb=207,yb=208,Tb=209,Ab=210,wb=211,Cb=212,Rb=213,Lb=214,Pb=0,Db=1,Ib=2,Iu=3,Ub=4,Nb=5,Fb=6,Ob=7,Gg=0,Bb=1,zb=2,wa=0,Gb=1,Hb=2,kb=3,Vb=4,Wb=5,Xb=6,$b=7,Hg=300,To=301,Ao=302,Md=303,bd=304,Vu=306,Sd=1e3,nr=1001,Ed=1002,Yn=1003,nm=1004,El=1005,Mi=1006,Nh=1007,ls=1008,Ca=1009,qb=1010,Yb=1011,Fd=1012,kg=1013,Ta=1014,Mr=1015,Ul=1016,Vg=1017,Wg=1018,cs=1020,Zb=1021,ir=1023,Kb=1024,jb=1025,us=1026,wo=1027,Xg=1028,$g=1029,Jb=1030,qg=1031,Yg=1033,Fh=33776,Oh=33777,Bh=33778,zh=33779,im=35840,rm=35841,am=35842,sm=35843,Zg=36196,om=37492,lm=37496,cm=37808,um=37809,fm=37810,hm=37811,dm=37812,pm=37813,mm=37814,gm=37815,_m=37816,vm=37817,xm=37818,Mm=37819,bm=37820,Sm=37821,Gh=36492,Em=36494,ym=36495,Qb=36283,Tm=36284,Am=36285,wm=36286,eS=3200,tS=3201,nS=0,iS=1,Ea="",vr="srgb",Da="srgb-linear",Od="display-p3",Wu="display-p3-linear",Uu="linear",_n="srgb",Nu="rec709",Fu="p3",Js=7680,Cm=519,rS=512,aS=513,sS=514,Kg=515,oS=516,lS=517,cS=518,uS=519,Rm=35044,Lm="300 es",yd=1035,qr=2e3,Ou=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const Pl=Math.PI/180,Nl=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function ni(r,e,t){return Math.max(e,Math.min(t,r))}function Bd(r,e){return(r%e+e)%e}function fS(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function hS(r,e,t){return r!==e?(t-r)/(e-r):0}function Dl(r,e,t){return(1-t)*r+t*e}function dS(r,e,t,i){return Dl(r,e,1-Math.exp(-t*i))}function pS(r,e=1){return e-Math.abs(Bd(r,e*2)-e)}function mS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _S(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vS(r,e){return r+Math.random()*(e-r)}function xS(r){return r*(.5-Math.random())}function MS(r){r!==void 0&&(Pm=r);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bS(r){return r*Pl}function SS(r){return r*Nl}function Td(r){return(r&r-1)===0&&r!==0}function ES(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yS(r,e,t,i,s){const o=Math.cos,u=Math.sin,c=o(t/2),f=u(t/2),p=o((e+i)/2),m=u((e+i)/2),x=o((e-i)/2),M=u((e-i)/2),b=o((i-e)/2),w=u((i-e)/2);switch(s){case"XYX":r.set(c*m,f*x,f*M,c*p);break;case"YZY":r.set(f*M,c*m,f*x,c*p);break;case"ZXZ":r.set(f*x,f*M,c*m,c*p);break;case"XZX":r.set(c*m,f*w,f*b,c*p);break;case"YXY":r.set(f*b,c*m,f*w,c*p);break;case"ZYZ":r.set(f*w,f*b,c*m,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const TS={DEG2RAD:Pl,RAD2DEG:Nl,generateUUID:Ro,clamp:ni,euclideanModulo:Bd,mapLinear:fS,inverseLerp:hS,lerp:Dl,damp:dS,pingpong:pS,smoothstep:mS,smootherstep:gS,randInt:_S,randFloat:vS,randFloatSpread:xS,seededRandom:MS,degToRad:bS,radToDeg:SS,isPowerOfTwo:Td,ceilPowerOfTwo:ES,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:yS,normalize:oi,denormalize:vo};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(e,t,i,s,o,u,c,f,p){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,f,p)}set(e,t,i,s,o,u,c,f,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=o,m[5]=f,m[6]=i,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],f=i[6],p=i[1],m=i[4],x=i[7],M=i[2],b=i[5],w=i[8],y=s[0],g=s[3],_=s[6],U=s[1],P=s[4],N=s[7],$=s[2],z=s[5],B=s[8];return o[0]=u*y+c*U+f*$,o[3]=u*g+c*P+f*z,o[6]=u*_+c*N+f*B,o[1]=p*y+m*U+x*$,o[4]=p*g+m*P+x*z,o[7]=p*_+m*N+x*B,o[2]=M*y+b*U+w*$,o[5]=M*g+b*P+w*z,o[8]=M*_+b*N+w*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*c*p-i*o*m+i*c*f+s*o*p-s*u*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8],x=m*u-c*p,M=c*f-m*o,b=p*o-u*f,w=t*x+i*M+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=x*y,e[1]=(s*p-m*i)*y,e[2]=(c*i-s*u)*y,e[3]=M*y,e[4]=(m*t-s*f)*y,e[5]=(s*o-c*t)*y,e[6]=b*y,e[7]=(i*f-p*t)*y,e[8]=(u*t-i*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const f=Math.cos(o),p=Math.sin(o);return this.set(i*f,i*p,-i*(f*u+p*c)+u+e,-s*p,s*f,-s*(-p*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Hh.makeScale(e,t)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new Ft;function jg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AS(){const r=zu("canvas");return r.style.display="block",r}const Dm={};function wS(r){r in Dm||(Dm[r]=!0,console.warn(r))}const Im=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Um=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),su={[Da]:{transfer:Uu,primaries:Nu,toReference:r=>r,fromReference:r=>r},[vr]:{transfer:_n,primaries:Nu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Wu]:{transfer:Uu,primaries:Fu,toReference:r=>r.applyMatrix3(Um),fromReference:r=>r.applyMatrix3(Im)},[Od]:{transfer:_n,primaries:Fu,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Um),fromReference:r=>r.applyMatrix3(Im).convertLinearToSRGB()}},CS=new Set([Da,Wu]),un={enabled:!0,_workingColorSpace:Da,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!CS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=su[e].toReference,s=su[t].fromReference;return s(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return su[r].primaries},getTransfer:function(r){return r===Ea?Uu:su[r].transfer}};function yo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qs;class Jg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=zu("canvas")),Qs.width=e.width,Qs.height=e.height;const i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=yo(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yo(t[i]/255)*255):t[i]=yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class Qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Vh(s[u].image)):o.push(Vh(s[u]))}else o=Vh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Vh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LS=0;class ci extends hs{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,i=nr,s=nr,o=Mi,u=ls,c=ir,f=Ca,p=ci.DEFAULT_ANISOTROPY,m=Ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ro(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Hg;ci.DEFAULT_ANISOTROPY=1;class Zn{constructor(e=0,t=0,i=0,s=1){Zn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const f=e.elements,p=f[0],m=f[4],x=f[8],M=f[1],b=f[5],w=f[9],y=f[2],g=f[6],_=f[10];if(Math.abs(m-M)<.01&&Math.abs(x-y)<.01&&Math.abs(w-g)<.01){if(Math.abs(m+M)<.1&&Math.abs(x+y)<.1&&Math.abs(w+g)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,N=(b+1)/2,$=(_+1)/2,z=(m+M)/4,B=(x+y)/4,ee=(w+g)/4;return P>N&&P>$?P<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(P),s=z/i,o=B/i):N>$?N<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(N),i=z/s,o=ee/s):$<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt($),i=B/o,s=ee/o),this.set(i,s,o,t),this}let U=Math.sqrt((g-w)*(g-w)+(x-y)*(x-y)+(M-m)*(M-m));return Math.abs(U)<.001&&(U=1),this.x=(g-w)/U,this.y=(x-y)/U,this.z=(M-m)/U,this.w=Math.acos((p+b+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zn(0,0,e,t),this.scissorTest=!1,this.viewport=new Zn(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new ci(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends PS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class e_ extends ci{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DS extends ci{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let f=i[s+0],p=i[s+1],m=i[s+2],x=i[s+3];const M=o[u+0],b=o[u+1],w=o[u+2],y=o[u+3];if(c===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(c===1){e[t+0]=M,e[t+1]=b,e[t+2]=w,e[t+3]=y;return}if(x!==y||f!==M||p!==b||m!==w){let g=1-c;const _=f*M+p*b+m*w+x*y,U=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const $=Math.sqrt(P),z=Math.atan2($,_*U);g=Math.sin(g*z)/$,c=Math.sin(c*z)/$}const N=c*U;if(f=f*g+M*N,p=p*g+b*N,m=m*g+w*N,x=x*g+y*N,g===1-c){const $=1/Math.sqrt(f*f+p*p+m*m+x*x);f*=$,p*=$,m*=$,x*=$}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],f=i[s+1],p=i[s+2],m=i[s+3],x=o[u],M=o[u+1],b=o[u+2],w=o[u+3];return e[t]=c*w+m*x+f*b-p*M,e[t+1]=f*w+m*M+p*x-c*b,e[t+2]=p*w+m*b+c*M-f*x,e[t+3]=m*w-c*x-f*M-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,f=Math.sin,p=c(i/2),m=c(s/2),x=c(o/2),M=f(i/2),b=f(s/2),w=f(o/2);switch(u){case"XYZ":this._x=M*m*x+p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x-M*b*w;break;case"YXZ":this._x=M*m*x+p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x+M*b*w;break;case"ZXY":this._x=M*m*x-p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x-M*b*w;break;case"ZYX":this._x=M*m*x-p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x+M*b*w;break;case"YZX":this._x=M*m*x+p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x-M*b*w;break;case"XZY":this._x=M*m*x-p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x+M*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],f=t[9],p=t[2],m=t[6],x=t[10],M=i+c+x;if(M>0){const b=.5/Math.sqrt(M+1);this._w=.25/b,this._x=(m-f)*b,this._y=(o-p)*b,this._z=(u-s)*b}else if(i>c&&i>x){const b=2*Math.sqrt(1+i-c-x);this._w=(m-f)/b,this._x=.25*b,this._y=(s+u)/b,this._z=(o+p)/b}else if(c>x){const b=2*Math.sqrt(1+c-i-x);this._w=(o-p)/b,this._x=(s+u)/b,this._y=.25*b,this._z=(f+m)/b}else{const b=2*Math.sqrt(1+x-i-c);this._w=(u-s)/b,this._x=(o+p)/b,this._y=(f+m)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,f=t._y,p=t._z,m=t._w;return this._x=i*m+u*c+s*p-o*f,this._y=s*m+u*f+o*c-i*p,this._z=o*m+u*p+i*f-s*c,this._w=u*m-i*c-s*f-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=o,this;const f=1-c*c;if(f<=Number.EPSILON){const b=1-t;return this._w=b*u+t*this._w,this._x=b*i+t*this._x,this._y=b*s+t*this._y,this._z=b*o+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,c),x=Math.sin((1-t)*m)/p,M=Math.sin(t*m)/p;return this._w=u*x+this._w*M,this._x=i*x+this._x*M,this._y=s*x+this._y*M,this._z=o*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,f=e.w,p=2*(u*s-c*i),m=2*(c*t-o*s),x=2*(o*i-u*t);return this.x=t+f*p+u*x-c*m,this.y=i+f*m+c*p-o*x,this.z=s+f*x+o*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*u-i*f,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new te,Nm=new La;class ds{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Qi):Qi.fromBufferAttribute(o,u),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ou.copy(i.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),lu.subVectors(this.max,yl),eo.subVectors(e.a,yl),to.subVectors(e.b,yl),no.subVectors(e.c,yl),ma.subVectors(to,eo),ga.subVectors(no,to),Qa.subVectors(eo,no);let t=[0,-ma.z,ma.y,0,-ga.z,ga.y,0,-Qa.z,Qa.y,ma.z,0,-ma.x,ga.z,0,-ga.x,Qa.z,0,-Qa.x,-ma.y,ma.x,0,-ga.y,ga.x,0,-Qa.y,Qa.x,0];return!Xh(t,eo,to,no,lu)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,eo,to,no,lu))?!1:(cu.crossVectors(ma,ga),t=[cu.x,cu.y,cu.z],Xh(t,eo,to,no,lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gr=[new te,new te,new te,new te,new te,new te,new te,new te],Qi=new te,ou=new ds,eo=new te,to=new te,no=new te,ma=new te,ga=new te,Qa=new te,yl=new te,lu=new te,cu=new te,es=new te;function Xh(r,e,t,i,s){for(let o=0,u=r.length-3;o<=u;o+=3){es.fromArray(r,o);const c=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),f=e.dot(es),p=t.dot(es),m=i.dot(es);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>c)return!1}return!0}const IS=new ds,Tl=new te,$h=new te;class Fl{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add($h)),this.expandByPoint(Tl.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hr=new te,qh=new te,uu=new te,_a=new te,Yh=new te,fu=new te,Zh=new te;class t_{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qh.copy(e).add(t).multiplyScalar(.5),uu.copy(t).sub(e).normalize(),_a.copy(this.origin).sub(qh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(uu),c=_a.dot(this.direction),f=-_a.dot(uu),p=_a.lengthSq(),m=Math.abs(1-u*u);let x,M,b,w;if(m>0)if(x=u*f-c,M=u*c-f,w=o*m,x>=0)if(M>=-w)if(M<=w){const y=1/m;x*=y,M*=y,b=x*(x+u*M+2*c)+M*(u*x+M+2*f)+p}else M=o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;else M=-o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;else M<=-w?(x=Math.max(0,-(-u*o+c)),M=x>0?-o:Math.min(Math.max(-o,-f),o),b=-x*x+M*(M+2*f)+p):M<=w?(x=0,M=Math.min(Math.max(-o,-f),o),b=M*(M+2*f)+p):(x=Math.max(0,-(u*o+c)),M=x>0?o:Math.min(Math.max(-o,-f),o),b=-x*x+M*(M+2*f)+p);else M=u>0?-o:o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(qh).addScaledVector(uu,M),b}intersectSphere(e,t){Hr.subVectors(e.center,this.origin);const i=Hr.dot(this.direction),s=Hr.dot(Hr)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,f;const p=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,M=this.origin;return p>=0?(i=(e.min.x-M.x)*p,s=(e.max.x-M.x)*p):(i=(e.max.x-M.x)*p,s=(e.min.x-M.x)*p),m>=0?(o=(e.min.y-M.y)*m,u=(e.max.y-M.y)*m):(o=(e.max.y-M.y)*m,u=(e.min.y-M.y)*m),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),x>=0?(c=(e.min.z-M.z)*x,f=(e.max.z-M.z)*x):(c=(e.max.z-M.z)*x,f=(e.min.z-M.z)*x),i>f||c>s)||((c>i||i!==i)&&(i=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,i,s,o){Yh.subVectors(t,e),fu.subVectors(i,e),Zh.crossVectors(Yh,fu);let u=this.direction.dot(Zh),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;_a.subVectors(this.origin,e);const f=c*this.direction.dot(fu.crossVectors(_a,fu));if(f<0)return null;const p=c*this.direction.dot(Yh.cross(_a));if(p<0||f+p>u)return null;const m=-c*_a.dot(Zh);return m<0?null:this.at(m/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(e,t,i,s,o,u,c,f,p,m,x,M,b,w,y,g){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,f,p,m,x,M,b,w,y,g)}set(e,t,i,s,o,u,c,f,p,m,x,M,b,w,y,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=o,_[5]=u,_[9]=c,_[13]=f,_[2]=p,_[6]=m,_[10]=x,_[14]=M,_[3]=b,_[7]=w,_[11]=y,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/io.setFromMatrixColumn(e,0).length(),o=1/io.setFromMatrixColumn(e,1).length(),u=1/io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(s),p=Math.sin(s),m=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const M=u*m,b=u*x,w=c*m,y=c*x;t[0]=f*m,t[4]=-f*x,t[8]=p,t[1]=b+w*p,t[5]=M-y*p,t[9]=-c*f,t[2]=y-M*p,t[6]=w+b*p,t[10]=u*f}else if(e.order==="YXZ"){const M=f*m,b=f*x,w=p*m,y=p*x;t[0]=M+y*c,t[4]=w*c-b,t[8]=u*p,t[1]=u*x,t[5]=u*m,t[9]=-c,t[2]=b*c-w,t[6]=y+M*c,t[10]=u*f}else if(e.order==="ZXY"){const M=f*m,b=f*x,w=p*m,y=p*x;t[0]=M-y*c,t[4]=-u*x,t[8]=w+b*c,t[1]=b+w*c,t[5]=u*m,t[9]=y-M*c,t[2]=-u*p,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const M=u*m,b=u*x,w=c*m,y=c*x;t[0]=f*m,t[4]=w*p-b,t[8]=M*p+y,t[1]=f*x,t[5]=y*p+M,t[9]=b*p-w,t[2]=-p,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const M=u*f,b=u*p,w=c*f,y=c*p;t[0]=f*m,t[4]=y-M*x,t[8]=w*x+b,t[1]=x,t[5]=u*m,t[9]=-c*m,t[2]=-p*m,t[6]=b*x+w,t[10]=M-y*x}else if(e.order==="XZY"){const M=u*f,b=u*p,w=c*f,y=c*p;t[0]=f*m,t[4]=-x,t[8]=p*m,t[1]=M*x+y,t[5]=u*m,t[9]=b*x-w,t[2]=w*x-b,t[6]=c*m,t[10]=y*x+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,NS)}lookAt(e,t,i){const s=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),va.crossVectors(i,Li),va.lengthSq()===0&&(Math.abs(i.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),va.crossVectors(i,Li)),va.normalize(),hu.crossVectors(Li,va),s[0]=va.x,s[4]=hu.x,s[8]=Li.x,s[1]=va.y,s[5]=hu.y,s[9]=Li.y,s[2]=va.z,s[6]=hu.z,s[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],f=i[8],p=i[12],m=i[1],x=i[5],M=i[9],b=i[13],w=i[2],y=i[6],g=i[10],_=i[14],U=i[3],P=i[7],N=i[11],$=i[15],z=s[0],B=s[4],ee=s[8],De=s[12],C=s[1],G=s[5],Ie=s[9],Ce=s[13],q=s[2],pe=s[6],ue=s[10],xe=s[14],ce=s[3],Me=s[7],be=s[11],Le=s[15];return o[0]=u*z+c*C+f*q+p*ce,o[4]=u*B+c*G+f*pe+p*Me,o[8]=u*ee+c*Ie+f*ue+p*be,o[12]=u*De+c*Ce+f*xe+p*Le,o[1]=m*z+x*C+M*q+b*ce,o[5]=m*B+x*G+M*pe+b*Me,o[9]=m*ee+x*Ie+M*ue+b*be,o[13]=m*De+x*Ce+M*xe+b*Le,o[2]=w*z+y*C+g*q+_*ce,o[6]=w*B+y*G+g*pe+_*Me,o[10]=w*ee+y*Ie+g*ue+_*be,o[14]=w*De+y*Ce+g*xe+_*Le,o[3]=U*z+P*C+N*q+$*ce,o[7]=U*B+P*G+N*pe+$*Me,o[11]=U*ee+P*Ie+N*ue+$*be,o[15]=U*De+P*Ce+N*xe+$*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],f=e[9],p=e[13],m=e[2],x=e[6],M=e[10],b=e[14],w=e[3],y=e[7],g=e[11],_=e[15];return w*(+o*f*x-s*p*x-o*c*M+i*p*M+s*c*b-i*f*b)+y*(+t*f*b-t*p*M+o*u*M-s*u*b+s*p*m-o*f*m)+g*(+t*p*x-t*c*b-o*u*x+i*u*b+o*c*m-i*p*m)+_*(-s*c*m-t*f*x+t*c*M+s*u*x-i*u*M+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8],x=e[9],M=e[10],b=e[11],w=e[12],y=e[13],g=e[14],_=e[15],U=x*g*p-y*M*p+y*f*b-c*g*b-x*f*_+c*M*_,P=w*M*p-m*g*p-w*f*b+u*g*b+m*f*_-u*M*_,N=m*y*p-w*x*p+w*c*b-u*y*b-m*c*_+u*x*_,$=w*x*f-m*y*f-w*c*M+u*y*M+m*c*g-u*x*g,z=t*U+i*P+s*N+o*$;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=U*B,e[1]=(y*M*o-x*g*o-y*s*b+i*g*b+x*s*_-i*M*_)*B,e[2]=(c*g*o-y*f*o+y*s*p-i*g*p-c*s*_+i*f*_)*B,e[3]=(x*f*o-c*M*o-x*s*p+i*M*p+c*s*b-i*f*b)*B,e[4]=P*B,e[5]=(m*g*o-w*M*o+w*s*b-t*g*b-m*s*_+t*M*_)*B,e[6]=(w*f*o-u*g*o-w*s*p+t*g*p+u*s*_-t*f*_)*B,e[7]=(u*M*o-m*f*o+m*s*p-t*M*p-u*s*b+t*f*b)*B,e[8]=N*B,e[9]=(w*x*o-m*y*o-w*i*b+t*y*b+m*i*_-t*x*_)*B,e[10]=(u*y*o-w*c*o+w*i*p-t*y*p-u*i*_+t*c*_)*B,e[11]=(m*c*o-u*x*o-m*i*p+t*x*p+u*i*b-t*c*b)*B,e[12]=$*B,e[13]=(m*y*s-w*x*s+w*i*M-t*y*M-m*i*g+t*x*g)*B,e[14]=(w*c*s-u*y*s-w*i*f+t*y*f+u*i*g-t*c*g)*B,e[15]=(u*x*s-m*c*s+m*i*f-t*x*f-u*i*M+t*c*M)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,f=e.z,p=o*u,m=o*c;return this.set(p*u+i,p*c-s*f,p*f+s*c,0,p*c+s*f,m*c+i,m*f-s*u,0,p*f-s*c,m*f+s*u,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,f=t._w,p=o+o,m=u+u,x=c+c,M=o*p,b=o*m,w=o*x,y=u*m,g=u*x,_=c*x,U=f*p,P=f*m,N=f*x,$=i.x,z=i.y,B=i.z;return s[0]=(1-(y+_))*$,s[1]=(b+N)*$,s[2]=(w-P)*$,s[3]=0,s[4]=(b-N)*z,s[5]=(1-(M+_))*z,s[6]=(g+U)*z,s[7]=0,s[8]=(w+P)*B,s[9]=(g-U)*B,s[10]=(1-(M+y))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=io.set(s[0],s[1],s[2]).length();const u=io.set(s[4],s[5],s[6]).length(),c=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],er.copy(this);const p=1/o,m=1/u,x=1/c;return er.elements[0]*=p,er.elements[1]*=p,er.elements[2]*=p,er.elements[4]*=m,er.elements[5]*=m,er.elements[6]*=m,er.elements[8]*=x,er.elements[9]*=x,er.elements[10]*=x,t.setFromRotationMatrix(er),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u,c=qr){const f=this.elements,p=2*o/(t-e),m=2*o/(i-s),x=(t+e)/(t-e),M=(i+s)/(i-s);let b,w;if(c===qr)b=-(u+o)/(u-o),w=-2*u*o/(u-o);else if(c===Ou)b=-u/(u-o),w=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=m,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=qr){const f=this.elements,p=1/(t-e),m=1/(i-s),x=1/(u-o),M=(t+e)*p,b=(i+s)*m;let w,y;if(c===qr)w=(u+o)*x,y=-2*x;else if(c===Ou)w=o*x,y=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-M,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-b,f[2]=0,f[6]=0,f[10]=y,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const io=new te,er=new Sn,US=new te(0,0,0),NS=new te(1,1,1),va=new te,hu=new te,Li=new te,Fm=new Sn,Om=new La;class Yr{constructor(e=0,t=0,i=0,s=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],f=s[1],p=s[5],m=s[9],x=s[2],M=s[6],b=s[10];switch(t){case"XYZ":this._y=Math.asin(ni(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,b),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,b),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(ni(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-ni(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ni(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(c,b));break;case"XZY":this._z=Math.asin(-ni(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const Bm=new te,ro=new La,kr=new Sn,du=new te,Al=new te,OS=new te,BS=new La,zm=new te(1,0,0),Gm=new te(0,1,0),Hm=new te(0,0,1),zS={type:"added"},GS={type:"removed"},Kh={type:"childadded",child:null},jh={type:"childremoved",child:null};class ui extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new te,t=new Yr,i=new La,s=new te(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Sn},normalMatrix:{value:new Ft}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?du.copy(e):du.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(Al,du,this.up):kr.lookAt(du,Al,this.up),this.quaternion.setFromRotationMatrix(kr),s&&(kr.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(kr),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zS),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GS),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const x=f[p];o(e.shapes,x)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,p=this.material.length;f<p;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),x=u(e.shapes),M=u(e.skeletons),b=u(e.animations),w=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),x.length>0&&(i.shapes=x),M.length>0&&(i.skeletons=M),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=s,i;function u(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ui.DEFAULT_UP=new te(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new te,Vr=new te,Jh=new te,Wr=new te,ao=new te,so=new te,km=new te,Qh=new te,ed=new te,td=new te;class br{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),tr.subVectors(e,t),s.cross(tr);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){tr.subVectors(s,t),Vr.subVectors(i,t),Jh.subVectors(e,t);const u=tr.dot(tr),c=tr.dot(Vr),f=tr.dot(Jh),p=Vr.dot(Vr),m=Vr.dot(Jh),x=u*p-c*c;if(x===0)return o.set(0,0,0),null;const M=1/x,b=(p*f-c*m)*M,w=(u*m-c*f)*M;return o.set(1-b-w,w,b)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wr)===null?!1:Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getInterpolation(e,t,i,s,o,u,c,f){return this.getBarycoord(e,t,i,s,Wr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Wr.x),f.addScaledVector(u,Wr.y),f.addScaledVector(c,Wr.z),f)}static isFrontFacing(e,t,i,s){return tr.subVectors(i,t),Vr.subVectors(e,t),tr.cross(Vr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),tr.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return br.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;ao.subVectors(s,i),so.subVectors(o,i),Qh.subVectors(e,i);const f=ao.dot(Qh),p=so.dot(Qh);if(f<=0&&p<=0)return t.copy(i);ed.subVectors(e,s);const m=ao.dot(ed),x=so.dot(ed);if(m>=0&&x<=m)return t.copy(s);const M=f*x-m*p;if(M<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(i).addScaledVector(ao,u);td.subVectors(e,o);const b=ao.dot(td),w=so.dot(td);if(w>=0&&b<=w)return t.copy(o);const y=b*p-f*w;if(y<=0&&p>=0&&w<=0)return c=p/(p-w),t.copy(i).addScaledVector(so,c);const g=m*w-b*x;if(g<=0&&x-m>=0&&b-w>=0)return km.subVectors(o,s),c=(x-m)/(x-m+(b-w)),t.copy(s).addScaledVector(km,c);const _=1/(g+y+M);return u=y*_,c=M*_,t.copy(i).addScaledVector(ao,u).addScaledVector(so,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xa={h:0,s:0,l:0},pu={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class jt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=un.workingColorSpace){return this.r=e,this.g=t,this.b=i,un.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=un.workingColorSpace){if(e=Bd(e,1),t=ni(t,0,1),i=ni(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=nd(u,o,e+1/3),this.g=nd(u,o,e),this.b=nd(u,o,e-1/3)}return un.toWorkingColorSpace(this,s),this}setStyle(e,t=vr){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vr){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vr){return un.fromWorkingColorSpace(ti.copy(this),e),Math.round(ni(ti.r*255,0,255))*65536+Math.round(ni(ti.g*255,0,255))*256+Math.round(ni(ti.b*255,0,255))}getHexString(e=vr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.fromWorkingColorSpace(ti.copy(this),t);const i=ti.r,s=ti.g,o=ti.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let f,p;const m=(c+u)/2;if(c===u)f=0,p=0;else{const x=u-c;switch(p=m<=.5?x/(u+c):x/(2-u-c),u){case i:f=(s-o)/x+(s<o?6:0);break;case s:f=(o-i)/x+2;break;case o:f=(i-s)/x+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=un.workingColorSpace){return un.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=vr){un.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,i=ti.g,s=ti.b;return e!==vr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xa),this.setHSL(xa.h+e,xa.s+t,xa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xa),e.getHSL(pu);const i=Dl(xa.h,pu.h,t),s=Dl(xa.s,pu.s,t),o=Dl(xa.l,pu.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new jt;jt.NAMES=i_;let HS=0;class Xu extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Eo,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Ra&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vd&&(i.blendSrc=this.blendSrc),this.blendDst!==xd&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Iu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const f=o[c];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends Xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new te,mu=new Rt;class ar{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mu.fromBufferAttribute(this,t),mu.applyMatrix3(e),this.setXY(t,mu.x,mu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),s=oi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),s=oi(s,this.array),o=oi(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class r_ extends ar{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a_ extends ar{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sr extends ar{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kS=0;const Hi=new Sn,id=new ui,oo=new te,Pi=new ds,wl=new ds,$n=new te;class Ia extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?a_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,i){return Hi.makeTranslation(e,t,i),this.applyMatrix4(Hi),this}scale(e,t,i){return Hi.makeScale(e,t,i),this.applyMatrix4(Hi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];wl.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(Pi.min,wl.min),Pi.expandByPoint($n),$n.addVectors(Pi.max,wl.max),Pi.expandByPoint($n)):(Pi.expandByPoint(wl.min),Pi.expandByPoint(wl.max))}Pi.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)$n.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared($n));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],f=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)$n.fromBufferAttribute(c,p),f&&(oo.fromBufferAttribute(e,p),$n.add(oo)),s=Math.max(s,i.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ar(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let ee=0;ee<i.count;ee++)c[ee]=new te,f[ee]=new te;const p=new te,m=new te,x=new te,M=new Rt,b=new Rt,w=new Rt,y=new te,g=new te;function _(ee,De,C){p.fromBufferAttribute(i,ee),m.fromBufferAttribute(i,De),x.fromBufferAttribute(i,C),M.fromBufferAttribute(o,ee),b.fromBufferAttribute(o,De),w.fromBufferAttribute(o,C),m.sub(p),x.sub(p),b.sub(M),w.sub(M);const G=1/(b.x*w.y-w.x*b.y);isFinite(G)&&(y.copy(m).multiplyScalar(w.y).addScaledVector(x,-b.y).multiplyScalar(G),g.copy(x).multiplyScalar(b.x).addScaledVector(m,-w.x).multiplyScalar(G),c[ee].add(y),c[De].add(y),c[C].add(y),f[ee].add(g),f[De].add(g),f[C].add(g))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let ee=0,De=U.length;ee<De;++ee){const C=U[ee],G=C.start,Ie=C.count;for(let Ce=G,q=G+Ie;Ce<q;Ce+=3)_(e.getX(Ce+0),e.getX(Ce+1),e.getX(Ce+2))}const P=new te,N=new te,$=new te,z=new te;function B(ee){$.fromBufferAttribute(s,ee),z.copy($);const De=c[ee];P.copy(De),P.sub($.multiplyScalar($.dot(De))).normalize(),N.crossVectors(z,De);const G=N.dot(f[ee])<0?-1:1;u.setXYZW(ee,P.x,P.y,P.z,G)}for(let ee=0,De=U.length;ee<De;++ee){const C=U[ee],G=C.start,Ie=C.count;for(let Ce=G,q=G+Ie;Ce<q;Ce+=3)B(e.getX(Ce+0)),B(e.getX(Ce+1)),B(e.getX(Ce+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ar(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let M=0,b=i.count;M<b;M++)i.setXYZ(M,0,0,0);const s=new te,o=new te,u=new te,c=new te,f=new te,p=new te,m=new te,x=new te;if(e)for(let M=0,b=e.count;M<b;M+=3){const w=e.getX(M+0),y=e.getX(M+1),g=e.getX(M+2);s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,y),u.fromBufferAttribute(t,g),m.subVectors(u,o),x.subVectors(s,o),m.cross(x),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),p.fromBufferAttribute(i,g),c.add(m),f.add(m),p.add(m),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(y,f.x,f.y,f.z),i.setXYZ(g,p.x,p.y,p.z)}else for(let M=0,b=t.count;M<b;M+=3)s.fromBufferAttribute(t,M+0),o.fromBufferAttribute(t,M+1),u.fromBufferAttribute(t,M+2),m.subVectors(u,o),x.subVectors(s,o),m.cross(x),i.setXYZ(M+0,m.x,m.y,m.z),i.setXYZ(M+1,m.x,m.y,m.z),i.setXYZ(M+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$n.fromBufferAttribute(e,t),$n.normalize(),e.setXYZ(t,$n.x,$n.y,$n.z)}toNonIndexed(){function e(c,f){const p=c.array,m=c.itemSize,x=c.normalized,M=new p.constructor(f.length*m);let b=0,w=0;for(let y=0,g=f.length;y<g;y++){c.isInterleavedBufferAttribute?b=f[y]*c.data.stride+c.offset:b=f[y]*m;for(let _=0;_<m;_++)M[w++]=p[b++]}return new ar(M,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ia,i=this.index.array,s=this.attributes;for(const c in s){const f=s[c],p=e(f,i);t.setAttribute(c,p)}const o=this.morphAttributes;for(const c in o){const f=[],p=o[c];for(let m=0,x=p.length;m<x;m++){const M=p[m],b=e(M,i);f.push(b)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let x=0,M=p.length;x<M;x++){const b=p[x];m.push(b.toJSON(e.data))}m.length>0&&(s[f]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const o=e.morphAttributes;for(const p in o){const m=[],x=o[p];for(let M=0,b=x.length;M<b;M++)m.push(x[M].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new Sn,ts=new t_,gu=new Fl,Wm=new te,lo=new te,co=new te,uo=new te,rd=new te,_u=new te,vu=new Rt,xu=new Rt,Mu=new Rt,Xm=new te,$m=new te,qm=new te,bu=new te,Su=new te;class rr extends ui{constructor(e=new Ia,t=new zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){_u.set(0,0,0);for(let f=0,p=o.length;f<p;f++){const m=c[f],x=o[f];m!==0&&(rd.fromBufferAttribute(x,e),u?_u.addScaledVector(rd,m):_u.addScaledVector(rd.sub(t),m))}t.add(_u)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gu.copy(i.boundingSphere),gu.applyMatrix4(o),ts.copy(e.ray).recast(e.near),!(gu.containsPoint(ts.origin)===!1&&(ts.intersectSphere(gu,Wm)===null||ts.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Vm.copy(o).invert(),ts.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,f=o.attributes.position,p=o.attributes.uv,m=o.attributes.uv1,x=o.attributes.normal,M=o.groups,b=o.drawRange;if(c!==null)if(Array.isArray(u))for(let w=0,y=M.length;w<y;w++){const g=M[w],_=u[g.materialIndex],U=Math.max(g.start,b.start),P=Math.min(c.count,Math.min(g.start+g.count,b.start+b.count));for(let N=U,$=P;N<$;N+=3){const z=c.getX(N),B=c.getX(N+1),ee=c.getX(N+2);s=Eu(this,_,e,i,p,m,x,z,B,ee),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const w=Math.max(0,b.start),y=Math.min(c.count,b.start+b.count);for(let g=w,_=y;g<_;g+=3){const U=c.getX(g),P=c.getX(g+1),N=c.getX(g+2);s=Eu(this,u,e,i,p,m,x,U,P,N),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,y=M.length;w<y;w++){const g=M[w],_=u[g.materialIndex],U=Math.max(g.start,b.start),P=Math.min(f.count,Math.min(g.start+g.count,b.start+b.count));for(let N=U,$=P;N<$;N+=3){const z=N,B=N+1,ee=N+2;s=Eu(this,_,e,i,p,m,x,z,B,ee),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const w=Math.max(0,b.start),y=Math.min(f.count,b.start+b.count);for(let g=w,_=y;g<_;g+=3){const U=g,P=g+1,N=g+2;s=Eu(this,u,e,i,p,m,x,U,P,N),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function VS(r,e,t,i,s,o,u,c){let f;if(e.side===bi?f=i.intersectTriangle(u,o,s,!0,c):f=i.intersectTriangle(s,o,u,e.side===Ra,c),f===null)return null;Su.copy(c),Su.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Su);return p<t.near||p>t.far?null:{distance:p,point:Su.clone(),object:r}}function Eu(r,e,t,i,s,o,u,c,f,p){r.getVertexPosition(c,lo),r.getVertexPosition(f,co),r.getVertexPosition(p,uo);const m=VS(r,e,t,i,lo,co,uo,bu);if(m){s&&(vu.fromBufferAttribute(s,c),xu.fromBufferAttribute(s,f),Mu.fromBufferAttribute(s,p),m.uv=br.getInterpolation(bu,lo,co,uo,vu,xu,Mu,new Rt)),o&&(vu.fromBufferAttribute(o,c),xu.fromBufferAttribute(o,f),Mu.fromBufferAttribute(o,p),m.uv1=br.getInterpolation(bu,lo,co,uo,vu,xu,Mu,new Rt)),u&&(Xm.fromBufferAttribute(u,c),$m.fromBufferAttribute(u,f),qm.fromBufferAttribute(u,p),m.normal=br.getInterpolation(bu,lo,co,uo,Xm,$m,qm,new te),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:f,c:p,normal:new te,materialIndex:0};br.getNormal(lo,co,uo,x.normal),m.face=x}return m}class Ol extends Ia{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],p=[],m=[],x=[];let M=0,b=0;w("z","y","x",-1,-1,i,t,e,u,o,0),w("z","y","x",1,-1,i,t,-e,u,o,1),w("x","z","y",1,1,e,i,t,s,u,2),w("x","z","y",1,-1,e,i,-t,s,u,3),w("x","y","z",1,-1,e,t,i,s,o,4),w("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Sr(p,3)),this.setAttribute("normal",new Sr(m,3)),this.setAttribute("uv",new Sr(x,2));function w(y,g,_,U,P,N,$,z,B,ee,De){const C=N/B,G=$/ee,Ie=N/2,Ce=$/2,q=z/2,pe=B+1,ue=ee+1;let xe=0,ce=0;const Me=new te;for(let be=0;be<ue;be++){const Le=be*G-Ce;for(let Ze=0;Ze<pe;Ze++){const Mt=Ze*C-Ie;Me[y]=Mt*U,Me[g]=Le*P,Me[_]=q,p.push(Me.x,Me.y,Me.z),Me[y]=0,Me[g]=0,Me[_]=z>0?1:-1,m.push(Me.x,Me.y,Me.z),x.push(Ze/B),x.push(1-be/ee),xe+=1}}for(let be=0;be<ee;be++)for(let Le=0;Le<B;Le++){const Ze=M+Le+pe*be,Mt=M+Le+pe*(be+1),oe=M+(Le+1)+pe*(be+1),ye=M+(Le+1)+pe*be;f.push(Ze,Mt,ye),f.push(Mt,oe,ye),ce+=6}c.addGroup(b,ce,De),b+=ce,M+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function li(r){const e={};for(let t=0;t<r.length;t++){const i=Co(r[t]);for(const s in i)e[s]=i[s]}return e}function WS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function s_(r){return r.getRenderTarget()===null?r.outputColorSpace:un.workingColorSpace}const XS={clone:Co,merge:li};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends Xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class o_ extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=qr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ma=new te,Ym=new Rt,Zm=new Rt;class Di extends o_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,Zm),t.subVectors(Zm,Ym)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*i/p,s*=u.width/f,i*=u.height/p}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,ho=1;class YS extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(fo,ho,e,t);s.layers=this.layers,this.add(s);const o=new Di(fo,ho,e,t);o.layers=this.layers,this.add(o);const u=new Di(fo,ho,e,t);u.layers=this.layers,this.add(u);const c=new Di(fo,ho,e,t);c.layers=this.layers,this.add(c);const f=new Di(fo,ho,e,t);f.layers=this.layers,this.add(f);const p=new Di(fo,ho,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,f]=t;for(const p of t)this.remove(p);if(e===qr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,f,p,m]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,p),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(x,M,b),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class l_ extends ci{constructor(e,t,i,s,o,u,c,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,i,s,o,u,c,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZS extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new l_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ol(5,5,5),o=new Pa({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:Aa});o.uniforms.tEquirect.value=t;const u=new rr(s,o),c=t.minFilter;return t.minFilter===ls&&(t.minFilter=Mi),new YS(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}const ad=new te,KS=new te,jS=new Ft;class ba{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ad.subVectors(i,t).cross(KS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ad),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jS.getNormalMatrix(e),s=this.coplanarPoint(ad).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Fl,yu=new te;class c_{constructor(e=new ba,t=new ba,i=new ba,s=new ba,o=new ba,u=new ba){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qr){const i=this.planes,s=e.elements,o=s[0],u=s[1],c=s[2],f=s[3],p=s[4],m=s[5],x=s[6],M=s[7],b=s[8],w=s[9],y=s[10],g=s[11],_=s[12],U=s[13],P=s[14],N=s[15];if(i[0].setComponents(f-o,M-p,g-b,N-_).normalize(),i[1].setComponents(f+o,M+p,g+b,N+_).normalize(),i[2].setComponents(f+u,M+m,g+w,N+U).normalize(),i[3].setComponents(f-u,M-m,g-w,N-U).normalize(),i[4].setComponents(f-c,M-x,g-y,N-P).normalize(),t===qr)i[5].setComponents(f+c,M+x,g+y,N+P).normalize();else if(t===Ou)i[5].setComponents(c,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(yu.x=s.normal.x>0?e.max.x:e.min.x,yu.y=s.normal.y>0?e.max.y:e.min.y,yu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let r=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function JS(r,e){const t=e.isWebGL2,i=new WeakMap;function s(p,m){const x=p.array,M=p.usage,b=x.byteLength,w=r.createBuffer();r.bindBuffer(m,w),r.bufferData(m,x,M),p.onUploadCallback();let y;if(x instanceof Float32Array)y=r.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)y=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)y=r.SHORT;else if(x instanceof Uint32Array)y=r.UNSIGNED_INT;else if(x instanceof Int32Array)y=r.INT;else if(x instanceof Int8Array)y=r.BYTE;else if(x instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:w,type:y,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:b}}function o(p,m,x){const M=m.array,b=m._updateRange,w=m.updateRanges;if(r.bindBuffer(x,p),b.count===-1&&w.length===0&&r.bufferSubData(x,0,M),w.length!==0){for(let y=0,g=w.length;y<g;y++){const _=w[y];t?r.bufferSubData(x,_.start*M.BYTES_PER_ELEMENT,M,_.start,_.count):r.bufferSubData(x,_.start*M.BYTES_PER_ELEMENT,M.subarray(_.start,_.start+_.count))}m.clearUpdateRanges()}b.count!==-1&&(t?r.bufferSubData(x,b.offset*M.BYTES_PER_ELEMENT,M,b.offset,b.count):r.bufferSubData(x,b.offset*M.BYTES_PER_ELEMENT,M.subarray(b.offset,b.offset+b.count)),b.count=-1),m.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m&&(r.deleteBuffer(m.buffer),i.delete(p))}function f(p,m){if(p.isGLBufferAttribute){const M=i.get(p);(!M||M.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=i.get(p);if(x===void 0)i.set(p,s(p,m));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(x.buffer,p,m),x.version=p.version}}return{get:u,remove:c,update:f}}class $u extends Ia{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),f=Math.floor(s),p=c+1,m=f+1,x=e/c,M=t/f,b=[],w=[],y=[],g=[];for(let _=0;_<m;_++){const U=_*M-u;for(let P=0;P<p;P++){const N=P*x-o;w.push(N,-U,0),y.push(0,0,1),g.push(P/c),g.push(1-_/f)}}for(let _=0;_<f;_++)for(let U=0;U<c;U++){const P=U+p*_,N=U+p*(_+1),$=U+1+p*(_+1),z=U+1+p*_;b.push(P,N,z),b.push(N,$,z)}this.setIndex(b),this.setAttribute("position",new Sr(w,3)),this.setAttribute("normal",new Sr(y,3)),this.setAttribute("uv",new Sr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,my=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,o1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:QS,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:rE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:ME,color_vertex:bE,common:SE,cube_uv_reflection_fragment:EE,defaultnormal_vertex:yE,displacementmap_pars_vertex:TE,displacementmap_vertex:AE,emissivemap_fragment:wE,emissivemap_pars_fragment:CE,colorspace_fragment:RE,colorspace_pars_fragment:LE,envmap_fragment:PE,envmap_common_pars_fragment:DE,envmap_pars_fragment:IE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:$E,envmap_vertex:NE,fog_vertex:FE,fog_pars_vertex:OE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:GE,lightmap_fragment:HE,lightmap_pars_fragment:kE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:WE,lights_pars_begin:XE,lights_toon_fragment:qE,lights_toon_pars_fragment:YE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:jE,lights_physical_pars_fragment:JE,lights_fragment_begin:QE,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:ay,map_fragment:sy,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphinstance_vertex:hy,morphcolor_vertex:dy,morphnormal_vertex:py,morphtarget_pars_vertex:my,morphtarget_vertex:gy,normal_fragment_begin:_y,normal_fragment_maps:vy,normal_pars_fragment:xy,normal_pars_vertex:My,normal_vertex:by,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:wy,packing:Cy,premultiplied_alpha_fragment:Ry,project_vertex:Ly,dithering_fragment:Py,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Fy,shadowmap_vertex:Oy,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Gy,skinning_vertex:Hy,skinnormal_vertex:ky,specularmap_fragment:Vy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:$y,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Zy,uv_pars_vertex:Ky,uv_vertex:jy,worldpos_vertex:Jy,background_vert:Qy,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:a1,depth_frag:s1,distanceRGBA_vert:o1,distanceRGBA_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:M1,meshphong_vert:b1,meshphong_frag:S1,meshphysical_vert:E1,meshphysical_frag:y1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:w1,points_frag:C1,shadow_vert:R1,shadow_frag:L1,sprite_vert:P1,sprite_frag:D1},Oe={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},xr={basic:{uniforms:li([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:li([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:li([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:li([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:li([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:li([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:li([Oe.points,Oe.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:li([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:li([Oe.common,Oe.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:li([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:li([Oe.sprite,Oe.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:li([Oe.common,Oe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:li([Oe.lights,Oe.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};xr.physical={uniforms:li([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Tu={r:0,b:0,g:0},is=new Yr,I1=new Sn;function U1(r,e,t,i,s,o,u){const c=new jt(0);let f=o===!0?0:1,p,m,x=null,M=0,b=null;function w(g,_){let U=!1,P=_.isScene===!0?_.background:null;P&&P.isTexture&&(P=(_.backgroundBlurriness>0?t:e).get(P)),P===null?y(c,f):P&&P.isColor&&(y(P,1),U=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||U)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),P&&(P.isCubeTexture||P.mapping===Vu)?(m===void 0&&(m=new rr(new Ol(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:Co(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function($,z,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),is.copy(_.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(is)),m.material.toneMapped=un.getTransfer(P.colorSpace)!==_n,(x!==P||M!==P.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,x=P,M=P.version,b=r.toneMapping),m.layers.enableAll(),g.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new rr(new $u(2,2),new Pa({name:"BackgroundMaterial",uniforms:Co(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=un.getTransfer(P.colorSpace)!==_n,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||M!==P.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,x=P,M=P.version,b=r.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null))}function y(g,_){g.getRGB(Tu,s_(r)),i.buffers.color.setClear(Tu.r,Tu.g,Tu.b,_,u)}return{getClearColor:function(){return c},setClearColor:function(g,_=1){c.set(g),f=_,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,y(c,f)},render:w}}function N1(r,e,t,i){const s=r.getParameter(r.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},f=g(null);let p=f,m=!1;function x(q,pe,ue,xe,ce){let Me=!1;if(u){const be=y(xe,ue,pe);p!==be&&(p=be,b(p.object)),Me=_(q,xe,ue,ce),Me&&U(q,xe,ue,ce)}else{const be=pe.wireframe===!0;(p.geometry!==xe.id||p.program!==ue.id||p.wireframe!==be)&&(p.geometry=xe.id,p.program=ue.id,p.wireframe=be,Me=!0)}ce!==null&&t.update(ce,r.ELEMENT_ARRAY_BUFFER),(Me||m)&&(m=!1,ee(q,pe,ue,xe),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function M(){return i.isWebGL2?r.createVertexArray():o.createVertexArrayOES()}function b(q){return i.isWebGL2?r.bindVertexArray(q):o.bindVertexArrayOES(q)}function w(q){return i.isWebGL2?r.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function y(q,pe,ue){const xe=ue.wireframe===!0;let ce=c[q.id];ce===void 0&&(ce={},c[q.id]=ce);let Me=ce[pe.id];Me===void 0&&(Me={},ce[pe.id]=Me);let be=Me[xe];return be===void 0&&(be=g(M()),Me[xe]=be),be}function g(q){const pe=[],ue=[],xe=[];for(let ce=0;ce<s;ce++)pe[ce]=0,ue[ce]=0,xe[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:pe,enabledAttributes:ue,attributeDivisors:xe,object:q,attributes:{},index:null}}function _(q,pe,ue,xe){const ce=p.attributes,Me=pe.attributes;let be=0;const Le=ue.getAttributes();for(const Ze in Le)if(Le[Ze].location>=0){const oe=ce[Ze];let ye=Me[Ze];if(ye===void 0&&(Ze==="instanceMatrix"&&q.instanceMatrix&&(ye=q.instanceMatrix),Ze==="instanceColor"&&q.instanceColor&&(ye=q.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;be++}return p.attributesNum!==be||p.index!==xe}function U(q,pe,ue,xe){const ce={},Me=pe.attributes;let be=0;const Le=ue.getAttributes();for(const Ze in Le)if(Le[Ze].location>=0){let oe=Me[Ze];oe===void 0&&(Ze==="instanceMatrix"&&q.instanceMatrix&&(oe=q.instanceMatrix),Ze==="instanceColor"&&q.instanceColor&&(oe=q.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),ce[Ze]=ye,be++}p.attributes=ce,p.attributesNum=be,p.index=xe}function P(){const q=p.newAttributes;for(let pe=0,ue=q.length;pe<ue;pe++)q[pe]=0}function N(q){$(q,0)}function $(q,pe){const ue=p.newAttributes,xe=p.enabledAttributes,ce=p.attributeDivisors;ue[q]=1,xe[q]===0&&(r.enableVertexAttribArray(q),xe[q]=1),ce[q]!==pe&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,pe),ce[q]=pe)}function z(){const q=p.newAttributes,pe=p.enabledAttributes;for(let ue=0,xe=pe.length;ue<xe;ue++)pe[ue]!==q[ue]&&(r.disableVertexAttribArray(ue),pe[ue]=0)}function B(q,pe,ue,xe,ce,Me,be){be===!0?r.vertexAttribIPointer(q,pe,ue,ce,Me):r.vertexAttribPointer(q,pe,ue,xe,ce,Me)}function ee(q,pe,ue,xe){if(i.isWebGL2===!1&&(q.isInstancedMesh||xe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const ce=xe.attributes,Me=ue.getAttributes(),be=pe.defaultAttributeValues;for(const Le in Me){const Ze=Me[Le];if(Ze.location>=0){let Mt=ce[Le];if(Mt===void 0&&(Le==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),Le==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor)),Mt!==void 0){const oe=Mt.normalized,ye=Mt.itemSize,He=t.get(Mt);if(He===void 0)continue;const dt=He.buffer,Je=He.type,ke=He.bytesPerElement,Ht=i.isWebGL2===!0&&(Je===r.INT||Je===r.UNSIGNED_INT||Mt.gpuType===kg);if(Mt.isInterleavedBufferAttribute){const at=Mt.data,J=at.stride,vn=Mt.offset;if(at.isInstancedInterleavedBuffer){for(let We=0;We<Ze.locationSize;We++)$(Ze.location+We,at.meshPerAttribute);q.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let We=0;We<Ze.locationSize;We++)N(Ze.location+We);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let We=0;We<Ze.locationSize;We++)B(Ze.location+We,ye/Ze.locationSize,Je,oe,J*ke,(vn+ye/Ze.locationSize*We)*ke,Ht)}else{if(Mt.isInstancedBufferAttribute){for(let at=0;at<Ze.locationSize;at++)$(Ze.location+at,Mt.meshPerAttribute);q.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let at=0;at<Ze.locationSize;at++)N(Ze.location+at);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let at=0;at<Ze.locationSize;at++)B(Ze.location+at,ye/Ze.locationSize,Je,oe,ye*ke,ye/Ze.locationSize*at*ke,Ht)}}else if(be!==void 0){const oe=be[Le];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(Ze.location,oe);break;case 3:r.vertexAttrib3fv(Ze.location,oe);break;case 4:r.vertexAttrib4fv(Ze.location,oe);break;default:r.vertexAttrib1fv(Ze.location,oe)}}}}z()}function De(){Ie();for(const q in c){const pe=c[q];for(const ue in pe){const xe=pe[ue];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete pe[ue]}delete c[q]}}function C(q){if(c[q.id]===void 0)return;const pe=c[q.id];for(const ue in pe){const xe=pe[ue];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete pe[ue]}delete c[q.id]}function G(q){for(const pe in c){const ue=c[pe];if(ue[q.id]===void 0)continue;const xe=ue[q.id];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete ue[q.id]}}function Ie(){Ce(),m=!0,p!==f&&(p=f,b(p.object))}function Ce(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:x,reset:Ie,resetDefaultState:Ce,dispose:De,releaseStatesOfGeometry:C,releaseStatesOfProgram:G,initAttributes:P,enableAttribute:N,disableUnusedAttributes:z}}function F1(r,e,t,i){const s=i.isWebGL2;let o;function u(m){o=m}function c(m,x){r.drawArrays(o,m,x),t.update(x,o,1)}function f(m,x,M){if(M===0)return;let b,w;if(s)b=r,w="drawArraysInstanced";else if(b=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[w](o,m,x,M),t.update(x,o,M)}function p(m,x,M){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let w=0;w<M;w++)this.render(m[w],x[w]);else{b.multiDrawArraysWEBGL(o,m,0,x,0,M);let w=0;for(let y=0;y<M;y++)w+=x[y];t.update(w,o,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function O1(r,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=o(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=u||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,N=u||e.has("OES_texture_float"),$=P&&N,z=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:U,vertexTextures:P,floatFragmentTextures:N,floatVertexTextures:$,maxSamples:z}}function B1(r){const e=this;let t=null,i=0,s=!1,o=!1;const u=new ba,c=new Ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const b=x.length!==0||M||i!==0||s;return s=M,i=x.length,b},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,M){t=m(x,M,0)},this.setState=function(x,M,b){const w=x.clippingPlanes,y=x.clipIntersection,g=x.clipShadows,_=r.get(x);if(!s||w===null||w.length===0||o&&!g)o?m(null):p();else{const U=o?0:i,P=U*4;let N=_.clippingState||null;f.value=N,N=m(w,M,P,b);for(let $=0;$!==P;++$)N[$]=t[$];_.clippingState=N,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=U}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(x,M,b,w){const y=x!==null?x.length:0;let g=null;if(y!==0){if(g=f.value,w!==!0||g===null){const _=b+y*4,U=M.matrixWorldInverse;c.getNormalMatrix(U),(g===null||g.length<_)&&(g=new Float32Array(_));for(let P=0,N=b;P!==y;++P,N+=4)u.copy(x[P]).applyMatrix4(U,c),u.normal.toArray(g,N),g[N+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function z1(r){let e=new WeakMap;function t(u,c){return c===Md?u.mapping=To:c===bd&&(u.mapping=Ao),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Md||c===bd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new ZS(f.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class G1 extends o_{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,u=o+p*this.view.width,c-=m*this.view.offsetY,f=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mo=4,Km=[.125,.215,.35,.446,.526,.582],os=20,sd=new G1,jm=new jt;let od=null,ld=0,cd=0;const as=(1+Math.sqrt(5))/2,po=1/as,Jm=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,as,po),new te(0,as,-po),new te(po,0,as),new te(-po,0,as),new te(as,po,0),new te(-as,po,0)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),e.scissorTest=!1,Au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ul,format:ir,colorSpace:Da,depthBuffer:!1},s=eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H1(o)),this._blurMaterial=k1(o,e,t)}return s}_compileMaterial(e){const t=new rr(this._lodPlanes[0],e);this._renderer.compile(t,sd)}_sceneToCubeUV(e,t,i,s){const c=new Di(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,M=m.toneMapping;m.getClearColor(jm),m.toneMapping=wa,m.autoClear=!1;const b=new zd({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),w=new rr(new Ol,b);let y=!1;const g=e.background;g?g.isColor&&(b.color.copy(g),e.background=null,y=!0):(b.color.copy(jm),y=!0);for(let _=0;_<6;_++){const U=_%3;U===0?(c.up.set(0,f[_],0),c.lookAt(p[_],0,0)):U===1?(c.up.set(0,0,f[_]),c.lookAt(0,p[_],0)):(c.up.set(0,f[_],0),c.lookAt(0,0,p[_]));const P=this._cubeSize;Au(s,U*P,_>2?P:0,P,P),m.setRenderTarget(s),y&&m.render(w,c),m.render(e,c)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=M,m.autoClear=x,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===To||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new rr(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;Au(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,sd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Jm[(s-1)%Jm.length];this._blur(e,s-1,s,o,u)}t.autoClear=i}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new rr(this._lodPlanes[s],p),M=p.uniforms,b=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*b):2*Math.PI/(2*os-1),y=o/w,g=isFinite(o)?1+Math.floor(m*y):os;g>os&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const _=[];let U=0;for(let B=0;B<os;++B){const ee=B/y,De=Math.exp(-ee*ee/2);_.push(De),B===0?U+=De:B<g&&(U+=2*De)}for(let B=0;B<_.length;B++)_[B]=_[B]/U;M.envMap.value=e.texture,M.samples.value=g,M.weights.value=_,M.latitudinal.value=u==="latitudinal",c&&(M.poleAxis.value=c);const{_lodMax:P}=this;M.dTheta.value=w,M.mipInt.value=P-i;const N=this._sizeLods[s],$=3*N*(s>P-Mo?s-P+Mo:0),z=4*(this._cubeSize-N);Au(t,$,z,3*N,2*N),f.setRenderTarget(t),f.render(x,sd)}}function H1(r){const e=[],t=[],i=[];let s=r;const o=r-Mo+1+Km.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>r-Mo?f=Km[u-r+Mo-1]:u===0&&(f=0),i.push(f);const p=1/(c-2),m=-p,x=1+p,M=[m,m,x,m,x,x,m,m,x,x,m,x],b=6,w=6,y=3,g=2,_=1,U=new Float32Array(y*w*b),P=new Float32Array(g*w*b),N=new Float32Array(_*w*b);for(let z=0;z<b;z++){const B=z%3*2/3-1,ee=z>2?0:-1,De=[B,ee,0,B+2/3,ee,0,B+2/3,ee+1,0,B,ee,0,B+2/3,ee+1,0,B,ee+1,0];U.set(De,y*w*z),P.set(M,g*w*z);const C=[z,z,z,z,z,z];N.set(C,_*w*z)}const $=new Ia;$.setAttribute("position",new ar(U,y)),$.setAttribute("uv",new ar(P,g)),$.setAttribute("faceIndex",new ar(N,_)),e.push($),s>Mo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eg(r,e,t){const i=new fs(r,e,t);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Au(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function k1(r,e,t){const i=new Float32Array(os),s=new te(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function tg(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function ng(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V1(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,p=f===Md||f===bd,m=f===To||f===Ao;if(p||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return t===null&&(t=new Qm(r)),x=p?t.fromEquirectangular(c,x):t.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(p&&x&&x.height>0||m&&x&&s(x)){t===null&&(t=new Qm(r));const M=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,M),c.addEventListener("dispose",o),M.texture}else return null}}}return c}function s(c){let f=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&f++;return f===p}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function W1(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function X1(r,e,t,i){const s={},o=new WeakMap;function u(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const w in M.attributes)e.remove(M.attributes[w]);for(const w in M.morphAttributes){const y=M.morphAttributes[w];for(let g=0,_=y.length;g<_;g++)e.remove(y[g])}M.removeEventListener("dispose",u),delete s[M.id];const b=o.get(M);b&&(e.remove(b),o.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function c(x,M){return s[M.id]===!0||(M.addEventListener("dispose",u),s[M.id]=!0,t.memory.geometries++),M}function f(x){const M=x.attributes;for(const w in M)e.update(M[w],r.ARRAY_BUFFER);const b=x.morphAttributes;for(const w in b){const y=b[w];for(let g=0,_=y.length;g<_;g++)e.update(y[g],r.ARRAY_BUFFER)}}function p(x){const M=[],b=x.index,w=x.attributes.position;let y=0;if(b!==null){const U=b.array;y=b.version;for(let P=0,N=U.length;P<N;P+=3){const $=U[P+0],z=U[P+1],B=U[P+2];M.push($,z,z,B,B,$)}}else if(w!==void 0){const U=w.array;y=w.version;for(let P=0,N=U.length/3-1;P<N;P+=3){const $=P+0,z=P+1,B=P+2;M.push($,z,z,B,B,$)}}else return;const g=new(jg(M)?a_:r_)(M,1);g.version=y;const _=o.get(x);_&&e.remove(_),o.set(x,g)}function m(x){const M=o.get(x);if(M){const b=x.index;b!==null&&M.version<b.version&&p(x)}else p(x);return o.get(x)}return{get:c,update:f,getWireframeAttribute:m}}function $1(r,e,t,i){const s=i.isWebGL2;let o;function u(b){o=b}let c,f;function p(b){c=b.type,f=b.bytesPerElement}function m(b,w){r.drawElements(o,w,c,b*f),t.update(w,o,1)}function x(b,w,y){if(y===0)return;let g,_;if(s)g=r,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](o,w,c,b*f,y),t.update(w,o,y)}function M(b,w,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<y;_++)this.render(b[_]/f,w[_]);else{g.multiDrawElementsWEBGL(o,w,0,c,b,0,y);let _=0;for(let U=0;U<y;U++)_+=w[U];t.update(_,o,1)}}this.setMode=u,this.setIndex=p,this.render=m,this.renderInstances=x,this.renderMultiDraw=M}function q1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Y1(r,e){return r[0]-e[0]}function Z1(r,e){return Math.abs(e[1])-Math.abs(r[1])}function K1(r,e,t){const i={},s=new Float32Array(8),o=new WeakMap,u=new Zn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function f(p,m,x){const M=p.morphTargetInfluences;if(e.isWebGL2===!0){const w=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,y=w!==void 0?w.length:0;let g=o.get(m);if(g===void 0||g.count!==y){let Ce=function(){G.dispose(),o.delete(m),m.removeEventListener("dispose",Ce)};var b=Ce;g!==void 0&&g.texture.dispose();const _=m.morphAttributes.position!==void 0,U=m.morphAttributes.normal!==void 0,P=m.morphAttributes.color!==void 0,N=m.morphAttributes.position||[],$=m.morphAttributes.normal||[],z=m.morphAttributes.color||[];let B=0;_===!0&&(B=1),U===!0&&(B=2),P===!0&&(B=3);let ee=m.attributes.position.count*B,De=1;ee>e.maxTextureSize&&(De=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const C=new Float32Array(ee*De*4*y),G=new e_(C,ee,De,y);G.type=Mr,G.needsUpdate=!0;const Ie=B*4;for(let q=0;q<y;q++){const pe=N[q],ue=$[q],xe=z[q],ce=ee*De*4*q;for(let Me=0;Me<pe.count;Me++){const be=Me*Ie;_===!0&&(u.fromBufferAttribute(pe,Me),C[ce+be+0]=u.x,C[ce+be+1]=u.y,C[ce+be+2]=u.z,C[ce+be+3]=0),U===!0&&(u.fromBufferAttribute(ue,Me),C[ce+be+4]=u.x,C[ce+be+5]=u.y,C[ce+be+6]=u.z,C[ce+be+7]=0),P===!0&&(u.fromBufferAttribute(xe,Me),C[ce+be+8]=u.x,C[ce+be+9]=u.y,C[ce+be+10]=u.z,C[ce+be+11]=xe.itemSize===4?u.w:1)}}g={count:y,texture:G,size:new Rt(ee,De)},o.set(m,g),m.addEventListener("dispose",Ce)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)x.getUniforms().setValue(r,"morphTexture",p.morphTexture,t);else{let _=0;for(let P=0;P<M.length;P++)_+=M[P];const U=m.morphTargetsRelative?1:1-_;x.getUniforms().setValue(r,"morphTargetBaseInfluence",U),x.getUniforms().setValue(r,"morphTargetInfluences",M)}x.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const w=M===void 0?0:M.length;let y=i[m.id];if(y===void 0||y.length!==w){y=[];for(let N=0;N<w;N++)y[N]=[N,0];i[m.id]=y}for(let N=0;N<w;N++){const $=y[N];$[0]=N,$[1]=M[N]}y.sort(Z1);for(let N=0;N<8;N++)N<w&&y[N][1]?(c[N][0]=y[N][0],c[N][1]=y[N][1]):(c[N][0]=Number.MAX_SAFE_INTEGER,c[N][1]=0);c.sort(Y1);const g=m.morphAttributes.position,_=m.morphAttributes.normal;let U=0;for(let N=0;N<8;N++){const $=c[N],z=$[0],B=$[1];z!==Number.MAX_SAFE_INTEGER&&B?(g&&m.getAttribute("morphTarget"+N)!==g[z]&&m.setAttribute("morphTarget"+N,g[z]),_&&m.getAttribute("morphNormal"+N)!==_[z]&&m.setAttribute("morphNormal"+N,_[z]),s[N]=B,U+=B):(g&&m.hasAttribute("morphTarget"+N)===!0&&m.deleteAttribute("morphTarget"+N),_&&m.hasAttribute("morphNormal"+N)===!0&&m.deleteAttribute("morphNormal"+N),s[N]=0)}const P=m.morphTargetsRelative?1:1-U;x.getUniforms().setValue(r,"morphTargetBaseInfluence",P),x.getUniforms().setValue(r,"morphTargetInfluences",s)}}return{update:f}}function j1(r,e,t,i){let s=new WeakMap;function o(f){const p=i.render.frame,m=f.geometry,x=e.get(f,m);if(s.get(x)!==p&&(e.update(x),s.set(x,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,p))),f.isSkinnedMesh){const M=f.skeleton;s.get(M)!==p&&(M.update(),s.set(M,p))}return x}function u(){s=new WeakMap}function c(f){const p=f.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:u}}class f_ extends ci{constructor(e,t,i,s,o,u,c,f,p,m){if(m=m!==void 0?m:us,m!==us&&m!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===us&&(i=Ta),i===void 0&&m===wo&&(i=cs),super(null,s,o,u,c,f,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Yn,this.minFilter=f!==void 0?f:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const h_=new ci,d_=new f_(1,1);d_.compareFunction=Kg;const p_=new e_,m_=new DS,g_=new l_,ig=[],rg=[],ag=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function Lo(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let o=ig[s];if(o===void 0&&(o=new Float32Array(s),ig[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(o,c)}return o}function Bn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function zn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function qu(r,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function J1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Q1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2fv(this.addr,e),zn(t,e)}}function eT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bn(t,e))return;r.uniform3fv(this.addr,e),zn(t,e)}}function tT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4fv(this.addr,e),zn(t,e)}}function nT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(Bn(t,i))return;og.set(i),r.uniformMatrix2fv(this.addr,!1,og),zn(t,i)}}function iT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(Bn(t,i))return;sg.set(i),r.uniformMatrix3fv(this.addr,!1,sg),zn(t,i)}}function rT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(Bn(t,i))return;ag.set(i),r.uniformMatrix4fv(this.addr,!1,ag),zn(t,i)}}function aT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2iv(this.addr,e),zn(t,e)}}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3iv(this.addr,e),zn(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4iv(this.addr,e),zn(t,e)}}function cT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2uiv(this.addr,e),zn(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3uiv(this.addr,e),zn(t,e)}}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4uiv(this.addr,e),zn(t,e)}}function dT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);const o=this.type===r.SAMPLER_2D_SHADOW?d_:h_;t.setTexture2D(e||o,s)}function pT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||m_,s)}function mT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||g_,s)}function gT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||p_,s)}function _T(r){switch(r){case 5126:return J1;case 35664:return Q1;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return aT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(r,e){r.uniform1fv(this.addr,e)}function xT(r,e){const t=Lo(e,this.size,2);r.uniform2fv(this.addr,t)}function MT(r,e){const t=Lo(e,this.size,3);r.uniform3fv(this.addr,t)}function bT(r,e){const t=Lo(e,this.size,4);r.uniform4fv(this.addr,t)}function ST(r,e){const t=Lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ET(r,e){const t=Lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yT(r,e){const t=Lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function TT(r,e){r.uniform1iv(this.addr,e)}function AT(r,e){r.uniform2iv(this.addr,e)}function wT(r,e){r.uniform3iv(this.addr,e)}function CT(r,e){r.uniform4iv(this.addr,e)}function RT(r,e){r.uniform1uiv(this.addr,e)}function LT(r,e){r.uniform2uiv(this.addr,e)}function PT(r,e){r.uniform3uiv(this.addr,e)}function DT(r,e){r.uniform4uiv(this.addr,e)}function IT(r,e,t){const i=this.cache,s=e.length,o=qu(t,s);Bn(i,o)||(r.uniform1iv(this.addr,o),zn(i,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||h_,o[u])}function UT(r,e,t){const i=this.cache,s=e.length,o=qu(t,s);Bn(i,o)||(r.uniform1iv(this.addr,o),zn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||m_,o[u])}function NT(r,e,t){const i=this.cache,s=e.length,o=qu(t,s);Bn(i,o)||(r.uniform1iv(this.addr,o),zn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||g_,o[u])}function FT(r,e,t){const i=this.cache,s=e.length,o=qu(t,s);Bn(i,o)||(r.uniform1iv(this.addr,o),zn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||p_,o[u])}function OT(r){switch(r){case 5126:return vT;case 35664:return xT;case 35665:return MT;case 35666:return bT;case 35674:return ST;case 35675:return ET;case 35676:return yT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return wT;case 35669:case 35673:return CT;case 5125:return RT;case 36294:return LT;case 36295:return PT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return FT}}class BT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_T(t.type)}}class zT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class GT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function lg(r,e){r.seq.push(e),r.map[e.id]=e}function HT(r,e,t){const i=r.name,s=i.length;for(ud.lastIndex=0;;){const o=ud.exec(i),u=ud.lastIndex;let c=o[1];const f=o[2]==="]",p=o[3];if(f&&(c=c|0),p===void 0||p==="["&&u+2===s){lg(t,p===void 0?new BT(c,r,e):new zT(c,r,e));break}else{let x=t.map[c];x===void 0&&(x=new GT(c),lg(t,x)),t=x}}}class Pu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);HT(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function cg(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const kT=37297;let VT=0;function WT(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function XT(r){const e=un.getPrimaries(un.workingColorSpace),t=un.getPrimaries(r);let i;switch(e===t?i="":e===Fu&&t===Nu?i="LinearDisplayP3ToLinearSRGB":e===Nu&&t===Fu&&(i="LinearSRGBToLinearDisplayP3"),r){case Da:case Wu:return[i,"LinearTransferOETF"];case vr:case Od:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ug(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+WT(r.getShaderSource(e),u)}else return s}function $T(r,e){const t=XT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qT(r,e){let t;switch(e){case Gb:t="Linear";break;case Hb:t="Reinhard";break;case kb:t="OptimizedCineon";break;case Vb:t="ACESFilmic";break;case Xb:t="AgX";break;case $b:t="Neutral";break;case Wb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function YT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bo).join(`
`)}function ZT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function KT(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jT(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=r.getActiveAttrib(e,s),u=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function bo(r){return r!==""}function fg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(JT,eA)}const QT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eA(r,e){let t=Nt[e];if(t===void 0){const i=QT.get(e);if(i!==void 0)t=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(r){return r.replace(tA,nA)}function nA(r,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function pg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xr&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case To:case Ao:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case Bb:e="ENVMAP_BLENDING_MIX";break;case zb:e="ENVMAP_BLENDING_ADD";break}return e}function oA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lA(r,e,t,i){const s=r.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=iA(t),p=rA(t),m=aA(t),x=sA(t),M=oA(t),b=t.isWebGL2?"":YT(t),w=ZT(t),y=KT(o),g=s.createProgram();let _,U,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(bo).join(`
`),_.length>0&&(_+=`
`),U=[b,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(bo).join(`
`),U.length>0&&(U+=`
`)):(_=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),U=[b,pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wa?"#define TONE_MAPPING":"",t.toneMapping!==wa?Nt.tonemapping_pars_fragment:"",t.toneMapping!==wa?qT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,$T("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),u=Ad(u),u=fg(u,t),u=hg(u,t),c=Ad(c),c=fg(c,t),c=hg(c,t),u=dg(u),c=dg(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,U=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const N=P+_+u,$=P+U+c,z=cg(s,s.VERTEX_SHADER,N),B=cg(s,s.FRAGMENT_SHADER,$);s.attachShader(g,z),s.attachShader(g,B),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function ee(Ie){if(r.debug.checkShaderErrors){const Ce=s.getProgramInfoLog(g).trim(),q=s.getShaderInfoLog(z).trim(),pe=s.getShaderInfoLog(B).trim();let ue=!0,xe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,z,B);else{const ce=ug(s,z,"vertex"),Me=ug(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+Ie.name+`
Material Type: `+Ie.type+`

Program Info Log: `+Ce+`
`+ce+`
`+Me)}else Ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ce):(q===""||pe==="")&&(xe=!1);xe&&(Ie.diagnostics={runnable:ue,programLog:Ce,vertexShader:{log:q,prefix:_},fragmentShader:{log:pe,prefix:U}})}s.deleteShader(z),s.deleteShader(B),De=new Pu(s,g),C=jT(s,g)}let De;this.getUniforms=function(){return De===void 0&&ee(this),De};let C;this.getAttributes=function(){return C===void 0&&ee(this),C};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(g,kT)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=z,this.fragmentShader=B,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fA(e),t.set(e,i)),i}}class fA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function hA(r,e,t,i,s,o,u){const c=new n_,f=new uA,p=new Set,m=[],x=s.isWebGL2,M=s.logarithmicDepthBuffer,b=s.vertexTextures;let w=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(C){return p.add(C),C===0?"uv":`uv${C}`}function _(C,G,Ie,Ce,q){const pe=Ce.fog,ue=q.geometry,xe=C.isMeshStandardMaterial?Ce.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||xe),Me=ce&&ce.mapping===Vu?ce.image.height:null,be=y[C.type];C.precision!==null&&(w=s.getMaxPrecision(C.precision),w!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",w,"instead."));const Le=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ze=Le!==void 0?Le.length:0;let Mt=0;ue.morphAttributes.position!==void 0&&(Mt=1),ue.morphAttributes.normal!==void 0&&(Mt=2),ue.morphAttributes.color!==void 0&&(Mt=3);let oe,ye,He,dt;if(be){const qt=xr[be];oe=qt.vertexShader,ye=qt.fragmentShader}else oe=C.vertexShader,ye=C.fragmentShader,f.update(C),He=f.getVertexShaderID(C),dt=f.getFragmentShaderID(C);const Je=r.getRenderTarget(),ke=q.isInstancedMesh===!0,Ht=q.isBatchedMesh===!0,at=!!C.map,J=!!C.matcap,vn=!!ce,We=!!C.aoMap,pt=!!C.lightMap,rt=!!C.bumpMap,_t=!!C.normalMap,vt=!!C.displacementMap,Tt=!!C.emissiveMap,$t=!!C.metalnessMap,I=!!C.roughnessMap,T=C.anisotropy>0,le=C.clearcoat>0,de=C.iridescence>0,Te=C.sheen>0,Se=C.transmission>0,ot=T&&!!C.anisotropyMap,et=le&&!!C.clearcoatMap,Ne=le&&!!C.clearcoatNormalMap,Fe=le&&!!C.clearcoatRoughnessMap,mt=de&&!!C.iridescenceMap,Ue=de&&!!C.iridescenceThicknessMap,sn=Te&&!!C.sheenColorMap,bt=Te&&!!C.sheenRoughnessMap,tt=!!C.specularMap,Xe=!!C.specularColorMap,je=!!C.specularIntensityMap,F=Se&&!!C.transmissionMap,ve=Se&&!!C.thicknessMap,Ke=!!C.gradientMap,k=!!C.alphaMap,Pe=C.alphaTest>0,ne=!!C.alphaHash,we=!!C.extensions;let Be=wa;C.toneMapped&&(Je===null||Je.isXRRenderTarget===!0)&&(Be=r.toneMapping);const Lt={isWebGL2:x,shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:oe,fragmentShader:ye,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:w,batching:Ht,instancing:ke,instancingColor:ke&&q.instanceColor!==null,instancingMorph:ke&&q.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:Je===null?r.outputColorSpace:Je.isXRRenderTarget===!0?Je.texture.colorSpace:Da,alphaToCoverage:!!C.alphaToCoverage,map:at,matcap:J,envMap:vn,envMapMode:vn&&ce.mapping,envMapCubeUVHeight:Me,aoMap:We,lightMap:pt,bumpMap:rt,normalMap:_t,displacementMap:b&&vt,emissiveMap:Tt,normalMapObjectSpace:_t&&C.normalMapType===iS,normalMapTangentSpace:_t&&C.normalMapType===nS,metalnessMap:$t,roughnessMap:I,anisotropy:T,anisotropyMap:ot,clearcoat:le,clearcoatMap:et,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Fe,iridescence:de,iridescenceMap:mt,iridescenceThicknessMap:Ue,sheen:Te,sheenColorMap:sn,sheenRoughnessMap:bt,specularMap:tt,specularColorMap:Xe,specularIntensityMap:je,transmission:Se,transmissionMap:F,thicknessMap:ve,gradientMap:Ke,opaque:C.transparent===!1&&C.blending===Eo&&C.alphaToCoverage===!1,alphaMap:k,alphaTest:Pe,alphaHash:ne,combine:C.combine,mapUv:at&&g(C.map.channel),aoMapUv:We&&g(C.aoMap.channel),lightMapUv:pt&&g(C.lightMap.channel),bumpMapUv:rt&&g(C.bumpMap.channel),normalMapUv:_t&&g(C.normalMap.channel),displacementMapUv:vt&&g(C.displacementMap.channel),emissiveMapUv:Tt&&g(C.emissiveMap.channel),metalnessMapUv:$t&&g(C.metalnessMap.channel),roughnessMapUv:I&&g(C.roughnessMap.channel),anisotropyMapUv:ot&&g(C.anisotropyMap.channel),clearcoatMapUv:et&&g(C.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(C.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(C.iridescenceThicknessMap.channel),sheenColorMapUv:sn&&g(C.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(C.sheenRoughnessMap.channel),specularMapUv:tt&&g(C.specularMap.channel),specularColorMapUv:Xe&&g(C.specularColorMap.channel),specularIntensityMapUv:je&&g(C.specularIntensityMap.channel),transmissionMapUv:F&&g(C.transmissionMap.channel),thicknessMapUv:ve&&g(C.thicknessMap.channel),alphaMapUv:k&&g(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(_t||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(at||k),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:M,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:Mt,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&Ie.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,useLegacyLights:r._useLegacyLights,decodeVideoTexture:at&&C.map.isVideoTexture===!0&&un.getTransfer(C.map.colorSpace)===_n,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===$r,flipSided:C.side===bi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:we&&C.extensions.derivatives===!0,extensionFragDepth:we&&C.extensions.fragDepth===!0,extensionDrawBuffers:we&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:we&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function U(C){const G=[];if(C.shaderID?G.push(C.shaderID):(G.push(C.customVertexShaderID),G.push(C.customFragmentShaderID)),C.defines!==void 0)for(const Ie in C.defines)G.push(Ie),G.push(C.defines[Ie]);return C.isRawShaderMaterial===!1&&(P(G,C),N(G,C),G.push(r.outputColorSpace)),G.push(C.customProgramCacheKey),G.join()}function P(C,G){C.push(G.precision),C.push(G.outputColorSpace),C.push(G.envMapMode),C.push(G.envMapCubeUVHeight),C.push(G.mapUv),C.push(G.alphaMapUv),C.push(G.lightMapUv),C.push(G.aoMapUv),C.push(G.bumpMapUv),C.push(G.normalMapUv),C.push(G.displacementMapUv),C.push(G.emissiveMapUv),C.push(G.metalnessMapUv),C.push(G.roughnessMapUv),C.push(G.anisotropyMapUv),C.push(G.clearcoatMapUv),C.push(G.clearcoatNormalMapUv),C.push(G.clearcoatRoughnessMapUv),C.push(G.iridescenceMapUv),C.push(G.iridescenceThicknessMapUv),C.push(G.sheenColorMapUv),C.push(G.sheenRoughnessMapUv),C.push(G.specularMapUv),C.push(G.specularColorMapUv),C.push(G.specularIntensityMapUv),C.push(G.transmissionMapUv),C.push(G.thicknessMapUv),C.push(G.combine),C.push(G.fogExp2),C.push(G.sizeAttenuation),C.push(G.morphTargetsCount),C.push(G.morphAttributeCount),C.push(G.numDirLights),C.push(G.numPointLights),C.push(G.numSpotLights),C.push(G.numSpotLightMaps),C.push(G.numHemiLights),C.push(G.numRectAreaLights),C.push(G.numDirLightShadows),C.push(G.numPointLightShadows),C.push(G.numSpotLightShadows),C.push(G.numSpotLightShadowsWithMaps),C.push(G.numLightProbes),C.push(G.shadowMapType),C.push(G.toneMapping),C.push(G.numClippingPlanes),C.push(G.numClipIntersection),C.push(G.depthPacking)}function N(C,G){c.disableAll(),G.isWebGL2&&c.enable(0),G.supportsVertexTextures&&c.enable(1),G.instancing&&c.enable(2),G.instancingColor&&c.enable(3),G.instancingMorph&&c.enable(4),G.matcap&&c.enable(5),G.envMap&&c.enable(6),G.normalMapObjectSpace&&c.enable(7),G.normalMapTangentSpace&&c.enable(8),G.clearcoat&&c.enable(9),G.iridescence&&c.enable(10),G.alphaTest&&c.enable(11),G.vertexColors&&c.enable(12),G.vertexAlphas&&c.enable(13),G.vertexUv1s&&c.enable(14),G.vertexUv2s&&c.enable(15),G.vertexUv3s&&c.enable(16),G.vertexTangents&&c.enable(17),G.anisotropy&&c.enable(18),G.alphaHash&&c.enable(19),G.batching&&c.enable(20),C.push(c.mask),c.disableAll(),G.fog&&c.enable(0),G.useFog&&c.enable(1),G.flatShading&&c.enable(2),G.logarithmicDepthBuffer&&c.enable(3),G.skinning&&c.enable(4),G.morphTargets&&c.enable(5),G.morphNormals&&c.enable(6),G.morphColors&&c.enable(7),G.premultipliedAlpha&&c.enable(8),G.shadowMapEnabled&&c.enable(9),G.useLegacyLights&&c.enable(10),G.doubleSided&&c.enable(11),G.flipSided&&c.enable(12),G.useDepthPacking&&c.enable(13),G.dithering&&c.enable(14),G.transmission&&c.enable(15),G.sheen&&c.enable(16),G.opaque&&c.enable(17),G.pointsUvs&&c.enable(18),G.decodeVideoTexture&&c.enable(19),G.alphaToCoverage&&c.enable(20),C.push(c.mask)}function $(C){const G=y[C.type];let Ie;if(G){const Ce=xr[G];Ie=XS.clone(Ce.uniforms)}else Ie=C.uniforms;return Ie}function z(C,G){let Ie;for(let Ce=0,q=m.length;Ce<q;Ce++){const pe=m[Ce];if(pe.cacheKey===G){Ie=pe,++Ie.usedTimes;break}}return Ie===void 0&&(Ie=new lA(r,G,C,o),m.push(Ie)),Ie}function B(C){if(--C.usedTimes===0){const G=m.indexOf(C);m[G]=m[m.length-1],m.pop(),C.destroy()}}function ee(C){f.remove(C)}function De(){f.dispose()}return{getParameters:_,getProgramCacheKey:U,getUniforms:$,acquireProgram:z,releaseProgram:B,releaseShaderCache:ee,programs:m,dispose:De}}function dA(){let r=new WeakMap;function e(o){let u=r.get(o);return u===void 0&&(u={},r.set(o,u)),u}function t(o){r.delete(o)}function i(o,u,c){r.get(o)[u]=c}function s(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function pA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gg(){const r=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(x,M,b,w,y,g){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:M,material:b,groupOrder:w,renderOrder:x.renderOrder,z:y,group:g},r[e]=_):(_.id=x.id,_.object=x,_.geometry=M,_.material=b,_.groupOrder=w,_.renderOrder=x.renderOrder,_.z=y,_.group=g),e++,_}function c(x,M,b,w,y,g){const _=u(x,M,b,w,y,g);b.transmission>0?i.push(_):b.transparent===!0?s.push(_):t.push(_)}function f(x,M,b,w,y,g){const _=u(x,M,b,w,y,g);b.transmission>0?i.unshift(_):b.transparent===!0?s.unshift(_):t.unshift(_)}function p(x,M){t.length>1&&t.sort(x||pA),i.length>1&&i.sort(M||mg),s.length>1&&s.sort(M||mg)}function m(){for(let x=e,M=r.length;x<M;x++){const b=r[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:f,finish:m,sort:p}}function mA(){let r=new WeakMap;function e(i,s){const o=r.get(i);let u;return o===void 0?(u=new gg,r.set(i,[u])):s>=o.length?(u=new gg,o.push(u)):u=o[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function gA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new jt};break;case"SpotLight":t={position:new te,direction:new te,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new jt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":t={color:new jt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function _A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vA=0;function xA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function MA(r,e){const t=new gA,i=_A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new te);const o=new te,u=new Sn,c=new Sn;function f(m,x){let M=0,b=0,w=0;for(let Ie=0;Ie<9;Ie++)s.probe[Ie].set(0,0,0);let y=0,g=0,_=0,U=0,P=0,N=0,$=0,z=0,B=0,ee=0,De=0;m.sort(xA);const C=x===!0?Math.PI:1;for(let Ie=0,Ce=m.length;Ie<Ce;Ie++){const q=m[Ie],pe=q.color,ue=q.intensity,xe=q.distance,ce=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)M+=pe.r*ue*C,b+=pe.g*ue*C,w+=pe.b*ue*C;else if(q.isLightProbe){for(let Me=0;Me<9;Me++)s.probe[Me].addScaledVector(q.sh.coefficients[Me],ue);De++}else if(q.isDirectionalLight){const Me=t.get(q);if(Me.color.copy(q.color).multiplyScalar(q.intensity*C),q.castShadow){const be=q.shadow,Le=i.get(q);Le.shadowBias=be.bias,Le.shadowNormalBias=be.normalBias,Le.shadowRadius=be.radius,Le.shadowMapSize=be.mapSize,s.directionalShadow[y]=Le,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=q.shadow.matrix,N++}s.directional[y]=Me,y++}else if(q.isSpotLight){const Me=t.get(q);Me.position.setFromMatrixPosition(q.matrixWorld),Me.color.copy(pe).multiplyScalar(ue*C),Me.distance=xe,Me.coneCos=Math.cos(q.angle),Me.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),Me.decay=q.decay,s.spot[_]=Me;const be=q.shadow;if(q.map&&(s.spotLightMap[B]=q.map,B++,be.updateMatrices(q),q.castShadow&&ee++),s.spotLightMatrix[_]=be.matrix,q.castShadow){const Le=i.get(q);Le.shadowBias=be.bias,Le.shadowNormalBias=be.normalBias,Le.shadowRadius=be.radius,Le.shadowMapSize=be.mapSize,s.spotShadow[_]=Le,s.spotShadowMap[_]=ce,z++}_++}else if(q.isRectAreaLight){const Me=t.get(q);Me.color.copy(pe).multiplyScalar(ue),Me.halfWidth.set(q.width*.5,0,0),Me.halfHeight.set(0,q.height*.5,0),s.rectArea[U]=Me,U++}else if(q.isPointLight){const Me=t.get(q);if(Me.color.copy(q.color).multiplyScalar(q.intensity*C),Me.distance=q.distance,Me.decay=q.decay,q.castShadow){const be=q.shadow,Le=i.get(q);Le.shadowBias=be.bias,Le.shadowNormalBias=be.normalBias,Le.shadowRadius=be.radius,Le.shadowMapSize=be.mapSize,Le.shadowCameraNear=be.camera.near,Le.shadowCameraFar=be.camera.far,s.pointShadow[g]=Le,s.pointShadowMap[g]=ce,s.pointShadowMatrix[g]=q.shadow.matrix,$++}s.point[g]=Me,g++}else if(q.isHemisphereLight){const Me=t.get(q);Me.skyColor.copy(q.color).multiplyScalar(ue*C),Me.groundColor.copy(q.groundColor).multiplyScalar(ue*C),s.hemi[P]=Me,P++}}U>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=M,s.ambient[1]=b,s.ambient[2]=w;const G=s.hash;(G.directionalLength!==y||G.pointLength!==g||G.spotLength!==_||G.rectAreaLength!==U||G.hemiLength!==P||G.numDirectionalShadows!==N||G.numPointShadows!==$||G.numSpotShadows!==z||G.numSpotMaps!==B||G.numLightProbes!==De)&&(s.directional.length=y,s.spot.length=_,s.rectArea.length=U,s.point.length=g,s.hemi.length=P,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=$,s.pointShadowMap.length=$,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=$,s.spotLightMatrix.length=z+B-ee,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=De,G.directionalLength=y,G.pointLength=g,G.spotLength=_,G.rectAreaLength=U,G.hemiLength=P,G.numDirectionalShadows=N,G.numPointShadows=$,G.numSpotShadows=z,G.numSpotMaps=B,G.numLightProbes=De,s.version=vA++)}function p(m,x){let M=0,b=0,w=0,y=0,g=0;const _=x.matrixWorldInverse;for(let U=0,P=m.length;U<P;U++){const N=m[U];if(N.isDirectionalLight){const $=s.directional[M];$.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),$.direction.sub(o),$.direction.transformDirection(_),M++}else if(N.isSpotLight){const $=s.spot[w];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),$.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),$.direction.sub(o),$.direction.transformDirection(_),w++}else if(N.isRectAreaLight){const $=s.rectArea[y];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),c.identity(),u.copy(N.matrixWorld),u.premultiply(_),c.extractRotation(u),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),$.halfWidth.applyMatrix4(c),$.halfHeight.applyMatrix4(c),y++}else if(N.isPointLight){const $=s.point[b];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),b++}else if(N.isHemisphereLight){const $=s.hemi[g];$.direction.setFromMatrixPosition(N.matrixWorld),$.direction.transformDirection(_),g++}}}return{setup:f,setupView:p,state:s}}function _g(r,e){const t=new MA(r,e),i=[],s=[];function o(){i.length=0,s.length=0}function u(x){i.push(x)}function c(x){s.push(x)}function f(x){t.setup(i,x)}function p(x){t.setupView(i,x)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function bA(r,e){let t=new WeakMap;function i(o,u=0){const c=t.get(o);let f;return c===void 0?(f=new _g(r,e),t.set(o,[f])):u>=c.length?(f=new _g(r,e),c.push(f)):f=c[u],f}function s(){t=new WeakMap}return{get:i,dispose:s}}class SA extends Xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends Xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AA(r,e,t){let i=new c_;const s=new Rt,o=new Rt,u=new Zn,c=new SA({depthPacking:tS}),f=new EA,p={},m=t.maxTextureSize,x={[Ra]:bi,[bi]:Ra,[$r]:$r},M=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:yA,fragmentShader:TA}),b=M.clone();b.defines.HORIZONTAL_PASS=1;const w=new Ia;w.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rr(w,M),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let _=this.type;this.render=function(z,B,ee){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||z.length===0)return;const De=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Ie=r.state;Ie.setBlending(Aa),Ie.buffers.color.setClear(1,1,1,1),Ie.buffers.depth.setTest(!0),Ie.setScissorTest(!1);const Ce=_!==Xr&&this.type===Xr,q=_===Xr&&this.type!==Xr;for(let pe=0,ue=z.length;pe<ue;pe++){const xe=z[pe],ce=xe.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);const Me=ce.getFrameExtents();if(s.multiply(Me),o.copy(ce.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Me.x),s.x=o.x*Me.x,ce.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Me.y),s.y=o.y*Me.y,ce.mapSize.y=o.y)),ce.map===null||Ce===!0||q===!0){const Le=this.type!==Xr?{minFilter:Yn,magFilter:Yn}:{};ce.map!==null&&ce.map.dispose(),ce.map=new fs(s.x,s.y,Le),ce.map.texture.name=xe.name+".shadowMap",ce.camera.updateProjectionMatrix()}r.setRenderTarget(ce.map),r.clear();const be=ce.getViewportCount();for(let Le=0;Le<be;Le++){const Ze=ce.getViewport(Le);u.set(o.x*Ze.x,o.y*Ze.y,o.x*Ze.z,o.y*Ze.w),Ie.viewport(u),ce.updateMatrices(xe,Le),i=ce.getFrustum(),N(B,ee,ce.camera,xe,this.type)}ce.isPointLightShadow!==!0&&this.type===Xr&&U(ce,ee),ce.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(De,C,G)};function U(z,B){const ee=e.update(y);M.defines.VSM_SAMPLES!==z.blurSamples&&(M.defines.VSM_SAMPLES=z.blurSamples,b.defines.VSM_SAMPLES=z.blurSamples,M.needsUpdate=!0,b.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new fs(s.x,s.y)),M.uniforms.shadow_pass.value=z.map.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,ee,M,y,null),b.uniforms.shadow_pass.value=z.mapPass.texture,b.uniforms.resolution.value=z.mapSize,b.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,ee,b,y,null)}function P(z,B,ee,De){let C=null;const G=ee.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=ee.isPointLight===!0?f:c,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const Ie=C.uuid,Ce=B.uuid;let q=p[Ie];q===void 0&&(q={},p[Ie]=q);let pe=q[Ce];pe===void 0&&(pe=C.clone(),q[Ce]=pe,B.addEventListener("dispose",$)),C=pe}if(C.visible=B.visible,C.wireframe=B.wireframe,De===Xr?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:x[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Ie=r.properties.get(C);Ie.light=ee}return C}function N(z,B,ee,De,C){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Xr)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,z.matrixWorld);const Ce=e.update(z),q=z.material;if(Array.isArray(q)){const pe=Ce.groups;for(let ue=0,xe=pe.length;ue<xe;ue++){const ce=pe[ue],Me=q[ce.materialIndex];if(Me&&Me.visible){const be=P(z,Me,De,C);z.onBeforeShadow(r,z,B,ee,Ce,be,ce),r.renderBufferDirect(ee,null,Ce,be,z,ce),z.onAfterShadow(r,z,B,ee,Ce,be,ce)}}}else if(q.visible){const pe=P(z,q,De,C);z.onBeforeShadow(r,z,B,ee,Ce,pe,null),r.renderBufferDirect(ee,null,Ce,pe,z,null),z.onAfterShadow(r,z,B,ee,Ce,pe,null)}}const Ie=z.children;for(let Ce=0,q=Ie.length;Ce<q;Ce++)N(Ie[Ce],B,ee,De,C)}function $(z){z.target.removeEventListener("dispose",$);for(const ee in p){const De=p[ee],C=z.target.uuid;C in De&&(De[C].dispose(),delete De[C])}}}function wA(r,e,t){const i=t.isWebGL2;function s(){let k=!1;const Pe=new Zn;let ne=null;const we=new Zn(0,0,0,0);return{setMask:function(Be){ne!==Be&&!k&&(r.colorMask(Be,Be,Be,Be),ne=Be)},setLocked:function(Be){k=Be},setClear:function(Be,Lt,qt,Jt,hn){hn===!0&&(Be*=Jt,Lt*=Jt,qt*=Jt),Pe.set(Be,Lt,qt,Jt),we.equals(Pe)===!1&&(r.clearColor(Be,Lt,qt,Jt),we.copy(Pe))},reset:function(){k=!1,ne=null,we.set(-1,0,0,0)}}}function o(){let k=!1,Pe=null,ne=null,we=null;return{setTest:function(Be){Be?ke(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Be){Pe!==Be&&!k&&(r.depthMask(Be),Pe=Be)},setFunc:function(Be){if(ne!==Be){switch(Be){case Pb:r.depthFunc(r.NEVER);break;case Db:r.depthFunc(r.ALWAYS);break;case Ib:r.depthFunc(r.LESS);break;case Iu:r.depthFunc(r.LEQUAL);break;case Ub:r.depthFunc(r.EQUAL);break;case Nb:r.depthFunc(r.GEQUAL);break;case Fb:r.depthFunc(r.GREATER);break;case Ob:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=Be}},setLocked:function(Be){k=Be},setClear:function(Be){we!==Be&&(r.clearDepth(Be),we=Be)},reset:function(){k=!1,Pe=null,ne=null,we=null}}}function u(){let k=!1,Pe=null,ne=null,we=null,Be=null,Lt=null,qt=null,Jt=null,hn=null;return{setTest:function(kt){k||(kt?ke(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(kt){Pe!==kt&&!k&&(r.stencilMask(kt),Pe=kt)},setFunc:function(kt,Qt,wn){(ne!==kt||we!==Qt||Be!==wn)&&(r.stencilFunc(kt,Qt,wn),ne=kt,we=Qt,Be=wn)},setOp:function(kt,Qt,wn){(Lt!==kt||qt!==Qt||Jt!==wn)&&(r.stencilOp(kt,Qt,wn),Lt=kt,qt=Qt,Jt=wn)},setLocked:function(kt){k=kt},setClear:function(kt){hn!==kt&&(r.clearStencil(kt),hn=kt)},reset:function(){k=!1,Pe=null,ne=null,we=null,Be=null,Lt=null,qt=null,Jt=null,hn=null}}}const c=new s,f=new o,p=new u,m=new WeakMap,x=new WeakMap;let M={},b={},w=new WeakMap,y=[],g=null,_=!1,U=null,P=null,N=null,$=null,z=null,B=null,ee=null,De=new jt(0,0,0),C=0,G=!1,Ie=null,Ce=null,q=null,pe=null,ue=null;const xe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Me=0;const be=r.getParameter(r.VERSION);be.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(be)[1]),ce=Me>=1):be.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(be)[1]),ce=Me>=2);let Le=null,Ze={};const Mt=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ye=new Zn().fromArray(Mt),He=new Zn().fromArray(oe);function dt(k,Pe,ne,we){const Be=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(k,Lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<ne;qt++)i&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(Pe,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Pe+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return Lt}const Je={};Je[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),Je[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Je[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Je[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ke(r.DEPTH_TEST),f.setFunc(Iu),vt(!1),Tt(Kp),ke(r.CULL_FACE),rt(Aa);function ke(k){M[k]!==!0&&(r.enable(k),M[k]=!0)}function Ht(k){M[k]!==!1&&(r.disable(k),M[k]=!1)}function at(k,Pe){return b[k]!==Pe?(r.bindFramebuffer(k,Pe),b[k]=Pe,i&&(k===r.DRAW_FRAMEBUFFER&&(b[r.FRAMEBUFFER]=Pe),k===r.FRAMEBUFFER&&(b[r.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function J(k,Pe){let ne=y,we=!1;if(k){ne=w.get(Pe),ne===void 0&&(ne=[],w.set(Pe,ne));const Be=k.textures;if(ne.length!==Be.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,qt=Be.length;Lt<qt;Lt++)ne[Lt]=r.COLOR_ATTACHMENT0+Lt;ne.length=Be.length,we=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,we=!0);if(we)if(t.isWebGL2)r.drawBuffers(ne);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function vn(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const We={[ss]:r.FUNC_ADD,[gb]:r.FUNC_SUBTRACT,[_b]:r.FUNC_REVERSE_SUBTRACT};if(i)We[em]=r.MIN,We[tm]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(We[em]=k.MIN_EXT,We[tm]=k.MAX_EXT)}const pt={[vb]:r.ZERO,[xb]:r.ONE,[Mb]:r.SRC_COLOR,[vd]:r.SRC_ALPHA,[Ab]:r.SRC_ALPHA_SATURATE,[yb]:r.DST_COLOR,[Sb]:r.DST_ALPHA,[bb]:r.ONE_MINUS_SRC_COLOR,[xd]:r.ONE_MINUS_SRC_ALPHA,[Tb]:r.ONE_MINUS_DST_COLOR,[Eb]:r.ONE_MINUS_DST_ALPHA,[wb]:r.CONSTANT_COLOR,[Cb]:r.ONE_MINUS_CONSTANT_COLOR,[Rb]:r.CONSTANT_ALPHA,[Lb]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(k,Pe,ne,we,Be,Lt,qt,Jt,hn,kt){if(k===Aa){_===!0&&(Ht(r.BLEND),_=!1);return}if(_===!1&&(ke(r.BLEND),_=!0),k!==mb){if(k!==U||kt!==G){if((P!==ss||z!==ss)&&(r.blendEquation(r.FUNC_ADD),P=ss,z=ss),kt)switch(k){case Eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.ONE,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,$=null,B=null,ee=null,De.set(0,0,0),C=0,U=k,G=kt}return}Be=Be||Pe,Lt=Lt||ne,qt=qt||we,(Pe!==P||Be!==z)&&(r.blendEquationSeparate(We[Pe],We[Be]),P=Pe,z=Be),(ne!==N||we!==$||Lt!==B||qt!==ee)&&(r.blendFuncSeparate(pt[ne],pt[we],pt[Lt],pt[qt]),N=ne,$=we,B=Lt,ee=qt),(Jt.equals(De)===!1||hn!==C)&&(r.blendColor(Jt.r,Jt.g,Jt.b,hn),De.copy(Jt),C=hn),U=k,G=!1}function _t(k,Pe){k.side===$r?Ht(r.CULL_FACE):ke(r.CULL_FACE);let ne=k.side===bi;Pe&&(ne=!ne),vt(ne),k.blending===Eo&&k.transparent===!1?rt(Aa):rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const we=k.stencilWrite;p.setTest(we),we&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),I(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ke(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){Ie!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),Ie=k)}function Tt(k){k!==hb?(ke(r.CULL_FACE),k!==Ce&&(k===Kp?r.cullFace(r.BACK):k===db?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),Ce=k}function $t(k){k!==q&&(ce&&r.lineWidth(k),q=k)}function I(k,Pe,ne){k?(ke(r.POLYGON_OFFSET_FILL),(pe!==Pe||ue!==ne)&&(r.polygonOffset(Pe,ne),pe=Pe,ue=ne)):Ht(r.POLYGON_OFFSET_FILL)}function T(k){k?ke(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function le(k){k===void 0&&(k=r.TEXTURE0+xe-1),Le!==k&&(r.activeTexture(k),Le=k)}function de(k,Pe,ne){ne===void 0&&(Le===null?ne=r.TEXTURE0+xe-1:ne=Le);let we=Ze[ne];we===void 0&&(we={type:void 0,texture:void 0},Ze[ne]=we),(we.type!==k||we.texture!==Pe)&&(Le!==ne&&(r.activeTexture(ne),Le=ne),r.bindTexture(k,Pe||Je[k]),we.type=k,we.texture=Pe)}function Te(){const k=Ze[Le];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function sn(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(k){ye.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ye.copy(k))}function je(k){He.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),He.copy(k))}function F(k,Pe){let ne=x.get(Pe);ne===void 0&&(ne=new WeakMap,x.set(Pe,ne));let we=ne.get(k);we===void 0&&(we=r.getUniformBlockIndex(Pe,k.name),ne.set(k,we))}function ve(k,Pe){const we=x.get(Pe).get(k);m.get(Pe)!==we&&(r.uniformBlockBinding(Pe,we,k.__bindingPointIndex),m.set(Pe,we))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),M={},Le=null,Ze={},b={},w=new WeakMap,y=[],g=null,_=!1,U=null,P=null,N=null,$=null,z=null,B=null,ee=null,De=new jt(0,0,0),C=0,G=!1,Ie=null,Ce=null,q=null,pe=null,ue=null,ye.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ke,disable:Ht,bindFramebuffer:at,drawBuffers:J,useProgram:vn,setBlending:rt,setMaterial:_t,setFlipSided:vt,setCullFace:Tt,setLineWidth:$t,setPolygonOffset:I,setScissorTest:T,activeTexture:le,bindTexture:de,unbindTexture:Te,compressedTexImage2D:Se,compressedTexImage3D:ot,texImage2D:bt,texImage3D:tt,updateUBOMapping:F,uniformBlockBinding:ve,texStorage2D:Ue,texStorage3D:sn,texSubImage2D:et,texSubImage3D:Ne,compressedTexSubImage2D:Fe,compressedTexSubImage3D:mt,scissor:Xe,viewport:je,reset:Ke}}function CA(r,e,t,i,s,o,u){const c=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,x=new WeakMap;let M;const b=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,T){return w?new OffscreenCanvas(I,T):zu("canvas")}function g(I,T,le,de){let Te=1;const Se=$t(I);if((Se.width>de||Se.height>de)&&(Te=de/Math.max(Se.width,Se.height)),Te<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ot=T?Bu:Math.floor,et=ot(Te*Se.width),Ne=ot(Te*Se.height);M===void 0&&(M=y(et,Ne));const Fe=le?y(et,Ne):M;return Fe.width=et,Fe.height=Ne,Fe.getContext("2d").drawImage(I,0,0,et,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+et+"x"+Ne+")."),Fe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),I;return I}function _(I){const T=$t(I);return Td(T.width)&&Td(T.height)}function U(I){return c?!1:I.wrapS!==nr||I.wrapT!==nr||I.minFilter!==Yn&&I.minFilter!==Mi}function P(I,T){return I.generateMipmaps&&T&&I.minFilter!==Yn&&I.minFilter!==Mi}function N(I){r.generateMipmap(I)}function $(I,T,le,de,Te=!1){if(c===!1)return T;if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se=T;if(T===r.RED&&(le===r.FLOAT&&(Se=r.R32F),le===r.HALF_FLOAT&&(Se=r.R16F),le===r.UNSIGNED_BYTE&&(Se=r.R8)),T===r.RED_INTEGER&&(le===r.UNSIGNED_BYTE&&(Se=r.R8UI),le===r.UNSIGNED_SHORT&&(Se=r.R16UI),le===r.UNSIGNED_INT&&(Se=r.R32UI),le===r.BYTE&&(Se=r.R8I),le===r.SHORT&&(Se=r.R16I),le===r.INT&&(Se=r.R32I)),T===r.RG&&(le===r.FLOAT&&(Se=r.RG32F),le===r.HALF_FLOAT&&(Se=r.RG16F),le===r.UNSIGNED_BYTE&&(Se=r.RG8)),T===r.RG_INTEGER&&(le===r.UNSIGNED_BYTE&&(Se=r.RG8UI),le===r.UNSIGNED_SHORT&&(Se=r.RG16UI),le===r.UNSIGNED_INT&&(Se=r.RG32UI),le===r.BYTE&&(Se=r.RG8I),le===r.SHORT&&(Se=r.RG16I),le===r.INT&&(Se=r.RG32I)),T===r.RGBA){const ot=Te?Uu:un.getTransfer(de);le===r.FLOAT&&(Se=r.RGBA32F),le===r.HALF_FLOAT&&(Se=r.RGBA16F),le===r.UNSIGNED_BYTE&&(Se=ot===_n?r.SRGB8_ALPHA8:r.RGBA8),le===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),le===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function z(I,T,le){return P(I,le)===!0||I.isFramebufferTexture&&I.minFilter!==Yn&&I.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function B(I){return I===Yn||I===nm||I===El?r.NEAREST:r.LINEAR}function ee(I){const T=I.target;T.removeEventListener("dispose",ee),C(T),T.isVideoTexture&&x.delete(T)}function De(I){const T=I.target;T.removeEventListener("dispose",De),Ie(T)}function C(I){const T=i.get(I);if(T.__webglInit===void 0)return;const le=I.source,de=b.get(le);if(de){const Te=de[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&G(I),Object.keys(de).length===0&&b.delete(le)}i.remove(I)}function G(I){const T=i.get(I);r.deleteTexture(T.__webglTexture);const le=I.source,de=b.get(le);delete de[T.__cacheKey],u.memory.textures--}function Ie(I){const T=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Te=0;Te<T.__webglFramebuffer[de].length;Te++)r.deleteFramebuffer(T.__webglFramebuffer[de][Te]);else r.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)r.deleteFramebuffer(T.__webglFramebuffer[de]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const le=I.textures;for(let de=0,Te=le.length;de<Te;de++){const Se=i.get(le[de]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),u.memory.textures--),i.remove(le[de])}i.remove(I)}let Ce=0;function q(){Ce=0}function pe(){const I=Ce;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),Ce+=1,I}function ue(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function xe(I,T){const le=i.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.version>0&&le.__version!==I.version){const de=I.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(le,I,T);return}}t.bindTexture(r.TEXTURE_2D,le.__webglTexture,r.TEXTURE0+T)}function ce(I,T){const le=i.get(I);if(I.version>0&&le.__version!==I.version){He(le,I,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,le.__webglTexture,r.TEXTURE0+T)}function Me(I,T){const le=i.get(I);if(I.version>0&&le.__version!==I.version){He(le,I,T);return}t.bindTexture(r.TEXTURE_3D,le.__webglTexture,r.TEXTURE0+T)}function be(I,T){const le=i.get(I);if(I.version>0&&le.__version!==I.version){dt(le,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture,r.TEXTURE0+T)}const Le={[Sd]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[Ed]:r.MIRRORED_REPEAT},Ze={[Yn]:r.NEAREST,[nm]:r.NEAREST_MIPMAP_NEAREST,[El]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},Mt={[rS]:r.NEVER,[uS]:r.ALWAYS,[aS]:r.LESS,[Kg]:r.LEQUAL,[sS]:r.EQUAL,[cS]:r.GEQUAL,[oS]:r.GREATER,[lS]:r.NOTEQUAL};function oe(I,T,le){if(T.type===Mr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===Nh||T.magFilter===El||T.magFilter===ls||T.minFilter===Mi||T.minFilter===Nh||T.minFilter===El||T.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),le?(r.texParameteri(I,r.TEXTURE_WRAP_S,Le[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Le[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Le[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ze[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ze[T.minFilter])):(r.texParameteri(I,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(I,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==nr||T.wrapT!==nr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(I,r.TEXTURE_MAG_FILTER,B(T.magFilter)),r.texParameteri(I,r.TEXTURE_MIN_FILTER,B(T.minFilter)),T.minFilter!==Yn&&T.minFilter!==Mi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==El&&T.minFilter!==ls||T.type===Mr&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===Ul&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const de=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ye(I,T){let le=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",ee));const de=T.source;let Te=b.get(de);Te===void 0&&(Te={},b.set(de,Te));const Se=ue(T);if(Se!==I.__cacheKey){Te[Se]===void 0&&(Te[Se]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,le=!0),Te[Se].usedTimes++;const ot=Te[I.__cacheKey];ot!==void 0&&(Te[I.__cacheKey].usedTimes--,ot.usedTimes===0&&G(T)),I.__cacheKey=Se,I.__webglTexture=Te[Se].texture}return le}function He(I,T,le){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);const Te=ye(I,T),Se=T.source;t.bindTexture(de,I.__webglTexture,r.TEXTURE0+le);const ot=i.get(Se);if(Se.version!==ot.__version||Te===!0){t.activeTexture(r.TEXTURE0+le);const et=un.getPrimaries(un.workingColorSpace),Ne=T.colorSpace===Ea?null:un.getPrimaries(T.colorSpace),Fe=T.colorSpace===Ea||et===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=U(T)&&_(T.image)===!1;let Ue=g(T.image,mt,!1,s.maxTextureSize);Ue=Tt(T,Ue);const sn=_(Ue)||c,bt=o.convert(T.format,T.colorSpace);let tt=o.convert(T.type),Xe=$(T.internalFormat,bt,tt,T.colorSpace,T.isVideoTexture);oe(de,T,sn);let je;const F=T.mipmaps,ve=c&&T.isVideoTexture!==!0&&Xe!==Zg,Ke=ot.__version===void 0||Te===!0,k=Se.dataReady,Pe=z(T,Ue,sn);if(T.isDepthTexture)Xe=r.DEPTH_COMPONENT,c?T.type===Mr?Xe=r.DEPTH_COMPONENT32F:T.type===Ta?Xe=r.DEPTH_COMPONENT24:T.type===cs?Xe=r.DEPTH24_STENCIL8:Xe=r.DEPTH_COMPONENT16:T.type===Mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===us&&Xe===r.DEPTH_COMPONENT&&T.type!==Fd&&T.type!==Ta&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ta,tt=o.convert(T.type)),T.format===wo&&Xe===r.DEPTH_COMPONENT&&(Xe=r.DEPTH_STENCIL,T.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=cs,tt=o.convert(T.type))),Ke&&(ve?t.texStorage2D(r.TEXTURE_2D,1,Xe,Ue.width,Ue.height):t.texImage2D(r.TEXTURE_2D,0,Xe,Ue.width,Ue.height,0,bt,tt,null));else if(T.isDataTexture)if(F.length>0&&sn){ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,Pe,Xe,F[0].width,F[0].height);for(let ne=0,we=F.length;ne<we;ne++)je=F[ne],ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,tt,je.data):t.texImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,bt,tt,je.data);T.generateMipmaps=!1}else ve?(Ke&&t.texStorage2D(r.TEXTURE_2D,Pe,Xe,Ue.width,Ue.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue.width,Ue.height,bt,tt,Ue.data)):t.texImage2D(r.TEXTURE_2D,0,Xe,Ue.width,Ue.height,0,bt,tt,Ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Xe,F[0].width,F[0].height,Ue.depth);for(let ne=0,we=F.length;ne<we;ne++)je=F[ne],T.format!==ir?bt!==null?ve?k&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,je.width,je.height,Ue.depth,bt,je.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Xe,je.width,je.height,Ue.depth,0,je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,je.width,je.height,Ue.depth,bt,tt,je.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Xe,je.width,je.height,Ue.depth,0,bt,tt,je.data)}else{ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,Pe,Xe,F[0].width,F[0].height);for(let ne=0,we=F.length;ne<we;ne++)je=F[ne],T.format!==ir?bt!==null?ve?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,je.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,tt,je.data):t.texImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,bt,tt,je.data)}else if(T.isDataArrayTexture)ve?(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Xe,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,bt,tt,Ue.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Xe,Ue.width,Ue.height,Ue.depth,0,bt,tt,Ue.data);else if(T.isData3DTexture)ve?(Ke&&t.texStorage3D(r.TEXTURE_3D,Pe,Xe,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,bt,tt,Ue.data)):t.texImage3D(r.TEXTURE_3D,0,Xe,Ue.width,Ue.height,Ue.depth,0,bt,tt,Ue.data);else if(T.isFramebufferTexture){if(Ke)if(ve)t.texStorage2D(r.TEXTURE_2D,Pe,Xe,Ue.width,Ue.height);else{let ne=Ue.width,we=Ue.height;for(let Be=0;Be<Pe;Be++)t.texImage2D(r.TEXTURE_2D,Be,Xe,ne,we,0,bt,tt,null),ne>>=1,we>>=1}}else if(F.length>0&&sn){if(ve&&Ke){const ne=$t(F[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Xe,ne.width,ne.height)}for(let ne=0,we=F.length;ne<we;ne++)je=F[ne],ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,bt,tt,je):t.texImage2D(r.TEXTURE_2D,ne,Xe,bt,tt,je);T.generateMipmaps=!1}else if(ve){if(Ke){const ne=$t(Ue);t.texStorage2D(r.TEXTURE_2D,Pe,Xe,ne.width,ne.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,tt,Ue)}else t.texImage2D(r.TEXTURE_2D,0,Xe,bt,tt,Ue);P(T,sn)&&N(de),ot.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function dt(I,T,le){if(T.image.length!==6)return;const de=ye(I,T),Te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+le);const Se=i.get(Te);if(Te.version!==Se.__version||de===!0){t.activeTexture(r.TEXTURE0+le);const ot=un.getPrimaries(un.workingColorSpace),et=T.colorSpace===Ea?null:un.getPrimaries(T.colorSpace),Ne=T.colorSpace===Ea||ot===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,mt=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let ne=0;ne<6;ne++)!Fe&&!mt?Ue[ne]=g(T.image[ne],!1,!0,s.maxCubemapSize):Ue[ne]=mt?T.image[ne].image:T.image[ne],Ue[ne]=Tt(T,Ue[ne]);const sn=Ue[0],bt=_(sn)||c,tt=o.convert(T.format,T.colorSpace),Xe=o.convert(T.type),je=$(T.internalFormat,tt,Xe,T.colorSpace),F=c&&T.isVideoTexture!==!0,ve=Se.__version===void 0||de===!0,Ke=Te.dataReady;let k=z(T,sn,bt);oe(r.TEXTURE_CUBE_MAP,T,bt);let Pe;if(Fe){F&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,k,je,sn.width,sn.height);for(let ne=0;ne<6;ne++){Pe=Ue[ne].mipmaps;for(let we=0;we<Pe.length;we++){const Be=Pe[we];T.format!==ir?tt!==null?F?Ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Be.width,Be.height,tt,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Be.width,Be.height,tt,Xe,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,je,Be.width,Be.height,0,tt,Xe,Be.data)}}}else{if(Pe=T.mipmaps,F&&ve){Pe.length>0&&k++;const ne=$t(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,k,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(mt){F?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue[ne].width,Ue[ne].height,tt,Xe,Ue[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Ue[ne].width,Ue[ne].height,0,tt,Xe,Ue[ne].data);for(let we=0;we<Pe.length;we++){const Lt=Pe[we].image[ne].image;F?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Lt.width,Lt.height,tt,Xe,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,je,Lt.width,Lt.height,0,tt,Xe,Lt.data)}}else{F?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,tt,Xe,Ue[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,tt,Xe,Ue[ne]);for(let we=0;we<Pe.length;we++){const Be=Pe[we];F?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,tt,Xe,Be.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,je,tt,Xe,Be.image[ne])}}}P(T,bt)&&N(r.TEXTURE_CUBE_MAP),Se.__version=Te.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Je(I,T,le,de,Te,Se){const ot=o.convert(le.format,le.colorSpace),et=o.convert(le.type),Ne=$(le.internalFormat,ot,et,le.colorSpace);if(!i.get(T).__hasExternalTextures){const mt=Math.max(1,T.width>>Se),Ue=Math.max(1,T.height>>Se);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?t.texImage3D(Te,Se,Ne,mt,Ue,T.depth,0,ot,et,null):t.texImage2D(Te,Se,Ne,mt,Ue,0,ot,et,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,Te,i.get(le).__webglTexture,0,rt(T)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,Te,i.get(le).__webglTexture,Se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(I,T,le){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let de=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(le||_t(T)){const Te=T.depthTexture;Te&&Te.isDepthTexture&&(Te.type===Mr?de=r.DEPTH_COMPONENT32F:Te.type===Ta&&(de=r.DEPTH_COMPONENT24));const Se=rt(T);_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,de,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,de,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){const de=rt(T);le&&_t(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,r.DEPTH24_STENCIL8,T.width,T.height):_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,I)}else{const de=T.textures;for(let Te=0;Te<de.length;Te++){const Se=de[Te],ot=o.convert(Se.format,Se.colorSpace),et=o.convert(Se.type),Ne=$(Se.internalFormat,ot,et,Se.colorSpace),Fe=rt(T);le&&_t(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ne,T.width,T.height):_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),xe(T.depthTexture,0);const de=i.get(T.depthTexture).__webglTexture,Te=rt(T);if(T.depthTexture.format===us)_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(T.depthTexture.format===wo)_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function at(I){const T=i.get(I),le=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,I)}else if(le){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]=r.createRenderbuffer(),ke(T.__webglDepthbuffer[de],I,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),ke(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function J(I,T,le){const de=i.get(I);T!==void 0&&Je(de.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),le!==void 0&&at(I)}function vn(I){const T=I.texture,le=i.get(I),de=i.get(T);I.addEventListener("dispose",De);const Te=I.textures,Se=I.isWebGLCubeRenderTarget===!0,ot=Te.length>1,et=_(I)||c;if(ot||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,u.memory.textures++),Se){le.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(c&&T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer[Ne]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)le.__webglFramebuffer[Ne][Fe]=r.createFramebuffer()}else le.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)le.__webglFramebuffer[Ne]=r.createFramebuffer()}else le.__webglFramebuffer=r.createFramebuffer();if(ot)if(s.drawBuffers)for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const mt=i.get(Te[Ne]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&I.samples>0&&_t(I)===!1){le.__webglMultisampledFramebuffer=r.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Te.length;Ne++){const Fe=Te[Ne];le.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,le.__webglColorRenderbuffer[Ne]);const mt=o.convert(Fe.format,Fe.colorSpace),Ue=o.convert(Fe.type),sn=$(Fe.internalFormat,mt,Ue,Fe.colorSpace,I.isXRRenderTarget===!0),bt=rt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,sn,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(le.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(le.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Se){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T,et);for(let Ne=0;Ne<6;Ne++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Je(le.__webglFramebuffer[Ne][Fe],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Fe);else Je(le.__webglFramebuffer[Ne],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);P(T,et)&&N(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ot){for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const mt=Te[Ne],Ue=i.get(mt);t.bindTexture(r.TEXTURE_2D,Ue.__webglTexture),oe(r.TEXTURE_2D,mt,et),Je(le.__webglFramebuffer,I,mt,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,0),P(mt,et)&&N(r.TEXTURE_2D)}t.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(c?Ne=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,de.__webglTexture),oe(Ne,T,et),c&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Je(le.__webglFramebuffer[Fe],I,T,r.COLOR_ATTACHMENT0,Ne,Fe);else Je(le.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,Ne,0);P(T,et)&&N(Ne),t.unbindTexture()}I.depthBuffer&&at(I)}function We(I){const T=_(I)||c,le=I.textures;for(let de=0,Te=le.length;de<Te;de++){const Se=le[de];if(P(Se,T)){const ot=I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,et=i.get(Se).__webglTexture;t.bindTexture(ot,et),N(ot),t.unbindTexture()}}}function pt(I){if(c&&I.samples>0&&_t(I)===!1){const T=I.textures,le=I.width,de=I.height;let Te=r.COLOR_BUFFER_BIT;const Se=[],ot=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=i.get(I),Ne=T.length>1;if(Ne)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){Se.push(r.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&Se.push(ot);const mt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(mt===!1&&(I.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,et.__webglColorRenderbuffer[Fe]),mt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ot])),Ne){const Ue=i.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ue,0)}r.blitFramebuffer(0,0,le,de,0,0,le,de,Te,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,et.__webglColorRenderbuffer[Fe]);const mt=i.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,mt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function rt(I){return Math.min(s.maxSamples,I.samples)}function _t(I){const T=i.get(I);return c&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(I){const T=u.render.frame;x.get(I)!==T&&(x.set(I,T),I.update())}function Tt(I,T){const le=I.colorSpace,de=I.format,Te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===yd||le!==Da&&le!==Ea&&(un.getTransfer(le)===_n?c===!1?e.has("EXT_sRGB")===!0&&de===ir?(I.format=yd,I.minFilter=Mi,I.generateMipmaps=!1):T=Jg.sRGBToLinear(T):(de!==ir||Te!==Ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),T}function $t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=q,this.setTexture2D=xe,this.setTexture2DArray=ce,this.setTexture3D=Me,this.setTextureCube=be,this.rebindTextures=J,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=_t}function RA(r,e,t){const i=t.isWebGL2;function s(o,u=Ea){let c;const f=un.getTransfer(u);if(o===Ca)return r.UNSIGNED_BYTE;if(o===Vg)return r.UNSIGNED_SHORT_4_4_4_4;if(o===Wg)return r.UNSIGNED_SHORT_5_5_5_1;if(o===qb)return r.BYTE;if(o===Yb)return r.SHORT;if(o===Fd)return r.UNSIGNED_SHORT;if(o===kg)return r.INT;if(o===Ta)return r.UNSIGNED_INT;if(o===Mr)return r.FLOAT;if(o===Ul)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Zb)return r.ALPHA;if(o===ir)return r.RGBA;if(o===Kb)return r.LUMINANCE;if(o===jb)return r.LUMINANCE_ALPHA;if(o===us)return r.DEPTH_COMPONENT;if(o===wo)return r.DEPTH_STENCIL;if(o===yd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===Xg)return r.RED;if(o===$g)return r.RED_INTEGER;if(o===Jb)return r.RG;if(o===qg)return r.RG_INTEGER;if(o===Yg)return r.RGBA_INTEGER;if(o===Fh||o===Oh||o===Bh||o===zh)if(f===_n)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Fh)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Oh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Bh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===zh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Fh)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Oh)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Bh)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===zh)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===im||o===rm||o===am||o===sm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===im)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===rm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===am)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===sm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Zg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===om||o===lm)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===om)return f===_n?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===lm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===cm||o===um||o===fm||o===hm||o===dm||o===pm||o===mm||o===gm||o===_m||o===vm||o===xm||o===Mm||o===bm||o===Sm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===cm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===um)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===hm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===dm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===pm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===mm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===gm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_m)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===vm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===xm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Mm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Sm)return f===_n?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gh||o===Em||o===ym)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===Gh)return f===_n?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===ym)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Qb||o===Tm||o===Am||o===wm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===Gh)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Tm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Am)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===wm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===cs?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[o]!==void 0?r[o]:null}return{convert:s}}class LA extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wu extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PA={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),_=this._getHandJoint(p,y);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const m=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],M=m.position.distanceTo(x.position),b=.02,w=.005;p.inputState.pinching&&M>b+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&M<=b-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ci,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new Pa({extensions:{fragDepth:!0},vertexShader:DA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rr(new $u(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class NA extends hs{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",f=1,p=null,m=null,x=null,M=null,b=null,w=null;const y=new UA,g=t.getContextAttributes();let _=null,U=null;const P=[],N=[],$=new Rt;let z=null;const B=new Di;B.layers.enable(1),B.viewport=new Zn;const ee=new Di;ee.layers.enable(2),ee.viewport=new Zn;const De=[B,ee],C=new LA;C.layers.enable(1),C.layers.enable(2);let G=null,Ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=P[oe];return ye===void 0&&(ye=new fd,P[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=P[oe];return ye===void 0&&(ye=new fd,P[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=P[oe];return ye===void 0&&(ye=new fd,P[oe]=ye),ye.getHandSpace()};function Ce(oe){const ye=N.indexOf(oe.inputSource);if(ye===-1)return;const He=P[ye];He!==void 0&&(He.update(oe.inputSource,oe.frame,p||u),He.dispatchEvent({type:oe.type,data:oe.inputSource}))}function q(){s.removeEventListener("select",Ce),s.removeEventListener("selectstart",Ce),s.removeEventListener("selectend",Ce),s.removeEventListener("squeeze",Ce),s.removeEventListener("squeezestart",Ce),s.removeEventListener("squeezeend",Ce),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",pe);for(let oe=0;oe<P.length;oe++){const ye=N[oe];ye!==null&&(N[oe]=null,P[oe].disconnect(ye))}G=null,Ie=null,y.reset(),e.setRenderTarget(_),b=null,M=null,x=null,s=null,U=null,Mt.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize($.width,$.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return M!==null?M:b},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",Ce),s.addEventListener("selectstart",Ce),s.addEventListener("selectend",Ce),s.addEventListener("squeeze",Ce),s.addEventListener("squeezestart",Ce),s.addEventListener("squeezeend",Ce),s.addEventListener("end",q),s.addEventListener("inputsourceschange",pe),g.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize($),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ye={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new fs(b.framebufferWidth,b.framebufferHeight,{format:ir,type:Ca,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ye=null,He=null,dt=null;g.depth&&(dt=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=g.stencil?wo:us,He=g.stencil?cs:Ta);const Je={colorFormat:t.RGBA8,depthFormat:dt,scaleFactor:o};x=new XRWebGLBinding(s,t),M=x.createProjectionLayer(Je),s.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),U=new fs(M.textureWidth,M.textureHeight,{format:ir,type:Ca,depthTexture:new f_(M.textureWidth,M.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ke=e.properties.get(U);ke.__ignoreDepthValues=M.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await s.requestReferenceSpace(c),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function pe(oe){for(let ye=0;ye<oe.removed.length;ye++){const He=oe.removed[ye],dt=N.indexOf(He);dt>=0&&(N[dt]=null,P[dt].disconnect(He))}for(let ye=0;ye<oe.added.length;ye++){const He=oe.added[ye];let dt=N.indexOf(He);if(dt===-1){for(let ke=0;ke<P.length;ke++)if(ke>=N.length){N.push(He),dt=ke;break}else if(N[ke]===null){N[ke]=He,dt=ke;break}if(dt===-1)break}const Je=P[dt];Je&&Je.connect(He)}}const ue=new te,xe=new te;function ce(oe,ye,He){ue.setFromMatrixPosition(ye.matrixWorld),xe.setFromMatrixPosition(He.matrixWorld);const dt=ue.distanceTo(xe),Je=ye.projectionMatrix.elements,ke=He.projectionMatrix.elements,Ht=Je[14]/(Je[10]-1),at=Je[14]/(Je[10]+1),J=(Je[9]+1)/Je[5],vn=(Je[9]-1)/Je[5],We=(Je[8]-1)/Je[0],pt=(ke[8]+1)/ke[0],rt=Ht*We,_t=Ht*pt,vt=dt/(-We+pt),Tt=vt*-We;ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Tt),oe.translateZ(vt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const $t=Ht+vt,I=at+vt,T=rt-Tt,le=_t+(dt-Tt),de=J*at/I*$t,Te=vn*at/I*$t;oe.projectionMatrix.makePerspective(T,le,de,Te,$t,I),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function Me(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;y.texture!==null&&(oe.near=y.depthNear,oe.far=y.depthFar),C.near=ee.near=B.near=oe.near,C.far=ee.far=B.far=oe.far,(G!==C.near||Ie!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,Ie=C.far,B.near=G,B.far=Ie,ee.near=G,ee.far=Ie,B.updateProjectionMatrix(),ee.updateProjectionMatrix(),oe.updateProjectionMatrix());const ye=oe.parent,He=C.cameras;Me(C,ye);for(let dt=0;dt<He.length;dt++)Me(He[dt],ye);He.length===2?ce(C,B,ee):C.projectionMatrix.copy(B.projectionMatrix),be(oe,C,ye)};function be(oe,ye,He){He===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(He.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Nl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(M===null&&b===null))return f},this.setFoveation=function(oe){f=oe,M!==null&&(M.fixedFoveation=oe),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null};let Le=null;function Ze(oe,ye){if(m=ye.getViewerPose(p||u),w=ye,m!==null){const He=m.views;b!==null&&(e.setRenderTargetFramebuffer(U,b.framebuffer),e.setRenderTarget(U));let dt=!1;He.length!==C.cameras.length&&(C.cameras.length=0,dt=!0);for(let ke=0;ke<He.length;ke++){const Ht=He[ke];let at=null;if(b!==null)at=b.getViewport(Ht);else{const vn=x.getViewSubImage(M,Ht);at=vn.viewport,ke===0&&(e.setRenderTargetTextures(U,vn.colorTexture,M.ignoreDepthValues?void 0:vn.depthStencilTexture),e.setRenderTarget(U))}let J=De[ke];J===void 0&&(J=new Di,J.layers.enable(ke),J.viewport=new Zn,De[ke]=J),J.matrix.fromArray(Ht.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ht.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(at.x,at.y,at.width,at.height),ke===0&&(C.matrix.copy(J.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),dt===!0&&C.cameras.push(J)}const Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const ke=x.getDepthInformation(He[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,s.renderState)}}for(let He=0;He<P.length;He++){const dt=N[He],Je=P[He];dt!==null&&Je!==void 0&&Je.update(dt,ye,p||u)}y.render(e,C),Le&&Le(oe,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),w=null}const Mt=new u_;Mt.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){Le=oe},this.dispose=function(){}}}const rs=new Yr,FA=new Sn;function OA(r,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,s_(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,U,P,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(g,_):_.isMeshToonMaterial?(o(g,_),x(g,_)):_.isMeshPhongMaterial?(o(g,_),m(g,_)):_.isMeshStandardMaterial?(o(g,_),M(g,_),_.isMeshPhysicalMaterial&&b(g,_,N)):_.isMeshMatcapMaterial?(o(g,_),w(g,_)):_.isMeshDepthMaterial?o(g,_):_.isMeshDistanceMaterial?(o(g,_),y(g,_)):_.isMeshNormalMaterial?o(g,_):_.isLineBasicMaterial?(u(g,_),_.isLineDashedMaterial&&c(g,_)):_.isPointsMaterial?f(g,_,U,P):_.isSpriteMaterial?p(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===bi&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===bi&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const U=e.get(_),P=U.envMap,N=U.envMapRotation;if(P&&(g.envMap.value=P,rs.copy(N),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(rs)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const $=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*$,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function c(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function f(g,_,U,P){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*U,g.scale.value=P*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function p(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function x(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function M(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function b(g,_,U){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===bi&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=U.texture,g.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function y(g,_){const U=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(U.matrixWorld),g.nearDistance.value=U.shadow.camera.near,g.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function BA(r,e,t,i){let s={},o={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(U,P){const N=P.program;i.uniformBlockBinding(U,N)}function p(U,P){let N=s[U.id];N===void 0&&(w(U),N=m(U),s[U.id]=N,U.addEventListener("dispose",g));const $=P.program;i.updateUBOMapping(U,$);const z=e.render.frame;o[U.id]!==z&&(M(U),o[U.id]=z)}function m(U){const P=x();U.__bindingPointIndex=P;const N=r.createBuffer(),$=U.__size,z=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,$,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,N),N}function x(){for(let U=0;U<c;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(U){const P=s[U.id],N=U.uniforms,$=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let z=0,B=N.length;z<B;z++){const ee=Array.isArray(N[z])?N[z]:[N[z]];for(let De=0,C=ee.length;De<C;De++){const G=ee[De];if(b(G,z,De,$)===!0){const Ie=G.__offset,Ce=Array.isArray(G.value)?G.value:[G.value];let q=0;for(let pe=0;pe<Ce.length;pe++){const ue=Ce[pe],xe=y(ue);typeof ue=="number"||typeof ue=="boolean"?(G.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,Ie+q,G.__data)):ue.isMatrix3?(G.__data[0]=ue.elements[0],G.__data[1]=ue.elements[1],G.__data[2]=ue.elements[2],G.__data[3]=0,G.__data[4]=ue.elements[3],G.__data[5]=ue.elements[4],G.__data[6]=ue.elements[5],G.__data[7]=0,G.__data[8]=ue.elements[6],G.__data[9]=ue.elements[7],G.__data[10]=ue.elements[8],G.__data[11]=0):(ue.toArray(G.__data,q),q+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Ie,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(U,P,N,$){const z=U.value,B=P+"_"+N;if($[B]===void 0)return typeof z=="number"||typeof z=="boolean"?$[B]=z:$[B]=z.clone(),!0;{const ee=$[B];if(typeof z=="number"||typeof z=="boolean"){if(ee!==z)return $[B]=z,!0}else if(ee.equals(z)===!1)return ee.copy(z),!0}return!1}function w(U){const P=U.uniforms;let N=0;const $=16;for(let B=0,ee=P.length;B<ee;B++){const De=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,G=De.length;C<G;C++){const Ie=De[C],Ce=Array.isArray(Ie.value)?Ie.value:[Ie.value];for(let q=0,pe=Ce.length;q<pe;q++){const ue=Ce[q],xe=y(ue),ce=N%$;ce!==0&&$-ce<xe.boundary&&(N+=$-ce),Ie.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),Ie.__offset=N,N+=xe.storage}}}const z=N%$;return z>0&&(N+=$-z),U.__size=N,U.__cache={},this}function y(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function g(U){const P=U.target;P.removeEventListener("dispose",g);const N=u.indexOf(P.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(s[P.id]),delete s[P.id],delete o[P.id]}function _(){for(const U in s)r.deleteBuffer(s[U]);u=[],s={},o={}}return{bind:f,update:p,dispose:_}}class Hd{constructor(e={}){const{canvas:t=AS(),context:i=null,depth:s=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let M;i!==null?M=i.getContextAttributes().alpha:M=u;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const _=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vr,this._useLegacyLights=!1,this.toneMapping=wa,this.toneMappingExposure=1;const P=this;let N=!1,$=0,z=0,B=null,ee=-1,De=null;const C=new Zn,G=new Zn;let Ie=null;const Ce=new jt(0);let q=0,pe=t.width,ue=t.height,xe=1,ce=null,Me=null;const be=new Zn(0,0,pe,ue),Le=new Zn(0,0,pe,ue);let Ze=!1;const Mt=new c_;let oe=!1,ye=!1,He=null;const dt=new Sn,Je=new Rt,ke=new te,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return B===null?xe:1}let J=i;function vn(D,j){for(let ae=0;ae<D.length;ae++){const se=D[ae],ie=t.getContext(se,j);if(ie!==null)return ie}return null}try{const D={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),J===null){const j=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&j.shift(),J=vn(j,D),J===null)throw vn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let We,pt,rt,_t,vt,Tt,$t,I,T,le,de,Te,Se,ot,et,Ne,Fe,mt,Ue,sn,bt,tt,Xe,je;function F(){We=new W1(J),pt=new O1(J,We,e),We.init(pt),tt=new RA(J,We,pt),rt=new wA(J,We,pt),_t=new q1(J),vt=new dA,Tt=new CA(J,We,rt,vt,pt,tt,_t),$t=new z1(P),I=new V1(P),T=new JS(J,pt),Xe=new N1(J,We,T,pt),le=new X1(J,T,_t,Xe),de=new j1(J,le,T,_t),Ue=new K1(J,pt,Tt),Ne=new B1(vt),Te=new hA(P,$t,I,We,pt,Xe,Ne),Se=new OA(P,vt),ot=new mA,et=new bA(We,pt),mt=new U1(P,$t,I,rt,de,M,f),Fe=new AA(P,de,pt),je=new BA(J,_t,pt,rt),sn=new F1(J,We,_t,pt),bt=new $1(J,We,_t,pt),_t.programs=Te.programs,P.capabilities=pt,P.extensions=We,P.properties=vt,P.renderLists=ot,P.shadowMap=Fe,P.state=rt,P.info=_t}F();const ve=new NA(P,J);this.xr=ve,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const D=We.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=We.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(D){D!==void 0&&(xe=D,this.setSize(pe,ue,!1))},this.getSize=function(D){return D.set(pe,ue)},this.setSize=function(D,j,ae=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=D,ue=j,t.width=Math.floor(D*xe),t.height=Math.floor(j*xe),ae===!0&&(t.style.width=D+"px",t.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(pe*xe,ue*xe).floor()},this.setDrawingBufferSize=function(D,j,ae){pe=D,ue=j,xe=ae,t.width=Math.floor(D*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(C)},this.getViewport=function(D){return D.copy(be)},this.setViewport=function(D,j,ae,se){D.isVector4?be.set(D.x,D.y,D.z,D.w):be.set(D,j,ae,se),rt.viewport(C.copy(be).multiplyScalar(xe).round())},this.getScissor=function(D){return D.copy(Le)},this.setScissor=function(D,j,ae,se){D.isVector4?Le.set(D.x,D.y,D.z,D.w):Le.set(D,j,ae,se),rt.scissor(G.copy(Le).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(D){rt.setScissorTest(Ze=D)},this.setOpaqueSort=function(D){ce=D},this.setTransparentSort=function(D){Me=D},this.getClearColor=function(D){return D.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(D=!0,j=!0,ae=!0){let se=0;if(D){let ie=!1;if(B!==null){const Ve=B.texture.format;ie=Ve===Yg||Ve===qg||Ve===$g}if(ie){const Ve=B.texture.type,Qe=Ve===Ca||Ve===Ta||Ve===Fd||Ve===cs||Ve===Vg||Ve===Wg,st=mt.getClearColor(),lt=mt.getClearAlpha(),At=st.r,St=st.g,yt=st.b;Qe?(b[0]=At,b[1]=St,b[2]=yt,b[3]=lt,J.clearBufferuiv(J.COLOR,0,b)):(w[0]=At,w[1]=St,w[2]=yt,w[3]=lt,J.clearBufferiv(J.COLOR,0,w))}else se|=J.COLOR_BUFFER_BIT}j&&(se|=J.DEPTH_BUFFER_BIT),ae&&(se|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ot.dispose(),et.dispose(),vt.dispose(),$t.dispose(),I.dispose(),de.dispose(),Xe.dispose(),je.dispose(),Te.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",hn),ve.removeEventListener("sessionend",kt),He&&(He.dispose(),He=null),Qt.stop()};function Ke(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const D=_t.autoReset,j=Fe.enabled,ae=Fe.autoUpdate,se=Fe.needsUpdate,ie=Fe.type;F(),_t.autoReset=D,Fe.enabled=j,Fe.autoUpdate=ae,Fe.needsUpdate=se,Fe.type=ie}function Pe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ne(D){const j=D.target;j.removeEventListener("dispose",ne),we(j)}function we(D){Be(D),vt.remove(D)}function Be(D){const j=vt.get(D).programs;j!==void 0&&(j.forEach(function(ae){Te.releaseProgram(ae)}),D.isShaderMaterial&&Te.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ae,se,ie,Ve){j===null&&(j=Ht);const Qe=ie.isMesh&&ie.matrixWorld.determinant()<0,st=Io(D,j,ae,se,ie);rt.setMaterial(se,Qe);let lt=ae.index,At=1;if(se.wireframe===!0){if(lt=le.getWireframeAttribute(ae),lt===void 0)return;At=2}const St=ae.drawRange,yt=ae.attributes.position;let dn=St.start*At,Gn=(St.start+St.count)*At;Ve!==null&&(dn=Math.max(dn,Ve.start*At),Gn=Math.min(Gn,(Ve.start+Ve.count)*At)),lt!==null?(dn=Math.max(dn,0),Gn=Math.min(Gn,lt.count)):yt!=null&&(dn=Math.max(dn,0),Gn=Math.min(Gn,yt.count));const gn=Gn-dn;if(gn<0||gn===1/0)return;Xe.setup(ie,se,st,ae,lt);let Hn,on=sn;if(lt!==null&&(Hn=T.get(lt),on=bt,on.setIndex(Hn)),ie.isMesh)se.wireframe===!0?(rt.setLineWidth(se.wireframeLinewidth*at()),on.setMode(J.LINES)):on.setMode(J.TRIANGLES);else if(ie.isLine){let gt=se.linewidth;gt===void 0&&(gt=1),rt.setLineWidth(gt*at()),ie.isLineSegments?on.setMode(J.LINES):ie.isLineLoop?on.setMode(J.LINE_LOOP):on.setMode(J.LINE_STRIP)}else ie.isPoints?on.setMode(J.POINTS):ie.isSprite&&on.setMode(J.TRIANGLES);if(ie.isBatchedMesh)on.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)on.renderInstances(dn,gn,ie.count);else if(ae.isInstancedBufferGeometry){const gt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Na=Math.min(ae.instanceCount,gt);on.renderInstances(dn,gn,Na)}else on.render(dn,gn)};function Lt(D,j,ae){D.transparent===!0&&D.side===$r&&D.forceSinglePass===!1?(D.side=bi,D.needsUpdate=!0,Vi(D,j,ae),D.side=Ra,D.needsUpdate=!0,Vi(D,j,ae),D.side=$r):Vi(D,j,ae)}this.compile=function(D,j,ae=null){ae===null&&(ae=D),g=et.get(ae),g.init(),U.push(g),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),D!==ae&&D.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),g.setupLights(P._useLegacyLights);const se=new Set;return D.traverse(function(ie){const Ve=ie.material;if(Ve)if(Array.isArray(Ve))for(let Qe=0;Qe<Ve.length;Qe++){const st=Ve[Qe];Lt(st,ae,ie),se.add(st)}else Lt(Ve,ae,ie),se.add(Ve)}),U.pop(),g=null,se},this.compileAsync=function(D,j,ae=null){const se=this.compile(D,j,ae);return new Promise(ie=>{function Ve(){if(se.forEach(function(Qe){vt.get(Qe).currentProgram.isReady()&&se.delete(Qe)}),se.size===0){ie(D);return}setTimeout(Ve,10)}We.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let qt=null;function Jt(D){qt&&qt(D)}function hn(){Qt.stop()}function kt(){Qt.start()}const Qt=new u_;Qt.setAnimationLoop(Jt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(D){qt=D,ve.setAnimationLoop(D),D===null?Qt.stop():Qt.start()},ve.addEventListener("sessionstart",hn),ve.addEventListener("sessionend",kt),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(j),j=ve.getCamera()),D.isScene===!0&&D.onBeforeRender(P,D,j,B),g=et.get(D,U.length),g.init(),U.push(g),dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(dt),ye=this.localClippingEnabled,oe=Ne.init(this.clippingPlanes,ye),y=ot.get(D,_.length),y.init(),_.push(y),wn(D,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(ce,Me),this.info.render.frame++,oe===!0&&Ne.beginShadows();const ae=g.state.shadowsArray;if(Fe.render(ae,D,j),oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1)&&mt.render(y,D),g.setupLights(P._useLegacyLights),j.isArrayCamera){const se=j.cameras;for(let ie=0,Ve=se.length;ie<Ve;ie++){const Qe=se[ie];fi(y,D,Qe,Qe.viewport)}}else fi(y,D,j);B!==null&&(Tt.updateMultisampleRenderTarget(B),Tt.updateRenderTargetMipmap(B)),D.isScene===!0&&D.onAfterRender(P,D,j),Xe.resetDefaultState(),ee=-1,De=null,U.pop(),U.length>0?g=U[U.length-1]:g=null,_.pop(),_.length>0?y=_[_.length-1]:y=null};function wn(D,j,ae,se){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Mt.intersectsSprite(D)){se&&ke.setFromMatrixPosition(D.matrixWorld).applyMatrix4(dt);const Qe=de.update(D),st=D.material;st.visible&&y.push(D,Qe,st,ae,ke.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Mt.intersectsObject(D))){const Qe=de.update(D),st=D.material;if(se&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ke.copy(D.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),ke.copy(Qe.boundingSphere.center)),ke.applyMatrix4(D.matrixWorld).applyMatrix4(dt)),Array.isArray(st)){const lt=Qe.groups;for(let At=0,St=lt.length;At<St;At++){const yt=lt[At],dn=st[yt.materialIndex];dn&&dn.visible&&y.push(D,Qe,dn,ae,ke.z,yt)}}else st.visible&&y.push(D,Qe,st,ae,ke.z,null)}}const Ve=D.children;for(let Qe=0,st=Ve.length;Qe<st;Qe++)wn(Ve[Qe],j,ae,se)}function fi(D,j,ae,se){const ie=D.opaque,Ve=D.transmissive,Qe=D.transparent;g.setupLightsView(ae),oe===!0&&Ne.setGlobalState(P.clippingPlanes,ae),Ve.length>0&&Zr(ie,Ve,j,ae),se&&rt.viewport(C.copy(se)),ie.length>0&&Kr(ie,j,ae),Ve.length>0&&Kr(Ve,j,ae),Qe.length>0&&Kr(Qe,j,ae),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Zr(D,j,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ve=pt.isWebGL2;He===null&&(He=new fs(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?Ul:Ca,minFilter:ls,samples:Ve?4:0})),P.getDrawingBufferSize(Je),Ve?He.setSize(Je.x,Je.y):He.setSize(Bu(Je.x),Bu(Je.y));const Qe=P.getRenderTarget();P.setRenderTarget(He),P.getClearColor(Ce),q=P.getClearAlpha(),q<1&&P.setClearColor(16777215,.5),P.clear();const st=P.toneMapping;P.toneMapping=wa,Kr(D,ae,se),Tt.updateMultisampleRenderTarget(He),Tt.updateRenderTargetMipmap(He);let lt=!1;for(let At=0,St=j.length;At<St;At++){const yt=j[At],dn=yt.object,Gn=yt.geometry,gn=yt.material,Hn=yt.group;if(gn.side===$r&&dn.layers.test(se.layers)){const on=gn.side;gn.side=bi,gn.needsUpdate=!0,ps(dn,ae,se,Gn,gn,Hn),gn.side=on,gn.needsUpdate=!0,lt=!0}}lt===!0&&(Tt.updateMultisampleRenderTarget(He),Tt.updateRenderTargetMipmap(He)),P.setRenderTarget(Qe),P.setClearColor(Ce,q),P.toneMapping=st}function Kr(D,j,ae){const se=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ve=D.length;ie<Ve;ie++){const Qe=D[ie],st=Qe.object,lt=Qe.geometry,At=se===null?Qe.material:se,St=Qe.group;st.layers.test(ae.layers)&&ps(st,j,ae,lt,At,St)}}function ps(D,j,ae,se,ie,Ve){D.onBeforeRender(P,j,ae,se,ie,Ve),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ie.onBeforeRender(P,j,ae,se,D,Ve),ie.transparent===!0&&ie.side===$r&&ie.forceSinglePass===!1?(ie.side=bi,ie.needsUpdate=!0,P.renderBufferDirect(ae,j,se,ie,D,Ve),ie.side=Ra,ie.needsUpdate=!0,P.renderBufferDirect(ae,j,se,ie,D,Ve),ie.side=$r):P.renderBufferDirect(ae,j,se,ie,D,Ve),D.onAfterRender(P,j,ae,se,ie,Ve)}function Vi(D,j,ae){j.isScene!==!0&&(j=Ht);const se=vt.get(D),ie=g.state.lights,Ve=g.state.shadowsArray,Qe=ie.state.version,st=Te.getParameters(D,ie.state,Ve,j,ae),lt=Te.getProgramCacheKey(st);let At=se.programs;se.environment=D.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(D.isMeshStandardMaterial?I:$t).get(D.envMap||se.environment),se.envMapRotation=se.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,At===void 0&&(D.addEventListener("dispose",ne),At=new Map,se.programs=At);let St=At.get(lt);if(St!==void 0){if(se.currentProgram===St&&se.lightsStateVersion===Qe)return Ua(D,st),St}else st.uniforms=Te.getUniforms(D),D.onBuild(ae,st,P),D.onBeforeCompile(st,P),St=Te.acquireProgram(st,lt),At.set(lt,St),se.uniforms=st.uniforms;const yt=se.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(yt.clippingPlanes=Ne.uniform),Ua(D,st),se.needsLights=gs(D),se.lightsStateVersion=Qe,se.needsLights&&(yt.ambientLightColor.value=ie.state.ambient,yt.lightProbe.value=ie.state.probe,yt.directionalLights.value=ie.state.directional,yt.directionalLightShadows.value=ie.state.directionalShadow,yt.spotLights.value=ie.state.spot,yt.spotLightShadows.value=ie.state.spotShadow,yt.rectAreaLights.value=ie.state.rectArea,yt.ltc_1.value=ie.state.rectAreaLTC1,yt.ltc_2.value=ie.state.rectAreaLTC2,yt.pointLights.value=ie.state.point,yt.pointLightShadows.value=ie.state.pointShadow,yt.hemisphereLights.value=ie.state.hemi,yt.directionalShadowMap.value=ie.state.directionalShadowMap,yt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,yt.spotShadowMap.value=ie.state.spotShadowMap,yt.spotLightMatrix.value=ie.state.spotLightMatrix,yt.spotLightMap.value=ie.state.spotLightMap,yt.pointShadowMap.value=ie.state.pointShadowMap,yt.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=St,se.uniformsList=null,St}function ms(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=Pu.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Ua(D,j){const ae=vt.get(D);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Io(D,j,ae,se,ie){j.isScene!==!0&&(j=Ht),Tt.resetTextureUnits();const Ve=j.fog,Qe=se.isMeshStandardMaterial?j.environment:null,st=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Da,lt=(se.isMeshStandardMaterial?I:$t).get(se.envMap||Qe),At=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,St=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),yt=!!ae.morphAttributes.position,dn=!!ae.morphAttributes.normal,Gn=!!ae.morphAttributes.color;let gn=wa;se.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gn=P.toneMapping);const Hn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,on=Hn!==void 0?Hn.length:0,gt=vt.get(se),Na=g.state.lights;if(oe===!0&&(ye===!0||D!==De)){const Kn=D===De&&se.id===ee;Ne.setState(se,D,Kn)}let ln=!1;se.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Na.state.version||gt.outputColorSpace!==st||ie.isBatchedMesh&&gt.batching===!1||!ie.isBatchedMesh&&gt.batching===!0||ie.isInstancedMesh&&gt.instancing===!1||!ie.isInstancedMesh&&gt.instancing===!0||ie.isSkinnedMesh&&gt.skinning===!1||!ie.isSkinnedMesh&&gt.skinning===!0||ie.isInstancedMesh&&gt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&gt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&gt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&gt.instancingMorph===!1&&ie.morphTexture!==null||gt.envMap!==lt||se.fog===!0&&gt.fog!==Ve||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Ne.numPlanes||gt.numIntersection!==Ne.numIntersection)||gt.vertexAlphas!==At||gt.vertexTangents!==St||gt.morphTargets!==yt||gt.morphNormals!==dn||gt.morphColors!==Gn||gt.toneMapping!==gn||pt.isWebGL2===!0&&gt.morphTargetsCount!==on)&&(ln=!0):(ln=!0,gt.__version=se.version);let Ii=gt.currentProgram;ln===!0&&(Ii=Vi(se,j,ie));let Fa=!1,Wi=!1,jr=!1;const En=Ii.getUniforms(),hi=gt.uniforms;if(rt.useProgram(Ii.program)&&(Fa=!0,Wi=!0,jr=!0),se.id!==ee&&(ee=se.id,Wi=!0),Fa||De!==D){En.setValue(J,"projectionMatrix",D.projectionMatrix),En.setValue(J,"viewMatrix",D.matrixWorldInverse);const Kn=En.map.cameraPosition;Kn!==void 0&&Kn.setValue(J,ke.setFromMatrixPosition(D.matrixWorld)),pt.logarithmicDepthBuffer&&En.setValue(J,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&En.setValue(J,"isOrthographic",D.isOrthographicCamera===!0),De!==D&&(De=D,Wi=!0,jr=!0)}if(ie.isSkinnedMesh){En.setOptional(J,ie,"bindMatrix"),En.setOptional(J,ie,"bindMatrixInverse");const Kn=ie.skeleton;Kn&&(pt.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),En.setValue(J,"boneTexture",Kn.boneTexture,Tt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(En.setOptional(J,ie,"batchingTexture"),En.setValue(J,"batchingTexture",ie._matricesTexture,Tt));const Jr=ae.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&pt.isWebGL2===!0)&&Ue.update(ie,ae,Ii),(Wi||gt.receiveShadow!==ie.receiveShadow)&&(gt.receiveShadow=ie.receiveShadow,En.setValue(J,"receiveShadow",ie.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(hi.envMap.value=lt,hi.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),Wi&&(En.setValue(J,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&Uo(hi,jr),Ve&&se.fog===!0&&Se.refreshFogUniforms(hi,Ve),Se.refreshMaterialUniforms(hi,se,xe,ue,He),Pu.upload(J,ms(gt),hi,Tt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Pu.upload(J,ms(gt),hi,Tt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&En.setValue(J,"center",ie.center),En.setValue(J,"modelViewMatrix",ie.modelViewMatrix),En.setValue(J,"normalMatrix",ie.normalMatrix),En.setValue(J,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Kn=se.uniformsGroups;for(let Qr=0,Oa=Kn.length;Qr<Oa;Qr++)if(pt.isWebGL2){const yr=Kn[Qr];je.update(yr,Ii),je.bind(yr,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Uo(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function gs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(D,j,ae){vt.get(D.texture).__webglTexture=j,vt.get(D.depthTexture).__webglTexture=ae;const se=vt.get(D);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ae===void 0,se.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,j){const ae=vt.get(D);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,ae=0){B=D,$=j,z=ae;let se=!0,ie=null,Ve=!1,Qe=!1;if(D){const lt=vt.get(D);lt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(J.FRAMEBUFFER,null),se=!1):lt.__webglFramebuffer===void 0?Tt.setupRenderTarget(D):lt.__hasExternalTextures&&Tt.rebindTextures(D,vt.get(D.texture).__webglTexture,vt.get(D.depthTexture).__webglTexture);const At=D.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Qe=!0);const St=vt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(St[j])?ie=St[j][ae]:ie=St[j],Ve=!0):pt.isWebGL2&&D.samples>0&&Tt.useMultisampledRTT(D)===!1?ie=vt.get(D).__webglMultisampledFramebuffer:Array.isArray(St)?ie=St[ae]:ie=St,C.copy(D.viewport),G.copy(D.scissor),Ie=D.scissorTest}else C.copy(be).multiplyScalar(xe).floor(),G.copy(Le).multiplyScalar(xe).floor(),Ie=Ze;if(rt.bindFramebuffer(J.FRAMEBUFFER,ie)&&pt.drawBuffers&&se&&rt.drawBuffers(D,ie),rt.viewport(C),rt.scissor(G),rt.setScissorTest(Ie),Ve){const lt=vt.get(D.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt.__webglTexture,ae)}else if(Qe){const lt=vt.get(D.texture),At=j||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,lt.__webglTexture,ae||0,At)}ee=-1},this.readRenderTargetPixels=function(D,j,ae,se,ie,Ve,Qe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=vt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Qe!==void 0&&(st=st[Qe]),st){rt.bindFramebuffer(J.FRAMEBUFFER,st);try{const lt=D.texture,At=lt.format,St=lt.type;if(At!==ir&&tt.convert(At)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const yt=St===Ul&&(We.has("EXT_color_buffer_half_float")||pt.isWebGL2&&We.has("EXT_color_buffer_float"));if(St!==Ca&&tt.convert(St)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===Mr&&(pt.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-se&&ae>=0&&ae<=D.height-ie&&J.readPixels(j,ae,se,ie,tt.convert(At),tt.convert(St),Ve)}finally{const lt=B!==null?vt.get(B).__webglFramebuffer:null;rt.bindFramebuffer(J.FRAMEBUFFER,lt)}}},this.copyFramebufferToTexture=function(D,j,ae=0){const se=Math.pow(2,-ae),ie=Math.floor(j.image.width*se),Ve=Math.floor(j.image.height*se);Tt.setTexture2D(j,0),J.copyTexSubImage2D(J.TEXTURE_2D,ae,0,0,D.x,D.y,ie,Ve),rt.unbindTexture()},this.copyTextureToTexture=function(D,j,ae,se=0){const ie=j.image.width,Ve=j.image.height,Qe=tt.convert(ae.format),st=tt.convert(ae.type);Tt.setTexture2D(ae,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ae.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ae.unpackAlignment),j.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,se,D.x,D.y,ie,Ve,Qe,st,j.image.data):j.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,se,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,Qe,j.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,se,D.x,D.y,Qe,st,j.image),se===0&&ae.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(D,j,ae,se,ie=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=Math.round(D.max.x-D.min.x),Qe=Math.round(D.max.y-D.min.y),st=D.max.z-D.min.z+1,lt=tt.convert(se.format),At=tt.convert(se.type);let St;if(se.isData3DTexture)Tt.setTexture3D(se,0),St=J.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)Tt.setTexture2DArray(se,0),St=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,se.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,se.unpackAlignment);const yt=J.getParameter(J.UNPACK_ROW_LENGTH),dn=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Gn=J.getParameter(J.UNPACK_SKIP_PIXELS),gn=J.getParameter(J.UNPACK_SKIP_ROWS),Hn=J.getParameter(J.UNPACK_SKIP_IMAGES),on=ae.isCompressedTexture?ae.mipmaps[ie]:ae.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,on.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,on.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,D.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,D.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,D.min.z),ae.isDataTexture||ae.isData3DTexture?J.texSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,At,on.data):se.isCompressedArrayTexture?J.compressedTexSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,on.data):J.texSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,At,on),J.pixelStorei(J.UNPACK_ROW_LENGTH,yt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,dn),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Gn),J.pixelStorei(J.UNPACK_SKIP_ROWS,gn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Hn),ie===0&&se.generateMipmaps&&J.generateMipmap(St),rt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Tt.setTextureCube(D,0):D.isData3DTexture?Tt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Tt.setTexture2DArray(D,0):Tt.setTexture2D(D,0),rt.unbindTexture()},this.resetState=function(){$=0,z=0,B=null,rt.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Od?"display-p3":"srgb",t.unpackColorSpace=un.workingColorSpace===Wu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zA extends Hd{}zA.prototype.isWebGL1Renderer=!0;class GA extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class HA extends ci{constructor(e=null,t=1,i=1,s,o,u,c,f,p=Yn,m=Yn,x,M){super(null,u,c,f,p,m,s,o,x,M),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends ar{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mo=new Sn,xg=new Sn,Cu=[],Mg=new ds,kA=new Sn,Cl=new rr,Rl=new Fl;class bg extends rr{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Mg.copy(e.boundingBox).applyMatrix4(mo),this.boundingBox.union(Mg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Rl.copy(e.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(Rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,u=e*o+1;for(let c=0;c<i.length;c++)i[c]=s[u+c]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,mo),xg.multiplyMatrices(i,mo),Cl.matrixWorld=xg,Cl.raycast(e,Cu);for(let u=0,c=Cu.length;u<c;u++){const f=Cu[u];f.instanceId=o,f.object=this,t.push(f)}Cu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new HA(new Float32Array(s*this.count),s,this.count,Xg,Mr));const o=this.morphTexture.source.data.data;let u=0;for(let p=0;p<i.length;p++)u+=i[p];const c=this.geometry.morphTargetsRelative?1:1-u,f=s*e;o[f]=c,o.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kd extends Ia{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],u=[],c=[],f=[],p=new te,m=new Rt;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let x=0,M=3;x<=t;x++,M+=3){const b=i+x/t*s;p.x=e*Math.cos(b),p.y=e*Math.sin(b),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(u[M]/e+1)/2,m.y=(u[M+1]/e+1)/2,f.push(m.x,m.y)}for(let x=1;x<=t;x++)o.push(x,x+1,0);this.setIndex(o),this.setAttribute("position",new Sr(u,3)),this.setAttribute("normal",new Sr(c,3)),this.setAttribute("uv",new Sr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ni(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);var wd=function(r,e){return wd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},wd(r,e)};function Po(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");wd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Cd(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rd(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),s,o=[],u;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)o.push(s.value)}catch(c){u={error:c}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return o}function Ld(r,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,o;i<s;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return r.concat(o||Array.prototype.slice.call(e))}function Er(r){return typeof r=="function"}function __(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var hd=__(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,s){return s+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Pd(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Yu=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,s,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=Cd(u),f=c.next();!f.done;f=c.next()){var p=f.value;p.remove(this)}}catch(y){e={error:y}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var m=this.initialTeardown;if(Er(m))try{m()}catch(y){o=y instanceof hd?y.errors:[y]}var x=this._finalizers;if(x){this._finalizers=null;try{for(var M=Cd(x),b=M.next();!b.done;b=M.next()){var w=b.value;try{Eg(w)}catch(y){o=o??[],y instanceof hd?o=Ld(Ld([],Rd(o)),Rd(y.errors)):o.push(y)}}}catch(y){i={error:y}}finally{try{b&&!b.done&&(s=M.return)&&s.call(M)}finally{if(i)throw i.error}}}if(o)throw new hd(o)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Eg(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Pd(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Pd(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),v_=Yu.EMPTY;function x_(r){return r instanceof Yu||r&&"closed"in r&&Er(r.remove)&&Er(r.add)&&Er(r.unsubscribe)}function Eg(r){Er(r)?r():r.unsubscribe()}var M_={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},b_={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Ld([r,e],Rd(t)))},clearTimeout:function(r){var e=b_.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function VA(r){b_.setTimeout(function(){throw r})}function yg(){}function Du(r){r()}var Vd=function(r){Po(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,x_(t)&&t.add(i)):i.destination=qA,i}return e.create=function(t,i,s){return new Dd(t,i,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Yu),WA=Function.prototype.bind;function dd(r,e){return WA.call(r,e)}var XA=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Ru(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Ru(i)}else Ru(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Ru(t)}},r}(),Dd=function(r){Po(e,r);function e(t,i,s){var o=r.call(this)||this,u;if(Er(t)||!t)u={next:t??void 0,error:i??void 0,complete:s??void 0};else{var c;o&&M_.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return o.unsubscribe()},u={next:t.next&&dd(t.next,c),error:t.error&&dd(t.error,c),complete:t.complete&&dd(t.complete,c)}):u=t}return o.destination=new XA(u),o}return e}(Vd);function Ru(r){VA(r)}function $A(r){throw r}var qA={closed:!0,next:yg,error:$A,complete:yg},YA=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function S_(r){return r}function ZA(r){return r.length===0?S_:r.length===1?r[0]:function(t){return r.reduce(function(i,s){return s(i)},t)}}var Tg=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var s=this,o=jA(e)?e:new Dd(e,t,i);return Du(function(){var u=s,c=u.operator,f=u.source;o.add(c?c.call(o,f):f?s._subscribe(o):s._trySubscribe(o))}),o},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=Ag(t),new t(function(s,o){var u=new Dd({next:function(c){try{e(c)}catch(f){o(f),u.unsubscribe()}},error:o,complete:s});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[YA]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ZA(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=Ag(e),new e(function(i,s){var o;t.subscribe(function(u){return o=u},function(u){return s(u)},function(){return i(o)})})},r.create=function(e){return new r(e)},r}();function Ag(r){var e;return(e=r??M_.Promise)!==null&&e!==void 0?e:Promise}function KA(r){return r&&Er(r.next)&&Er(r.error)&&Er(r.complete)}function jA(r){return r&&r instanceof Vd||KA(r)&&x_(r)}function JA(r){return Er(r==null?void 0:r.lift)}function E_(r){return function(e){if(JA(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function y_(r,e,t,i,s){return new QA(r,e,t,i,s)}var QA=function(r){Po(e,r);function e(t,i,s,o,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(p){try{i(p)}catch(m){t.error(m)}}:r.prototype._next,f._error=o?function(p){try{o(p)}catch(m){t.error(m)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=s?function(){try{s()}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Vd),ew=__(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),T_=function(r){Po(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new wg(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new ew},e.prototype.next=function(t){var i=this;Du(function(){var s,o;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=Cd(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(p){s={error:p}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var i=this;Du(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var s=i.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;Du(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,s=this,o=s.hasError,u=s.isStopped,c=s.observers;return o||u?v_:(this.currentObservers=null,c.push(t),new Yu(function(){i.currentObservers=null,Pd(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,s=i.hasError,o=i.thrownError,u=i.isStopped;s?t.error(o):u&&t.complete()},e.prototype.asObservable=function(){var t=new Tg;return t.source=this,t},e.create=function(t,i){return new wg(t,i)},e}(Tg),wg=function(r){Po(e,r);function e(t,i){var s=r.call(this)||this;return s.destination=t,s.source=i,s}return e.prototype.next=function(t){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.next)===null||s===void 0||s.call(i,t)},e.prototype.error=function(t){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.error)===null||s===void 0||s.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,s;return(s=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&s!==void 0?s:v_},e}(T_),Do=function(r){Po(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,s=t.thrownError,o=t._value;if(i)throw s;return this._throwIfClosed(),o},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(T_);function go(r,e){return E_(function(t,i){var s=0;t.subscribe(y_(i,function(o){i.next(r.call(e,o,s++))}))})}function _o(r,e){return e===void 0&&(e=S_),r=r??tw,E_(function(t,i){var s,o=!0;t.subscribe(y_(i,function(u){var c=e(u);(o||!r(s,c))&&(o=!1,s=c,i.next(u))}))})}function tw(r,e){return r===e}const nw={items:[]},So=new Do(nw);function iw(r){const t={...So.getValue(),items:r};So.next(t)}const Cg=window.location.hash.replace("#",""),rw={columns:["X_umap0_norm","X_umap1_norm","global_sphere0_norm","global_sphere1_norm","global_sphere2_norm","clusters"],prefix:Cg||"50pe",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[]},an=new Do(rw);function aw(r){const e=an.getValue(),t=Object.keys(r).map(s=>[s,r[s]]),i={...e,pallete:r,listPalette:t};an.next(i)}function sw(r){const t={...an.getValue(),genes:r};an.next(t)}function ow(r){const t={...an.getValue(),prefix:r};an.next(t)}const lw={scene:new GA,selectedGenes:[]},A_=new Do(lw),cw={isLoading:!0,theme:"light"},Il=new Do(cw);function Sa(r){const t={...Il.getValue(),isLoading:r};Il.next(t)}const uw={selectedCelltypes:[],selectedGenes:[]},xn=new Do(uw);function Id(r){const t={...xn.getValue(),selectedCelltypes:r};xn.next(t)}function Ud(r){const t={...xn.getValue(),selectedGenes:r};xn.next(t)}const Rg={type:"change"},pd={type:"start"},Lg={type:"end"},Lu=new t_,Pg=new ba,fw=Math.cos(70*TS.DEG2RAD);class w_ extends hs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",et),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rg),i.update(),o=s.NONE},this.update=function(){const F=new te,ve=new La().setFromUnitVectors(e.up,new te(0,1,0)),Ke=ve.clone().invert(),k=new te,Pe=new La,ne=new te,we=2*Math.PI;return function(Lt=null){const qt=i.object.position;F.copy(qt).sub(i.target),F.applyQuaternion(ve),c.setFromVector3(F),i.autoRotate&&o===s.NONE&&Ie(C(Lt)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Jt=i.minAzimuthAngle,hn=i.maxAzimuthAngle;isFinite(Jt)&&isFinite(hn)&&(Jt<-Math.PI?Jt+=we:Jt>Math.PI&&(Jt-=we),hn<-Math.PI?hn+=we:hn>Math.PI&&(hn-=we),Jt<=hn?c.theta=Math.max(Jt,Math.min(hn,c.theta)):c.theta=c.theta>(Jt+hn)/2?Math.max(Jt,c.theta):Math.min(hn,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let kt=!1;if(i.zoomToCursor&&z||i.object.isOrthographicCamera)c.radius=be(c.radius);else{const Qt=c.radius;c.radius=be(c.radius*p),kt=Qt!=c.radius}if(F.setFromSpherical(c),F.applyQuaternion(Ke),qt.copy(i.target).add(F),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0)),i.zoomToCursor&&z){let Qt=null;if(i.object.isPerspectiveCamera){const wn=F.length();Qt=be(wn*p);const fi=wn-Qt;i.object.position.addScaledVector(N,fi),i.object.updateMatrixWorld(),kt=!!fi}else if(i.object.isOrthographicCamera){const wn=new te($.x,$.y,0);wn.unproject(i.object);const fi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),kt=fi!==i.object.zoom;const Zr=new te($.x,$.y,0);Zr.unproject(i.object),i.object.position.sub(Zr).add(wn),i.object.updateMatrixWorld(),Qt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Qt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Qt).add(i.object.position):(Lu.origin.copy(i.object.position),Lu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Lu.direction))<fw?e.lookAt(i.target):(Pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Lu.intersectPlane(Pg,i.target))))}else if(i.object.isOrthographicCamera){const Qt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),Qt!==i.object.zoom&&(i.object.updateProjectionMatrix(),kt=!0)}return p=1,z=!1,kt||k.distanceToSquared(i.object.position)>u||8*(1-Pe.dot(i.object.quaternion))>u||ne.distanceToSquared(i.target)>u?(i.dispatchEvent(Rg),k.copy(i.object.position),Pe.copy(i.object.quaternion),ne.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",mt),i.domElement.removeEventListener("pointerdown",Tt),i.domElement.removeEventListener("pointercancel",I),i.domElement.removeEventListener("wheel",de),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",I),i.domElement.getRootNode().removeEventListener("keydown",Se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",et),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const u=1e-6,c=new Sg,f=new Sg;let p=1;const m=new te,x=new Rt,M=new Rt,b=new Rt,w=new Rt,y=new Rt,g=new Rt,_=new Rt,U=new Rt,P=new Rt,N=new te,$=new Rt;let z=!1;const B=[],ee={};let De=!1;function C(F){return F!==null?2*Math.PI/60*i.autoRotateSpeed*F:2*Math.PI/60/60*i.autoRotateSpeed}function G(F){const ve=Math.abs(F*.01);return Math.pow(.95,i.zoomSpeed*ve)}function Ie(F){f.theta-=F}function Ce(F){f.phi-=F}const q=function(){const F=new te;return function(Ke,k){F.setFromMatrixColumn(k,0),F.multiplyScalar(-Ke),m.add(F)}}(),pe=function(){const F=new te;return function(Ke,k){i.screenSpacePanning===!0?F.setFromMatrixColumn(k,1):(F.setFromMatrixColumn(k,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(Ke),m.add(F)}}(),ue=function(){const F=new te;return function(Ke,k){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const ne=i.object.position;F.copy(ne).sub(i.target);let we=F.length();we*=Math.tan(i.object.fov/2*Math.PI/180),q(2*Ke*we/Pe.clientHeight,i.object.matrix),pe(2*k*we/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(Ke*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),pe(k*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function xe(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(F){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Me(F,ve){if(!i.zoomToCursor)return;z=!0;const Ke=i.domElement.getBoundingClientRect(),k=F-Ke.left,Pe=ve-Ke.top,ne=Ke.width,we=Ke.height;$.x=k/ne*2-1,$.y=-(Pe/we)*2+1,N.set($.x,$.y,1).unproject(i.object).sub(i.object.position).normalize()}function be(F){return Math.max(i.minDistance,Math.min(i.maxDistance,F))}function Le(F){x.set(F.clientX,F.clientY)}function Ze(F){Me(F.clientX,F.clientX),_.set(F.clientX,F.clientY)}function Mt(F){w.set(F.clientX,F.clientY)}function oe(F){M.set(F.clientX,F.clientY),b.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ve=i.domElement;Ie(2*Math.PI*b.x/ve.clientHeight),Ce(2*Math.PI*b.y/ve.clientHeight),x.copy(M),i.update()}function ye(F){U.set(F.clientX,F.clientY),P.subVectors(U,_),P.y>0?xe(G(P.y)):P.y<0&&ce(G(P.y)),_.copy(U),i.update()}function He(F){y.set(F.clientX,F.clientY),g.subVectors(y,w).multiplyScalar(i.panSpeed),ue(g.x,g.y),w.copy(y),i.update()}function dt(F){Me(F.clientX,F.clientY),F.deltaY<0?ce(G(F.deltaY)):F.deltaY>0&&xe(G(F.deltaY)),i.update()}function Je(F){let ve=!1;switch(F.code){case i.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?Ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(0,i.keyPanSpeed),ve=!0;break;case i.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?Ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(0,-i.keyPanSpeed),ve=!0;break;case i.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?Ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(i.keyPanSpeed,0),ve=!0;break;case i.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?Ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(-i.keyPanSpeed,0),ve=!0;break}ve&&(F.preventDefault(),i.update())}function ke(F){if(B.length===1)x.set(F.pageX,F.pageY);else{const ve=Xe(F),Ke=.5*(F.pageX+ve.x),k=.5*(F.pageY+ve.y);x.set(Ke,k)}}function Ht(F){if(B.length===1)w.set(F.pageX,F.pageY);else{const ve=Xe(F),Ke=.5*(F.pageX+ve.x),k=.5*(F.pageY+ve.y);w.set(Ke,k)}}function at(F){const ve=Xe(F),Ke=F.pageX-ve.x,k=F.pageY-ve.y,Pe=Math.sqrt(Ke*Ke+k*k);_.set(0,Pe)}function J(F){i.enableZoom&&at(F),i.enablePan&&Ht(F)}function vn(F){i.enableZoom&&at(F),i.enableRotate&&ke(F)}function We(F){if(B.length==1)M.set(F.pageX,F.pageY);else{const Ke=Xe(F),k=.5*(F.pageX+Ke.x),Pe=.5*(F.pageY+Ke.y);M.set(k,Pe)}b.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ve=i.domElement;Ie(2*Math.PI*b.x/ve.clientHeight),Ce(2*Math.PI*b.y/ve.clientHeight),x.copy(M)}function pt(F){if(B.length===1)y.set(F.pageX,F.pageY);else{const ve=Xe(F),Ke=.5*(F.pageX+ve.x),k=.5*(F.pageY+ve.y);y.set(Ke,k)}g.subVectors(y,w).multiplyScalar(i.panSpeed),ue(g.x,g.y),w.copy(y)}function rt(F){const ve=Xe(F),Ke=F.pageX-ve.x,k=F.pageY-ve.y,Pe=Math.sqrt(Ke*Ke+k*k);U.set(0,Pe),P.set(0,Math.pow(U.y/_.y,i.zoomSpeed)),xe(P.y),_.copy(U);const ne=(F.pageX+ve.x)*.5,we=(F.pageY+ve.y)*.5;Me(ne,we)}function _t(F){i.enableZoom&&rt(F),i.enablePan&&pt(F)}function vt(F){i.enableZoom&&rt(F),i.enableRotate&&We(F)}function Tt(F){i.enabled!==!1&&(B.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",$t),i.domElement.addEventListener("pointerup",I)),!bt(F)&&(Ue(F),F.pointerType==="touch"?Ne(F):T(F)))}function $t(F){i.enabled!==!1&&(F.pointerType==="touch"?Fe(F):le(F))}function I(F){switch(sn(F),B.length){case 0:i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",I),i.dispatchEvent(Lg),o=s.NONE;break;case 1:const ve=B[0],Ke=ee[ve];Ne({pointerId:ve,pageX:Ke.x,pageY:Ke.y});break}}function T(F){let ve;switch(F.button){case 0:ve=i.mouseButtons.LEFT;break;case 1:ve=i.mouseButtons.MIDDLE;break;case 2:ve=i.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case ki.DOLLY:if(i.enableZoom===!1)return;Ze(F),o=s.DOLLY;break;case ki.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;Mt(F),o=s.PAN}else{if(i.enableRotate===!1)return;Le(F),o=s.ROTATE}break;case ki.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;Le(F),o=s.ROTATE}else{if(i.enablePan===!1)return;Mt(F),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(pd)}function le(F){switch(o){case s.ROTATE:if(i.enableRotate===!1)return;oe(F);break;case s.DOLLY:if(i.enableZoom===!1)return;ye(F);break;case s.PAN:if(i.enablePan===!1)return;He(F);break}}function de(F){i.enabled===!1||i.enableZoom===!1||o!==s.NONE||(F.preventDefault(),i.dispatchEvent(pd),dt(Te(F)),i.dispatchEvent(Lg))}function Te(F){const ve=F.deltaMode,Ke={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(ve){case 1:Ke.deltaY*=16;break;case 2:Ke.deltaY*=100;break}return F.ctrlKey&&!De&&(Ke.deltaY*=10),Ke}function Se(F){F.key==="Control"&&(De=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(F){F.key==="Control"&&(De=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function et(F){i.enabled===!1||i.enablePan===!1||Je(F)}function Ne(F){switch(tt(F),B.length){case 1:switch(i.touches.ONE){case js.ROTATE:if(i.enableRotate===!1)return;ke(F),o=s.TOUCH_ROTATE;break;case js.PAN:if(i.enablePan===!1)return;Ht(F),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(i.touches.TWO){case js.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(F),o=s.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vn(F),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(pd)}function Fe(F){switch(tt(F),o){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;We(F),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;pt(F),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_t(F),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(F),i.update();break;default:o=s.NONE}}function mt(F){i.enabled!==!1&&F.preventDefault()}function Ue(F){B.push(F.pointerId)}function sn(F){delete ee[F.pointerId];for(let ve=0;ve<B.length;ve++)if(B[ve]==F.pointerId){B.splice(ve,1);return}}function bt(F){for(let ve=0;ve<B.length;ve++)if(B[ve]==F.pointerId)return!0;return!1}function tt(F){let ve=ee[F.pointerId];ve===void 0&&(ve=new Rt,ee[F.pointerId]=ve),ve.set(F.pageX,F.pageY)}function Xe(F){const ve=F.pointerId===B[0]?B[1]:B[0];return ee[ve]}i.domElement.addEventListener("contextmenu",mt),i.domElement.addEventListener("pointerdown",Tt),i.domElement.addEventListener("pointercancel",I),i.domElement.addEventListener("wheel",de,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Se,{passive:!0,capture:!0}),this.update()}}var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gu={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Gu.exports;(function(r,e){(function(){var t,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",x=1,M=2,b=4,w=1,y=2,g=1,_=2,U=4,P=8,N=16,$=32,z=64,B=128,ee=256,De=512,C=30,G="...",Ie=800,Ce=16,q=1,pe=2,ue=3,xe=1/0,ce=9007199254740991,Me=17976931348623157e292,be=NaN,Le=4294967295,Ze=Le-1,Mt=Le>>>1,oe=[["ary",B],["bind",g],["bindKey",_],["curry",P],["curryRight",N],["flip",De],["partial",$],["partialRight",z],["rearg",ee]],ye="[object Arguments]",He="[object Array]",dt="[object AsyncFunction]",Je="[object Boolean]",ke="[object Date]",Ht="[object DOMException]",at="[object Error]",J="[object Function]",vn="[object GeneratorFunction]",We="[object Map]",pt="[object Number]",rt="[object Null]",_t="[object Object]",vt="[object Promise]",Tt="[object Proxy]",$t="[object RegExp]",I="[object Set]",T="[object String]",le="[object Symbol]",de="[object Undefined]",Te="[object WeakMap]",Se="[object WeakSet]",ot="[object ArrayBuffer]",et="[object DataView]",Ne="[object Float32Array]",Fe="[object Float64Array]",mt="[object Int8Array]",Ue="[object Int16Array]",sn="[object Int32Array]",bt="[object Uint8Array]",tt="[object Uint8ClampedArray]",Xe="[object Uint16Array]",je="[object Uint32Array]",F=/\b__p \+= '';/g,ve=/\b(__p \+=) '' \+/g,Ke=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/&(?:amp|lt|gt|quot|#39);/g,Pe=/[&<>"']/g,ne=RegExp(k.source),we=RegExp(Pe.source),Be=/<%-([\s\S]+?)%>/g,Lt=/<%([\s\S]+?)%>/g,qt=/<%=([\s\S]+?)%>/g,Jt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hn=/^\w*$/,kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qt=/[\\^$.*+?()[\]{}|]/g,wn=RegExp(Qt.source),fi=/^\s+/,Zr=/\s/,Kr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ps=/\{\n\/\* \[wrapped with (.+)\] \*/,Vi=/,? & /,ms=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ua=/[()=,{}\[\]\/\s]/,Io=/\\(\\)?/g,Uo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,gs=/\w*$/,D=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,ae=/^\[object .+?Constructor\]$/,se=/^0o[0-7]+$/i,ie=/^(?:0|[1-9]\d*)$/,Ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qe=/($^)/,st=/['\n\r\u2028\u2029\\]/g,lt="\\ud800-\\udfff",At="\\u0300-\\u036f",St="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",dn=At+St+yt,Gn="\\u2700-\\u27bf",gn="a-z\\xdf-\\xf6\\xf8-\\xff",Hn="\\xac\\xb1\\xd7\\xf7",on="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gt="\\u2000-\\u206f",Na=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ln="A-Z\\xc0-\\xd6\\xd8-\\xde",Ii="\\ufe0e\\ufe0f",Fa=Hn+on+gt+Na,Wi="['’]",jr="["+lt+"]",En="["+Fa+"]",hi="["+dn+"]",Jr="\\d+",Kn="["+Gn+"]",Qr="["+gn+"]",Oa="[^"+lt+Fa+Jr+Gn+gn+ln+"]",yr="\\ud83c[\\udffb-\\udfff]",Ku="(?:"+hi+"|"+yr+")",Bl="[^"+lt+"]",No="(?:\\ud83c[\\udde6-\\uddff]){2}",Fo="[\\ud800-\\udbff][\\udc00-\\udfff]",ea="["+ln+"]",zl="\\u200d",Gl="(?:"+Qr+"|"+Oa+")",ju="(?:"+ea+"|"+Oa+")",Hl="(?:"+Wi+"(?:d|ll|m|re|s|t|ve))?",kl="(?:"+Wi+"(?:D|LL|M|RE|S|T|VE))?",Vl=Ku+"?",Wl="["+Ii+"]?",Ju="(?:"+zl+"(?:"+[Bl,No,Fo].join("|")+")"+Wl+Vl+")*",Xl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$l="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ql=Wl+Vl+Ju,_s="(?:"+[Kn,No,Fo].join("|")+")"+ql,ta="(?:"+[Bl+hi+"?",hi,No,Fo,jr].join("|")+")",Qu=RegExp(Wi,"g"),Yl=RegExp(hi,"g"),Oo=RegExp(yr+"(?="+yr+")|"+ta+ql,"g"),Bo=RegExp([ea+"?"+Qr+"+"+Hl+"(?="+[En,ea,"$"].join("|")+")",ju+"+"+kl+"(?="+[En,ea+Gl,"$"].join("|")+")",ea+"?"+Gl+"+"+Hl,ea+"+"+kl,$l,Xl,Jr,_s].join("|"),"g"),zo=RegExp("["+zl+lt+dn+Ii+"]"),ef=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Zl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],na=-1,fn={};fn[Ne]=fn[Fe]=fn[mt]=fn[Ue]=fn[sn]=fn[bt]=fn[tt]=fn[Xe]=fn[je]=!0,fn[ye]=fn[He]=fn[ot]=fn[Je]=fn[et]=fn[ke]=fn[at]=fn[J]=fn[We]=fn[pt]=fn[_t]=fn[$t]=fn[I]=fn[T]=fn[Te]=!1;var cn={};cn[ye]=cn[He]=cn[ot]=cn[et]=cn[Je]=cn[ke]=cn[Ne]=cn[Fe]=cn[mt]=cn[Ue]=cn[sn]=cn[We]=cn[pt]=cn[_t]=cn[$t]=cn[I]=cn[T]=cn[le]=cn[bt]=cn[tt]=cn[Xe]=cn[je]=!0,cn[at]=cn[J]=cn[Te]=!1;var tf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Go={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ho={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Kl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nf=parseFloat,rf=parseInt,jl=typeof xo=="object"&&xo&&xo.Object===Object&&xo,Jl=typeof self=="object"&&self&&self.Object===Object&&self,Pn=jl||Jl||Function("return this")(),ko=e&&!e.nodeType&&e,Tr=ko&&!0&&r&&!r.nodeType&&r,Ql=Tr&&Tr.exports===ko,Vo=Ql&&jl.process,di=function(){try{var Y=Tr&&Tr.require&&Tr.require("util").types;return Y||Vo&&Vo.binding&&Vo.binding("util")}catch{}}(),ec=di&&di.isArrayBuffer,tc=di&&di.isDate,Wo=di&&di.isMap,nc=di&&di.isRegExp,ic=di&&di.isSet,rc=di&&di.isTypedArray;function ii(Y,fe,re){switch(re.length){case 0:return Y.call(fe);case 1:return Y.call(fe,re[0]);case 2:return Y.call(fe,re[0],re[1]);case 3:return Y.call(fe,re[0],re[1],re[2])}return Y.apply(fe,re)}function af(Y,fe,re,$e){for(var Et=-1,Zt=Y==null?0:Y.length;++Et<Zt;){var yn=Y[Et];fe($e,yn,re(yn),Y)}return $e}function pi(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e&&fe(Y[re],re,Y)!==!1;);return Y}function sf(Y,fe){for(var re=Y==null?0:Y.length;re--&&fe(Y[re],re,Y)!==!1;);return Y}function ac(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e;)if(!fe(Y[re],re,Y))return!1;return!0}function sr(Y,fe){for(var re=-1,$e=Y==null?0:Y.length,Et=0,Zt=[];++re<$e;){var yn=Y[re];fe(yn,re,Y)&&(Zt[Et++]=yn)}return Zt}function vs(Y,fe){var re=Y==null?0:Y.length;return!!re&&ia(Y,fe,0)>-1}function xs(Y,fe,re){for(var $e=-1,Et=Y==null?0:Y.length;++$e<Et;)if(re(fe,Y[$e]))return!0;return!1}function pn(Y,fe){for(var re=-1,$e=Y==null?0:Y.length,Et=Array($e);++re<$e;)Et[re]=fe(Y[re],re,Y);return Et}function or(Y,fe){for(var re=-1,$e=fe.length,Et=Y.length;++re<$e;)Y[Et+re]=fe[re];return Y}function Xo(Y,fe,re,$e){var Et=-1,Zt=Y==null?0:Y.length;for($e&&Zt&&(re=Y[++Et]);++Et<Zt;)re=fe(re,Y[Et],Et,Y);return re}function of(Y,fe,re,$e){var Et=Y==null?0:Y.length;for($e&&Et&&(re=Y[--Et]);Et--;)re=fe(re,Y[Et],Et,Y);return re}function Ms(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e;)if(fe(Y[re],re,Y))return!0;return!1}var lf=Es("length");function cf(Y){return Y.split("")}function uf(Y){return Y.match(ms)||[]}function sc(Y,fe,re){var $e;return re(Y,function(Et,Zt,yn){if(fe(Et,Zt,yn))return $e=Zt,!1}),$e}function bs(Y,fe,re,$e){for(var Et=Y.length,Zt=re+($e?1:-1);$e?Zt--:++Zt<Et;)if(fe(Y[Zt],Zt,Y))return Zt;return-1}function ia(Y,fe,re){return fe===fe?Ts(Y,fe,re):bs(Y,Ba,re)}function oc(Y,fe,re,$e){for(var Et=re-1,Zt=Y.length;++Et<Zt;)if($e(Y[Et],fe))return Et;return-1}function Ba(Y){return Y!==Y}function Ss(Y,fe){var re=Y==null?0:Y.length;return re?ys(Y,fe)/re:be}function Es(Y){return function(fe){return fe==null?t:fe[Y]}}function $o(Y){return function(fe){return Y==null?t:Y[fe]}}function qo(Y,fe,re,$e,Et){return Et(Y,function(Zt,yn,en){re=$e?($e=!1,Zt):fe(re,Zt,yn,en)}),re}function ff(Y,fe){var re=Y.length;for(Y.sort(fe);re--;)Y[re]=Y[re].value;return Y}function ys(Y,fe){for(var re,$e=-1,Et=Y.length;++$e<Et;){var Zt=fe(Y[$e]);Zt!==t&&(re=re===t?Zt:re+Zt)}return re}function Yo(Y,fe){for(var re=-1,$e=Array(Y);++re<Y;)$e[re]=fe(re);return $e}function za(Y,fe){return pn(fe,function(re){return[re,Y[re]]})}function lc(Y){return Y&&Y.slice(0,pc(Y)+1).replace(fi,"")}function ri(Y){return function(fe){return Y(fe)}}function Zo(Y,fe){return pn(fe,function(re){return Y[re]})}function Ga(Y,fe){return Y.has(fe)}function cc(Y,fe){for(var re=-1,$e=Y.length;++re<$e&&ia(fe,Y[re],0)>-1;);return re}function uc(Y,fe){for(var re=Y.length;re--&&ia(fe,Y[re],0)>-1;);return re}function hf(Y,fe){for(var re=Y.length,$e=0;re--;)Y[re]===fe&&++$e;return $e}var df=$o(tf),pf=$o(Go);function fc(Y){return"\\"+Kl[Y]}function hc(Y,fe){return Y==null?t:Y[fe]}function ra(Y){return zo.test(Y)}function mf(Y){return ef.test(Y)}function gf(Y){for(var fe,re=[];!(fe=Y.next()).done;)re.push(fe.value);return re}function Ha(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e,Et){re[++fe]=[Et,$e]}),re}function Ko(Y,fe){return function(re){return Y(fe(re))}}function Xi(Y,fe){for(var re=-1,$e=Y.length,Et=0,Zt=[];++re<$e;){var yn=Y[re];(yn===fe||yn===m)&&(Y[re]=m,Zt[Et++]=re)}return Zt}function ka(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e){re[++fe]=$e}),re}function dc(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e){re[++fe]=[$e,$e]}),re}function Ts(Y,fe,re){for(var $e=re-1,Et=Y.length;++$e<Et;)if(Y[$e]===fe)return $e;return-1}function _f(Y,fe,re){for(var $e=re+1;$e--;)if(Y[$e]===fe)return $e;return $e}function Ar(Y){return ra(Y)?xf(Y):lf(Y)}function Si(Y){return ra(Y)?Mf(Y):cf(Y)}function pc(Y){for(var fe=Y.length;fe--&&Zr.test(Y.charAt(fe)););return fe}var vf=$o(Ho);function xf(Y){for(var fe=Oo.lastIndex=0;Oo.test(Y);)++fe;return fe}function Mf(Y){return Y.match(Oo)||[]}function jo(Y){return Y.match(Bo)||[]}var As=function Y(fe){fe=fe==null?Pn:lr.defaults(Pn.Object(),fe,lr.pick(Pn,Zl));var re=fe.Array,$e=fe.Date,Et=fe.Error,Zt=fe.Function,yn=fe.Math,en=fe.Object,Jo=fe.RegExp,ws=fe.String,mi=fe.TypeError,Cs=re.prototype,mc=Zt.prototype,cr=en.prototype,Rs=fe["__core-js_shared__"],Ls=mc.toString,tn=cr.hasOwnProperty,gc=0,Qo=function(){var n=/[^.]+$/.exec(Rs&&Rs.keys&&Rs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ps=cr.toString,bf=Ls.call(en),Sf=Pn._,Ef=Jo("^"+Ls.call(tn).replace(Qt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ds=Ql?fe.Buffer:t,ur=fe.Symbol,Is=fe.Uint8Array,_c=Ds?Ds.allocUnsafe:t,Us=Ko(en.getPrototypeOf,en),vc=en.create,xc=cr.propertyIsEnumerable,Ns=Cs.splice,Mc=ur?ur.isConcatSpreadable:t,Va=ur?ur.iterator:t,fr=ur?ur.toStringTag:t,Wa=function(){try{var n=Ka(en,"defineProperty");return n({},"",{}),n}catch{}}(),yf=fe.clearTimeout!==Pn.clearTimeout&&fe.clearTimeout,bc=$e&&$e.now!==Pn.Date.now&&$e.now,Tf=fe.setTimeout!==Pn.setTimeout&&fe.setTimeout,Fs=yn.ceil,Ui=yn.floor,el=en.getOwnPropertySymbols,Af=Ds?Ds.isBuffer:t,wr=fe.isFinite,wf=Cs.join,Cf=Ko(en.keys,en),Cn=yn.max,kn=yn.min,Rf=$e.now,tl=fe.parseInt,jn=yn.random,Sc=Cs.reverse,Os=Ka(fe,"DataView"),hr=Ka(fe,"Map"),Bs=Ka(fe,"Promise"),Cr=Ka(fe,"Set"),Xa=Ka(fe,"WeakMap"),aa=Ka(en,"create"),sa=Xa&&new Xa,oa={},Ec=ja(Os),yc=ja(hr),Lf=ja(Bs),Pf=ja(Cr),Df=ja(Xa),la=ur?ur.prototype:t,Ni=la?la.valueOf:t,Tc=la?la.toString:t;function A(n){if(An(n)&&!Ct(n)&&!(n instanceof Bt)){if(n instanceof Fn)return n;if(tn.call(n,"__wrapped__"))return pp(n)}return new Fn(n)}var ca=function(){function n(){}return function(a){if(!bn(a))return{};if(vc)return vc(a);n.prototype=a;var l=new n;return n.prototype=t,l}}();function $a(){}function Fn(n,a){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}A.templateSettings={escape:Be,evaluate:Lt,interpolate:qt,variable:"",imports:{_:A}},A.prototype=$a.prototype,A.prototype.constructor=A,Fn.prototype=ca($a.prototype),Fn.prototype.constructor=Fn;function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Le,this.__views__=[]}function Ac(){var n=new Bt(this.__wrapped__);return n.__actions__=Un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Un(this.__views__),n}function If(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Uf(){var n=this.__wrapped__.value(),a=this.__dir__,l=Ct(n),d=a<0,S=l?n.length:0,R=O_(0,S,this.__views__),O=R.start,W=R.end,Z=W-O,me=d?W:O-1,_e=this.__iteratees__,Ee=_e.length,Ge=0,nt=kn(Z,this.__takeCount__);if(!l||!d&&S==Z&&nt==Z)return qn(n,this.__actions__);var ft=[];e:for(;Z--&&Ge<nt;){me+=a;for(var Ut=-1,ht=n[me];++Ut<Ee;){var Gt=_e[Ut],Xt=Gt.iteratee,Ci=Gt.type,si=Xt(ht);if(Ci==pe)ht=si;else if(!si){if(Ci==q)continue e;break e}}ft[Ge++]=ht}return ft}Bt.prototype=ca($a.prototype),Bt.prototype.constructor=Bt;function Rr(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Nf(){this.__data__=aa?aa(null):{},this.size=0}function Ff(n){var a=this.has(n)&&delete this.__data__[n];return this.size-=a?1:0,a}function Of(n){var a=this.__data__;if(aa){var l=a[n];return l===f?t:l}return tn.call(a,n)?a[n]:t}function Bf(n){var a=this.__data__;return aa?a[n]!==t:tn.call(a,n)}function zf(n,a){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=aa&&a===t?f:a,this}Rr.prototype.clear=Nf,Rr.prototype.delete=Ff,Rr.prototype.get=Of,Rr.prototype.has=Bf,Rr.prototype.set=zf;function $i(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Gf(){this.__data__=[],this.size=0}function Hf(n){var a=this.__data__,l=Jn(a,n);if(l<0)return!1;var d=a.length-1;return l==d?a.pop():Ns.call(a,l,1),--this.size,!0}function kf(n){var a=this.__data__,l=Jn(a,n);return l<0?t:a[l][1]}function Vf(n){return Jn(this.__data__,n)>-1}function Wf(n,a){var l=this.__data__,d=Jn(l,n);return d<0?(++this.size,l.push([n,a])):l[d][1]=a,this}$i.prototype.clear=Gf,$i.prototype.delete=Hf,$i.prototype.get=kf,$i.prototype.has=Vf,$i.prototype.set=Wf;function Ei(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Xf(){this.size=0,this.__data__={hash:new Rr,map:new(hr||$i),string:new Rr}}function nl(n){var a=Kc(this,n).delete(n);return this.size-=a?1:0,a}function il(n){return Kc(this,n).get(n)}function rl(n){return Kc(this,n).has(n)}function wc(n,a){var l=Kc(this,n),d=l.size;return l.set(n,a),this.size+=l.size==d?0:1,this}Ei.prototype.clear=Xf,Ei.prototype.delete=nl,Ei.prototype.get=il,Ei.prototype.has=rl,Ei.prototype.set=wc;function dr(n){var a=-1,l=n==null?0:n.length;for(this.__data__=new Ei;++a<l;)this.add(n[a])}function $f(n){return this.__data__.set(n,f),this}function qf(n){return this.__data__.has(n)}dr.prototype.add=dr.prototype.push=$f,dr.prototype.has=qf;function yi(n){var a=this.__data__=new $i(n);this.size=a.size}function Ti(){this.__data__=new $i,this.size=0}function ua(n){var a=this.__data__,l=a.delete(n);return this.size=a.size,l}function Yf(n){return this.__data__.get(n)}function al(n){return this.__data__.has(n)}function Zf(n,a){var l=this.__data__;if(l instanceof $i){var d=l.__data__;if(!hr||d.length<s-1)return d.push([n,a]),this.size=++l.size,this;l=this.__data__=new Ei(d)}return l.set(n,a),this.size=l.size,this}yi.prototype.clear=Ti,yi.prototype.delete=ua,yi.prototype.get=Yf,yi.prototype.has=al,yi.prototype.set=Zf;function fa(n,a){var l=Ct(n),d=!l&&Ja(n),S=!l&&!d&&pa(n),R=!l&&!d&&!S&&Zs(n),O=l||d||S||R,W=O?Yo(n.length,ws):[],Z=W.length;for(var me in n)(a||tn.call(n,me))&&!(O&&(me=="length"||S&&(me=="offset"||me=="parent")||R&&(me=="buffer"||me=="byteLength"||me=="byteOffset")||Fr(me,Z)))&&W.push(me);return W}function Cc(n){var a=n.length;return a?n[h(0,a-1)]:t}function Kf(n,a){return jc(Un(n),Pr(a,0,n.length))}function jf(n){return jc(Un(n))}function sl(n,a,l){(l!==t&&!ji(n[a],l)||l===t&&!(a in n))&&Yi(n,a,l)}function Lr(n,a,l){var d=n[a];(!(tn.call(n,a)&&ji(d,l))||l===t&&!(a in n))&&Yi(n,a,l)}function Jn(n,a){for(var l=n.length;l--;)if(ji(n[l][0],a))return l;return-1}function pr(n,a,l,d){return Fi(n,function(S,R,O){a(d,S,l(S),O)}),d}function qi(n,a){return n&&Wn(a,Xn(a),n)}function Jf(n,a){return n&&Wn(a,vi(a),n)}function Yi(n,a,l){a=="__proto__"&&Wa?Wa(n,a,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[a]=l}function ol(n,a){for(var l=-1,d=a.length,S=re(d),R=n==null;++l<d;)S[l]=R?t:Ah(n,a[l]);return S}function Pr(n,a,l){return n===n&&(l!==t&&(n=n<=l?n:l),a!==t&&(n=n>=a?n:a)),n}function gi(n,a,l,d,S,R){var O,W=a&x,Z=a&M,me=a&b;if(l&&(O=S?l(n,d,S,R):l(n)),O!==t)return O;if(!bn(n))return n;var _e=Ct(n);if(_e){if(O=z_(n),!W)return Un(n,O)}else{var Ee=Qn(n),Ge=Ee==J||Ee==vn;if(pa(n))return Kt(n,W);if(Ee==_t||Ee==ye||Ge&&!S){if(O=Z||Ge?{}:ap(n),!W)return Z?vl(n,Jf(O,n)):_l(n,qi(O,n))}else{if(!cn[Ee])return S?n:{};O=G_(n,Ee,W)}}R||(R=new yi);var nt=R.get(n);if(nt)return nt;R.set(n,O),Up(n)?n.forEach(function(ht){O.add(gi(ht,a,l,ht,n,R))}):Dp(n)&&n.forEach(function(ht,Gt){O.set(Gt,gi(ht,a,l,Gt,n,R))});var ft=me?Z?hh:fh:Z?vi:Xn,Ut=_e?t:ft(n);return pi(Ut||n,function(ht,Gt){Ut&&(Gt=ht,ht=n[Gt]),Lr(O,Gt,gi(ht,a,l,Gt,n,R))}),O}function Qf(n){var a=Xn(n);return function(l){return Rc(l,n,a)}}function Rc(n,a,l){var d=l.length;if(n==null)return!d;for(n=en(n);d--;){var S=l[d],R=a[S],O=n[S];if(O===t&&!(S in n)||!R(O))return!1}return!0}function Lc(n,a,l){if(typeof n!="function")throw new mi(u);return bl(function(){n.apply(t,l)},a)}function qa(n,a,l,d){var S=-1,R=vs,O=!0,W=n.length,Z=[],me=a.length;if(!W)return Z;l&&(a=pn(a,ri(l))),d?(R=xs,O=!1):a.length>=s&&(R=Ga,O=!1,a=new dr(a));e:for(;++S<W;){var _e=n[S],Ee=l==null?_e:l(_e);if(_e=d||_e!==0?_e:0,O&&Ee===Ee){for(var Ge=me;Ge--;)if(a[Ge]===Ee)continue e;Z.push(_e)}else R(a,Ee,d)||Z.push(_e)}return Z}var Fi=Xd(Oi),Pc=Xd(cl,!0);function eh(n,a){var l=!0;return Fi(n,function(d,S,R){return l=!!a(d,S,R),l}),l}function zs(n,a,l){for(var d=-1,S=n.length;++d<S;){var R=n[d],O=a(R);if(O!=null&&(W===t?O===O&&!wi(O):l(O,W)))var W=O,Z=R}return Z}function th(n,a,l,d){var S=n.length;for(l=It(l),l<0&&(l=-l>S?0:S+l),d=d===t||d>S?S:It(d),d<0&&(d+=S),d=l>d?0:Fp(d);l<d;)n[l++]=a;return n}function Dc(n,a){var l=[];return Fi(n,function(d,S,R){a(d,S,R)&&l.push(d)}),l}function Dn(n,a,l,d,S){var R=-1,O=n.length;for(l||(l=k_),S||(S=[]);++R<O;){var W=n[R];a>0&&l(W)?a>1?Dn(W,a-1,l,d,S):or(S,W):d||(S[S.length]=W)}return S}var ll=$d(),Ic=$d(!0);function Oi(n,a){return n&&ll(n,a,Xn)}function cl(n,a){return n&&Ic(n,a,Xn)}function Gs(n,a){return sr(a,function(l){return Or(n[l])})}function Dr(n,a){a=xt(a,n);for(var l=0,d=a.length;n!=null&&l<d;)n=n[_r(a[l++])];return l&&l==d?n:t}function Hs(n,a,l){var d=a(n);return Ct(n)?d:or(d,l(n))}function Vn(n){return n==null?n===t?de:rt:fr&&fr in en(n)?F_(n):Z_(n)}function ul(n,a){return n>a}function nh(n,a){return n!=null&&tn.call(n,a)}function ih(n,a){return n!=null&&a in en(n)}function Uc(n,a,l){return n>=kn(a,l)&&n<Cn(a,l)}function ks(n,a,l){for(var d=l?xs:vs,S=n[0].length,R=n.length,O=R,W=re(R),Z=1/0,me=[];O--;){var _e=n[O];O&&a&&(_e=pn(_e,ri(a))),Z=kn(_e.length,Z),W[O]=!l&&(a||S>=120&&_e.length>=120)?new dr(O&&_e):t}_e=n[0];var Ee=-1,Ge=W[0];e:for(;++Ee<S&&me.length<Z;){var nt=_e[Ee],ft=a?a(nt):nt;if(nt=l||nt!==0?nt:0,!(Ge?Ga(Ge,ft):d(me,ft,l))){for(O=R;--O;){var Ut=W[O];if(!(Ut?Ga(Ut,ft):d(n[O],ft,l)))continue e}Ge&&Ge.push(ft),me.push(nt)}}return me}function Nc(n,a,l,d){return Oi(n,function(S,R,O){a(d,l(S),R,O)}),d}function ha(n,a,l){a=xt(a,n),n=cp(n,a);var d=n==null?n:n[_r(zi(a))];return d==null?t:ii(d,n,l)}function Fc(n){return An(n)&&Vn(n)==ye}function Oc(n){return An(n)&&Vn(n)==ot}function Zi(n){return An(n)&&Vn(n)==ke}function mn(n,a,l,d,S){return n===a?!0:n==null||a==null||!An(n)&&!An(a)?n!==n&&a!==a:rh(n,a,l,d,mn,S)}function rh(n,a,l,d,S,R){var O=Ct(n),W=Ct(a),Z=O?He:Qn(n),me=W?He:Qn(a);Z=Z==ye?_t:Z,me=me==ye?_t:me;var _e=Z==_t,Ee=me==_t,Ge=Z==me;if(Ge&&pa(n)){if(!pa(a))return!1;O=!0,_e=!1}if(Ge&&!_e)return R||(R=new yi),O||Zs(n)?np(n,a,l,d,S,R):U_(n,a,Z,l,d,S,R);if(!(l&w)){var nt=_e&&tn.call(n,"__wrapped__"),ft=Ee&&tn.call(a,"__wrapped__");if(nt||ft){var Ut=nt?n.value():n,ht=ft?a.value():a;return R||(R=new yi),S(Ut,ht,l,d,R)}}return Ge?(R||(R=new yi),N_(n,a,l,d,S,R)):!1}function ah(n){return An(n)&&Qn(n)==We}function Vs(n,a,l,d){var S=l.length,R=S,O=!d;if(n==null)return!R;for(n=en(n);S--;){var W=l[S];if(O&&W[2]?W[1]!==n[W[0]]:!(W[0]in n))return!1}for(;++S<R;){W=l[S];var Z=W[0],me=n[Z],_e=W[1];if(O&&W[2]){if(me===t&&!(Z in n))return!1}else{var Ee=new yi;if(d)var Ge=d(me,_e,Z,n,a,Ee);if(!(Ge===t?mn(_e,me,w|y,d,Ee):Ge))return!1}}return!0}function fl(n){if(!bn(n)||W_(n))return!1;var a=Or(n)?Ef:ae;return a.test(ja(n))}function Ws(n){return An(n)&&Vn(n)==$t}function Bc(n){return An(n)&&Qn(n)==I}function sh(n){return An(n)&&iu(n.length)&&!!fn[Vn(n)]}function hl(n){return typeof n=="function"?n:n==null?xi:typeof n=="object"?Ct(n)?ml(n[0],n[1]):Hc(n):qp(n)}function dl(n){if(!Ml(n))return Cf(n);var a=[];for(var l in en(n))tn.call(n,l)&&l!="constructor"&&a.push(l);return a}function zc(n){if(!bn(n))return Y_(n);var a=Ml(n),l=[];for(var d in n)d=="constructor"&&(a||!tn.call(n,d))||l.push(d);return l}function pl(n,a){return n<a}function Gc(n,a){var l=-1,d=_i(n)?re(n.length):[];return Fi(n,function(S,R,O){d[++l]=a(S,R,O)}),d}function Hc(n){var a=ph(n);return a.length==1&&a[0][2]?op(a[0][0],a[0][1]):function(l){return l===n||Vs(l,n,a)}}function ml(n,a){return gh(n)&&sp(a)?op(_r(n),a):function(l){var d=Ah(l,n);return d===t&&d===a?wh(l,n):mn(a,d,w|y)}}function Ya(n,a,l,d,S){n!==a&&ll(a,function(R,O){if(S||(S=new yi),bn(R))oh(n,a,O,l,Ya,d,S);else{var W=d?d(vh(n,O),R,O+"",n,a,S):t;W===t&&(W=R),sl(n,O,W)}},vi)}function oh(n,a,l,d,S,R,O){var W=vh(n,l),Z=vh(a,l),me=O.get(Z);if(me){sl(n,l,me);return}var _e=R?R(W,Z,l+"",n,a,O):t,Ee=_e===t;if(Ee){var Ge=Ct(Z),nt=!Ge&&pa(Z),ft=!Ge&&!nt&&Zs(Z);_e=Z,Ge||nt||ft?Ct(W)?_e=W:Rn(W)?_e=Un(W):nt?(Ee=!1,_e=Kt(Z,!0)):ft?(Ee=!1,_e=Ki(Z,!0)):_e=[]:Sl(Z)||Ja(Z)?(_e=W,Ja(W)?_e=Op(W):(!bn(W)||Or(W))&&(_e=ap(Z))):Ee=!1}Ee&&(O.set(Z,_e),S(_e,Z,d,R,O),O.delete(Z)),sl(n,l,_e)}function Za(n,a){var l=n.length;if(l)return a+=a<0?l:0,Fr(a,l)?n[a]:t}function Xs(n,a,l){a.length?a=pn(a,function(R){return Ct(R)?function(O){return Dr(O,R.length===1?R[0]:R)}:R}):a=[xi];var d=-1;a=pn(a,ri(ut()));var S=Gc(n,function(R,O,W){var Z=pn(a,function(me){return me(R)});return{criteria:Z,index:++d,value:R}});return ff(S,function(R,O){return da(R,O,l)})}function kc(n,a){return gl(n,a,function(l,d){return wh(n,d)})}function gl(n,a,l){for(var d=-1,S=a.length,R={};++d<S;){var O=a[d],W=Dr(n,O);l(W,O)&&H(R,xt(O,n),W)}return R}function lh(n){return function(a){return Dr(a,n)}}function Tn(n,a,l,d){var S=d?oc:ia,R=-1,O=a.length,W=n;for(n===a&&(a=Un(a)),l&&(W=pn(n,ri(l)));++R<O;)for(var Z=0,me=a[R],_e=l?l(me):me;(Z=S(W,_e,Z,d))>-1;)W!==n&&Ns.call(W,Z,1),Ns.call(n,Z,1);return n}function Vc(n,a){for(var l=n?a.length:0,d=l-1;l--;){var S=a[l];if(l==d||S!==R){var R=S;Fr(S)?Ns.call(n,S,1):Vt(n,S)}}return n}function h(n,a){return n+Ui(jn()*(a-n+1))}function v(n,a,l,d){for(var S=-1,R=Cn(Fs((a-n)/(l||1)),0),O=re(R);R--;)O[d?R:++S]=n,n+=l;return O}function E(n,a){var l="";if(!n||a<1||a>ce)return l;do a%2&&(l+=n),a=Ui(a/2),a&&(n+=n);while(a);return l}function L(n,a){return xh(lp(n,a,xi),n+"")}function V(n){return Cc(Ks(n))}function X(n,a){var l=Ks(n);return jc(l,Pr(a,0,l.length))}function H(n,a,l,d){if(!bn(n))return n;a=xt(a,n);for(var S=-1,R=a.length,O=R-1,W=n;W!=null&&++S<R;){var Z=_r(a[S]),me=l;if(Z==="__proto__"||Z==="constructor"||Z==="prototype")return n;if(S!=O){var _e=W[Z];me=d?d(_e,Z,W):t,me===t&&(me=bn(_e)?_e:Fr(a[S+1])?[]:{})}Lr(W,Z,me),W=W[Z]}return n}var K=sa?function(n,a){return sa.set(n,a),n}:xi,Q=Wa?function(n,a){return Wa(n,"toString",{configurable:!0,enumerable:!1,value:Rh(a),writable:!0})}:xi;function he(n){return jc(Ks(n))}function ge(n,a,l){var d=-1,S=n.length;a<0&&(a=-a>S?0:S+a),l=l>S?S:l,l<0&&(l+=S),S=a>l?0:l-a>>>0,a>>>=0;for(var R=re(S);++d<S;)R[d]=n[d+a];return R}function ze(n,a){var l;return Fi(n,function(d,S,R){return l=a(d,S,R),!l}),!!l}function Ae(n,a,l){var d=0,S=n==null?d:n.length;if(typeof a=="number"&&a===a&&S<=Mt){for(;d<S;){var R=d+S>>>1,O=n[R];O!==null&&!wi(O)&&(l?O<=a:O<a)?d=R+1:S=R}return S}return qe(n,a,xi,l)}function qe(n,a,l,d){var S=0,R=n==null?0:n.length;if(R===0)return 0;a=l(a);for(var O=a!==a,W=a===null,Z=wi(a),me=a===t;S<R;){var _e=Ui((S+R)/2),Ee=l(n[_e]),Ge=Ee!==t,nt=Ee===null,ft=Ee===Ee,Ut=wi(Ee);if(O)var ht=d||ft;else me?ht=ft&&(d||Ge):W?ht=ft&&Ge&&(d||!nt):Z?ht=ft&&Ge&&!nt&&(d||!Ut):nt||Ut?ht=!1:ht=d?Ee<=a:Ee<a;ht?S=_e+1:R=_e}return kn(R,Ze)}function Ye(n,a){for(var l=-1,d=n.length,S=0,R=[];++l<d;){var O=n[l],W=a?a(O):O;if(!l||!ji(W,Z)){var Z=W;R[S++]=O===0?0:O}}return R}function Pt(n){return typeof n=="number"?n:wi(n)?be:+n}function ct(n){if(typeof n=="string")return n;if(Ct(n))return pn(n,ct)+"";if(wi(n))return Tc?Tc.call(n):"";var a=n+"";return a=="0"&&1/n==-xe?"-0":a}function wt(n,a,l){var d=-1,S=vs,R=n.length,O=!0,W=[],Z=W;if(l)O=!1,S=xs;else if(R>=s){var me=a?null:D_(n);if(me)return ka(me);O=!1,S=Ga,Z=new dr}else Z=a?[]:W;e:for(;++d<R;){var _e=n[d],Ee=a?a(_e):_e;if(_e=l||_e!==0?_e:0,O&&Ee===Ee){for(var Ge=Z.length;Ge--;)if(Z[Ge]===Ee)continue e;a&&Z.push(Ee),W.push(_e)}else S(Z,Ee,l)||(Z!==W&&Z.push(Ee),W.push(_e))}return W}function Vt(n,a){return a=xt(a,n),n=cp(n,a),n==null||delete n[_r(zi(a))]}function In(n,a,l,d){return H(n,a,l(Dr(n,a)),d)}function Mn(n,a,l,d){for(var S=n.length,R=d?S:-1;(d?R--:++R<S)&&a(n[R],R,n););return l?ge(n,d?0:R,d?R+1:S):ge(n,d?R+1:0,d?S:R)}function qn(n,a){var l=n;return l instanceof Bt&&(l=l.value()),Xo(a,function(d,S){return S.func.apply(S.thisArg,or([d],S.args))},l)}function Ot(n,a,l){var d=n.length;if(d<2)return d?wt(n[0]):[];for(var S=-1,R=re(d);++S<d;)for(var O=n[S],W=-1;++W<d;)W!=S&&(R[S]=qa(R[S]||O,n[W],a,l));return wt(Dn(R,1),a,l)}function Re(n,a,l){for(var d=-1,S=n.length,R=a.length,O={};++d<S;){var W=d<R?a[d]:t;l(O,n[d],W)}return O}function it(n){return Rn(n)?n:[]}function Dt(n){return typeof n=="function"?n:xi}function xt(n,a){return Ct(n)?n:gh(n,a)?[n]:dp(rn(n))}var On=L;function Wt(n,a,l){var d=n.length;return l=l===t?d:l,!a&&l>=d?n:ge(n,a,l)}var zt=yf||function(n){return Pn.clearTimeout(n)};function Kt(n,a){if(a)return n.slice();var l=n.length,d=_c?_c(l):new n.constructor(l);return n.copy(d),d}function Yt(n){var a=new n.constructor(n.byteLength);return new Is(a).set(new Is(n)),a}function nn(n,a){var l=a?Yt(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Ai(n){var a=new n.constructor(n.source,gs.exec(n));return a.lastIndex=n.lastIndex,a}function mr(n){return Ni?en(Ni.call(n)):{}}function Ki(n,a){var l=a?Yt(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Ir(n,a){if(n!==a){var l=n!==t,d=n===null,S=n===n,R=wi(n),O=a!==t,W=a===null,Z=a===a,me=wi(a);if(!W&&!me&&!R&&n>a||R&&O&&Z&&!W&&!me||d&&O&&Z||!l&&Z||!S)return 1;if(!d&&!R&&!me&&n<a||me&&l&&S&&!d&&!R||W&&l&&S||!O&&S||!Z)return-1}return 0}function da(n,a,l){for(var d=-1,S=n.criteria,R=a.criteria,O=S.length,W=l.length;++d<O;){var Z=Ir(S[d],R[d]);if(Z){if(d>=W)return Z;var me=l[d];return Z*(me=="desc"?-1:1)}}return n.index-a.index}function Bi(n,a,l,d){for(var S=-1,R=n.length,O=l.length,W=-1,Z=a.length,me=Cn(R-O,0),_e=re(Z+me),Ee=!d;++W<Z;)_e[W]=a[W];for(;++S<O;)(Ee||S<R)&&(_e[l[S]]=n[S]);for(;me--;)_e[W++]=n[S++];return _e}function gr(n,a,l,d){for(var S=-1,R=n.length,O=-1,W=l.length,Z=-1,me=a.length,_e=Cn(R-W,0),Ee=re(_e+me),Ge=!d;++S<_e;)Ee[S]=n[S];for(var nt=S;++Z<me;)Ee[nt+Z]=a[Z];for(;++O<W;)(Ge||S<R)&&(Ee[nt+l[O]]=n[S++]);return Ee}function Un(n,a){var l=-1,d=n.length;for(a||(a=re(d));++l<d;)a[l]=n[l];return a}function Wn(n,a,l,d){var S=!l;l||(l={});for(var R=-1,O=a.length;++R<O;){var W=a[R],Z=d?d(l[W],n[W],W,l,n):t;Z===t&&(Z=n[W]),S?Yi(l,W,Z):Lr(l,W,Z)}return l}function _l(n,a){return Wn(n,mh(n),a)}function vl(n,a){return Wn(n,ip(n),a)}function Wc(n,a){return function(l,d){var S=Ct(l)?af:pr,R=a?a():{};return S(l,n,ut(d,2),R)}}function $s(n){return L(function(a,l){var d=-1,S=l.length,R=S>1?l[S-1]:t,O=S>2?l[2]:t;for(R=n.length>3&&typeof R=="function"?(S--,R):t,O&&ai(l[0],l[1],O)&&(R=S<3?t:R,S=1),a=en(a);++d<S;){var W=l[d];W&&n(a,W,d,R)}return a})}function Xd(n,a){return function(l,d){if(l==null)return l;if(!_i(l))return n(l,d);for(var S=l.length,R=a?S:-1,O=en(l);(a?R--:++R<S)&&d(O[R],R,O)!==!1;);return l}}function $d(n){return function(a,l,d){for(var S=-1,R=en(a),O=d(a),W=O.length;W--;){var Z=O[n?W:++S];if(l(R[Z],Z,R)===!1)break}return a}}function R_(n,a,l){var d=a&g,S=xl(n);function R(){var O=this&&this!==Pn&&this instanceof R?S:n;return O.apply(d?l:this,arguments)}return R}function qd(n){return function(a){a=rn(a);var l=ra(a)?Si(a):t,d=l?l[0]:a.charAt(0),S=l?Wt(l,1).join(""):a.slice(1);return d[n]()+S}}function qs(n){return function(a){return Xo(Xp(Wp(a).replace(Qu,"")),n,"")}}function xl(n){return function(){var a=arguments;switch(a.length){case 0:return new n;case 1:return new n(a[0]);case 2:return new n(a[0],a[1]);case 3:return new n(a[0],a[1],a[2]);case 4:return new n(a[0],a[1],a[2],a[3]);case 5:return new n(a[0],a[1],a[2],a[3],a[4]);case 6:return new n(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new n(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var l=ca(n.prototype),d=n.apply(l,a);return bn(d)?d:l}}function L_(n,a,l){var d=xl(n);function S(){for(var R=arguments.length,O=re(R),W=R,Z=Ys(S);W--;)O[W]=arguments[W];var me=R<3&&O[0]!==Z&&O[R-1]!==Z?[]:Xi(O,Z);if(R-=me.length,R<l)return Jd(n,a,Xc,S.placeholder,t,O,me,t,t,l-R);var _e=this&&this!==Pn&&this instanceof S?d:n;return ii(_e,this,O)}return S}function Yd(n){return function(a,l,d){var S=en(a);if(!_i(a)){var R=ut(l,3);a=Xn(a),l=function(W){return R(S[W],W,S)}}var O=n(a,l,d);return O>-1?S[R?a[O]:O]:t}}function Zd(n){return Nr(function(a){var l=a.length,d=l,S=Fn.prototype.thru;for(n&&a.reverse();d--;){var R=a[d];if(typeof R!="function")throw new mi(u);if(S&&!O&&Zc(R)=="wrapper")var O=new Fn([],!0)}for(d=O?d:l;++d<l;){R=a[d];var W=Zc(R),Z=W=="wrapper"?dh(R):t;Z&&_h(Z[0])&&Z[1]==(B|P|$|ee)&&!Z[4].length&&Z[9]==1?O=O[Zc(Z[0])].apply(O,Z[3]):O=R.length==1&&_h(R)?O[W]():O.thru(R)}return function(){var me=arguments,_e=me[0];if(O&&me.length==1&&Ct(_e))return O.plant(_e).value();for(var Ee=0,Ge=l?a[Ee].apply(this,me):_e;++Ee<l;)Ge=a[Ee].call(this,Ge);return Ge}})}function Xc(n,a,l,d,S,R,O,W,Z,me){var _e=a&B,Ee=a&g,Ge=a&_,nt=a&(P|N),ft=a&De,Ut=Ge?t:xl(n);function ht(){for(var Gt=arguments.length,Xt=re(Gt),Ci=Gt;Ci--;)Xt[Ci]=arguments[Ci];if(nt)var si=Ys(ht),Ri=hf(Xt,si);if(d&&(Xt=Bi(Xt,d,S,nt)),R&&(Xt=gr(Xt,R,O,nt)),Gt-=Ri,nt&&Gt<me){var Ln=Xi(Xt,si);return Jd(n,a,Xc,ht.placeholder,l,Xt,Ln,W,Z,me-Gt)}var Ji=Ee?l:this,zr=Ge?Ji[n]:n;return Gt=Xt.length,W?Xt=K_(Xt,W):ft&&Gt>1&&Xt.reverse(),_e&&Z<Gt&&(Xt.length=Z),this&&this!==Pn&&this instanceof ht&&(zr=Ut||xl(zr)),zr.apply(Ji,Xt)}return ht}function Kd(n,a){return function(l,d){return Nc(l,n,a(d),{})}}function $c(n,a){return function(l,d){var S;if(l===t&&d===t)return a;if(l!==t&&(S=l),d!==t){if(S===t)return d;typeof l=="string"||typeof d=="string"?(l=ct(l),d=ct(d)):(l=Pt(l),d=Pt(d)),S=n(l,d)}return S}}function ch(n){return Nr(function(a){return a=pn(a,ri(ut())),L(function(l){var d=this;return n(a,function(S){return ii(S,d,l)})})})}function qc(n,a){a=a===t?" ":ct(a);var l=a.length;if(l<2)return l?E(a,n):a;var d=E(a,Fs(n/Ar(a)));return ra(a)?Wt(Si(d),0,n).join(""):d.slice(0,n)}function P_(n,a,l,d){var S=a&g,R=xl(n);function O(){for(var W=-1,Z=arguments.length,me=-1,_e=d.length,Ee=re(_e+Z),Ge=this&&this!==Pn&&this instanceof O?R:n;++me<_e;)Ee[me]=d[me];for(;Z--;)Ee[me++]=arguments[++W];return ii(Ge,S?l:this,Ee)}return O}function jd(n){return function(a,l,d){return d&&typeof d!="number"&&ai(a,l,d)&&(l=d=t),a=Br(a),l===t?(l=a,a=0):l=Br(l),d=d===t?a<l?1:-1:Br(d),v(a,l,d,n)}}function Yc(n){return function(a,l){return typeof a=="string"&&typeof l=="string"||(a=Gi(a),l=Gi(l)),n(a,l)}}function Jd(n,a,l,d,S,R,O,W,Z,me){var _e=a&P,Ee=_e?O:t,Ge=_e?t:O,nt=_e?R:t,ft=_e?t:R;a|=_e?$:z,a&=~(_e?z:$),a&U||(a&=~(g|_));var Ut=[n,a,S,nt,Ee,ft,Ge,W,Z,me],ht=l.apply(t,Ut);return _h(n)&&up(ht,Ut),ht.placeholder=d,fp(ht,n,a)}function uh(n){var a=yn[n];return function(l,d){if(l=Gi(l),d=d==null?0:kn(It(d),292),d&&wr(l)){var S=(rn(l)+"e").split("e"),R=a(S[0]+"e"+(+S[1]+d));return S=(rn(R)+"e").split("e"),+(S[0]+"e"+(+S[1]-d))}return a(l)}}var D_=Cr&&1/ka(new Cr([,-0]))[1]==xe?function(n){return new Cr(n)}:Dh;function Qd(n){return function(a){var l=Qn(a);return l==We?Ha(a):l==I?dc(a):za(a,n(a))}}function Ur(n,a,l,d,S,R,O,W){var Z=a&_;if(!Z&&typeof n!="function")throw new mi(u);var me=d?d.length:0;if(me||(a&=~($|z),d=S=t),O=O===t?O:Cn(It(O),0),W=W===t?W:It(W),me-=S?S.length:0,a&z){var _e=d,Ee=S;d=S=t}var Ge=Z?t:dh(n),nt=[n,a,l,d,S,_e,Ee,R,O,W];if(Ge&&q_(nt,Ge),n=nt[0],a=nt[1],l=nt[2],d=nt[3],S=nt[4],W=nt[9]=nt[9]===t?Z?0:n.length:Cn(nt[9]-me,0),!W&&a&(P|N)&&(a&=~(P|N)),!a||a==g)var ft=R_(n,a,l);else a==P||a==N?ft=L_(n,a,W):(a==$||a==(g|$))&&!S.length?ft=P_(n,a,l,d):ft=Xc.apply(t,nt);var Ut=Ge?K:up;return fp(Ut(ft,nt),n,a)}function ep(n,a,l,d){return n===t||ji(n,cr[l])&&!tn.call(d,l)?a:n}function tp(n,a,l,d,S,R){return bn(n)&&bn(a)&&(R.set(a,n),Ya(n,a,t,tp,R),R.delete(a)),n}function I_(n){return Sl(n)?t:n}function np(n,a,l,d,S,R){var O=l&w,W=n.length,Z=a.length;if(W!=Z&&!(O&&Z>W))return!1;var me=R.get(n),_e=R.get(a);if(me&&_e)return me==a&&_e==n;var Ee=-1,Ge=!0,nt=l&y?new dr:t;for(R.set(n,a),R.set(a,n);++Ee<W;){var ft=n[Ee],Ut=a[Ee];if(d)var ht=O?d(Ut,ft,Ee,a,n,R):d(ft,Ut,Ee,n,a,R);if(ht!==t){if(ht)continue;Ge=!1;break}if(nt){if(!Ms(a,function(Gt,Xt){if(!Ga(nt,Xt)&&(ft===Gt||S(ft,Gt,l,d,R)))return nt.push(Xt)})){Ge=!1;break}}else if(!(ft===Ut||S(ft,Ut,l,d,R))){Ge=!1;break}}return R.delete(n),R.delete(a),Ge}function U_(n,a,l,d,S,R,O){switch(l){case et:if(n.byteLength!=a.byteLength||n.byteOffset!=a.byteOffset)return!1;n=n.buffer,a=a.buffer;case ot:return!(n.byteLength!=a.byteLength||!R(new Is(n),new Is(a)));case Je:case ke:case pt:return ji(+n,+a);case at:return n.name==a.name&&n.message==a.message;case $t:case T:return n==a+"";case We:var W=Ha;case I:var Z=d&w;if(W||(W=ka),n.size!=a.size&&!Z)return!1;var me=O.get(n);if(me)return me==a;d|=y,O.set(n,a);var _e=np(W(n),W(a),d,S,R,O);return O.delete(n),_e;case le:if(Ni)return Ni.call(n)==Ni.call(a)}return!1}function N_(n,a,l,d,S,R){var O=l&w,W=fh(n),Z=W.length,me=fh(a),_e=me.length;if(Z!=_e&&!O)return!1;for(var Ee=Z;Ee--;){var Ge=W[Ee];if(!(O?Ge in a:tn.call(a,Ge)))return!1}var nt=R.get(n),ft=R.get(a);if(nt&&ft)return nt==a&&ft==n;var Ut=!0;R.set(n,a),R.set(a,n);for(var ht=O;++Ee<Z;){Ge=W[Ee];var Gt=n[Ge],Xt=a[Ge];if(d)var Ci=O?d(Xt,Gt,Ge,a,n,R):d(Gt,Xt,Ge,n,a,R);if(!(Ci===t?Gt===Xt||S(Gt,Xt,l,d,R):Ci)){Ut=!1;break}ht||(ht=Ge=="constructor")}if(Ut&&!ht){var si=n.constructor,Ri=a.constructor;si!=Ri&&"constructor"in n&&"constructor"in a&&!(typeof si=="function"&&si instanceof si&&typeof Ri=="function"&&Ri instanceof Ri)&&(Ut=!1)}return R.delete(n),R.delete(a),Ut}function Nr(n){return xh(lp(n,t,_p),n+"")}function fh(n){return Hs(n,Xn,mh)}function hh(n){return Hs(n,vi,ip)}var dh=sa?function(n){return sa.get(n)}:Dh;function Zc(n){for(var a=n.name+"",l=oa[a],d=tn.call(oa,a)?l.length:0;d--;){var S=l[d],R=S.func;if(R==null||R==n)return S.name}return a}function Ys(n){var a=tn.call(A,"placeholder")?A:n;return a.placeholder}function ut(){var n=A.iteratee||Lh;return n=n===Lh?hl:n,arguments.length?n(arguments[0],arguments[1]):n}function Kc(n,a){var l=n.__data__;return V_(a)?l[typeof a=="string"?"string":"hash"]:l.map}function ph(n){for(var a=Xn(n),l=a.length;l--;){var d=a[l],S=n[d];a[l]=[d,S,sp(S)]}return a}function Ka(n,a){var l=hc(n,a);return fl(l)?l:t}function F_(n){var a=tn.call(n,fr),l=n[fr];try{n[fr]=t;var d=!0}catch{}var S=Ps.call(n);return d&&(a?n[fr]=l:delete n[fr]),S}var mh=el?function(n){return n==null?[]:(n=en(n),sr(el(n),function(a){return xc.call(n,a)}))}:Ih,ip=el?function(n){for(var a=[];n;)or(a,mh(n)),n=Us(n);return a}:Ih,Qn=Vn;(Os&&Qn(new Os(new ArrayBuffer(1)))!=et||hr&&Qn(new hr)!=We||Bs&&Qn(Bs.resolve())!=vt||Cr&&Qn(new Cr)!=I||Xa&&Qn(new Xa)!=Te)&&(Qn=function(n){var a=Vn(n),l=a==_t?n.constructor:t,d=l?ja(l):"";if(d)switch(d){case Ec:return et;case yc:return We;case Lf:return vt;case Pf:return I;case Df:return Te}return a});function O_(n,a,l){for(var d=-1,S=l.length;++d<S;){var R=l[d],O=R.size;switch(R.type){case"drop":n+=O;break;case"dropRight":a-=O;break;case"take":a=kn(a,n+O);break;case"takeRight":n=Cn(n,a-O);break}}return{start:n,end:a}}function B_(n){var a=n.match(ps);return a?a[1].split(Vi):[]}function rp(n,a,l){a=xt(a,n);for(var d=-1,S=a.length,R=!1;++d<S;){var O=_r(a[d]);if(!(R=n!=null&&l(n,O)))break;n=n[O]}return R||++d!=S?R:(S=n==null?0:n.length,!!S&&iu(S)&&Fr(O,S)&&(Ct(n)||Ja(n)))}function z_(n){var a=n.length,l=new n.constructor(a);return a&&typeof n[0]=="string"&&tn.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function ap(n){return typeof n.constructor=="function"&&!Ml(n)?ca(Us(n)):{}}function G_(n,a,l){var d=n.constructor;switch(a){case ot:return Yt(n);case Je:case ke:return new d(+n);case et:return nn(n,l);case Ne:case Fe:case mt:case Ue:case sn:case bt:case tt:case Xe:case je:return Ki(n,l);case We:return new d;case pt:case T:return new d(n);case $t:return Ai(n);case I:return new d;case le:return mr(n)}}function H_(n,a){var l=a.length;if(!l)return n;var d=l-1;return a[d]=(l>1?"& ":"")+a[d],a=a.join(l>2?", ":" "),n.replace(Kr,`{
/* [wrapped with `+a+`] */
`)}function k_(n){return Ct(n)||Ja(n)||!!(Mc&&n&&n[Mc])}function Fr(n,a){var l=typeof n;return a=a??ce,!!a&&(l=="number"||l!="symbol"&&ie.test(n))&&n>-1&&n%1==0&&n<a}function ai(n,a,l){if(!bn(l))return!1;var d=typeof a;return(d=="number"?_i(l)&&Fr(a,l.length):d=="string"&&a in l)?ji(l[a],n):!1}function gh(n,a){if(Ct(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||wi(n)?!0:hn.test(n)||!Jt.test(n)||a!=null&&n in en(a)}function V_(n){var a=typeof n;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?n!=="__proto__":n===null}function _h(n){var a=Zc(n),l=A[a];if(typeof l!="function"||!(a in Bt.prototype))return!1;if(n===l)return!0;var d=dh(l);return!!d&&n===d[0]}function W_(n){return!!Qo&&Qo in n}var X_=Rs?Or:Uh;function Ml(n){var a=n&&n.constructor,l=typeof a=="function"&&a.prototype||cr;return n===l}function sp(n){return n===n&&!bn(n)}function op(n,a){return function(l){return l==null?!1:l[n]===a&&(a!==t||n in en(l))}}function $_(n){var a=tu(n,function(d){return l.size===p&&l.clear(),d}),l=a.cache;return a}function q_(n,a){var l=n[1],d=a[1],S=l|d,R=S<(g|_|B),O=d==B&&l==P||d==B&&l==ee&&n[7].length<=a[8]||d==(B|ee)&&a[7].length<=a[8]&&l==P;if(!(R||O))return n;d&g&&(n[2]=a[2],S|=l&g?0:U);var W=a[3];if(W){var Z=n[3];n[3]=Z?Bi(Z,W,a[4]):W,n[4]=Z?Xi(n[3],m):a[4]}return W=a[5],W&&(Z=n[5],n[5]=Z?gr(Z,W,a[6]):W,n[6]=Z?Xi(n[5],m):a[6]),W=a[7],W&&(n[7]=W),d&B&&(n[8]=n[8]==null?a[8]:kn(n[8],a[8])),n[9]==null&&(n[9]=a[9]),n[0]=a[0],n[1]=S,n}function Y_(n){var a=[];if(n!=null)for(var l in en(n))a.push(l);return a}function Z_(n){return Ps.call(n)}function lp(n,a,l){return a=Cn(a===t?n.length-1:a,0),function(){for(var d=arguments,S=-1,R=Cn(d.length-a,0),O=re(R);++S<R;)O[S]=d[a+S];S=-1;for(var W=re(a+1);++S<a;)W[S]=d[S];return W[a]=l(O),ii(n,this,W)}}function cp(n,a){return a.length<2?n:Dr(n,ge(a,0,-1))}function K_(n,a){for(var l=n.length,d=kn(a.length,l),S=Un(n);d--;){var R=a[d];n[d]=Fr(R,l)?S[R]:t}return n}function vh(n,a){if(!(a==="constructor"&&typeof n[a]=="function")&&a!="__proto__")return n[a]}var up=hp(K),bl=Tf||function(n,a){return Pn.setTimeout(n,a)},xh=hp(Q);function fp(n,a,l){var d=a+"";return xh(n,H_(d,j_(B_(d),l)))}function hp(n){var a=0,l=0;return function(){var d=Rf(),S=Ce-(d-l);if(l=d,S>0){if(++a>=Ie)return arguments[0]}else a=0;return n.apply(t,arguments)}}function jc(n,a){var l=-1,d=n.length,S=d-1;for(a=a===t?d:a;++l<a;){var R=h(l,S),O=n[R];n[R]=n[l],n[l]=O}return n.length=a,n}var dp=$_(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(kt,function(l,d,S,R){a.push(S?R.replace(Io,"$1"):d||l)}),a});function _r(n){if(typeof n=="string"||wi(n))return n;var a=n+"";return a=="0"&&1/n==-xe?"-0":a}function ja(n){if(n!=null){try{return Ls.call(n)}catch{}try{return n+""}catch{}}return""}function j_(n,a){return pi(oe,function(l){var d="_."+l[0];a&l[1]&&!vs(n,d)&&n.push(d)}),n.sort()}function pp(n){if(n instanceof Bt)return n.clone();var a=new Fn(n.__wrapped__,n.__chain__);return a.__actions__=Un(n.__actions__),a.__index__=n.__index__,a.__values__=n.__values__,a}function J_(n,a,l){(l?ai(n,a,l):a===t)?a=1:a=Cn(It(a),0);var d=n==null?0:n.length;if(!d||a<1)return[];for(var S=0,R=0,O=re(Fs(d/a));S<d;)O[R++]=ge(n,S,S+=a);return O}function Q_(n){for(var a=-1,l=n==null?0:n.length,d=0,S=[];++a<l;){var R=n[a];R&&(S[d++]=R)}return S}function ev(){var n=arguments.length;if(!n)return[];for(var a=re(n-1),l=arguments[0],d=n;d--;)a[d-1]=arguments[d];return or(Ct(l)?Un(l):[l],Dn(a,1))}var tv=L(function(n,a){return Rn(n)?qa(n,Dn(a,1,Rn,!0)):[]}),nv=L(function(n,a){var l=zi(a);return Rn(l)&&(l=t),Rn(n)?qa(n,Dn(a,1,Rn,!0),ut(l,2)):[]}),iv=L(function(n,a){var l=zi(a);return Rn(l)&&(l=t),Rn(n)?qa(n,Dn(a,1,Rn,!0),t,l):[]});function rv(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:It(a),ge(n,a<0?0:a,d)):[]}function av(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:It(a),a=d-a,ge(n,0,a<0?0:a)):[]}function sv(n,a){return n&&n.length?Mn(n,ut(a,3),!0,!0):[]}function ov(n,a){return n&&n.length?Mn(n,ut(a,3),!0):[]}function lv(n,a,l,d){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&ai(n,a,l)&&(l=0,d=S),th(n,a,l,d)):[]}function mp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=l==null?0:It(l);return S<0&&(S=Cn(d+S,0)),bs(n,ut(a,3),S)}function gp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=d-1;return l!==t&&(S=It(l),S=l<0?Cn(d+S,0):kn(S,d-1)),bs(n,ut(a,3),S,!0)}function _p(n){var a=n==null?0:n.length;return a?Dn(n,1):[]}function cv(n){var a=n==null?0:n.length;return a?Dn(n,xe):[]}function uv(n,a){var l=n==null?0:n.length;return l?(a=a===t?1:It(a),Dn(n,a)):[]}function fv(n){for(var a=-1,l=n==null?0:n.length,d={};++a<l;){var S=n[a];d[S[0]]=S[1]}return d}function vp(n){return n&&n.length?n[0]:t}function hv(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=l==null?0:It(l);return S<0&&(S=Cn(d+S,0)),ia(n,a,S)}function dv(n){var a=n==null?0:n.length;return a?ge(n,0,-1):[]}var pv=L(function(n){var a=pn(n,it);return a.length&&a[0]===n[0]?ks(a):[]}),mv=L(function(n){var a=zi(n),l=pn(n,it);return a===zi(l)?a=t:l.pop(),l.length&&l[0]===n[0]?ks(l,ut(a,2)):[]}),gv=L(function(n){var a=zi(n),l=pn(n,it);return a=typeof a=="function"?a:t,a&&l.pop(),l.length&&l[0]===n[0]?ks(l,t,a):[]});function _v(n,a){return n==null?"":wf.call(n,a)}function zi(n){var a=n==null?0:n.length;return a?n[a-1]:t}function vv(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=d;return l!==t&&(S=It(l),S=S<0?Cn(d+S,0):kn(S,d-1)),a===a?_f(n,a,S):bs(n,Ba,S,!0)}function xv(n,a){return n&&n.length?Za(n,It(a)):t}var Mv=L(xp);function xp(n,a){return n&&n.length&&a&&a.length?Tn(n,a):n}function bv(n,a,l){return n&&n.length&&a&&a.length?Tn(n,a,ut(l,2)):n}function Sv(n,a,l){return n&&n.length&&a&&a.length?Tn(n,a,t,l):n}var Ev=Nr(function(n,a){var l=n==null?0:n.length,d=ol(n,a);return Vc(n,pn(a,function(S){return Fr(S,l)?+S:S}).sort(Ir)),d});function yv(n,a){var l=[];if(!(n&&n.length))return l;var d=-1,S=[],R=n.length;for(a=ut(a,3);++d<R;){var O=n[d];a(O,d,n)&&(l.push(O),S.push(d))}return Vc(n,S),l}function Mh(n){return n==null?n:Sc.call(n)}function Tv(n,a,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&ai(n,a,l)?(a=0,l=d):(a=a==null?0:It(a),l=l===t?d:It(l)),ge(n,a,l)):[]}function Av(n,a){return Ae(n,a)}function wv(n,a,l){return qe(n,a,ut(l,2))}function Cv(n,a){var l=n==null?0:n.length;if(l){var d=Ae(n,a);if(d<l&&ji(n[d],a))return d}return-1}function Rv(n,a){return Ae(n,a,!0)}function Lv(n,a,l){return qe(n,a,ut(l,2),!0)}function Pv(n,a){var l=n==null?0:n.length;if(l){var d=Ae(n,a,!0)-1;if(ji(n[d],a))return d}return-1}function Dv(n){return n&&n.length?Ye(n):[]}function Iv(n,a){return n&&n.length?Ye(n,ut(a,2)):[]}function Uv(n){var a=n==null?0:n.length;return a?ge(n,1,a):[]}function Nv(n,a,l){return n&&n.length?(a=l||a===t?1:It(a),ge(n,0,a<0?0:a)):[]}function Fv(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:It(a),a=d-a,ge(n,a<0?0:a,d)):[]}function Ov(n,a){return n&&n.length?Mn(n,ut(a,3),!1,!0):[]}function Bv(n,a){return n&&n.length?Mn(n,ut(a,3)):[]}var zv=L(function(n){return wt(Dn(n,1,Rn,!0))}),Gv=L(function(n){var a=zi(n);return Rn(a)&&(a=t),wt(Dn(n,1,Rn,!0),ut(a,2))}),Hv=L(function(n){var a=zi(n);return a=typeof a=="function"?a:t,wt(Dn(n,1,Rn,!0),t,a)});function kv(n){return n&&n.length?wt(n):[]}function Vv(n,a){return n&&n.length?wt(n,ut(a,2)):[]}function Wv(n,a){return a=typeof a=="function"?a:t,n&&n.length?wt(n,t,a):[]}function bh(n){if(!(n&&n.length))return[];var a=0;return n=sr(n,function(l){if(Rn(l))return a=Cn(l.length,a),!0}),Yo(a,function(l){return pn(n,Es(l))})}function Mp(n,a){if(!(n&&n.length))return[];var l=bh(n);return a==null?l:pn(l,function(d){return ii(a,t,d)})}var Xv=L(function(n,a){return Rn(n)?qa(n,a):[]}),$v=L(function(n){return Ot(sr(n,Rn))}),qv=L(function(n){var a=zi(n);return Rn(a)&&(a=t),Ot(sr(n,Rn),ut(a,2))}),Yv=L(function(n){var a=zi(n);return a=typeof a=="function"?a:t,Ot(sr(n,Rn),t,a)}),Zv=L(bh);function Kv(n,a){return Re(n||[],a||[],Lr)}function jv(n,a){return Re(n||[],a||[],H)}var Jv=L(function(n){var a=n.length,l=a>1?n[a-1]:t;return l=typeof l=="function"?(n.pop(),l):t,Mp(n,l)});function bp(n){var a=A(n);return a.__chain__=!0,a}function Qv(n,a){return a(n),n}function Jc(n,a){return a(n)}var e0=Nr(function(n){var a=n.length,l=a?n[0]:0,d=this.__wrapped__,S=function(R){return ol(R,n)};return a>1||this.__actions__.length||!(d instanceof Bt)||!Fr(l)?this.thru(S):(d=d.slice(l,+l+(a?1:0)),d.__actions__.push({func:Jc,args:[S],thisArg:t}),new Fn(d,this.__chain__).thru(function(R){return a&&!R.length&&R.push(t),R}))});function t0(){return bp(this)}function n0(){return new Fn(this.value(),this.__chain__)}function i0(){this.__values__===t&&(this.__values__=Np(this.value()));var n=this.__index__>=this.__values__.length,a=n?t:this.__values__[this.__index__++];return{done:n,value:a}}function r0(){return this}function a0(n){for(var a,l=this;l instanceof $a;){var d=pp(l);d.__index__=0,d.__values__=t,a?S.__wrapped__=d:a=d;var S=d;l=l.__wrapped__}return S.__wrapped__=n,a}function s0(){var n=this.__wrapped__;if(n instanceof Bt){var a=n;return this.__actions__.length&&(a=new Bt(this)),a=a.reverse(),a.__actions__.push({func:Jc,args:[Mh],thisArg:t}),new Fn(a,this.__chain__)}return this.thru(Mh)}function o0(){return qn(this.__wrapped__,this.__actions__)}var l0=Wc(function(n,a,l){tn.call(n,l)?++n[l]:Yi(n,l,1)});function c0(n,a,l){var d=Ct(n)?ac:eh;return l&&ai(n,a,l)&&(a=t),d(n,ut(a,3))}function u0(n,a){var l=Ct(n)?sr:Dc;return l(n,ut(a,3))}var f0=Yd(mp),h0=Yd(gp);function d0(n,a){return Dn(Qc(n,a),1)}function p0(n,a){return Dn(Qc(n,a),xe)}function m0(n,a,l){return l=l===t?1:It(l),Dn(Qc(n,a),l)}function Sp(n,a){var l=Ct(n)?pi:Fi;return l(n,ut(a,3))}function Ep(n,a){var l=Ct(n)?sf:Pc;return l(n,ut(a,3))}var g0=Wc(function(n,a,l){tn.call(n,l)?n[l].push(a):Yi(n,l,[a])});function _0(n,a,l,d){n=_i(n)?n:Ks(n),l=l&&!d?It(l):0;var S=n.length;return l<0&&(l=Cn(S+l,0)),ru(n)?l<=S&&n.indexOf(a,l)>-1:!!S&&ia(n,a,l)>-1}var v0=L(function(n,a,l){var d=-1,S=typeof a=="function",R=_i(n)?re(n.length):[];return Fi(n,function(O){R[++d]=S?ii(a,O,l):ha(O,a,l)}),R}),x0=Wc(function(n,a,l){Yi(n,l,a)});function Qc(n,a){var l=Ct(n)?pn:Gc;return l(n,ut(a,3))}function M0(n,a,l,d){return n==null?[]:(Ct(a)||(a=a==null?[]:[a]),l=d?t:l,Ct(l)||(l=l==null?[]:[l]),Xs(n,a,l))}var b0=Wc(function(n,a,l){n[l?0:1].push(a)},function(){return[[],[]]});function S0(n,a,l){var d=Ct(n)?Xo:qo,S=arguments.length<3;return d(n,ut(a,4),l,S,Fi)}function E0(n,a,l){var d=Ct(n)?of:qo,S=arguments.length<3;return d(n,ut(a,4),l,S,Pc)}function y0(n,a){var l=Ct(n)?sr:Dc;return l(n,nu(ut(a,3)))}function T0(n){var a=Ct(n)?Cc:V;return a(n)}function A0(n,a,l){(l?ai(n,a,l):a===t)?a=1:a=It(a);var d=Ct(n)?Kf:X;return d(n,a)}function w0(n){var a=Ct(n)?jf:he;return a(n)}function C0(n){if(n==null)return 0;if(_i(n))return ru(n)?Ar(n):n.length;var a=Qn(n);return a==We||a==I?n.size:dl(n).length}function R0(n,a,l){var d=Ct(n)?Ms:ze;return l&&ai(n,a,l)&&(a=t),d(n,ut(a,3))}var L0=L(function(n,a){if(n==null)return[];var l=a.length;return l>1&&ai(n,a[0],a[1])?a=[]:l>2&&ai(a[0],a[1],a[2])&&(a=[a[0]]),Xs(n,Dn(a,1),[])}),eu=bc||function(){return Pn.Date.now()};function P0(n,a){if(typeof a!="function")throw new mi(u);return n=It(n),function(){if(--n<1)return a.apply(this,arguments)}}function yp(n,a,l){return a=l?t:a,a=n&&a==null?n.length:a,Ur(n,B,t,t,t,t,a)}function Tp(n,a){var l;if(typeof a!="function")throw new mi(u);return n=It(n),function(){return--n>0&&(l=a.apply(this,arguments)),n<=1&&(a=t),l}}var Sh=L(function(n,a,l){var d=g;if(l.length){var S=Xi(l,Ys(Sh));d|=$}return Ur(n,d,a,l,S)}),Ap=L(function(n,a,l){var d=g|_;if(l.length){var S=Xi(l,Ys(Ap));d|=$}return Ur(a,d,n,l,S)});function wp(n,a,l){a=l?t:a;var d=Ur(n,P,t,t,t,t,t,a);return d.placeholder=wp.placeholder,d}function Cp(n,a,l){a=l?t:a;var d=Ur(n,N,t,t,t,t,t,a);return d.placeholder=Cp.placeholder,d}function Rp(n,a,l){var d,S,R,O,W,Z,me=0,_e=!1,Ee=!1,Ge=!0;if(typeof n!="function")throw new mi(u);a=Gi(a)||0,bn(l)&&(_e=!!l.leading,Ee="maxWait"in l,R=Ee?Cn(Gi(l.maxWait)||0,a):R,Ge="trailing"in l?!!l.trailing:Ge);function nt(Ln){var Ji=d,zr=S;return d=S=t,me=Ln,O=n.apply(zr,Ji),O}function ft(Ln){return me=Ln,W=bl(Gt,a),_e?nt(Ln):O}function Ut(Ln){var Ji=Ln-Z,zr=Ln-me,Yp=a-Ji;return Ee?kn(Yp,R-zr):Yp}function ht(Ln){var Ji=Ln-Z,zr=Ln-me;return Z===t||Ji>=a||Ji<0||Ee&&zr>=R}function Gt(){var Ln=eu();if(ht(Ln))return Xt(Ln);W=bl(Gt,Ut(Ln))}function Xt(Ln){return W=t,Ge&&d?nt(Ln):(d=S=t,O)}function Ci(){W!==t&&zt(W),me=0,d=Z=S=W=t}function si(){return W===t?O:Xt(eu())}function Ri(){var Ln=eu(),Ji=ht(Ln);if(d=arguments,S=this,Z=Ln,Ji){if(W===t)return ft(Z);if(Ee)return zt(W),W=bl(Gt,a),nt(Z)}return W===t&&(W=bl(Gt,a)),O}return Ri.cancel=Ci,Ri.flush=si,Ri}var D0=L(function(n,a){return Lc(n,1,a)}),I0=L(function(n,a,l){return Lc(n,Gi(a)||0,l)});function U0(n){return Ur(n,De)}function tu(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new mi(u);var l=function(){var d=arguments,S=a?a.apply(this,d):d[0],R=l.cache;if(R.has(S))return R.get(S);var O=n.apply(this,d);return l.cache=R.set(S,O)||R,O};return l.cache=new(tu.Cache||Ei),l}tu.Cache=Ei;function nu(n){if(typeof n!="function")throw new mi(u);return function(){var a=arguments;switch(a.length){case 0:return!n.call(this);case 1:return!n.call(this,a[0]);case 2:return!n.call(this,a[0],a[1]);case 3:return!n.call(this,a[0],a[1],a[2])}return!n.apply(this,a)}}function N0(n){return Tp(2,n)}var F0=On(function(n,a){a=a.length==1&&Ct(a[0])?pn(a[0],ri(ut())):pn(Dn(a,1),ri(ut()));var l=a.length;return L(function(d){for(var S=-1,R=kn(d.length,l);++S<R;)d[S]=a[S].call(this,d[S]);return ii(n,this,d)})}),Eh=L(function(n,a){var l=Xi(a,Ys(Eh));return Ur(n,$,t,a,l)}),Lp=L(function(n,a){var l=Xi(a,Ys(Lp));return Ur(n,z,t,a,l)}),O0=Nr(function(n,a){return Ur(n,ee,t,t,t,a)});function B0(n,a){if(typeof n!="function")throw new mi(u);return a=a===t?a:It(a),L(n,a)}function z0(n,a){if(typeof n!="function")throw new mi(u);return a=a==null?0:Cn(It(a),0),L(function(l){var d=l[a],S=Wt(l,0,a);return d&&or(S,d),ii(n,this,S)})}function G0(n,a,l){var d=!0,S=!0;if(typeof n!="function")throw new mi(u);return bn(l)&&(d="leading"in l?!!l.leading:d,S="trailing"in l?!!l.trailing:S),Rp(n,a,{leading:d,maxWait:a,trailing:S})}function H0(n){return yp(n,1)}function k0(n,a){return Eh(Dt(a),n)}function V0(){if(!arguments.length)return[];var n=arguments[0];return Ct(n)?n:[n]}function W0(n){return gi(n,b)}function X0(n,a){return a=typeof a=="function"?a:t,gi(n,b,a)}function $0(n){return gi(n,x|b)}function q0(n,a){return a=typeof a=="function"?a:t,gi(n,x|b,a)}function Y0(n,a){return a==null||Rc(n,a,Xn(a))}function ji(n,a){return n===a||n!==n&&a!==a}var Z0=Yc(ul),K0=Yc(function(n,a){return n>=a}),Ja=Fc(function(){return arguments}())?Fc:function(n){return An(n)&&tn.call(n,"callee")&&!xc.call(n,"callee")},Ct=re.isArray,j0=ec?ri(ec):Oc;function _i(n){return n!=null&&iu(n.length)&&!Or(n)}function Rn(n){return An(n)&&_i(n)}function J0(n){return n===!0||n===!1||An(n)&&Vn(n)==Je}var pa=Af||Uh,Q0=tc?ri(tc):Zi;function ex(n){return An(n)&&n.nodeType===1&&!Sl(n)}function tx(n){if(n==null)return!0;if(_i(n)&&(Ct(n)||typeof n=="string"||typeof n.splice=="function"||pa(n)||Zs(n)||Ja(n)))return!n.length;var a=Qn(n);if(a==We||a==I)return!n.size;if(Ml(n))return!dl(n).length;for(var l in n)if(tn.call(n,l))return!1;return!0}function nx(n,a){return mn(n,a)}function ix(n,a,l){l=typeof l=="function"?l:t;var d=l?l(n,a):t;return d===t?mn(n,a,t,l):!!d}function yh(n){if(!An(n))return!1;var a=Vn(n);return a==at||a==Ht||typeof n.message=="string"&&typeof n.name=="string"&&!Sl(n)}function rx(n){return typeof n=="number"&&wr(n)}function Or(n){if(!bn(n))return!1;var a=Vn(n);return a==J||a==vn||a==dt||a==Tt}function Pp(n){return typeof n=="number"&&n==It(n)}function iu(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ce}function bn(n){var a=typeof n;return n!=null&&(a=="object"||a=="function")}function An(n){return n!=null&&typeof n=="object"}var Dp=Wo?ri(Wo):ah;function ax(n,a){return n===a||Vs(n,a,ph(a))}function sx(n,a,l){return l=typeof l=="function"?l:t,Vs(n,a,ph(a),l)}function ox(n){return Ip(n)&&n!=+n}function lx(n){if(X_(n))throw new Et(o);return fl(n)}function cx(n){return n===null}function ux(n){return n==null}function Ip(n){return typeof n=="number"||An(n)&&Vn(n)==pt}function Sl(n){if(!An(n)||Vn(n)!=_t)return!1;var a=Us(n);if(a===null)return!0;var l=tn.call(a,"constructor")&&a.constructor;return typeof l=="function"&&l instanceof l&&Ls.call(l)==bf}var Th=nc?ri(nc):Ws;function fx(n){return Pp(n)&&n>=-ce&&n<=ce}var Up=ic?ri(ic):Bc;function ru(n){return typeof n=="string"||!Ct(n)&&An(n)&&Vn(n)==T}function wi(n){return typeof n=="symbol"||An(n)&&Vn(n)==le}var Zs=rc?ri(rc):sh;function hx(n){return n===t}function dx(n){return An(n)&&Qn(n)==Te}function px(n){return An(n)&&Vn(n)==Se}var mx=Yc(pl),gx=Yc(function(n,a){return n<=a});function Np(n){if(!n)return[];if(_i(n))return ru(n)?Si(n):Un(n);if(Va&&n[Va])return gf(n[Va]());var a=Qn(n),l=a==We?Ha:a==I?ka:Ks;return l(n)}function Br(n){if(!n)return n===0?n:0;if(n=Gi(n),n===xe||n===-xe){var a=n<0?-1:1;return a*Me}return n===n?n:0}function It(n){var a=Br(n),l=a%1;return a===a?l?a-l:a:0}function Fp(n){return n?Pr(It(n),0,Le):0}function Gi(n){if(typeof n=="number")return n;if(wi(n))return be;if(bn(n)){var a=typeof n.valueOf=="function"?n.valueOf():n;n=bn(a)?a+"":a}if(typeof n!="string")return n===0?n:+n;n=lc(n);var l=j.test(n);return l||se.test(n)?rf(n.slice(2),l?2:8):D.test(n)?be:+n}function Op(n){return Wn(n,vi(n))}function _x(n){return n?Pr(It(n),-ce,ce):n===0?n:0}function rn(n){return n==null?"":ct(n)}var vx=$s(function(n,a){if(Ml(a)||_i(a)){Wn(a,Xn(a),n);return}for(var l in a)tn.call(a,l)&&Lr(n,l,a[l])}),Bp=$s(function(n,a){Wn(a,vi(a),n)}),au=$s(function(n,a,l,d){Wn(a,vi(a),n,d)}),xx=$s(function(n,a,l,d){Wn(a,Xn(a),n,d)}),Mx=Nr(ol);function bx(n,a){var l=ca(n);return a==null?l:qi(l,a)}var Sx=L(function(n,a){n=en(n);var l=-1,d=a.length,S=d>2?a[2]:t;for(S&&ai(a[0],a[1],S)&&(d=1);++l<d;)for(var R=a[l],O=vi(R),W=-1,Z=O.length;++W<Z;){var me=O[W],_e=n[me];(_e===t||ji(_e,cr[me])&&!tn.call(n,me))&&(n[me]=R[me])}return n}),Ex=L(function(n){return n.push(t,tp),ii(zp,t,n)});function yx(n,a){return sc(n,ut(a,3),Oi)}function Tx(n,a){return sc(n,ut(a,3),cl)}function Ax(n,a){return n==null?n:ll(n,ut(a,3),vi)}function wx(n,a){return n==null?n:Ic(n,ut(a,3),vi)}function Cx(n,a){return n&&Oi(n,ut(a,3))}function Rx(n,a){return n&&cl(n,ut(a,3))}function Lx(n){return n==null?[]:Gs(n,Xn(n))}function Px(n){return n==null?[]:Gs(n,vi(n))}function Ah(n,a,l){var d=n==null?t:Dr(n,a);return d===t?l:d}function Dx(n,a){return n!=null&&rp(n,a,nh)}function wh(n,a){return n!=null&&rp(n,a,ih)}var Ix=Kd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=Ps.call(a)),n[a]=l},Rh(xi)),Ux=Kd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=Ps.call(a)),tn.call(n,a)?n[a].push(l):n[a]=[l]},ut),Nx=L(ha);function Xn(n){return _i(n)?fa(n):dl(n)}function vi(n){return _i(n)?fa(n,!0):zc(n)}function Fx(n,a){var l={};return a=ut(a,3),Oi(n,function(d,S,R){Yi(l,a(d,S,R),d)}),l}function Ox(n,a){var l={};return a=ut(a,3),Oi(n,function(d,S,R){Yi(l,S,a(d,S,R))}),l}var Bx=$s(function(n,a,l){Ya(n,a,l)}),zp=$s(function(n,a,l,d){Ya(n,a,l,d)}),zx=Nr(function(n,a){var l={};if(n==null)return l;var d=!1;a=pn(a,function(R){return R=xt(R,n),d||(d=R.length>1),R}),Wn(n,hh(n),l),d&&(l=gi(l,x|M|b,I_));for(var S=a.length;S--;)Vt(l,a[S]);return l});function Gx(n,a){return Gp(n,nu(ut(a)))}var Hx=Nr(function(n,a){return n==null?{}:kc(n,a)});function Gp(n,a){if(n==null)return{};var l=pn(hh(n),function(d){return[d]});return a=ut(a),gl(n,l,function(d,S){return a(d,S[0])})}function kx(n,a,l){a=xt(a,n);var d=-1,S=a.length;for(S||(S=1,n=t);++d<S;){var R=n==null?t:n[_r(a[d])];R===t&&(d=S,R=l),n=Or(R)?R.call(n):R}return n}function Vx(n,a,l){return n==null?n:H(n,a,l)}function Wx(n,a,l,d){return d=typeof d=="function"?d:t,n==null?n:H(n,a,l,d)}var Hp=Qd(Xn),kp=Qd(vi);function Xx(n,a,l){var d=Ct(n),S=d||pa(n)||Zs(n);if(a=ut(a,4),l==null){var R=n&&n.constructor;S?l=d?new R:[]:bn(n)?l=Or(R)?ca(Us(n)):{}:l={}}return(S?pi:Oi)(n,function(O,W,Z){return a(l,O,W,Z)}),l}function $x(n,a){return n==null?!0:Vt(n,a)}function qx(n,a,l){return n==null?n:In(n,a,Dt(l))}function Yx(n,a,l,d){return d=typeof d=="function"?d:t,n==null?n:In(n,a,Dt(l),d)}function Ks(n){return n==null?[]:Zo(n,Xn(n))}function Zx(n){return n==null?[]:Zo(n,vi(n))}function Kx(n,a,l){return l===t&&(l=a,a=t),l!==t&&(l=Gi(l),l=l===l?l:0),a!==t&&(a=Gi(a),a=a===a?a:0),Pr(Gi(n),a,l)}function jx(n,a,l){return a=Br(a),l===t?(l=a,a=0):l=Br(l),n=Gi(n),Uc(n,a,l)}function Jx(n,a,l){if(l&&typeof l!="boolean"&&ai(n,a,l)&&(a=l=t),l===t&&(typeof a=="boolean"?(l=a,a=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&a===t?(n=0,a=1):(n=Br(n),a===t?(a=n,n=0):a=Br(a)),n>a){var d=n;n=a,a=d}if(l||n%1||a%1){var S=jn();return kn(n+S*(a-n+nf("1e-"+((S+"").length-1))),a)}return h(n,a)}var Qx=qs(function(n,a,l){return a=a.toLowerCase(),n+(l?Vp(a):a)});function Vp(n){return Ch(rn(n).toLowerCase())}function Wp(n){return n=rn(n),n&&n.replace(Ve,df).replace(Yl,"")}function eM(n,a,l){n=rn(n),a=ct(a);var d=n.length;l=l===t?d:Pr(It(l),0,d);var S=l;return l-=a.length,l>=0&&n.slice(l,S)==a}function tM(n){return n=rn(n),n&&we.test(n)?n.replace(Pe,pf):n}function nM(n){return n=rn(n),n&&wn.test(n)?n.replace(Qt,"\\$&"):n}var iM=qs(function(n,a,l){return n+(l?"-":"")+a.toLowerCase()}),rM=qs(function(n,a,l){return n+(l?" ":"")+a.toLowerCase()}),aM=qd("toLowerCase");function sM(n,a,l){n=rn(n),a=It(a);var d=a?Ar(n):0;if(!a||d>=a)return n;var S=(a-d)/2;return qc(Ui(S),l)+n+qc(Fs(S),l)}function oM(n,a,l){n=rn(n),a=It(a);var d=a?Ar(n):0;return a&&d<a?n+qc(a-d,l):n}function lM(n,a,l){n=rn(n),a=It(a);var d=a?Ar(n):0;return a&&d<a?qc(a-d,l)+n:n}function cM(n,a,l){return l||a==null?a=0:a&&(a=+a),tl(rn(n).replace(fi,""),a||0)}function uM(n,a,l){return(l?ai(n,a,l):a===t)?a=1:a=It(a),E(rn(n),a)}function fM(){var n=arguments,a=rn(n[0]);return n.length<3?a:a.replace(n[1],n[2])}var hM=qs(function(n,a,l){return n+(l?"_":"")+a.toLowerCase()});function dM(n,a,l){return l&&typeof l!="number"&&ai(n,a,l)&&(a=l=t),l=l===t?Le:l>>>0,l?(n=rn(n),n&&(typeof a=="string"||a!=null&&!Th(a))&&(a=ct(a),!a&&ra(n))?Wt(Si(n),0,l):n.split(a,l)):[]}var pM=qs(function(n,a,l){return n+(l?" ":"")+Ch(a)});function mM(n,a,l){return n=rn(n),l=l==null?0:Pr(It(l),0,n.length),a=ct(a),n.slice(l,l+a.length)==a}function gM(n,a,l){var d=A.templateSettings;l&&ai(n,a,l)&&(a=t),n=rn(n),a=au({},a,d,ep);var S=au({},a.imports,d.imports,ep),R=Xn(S),O=Zo(S,R),W,Z,me=0,_e=a.interpolate||Qe,Ee="__p += '",Ge=Jo((a.escape||Qe).source+"|"+_e.source+"|"+(_e===qt?Uo:Qe).source+"|"+(a.evaluate||Qe).source+"|$","g"),nt="//# sourceURL="+(tn.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++na+"]")+`
`;n.replace(Ge,function(ht,Gt,Xt,Ci,si,Ri){return Xt||(Xt=Ci),Ee+=n.slice(me,Ri).replace(st,fc),Gt&&(W=!0,Ee+=`' +
__e(`+Gt+`) +
'`),si&&(Z=!0,Ee+=`';
`+si+`;
__p += '`),Xt&&(Ee+=`' +
((__t = (`+Xt+`)) == null ? '' : __t) +
'`),me=Ri+ht.length,ht}),Ee+=`';
`;var ft=tn.call(a,"variable")&&a.variable;if(!ft)Ee=`with (obj) {
`+Ee+`
}
`;else if(Ua.test(ft))throw new Et(c);Ee=(Z?Ee.replace(F,""):Ee).replace(ve,"$1").replace(Ke,"$1;"),Ee="function("+(ft||"obj")+`) {
`+(ft?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(W?", __e = _.escape":"")+(Z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Ee+`return __p
}`;var Ut=$p(function(){return Zt(R,nt+"return "+Ee).apply(t,O)});if(Ut.source=Ee,yh(Ut))throw Ut;return Ut}function _M(n){return rn(n).toLowerCase()}function vM(n){return rn(n).toUpperCase()}function xM(n,a,l){if(n=rn(n),n&&(l||a===t))return lc(n);if(!n||!(a=ct(a)))return n;var d=Si(n),S=Si(a),R=cc(d,S),O=uc(d,S)+1;return Wt(d,R,O).join("")}function MM(n,a,l){if(n=rn(n),n&&(l||a===t))return n.slice(0,pc(n)+1);if(!n||!(a=ct(a)))return n;var d=Si(n),S=uc(d,Si(a))+1;return Wt(d,0,S).join("")}function bM(n,a,l){if(n=rn(n),n&&(l||a===t))return n.replace(fi,"");if(!n||!(a=ct(a)))return n;var d=Si(n),S=cc(d,Si(a));return Wt(d,S).join("")}function SM(n,a){var l=C,d=G;if(bn(a)){var S="separator"in a?a.separator:S;l="length"in a?It(a.length):l,d="omission"in a?ct(a.omission):d}n=rn(n);var R=n.length;if(ra(n)){var O=Si(n);R=O.length}if(l>=R)return n;var W=l-Ar(d);if(W<1)return d;var Z=O?Wt(O,0,W).join(""):n.slice(0,W);if(S===t)return Z+d;if(O&&(W+=Z.length-W),Th(S)){if(n.slice(W).search(S)){var me,_e=Z;for(S.global||(S=Jo(S.source,rn(gs.exec(S))+"g")),S.lastIndex=0;me=S.exec(_e);)var Ee=me.index;Z=Z.slice(0,Ee===t?W:Ee)}}else if(n.indexOf(ct(S),W)!=W){var Ge=Z.lastIndexOf(S);Ge>-1&&(Z=Z.slice(0,Ge))}return Z+d}function EM(n){return n=rn(n),n&&ne.test(n)?n.replace(k,vf):n}var yM=qs(function(n,a,l){return n+(l?" ":"")+a.toUpperCase()}),Ch=qd("toUpperCase");function Xp(n,a,l){return n=rn(n),a=l?t:a,a===t?mf(n)?jo(n):uf(n):n.match(a)||[]}var $p=L(function(n,a){try{return ii(n,t,a)}catch(l){return yh(l)?l:new Et(l)}}),TM=Nr(function(n,a){return pi(a,function(l){l=_r(l),Yi(n,l,Sh(n[l],n))}),n});function AM(n){var a=n==null?0:n.length,l=ut();return n=a?pn(n,function(d){if(typeof d[1]!="function")throw new mi(u);return[l(d[0]),d[1]]}):[],L(function(d){for(var S=-1;++S<a;){var R=n[S];if(ii(R[0],this,d))return ii(R[1],this,d)}})}function wM(n){return Qf(gi(n,x))}function Rh(n){return function(){return n}}function CM(n,a){return n==null||n!==n?a:n}var RM=Zd(),LM=Zd(!0);function xi(n){return n}function Lh(n){return hl(typeof n=="function"?n:gi(n,x))}function PM(n){return Hc(gi(n,x))}function DM(n,a){return ml(n,gi(a,x))}var IM=L(function(n,a){return function(l){return ha(l,n,a)}}),UM=L(function(n,a){return function(l){return ha(n,l,a)}});function Ph(n,a,l){var d=Xn(a),S=Gs(a,d);l==null&&!(bn(a)&&(S.length||!d.length))&&(l=a,a=n,n=this,S=Gs(a,Xn(a)));var R=!(bn(l)&&"chain"in l)||!!l.chain,O=Or(n);return pi(S,function(W){var Z=a[W];n[W]=Z,O&&(n.prototype[W]=function(){var me=this.__chain__;if(R||me){var _e=n(this.__wrapped__),Ee=_e.__actions__=Un(this.__actions__);return Ee.push({func:Z,args:arguments,thisArg:n}),_e.__chain__=me,_e}return Z.apply(n,or([this.value()],arguments))})}),n}function NM(){return Pn._===this&&(Pn._=Sf),this}function Dh(){}function FM(n){return n=It(n),L(function(a){return Za(a,n)})}var OM=ch(pn),BM=ch(ac),zM=ch(Ms);function qp(n){return gh(n)?Es(_r(n)):lh(n)}function GM(n){return function(a){return n==null?t:Dr(n,a)}}var HM=jd(),kM=jd(!0);function Ih(){return[]}function Uh(){return!1}function VM(){return{}}function WM(){return""}function XM(){return!0}function $M(n,a){if(n=It(n),n<1||n>ce)return[];var l=Le,d=kn(n,Le);a=ut(a),n-=Le;for(var S=Yo(d,a);++l<n;)a(l);return S}function qM(n){return Ct(n)?pn(n,_r):wi(n)?[n]:Un(dp(rn(n)))}function YM(n){var a=++gc;return rn(n)+a}var ZM=$c(function(n,a){return n+a},0),KM=uh("ceil"),jM=$c(function(n,a){return n/a},1),JM=uh("floor");function QM(n){return n&&n.length?zs(n,xi,ul):t}function eb(n,a){return n&&n.length?zs(n,ut(a,2),ul):t}function tb(n){return Ss(n,xi)}function nb(n,a){return Ss(n,ut(a,2))}function ib(n){return n&&n.length?zs(n,xi,pl):t}function rb(n,a){return n&&n.length?zs(n,ut(a,2),pl):t}var ab=$c(function(n,a){return n*a},1),sb=uh("round"),ob=$c(function(n,a){return n-a},0);function lb(n){return n&&n.length?ys(n,xi):0}function cb(n,a){return n&&n.length?ys(n,ut(a,2)):0}return A.after=P0,A.ary=yp,A.assign=vx,A.assignIn=Bp,A.assignInWith=au,A.assignWith=xx,A.at=Mx,A.before=Tp,A.bind=Sh,A.bindAll=TM,A.bindKey=Ap,A.castArray=V0,A.chain=bp,A.chunk=J_,A.compact=Q_,A.concat=ev,A.cond=AM,A.conforms=wM,A.constant=Rh,A.countBy=l0,A.create=bx,A.curry=wp,A.curryRight=Cp,A.debounce=Rp,A.defaults=Sx,A.defaultsDeep=Ex,A.defer=D0,A.delay=I0,A.difference=tv,A.differenceBy=nv,A.differenceWith=iv,A.drop=rv,A.dropRight=av,A.dropRightWhile=sv,A.dropWhile=ov,A.fill=lv,A.filter=u0,A.flatMap=d0,A.flatMapDeep=p0,A.flatMapDepth=m0,A.flatten=_p,A.flattenDeep=cv,A.flattenDepth=uv,A.flip=U0,A.flow=RM,A.flowRight=LM,A.fromPairs=fv,A.functions=Lx,A.functionsIn=Px,A.groupBy=g0,A.initial=dv,A.intersection=pv,A.intersectionBy=mv,A.intersectionWith=gv,A.invert=Ix,A.invertBy=Ux,A.invokeMap=v0,A.iteratee=Lh,A.keyBy=x0,A.keys=Xn,A.keysIn=vi,A.map=Qc,A.mapKeys=Fx,A.mapValues=Ox,A.matches=PM,A.matchesProperty=DM,A.memoize=tu,A.merge=Bx,A.mergeWith=zp,A.method=IM,A.methodOf=UM,A.mixin=Ph,A.negate=nu,A.nthArg=FM,A.omit=zx,A.omitBy=Gx,A.once=N0,A.orderBy=M0,A.over=OM,A.overArgs=F0,A.overEvery=BM,A.overSome=zM,A.partial=Eh,A.partialRight=Lp,A.partition=b0,A.pick=Hx,A.pickBy=Gp,A.property=qp,A.propertyOf=GM,A.pull=Mv,A.pullAll=xp,A.pullAllBy=bv,A.pullAllWith=Sv,A.pullAt=Ev,A.range=HM,A.rangeRight=kM,A.rearg=O0,A.reject=y0,A.remove=yv,A.rest=B0,A.reverse=Mh,A.sampleSize=A0,A.set=Vx,A.setWith=Wx,A.shuffle=w0,A.slice=Tv,A.sortBy=L0,A.sortedUniq=Dv,A.sortedUniqBy=Iv,A.split=dM,A.spread=z0,A.tail=Uv,A.take=Nv,A.takeRight=Fv,A.takeRightWhile=Ov,A.takeWhile=Bv,A.tap=Qv,A.throttle=G0,A.thru=Jc,A.toArray=Np,A.toPairs=Hp,A.toPairsIn=kp,A.toPath=qM,A.toPlainObject=Op,A.transform=Xx,A.unary=H0,A.union=zv,A.unionBy=Gv,A.unionWith=Hv,A.uniq=kv,A.uniqBy=Vv,A.uniqWith=Wv,A.unset=$x,A.unzip=bh,A.unzipWith=Mp,A.update=qx,A.updateWith=Yx,A.values=Ks,A.valuesIn=Zx,A.without=Xv,A.words=Xp,A.wrap=k0,A.xor=$v,A.xorBy=qv,A.xorWith=Yv,A.zip=Zv,A.zipObject=Kv,A.zipObjectDeep=jv,A.zipWith=Jv,A.entries=Hp,A.entriesIn=kp,A.extend=Bp,A.extendWith=au,Ph(A,A),A.add=ZM,A.attempt=$p,A.camelCase=Qx,A.capitalize=Vp,A.ceil=KM,A.clamp=Kx,A.clone=W0,A.cloneDeep=$0,A.cloneDeepWith=q0,A.cloneWith=X0,A.conformsTo=Y0,A.deburr=Wp,A.defaultTo=CM,A.divide=jM,A.endsWith=eM,A.eq=ji,A.escape=tM,A.escapeRegExp=nM,A.every=c0,A.find=f0,A.findIndex=mp,A.findKey=yx,A.findLast=h0,A.findLastIndex=gp,A.findLastKey=Tx,A.floor=JM,A.forEach=Sp,A.forEachRight=Ep,A.forIn=Ax,A.forInRight=wx,A.forOwn=Cx,A.forOwnRight=Rx,A.get=Ah,A.gt=Z0,A.gte=K0,A.has=Dx,A.hasIn=wh,A.head=vp,A.identity=xi,A.includes=_0,A.indexOf=hv,A.inRange=jx,A.invoke=Nx,A.isArguments=Ja,A.isArray=Ct,A.isArrayBuffer=j0,A.isArrayLike=_i,A.isArrayLikeObject=Rn,A.isBoolean=J0,A.isBuffer=pa,A.isDate=Q0,A.isElement=ex,A.isEmpty=tx,A.isEqual=nx,A.isEqualWith=ix,A.isError=yh,A.isFinite=rx,A.isFunction=Or,A.isInteger=Pp,A.isLength=iu,A.isMap=Dp,A.isMatch=ax,A.isMatchWith=sx,A.isNaN=ox,A.isNative=lx,A.isNil=ux,A.isNull=cx,A.isNumber=Ip,A.isObject=bn,A.isObjectLike=An,A.isPlainObject=Sl,A.isRegExp=Th,A.isSafeInteger=fx,A.isSet=Up,A.isString=ru,A.isSymbol=wi,A.isTypedArray=Zs,A.isUndefined=hx,A.isWeakMap=dx,A.isWeakSet=px,A.join=_v,A.kebabCase=iM,A.last=zi,A.lastIndexOf=vv,A.lowerCase=rM,A.lowerFirst=aM,A.lt=mx,A.lte=gx,A.max=QM,A.maxBy=eb,A.mean=tb,A.meanBy=nb,A.min=ib,A.minBy=rb,A.stubArray=Ih,A.stubFalse=Uh,A.stubObject=VM,A.stubString=WM,A.stubTrue=XM,A.multiply=ab,A.nth=xv,A.noConflict=NM,A.noop=Dh,A.now=eu,A.pad=sM,A.padEnd=oM,A.padStart=lM,A.parseInt=cM,A.random=Jx,A.reduce=S0,A.reduceRight=E0,A.repeat=uM,A.replace=fM,A.result=kx,A.round=sb,A.runInContext=Y,A.sample=T0,A.size=C0,A.snakeCase=hM,A.some=R0,A.sortedIndex=Av,A.sortedIndexBy=wv,A.sortedIndexOf=Cv,A.sortedLastIndex=Rv,A.sortedLastIndexBy=Lv,A.sortedLastIndexOf=Pv,A.startCase=pM,A.startsWith=mM,A.subtract=ob,A.sum=lb,A.sumBy=cb,A.template=gM,A.times=$M,A.toFinite=Br,A.toInteger=It,A.toLength=Fp,A.toLower=_M,A.toNumber=Gi,A.toSafeInteger=_x,A.toString=rn,A.toUpper=vM,A.trim=xM,A.trimEnd=MM,A.trimStart=bM,A.truncate=SM,A.unescape=EM,A.uniqueId=YM,A.upperCase=yM,A.upperFirst=Ch,A.each=Sp,A.eachRight=Ep,A.first=vp,Ph(A,function(){var n={};return Oi(A,function(a,l){tn.call(A.prototype,l)||(n[l]=a)}),n}(),{chain:!1}),A.VERSION=i,pi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),pi(["drop","take"],function(n,a){Bt.prototype[n]=function(l){l=l===t?1:Cn(It(l),0);var d=this.__filtered__&&!a?new Bt(this):this.clone();return d.__filtered__?d.__takeCount__=kn(l,d.__takeCount__):d.__views__.push({size:kn(l,Le),type:n+(d.__dir__<0?"Right":"")}),d},Bt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),pi(["filter","map","takeWhile"],function(n,a){var l=a+1,d=l==q||l==ue;Bt.prototype[n]=function(S){var R=this.clone();return R.__iteratees__.push({iteratee:ut(S,3),type:l}),R.__filtered__=R.__filtered__||d,R}}),pi(["head","last"],function(n,a){var l="take"+(a?"Right":"");Bt.prototype[n]=function(){return this[l](1).value()[0]}}),pi(["initial","tail"],function(n,a){var l="drop"+(a?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[l](1)}}),Bt.prototype.compact=function(){return this.filter(xi)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=L(function(n,a){return typeof n=="function"?new Bt(this):this.map(function(l){return ha(l,n,a)})}),Bt.prototype.reject=function(n){return this.filter(nu(ut(n)))},Bt.prototype.slice=function(n,a){n=It(n);var l=this;return l.__filtered__&&(n>0||a<0)?new Bt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),a!==t&&(a=It(a),l=a<0?l.dropRight(-a):l.take(a-n)),l)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Le)},Oi(Bt.prototype,function(n,a){var l=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),S=A[d?"take"+(a=="last"?"Right":""):a],R=d||/^find/.test(a);S&&(A.prototype[a]=function(){var O=this.__wrapped__,W=d?[1]:arguments,Z=O instanceof Bt,me=W[0],_e=Z||Ct(O),Ee=function(Gt){var Xt=S.apply(A,or([Gt],W));return d&&Ge?Xt[0]:Xt};_e&&l&&typeof me=="function"&&me.length!=1&&(Z=_e=!1);var Ge=this.__chain__,nt=!!this.__actions__.length,ft=R&&!Ge,Ut=Z&&!nt;if(!R&&_e){O=Ut?O:new Bt(this);var ht=n.apply(O,W);return ht.__actions__.push({func:Jc,args:[Ee],thisArg:t}),new Fn(ht,Ge)}return ft&&Ut?n.apply(this,W):(ht=this.thru(Ee),ft?d?ht.value()[0]:ht.value():ht)})}),pi(["pop","push","shift","sort","splice","unshift"],function(n){var a=Cs[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var S=arguments;if(d&&!this.__chain__){var R=this.value();return a.apply(Ct(R)?R:[],S)}return this[l](function(O){return a.apply(Ct(O)?O:[],S)})}}),Oi(Bt.prototype,function(n,a){var l=A[a];if(l){var d=l.name+"";tn.call(oa,d)||(oa[d]=[]),oa[d].push({name:a,func:l})}}),oa[Xc(t,_).name]=[{name:"wrapper",func:t}],Bt.prototype.clone=Ac,Bt.prototype.reverse=If,Bt.prototype.value=Uf,A.prototype.at=e0,A.prototype.chain=t0,A.prototype.commit=n0,A.prototype.next=i0,A.prototype.plant=a0,A.prototype.reverse=s0,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=o0,A.prototype.first=A.prototype.head,Va&&(A.prototype[Va]=r0),A},lr=As();Tr?((Tr.exports=lr)._=lr,ko._=lr):Pn._=lr}).call(xo)})(Gu,Gu.exports);var md=Gu.exports;const hw={dotSize:5,genePercentile:100},ya=new Do(hw);function dw(r){const t={...ya.getValue(),dotSize:r};ya.next(t)}function pw(r){const t={...Buttonstate.getValue(),genePercentile:r};ya.next(t)}const mw=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},gw=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),_w(t)})};function _w(r){const e=document.getElementById("cellNotFound");let t=an.value.listPalette;r?(t=an.value.listPalette.filter(([i,s])=>i.toLowerCase().startsWith(r)),console.log(t),Hu(t)):Hu(an.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Hu(r){const e=document.getElementById("cellCheckboxes");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(([t,i])=>{const s=document.createElement("input");s.type="checkbox",s.className="box",s.id=t,s.value=t,xn.value.selectedCelltypes.includes(t)&&(s.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color=i;const u=document.createElement("checkboxGroup");u.appendChild(s),u.appendChild(o),u.appendChild(document.createElement("br")),e.appendChild(u),s.addEventListener("change",c=>{vw(t,c.target.checked)})})}async function vw(r,e){let t=xn.value.selectedCelltypes.map(i=>i);e?(t.push(r),Id(t)):(t=t.filter(i=>i!==r),Id(t)),console.log(xn.value.selectedCelltypes)}const xw=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{Id([]),Hu(an.value.listPalette),cellTextbox.value=""})},Mw=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",xn.value.selectedCelltypes.length!==0?xn.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=an.value.pallete[e],t.style.fontStyle="normal",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function Zu(r,e){const t=await fetch(`https://fisheyes.techkyra.com/getdata?col=${e}-${r}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();return JSON.parse(i.data)}var bw={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */(function(r,e){(function(t,i){r.exports=i()})(xo,function(){for(var t=function(h,v,E){return v===void 0&&(v=0),E===void 0&&(E=1),h<v?v:h>E?E:h},i=t,s=function(h){h._clipped=!1,h._unclipped=h.slice(0);for(var v=0;v<=3;v++)v<3?((h[v]<0||h[v]>255)&&(h._clipped=!0),h[v]=i(h[v],0,255)):v===3&&(h[v]=i(h[v],0,1));return h},o={},u=0,c=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];u<c.length;u+=1){var f=c[u];o["[object "+f+"]"]=f.toLowerCase()}var p=function(h){return o[Object.prototype.toString.call(h)]||"object"},m=p,x=function(h,v){return v===void 0&&(v=null),h.length>=3?Array.prototype.slice.call(h):m(h[0])=="object"&&v?v.split("").filter(function(E){return h[0][E]!==void 0}).map(function(E){return h[0][E]}):h[0]},M=p,b=function(h){if(h.length<2)return null;var v=h.length-1;return M(h[v])=="string"?h[v].toLowerCase():null},w=Math.PI,y={clip_rgb:s,limit:t,type:p,unpack:x,last:b,PI:w,TWOPI:w*2,PITHIRD:w/3,DEG2RAD:w/180,RAD2DEG:180/w},g={format:{},autodetect:[]},_=y.last,U=y.clip_rgb,P=y.type,N=g,$=function(){for(var v=[],E=arguments.length;E--;)v[E]=arguments[E];var L=this;if(P(v[0])==="object"&&v[0].constructor&&v[0].constructor===this.constructor)return v[0];var V=_(v),X=!1;if(!V){X=!0,N.sorted||(N.autodetect=N.autodetect.sort(function(ge,ze){return ze.p-ge.p}),N.sorted=!0);for(var H=0,K=N.autodetect;H<K.length;H+=1){var Q=K[H];if(V=Q.test.apply(Q,v),V)break}}if(N.format[V]){var he=N.format[V].apply(null,X?v:v.slice(0,-1));L._rgb=U(he)}else throw new Error("unknown format: "+v);L._rgb.length===3&&L._rgb.push(1)};$.prototype.toString=function(){return P(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var z=$,B=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(B.Color,[null].concat(h)))};B.Color=z,B.version="2.4.2";var ee=B,De=y.unpack,C=Math.max,G=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=De(h,"rgb"),L=E[0],V=E[1],X=E[2];L=L/255,V=V/255,X=X/255;var H=1-C(L,C(V,X)),K=H<1?1/(1-H):0,Q=(1-L-H)*K,he=(1-V-H)*K,ge=(1-X-H)*K;return[Q,he,ge,H]},Ie=G,Ce=y.unpack,q=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Ce(h,"cmyk");var E=h[0],L=h[1],V=h[2],X=h[3],H=h.length>4?h[4]:1;return X===1?[0,0,0,H]:[E>=1?0:255*(1-E)*(1-X),L>=1?0:255*(1-L)*(1-X),V>=1?0:255*(1-V)*(1-X),H]},pe=q,ue=ee,xe=z,ce=g,Me=y.unpack,be=y.type,Le=Ie;xe.prototype.cmyk=function(){return Le(this._rgb)},ue.cmyk=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(xe,[null].concat(h,["cmyk"])))},ce.format.cmyk=pe,ce.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Me(h,"cmyk"),be(h)==="array"&&h.length===4)return"cmyk"}});var Ze=y.unpack,Mt=y.last,oe=function(h){return Math.round(h*100)/100},ye=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Ze(h,"hsla"),L=Mt(h)||"lsa";return E[0]=oe(E[0]||0),E[1]=oe(E[1]*100)+"%",E[2]=oe(E[2]*100)+"%",L==="hsla"||E.length>3&&E[3]<1?(E[3]=E.length>3?E[3]:1,L="hsla"):E.length=3,L+"("+E.join(",")+")"},He=ye,dt=y.unpack,Je=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=dt(h,"rgba");var E=h[0],L=h[1],V=h[2];E/=255,L/=255,V/=255;var X=Math.min(E,L,V),H=Math.max(E,L,V),K=(H+X)/2,Q,he;return H===X?(Q=0,he=Number.NaN):Q=K<.5?(H-X)/(H+X):(H-X)/(2-H-X),E==H?he=(L-V)/(H-X):L==H?he=2+(V-E)/(H-X):V==H&&(he=4+(E-L)/(H-X)),he*=60,he<0&&(he+=360),h.length>3&&h[3]!==void 0?[he,Q,K,h[3]]:[he,Q,K]},ke=Je,Ht=y.unpack,at=y.last,J=He,vn=ke,We=Math.round,pt=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Ht(h,"rgba"),L=at(h)||"rgb";return L.substr(0,3)=="hsl"?J(vn(E),L):(E[0]=We(E[0]),E[1]=We(E[1]),E[2]=We(E[2]),(L==="rgba"||E.length>3&&E[3]<1)&&(E[3]=E.length>3?E[3]:1,L="rgba"),L+"("+E.slice(0,L==="rgb"?3:4).join(",")+")")},rt=pt,_t=y.unpack,vt=Math.round,Tt=function(){for(var h,v=[],E=arguments.length;E--;)v[E]=arguments[E];v=_t(v,"hsl");var L=v[0],V=v[1],X=v[2],H,K,Q;if(V===0)H=K=Q=X*255;else{var he=[0,0,0],ge=[0,0,0],ze=X<.5?X*(1+V):X+V-X*V,Ae=2*X-ze,qe=L/360;he[0]=qe+1/3,he[1]=qe,he[2]=qe-1/3;for(var Ye=0;Ye<3;Ye++)he[Ye]<0&&(he[Ye]+=1),he[Ye]>1&&(he[Ye]-=1),6*he[Ye]<1?ge[Ye]=Ae+(ze-Ae)*6*he[Ye]:2*he[Ye]<1?ge[Ye]=ze:3*he[Ye]<2?ge[Ye]=Ae+(ze-Ae)*(2/3-he[Ye])*6:ge[Ye]=Ae;h=[vt(ge[0]*255),vt(ge[1]*255),vt(ge[2]*255)],H=h[0],K=h[1],Q=h[2]}return v.length>3?[H,K,Q,v[3]]:[H,K,Q,1]},$t=Tt,I=$t,T=g,le=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,de=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Te=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,Se=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ot=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,et=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ne=Math.round,Fe=function(h){h=h.toLowerCase().trim();var v;if(T.format.named)try{return T.format.named(h)}catch{}if(v=h.match(le)){for(var E=v.slice(1,4),L=0;L<3;L++)E[L]=+E[L];return E[3]=1,E}if(v=h.match(de)){for(var V=v.slice(1,5),X=0;X<4;X++)V[X]=+V[X];return V}if(v=h.match(Te)){for(var H=v.slice(1,4),K=0;K<3;K++)H[K]=Ne(H[K]*2.55);return H[3]=1,H}if(v=h.match(Se)){for(var Q=v.slice(1,5),he=0;he<3;he++)Q[he]=Ne(Q[he]*2.55);return Q[3]=+Q[3],Q}if(v=h.match(ot)){var ge=v.slice(1,4);ge[1]*=.01,ge[2]*=.01;var ze=I(ge);return ze[3]=1,ze}if(v=h.match(et)){var Ae=v.slice(1,4);Ae[1]*=.01,Ae[2]*=.01;var qe=I(Ae);return qe[3]=+v[4],qe}};Fe.test=function(h){return le.test(h)||de.test(h)||Te.test(h)||Se.test(h)||ot.test(h)||et.test(h)};var mt=Fe,Ue=ee,sn=z,bt=g,tt=y.type,Xe=rt,je=mt;sn.prototype.css=function(h){return Xe(this._rgb,h)},Ue.css=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(sn,[null].concat(h,["css"])))},bt.format.css=je,bt.autodetect.push({p:5,test:function(h){for(var v=[],E=arguments.length-1;E-- >0;)v[E]=arguments[E+1];if(!v.length&&tt(h)==="string"&&je.test(h))return"css"}});var F=z,ve=ee,Ke=g,k=y.unpack;Ke.format.gl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=k(h,"rgba");return E[0]*=255,E[1]*=255,E[2]*=255,E},ve.gl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(F,[null].concat(h,["gl"])))},F.prototype.gl=function(){var h=this._rgb;return[h[0]/255,h[1]/255,h[2]/255,h[3]]};var Pe=y.unpack,ne=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Pe(h,"rgb"),L=E[0],V=E[1],X=E[2],H=Math.min(L,V,X),K=Math.max(L,V,X),Q=K-H,he=Q*100/255,ge=H/(255-Q)*100,ze;return Q===0?ze=Number.NaN:(L===K&&(ze=(V-X)/Q),V===K&&(ze=2+(X-L)/Q),X===K&&(ze=4+(L-V)/Q),ze*=60,ze<0&&(ze+=360)),[ze,he,ge]},we=ne,Be=y.unpack,Lt=Math.floor,qt=function(){for(var h,v,E,L,V,X,H=[],K=arguments.length;K--;)H[K]=arguments[K];H=Be(H,"hcg");var Q=H[0],he=H[1],ge=H[2],ze,Ae,qe;ge=ge*255;var Ye=he*255;if(he===0)ze=Ae=qe=ge;else{Q===360&&(Q=0),Q>360&&(Q-=360),Q<0&&(Q+=360),Q/=60;var Pt=Lt(Q),ct=Q-Pt,wt=ge*(1-he),Vt=wt+Ye*(1-ct),In=wt+Ye*ct,Mn=wt+Ye;switch(Pt){case 0:h=[Mn,In,wt],ze=h[0],Ae=h[1],qe=h[2];break;case 1:v=[Vt,Mn,wt],ze=v[0],Ae=v[1],qe=v[2];break;case 2:E=[wt,Mn,In],ze=E[0],Ae=E[1],qe=E[2];break;case 3:L=[wt,Vt,Mn],ze=L[0],Ae=L[1],qe=L[2];break;case 4:V=[In,wt,Mn],ze=V[0],Ae=V[1],qe=V[2];break;case 5:X=[Mn,wt,Vt],ze=X[0],Ae=X[1],qe=X[2];break}}return[ze,Ae,qe,H.length>3?H[3]:1]},Jt=qt,hn=y.unpack,kt=y.type,Qt=ee,wn=z,fi=g,Zr=we;wn.prototype.hcg=function(){return Zr(this._rgb)},Qt.hcg=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(wn,[null].concat(h,["hcg"])))},fi.format.hcg=Jt,fi.autodetect.push({p:1,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=hn(h,"hcg"),kt(h)==="array"&&h.length===3)return"hcg"}});var Kr=y.unpack,ps=y.last,Vi=Math.round,ms=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Kr(h,"rgba"),L=E[0],V=E[1],X=E[2],H=E[3],K=ps(h)||"auto";H===void 0&&(H=1),K==="auto"&&(K=H<1?"rgba":"rgb"),L=Vi(L),V=Vi(V),X=Vi(X);var Q=L<<16|V<<8|X,he="000000"+Q.toString(16);he=he.substr(he.length-6);var ge="0"+Vi(H*255).toString(16);switch(ge=ge.substr(ge.length-2),K.toLowerCase()){case"rgba":return"#"+he+ge;case"argb":return"#"+ge+he;default:return"#"+he}},Ua=ms,Io=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Uo=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,gs=function(h){if(h.match(Io)){(h.length===4||h.length===7)&&(h=h.substr(1)),h.length===3&&(h=h.split(""),h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);var v=parseInt(h,16),E=v>>16,L=v>>8&255,V=v&255;return[E,L,V,1]}if(h.match(Uo)){(h.length===5||h.length===9)&&(h=h.substr(1)),h.length===4&&(h=h.split(""),h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]+h[3]+h[3]);var X=parseInt(h,16),H=X>>24&255,K=X>>16&255,Q=X>>8&255,he=Math.round((X&255)/255*100)/100;return[H,K,Q,he]}throw new Error("unknown hex color: "+h)},D=gs,j=ee,ae=z,se=y.type,ie=g,Ve=Ua;ae.prototype.hex=function(h){return Ve(this._rgb,h)},j.hex=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(ae,[null].concat(h,["hex"])))},ie.format.hex=D,ie.autodetect.push({p:4,test:function(h){for(var v=[],E=arguments.length-1;E-- >0;)v[E]=arguments[E+1];if(!v.length&&se(h)==="string"&&[3,4,5,6,7,8,9].indexOf(h.length)>=0)return"hex"}});var Qe=y.unpack,st=y.TWOPI,lt=Math.min,At=Math.sqrt,St=Math.acos,yt=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Qe(h,"rgb"),L=E[0],V=E[1],X=E[2];L/=255,V/=255,X/=255;var H,K=lt(L,V,X),Q=(L+V+X)/3,he=Q>0?1-K/Q:0;return he===0?H=NaN:(H=(L-V+(L-X))/2,H/=At((L-V)*(L-V)+(L-X)*(V-X)),H=St(H),X>V&&(H=st-H),H/=st),[H*360,he,Q]},dn=yt,Gn=y.unpack,gn=y.limit,Hn=y.TWOPI,on=y.PITHIRD,gt=Math.cos,Na=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Gn(h,"hsi");var E=h[0],L=h[1],V=h[2],X,H,K;return isNaN(E)&&(E=0),isNaN(L)&&(L=0),E>360&&(E-=360),E<0&&(E+=360),E/=360,E<1/3?(K=(1-L)/3,X=(1+L*gt(Hn*E)/gt(on-Hn*E))/3,H=1-(K+X)):E<2/3?(E-=1/3,X=(1-L)/3,H=(1+L*gt(Hn*E)/gt(on-Hn*E))/3,K=1-(X+H)):(E-=2/3,H=(1-L)/3,K=(1+L*gt(Hn*E)/gt(on-Hn*E))/3,X=1-(H+K)),X=gn(V*X*3),H=gn(V*H*3),K=gn(V*K*3),[X*255,H*255,K*255,h.length>3?h[3]:1]},ln=Na,Ii=y.unpack,Fa=y.type,Wi=ee,jr=z,En=g,hi=dn;jr.prototype.hsi=function(){return hi(this._rgb)},Wi.hsi=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(jr,[null].concat(h,["hsi"])))},En.format.hsi=ln,En.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Ii(h,"hsi"),Fa(h)==="array"&&h.length===3)return"hsi"}});var Jr=y.unpack,Kn=y.type,Qr=ee,Oa=z,yr=g,Ku=ke;Oa.prototype.hsl=function(){return Ku(this._rgb)},Qr.hsl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Oa,[null].concat(h,["hsl"])))},yr.format.hsl=$t,yr.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Jr(h,"hsl"),Kn(h)==="array"&&h.length===3)return"hsl"}});var Bl=y.unpack,No=Math.min,Fo=Math.max,ea=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Bl(h,"rgb");var E=h[0],L=h[1],V=h[2],X=No(E,L,V),H=Fo(E,L,V),K=H-X,Q,he,ge;return ge=H/255,H===0?(Q=Number.NaN,he=0):(he=K/H,E===H&&(Q=(L-V)/K),L===H&&(Q=2+(V-E)/K),V===H&&(Q=4+(E-L)/K),Q*=60,Q<0&&(Q+=360)),[Q,he,ge]},zl=ea,Gl=y.unpack,ju=Math.floor,Hl=function(){for(var h,v,E,L,V,X,H=[],K=arguments.length;K--;)H[K]=arguments[K];H=Gl(H,"hsv");var Q=H[0],he=H[1],ge=H[2],ze,Ae,qe;if(ge*=255,he===0)ze=Ae=qe=ge;else{Q===360&&(Q=0),Q>360&&(Q-=360),Q<0&&(Q+=360),Q/=60;var Ye=ju(Q),Pt=Q-Ye,ct=ge*(1-he),wt=ge*(1-he*Pt),Vt=ge*(1-he*(1-Pt));switch(Ye){case 0:h=[ge,Vt,ct],ze=h[0],Ae=h[1],qe=h[2];break;case 1:v=[wt,ge,ct],ze=v[0],Ae=v[1],qe=v[2];break;case 2:E=[ct,ge,Vt],ze=E[0],Ae=E[1],qe=E[2];break;case 3:L=[ct,wt,ge],ze=L[0],Ae=L[1],qe=L[2];break;case 4:V=[Vt,ct,ge],ze=V[0],Ae=V[1],qe=V[2];break;case 5:X=[ge,ct,wt],ze=X[0],Ae=X[1],qe=X[2];break}}return[ze,Ae,qe,H.length>3?H[3]:1]},kl=Hl,Vl=y.unpack,Wl=y.type,Ju=ee,Xl=z,$l=g,ql=zl;Xl.prototype.hsv=function(){return ql(this._rgb)},Ju.hsv=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Xl,[null].concat(h,["hsv"])))},$l.format.hsv=kl,$l.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Vl(h,"hsv"),Wl(h)==="array"&&h.length===3)return"hsv"}});var _s={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ta=_s,Qu=y.unpack,Yl=Math.pow,Oo=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Qu(h,"rgb"),L=E[0],V=E[1],X=E[2],H=ef(L,V,X),K=H[0],Q=H[1],he=H[2],ge=116*Q-16;return[ge<0?0:ge,500*(K-Q),200*(Q-he)]},Bo=function(h){return(h/=255)<=.04045?h/12.92:Yl((h+.055)/1.055,2.4)},zo=function(h){return h>ta.t3?Yl(h,1/3):h/ta.t2+ta.t0},ef=function(h,v,E){h=Bo(h),v=Bo(v),E=Bo(E);var L=zo((.4124564*h+.3575761*v+.1804375*E)/ta.Xn),V=zo((.2126729*h+.7151522*v+.072175*E)/ta.Yn),X=zo((.0193339*h+.119192*v+.9503041*E)/ta.Zn);return[L,V,X]},Zl=Oo,na=_s,fn=y.unpack,cn=Math.pow,tf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=fn(h,"lab");var E=h[0],L=h[1],V=h[2],X,H,K,Q,he,ge;return H=(E+16)/116,X=isNaN(L)?H:H+L/500,K=isNaN(V)?H:H-V/200,H=na.Yn*Ho(H),X=na.Xn*Ho(X),K=na.Zn*Ho(K),Q=Go(3.2404542*X-1.5371385*H-.4985314*K),he=Go(-.969266*X+1.8760108*H+.041556*K),ge=Go(.0556434*X-.2040259*H+1.0572252*K),[Q,he,ge,h.length>3?h[3]:1]},Go=function(h){return 255*(h<=.00304?12.92*h:1.055*cn(h,1/2.4)-.055)},Ho=function(h){return h>na.t1?h*h*h:na.t2*(h-na.t0)},Kl=tf,nf=y.unpack,rf=y.type,jl=ee,Jl=z,Pn=g,ko=Zl;Jl.prototype.lab=function(){return ko(this._rgb)},jl.lab=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Jl,[null].concat(h,["lab"])))},Pn.format.lab=Kl,Pn.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=nf(h,"lab"),rf(h)==="array"&&h.length===3)return"lab"}});var Tr=y.unpack,Ql=y.RAD2DEG,Vo=Math.sqrt,di=Math.atan2,ec=Math.round,tc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Tr(h,"lab"),L=E[0],V=E[1],X=E[2],H=Vo(V*V+X*X),K=(di(X,V)*Ql+360)%360;return ec(H*1e4)===0&&(K=Number.NaN),[L,H,K]},Wo=tc,nc=y.unpack,ic=Zl,rc=Wo,ii=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=nc(h,"rgb"),L=E[0],V=E[1],X=E[2],H=ic(L,V,X),K=H[0],Q=H[1],he=H[2];return rc(K,Q,he)},af=ii,pi=y.unpack,sf=y.DEG2RAD,ac=Math.sin,sr=Math.cos,vs=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=pi(h,"lch"),L=E[0],V=E[1],X=E[2];return isNaN(X)&&(X=0),X=X*sf,[L,sr(X)*V,ac(X)*V]},xs=vs,pn=y.unpack,or=xs,Xo=Kl,of=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=pn(h,"lch");var E=h[0],L=h[1],V=h[2],X=or(E,L,V),H=X[0],K=X[1],Q=X[2],he=Xo(H,K,Q),ge=he[0],ze=he[1],Ae=he[2];return[ge,ze,Ae,h.length>3?h[3]:1]},Ms=of,lf=y.unpack,cf=Ms,uf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=lf(h,"hcl").reverse();return cf.apply(void 0,E)},sc=uf,bs=y.unpack,ia=y.type,oc=ee,Ba=z,Ss=g,Es=af;Ba.prototype.lch=function(){return Es(this._rgb)},Ba.prototype.hcl=function(){return Es(this._rgb).reverse()},oc.lch=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ba,[null].concat(h,["lch"])))},oc.hcl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ba,[null].concat(h,["hcl"])))},Ss.format.lch=Ms,Ss.format.hcl=sc,["lch","hcl"].forEach(function(h){return Ss.autodetect.push({p:2,test:function(){for(var v=[],E=arguments.length;E--;)v[E]=arguments[E];if(v=bs(v,h),ia(v)==="array"&&v.length===3)return h}})});var $o={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},qo=$o,ff=z,ys=g,Yo=y.type,za=qo,lc=D,ri=Ua;ff.prototype.name=function(){for(var h=ri(this._rgb,"rgb"),v=0,E=Object.keys(za);v<E.length;v+=1){var L=E[v];if(za[L]===h)return L.toLowerCase()}return h},ys.format.named=function(h){if(h=h.toLowerCase(),za[h])return lc(za[h]);throw new Error("unknown color name: "+h)},ys.autodetect.push({p:5,test:function(h){for(var v=[],E=arguments.length-1;E-- >0;)v[E]=arguments[E+1];if(!v.length&&Yo(h)==="string"&&za[h.toLowerCase()])return"named"}});var Zo=y.unpack,Ga=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Zo(h,"rgb"),L=E[0],V=E[1],X=E[2];return(L<<16)+(V<<8)+X},cc=Ga,uc=y.type,hf=function(h){if(uc(h)=="number"&&h>=0&&h<=16777215){var v=h>>16,E=h>>8&255,L=h&255;return[v,E,L,1]}throw new Error("unknown num color: "+h)},df=hf,pf=ee,fc=z,hc=g,ra=y.type,mf=cc;fc.prototype.num=function(){return mf(this._rgb)},pf.num=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(fc,[null].concat(h,["num"])))},hc.format.num=df,hc.autodetect.push({p:5,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h.length===1&&ra(h[0])==="number"&&h[0]>=0&&h[0]<=16777215)return"num"}});var gf=ee,Ha=z,Ko=g,Xi=y.unpack,ka=y.type,dc=Math.round;Ha.prototype.rgb=function(h){return h===void 0&&(h=!0),h===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(dc)},Ha.prototype.rgba=function(h){return h===void 0&&(h=!0),this._rgb.slice(0,4).map(function(v,E){return E<3?h===!1?v:dc(v):v})},gf.rgb=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ha,[null].concat(h,["rgb"])))},Ko.format.rgb=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=Xi(h,"rgba");return E[3]===void 0&&(E[3]=1),E},Ko.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Xi(h,"rgba"),ka(h)==="array"&&(h.length===3||h.length===4&&ka(h[3])=="number"&&h[3]>=0&&h[3]<=1))return"rgb"}});var Ts=Math.log,_f=function(h){var v=h/100,E,L,V;return v<66?(E=255,L=v<6?0:-155.25485562709179-.44596950469579133*(L=v-2)+104.49216199393888*Ts(L),V=v<20?0:-254.76935184120902+.8274096064007395*(V=v-10)+115.67994401066147*Ts(V)):(E=351.97690566805693+.114206453784165*(E=v-55)-40.25366309332127*Ts(E),L=325.4494125711974+.07943456536662342*(L=v-50)-28.0852963507957*Ts(L),V=255),[E,L,V,1]},Ar=_f,Si=Ar,pc=y.unpack,vf=Math.round,xf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];for(var E=pc(h,"rgb"),L=E[0],V=E[2],X=1e3,H=4e4,K=.4,Q;H-X>K;){Q=(H+X)*.5;var he=Si(Q);he[2]/he[0]>=V/L?H=Q:X=Q}return vf(Q)},Mf=xf,jo=ee,As=z,lr=g,Y=Mf;As.prototype.temp=As.prototype.kelvin=As.prototype.temperature=function(){return Y(this._rgb)},jo.temp=jo.kelvin=jo.temperature=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(As,[null].concat(h,["temp"])))},lr.format.temp=lr.format.kelvin=lr.format.temperature=Ar;var fe=y.unpack,re=Math.cbrt,$e=Math.pow,Et=Math.sign,Zt=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=fe(h,"rgb"),L=E[0],V=E[1],X=E[2],H=[en(L/255),en(V/255),en(X/255)],K=H[0],Q=H[1],he=H[2],ge=re(.4122214708*K+.5363325363*Q+.0514459929*he),ze=re(.2119034982*K+.6806995451*Q+.1073969566*he),Ae=re(.0883024619*K+.2817188376*Q+.6299787005*he);return[.2104542553*ge+.793617785*ze-.0040720468*Ae,1.9779984951*ge-2.428592205*ze+.4505937099*Ae,.0259040371*ge+.7827717662*ze-.808675766*Ae]},yn=Zt;function en(h){var v=Math.abs(h);return v<.04045?h/12.92:(Et(h)||1)*$e((v+.055)/1.055,2.4)}var Jo=y.unpack,ws=Math.pow,mi=Math.sign,Cs=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Jo(h,"lab");var E=h[0],L=h[1],V=h[2],X=ws(E+.3963377774*L+.2158037573*V,3),H=ws(E-.1055613458*L-.0638541728*V,3),K=ws(E-.0894841775*L-1.291485548*V,3);return[255*cr(4.0767416621*X-3.3077115913*H+.2309699292*K),255*cr(-1.2684380046*X+2.6097574011*H-.3413193965*K),255*cr(-.0041960863*X-.7034186147*H+1.707614701*K),h.length>3?h[3]:1]},mc=Cs;function cr(h){var v=Math.abs(h);return v>.0031308?(mi(h)||1)*(1.055*ws(v,1/2.4)-.055):h*12.92}var Rs=y.unpack,Ls=y.type,tn=ee,gc=z,Qo=g,Ps=yn;gc.prototype.oklab=function(){return Ps(this._rgb)},tn.oklab=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(gc,[null].concat(h,["oklab"])))},Qo.format.oklab=mc,Qo.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Rs(h,"oklab"),Ls(h)==="array"&&h.length===3)return"oklab"}});var bf=y.unpack,Sf=yn,Ef=Wo,Ds=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var E=bf(h,"rgb"),L=E[0],V=E[1],X=E[2],H=Sf(L,V,X),K=H[0],Q=H[1],he=H[2];return Ef(K,Q,he)},ur=Ds,Is=y.unpack,_c=xs,Us=mc,vc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Is(h,"lch");var E=h[0],L=h[1],V=h[2],X=_c(E,L,V),H=X[0],K=X[1],Q=X[2],he=Us(H,K,Q),ge=he[0],ze=he[1],Ae=he[2];return[ge,ze,Ae,h.length>3?h[3]:1]},xc=vc,Ns=y.unpack,Mc=y.type,Va=ee,fr=z,Wa=g,yf=ur;fr.prototype.oklch=function(){return yf(this._rgb)},Va.oklch=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(fr,[null].concat(h,["oklch"])))},Wa.format.oklch=xc,Wa.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Ns(h,"oklch"),Mc(h)==="array"&&h.length===3)return"oklch"}});var bc=z,Tf=y.type;bc.prototype.alpha=function(h,v){return v===void 0&&(v=!1),h!==void 0&&Tf(h)==="number"?v?(this._rgb[3]=h,this):new bc([this._rgb[0],this._rgb[1],this._rgb[2],h],"rgb"):this._rgb[3]};var Fs=z;Fs.prototype.clipped=function(){return this._rgb._clipped||!1};var Ui=z,el=_s;Ui.prototype.darken=function(h){h===void 0&&(h=1);var v=this,E=v.lab();return E[0]-=el.Kn*h,new Ui(E,"lab").alpha(v.alpha(),!0)},Ui.prototype.brighten=function(h){return h===void 0&&(h=1),this.darken(-h)},Ui.prototype.darker=Ui.prototype.darken,Ui.prototype.brighter=Ui.prototype.brighten;var Af=z;Af.prototype.get=function(h){var v=h.split("."),E=v[0],L=v[1],V=this[E]();if(L){var X=E.indexOf(L)-(E.substr(0,2)==="ok"?2:0);if(X>-1)return V[X];throw new Error("unknown channel "+L+" in mode "+E)}else return V};var wr=z,wf=y.type,Cf=Math.pow,Cn=1e-7,kn=20;wr.prototype.luminance=function(h){if(h!==void 0&&wf(h)==="number"){if(h===0)return new wr([0,0,0,this._rgb[3]],"rgb");if(h===1)return new wr([255,255,255,this._rgb[3]],"rgb");var v=this.luminance(),E="rgb",L=kn,V=function(H,K){var Q=H.interpolate(K,.5,E),he=Q.luminance();return Math.abs(h-he)<Cn||!L--?Q:he>h?V(H,Q):V(Q,K)},X=(v>h?V(new wr([0,0,0]),this):V(this,new wr([255,255,255]))).rgb();return new wr(X.concat([this._rgb[3]]))}return Rf.apply(void 0,this._rgb.slice(0,3))};var Rf=function(h,v,E){return h=tl(h),v=tl(v),E=tl(E),.2126*h+.7152*v+.0722*E},tl=function(h){return h/=255,h<=.03928?h/12.92:Cf((h+.055)/1.055,2.4)},jn={},Sc=z,Os=y.type,hr=jn,Bs=function(h,v,E){E===void 0&&(E=.5);for(var L=[],V=arguments.length-3;V-- >0;)L[V]=arguments[V+3];var X=L[0]||"lrgb";if(!hr[X]&&!L.length&&(X=Object.keys(hr)[0]),!hr[X])throw new Error("interpolation mode "+X+" is not defined");return Os(h)!=="object"&&(h=new Sc(h)),Os(v)!=="object"&&(v=new Sc(v)),hr[X](h,v,E).alpha(h.alpha()+E*(v.alpha()-h.alpha()))},Cr=z,Xa=Bs;Cr.prototype.mix=Cr.prototype.interpolate=function(h,v){v===void 0&&(v=.5);for(var E=[],L=arguments.length-2;L-- >0;)E[L]=arguments[L+2];return Xa.apply(void 0,[this,h,v].concat(E))};var aa=z;aa.prototype.premultiply=function(h){h===void 0&&(h=!1);var v=this._rgb,E=v[3];return h?(this._rgb=[v[0]*E,v[1]*E,v[2]*E,E],this):new aa([v[0]*E,v[1]*E,v[2]*E,E],"rgb")};var sa=z,oa=_s;sa.prototype.saturate=function(h){h===void 0&&(h=1);var v=this,E=v.lch();return E[1]+=oa.Kn*h,E[1]<0&&(E[1]=0),new sa(E,"lch").alpha(v.alpha(),!0)},sa.prototype.desaturate=function(h){return h===void 0&&(h=1),this.saturate(-h)};var Ec=z,yc=y.type;Ec.prototype.set=function(h,v,E){E===void 0&&(E=!1);var L=h.split("."),V=L[0],X=L[1],H=this[V]();if(X){var K=V.indexOf(X)-(V.substr(0,2)==="ok"?2:0);if(K>-1){if(yc(v)=="string")switch(v.charAt(0)){case"+":H[K]+=+v;break;case"-":H[K]+=+v;break;case"*":H[K]*=+v.substr(1);break;case"/":H[K]/=+v.substr(1);break;default:H[K]=+v}else if(yc(v)==="number")H[K]=v;else throw new Error("unsupported value for Color.set");var Q=new Ec(H,V);return E?(this._rgb=Q._rgb,this):Q}throw new Error("unknown channel "+X+" in mode "+V)}else return H};var Lf=z,Pf=function(h,v,E){var L=h._rgb,V=v._rgb;return new Lf(L[0]+E*(V[0]-L[0]),L[1]+E*(V[1]-L[1]),L[2]+E*(V[2]-L[2]),"rgb")};jn.rgb=Pf;var Df=z,la=Math.sqrt,Ni=Math.pow,Tc=function(h,v,E){var L=h._rgb,V=L[0],X=L[1],H=L[2],K=v._rgb,Q=K[0],he=K[1],ge=K[2];return new Df(la(Ni(V,2)*(1-E)+Ni(Q,2)*E),la(Ni(X,2)*(1-E)+Ni(he,2)*E),la(Ni(H,2)*(1-E)+Ni(ge,2)*E),"rgb")};jn.lrgb=Tc;var A=z,ca=function(h,v,E){var L=h.lab(),V=v.lab();return new A(L[0]+E*(V[0]-L[0]),L[1]+E*(V[1]-L[1]),L[2]+E*(V[2]-L[2]),"lab")};jn.lab=ca;var $a=z,Fn=function(h,v,E,L){var V,X,H,K;L==="hsl"?(H=h.hsl(),K=v.hsl()):L==="hsv"?(H=h.hsv(),K=v.hsv()):L==="hcg"?(H=h.hcg(),K=v.hcg()):L==="hsi"?(H=h.hsi(),K=v.hsi()):L==="lch"||L==="hcl"?(L="hcl",H=h.hcl(),K=v.hcl()):L==="oklch"&&(H=h.oklch().reverse(),K=v.oklch().reverse());var Q,he,ge,ze,Ae,qe;(L.substr(0,1)==="h"||L==="oklch")&&(V=H,Q=V[0],ge=V[1],Ae=V[2],X=K,he=X[0],ze=X[1],qe=X[2]);var Ye,Pt,ct,wt;return!isNaN(Q)&&!isNaN(he)?(he>Q&&he-Q>180?wt=he-(Q+360):he<Q&&Q-he>180?wt=he+360-Q:wt=he-Q,Pt=Q+E*wt):isNaN(Q)?isNaN(he)?Pt=Number.NaN:(Pt=he,(Ae==1||Ae==0)&&L!="hsv"&&(Ye=ze)):(Pt=Q,(qe==1||qe==0)&&L!="hsv"&&(Ye=ge)),Ye===void 0&&(Ye=ge+E*(ze-ge)),ct=Ae+E*(qe-Ae),L==="oklch"?new $a([ct,Ye,Pt],L):new $a([Pt,Ye,ct],L)},Bt=Fn,Ac=function(h,v,E){return Bt(h,v,E,"lch")};jn.lch=Ac,jn.hcl=Ac;var If=z,Uf=function(h,v,E){var L=h.num(),V=v.num();return new If(L+E*(V-L),"num")};jn.num=Uf;var Rr=Fn,Nf=function(h,v,E){return Rr(h,v,E,"hcg")};jn.hcg=Nf;var Ff=Fn,Of=function(h,v,E){return Ff(h,v,E,"hsi")};jn.hsi=Of;var Bf=Fn,zf=function(h,v,E){return Bf(h,v,E,"hsl")};jn.hsl=zf;var $i=Fn,Gf=function(h,v,E){return $i(h,v,E,"hsv")};jn.hsv=Gf;var Hf=z,kf=function(h,v,E){var L=h.oklab(),V=v.oklab();return new Hf(L[0]+E*(V[0]-L[0]),L[1]+E*(V[1]-L[1]),L[2]+E*(V[2]-L[2]),"oklab")};jn.oklab=kf;var Vf=Fn,Wf=function(h,v,E){return Vf(h,v,E,"oklch")};jn.oklch=Wf;var Ei=z,Xf=y.clip_rgb,nl=Math.pow,il=Math.sqrt,rl=Math.PI,wc=Math.cos,dr=Math.sin,$f=Math.atan2,qf=function(h,v,E){v===void 0&&(v="lrgb"),E===void 0&&(E=null);var L=h.length;E||(E=Array.from(new Array(L)).map(function(){return 1}));var V=L/E.reduce(function(Pt,ct){return Pt+ct});if(E.forEach(function(Pt,ct){E[ct]*=V}),h=h.map(function(Pt){return new Ei(Pt)}),v==="lrgb")return yi(h,E);for(var X=h.shift(),H=X.get(v),K=[],Q=0,he=0,ge=0;ge<H.length;ge++)if(H[ge]=(H[ge]||0)*E[0],K.push(isNaN(H[ge])?0:E[0]),v.charAt(ge)==="h"&&!isNaN(H[ge])){var ze=H[ge]/180*rl;Q+=wc(ze)*E[0],he+=dr(ze)*E[0]}var Ae=X.alpha()*E[0];h.forEach(function(Pt,ct){var wt=Pt.get(v);Ae+=Pt.alpha()*E[ct+1];for(var Vt=0;Vt<H.length;Vt++)if(!isNaN(wt[Vt]))if(K[Vt]+=E[ct+1],v.charAt(Vt)==="h"){var In=wt[Vt]/180*rl;Q+=wc(In)*E[ct+1],he+=dr(In)*E[ct+1]}else H[Vt]+=wt[Vt]*E[ct+1]});for(var qe=0;qe<H.length;qe++)if(v.charAt(qe)==="h"){for(var Ye=$f(he/K[qe],Q/K[qe])/rl*180;Ye<0;)Ye+=360;for(;Ye>=360;)Ye-=360;H[qe]=Ye}else H[qe]=H[qe]/K[qe];return Ae/=L,new Ei(H,v).alpha(Ae>.99999?1:Ae,!0)},yi=function(h,v){for(var E=h.length,L=[0,0,0,0],V=0;V<h.length;V++){var X=h[V],H=v[V]/E,K=X._rgb;L[0]+=nl(K[0],2)*H,L[1]+=nl(K[1],2)*H,L[2]+=nl(K[2],2)*H,L[3]+=K[3]*H}return L[0]=il(L[0]),L[1]=il(L[1]),L[2]=il(L[2]),L[3]>.9999999&&(L[3]=1),new Ei(Xf(L))},Ti=ee,ua=y.type,Yf=Math.pow,al=function(h){var v="rgb",E=Ti("#ccc"),L=0,V=[0,1],X=[],H=[0,0],K=!1,Q=[],he=!1,ge=0,ze=1,Ae=!1,qe={},Ye=!0,Pt=1,ct=function(Re){if(Re=Re||["#fff","#000"],Re&&ua(Re)==="string"&&Ti.brewer&&Ti.brewer[Re.toLowerCase()]&&(Re=Ti.brewer[Re.toLowerCase()]),ua(Re)==="array"){Re.length===1&&(Re=[Re[0],Re[0]]),Re=Re.slice(0);for(var it=0;it<Re.length;it++)Re[it]=Ti(Re[it]);X.length=0;for(var Dt=0;Dt<Re.length;Dt++)X.push(Dt/(Re.length-1))}return qn(),Q=Re},wt=function(Re){if(K!=null){for(var it=K.length-1,Dt=0;Dt<it&&Re>=K[Dt];)Dt++;return Dt-1}return 0},Vt=function(Re){return Re},In=function(Re){return Re},Mn=function(Re,it){var Dt,xt;if(it==null&&(it=!1),isNaN(Re)||Re===null)return E;if(it)xt=Re;else if(K&&K.length>2){var On=wt(Re);xt=On/(K.length-2)}else ze!==ge?xt=(Re-ge)/(ze-ge):xt=1;xt=In(xt),it||(xt=Vt(xt)),Pt!==1&&(xt=Yf(xt,Pt)),xt=H[0]+xt*(1-H[0]-H[1]),xt=Math.min(1,Math.max(0,xt));var Wt=Math.floor(xt*1e4);if(Ye&&qe[Wt])Dt=qe[Wt];else{if(ua(Q)==="array")for(var zt=0;zt<X.length;zt++){var Kt=X[zt];if(xt<=Kt){Dt=Q[zt];break}if(xt>=Kt&&zt===X.length-1){Dt=Q[zt];break}if(xt>Kt&&xt<X[zt+1]){xt=(xt-Kt)/(X[zt+1]-Kt),Dt=Ti.interpolate(Q[zt],Q[zt+1],xt,v);break}}else ua(Q)==="function"&&(Dt=Q(xt));Ye&&(qe[Wt]=Dt)}return Dt},qn=function(){return qe={}};ct(h);var Ot=function(Re){var it=Ti(Mn(Re));return he&&it[he]?it[he]():it};return Ot.classes=function(Re){if(Re!=null){if(ua(Re)==="array")K=Re,V=[Re[0],Re[Re.length-1]];else{var it=Ti.analyze(V);Re===0?K=[it.min,it.max]:K=Ti.limits(it,"e",Re)}return Ot}return K},Ot.domain=function(Re){if(!arguments.length)return V;ge=Re[0],ze=Re[Re.length-1],X=[];var it=Q.length;if(Re.length===it&&ge!==ze)for(var Dt=0,xt=Array.from(Re);Dt<xt.length;Dt+=1){var On=xt[Dt];X.push((On-ge)/(ze-ge))}else{for(var Wt=0;Wt<it;Wt++)X.push(Wt/(it-1));if(Re.length>2){var zt=Re.map(function(Yt,nn){return nn/(Re.length-1)}),Kt=Re.map(function(Yt){return(Yt-ge)/(ze-ge)});Kt.every(function(Yt,nn){return zt[nn]===Yt})||(In=function(Yt){if(Yt<=0||Yt>=1)return Yt;for(var nn=0;Yt>=Kt[nn+1];)nn++;var Ai=(Yt-Kt[nn])/(Kt[nn+1]-Kt[nn]),mr=zt[nn]+Ai*(zt[nn+1]-zt[nn]);return mr})}}return V=[ge,ze],Ot},Ot.mode=function(Re){return arguments.length?(v=Re,qn(),Ot):v},Ot.range=function(Re,it){return ct(Re),Ot},Ot.out=function(Re){return he=Re,Ot},Ot.spread=function(Re){return arguments.length?(L=Re,Ot):L},Ot.correctLightness=function(Re){return Re==null&&(Re=!0),Ae=Re,qn(),Ae?Vt=function(it){for(var Dt=Mn(0,!0).lab()[0],xt=Mn(1,!0).lab()[0],On=Dt>xt,Wt=Mn(it,!0).lab()[0],zt=Dt+(xt-Dt)*it,Kt=Wt-zt,Yt=0,nn=1,Ai=20;Math.abs(Kt)>.01&&Ai-- >0;)(function(){return On&&(Kt*=-1),Kt<0?(Yt=it,it+=(nn-it)*.5):(nn=it,it+=(Yt-it)*.5),Wt=Mn(it,!0).lab()[0],Kt=Wt-zt})();return it}:Vt=function(it){return it},Ot},Ot.padding=function(Re){return Re!=null?(ua(Re)==="number"&&(Re=[Re,Re]),H=Re,Ot):H},Ot.colors=function(Re,it){arguments.length<2&&(it="hex");var Dt=[];if(arguments.length===0)Dt=Q.slice(0);else if(Re===1)Dt=[Ot(.5)];else if(Re>1){var xt=V[0],On=V[1]-xt;Dt=Zf(0,Re,!1).map(function(nn){return Ot(xt+nn/(Re-1)*On)})}else{h=[];var Wt=[];if(K&&K.length>2)for(var zt=1,Kt=K.length,Yt=1<=Kt;Yt?zt<Kt:zt>Kt;Yt?zt++:zt--)Wt.push((K[zt-1]+K[zt])*.5);else Wt=V;Dt=Wt.map(function(nn){return Ot(nn)})}return Ti[it]&&(Dt=Dt.map(function(nn){return nn[it]()})),Dt},Ot.cache=function(Re){return Re!=null?(Ye=Re,Ot):Ye},Ot.gamma=function(Re){return Re!=null?(Pt=Re,Ot):Pt},Ot.nodata=function(Re){return Re!=null?(E=Ti(Re),Ot):E},Ot};function Zf(h,v,E){for(var L=[],V=h<v,X=E?V?v+1:v-1:v,H=h;V?H<X:H>X;V?H++:H--)L.push(H);return L}var fa=z,Cc=al,Kf=function(h){for(var v=[1,1],E=1;E<h;E++){for(var L=[1],V=1;V<=v.length;V++)L[V]=(v[V]||0)+v[V-1];v=L}return v},jf=function(h){var v,E,L,V,X,H,K;if(h=h.map(function(Ae){return new fa(Ae)}),h.length===2)v=h.map(function(Ae){return Ae.lab()}),X=v[0],H=v[1],V=function(Ae){var qe=[0,1,2].map(function(Ye){return X[Ye]+Ae*(H[Ye]-X[Ye])});return new fa(qe,"lab")};else if(h.length===3)E=h.map(function(Ae){return Ae.lab()}),X=E[0],H=E[1],K=E[2],V=function(Ae){var qe=[0,1,2].map(function(Ye){return(1-Ae)*(1-Ae)*X[Ye]+2*(1-Ae)*Ae*H[Ye]+Ae*Ae*K[Ye]});return new fa(qe,"lab")};else if(h.length===4){var Q;L=h.map(function(Ae){return Ae.lab()}),X=L[0],H=L[1],K=L[2],Q=L[3],V=function(Ae){var qe=[0,1,2].map(function(Ye){return(1-Ae)*(1-Ae)*(1-Ae)*X[Ye]+3*(1-Ae)*(1-Ae)*Ae*H[Ye]+3*(1-Ae)*Ae*Ae*K[Ye]+Ae*Ae*Ae*Q[Ye]});return new fa(qe,"lab")}}else if(h.length>=5){var he,ge,ze;he=h.map(function(Ae){return Ae.lab()}),ze=h.length-1,ge=Kf(ze),V=function(Ae){var qe=1-Ae,Ye=[0,1,2].map(function(Pt){return he.reduce(function(ct,wt,Vt){return ct+ge[Vt]*Math.pow(qe,ze-Vt)*Math.pow(Ae,Vt)*wt[Pt]},0)});return new fa(Ye,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return V},sl=function(h){var v=jf(h);return v.scale=function(){return Cc(v)},v},Lr=ee,Jn=function(h,v,E){if(!Jn[E])throw new Error("unknown blend mode "+E);return Jn[E](h,v)},pr=function(h){return function(v,E){var L=Lr(E).rgb(),V=Lr(v).rgb();return Lr.rgb(h(L,V))}},qi=function(h){return function(v,E){var L=[];return L[0]=h(v[0],E[0]),L[1]=h(v[1],E[1]),L[2]=h(v[2],E[2]),L}},Jf=function(h){return h},Yi=function(h,v){return h*v/255},ol=function(h,v){return h>v?v:h},Pr=function(h,v){return h>v?h:v},gi=function(h,v){return 255*(1-(1-h/255)*(1-v/255))},Qf=function(h,v){return v<128?2*h*v/255:255*(1-2*(1-h/255)*(1-v/255))},Rc=function(h,v){return 255*(1-(1-v/255)/(h/255))},Lc=function(h,v){return h===255?255:(h=255*(v/255)/(1-h/255),h>255?255:h)};Jn.normal=pr(qi(Jf)),Jn.multiply=pr(qi(Yi)),Jn.screen=pr(qi(gi)),Jn.overlay=pr(qi(Qf)),Jn.darken=pr(qi(ol)),Jn.lighten=pr(qi(Pr)),Jn.dodge=pr(qi(Lc)),Jn.burn=pr(qi(Rc));for(var qa=Jn,Fi=y.type,Pc=y.clip_rgb,eh=y.TWOPI,zs=Math.pow,th=Math.sin,Dc=Math.cos,Dn=ee,ll=function(h,v,E,L,V){h===void 0&&(h=300),v===void 0&&(v=-1.5),E===void 0&&(E=1),L===void 0&&(L=1),V===void 0&&(V=[0,1]);var X=0,H;Fi(V)==="array"?H=V[1]-V[0]:(H=0,V=[V,V]);var K=function(Q){var he=eh*((h+120)/360+v*Q),ge=zs(V[0]+H*Q,L),ze=X!==0?E[0]+Q*X:E,Ae=ze*ge*(1-ge)/2,qe=Dc(he),Ye=th(he),Pt=ge+Ae*(-.14861*qe+1.78277*Ye),ct=ge+Ae*(-.29227*qe-.90649*Ye),wt=ge+Ae*(1.97294*qe);return Dn(Pc([Pt*255,ct*255,wt*255,1]))};return K.start=function(Q){return Q==null?h:(h=Q,K)},K.rotations=function(Q){return Q==null?v:(v=Q,K)},K.gamma=function(Q){return Q==null?L:(L=Q,K)},K.hue=function(Q){return Q==null?E:(E=Q,Fi(E)==="array"?(X=E[1]-E[0],X===0&&(E=E[1])):X=0,K)},K.lightness=function(Q){return Q==null?V:(Fi(Q)==="array"?(V=Q,H=Q[1]-Q[0]):(V=[Q,Q],H=0),K)},K.scale=function(){return Dn.scale(K)},K.hue(E),K},Ic=z,Oi="0123456789abcdef",cl=Math.floor,Gs=Math.random,Dr=function(){for(var h="#",v=0;v<6;v++)h+=Oi.charAt(cl(Gs()*16));return new Ic(h,"hex")},Hs=p,Vn=Math.log,ul=Math.pow,nh=Math.floor,ih=Math.abs,Uc=function(h,v){v===void 0&&(v=null);var E={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Hs(h)==="object"&&(h=Object.values(h)),h.forEach(function(L){v&&Hs(L)==="object"&&(L=L[v]),L!=null&&!isNaN(L)&&(E.values.push(L),E.sum+=L,L<E.min&&(E.min=L),L>E.max&&(E.max=L),E.count+=1)}),E.domain=[E.min,E.max],E.limits=function(L,V){return ks(E,L,V)},E},ks=function(h,v,E){v===void 0&&(v="equal"),E===void 0&&(E=7),Hs(h)=="array"&&(h=Uc(h));var L=h.min,V=h.max,X=h.values.sort(function(_l,vl){return _l-vl});if(E===1)return[L,V];var H=[];if(v.substr(0,1)==="c"&&(H.push(L),H.push(V)),v.substr(0,1)==="e"){H.push(L);for(var K=1;K<E;K++)H.push(L+K/E*(V-L));H.push(V)}else if(v.substr(0,1)==="l"){if(L<=0)throw new Error("Logarithmic scales are only possible for values > 0");var Q=Math.LOG10E*Vn(L),he=Math.LOG10E*Vn(V);H.push(L);for(var ge=1;ge<E;ge++)H.push(ul(10,Q+ge/E*(he-Q)));H.push(V)}else if(v.substr(0,1)==="q"){H.push(L);for(var ze=1;ze<E;ze++){var Ae=(X.length-1)*ze/E,qe=nh(Ae);if(qe===Ae)H.push(X[qe]);else{var Ye=Ae-qe;H.push(X[qe]*(1-Ye)+X[qe+1]*Ye)}}H.push(V)}else if(v.substr(0,1)==="k"){var Pt,ct=X.length,wt=new Array(ct),Vt=new Array(E),In=!0,Mn=0,qn=null;qn=[],qn.push(L);for(var Ot=1;Ot<E;Ot++)qn.push(L+Ot/E*(V-L));for(qn.push(V);In;){for(var Re=0;Re<E;Re++)Vt[Re]=0;for(var it=0;it<ct;it++)for(var Dt=X[it],xt=Number.MAX_VALUE,On=void 0,Wt=0;Wt<E;Wt++){var zt=ih(qn[Wt]-Dt);zt<xt&&(xt=zt,On=Wt),Vt[On]++,wt[it]=On}for(var Kt=new Array(E),Yt=0;Yt<E;Yt++)Kt[Yt]=null;for(var nn=0;nn<ct;nn++)Pt=wt[nn],Kt[Pt]===null?Kt[Pt]=X[nn]:Kt[Pt]+=X[nn];for(var Ai=0;Ai<E;Ai++)Kt[Ai]*=1/Vt[Ai];In=!1;for(var mr=0;mr<E;mr++)if(Kt[mr]!==qn[mr]){In=!0;break}qn=Kt,Mn++,Mn>200&&(In=!1)}for(var Ki={},Ir=0;Ir<E;Ir++)Ki[Ir]=[];for(var da=0;da<ct;da++)Pt=wt[da],Ki[Pt].push(X[da]);for(var Bi=[],gr=0;gr<E;gr++)Bi.push(Ki[gr][0]),Bi.push(Ki[gr][Ki[gr].length-1]);Bi=Bi.sort(function(_l,vl){return _l-vl}),H.push(Bi[0]);for(var Un=1;Un<Bi.length;Un+=2){var Wn=Bi[Un];!isNaN(Wn)&&H.indexOf(Wn)===-1&&H.push(Wn)}}return H},Nc={analyze:Uc,limits:ks},ha=z,Fc=function(h,v){h=new ha(h),v=new ha(v);var E=h.luminance(),L=v.luminance();return E>L?(E+.05)/(L+.05):(L+.05)/(E+.05)},Oc=z,Zi=Math.sqrt,mn=Math.pow,rh=Math.min,ah=Math.max,Vs=Math.atan2,fl=Math.abs,Ws=Math.cos,Bc=Math.sin,sh=Math.exp,hl=Math.PI,dl=function(h,v,E,L,V){E===void 0&&(E=1),L===void 0&&(L=1),V===void 0&&(V=1);var X=function(Wn){return 360*Wn/(2*hl)},H=function(Wn){return 2*hl*Wn/360};h=new Oc(h),v=new Oc(v);var K=Array.from(h.lab()),Q=K[0],he=K[1],ge=K[2],ze=Array.from(v.lab()),Ae=ze[0],qe=ze[1],Ye=ze[2],Pt=(Q+Ae)/2,ct=Zi(mn(he,2)+mn(ge,2)),wt=Zi(mn(qe,2)+mn(Ye,2)),Vt=(ct+wt)/2,In=.5*(1-Zi(mn(Vt,7)/(mn(Vt,7)+mn(25,7)))),Mn=he*(1+In),qn=qe*(1+In),Ot=Zi(mn(Mn,2)+mn(ge,2)),Re=Zi(mn(qn,2)+mn(Ye,2)),it=(Ot+Re)/2,Dt=X(Vs(ge,Mn)),xt=X(Vs(Ye,qn)),On=Dt>=0?Dt:Dt+360,Wt=xt>=0?xt:xt+360,zt=fl(On-Wt)>180?(On+Wt+360)/2:(On+Wt)/2,Kt=1-.17*Ws(H(zt-30))+.24*Ws(H(2*zt))+.32*Ws(H(3*zt+6))-.2*Ws(H(4*zt-63)),Yt=Wt-On;Yt=fl(Yt)<=180?Yt:Wt<=On?Yt+360:Yt-360,Yt=2*Zi(Ot*Re)*Bc(H(Yt)/2);var nn=Ae-Q,Ai=Re-Ot,mr=1+.015*mn(Pt-50,2)/Zi(20+mn(Pt-50,2)),Ki=1+.045*it,Ir=1+.015*it*Kt,da=30*sh(-mn((zt-275)/25,2)),Bi=2*Zi(mn(it,7)/(mn(it,7)+mn(25,7))),gr=-Bi*Bc(2*H(da)),Un=Zi(mn(nn/(E*mr),2)+mn(Ai/(L*Ki),2)+mn(Yt/(V*Ir),2)+gr*(Ai/(L*Ki))*(Yt/(V*Ir)));return ah(0,rh(100,Un))},zc=z,pl=function(h,v,E){E===void 0&&(E="lab"),h=new zc(h),v=new zc(v);var L=h.get(E),V=v.get(E),X=0;for(var H in L){var K=(L[H]||0)-(V[H]||0);X+=K*K}return Math.sqrt(X)},Gc=z,Hc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];try{return new(Function.prototype.bind.apply(Gc,[null].concat(h))),!0}catch{return!1}},ml=ee,Ya=al,oh={cool:function(){return Ya([ml.hsl(180,1,.9),ml.hsl(250,.7,.4)])},hot:function(){return Ya(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Za={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Xs=0,kc=Object.keys(Za);Xs<kc.length;Xs+=1){var gl=kc[Xs];Za[gl.toLowerCase()]=Za[gl]}var lh=Za,Tn=ee;Tn.average=qf,Tn.bezier=sl,Tn.blend=qa,Tn.cubehelix=ll,Tn.mix=Tn.interpolate=Bs,Tn.random=Dr,Tn.scale=al,Tn.analyze=Nc.analyze,Tn.contrast=Fc,Tn.deltaE=dl,Tn.distance=pl,Tn.limits=Nc.limits,Tn.valid=Hc,Tn.scales=oh,Tn.colors=qo,Tn.brewer=lh;var Vc=Tn;return Vc})})(bw);function Dg(r){return Zu(r,an.value.prefix)}function Sw(r,e){const t=r,i=e,s={r:255,g:255,b:255},o={r:255,g:0,b:0},u={r:0,g:255,b:255},c={r:Math.round(o.r+(s.r-o.r)*t),g:Math.round(o.g+(s.g-o.g)*t),b:Math.round(o.b+(s.b-o.b)*t)},f={r:Math.round(u.r+(s.r-u.r)*i),g:Math.round(u.g+(s.g-u.g)*i),b:Math.round(u.b+(s.b-u.b)*i)},p={r:(c.r+f.r)/2,g:(c.g+f.g)/2,b:(c.b+f.b)/2};return`rgb(${Math.round(p.r)}, ${Math.round(p.g)}, ${Math.round(p.b)})`}function Ig(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},s={r:255,g:0,b:0};return e?Sw(r,e):r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${s.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`}function Ug(r){const e=r.slice().sort((i,s)=>i-s),t=Math.floor(e.length*.99)-1;return e[t]}function Ng(r,e){return r.map(t=>Math.min(t/e,1))}const Ew=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),yw(t)})};function yw(r){const e=document.getElementById("geneNotFound");if(r){const t=an.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),ku(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else ku(an.value.genes)}function ku(r){const e=document.getElementById("geneRadio");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio";const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const o=document.createElement("geneRadioGroup");o.appendChild(i),o.appendChild(s),o.appendChild(document.createElement("br")),e.appendChild(o),i.addEventListener("change",u=>{xn.value.selectedGenes.length>=2&&(u.target.checked=!1),Tw(t,u.target.checked)})})}function Tw(r,e){let t=xn.value.selectedGenes.map(i=>i);e?(t.push(r),Ud(t)):(t=t.filter(i=>i!==r),Ud(t)),console.log(xn.value.selectedGenes)}const Aw=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Ud([]),ku(an.value.genes),geneTextbox.value=""})},ww=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",xn.value.selectedGenes.length!==0?xn.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"red":"cyan",i.style.fontStyle="normal",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"};class Cw{constructor(e){Zp(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update();const e=this.camera.quaternion;let t=So.value.items;for(let i=0;i<t.length*2;i++){const s=new Sn,o=new te,u=new te;this.instancedMesh.getMatrixAt(i,s),s.decompose(o,new La,u),s.compose(o,e,u),this.instancedMesh.setMatrixAt(i,s)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=A_.value.scene,this.camera=new Di(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Hd,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=200,this.controls=new w_(this.camera,this.renderer.domElement),an.value.prefix=="6s"&&(this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:ki.PAN,MIDDLE:ki.DOLLY,RIGHT:ki.ROTATE}),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate()}subscribeToStateChanges(){So.pipe(go(e=>e.items),_o((e,t)=>md.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:",e),console.log(So.value.items)}),an.pipe(go(e=>e.prefix),_o((e,t)=>md.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e),console.log(an.value.prefix)}),Il.pipe(go(e=>e.isLoading),_o((e,t)=>md.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),console.log(Il.value.isLoading),mw(Il.value.isLoading)}),xn.pipe(go(e=>e.selectedCelltypes),_o((e,t)=>e.join()===t.join())).subscribe(async e=>{console.log("Selected celltypes changed:",e),console.log(xn.value.selectedCelltypes),Sa(!0),xn.value.selectedCelltypes?await this.updateInstancedMesh(xn.value.selectedCelltypes):await this.updateInstancedMesh([]),Mw(),Sa(!1)}),xn.pipe(go(e=>e.selectedGenes),_o((e,t)=>e.join()===t.join())).subscribe(async e=>{console.log("Selected genes changed:",e),console.log(xn.value.selectedGenes),Sa(!0),xn.value.selectedGenes?await this.updateInstancedMesh(xn.value.selectedGenes):await this.updateInstancedMesh([]),ww(),Sa(!1)}),ya.pipe(go(e=>e.dotSize),_o()).subscribe(async e=>{console.log("Dot Size Changed:",e),console.log(ya.value.dotSize),Sa(!0),ya.value.dotSize?await this.updateInstancedMesh(ya.value.dotSize):await this.updateInstancedMesh([]),Sa(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=an.value.pallete,i=So.value.items;console.log(t),console.log(i);const s=new kd(.1,32,32),o=new zd,u=i.length;console.log(u),this.instancedMesh=new bg(s,o,u),this.instancedMeshUmap=new bg(s,o,u);const c=new ui,f=new ui;let p,m,x,M=100,b=.5,w=xn.value.selectedCelltypes,y=xn.value.selectedGenes,g=ya.value.dotSize,_=Math.floor(g/5);if(y.length>0)try{let U=await Dg(y[0]);if(y.length==2){let N=await Dg(y[1]),$=Ug(N);x=Ng(N,$)}let P=Ug(U);m=Ng(U,P)}catch(U){console.error("Error fetching data:",U)}for(let U=0;U<u;U++){if(y.length>0)if(w.length===0||w.includes(i[U].clusters)){let N,$;x?(N=Ig(m[U],x[U]),$=(m[U]+x[U])/2*5+1):(N=Ig(m[U]),$=m[U]*5+1),p=new jt(N),c.scale.set($,$,$),f.scale.set($*b,$*b,$*b)}else p=new jt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*b,1*b,1*b);else w.includes(i[U].clusters)||w.length==0?(p=new jt(t[i[U].clusters]),c.scale.set(g,g,g),f.scale.set(g*b,g*b,g*b)):(p=new jt("#5e5e5e"),c.scale.set(_,_,_),f.scale.set(_*b,_*b,_*b));an.value.prefix=="6s"?c.position.set(i[U].global_sphere0_norm*M,i[U].global_sphere1_norm*M,0):c.position.set(i[U].global_sphere0_norm*M,i[U].global_sphere1_norm*M,i[U].global_sphere2_norm*M),c.updateMatrix(),this.instancedMesh.setMatrixAt(U,c.matrix),this.instancedMesh.setColorAt(U,p);let P=1e4;an.value.prefix=="75pe"?f.position.set(i[U].X_umap0_norm*80+P,i[U].X_umap1_norm*80,10):f.position.set(i[U].X_umap0_norm*60+P-25,i[U].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(U,f.matrix),this.instancedMeshUmap.setColorAt(U,p)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const Wd=an.value.prefix;async function Rw(){const r=an.value.palleteColumn;try{const e=await Zu(r,Wd);aw(e)}catch(e){console.error("Failed to load items:",e)}}async function Lw(){try{const r=await Zu("genes",Wd);sw(r)}catch(r){console.error("Failed to load items:",r)}}async function Pw(){const r=an.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(s=>Zu(s,Wd)));console.log(i),r.forEach((s,o)=>{console.log(s),e[s]=i[o]}),console.log("trfdata"),console.log(e);for(let s=0;s<e.clusters.length;s++){let o={};for(let u in e)o[u]=e[u][s];t.push(o)}iw(t)}catch(i){console.error("Error combining data:",i)}}const Dw=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none",t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white")})},Iw=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},Uw=()=>{document.querySelectorAll(".iconBtn").forEach(p=>{p.addEventListener("mouseenter",function(){const m=this.dataset.target,x=document.getElementById(m);x.style.display="block"}),p.addEventListener("mouseleave",function(){const m=this.dataset.target,x=document.getElementById(m);x.style.display="none"})});const e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox");e.addEventListener("click",()=>{t.style.display=t.style.display==="none"?"block":"none"});const i=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue");i.oninput=function(){s.innerHTML=this.value,dw(this.value)};const o=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox");o.addEventListener("click",()=>{u.style.display=u.style.display==="none"?"block":"none"});const c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue");c.oninput=function(){f.innerHTML=this.value,pw(this.value)}};function Nw(){const r=document.createElement("div");r.className="filter";const e=Fg("toggleCellCheckbox","Celltype");r.appendChild(e);const t=Fw();r.appendChild(t);const i=Fg("toggleGeneRadio","Gene");r.appendChild(i);const s=Ow();r.appendChild(s);const o=Bw();return r.appendChild(o),r}function Fg(r,e){const t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add("toggles","btn"),t.id=r,t.textContent=e,t}function Fw(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="cellCheckbox",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="cellTextbox",t.placeholder="Search celltype";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="cellClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const s=document.createElement("div");s.classList.add("checkboxes"),s.id="cellCheckboxes";const o=document.createElement("div");return o.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),o.id="cellNotFound",o.textContent="No cell types of that name found.",r.appendChild(e),r.appendChild(s),r.appendChild(o),r}function Ow(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="geneRadioContainer",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="geneTextbox",t.placeholder="Search gene (only 2 can be selected)";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="geneClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const s=document.createElement("div");s.classList.add("checkboxes"),s.id="geneRadio";const o=document.createElement("div");return o.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),o.id="geneNotFound",o.textContent="No genes of that name found.",r.appendChild(e),r.appendChild(s),r.appendChild(o),r}function Bw(){const r=document.createElement("div");r.classList.add("icon");const e=Bg("toggleZoomIn","zoomInBox","M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"),t=Ll("zoomInBox","Click to zoom in."),i=Bg("toggleZoomOut","zoomOutBox","M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z"),s=Ll("zoomOutBox","Click to zoom out."),o=gd("togglePointSize","pointSizeBox","M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"),u=Ll("pointSizeBox","Click to change dot size."),c=Og("pointSizeSliderBox","pointSizeSlider","pointSizeSliderNumContainer","pointSizeSliderValue","pointSizeMinId","pointSizeMaxId",1,50,5),f=gd("toggleGenePercentile","genePercentileBox","M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z","M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"),p=Ll("genePercentileBox","Click to change the gene percentile."),m=Og("geneSliderBox","geneSlider","geneSliderNumContainer","geneSliderValue","geneMinId","geneMaxId",1,100,99),x=gd("toggleDownload","downloadBox","M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z","M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"),M=Ll("downloadBox","Click to download an image of the projection and umap.");return r.appendChild(e),r.appendChild(t),r.appendChild(i),r.appendChild(s),r.appendChild(o),r.appendChild(u),r.appendChild(c),r.appendChild(f),r.appendChild(p),r.appendChild(m),r.appendChild(x),r.appendChild(M),r}function Ll(r,e){const t=document.createElement("div");return t.classList.add("descBox"),t.id=r,t.textContent=e,t.style.display="none",t}function Og(r,e,t,i,s,o,u,c,f){const p=document.createElement("div");p.id=r,p.classList.add("slider-container"),p.style.display="none";const m=document.createElement("input");m.setAttribute("type","range"),m.setAttribute("min",u),m.setAttribute("max",c),m.setAttribute("value",f),m.classList.add("slider"),m.id=e;const x=document.createElement("div");x.id=t,x.classList.add("slider-container-inner");const M=document.createElement("div");M.classList.add("slider-min-max"),M.id=s,M.innerText="Min: "+u;const b=document.createElement("div");b.classList.add("slider-value"),b.id=i,b.innerText=f;const w=document.createElement("div");return w.classList.add("slider-min-max"),w.id=o,w.innerText="Max: "+c,p.appendChild(m),x.appendChild(M),x.appendChild(b),x.appendChild(w),p.appendChild(x),p}function Bg(r,e,t){const i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("data-target",e),i.classList.add("iconBtn","btn"),i.id=r;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill","none");const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill-rule","evenodd"),o.setAttribute("clip-rule","evenodd"),o.setAttribute("d",t),o.setAttribute("fill","currentColor"),s.appendChild(o),i.appendChild(s),i}function gd(r,e,t,i){const s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("data-target",e),s.classList.add("iconBtn","btn"),s.id=r;const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("fill-rule","evenodd"),u.setAttribute("clip-rule","evenodd"),u.setAttribute("d",t),u.setAttribute("fill","currentColor");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("fill-rule","evenodd"),c.setAttribute("clip-rule","evenodd"),c.setAttribute("d",i),c.setAttribute("fill","currentColor"),o.appendChild(u),o.appendChild(c),s.appendChild(o),s}function zw(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let o=0;o<2;o++){const u=document.createElement("div");i.appendChild(u)}const s=document.createElement("span");i.appendChild(s),e.appendChild(i)}return r.appendChild(e),r}const Gw=r=>{const e=document.getElementById("dropdownMenuButton");ow(r),e.innerHTML=an.value.prefix};function Hw(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("div");e.className="dropdown";const t=document.createElement("button");t.className="btn btn-secondary dropdown-toggle",t.type="button",t.id="dropdownMenuButton",t.dataset.bsToggle="dropdown",t.setAttribute("aria-expanded","false"),t.innerHTML=an.value.prefix;const i=document.createElement("ul");return i.className="dropdown-menu",i.setAttribute("aria-labelledby","dropdownMenuButton"),i.appendChild(_d("#50pe","50pe")),i.appendChild(_d("#75pe","75pe")),i.appendChild(_d("#6s","6s")),e.appendChild(t),e.appendChild(i),r.appendChild(e),r}function _d(r,e){const t=document.createElement("li"),i=document.createElement("a");return i.className="dropdown-item",i.href=r,i.innerHTML=e,i.onclick=()=>{Gw(e)},t.appendChild(i),t}function kw(){const r=document.createElement("div");r.classList.add("dropdown","dropdown-center"),r.id="filter-container";const e=document.createElement("button");e.classList.add("btn","btn-secondary","dropdown-toggle"),e.type="button",e.dataset.bsToggle="dropdown",e.setAttribute("aria-expanded","false"),e.textContent="Show Gene / Celltype Filters";const t=document.createElement("ul");t.classList.add("dropdown-menu","list");const i=document.createElement("div"),s=document.createElement("b");s.textContent="Celltype Filters: ";const o=document.createElement("div");o.classList.add("listFilters"),o.id="cellFilters",o.textContent="No celltype filters selected",i.appendChild(s),i.appendChild(o);const u=document.createElement("hr"),c=document.createElement("div"),f=document.createElement("b");f.textContent="Gene Filter: ";const p=document.createElement("p");return p.classList.add("listFilters"),p.id="geneFilters",p.textContent="No gene filters selected",c.appendChild(f),c.appendChild(p),t.appendChild(i),t.appendChild(u),t.appendChild(c),r.appendChild(e),r.appendChild(t),r}function Vw(){const r=document.createElement("nav");r.className="navbar navbar-expand-lg navbar-dark bg-dark";const e=document.createElement("div");return e.className="container-fluid nav-container",e.appendChild(Ww()),e.appendChild(kw()),e.appendChild(Xw()),r.appendChild(e),r}function Ww(){const r=document.createElement("div");r.id="title";const e=document.createElement("a");e.className="navbar-brand",e.href="/#",e.innerHTML="<b>FISHEYES</b>";const t=document.createElement("p");return t.innerHTML="by <i>Bintu Lab</i>, data by <i>Schier Lab</i>",r.appendChild(e),r.appendChild(t),r}function Xw(){const r=document.createElement("div");r.className="collapse navbar-collapse",r.id="navbarNav";const e=document.createElement("ul");return e.className="navbar-nav ml-auto",e.appendChild(Hw()),e.appendChild($w()),e.appendChild(qw()),r.appendChild(e),r}function $w(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("a");return e.className="nav-link active",e.href="#",e.innerHTML="Upload",r.appendChild(e),r}function qw(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("a");return e.className="nav-link",e.id="loginPageButton",e.href="login",e.innerHTML="Login",r.appendChild(e),r}function C_(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",e.appendChild(t),e.appendChild(i),r.appendChild(e);let s=!1,o=0,u=0;t.addEventListener("mousedown",U=>{s=!0,o=U.offsetX,u=U.offsetY}),document.addEventListener("mousemove",U=>{s&&(r.style.left=`${U.clientX-o}px`,r.style.top=`${U.clientY-u}px`)}),document.addEventListener("mouseup",()=>{s=!1}),i.addEventListener("mousedown",c);function c(U){window.addEventListener("mousemove",f),window.addEventListener("mouseup",p),U.preventDefault()}function f(U){const P=r.offsetWidth+(r.offsetLeft-U.clientX),N=r.offsetHeight+(r.offsetTop-U.clientY),$=100,z=100;r.style.width=`${Math.max(P,$)}px`,r.style.height=`${Math.max(N,z)}px`,r.style.left=`${U.clientX}px`,r.style.top=`${U.clientY}px`,M.aspect=P/N,M.updateProjectionMatrix(),b.setSize(P,N)}function p(){window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",p)}const m=document.createElement("div");m.id="overlayScene",m.style.width="100%",m.style.height="100%",r.appendChild(m);const x=A_.value.scene,M=new Di(75,m.offsetWidth/m.offsetHeight,.1,1e3),b=new Hd,w=window.innerWidth*.25,y=window.innerHeight*.5;b.setSize(w,y),console.log("halo"),M.aspect=w/y,M.updateProjectionMatrix(),b.render(x,M),m.appendChild(b.domElement),M.position.x=1e4,M.position.z=150;const g=new w_(M,b.domElement);g.enableRotate=!1,g.mouseButtons={LEFT:ki.PAN,MIDDLE:ki.DOLLY,RIGHT:ki.ROTATE},M.lookAt(1e4,0,10),g.target.set(1e4,0,10),g.update(),b.render(x,M);function _(){requestAnimationFrame(_),b.render(x,M)}return _(),r}document.body.appendChild(C_());window.addEventListener("hashchange",()=>{window.location.reload()});document.addEventListener("DOMContentLoaded",async()=>{const r=Vw();C_();const e=zw(),t=Nw();document.body.insertBefore(r,document.body.firstChild),document.body.appendChild(e),document.body.appendChild(t),Dw(),Iw(),Uw(),Sa(!0);try{await Rw(),console.log(an.value.pallete),await Pw(),await Lw(),console.log(an.value.genes),Hu(an.value.listPalette),xw(),gw(),ku(an.value.genes),Aw(),Ew();const i=document.body;new Cw(i)}catch(i){console.error("Failed to load data:",i)}finally{Sa(!1)}});
