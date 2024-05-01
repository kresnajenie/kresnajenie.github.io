var db=Object.defineProperty;var pb=(r,e,t)=>e in r?db(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Zp=(r,e,t)=>(pb(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="162",qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mb=0,Kp=1,gb=2,kg=1,_b=2,$r=3,Ia=0,Si=1,Yr=2,Ra=0,yo=1,jp=2,Jp=3,Qp=4,vb=5,us=100,xb=101,Mb=102,em=103,tm=104,bb=200,Sb=201,yb=202,Eb=203,xd=204,Md=205,Tb=206,wb=207,Ab=208,Cb=209,Rb=210,Lb=211,Pb=212,Ib=213,Db=214,Ub=0,Nb=1,Fb=2,Uu=3,Ob=4,Bb=5,zb=6,Gb=7,Vg=0,Hb=1,kb=2,La=0,Vb=1,Wb=2,Xb=3,$b=4,qb=5,Yb=6,Zb=7,Wg=300,To=301,wo=302,bd=303,Sd=304,Xu=306,yd=1e3,nr=1001,Ed=1002,Zn=1003,nm=1004,yl=1005,bi=1006,Oh=1007,hs=1008,Pa=1009,Kb=1010,jb=1011,Fd=1012,Xg=1013,Ca=1014,br=1015,Ul=1016,$g=1017,qg=1018,ds=1020,Jb=1021,ir=1023,Qb=1024,eS=1025,ps=1026,Ao=1027,Yg=1028,Zg=1029,tS=1030,Kg=1031,jg=1033,Bh=33776,zh=33777,Gh=33778,Hh=33779,im=35840,rm=35841,am=35842,sm=35843,Jg=36196,om=37492,lm=37496,cm=37808,um=37809,fm=37810,hm=37811,dm=37812,pm=37813,mm=37814,gm=37815,_m=37816,vm=37817,xm=37818,Mm=37819,bm=37820,Sm=37821,kh=36492,ym=36494,Em=36495,nS=36283,Tm=36284,wm=36285,Am=36286,iS=3200,rS=3201,aS=0,sS=1,Aa="",xr="srgb",Na="srgb-linear",Od="display-p3",$u="display-p3-linear",Nu="linear",vn="srgb",Fu="rec709",Ou="p3",to=7680,Cm=519,oS=512,lS=513,cS=514,Qg=515,uS=516,fS=517,hS=518,dS=519,Rm=35044,Lm="300 es",Td=1035,Zr=2e3,Bu=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const Ll=Math.PI/180,Nl=180/Math.PI;function Ro(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function ii(r,e,t){return Math.max(e,Math.min(t,r))}function Bd(r,e){return(r%e+e)%e}function pS(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function mS(r,e,t){return r!==e?(t-r)/(e-r):0}function Pl(r,e,t){return(1-t)*r+t*e}function gS(r,e,t,i){return Pl(r,e,1-Math.exp(-t*i))}function _S(r,e=1){return e-Math.abs(Bd(r,e*2)-e)}function vS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function MS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bS(r,e){return r+Math.random()*(e-r)}function SS(r){return r*(.5-Math.random())}function yS(r){r!==void 0&&(Pm=r);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ES(r){return r*Ll}function TS(r){return r*Nl}function wd(r){return(r&r-1)===0&&r!==0}function wS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function AS(r,e,t,i,s){const o=Math.cos,u=Math.sin,c=o(t/2),f=u(t/2),p=o((e+i)/2),m=u((e+i)/2),x=o((e-i)/2),M=u((e-i)/2),b=o((i-e)/2),w=u((i-e)/2);switch(s){case"XYX":r.set(c*m,f*x,f*M,c*p);break;case"YZY":r.set(f*M,c*m,f*x,c*p);break;case"ZXZ":r.set(f*x,f*M,c*m,c*p);break;case"XZX":r.set(c*m,f*w,f*b,c*p);break;case"YXY":r.set(f*b,c*m,f*w,c*p);break;case"ZYZ":r.set(f*w,f*b,c*m,c*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:Ll,RAD2DEG:Nl,generateUUID:Ro,clamp:ii,euclideanModulo:Bd,mapLinear:pS,inverseLerp:mS,lerp:Pl,damp:gS,pingpong:_S,smoothstep:vS,smootherstep:xS,randInt:MS,randFloat:bS,randFloatSpread:SS,seededRandom:yS,degToRad:ES,radToDeg:TS,isPowerOfTwo:wd,ceilPowerOfTwo:wS,floorPowerOfTwo:zu,setQuaternionFromProperEuler:AS,normalize:li,denormalize:xo};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ii(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(e,t,i,s,o,u,c,f,p){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,f,p)}set(e,t,i,s,o,u,c,f,p){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=t,m[4]=o,m[5]=f,m[6]=i,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],f=i[6],p=i[1],m=i[4],x=i[7],M=i[2],b=i[5],w=i[8],E=s[0],g=s[3],_=s[6],H=s[1],R=s[4],N=s[7],$=s[2],D=s[5],F=s[8];return o[0]=u*E+c*H+f*$,o[3]=u*g+c*R+f*D,o[6]=u*_+c*N+f*F,o[1]=p*E+m*H+x*$,o[4]=p*g+m*R+x*D,o[7]=p*_+m*N+x*F,o[2]=M*E+b*H+w*$,o[5]=M*g+b*R+w*D,o[8]=M*_+b*N+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*c*p-i*o*m+i*c*f+s*o*p-s*u*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8],x=m*u-c*p,M=c*f-m*o,b=p*o-u*f,w=t*x+i*M+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(s*p-m*i)*E,e[2]=(c*i-s*u)*E,e[3]=M*E,e[4]=(m*t-s*f)*E,e[5]=(s*o-c*t)*E,e[6]=b*E,e[7]=(i*f-p*t)*E,e[8]=(u*t-i*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const f=Math.cos(o),p=Math.sin(o);return this.set(i*f,i*p,-i*(f*u+p*c)+u+e,-s*p,s*f,-s*(-p*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vh=new Ft;function e_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RS(){const r=Gu("canvas");return r.style.display="block",r}const Im={};function LS(r){r in Im||(Im[r]=!0,console.warn(r))}const Dm=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Um=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ou={[Na]:{transfer:Nu,primaries:Fu,toReference:r=>r,fromReference:r=>r},[xr]:{transfer:vn,primaries:Fu,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[$u]:{transfer:Nu,primaries:Ou,toReference:r=>r.applyMatrix3(Um),fromReference:r=>r.applyMatrix3(Dm)},[Od]:{transfer:vn,primaries:Ou,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Um),fromReference:r=>r.applyMatrix3(Dm).convertLinearToSRGB()}},PS=new Set([Na,$u]),fn={enabled:!0,_workingColorSpace:Na,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!PS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ou[e].toReference,s=ou[t].fromReference;return s(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ou[r].primaries},getTransfer:function(r){return r===Aa?Nu:ou[r].transfer}};function Eo(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class t_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{no===void 0&&(no=Gu("canvas")),no.width=e.width,no.height=e.height;const i=no.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=no}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Eo(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Eo(t[i]/255)*255):t[i]=Eo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IS=0;class n_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Xh(s[u].image)):o.push(Xh(s[u]))}else o=Xh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?t_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DS=0;class ui extends gs{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,i=nr,s=nr,o=bi,u=hs,c=ir,f=Pa,p=ui.DEFAULT_ANISOTROPY,m=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ro(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Wg;ui.DEFAULT_ANISOTROPY=1;class Kn{constructor(e=0,t=0,i=0,s=1){Kn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const f=e.elements,p=f[0],m=f[4],x=f[8],M=f[1],b=f[5],w=f[9],E=f[2],g=f[6],_=f[10];if(Math.abs(m-M)<.01&&Math.abs(x-E)<.01&&Math.abs(w-g)<.01){if(Math.abs(m+M)<.1&&Math.abs(x+E)<.1&&Math.abs(w+g)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,N=(b+1)/2,$=(_+1)/2,D=(m+M)/4,F=(x+E)/4,J=(w+g)/4;return R>N&&R>$?R<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(R),s=D/i,o=F/i):N>$?N<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(N),i=D/s,o=J/s):$<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt($),i=F/o,s=J/o),this.set(i,s,o,t),this}let H=Math.sqrt((g-w)*(g-w)+(x-E)*(x-E)+(M-m)*(M-m));return Math.abs(H)<.001&&(H=1),this.x=(g-w)/H,this.y=(x-E)/H,this.z=(M-m)/H,this.w=Math.acos((p+b+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class US extends gs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kn(0,0,e,t),this.scissorTest=!1,this.viewport=new Kn(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new ui(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new n_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends US{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class i_ extends ui{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NS extends ui{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let f=i[s+0],p=i[s+1],m=i[s+2],x=i[s+3];const M=o[u+0],b=o[u+1],w=o[u+2],E=o[u+3];if(c===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(c===1){e[t+0]=M,e[t+1]=b,e[t+2]=w,e[t+3]=E;return}if(x!==E||f!==M||p!==b||m!==w){let g=1-c;const _=f*M+p*b+m*w+x*E,H=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const $=Math.sqrt(R),D=Math.atan2($,_*H);g=Math.sin(g*D)/$,c=Math.sin(c*D)/$}const N=c*H;if(f=f*g+M*N,p=p*g+b*N,m=m*g+w*N,x=x*g+E*N,g===1-c){const $=1/Math.sqrt(f*f+p*p+m*m+x*x);f*=$,p*=$,m*=$,x*=$}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],f=i[s+1],p=i[s+2],m=i[s+3],x=o[u],M=o[u+1],b=o[u+2],w=o[u+3];return e[t]=c*w+m*x+f*b-p*M,e[t+1]=f*w+m*M+p*x-c*b,e[t+2]=p*w+m*b+c*M-f*x,e[t+3]=m*w-c*x-f*M-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,f=Math.sin,p=c(i/2),m=c(s/2),x=c(o/2),M=f(i/2),b=f(s/2),w=f(o/2);switch(u){case"XYZ":this._x=M*m*x+p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x-M*b*w;break;case"YXZ":this._x=M*m*x+p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x+M*b*w;break;case"ZXY":this._x=M*m*x-p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x-M*b*w;break;case"ZYX":this._x=M*m*x-p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x+M*b*w;break;case"YZX":this._x=M*m*x+p*b*w,this._y=p*b*x+M*m*w,this._z=p*m*w-M*b*x,this._w=p*m*x-M*b*w;break;case"XZY":this._x=M*m*x-p*b*w,this._y=p*b*x-M*m*w,this._z=p*m*w+M*b*x,this._w=p*m*x+M*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],f=t[9],p=t[2],m=t[6],x=t[10],M=i+c+x;if(M>0){const b=.5/Math.sqrt(M+1);this._w=.25/b,this._x=(m-f)*b,this._y=(o-p)*b,this._z=(u-s)*b}else if(i>c&&i>x){const b=2*Math.sqrt(1+i-c-x);this._w=(m-f)/b,this._x=.25*b,this._y=(s+u)/b,this._z=(o+p)/b}else if(c>x){const b=2*Math.sqrt(1+c-i-x);this._w=(o-p)/b,this._x=(s+u)/b,this._y=.25*b,this._z=(f+m)/b}else{const b=2*Math.sqrt(1+x-i-c);this._w=(u-s)/b,this._x=(o+p)/b,this._y=(f+m)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ii(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,f=t._y,p=t._z,m=t._w;return this._x=i*m+u*c+s*p-o*f,this._y=s*m+u*f+o*c-i*p,this._z=o*m+u*p+i*f-s*c,this._w=u*m-i*c-s*f-o*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=s,this._z=o,this;const f=1-c*c;if(f<=Number.EPSILON){const b=1-t;return this._w=b*u+t*this._w,this._x=b*i+t*this._x,this._y=b*s+t*this._y,this._z=b*o+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,c),x=Math.sin((1-t)*m)/p,M=Math.sin(t*m)/p;return this._w=u*x+this._w*M,this._x=i*x+this._x*M,this._y=s*x+this._y*M,this._z=o*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,f=e.w,p=2*(u*s-c*i),m=2*(c*t-o*s),x=2*(o*i-u*t);return this.x=t+f*p+u*x-c*m,this.y=i+f*m+c*p-o*x,this.z=s+f*x+o*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-o*c,this.y=o*u-i*f,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $h.copy(this).projectOnVector(e),this.sub($h)}reflect(e){return this.sub($h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ii(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $h=new te,Nm=new Da;class _s{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Qi):Qi.fromBufferAttribute(o,u),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lu.copy(i.boundingBox)),lu.applyMatrix4(e.matrixWorld),this.union(lu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),cu.subVectors(this.max,El),io.subVectors(e.a,El),ro.subVectors(e.b,El),ao.subVectors(e.c,El),_a.subVectors(ro,io),va.subVectors(ao,ro),ns.subVectors(io,ao);let t=[0,-_a.z,_a.y,0,-va.z,va.y,0,-ns.z,ns.y,_a.z,0,-_a.x,va.z,0,-va.x,ns.z,0,-ns.x,-_a.y,_a.x,0,-va.y,va.x,0,-ns.y,ns.x,0];return!qh(t,io,ro,ao,cu)||(t=[1,0,0,0,1,0,0,0,1],!qh(t,io,ro,ao,cu))?!1:(uu.crossVectors(_a,va),t=[uu.x,uu.y,uu.z],qh(t,io,ro,ao,cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hr=[new te,new te,new te,new te,new te,new te,new te,new te],Qi=new te,lu=new _s,io=new te,ro=new te,ao=new te,_a=new te,va=new te,ns=new te,El=new te,cu=new te,uu=new te,is=new te;function qh(r,e,t,i,s){for(let o=0,u=r.length-3;o<=u;o+=3){is.fromArray(r,o);const c=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),f=e.dot(is),p=t.dot(is),m=i.dot(is);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>c)return!1}return!0}const FS=new _s,Tl=new te,Yh=new te;class Ol{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):FS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const t=Tl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Yh)),this.expandByPoint(Tl.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kr=new te,Zh=new te,fu=new te,xa=new te,Kh=new te,hu=new te,jh=new te;class r_{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zh.copy(e).add(t).multiplyScalar(.5),fu.copy(t).sub(e).normalize(),xa.copy(this.origin).sub(Zh);const o=e.distanceTo(t)*.5,u=-this.direction.dot(fu),c=xa.dot(this.direction),f=-xa.dot(fu),p=xa.lengthSq(),m=Math.abs(1-u*u);let x,M,b,w;if(m>0)if(x=u*f-c,M=u*c-f,w=o*m,x>=0)if(M>=-w)if(M<=w){const E=1/m;x*=E,M*=E,b=x*(x+u*M+2*c)+M*(u*x+M+2*f)+p}else M=o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;else M=-o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;else M<=-w?(x=Math.max(0,-(-u*o+c)),M=x>0?-o:Math.min(Math.max(-o,-f),o),b=-x*x+M*(M+2*f)+p):M<=w?(x=0,M=Math.min(Math.max(-o,-f),o),b=M*(M+2*f)+p):(x=Math.max(0,-(u*o+c)),M=x>0?o:Math.min(Math.max(-o,-f),o),b=-x*x+M*(M+2*f)+p);else M=u>0?-o:o,x=Math.max(0,-(u*M+c)),b=-x*x+M*(M+2*f)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Zh).addScaledVector(fu,M),b}intersectSphere(e,t){kr.subVectors(e.center,this.origin);const i=kr.dot(this.direction),s=kr.dot(kr)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,f;const p=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,M=this.origin;return p>=0?(i=(e.min.x-M.x)*p,s=(e.max.x-M.x)*p):(i=(e.max.x-M.x)*p,s=(e.min.x-M.x)*p),m>=0?(o=(e.min.y-M.y)*m,u=(e.max.y-M.y)*m):(o=(e.max.y-M.y)*m,u=(e.min.y-M.y)*m),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),x>=0?(c=(e.min.z-M.z)*x,f=(e.max.z-M.z)*x):(c=(e.max.z-M.z)*x,f=(e.min.z-M.z)*x),i>f||c>s)||((c>i||i!==i)&&(i=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,i,s,o){Kh.subVectors(t,e),hu.subVectors(i,e),jh.crossVectors(Kh,hu);let u=this.direction.dot(jh),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;xa.subVectors(this.origin,e);const f=c*this.direction.dot(hu.crossVectors(xa,hu));if(f<0)return null;const p=c*this.direction.dot(Kh.cross(xa));if(p<0||f+p>u)return null;const m=-c*xa.dot(jh);return m<0?null:this.at(m/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(e,t,i,s,o,u,c,f,p,m,x,M,b,w,E,g){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,f,p,m,x,M,b,w,E,g)}set(e,t,i,s,o,u,c,f,p,m,x,M,b,w,E,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=o,_[5]=u,_[9]=c,_[13]=f,_[2]=p,_[6]=m,_[10]=x,_[14]=M,_[3]=b,_[7]=w,_[11]=E,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/so.setFromMatrixColumn(e,0).length(),o=1/so.setFromMatrixColumn(e,1).length(),u=1/so.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(s),p=Math.sin(s),m=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const M=u*m,b=u*x,w=c*m,E=c*x;t[0]=f*m,t[4]=-f*x,t[8]=p,t[1]=b+w*p,t[5]=M-E*p,t[9]=-c*f,t[2]=E-M*p,t[6]=w+b*p,t[10]=u*f}else if(e.order==="YXZ"){const M=f*m,b=f*x,w=p*m,E=p*x;t[0]=M+E*c,t[4]=w*c-b,t[8]=u*p,t[1]=u*x,t[5]=u*m,t[9]=-c,t[2]=b*c-w,t[6]=E+M*c,t[10]=u*f}else if(e.order==="ZXY"){const M=f*m,b=f*x,w=p*m,E=p*x;t[0]=M-E*c,t[4]=-u*x,t[8]=w+b*c,t[1]=b+w*c,t[5]=u*m,t[9]=E-M*c,t[2]=-u*p,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const M=u*m,b=u*x,w=c*m,E=c*x;t[0]=f*m,t[4]=w*p-b,t[8]=M*p+E,t[1]=f*x,t[5]=E*p+M,t[9]=b*p-w,t[2]=-p,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const M=u*f,b=u*p,w=c*f,E=c*p;t[0]=f*m,t[4]=E-M*x,t[8]=w*x+b,t[1]=x,t[5]=u*m,t[9]=-c*m,t[2]=-p*m,t[6]=b*x+w,t[10]=M-E*x}else if(e.order==="XZY"){const M=u*f,b=u*p,w=c*f,E=c*p;t[0]=f*m,t[4]=-x,t[8]=p*m,t[1]=M*x+E,t[5]=u*m,t[9]=b*x-w,t[2]=w*x-b,t[6]=c*m,t[10]=E*x+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,BS)}lookAt(e,t,i){const s=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Ma.crossVectors(i,Pi),Ma.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Ma.crossVectors(i,Pi)),Ma.normalize(),du.crossVectors(Pi,Ma),s[0]=Ma.x,s[4]=du.x,s[8]=Pi.x,s[1]=Ma.y,s[5]=du.y,s[9]=Pi.y,s[2]=Ma.z,s[6]=du.z,s[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],f=i[8],p=i[12],m=i[1],x=i[5],M=i[9],b=i[13],w=i[2],E=i[6],g=i[10],_=i[14],H=i[3],R=i[7],N=i[11],$=i[15],D=s[0],F=s[4],J=s[8],Te=s[12],C=s[1],z=s[5],we=s[9],be=s[13],q=s[2],pe=s[6],ue=s[10],xe=s[14],ce=s[3],Me=s[7],Se=s[11],Ie=s[15];return o[0]=u*D+c*C+f*q+p*ce,o[4]=u*F+c*z+f*pe+p*Me,o[8]=u*J+c*we+f*ue+p*Se,o[12]=u*Te+c*be+f*xe+p*Ie,o[1]=m*D+x*C+M*q+b*ce,o[5]=m*F+x*z+M*pe+b*Me,o[9]=m*J+x*we+M*ue+b*Se,o[13]=m*Te+x*be+M*xe+b*Ie,o[2]=w*D+E*C+g*q+_*ce,o[6]=w*F+E*z+g*pe+_*Me,o[10]=w*J+E*we+g*ue+_*Se,o[14]=w*Te+E*be+g*xe+_*Ie,o[3]=H*D+R*C+N*q+$*ce,o[7]=H*F+R*z+N*pe+$*Me,o[11]=H*J+R*we+N*ue+$*Se,o[15]=H*Te+R*be+N*xe+$*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],f=e[9],p=e[13],m=e[2],x=e[6],M=e[10],b=e[14],w=e[3],E=e[7],g=e[11],_=e[15];return w*(+o*f*x-s*p*x-o*c*M+i*p*M+s*c*b-i*f*b)+E*(+t*f*b-t*p*M+o*u*M-s*u*b+s*p*m-o*f*m)+g*(+t*p*x-t*c*b-o*u*x+i*u*b+o*c*m-i*p*m)+_*(-s*c*m-t*f*x+t*c*M+s*u*x-i*u*M+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],f=e[6],p=e[7],m=e[8],x=e[9],M=e[10],b=e[11],w=e[12],E=e[13],g=e[14],_=e[15],H=x*g*p-E*M*p+E*f*b-c*g*b-x*f*_+c*M*_,R=w*M*p-m*g*p-w*f*b+u*g*b+m*f*_-u*M*_,N=m*E*p-w*x*p+w*c*b-u*E*b-m*c*_+u*x*_,$=w*x*f-m*E*f-w*c*M+u*E*M+m*c*g-u*x*g,D=t*H+i*R+s*N+o*$;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=H*F,e[1]=(E*M*o-x*g*o-E*s*b+i*g*b+x*s*_-i*M*_)*F,e[2]=(c*g*o-E*f*o+E*s*p-i*g*p-c*s*_+i*f*_)*F,e[3]=(x*f*o-c*M*o-x*s*p+i*M*p+c*s*b-i*f*b)*F,e[4]=R*F,e[5]=(m*g*o-w*M*o+w*s*b-t*g*b-m*s*_+t*M*_)*F,e[6]=(w*f*o-u*g*o-w*s*p+t*g*p+u*s*_-t*f*_)*F,e[7]=(u*M*o-m*f*o+m*s*p-t*M*p-u*s*b+t*f*b)*F,e[8]=N*F,e[9]=(w*x*o-m*E*o-w*i*b+t*E*b+m*i*_-t*x*_)*F,e[10]=(u*E*o-w*c*o+w*i*p-t*E*p-u*i*_+t*c*_)*F,e[11]=(m*c*o-u*x*o-m*i*p+t*x*p+u*i*b-t*c*b)*F,e[12]=$*F,e[13]=(m*E*s-w*x*s+w*i*M-t*E*M-m*i*g+t*x*g)*F,e[14]=(w*c*s-u*E*s-w*i*f+t*E*f+u*i*g-t*c*g)*F,e[15]=(u*x*s-m*c*s+m*i*f-t*x*f-u*i*M+t*c*M)*F,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,f=e.z,p=o*u,m=o*c;return this.set(p*u+i,p*c-s*f,p*f+s*c,0,p*c+s*f,m*c+i,m*f-s*u,0,p*f-s*c,m*f+s*u,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,f=t._w,p=o+o,m=u+u,x=c+c,M=o*p,b=o*m,w=o*x,E=u*m,g=u*x,_=c*x,H=f*p,R=f*m,N=f*x,$=i.x,D=i.y,F=i.z;return s[0]=(1-(E+_))*$,s[1]=(b+N)*$,s[2]=(w-R)*$,s[3]=0,s[4]=(b-N)*D,s[5]=(1-(M+_))*D,s[6]=(g+H)*D,s[7]=0,s[8]=(w+R)*F,s[9]=(g-H)*F,s[10]=(1-(M+E))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=so.set(s[0],s[1],s[2]).length();const u=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],er.copy(this);const p=1/o,m=1/u,x=1/c;return er.elements[0]*=p,er.elements[1]*=p,er.elements[2]*=p,er.elements[4]*=m,er.elements[5]*=m,er.elements[6]*=m,er.elements[8]*=x,er.elements[9]*=x,er.elements[10]*=x,t.setFromRotationMatrix(er),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,s,o,u,c=Zr){const f=this.elements,p=2*o/(t-e),m=2*o/(i-s),x=(t+e)/(t-e),M=(i+s)/(i-s);let b,w;if(c===Zr)b=-(u+o)/(u-o),w=-2*u*o/(u-o);else if(c===Bu)b=-u/(u-o),w=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=m,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=Zr){const f=this.elements,p=1/(t-e),m=1/(i-s),x=1/(u-o),M=(t+e)*p,b=(i+s)*m;let w,E;if(c===Zr)w=(u+o)*x,E=-2*x;else if(c===Bu)w=o*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-M,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-b,f[2]=0,f[6]=0,f[10]=E,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const so=new te,er=new Sn,OS=new te(0,0,0),BS=new te(1,1,1),Ma=new te,du=new te,Pi=new te,Fm=new Sn,Om=new Da;class Kr{constructor(e=0,t=0,i=0,s=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],f=s[1],p=s[5],m=s[9],x=s[2],M=s[6],b=s[10];switch(t){case"XYZ":this._y=Math.asin(ii(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,b),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(M,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ii(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,b),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(ii(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-ii(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,b),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ii(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(c,b));break;case"XZY":this._z=Math.asin(-ii(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(M,p),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class a_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const Bm=new te,oo=new Da,Vr=new Sn,pu=new te,wl=new te,GS=new te,HS=new Da,zm=new te(1,0,0),Gm=new te(0,1,0),Hm=new te(0,0,1),kS={type:"added"},VS={type:"removed"},Jh={type:"childadded",child:null},Qh={type:"childremoved",child:null};class fi extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fi.DEFAULT_UP.clone();const e=new te,t=new Kr,i=new Da,s=new te(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Sn},normalMatrix:{value:new Ft}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pu.copy(e):pu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(wl,pu,this.up):Vr.lookAt(pu,wl,this.up),this.quaternion.setFromRotationMatrix(Vr),s&&(Vr.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(Vr),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kS),Jh.child=e,this.dispatchEvent(Jh),Jh.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VS),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,u=s.length;o<u;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const x=f[p];o(e.shapes,x)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,p=this.material.length;f<p;f++)c.push(o(e.materials,this.material[f]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(o(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),x=u(e.shapes),M=u(e.skeletons),b=u(e.animations),w=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),x.length>0&&(i.shapes=x),M.length>0&&(i.skeletons=M),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=s,i;function u(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}fi.DEFAULT_UP=new te(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new te,Wr=new te,ed=new te,Xr=new te,lo=new te,co=new te,km=new te,td=new te,nd=new te,id=new te;class Sr{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),tr.subVectors(e,t),s.cross(tr);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){tr.subVectors(s,t),Wr.subVectors(i,t),ed.subVectors(e,t);const u=tr.dot(tr),c=tr.dot(Wr),f=tr.dot(ed),p=Wr.dot(Wr),m=Wr.dot(ed),x=u*p-c*c;if(x===0)return o.set(0,0,0),null;const M=1/x,b=(p*f-c*m)*M,w=(u*m-c*f)*M;return o.set(1-b-w,w,b)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xr)===null?!1:Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getInterpolation(e,t,i,s,o,u,c,f){return this.getBarycoord(e,t,i,s,Xr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Xr.x),f.addScaledVector(u,Xr.y),f.addScaledVector(c,Xr.z),f)}static isFrontFacing(e,t,i,s){return tr.subVectors(i,t),Wr.subVectors(e,t),tr.cross(Wr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),tr.cross(Wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Sr.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;lo.subVectors(s,i),co.subVectors(o,i),td.subVectors(e,i);const f=lo.dot(td),p=co.dot(td);if(f<=0&&p<=0)return t.copy(i);nd.subVectors(e,s);const m=lo.dot(nd),x=co.dot(nd);if(m>=0&&x<=m)return t.copy(s);const M=f*x-m*p;if(M<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(i).addScaledVector(lo,u);id.subVectors(e,o);const b=lo.dot(id),w=co.dot(id);if(w>=0&&b<=w)return t.copy(o);const E=b*p-f*w;if(E<=0&&p>=0&&w<=0)return c=p/(p-w),t.copy(i).addScaledVector(co,c);const g=m*w-b*x;if(g<=0&&x-m>=0&&b-w>=0)return km.subVectors(o,s),c=(x-m)/(x-m+(b-w)),t.copy(s).addScaledVector(km,c);const _=1/(g+E+M);return u=E*_,c=M*_,t.copy(i).addScaledVector(lo,u).addScaledVector(co,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ba={h:0,s:0,l:0},mu={h:0,s:0,l:0};function rd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class jt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=fn.workingColorSpace){return this.r=e,this.g=t,this.b=i,fn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=fn.workingColorSpace){if(e=Bd(e,1),t=ii(t,0,1),i=ii(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=rd(u,o,e+1/3),this.g=rd(u,o,e),this.b=rd(u,o,e-1/3)}return fn.toWorkingColorSpace(this,s),this}setStyle(e,t=xr){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xr){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}copyLinearToSRGB(e){return this.r=Wh(e.r),this.g=Wh(e.g),this.b=Wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xr){return fn.fromWorkingColorSpace(ni.copy(this),e),Math.round(ii(ni.r*255,0,255))*65536+Math.round(ii(ni.g*255,0,255))*256+Math.round(ii(ni.b*255,0,255))}getHexString(e=xr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn.workingColorSpace){fn.fromWorkingColorSpace(ni.copy(this),t);const i=ni.r,s=ni.g,o=ni.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let f,p;const m=(c+u)/2;if(c===u)f=0,p=0;else{const x=u-c;switch(p=m<=.5?x/(u+c):x/(2-u-c),u){case i:f=(s-o)/x+(s<o?6:0);break;case s:f=(o-i)/x+2;break;case o:f=(i-s)/x+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=fn.workingColorSpace){return fn.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=xr){fn.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,i=ni.g,s=ni.b;return e!==xr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ba),this.setHSL(ba.h+e,ba.s+t,ba.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ba),e.getHSL(mu);const i=Pl(ba.h,mu.h,t),s=Pl(ba.s,mu.s,t),o=Pl(ba.l,mu.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new jt;jt.NAMES=s_;let WS=0;class qu extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=yo,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=Md,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Ia&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const f=o[c];delete f.metadata,u.push(f)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=Vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new te,gu=new Rt;class ar{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return LS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gu.fromBufferAttribute(this,t),gu.applyMatrix3(e),this.setXY(t,gu.x,gu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xo(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xo(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xo(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),s=li(s,this.array),o=li(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class o_ extends ar{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class l_ extends ar{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yr extends ar{constructor(e,t,i){super(new Float32Array(e),t,i)}}let XS=0;const ki=new Sn,ad=new fi,uo=new te,Ii=new _s,Al=new _s,qn=new te;class Fa extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?l_:o_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ft().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,i){return ki.makeTranslation(e,t,i),this.applyMatrix4(ki),this}scale(e,t,i){return ki.makeScale(e,t,i),this.applyMatrix4(ki),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Al.setFromBufferAttribute(c),this.morphTargetsRelative?(qn.addVectors(Ii.min,Al.min),Ii.expandByPoint(qn),qn.addVectors(Ii.max,Al.max),Ii.expandByPoint(qn)):(Ii.expandByPoint(Al.min),Ii.expandByPoint(Al.max))}Ii.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)qn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(qn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],f=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)qn.fromBufferAttribute(c,p),f&&(uo.fromBufferAttribute(e,p),qn.add(uo)),s=Math.max(s,i.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ar(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let J=0;J<i.count;J++)c[J]=new te,f[J]=new te;const p=new te,m=new te,x=new te,M=new Rt,b=new Rt,w=new Rt,E=new te,g=new te;function _(J,Te,C){p.fromBufferAttribute(i,J),m.fromBufferAttribute(i,Te),x.fromBufferAttribute(i,C),M.fromBufferAttribute(o,J),b.fromBufferAttribute(o,Te),w.fromBufferAttribute(o,C),m.sub(p),x.sub(p),b.sub(M),w.sub(M);const z=1/(b.x*w.y-w.x*b.y);isFinite(z)&&(E.copy(m).multiplyScalar(w.y).addScaledVector(x,-b.y).multiplyScalar(z),g.copy(x).multiplyScalar(b.x).addScaledVector(m,-w.x).multiplyScalar(z),c[J].add(E),c[Te].add(E),c[C].add(E),f[J].add(g),f[Te].add(g),f[C].add(g))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let J=0,Te=H.length;J<Te;++J){const C=H[J],z=C.start,we=C.count;for(let be=z,q=z+we;be<q;be+=3)_(e.getX(be+0),e.getX(be+1),e.getX(be+2))}const R=new te,N=new te,$=new te,D=new te;function F(J){$.fromBufferAttribute(s,J),D.copy($);const Te=c[J];R.copy(Te),R.sub($.multiplyScalar($.dot(Te))).normalize(),N.crossVectors(D,Te);const z=N.dot(f[J])<0?-1:1;u.setXYZW(J,R.x,R.y,R.z,z)}for(let J=0,Te=H.length;J<Te;++J){const C=H[J],z=C.start,we=C.count;for(let be=z,q=z+we;be<q;be+=3)F(e.getX(be+0)),F(e.getX(be+1)),F(e.getX(be+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ar(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let M=0,b=i.count;M<b;M++)i.setXYZ(M,0,0,0);const s=new te,o=new te,u=new te,c=new te,f=new te,p=new te,m=new te,x=new te;if(e)for(let M=0,b=e.count;M<b;M+=3){const w=e.getX(M+0),E=e.getX(M+1),g=e.getX(M+2);s.fromBufferAttribute(t,w),o.fromBufferAttribute(t,E),u.fromBufferAttribute(t,g),m.subVectors(u,o),x.subVectors(s,o),m.cross(x),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),p.fromBufferAttribute(i,g),c.add(m),f.add(m),p.add(m),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(g,p.x,p.y,p.z)}else for(let M=0,b=t.count;M<b;M+=3)s.fromBufferAttribute(t,M+0),o.fromBufferAttribute(t,M+1),u.fromBufferAttribute(t,M+2),m.subVectors(u,o),x.subVectors(s,o),m.cross(x),i.setXYZ(M+0,m.x,m.y,m.z),i.setXYZ(M+1,m.x,m.y,m.z),i.setXYZ(M+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qn.fromBufferAttribute(e,t),qn.normalize(),e.setXYZ(t,qn.x,qn.y,qn.z)}toNonIndexed(){function e(c,f){const p=c.array,m=c.itemSize,x=c.normalized,M=new p.constructor(f.length*m);let b=0,w=0;for(let E=0,g=f.length;E<g;E++){c.isInterleavedBufferAttribute?b=f[E]*c.data.stride+c.offset:b=f[E]*m;for(let _=0;_<m;_++)M[w++]=p[b++]}return new ar(M,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fa,i=this.index.array,s=this.attributes;for(const c in s){const f=s[c],p=e(f,i);t.setAttribute(c,p)}const o=this.morphAttributes;for(const c in o){const f=[],p=o[c];for(let m=0,x=p.length;m<x;m++){const M=p[m],b=e(M,i);f.push(b)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const p=u[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const p=i[f];e.data.attributes[f]=p.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let x=0,M=p.length;x<M;x++){const b=p[x];m.push(b.toJSON(e.data))}m.length>0&&(s[f]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const p in s){const m=s[p];this.setAttribute(p,m.clone(t))}const o=e.morphAttributes;for(const p in o){const m=[],x=o[p];for(let M=0,b=x.length;M<b;M++)m.push(x[M].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new Sn,rs=new r_,_u=new Ol,Wm=new te,fo=new te,ho=new te,po=new te,sd=new te,vu=new te,xu=new Rt,Mu=new Rt,bu=new Rt,Xm=new te,$m=new te,qm=new te,Su=new te,yu=new te;class rr extends fi{constructor(e=new Fa,t=new zd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){vu.set(0,0,0);for(let f=0,p=o.length;f<p;f++){const m=c[f],x=o[f];m!==0&&(sd.fromBufferAttribute(x,e),u?vu.addScaledVector(sd,m):vu.addScaledVector(sd.sub(t),m))}t.add(vu)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_u.copy(i.boundingSphere),_u.applyMatrix4(o),rs.copy(e.ray).recast(e.near),!(_u.containsPoint(rs.origin)===!1&&(rs.intersectSphere(_u,Wm)===null||rs.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Vm.copy(o).invert(),rs.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,f=o.attributes.position,p=o.attributes.uv,m=o.attributes.uv1,x=o.attributes.normal,M=o.groups,b=o.drawRange;if(c!==null)if(Array.isArray(u))for(let w=0,E=M.length;w<E;w++){const g=M[w],_=u[g.materialIndex],H=Math.max(g.start,b.start),R=Math.min(c.count,Math.min(g.start+g.count,b.start+b.count));for(let N=H,$=R;N<$;N+=3){const D=c.getX(N),F=c.getX(N+1),J=c.getX(N+2);s=Eu(this,_,e,i,p,m,x,D,F,J),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const w=Math.max(0,b.start),E=Math.min(c.count,b.start+b.count);for(let g=w,_=E;g<_;g+=3){const H=c.getX(g),R=c.getX(g+1),N=c.getX(g+2);s=Eu(this,u,e,i,p,m,x,H,R,N),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,E=M.length;w<E;w++){const g=M[w],_=u[g.materialIndex],H=Math.max(g.start,b.start),R=Math.min(f.count,Math.min(g.start+g.count,b.start+b.count));for(let N=H,$=R;N<$;N+=3){const D=N,F=N+1,J=N+2;s=Eu(this,_,e,i,p,m,x,D,F,J),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const w=Math.max(0,b.start),E=Math.min(f.count,b.start+b.count);for(let g=w,_=E;g<_;g+=3){const H=g,R=g+1,N=g+2;s=Eu(this,u,e,i,p,m,x,H,R,N),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function $S(r,e,t,i,s,o,u,c){let f;if(e.side===Si?f=i.intersectTriangle(u,o,s,!0,c):f=i.intersectTriangle(s,o,u,e.side===Ia,c),f===null)return null;yu.copy(c),yu.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(yu);return p<t.near||p>t.far?null:{distance:p,point:yu.clone(),object:r}}function Eu(r,e,t,i,s,o,u,c,f,p){r.getVertexPosition(c,fo),r.getVertexPosition(f,ho),r.getVertexPosition(p,po);const m=$S(r,e,t,i,fo,ho,po,Su);if(m){s&&(xu.fromBufferAttribute(s,c),Mu.fromBufferAttribute(s,f),bu.fromBufferAttribute(s,p),m.uv=Sr.getInterpolation(Su,fo,ho,po,xu,Mu,bu,new Rt)),o&&(xu.fromBufferAttribute(o,c),Mu.fromBufferAttribute(o,f),bu.fromBufferAttribute(o,p),m.uv1=Sr.getInterpolation(Su,fo,ho,po,xu,Mu,bu,new Rt)),u&&(Xm.fromBufferAttribute(u,c),$m.fromBufferAttribute(u,f),qm.fromBufferAttribute(u,p),m.normal=Sr.getInterpolation(Su,fo,ho,po,Xm,$m,qm,new te),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:f,c:p,normal:new te,materialIndex:0};Sr.getNormal(fo,ho,po,x.normal),m.face=x}return m}class Bl extends Fa{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const f=[],p=[],m=[],x=[];let M=0,b=0;w("z","y","x",-1,-1,i,t,e,u,o,0),w("z","y","x",1,-1,i,t,-e,u,o,1),w("x","z","y",1,1,e,i,t,s,u,2),w("x","z","y",1,-1,e,i,-t,s,u,3),w("x","y","z",1,-1,e,t,i,s,o,4),w("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new yr(p,3)),this.setAttribute("normal",new yr(m,3)),this.setAttribute("uv",new yr(x,2));function w(E,g,_,H,R,N,$,D,F,J,Te){const C=N/F,z=$/J,we=N/2,be=$/2,q=D/2,pe=F+1,ue=J+1;let xe=0,ce=0;const Me=new te;for(let Se=0;Se<ue;Se++){const Ie=Se*z-be;for(let Ze=0;Ze<pe;Ze++){const Mt=Ze*C-we;Me[E]=Mt*H,Me[g]=Ie*R,Me[_]=q,p.push(Me.x,Me.y,Me.z),Me[E]=0,Me[g]=0,Me[_]=D>0?1:-1,m.push(Me.x,Me.y,Me.z),x.push(Ze/F),x.push(1-Se/J),xe+=1}}for(let Se=0;Se<J;Se++)for(let Ie=0;Ie<F;Ie++){const Ze=M+Ie+pe*Se,Mt=M+Ie+pe*(Se+1),oe=M+(Ie+1)+pe*(Se+1),Ae=M+(Ie+1)+pe*Se;f.push(Ze,Mt,Ae),f.push(Mt,oe,Ae),ce+=6}c.addGroup(b,ce,Te),b+=ce,M+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ci(r){const e={};for(let t=0;t<r.length;t++){const i=Co(r[t]);for(const s in i)e[s]=i[s]}return e}function qS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function c_(r){return r.getRenderTarget()===null?r.outputColorSpace:fn.workingColorSpace}const YS={clone:Co,merge:ci};var ZS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZS,this.fragmentShader=KS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=qS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class u_ extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sa=new te,Ym=new Rt,Zm=new Rt;class Di extends u_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z),Sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,Zm),t.subVectors(Zm,Ym)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;o+=u.offsetX*s/f,t-=u.offsetY*i/p,s*=u.width/f,i*=u.height/p}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mo=-90,go=1;class jS extends fi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Di(mo,go,e,t);s.layers=this.layers,this.add(s);const o=new Di(mo,go,e,t);o.layers=this.layers,this.add(o);const u=new Di(mo,go,e,t);u.layers=this.layers,this.add(u);const c=new Di(mo,go,e,t);c.layers=this.layers,this.add(c);const f=new Di(mo,go,e,t);f.layers=this.layers,this.add(f);const p=new Di(mo,go,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,f]=t;for(const p of t)this.remove(p);if(e===Zr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Bu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,f,p,m]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,u),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,p),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(x,M,b),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class f_ extends ui{constructor(e,t,i,s,o,u,c,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:To,super(e,t,i,s,o,u,c,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JS extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new f_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bl(5,5,5),o=new Ua({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Si,blending:Ra});o.uniforms.tEquirect.value=t;const u=new rr(s,o),c=t.minFilter;return t.minFilter===hs&&(t.minFilter=bi),new jS(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}const od=new te,QS=new te,ey=new Ft;class wa{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=od.subVectors(i,t).cross(QS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(od),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ey.getNormalMatrix(e),s=this.coplanarPoint(od).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Ol,Tu=new te;class h_{constructor(e=new wa,t=new wa,i=new wa,s=new wa,o=new wa,u=new wa){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zr){const i=this.planes,s=e.elements,o=s[0],u=s[1],c=s[2],f=s[3],p=s[4],m=s[5],x=s[6],M=s[7],b=s[8],w=s[9],E=s[10],g=s[11],_=s[12],H=s[13],R=s[14],N=s[15];if(i[0].setComponents(f-o,M-p,g-b,N-_).normalize(),i[1].setComponents(f+o,M+p,g+b,N+_).normalize(),i[2].setComponents(f+u,M+m,g+w,N+H).normalize(),i[3].setComponents(f-u,M-m,g-w,N-H).normalize(),i[4].setComponents(f-c,M-x,g-E,N-R).normalize(),t===Zr)i[5].setComponents(f+c,M+x,g+E,N+R).normalize();else if(t===Bu)i[5].setComponents(c,x,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Tu.x=s.normal.x>0?e.max.x:e.min.x,Tu.y=s.normal.y>0?e.max.y:e.min.y,Tu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d_(){let r=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function ty(r,e){const t=e.isWebGL2,i=new WeakMap;function s(p,m){const x=p.array,M=p.usage,b=x.byteLength,w=r.createBuffer();r.bindBuffer(m,w),r.bufferData(m,x,M),p.onUploadCallback();let E;if(x instanceof Float32Array)E=r.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)E=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)E=r.SHORT;else if(x instanceof Uint32Array)E=r.UNSIGNED_INT;else if(x instanceof Int32Array)E=r.INT;else if(x instanceof Int8Array)E=r.BYTE;else if(x instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:w,type:E,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:b}}function o(p,m,x){const M=m.array,b=m._updateRange,w=m.updateRanges;if(r.bindBuffer(x,p),b.count===-1&&w.length===0&&r.bufferSubData(x,0,M),w.length!==0){for(let E=0,g=w.length;E<g;E++){const _=w[E];t?r.bufferSubData(x,_.start*M.BYTES_PER_ELEMENT,M,_.start,_.count):r.bufferSubData(x,_.start*M.BYTES_PER_ELEMENT,M.subarray(_.start,_.start+_.count))}m.clearUpdateRanges()}b.count!==-1&&(t?r.bufferSubData(x,b.offset*M.BYTES_PER_ELEMENT,M,b.offset,b.count):r.bufferSubData(x,b.offset*M.BYTES_PER_ELEMENT,M.subarray(b.offset,b.offset+b.count)),b.count=-1),m.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m&&(r.deleteBuffer(m.buffer),i.delete(p))}function f(p,m){if(p.isGLBufferAttribute){const M=i.get(p);(!M||M.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=i.get(p);if(x===void 0)i.set(p,s(p,m));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(x.buffer,p,m),x.version=p.version}}return{get:u,remove:c,update:f}}class Yu extends Fa{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),f=Math.floor(s),p=c+1,m=f+1,x=e/c,M=t/f,b=[],w=[],E=[],g=[];for(let _=0;_<m;_++){const H=_*M-u;for(let R=0;R<p;R++){const N=R*x-o;w.push(N,-H,0),E.push(0,0,1),g.push(R/c),g.push(1-_/f)}}for(let _=0;_<f;_++)for(let H=0;H<c;H++){const R=H+p*_,N=H+p*(_+1),$=H+1+p*(_+1),D=H+1+p*_;b.push(R,N,D),b.push(N,$,D)}this.setIndex(b),this.setAttribute("position",new yr(w,3)),this.setAttribute("normal",new yr(E,3)),this.setAttribute("uv",new yr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
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
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uy=`#ifdef USE_BATCHING
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
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,my=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ty=`#define PI 3.141592653589793
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
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ay=`vec3 transformedNormal = objectNormal;
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
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`
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
}`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
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
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
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
#endif`,tE=`struct PhysicalMaterial {
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
}`,nE=`
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
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
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HE=`float getShadowMask() {
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
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`uniform float scale;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,y1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,w1=`#define STANDARD
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
}`,A1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,R1=`#define TOON
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
}`,L1=`uniform float size;
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
}`,P1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:ay,alphatest_fragment:sy,alphatest_pars_fragment:oy,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:fy,begin_vertex:hy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:My,color_fragment:by,color_pars_fragment:Sy,color_pars_vertex:yy,color_vertex:Ey,common:Ty,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:Ly,emissivemap_pars_fragment:Py,colorspace_fragment:Iy,colorspace_pars_fragment:Dy,envmap_fragment:Uy,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:zy,fog_pars_vertex:Gy,fog_fragment:Hy,fog_pars_fragment:ky,gradientmap_pars_fragment:Vy,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:Ky,lights_toon_pars_fragment:jy,lights_phong_fragment:Jy,lights_phong_pars_fragment:Qy,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:ME,normal_fragment_maps:bE,normal_pars_fragment:SE,normal_pars_vertex:yE,normal_vertex:EE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:RE,opaque_fragment:LE,packing:PE,premultiplied_alpha_fragment:IE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:NE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:zE,shadowmap_vertex:GE,shadowmask_pars_fragment:HE,skinbase_vertex:kE,skinning_pars_vertex:VE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:$E,specularmap_pars_fragment:qE,tonemapping_fragment:YE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:jE,uv_pars_fragment:JE,uv_pars_vertex:QE,uv_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:a1,cube_vert:s1,cube_frag:o1,depth_vert:l1,depth_frag:c1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:d1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:_1,meshlambert_vert:v1,meshlambert_frag:x1,meshmatcap_vert:M1,meshmatcap_frag:b1,meshnormal_vert:S1,meshnormal_frag:y1,meshphong_vert:E1,meshphong_frag:T1,meshphysical_vert:w1,meshphysical_frag:A1,meshtoon_vert:C1,meshtoon_frag:R1,points_vert:L1,points_frag:P1,shadow_vert:I1,shadow_frag:D1,sprite_vert:U1,sprite_frag:N1},Oe={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Mr={basic:{uniforms:ci([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ci([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ci([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ci([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ci([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new jt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ci([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ci([Oe.points,Oe.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ci([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ci([Oe.common,Oe.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ci([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ci([Oe.sprite,Oe.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ci([Oe.common,Oe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ci([Oe.lights,Oe.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Mr.physical={uniforms:ci([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const wu={r:0,b:0,g:0},ss=new Kr,F1=new Sn;function O1(r,e,t,i,s,o,u){const c=new jt(0);let f=o===!0?0:1,p,m,x=null,M=0,b=null;function w(g,_){let H=!1,R=_.isScene===!0?_.background:null;R&&R.isTexture&&(R=(_.backgroundBlurriness>0?t:e).get(R)),R===null?E(c,f):R&&R.isColor&&(E(R,1),H=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||H)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Xu)?(m===void 0&&(m=new rr(new Bl(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:Co(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function($,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ss.copy(_.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(F1.makeRotationFromEuler(ss)),m.material.toneMapped=fn.getTransfer(R.colorSpace)!==vn,(x!==R||M!==R.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,x=R,M=R.version,b=r.toneMapping),m.layers.enableAll(),g.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new rr(new Yu(2,2),new Ua({name:"BackgroundMaterial",uniforms:Co(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=fn.getTransfer(R.colorSpace)!==vn,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||M!==R.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,x=R,M=R.version,b=r.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null))}function E(g,_){g.getRGB(wu,c_(r)),i.buffers.color.setClear(wu.r,wu.g,wu.b,_,u)}return{getClearColor:function(){return c},setClearColor:function(g,_=1){c.set(g),f=_,E(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,E(c,f)},render:w}}function B1(r,e,t,i){const s=r.getParameter(r.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},f=g(null);let p=f,m=!1;function x(q,pe,ue,xe,ce){let Me=!1;if(u){const Se=E(xe,ue,pe);p!==Se&&(p=Se,b(p.object)),Me=_(q,xe,ue,ce),Me&&H(q,xe,ue,ce)}else{const Se=pe.wireframe===!0;(p.geometry!==xe.id||p.program!==ue.id||p.wireframe!==Se)&&(p.geometry=xe.id,p.program=ue.id,p.wireframe=Se,Me=!0)}ce!==null&&t.update(ce,r.ELEMENT_ARRAY_BUFFER),(Me||m)&&(m=!1,J(q,pe,ue,xe),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function M(){return i.isWebGL2?r.createVertexArray():o.createVertexArrayOES()}function b(q){return i.isWebGL2?r.bindVertexArray(q):o.bindVertexArrayOES(q)}function w(q){return i.isWebGL2?r.deleteVertexArray(q):o.deleteVertexArrayOES(q)}function E(q,pe,ue){const xe=ue.wireframe===!0;let ce=c[q.id];ce===void 0&&(ce={},c[q.id]=ce);let Me=ce[pe.id];Me===void 0&&(Me={},ce[pe.id]=Me);let Se=Me[xe];return Se===void 0&&(Se=g(M()),Me[xe]=Se),Se}function g(q){const pe=[],ue=[],xe=[];for(let ce=0;ce<s;ce++)pe[ce]=0,ue[ce]=0,xe[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:pe,enabledAttributes:ue,attributeDivisors:xe,object:q,attributes:{},index:null}}function _(q,pe,ue,xe){const ce=p.attributes,Me=pe.attributes;let Se=0;const Ie=ue.getAttributes();for(const Ze in Ie)if(Ie[Ze].location>=0){const oe=ce[Ze];let Ae=Me[Ze];if(Ae===void 0&&(Ze==="instanceMatrix"&&q.instanceMatrix&&(Ae=q.instanceMatrix),Ze==="instanceColor"&&q.instanceColor&&(Ae=q.instanceColor)),oe===void 0||oe.attribute!==Ae||Ae&&oe.data!==Ae.data)return!0;Se++}return p.attributesNum!==Se||p.index!==xe}function H(q,pe,ue,xe){const ce={},Me=pe.attributes;let Se=0;const Ie=ue.getAttributes();for(const Ze in Ie)if(Ie[Ze].location>=0){let oe=Me[Ze];oe===void 0&&(Ze==="instanceMatrix"&&q.instanceMatrix&&(oe=q.instanceMatrix),Ze==="instanceColor"&&q.instanceColor&&(oe=q.instanceColor));const Ae={};Ae.attribute=oe,oe&&oe.data&&(Ae.data=oe.data),ce[Ze]=Ae,Se++}p.attributes=ce,p.attributesNum=Se,p.index=xe}function R(){const q=p.newAttributes;for(let pe=0,ue=q.length;pe<ue;pe++)q[pe]=0}function N(q){$(q,0)}function $(q,pe){const ue=p.newAttributes,xe=p.enabledAttributes,ce=p.attributeDivisors;ue[q]=1,xe[q]===0&&(r.enableVertexAttribArray(q),xe[q]=1),ce[q]!==pe&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,pe),ce[q]=pe)}function D(){const q=p.newAttributes,pe=p.enabledAttributes;for(let ue=0,xe=pe.length;ue<xe;ue++)pe[ue]!==q[ue]&&(r.disableVertexAttribArray(ue),pe[ue]=0)}function F(q,pe,ue,xe,ce,Me,Se){Se===!0?r.vertexAttribIPointer(q,pe,ue,ce,Me):r.vertexAttribPointer(q,pe,ue,xe,ce,Me)}function J(q,pe,ue,xe){if(i.isWebGL2===!1&&(q.isInstancedMesh||xe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const ce=xe.attributes,Me=ue.getAttributes(),Se=pe.defaultAttributeValues;for(const Ie in Me){const Ze=Me[Ie];if(Ze.location>=0){let Mt=ce[Ie];if(Mt===void 0&&(Ie==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),Ie==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor)),Mt!==void 0){const oe=Mt.normalized,Ae=Mt.itemSize,He=t.get(Mt);if(He===void 0)continue;const dt=He.buffer,Je=He.type,ke=He.bytesPerElement,Ht=i.isWebGL2===!0&&(Je===r.INT||Je===r.UNSIGNED_INT||Mt.gpuType===Xg);if(Mt.isInterleavedBufferAttribute){const at=Mt.data,Q=at.stride,xn=Mt.offset;if(at.isInstancedInterleavedBuffer){for(let We=0;We<Ze.locationSize;We++)$(Ze.location+We,at.meshPerAttribute);q.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let We=0;We<Ze.locationSize;We++)N(Ze.location+We);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let We=0;We<Ze.locationSize;We++)F(Ze.location+We,Ae/Ze.locationSize,Je,oe,Q*ke,(xn+Ae/Ze.locationSize*We)*ke,Ht)}else{if(Mt.isInstancedBufferAttribute){for(let at=0;at<Ze.locationSize;at++)$(Ze.location+at,Mt.meshPerAttribute);q.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let at=0;at<Ze.locationSize;at++)N(Ze.location+at);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let at=0;at<Ze.locationSize;at++)F(Ze.location+at,Ae/Ze.locationSize,Je,oe,Ae*ke,Ae/Ze.locationSize*at*ke,Ht)}}else if(Se!==void 0){const oe=Se[Ie];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(Ze.location,oe);break;case 3:r.vertexAttrib3fv(Ze.location,oe);break;case 4:r.vertexAttrib4fv(Ze.location,oe);break;default:r.vertexAttrib1fv(Ze.location,oe)}}}}D()}function Te(){we();for(const q in c){const pe=c[q];for(const ue in pe){const xe=pe[ue];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete pe[ue]}delete c[q]}}function C(q){if(c[q.id]===void 0)return;const pe=c[q.id];for(const ue in pe){const xe=pe[ue];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete pe[ue]}delete c[q.id]}function z(q){for(const pe in c){const ue=c[pe];if(ue[q.id]===void 0)continue;const xe=ue[q.id];for(const ce in xe)w(xe[ce].object),delete xe[ce];delete ue[q.id]}}function we(){be(),m=!0,p!==f&&(p=f,b(p.object))}function be(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:x,reset:we,resetDefaultState:be,dispose:Te,releaseStatesOfGeometry:C,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:N,disableUnusedAttributes:D}}function z1(r,e,t,i){const s=i.isWebGL2;let o;function u(m){o=m}function c(m,x){r.drawArrays(o,m,x),t.update(x,o,1)}function f(m,x,M){if(M===0)return;let b,w;if(s)b=r,w="drawArraysInstanced";else if(b=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[w](o,m,x,M),t.update(x,o,M)}function p(m,x,M){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let w=0;w<M;w++)this.render(m[w],x[w]);else{b.multiDrawArraysWEBGL(o,m,0,x,0,M);let w=0;for(let E=0;E<M;E++)w+=x[E];t.update(w,o,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function G1(r,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=o(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=u||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),w=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),H=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=M>0,N=u||e.has("OES_texture_float"),$=R&&N,D=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:H,vertexTextures:R,floatFragmentTextures:N,floatVertexTextures:$,maxSamples:D}}function H1(r){const e=this;let t=null,i=0,s=!1,o=!1;const u=new wa,c=new Ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const b=x.length!==0||M||i!==0||s;return s=M,i=x.length,b},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,M){t=m(x,M,0)},this.setState=function(x,M,b){const w=x.clippingPlanes,E=x.clipIntersection,g=x.clipShadows,_=r.get(x);if(!s||w===null||w.length===0||o&&!g)o?m(null):p();else{const H=o?0:i,R=H*4;let N=_.clippingState||null;f.value=N,N=m(w,M,R,b);for(let $=0;$!==R;++$)N[$]=t[$];_.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=H}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(x,M,b,w){const E=x!==null?x.length:0;let g=null;if(E!==0){if(g=f.value,w!==!0||g===null){const _=b+E*4,H=M.matrixWorldInverse;c.getNormalMatrix(H),(g===null||g.length<_)&&(g=new Float32Array(_));for(let R=0,N=b;R!==E;++R,N+=4)u.copy(x[R]).applyMatrix4(H,c),u.normal.toArray(g,N),g[N+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function k1(r){let e=new WeakMap;function t(u,c){return c===bd?u.mapping=To:c===Sd&&(u.mapping=wo),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===bd||c===Sd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new JS(f.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",s),t(p.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class V1 extends u_{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=p*this.view.offsetX,u=o+p*this.view.width,c-=m*this.view.offsetY,f=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bo=4,Km=[.125,.215,.35,.446,.526,.582],fs=20,ld=new V1,jm=new jt;let cd=null,ud=0,fd=0;const cs=(1+Math.sqrt(5))/2,_o=1/cs,Jm=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,cs,_o),new te(0,cs,-_o),new te(_o,0,cs),new te(-_o,0,cs),new te(cs,_o,0),new te(-cs,_o,0)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,fd),e.scissorTest=!1,Au(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===To||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Ul,format:ir,colorSpace:Na,depthBuffer:!1},s=eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(o)),this._blurMaterial=X1(o,e,t)}return s}_compileMaterial(e){const t=new rr(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,i,s){const c=new Di(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,M=m.toneMapping;m.getClearColor(jm),m.toneMapping=La,m.autoClear=!1;const b=new zd({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1}),w=new rr(new Bl,b);let E=!1;const g=e.background;g?g.isColor&&(b.color.copy(g),e.background=null,E=!0):(b.color.copy(jm),E=!0);for(let _=0;_<6;_++){const H=_%3;H===0?(c.up.set(0,f[_],0),c.lookAt(p[_],0,0)):H===1?(c.up.set(0,0,f[_]),c.lookAt(0,p[_],0)):(c.up.set(0,f[_],0),c.lookAt(0,0,p[_]));const R=this._cubeSize;Au(s,H*R,_>2?R:0,R,R),m.setRenderTarget(s),E&&m.render(w,c),m.render(e,c)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=M,m.autoClear=x,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===To||e.mapping===wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const o=s?this._cubemapMaterial:this._equirectMaterial,u=new rr(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;Au(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,ld)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Jm[(s-1)%Jm.length];this._blur(e,s-1,s,o,u)}t.autoClear=i}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new rr(this._lodPlanes[s],p),M=p.uniforms,b=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*b):2*Math.PI/(2*fs-1),E=o/w,g=isFinite(o)?1+Math.floor(m*E):fs;g>fs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const _=[];let H=0;for(let F=0;F<fs;++F){const J=F/E,Te=Math.exp(-J*J/2);_.push(Te),F===0?H+=Te:F<g&&(H+=2*Te)}for(let F=0;F<_.length;F++)_[F]=_[F]/H;M.envMap.value=e.texture,M.samples.value=g,M.weights.value=_,M.latitudinal.value=u==="latitudinal",c&&(M.poleAxis.value=c);const{_lodMax:R}=this;M.dTheta.value=w,M.mipInt.value=R-i;const N=this._sizeLods[s],$=3*N*(s>R-bo?s-R+bo:0),D=4*(this._cubeSize-N);Au(t,$,D,3*N,2*N),f.setRenderTarget(t),f.render(x,ld)}}function W1(r){const e=[],t=[],i=[];let s=r;const o=r-bo+1+Km.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>r-bo?f=Km[u-r+bo-1]:u===0&&(f=0),i.push(f);const p=1/(c-2),m=-p,x=1+p,M=[m,m,x,m,x,x,m,m,x,x,m,x],b=6,w=6,E=3,g=2,_=1,H=new Float32Array(E*w*b),R=new Float32Array(g*w*b),N=new Float32Array(_*w*b);for(let D=0;D<b;D++){const F=D%3*2/3-1,J=D>2?0:-1,Te=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];H.set(Te,E*w*D),R.set(M,g*w*D);const C=[D,D,D,D,D,D];N.set(C,_*w*D)}const $=new Fa;$.setAttribute("position",new ar(H,E)),$.setAttribute("uv",new ar(R,g)),$.setAttribute("faceIndex",new ar(N,_)),e.push($),s>bo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eg(r,e,t){const i=new ms(r,e,t);return i.texture.mapping=Xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Au(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function X1(r,e,t){const i=new Float32Array(fs),s=new te(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function tg(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function ng(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function $1(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,p=f===bd||f===Sd,m=f===To||f===wo;if(p||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return t===null&&(t=new Qm(r)),x=p?t.fromEquirectangular(c,x):t.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(p&&x&&x.height>0||m&&x&&s(x)){t===null&&(t=new Qm(r));const M=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,M),c.addEventListener("dispose",o),M.texture}else return null}}}return c}function s(c){let f=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&f++;return f===p}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function q1(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Y1(r,e,t,i){const s={},o=new WeakMap;function u(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const w in M.attributes)e.remove(M.attributes[w]);for(const w in M.morphAttributes){const E=M.morphAttributes[w];for(let g=0,_=E.length;g<_;g++)e.remove(E[g])}M.removeEventListener("dispose",u),delete s[M.id];const b=o.get(M);b&&(e.remove(b),o.delete(M)),i.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function c(x,M){return s[M.id]===!0||(M.addEventListener("dispose",u),s[M.id]=!0,t.memory.geometries++),M}function f(x){const M=x.attributes;for(const w in M)e.update(M[w],r.ARRAY_BUFFER);const b=x.morphAttributes;for(const w in b){const E=b[w];for(let g=0,_=E.length;g<_;g++)e.update(E[g],r.ARRAY_BUFFER)}}function p(x){const M=[],b=x.index,w=x.attributes.position;let E=0;if(b!==null){const H=b.array;E=b.version;for(let R=0,N=H.length;R<N;R+=3){const $=H[R+0],D=H[R+1],F=H[R+2];M.push($,D,D,F,F,$)}}else if(w!==void 0){const H=w.array;E=w.version;for(let R=0,N=H.length/3-1;R<N;R+=3){const $=R+0,D=R+1,F=R+2;M.push($,D,D,F,F,$)}}else return;const g=new(e_(M)?l_:o_)(M,1);g.version=E;const _=o.get(x);_&&e.remove(_),o.set(x,g)}function m(x){const M=o.get(x);if(M){const b=x.index;b!==null&&M.version<b.version&&p(x)}else p(x);return o.get(x)}return{get:c,update:f,getWireframeAttribute:m}}function Z1(r,e,t,i){const s=i.isWebGL2;let o;function u(b){o=b}let c,f;function p(b){c=b.type,f=b.bytesPerElement}function m(b,w){r.drawElements(o,w,c,b*f),t.update(w,o,1)}function x(b,w,E){if(E===0)return;let g,_;if(s)g=r,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](o,w,c,b*f,E),t.update(w,o,E)}function M(b,w,E){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<E;_++)this.render(b[_]/f,w[_]);else{g.multiDrawElementsWEBGL(o,w,0,c,b,0,E);let _=0;for(let H=0;H<E;H++)_+=w[H];t.update(_,o,1)}}this.setMode=u,this.setIndex=p,this.render=m,this.renderInstances=x,this.renderMultiDraw=M}function K1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(o/3);break;case r.LINES:t.lines+=c*(o/2);break;case r.LINE_STRIP:t.lines+=c*(o-1);break;case r.LINE_LOOP:t.lines+=c*o;break;case r.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function j1(r,e){return r[0]-e[0]}function J1(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Q1(r,e,t){const i={},s=new Float32Array(8),o=new WeakMap,u=new Kn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function f(p,m,x){const M=p.morphTargetInfluences;if(e.isWebGL2===!0){const w=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=w!==void 0?w.length:0;let g=o.get(m);if(g===void 0||g.count!==E){let be=function(){z.dispose(),o.delete(m),m.removeEventListener("dispose",be)};var b=be;g!==void 0&&g.texture.dispose();const _=m.morphAttributes.position!==void 0,H=m.morphAttributes.normal!==void 0,R=m.morphAttributes.color!==void 0,N=m.morphAttributes.position||[],$=m.morphAttributes.normal||[],D=m.morphAttributes.color||[];let F=0;_===!0&&(F=1),H===!0&&(F=2),R===!0&&(F=3);let J=m.attributes.position.count*F,Te=1;J>e.maxTextureSize&&(Te=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const C=new Float32Array(J*Te*4*E),z=new i_(C,J,Te,E);z.type=br,z.needsUpdate=!0;const we=F*4;for(let q=0;q<E;q++){const pe=N[q],ue=$[q],xe=D[q],ce=J*Te*4*q;for(let Me=0;Me<pe.count;Me++){const Se=Me*we;_===!0&&(u.fromBufferAttribute(pe,Me),C[ce+Se+0]=u.x,C[ce+Se+1]=u.y,C[ce+Se+2]=u.z,C[ce+Se+3]=0),H===!0&&(u.fromBufferAttribute(ue,Me),C[ce+Se+4]=u.x,C[ce+Se+5]=u.y,C[ce+Se+6]=u.z,C[ce+Se+7]=0),R===!0&&(u.fromBufferAttribute(xe,Me),C[ce+Se+8]=u.x,C[ce+Se+9]=u.y,C[ce+Se+10]=u.z,C[ce+Se+11]=xe.itemSize===4?u.w:1)}}g={count:E,texture:z,size:new Rt(J,Te)},o.set(m,g),m.addEventListener("dispose",be)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)x.getUniforms().setValue(r,"morphTexture",p.morphTexture,t);else{let _=0;for(let R=0;R<M.length;R++)_+=M[R];const H=m.morphTargetsRelative?1:1-_;x.getUniforms().setValue(r,"morphTargetBaseInfluence",H),x.getUniforms().setValue(r,"morphTargetInfluences",M)}x.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const w=M===void 0?0:M.length;let E=i[m.id];if(E===void 0||E.length!==w){E=[];for(let N=0;N<w;N++)E[N]=[N,0];i[m.id]=E}for(let N=0;N<w;N++){const $=E[N];$[0]=N,$[1]=M[N]}E.sort(J1);for(let N=0;N<8;N++)N<w&&E[N][1]?(c[N][0]=E[N][0],c[N][1]=E[N][1]):(c[N][0]=Number.MAX_SAFE_INTEGER,c[N][1]=0);c.sort(j1);const g=m.morphAttributes.position,_=m.morphAttributes.normal;let H=0;for(let N=0;N<8;N++){const $=c[N],D=$[0],F=$[1];D!==Number.MAX_SAFE_INTEGER&&F?(g&&m.getAttribute("morphTarget"+N)!==g[D]&&m.setAttribute("morphTarget"+N,g[D]),_&&m.getAttribute("morphNormal"+N)!==_[D]&&m.setAttribute("morphNormal"+N,_[D]),s[N]=F,H+=F):(g&&m.hasAttribute("morphTarget"+N)===!0&&m.deleteAttribute("morphTarget"+N),_&&m.hasAttribute("morphNormal"+N)===!0&&m.deleteAttribute("morphNormal"+N),s[N]=0)}const R=m.morphTargetsRelative?1:1-H;x.getUniforms().setValue(r,"morphTargetBaseInfluence",R),x.getUniforms().setValue(r,"morphTargetInfluences",s)}}return{update:f}}function eT(r,e,t,i){let s=new WeakMap;function o(f){const p=i.render.frame,m=f.geometry,x=e.get(f,m);if(s.get(x)!==p&&(e.update(x),s.set(x,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==p&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,p))),f.isSkinnedMesh){const M=f.skeleton;s.get(M)!==p&&(M.update(),s.set(M,p))}return x}function u(){s=new WeakMap}function c(f){const p=f.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:u}}class p_ extends ui{constructor(e,t,i,s,o,u,c,f,p,m){if(m=m!==void 0?m:ps,m!==ps&&m!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===ps&&(i=Ca),i===void 0&&m===Ao&&(i=ds),super(null,s,o,u,c,f,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Zn,this.minFilter=f!==void 0?f:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const m_=new ui,g_=new p_(1,1);g_.compareFunction=Qg;const __=new i_,v_=new NS,x_=new f_,ig=[],rg=[],ag=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function Lo(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let o=ig[s];if(o===void 0&&(o=new Float32Array(s),ig[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(o,c)}return o}function zn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Gn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Zu(r,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function tT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;r.uniform2fv(this.addr,e),Gn(t,e)}}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zn(t,e))return;r.uniform3fv(this.addr,e),Gn(t,e)}}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;r.uniform4fv(this.addr,e),Gn(t,e)}}function aT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(zn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,i))return;og.set(i),r.uniformMatrix2fv(this.addr,!1,og),Gn(t,i)}}function sT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(zn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,i))return;sg.set(i),r.uniformMatrix3fv(this.addr,!1,sg),Gn(t,i)}}function oT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(zn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(zn(t,i))return;ag.set(i),r.uniformMatrix4fv(this.addr,!1,ag),Gn(t,i)}}function lT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;r.uniform2iv(this.addr,e),Gn(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;r.uniform3iv(this.addr,e),Gn(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;r.uniform4iv(this.addr,e),Gn(t,e)}}function hT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zn(t,e))return;r.uniform2uiv(this.addr,e),Gn(t,e)}}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zn(t,e))return;r.uniform3uiv(this.addr,e),Gn(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zn(t,e))return;r.uniform4uiv(this.addr,e),Gn(t,e)}}function gT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);const o=this.type===r.SAMPLER_2D_SHADOW?g_:m_;t.setTexture2D(e||o,s)}function _T(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||v_,s)}function vT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||x_,s)}function xT(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||__,s)}function MT(r){switch(r){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return aT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return fT;case 5125:return hT;case 36294:return dT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return xT}}function bT(r,e){r.uniform1fv(this.addr,e)}function ST(r,e){const t=Lo(e,this.size,2);r.uniform2fv(this.addr,t)}function yT(r,e){const t=Lo(e,this.size,3);r.uniform3fv(this.addr,t)}function ET(r,e){const t=Lo(e,this.size,4);r.uniform4fv(this.addr,t)}function TT(r,e){const t=Lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wT(r,e){const t=Lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AT(r,e){const t=Lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CT(r,e){r.uniform1iv(this.addr,e)}function RT(r,e){r.uniform2iv(this.addr,e)}function LT(r,e){r.uniform3iv(this.addr,e)}function PT(r,e){r.uniform4iv(this.addr,e)}function IT(r,e){r.uniform1uiv(this.addr,e)}function DT(r,e){r.uniform2uiv(this.addr,e)}function UT(r,e){r.uniform3uiv(this.addr,e)}function NT(r,e){r.uniform4uiv(this.addr,e)}function FT(r,e,t){const i=this.cache,s=e.length,o=Zu(t,s);zn(i,o)||(r.uniform1iv(this.addr,o),Gn(i,o));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||m_,o[u])}function OT(r,e,t){const i=this.cache,s=e.length,o=Zu(t,s);zn(i,o)||(r.uniform1iv(this.addr,o),Gn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||v_,o[u])}function BT(r,e,t){const i=this.cache,s=e.length,o=Zu(t,s);zn(i,o)||(r.uniform1iv(this.addr,o),Gn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||x_,o[u])}function zT(r,e,t){const i=this.cache,s=e.length,o=Zu(t,s);zn(i,o)||(r.uniform1iv(this.addr,o),Gn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||__,o[u])}function GT(r){switch(r){case 5126:return bT;case 35664:return ST;case 35665:return yT;case 35666:return ET;case 35674:return TT;case 35675:return wT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return LT;case 35669:case 35673:return PT;case 5125:return IT;case 36294:return DT;case 36295:return UT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}class HT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}}class kT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function lg(r,e){r.seq.push(e),r.map[e.id]=e}function WT(r,e,t){const i=r.name,s=i.length;for(hd.lastIndex=0;;){const o=hd.exec(i),u=hd.lastIndex;let c=o[1];const f=o[2]==="]",p=o[3];if(f&&(c=c|0),p===void 0||p==="["&&u+2===s){lg(t,p===void 0?new HT(c,r,e):new kT(c,r,e));break}else{let x=t.map[c];x===void 0&&(x=new VT(c),lg(t,x)),t=x}}}class Iu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),u=e.getUniformLocation(t,o.name);WT(o,u,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function cg(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const XT=37297;let $T=0;function qT(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function YT(r){const e=fn.getPrimaries(fn.workingColorSpace),t=fn.getPrimaries(r);let i;switch(e===t?i="":e===Ou&&t===Fu?i="LinearDisplayP3ToLinearSRGB":e===Fu&&t===Ou&&(i="LinearSRGBToLinearDisplayP3"),r){case Na:case $u:return[i,"LinearTransferOETF"];case xr:case Od:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ug(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+qT(r.getShaderSource(e),u)}else return s}function ZT(r,e){const t=YT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KT(r,e){let t;switch(e){case Vb:t="Linear";break;case Wb:t="Reinhard";break;case Xb:t="OptimizedCineon";break;case $b:t="ACESFilmic";break;case Yb:t="AgX";break;case Zb:t="Neutral";break;case qb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(So).join(`
`)}function JT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function QT(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ew(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=r.getActiveAttrib(e,s),u=o.name;let c=1;o.type===r.FLOAT_MAT2&&(c=2),o.type===r.FLOAT_MAT3&&(c=3),o.type===r.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function So(r){return r!==""}function fg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(tw,iw)}const nw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iw(r,e){let t=Nt[e];if(t===void 0){const i=nw.get(e);if(i!==void 0)t=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(r){return r.replace(rw,aw)}function aw(r,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function pg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function sw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_b?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function ow(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case To:case wo:e="ENVMAP_TYPE_CUBE";break;case Xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wo:e="ENVMAP_MODE_REFRACTION";break}return e}function cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vg:e="ENVMAP_BLENDING_MULTIPLY";break;case Hb:e="ENVMAP_BLENDING_MIX";break;case kb:e="ENVMAP_BLENDING_ADD";break}return e}function uw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fw(r,e,t,i){const s=r.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=sw(t),p=ow(t),m=lw(t),x=cw(t),M=uw(t),b=t.isWebGL2?"":jT(t),w=JT(t),E=QT(o),g=s.createProgram();let _,H,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(So).join(`
`),_.length>0&&(_+=`
`),H=[b,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(So).join(`
`),H.length>0&&(H+=`
`)):(_=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),H=[b,pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==La?"#define TONE_MAPPING":"",t.toneMapping!==La?Nt.tonemapping_pars_fragment:"",t.toneMapping!==La?KT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,ZT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),u=Ad(u),u=fg(u,t),u=hg(u,t),c=Ad(c),c=fg(c,t),c=hg(c,t),u=dg(u),c=dg(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,H=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+H);const N=R+_+u,$=R+H+c,D=cg(s,s.VERTEX_SHADER,N),F=cg(s,s.FRAGMENT_SHADER,$);s.attachShader(g,D),s.attachShader(g,F),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function J(we){if(r.debug.checkShaderErrors){const be=s.getProgramInfoLog(g).trim(),q=s.getShaderInfoLog(D).trim(),pe=s.getShaderInfoLog(F).trim();let ue=!0,xe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,D,F);else{const ce=ug(s,D,"vertex"),Me=ug(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+we.name+`
Material Type: `+we.type+`

Program Info Log: `+be+`
`+ce+`
`+Me)}else be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",be):(q===""||pe==="")&&(xe=!1);xe&&(we.diagnostics={runnable:ue,programLog:be,vertexShader:{log:q,prefix:_},fragmentShader:{log:pe,prefix:H}})}s.deleteShader(D),s.deleteShader(F),Te=new Iu(s,g),C=ew(s,g)}let Te;this.getUniforms=function(){return Te===void 0&&J(this),Te};let C;this.getAttributes=function(){return C===void 0&&J(this),C};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(g,XT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=F,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pw(e),t.set(e,i)),i}}class pw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function mw(r,e,t,i,s,o,u){const c=new a_,f=new dw,p=new Set,m=[],x=s.isWebGL2,M=s.logarithmicDepthBuffer,b=s.vertexTextures;let w=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(C){return p.add(C),C===0?"uv":`uv${C}`}function _(C,z,we,be,q){const pe=be.fog,ue=q.geometry,xe=C.isMeshStandardMaterial?be.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||xe),Me=ce&&ce.mapping===Xu?ce.image.height:null,Se=E[C.type];C.precision!==null&&(w=s.getMaxPrecision(C.precision),w!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",w,"instead."));const Ie=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ze=Ie!==void 0?Ie.length:0;let Mt=0;ue.morphAttributes.position!==void 0&&(Mt=1),ue.morphAttributes.normal!==void 0&&(Mt=2),ue.morphAttributes.color!==void 0&&(Mt=3);let oe,Ae,He,dt;if(Se){const qt=Mr[Se];oe=qt.vertexShader,Ae=qt.fragmentShader}else oe=C.vertexShader,Ae=C.fragmentShader,f.update(C),He=f.getVertexShaderID(C),dt=f.getFragmentShaderID(C);const Je=r.getRenderTarget(),ke=q.isInstancedMesh===!0,Ht=q.isBatchedMesh===!0,at=!!C.map,Q=!!C.matcap,xn=!!ce,We=!!C.aoMap,pt=!!C.lightMap,rt=!!C.bumpMap,_t=!!C.normalMap,vt=!!C.displacementMap,Tt=!!C.emissiveMap,$t=!!C.metalnessMap,U=!!C.roughnessMap,T=C.anisotropy>0,le=C.clearcoat>0,de=C.iridescence>0,Ce=C.sheen>0,ye=C.transmission>0,ot=T&&!!C.anisotropyMap,et=le&&!!C.clearcoatMap,Ne=le&&!!C.clearcoatNormalMap,Fe=le&&!!C.clearcoatRoughnessMap,mt=de&&!!C.iridescenceMap,Ue=de&&!!C.iridescenceThicknessMap,sn=Ce&&!!C.sheenColorMap,bt=Ce&&!!C.sheenRoughnessMap,tt=!!C.specularMap,Xe=!!C.specularColorMap,je=!!C.specularIntensityMap,O=ye&&!!C.transmissionMap,ve=ye&&!!C.thicknessMap,Ke=!!C.gradientMap,k=!!C.alphaMap,De=C.alphaTest>0,ne=!!C.alphaHash,Le=!!C.extensions;let Be=La;C.toneMapped&&(Je===null||Je.isXRRenderTarget===!0)&&(Be=r.toneMapping);const Lt={isWebGL2:x,shaderID:Se,shaderType:C.type,shaderName:C.name,vertexShader:oe,fragmentShader:Ae,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:dt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:w,batching:Ht,instancing:ke,instancingColor:ke&&q.instanceColor!==null,instancingMorph:ke&&q.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:Je===null?r.outputColorSpace:Je.isXRRenderTarget===!0?Je.texture.colorSpace:Na,alphaToCoverage:!!C.alphaToCoverage,map:at,matcap:Q,envMap:xn,envMapMode:xn&&ce.mapping,envMapCubeUVHeight:Me,aoMap:We,lightMap:pt,bumpMap:rt,normalMap:_t,displacementMap:b&&vt,emissiveMap:Tt,normalMapObjectSpace:_t&&C.normalMapType===sS,normalMapTangentSpace:_t&&C.normalMapType===aS,metalnessMap:$t,roughnessMap:U,anisotropy:T,anisotropyMap:ot,clearcoat:le,clearcoatMap:et,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Fe,iridescence:de,iridescenceMap:mt,iridescenceThicknessMap:Ue,sheen:Ce,sheenColorMap:sn,sheenRoughnessMap:bt,specularMap:tt,specularColorMap:Xe,specularIntensityMap:je,transmission:ye,transmissionMap:O,thicknessMap:ve,gradientMap:Ke,opaque:C.transparent===!1&&C.blending===yo&&C.alphaToCoverage===!1,alphaMap:k,alphaTest:De,alphaHash:ne,combine:C.combine,mapUv:at&&g(C.map.channel),aoMapUv:We&&g(C.aoMap.channel),lightMapUv:pt&&g(C.lightMap.channel),bumpMapUv:rt&&g(C.bumpMap.channel),normalMapUv:_t&&g(C.normalMap.channel),displacementMapUv:vt&&g(C.displacementMap.channel),emissiveMapUv:Tt&&g(C.emissiveMap.channel),metalnessMapUv:$t&&g(C.metalnessMap.channel),roughnessMapUv:U&&g(C.roughnessMap.channel),anisotropyMapUv:ot&&g(C.anisotropyMap.channel),clearcoatMapUv:et&&g(C.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(C.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(C.iridescenceThicknessMap.channel),sheenColorMapUv:sn&&g(C.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(C.sheenRoughnessMap.channel),specularMapUv:tt&&g(C.specularMap.channel),specularColorMapUv:Xe&&g(C.specularColorMap.channel),specularIntensityMapUv:je&&g(C.specularIntensityMap.channel),transmissionMapUv:O&&g(C.transmissionMap.channel),thicknessMapUv:ve&&g(C.thicknessMap.channel),alphaMapUv:k&&g(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(_t||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(at||k),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:M,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:Mt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&we.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,useLegacyLights:r._useLegacyLights,decodeVideoTexture:at&&C.map.isVideoTexture===!0&&fn.getTransfer(C.map.colorSpace)===vn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yr,flipSided:C.side===Si,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Le&&C.extensions.derivatives===!0,extensionFragDepth:Le&&C.extensions.fragDepth===!0,extensionDrawBuffers:Le&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Le&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:x||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:x||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:x||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function H(C){const z=[];if(C.shaderID?z.push(C.shaderID):(z.push(C.customVertexShaderID),z.push(C.customFragmentShaderID)),C.defines!==void 0)for(const we in C.defines)z.push(we),z.push(C.defines[we]);return C.isRawShaderMaterial===!1&&(R(z,C),N(z,C),z.push(r.outputColorSpace)),z.push(C.customProgramCacheKey),z.join()}function R(C,z){C.push(z.precision),C.push(z.outputColorSpace),C.push(z.envMapMode),C.push(z.envMapCubeUVHeight),C.push(z.mapUv),C.push(z.alphaMapUv),C.push(z.lightMapUv),C.push(z.aoMapUv),C.push(z.bumpMapUv),C.push(z.normalMapUv),C.push(z.displacementMapUv),C.push(z.emissiveMapUv),C.push(z.metalnessMapUv),C.push(z.roughnessMapUv),C.push(z.anisotropyMapUv),C.push(z.clearcoatMapUv),C.push(z.clearcoatNormalMapUv),C.push(z.clearcoatRoughnessMapUv),C.push(z.iridescenceMapUv),C.push(z.iridescenceThicknessMapUv),C.push(z.sheenColorMapUv),C.push(z.sheenRoughnessMapUv),C.push(z.specularMapUv),C.push(z.specularColorMapUv),C.push(z.specularIntensityMapUv),C.push(z.transmissionMapUv),C.push(z.thicknessMapUv),C.push(z.combine),C.push(z.fogExp2),C.push(z.sizeAttenuation),C.push(z.morphTargetsCount),C.push(z.morphAttributeCount),C.push(z.numDirLights),C.push(z.numPointLights),C.push(z.numSpotLights),C.push(z.numSpotLightMaps),C.push(z.numHemiLights),C.push(z.numRectAreaLights),C.push(z.numDirLightShadows),C.push(z.numPointLightShadows),C.push(z.numSpotLightShadows),C.push(z.numSpotLightShadowsWithMaps),C.push(z.numLightProbes),C.push(z.shadowMapType),C.push(z.toneMapping),C.push(z.numClippingPlanes),C.push(z.numClipIntersection),C.push(z.depthPacking)}function N(C,z){c.disableAll(),z.isWebGL2&&c.enable(0),z.supportsVertexTextures&&c.enable(1),z.instancing&&c.enable(2),z.instancingColor&&c.enable(3),z.instancingMorph&&c.enable(4),z.matcap&&c.enable(5),z.envMap&&c.enable(6),z.normalMapObjectSpace&&c.enable(7),z.normalMapTangentSpace&&c.enable(8),z.clearcoat&&c.enable(9),z.iridescence&&c.enable(10),z.alphaTest&&c.enable(11),z.vertexColors&&c.enable(12),z.vertexAlphas&&c.enable(13),z.vertexUv1s&&c.enable(14),z.vertexUv2s&&c.enable(15),z.vertexUv3s&&c.enable(16),z.vertexTangents&&c.enable(17),z.anisotropy&&c.enable(18),z.alphaHash&&c.enable(19),z.batching&&c.enable(20),C.push(c.mask),c.disableAll(),z.fog&&c.enable(0),z.useFog&&c.enable(1),z.flatShading&&c.enable(2),z.logarithmicDepthBuffer&&c.enable(3),z.skinning&&c.enable(4),z.morphTargets&&c.enable(5),z.morphNormals&&c.enable(6),z.morphColors&&c.enable(7),z.premultipliedAlpha&&c.enable(8),z.shadowMapEnabled&&c.enable(9),z.useLegacyLights&&c.enable(10),z.doubleSided&&c.enable(11),z.flipSided&&c.enable(12),z.useDepthPacking&&c.enable(13),z.dithering&&c.enable(14),z.transmission&&c.enable(15),z.sheen&&c.enable(16),z.opaque&&c.enable(17),z.pointsUvs&&c.enable(18),z.decodeVideoTexture&&c.enable(19),z.alphaToCoverage&&c.enable(20),C.push(c.mask)}function $(C){const z=E[C.type];let we;if(z){const be=Mr[z];we=YS.clone(be.uniforms)}else we=C.uniforms;return we}function D(C,z){let we;for(let be=0,q=m.length;be<q;be++){const pe=m[be];if(pe.cacheKey===z){we=pe,++we.usedTimes;break}}return we===void 0&&(we=new fw(r,z,C,o),m.push(we)),we}function F(C){if(--C.usedTimes===0){const z=m.indexOf(C);m[z]=m[m.length-1],m.pop(),C.destroy()}}function J(C){f.remove(C)}function Te(){f.dispose()}return{getParameters:_,getProgramCacheKey:H,getUniforms:$,acquireProgram:D,releaseProgram:F,releaseShaderCache:J,programs:m,dispose:Te}}function gw(){let r=new WeakMap;function e(o){let u=r.get(o);return u===void 0&&(u={},r.set(o,u)),u}function t(o){r.delete(o)}function i(o,u,c){r.get(o)[u]=c}function s(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gg(){const r=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(x,M,b,w,E,g){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:M,material:b,groupOrder:w,renderOrder:x.renderOrder,z:E,group:g},r[e]=_):(_.id=x.id,_.object=x,_.geometry=M,_.material=b,_.groupOrder=w,_.renderOrder=x.renderOrder,_.z=E,_.group=g),e++,_}function c(x,M,b,w,E,g){const _=u(x,M,b,w,E,g);b.transmission>0?i.push(_):b.transparent===!0?s.push(_):t.push(_)}function f(x,M,b,w,E,g){const _=u(x,M,b,w,E,g);b.transmission>0?i.unshift(_):b.transparent===!0?s.unshift(_):t.unshift(_)}function p(x,M){t.length>1&&t.sort(x||_w),i.length>1&&i.sort(M||mg),s.length>1&&s.sort(M||mg)}function m(){for(let x=e,M=r.length;x<M;x++){const b=r[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:c,unshift:f,finish:m,sort:p}}function vw(){let r=new WeakMap;function e(i,s){const o=r.get(i);let u;return o===void 0?(u=new gg,r.set(i,[u])):s>=o.length?(u=new gg,o.push(u)):u=o[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new jt};break;case"SpotLight":t={position:new te,direction:new te,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new jt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":t={color:new jt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function Mw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bw=0;function Sw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r,e){const t=new xw,i=Mw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new te);const o=new te,u=new Sn,c=new Sn;function f(m,x){let M=0,b=0,w=0;for(let we=0;we<9;we++)s.probe[we].set(0,0,0);let E=0,g=0,_=0,H=0,R=0,N=0,$=0,D=0,F=0,J=0,Te=0;m.sort(Sw);const C=x===!0?Math.PI:1;for(let we=0,be=m.length;we<be;we++){const q=m[we],pe=q.color,ue=q.intensity,xe=q.distance,ce=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)M+=pe.r*ue*C,b+=pe.g*ue*C,w+=pe.b*ue*C;else if(q.isLightProbe){for(let Me=0;Me<9;Me++)s.probe[Me].addScaledVector(q.sh.coefficients[Me],ue);Te++}else if(q.isDirectionalLight){const Me=t.get(q);if(Me.color.copy(q.color).multiplyScalar(q.intensity*C),q.castShadow){const Se=q.shadow,Ie=i.get(q);Ie.shadowBias=Se.bias,Ie.shadowNormalBias=Se.normalBias,Ie.shadowRadius=Se.radius,Ie.shadowMapSize=Se.mapSize,s.directionalShadow[E]=Ie,s.directionalShadowMap[E]=ce,s.directionalShadowMatrix[E]=q.shadow.matrix,N++}s.directional[E]=Me,E++}else if(q.isSpotLight){const Me=t.get(q);Me.position.setFromMatrixPosition(q.matrixWorld),Me.color.copy(pe).multiplyScalar(ue*C),Me.distance=xe,Me.coneCos=Math.cos(q.angle),Me.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),Me.decay=q.decay,s.spot[_]=Me;const Se=q.shadow;if(q.map&&(s.spotLightMap[F]=q.map,F++,Se.updateMatrices(q),q.castShadow&&J++),s.spotLightMatrix[_]=Se.matrix,q.castShadow){const Ie=i.get(q);Ie.shadowBias=Se.bias,Ie.shadowNormalBias=Se.normalBias,Ie.shadowRadius=Se.radius,Ie.shadowMapSize=Se.mapSize,s.spotShadow[_]=Ie,s.spotShadowMap[_]=ce,D++}_++}else if(q.isRectAreaLight){const Me=t.get(q);Me.color.copy(pe).multiplyScalar(ue),Me.halfWidth.set(q.width*.5,0,0),Me.halfHeight.set(0,q.height*.5,0),s.rectArea[H]=Me,H++}else if(q.isPointLight){const Me=t.get(q);if(Me.color.copy(q.color).multiplyScalar(q.intensity*C),Me.distance=q.distance,Me.decay=q.decay,q.castShadow){const Se=q.shadow,Ie=i.get(q);Ie.shadowBias=Se.bias,Ie.shadowNormalBias=Se.normalBias,Ie.shadowRadius=Se.radius,Ie.shadowMapSize=Se.mapSize,Ie.shadowCameraNear=Se.camera.near,Ie.shadowCameraFar=Se.camera.far,s.pointShadow[g]=Ie,s.pointShadowMap[g]=ce,s.pointShadowMatrix[g]=q.shadow.matrix,$++}s.point[g]=Me,g++}else if(q.isHemisphereLight){const Me=t.get(q);Me.skyColor.copy(q.color).multiplyScalar(ue*C),Me.groundColor.copy(q.groundColor).multiplyScalar(ue*C),s.hemi[R]=Me,R++}}H>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=M,s.ambient[1]=b,s.ambient[2]=w;const z=s.hash;(z.directionalLength!==E||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==H||z.hemiLength!==R||z.numDirectionalShadows!==N||z.numPointShadows!==$||z.numSpotShadows!==D||z.numSpotMaps!==F||z.numLightProbes!==Te)&&(s.directional.length=E,s.spot.length=_,s.rectArea.length=H,s.point.length=g,s.hemi.length=R,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=$,s.pointShadowMap.length=$,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=$,s.spotLightMatrix.length=D+F-J,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=Te,z.directionalLength=E,z.pointLength=g,z.spotLength=_,z.rectAreaLength=H,z.hemiLength=R,z.numDirectionalShadows=N,z.numPointShadows=$,z.numSpotShadows=D,z.numSpotMaps=F,z.numLightProbes=Te,s.version=bw++)}function p(m,x){let M=0,b=0,w=0,E=0,g=0;const _=x.matrixWorldInverse;for(let H=0,R=m.length;H<R;H++){const N=m[H];if(N.isDirectionalLight){const $=s.directional[M];$.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),$.direction.sub(o),$.direction.transformDirection(_),M++}else if(N.isSpotLight){const $=s.spot[w];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),$.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),$.direction.sub(o),$.direction.transformDirection(_),w++}else if(N.isRectAreaLight){const $=s.rectArea[E];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),c.identity(),u.copy(N.matrixWorld),u.premultiply(_),c.extractRotation(u),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),$.halfWidth.applyMatrix4(c),$.halfHeight.applyMatrix4(c),E++}else if(N.isPointLight){const $=s.point[b];$.position.setFromMatrixPosition(N.matrixWorld),$.position.applyMatrix4(_),b++}else if(N.isHemisphereLight){const $=s.hemi[g];$.direction.setFromMatrixPosition(N.matrixWorld),$.direction.transformDirection(_),g++}}}return{setup:f,setupView:p,state:s}}function _g(r,e){const t=new yw(r,e),i=[],s=[];function o(){i.length=0,s.length=0}function u(x){i.push(x)}function c(x){s.push(x)}function f(x){t.setup(i,x)}function p(x){t.setupView(i,x)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function Ew(r,e){let t=new WeakMap;function i(o,u=0){const c=t.get(o);let f;return c===void 0?(f=new _g(r,e),t.set(o,[f])):u>=c.length?(f=new _g(r,e),c.push(f)):f=c[u],f}function s(){t=new WeakMap}return{get:i,dispose:s}}class Tw extends qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
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
}`;function Rw(r,e,t){let i=new h_;const s=new Rt,o=new Rt,u=new Kn,c=new Tw({depthPacking:rS}),f=new ww,p={},m=t.maxTextureSize,x={[Ia]:Si,[Si]:Ia,[Yr]:Yr},M=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Aw,fragmentShader:Cw}),b=M.clone();b.defines.HORIZONTAL_PASS=1;const w=new Fa;w.setAttribute("position",new ar(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rr(w,M),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let _=this.type;this.render=function(D,F,J){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const Te=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),we=r.state;we.setBlending(Ra),we.buffers.color.setClear(1,1,1,1),we.buffers.depth.setTest(!0),we.setScissorTest(!1);const be=_!==$r&&this.type===$r,q=_===$r&&this.type!==$r;for(let pe=0,ue=D.length;pe<ue;pe++){const xe=D[pe],ce=xe.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",xe,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);const Me=ce.getFrameExtents();if(s.multiply(Me),o.copy(ce.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Me.x),s.x=o.x*Me.x,ce.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Me.y),s.y=o.y*Me.y,ce.mapSize.y=o.y)),ce.map===null||be===!0||q===!0){const Ie=this.type!==$r?{minFilter:Zn,magFilter:Zn}:{};ce.map!==null&&ce.map.dispose(),ce.map=new ms(s.x,s.y,Ie),ce.map.texture.name=xe.name+".shadowMap",ce.camera.updateProjectionMatrix()}r.setRenderTarget(ce.map),r.clear();const Se=ce.getViewportCount();for(let Ie=0;Ie<Se;Ie++){const Ze=ce.getViewport(Ie);u.set(o.x*Ze.x,o.y*Ze.y,o.x*Ze.z,o.y*Ze.w),we.viewport(u),ce.updateMatrices(xe,Ie),i=ce.getFrustum(),N(F,J,ce.camera,xe,this.type)}ce.isPointLightShadow!==!0&&this.type===$r&&H(ce,J),ce.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(Te,C,z)};function H(D,F){const J=e.update(E);M.defines.VSM_SAMPLES!==D.blurSamples&&(M.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,M.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ms(s.x,s.y)),M.uniforms.shadow_pass.value=D.map.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(F,null,J,M,E,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value=D.mapSize,b.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(F,null,J,b,E,null)}function R(D,F,J,Te){let C=null;const z=J.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)C=z;else if(C=J.isPointLight===!0?f:c,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const we=C.uuid,be=F.uuid;let q=p[we];q===void 0&&(q={},p[we]=q);let pe=q[be];pe===void 0&&(pe=C.clone(),q[be]=pe,F.addEventListener("dispose",$)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,Te===$r?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:x[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const we=r.properties.get(C);we.light=J}return C}function N(D,F,J,Te,C){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===$r)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld);const be=e.update(D),q=D.material;if(Array.isArray(q)){const pe=be.groups;for(let ue=0,xe=pe.length;ue<xe;ue++){const ce=pe[ue],Me=q[ce.materialIndex];if(Me&&Me.visible){const Se=R(D,Me,Te,C);D.onBeforeShadow(r,D,F,J,be,Se,ce),r.renderBufferDirect(J,null,be,Se,D,ce),D.onAfterShadow(r,D,F,J,be,Se,ce)}}}else if(q.visible){const pe=R(D,q,Te,C);D.onBeforeShadow(r,D,F,J,be,pe,null),r.renderBufferDirect(J,null,be,pe,D,null),D.onAfterShadow(r,D,F,J,be,pe,null)}}const we=D.children;for(let be=0,q=we.length;be<q;be++)N(we[be],F,J,Te,C)}function $(D){D.target.removeEventListener("dispose",$);for(const J in p){const Te=p[J],C=D.target.uuid;C in Te&&(Te[C].dispose(),delete Te[C])}}}function Lw(r,e,t){const i=t.isWebGL2;function s(){let k=!1;const De=new Kn;let ne=null;const Le=new Kn(0,0,0,0);return{setMask:function(Be){ne!==Be&&!k&&(r.colorMask(Be,Be,Be,Be),ne=Be)},setLocked:function(Be){k=Be},setClear:function(Be,Lt,qt,Qt,dn){dn===!0&&(Be*=Qt,Lt*=Qt,qt*=Qt),De.set(Be,Lt,qt,Qt),Le.equals(De)===!1&&(r.clearColor(Be,Lt,qt,Qt),Le.copy(De))},reset:function(){k=!1,ne=null,Le.set(-1,0,0,0)}}}function o(){let k=!1,De=null,ne=null,Le=null;return{setTest:function(Be){Be?ke(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Be){De!==Be&&!k&&(r.depthMask(Be),De=Be)},setFunc:function(Be){if(ne!==Be){switch(Be){case Ub:r.depthFunc(r.NEVER);break;case Nb:r.depthFunc(r.ALWAYS);break;case Fb:r.depthFunc(r.LESS);break;case Uu:r.depthFunc(r.LEQUAL);break;case Ob:r.depthFunc(r.EQUAL);break;case Bb:r.depthFunc(r.GEQUAL);break;case zb:r.depthFunc(r.GREATER);break;case Gb:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=Be}},setLocked:function(Be){k=Be},setClear:function(Be){Le!==Be&&(r.clearDepth(Be),Le=Be)},reset:function(){k=!1,De=null,ne=null,Le=null}}}function u(){let k=!1,De=null,ne=null,Le=null,Be=null,Lt=null,qt=null,Qt=null,dn=null;return{setTest:function(kt){k||(kt?ke(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(kt){De!==kt&&!k&&(r.stencilMask(kt),De=kt)},setFunc:function(kt,en,An){(ne!==kt||Le!==en||Be!==An)&&(r.stencilFunc(kt,en,An),ne=kt,Le=en,Be=An)},setOp:function(kt,en,An){(Lt!==kt||qt!==en||Qt!==An)&&(r.stencilOp(kt,en,An),Lt=kt,qt=en,Qt=An)},setLocked:function(kt){k=kt},setClear:function(kt){dn!==kt&&(r.clearStencil(kt),dn=kt)},reset:function(){k=!1,De=null,ne=null,Le=null,Be=null,Lt=null,qt=null,Qt=null,dn=null}}}const c=new s,f=new o,p=new u,m=new WeakMap,x=new WeakMap;let M={},b={},w=new WeakMap,E=[],g=null,_=!1,H=null,R=null,N=null,$=null,D=null,F=null,J=null,Te=new jt(0,0,0),C=0,z=!1,we=null,be=null,q=null,pe=null,ue=null;const xe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Me=0;const Se=r.getParameter(r.VERSION);Se.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(Se)[1]),ce=Me>=1):Se.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),ce=Me>=2);let Ie=null,Ze={};const Mt=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Ae=new Kn().fromArray(Mt),He=new Kn().fromArray(oe);function dt(k,De,ne,Le){const Be=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(k,Lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<ne;qt++)i&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(De,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(De+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return Lt}const Je={};Je[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),Je[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Je[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Je[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ke(r.DEPTH_TEST),f.setFunc(Uu),vt(!1),Tt(Kp),ke(r.CULL_FACE),rt(Ra);function ke(k){M[k]!==!0&&(r.enable(k),M[k]=!0)}function Ht(k){M[k]!==!1&&(r.disable(k),M[k]=!1)}function at(k,De){return b[k]!==De?(r.bindFramebuffer(k,De),b[k]=De,i&&(k===r.DRAW_FRAMEBUFFER&&(b[r.FRAMEBUFFER]=De),k===r.FRAMEBUFFER&&(b[r.DRAW_FRAMEBUFFER]=De)),!0):!1}function Q(k,De){let ne=E,Le=!1;if(k){ne=w.get(De),ne===void 0&&(ne=[],w.set(De,ne));const Be=k.textures;if(ne.length!==Be.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,qt=Be.length;Lt<qt;Lt++)ne[Lt]=r.COLOR_ATTACHMENT0+Lt;ne.length=Be.length,Le=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Le=!0);if(Le)if(t.isWebGL2)r.drawBuffers(ne);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function xn(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const We={[us]:r.FUNC_ADD,[xb]:r.FUNC_SUBTRACT,[Mb]:r.FUNC_REVERSE_SUBTRACT};if(i)We[em]=r.MIN,We[tm]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(We[em]=k.MIN_EXT,We[tm]=k.MAX_EXT)}const pt={[bb]:r.ZERO,[Sb]:r.ONE,[yb]:r.SRC_COLOR,[xd]:r.SRC_ALPHA,[Rb]:r.SRC_ALPHA_SATURATE,[Ab]:r.DST_COLOR,[Tb]:r.DST_ALPHA,[Eb]:r.ONE_MINUS_SRC_COLOR,[Md]:r.ONE_MINUS_SRC_ALPHA,[Cb]:r.ONE_MINUS_DST_COLOR,[wb]:r.ONE_MINUS_DST_ALPHA,[Lb]:r.CONSTANT_COLOR,[Pb]:r.ONE_MINUS_CONSTANT_COLOR,[Ib]:r.CONSTANT_ALPHA,[Db]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(k,De,ne,Le,Be,Lt,qt,Qt,dn,kt){if(k===Ra){_===!0&&(Ht(r.BLEND),_=!1);return}if(_===!1&&(ke(r.BLEND),_=!0),k!==vb){if(k!==H||kt!==z){if((R!==us||D!==us)&&(r.blendEquation(r.FUNC_ADD),R=us,D=us),kt)switch(k){case yo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.ONE,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,$=null,F=null,J=null,Te.set(0,0,0),C=0,H=k,z=kt}return}Be=Be||De,Lt=Lt||ne,qt=qt||Le,(De!==R||Be!==D)&&(r.blendEquationSeparate(We[De],We[Be]),R=De,D=Be),(ne!==N||Le!==$||Lt!==F||qt!==J)&&(r.blendFuncSeparate(pt[ne],pt[Le],pt[Lt],pt[qt]),N=ne,$=Le,F=Lt,J=qt),(Qt.equals(Te)===!1||dn!==C)&&(r.blendColor(Qt.r,Qt.g,Qt.b,dn),Te.copy(Qt),C=dn),H=k,z=!1}function _t(k,De){k.side===Yr?Ht(r.CULL_FACE):ke(r.CULL_FACE);let ne=k.side===Si;De&&(ne=!ne),vt(ne),k.blending===yo&&k.transparent===!1?rt(Ra):rt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Le=k.stencilWrite;p.setTest(Le),Le&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),U(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ke(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){we!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),we=k)}function Tt(k){k!==mb?(ke(r.CULL_FACE),k!==be&&(k===Kp?r.cullFace(r.BACK):k===gb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),be=k}function $t(k){k!==q&&(ce&&r.lineWidth(k),q=k)}function U(k,De,ne){k?(ke(r.POLYGON_OFFSET_FILL),(pe!==De||ue!==ne)&&(r.polygonOffset(De,ne),pe=De,ue=ne)):Ht(r.POLYGON_OFFSET_FILL)}function T(k){k?ke(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function le(k){k===void 0&&(k=r.TEXTURE0+xe-1),Ie!==k&&(r.activeTexture(k),Ie=k)}function de(k,De,ne){ne===void 0&&(Ie===null?ne=r.TEXTURE0+xe-1:ne=Ie);let Le=Ze[ne];Le===void 0&&(Le={type:void 0,texture:void 0},Ze[ne]=Le),(Le.type!==k||Le.texture!==De)&&(Ie!==ne&&(r.activeTexture(ne),Ie=ne),r.bindTexture(k,De||Je[k]),Le.type=k,Le.texture=De)}function Ce(){const k=Ze[Ie];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function sn(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(k){Ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function je(k){He.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),He.copy(k))}function O(k,De){let ne=x.get(De);ne===void 0&&(ne=new WeakMap,x.set(De,ne));let Le=ne.get(k);Le===void 0&&(Le=r.getUniformBlockIndex(De,k.name),ne.set(k,Le))}function ve(k,De){const Le=x.get(De).get(k);m.get(De)!==Le&&(r.uniformBlockBinding(De,Le,k.__bindingPointIndex),m.set(De,Le))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),M={},Ie=null,Ze={},b={},w=new WeakMap,E=[],g=null,_=!1,H=null,R=null,N=null,$=null,D=null,F=null,J=null,Te=new jt(0,0,0),C=0,z=!1,we=null,be=null,q=null,pe=null,ue=null,Ae.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ke,disable:Ht,bindFramebuffer:at,drawBuffers:Q,useProgram:xn,setBlending:rt,setMaterial:_t,setFlipSided:vt,setCullFace:Tt,setLineWidth:$t,setPolygonOffset:U,setScissorTest:T,activeTexture:le,bindTexture:de,unbindTexture:Ce,compressedTexImage2D:ye,compressedTexImage3D:ot,texImage2D:bt,texImage3D:tt,updateUBOMapping:O,uniformBlockBinding:ve,texStorage2D:Ue,texStorage3D:sn,texSubImage2D:et,texSubImage3D:Ne,compressedTexSubImage2D:Fe,compressedTexSubImage3D:mt,scissor:Xe,viewport:je,reset:Ke}}function Pw(r,e,t,i,s,o,u){const c=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,x=new WeakMap;let M;const b=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return w?new OffscreenCanvas(U,T):Gu("canvas")}function g(U,T,le,de){let Ce=1;const ye=$t(U);if((ye.width>de||ye.height>de)&&(Ce=de/Math.max(ye.width,ye.height)),Ce<1||T===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ot=T?zu:Math.floor,et=ot(Ce*ye.width),Ne=ot(Ce*ye.height);M===void 0&&(M=E(et,Ne));const Fe=le?E(et,Ne):M;return Fe.width=et,Fe.height=Ne,Fe.getContext("2d").drawImage(U,0,0,et,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+et+"x"+Ne+")."),Fe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function _(U){const T=$t(U);return wd(T.width)&&wd(T.height)}function H(U){return c?!1:U.wrapS!==nr||U.wrapT!==nr||U.minFilter!==Zn&&U.minFilter!==bi}function R(U,T){return U.generateMipmaps&&T&&U.minFilter!==Zn&&U.minFilter!==bi}function N(U){r.generateMipmap(U)}function $(U,T,le,de,Ce=!1){if(c===!1)return T;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ye=T;if(T===r.RED&&(le===r.FLOAT&&(ye=r.R32F),le===r.HALF_FLOAT&&(ye=r.R16F),le===r.UNSIGNED_BYTE&&(ye=r.R8)),T===r.RED_INTEGER&&(le===r.UNSIGNED_BYTE&&(ye=r.R8UI),le===r.UNSIGNED_SHORT&&(ye=r.R16UI),le===r.UNSIGNED_INT&&(ye=r.R32UI),le===r.BYTE&&(ye=r.R8I),le===r.SHORT&&(ye=r.R16I),le===r.INT&&(ye=r.R32I)),T===r.RG&&(le===r.FLOAT&&(ye=r.RG32F),le===r.HALF_FLOAT&&(ye=r.RG16F),le===r.UNSIGNED_BYTE&&(ye=r.RG8)),T===r.RG_INTEGER&&(le===r.UNSIGNED_BYTE&&(ye=r.RG8UI),le===r.UNSIGNED_SHORT&&(ye=r.RG16UI),le===r.UNSIGNED_INT&&(ye=r.RG32UI),le===r.BYTE&&(ye=r.RG8I),le===r.SHORT&&(ye=r.RG16I),le===r.INT&&(ye=r.RG32I)),T===r.RGBA){const ot=Ce?Nu:fn.getTransfer(de);le===r.FLOAT&&(ye=r.RGBA32F),le===r.HALF_FLOAT&&(ye=r.RGBA16F),le===r.UNSIGNED_BYTE&&(ye=ot===vn?r.SRGB8_ALPHA8:r.RGBA8),le===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),le===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function D(U,T,le){return R(U,le)===!0||U.isFramebufferTexture&&U.minFilter!==Zn&&U.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){return U===Zn||U===nm||U===yl?r.NEAREST:r.LINEAR}function J(U){const T=U.target;T.removeEventListener("dispose",J),C(T),T.isVideoTexture&&x.delete(T)}function Te(U){const T=U.target;T.removeEventListener("dispose",Te),we(T)}function C(U){const T=i.get(U);if(T.__webglInit===void 0)return;const le=U.source,de=b.get(le);if(de){const Ce=de[T.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&z(U),Object.keys(de).length===0&&b.delete(le)}i.remove(U)}function z(U){const T=i.get(U);r.deleteTexture(T.__webglTexture);const le=U.source,de=b.get(le);delete de[T.__cacheKey],u.memory.textures--}function we(U){const T=i.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Ce=0;Ce<T.__webglFramebuffer[de].length;Ce++)r.deleteFramebuffer(T.__webglFramebuffer[de][Ce]);else r.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)r.deleteFramebuffer(T.__webglFramebuffer[de]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const le=U.textures;for(let de=0,Ce=le.length;de<Ce;de++){const ye=i.get(le[de]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),u.memory.textures--),i.remove(le[de])}i.remove(U)}let be=0;function q(){be=0}function pe(){const U=be;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),be+=1,U}function ue(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function xe(U,T){const le=i.get(U);if(U.isVideoTexture&&vt(U),U.isRenderTargetTexture===!1&&U.version>0&&le.__version!==U.version){const de=U.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(le,U,T);return}}t.bindTexture(r.TEXTURE_2D,le.__webglTexture,r.TEXTURE0+T)}function ce(U,T){const le=i.get(U);if(U.version>0&&le.__version!==U.version){He(le,U,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,le.__webglTexture,r.TEXTURE0+T)}function Me(U,T){const le=i.get(U);if(U.version>0&&le.__version!==U.version){He(le,U,T);return}t.bindTexture(r.TEXTURE_3D,le.__webglTexture,r.TEXTURE0+T)}function Se(U,T){const le=i.get(U);if(U.version>0&&le.__version!==U.version){dt(le,U,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture,r.TEXTURE0+T)}const Ie={[yd]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[Ed]:r.MIRRORED_REPEAT},Ze={[Zn]:r.NEAREST,[nm]:r.NEAREST_MIPMAP_NEAREST,[yl]:r.NEAREST_MIPMAP_LINEAR,[bi]:r.LINEAR,[Oh]:r.LINEAR_MIPMAP_NEAREST,[hs]:r.LINEAR_MIPMAP_LINEAR},Mt={[oS]:r.NEVER,[dS]:r.ALWAYS,[lS]:r.LESS,[Qg]:r.LEQUAL,[cS]:r.EQUAL,[hS]:r.GEQUAL,[uS]:r.GREATER,[fS]:r.NOTEQUAL};function oe(U,T,le){if(T.type===br&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bi||T.magFilter===Oh||T.magFilter===yl||T.magFilter===hs||T.minFilter===bi||T.minFilter===Oh||T.minFilter===yl||T.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),le?(r.texParameteri(U,r.TEXTURE_WRAP_S,Ie[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Ie[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Ie[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Ze[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Ze[T.minFilter])):(r.texParameteri(U,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(U,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==nr||T.wrapT!==nr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,r.TEXTURE_MAG_FILTER,F(T.magFilter)),r.texParameteri(U,r.TEXTURE_MIN_FILTER,F(T.minFilter)),T.minFilter!==Zn&&T.minFilter!==bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Zn||T.minFilter!==yl&&T.minFilter!==hs||T.type===br&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===Ul&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const de=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(U,T){let le=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",J));const de=T.source;let Ce=b.get(de);Ce===void 0&&(Ce={},b.set(de,Ce));const ye=ue(T);if(ye!==U.__cacheKey){Ce[ye]===void 0&&(Ce[ye]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,le=!0),Ce[ye].usedTimes++;const ot=Ce[U.__cacheKey];ot!==void 0&&(Ce[U.__cacheKey].usedTimes--,ot.usedTimes===0&&z(T)),U.__cacheKey=ye,U.__webglTexture=Ce[ye].texture}return le}function He(U,T,le){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);const Ce=Ae(U,T),ye=T.source;t.bindTexture(de,U.__webglTexture,r.TEXTURE0+le);const ot=i.get(ye);if(ye.version!==ot.__version||Ce===!0){t.activeTexture(r.TEXTURE0+le);const et=fn.getPrimaries(fn.workingColorSpace),Ne=T.colorSpace===Aa?null:fn.getPrimaries(T.colorSpace),Fe=T.colorSpace===Aa||et===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const mt=H(T)&&_(T.image)===!1;let Ue=g(T.image,mt,!1,s.maxTextureSize);Ue=Tt(T,Ue);const sn=_(Ue)||c,bt=o.convert(T.format,T.colorSpace);let tt=o.convert(T.type),Xe=$(T.internalFormat,bt,tt,T.colorSpace,T.isVideoTexture);oe(de,T,sn);let je;const O=T.mipmaps,ve=c&&T.isVideoTexture!==!0&&Xe!==Jg,Ke=ot.__version===void 0||Ce===!0,k=ye.dataReady,De=D(T,Ue,sn);if(T.isDepthTexture)Xe=r.DEPTH_COMPONENT,c?T.type===br?Xe=r.DEPTH_COMPONENT32F:T.type===Ca?Xe=r.DEPTH_COMPONENT24:T.type===ds?Xe=r.DEPTH24_STENCIL8:Xe=r.DEPTH_COMPONENT16:T.type===br&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ps&&Xe===r.DEPTH_COMPONENT&&T.type!==Fd&&T.type!==Ca&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ca,tt=o.convert(T.type)),T.format===Ao&&Xe===r.DEPTH_COMPONENT&&(Xe=r.DEPTH_STENCIL,T.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ds,tt=o.convert(T.type))),Ke&&(ve?t.texStorage2D(r.TEXTURE_2D,1,Xe,Ue.width,Ue.height):t.texImage2D(r.TEXTURE_2D,0,Xe,Ue.width,Ue.height,0,bt,tt,null));else if(T.isDataTexture)if(O.length>0&&sn){ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,De,Xe,O[0].width,O[0].height);for(let ne=0,Le=O.length;ne<Le;ne++)je=O[ne],ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,tt,je.data):t.texImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,bt,tt,je.data);T.generateMipmaps=!1}else ve?(Ke&&t.texStorage2D(r.TEXTURE_2D,De,Xe,Ue.width,Ue.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue.width,Ue.height,bt,tt,Ue.data)):t.texImage2D(r.TEXTURE_2D,0,Xe,Ue.width,Ue.height,0,bt,tt,Ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Xe,O[0].width,O[0].height,Ue.depth);for(let ne=0,Le=O.length;ne<Le;ne++)je=O[ne],T.format!==ir?bt!==null?ve?k&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,je.width,je.height,Ue.depth,bt,je.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Xe,je.width,je.height,Ue.depth,0,je.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,je.width,je.height,Ue.depth,bt,tt,je.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Xe,je.width,je.height,Ue.depth,0,bt,tt,je.data)}else{ve&&Ke&&t.texStorage2D(r.TEXTURE_2D,De,Xe,O[0].width,O[0].height);for(let ne=0,Le=O.length;ne<Le;ne++)je=O[ne],T.format!==ir?bt!==null?ve?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,je.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,je.width,je.height,bt,tt,je.data):t.texImage2D(r.TEXTURE_2D,ne,Xe,je.width,je.height,0,bt,tt,je.data)}else if(T.isDataArrayTexture)ve?(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,Xe,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,bt,tt,Ue.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Xe,Ue.width,Ue.height,Ue.depth,0,bt,tt,Ue.data);else if(T.isData3DTexture)ve?(Ke&&t.texStorage3D(r.TEXTURE_3D,De,Xe,Ue.width,Ue.height,Ue.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,bt,tt,Ue.data)):t.texImage3D(r.TEXTURE_3D,0,Xe,Ue.width,Ue.height,Ue.depth,0,bt,tt,Ue.data);else if(T.isFramebufferTexture){if(Ke)if(ve)t.texStorage2D(r.TEXTURE_2D,De,Xe,Ue.width,Ue.height);else{let ne=Ue.width,Le=Ue.height;for(let Be=0;Be<De;Be++)t.texImage2D(r.TEXTURE_2D,Be,Xe,ne,Le,0,bt,tt,null),ne>>=1,Le>>=1}}else if(O.length>0&&sn){if(ve&&Ke){const ne=$t(O[0]);t.texStorage2D(r.TEXTURE_2D,De,Xe,ne.width,ne.height)}for(let ne=0,Le=O.length;ne<Le;ne++)je=O[ne],ve?k&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,bt,tt,je):t.texImage2D(r.TEXTURE_2D,ne,Xe,bt,tt,je);T.generateMipmaps=!1}else if(ve){if(Ke){const ne=$t(Ue);t.texStorage2D(r.TEXTURE_2D,De,Xe,ne.width,ne.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,tt,Ue)}else t.texImage2D(r.TEXTURE_2D,0,Xe,bt,tt,Ue);R(T,sn)&&N(de),ot.__version=ye.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function dt(U,T,le){if(T.image.length!==6)return;const de=Ae(U,T),Ce=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+le);const ye=i.get(Ce);if(Ce.version!==ye.__version||de===!0){t.activeTexture(r.TEXTURE0+le);const ot=fn.getPrimaries(fn.workingColorSpace),et=T.colorSpace===Aa?null:fn.getPrimaries(T.colorSpace),Ne=T.colorSpace===Aa||ot===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,mt=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let ne=0;ne<6;ne++)!Fe&&!mt?Ue[ne]=g(T.image[ne],!1,!0,s.maxCubemapSize):Ue[ne]=mt?T.image[ne].image:T.image[ne],Ue[ne]=Tt(T,Ue[ne]);const sn=Ue[0],bt=_(sn)||c,tt=o.convert(T.format,T.colorSpace),Xe=o.convert(T.type),je=$(T.internalFormat,tt,Xe,T.colorSpace),O=c&&T.isVideoTexture!==!0,ve=ye.__version===void 0||de===!0,Ke=Ce.dataReady;let k=D(T,sn,bt);oe(r.TEXTURE_CUBE_MAP,T,bt);let De;if(Fe){O&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,k,je,sn.width,sn.height);for(let ne=0;ne<6;ne++){De=Ue[ne].mipmaps;for(let Le=0;Le<De.length;Le++){const Be=De[Le];T.format!==ir?tt!==null?O?Ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Be.width,Be.height,tt,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Be.width,Be.height,tt,Xe,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,je,Be.width,Be.height,0,tt,Xe,Be.data)}}}else{if(De=T.mipmaps,O&&ve){De.length>0&&k++;const ne=$t(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,k,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(mt){O?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue[ne].width,Ue[ne].height,tt,Xe,Ue[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Ue[ne].width,Ue[ne].height,0,tt,Xe,Ue[ne].data);for(let Le=0;Le<De.length;Le++){const Lt=De[Le].image[ne].image;O?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Lt.width,Lt.height,tt,Xe,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,je,Lt.width,Lt.height,0,tt,Xe,Lt.data)}}else{O?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,tt,Xe,Ue[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,tt,Xe,Ue[ne]);for(let Le=0;Le<De.length;Le++){const Be=De[Le];O?Ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,tt,Xe,Be.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,je,tt,Xe,Be.image[ne])}}}R(T,bt)&&N(r.TEXTURE_CUBE_MAP),ye.__version=Ce.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Je(U,T,le,de,Ce,ye){const ot=o.convert(le.format,le.colorSpace),et=o.convert(le.type),Ne=$(le.internalFormat,ot,et,le.colorSpace);if(!i.get(T).__hasExternalTextures){const mt=Math.max(1,T.width>>ye),Ue=Math.max(1,T.height>>ye);Ce===r.TEXTURE_3D||Ce===r.TEXTURE_2D_ARRAY?t.texImage3D(Ce,ye,Ne,mt,Ue,T.depth,0,ot,et,null):t.texImage2D(Ce,ye,Ne,mt,Ue,0,ot,et,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,Ce,i.get(le).__webglTexture,0,rt(T)):(Ce===r.TEXTURE_2D||Ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,Ce,i.get(le).__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(U,T,le){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer&&!T.stencilBuffer){let de=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(le||_t(T)){const Ce=T.depthTexture;Ce&&Ce.isDepthTexture&&(Ce.type===br?de=r.DEPTH_COMPONENT32F:Ce.type===Ca&&(de=r.DEPTH_COMPONENT24));const ye=rt(T);_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,de,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,de,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,U)}else if(T.depthBuffer&&T.stencilBuffer){const de=rt(T);le&&_t(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,r.DEPTH24_STENCIL8,T.width,T.height):_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,U)}else{const de=T.textures;for(let Ce=0;Ce<de.length;Ce++){const ye=de[Ce],ot=o.convert(ye.format,ye.colorSpace),et=o.convert(ye.type),Ne=$(ye.internalFormat,ot,et,ye.colorSpace),Fe=rt(T);le&&_t(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ne,T.width,T.height):_t(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,Ne,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),xe(T.depthTexture,0);const de=i.get(T.depthTexture).__webglTexture,Ce=rt(T);if(T.depthTexture.format===ps)_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(T.depthTexture.format===Ao)_t(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function at(U){const T=i.get(U),le=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,U)}else if(le){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]=r.createRenderbuffer(),ke(T.__webglDepthbuffer[de],U,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),ke(T.__webglDepthbuffer,U,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(U,T,le){const de=i.get(U);T!==void 0&&Je(de.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),le!==void 0&&at(U)}function xn(U){const T=U.texture,le=i.get(U),de=i.get(T);U.addEventListener("dispose",Te);const Ce=U.textures,ye=U.isWebGLCubeRenderTarget===!0,ot=Ce.length>1,et=_(U)||c;if(ot||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,u.memory.textures++),ye){le.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(c&&T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer[Ne]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)le.__webglFramebuffer[Ne][Fe]=r.createFramebuffer()}else le.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)le.__webglFramebuffer[Ne]=r.createFramebuffer()}else le.__webglFramebuffer=r.createFramebuffer();if(ot)if(s.drawBuffers)for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const mt=i.get(Ce[Ne]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&U.samples>0&&_t(U)===!1){le.__webglMultisampledFramebuffer=r.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ce.length;Ne++){const Fe=Ce[Ne];le.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,le.__webglColorRenderbuffer[Ne]);const mt=o.convert(Fe.format,Fe.colorSpace),Ue=o.convert(Fe.type),sn=$(Fe.internalFormat,mt,Ue,Fe.colorSpace,U.isXRRenderTarget===!0),bt=rt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,sn,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(le.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(le.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ye){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T,et);for(let Ne=0;Ne<6;Ne++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Je(le.__webglFramebuffer[Ne][Fe],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Fe);else Je(le.__webglFramebuffer[Ne],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);R(T,et)&&N(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ot){for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const mt=Ce[Ne],Ue=i.get(mt);t.bindTexture(r.TEXTURE_2D,Ue.__webglTexture),oe(r.TEXTURE_2D,mt,et),Je(le.__webglFramebuffer,U,mt,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,0),R(mt,et)&&N(r.TEXTURE_2D)}t.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(c?Ne=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,de.__webglTexture),oe(Ne,T,et),c&&T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Je(le.__webglFramebuffer[Fe],U,T,r.COLOR_ATTACHMENT0,Ne,Fe);else Je(le.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Ne,0);R(T,et)&&N(Ne),t.unbindTexture()}U.depthBuffer&&at(U)}function We(U){const T=_(U)||c,le=U.textures;for(let de=0,Ce=le.length;de<Ce;de++){const ye=le[de];if(R(ye,T)){const ot=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,et=i.get(ye).__webglTexture;t.bindTexture(ot,et),N(ot),t.unbindTexture()}}}function pt(U){if(c&&U.samples>0&&_t(U)===!1){const T=U.textures,le=U.width,de=U.height;let Ce=r.COLOR_BUFFER_BIT;const ye=[],ot=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=i.get(U),Ne=T.length>1;if(Ne)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){ye.push(r.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&ye.push(ot);const mt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(mt===!1&&(U.depthBuffer&&(Ce|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&(Ce|=r.STENCIL_BUFFER_BIT)),Ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,et.__webglColorRenderbuffer[Fe]),mt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ot]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ot])),Ne){const Ue=i.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ue,0)}r.blitFramebuffer(0,0,le,de,0,0,le,de,Ce,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,et.__webglColorRenderbuffer[Fe]);const mt=i.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,mt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function rt(U){return Math.min(s.maxSamples,U.samples)}function _t(U){const T=i.get(U);return c&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(U){const T=u.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Tt(U,T){const le=U.colorSpace,de=U.format,Ce=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Td||le!==Na&&le!==Aa&&(fn.getTransfer(le)===vn?c===!1?e.has("EXT_sRGB")===!0&&de===ir?(U.format=Td,U.minFilter=bi,U.generateMipmaps=!1):T=t_.sRGBToLinear(T):(de!==ir||Ce!==Pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",le)),T}function $t(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=q,this.setTexture2D=xe,this.setTexture2DArray=ce,this.setTexture3D=Me,this.setTextureCube=Se,this.rebindTextures=Q,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=_t}function Iw(r,e,t){const i=t.isWebGL2;function s(o,u=Aa){let c;const f=fn.getTransfer(u);if(o===Pa)return r.UNSIGNED_BYTE;if(o===$g)return r.UNSIGNED_SHORT_4_4_4_4;if(o===qg)return r.UNSIGNED_SHORT_5_5_5_1;if(o===Kb)return r.BYTE;if(o===jb)return r.SHORT;if(o===Fd)return r.UNSIGNED_SHORT;if(o===Xg)return r.INT;if(o===Ca)return r.UNSIGNED_INT;if(o===br)return r.FLOAT;if(o===Ul)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Jb)return r.ALPHA;if(o===ir)return r.RGBA;if(o===Qb)return r.LUMINANCE;if(o===eS)return r.LUMINANCE_ALPHA;if(o===ps)return r.DEPTH_COMPONENT;if(o===Ao)return r.DEPTH_STENCIL;if(o===Td)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===Yg)return r.RED;if(o===Zg)return r.RED_INTEGER;if(o===tS)return r.RG;if(o===Kg)return r.RG_INTEGER;if(o===jg)return r.RGBA_INTEGER;if(o===Bh||o===zh||o===Gh||o===Hh)if(f===vn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Bh)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Gh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Bh)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zh)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Gh)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hh)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===im||o===rm||o===am||o===sm)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===im)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===rm)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===am)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===sm)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Jg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===om||o===lm)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===om)return f===vn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===lm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===cm||o===um||o===fm||o===hm||o===dm||o===pm||o===mm||o===gm||o===_m||o===vm||o===xm||o===Mm||o===bm||o===Sm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===cm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===um)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===hm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===dm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===pm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===mm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===gm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_m)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===vm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===xm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Mm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Sm)return f===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===kh||o===ym||o===Em)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===kh)return f===vn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===ym)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Em)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===nS||o===Tm||o===wm||o===Am)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===kh)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Tm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===wm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Am)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ds?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[o]!==void 0?r[o]:null}return{convert:s}}class Dw extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cu extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uw={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,i),_=this._getHandJoint(p,E);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const m=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],M=m.position.distanceTo(x.position),b=.02,w=.005;p.inputState.pinching&&M>b+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&M<=b-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Uw)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ui,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new Ua({extensions:{fragDepth:!0},vertexShader:Nw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new rr(new Yu(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bw extends gs{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",f=1,p=null,m=null,x=null,M=null,b=null,w=null;const E=new Ow,g=t.getContextAttributes();let _=null,H=null;const R=[],N=[],$=new Rt;let D=null;const F=new Di;F.layers.enable(1),F.viewport=new Kn;const J=new Di;J.layers.enable(2),J.viewport=new Kn;const Te=[F,J],C=new Dw;C.layers.enable(1),C.layers.enable(2);let z=null,we=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Ae=R[oe];return Ae===void 0&&(Ae=new dd,R[oe]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(oe){let Ae=R[oe];return Ae===void 0&&(Ae=new dd,R[oe]=Ae),Ae.getGripSpace()},this.getHand=function(oe){let Ae=R[oe];return Ae===void 0&&(Ae=new dd,R[oe]=Ae),Ae.getHandSpace()};function be(oe){const Ae=N.indexOf(oe.inputSource);if(Ae===-1)return;const He=R[Ae];He!==void 0&&(He.update(oe.inputSource,oe.frame,p||u),He.dispatchEvent({type:oe.type,data:oe.inputSource}))}function q(){s.removeEventListener("select",be),s.removeEventListener("selectstart",be),s.removeEventListener("selectend",be),s.removeEventListener("squeeze",be),s.removeEventListener("squeezestart",be),s.removeEventListener("squeezeend",be),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",pe);for(let oe=0;oe<R.length;oe++){const Ae=N[oe];Ae!==null&&(N[oe]=null,R[oe].disconnect(Ae))}z=null,we=null,E.reset(),e.setRenderTarget(_),b=null,M=null,x=null,s=null,H=null,Mt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize($.width,$.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return M!==null?M:b},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",be),s.addEventListener("selectstart",be),s.addEventListener("selectend",be),s.addEventListener("squeeze",be),s.addEventListener("squeezestart",be),s.addEventListener("squeezeend",be),s.addEventListener("end",q),s.addEventListener("inputsourceschange",pe),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize($),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Ae={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};b=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),H=new ms(b.framebufferWidth,b.framebufferHeight,{format:ir,type:Pa,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Ae=null,He=null,dt=null;g.depth&&(dt=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=g.stencil?Ao:ps,He=g.stencil?ds:Ca);const Je={colorFormat:t.RGBA8,depthFormat:dt,scaleFactor:o};x=new XRWebGLBinding(s,t),M=x.createProjectionLayer(Je),s.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),H=new ms(M.textureWidth,M.textureHeight,{format:ir,type:Pa,depthTexture:new p_(M.textureWidth,M.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ke=e.properties.get(H);ke.__ignoreDepthValues=M.ignoreDepthValues}H.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await s.requestReferenceSpace(c),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function pe(oe){for(let Ae=0;Ae<oe.removed.length;Ae++){const He=oe.removed[Ae],dt=N.indexOf(He);dt>=0&&(N[dt]=null,R[dt].disconnect(He))}for(let Ae=0;Ae<oe.added.length;Ae++){const He=oe.added[Ae];let dt=N.indexOf(He);if(dt===-1){for(let ke=0;ke<R.length;ke++)if(ke>=N.length){N.push(He),dt=ke;break}else if(N[ke]===null){N[ke]=He,dt=ke;break}if(dt===-1)break}const Je=R[dt];Je&&Je.connect(He)}}const ue=new te,xe=new te;function ce(oe,Ae,He){ue.setFromMatrixPosition(Ae.matrixWorld),xe.setFromMatrixPosition(He.matrixWorld);const dt=ue.distanceTo(xe),Je=Ae.projectionMatrix.elements,ke=He.projectionMatrix.elements,Ht=Je[14]/(Je[10]-1),at=Je[14]/(Je[10]+1),Q=(Je[9]+1)/Je[5],xn=(Je[9]-1)/Je[5],We=(Je[8]-1)/Je[0],pt=(ke[8]+1)/ke[0],rt=Ht*We,_t=Ht*pt,vt=dt/(-We+pt),Tt=vt*-We;Ae.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Tt),oe.translateZ(vt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const $t=Ht+vt,U=at+vt,T=rt-Tt,le=_t+(dt-Tt),de=Q*at/U*$t,Ce=xn*at/U*$t;oe.projectionMatrix.makePerspective(T,le,de,Ce,$t,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function Me(oe,Ae){Ae===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Ae.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;E.texture!==null&&(oe.near=E.depthNear,oe.far=E.depthFar),C.near=J.near=F.near=oe.near,C.far=J.far=F.far=oe.far,(z!==C.near||we!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,we=C.far,F.near=z,F.far=we,J.near=z,J.far=we,F.updateProjectionMatrix(),J.updateProjectionMatrix(),oe.updateProjectionMatrix());const Ae=oe.parent,He=C.cameras;Me(C,Ae);for(let dt=0;dt<He.length;dt++)Me(He[dt],Ae);He.length===2?ce(C,F,J):C.projectionMatrix.copy(F.projectionMatrix),Se(oe,C,Ae)};function Se(oe,Ae,He){He===null?oe.matrix.copy(Ae.matrixWorld):(oe.matrix.copy(He.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Ae.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Ae.projectionMatrix),oe.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Nl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(M===null&&b===null))return f},this.setFoveation=function(oe){f=oe,M!==null&&(M.fixedFoveation=oe),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=oe)},this.hasDepthSensing=function(){return E.texture!==null};let Ie=null;function Ze(oe,Ae){if(m=Ae.getViewerPose(p||u),w=Ae,m!==null){const He=m.views;b!==null&&(e.setRenderTargetFramebuffer(H,b.framebuffer),e.setRenderTarget(H));let dt=!1;He.length!==C.cameras.length&&(C.cameras.length=0,dt=!0);for(let ke=0;ke<He.length;ke++){const Ht=He[ke];let at=null;if(b!==null)at=b.getViewport(Ht);else{const xn=x.getViewSubImage(M,Ht);at=xn.viewport,ke===0&&(e.setRenderTargetTextures(H,xn.colorTexture,M.ignoreDepthValues?void 0:xn.depthStencilTexture),e.setRenderTarget(H))}let Q=Te[ke];Q===void 0&&(Q=new Di,Q.layers.enable(ke),Q.viewport=new Kn,Te[ke]=Q),Q.matrix.fromArray(Ht.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ht.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(at.x,at.y,at.width,at.height),ke===0&&(C.matrix.copy(Q.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),dt===!0&&C.cameras.push(Q)}const Je=s.enabledFeatures;if(Je&&Je.includes("depth-sensing")){const ke=x.getDepthInformation(He[0]);ke&&ke.isValid&&ke.texture&&E.init(e,ke,s.renderState)}}for(let He=0;He<R.length;He++){const dt=N[He],Je=R[He];dt!==null&&Je!==void 0&&Je.update(dt,Ae,p||u)}E.render(e,C),Ie&&Ie(oe,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),w=null}const Mt=new d_;Mt.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){Ie=oe},this.dispose=function(){}}}const os=new Kr,zw=new Sn;function Gw(r,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,c_(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,H,R,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(g,_):_.isMeshToonMaterial?(o(g,_),x(g,_)):_.isMeshPhongMaterial?(o(g,_),m(g,_)):_.isMeshStandardMaterial?(o(g,_),M(g,_),_.isMeshPhysicalMaterial&&b(g,_,N)):_.isMeshMatcapMaterial?(o(g,_),w(g,_)):_.isMeshDepthMaterial?o(g,_):_.isMeshDistanceMaterial?(o(g,_),E(g,_)):_.isMeshNormalMaterial?o(g,_):_.isLineBasicMaterial?(u(g,_),_.isLineDashedMaterial&&c(g,_)):_.isPointsMaterial?f(g,_,H,R):_.isSpriteMaterial?p(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Si&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Si&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const H=e.get(_),R=H.envMap,N=H.envMapRotation;if(R&&(g.envMap.value=R,os.copy(N),os.x*=-1,os.y*=-1,os.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(os)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const $=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*$,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function c(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function f(g,_,H,R){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*H,g.scale.value=R*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function p(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function x(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function M(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function b(g,_,H){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Si&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=H.texture,g.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function E(g,_){const H=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(H.matrixWorld),g.nearDistance.value=H.shadow.camera.near,g.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hw(r,e,t,i){let s={},o={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(H,R){const N=R.program;i.uniformBlockBinding(H,N)}function p(H,R){let N=s[H.id];N===void 0&&(w(H),N=m(H),s[H.id]=N,H.addEventListener("dispose",g));const $=R.program;i.updateUBOMapping(H,$);const D=e.render.frame;o[H.id]!==D&&(M(H),o[H.id]=D)}function m(H){const R=x();H.__bindingPointIndex=R;const N=r.createBuffer(),$=H.__size,D=H.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,$,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,N),N}function x(){for(let H=0;H<c;H++)if(u.indexOf(H)===-1)return u.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(H){const R=s[H.id],N=H.uniforms,$=H.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let D=0,F=N.length;D<F;D++){const J=Array.isArray(N[D])?N[D]:[N[D]];for(let Te=0,C=J.length;Te<C;Te++){const z=J[Te];if(b(z,D,Te,$)===!0){const we=z.__offset,be=Array.isArray(z.value)?z.value:[z.value];let q=0;for(let pe=0;pe<be.length;pe++){const ue=be[pe],xe=E(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,r.bufferSubData(r.UNIFORM_BUFFER,we+q,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,q),q+=xe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,we,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(H,R,N,$){const D=H.value,F=R+"_"+N;if($[F]===void 0)return typeof D=="number"||typeof D=="boolean"?$[F]=D:$[F]=D.clone(),!0;{const J=$[F];if(typeof D=="number"||typeof D=="boolean"){if(J!==D)return $[F]=D,!0}else if(J.equals(D)===!1)return J.copy(D),!0}return!1}function w(H){const R=H.uniforms;let N=0;const $=16;for(let F=0,J=R.length;F<J;F++){const Te=Array.isArray(R[F])?R[F]:[R[F]];for(let C=0,z=Te.length;C<z;C++){const we=Te[C],be=Array.isArray(we.value)?we.value:[we.value];for(let q=0,pe=be.length;q<pe;q++){const ue=be[q],xe=E(ue),ce=N%$;ce!==0&&$-ce<xe.boundary&&(N+=$-ce),we.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),we.__offset=N,N+=xe.storage}}}const D=N%$;return D>0&&(N+=$-D),H.__size=N,H.__cache={},this}function E(H){const R={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(R.boundary=4,R.storage=4):H.isVector2?(R.boundary=8,R.storage=8):H.isVector3||H.isColor?(R.boundary=16,R.storage=12):H.isVector4?(R.boundary=16,R.storage=16):H.isMatrix3?(R.boundary=48,R.storage=48):H.isMatrix4?(R.boundary=64,R.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),R}function g(H){const R=H.target;R.removeEventListener("dispose",g);const N=u.indexOf(R.__bindingPointIndex);u.splice(N,1),r.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function _(){for(const H in s)r.deleteBuffer(s[H]);u=[],s={},o={}}return{bind:f,update:p,dispose:_}}class Hd{constructor(e={}){const{canvas:t=RS(),context:i=null,depth:s=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let M;i!==null?M=i.getContextAttributes().alpha:M=u;const b=new Uint32Array(4),w=new Int32Array(4);let E=null,g=null;const _=[],H=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xr,this._useLegacyLights=!1,this.toneMapping=La,this.toneMappingExposure=1;const R=this;let N=!1,$=0,D=0,F=null,J=-1,Te=null;const C=new Kn,z=new Kn;let we=null;const be=new jt(0);let q=0,pe=t.width,ue=t.height,xe=1,ce=null,Me=null;const Se=new Kn(0,0,pe,ue),Ie=new Kn(0,0,pe,ue);let Ze=!1;const Mt=new h_;let oe=!1,Ae=!1,He=null;const dt=new Sn,Je=new Rt,ke=new te,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return F===null?xe:1}let Q=i;function xn(I,j){for(let ae=0;ae<I.length;ae++){const se=I[ae],ie=t.getContext(se,j);if(ie!==null)return ie}return null}try{const I={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",De,!1),Q===null){const j=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&j.shift(),Q=xn(j,I),Q===null)throw xn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let We,pt,rt,_t,vt,Tt,$t,U,T,le,de,Ce,ye,ot,et,Ne,Fe,mt,Ue,sn,bt,tt,Xe,je;function O(){We=new q1(Q),pt=new G1(Q,We,e),We.init(pt),tt=new Iw(Q,We,pt),rt=new Lw(Q,We,pt),_t=new K1(Q),vt=new gw,Tt=new Pw(Q,We,rt,vt,pt,tt,_t),$t=new k1(R),U=new $1(R),T=new ty(Q,pt),Xe=new B1(Q,We,T,pt),le=new Y1(Q,T,_t,Xe),de=new eT(Q,le,T,_t),Ue=new Q1(Q,pt,Tt),Ne=new H1(vt),Ce=new mw(R,$t,U,We,pt,Xe,Ne),ye=new Gw(R,vt),ot=new vw,et=new Ew(We,pt),mt=new O1(R,$t,U,rt,de,M,f),Fe=new Rw(R,de,pt),je=new Hw(Q,_t,pt,rt),sn=new z1(Q,We,_t,pt),bt=new Z1(Q,We,_t,pt),_t.programs=Ce.programs,R.capabilities=pt,R.extensions=We,R.properties=vt,R.renderLists=ot,R.shadowMap=Fe,R.state=rt,R.info=_t}O();const ve=new Bw(R,Q);this.xr=ve,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const I=We.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=We.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(I){I!==void 0&&(xe=I,this.setSize(pe,ue,!1))},this.getSize=function(I){return I.set(pe,ue)},this.setSize=function(I,j,ae=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=I,ue=j,t.width=Math.floor(I*xe),t.height=Math.floor(j*xe),ae===!0&&(t.style.width=I+"px",t.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(pe*xe,ue*xe).floor()},this.setDrawingBufferSize=function(I,j,ae){pe=I,ue=j,xe=ae,t.width=Math.floor(I*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(Se)},this.setViewport=function(I,j,ae,se){I.isVector4?Se.set(I.x,I.y,I.z,I.w):Se.set(I,j,ae,se),rt.viewport(C.copy(Se).multiplyScalar(xe).round())},this.getScissor=function(I){return I.copy(Ie)},this.setScissor=function(I,j,ae,se){I.isVector4?Ie.set(I.x,I.y,I.z,I.w):Ie.set(I,j,ae,se),rt.scissor(z.copy(Ie).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(I){rt.setScissorTest(Ze=I)},this.setOpaqueSort=function(I){ce=I},this.setTransparentSort=function(I){Me=I},this.getClearColor=function(I){return I.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(I=!0,j=!0,ae=!0){let se=0;if(I){let ie=!1;if(F!==null){const Ve=F.texture.format;ie=Ve===jg||Ve===Kg||Ve===Zg}if(ie){const Ve=F.texture.type,Qe=Ve===Pa||Ve===Ca||Ve===Fd||Ve===ds||Ve===$g||Ve===qg,st=mt.getClearColor(),lt=mt.getClearAlpha(),wt=st.r,St=st.g,Et=st.b;Qe?(b[0]=wt,b[1]=St,b[2]=Et,b[3]=lt,Q.clearBufferuiv(Q.COLOR,0,b)):(w[0]=wt,w[1]=St,w[2]=Et,w[3]=lt,Q.clearBufferiv(Q.COLOR,0,w))}else se|=Q.COLOR_BUFFER_BIT}j&&(se|=Q.DEPTH_BUFFER_BIT),ae&&(se|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ot.dispose(),et.dispose(),vt.dispose(),$t.dispose(),U.dispose(),de.dispose(),Xe.dispose(),je.dispose(),Ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",dn),ve.removeEventListener("sessionend",kt),He&&(He.dispose(),He=null),en.stop()};function Ke(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const I=_t.autoReset,j=Fe.enabled,ae=Fe.autoUpdate,se=Fe.needsUpdate,ie=Fe.type;O(),_t.autoReset=I,Fe.enabled=j,Fe.autoUpdate=ae,Fe.needsUpdate=se,Fe.type=ie}function De(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ne(I){const j=I.target;j.removeEventListener("dispose",ne),Le(j)}function Le(I){Be(I),vt.remove(I)}function Be(I){const j=vt.get(I).programs;j!==void 0&&(j.forEach(function(ae){Ce.releaseProgram(ae)}),I.isShaderMaterial&&Ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,ae,se,ie,Ve){j===null&&(j=Ht);const Qe=ie.isMesh&&ie.matrixWorld.determinant()<0,st=Do(I,j,ae,se,ie);rt.setMaterial(se,Qe);let lt=ae.index,wt=1;if(se.wireframe===!0){if(lt=le.getWireframeAttribute(ae),lt===void 0)return;wt=2}const St=ae.drawRange,Et=ae.attributes.position;let pn=St.start*wt,Hn=(St.start+St.count)*wt;Ve!==null&&(pn=Math.max(pn,Ve.start*wt),Hn=Math.min(Hn,(Ve.start+Ve.count)*wt)),lt!==null?(pn=Math.max(pn,0),Hn=Math.min(Hn,lt.count)):Et!=null&&(pn=Math.max(pn,0),Hn=Math.min(Hn,Et.count));const _n=Hn-pn;if(_n<0||_n===1/0)return;Xe.setup(ie,se,st,ae,lt);let kn,on=sn;if(lt!==null&&(kn=T.get(lt),on=bt,on.setIndex(kn)),ie.isMesh)se.wireframe===!0?(rt.setLineWidth(se.wireframeLinewidth*at()),on.setMode(Q.LINES)):on.setMode(Q.TRIANGLES);else if(ie.isLine){let gt=se.linewidth;gt===void 0&&(gt=1),rt.setLineWidth(gt*at()),ie.isLineSegments?on.setMode(Q.LINES):ie.isLineLoop?on.setMode(Q.LINE_LOOP):on.setMode(Q.LINE_STRIP)}else ie.isPoints?on.setMode(Q.POINTS):ie.isSprite&&on.setMode(Q.TRIANGLES);if(ie.isBatchedMesh)on.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)on.renderInstances(pn,_n,ie.count);else if(ae.isInstancedBufferGeometry){const gt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ba=Math.min(ae.instanceCount,gt);on.renderInstances(pn,_n,Ba)}else on.render(pn,_n)};function Lt(I,j,ae){I.transparent===!0&&I.side===Yr&&I.forceSinglePass===!1?(I.side=Si,I.needsUpdate=!0,Vi(I,j,ae),I.side=Ia,I.needsUpdate=!0,Vi(I,j,ae),I.side=Yr):Vi(I,j,ae)}this.compile=function(I,j,ae=null){ae===null&&(ae=I),g=et.get(ae),g.init(),H.push(g),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),I!==ae&&I.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),g.setupLights(R._useLegacyLights);const se=new Set;return I.traverse(function(ie){const Ve=ie.material;if(Ve)if(Array.isArray(Ve))for(let Qe=0;Qe<Ve.length;Qe++){const st=Ve[Qe];Lt(st,ae,ie),se.add(st)}else Lt(Ve,ae,ie),se.add(Ve)}),H.pop(),g=null,se},this.compileAsync=function(I,j,ae=null){const se=this.compile(I,j,ae);return new Promise(ie=>{function Ve(){if(se.forEach(function(Qe){vt.get(Qe).currentProgram.isReady()&&se.delete(Qe)}),se.size===0){ie(I);return}setTimeout(Ve,10)}We.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let qt=null;function Qt(I){qt&&qt(I)}function dn(){en.stop()}function kt(){en.start()}const en=new d_;en.setAnimationLoop(Qt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(I){qt=I,ve.setAnimationLoop(I),I===null?en.stop():en.start()},ve.addEventListener("sessionstart",dn),ve.addEventListener("sessionend",kt),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(j),j=ve.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,j,F),g=et.get(I,H.length),g.init(),H.push(g),dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(dt),Ae=this.localClippingEnabled,oe=Ne.init(this.clippingPlanes,Ae),E=ot.get(I,_.length),E.init(),_.push(E),An(I,j,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(ce,Me),this.info.render.frame++,oe===!0&&Ne.beginShadows();const ae=g.state.shadowsArray;if(Fe.render(ae,I,j),oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1)&&mt.render(E,I),g.setupLights(R._useLegacyLights),j.isArrayCamera){const se=j.cameras;for(let ie=0,Ve=se.length;ie<Ve;ie++){const Qe=se[ie];hi(E,I,Qe,Qe.viewport)}}else hi(E,I,j);F!==null&&(Tt.updateMultisampleRenderTarget(F),Tt.updateRenderTargetMipmap(F)),I.isScene===!0&&I.onAfterRender(R,I,j),Xe.resetDefaultState(),J=-1,Te=null,H.pop(),H.length>0?g=H[H.length-1]:g=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function An(I,j,ae,se){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Mt.intersectsSprite(I)){se&&ke.setFromMatrixPosition(I.matrixWorld).applyMatrix4(dt);const Qe=de.update(I),st=I.material;st.visible&&E.push(I,Qe,st,ae,ke.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Mt.intersectsObject(I))){const Qe=de.update(I),st=I.material;if(se&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ke.copy(I.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),ke.copy(Qe.boundingSphere.center)),ke.applyMatrix4(I.matrixWorld).applyMatrix4(dt)),Array.isArray(st)){const lt=Qe.groups;for(let wt=0,St=lt.length;wt<St;wt++){const Et=lt[wt],pn=st[Et.materialIndex];pn&&pn.visible&&E.push(I,Qe,pn,ae,ke.z,Et)}}else st.visible&&E.push(I,Qe,st,ae,ke.z,null)}}const Ve=I.children;for(let Qe=0,st=Ve.length;Qe<st;Qe++)An(Ve[Qe],j,ae,se)}function hi(I,j,ae,se){const ie=I.opaque,Ve=I.transmissive,Qe=I.transparent;g.setupLightsView(ae),oe===!0&&Ne.setGlobalState(R.clippingPlanes,ae),Ve.length>0&&jr(ie,Ve,j,ae),se&&rt.viewport(C.copy(se)),ie.length>0&&Jr(ie,j,ae),Ve.length>0&&Jr(Ve,j,ae),Qe.length>0&&Jr(Qe,j,ae),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function jr(I,j,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ve=pt.isWebGL2;He===null&&(He=new ms(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?Ul:Pa,minFilter:hs,samples:Ve?4:0})),R.getDrawingBufferSize(Je),Ve?He.setSize(Je.x,Je.y):He.setSize(zu(Je.x),zu(Je.y));const Qe=R.getRenderTarget();R.setRenderTarget(He),R.getClearColor(be),q=R.getClearAlpha(),q<1&&R.setClearColor(16777215,.5),R.clear();const st=R.toneMapping;R.toneMapping=La,Jr(I,ae,se),Tt.updateMultisampleRenderTarget(He),Tt.updateRenderTargetMipmap(He);let lt=!1;for(let wt=0,St=j.length;wt<St;wt++){const Et=j[wt],pn=Et.object,Hn=Et.geometry,_n=Et.material,kn=Et.group;if(_n.side===Yr&&pn.layers.test(se.layers)){const on=_n.side;_n.side=Si,_n.needsUpdate=!0,vs(pn,ae,se,Hn,_n,kn),_n.side=on,_n.needsUpdate=!0,lt=!0}}lt===!0&&(Tt.updateMultisampleRenderTarget(He),Tt.updateRenderTargetMipmap(He)),R.setRenderTarget(Qe),R.setClearColor(be,q),R.toneMapping=st}function Jr(I,j,ae){const se=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ve=I.length;ie<Ve;ie++){const Qe=I[ie],st=Qe.object,lt=Qe.geometry,wt=se===null?Qe.material:se,St=Qe.group;st.layers.test(ae.layers)&&vs(st,j,ae,lt,wt,St)}}function vs(I,j,ae,se,ie,Ve){I.onBeforeRender(R,j,ae,se,ie,Ve),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ie.onBeforeRender(R,j,ae,se,I,Ve),ie.transparent===!0&&ie.side===Yr&&ie.forceSinglePass===!1?(ie.side=Si,ie.needsUpdate=!0,R.renderBufferDirect(ae,j,se,ie,I,Ve),ie.side=Ia,ie.needsUpdate=!0,R.renderBufferDirect(ae,j,se,ie,I,Ve),ie.side=Yr):R.renderBufferDirect(ae,j,se,ie,I,Ve),I.onAfterRender(R,j,ae,se,ie,Ve)}function Vi(I,j,ae){j.isScene!==!0&&(j=Ht);const se=vt.get(I),ie=g.state.lights,Ve=g.state.shadowsArray,Qe=ie.state.version,st=Ce.getParameters(I,ie.state,Ve,j,ae),lt=Ce.getProgramCacheKey(st);let wt=se.programs;se.environment=I.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(I.isMeshStandardMaterial?U:$t).get(I.envMap||se.environment),se.envMapRotation=se.environment!==null&&I.envMap===null?j.environmentRotation:I.envMapRotation,wt===void 0&&(I.addEventListener("dispose",ne),wt=new Map,se.programs=wt);let St=wt.get(lt);if(St!==void 0){if(se.currentProgram===St&&se.lightsStateVersion===Qe)return Oa(I,st),St}else st.uniforms=Ce.getUniforms(I),I.onBuild(ae,st,R),I.onBeforeCompile(st,R),St=Ce.acquireProgram(st,lt),wt.set(lt,St),se.uniforms=st.uniforms;const Et=se.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Et.clippingPlanes=Ne.uniform),Oa(I,st),se.needsLights=Ms(I),se.lightsStateVersion=Qe,se.needsLights&&(Et.ambientLightColor.value=ie.state.ambient,Et.lightProbe.value=ie.state.probe,Et.directionalLights.value=ie.state.directional,Et.directionalLightShadows.value=ie.state.directionalShadow,Et.spotLights.value=ie.state.spot,Et.spotLightShadows.value=ie.state.spotShadow,Et.rectAreaLights.value=ie.state.rectArea,Et.ltc_1.value=ie.state.rectAreaLTC1,Et.ltc_2.value=ie.state.rectAreaLTC2,Et.pointLights.value=ie.state.point,Et.pointLightShadows.value=ie.state.pointShadow,Et.hemisphereLights.value=ie.state.hemi,Et.directionalShadowMap.value=ie.state.directionalShadowMap,Et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Et.spotShadowMap.value=ie.state.spotShadowMap,Et.spotLightMatrix.value=ie.state.spotLightMatrix,Et.spotLightMap.value=ie.state.spotLightMap,Et.pointShadowMap.value=ie.state.pointShadowMap,Et.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=St,se.uniformsList=null,St}function xs(I){if(I.uniformsList===null){const j=I.currentProgram.getUniforms();I.uniformsList=Iu.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function Oa(I,j){const ae=vt.get(I);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function Do(I,j,ae,se,ie){j.isScene!==!0&&(j=Ht),Tt.resetTextureUnits();const Ve=j.fog,Qe=se.isMeshStandardMaterial?j.environment:null,st=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Na,lt=(se.isMeshStandardMaterial?U:$t).get(se.envMap||Qe),wt=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,St=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Et=!!ae.morphAttributes.position,pn=!!ae.morphAttributes.normal,Hn=!!ae.morphAttributes.color;let _n=La;se.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_n=R.toneMapping);const kn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,on=kn!==void 0?kn.length:0,gt=vt.get(se),Ba=g.state.lights;if(oe===!0&&(Ae===!0||I!==Te)){const jn=I===Te&&se.id===J;Ne.setState(se,I,jn)}let ln=!1;se.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ba.state.version||gt.outputColorSpace!==st||ie.isBatchedMesh&&gt.batching===!1||!ie.isBatchedMesh&&gt.batching===!0||ie.isInstancedMesh&&gt.instancing===!1||!ie.isInstancedMesh&&gt.instancing===!0||ie.isSkinnedMesh&&gt.skinning===!1||!ie.isSkinnedMesh&&gt.skinning===!0||ie.isInstancedMesh&&gt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&gt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&gt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&gt.instancingMorph===!1&&ie.morphTexture!==null||gt.envMap!==lt||se.fog===!0&&gt.fog!==Ve||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Ne.numPlanes||gt.numIntersection!==Ne.numIntersection)||gt.vertexAlphas!==wt||gt.vertexTangents!==St||gt.morphTargets!==Et||gt.morphNormals!==pn||gt.morphColors!==Hn||gt.toneMapping!==_n||pt.isWebGL2===!0&&gt.morphTargetsCount!==on)&&(ln=!0):(ln=!0,gt.__version=se.version);let Ui=gt.currentProgram;ln===!0&&(Ui=Vi(se,j,ie));let za=!1,Wi=!1,Qr=!1;const yn=Ui.getUniforms(),di=gt.uniforms;if(rt.useProgram(Ui.program)&&(za=!0,Wi=!0,Qr=!0),se.id!==J&&(J=se.id,Wi=!0),za||Te!==I){yn.setValue(Q,"projectionMatrix",I.projectionMatrix),yn.setValue(Q,"viewMatrix",I.matrixWorldInverse);const jn=yn.map.cameraPosition;jn!==void 0&&jn.setValue(Q,ke.setFromMatrixPosition(I.matrixWorld)),pt.logarithmicDepthBuffer&&yn.setValue(Q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&yn.setValue(Q,"isOrthographic",I.isOrthographicCamera===!0),Te!==I&&(Te=I,Wi=!0,Qr=!0)}if(ie.isSkinnedMesh){yn.setOptional(Q,ie,"bindMatrix"),yn.setOptional(Q,ie,"bindMatrixInverse");const jn=ie.skeleton;jn&&(pt.floatVertexTextures?(jn.boneTexture===null&&jn.computeBoneTexture(),yn.setValue(Q,"boneTexture",jn.boneTexture,Tt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(yn.setOptional(Q,ie,"batchingTexture"),yn.setValue(Q,"batchingTexture",ie._matricesTexture,Tt));const ea=ae.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&pt.isWebGL2===!0)&&Ue.update(ie,ae,Ui),(Wi||gt.receiveShadow!==ie.receiveShadow)&&(gt.receiveShadow=ie.receiveShadow,yn.setValue(Q,"receiveShadow",ie.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(di.envMap.value=lt,di.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),Wi&&(yn.setValue(Q,"toneMappingExposure",R.toneMappingExposure),gt.needsLights&&Uo(di,Qr),Ve&&se.fog===!0&&ye.refreshFogUniforms(di,Ve),ye.refreshMaterialUniforms(di,se,xe,ue,He),Iu.upload(Q,xs(gt),di,Tt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Iu.upload(Q,xs(gt),di,Tt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&yn.setValue(Q,"center",ie.center),yn.setValue(Q,"modelViewMatrix",ie.modelViewMatrix),yn.setValue(Q,"normalMatrix",ie.normalMatrix),yn.setValue(Q,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const jn=se.uniformsGroups;for(let ta=0,Ga=jn.length;ta<Ga;ta++)if(pt.isWebGL2){const Tr=jn[ta];je.update(Tr,Ui),je.bind(Tr,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Uo(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function Ms(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(I,j,ae){vt.get(I.texture).__webglTexture=j,vt.get(I.depthTexture).__webglTexture=ae;const se=vt.get(I);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ae===void 0,se.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,j){const ae=vt.get(I);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,ae=0){F=I,$=j,D=ae;let se=!0,ie=null,Ve=!1,Qe=!1;if(I){const lt=vt.get(I);lt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(Q.FRAMEBUFFER,null),se=!1):lt.__webglFramebuffer===void 0?Tt.setupRenderTarget(I):lt.__hasExternalTextures&&Tt.rebindTextures(I,vt.get(I.texture).__webglTexture,vt.get(I.depthTexture).__webglTexture);const wt=I.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Qe=!0);const St=vt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(St[j])?ie=St[j][ae]:ie=St[j],Ve=!0):pt.isWebGL2&&I.samples>0&&Tt.useMultisampledRTT(I)===!1?ie=vt.get(I).__webglMultisampledFramebuffer:Array.isArray(St)?ie=St[ae]:ie=St,C.copy(I.viewport),z.copy(I.scissor),we=I.scissorTest}else C.copy(Se).multiplyScalar(xe).floor(),z.copy(Ie).multiplyScalar(xe).floor(),we=Ze;if(rt.bindFramebuffer(Q.FRAMEBUFFER,ie)&&pt.drawBuffers&&se&&rt.drawBuffers(I,ie),rt.viewport(C),rt.scissor(z),rt.setScissorTest(we),Ve){const lt=vt.get(I.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt.__webglTexture,ae)}else if(Qe){const lt=vt.get(I.texture),wt=j||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,lt.__webglTexture,ae||0,wt)}J=-1},this.readRenderTargetPixels=function(I,j,ae,se,ie,Ve,Qe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=vt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Qe!==void 0&&(st=st[Qe]),st){rt.bindFramebuffer(Q.FRAMEBUFFER,st);try{const lt=I.texture,wt=lt.format,St=lt.type;if(wt!==ir&&tt.convert(wt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=St===Ul&&(We.has("EXT_color_buffer_half_float")||pt.isWebGL2&&We.has("EXT_color_buffer_float"));if(St!==Pa&&tt.convert(St)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(St===br&&(pt.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-se&&ae>=0&&ae<=I.height-ie&&Q.readPixels(j,ae,se,ie,tt.convert(wt),tt.convert(St),Ve)}finally{const lt=F!==null?vt.get(F).__webglFramebuffer:null;rt.bindFramebuffer(Q.FRAMEBUFFER,lt)}}},this.copyFramebufferToTexture=function(I,j,ae=0){const se=Math.pow(2,-ae),ie=Math.floor(j.image.width*se),Ve=Math.floor(j.image.height*se);Tt.setTexture2D(j,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ae,0,0,I.x,I.y,ie,Ve),rt.unbindTexture()},this.copyTextureToTexture=function(I,j,ae,se=0){const ie=j.image.width,Ve=j.image.height,Qe=tt.convert(ae.format),st=tt.convert(ae.type);Tt.setTexture2D(ae,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ae.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ae.unpackAlignment),j.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,se,I.x,I.y,ie,Ve,Qe,st,j.image.data):j.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,se,I.x,I.y,j.mipmaps[0].width,j.mipmaps[0].height,Qe,j.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,se,I.x,I.y,Qe,st,j.image),se===0&&ae.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(I,j,ae,se,ie=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=Math.round(I.max.x-I.min.x),Qe=Math.round(I.max.y-I.min.y),st=I.max.z-I.min.z+1,lt=tt.convert(se.format),wt=tt.convert(se.type);let St;if(se.isData3DTexture)Tt.setTexture3D(se,0),St=Q.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)Tt.setTexture2DArray(se,0),St=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,se.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,se.unpackAlignment);const Et=Q.getParameter(Q.UNPACK_ROW_LENGTH),pn=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),Hn=Q.getParameter(Q.UNPACK_SKIP_PIXELS),_n=Q.getParameter(Q.UNPACK_SKIP_ROWS),kn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),on=ae.isCompressedTexture?ae.mipmaps[ie]:ae.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,on.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,on.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,I.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,I.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,I.min.z),ae.isDataTexture||ae.isData3DTexture?Q.texSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,wt,on.data):se.isCompressedArrayTexture?Q.compressedTexSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,on.data):Q.texSubImage3D(St,ie,j.x,j.y,j.z,Ve,Qe,st,lt,wt,on),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Et),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,pn),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,Hn),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,_n),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,kn),ie===0&&se.generateMipmaps&&Q.generateMipmap(St),rt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Tt.setTextureCube(I,0):I.isData3DTexture?Tt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Tt.setTexture2DArray(I,0):Tt.setTexture2D(I,0),rt.unbindTexture()},this.resetState=function(){$=0,D=0,F=null,rt.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Od?"display-p3":"srgb",t.unpackColorSpace=fn.workingColorSpace===$u?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kw extends Hd{}kw.prototype.isWebGL1Renderer=!0;class Vw extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ww extends ui{constructor(e=null,t=1,i=1,s,o,u,c,f,p=Zn,m=Zn,x,M){super(null,u,c,f,p,m,s,o,x,M),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vg extends ar{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vo=new Sn,xg=new Sn,Ru=[],Mg=new _s,Xw=new Sn,Cl=new rr,Rl=new Ol;class bg extends rr{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),Mg.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(Mg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ol),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),Rl.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(Rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,u=e*o+1;for(let c=0;c<i.length;c++)i[c]=s[u+c]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(i),e.ray.intersectsSphere(Rl)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,vo),xg.multiplyMatrices(i,vo),Cl.matrixWorld=xg,Cl.raycast(e,Ru);for(let u=0,c=Ru.length;u<c;u++){const f=Ru[u];f.instanceId=o,f.object=this,t.push(f)}Ru.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ww(new Float32Array(s*this.count),s,this.count,Yg,br));const o=this.morphTexture.source.data.data;let u=0;for(let p=0;p<i.length;p++)u+=i[p];const c=this.geometry.morphTargetsRelative?1:1-u,f=s*e;o[f]=c,o.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kd extends Fa{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],u=[],c=[],f=[],p=new te,m=new Rt;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let x=0,M=3;x<=t;x++,M+=3){const b=i+x/t*s;p.x=e*Math.cos(b),p.y=e*Math.sin(b),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(u[M]/e+1)/2,m.y=(u[M+1]/e+1)/2,f.push(m.x,m.y)}for(let x=1;x<=t;x++)o.push(x,x+1,0);this.setIndex(o),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(c,3)),this.setAttribute("uv",new yr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ii(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);var Cd=function(r,e){return Cd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},Cd(r,e)};function Po(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Cd(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Rd(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ld(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),s,o=[],u;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)o.push(s.value)}catch(c){u={error:c}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return o}function Pd(r,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,o;i<s;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return r.concat(o||Array.prototype.slice.call(e))}function Er(r){return typeof r=="function"}function M_(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var pd=M_(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,s){return s+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Id(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Ku=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,s,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=Rd(u),f=c.next();!f.done;f=c.next()){var p=f.value;p.remove(this)}}catch(E){e={error:E}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var m=this.initialTeardown;if(Er(m))try{m()}catch(E){o=E instanceof pd?E.errors:[E]}var x=this._finalizers;if(x){this._finalizers=null;try{for(var M=Rd(x),b=M.next();!b.done;b=M.next()){var w=b.value;try{yg(w)}catch(E){o=o??[],E instanceof pd?o=Pd(Pd([],Ld(o)),Ld(E.errors)):o.push(E)}}}catch(E){i={error:E}}finally{try{b&&!b.done&&(s=M.return)&&s.call(M)}finally{if(i)throw i.error}}}if(o)throw new pd(o)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)yg(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Id(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Id(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),b_=Ku.EMPTY;function S_(r){return r instanceof Ku||r&&"closed"in r&&Er(r.remove)&&Er(r.add)&&Er(r.unsubscribe)}function yg(r){Er(r)?r():r.unsubscribe()}var y_={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},E_={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Pd([r,e],Ld(t)))},clearTimeout:function(r){var e=E_.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function $w(r){E_.setTimeout(function(){throw r})}function Eg(){}function Du(r){r()}var Vd=function(r){Po(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,S_(t)&&t.add(i)):i.destination=Kw,i}return e.create=function(t,i,s){return new Dd(t,i,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ku),qw=Function.prototype.bind;function md(r,e){return qw.call(r,e)}var Yw=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Lu(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Lu(i)}else Lu(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Lu(t)}},r}(),Dd=function(r){Po(e,r);function e(t,i,s){var o=r.call(this)||this,u;if(Er(t)||!t)u={next:t??void 0,error:i??void 0,complete:s??void 0};else{var c;o&&y_.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return o.unsubscribe()},u={next:t.next&&md(t.next,c),error:t.error&&md(t.error,c),complete:t.complete&&md(t.complete,c)}):u=t}return o.destination=new Yw(u),o}return e}(Vd);function Lu(r){$w(r)}function Zw(r){throw r}var Kw={closed:!0,next:Eg,error:Zw,complete:Eg},jw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function T_(r){return r}function Jw(r){return r.length===0?T_:r.length===1?r[0]:function(t){return r.reduce(function(i,s){return s(i)},t)}}var Tg=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var s=this,o=eA(e)?e:new Dd(e,t,i);return Du(function(){var u=s,c=u.operator,f=u.source;o.add(c?c.call(o,f):f?s._subscribe(o):s._trySubscribe(o))}),o},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=wg(t),new t(function(s,o){var u=new Dd({next:function(c){try{e(c)}catch(f){o(f),u.unsubscribe()}},error:o,complete:s});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[jw]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Jw(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=wg(e),new e(function(i,s){var o;t.subscribe(function(u){return o=u},function(u){return s(u)},function(){return i(o)})})},r.create=function(e){return new r(e)},r}();function wg(r){var e;return(e=r??y_.Promise)!==null&&e!==void 0?e:Promise}function Qw(r){return r&&Er(r.next)&&Er(r.error)&&Er(r.complete)}function eA(r){return r&&r instanceof Vd||Qw(r)&&S_(r)}function tA(r){return Er(r==null?void 0:r.lift)}function w_(r){return function(e){if(tA(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function A_(r,e,t,i,s){return new nA(r,e,t,i,s)}var nA=function(r){Po(e,r);function e(t,i,s,o,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(p){try{i(p)}catch(m){t.error(m)}}:r.prototype._next,f._error=o?function(p){try{o(p)}catch(m){t.error(m)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=s?function(){try{s()}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Vd),iA=M_(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),C_=function(r){Po(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Ag(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new iA},e.prototype.next=function(t){var i=this;Du(function(){var s,o;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=Rd(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(p){s={error:p}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var i=this;Du(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var s=i.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;Du(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,s=this,o=s.hasError,u=s.isStopped,c=s.observers;return o||u?b_:(this.currentObservers=null,c.push(t),new Ku(function(){i.currentObservers=null,Id(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,s=i.hasError,o=i.thrownError,u=i.isStopped;s?t.error(o):u&&t.complete()},e.prototype.asObservable=function(){var t=new Tg;return t.source=this,t},e.create=function(t,i){return new Ag(t,i)},e}(Tg),Ag=function(r){Po(e,r);function e(t,i){var s=r.call(this)||this;return s.destination=t,s.source=i,s}return e.prototype.next=function(t){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.next)===null||s===void 0||s.call(i,t)},e.prototype.error=function(t){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.error)===null||s===void 0||s.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,s;return(s=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&s!==void 0?s:b_},e}(C_),Io=function(r){Po(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,s=t.thrownError,o=t._value;if(i)throw s;return this._throwIfClosed(),o},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(C_);function ya(r,e){return w_(function(t,i){var s=0;t.subscribe(A_(i,function(o){i.next(r.call(e,o,s++))}))})}function Ea(r,e){return e===void 0&&(e=T_),r=r??rA,w_(function(t,i){var s,o=!0;t.subscribe(A_(i,function(u){var c=e(u);(o||!r(s,c))&&(o=!1,s=c,i.next(u))}))})}function rA(r,e){return r===e}const aA={items:[]},Il=new Io(aA);function sA(r){const t={...Il.getValue(),items:r};Il.next(t)}const oA=new URL(window.location),Cg=new URLSearchParams(oA.search),lA={columns:["X_umap0_norm","X_umap1_norm","global_sphere0_norm","global_sphere1_norm","global_sphere2_norm","clusters"],prefix:Cg.has("prefix")?Cg.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:["adaxial cells","cephalic","endoderm","floor Plate","hindbrain","ectoderm","spinal cord"]},Jt=new Io(lA);function cA(r){const e=Jt.getValue(),t=Object.keys(r).map(s=>[s,r[s]]),i={...e,pallete:r,listPalette:t};Jt.next(i)}function uA(r){const t={...Jt.getValue(),genes:r};Jt.next(t)}function fA(r){const t={...Jt.getValue(),prefix:r};Jt.next(t)}const hA={scene:new Vw},R_=new Io(hA),dA={isLoading:!0,theme:"light"},Dl=new Io(dA);function vr(r){const t={...Dl.getValue(),isLoading:r};Dl.next(t)}const pA={selectedCelltypes:[],selectedGenes:[]},un=new Io(pA);function Fl(r){const t={...un.getValue(),selectedCelltypes:[...new Set(r)]};un.next(t)}function Hu(r){const t={...un.getValue(),selectedGenes:r};un.next(t)}const Rg={type:"change"},gd={type:"start"},Lg={type:"end"},Pu=new r_,Pg=new wa,mA=Math.cos(70*CS.DEG2RAD);class L_ extends gs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",et),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",et),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rg),i.update(),o=s.NONE},this.update=function(){const O=new te,ve=new Da().setFromUnitVectors(e.up,new te(0,1,0)),Ke=ve.clone().invert(),k=new te,De=new Da,ne=new te,Le=2*Math.PI;return function(Lt=null){const qt=i.object.position;O.copy(qt).sub(i.target),O.applyQuaternion(ve),c.setFromVector3(O),i.autoRotate&&o===s.NONE&&we(C(Lt)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Qt=i.minAzimuthAngle,dn=i.maxAzimuthAngle;isFinite(Qt)&&isFinite(dn)&&(Qt<-Math.PI?Qt+=Le:Qt>Math.PI&&(Qt-=Le),dn<-Math.PI?dn+=Le:dn>Math.PI&&(dn-=Le),Qt<=dn?c.theta=Math.max(Qt,Math.min(dn,c.theta)):c.theta=c.theta>(Qt+dn)/2?Math.max(Qt,c.theta):Math.min(dn,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let kt=!1;if(i.zoomToCursor&&D||i.object.isOrthographicCamera)c.radius=Se(c.radius);else{const en=c.radius;c.radius=Se(c.radius*p),kt=en!=c.radius}if(O.setFromSpherical(c),O.applyQuaternion(Ke),qt.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0)),i.zoomToCursor&&D){let en=null;if(i.object.isPerspectiveCamera){const An=O.length();en=Se(An*p);const hi=An-en;i.object.position.addScaledVector(N,hi),i.object.updateMatrixWorld(),kt=!!hi}else if(i.object.isOrthographicCamera){const An=new te($.x,$.y,0);An.unproject(i.object);const hi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),i.object.updateProjectionMatrix(),kt=hi!==i.object.zoom;const jr=new te($.x,$.y,0);jr.unproject(i.object),i.object.position.sub(jr).add(An),i.object.updateMatrixWorld(),en=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;en!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(en).add(i.object.position):(Pu.origin.copy(i.object.position),Pu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Pu.direction))<mA?e.lookAt(i.target):(Pg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Pu.intersectPlane(Pg,i.target))))}else if(i.object.isOrthographicCamera){const en=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/p)),en!==i.object.zoom&&(i.object.updateProjectionMatrix(),kt=!0)}return p=1,D=!1,kt||k.distanceToSquared(i.object.position)>u||8*(1-De.dot(i.object.quaternion))>u||ne.distanceToSquared(i.target)>u?(i.dispatchEvent(Rg),k.copy(i.object.position),De.copy(i.object.quaternion),ne.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",mt),i.domElement.removeEventListener("pointerdown",Tt),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",de),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",U),i.domElement.getRootNode().removeEventListener("keydown",ye,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",et),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const u=1e-6,c=new Sg,f=new Sg;let p=1;const m=new te,x=new Rt,M=new Rt,b=new Rt,w=new Rt,E=new Rt,g=new Rt,_=new Rt,H=new Rt,R=new Rt,N=new te,$=new Rt;let D=!1;const F=[],J={};let Te=!1;function C(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function z(O){const ve=Math.abs(O*.01);return Math.pow(.95,i.zoomSpeed*ve)}function we(O){f.theta-=O}function be(O){f.phi-=O}const q=function(){const O=new te;return function(Ke,k){O.setFromMatrixColumn(k,0),O.multiplyScalar(-Ke),m.add(O)}}(),pe=function(){const O=new te;return function(Ke,k){i.screenSpacePanning===!0?O.setFromMatrixColumn(k,1):(O.setFromMatrixColumn(k,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(Ke),m.add(O)}}(),ue=function(){const O=new te;return function(Ke,k){const De=i.domElement;if(i.object.isPerspectiveCamera){const ne=i.object.position;O.copy(ne).sub(i.target);let Le=O.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),q(2*Ke*Le/De.clientHeight,i.object.matrix),pe(2*k*Le/De.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(Ke*(i.object.right-i.object.left)/i.object.zoom/De.clientWidth,i.object.matrix),pe(k*(i.object.top-i.object.bottom)/i.object.zoom/De.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function xe(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?p*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Me(O,ve){if(!i.zoomToCursor)return;D=!0;const Ke=i.domElement.getBoundingClientRect(),k=O-Ke.left,De=ve-Ke.top,ne=Ke.width,Le=Ke.height;$.x=k/ne*2-1,$.y=-(De/Le)*2+1,N.set($.x,$.y,1).unproject(i.object).sub(i.object.position).normalize()}function Se(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function Ie(O){x.set(O.clientX,O.clientY)}function Ze(O){Me(O.clientX,O.clientX),_.set(O.clientX,O.clientY)}function Mt(O){w.set(O.clientX,O.clientY)}function oe(O){M.set(O.clientX,O.clientY),b.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ve=i.domElement;we(2*Math.PI*b.x/ve.clientHeight),be(2*Math.PI*b.y/ve.clientHeight),x.copy(M),i.update()}function Ae(O){H.set(O.clientX,O.clientY),R.subVectors(H,_),R.y>0?xe(z(R.y)):R.y<0&&ce(z(R.y)),_.copy(H),i.update()}function He(O){E.set(O.clientX,O.clientY),g.subVectors(E,w).multiplyScalar(i.panSpeed),ue(g.x,g.y),w.copy(E),i.update()}function dt(O){Me(O.clientX,O.clientY),O.deltaY<0?ce(z(O.deltaY)):O.deltaY>0&&xe(z(O.deltaY)),i.update()}function Je(O){let ve=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?be(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(0,i.keyPanSpeed),ve=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?be(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(0,-i.keyPanSpeed),ve=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?we(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(i.keyPanSpeed,0),ve=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?we(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ue(-i.keyPanSpeed,0),ve=!0;break}ve&&(O.preventDefault(),i.update())}function ke(O){if(F.length===1)x.set(O.pageX,O.pageY);else{const ve=Xe(O),Ke=.5*(O.pageX+ve.x),k=.5*(O.pageY+ve.y);x.set(Ke,k)}}function Ht(O){if(F.length===1)w.set(O.pageX,O.pageY);else{const ve=Xe(O),Ke=.5*(O.pageX+ve.x),k=.5*(O.pageY+ve.y);w.set(Ke,k)}}function at(O){const ve=Xe(O),Ke=O.pageX-ve.x,k=O.pageY-ve.y,De=Math.sqrt(Ke*Ke+k*k);_.set(0,De)}function Q(O){i.enableZoom&&at(O),i.enablePan&&Ht(O)}function xn(O){i.enableZoom&&at(O),i.enableRotate&&ke(O)}function We(O){if(F.length==1)M.set(O.pageX,O.pageY);else{const Ke=Xe(O),k=.5*(O.pageX+Ke.x),De=.5*(O.pageY+Ke.y);M.set(k,De)}b.subVectors(M,x).multiplyScalar(i.rotateSpeed);const ve=i.domElement;we(2*Math.PI*b.x/ve.clientHeight),be(2*Math.PI*b.y/ve.clientHeight),x.copy(M)}function pt(O){if(F.length===1)E.set(O.pageX,O.pageY);else{const ve=Xe(O),Ke=.5*(O.pageX+ve.x),k=.5*(O.pageY+ve.y);E.set(Ke,k)}g.subVectors(E,w).multiplyScalar(i.panSpeed),ue(g.x,g.y),w.copy(E)}function rt(O){const ve=Xe(O),Ke=O.pageX-ve.x,k=O.pageY-ve.y,De=Math.sqrt(Ke*Ke+k*k);H.set(0,De),R.set(0,Math.pow(H.y/_.y,i.zoomSpeed)),xe(R.y),_.copy(H);const ne=(O.pageX+ve.x)*.5,Le=(O.pageY+ve.y)*.5;Me(ne,Le)}function _t(O){i.enableZoom&&rt(O),i.enablePan&&pt(O)}function vt(O){i.enableZoom&&rt(O),i.enableRotate&&We(O)}function Tt(O){i.enabled!==!1&&(F.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",$t),i.domElement.addEventListener("pointerup",U)),!bt(O)&&(Ue(O),O.pointerType==="touch"?Ne(O):T(O)))}function $t(O){i.enabled!==!1&&(O.pointerType==="touch"?Fe(O):le(O))}function U(O){switch(sn(O),F.length){case 0:i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",U),i.dispatchEvent(Lg),o=s.NONE;break;case 1:const ve=F[0],Ke=J[ve];Ne({pointerId:ve,pageX:Ke.x,pageY:Ke.y});break}}function T(O){let ve;switch(O.button){case 0:ve=i.mouseButtons.LEFT;break;case 1:ve=i.mouseButtons.MIDDLE;break;case 2:ve=i.mouseButtons.RIGHT;break;default:ve=-1}switch(ve){case qr.DOLLY:if(i.enableZoom===!1)return;Ze(O),o=s.DOLLY;break;case qr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;Mt(O),o=s.PAN}else{if(i.enableRotate===!1)return;Ie(O),o=s.ROTATE}break;case qr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;Ie(O),o=s.ROTATE}else{if(i.enablePan===!1)return;Mt(O),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(gd)}function le(O){switch(o){case s.ROTATE:if(i.enableRotate===!1)return;oe(O);break;case s.DOLLY:if(i.enableZoom===!1)return;Ae(O);break;case s.PAN:if(i.enablePan===!1)return;He(O);break}}function de(O){i.enabled===!1||i.enableZoom===!1||o!==s.NONE||(O.preventDefault(),i.dispatchEvent(gd),dt(Ce(O)),i.dispatchEvent(Lg))}function Ce(O){const ve=O.deltaMode,Ke={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(ve){case 1:Ke.deltaY*=16;break;case 2:Ke.deltaY*=100;break}return O.ctrlKey&&!Te&&(Ke.deltaY*=10),Ke}function ye(O){O.key==="Control"&&(Te=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(O){O.key==="Control"&&(Te=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function et(O){i.enabled===!1||i.enablePan===!1||Je(O)}function Ne(O){switch(tt(O),F.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;ke(O),o=s.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;Ht(O),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(O),o=s.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xn(O),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&i.dispatchEvent(gd)}function Fe(O){switch(tt(O),o){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;We(O),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;pt(O),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_t(O),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(O),i.update();break;default:o=s.NONE}}function mt(O){i.enabled!==!1&&O.preventDefault()}function Ue(O){F.push(O.pointerId)}function sn(O){delete J[O.pointerId];for(let ve=0;ve<F.length;ve++)if(F[ve]==O.pointerId){F.splice(ve,1);return}}function bt(O){for(let ve=0;ve<F.length;ve++)if(F[ve]==O.pointerId)return!0;return!1}function tt(O){let ve=J[O.pointerId];ve===void 0&&(ve=new Rt,J[O.pointerId]=ve),ve.set(O.pageX,O.pageY)}function Xe(O){const ve=O.pointerId===F[0]?F[1]:F[0];return J[ve]}i.domElement.addEventListener("contextmenu",mt),i.domElement.addEventListener("pointerdown",Tt),i.domElement.addEventListener("pointercancel",U),i.domElement.addEventListener("wheel",de,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ku={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ku.exports;(function(r,e){(function(){var t,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,m="__lodash_placeholder__",x=1,M=2,b=4,w=1,E=2,g=1,_=2,H=4,R=8,N=16,$=32,D=64,F=128,J=256,Te=512,C=30,z="...",we=800,be=16,q=1,pe=2,ue=3,xe=1/0,ce=9007199254740991,Me=17976931348623157e292,Se=NaN,Ie=4294967295,Ze=Ie-1,Mt=Ie>>>1,oe=[["ary",F],["bind",g],["bindKey",_],["curry",R],["curryRight",N],["flip",Te],["partial",$],["partialRight",D],["rearg",J]],Ae="[object Arguments]",He="[object Array]",dt="[object AsyncFunction]",Je="[object Boolean]",ke="[object Date]",Ht="[object DOMException]",at="[object Error]",Q="[object Function]",xn="[object GeneratorFunction]",We="[object Map]",pt="[object Number]",rt="[object Null]",_t="[object Object]",vt="[object Promise]",Tt="[object Proxy]",$t="[object RegExp]",U="[object Set]",T="[object String]",le="[object Symbol]",de="[object Undefined]",Ce="[object WeakMap]",ye="[object WeakSet]",ot="[object ArrayBuffer]",et="[object DataView]",Ne="[object Float32Array]",Fe="[object Float64Array]",mt="[object Int8Array]",Ue="[object Int16Array]",sn="[object Int32Array]",bt="[object Uint8Array]",tt="[object Uint8ClampedArray]",Xe="[object Uint16Array]",je="[object Uint32Array]",O=/\b__p \+= '';/g,ve=/\b(__p \+=) '' \+/g,Ke=/(__e\(.*?\)|\b__t\)) \+\n'';/g,k=/&(?:amp|lt|gt|quot|#39);/g,De=/[&<>"']/g,ne=RegExp(k.source),Le=RegExp(De.source),Be=/<%-([\s\S]+?)%>/g,Lt=/<%([\s\S]+?)%>/g,qt=/<%=([\s\S]+?)%>/g,Qt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dn=/^\w*$/,kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,en=/[\\^$.*+?()[\]{}|]/g,An=RegExp(en.source),hi=/^\s+/,jr=/\s/,Jr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,vs=/\{\n\/\* \[wrapped with (.+)\] \*/,Vi=/,? & /,xs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Oa=/[()=,{}\[\]\/\s]/,Do=/\\(\\)?/g,Uo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ms=/\w*$/,I=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,ae=/^\[object .+?Constructor\]$/,se=/^0o[0-7]+$/i,ie=/^(?:0|[1-9]\d*)$/,Ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qe=/($^)/,st=/['\n\r\u2028\u2029\\]/g,lt="\\ud800-\\udfff",wt="\\u0300-\\u036f",St="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",pn=wt+St+Et,Hn="\\u2700-\\u27bf",_n="a-z\\xdf-\\xf6\\xf8-\\xff",kn="\\xac\\xb1\\xd7\\xf7",on="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gt="\\u2000-\\u206f",Ba=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ln="A-Z\\xc0-\\xd6\\xd8-\\xde",Ui="\\ufe0e\\ufe0f",za=kn+on+gt+Ba,Wi="['’]",Qr="["+lt+"]",yn="["+za+"]",di="["+pn+"]",ea="\\d+",jn="["+Hn+"]",ta="["+_n+"]",Ga="[^"+lt+za+ea+Hn+_n+ln+"]",Tr="\\ud83c[\\udffb-\\udfff]",Ju="(?:"+di+"|"+Tr+")",zl="[^"+lt+"]",No="(?:\\ud83c[\\udde6-\\uddff]){2}",Fo="[\\ud800-\\udbff][\\udc00-\\udfff]",na="["+ln+"]",Gl="\\u200d",Hl="(?:"+ta+"|"+Ga+")",Qu="(?:"+na+"|"+Ga+")",kl="(?:"+Wi+"(?:d|ll|m|re|s|t|ve))?",Vl="(?:"+Wi+"(?:D|LL|M|RE|S|T|VE))?",Wl=Ju+"?",Xl="["+Ui+"]?",ef="(?:"+Gl+"(?:"+[zl,No,Fo].join("|")+")"+Xl+Wl+")*",$l="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ql="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Yl=Xl+Wl+ef,bs="(?:"+[jn,No,Fo].join("|")+")"+Yl,ia="(?:"+[zl+di+"?",di,No,Fo,Qr].join("|")+")",tf=RegExp(Wi,"g"),Zl=RegExp(di,"g"),Oo=RegExp(Tr+"(?="+Tr+")|"+ia+Yl,"g"),Bo=RegExp([na+"?"+ta+"+"+kl+"(?="+[yn,na,"$"].join("|")+")",Qu+"+"+Vl+"(?="+[yn,na+Hl,"$"].join("|")+")",na+"?"+Hl+"+"+kl,na+"+"+Vl,ql,$l,ea,bs].join("|"),"g"),zo=RegExp("["+Gl+lt+pn+Ui+"]"),nf=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Kl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ra=-1,hn={};hn[Ne]=hn[Fe]=hn[mt]=hn[Ue]=hn[sn]=hn[bt]=hn[tt]=hn[Xe]=hn[je]=!0,hn[Ae]=hn[He]=hn[ot]=hn[Je]=hn[et]=hn[ke]=hn[at]=hn[Q]=hn[We]=hn[pt]=hn[_t]=hn[$t]=hn[U]=hn[T]=hn[Ce]=!1;var cn={};cn[Ae]=cn[He]=cn[ot]=cn[et]=cn[Je]=cn[ke]=cn[Ne]=cn[Fe]=cn[mt]=cn[Ue]=cn[sn]=cn[We]=cn[pt]=cn[_t]=cn[$t]=cn[U]=cn[T]=cn[le]=cn[bt]=cn[tt]=cn[Xe]=cn[je]=!0,cn[at]=cn[Q]=cn[Ce]=!1;var rf={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Go={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ho={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},jl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},af=parseFloat,sf=parseInt,Jl=typeof Mo=="object"&&Mo&&Mo.Object===Object&&Mo,Ql=typeof self=="object"&&self&&self.Object===Object&&self,Pn=Jl||Ql||Function("return this")(),ko=e&&!e.nodeType&&e,wr=ko&&!0&&r&&!r.nodeType&&r,ec=wr&&wr.exports===ko,Vo=ec&&Jl.process,pi=function(){try{var Y=wr&&wr.require&&wr.require("util").types;return Y||Vo&&Vo.binding&&Vo.binding("util")}catch{}}(),tc=pi&&pi.isArrayBuffer,nc=pi&&pi.isDate,Wo=pi&&pi.isMap,ic=pi&&pi.isRegExp,rc=pi&&pi.isSet,ac=pi&&pi.isTypedArray;function ri(Y,fe,re){switch(re.length){case 0:return Y.call(fe);case 1:return Y.call(fe,re[0]);case 2:return Y.call(fe,re[0],re[1]);case 3:return Y.call(fe,re[0],re[1],re[2])}return Y.apply(fe,re)}function of(Y,fe,re,$e){for(var yt=-1,Zt=Y==null?0:Y.length;++yt<Zt;){var En=Y[yt];fe($e,En,re(En),Y)}return $e}function mi(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e&&fe(Y[re],re,Y)!==!1;);return Y}function lf(Y,fe){for(var re=Y==null?0:Y.length;re--&&fe(Y[re],re,Y)!==!1;);return Y}function sc(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e;)if(!fe(Y[re],re,Y))return!1;return!0}function sr(Y,fe){for(var re=-1,$e=Y==null?0:Y.length,yt=0,Zt=[];++re<$e;){var En=Y[re];fe(En,re,Y)&&(Zt[yt++]=En)}return Zt}function Ss(Y,fe){var re=Y==null?0:Y.length;return!!re&&aa(Y,fe,0)>-1}function ys(Y,fe,re){for(var $e=-1,yt=Y==null?0:Y.length;++$e<yt;)if(re(fe,Y[$e]))return!0;return!1}function mn(Y,fe){for(var re=-1,$e=Y==null?0:Y.length,yt=Array($e);++re<$e;)yt[re]=fe(Y[re],re,Y);return yt}function or(Y,fe){for(var re=-1,$e=fe.length,yt=Y.length;++re<$e;)Y[yt+re]=fe[re];return Y}function Xo(Y,fe,re,$e){var yt=-1,Zt=Y==null?0:Y.length;for($e&&Zt&&(re=Y[++yt]);++yt<Zt;)re=fe(re,Y[yt],yt,Y);return re}function cf(Y,fe,re,$e){var yt=Y==null?0:Y.length;for($e&&yt&&(re=Y[--yt]);yt--;)re=fe(re,Y[yt],yt,Y);return re}function Es(Y,fe){for(var re=-1,$e=Y==null?0:Y.length;++re<$e;)if(fe(Y[re],re,Y))return!0;return!1}var uf=As("length");function ff(Y){return Y.split("")}function hf(Y){return Y.match(xs)||[]}function oc(Y,fe,re){var $e;return re(Y,function(yt,Zt,En){if(fe(yt,Zt,En))return $e=Zt,!1}),$e}function Ts(Y,fe,re,$e){for(var yt=Y.length,Zt=re+($e?1:-1);$e?Zt--:++Zt<yt;)if(fe(Y[Zt],Zt,Y))return Zt;return-1}function aa(Y,fe,re){return fe===fe?Rs(Y,fe,re):Ts(Y,Ha,re)}function lc(Y,fe,re,$e){for(var yt=re-1,Zt=Y.length;++yt<Zt;)if($e(Y[yt],fe))return yt;return-1}function Ha(Y){return Y!==Y}function ws(Y,fe){var re=Y==null?0:Y.length;return re?Cs(Y,fe)/re:Se}function As(Y){return function(fe){return fe==null?t:fe[Y]}}function $o(Y){return function(fe){return Y==null?t:Y[fe]}}function qo(Y,fe,re,$e,yt){return yt(Y,function(Zt,En,tn){re=$e?($e=!1,Zt):fe(re,Zt,En,tn)}),re}function df(Y,fe){var re=Y.length;for(Y.sort(fe);re--;)Y[re]=Y[re].value;return Y}function Cs(Y,fe){for(var re,$e=-1,yt=Y.length;++$e<yt;){var Zt=fe(Y[$e]);Zt!==t&&(re=re===t?Zt:re+Zt)}return re}function Yo(Y,fe){for(var re=-1,$e=Array(Y);++re<Y;)$e[re]=fe(re);return $e}function ka(Y,fe){return mn(fe,function(re){return[re,Y[re]]})}function cc(Y){return Y&&Y.slice(0,mc(Y)+1).replace(hi,"")}function ai(Y){return function(fe){return Y(fe)}}function Zo(Y,fe){return mn(fe,function(re){return Y[re]})}function Va(Y,fe){return Y.has(fe)}function uc(Y,fe){for(var re=-1,$e=Y.length;++re<$e&&aa(fe,Y[re],0)>-1;);return re}function fc(Y,fe){for(var re=Y.length;re--&&aa(fe,Y[re],0)>-1;);return re}function pf(Y,fe){for(var re=Y.length,$e=0;re--;)Y[re]===fe&&++$e;return $e}var mf=$o(rf),gf=$o(Go);function hc(Y){return"\\"+jl[Y]}function dc(Y,fe){return Y==null?t:Y[fe]}function sa(Y){return zo.test(Y)}function _f(Y){return nf.test(Y)}function vf(Y){for(var fe,re=[];!(fe=Y.next()).done;)re.push(fe.value);return re}function Wa(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e,yt){re[++fe]=[yt,$e]}),re}function Ko(Y,fe){return function(re){return Y(fe(re))}}function Xi(Y,fe){for(var re=-1,$e=Y.length,yt=0,Zt=[];++re<$e;){var En=Y[re];(En===fe||En===m)&&(Y[re]=m,Zt[yt++]=re)}return Zt}function Xa(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e){re[++fe]=$e}),re}function pc(Y){var fe=-1,re=Array(Y.size);return Y.forEach(function($e){re[++fe]=[$e,$e]}),re}function Rs(Y,fe,re){for(var $e=re-1,yt=Y.length;++$e<yt;)if(Y[$e]===fe)return $e;return-1}function xf(Y,fe,re){for(var $e=re+1;$e--;)if(Y[$e]===fe)return $e;return $e}function Ar(Y){return sa(Y)?bf(Y):uf(Y)}function yi(Y){return sa(Y)?Sf(Y):ff(Y)}function mc(Y){for(var fe=Y.length;fe--&&jr.test(Y.charAt(fe)););return fe}var Mf=$o(Ho);function bf(Y){for(var fe=Oo.lastIndex=0;Oo.test(Y);)++fe;return fe}function Sf(Y){return Y.match(Oo)||[]}function jo(Y){return Y.match(Bo)||[]}var Ls=function Y(fe){fe=fe==null?Pn:lr.defaults(Pn.Object(),fe,lr.pick(Pn,Kl));var re=fe.Array,$e=fe.Date,yt=fe.Error,Zt=fe.Function,En=fe.Math,tn=fe.Object,Jo=fe.RegExp,Ps=fe.String,gi=fe.TypeError,Is=re.prototype,gc=Zt.prototype,cr=tn.prototype,Ds=fe["__core-js_shared__"],Us=gc.toString,nn=cr.hasOwnProperty,_c=0,Qo=function(){var n=/[^.]+$/.exec(Ds&&Ds.keys&&Ds.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ns=cr.toString,yf=Us.call(tn),Ef=Pn._,Tf=Jo("^"+Us.call(nn).replace(en,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fs=ec?fe.Buffer:t,ur=fe.Symbol,Os=fe.Uint8Array,vc=Fs?Fs.allocUnsafe:t,Bs=Ko(tn.getPrototypeOf,tn),xc=tn.create,Mc=cr.propertyIsEnumerable,zs=Is.splice,bc=ur?ur.isConcatSpreadable:t,$a=ur?ur.iterator:t,fr=ur?ur.toStringTag:t,qa=function(){try{var n=Qa(tn,"defineProperty");return n({},"",{}),n}catch{}}(),wf=fe.clearTimeout!==Pn.clearTimeout&&fe.clearTimeout,Sc=$e&&$e.now!==Pn.Date.now&&$e.now,Af=fe.setTimeout!==Pn.setTimeout&&fe.setTimeout,Gs=En.ceil,Ni=En.floor,el=tn.getOwnPropertySymbols,Cf=Fs?Fs.isBuffer:t,Cr=fe.isFinite,Rf=Is.join,Lf=Ko(tn.keys,tn),Cn=En.max,Vn=En.min,Pf=$e.now,tl=fe.parseInt,Jn=En.random,yc=Is.reverse,Hs=Qa(fe,"DataView"),hr=Qa(fe,"Map"),ks=Qa(fe,"Promise"),Rr=Qa(fe,"Set"),Ya=Qa(fe,"WeakMap"),oa=Qa(tn,"create"),la=Ya&&new Ya,ca={},Ec=es(Hs),Tc=es(hr),If=es(ks),Df=es(Rr),Uf=es(Ya),ua=ur?ur.prototype:t,Fi=ua?ua.valueOf:t,wc=ua?ua.toString:t;function A(n){if(wn(n)&&!Ct(n)&&!(n instanceof Bt)){if(n instanceof On)return n;if(nn.call(n,"__wrapped__"))return pp(n)}return new On(n)}var fa=function(){function n(){}return function(a){if(!bn(a))return{};if(xc)return xc(a);n.prototype=a;var l=new n;return n.prototype=t,l}}();function Za(){}function On(n,a){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}A.templateSettings={escape:Be,evaluate:Lt,interpolate:qt,variable:"",imports:{_:A}},A.prototype=Za.prototype,A.prototype.constructor=A,On.prototype=fa(Za.prototype),On.prototype.constructor=On;function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ie,this.__views__=[]}function Ac(){var n=new Bt(this.__wrapped__);return n.__actions__=Un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Un(this.__views__),n}function Nf(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Ff(){var n=this.__wrapped__.value(),a=this.__dir__,l=Ct(n),d=a<0,S=l?n.length:0,L=G_(0,S,this.__views__),B=L.start,W=L.end,Z=W-B,me=d?W:B-1,_e=this.__iteratees__,Ee=_e.length,Ge=0,nt=Vn(Z,this.__takeCount__);if(!l||!d&&S==Z&&nt==Z)return Yn(n,this.__actions__);var ft=[];e:for(;Z--&&Ge<nt;){me+=a;for(var Ut=-1,ht=n[me];++Ut<Ee;){var Gt=_e[Ut],Xt=Gt.iteratee,Ri=Gt.type,oi=Xt(ht);if(Ri==pe)ht=oi;else if(!oi){if(Ri==q)continue e;break e}}ft[Ge++]=ht}return ft}Bt.prototype=fa(Za.prototype),Bt.prototype.constructor=Bt;function Lr(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function Of(){this.__data__=oa?oa(null):{},this.size=0}function Bf(n){var a=this.has(n)&&delete this.__data__[n];return this.size-=a?1:0,a}function zf(n){var a=this.__data__;if(oa){var l=a[n];return l===f?t:l}return nn.call(a,n)?a[n]:t}function Gf(n){var a=this.__data__;return oa?a[n]!==t:nn.call(a,n)}function Hf(n,a){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=oa&&a===t?f:a,this}Lr.prototype.clear=Of,Lr.prototype.delete=Bf,Lr.prototype.get=zf,Lr.prototype.has=Gf,Lr.prototype.set=Hf;function $i(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function kf(){this.__data__=[],this.size=0}function Vf(n){var a=this.__data__,l=Qn(a,n);if(l<0)return!1;var d=a.length-1;return l==d?a.pop():zs.call(a,l,1),--this.size,!0}function Wf(n){var a=this.__data__,l=Qn(a,n);return l<0?t:a[l][1]}function Xf(n){return Qn(this.__data__,n)>-1}function $f(n,a){var l=this.__data__,d=Qn(l,n);return d<0?(++this.size,l.push([n,a])):l[d][1]=a,this}$i.prototype.clear=kf,$i.prototype.delete=Vf,$i.prototype.get=Wf,$i.prototype.has=Xf,$i.prototype.set=$f;function Ei(n){var a=-1,l=n==null?0:n.length;for(this.clear();++a<l;){var d=n[a];this.set(d[0],d[1])}}function qf(){this.size=0,this.__data__={hash:new Lr,map:new(hr||$i),string:new Lr}}function nl(n){var a=jc(this,n).delete(n);return this.size-=a?1:0,a}function il(n){return jc(this,n).get(n)}function rl(n){return jc(this,n).has(n)}function Cc(n,a){var l=jc(this,n),d=l.size;return l.set(n,a),this.size+=l.size==d?0:1,this}Ei.prototype.clear=qf,Ei.prototype.delete=nl,Ei.prototype.get=il,Ei.prototype.has=rl,Ei.prototype.set=Cc;function dr(n){var a=-1,l=n==null?0:n.length;for(this.__data__=new Ei;++a<l;)this.add(n[a])}function Yf(n){return this.__data__.set(n,f),this}function Zf(n){return this.__data__.has(n)}dr.prototype.add=dr.prototype.push=Yf,dr.prototype.has=Zf;function Ti(n){var a=this.__data__=new $i(n);this.size=a.size}function wi(){this.__data__=new $i,this.size=0}function ha(n){var a=this.__data__,l=a.delete(n);return this.size=a.size,l}function Kf(n){return this.__data__.get(n)}function al(n){return this.__data__.has(n)}function jf(n,a){var l=this.__data__;if(l instanceof $i){var d=l.__data__;if(!hr||d.length<s-1)return d.push([n,a]),this.size=++l.size,this;l=this.__data__=new Ei(d)}return l.set(n,a),this.size=l.size,this}Ti.prototype.clear=wi,Ti.prototype.delete=ha,Ti.prototype.get=Kf,Ti.prototype.has=al,Ti.prototype.set=jf;function da(n,a){var l=Ct(n),d=!l&&ts(n),S=!l&&!d&&ga(n),L=!l&&!d&&!S&&Qs(n),B=l||d||S||L,W=B?Yo(n.length,Ps):[],Z=W.length;for(var me in n)(a||nn.call(n,me))&&!(B&&(me=="length"||S&&(me=="offset"||me=="parent")||L&&(me=="buffer"||me=="byteLength"||me=="byteOffset")||Or(me,Z)))&&W.push(me);return W}function Rc(n){var a=n.length;return a?n[h(0,a-1)]:t}function Jf(n,a){return Jc(Un(n),Ir(a,0,n.length))}function Qf(n){return Jc(Un(n))}function sl(n,a,l){(l!==t&&!ji(n[a],l)||l===t&&!(a in n))&&Yi(n,a,l)}function Pr(n,a,l){var d=n[a];(!(nn.call(n,a)&&ji(d,l))||l===t&&!(a in n))&&Yi(n,a,l)}function Qn(n,a){for(var l=n.length;l--;)if(ji(n[l][0],a))return l;return-1}function pr(n,a,l,d){return Oi(n,function(S,L,B){a(d,S,l(S),B)}),d}function qi(n,a){return n&&Xn(a,$n(a),n)}function eh(n,a){return n&&Xn(a,xi(a),n)}function Yi(n,a,l){a=="__proto__"&&qa?qa(n,a,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[a]=l}function ol(n,a){for(var l=-1,d=a.length,S=re(d),L=n==null;++l<d;)S[l]=L?t:Ch(n,a[l]);return S}function Ir(n,a,l){return n===n&&(l!==t&&(n=n<=l?n:l),a!==t&&(n=n>=a?n:a)),n}function _i(n,a,l,d,S,L){var B,W=a&x,Z=a&M,me=a&b;if(l&&(B=S?l(n,d,S,L):l(n)),B!==t)return B;if(!bn(n))return n;var _e=Ct(n);if(_e){if(B=k_(n),!W)return Un(n,B)}else{var Ee=ei(n),Ge=Ee==Q||Ee==xn;if(ga(n))return Kt(n,W);if(Ee==_t||Ee==Ae||Ge&&!S){if(B=Z||Ge?{}:ap(n),!W)return Z?vl(n,eh(B,n)):_l(n,qi(B,n))}else{if(!cn[Ee])return S?n:{};B=V_(n,Ee,W)}}L||(L=new Ti);var nt=L.get(n);if(nt)return nt;L.set(n,B),Up(n)?n.forEach(function(ht){B.add(_i(ht,a,l,ht,n,L))}):Ip(n)&&n.forEach(function(ht,Gt){B.set(Gt,_i(ht,a,l,Gt,n,L))});var ft=me?Z?ph:dh:Z?xi:$n,Ut=_e?t:ft(n);return mi(Ut||n,function(ht,Gt){Ut&&(Gt=ht,ht=n[Gt]),Pr(B,Gt,_i(ht,a,l,Gt,n,L))}),B}function th(n){var a=$n(n);return function(l){return Lc(l,n,a)}}function Lc(n,a,l){var d=l.length;if(n==null)return!d;for(n=tn(n);d--;){var S=l[d],L=a[S],B=n[S];if(B===t&&!(S in n)||!L(B))return!1}return!0}function Pc(n,a,l){if(typeof n!="function")throw new gi(u);return bl(function(){n.apply(t,l)},a)}function Ka(n,a,l,d){var S=-1,L=Ss,B=!0,W=n.length,Z=[],me=a.length;if(!W)return Z;l&&(a=mn(a,ai(l))),d?(L=ys,B=!1):a.length>=s&&(L=Va,B=!1,a=new dr(a));e:for(;++S<W;){var _e=n[S],Ee=l==null?_e:l(_e);if(_e=d||_e!==0?_e:0,B&&Ee===Ee){for(var Ge=me;Ge--;)if(a[Ge]===Ee)continue e;Z.push(_e)}else L(a,Ee,d)||Z.push(_e)}return Z}var Oi=Xd(Bi),Ic=Xd(cl,!0);function nh(n,a){var l=!0;return Oi(n,function(d,S,L){return l=!!a(d,S,L),l}),l}function Vs(n,a,l){for(var d=-1,S=n.length;++d<S;){var L=n[d],B=a(L);if(B!=null&&(W===t?B===B&&!Ci(B):l(B,W)))var W=B,Z=L}return Z}function ih(n,a,l,d){var S=n.length;for(l=Dt(l),l<0&&(l=-l>S?0:S+l),d=d===t||d>S?S:Dt(d),d<0&&(d+=S),d=l>d?0:Fp(d);l<d;)n[l++]=a;return n}function Dc(n,a){var l=[];return Oi(n,function(d,S,L){a(d,S,L)&&l.push(d)}),l}function In(n,a,l,d,S){var L=-1,B=n.length;for(l||(l=X_),S||(S=[]);++L<B;){var W=n[L];a>0&&l(W)?a>1?In(W,a-1,l,d,S):or(S,W):d||(S[S.length]=W)}return S}var ll=$d(),Uc=$d(!0);function Bi(n,a){return n&&ll(n,a,$n)}function cl(n,a){return n&&Uc(n,a,$n)}function Ws(n,a){return sr(a,function(l){return Br(n[l])})}function Dr(n,a){a=xt(a,n);for(var l=0,d=a.length;n!=null&&l<d;)n=n[_r(a[l++])];return l&&l==d?n:t}function Xs(n,a,l){var d=a(n);return Ct(n)?d:or(d,l(n))}function Wn(n){return n==null?n===t?de:rt:fr&&fr in tn(n)?z_(n):J_(n)}function ul(n,a){return n>a}function rh(n,a){return n!=null&&nn.call(n,a)}function ah(n,a){return n!=null&&a in tn(n)}function Nc(n,a,l){return n>=Vn(a,l)&&n<Cn(a,l)}function $s(n,a,l){for(var d=l?ys:Ss,S=n[0].length,L=n.length,B=L,W=re(L),Z=1/0,me=[];B--;){var _e=n[B];B&&a&&(_e=mn(_e,ai(a))),Z=Vn(_e.length,Z),W[B]=!l&&(a||S>=120&&_e.length>=120)?new dr(B&&_e):t}_e=n[0];var Ee=-1,Ge=W[0];e:for(;++Ee<S&&me.length<Z;){var nt=_e[Ee],ft=a?a(nt):nt;if(nt=l||nt!==0?nt:0,!(Ge?Va(Ge,ft):d(me,ft,l))){for(B=L;--B;){var Ut=W[B];if(!(Ut?Va(Ut,ft):d(n[B],ft,l)))continue e}Ge&&Ge.push(ft),me.push(nt)}}return me}function Fc(n,a,l,d){return Bi(n,function(S,L,B){a(d,l(S),L,B)}),d}function pa(n,a,l){a=xt(a,n),n=cp(n,a);var d=n==null?n:n[_r(Gi(a))];return d==null?t:ri(d,n,l)}function Oc(n){return wn(n)&&Wn(n)==Ae}function Bc(n){return wn(n)&&Wn(n)==ot}function Zi(n){return wn(n)&&Wn(n)==ke}function gn(n,a,l,d,S){return n===a?!0:n==null||a==null||!wn(n)&&!wn(a)?n!==n&&a!==a:sh(n,a,l,d,gn,S)}function sh(n,a,l,d,S,L){var B=Ct(n),W=Ct(a),Z=B?He:ei(n),me=W?He:ei(a);Z=Z==Ae?_t:Z,me=me==Ae?_t:me;var _e=Z==_t,Ee=me==_t,Ge=Z==me;if(Ge&&ga(n)){if(!ga(a))return!1;B=!0,_e=!1}if(Ge&&!_e)return L||(L=new Ti),B||Qs(n)?np(n,a,l,d,S,L):O_(n,a,Z,l,d,S,L);if(!(l&w)){var nt=_e&&nn.call(n,"__wrapped__"),ft=Ee&&nn.call(a,"__wrapped__");if(nt||ft){var Ut=nt?n.value():n,ht=ft?a.value():a;return L||(L=new Ti),S(Ut,ht,l,d,L)}}return Ge?(L||(L=new Ti),B_(n,a,l,d,S,L)):!1}function oh(n){return wn(n)&&ei(n)==We}function qs(n,a,l,d){var S=l.length,L=S,B=!d;if(n==null)return!L;for(n=tn(n);S--;){var W=l[S];if(B&&W[2]?W[1]!==n[W[0]]:!(W[0]in n))return!1}for(;++S<L;){W=l[S];var Z=W[0],me=n[Z],_e=W[1];if(B&&W[2]){if(me===t&&!(Z in n))return!1}else{var Ee=new Ti;if(d)var Ge=d(me,_e,Z,n,a,Ee);if(!(Ge===t?gn(_e,me,w|E,d,Ee):Ge))return!1}}return!0}function fl(n){if(!bn(n)||q_(n))return!1;var a=Br(n)?Tf:ae;return a.test(es(n))}function Ys(n){return wn(n)&&Wn(n)==$t}function zc(n){return wn(n)&&ei(n)==U}function lh(n){return wn(n)&&ru(n.length)&&!!hn[Wn(n)]}function hl(n){return typeof n=="function"?n:n==null?Mi:typeof n=="object"?Ct(n)?ml(n[0],n[1]):kc(n):qp(n)}function dl(n){if(!Ml(n))return Lf(n);var a=[];for(var l in tn(n))nn.call(n,l)&&l!="constructor"&&a.push(l);return a}function Gc(n){if(!bn(n))return j_(n);var a=Ml(n),l=[];for(var d in n)d=="constructor"&&(a||!nn.call(n,d))||l.push(d);return l}function pl(n,a){return n<a}function Hc(n,a){var l=-1,d=vi(n)?re(n.length):[];return Oi(n,function(S,L,B){d[++l]=a(S,L,B)}),d}function kc(n){var a=gh(n);return a.length==1&&a[0][2]?op(a[0][0],a[0][1]):function(l){return l===n||qs(l,n,a)}}function ml(n,a){return vh(n)&&sp(a)?op(_r(n),a):function(l){var d=Ch(l,n);return d===t&&d===a?Rh(l,n):gn(a,d,w|E)}}function ja(n,a,l,d,S){n!==a&&ll(a,function(L,B){if(S||(S=new Ti),bn(L))ch(n,a,B,l,ja,d,S);else{var W=d?d(Mh(n,B),L,B+"",n,a,S):t;W===t&&(W=L),sl(n,B,W)}},xi)}function ch(n,a,l,d,S,L,B){var W=Mh(n,l),Z=Mh(a,l),me=B.get(Z);if(me){sl(n,l,me);return}var _e=L?L(W,Z,l+"",n,a,B):t,Ee=_e===t;if(Ee){var Ge=Ct(Z),nt=!Ge&&ga(Z),ft=!Ge&&!nt&&Qs(Z);_e=Z,Ge||nt||ft?Ct(W)?_e=W:Rn(W)?_e=Un(W):nt?(Ee=!1,_e=Kt(Z,!0)):ft?(Ee=!1,_e=Ki(Z,!0)):_e=[]:Sl(Z)||ts(Z)?(_e=W,ts(W)?_e=Op(W):(!bn(W)||Br(W))&&(_e=ap(Z))):Ee=!1}Ee&&(B.set(Z,_e),S(_e,Z,d,L,B),B.delete(Z)),sl(n,l,_e)}function Ja(n,a){var l=n.length;if(l)return a+=a<0?l:0,Or(a,l)?n[a]:t}function Zs(n,a,l){a.length?a=mn(a,function(L){return Ct(L)?function(B){return Dr(B,L.length===1?L[0]:L)}:L}):a=[Mi];var d=-1;a=mn(a,ai(ut()));var S=Hc(n,function(L,B,W){var Z=mn(a,function(me){return me(L)});return{criteria:Z,index:++d,value:L}});return df(S,function(L,B){return ma(L,B,l)})}function Vc(n,a){return gl(n,a,function(l,d){return Rh(n,d)})}function gl(n,a,l){for(var d=-1,S=a.length,L={};++d<S;){var B=a[d],W=Dr(n,B);l(W,B)&&G(L,xt(B,n),W)}return L}function uh(n){return function(a){return Dr(a,n)}}function Tn(n,a,l,d){var S=d?lc:aa,L=-1,B=a.length,W=n;for(n===a&&(a=Un(a)),l&&(W=mn(n,ai(l)));++L<B;)for(var Z=0,me=a[L],_e=l?l(me):me;(Z=S(W,_e,Z,d))>-1;)W!==n&&zs.call(W,Z,1),zs.call(n,Z,1);return n}function Wc(n,a){for(var l=n?a.length:0,d=l-1;l--;){var S=a[l];if(l==d||S!==L){var L=S;Or(S)?zs.call(n,S,1):Vt(n,S)}}return n}function h(n,a){return n+Ni(Jn()*(a-n+1))}function v(n,a,l,d){for(var S=-1,L=Cn(Gs((a-n)/(l||1)),0),B=re(L);L--;)B[d?L:++S]=n,n+=l;return B}function y(n,a){var l="";if(!n||a<1||a>ce)return l;do a%2&&(l+=n),a=Ni(a/2),a&&(n+=n);while(a);return l}function P(n,a){return bh(lp(n,a,Mi),n+"")}function V(n){return Rc(eo(n))}function X(n,a){var l=eo(n);return Jc(l,Ir(a,0,l.length))}function G(n,a,l,d){if(!bn(n))return n;a=xt(a,n);for(var S=-1,L=a.length,B=L-1,W=n;W!=null&&++S<L;){var Z=_r(a[S]),me=l;if(Z==="__proto__"||Z==="constructor"||Z==="prototype")return n;if(S!=B){var _e=W[Z];me=d?d(_e,Z,W):t,me===t&&(me=bn(_e)?_e:Or(a[S+1])?[]:{})}Pr(W,Z,me),W=W[Z]}return n}var K=la?function(n,a){return la.set(n,a),n}:Mi,ee=qa?function(n,a){return qa(n,"toString",{configurable:!0,enumerable:!1,value:Ph(a),writable:!0})}:Mi;function he(n){return Jc(eo(n))}function ge(n,a,l){var d=-1,S=n.length;a<0&&(a=-a>S?0:S+a),l=l>S?S:l,l<0&&(l+=S),S=a>l?0:l-a>>>0,a>>>=0;for(var L=re(S);++d<S;)L[d]=n[d+a];return L}function ze(n,a){var l;return Oi(n,function(d,S,L){return l=a(d,S,L),!l}),!!l}function Re(n,a,l){var d=0,S=n==null?d:n.length;if(typeof a=="number"&&a===a&&S<=Mt){for(;d<S;){var L=d+S>>>1,B=n[L];B!==null&&!Ci(B)&&(l?B<=a:B<a)?d=L+1:S=L}return S}return qe(n,a,Mi,l)}function qe(n,a,l,d){var S=0,L=n==null?0:n.length;if(L===0)return 0;a=l(a);for(var B=a!==a,W=a===null,Z=Ci(a),me=a===t;S<L;){var _e=Ni((S+L)/2),Ee=l(n[_e]),Ge=Ee!==t,nt=Ee===null,ft=Ee===Ee,Ut=Ci(Ee);if(B)var ht=d||ft;else me?ht=ft&&(d||Ge):W?ht=ft&&Ge&&(d||!nt):Z?ht=ft&&Ge&&!nt&&(d||!Ut):nt||Ut?ht=!1:ht=d?Ee<=a:Ee<a;ht?S=_e+1:L=_e}return Vn(L,Ze)}function Ye(n,a){for(var l=-1,d=n.length,S=0,L=[];++l<d;){var B=n[l],W=a?a(B):B;if(!l||!ji(W,Z)){var Z=W;L[S++]=B===0?0:B}}return L}function Pt(n){return typeof n=="number"?n:Ci(n)?Se:+n}function ct(n){if(typeof n=="string")return n;if(Ct(n))return mn(n,ct)+"";if(Ci(n))return wc?wc.call(n):"";var a=n+"";return a=="0"&&1/n==-xe?"-0":a}function At(n,a,l){var d=-1,S=Ss,L=n.length,B=!0,W=[],Z=W;if(l)B=!1,S=ys;else if(L>=s){var me=a?null:N_(n);if(me)return Xa(me);B=!1,S=Va,Z=new dr}else Z=a?[]:W;e:for(;++d<L;){var _e=n[d],Ee=a?a(_e):_e;if(_e=l||_e!==0?_e:0,B&&Ee===Ee){for(var Ge=Z.length;Ge--;)if(Z[Ge]===Ee)continue e;a&&Z.push(Ee),W.push(_e)}else S(Z,Ee,l)||(Z!==W&&Z.push(Ee),W.push(_e))}return W}function Vt(n,a){return a=xt(a,n),n=cp(n,a),n==null||delete n[_r(Gi(a))]}function Dn(n,a,l,d){return G(n,a,l(Dr(n,a)),d)}function Mn(n,a,l,d){for(var S=n.length,L=d?S:-1;(d?L--:++L<S)&&a(n[L],L,n););return l?ge(n,d?0:L,d?L+1:S):ge(n,d?L+1:0,d?S:L)}function Yn(n,a){var l=n;return l instanceof Bt&&(l=l.value()),Xo(a,function(d,S){return S.func.apply(S.thisArg,or([d],S.args))},l)}function Ot(n,a,l){var d=n.length;if(d<2)return d?At(n[0]):[];for(var S=-1,L=re(d);++S<d;)for(var B=n[S],W=-1;++W<d;)W!=S&&(L[S]=Ka(L[S]||B,n[W],a,l));return At(In(L,1),a,l)}function Pe(n,a,l){for(var d=-1,S=n.length,L=a.length,B={};++d<S;){var W=d<L?a[d]:t;l(B,n[d],W)}return B}function it(n){return Rn(n)?n:[]}function It(n){return typeof n=="function"?n:Mi}function xt(n,a){return Ct(n)?n:vh(n,a)?[n]:dp(an(n))}var Bn=P;function Wt(n,a,l){var d=n.length;return l=l===t?d:l,!a&&l>=d?n:ge(n,a,l)}var zt=wf||function(n){return Pn.clearTimeout(n)};function Kt(n,a){if(a)return n.slice();var l=n.length,d=vc?vc(l):new n.constructor(l);return n.copy(d),d}function Yt(n){var a=new n.constructor(n.byteLength);return new Os(a).set(new Os(n)),a}function rn(n,a){var l=a?Yt(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Ai(n){var a=new n.constructor(n.source,Ms.exec(n));return a.lastIndex=n.lastIndex,a}function mr(n){return Fi?tn(Fi.call(n)):{}}function Ki(n,a){var l=a?Yt(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Ur(n,a){if(n!==a){var l=n!==t,d=n===null,S=n===n,L=Ci(n),B=a!==t,W=a===null,Z=a===a,me=Ci(a);if(!W&&!me&&!L&&n>a||L&&B&&Z&&!W&&!me||d&&B&&Z||!l&&Z||!S)return 1;if(!d&&!L&&!me&&n<a||me&&l&&S&&!d&&!L||W&&l&&S||!B&&S||!Z)return-1}return 0}function ma(n,a,l){for(var d=-1,S=n.criteria,L=a.criteria,B=S.length,W=l.length;++d<B;){var Z=Ur(S[d],L[d]);if(Z){if(d>=W)return Z;var me=l[d];return Z*(me=="desc"?-1:1)}}return n.index-a.index}function zi(n,a,l,d){for(var S=-1,L=n.length,B=l.length,W=-1,Z=a.length,me=Cn(L-B,0),_e=re(Z+me),Ee=!d;++W<Z;)_e[W]=a[W];for(;++S<B;)(Ee||S<L)&&(_e[l[S]]=n[S]);for(;me--;)_e[W++]=n[S++];return _e}function gr(n,a,l,d){for(var S=-1,L=n.length,B=-1,W=l.length,Z=-1,me=a.length,_e=Cn(L-W,0),Ee=re(_e+me),Ge=!d;++S<_e;)Ee[S]=n[S];for(var nt=S;++Z<me;)Ee[nt+Z]=a[Z];for(;++B<W;)(Ge||S<L)&&(Ee[nt+l[B]]=n[S++]);return Ee}function Un(n,a){var l=-1,d=n.length;for(a||(a=re(d));++l<d;)a[l]=n[l];return a}function Xn(n,a,l,d){var S=!l;l||(l={});for(var L=-1,B=a.length;++L<B;){var W=a[L],Z=d?d(l[W],n[W],W,l,n):t;Z===t&&(Z=n[W]),S?Yi(l,W,Z):Pr(l,W,Z)}return l}function _l(n,a){return Xn(n,_h(n),a)}function vl(n,a){return Xn(n,ip(n),a)}function Xc(n,a){return function(l,d){var S=Ct(l)?of:pr,L=a?a():{};return S(l,n,ut(d,2),L)}}function Ks(n){return P(function(a,l){var d=-1,S=l.length,L=S>1?l[S-1]:t,B=S>2?l[2]:t;for(L=n.length>3&&typeof L=="function"?(S--,L):t,B&&si(l[0],l[1],B)&&(L=S<3?t:L,S=1),a=tn(a);++d<S;){var W=l[d];W&&n(a,W,d,L)}return a})}function Xd(n,a){return function(l,d){if(l==null)return l;if(!vi(l))return n(l,d);for(var S=l.length,L=a?S:-1,B=tn(l);(a?L--:++L<S)&&d(B[L],L,B)!==!1;);return l}}function $d(n){return function(a,l,d){for(var S=-1,L=tn(a),B=d(a),W=B.length;W--;){var Z=B[n?W:++S];if(l(L[Z],Z,L)===!1)break}return a}}function I_(n,a,l){var d=a&g,S=xl(n);function L(){var B=this&&this!==Pn&&this instanceof L?S:n;return B.apply(d?l:this,arguments)}return L}function qd(n){return function(a){a=an(a);var l=sa(a)?yi(a):t,d=l?l[0]:a.charAt(0),S=l?Wt(l,1).join(""):a.slice(1);return d[n]()+S}}function js(n){return function(a){return Xo(Xp(Wp(a).replace(tf,"")),n,"")}}function xl(n){return function(){var a=arguments;switch(a.length){case 0:return new n;case 1:return new n(a[0]);case 2:return new n(a[0],a[1]);case 3:return new n(a[0],a[1],a[2]);case 4:return new n(a[0],a[1],a[2],a[3]);case 5:return new n(a[0],a[1],a[2],a[3],a[4]);case 6:return new n(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new n(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var l=fa(n.prototype),d=n.apply(l,a);return bn(d)?d:l}}function D_(n,a,l){var d=xl(n);function S(){for(var L=arguments.length,B=re(L),W=L,Z=Js(S);W--;)B[W]=arguments[W];var me=L<3&&B[0]!==Z&&B[L-1]!==Z?[]:Xi(B,Z);if(L-=me.length,L<l)return Jd(n,a,$c,S.placeholder,t,B,me,t,t,l-L);var _e=this&&this!==Pn&&this instanceof S?d:n;return ri(_e,this,B)}return S}function Yd(n){return function(a,l,d){var S=tn(a);if(!vi(a)){var L=ut(l,3);a=$n(a),l=function(W){return L(S[W],W,S)}}var B=n(a,l,d);return B>-1?S[L?a[B]:B]:t}}function Zd(n){return Fr(function(a){var l=a.length,d=l,S=On.prototype.thru;for(n&&a.reverse();d--;){var L=a[d];if(typeof L!="function")throw new gi(u);if(S&&!B&&Kc(L)=="wrapper")var B=new On([],!0)}for(d=B?d:l;++d<l;){L=a[d];var W=Kc(L),Z=W=="wrapper"?mh(L):t;Z&&xh(Z[0])&&Z[1]==(F|R|$|J)&&!Z[4].length&&Z[9]==1?B=B[Kc(Z[0])].apply(B,Z[3]):B=L.length==1&&xh(L)?B[W]():B.thru(L)}return function(){var me=arguments,_e=me[0];if(B&&me.length==1&&Ct(_e))return B.plant(_e).value();for(var Ee=0,Ge=l?a[Ee].apply(this,me):_e;++Ee<l;)Ge=a[Ee].call(this,Ge);return Ge}})}function $c(n,a,l,d,S,L,B,W,Z,me){var _e=a&F,Ee=a&g,Ge=a&_,nt=a&(R|N),ft=a&Te,Ut=Ge?t:xl(n);function ht(){for(var Gt=arguments.length,Xt=re(Gt),Ri=Gt;Ri--;)Xt[Ri]=arguments[Ri];if(nt)var oi=Js(ht),Li=pf(Xt,oi);if(d&&(Xt=zi(Xt,d,S,nt)),L&&(Xt=gr(Xt,L,B,nt)),Gt-=Li,nt&&Gt<me){var Ln=Xi(Xt,oi);return Jd(n,a,$c,ht.placeholder,l,Xt,Ln,W,Z,me-Gt)}var Ji=Ee?l:this,Gr=Ge?Ji[n]:n;return Gt=Xt.length,W?Xt=Q_(Xt,W):ft&&Gt>1&&Xt.reverse(),_e&&Z<Gt&&(Xt.length=Z),this&&this!==Pn&&this instanceof ht&&(Gr=Ut||xl(Gr)),Gr.apply(Ji,Xt)}return ht}function Kd(n,a){return function(l,d){return Fc(l,n,a(d),{})}}function qc(n,a){return function(l,d){var S;if(l===t&&d===t)return a;if(l!==t&&(S=l),d!==t){if(S===t)return d;typeof l=="string"||typeof d=="string"?(l=ct(l),d=ct(d)):(l=Pt(l),d=Pt(d)),S=n(l,d)}return S}}function fh(n){return Fr(function(a){return a=mn(a,ai(ut())),P(function(l){var d=this;return n(a,function(S){return ri(S,d,l)})})})}function Yc(n,a){a=a===t?" ":ct(a);var l=a.length;if(l<2)return l?y(a,n):a;var d=y(a,Gs(n/Ar(a)));return sa(a)?Wt(yi(d),0,n).join(""):d.slice(0,n)}function U_(n,a,l,d){var S=a&g,L=xl(n);function B(){for(var W=-1,Z=arguments.length,me=-1,_e=d.length,Ee=re(_e+Z),Ge=this&&this!==Pn&&this instanceof B?L:n;++me<_e;)Ee[me]=d[me];for(;Z--;)Ee[me++]=arguments[++W];return ri(Ge,S?l:this,Ee)}return B}function jd(n){return function(a,l,d){return d&&typeof d!="number"&&si(a,l,d)&&(l=d=t),a=zr(a),l===t?(l=a,a=0):l=zr(l),d=d===t?a<l?1:-1:zr(d),v(a,l,d,n)}}function Zc(n){return function(a,l){return typeof a=="string"&&typeof l=="string"||(a=Hi(a),l=Hi(l)),n(a,l)}}function Jd(n,a,l,d,S,L,B,W,Z,me){var _e=a&R,Ee=_e?B:t,Ge=_e?t:B,nt=_e?L:t,ft=_e?t:L;a|=_e?$:D,a&=~(_e?D:$),a&H||(a&=~(g|_));var Ut=[n,a,S,nt,Ee,ft,Ge,W,Z,me],ht=l.apply(t,Ut);return xh(n)&&up(ht,Ut),ht.placeholder=d,fp(ht,n,a)}function hh(n){var a=En[n];return function(l,d){if(l=Hi(l),d=d==null?0:Vn(Dt(d),292),d&&Cr(l)){var S=(an(l)+"e").split("e"),L=a(S[0]+"e"+(+S[1]+d));return S=(an(L)+"e").split("e"),+(S[0]+"e"+(+S[1]-d))}return a(l)}}var N_=Rr&&1/Xa(new Rr([,-0]))[1]==xe?function(n){return new Rr(n)}:Uh;function Qd(n){return function(a){var l=ei(a);return l==We?Wa(a):l==U?pc(a):ka(a,n(a))}}function Nr(n,a,l,d,S,L,B,W){var Z=a&_;if(!Z&&typeof n!="function")throw new gi(u);var me=d?d.length:0;if(me||(a&=~($|D),d=S=t),B=B===t?B:Cn(Dt(B),0),W=W===t?W:Dt(W),me-=S?S.length:0,a&D){var _e=d,Ee=S;d=S=t}var Ge=Z?t:mh(n),nt=[n,a,l,d,S,_e,Ee,L,B,W];if(Ge&&K_(nt,Ge),n=nt[0],a=nt[1],l=nt[2],d=nt[3],S=nt[4],W=nt[9]=nt[9]===t?Z?0:n.length:Cn(nt[9]-me,0),!W&&a&(R|N)&&(a&=~(R|N)),!a||a==g)var ft=I_(n,a,l);else a==R||a==N?ft=D_(n,a,W):(a==$||a==(g|$))&&!S.length?ft=U_(n,a,l,d):ft=$c.apply(t,nt);var Ut=Ge?K:up;return fp(Ut(ft,nt),n,a)}function ep(n,a,l,d){return n===t||ji(n,cr[l])&&!nn.call(d,l)?a:n}function tp(n,a,l,d,S,L){return bn(n)&&bn(a)&&(L.set(a,n),ja(n,a,t,tp,L),L.delete(a)),n}function F_(n){return Sl(n)?t:n}function np(n,a,l,d,S,L){var B=l&w,W=n.length,Z=a.length;if(W!=Z&&!(B&&Z>W))return!1;var me=L.get(n),_e=L.get(a);if(me&&_e)return me==a&&_e==n;var Ee=-1,Ge=!0,nt=l&E?new dr:t;for(L.set(n,a),L.set(a,n);++Ee<W;){var ft=n[Ee],Ut=a[Ee];if(d)var ht=B?d(Ut,ft,Ee,a,n,L):d(ft,Ut,Ee,n,a,L);if(ht!==t){if(ht)continue;Ge=!1;break}if(nt){if(!Es(a,function(Gt,Xt){if(!Va(nt,Xt)&&(ft===Gt||S(ft,Gt,l,d,L)))return nt.push(Xt)})){Ge=!1;break}}else if(!(ft===Ut||S(ft,Ut,l,d,L))){Ge=!1;break}}return L.delete(n),L.delete(a),Ge}function O_(n,a,l,d,S,L,B){switch(l){case et:if(n.byteLength!=a.byteLength||n.byteOffset!=a.byteOffset)return!1;n=n.buffer,a=a.buffer;case ot:return!(n.byteLength!=a.byteLength||!L(new Os(n),new Os(a)));case Je:case ke:case pt:return ji(+n,+a);case at:return n.name==a.name&&n.message==a.message;case $t:case T:return n==a+"";case We:var W=Wa;case U:var Z=d&w;if(W||(W=Xa),n.size!=a.size&&!Z)return!1;var me=B.get(n);if(me)return me==a;d|=E,B.set(n,a);var _e=np(W(n),W(a),d,S,L,B);return B.delete(n),_e;case le:if(Fi)return Fi.call(n)==Fi.call(a)}return!1}function B_(n,a,l,d,S,L){var B=l&w,W=dh(n),Z=W.length,me=dh(a),_e=me.length;if(Z!=_e&&!B)return!1;for(var Ee=Z;Ee--;){var Ge=W[Ee];if(!(B?Ge in a:nn.call(a,Ge)))return!1}var nt=L.get(n),ft=L.get(a);if(nt&&ft)return nt==a&&ft==n;var Ut=!0;L.set(n,a),L.set(a,n);for(var ht=B;++Ee<Z;){Ge=W[Ee];var Gt=n[Ge],Xt=a[Ge];if(d)var Ri=B?d(Xt,Gt,Ge,a,n,L):d(Gt,Xt,Ge,n,a,L);if(!(Ri===t?Gt===Xt||S(Gt,Xt,l,d,L):Ri)){Ut=!1;break}ht||(ht=Ge=="constructor")}if(Ut&&!ht){var oi=n.constructor,Li=a.constructor;oi!=Li&&"constructor"in n&&"constructor"in a&&!(typeof oi=="function"&&oi instanceof oi&&typeof Li=="function"&&Li instanceof Li)&&(Ut=!1)}return L.delete(n),L.delete(a),Ut}function Fr(n){return bh(lp(n,t,_p),n+"")}function dh(n){return Xs(n,$n,_h)}function ph(n){return Xs(n,xi,ip)}var mh=la?function(n){return la.get(n)}:Uh;function Kc(n){for(var a=n.name+"",l=ca[a],d=nn.call(ca,a)?l.length:0;d--;){var S=l[d],L=S.func;if(L==null||L==n)return S.name}return a}function Js(n){var a=nn.call(A,"placeholder")?A:n;return a.placeholder}function ut(){var n=A.iteratee||Ih;return n=n===Ih?hl:n,arguments.length?n(arguments[0],arguments[1]):n}function jc(n,a){var l=n.__data__;return $_(a)?l[typeof a=="string"?"string":"hash"]:l.map}function gh(n){for(var a=$n(n),l=a.length;l--;){var d=a[l],S=n[d];a[l]=[d,S,sp(S)]}return a}function Qa(n,a){var l=dc(n,a);return fl(l)?l:t}function z_(n){var a=nn.call(n,fr),l=n[fr];try{n[fr]=t;var d=!0}catch{}var S=Ns.call(n);return d&&(a?n[fr]=l:delete n[fr]),S}var _h=el?function(n){return n==null?[]:(n=tn(n),sr(el(n),function(a){return Mc.call(n,a)}))}:Nh,ip=el?function(n){for(var a=[];n;)or(a,_h(n)),n=Bs(n);return a}:Nh,ei=Wn;(Hs&&ei(new Hs(new ArrayBuffer(1)))!=et||hr&&ei(new hr)!=We||ks&&ei(ks.resolve())!=vt||Rr&&ei(new Rr)!=U||Ya&&ei(new Ya)!=Ce)&&(ei=function(n){var a=Wn(n),l=a==_t?n.constructor:t,d=l?es(l):"";if(d)switch(d){case Ec:return et;case Tc:return We;case If:return vt;case Df:return U;case Uf:return Ce}return a});function G_(n,a,l){for(var d=-1,S=l.length;++d<S;){var L=l[d],B=L.size;switch(L.type){case"drop":n+=B;break;case"dropRight":a-=B;break;case"take":a=Vn(a,n+B);break;case"takeRight":n=Cn(n,a-B);break}}return{start:n,end:a}}function H_(n){var a=n.match(vs);return a?a[1].split(Vi):[]}function rp(n,a,l){a=xt(a,n);for(var d=-1,S=a.length,L=!1;++d<S;){var B=_r(a[d]);if(!(L=n!=null&&l(n,B)))break;n=n[B]}return L||++d!=S?L:(S=n==null?0:n.length,!!S&&ru(S)&&Or(B,S)&&(Ct(n)||ts(n)))}function k_(n){var a=n.length,l=new n.constructor(a);return a&&typeof n[0]=="string"&&nn.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function ap(n){return typeof n.constructor=="function"&&!Ml(n)?fa(Bs(n)):{}}function V_(n,a,l){var d=n.constructor;switch(a){case ot:return Yt(n);case Je:case ke:return new d(+n);case et:return rn(n,l);case Ne:case Fe:case mt:case Ue:case sn:case bt:case tt:case Xe:case je:return Ki(n,l);case We:return new d;case pt:case T:return new d(n);case $t:return Ai(n);case U:return new d;case le:return mr(n)}}function W_(n,a){var l=a.length;if(!l)return n;var d=l-1;return a[d]=(l>1?"& ":"")+a[d],a=a.join(l>2?", ":" "),n.replace(Jr,`{
/* [wrapped with `+a+`] */
`)}function X_(n){return Ct(n)||ts(n)||!!(bc&&n&&n[bc])}function Or(n,a){var l=typeof n;return a=a??ce,!!a&&(l=="number"||l!="symbol"&&ie.test(n))&&n>-1&&n%1==0&&n<a}function si(n,a,l){if(!bn(l))return!1;var d=typeof a;return(d=="number"?vi(l)&&Or(a,l.length):d=="string"&&a in l)?ji(l[a],n):!1}function vh(n,a){if(Ct(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Ci(n)?!0:dn.test(n)||!Qt.test(n)||a!=null&&n in tn(a)}function $_(n){var a=typeof n;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?n!=="__proto__":n===null}function xh(n){var a=Kc(n),l=A[a];if(typeof l!="function"||!(a in Bt.prototype))return!1;if(n===l)return!0;var d=mh(l);return!!d&&n===d[0]}function q_(n){return!!Qo&&Qo in n}var Y_=Ds?Br:Fh;function Ml(n){var a=n&&n.constructor,l=typeof a=="function"&&a.prototype||cr;return n===l}function sp(n){return n===n&&!bn(n)}function op(n,a){return function(l){return l==null?!1:l[n]===a&&(a!==t||n in tn(l))}}function Z_(n){var a=nu(n,function(d){return l.size===p&&l.clear(),d}),l=a.cache;return a}function K_(n,a){var l=n[1],d=a[1],S=l|d,L=S<(g|_|F),B=d==F&&l==R||d==F&&l==J&&n[7].length<=a[8]||d==(F|J)&&a[7].length<=a[8]&&l==R;if(!(L||B))return n;d&g&&(n[2]=a[2],S|=l&g?0:H);var W=a[3];if(W){var Z=n[3];n[3]=Z?zi(Z,W,a[4]):W,n[4]=Z?Xi(n[3],m):a[4]}return W=a[5],W&&(Z=n[5],n[5]=Z?gr(Z,W,a[6]):W,n[6]=Z?Xi(n[5],m):a[6]),W=a[7],W&&(n[7]=W),d&F&&(n[8]=n[8]==null?a[8]:Vn(n[8],a[8])),n[9]==null&&(n[9]=a[9]),n[0]=a[0],n[1]=S,n}function j_(n){var a=[];if(n!=null)for(var l in tn(n))a.push(l);return a}function J_(n){return Ns.call(n)}function lp(n,a,l){return a=Cn(a===t?n.length-1:a,0),function(){for(var d=arguments,S=-1,L=Cn(d.length-a,0),B=re(L);++S<L;)B[S]=d[a+S];S=-1;for(var W=re(a+1);++S<a;)W[S]=d[S];return W[a]=l(B),ri(n,this,W)}}function cp(n,a){return a.length<2?n:Dr(n,ge(a,0,-1))}function Q_(n,a){for(var l=n.length,d=Vn(a.length,l),S=Un(n);d--;){var L=a[d];n[d]=Or(L,l)?S[L]:t}return n}function Mh(n,a){if(!(a==="constructor"&&typeof n[a]=="function")&&a!="__proto__")return n[a]}var up=hp(K),bl=Af||function(n,a){return Pn.setTimeout(n,a)},bh=hp(ee);function fp(n,a,l){var d=a+"";return bh(n,W_(d,ev(H_(d),l)))}function hp(n){var a=0,l=0;return function(){var d=Pf(),S=be-(d-l);if(l=d,S>0){if(++a>=we)return arguments[0]}else a=0;return n.apply(t,arguments)}}function Jc(n,a){var l=-1,d=n.length,S=d-1;for(a=a===t?d:a;++l<a;){var L=h(l,S),B=n[L];n[L]=n[l],n[l]=B}return n.length=a,n}var dp=Z_(function(n){var a=[];return n.charCodeAt(0)===46&&a.push(""),n.replace(kt,function(l,d,S,L){a.push(S?L.replace(Do,"$1"):d||l)}),a});function _r(n){if(typeof n=="string"||Ci(n))return n;var a=n+"";return a=="0"&&1/n==-xe?"-0":a}function es(n){if(n!=null){try{return Us.call(n)}catch{}try{return n+""}catch{}}return""}function ev(n,a){return mi(oe,function(l){var d="_."+l[0];a&l[1]&&!Ss(n,d)&&n.push(d)}),n.sort()}function pp(n){if(n instanceof Bt)return n.clone();var a=new On(n.__wrapped__,n.__chain__);return a.__actions__=Un(n.__actions__),a.__index__=n.__index__,a.__values__=n.__values__,a}function tv(n,a,l){(l?si(n,a,l):a===t)?a=1:a=Cn(Dt(a),0);var d=n==null?0:n.length;if(!d||a<1)return[];for(var S=0,L=0,B=re(Gs(d/a));S<d;)B[L++]=ge(n,S,S+=a);return B}function nv(n){for(var a=-1,l=n==null?0:n.length,d=0,S=[];++a<l;){var L=n[a];L&&(S[d++]=L)}return S}function iv(){var n=arguments.length;if(!n)return[];for(var a=re(n-1),l=arguments[0],d=n;d--;)a[d-1]=arguments[d];return or(Ct(l)?Un(l):[l],In(a,1))}var rv=P(function(n,a){return Rn(n)?Ka(n,In(a,1,Rn,!0)):[]}),av=P(function(n,a){var l=Gi(a);return Rn(l)&&(l=t),Rn(n)?Ka(n,In(a,1,Rn,!0),ut(l,2)):[]}),sv=P(function(n,a){var l=Gi(a);return Rn(l)&&(l=t),Rn(n)?Ka(n,In(a,1,Rn,!0),t,l):[]});function ov(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:Dt(a),ge(n,a<0?0:a,d)):[]}function lv(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:Dt(a),a=d-a,ge(n,0,a<0?0:a)):[]}function cv(n,a){return n&&n.length?Mn(n,ut(a,3),!0,!0):[]}function uv(n,a){return n&&n.length?Mn(n,ut(a,3),!0):[]}function fv(n,a,l,d){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&si(n,a,l)&&(l=0,d=S),ih(n,a,l,d)):[]}function mp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=l==null?0:Dt(l);return S<0&&(S=Cn(d+S,0)),Ts(n,ut(a,3),S)}function gp(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=d-1;return l!==t&&(S=Dt(l),S=l<0?Cn(d+S,0):Vn(S,d-1)),Ts(n,ut(a,3),S,!0)}function _p(n){var a=n==null?0:n.length;return a?In(n,1):[]}function hv(n){var a=n==null?0:n.length;return a?In(n,xe):[]}function dv(n,a){var l=n==null?0:n.length;return l?(a=a===t?1:Dt(a),In(n,a)):[]}function pv(n){for(var a=-1,l=n==null?0:n.length,d={};++a<l;){var S=n[a];d[S[0]]=S[1]}return d}function vp(n){return n&&n.length?n[0]:t}function mv(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=l==null?0:Dt(l);return S<0&&(S=Cn(d+S,0)),aa(n,a,S)}function gv(n){var a=n==null?0:n.length;return a?ge(n,0,-1):[]}var _v=P(function(n){var a=mn(n,it);return a.length&&a[0]===n[0]?$s(a):[]}),vv=P(function(n){var a=Gi(n),l=mn(n,it);return a===Gi(l)?a=t:l.pop(),l.length&&l[0]===n[0]?$s(l,ut(a,2)):[]}),xv=P(function(n){var a=Gi(n),l=mn(n,it);return a=typeof a=="function"?a:t,a&&l.pop(),l.length&&l[0]===n[0]?$s(l,t,a):[]});function Mv(n,a){return n==null?"":Rf.call(n,a)}function Gi(n){var a=n==null?0:n.length;return a?n[a-1]:t}function bv(n,a,l){var d=n==null?0:n.length;if(!d)return-1;var S=d;return l!==t&&(S=Dt(l),S=S<0?Cn(d+S,0):Vn(S,d-1)),a===a?xf(n,a,S):Ts(n,Ha,S,!0)}function Sv(n,a){return n&&n.length?Ja(n,Dt(a)):t}var yv=P(xp);function xp(n,a){return n&&n.length&&a&&a.length?Tn(n,a):n}function Ev(n,a,l){return n&&n.length&&a&&a.length?Tn(n,a,ut(l,2)):n}function Tv(n,a,l){return n&&n.length&&a&&a.length?Tn(n,a,t,l):n}var wv=Fr(function(n,a){var l=n==null?0:n.length,d=ol(n,a);return Wc(n,mn(a,function(S){return Or(S,l)?+S:S}).sort(Ur)),d});function Av(n,a){var l=[];if(!(n&&n.length))return l;var d=-1,S=[],L=n.length;for(a=ut(a,3);++d<L;){var B=n[d];a(B,d,n)&&(l.push(B),S.push(d))}return Wc(n,S),l}function Sh(n){return n==null?n:yc.call(n)}function Cv(n,a,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&si(n,a,l)?(a=0,l=d):(a=a==null?0:Dt(a),l=l===t?d:Dt(l)),ge(n,a,l)):[]}function Rv(n,a){return Re(n,a)}function Lv(n,a,l){return qe(n,a,ut(l,2))}function Pv(n,a){var l=n==null?0:n.length;if(l){var d=Re(n,a);if(d<l&&ji(n[d],a))return d}return-1}function Iv(n,a){return Re(n,a,!0)}function Dv(n,a,l){return qe(n,a,ut(l,2),!0)}function Uv(n,a){var l=n==null?0:n.length;if(l){var d=Re(n,a,!0)-1;if(ji(n[d],a))return d}return-1}function Nv(n){return n&&n.length?Ye(n):[]}function Fv(n,a){return n&&n.length?Ye(n,ut(a,2)):[]}function Ov(n){var a=n==null?0:n.length;return a?ge(n,1,a):[]}function Bv(n,a,l){return n&&n.length?(a=l||a===t?1:Dt(a),ge(n,0,a<0?0:a)):[]}function zv(n,a,l){var d=n==null?0:n.length;return d?(a=l||a===t?1:Dt(a),a=d-a,ge(n,a<0?0:a,d)):[]}function Gv(n,a){return n&&n.length?Mn(n,ut(a,3),!1,!0):[]}function Hv(n,a){return n&&n.length?Mn(n,ut(a,3)):[]}var kv=P(function(n){return At(In(n,1,Rn,!0))}),Vv=P(function(n){var a=Gi(n);return Rn(a)&&(a=t),At(In(n,1,Rn,!0),ut(a,2))}),Wv=P(function(n){var a=Gi(n);return a=typeof a=="function"?a:t,At(In(n,1,Rn,!0),t,a)});function Xv(n){return n&&n.length?At(n):[]}function $v(n,a){return n&&n.length?At(n,ut(a,2)):[]}function qv(n,a){return a=typeof a=="function"?a:t,n&&n.length?At(n,t,a):[]}function yh(n){if(!(n&&n.length))return[];var a=0;return n=sr(n,function(l){if(Rn(l))return a=Cn(l.length,a),!0}),Yo(a,function(l){return mn(n,As(l))})}function Mp(n,a){if(!(n&&n.length))return[];var l=yh(n);return a==null?l:mn(l,function(d){return ri(a,t,d)})}var Yv=P(function(n,a){return Rn(n)?Ka(n,a):[]}),Zv=P(function(n){return Ot(sr(n,Rn))}),Kv=P(function(n){var a=Gi(n);return Rn(a)&&(a=t),Ot(sr(n,Rn),ut(a,2))}),jv=P(function(n){var a=Gi(n);return a=typeof a=="function"?a:t,Ot(sr(n,Rn),t,a)}),Jv=P(yh);function Qv(n,a){return Pe(n||[],a||[],Pr)}function e0(n,a){return Pe(n||[],a||[],G)}var t0=P(function(n){var a=n.length,l=a>1?n[a-1]:t;return l=typeof l=="function"?(n.pop(),l):t,Mp(n,l)});function bp(n){var a=A(n);return a.__chain__=!0,a}function n0(n,a){return a(n),n}function Qc(n,a){return a(n)}var i0=Fr(function(n){var a=n.length,l=a?n[0]:0,d=this.__wrapped__,S=function(L){return ol(L,n)};return a>1||this.__actions__.length||!(d instanceof Bt)||!Or(l)?this.thru(S):(d=d.slice(l,+l+(a?1:0)),d.__actions__.push({func:Qc,args:[S],thisArg:t}),new On(d,this.__chain__).thru(function(L){return a&&!L.length&&L.push(t),L}))});function r0(){return bp(this)}function a0(){return new On(this.value(),this.__chain__)}function s0(){this.__values__===t&&(this.__values__=Np(this.value()));var n=this.__index__>=this.__values__.length,a=n?t:this.__values__[this.__index__++];return{done:n,value:a}}function o0(){return this}function l0(n){for(var a,l=this;l instanceof Za;){var d=pp(l);d.__index__=0,d.__values__=t,a?S.__wrapped__=d:a=d;var S=d;l=l.__wrapped__}return S.__wrapped__=n,a}function c0(){var n=this.__wrapped__;if(n instanceof Bt){var a=n;return this.__actions__.length&&(a=new Bt(this)),a=a.reverse(),a.__actions__.push({func:Qc,args:[Sh],thisArg:t}),new On(a,this.__chain__)}return this.thru(Sh)}function u0(){return Yn(this.__wrapped__,this.__actions__)}var f0=Xc(function(n,a,l){nn.call(n,l)?++n[l]:Yi(n,l,1)});function h0(n,a,l){var d=Ct(n)?sc:nh;return l&&si(n,a,l)&&(a=t),d(n,ut(a,3))}function d0(n,a){var l=Ct(n)?sr:Dc;return l(n,ut(a,3))}var p0=Yd(mp),m0=Yd(gp);function g0(n,a){return In(eu(n,a),1)}function _0(n,a){return In(eu(n,a),xe)}function v0(n,a,l){return l=l===t?1:Dt(l),In(eu(n,a),l)}function Sp(n,a){var l=Ct(n)?mi:Oi;return l(n,ut(a,3))}function yp(n,a){var l=Ct(n)?lf:Ic;return l(n,ut(a,3))}var x0=Xc(function(n,a,l){nn.call(n,l)?n[l].push(a):Yi(n,l,[a])});function M0(n,a,l,d){n=vi(n)?n:eo(n),l=l&&!d?Dt(l):0;var S=n.length;return l<0&&(l=Cn(S+l,0)),au(n)?l<=S&&n.indexOf(a,l)>-1:!!S&&aa(n,a,l)>-1}var b0=P(function(n,a,l){var d=-1,S=typeof a=="function",L=vi(n)?re(n.length):[];return Oi(n,function(B){L[++d]=S?ri(a,B,l):pa(B,a,l)}),L}),S0=Xc(function(n,a,l){Yi(n,l,a)});function eu(n,a){var l=Ct(n)?mn:Hc;return l(n,ut(a,3))}function y0(n,a,l,d){return n==null?[]:(Ct(a)||(a=a==null?[]:[a]),l=d?t:l,Ct(l)||(l=l==null?[]:[l]),Zs(n,a,l))}var E0=Xc(function(n,a,l){n[l?0:1].push(a)},function(){return[[],[]]});function T0(n,a,l){var d=Ct(n)?Xo:qo,S=arguments.length<3;return d(n,ut(a,4),l,S,Oi)}function w0(n,a,l){var d=Ct(n)?cf:qo,S=arguments.length<3;return d(n,ut(a,4),l,S,Ic)}function A0(n,a){var l=Ct(n)?sr:Dc;return l(n,iu(ut(a,3)))}function C0(n){var a=Ct(n)?Rc:V;return a(n)}function R0(n,a,l){(l?si(n,a,l):a===t)?a=1:a=Dt(a);var d=Ct(n)?Jf:X;return d(n,a)}function L0(n){var a=Ct(n)?Qf:he;return a(n)}function P0(n){if(n==null)return 0;if(vi(n))return au(n)?Ar(n):n.length;var a=ei(n);return a==We||a==U?n.size:dl(n).length}function I0(n,a,l){var d=Ct(n)?Es:ze;return l&&si(n,a,l)&&(a=t),d(n,ut(a,3))}var D0=P(function(n,a){if(n==null)return[];var l=a.length;return l>1&&si(n,a[0],a[1])?a=[]:l>2&&si(a[0],a[1],a[2])&&(a=[a[0]]),Zs(n,In(a,1),[])}),tu=Sc||function(){return Pn.Date.now()};function U0(n,a){if(typeof a!="function")throw new gi(u);return n=Dt(n),function(){if(--n<1)return a.apply(this,arguments)}}function Ep(n,a,l){return a=l?t:a,a=n&&a==null?n.length:a,Nr(n,F,t,t,t,t,a)}function Tp(n,a){var l;if(typeof a!="function")throw new gi(u);return n=Dt(n),function(){return--n>0&&(l=a.apply(this,arguments)),n<=1&&(a=t),l}}var Eh=P(function(n,a,l){var d=g;if(l.length){var S=Xi(l,Js(Eh));d|=$}return Nr(n,d,a,l,S)}),wp=P(function(n,a,l){var d=g|_;if(l.length){var S=Xi(l,Js(wp));d|=$}return Nr(a,d,n,l,S)});function Ap(n,a,l){a=l?t:a;var d=Nr(n,R,t,t,t,t,t,a);return d.placeholder=Ap.placeholder,d}function Cp(n,a,l){a=l?t:a;var d=Nr(n,N,t,t,t,t,t,a);return d.placeholder=Cp.placeholder,d}function Rp(n,a,l){var d,S,L,B,W,Z,me=0,_e=!1,Ee=!1,Ge=!0;if(typeof n!="function")throw new gi(u);a=Hi(a)||0,bn(l)&&(_e=!!l.leading,Ee="maxWait"in l,L=Ee?Cn(Hi(l.maxWait)||0,a):L,Ge="trailing"in l?!!l.trailing:Ge);function nt(Ln){var Ji=d,Gr=S;return d=S=t,me=Ln,B=n.apply(Gr,Ji),B}function ft(Ln){return me=Ln,W=bl(Gt,a),_e?nt(Ln):B}function Ut(Ln){var Ji=Ln-Z,Gr=Ln-me,Yp=a-Ji;return Ee?Vn(Yp,L-Gr):Yp}function ht(Ln){var Ji=Ln-Z,Gr=Ln-me;return Z===t||Ji>=a||Ji<0||Ee&&Gr>=L}function Gt(){var Ln=tu();if(ht(Ln))return Xt(Ln);W=bl(Gt,Ut(Ln))}function Xt(Ln){return W=t,Ge&&d?nt(Ln):(d=S=t,B)}function Ri(){W!==t&&zt(W),me=0,d=Z=S=W=t}function oi(){return W===t?B:Xt(tu())}function Li(){var Ln=tu(),Ji=ht(Ln);if(d=arguments,S=this,Z=Ln,Ji){if(W===t)return ft(Z);if(Ee)return zt(W),W=bl(Gt,a),nt(Z)}return W===t&&(W=bl(Gt,a)),B}return Li.cancel=Ri,Li.flush=oi,Li}var N0=P(function(n,a){return Pc(n,1,a)}),F0=P(function(n,a,l){return Pc(n,Hi(a)||0,l)});function O0(n){return Nr(n,Te)}function nu(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new gi(u);var l=function(){var d=arguments,S=a?a.apply(this,d):d[0],L=l.cache;if(L.has(S))return L.get(S);var B=n.apply(this,d);return l.cache=L.set(S,B)||L,B};return l.cache=new(nu.Cache||Ei),l}nu.Cache=Ei;function iu(n){if(typeof n!="function")throw new gi(u);return function(){var a=arguments;switch(a.length){case 0:return!n.call(this);case 1:return!n.call(this,a[0]);case 2:return!n.call(this,a[0],a[1]);case 3:return!n.call(this,a[0],a[1],a[2])}return!n.apply(this,a)}}function B0(n){return Tp(2,n)}var z0=Bn(function(n,a){a=a.length==1&&Ct(a[0])?mn(a[0],ai(ut())):mn(In(a,1),ai(ut()));var l=a.length;return P(function(d){for(var S=-1,L=Vn(d.length,l);++S<L;)d[S]=a[S].call(this,d[S]);return ri(n,this,d)})}),Th=P(function(n,a){var l=Xi(a,Js(Th));return Nr(n,$,t,a,l)}),Lp=P(function(n,a){var l=Xi(a,Js(Lp));return Nr(n,D,t,a,l)}),G0=Fr(function(n,a){return Nr(n,J,t,t,t,a)});function H0(n,a){if(typeof n!="function")throw new gi(u);return a=a===t?a:Dt(a),P(n,a)}function k0(n,a){if(typeof n!="function")throw new gi(u);return a=a==null?0:Cn(Dt(a),0),P(function(l){var d=l[a],S=Wt(l,0,a);return d&&or(S,d),ri(n,this,S)})}function V0(n,a,l){var d=!0,S=!0;if(typeof n!="function")throw new gi(u);return bn(l)&&(d="leading"in l?!!l.leading:d,S="trailing"in l?!!l.trailing:S),Rp(n,a,{leading:d,maxWait:a,trailing:S})}function W0(n){return Ep(n,1)}function X0(n,a){return Th(It(a),n)}function $0(){if(!arguments.length)return[];var n=arguments[0];return Ct(n)?n:[n]}function q0(n){return _i(n,b)}function Y0(n,a){return a=typeof a=="function"?a:t,_i(n,b,a)}function Z0(n){return _i(n,x|b)}function K0(n,a){return a=typeof a=="function"?a:t,_i(n,x|b,a)}function j0(n,a){return a==null||Lc(n,a,$n(a))}function ji(n,a){return n===a||n!==n&&a!==a}var J0=Zc(ul),Q0=Zc(function(n,a){return n>=a}),ts=Oc(function(){return arguments}())?Oc:function(n){return wn(n)&&nn.call(n,"callee")&&!Mc.call(n,"callee")},Ct=re.isArray,ex=tc?ai(tc):Bc;function vi(n){return n!=null&&ru(n.length)&&!Br(n)}function Rn(n){return wn(n)&&vi(n)}function tx(n){return n===!0||n===!1||wn(n)&&Wn(n)==Je}var ga=Cf||Fh,nx=nc?ai(nc):Zi;function ix(n){return wn(n)&&n.nodeType===1&&!Sl(n)}function rx(n){if(n==null)return!0;if(vi(n)&&(Ct(n)||typeof n=="string"||typeof n.splice=="function"||ga(n)||Qs(n)||ts(n)))return!n.length;var a=ei(n);if(a==We||a==U)return!n.size;if(Ml(n))return!dl(n).length;for(var l in n)if(nn.call(n,l))return!1;return!0}function ax(n,a){return gn(n,a)}function sx(n,a,l){l=typeof l=="function"?l:t;var d=l?l(n,a):t;return d===t?gn(n,a,t,l):!!d}function wh(n){if(!wn(n))return!1;var a=Wn(n);return a==at||a==Ht||typeof n.message=="string"&&typeof n.name=="string"&&!Sl(n)}function ox(n){return typeof n=="number"&&Cr(n)}function Br(n){if(!bn(n))return!1;var a=Wn(n);return a==Q||a==xn||a==dt||a==Tt}function Pp(n){return typeof n=="number"&&n==Dt(n)}function ru(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ce}function bn(n){var a=typeof n;return n!=null&&(a=="object"||a=="function")}function wn(n){return n!=null&&typeof n=="object"}var Ip=Wo?ai(Wo):oh;function lx(n,a){return n===a||qs(n,a,gh(a))}function cx(n,a,l){return l=typeof l=="function"?l:t,qs(n,a,gh(a),l)}function ux(n){return Dp(n)&&n!=+n}function fx(n){if(Y_(n))throw new yt(o);return fl(n)}function hx(n){return n===null}function dx(n){return n==null}function Dp(n){return typeof n=="number"||wn(n)&&Wn(n)==pt}function Sl(n){if(!wn(n)||Wn(n)!=_t)return!1;var a=Bs(n);if(a===null)return!0;var l=nn.call(a,"constructor")&&a.constructor;return typeof l=="function"&&l instanceof l&&Us.call(l)==yf}var Ah=ic?ai(ic):Ys;function px(n){return Pp(n)&&n>=-ce&&n<=ce}var Up=rc?ai(rc):zc;function au(n){return typeof n=="string"||!Ct(n)&&wn(n)&&Wn(n)==T}function Ci(n){return typeof n=="symbol"||wn(n)&&Wn(n)==le}var Qs=ac?ai(ac):lh;function mx(n){return n===t}function gx(n){return wn(n)&&ei(n)==Ce}function _x(n){return wn(n)&&Wn(n)==ye}var vx=Zc(pl),xx=Zc(function(n,a){return n<=a});function Np(n){if(!n)return[];if(vi(n))return au(n)?yi(n):Un(n);if($a&&n[$a])return vf(n[$a]());var a=ei(n),l=a==We?Wa:a==U?Xa:eo;return l(n)}function zr(n){if(!n)return n===0?n:0;if(n=Hi(n),n===xe||n===-xe){var a=n<0?-1:1;return a*Me}return n===n?n:0}function Dt(n){var a=zr(n),l=a%1;return a===a?l?a-l:a:0}function Fp(n){return n?Ir(Dt(n),0,Ie):0}function Hi(n){if(typeof n=="number")return n;if(Ci(n))return Se;if(bn(n)){var a=typeof n.valueOf=="function"?n.valueOf():n;n=bn(a)?a+"":a}if(typeof n!="string")return n===0?n:+n;n=cc(n);var l=j.test(n);return l||se.test(n)?sf(n.slice(2),l?2:8):I.test(n)?Se:+n}function Op(n){return Xn(n,xi(n))}function Mx(n){return n?Ir(Dt(n),-ce,ce):n===0?n:0}function an(n){return n==null?"":ct(n)}var bx=Ks(function(n,a){if(Ml(a)||vi(a)){Xn(a,$n(a),n);return}for(var l in a)nn.call(a,l)&&Pr(n,l,a[l])}),Bp=Ks(function(n,a){Xn(a,xi(a),n)}),su=Ks(function(n,a,l,d){Xn(a,xi(a),n,d)}),Sx=Ks(function(n,a,l,d){Xn(a,$n(a),n,d)}),yx=Fr(ol);function Ex(n,a){var l=fa(n);return a==null?l:qi(l,a)}var Tx=P(function(n,a){n=tn(n);var l=-1,d=a.length,S=d>2?a[2]:t;for(S&&si(a[0],a[1],S)&&(d=1);++l<d;)for(var L=a[l],B=xi(L),W=-1,Z=B.length;++W<Z;){var me=B[W],_e=n[me];(_e===t||ji(_e,cr[me])&&!nn.call(n,me))&&(n[me]=L[me])}return n}),wx=P(function(n){return n.push(t,tp),ri(zp,t,n)});function Ax(n,a){return oc(n,ut(a,3),Bi)}function Cx(n,a){return oc(n,ut(a,3),cl)}function Rx(n,a){return n==null?n:ll(n,ut(a,3),xi)}function Lx(n,a){return n==null?n:Uc(n,ut(a,3),xi)}function Px(n,a){return n&&Bi(n,ut(a,3))}function Ix(n,a){return n&&cl(n,ut(a,3))}function Dx(n){return n==null?[]:Ws(n,$n(n))}function Ux(n){return n==null?[]:Ws(n,xi(n))}function Ch(n,a,l){var d=n==null?t:Dr(n,a);return d===t?l:d}function Nx(n,a){return n!=null&&rp(n,a,rh)}function Rh(n,a){return n!=null&&rp(n,a,ah)}var Fx=Kd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=Ns.call(a)),n[a]=l},Ph(Mi)),Ox=Kd(function(n,a,l){a!=null&&typeof a.toString!="function"&&(a=Ns.call(a)),nn.call(n,a)?n[a].push(l):n[a]=[l]},ut),Bx=P(pa);function $n(n){return vi(n)?da(n):dl(n)}function xi(n){return vi(n)?da(n,!0):Gc(n)}function zx(n,a){var l={};return a=ut(a,3),Bi(n,function(d,S,L){Yi(l,a(d,S,L),d)}),l}function Gx(n,a){var l={};return a=ut(a,3),Bi(n,function(d,S,L){Yi(l,S,a(d,S,L))}),l}var Hx=Ks(function(n,a,l){ja(n,a,l)}),zp=Ks(function(n,a,l,d){ja(n,a,l,d)}),kx=Fr(function(n,a){var l={};if(n==null)return l;var d=!1;a=mn(a,function(L){return L=xt(L,n),d||(d=L.length>1),L}),Xn(n,ph(n),l),d&&(l=_i(l,x|M|b,F_));for(var S=a.length;S--;)Vt(l,a[S]);return l});function Vx(n,a){return Gp(n,iu(ut(a)))}var Wx=Fr(function(n,a){return n==null?{}:Vc(n,a)});function Gp(n,a){if(n==null)return{};var l=mn(ph(n),function(d){return[d]});return a=ut(a),gl(n,l,function(d,S){return a(d,S[0])})}function Xx(n,a,l){a=xt(a,n);var d=-1,S=a.length;for(S||(S=1,n=t);++d<S;){var L=n==null?t:n[_r(a[d])];L===t&&(d=S,L=l),n=Br(L)?L.call(n):L}return n}function $x(n,a,l){return n==null?n:G(n,a,l)}function qx(n,a,l,d){return d=typeof d=="function"?d:t,n==null?n:G(n,a,l,d)}var Hp=Qd($n),kp=Qd(xi);function Yx(n,a,l){var d=Ct(n),S=d||ga(n)||Qs(n);if(a=ut(a,4),l==null){var L=n&&n.constructor;S?l=d?new L:[]:bn(n)?l=Br(L)?fa(Bs(n)):{}:l={}}return(S?mi:Bi)(n,function(B,W,Z){return a(l,B,W,Z)}),l}function Zx(n,a){return n==null?!0:Vt(n,a)}function Kx(n,a,l){return n==null?n:Dn(n,a,It(l))}function jx(n,a,l,d){return d=typeof d=="function"?d:t,n==null?n:Dn(n,a,It(l),d)}function eo(n){return n==null?[]:Zo(n,$n(n))}function Jx(n){return n==null?[]:Zo(n,xi(n))}function Qx(n,a,l){return l===t&&(l=a,a=t),l!==t&&(l=Hi(l),l=l===l?l:0),a!==t&&(a=Hi(a),a=a===a?a:0),Ir(Hi(n),a,l)}function eM(n,a,l){return a=zr(a),l===t?(l=a,a=0):l=zr(l),n=Hi(n),Nc(n,a,l)}function tM(n,a,l){if(l&&typeof l!="boolean"&&si(n,a,l)&&(a=l=t),l===t&&(typeof a=="boolean"?(l=a,a=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&a===t?(n=0,a=1):(n=zr(n),a===t?(a=n,n=0):a=zr(a)),n>a){var d=n;n=a,a=d}if(l||n%1||a%1){var S=Jn();return Vn(n+S*(a-n+af("1e-"+((S+"").length-1))),a)}return h(n,a)}var nM=js(function(n,a,l){return a=a.toLowerCase(),n+(l?Vp(a):a)});function Vp(n){return Lh(an(n).toLowerCase())}function Wp(n){return n=an(n),n&&n.replace(Ve,mf).replace(Zl,"")}function iM(n,a,l){n=an(n),a=ct(a);var d=n.length;l=l===t?d:Ir(Dt(l),0,d);var S=l;return l-=a.length,l>=0&&n.slice(l,S)==a}function rM(n){return n=an(n),n&&Le.test(n)?n.replace(De,gf):n}function aM(n){return n=an(n),n&&An.test(n)?n.replace(en,"\\$&"):n}var sM=js(function(n,a,l){return n+(l?"-":"")+a.toLowerCase()}),oM=js(function(n,a,l){return n+(l?" ":"")+a.toLowerCase()}),lM=qd("toLowerCase");function cM(n,a,l){n=an(n),a=Dt(a);var d=a?Ar(n):0;if(!a||d>=a)return n;var S=(a-d)/2;return Yc(Ni(S),l)+n+Yc(Gs(S),l)}function uM(n,a,l){n=an(n),a=Dt(a);var d=a?Ar(n):0;return a&&d<a?n+Yc(a-d,l):n}function fM(n,a,l){n=an(n),a=Dt(a);var d=a?Ar(n):0;return a&&d<a?Yc(a-d,l)+n:n}function hM(n,a,l){return l||a==null?a=0:a&&(a=+a),tl(an(n).replace(hi,""),a||0)}function dM(n,a,l){return(l?si(n,a,l):a===t)?a=1:a=Dt(a),y(an(n),a)}function pM(){var n=arguments,a=an(n[0]);return n.length<3?a:a.replace(n[1],n[2])}var mM=js(function(n,a,l){return n+(l?"_":"")+a.toLowerCase()});function gM(n,a,l){return l&&typeof l!="number"&&si(n,a,l)&&(a=l=t),l=l===t?Ie:l>>>0,l?(n=an(n),n&&(typeof a=="string"||a!=null&&!Ah(a))&&(a=ct(a),!a&&sa(n))?Wt(yi(n),0,l):n.split(a,l)):[]}var _M=js(function(n,a,l){return n+(l?" ":"")+Lh(a)});function vM(n,a,l){return n=an(n),l=l==null?0:Ir(Dt(l),0,n.length),a=ct(a),n.slice(l,l+a.length)==a}function xM(n,a,l){var d=A.templateSettings;l&&si(n,a,l)&&(a=t),n=an(n),a=su({},a,d,ep);var S=su({},a.imports,d.imports,ep),L=$n(S),B=Zo(S,L),W,Z,me=0,_e=a.interpolate||Qe,Ee="__p += '",Ge=Jo((a.escape||Qe).source+"|"+_e.source+"|"+(_e===qt?Uo:Qe).source+"|"+(a.evaluate||Qe).source+"|$","g"),nt="//# sourceURL="+(nn.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ra+"]")+`
`;n.replace(Ge,function(ht,Gt,Xt,Ri,oi,Li){return Xt||(Xt=Ri),Ee+=n.slice(me,Li).replace(st,hc),Gt&&(W=!0,Ee+=`' +
__e(`+Gt+`) +
'`),oi&&(Z=!0,Ee+=`';
`+oi+`;
__p += '`),Xt&&(Ee+=`' +
((__t = (`+Xt+`)) == null ? '' : __t) +
'`),me=Li+ht.length,ht}),Ee+=`';
`;var ft=nn.call(a,"variable")&&a.variable;if(!ft)Ee=`with (obj) {
`+Ee+`
}
`;else if(Oa.test(ft))throw new yt(c);Ee=(Z?Ee.replace(O,""):Ee).replace(ve,"$1").replace(Ke,"$1;"),Ee="function("+(ft||"obj")+`) {
`+(ft?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(W?", __e = _.escape":"")+(Z?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Ee+`return __p
}`;var Ut=$p(function(){return Zt(L,nt+"return "+Ee).apply(t,B)});if(Ut.source=Ee,wh(Ut))throw Ut;return Ut}function MM(n){return an(n).toLowerCase()}function bM(n){return an(n).toUpperCase()}function SM(n,a,l){if(n=an(n),n&&(l||a===t))return cc(n);if(!n||!(a=ct(a)))return n;var d=yi(n),S=yi(a),L=uc(d,S),B=fc(d,S)+1;return Wt(d,L,B).join("")}function yM(n,a,l){if(n=an(n),n&&(l||a===t))return n.slice(0,mc(n)+1);if(!n||!(a=ct(a)))return n;var d=yi(n),S=fc(d,yi(a))+1;return Wt(d,0,S).join("")}function EM(n,a,l){if(n=an(n),n&&(l||a===t))return n.replace(hi,"");if(!n||!(a=ct(a)))return n;var d=yi(n),S=uc(d,yi(a));return Wt(d,S).join("")}function TM(n,a){var l=C,d=z;if(bn(a)){var S="separator"in a?a.separator:S;l="length"in a?Dt(a.length):l,d="omission"in a?ct(a.omission):d}n=an(n);var L=n.length;if(sa(n)){var B=yi(n);L=B.length}if(l>=L)return n;var W=l-Ar(d);if(W<1)return d;var Z=B?Wt(B,0,W).join(""):n.slice(0,W);if(S===t)return Z+d;if(B&&(W+=Z.length-W),Ah(S)){if(n.slice(W).search(S)){var me,_e=Z;for(S.global||(S=Jo(S.source,an(Ms.exec(S))+"g")),S.lastIndex=0;me=S.exec(_e);)var Ee=me.index;Z=Z.slice(0,Ee===t?W:Ee)}}else if(n.indexOf(ct(S),W)!=W){var Ge=Z.lastIndexOf(S);Ge>-1&&(Z=Z.slice(0,Ge))}return Z+d}function wM(n){return n=an(n),n&&ne.test(n)?n.replace(k,Mf):n}var AM=js(function(n,a,l){return n+(l?" ":"")+a.toUpperCase()}),Lh=qd("toUpperCase");function Xp(n,a,l){return n=an(n),a=l?t:a,a===t?_f(n)?jo(n):hf(n):n.match(a)||[]}var $p=P(function(n,a){try{return ri(n,t,a)}catch(l){return wh(l)?l:new yt(l)}}),CM=Fr(function(n,a){return mi(a,function(l){l=_r(l),Yi(n,l,Eh(n[l],n))}),n});function RM(n){var a=n==null?0:n.length,l=ut();return n=a?mn(n,function(d){if(typeof d[1]!="function")throw new gi(u);return[l(d[0]),d[1]]}):[],P(function(d){for(var S=-1;++S<a;){var L=n[S];if(ri(L[0],this,d))return ri(L[1],this,d)}})}function LM(n){return th(_i(n,x))}function Ph(n){return function(){return n}}function PM(n,a){return n==null||n!==n?a:n}var IM=Zd(),DM=Zd(!0);function Mi(n){return n}function Ih(n){return hl(typeof n=="function"?n:_i(n,x))}function UM(n){return kc(_i(n,x))}function NM(n,a){return ml(n,_i(a,x))}var FM=P(function(n,a){return function(l){return pa(l,n,a)}}),OM=P(function(n,a){return function(l){return pa(n,l,a)}});function Dh(n,a,l){var d=$n(a),S=Ws(a,d);l==null&&!(bn(a)&&(S.length||!d.length))&&(l=a,a=n,n=this,S=Ws(a,$n(a)));var L=!(bn(l)&&"chain"in l)||!!l.chain,B=Br(n);return mi(S,function(W){var Z=a[W];n[W]=Z,B&&(n.prototype[W]=function(){var me=this.__chain__;if(L||me){var _e=n(this.__wrapped__),Ee=_e.__actions__=Un(this.__actions__);return Ee.push({func:Z,args:arguments,thisArg:n}),_e.__chain__=me,_e}return Z.apply(n,or([this.value()],arguments))})}),n}function BM(){return Pn._===this&&(Pn._=Ef),this}function Uh(){}function zM(n){return n=Dt(n),P(function(a){return Ja(a,n)})}var GM=fh(mn),HM=fh(sc),kM=fh(Es);function qp(n){return vh(n)?As(_r(n)):uh(n)}function VM(n){return function(a){return n==null?t:Dr(n,a)}}var WM=jd(),XM=jd(!0);function Nh(){return[]}function Fh(){return!1}function $M(){return{}}function qM(){return""}function YM(){return!0}function ZM(n,a){if(n=Dt(n),n<1||n>ce)return[];var l=Ie,d=Vn(n,Ie);a=ut(a),n-=Ie;for(var S=Yo(d,a);++l<n;)a(l);return S}function KM(n){return Ct(n)?mn(n,_r):Ci(n)?[n]:Un(dp(an(n)))}function jM(n){var a=++_c;return an(n)+a}var JM=qc(function(n,a){return n+a},0),QM=hh("ceil"),eb=qc(function(n,a){return n/a},1),tb=hh("floor");function nb(n){return n&&n.length?Vs(n,Mi,ul):t}function ib(n,a){return n&&n.length?Vs(n,ut(a,2),ul):t}function rb(n){return ws(n,Mi)}function ab(n,a){return ws(n,ut(a,2))}function sb(n){return n&&n.length?Vs(n,Mi,pl):t}function ob(n,a){return n&&n.length?Vs(n,ut(a,2),pl):t}var lb=qc(function(n,a){return n*a},1),cb=hh("round"),ub=qc(function(n,a){return n-a},0);function fb(n){return n&&n.length?Cs(n,Mi):0}function hb(n,a){return n&&n.length?Cs(n,ut(a,2)):0}return A.after=U0,A.ary=Ep,A.assign=bx,A.assignIn=Bp,A.assignInWith=su,A.assignWith=Sx,A.at=yx,A.before=Tp,A.bind=Eh,A.bindAll=CM,A.bindKey=wp,A.castArray=$0,A.chain=bp,A.chunk=tv,A.compact=nv,A.concat=iv,A.cond=RM,A.conforms=LM,A.constant=Ph,A.countBy=f0,A.create=Ex,A.curry=Ap,A.curryRight=Cp,A.debounce=Rp,A.defaults=Tx,A.defaultsDeep=wx,A.defer=N0,A.delay=F0,A.difference=rv,A.differenceBy=av,A.differenceWith=sv,A.drop=ov,A.dropRight=lv,A.dropRightWhile=cv,A.dropWhile=uv,A.fill=fv,A.filter=d0,A.flatMap=g0,A.flatMapDeep=_0,A.flatMapDepth=v0,A.flatten=_p,A.flattenDeep=hv,A.flattenDepth=dv,A.flip=O0,A.flow=IM,A.flowRight=DM,A.fromPairs=pv,A.functions=Dx,A.functionsIn=Ux,A.groupBy=x0,A.initial=gv,A.intersection=_v,A.intersectionBy=vv,A.intersectionWith=xv,A.invert=Fx,A.invertBy=Ox,A.invokeMap=b0,A.iteratee=Ih,A.keyBy=S0,A.keys=$n,A.keysIn=xi,A.map=eu,A.mapKeys=zx,A.mapValues=Gx,A.matches=UM,A.matchesProperty=NM,A.memoize=nu,A.merge=Hx,A.mergeWith=zp,A.method=FM,A.methodOf=OM,A.mixin=Dh,A.negate=iu,A.nthArg=zM,A.omit=kx,A.omitBy=Vx,A.once=B0,A.orderBy=y0,A.over=GM,A.overArgs=z0,A.overEvery=HM,A.overSome=kM,A.partial=Th,A.partialRight=Lp,A.partition=E0,A.pick=Wx,A.pickBy=Gp,A.property=qp,A.propertyOf=VM,A.pull=yv,A.pullAll=xp,A.pullAllBy=Ev,A.pullAllWith=Tv,A.pullAt=wv,A.range=WM,A.rangeRight=XM,A.rearg=G0,A.reject=A0,A.remove=Av,A.rest=H0,A.reverse=Sh,A.sampleSize=R0,A.set=$x,A.setWith=qx,A.shuffle=L0,A.slice=Cv,A.sortBy=D0,A.sortedUniq=Nv,A.sortedUniqBy=Fv,A.split=gM,A.spread=k0,A.tail=Ov,A.take=Bv,A.takeRight=zv,A.takeRightWhile=Gv,A.takeWhile=Hv,A.tap=n0,A.throttle=V0,A.thru=Qc,A.toArray=Np,A.toPairs=Hp,A.toPairsIn=kp,A.toPath=KM,A.toPlainObject=Op,A.transform=Yx,A.unary=W0,A.union=kv,A.unionBy=Vv,A.unionWith=Wv,A.uniq=Xv,A.uniqBy=$v,A.uniqWith=qv,A.unset=Zx,A.unzip=yh,A.unzipWith=Mp,A.update=Kx,A.updateWith=jx,A.values=eo,A.valuesIn=Jx,A.without=Yv,A.words=Xp,A.wrap=X0,A.xor=Zv,A.xorBy=Kv,A.xorWith=jv,A.zip=Jv,A.zipObject=Qv,A.zipObjectDeep=e0,A.zipWith=t0,A.entries=Hp,A.entriesIn=kp,A.extend=Bp,A.extendWith=su,Dh(A,A),A.add=JM,A.attempt=$p,A.camelCase=nM,A.capitalize=Vp,A.ceil=QM,A.clamp=Qx,A.clone=q0,A.cloneDeep=Z0,A.cloneDeepWith=K0,A.cloneWith=Y0,A.conformsTo=j0,A.deburr=Wp,A.defaultTo=PM,A.divide=eb,A.endsWith=iM,A.eq=ji,A.escape=rM,A.escapeRegExp=aM,A.every=h0,A.find=p0,A.findIndex=mp,A.findKey=Ax,A.findLast=m0,A.findLastIndex=gp,A.findLastKey=Cx,A.floor=tb,A.forEach=Sp,A.forEachRight=yp,A.forIn=Rx,A.forInRight=Lx,A.forOwn=Px,A.forOwnRight=Ix,A.get=Ch,A.gt=J0,A.gte=Q0,A.has=Nx,A.hasIn=Rh,A.head=vp,A.identity=Mi,A.includes=M0,A.indexOf=mv,A.inRange=eM,A.invoke=Bx,A.isArguments=ts,A.isArray=Ct,A.isArrayBuffer=ex,A.isArrayLike=vi,A.isArrayLikeObject=Rn,A.isBoolean=tx,A.isBuffer=ga,A.isDate=nx,A.isElement=ix,A.isEmpty=rx,A.isEqual=ax,A.isEqualWith=sx,A.isError=wh,A.isFinite=ox,A.isFunction=Br,A.isInteger=Pp,A.isLength=ru,A.isMap=Ip,A.isMatch=lx,A.isMatchWith=cx,A.isNaN=ux,A.isNative=fx,A.isNil=dx,A.isNull=hx,A.isNumber=Dp,A.isObject=bn,A.isObjectLike=wn,A.isPlainObject=Sl,A.isRegExp=Ah,A.isSafeInteger=px,A.isSet=Up,A.isString=au,A.isSymbol=Ci,A.isTypedArray=Qs,A.isUndefined=mx,A.isWeakMap=gx,A.isWeakSet=_x,A.join=Mv,A.kebabCase=sM,A.last=Gi,A.lastIndexOf=bv,A.lowerCase=oM,A.lowerFirst=lM,A.lt=vx,A.lte=xx,A.max=nb,A.maxBy=ib,A.mean=rb,A.meanBy=ab,A.min=sb,A.minBy=ob,A.stubArray=Nh,A.stubFalse=Fh,A.stubObject=$M,A.stubString=qM,A.stubTrue=YM,A.multiply=lb,A.nth=Sv,A.noConflict=BM,A.noop=Uh,A.now=tu,A.pad=cM,A.padEnd=uM,A.padStart=fM,A.parseInt=hM,A.random=tM,A.reduce=T0,A.reduceRight=w0,A.repeat=dM,A.replace=pM,A.result=Xx,A.round=cb,A.runInContext=Y,A.sample=C0,A.size=P0,A.snakeCase=mM,A.some=I0,A.sortedIndex=Rv,A.sortedIndexBy=Lv,A.sortedIndexOf=Pv,A.sortedLastIndex=Iv,A.sortedLastIndexBy=Dv,A.sortedLastIndexOf=Uv,A.startCase=_M,A.startsWith=vM,A.subtract=ub,A.sum=fb,A.sumBy=hb,A.template=xM,A.times=ZM,A.toFinite=zr,A.toInteger=Dt,A.toLength=Fp,A.toLower=MM,A.toNumber=Hi,A.toSafeInteger=Mx,A.toString=an,A.toUpper=bM,A.trim=SM,A.trimEnd=yM,A.trimStart=EM,A.truncate=TM,A.unescape=wM,A.uniqueId=jM,A.upperCase=AM,A.upperFirst=Lh,A.each=Sp,A.eachRight=yp,A.first=vp,Dh(A,function(){var n={};return Bi(A,function(a,l){nn.call(A.prototype,l)||(n[l]=a)}),n}(),{chain:!1}),A.VERSION=i,mi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),mi(["drop","take"],function(n,a){Bt.prototype[n]=function(l){l=l===t?1:Cn(Dt(l),0);var d=this.__filtered__&&!a?new Bt(this):this.clone();return d.__filtered__?d.__takeCount__=Vn(l,d.__takeCount__):d.__views__.push({size:Vn(l,Ie),type:n+(d.__dir__<0?"Right":"")}),d},Bt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),mi(["filter","map","takeWhile"],function(n,a){var l=a+1,d=l==q||l==ue;Bt.prototype[n]=function(S){var L=this.clone();return L.__iteratees__.push({iteratee:ut(S,3),type:l}),L.__filtered__=L.__filtered__||d,L}}),mi(["head","last"],function(n,a){var l="take"+(a?"Right":"");Bt.prototype[n]=function(){return this[l](1).value()[0]}}),mi(["initial","tail"],function(n,a){var l="drop"+(a?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[l](1)}}),Bt.prototype.compact=function(){return this.filter(Mi)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=P(function(n,a){return typeof n=="function"?new Bt(this):this.map(function(l){return pa(l,n,a)})}),Bt.prototype.reject=function(n){return this.filter(iu(ut(n)))},Bt.prototype.slice=function(n,a){n=Dt(n);var l=this;return l.__filtered__&&(n>0||a<0)?new Bt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),a!==t&&(a=Dt(a),l=a<0?l.dropRight(-a):l.take(a-n)),l)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Ie)},Bi(Bt.prototype,function(n,a){var l=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),S=A[d?"take"+(a=="last"?"Right":""):a],L=d||/^find/.test(a);S&&(A.prototype[a]=function(){var B=this.__wrapped__,W=d?[1]:arguments,Z=B instanceof Bt,me=W[0],_e=Z||Ct(B),Ee=function(Gt){var Xt=S.apply(A,or([Gt],W));return d&&Ge?Xt[0]:Xt};_e&&l&&typeof me=="function"&&me.length!=1&&(Z=_e=!1);var Ge=this.__chain__,nt=!!this.__actions__.length,ft=L&&!Ge,Ut=Z&&!nt;if(!L&&_e){B=Ut?B:new Bt(this);var ht=n.apply(B,W);return ht.__actions__.push({func:Qc,args:[Ee],thisArg:t}),new On(ht,Ge)}return ft&&Ut?n.apply(this,W):(ht=this.thru(Ee),ft?d?ht.value()[0]:ht.value():ht)})}),mi(["pop","push","shift","sort","splice","unshift"],function(n){var a=Is[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var S=arguments;if(d&&!this.__chain__){var L=this.value();return a.apply(Ct(L)?L:[],S)}return this[l](function(B){return a.apply(Ct(B)?B:[],S)})}}),Bi(Bt.prototype,function(n,a){var l=A[a];if(l){var d=l.name+"";nn.call(ca,d)||(ca[d]=[]),ca[d].push({name:a,func:l})}}),ca[$c(t,_).name]=[{name:"wrapper",func:t}],Bt.prototype.clone=Ac,Bt.prototype.reverse=Nf,Bt.prototype.value=Ff,A.prototype.at=i0,A.prototype.chain=r0,A.prototype.commit=a0,A.prototype.next=s0,A.prototype.plant=l0,A.prototype.reverse=c0,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=u0,A.prototype.first=A.prototype.head,$a&&(A.prototype[$a]=o0),A},lr=Ls();wr?((wr.exports=lr)._=lr,ko._=lr):Pn._=lr}).call(Mo)})(ku,ku.exports);var _d=ku.exports;const gA={dotSize:5,genePercentile:.99,cameraPositionZ:200},Fn=new Io(gA);function Ig(r){const t={...Fn.getValue(),dotSize:r};Fn.next(t)}function Dg(r){const e=Fn.getValue(),t=r*.01,i={...e,genePercentile:t};Fn.next(i)}const _A=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},vA=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),xA(t)})};function xA(r){const e=document.getElementById("cellNotFound");let t=Jt.value.listPalette;r?(t=Jt.value.listPalette.filter(([i,s])=>i.toLowerCase().startsWith(r)),console.log(t),Vu(t)):Vu(Jt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Vu(r){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",r.sort((s,o)=>s[0].toLowerCase()<o[0].toLowerCase()?-1:s[0].toLowerCase()>o[0].toLowerCase()?1:0),r.forEach(([s,o])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=s,u.value=s,un.value.selectedCelltypes.includes(s)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=s,c.style.color=o,c.appendChild(u),c.appendChild(document.createTextNode(s));let f,p,m,x,M=Jt.value.groups.find(b=>s.toLowerCase().startsWith(b));if(M){const b=`${M}-group`;Object.keys(e).includes(M)?(f=document.getElementById(`${M}-div`),p=document.getElementById(b),m=document.getElementById(`${M}-label`),x=document.getElementById(`${M}-list`)):(e[M]=[],f=document.createElement("div"),f.id=`${M}-div`,m=document.createElement("label"),m.htmlFor=M,m.setAttribute("for",b),m.style.color="white",m.id=`${M}-label`,p=document.createElement("input"),p.type="checkbox",p.classList.add("box"),p.classList.add("group-input"),p.value=M,p.id=b,m.appendChild(p),m.appendChild(document.createTextNode(M.toUpperCase())),x=document.createElement("ul"),x.id=`${M}-list`,x.style.marginBottom=0,f.appendChild(m),f.appendChild(x),t.appendChild(f));const w=document.createElement("li");w.id=`${M}-item`,x.appendChild(c),x.append(document.createElement("br")),e[M].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",b=>{console.log(b),MA(s,b.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(s=>{s.addEventListener("change",o=>{let u=un.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[o.target.value].forEach(c=>{c.checked=o.target.checked,o.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),Fl(u)}),e[s.value].forEach(o=>{let u=!0;o.checked||(u=!1),s.checked=u,o.addEventListener("change",()=>{let c=!0;e[s.value].forEach(f=>{f.checked||(c=!1)}),s.checked=c})})})}async function MA(r,e){let t=un.value.selectedCelltypes.map(i=>i);e?(t.push(r),Fl(t)):(t=t.filter(i=>i!==r),Fl(t))}const bA=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{Fl([]),Vu(Jt.value.listPalette),cellTextbox.value=""})},SA=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",un.value.selectedCelltypes.length!==0?un.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Jt.value.pallete[e],t.style.fontStyle="normal",t.style.webkitTextStroke="0.2px black",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function ju(r,e){const t=await fetch(`https://fisheyes.techkyra.com/getdata?data=${e}&gene=${r}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json(),s=["clusters","clusters_pal","genes"],o=i._id;return s.includes(o)?i.values:i.values.map(f=>parseFloat(f))}var yA={exports:{}};/**
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
 */(function(r,e){(function(t,i){r.exports=i()})(Mo,function(){for(var t=function(h,v,y){return v===void 0&&(v=0),y===void 0&&(y=1),h<v?v:h>y?y:h},i=t,s=function(h){h._clipped=!1,h._unclipped=h.slice(0);for(var v=0;v<=3;v++)v<3?((h[v]<0||h[v]>255)&&(h._clipped=!0),h[v]=i(h[v],0,255)):v===3&&(h[v]=i(h[v],0,1));return h},o={},u=0,c=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];u<c.length;u+=1){var f=c[u];o["[object "+f+"]"]=f.toLowerCase()}var p=function(h){return o[Object.prototype.toString.call(h)]||"object"},m=p,x=function(h,v){return v===void 0&&(v=null),h.length>=3?Array.prototype.slice.call(h):m(h[0])=="object"&&v?v.split("").filter(function(y){return h[0][y]!==void 0}).map(function(y){return h[0][y]}):h[0]},M=p,b=function(h){if(h.length<2)return null;var v=h.length-1;return M(h[v])=="string"?h[v].toLowerCase():null},w=Math.PI,E={clip_rgb:s,limit:t,type:p,unpack:x,last:b,PI:w,TWOPI:w*2,PITHIRD:w/3,DEG2RAD:w/180,RAD2DEG:180/w},g={format:{},autodetect:[]},_=E.last,H=E.clip_rgb,R=E.type,N=g,$=function(){for(var v=[],y=arguments.length;y--;)v[y]=arguments[y];var P=this;if(R(v[0])==="object"&&v[0].constructor&&v[0].constructor===this.constructor)return v[0];var V=_(v),X=!1;if(!V){X=!0,N.sorted||(N.autodetect=N.autodetect.sort(function(ge,ze){return ze.p-ge.p}),N.sorted=!0);for(var G=0,K=N.autodetect;G<K.length;G+=1){var ee=K[G];if(V=ee.test.apply(ee,v),V)break}}if(N.format[V]){var he=N.format[V].apply(null,X?v:v.slice(0,-1));P._rgb=H(he)}else throw new Error("unknown format: "+v);P._rgb.length===3&&P._rgb.push(1)};$.prototype.toString=function(){return R(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var D=$,F=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(F.Color,[null].concat(h)))};F.Color=D,F.version="2.4.2";var J=F,Te=E.unpack,C=Math.max,z=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Te(h,"rgb"),P=y[0],V=y[1],X=y[2];P=P/255,V=V/255,X=X/255;var G=1-C(P,C(V,X)),K=G<1?1/(1-G):0,ee=(1-P-G)*K,he=(1-V-G)*K,ge=(1-X-G)*K;return[ee,he,ge,G]},we=z,be=E.unpack,q=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=be(h,"cmyk");var y=h[0],P=h[1],V=h[2],X=h[3],G=h.length>4?h[4]:1;return X===1?[0,0,0,G]:[y>=1?0:255*(1-y)*(1-X),P>=1?0:255*(1-P)*(1-X),V>=1?0:255*(1-V)*(1-X),G]},pe=q,ue=J,xe=D,ce=g,Me=E.unpack,Se=E.type,Ie=we;xe.prototype.cmyk=function(){return Ie(this._rgb)},ue.cmyk=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(xe,[null].concat(h,["cmyk"])))},ce.format.cmyk=pe,ce.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Me(h,"cmyk"),Se(h)==="array"&&h.length===4)return"cmyk"}});var Ze=E.unpack,Mt=E.last,oe=function(h){return Math.round(h*100)/100},Ae=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Ze(h,"hsla"),P=Mt(h)||"lsa";return y[0]=oe(y[0]||0),y[1]=oe(y[1]*100)+"%",y[2]=oe(y[2]*100)+"%",P==="hsla"||y.length>3&&y[3]<1?(y[3]=y.length>3?y[3]:1,P="hsla"):y.length=3,P+"("+y.join(",")+")"},He=Ae,dt=E.unpack,Je=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=dt(h,"rgba");var y=h[0],P=h[1],V=h[2];y/=255,P/=255,V/=255;var X=Math.min(y,P,V),G=Math.max(y,P,V),K=(G+X)/2,ee,he;return G===X?(ee=0,he=Number.NaN):ee=K<.5?(G-X)/(G+X):(G-X)/(2-G-X),y==G?he=(P-V)/(G-X):P==G?he=2+(V-y)/(G-X):V==G&&(he=4+(y-P)/(G-X)),he*=60,he<0&&(he+=360),h.length>3&&h[3]!==void 0?[he,ee,K,h[3]]:[he,ee,K]},ke=Je,Ht=E.unpack,at=E.last,Q=He,xn=ke,We=Math.round,pt=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Ht(h,"rgba"),P=at(h)||"rgb";return P.substr(0,3)=="hsl"?Q(xn(y),P):(y[0]=We(y[0]),y[1]=We(y[1]),y[2]=We(y[2]),(P==="rgba"||y.length>3&&y[3]<1)&&(y[3]=y.length>3?y[3]:1,P="rgba"),P+"("+y.slice(0,P==="rgb"?3:4).join(",")+")")},rt=pt,_t=E.unpack,vt=Math.round,Tt=function(){for(var h,v=[],y=arguments.length;y--;)v[y]=arguments[y];v=_t(v,"hsl");var P=v[0],V=v[1],X=v[2],G,K,ee;if(V===0)G=K=ee=X*255;else{var he=[0,0,0],ge=[0,0,0],ze=X<.5?X*(1+V):X+V-X*V,Re=2*X-ze,qe=P/360;he[0]=qe+1/3,he[1]=qe,he[2]=qe-1/3;for(var Ye=0;Ye<3;Ye++)he[Ye]<0&&(he[Ye]+=1),he[Ye]>1&&(he[Ye]-=1),6*he[Ye]<1?ge[Ye]=Re+(ze-Re)*6*he[Ye]:2*he[Ye]<1?ge[Ye]=ze:3*he[Ye]<2?ge[Ye]=Re+(ze-Re)*(2/3-he[Ye])*6:ge[Ye]=Re;h=[vt(ge[0]*255),vt(ge[1]*255),vt(ge[2]*255)],G=h[0],K=h[1],ee=h[2]}return v.length>3?[G,K,ee,v[3]]:[G,K,ee,1]},$t=Tt,U=$t,T=g,le=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,de=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Ce=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,ye=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ot=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,et=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Ne=Math.round,Fe=function(h){h=h.toLowerCase().trim();var v;if(T.format.named)try{return T.format.named(h)}catch{}if(v=h.match(le)){for(var y=v.slice(1,4),P=0;P<3;P++)y[P]=+y[P];return y[3]=1,y}if(v=h.match(de)){for(var V=v.slice(1,5),X=0;X<4;X++)V[X]=+V[X];return V}if(v=h.match(Ce)){for(var G=v.slice(1,4),K=0;K<3;K++)G[K]=Ne(G[K]*2.55);return G[3]=1,G}if(v=h.match(ye)){for(var ee=v.slice(1,5),he=0;he<3;he++)ee[he]=Ne(ee[he]*2.55);return ee[3]=+ee[3],ee}if(v=h.match(ot)){var ge=v.slice(1,4);ge[1]*=.01,ge[2]*=.01;var ze=U(ge);return ze[3]=1,ze}if(v=h.match(et)){var Re=v.slice(1,4);Re[1]*=.01,Re[2]*=.01;var qe=U(Re);return qe[3]=+v[4],qe}};Fe.test=function(h){return le.test(h)||de.test(h)||Ce.test(h)||ye.test(h)||ot.test(h)||et.test(h)};var mt=Fe,Ue=J,sn=D,bt=g,tt=E.type,Xe=rt,je=mt;sn.prototype.css=function(h){return Xe(this._rgb,h)},Ue.css=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(sn,[null].concat(h,["css"])))},bt.format.css=je,bt.autodetect.push({p:5,test:function(h){for(var v=[],y=arguments.length-1;y-- >0;)v[y]=arguments[y+1];if(!v.length&&tt(h)==="string"&&je.test(h))return"css"}});var O=D,ve=J,Ke=g,k=E.unpack;Ke.format.gl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=k(h,"rgba");return y[0]*=255,y[1]*=255,y[2]*=255,y},ve.gl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(O,[null].concat(h,["gl"])))},O.prototype.gl=function(){var h=this._rgb;return[h[0]/255,h[1]/255,h[2]/255,h[3]]};var De=E.unpack,ne=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=De(h,"rgb"),P=y[0],V=y[1],X=y[2],G=Math.min(P,V,X),K=Math.max(P,V,X),ee=K-G,he=ee*100/255,ge=G/(255-ee)*100,ze;return ee===0?ze=Number.NaN:(P===K&&(ze=(V-X)/ee),V===K&&(ze=2+(X-P)/ee),X===K&&(ze=4+(P-V)/ee),ze*=60,ze<0&&(ze+=360)),[ze,he,ge]},Le=ne,Be=E.unpack,Lt=Math.floor,qt=function(){for(var h,v,y,P,V,X,G=[],K=arguments.length;K--;)G[K]=arguments[K];G=Be(G,"hcg");var ee=G[0],he=G[1],ge=G[2],ze,Re,qe;ge=ge*255;var Ye=he*255;if(he===0)ze=Re=qe=ge;else{ee===360&&(ee=0),ee>360&&(ee-=360),ee<0&&(ee+=360),ee/=60;var Pt=Lt(ee),ct=ee-Pt,At=ge*(1-he),Vt=At+Ye*(1-ct),Dn=At+Ye*ct,Mn=At+Ye;switch(Pt){case 0:h=[Mn,Dn,At],ze=h[0],Re=h[1],qe=h[2];break;case 1:v=[Vt,Mn,At],ze=v[0],Re=v[1],qe=v[2];break;case 2:y=[At,Mn,Dn],ze=y[0],Re=y[1],qe=y[2];break;case 3:P=[At,Vt,Mn],ze=P[0],Re=P[1],qe=P[2];break;case 4:V=[Dn,At,Mn],ze=V[0],Re=V[1],qe=V[2];break;case 5:X=[Mn,At,Vt],ze=X[0],Re=X[1],qe=X[2];break}}return[ze,Re,qe,G.length>3?G[3]:1]},Qt=qt,dn=E.unpack,kt=E.type,en=J,An=D,hi=g,jr=Le;An.prototype.hcg=function(){return jr(this._rgb)},en.hcg=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(An,[null].concat(h,["hcg"])))},hi.format.hcg=Qt,hi.autodetect.push({p:1,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=dn(h,"hcg"),kt(h)==="array"&&h.length===3)return"hcg"}});var Jr=E.unpack,vs=E.last,Vi=Math.round,xs=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Jr(h,"rgba"),P=y[0],V=y[1],X=y[2],G=y[3],K=vs(h)||"auto";G===void 0&&(G=1),K==="auto"&&(K=G<1?"rgba":"rgb"),P=Vi(P),V=Vi(V),X=Vi(X);var ee=P<<16|V<<8|X,he="000000"+ee.toString(16);he=he.substr(he.length-6);var ge="0"+Vi(G*255).toString(16);switch(ge=ge.substr(ge.length-2),K.toLowerCase()){case"rgba":return"#"+he+ge;case"argb":return"#"+ge+he;default:return"#"+he}},Oa=xs,Do=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Uo=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Ms=function(h){if(h.match(Do)){(h.length===4||h.length===7)&&(h=h.substr(1)),h.length===3&&(h=h.split(""),h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]);var v=parseInt(h,16),y=v>>16,P=v>>8&255,V=v&255;return[y,P,V,1]}if(h.match(Uo)){(h.length===5||h.length===9)&&(h=h.substr(1)),h.length===4&&(h=h.split(""),h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]+h[3]+h[3]);var X=parseInt(h,16),G=X>>24&255,K=X>>16&255,ee=X>>8&255,he=Math.round((X&255)/255*100)/100;return[G,K,ee,he]}throw new Error("unknown hex color: "+h)},I=Ms,j=J,ae=D,se=E.type,ie=g,Ve=Oa;ae.prototype.hex=function(h){return Ve(this._rgb,h)},j.hex=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(ae,[null].concat(h,["hex"])))},ie.format.hex=I,ie.autodetect.push({p:4,test:function(h){for(var v=[],y=arguments.length-1;y-- >0;)v[y]=arguments[y+1];if(!v.length&&se(h)==="string"&&[3,4,5,6,7,8,9].indexOf(h.length)>=0)return"hex"}});var Qe=E.unpack,st=E.TWOPI,lt=Math.min,wt=Math.sqrt,St=Math.acos,Et=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Qe(h,"rgb"),P=y[0],V=y[1],X=y[2];P/=255,V/=255,X/=255;var G,K=lt(P,V,X),ee=(P+V+X)/3,he=ee>0?1-K/ee:0;return he===0?G=NaN:(G=(P-V+(P-X))/2,G/=wt((P-V)*(P-V)+(P-X)*(V-X)),G=St(G),X>V&&(G=st-G),G/=st),[G*360,he,ee]},pn=Et,Hn=E.unpack,_n=E.limit,kn=E.TWOPI,on=E.PITHIRD,gt=Math.cos,Ba=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Hn(h,"hsi");var y=h[0],P=h[1],V=h[2],X,G,K;return isNaN(y)&&(y=0),isNaN(P)&&(P=0),y>360&&(y-=360),y<0&&(y+=360),y/=360,y<1/3?(K=(1-P)/3,X=(1+P*gt(kn*y)/gt(on-kn*y))/3,G=1-(K+X)):y<2/3?(y-=1/3,X=(1-P)/3,G=(1+P*gt(kn*y)/gt(on-kn*y))/3,K=1-(X+G)):(y-=2/3,G=(1-P)/3,K=(1+P*gt(kn*y)/gt(on-kn*y))/3,X=1-(G+K)),X=_n(V*X*3),G=_n(V*G*3),K=_n(V*K*3),[X*255,G*255,K*255,h.length>3?h[3]:1]},ln=Ba,Ui=E.unpack,za=E.type,Wi=J,Qr=D,yn=g,di=pn;Qr.prototype.hsi=function(){return di(this._rgb)},Wi.hsi=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Qr,[null].concat(h,["hsi"])))},yn.format.hsi=ln,yn.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Ui(h,"hsi"),za(h)==="array"&&h.length===3)return"hsi"}});var ea=E.unpack,jn=E.type,ta=J,Ga=D,Tr=g,Ju=ke;Ga.prototype.hsl=function(){return Ju(this._rgb)},ta.hsl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ga,[null].concat(h,["hsl"])))},Tr.format.hsl=$t,Tr.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=ea(h,"hsl"),jn(h)==="array"&&h.length===3)return"hsl"}});var zl=E.unpack,No=Math.min,Fo=Math.max,na=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=zl(h,"rgb");var y=h[0],P=h[1],V=h[2],X=No(y,P,V),G=Fo(y,P,V),K=G-X,ee,he,ge;return ge=G/255,G===0?(ee=Number.NaN,he=0):(he=K/G,y===G&&(ee=(P-V)/K),P===G&&(ee=2+(V-y)/K),V===G&&(ee=4+(y-P)/K),ee*=60,ee<0&&(ee+=360)),[ee,he,ge]},Gl=na,Hl=E.unpack,Qu=Math.floor,kl=function(){for(var h,v,y,P,V,X,G=[],K=arguments.length;K--;)G[K]=arguments[K];G=Hl(G,"hsv");var ee=G[0],he=G[1],ge=G[2],ze,Re,qe;if(ge*=255,he===0)ze=Re=qe=ge;else{ee===360&&(ee=0),ee>360&&(ee-=360),ee<0&&(ee+=360),ee/=60;var Ye=Qu(ee),Pt=ee-Ye,ct=ge*(1-he),At=ge*(1-he*Pt),Vt=ge*(1-he*(1-Pt));switch(Ye){case 0:h=[ge,Vt,ct],ze=h[0],Re=h[1],qe=h[2];break;case 1:v=[At,ge,ct],ze=v[0],Re=v[1],qe=v[2];break;case 2:y=[ct,ge,Vt],ze=y[0],Re=y[1],qe=y[2];break;case 3:P=[ct,At,ge],ze=P[0],Re=P[1],qe=P[2];break;case 4:V=[Vt,ct,ge],ze=V[0],Re=V[1],qe=V[2];break;case 5:X=[ge,ct,At],ze=X[0],Re=X[1],qe=X[2];break}}return[ze,Re,qe,G.length>3?G[3]:1]},Vl=kl,Wl=E.unpack,Xl=E.type,ef=J,$l=D,ql=g,Yl=Gl;$l.prototype.hsv=function(){return Yl(this._rgb)},ef.hsv=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply($l,[null].concat(h,["hsv"])))},ql.format.hsv=Vl,ql.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Wl(h,"hsv"),Xl(h)==="array"&&h.length===3)return"hsv"}});var bs={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ia=bs,tf=E.unpack,Zl=Math.pow,Oo=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=tf(h,"rgb"),P=y[0],V=y[1],X=y[2],G=nf(P,V,X),K=G[0],ee=G[1],he=G[2],ge=116*ee-16;return[ge<0?0:ge,500*(K-ee),200*(ee-he)]},Bo=function(h){return(h/=255)<=.04045?h/12.92:Zl((h+.055)/1.055,2.4)},zo=function(h){return h>ia.t3?Zl(h,1/3):h/ia.t2+ia.t0},nf=function(h,v,y){h=Bo(h),v=Bo(v),y=Bo(y);var P=zo((.4124564*h+.3575761*v+.1804375*y)/ia.Xn),V=zo((.2126729*h+.7151522*v+.072175*y)/ia.Yn),X=zo((.0193339*h+.119192*v+.9503041*y)/ia.Zn);return[P,V,X]},Kl=Oo,ra=bs,hn=E.unpack,cn=Math.pow,rf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=hn(h,"lab");var y=h[0],P=h[1],V=h[2],X,G,K,ee,he,ge;return G=(y+16)/116,X=isNaN(P)?G:G+P/500,K=isNaN(V)?G:G-V/200,G=ra.Yn*Ho(G),X=ra.Xn*Ho(X),K=ra.Zn*Ho(K),ee=Go(3.2404542*X-1.5371385*G-.4985314*K),he=Go(-.969266*X+1.8760108*G+.041556*K),ge=Go(.0556434*X-.2040259*G+1.0572252*K),[ee,he,ge,h.length>3?h[3]:1]},Go=function(h){return 255*(h<=.00304?12.92*h:1.055*cn(h,1/2.4)-.055)},Ho=function(h){return h>ra.t1?h*h*h:ra.t2*(h-ra.t0)},jl=rf,af=E.unpack,sf=E.type,Jl=J,Ql=D,Pn=g,ko=Kl;Ql.prototype.lab=function(){return ko(this._rgb)},Jl.lab=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ql,[null].concat(h,["lab"])))},Pn.format.lab=jl,Pn.autodetect.push({p:2,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=af(h,"lab"),sf(h)==="array"&&h.length===3)return"lab"}});var wr=E.unpack,ec=E.RAD2DEG,Vo=Math.sqrt,pi=Math.atan2,tc=Math.round,nc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=wr(h,"lab"),P=y[0],V=y[1],X=y[2],G=Vo(V*V+X*X),K=(pi(X,V)*ec+360)%360;return tc(G*1e4)===0&&(K=Number.NaN),[P,G,K]},Wo=nc,ic=E.unpack,rc=Kl,ac=Wo,ri=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=ic(h,"rgb"),P=y[0],V=y[1],X=y[2],G=rc(P,V,X),K=G[0],ee=G[1],he=G[2];return ac(K,ee,he)},of=ri,mi=E.unpack,lf=E.DEG2RAD,sc=Math.sin,sr=Math.cos,Ss=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=mi(h,"lch"),P=y[0],V=y[1],X=y[2];return isNaN(X)&&(X=0),X=X*lf,[P,sr(X)*V,sc(X)*V]},ys=Ss,mn=E.unpack,or=ys,Xo=jl,cf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=mn(h,"lch");var y=h[0],P=h[1],V=h[2],X=or(y,P,V),G=X[0],K=X[1],ee=X[2],he=Xo(G,K,ee),ge=he[0],ze=he[1],Re=he[2];return[ge,ze,Re,h.length>3?h[3]:1]},Es=cf,uf=E.unpack,ff=Es,hf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=uf(h,"hcl").reverse();return ff.apply(void 0,y)},oc=hf,Ts=E.unpack,aa=E.type,lc=J,Ha=D,ws=g,As=of;Ha.prototype.lch=function(){return As(this._rgb)},Ha.prototype.hcl=function(){return As(this._rgb).reverse()},lc.lch=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ha,[null].concat(h,["lch"])))},lc.hcl=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ha,[null].concat(h,["hcl"])))},ws.format.lch=Es,ws.format.hcl=oc,["lch","hcl"].forEach(function(h){return ws.autodetect.push({p:2,test:function(){for(var v=[],y=arguments.length;y--;)v[y]=arguments[y];if(v=Ts(v,h),aa(v)==="array"&&v.length===3)return h}})});var $o={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},qo=$o,df=D,Cs=g,Yo=E.type,ka=qo,cc=I,ai=Oa;df.prototype.name=function(){for(var h=ai(this._rgb,"rgb"),v=0,y=Object.keys(ka);v<y.length;v+=1){var P=y[v];if(ka[P]===h)return P.toLowerCase()}return h},Cs.format.named=function(h){if(h=h.toLowerCase(),ka[h])return cc(ka[h]);throw new Error("unknown color name: "+h)},Cs.autodetect.push({p:5,test:function(h){for(var v=[],y=arguments.length-1;y-- >0;)v[y]=arguments[y+1];if(!v.length&&Yo(h)==="string"&&ka[h.toLowerCase()])return"named"}});var Zo=E.unpack,Va=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Zo(h,"rgb"),P=y[0],V=y[1],X=y[2];return(P<<16)+(V<<8)+X},uc=Va,fc=E.type,pf=function(h){if(fc(h)=="number"&&h>=0&&h<=16777215){var v=h>>16,y=h>>8&255,P=h&255;return[v,y,P,1]}throw new Error("unknown num color: "+h)},mf=pf,gf=J,hc=D,dc=g,sa=E.type,_f=uc;hc.prototype.num=function(){return _f(this._rgb)},gf.num=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(hc,[null].concat(h,["num"])))},dc.format.num=mf,dc.autodetect.push({p:5,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h.length===1&&sa(h[0])==="number"&&h[0]>=0&&h[0]<=16777215)return"num"}});var vf=J,Wa=D,Ko=g,Xi=E.unpack,Xa=E.type,pc=Math.round;Wa.prototype.rgb=function(h){return h===void 0&&(h=!0),h===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(pc)},Wa.prototype.rgba=function(h){return h===void 0&&(h=!0),this._rgb.slice(0,4).map(function(v,y){return y<3?h===!1?v:pc(v):v})},vf.rgb=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Wa,[null].concat(h,["rgb"])))},Ko.format.rgb=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=Xi(h,"rgba");return y[3]===void 0&&(y[3]=1),y},Ko.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Xi(h,"rgba"),Xa(h)==="array"&&(h.length===3||h.length===4&&Xa(h[3])=="number"&&h[3]>=0&&h[3]<=1))return"rgb"}});var Rs=Math.log,xf=function(h){var v=h/100,y,P,V;return v<66?(y=255,P=v<6?0:-155.25485562709179-.44596950469579133*(P=v-2)+104.49216199393888*Rs(P),V=v<20?0:-254.76935184120902+.8274096064007395*(V=v-10)+115.67994401066147*Rs(V)):(y=351.97690566805693+.114206453784165*(y=v-55)-40.25366309332127*Rs(y),P=325.4494125711974+.07943456536662342*(P=v-50)-28.0852963507957*Rs(P),V=255),[y,P,V,1]},Ar=xf,yi=Ar,mc=E.unpack,Mf=Math.round,bf=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];for(var y=mc(h,"rgb"),P=y[0],V=y[2],X=1e3,G=4e4,K=.4,ee;G-X>K;){ee=(G+X)*.5;var he=yi(ee);he[2]/he[0]>=V/P?G=ee:X=ee}return Mf(ee)},Sf=bf,jo=J,Ls=D,lr=g,Y=Sf;Ls.prototype.temp=Ls.prototype.kelvin=Ls.prototype.temperature=function(){return Y(this._rgb)},jo.temp=jo.kelvin=jo.temperature=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(Ls,[null].concat(h,["temp"])))},lr.format.temp=lr.format.kelvin=lr.format.temperature=Ar;var fe=E.unpack,re=Math.cbrt,$e=Math.pow,yt=Math.sign,Zt=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=fe(h,"rgb"),P=y[0],V=y[1],X=y[2],G=[tn(P/255),tn(V/255),tn(X/255)],K=G[0],ee=G[1],he=G[2],ge=re(.4122214708*K+.5363325363*ee+.0514459929*he),ze=re(.2119034982*K+.6806995451*ee+.1073969566*he),Re=re(.0883024619*K+.2817188376*ee+.6299787005*he);return[.2104542553*ge+.793617785*ze-.0040720468*Re,1.9779984951*ge-2.428592205*ze+.4505937099*Re,.0259040371*ge+.7827717662*ze-.808675766*Re]},En=Zt;function tn(h){var v=Math.abs(h);return v<.04045?h/12.92:(yt(h)||1)*$e((v+.055)/1.055,2.4)}var Jo=E.unpack,Ps=Math.pow,gi=Math.sign,Is=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Jo(h,"lab");var y=h[0],P=h[1],V=h[2],X=Ps(y+.3963377774*P+.2158037573*V,3),G=Ps(y-.1055613458*P-.0638541728*V,3),K=Ps(y-.0894841775*P-1.291485548*V,3);return[255*cr(4.0767416621*X-3.3077115913*G+.2309699292*K),255*cr(-1.2684380046*X+2.6097574011*G-.3413193965*K),255*cr(-.0041960863*X-.7034186147*G+1.707614701*K),h.length>3?h[3]:1]},gc=Is;function cr(h){var v=Math.abs(h);return v>.0031308?(gi(h)||1)*(1.055*Ps(v,1/2.4)-.055):h*12.92}var Ds=E.unpack,Us=E.type,nn=J,_c=D,Qo=g,Ns=En;_c.prototype.oklab=function(){return Ns(this._rgb)},nn.oklab=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(_c,[null].concat(h,["oklab"])))},Qo.format.oklab=gc,Qo.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=Ds(h,"oklab"),Us(h)==="array"&&h.length===3)return"oklab"}});var yf=E.unpack,Ef=En,Tf=Wo,Fs=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];var y=yf(h,"rgb"),P=y[0],V=y[1],X=y[2],G=Ef(P,V,X),K=G[0],ee=G[1],he=G[2];return Tf(K,ee,he)},ur=Fs,Os=E.unpack,vc=ys,Bs=gc,xc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];h=Os(h,"lch");var y=h[0],P=h[1],V=h[2],X=vc(y,P,V),G=X[0],K=X[1],ee=X[2],he=Bs(G,K,ee),ge=he[0],ze=he[1],Re=he[2];return[ge,ze,Re,h.length>3?h[3]:1]},Mc=xc,zs=E.unpack,bc=E.type,$a=J,fr=D,qa=g,wf=ur;fr.prototype.oklch=function(){return wf(this._rgb)},$a.oklch=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];return new(Function.prototype.bind.apply(fr,[null].concat(h,["oklch"])))},qa.format.oklch=Mc,qa.autodetect.push({p:3,test:function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];if(h=zs(h,"oklch"),bc(h)==="array"&&h.length===3)return"oklch"}});var Sc=D,Af=E.type;Sc.prototype.alpha=function(h,v){return v===void 0&&(v=!1),h!==void 0&&Af(h)==="number"?v?(this._rgb[3]=h,this):new Sc([this._rgb[0],this._rgb[1],this._rgb[2],h],"rgb"):this._rgb[3]};var Gs=D;Gs.prototype.clipped=function(){return this._rgb._clipped||!1};var Ni=D,el=bs;Ni.prototype.darken=function(h){h===void 0&&(h=1);var v=this,y=v.lab();return y[0]-=el.Kn*h,new Ni(y,"lab").alpha(v.alpha(),!0)},Ni.prototype.brighten=function(h){return h===void 0&&(h=1),this.darken(-h)},Ni.prototype.darker=Ni.prototype.darken,Ni.prototype.brighter=Ni.prototype.brighten;var Cf=D;Cf.prototype.get=function(h){var v=h.split("."),y=v[0],P=v[1],V=this[y]();if(P){var X=y.indexOf(P)-(y.substr(0,2)==="ok"?2:0);if(X>-1)return V[X];throw new Error("unknown channel "+P+" in mode "+y)}else return V};var Cr=D,Rf=E.type,Lf=Math.pow,Cn=1e-7,Vn=20;Cr.prototype.luminance=function(h){if(h!==void 0&&Rf(h)==="number"){if(h===0)return new Cr([0,0,0,this._rgb[3]],"rgb");if(h===1)return new Cr([255,255,255,this._rgb[3]],"rgb");var v=this.luminance(),y="rgb",P=Vn,V=function(G,K){var ee=G.interpolate(K,.5,y),he=ee.luminance();return Math.abs(h-he)<Cn||!P--?ee:he>h?V(G,ee):V(ee,K)},X=(v>h?V(new Cr([0,0,0]),this):V(this,new Cr([255,255,255]))).rgb();return new Cr(X.concat([this._rgb[3]]))}return Pf.apply(void 0,this._rgb.slice(0,3))};var Pf=function(h,v,y){return h=tl(h),v=tl(v),y=tl(y),.2126*h+.7152*v+.0722*y},tl=function(h){return h/=255,h<=.03928?h/12.92:Lf((h+.055)/1.055,2.4)},Jn={},yc=D,Hs=E.type,hr=Jn,ks=function(h,v,y){y===void 0&&(y=.5);for(var P=[],V=arguments.length-3;V-- >0;)P[V]=arguments[V+3];var X=P[0]||"lrgb";if(!hr[X]&&!P.length&&(X=Object.keys(hr)[0]),!hr[X])throw new Error("interpolation mode "+X+" is not defined");return Hs(h)!=="object"&&(h=new yc(h)),Hs(v)!=="object"&&(v=new yc(v)),hr[X](h,v,y).alpha(h.alpha()+y*(v.alpha()-h.alpha()))},Rr=D,Ya=ks;Rr.prototype.mix=Rr.prototype.interpolate=function(h,v){v===void 0&&(v=.5);for(var y=[],P=arguments.length-2;P-- >0;)y[P]=arguments[P+2];return Ya.apply(void 0,[this,h,v].concat(y))};var oa=D;oa.prototype.premultiply=function(h){h===void 0&&(h=!1);var v=this._rgb,y=v[3];return h?(this._rgb=[v[0]*y,v[1]*y,v[2]*y,y],this):new oa([v[0]*y,v[1]*y,v[2]*y,y],"rgb")};var la=D,ca=bs;la.prototype.saturate=function(h){h===void 0&&(h=1);var v=this,y=v.lch();return y[1]+=ca.Kn*h,y[1]<0&&(y[1]=0),new la(y,"lch").alpha(v.alpha(),!0)},la.prototype.desaturate=function(h){return h===void 0&&(h=1),this.saturate(-h)};var Ec=D,Tc=E.type;Ec.prototype.set=function(h,v,y){y===void 0&&(y=!1);var P=h.split("."),V=P[0],X=P[1],G=this[V]();if(X){var K=V.indexOf(X)-(V.substr(0,2)==="ok"?2:0);if(K>-1){if(Tc(v)=="string")switch(v.charAt(0)){case"+":G[K]+=+v;break;case"-":G[K]+=+v;break;case"*":G[K]*=+v.substr(1);break;case"/":G[K]/=+v.substr(1);break;default:G[K]=+v}else if(Tc(v)==="number")G[K]=v;else throw new Error("unsupported value for Color.set");var ee=new Ec(G,V);return y?(this._rgb=ee._rgb,this):ee}throw new Error("unknown channel "+X+" in mode "+V)}else return G};var If=D,Df=function(h,v,y){var P=h._rgb,V=v._rgb;return new If(P[0]+y*(V[0]-P[0]),P[1]+y*(V[1]-P[1]),P[2]+y*(V[2]-P[2]),"rgb")};Jn.rgb=Df;var Uf=D,ua=Math.sqrt,Fi=Math.pow,wc=function(h,v,y){var P=h._rgb,V=P[0],X=P[1],G=P[2],K=v._rgb,ee=K[0],he=K[1],ge=K[2];return new Uf(ua(Fi(V,2)*(1-y)+Fi(ee,2)*y),ua(Fi(X,2)*(1-y)+Fi(he,2)*y),ua(Fi(G,2)*(1-y)+Fi(ge,2)*y),"rgb")};Jn.lrgb=wc;var A=D,fa=function(h,v,y){var P=h.lab(),V=v.lab();return new A(P[0]+y*(V[0]-P[0]),P[1]+y*(V[1]-P[1]),P[2]+y*(V[2]-P[2]),"lab")};Jn.lab=fa;var Za=D,On=function(h,v,y,P){var V,X,G,K;P==="hsl"?(G=h.hsl(),K=v.hsl()):P==="hsv"?(G=h.hsv(),K=v.hsv()):P==="hcg"?(G=h.hcg(),K=v.hcg()):P==="hsi"?(G=h.hsi(),K=v.hsi()):P==="lch"||P==="hcl"?(P="hcl",G=h.hcl(),K=v.hcl()):P==="oklch"&&(G=h.oklch().reverse(),K=v.oklch().reverse());var ee,he,ge,ze,Re,qe;(P.substr(0,1)==="h"||P==="oklch")&&(V=G,ee=V[0],ge=V[1],Re=V[2],X=K,he=X[0],ze=X[1],qe=X[2]);var Ye,Pt,ct,At;return!isNaN(ee)&&!isNaN(he)?(he>ee&&he-ee>180?At=he-(ee+360):he<ee&&ee-he>180?At=he+360-ee:At=he-ee,Pt=ee+y*At):isNaN(ee)?isNaN(he)?Pt=Number.NaN:(Pt=he,(Re==1||Re==0)&&P!="hsv"&&(Ye=ze)):(Pt=ee,(qe==1||qe==0)&&P!="hsv"&&(Ye=ge)),Ye===void 0&&(Ye=ge+y*(ze-ge)),ct=Re+y*(qe-Re),P==="oklch"?new Za([ct,Ye,Pt],P):new Za([Pt,Ye,ct],P)},Bt=On,Ac=function(h,v,y){return Bt(h,v,y,"lch")};Jn.lch=Ac,Jn.hcl=Ac;var Nf=D,Ff=function(h,v,y){var P=h.num(),V=v.num();return new Nf(P+y*(V-P),"num")};Jn.num=Ff;var Lr=On,Of=function(h,v,y){return Lr(h,v,y,"hcg")};Jn.hcg=Of;var Bf=On,zf=function(h,v,y){return Bf(h,v,y,"hsi")};Jn.hsi=zf;var Gf=On,Hf=function(h,v,y){return Gf(h,v,y,"hsl")};Jn.hsl=Hf;var $i=On,kf=function(h,v,y){return $i(h,v,y,"hsv")};Jn.hsv=kf;var Vf=D,Wf=function(h,v,y){var P=h.oklab(),V=v.oklab();return new Vf(P[0]+y*(V[0]-P[0]),P[1]+y*(V[1]-P[1]),P[2]+y*(V[2]-P[2]),"oklab")};Jn.oklab=Wf;var Xf=On,$f=function(h,v,y){return Xf(h,v,y,"oklch")};Jn.oklch=$f;var Ei=D,qf=E.clip_rgb,nl=Math.pow,il=Math.sqrt,rl=Math.PI,Cc=Math.cos,dr=Math.sin,Yf=Math.atan2,Zf=function(h,v,y){v===void 0&&(v="lrgb"),y===void 0&&(y=null);var P=h.length;y||(y=Array.from(new Array(P)).map(function(){return 1}));var V=P/y.reduce(function(Pt,ct){return Pt+ct});if(y.forEach(function(Pt,ct){y[ct]*=V}),h=h.map(function(Pt){return new Ei(Pt)}),v==="lrgb")return Ti(h,y);for(var X=h.shift(),G=X.get(v),K=[],ee=0,he=0,ge=0;ge<G.length;ge++)if(G[ge]=(G[ge]||0)*y[0],K.push(isNaN(G[ge])?0:y[0]),v.charAt(ge)==="h"&&!isNaN(G[ge])){var ze=G[ge]/180*rl;ee+=Cc(ze)*y[0],he+=dr(ze)*y[0]}var Re=X.alpha()*y[0];h.forEach(function(Pt,ct){var At=Pt.get(v);Re+=Pt.alpha()*y[ct+1];for(var Vt=0;Vt<G.length;Vt++)if(!isNaN(At[Vt]))if(K[Vt]+=y[ct+1],v.charAt(Vt)==="h"){var Dn=At[Vt]/180*rl;ee+=Cc(Dn)*y[ct+1],he+=dr(Dn)*y[ct+1]}else G[Vt]+=At[Vt]*y[ct+1]});for(var qe=0;qe<G.length;qe++)if(v.charAt(qe)==="h"){for(var Ye=Yf(he/K[qe],ee/K[qe])/rl*180;Ye<0;)Ye+=360;for(;Ye>=360;)Ye-=360;G[qe]=Ye}else G[qe]=G[qe]/K[qe];return Re/=P,new Ei(G,v).alpha(Re>.99999?1:Re,!0)},Ti=function(h,v){for(var y=h.length,P=[0,0,0,0],V=0;V<h.length;V++){var X=h[V],G=v[V]/y,K=X._rgb;P[0]+=nl(K[0],2)*G,P[1]+=nl(K[1],2)*G,P[2]+=nl(K[2],2)*G,P[3]+=K[3]*G}return P[0]=il(P[0]),P[1]=il(P[1]),P[2]=il(P[2]),P[3]>.9999999&&(P[3]=1),new Ei(qf(P))},wi=J,ha=E.type,Kf=Math.pow,al=function(h){var v="rgb",y=wi("#ccc"),P=0,V=[0,1],X=[],G=[0,0],K=!1,ee=[],he=!1,ge=0,ze=1,Re=!1,qe={},Ye=!0,Pt=1,ct=function(Pe){if(Pe=Pe||["#fff","#000"],Pe&&ha(Pe)==="string"&&wi.brewer&&wi.brewer[Pe.toLowerCase()]&&(Pe=wi.brewer[Pe.toLowerCase()]),ha(Pe)==="array"){Pe.length===1&&(Pe=[Pe[0],Pe[0]]),Pe=Pe.slice(0);for(var it=0;it<Pe.length;it++)Pe[it]=wi(Pe[it]);X.length=0;for(var It=0;It<Pe.length;It++)X.push(It/(Pe.length-1))}return Yn(),ee=Pe},At=function(Pe){if(K!=null){for(var it=K.length-1,It=0;It<it&&Pe>=K[It];)It++;return It-1}return 0},Vt=function(Pe){return Pe},Dn=function(Pe){return Pe},Mn=function(Pe,it){var It,xt;if(it==null&&(it=!1),isNaN(Pe)||Pe===null)return y;if(it)xt=Pe;else if(K&&K.length>2){var Bn=At(Pe);xt=Bn/(K.length-2)}else ze!==ge?xt=(Pe-ge)/(ze-ge):xt=1;xt=Dn(xt),it||(xt=Vt(xt)),Pt!==1&&(xt=Kf(xt,Pt)),xt=G[0]+xt*(1-G[0]-G[1]),xt=Math.min(1,Math.max(0,xt));var Wt=Math.floor(xt*1e4);if(Ye&&qe[Wt])It=qe[Wt];else{if(ha(ee)==="array")for(var zt=0;zt<X.length;zt++){var Kt=X[zt];if(xt<=Kt){It=ee[zt];break}if(xt>=Kt&&zt===X.length-1){It=ee[zt];break}if(xt>Kt&&xt<X[zt+1]){xt=(xt-Kt)/(X[zt+1]-Kt),It=wi.interpolate(ee[zt],ee[zt+1],xt,v);break}}else ha(ee)==="function"&&(It=ee(xt));Ye&&(qe[Wt]=It)}return It},Yn=function(){return qe={}};ct(h);var Ot=function(Pe){var it=wi(Mn(Pe));return he&&it[he]?it[he]():it};return Ot.classes=function(Pe){if(Pe!=null){if(ha(Pe)==="array")K=Pe,V=[Pe[0],Pe[Pe.length-1]];else{var it=wi.analyze(V);Pe===0?K=[it.min,it.max]:K=wi.limits(it,"e",Pe)}return Ot}return K},Ot.domain=function(Pe){if(!arguments.length)return V;ge=Pe[0],ze=Pe[Pe.length-1],X=[];var it=ee.length;if(Pe.length===it&&ge!==ze)for(var It=0,xt=Array.from(Pe);It<xt.length;It+=1){var Bn=xt[It];X.push((Bn-ge)/(ze-ge))}else{for(var Wt=0;Wt<it;Wt++)X.push(Wt/(it-1));if(Pe.length>2){var zt=Pe.map(function(Yt,rn){return rn/(Pe.length-1)}),Kt=Pe.map(function(Yt){return(Yt-ge)/(ze-ge)});Kt.every(function(Yt,rn){return zt[rn]===Yt})||(Dn=function(Yt){if(Yt<=0||Yt>=1)return Yt;for(var rn=0;Yt>=Kt[rn+1];)rn++;var Ai=(Yt-Kt[rn])/(Kt[rn+1]-Kt[rn]),mr=zt[rn]+Ai*(zt[rn+1]-zt[rn]);return mr})}}return V=[ge,ze],Ot},Ot.mode=function(Pe){return arguments.length?(v=Pe,Yn(),Ot):v},Ot.range=function(Pe,it){return ct(Pe),Ot},Ot.out=function(Pe){return he=Pe,Ot},Ot.spread=function(Pe){return arguments.length?(P=Pe,Ot):P},Ot.correctLightness=function(Pe){return Pe==null&&(Pe=!0),Re=Pe,Yn(),Re?Vt=function(it){for(var It=Mn(0,!0).lab()[0],xt=Mn(1,!0).lab()[0],Bn=It>xt,Wt=Mn(it,!0).lab()[0],zt=It+(xt-It)*it,Kt=Wt-zt,Yt=0,rn=1,Ai=20;Math.abs(Kt)>.01&&Ai-- >0;)(function(){return Bn&&(Kt*=-1),Kt<0?(Yt=it,it+=(rn-it)*.5):(rn=it,it+=(Yt-it)*.5),Wt=Mn(it,!0).lab()[0],Kt=Wt-zt})();return it}:Vt=function(it){return it},Ot},Ot.padding=function(Pe){return Pe!=null?(ha(Pe)==="number"&&(Pe=[Pe,Pe]),G=Pe,Ot):G},Ot.colors=function(Pe,it){arguments.length<2&&(it="hex");var It=[];if(arguments.length===0)It=ee.slice(0);else if(Pe===1)It=[Ot(.5)];else if(Pe>1){var xt=V[0],Bn=V[1]-xt;It=jf(0,Pe,!1).map(function(rn){return Ot(xt+rn/(Pe-1)*Bn)})}else{h=[];var Wt=[];if(K&&K.length>2)for(var zt=1,Kt=K.length,Yt=1<=Kt;Yt?zt<Kt:zt>Kt;Yt?zt++:zt--)Wt.push((K[zt-1]+K[zt])*.5);else Wt=V;It=Wt.map(function(rn){return Ot(rn)})}return wi[it]&&(It=It.map(function(rn){return rn[it]()})),It},Ot.cache=function(Pe){return Pe!=null?(Ye=Pe,Ot):Ye},Ot.gamma=function(Pe){return Pe!=null?(Pt=Pe,Ot):Pt},Ot.nodata=function(Pe){return Pe!=null?(y=wi(Pe),Ot):y},Ot};function jf(h,v,y){for(var P=[],V=h<v,X=y?V?v+1:v-1:v,G=h;V?G<X:G>X;V?G++:G--)P.push(G);return P}var da=D,Rc=al,Jf=function(h){for(var v=[1,1],y=1;y<h;y++){for(var P=[1],V=1;V<=v.length;V++)P[V]=(v[V]||0)+v[V-1];v=P}return v},Qf=function(h){var v,y,P,V,X,G,K;if(h=h.map(function(Re){return new da(Re)}),h.length===2)v=h.map(function(Re){return Re.lab()}),X=v[0],G=v[1],V=function(Re){var qe=[0,1,2].map(function(Ye){return X[Ye]+Re*(G[Ye]-X[Ye])});return new da(qe,"lab")};else if(h.length===3)y=h.map(function(Re){return Re.lab()}),X=y[0],G=y[1],K=y[2],V=function(Re){var qe=[0,1,2].map(function(Ye){return(1-Re)*(1-Re)*X[Ye]+2*(1-Re)*Re*G[Ye]+Re*Re*K[Ye]});return new da(qe,"lab")};else if(h.length===4){var ee;P=h.map(function(Re){return Re.lab()}),X=P[0],G=P[1],K=P[2],ee=P[3],V=function(Re){var qe=[0,1,2].map(function(Ye){return(1-Re)*(1-Re)*(1-Re)*X[Ye]+3*(1-Re)*(1-Re)*Re*G[Ye]+3*(1-Re)*Re*Re*K[Ye]+Re*Re*Re*ee[Ye]});return new da(qe,"lab")}}else if(h.length>=5){var he,ge,ze;he=h.map(function(Re){return Re.lab()}),ze=h.length-1,ge=Jf(ze),V=function(Re){var qe=1-Re,Ye=[0,1,2].map(function(Pt){return he.reduce(function(ct,At,Vt){return ct+ge[Vt]*Math.pow(qe,ze-Vt)*Math.pow(Re,Vt)*At[Pt]},0)});return new da(Ye,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return V},sl=function(h){var v=Qf(h);return v.scale=function(){return Rc(v)},v},Pr=J,Qn=function(h,v,y){if(!Qn[y])throw new Error("unknown blend mode "+y);return Qn[y](h,v)},pr=function(h){return function(v,y){var P=Pr(y).rgb(),V=Pr(v).rgb();return Pr.rgb(h(P,V))}},qi=function(h){return function(v,y){var P=[];return P[0]=h(v[0],y[0]),P[1]=h(v[1],y[1]),P[2]=h(v[2],y[2]),P}},eh=function(h){return h},Yi=function(h,v){return h*v/255},ol=function(h,v){return h>v?v:h},Ir=function(h,v){return h>v?h:v},_i=function(h,v){return 255*(1-(1-h/255)*(1-v/255))},th=function(h,v){return v<128?2*h*v/255:255*(1-2*(1-h/255)*(1-v/255))},Lc=function(h,v){return 255*(1-(1-v/255)/(h/255))},Pc=function(h,v){return h===255?255:(h=255*(v/255)/(1-h/255),h>255?255:h)};Qn.normal=pr(qi(eh)),Qn.multiply=pr(qi(Yi)),Qn.screen=pr(qi(_i)),Qn.overlay=pr(qi(th)),Qn.darken=pr(qi(ol)),Qn.lighten=pr(qi(Ir)),Qn.dodge=pr(qi(Pc)),Qn.burn=pr(qi(Lc));for(var Ka=Qn,Oi=E.type,Ic=E.clip_rgb,nh=E.TWOPI,Vs=Math.pow,ih=Math.sin,Dc=Math.cos,In=J,ll=function(h,v,y,P,V){h===void 0&&(h=300),v===void 0&&(v=-1.5),y===void 0&&(y=1),P===void 0&&(P=1),V===void 0&&(V=[0,1]);var X=0,G;Oi(V)==="array"?G=V[1]-V[0]:(G=0,V=[V,V]);var K=function(ee){var he=nh*((h+120)/360+v*ee),ge=Vs(V[0]+G*ee,P),ze=X!==0?y[0]+ee*X:y,Re=ze*ge*(1-ge)/2,qe=Dc(he),Ye=ih(he),Pt=ge+Re*(-.14861*qe+1.78277*Ye),ct=ge+Re*(-.29227*qe-.90649*Ye),At=ge+Re*(1.97294*qe);return In(Ic([Pt*255,ct*255,At*255,1]))};return K.start=function(ee){return ee==null?h:(h=ee,K)},K.rotations=function(ee){return ee==null?v:(v=ee,K)},K.gamma=function(ee){return ee==null?P:(P=ee,K)},K.hue=function(ee){return ee==null?y:(y=ee,Oi(y)==="array"?(X=y[1]-y[0],X===0&&(y=y[1])):X=0,K)},K.lightness=function(ee){return ee==null?V:(Oi(ee)==="array"?(V=ee,G=ee[1]-ee[0]):(V=[ee,ee],G=0),K)},K.scale=function(){return In.scale(K)},K.hue(y),K},Uc=D,Bi="0123456789abcdef",cl=Math.floor,Ws=Math.random,Dr=function(){for(var h="#",v=0;v<6;v++)h+=Bi.charAt(cl(Ws()*16));return new Uc(h,"hex")},Xs=p,Wn=Math.log,ul=Math.pow,rh=Math.floor,ah=Math.abs,Nc=function(h,v){v===void 0&&(v=null);var y={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Xs(h)==="object"&&(h=Object.values(h)),h.forEach(function(P){v&&Xs(P)==="object"&&(P=P[v]),P!=null&&!isNaN(P)&&(y.values.push(P),y.sum+=P,P<y.min&&(y.min=P),P>y.max&&(y.max=P),y.count+=1)}),y.domain=[y.min,y.max],y.limits=function(P,V){return $s(y,P,V)},y},$s=function(h,v,y){v===void 0&&(v="equal"),y===void 0&&(y=7),Xs(h)=="array"&&(h=Nc(h));var P=h.min,V=h.max,X=h.values.sort(function(_l,vl){return _l-vl});if(y===1)return[P,V];var G=[];if(v.substr(0,1)==="c"&&(G.push(P),G.push(V)),v.substr(0,1)==="e"){G.push(P);for(var K=1;K<y;K++)G.push(P+K/y*(V-P));G.push(V)}else if(v.substr(0,1)==="l"){if(P<=0)throw new Error("Logarithmic scales are only possible for values > 0");var ee=Math.LOG10E*Wn(P),he=Math.LOG10E*Wn(V);G.push(P);for(var ge=1;ge<y;ge++)G.push(ul(10,ee+ge/y*(he-ee)));G.push(V)}else if(v.substr(0,1)==="q"){G.push(P);for(var ze=1;ze<y;ze++){var Re=(X.length-1)*ze/y,qe=rh(Re);if(qe===Re)G.push(X[qe]);else{var Ye=Re-qe;G.push(X[qe]*(1-Ye)+X[qe+1]*Ye)}}G.push(V)}else if(v.substr(0,1)==="k"){var Pt,ct=X.length,At=new Array(ct),Vt=new Array(y),Dn=!0,Mn=0,Yn=null;Yn=[],Yn.push(P);for(var Ot=1;Ot<y;Ot++)Yn.push(P+Ot/y*(V-P));for(Yn.push(V);Dn;){for(var Pe=0;Pe<y;Pe++)Vt[Pe]=0;for(var it=0;it<ct;it++)for(var It=X[it],xt=Number.MAX_VALUE,Bn=void 0,Wt=0;Wt<y;Wt++){var zt=ah(Yn[Wt]-It);zt<xt&&(xt=zt,Bn=Wt),Vt[Bn]++,At[it]=Bn}for(var Kt=new Array(y),Yt=0;Yt<y;Yt++)Kt[Yt]=null;for(var rn=0;rn<ct;rn++)Pt=At[rn],Kt[Pt]===null?Kt[Pt]=X[rn]:Kt[Pt]+=X[rn];for(var Ai=0;Ai<y;Ai++)Kt[Ai]*=1/Vt[Ai];Dn=!1;for(var mr=0;mr<y;mr++)if(Kt[mr]!==Yn[mr]){Dn=!0;break}Yn=Kt,Mn++,Mn>200&&(Dn=!1)}for(var Ki={},Ur=0;Ur<y;Ur++)Ki[Ur]=[];for(var ma=0;ma<ct;ma++)Pt=At[ma],Ki[Pt].push(X[ma]);for(var zi=[],gr=0;gr<y;gr++)zi.push(Ki[gr][0]),zi.push(Ki[gr][Ki[gr].length-1]);zi=zi.sort(function(_l,vl){return _l-vl}),G.push(zi[0]);for(var Un=1;Un<zi.length;Un+=2){var Xn=zi[Un];!isNaN(Xn)&&G.indexOf(Xn)===-1&&G.push(Xn)}}return G},Fc={analyze:Nc,limits:$s},pa=D,Oc=function(h,v){h=new pa(h),v=new pa(v);var y=h.luminance(),P=v.luminance();return y>P?(y+.05)/(P+.05):(P+.05)/(y+.05)},Bc=D,Zi=Math.sqrt,gn=Math.pow,sh=Math.min,oh=Math.max,qs=Math.atan2,fl=Math.abs,Ys=Math.cos,zc=Math.sin,lh=Math.exp,hl=Math.PI,dl=function(h,v,y,P,V){y===void 0&&(y=1),P===void 0&&(P=1),V===void 0&&(V=1);var X=function(Xn){return 360*Xn/(2*hl)},G=function(Xn){return 2*hl*Xn/360};h=new Bc(h),v=new Bc(v);var K=Array.from(h.lab()),ee=K[0],he=K[1],ge=K[2],ze=Array.from(v.lab()),Re=ze[0],qe=ze[1],Ye=ze[2],Pt=(ee+Re)/2,ct=Zi(gn(he,2)+gn(ge,2)),At=Zi(gn(qe,2)+gn(Ye,2)),Vt=(ct+At)/2,Dn=.5*(1-Zi(gn(Vt,7)/(gn(Vt,7)+gn(25,7)))),Mn=he*(1+Dn),Yn=qe*(1+Dn),Ot=Zi(gn(Mn,2)+gn(ge,2)),Pe=Zi(gn(Yn,2)+gn(Ye,2)),it=(Ot+Pe)/2,It=X(qs(ge,Mn)),xt=X(qs(Ye,Yn)),Bn=It>=0?It:It+360,Wt=xt>=0?xt:xt+360,zt=fl(Bn-Wt)>180?(Bn+Wt+360)/2:(Bn+Wt)/2,Kt=1-.17*Ys(G(zt-30))+.24*Ys(G(2*zt))+.32*Ys(G(3*zt+6))-.2*Ys(G(4*zt-63)),Yt=Wt-Bn;Yt=fl(Yt)<=180?Yt:Wt<=Bn?Yt+360:Yt-360,Yt=2*Zi(Ot*Pe)*zc(G(Yt)/2);var rn=Re-ee,Ai=Pe-Ot,mr=1+.015*gn(Pt-50,2)/Zi(20+gn(Pt-50,2)),Ki=1+.045*it,Ur=1+.015*it*Kt,ma=30*lh(-gn((zt-275)/25,2)),zi=2*Zi(gn(it,7)/(gn(it,7)+gn(25,7))),gr=-zi*zc(2*G(ma)),Un=Zi(gn(rn/(y*mr),2)+gn(Ai/(P*Ki),2)+gn(Yt/(V*Ur),2)+gr*(Ai/(P*Ki))*(Yt/(V*Ur)));return oh(0,sh(100,Un))},Gc=D,pl=function(h,v,y){y===void 0&&(y="lab"),h=new Gc(h),v=new Gc(v);var P=h.get(y),V=v.get(y),X=0;for(var G in P){var K=(P[G]||0)-(V[G]||0);X+=K*K}return Math.sqrt(X)},Hc=D,kc=function(){for(var h=[],v=arguments.length;v--;)h[v]=arguments[v];try{return new(Function.prototype.bind.apply(Hc,[null].concat(h))),!0}catch{return!1}},ml=J,ja=al,ch={cool:function(){return ja([ml.hsl(180,1,.9),ml.hsl(250,.7,.4)])},hot:function(){return ja(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Ja={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Zs=0,Vc=Object.keys(Ja);Zs<Vc.length;Zs+=1){var gl=Vc[Zs];Ja[gl.toLowerCase()]=Ja[gl]}var uh=Ja,Tn=J;Tn.average=Zf,Tn.bezier=sl,Tn.blend=Ka,Tn.cubehelix=ll,Tn.mix=Tn.interpolate=ks,Tn.random=Dr,Tn.scale=al,Tn.analyze=Fc.analyze,Tn.contrast=Oc,Tn.deltaE=dl,Tn.distance=pl,Tn.limits=Fc.limits,Tn.valid=kc,Tn.scales=ch,Tn.colors=qo,Tn.brewer=uh;var Wc=Tn;return Wc})})(yA);function Ug(r){return ju(r,Jt.value.prefix)}function EA(r,e){const t={r:255,g:255,b:255},i={r:255,g:0,b:0},s={r:0,g:255,b:255},o={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(s.r+(t.r-s.r)*r),g:Math.round(s.g+(t.g-s.g)*r),b:Math.round(s.b+(t.b-s.b)*r)},c={r:(o.r+u.r)/2,g:(o.g+u.g)/2,b:(o.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function Ng(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},s={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${s.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:EA(r,e)}function Fg(r,e){const t=r.slice().sort((s,o)=>s-o),i=Math.floor(t.length*e)-1;return t[i]}function Og(r,e){return r.map(t=>Math.min(t/e,1))}const TA=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),wA(t)})};function wA(r){const e=document.getElementById("geneNotFound");if(r){const t=Jt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Wu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Wu(Jt.value.genes.slice(0,10))}function Wu(r){const e=document.getElementById("geneRadio");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",un.value.selectedGenes.includes(t)&&(i.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const o=document.createElement("geneRadioGroup");o.appendChild(i),o.appendChild(s),o.appendChild(document.createElement("br")),e.appendChild(o),i.addEventListener("change",u=>{un.value.selectedGenes.length>=2&&(u.target.checked=!1),AA(t,u.target.checked)})})}function AA(r,e){let t=un.value.selectedGenes.map(i=>i);e?(t.push(r),Hu(t)):(t=t.filter(i=>i!==r),Hu(t))}const CA=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Hu([]),Wu(Jt.value.genes.slice(0,10)),geneTextbox.value=""})},RA=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",un.value.selectedGenes.length!==0?un.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"red":"cyan",i.style.fontStyle="normal",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},Ud=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)},LA=new URL(window.location),Ta=new URLSearchParams(LA.search);class PA{constructor(e){Zp(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update();const e=this.camera.quaternion;let t=Il.value.items;for(let i=0;i<t.length*2;i++){const s=new Sn,o=new te,u=new te;this.instancedMesh.getMatrixAt(i,s),s.decompose(o,new Da,u),s.compose(o,e,u),this.instancedMesh.setMatrixAt(i,s)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=R_.value.scene,this.camera=new Di(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Hd,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=Fn.value.cameraPositionZ,this.controls=new L_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){Il.pipe(ya(e=>e.items),Ea((e,t)=>_d.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),Jt.pipe(ya(e=>e.prefix),Ea((e,t)=>_d.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e),console.log(Jt.value.prefix)}),Dl.pipe(ya(e=>e.isLoading),Ea((e,t)=>_d.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),console.log(Dl.value.isLoading),_A(Dl.value.isLoading)}),un.pipe(ya(e=>e.selectedCelltypes),Ea((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),console.log(un.value.selectedCelltypes),Ta.has("celltype")&&Ta.delete("celltype"),vr(!0),un.value.selectedCelltypes?await this.updateInstancedMesh(un.value.selectedCelltypes):await this.updateInstancedMesh([]),vr(!1),SA(),un.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(un.value.selectedCelltypes));Ta.append("celltype",t)}Ud(Ta)}),un.pipe(ya(e=>e.selectedGenes),Ea((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),console.log(un.value.selectedGenes),Ta.has("gene")&&Ta.delete("gene"),vr(!0),un.value.selectedGenes?await this.updateInstancedMesh(un.value.selectedGenes):await this.updateInstancedMesh([]),vr(!1),RA(),un.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(un.value.selectedGenes));Ta.append("gene",t)}Ud(Ta)}),Fn.pipe(ya(e=>e.dotSize),Ea()).subscribe(async e=>{console.log("Dot Size Changed:",e),console.log(Fn.value.dotSize),vr(!0),Fn.value.dotSize?await this.updateInstancedMesh(Fn.value.dotSize):await this.updateInstancedMesh([]),vr(!1)}),Fn.pipe(ya(e=>e.cameraPositionZ),Ea()).subscribe(async e=>{console.log("Zoom",e),console.log(Fn.value.cameraPositionZ),Fn.value.cameraPositionZ?await this.updateInstancedMesh(Fn.value.cameraPositionZ):await this.updateInstancedMesh([])}),Fn.pipe(ya(e=>e.genePercentile),Ea()).subscribe(async e=>{console.log("Gene Percentile",e),console.log(Fn.value.genePercentile),vr(!0),Fn.value.genePercentile?await this.updateInstancedMesh(Fn.value.genePercentile):await this.updateInstancedMesh([]),vr(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=Jt.value.pallete,i=Il.value.items;const s=new kd(.1,32,32),o=new zd,u=i.length;console.log(u),this.instancedMesh=new bg(s,o,u),this.instancedMeshUmap=new bg(s,o,u);const c=new fi,f=new fi;let p,m,x,M=200,b=.5,w=un.value.selectedCelltypes,E=un.value.selectedGenes,g=Fn.value.dotSize,_=Math.floor(g/5);this.camera.position.z=Fn.value.cameraPositionZ;let H=Fn.value.genePercentile;if(E.length>0)try{let R=await Ug(E[0]);if(E.length==2){let $=await Ug(E[1]),D=Fg($,H);x=Og($,D)}let N=Fg(R,H);m=Og(R,N)}catch(R){console.error("Error fetching data:",R)}for(let R=0;R<u;R++){if(E.length>0)if(w.length===0||w.includes(i[R].clusters)){let $,D;x?($=Ng(m[R],x[R]),D=(m[R]+x[R])/2*g+g/5):($=Ng(m[R]),D=m[R]*g+g/5),p=new jt($),c.scale.set(D,D,D),f.scale.set(D*b,D*b,D*b)}else p=new jt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*b,1*b,1*b);else w.includes(i[R].clusters)||w.length==0?(p=new jt(t[i[R].clusters]),c.scale.set(g,g,g),f.scale.set(g*b,g*b,g*b)):(p=new jt("#5e5e5e"),c.scale.set(_,_,_),f.scale.set(_*b,_*b,_*b));c.position.set(i[R].global_sphere0_norm*M,i[R].global_sphere1_norm*M,i[R].global_sphere2_norm*M),c.updateMatrix(),this.instancedMesh.setMatrixAt(R,c.matrix),this.instancedMesh.setColorAt(R,p);let N=1e4;Jt.value.prefix=="75pe"?f.position.set(i[R].X_umap0_norm*80+N,i[R].X_umap1_norm*80,10):f.position.set(i[R].X_umap0_norm*60+N-25,i[R].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(R,f.matrix),this.instancedMeshUmap.setColorAt(R,p)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const Wd=Jt.value.prefix;async function IA(){const r=Jt.value.palleteColumn;try{const e=await ju(r,Wd);console.log(e),cA(JSON.parse(e))}catch(e){console.error("Failed to load items:",e)}}async function DA(){try{const r=await ju("genes",Wd);uA(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}async function UA(){const r=Jt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(s=>ju(s,Wd)));console.log(i),r.forEach((s,o)=>{console.log(s),e[s]=i[o]}),console.log("trfdata"),console.log(e);for(let s=0;s<e.clusters.length;s++){let o={};for(let u in e)o[u]=e[u][s];t.push(o)}sA(t)}catch(i){console.error("Error combining data:",i)}}const NA=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none",t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white")})},FA=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},OA=()=>{const r=document.querySelectorAll(".iconBtn"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue"),o=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),p=document.getElementById("cellCheckbox"),m=document.getElementById("geneRadioContainer"),x=document.getElementById("toggleCellCheckbox"),M=document.getElementById("toggleGeneRadio");r.forEach(b=>{b.addEventListener("mouseenter",function(){const w=this.dataset.target,E=document.getElementById(w);E.style.display="block"}),b.addEventListener("mouseleave",function(){const w=this.dataset.target,E=document.getElementById(w);E.style.display="none"})}),e.addEventListener("click",()=>{p.style.display==="block"&&(p.style.display="none",x.style.backgroundColor="rgb(97, 97, 97)",x.style.color="white"),m.style.display==="block"&&(m.style.display="none",M.style.backgroundColor="rgb(97, 97, 97)",M.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.oninput=function(){s.value=parseFloat(this.value).toFixed(2),Ig(parseFloat(this.value).toFixed(2))},s.oninput=function(){this.value<0?this.value=0:this.value>50&&(this.value=50),i.value=parseFloat(this.value).toFixed(2),Ig(parseFloat(this.value).toFixed(2))},o.addEventListener("click",()=>{p.style.display==="block"&&(p.style.display="none",x.style.backgroundColor="rgb(97, 97, 97)",x.style.color="white"),m.style.display==="block"&&(m.style.display="none",M.style.backgroundColor="rgb(97, 97, 97)",M.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),Dg(parseFloat(this.value).toFixed(2))}),f.oninput=function(){this.value<0?this.value=0:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),Dg(parseFloat(this.value).toFixed(2))}};function BA(){const r=document.createElement("div");r.className="filter";const e=Bg("toggleCellCheckbox","Celltype");r.appendChild(e);const t=zA();r.appendChild(t);const i=Bg("toggleGeneRadio","Gene");r.appendChild(i);const s=GA();r.appendChild(s);const o=HA();return r.appendChild(o),r}function Bg(r,e){const t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add("toggles","btn"),t.id=r,t.textContent=e,t}function zA(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="cellCheckbox",r.style.display="none",r.style.zIndex=1e3;const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="cellTextbox",t.placeholder="Search celltype";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="cellClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const s=document.createElement("div");s.classList.add("checkboxes"),s.id="cellCheckboxes";const o=document.createElement("div");return o.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),o.id="cellNotFound",o.textContent="No cell types of that name found.",r.appendChild(e),r.appendChild(s),r.appendChild(o),r}function GA(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="geneRadioContainer",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="geneTextbox",t.placeholder="Search gene (only 2 can be selected)";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="geneClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const s=document.createElement("div");s.classList.add("checkboxes"),s.id="geneRadio";const o=document.createElement("div");return o.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),o.id="geneNotFound",o.textContent="No genes of that name found.",r.appendChild(e),r.appendChild(s),r.appendChild(o),r}function HA(){const r=document.createElement("div");r.classList.add("icon");const e=Hg("togglePointSize","pointSizeBox","M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"),t=zg("pointSizeBox","Click to change dot size."),i=Gg("pointSizeSliderBox","pointSizeSlider","pointSizeSliderNumContainer","pointSizeSliderValue","pointSizeMinId","pointSizeMaxId",1,50,5),s=Hg("toggleGenePercentile","genePercentileBox","M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z","M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"),o=zg("genePercentileBox","Click to change the gene percentile."),u=Gg("geneSliderBox","geneSlider","geneSliderNumContainer","geneSliderValue","geneMinId","geneMaxId",1,99.99,99),c=document.createElement("div");c.style.display="flex",c.style.flexDirection="row",c.style.width="max-content",c.style.gap="5px",c.appendChild(e),c.appendChild(t),r.appendChild(c),r.appendChild(i);const f=document.createElement("div");return f.style.display="flex",f.style.flexDirection="row",f.style.width="max-content",f.style.gap="5px",f.appendChild(s),f.appendChild(o),r.appendChild(f),r.appendChild(u),r}function zg(r,e){const t=document.createElement("div");return t.classList.add("descBox"),t.id=r,t.textContent=e,t.style.display="none",t}function Gg(r,e,t,i,s,o,u,c,f){const p=document.createElement("div");p.id=r,p.classList.add("slider-container"),p.style.display="none";const m=document.createElement("input");m.setAttribute("type","range"),m.setAttribute("min",u),m.setAttribute("max",c),m.setAttribute("value",f),m.setAttribute("step",.01),m.classList.add("slider"),m.id=e;const x=document.createElement("div");x.id=t,x.classList.add("slider-container-inner");const M=document.createElement("div");M.classList.add("slider-min-max"),M.id=s,M.innerText="Min: "+parseFloat(u).toFixed(2);const b=document.createElement("input");b.classList.add("slider-value"),b.id=i,b.setAttribute("step",.01),b.setAttribute("type","text"),b.value=parseFloat(f).toFixed(2);const w=document.createElement("div");return w.classList.add("slider-min-max"),w.id=o,w.innerText="Max: "+parseFloat(c).toFixed(2),p.appendChild(m),x.appendChild(M),x.appendChild(b),x.appendChild(w),p.appendChild(x),p}function Hg(r,e,t,i){const s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("data-target",e),s.classList.add("iconBtn","btn"),s.id=r;const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("fill-rule","evenodd"),u.setAttribute("clip-rule","evenodd"),u.setAttribute("d",t),u.setAttribute("fill","currentColor");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("fill-rule","evenodd"),c.setAttribute("clip-rule","evenodd"),c.setAttribute("d",i),c.setAttribute("fill","currentColor"),o.appendChild(u),o.appendChild(c),s.appendChild(o),s}function kA(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let o=0;o<2;o++){const u=document.createElement("div");i.appendChild(u)}const s=document.createElement("span");i.appendChild(s),e.appendChild(i)}return r.appendChild(e),r}const VA=r=>{const e=document.getElementById("dropdownMenuButton");new URL(window.location);const t=new URLSearchParams("");t.append("prefix",r),Ud(t),r!==Jt.value.prefix&&(fA(r),e.innerHTML=Jt.value.prefix,window.location.reload())};function WA(){const r=document.createElement("div");r.id="prefix-dropdown-container",r.style.display="flex",r.style.justifyContent="flex-end",r.style.zIndex="1000";const e=document.createElement("div");e.className="dropdown dropdown-center",r.appendChild(e);const t=document.createElement("button");t.className="btn btn-secondary dropdown-toggle",t.type="button",t.id="dropdownMenuButton",t.dataset.bsToggle="dropdown",t.setAttribute("aria-expanded","false"),t.innerHTML=Jt.value.prefix,t.style.width="80px";const i=document.createElement("ul");return i.className="dropdown-menu",i.style.minWidth="80px",i.style.maxWidth="80px",i.appendChild(vd("#50pe","50pe")),i.appendChild(vd("#75pe","75pe")),i.appendChild(vd("#6s","6s")),e.appendChild(t),e.appendChild(i),r}function vd(r,e){const t=document.createElement("p"),i=document.createElement("a");return i.className="dropdown-item",i.style.cursor="pointer",i.innerHTML=e,i.style.textAlign="center",i.onclick=()=>{VA(e)},t.appendChild(i),t}function XA(){const r=document.createElement("div");r.classList.add("dropdown","dropdown-center"),r.id="filter-container";const e=document.createElement("button");e.classList.add("btn","btn-secondary","dropdown-toggle"),e.type="button",e.dataset.bsToggle="dropdown",e.setAttribute("aria-expanded","false"),e.textContent="Show Selected Filters";const t=document.createElement("ul");t.classList.add("dropdown-menu","list");const i=document.createElement("div"),s=document.createElement("b");s.textContent="Celltype Filters: ";const o=document.createElement("div");o.classList.add("listFilters"),o.id="cellFilters",o.textContent="No celltype filters selected",i.appendChild(s),i.appendChild(o);const u=document.createElement("hr"),c=document.createElement("div"),f=document.createElement("b");f.textContent="Gene Filter: ";const p=document.createElement("p");return p.classList.add("listFilters"),p.id="geneFilters",p.textContent="No gene filters selected",c.appendChild(f),c.appendChild(p),t.appendChild(i),t.appendChild(u),t.appendChild(c),r.appendChild(e),r.appendChild(t),r}function $A(){const r=document.createElement("nav");r.className="sidenav navbar navbar-expand-lg navbar-dark bg-dark",r.setAttribute("data-mdb-sidenav-init",""),r.setAttribute("data-mdb-right","true");const e=document.createElement("div");return e.className="container-fluid nav-container",e.appendChild(qA()),e.appendChild(XA()),e.appendChild(WA()),r.appendChild(e),r}function qA(){const r=document.createElement("div");r.id="title";const e=document.createElement("a");e.className="navbar-brand",e.href="/#",e.innerHTML="<b>FISHEYES</b>";const t=document.createElement("div");return t.className="title-paragraph",t.innerHTML="<p>by <i>Bintu Lab</i>, </p><p>data by <i>Schier Lab</i></p>",r.appendChild(e),r.appendChild(t),r}function P_(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",e.appendChild(t),e.appendChild(i),r.appendChild(e);let s=!1,o=0,u=0;t.addEventListener("mousedown",D=>{s=!0,o=D.offsetX,u=D.offsetY});const c=()=>{r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const D=document.getElementsByClassName("navbar")[0].offsetHeight;r.offsetTop<D&&(r.style.top=`${D/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=D&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${D/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-D}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),_.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",D=>{s&&(r.style.left=`${(D.clientX-o)/window.innerWidth*100}%`,r.style.top=`${(D.clientY-u)/window.innerHeight*100}%`,c())}),document.addEventListener("mouseup",()=>{s=!1}),i.addEventListener("mousedown",f);function f(D){window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),D.preventDefault()}function p(D){const F=document.getElementsByClassName("navbar")[0].offsetHeight;let J=D.clientX<0?0:D.clientX,Te=D.clientY<F?F:D.clientY;const C=100,z=100;r.offsetWidth==C&&J>r.offsetLeft&&(J=r.offsetLeft),r.offsetHeight==z&&Te>r.offsetTop&&(Te=r.offsetTop);const we=r.offsetWidth+(r.offsetLeft-J),be=r.offsetHeight+(r.offsetTop-Te);r.style.width=`${Math.max(we,C)}px`,r.style.height=`${Math.max(be,z)}px`,we>C&&(r.style.left=`${J}px`),be>z&&(r.style.top=`${Te}px`),g.aspect=we/be,g.updateProjectionMatrix(),_.setSize(we,be)}function m(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m)}t.addEventListener("touchstart",D=>{s=!0,o=D.changedTouches[0].clientX,u=D.changedTouches[0].clientY}),document.addEventListener("touchmove",D=>{if(s){let F=D.changedTouches[0].clientX;F+r.offsetWidth>window.innerWidth&&(F=window.innerWidth-r.offsetWidth),r.style.left=`${F/window.innerWidth*100}%`,r.style.top=`${D.changedTouches[0].clientY/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{s=!1}),i.addEventListener("touchstart",x);function x(D){window.addEventListener("touchmove",M),window.addEventListener("touchend",b),D.preventDefault()}function M(D){const F=document.getElementsByClassName("navbar")[0].offsetHeight;let J=D.changedTouches[0].clientX<0?0:D.changedTouches[0].clientX,Te=D.changedTouches[0].clientY<F?F:D.changedTouches[0].clientY;const C=100,z=100;r.offsetWidth==C&&J>r.offsetLeft&&(J=r.offsetLeft),r.offsetHeight==z&&Te>r.offsetTop&&(Te=r.offsetTop);const we=r.offsetWidth+(r.offsetLeft-J),be=r.offsetHeight+(r.offsetTop-Te);r.style.width=`${Math.max(we,C)}px`,r.style.height=`${Math.max(be,z)}px`,we>C&&(r.style.left=`${J}px`),be>z&&(r.style.top=`${Te}px`),g.aspect=we/be,g.updateProjectionMatrix(),_.setSize(we,be)}function b(){window.removeEventListener("touchmove",M),window.removeEventListener("touchend",b)}const w=document.createElement("div");w.id="overlayScene",w.style.width="100%",w.style.height="100%",r.appendChild(w);const E=R_.value.scene,g=new Di(75,w.offsetWidth/w.offsetHeight,.1,1e3),_=new Hd,H=window.innerWidth*.25,R=window.innerHeight*.5;g.aspect=H/R,g.updateProjectionMatrix(),_.setSize(H,R),_.render(E,g),w.appendChild(_.domElement),g.position.x=1e4,g.position.z=150;const N=new L_(g,_.domElement);N.enableRotate=!1,N.mouseButtons={LEFT:qr.PAN,MIDDLE:qr.DOLLY,RIGHT:qr.ROTATE},N.touches={ONE:ls.PAN},g.lookAt(1e4,0,10),N.target.set(1e4,0,10),N.update(),_.render(E,g);function $(){requestAnimationFrame($),_.render(E,g)}return $(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(P_());document.addEventListener("DOMContentLoaded",async()=>{const r=$A();P_();const e=kA(),t=BA();document.body.insertBefore(r,document.body.firstChild),document.body.appendChild(e),document.body.appendChild(t),NA(),FA(),OA(),vr(!0);try{await IA(),console.log(Jt.value.pallete),await UA(),await DA(),console.log(Jt.value.genes);const i=document.body;new PA(i);const s=new URL(window.location),o=new URLSearchParams(s.search);if(o.has("celltype")){const c=JSON.parse(decodeURIComponent(o.get("celltype"))).filter(f=>Object.keys(Jt.value.pallete).includes(f));console.log("new cells",c),Fl(c)}if(o.has("gene")){const c=JSON.parse(decodeURIComponent(o.get("gene"))).filter(f=>Jt.value.genes.includes(f));console.log("new genes",c),Hu(c)}Vu(Jt.value.listPalette),bA(),vA(),Wu(Jt.value.genes.slice(0,10)),CA(),TA()}catch(i){console.error("Failed to load data:",i)}finally{vr(!1)}});
