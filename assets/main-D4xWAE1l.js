var hM=Object.defineProperty;var dM=(r,e,t)=>e in r?hM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Dh=(r,e,t)=>(dM(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="162",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,Uh=1,mM=2,Ep=1,gM=2,Bi=3,fr=0,Pn=1,Gi=2,lr=0,As=1,Nh=2,Oh=3,Fh=4,_M=5,Ir=100,vM=101,xM=102,Bh=103,zh=104,SM=200,MM=201,EM=202,yM=203,qc=204,$c=205,TM=206,bM=207,AM=208,wM=209,RM=210,CM=211,LM=212,PM=213,IM=214,DM=0,UM=1,NM=2,Fa=3,OM=4,FM=5,BM=6,zM=7,yp=0,GM=1,HM=2,cr=0,VM=1,kM=2,WM=3,XM=4,YM=5,qM=6,$M=7,Tp=300,Rs=301,Cs=302,Kc=303,Zc=304,$a=306,jc=1e3,oi=1001,Jc=1002,cn=1003,Gh=1004,eo=1005,Ln=1006,fc=1007,Ur=1008,ur=1009,KM=1010,ZM=1011,cu=1012,bp=1013,ar=1014,_i=1015,fo=1016,Ap=1017,wp=1018,Nr=1020,jM=1021,ai=1023,JM=1024,QM=1025,Or=1026,Ls=1027,Rp=1028,Cp=1029,eE=1030,Lp=1031,Pp=1033,hc=33776,dc=33777,pc=33778,mc=33779,Hh=35840,Vh=35841,kh=35842,Wh=35843,Ip=36196,Xh=37492,Yh=37496,qh=37808,$h=37809,Kh=37810,Zh=37811,jh=37812,Jh=37813,Qh=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,sd=37820,od=37821,gc=36492,ad=36494,ld=36495,tE=36283,cd=36284,ud=36285,fd=36286,nE=3200,iE=3201,rE=0,sE=1,or="",mi="srgb",pr="srgb-linear",uu="display-p3",Ka="display-p3-linear",Ba="linear",zt="srgb",za="rec709",Ga="p3",os=7680,hd=519,oE=512,aE=513,lE=514,Dp=515,cE=516,uE=517,fE=518,hE=519,dd=35044,pd="300 es",Qc=1035,Hi=2e3,Ha=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let md=1234567;const lo=Math.PI/180,ho=180/Math.PI;function Is(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function dE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function pE(r,e,t){return r!==e?(t-r)/(e-r):0}function co(r,e,t){return(1-t)*r+t*e}function mE(r,e,t,i){return co(r,e,1-Math.exp(-t*i))}function gE(r,e=1){return e-Math.abs(fu(r,e*2)-e)}function _E(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SE(r,e){return r+Math.random()*(e-r)}function ME(r){return r*(.5-Math.random())}function EE(r){r!==void 0&&(md=r);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yE(r){return r*lo}function TE(r){return r*ho}function eu(r){return(r&r-1)===0&&r!==0}function bE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Va(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function AE(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),y=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*y,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*y,c*d);break;case"ZYZ":r.set(f*y,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wE={DEG2RAD:lo,RAD2DEG:ho,generateUUID:Is,clamp:gn,euclideanModulo:fu,mapLinear:dE,inverseLerp:pE,lerp:co,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:SE,randFloatSpread:ME,seededRandom:EE,degToRad:yE,radToDeg:TE,isPowerOfTwo:eu,ceilPowerOfTwo:bE,floorPowerOfTwo:Va,setQuaternionFromProperEuler:AE,normalize:Mn,denormalize:ys};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,o,a,u,c,f,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],x=i[5],y=i[8],w=o[0],m=o[3],g=o[6],O=o[1],b=o[4],I=o[7],G=o[2],N=o[5],D=o[8];return a[0]=u*w+c*O+f*G,a[3]=u*m+c*b+f*N,a[6]=u*g+c*I+f*D,a[1]=d*w+p*O+_*G,a[4]=d*m+p*b+_*N,a[7]=d*g+p*I+_*D,a[2]=v*w+x*O+y*G,a[5]=v*m+x*b+y*N,a[8]=v*g+x*I+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,x=d*a-u*f,y=t*_+i*v+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=_*w,e[1]=(o*d-p*i)*w,e[2]=(c*i-o*u)*w,e[3]=v*w,e[4]=(p*t-o*f)*w,e[5]=(o*a-c*t)*w,e[6]=x*w,e[7]=(i*f-d*t)*w,e[8]=(u*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new mt;function Up(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RE(){const r=ka("canvas");return r.style.display="block",r}const gd={};function CE(r){r in gd||(gd[r]=!0,console.warn(r))}const _d=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vd=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[pr]:{transfer:Ba,primaries:za,toReference:r=>r,fromReference:r=>r},[mi]:{transfer:zt,primaries:za,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Ba,primaries:Ga,toReference:r=>r.applyMatrix3(vd),fromReference:r=>r.applyMatrix3(_d)},[uu]:{transfer:zt,primaries:Ga,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vd),fromReference:r=>r.applyMatrix3(_d).convertLinearToSRGB()}},LE=new Set([pr,Ka]),It={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!LE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ca[e].toReference,o=ca[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ca[r].primaries},getTransfer:function(r){return r===or?Ba:ca[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=ka("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ws(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PE=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(xc(o[u].image)):a.push(xc(o[u]))}else a=xc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function xc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Np.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;class yn extends Br{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=oi,o=oi,a=Ln,u=Ur,c=ai,f=ur,d=yn.DEFAULT_ANISOTROPY,p=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Is(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Tp;yn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,t=0,i=0,o=1){un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],x=f[5],y=f[9],w=f[2],m=f[6],g=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(y-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(y+m)<.1&&Math.abs(d+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,I=(x+1)/2,G=(g+1)/2,N=(p+v)/4,D=(_+w)/4,K=(y+m)/4;return b>I&&b>G?b<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(b),o=N/i,a=D/i):I>G?I<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(I),i=N/o,a=K/o):G<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(G),i=D/a,o=K/a),this.set(i,o,a,t),this}let O=Math.sqrt((m-y)*(m-y)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(O)<.001&&(O=1),this.x=(m-y)/O,this.y=(_-w)/O,this.z=(v-p)/O,this.w=Math.acos((d+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DE extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new yn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends DE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fp extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UE extends yn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],y=a[u+2],w=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=y,e[t+3]=w;return}if(_!==w||f!==v||d!==x||p!==y){let m=1-c;const g=f*v+d*x+p*y+_*w,O=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const G=Math.sqrt(b),N=Math.atan2(G,g*O);m=Math.sin(m*N)/G,c=Math.sin(c*N)/G}const I=c*O;if(f=f*m+v*I,d=d*m+x*I,p=p*m+y*I,_=_*m+w*I,m===1-c){const G=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=G,d*=G,p*=G,_*=G}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],x=a[u+2],y=a[u+3];return e[t]=c*y+p*_+f*x-d*v,e[t+1]=f*y+p*v+d*_-c*x,e[t+2]=d*y+p*x+c*v-f*_,e[t+3]=p*y-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),y=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_-v*x*y;break;case"YXZ":this._x=v*p*_+d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_+v*x*y;break;case"ZXY":this._x=v*p*_-d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_-v*x*y;break;case"ZYX":this._x=v*p*_-d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_+v*x*y;break;case"YZX":this._x=v*p*_+d*x*y,this._y=d*x*_+v*p*y,this._z=d*p*y-v*x*_,this._w=d*p*_-v*x*y;break;case"XZY":this._x=v*p*_-d*x*y,this._y=d*x*_-v*p*y,this._z=d*p*y+v*x*_,this._w=d*p*_+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(p-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new X,xd=new hr;class zr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ii):ii.fromBufferAttribute(a,u),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),fa.subVectors(this.max,to),ls.subVectors(e.a,to),cs.subVectors(e.b,to),us.subVectors(e.c,to),Ji.subVectors(cs,ls),Qi.subVectors(us,cs),br.subVectors(ls,us);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-br.z,br.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,br.z,0,-br.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-br.y,br.x,0];return!Mc(t,ls,cs,us,fa)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,ls,cs,us,fa))?!1:(ha.crossVectors(Ji,Qi),t=[ha.x,ha.y,ha.z],Mc(t,ls,cs,us,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new X,new X,new X,new X,new X,new X,new X,new X],ii=new X,ua=new zr,ls=new X,cs=new X,us=new X,Ji=new X,Qi=new X,br=new X,to=new X,fa=new X,ha=new X,Ar=new X;function Mc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){Ar.fromArray(r,a);const c=o.x*Math.abs(Ar.x)+o.y*Math.abs(Ar.y)+o.z*Math.abs(Ar.z),f=e.dot(Ar),d=t.dot(Ar),p=i.dot(Ar);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const NE=new zr,no=new X,Ec=new X;class go{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):NE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(no,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Ec)),this.expandByPoint(no.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new X,yc=new X,da=new X,er=new X,Tc=new X,pa=new X,bc=new X;class Bp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){yc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),er.copy(this.origin).sub(yc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(da),c=er.dot(this.direction),f=-er.dot(da),d=er.lengthSq(),p=Math.abs(1-u*u);let _,v,x,y;if(p>0)if(_=u*f-c,v=u*c-f,y=a*p,_>=0)if(v>=-y)if(v<=y){const w=1/p;_*=w,v*=w,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-y?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=y?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(yc).addScaledVector(da,v),x}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),o=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,o,a){Tc.subVectors(t,e),pa.subVectors(i,e),bc.crossVectors(Tc,pa);let u=this.direction.dot(bc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;er.subVectors(this.origin,e);const f=c*this.direction.dot(pa.crossVectors(er,pa));if(f<0)return null;const d=c*this.direction.dot(Tc.cross(er));if(d<0||f+d>u)return null;const p=-c*er.dot(bc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,x,y,w,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,x,y,w,m)}set(e,t,i,o,a,u,c,f,d,p,_,v,x,y,w,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=o,g[1]=a,g[5]=u,g[9]=c,g[13]=f,g[2]=d,g[6]=p,g[10]=_,g[14]=v,g[3]=x,g[7]=y,g[11]=w,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),u=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,x=u*_,y=c*p,w=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=x+y*d,t[5]=v-w*d,t[9]=-c*f,t[2]=w-v*d,t[6]=y+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,x=f*_,y=d*p,w=d*_;t[0]=v+w*c,t[4]=y*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=x*c-y,t[6]=w+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,x=f*_,y=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=y+x*c,t[1]=x+y*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,x=u*_,y=c*p,w=c*_;t[0]=f*p,t[4]=y*d-x,t[8]=v*d+w,t[1]=f*_,t[5]=w*d+v,t[9]=x*d-y,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,y=c*f,w=c*d;t[0]=f*p,t[4]=w-v*_,t[8]=y*_+x,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*_+y,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*f,x=u*d,y=c*f,w=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=x*_-y,t[2]=y*_-x,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,FE)}lookAt(e,t,i){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(i,Bn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(i,Bn)),tr.normalize(),ma.crossVectors(Bn,tr),o[0]=tr.x,o[4]=ma.x,o[8]=Bn.x,o[1]=tr.y,o[5]=ma.y,o[9]=Bn.y,o[2]=tr.z,o[6]=ma.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],x=i[13],y=i[2],w=i[6],m=i[10],g=i[14],O=i[3],b=i[7],I=i[11],G=i[15],N=o[0],D=o[4],K=o[8],pe=o[12],T=o[1],U=o[5],me=o[9],fe=o[13],z=o[2],se=o[6],ne=o[10],ce=o[14],te=o[3],ue=o[7],he=o[11],Se=o[15];return a[0]=u*N+c*T+f*z+d*te,a[4]=u*D+c*U+f*se+d*ue,a[8]=u*K+c*me+f*ne+d*he,a[12]=u*pe+c*fe+f*ce+d*Se,a[1]=p*N+_*T+v*z+x*te,a[5]=p*D+_*U+v*se+x*ue,a[9]=p*K+_*me+v*ne+x*he,a[13]=p*pe+_*fe+v*ce+x*Se,a[2]=y*N+w*T+m*z+g*te,a[6]=y*D+w*U+m*se+g*ue,a[10]=y*K+w*me+m*ne+g*he,a[14]=y*pe+w*fe+m*ce+g*Se,a[3]=O*N+b*T+I*z+G*te,a[7]=O*D+b*U+I*se+G*ue,a[11]=O*K+b*me+I*ne+G*he,a[15]=O*pe+b*fe+I*ce+G*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],x=e[14],y=e[3],w=e[7],m=e[11],g=e[15];return y*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+w*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*p-a*f*p)+m*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*p-i*d*p)+g*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],x=e[11],y=e[12],w=e[13],m=e[14],g=e[15],O=_*m*d-w*v*d+w*f*x-c*m*x-_*f*g+c*v*g,b=y*v*d-p*m*d-y*f*x+u*m*x+p*f*g-u*v*g,I=p*w*d-y*_*d+y*c*x-u*w*x-p*c*g+u*_*g,G=y*_*f-p*w*f-y*c*v+u*w*v+p*c*m-u*_*m,N=t*O+i*b+o*I+a*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=O*D,e[1]=(w*v*a-_*m*a-w*o*x+i*m*x+_*o*g-i*v*g)*D,e[2]=(c*m*a-w*f*a+w*o*d-i*m*d-c*o*g+i*f*g)*D,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*D,e[4]=b*D,e[5]=(p*m*a-y*v*a+y*o*x-t*m*x-p*o*g+t*v*g)*D,e[6]=(y*f*a-u*m*a-y*o*d+t*m*d+u*o*g-t*f*g)*D,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*x+t*f*x)*D,e[8]=I*D,e[9]=(y*_*a-p*w*a-y*i*x+t*w*x+p*i*g-t*_*g)*D,e[10]=(u*w*a-y*c*a+y*i*d-t*w*d-u*i*g+t*c*g)*D,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*x-t*c*x)*D,e[12]=G*D,e[13]=(p*w*o-y*_*o+y*i*v-t*w*v-p*i*m+t*_*m)*D,e[14]=(y*c*o-u*w*o-y*i*f+t*w*f+u*i*m-t*c*m)*D,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*D,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,x=a*p,y=a*_,w=u*p,m=u*_,g=c*_,O=f*d,b=f*p,I=f*_,G=i.x,N=i.y,D=i.z;return o[0]=(1-(w+g))*G,o[1]=(x+I)*G,o[2]=(y-b)*G,o[3]=0,o[4]=(x-I)*N,o[5]=(1-(v+g))*N,o[6]=(m+O)*N,o[7]=0,o[8]=(y+b)*D,o[9]=(m-O)*D,o[10]=(1-(v+w))*D,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=fs.set(o[0],o[1],o[2]).length();const u=fs.set(o[4],o[5],o[6]).length(),c=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const d=1/a,p=1/u,_=1/c;return ri.elements[0]*=d,ri.elements[1]*=d,ri.elements[2]*=d,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,t.setFromRotationMatrix(ri),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Hi){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,y;if(c===Hi)x=-(u+a)/(u-a),y=-2*u*a/(u-a);else if(c===Ha)x=-u/(u-a),y=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Hi){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*p;let y,w;if(c===Hi)y=(u+a)*_,w=-2*_;else if(c===Ha)y=a*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new X,ri=new Wt,OE=new X(0,0,0),FE=new X(1,1,1),tr=new X,ma=new X,Bn=new X,Sd=new Wt,Md=new hr;class Vi{constructor(e=0,t=0,i=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BE=0;const Ed=new X,hs=new hr,Di=new Wt,ga=new X,io=new X,zE=new X,GE=new hr,yd=new X(1,0,0),Td=new X(0,1,0),bd=new X(0,0,1),HE={type:"added"},VE={type:"removed"},Ac={type:"childadded",child:null},wc={type:"childremoved",child:null};class Tn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new X,t=new Vi,i=new hr,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new mt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(Td,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(Td,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(io,ga,this.up):Di.lookAt(ga,io,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(Di),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(HE),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VE),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,zE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),y=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new X,Ui=new X,Rc=new X,Ni=new X,ds=new X,ps=new X,Ad=new X,Cc=new X,Lc=new X,Pc=new X;class vi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),si.subVectors(e,t),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){si.subVectors(o,t),Ui.subVectors(i,t),Rc.subVectors(e,t);const u=si.dot(si),c=si.dot(Ui),f=si.dot(Rc),d=Ui.dot(Ui),p=Ui.dot(Rc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*p)*v,y=(u*p-c*f)*v;return a.set(1-x-y,y,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Ni)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ni.x),f.addScaledVector(u,Ni.y),f.addScaledVector(c,Ni.z),f)}static isFrontFacing(e,t,i,o){return si.subVectors(i,t),Ui.subVectors(e,t),si.cross(Ui).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ds.subVectors(o,i),ps.subVectors(a,i),Cc.subVectors(e,i);const f=ds.dot(Cc),d=ps.dot(Cc);if(f<=0&&d<=0)return t.copy(i);Lc.subVectors(e,o);const p=ds.dot(Lc),_=ps.dot(Lc);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(ds,u);Pc.subVectors(e,a);const x=ds.dot(Pc),y=ps.dot(Pc);if(y>=0&&x<=y)return t.copy(a);const w=x*d-f*y;if(w<=0&&d>=0&&y<=0)return c=d/(d-y),t.copy(i).addScaledVector(ps,c);const m=p*y-x*_;if(m<=0&&_-p>=0&&x-y>=0)return Ad.subVectors(a,o),c=(_-p)/(_-p+(x-y)),t.copy(o).addScaledVector(Ad,c);const g=1/(m+w+v);return u=w*g,c=v*g,t.copy(i).addScaledVector(ds,u).addScaledVector(ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=It.workingColorSpace){if(e=fu(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Ic(u,a,e+1/3),this.g=Ic(u,a,e),this.b=Ic(u,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=mi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=Gp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return It.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(mn.copy(this),t);const i=mn.r,o=mn.g,a=mn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=mi){It.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,o=mn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(_a);const i=co(nr.h,_a.h,t),o=co(nr.s,_a.s,t),a=co(nr.l,_a.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Tt;Tt.NAMES=Gp;let kE=0;class Za extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=As,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,va=new at;class ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return CE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dd&&(e.usage=this.usage),e}}class Hp extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vp extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let WE=0;const Zn=new Wt,Dc=new Tn,ms=new X,zn=new zr,ro=new zr,on=new X;class mr extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?Vp:Hp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];zn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ro.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(zn.min,ro.min),zn.expandByPoint(on),on.addVectors(zn.max,ro.max),zn.expandByPoint(on)):(zn.expandByPoint(ro.min),zn.expandByPoint(ro.max))}zn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)on.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(on));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)on.fromBufferAttribute(c,d),f&&(ms.fromBufferAttribute(e,d),on.add(ms)),o=Math.max(o,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let K=0;K<i.count;K++)c[K]=new X,f[K]=new X;const d=new X,p=new X,_=new X,v=new at,x=new at,y=new at,w=new X,m=new X;function g(K,pe,T){d.fromBufferAttribute(i,K),p.fromBufferAttribute(i,pe),_.fromBufferAttribute(i,T),v.fromBufferAttribute(a,K),x.fromBufferAttribute(a,pe),y.fromBufferAttribute(a,T),p.sub(d),_.sub(d),x.sub(v),y.sub(v);const U=1/(x.x*y.y-y.x*x.y);isFinite(U)&&(w.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(U),m.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(U),c[K].add(w),c[pe].add(w),c[T].add(w),f[K].add(m),f[pe].add(m),f[T].add(m))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,pe=O.length;K<pe;++K){const T=O[K],U=T.start,me=T.count;for(let fe=U,z=U+me;fe<z;fe+=3)g(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const b=new X,I=new X,G=new X,N=new X;function D(K){G.fromBufferAttribute(o,K),N.copy(G);const pe=c[K];b.copy(pe),b.sub(G.multiplyScalar(G.dot(pe))).normalize(),I.crossVectors(N,pe);const U=I.dot(f[K])<0?-1:1;u.setXYZW(K,b.x,b.y,b.z,U)}for(let K=0,pe=O.length;K<pe;++K){const T=O[K],U=T.start,me=T.count;for(let fe=U,z=U+me;fe<z;fe+=3)D(e.getX(fe+0)),D(e.getX(fe+1)),D(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const y=e.getX(v+0),w=e.getX(v+1),m=e.getX(v+2);o.fromBufferAttribute(t,y),a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,m),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,m),c.add(p),f.add(p),d.add(p),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let x=0,y=0;for(let w=0,m=f.length;w<m;w++){c.isInterleavedBufferAttribute?x=f[w]*c.data.stride+c.offset:x=f[w]*p;for(let g=0;g<p;g++)v[y++]=d[x++]}return new ci(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mr,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new Wt,wr=new Bp,xa=new go,Rd=new X,gs=new X,_s=new X,vs=new X,Uc=new X,Sa=new X,Ma=new at,Ea=new at,ya=new at,Cd=new X,Ld=new X,Pd=new X,Ta=new X,ba=new X;class li extends Tn{constructor(e=new mr,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Sa.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Uc.fromBufferAttribute(_,e),u?Sa.addScaledVector(Uc,p):Sa.addScaledVector(Uc.sub(t),p))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(a),wr.copy(e.ray).recast(e.near),!(xa.containsPoint(wr.origin)===!1&&(wr.intersectSphere(xa,Rd)===null||wr.origin.distanceToSquared(Rd)>(e.far-e.near)**2))&&(wd.copy(a).invert(),wr.copy(e.ray).applyMatrix4(wd),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],g=u[m.materialIndex],O=Math.max(m.start,x.start),b=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let I=O,G=b;I<G;I+=3){const N=c.getX(I),D=c.getX(I+1),K=c.getX(I+2);o=Aa(this,g,e,i,d,p,_,N,D,K),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let m=y,g=w;m<g;m+=3){const O=c.getX(m),b=c.getX(m+1),I=c.getX(m+2);o=Aa(this,u,e,i,d,p,_,O,b,I),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],g=u[m.materialIndex],O=Math.max(m.start,x.start),b=Math.min(f.count,Math.min(m.start+m.count,x.start+x.count));for(let I=O,G=b;I<G;I+=3){const N=I,D=I+1,K=I+2;o=Aa(this,g,e,i,d,p,_,N,D,K),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let m=y,g=w;m<g;m+=3){const O=m,b=m+1,I=m+2;o=Aa(this,u,e,i,d,p,_,O,b,I),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function XE(r,e,t,i,o,a,u,c){let f;if(e.side===Pn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===fr,c),f===null)return null;ba.copy(c),ba.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(ba);return d<t.near||d>t.far?null:{distance:d,point:ba.clone(),object:r}}function Aa(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,gs),r.getVertexPosition(f,_s),r.getVertexPosition(d,vs);const p=XE(r,e,t,i,gs,_s,vs,Ta);if(p){o&&(Ma.fromBufferAttribute(o,c),Ea.fromBufferAttribute(o,f),ya.fromBufferAttribute(o,d),p.uv=vi.getInterpolation(Ta,gs,_s,vs,Ma,Ea,ya,new at)),a&&(Ma.fromBufferAttribute(a,c),Ea.fromBufferAttribute(a,f),ya.fromBufferAttribute(a,d),p.uv1=vi.getInterpolation(Ta,gs,_s,vs,Ma,Ea,ya,new at)),u&&(Cd.fromBufferAttribute(u,c),Ld.fromBufferAttribute(u,f),Pd.fromBufferAttribute(u,d),p.normal=vi.getInterpolation(Ta,gs,_s,vs,Cd,Ld,Pd,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};vi.getNormal(gs,_s,vs,_.normal),p.face=_}return p}class _o extends mr{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,x=0;y("z","y","x",-1,-1,i,t,e,u,a,0),y("z","y","x",1,-1,i,t,-e,u,a,1),y("x","z","y",1,1,e,i,t,o,u,2),y("x","z","y",1,-1,e,i,-t,o,u,3),y("x","y","z",1,-1,e,t,i,o,a,4),y("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new xi(d,3)),this.setAttribute("normal",new xi(p,3)),this.setAttribute("uv",new xi(_,2));function y(w,m,g,O,b,I,G,N,D,K,pe){const T=I/D,U=G/K,me=I/2,fe=G/2,z=N/2,se=D+1,ne=K+1;let ce=0,te=0;const ue=new X;for(let he=0;he<ne;he++){const Se=he*U-fe;for(let De=0;De<se;De++){const et=De*T-me;ue[w]=et*O,ue[m]=Se*b,ue[g]=z,d.push(ue.x,ue.y,ue.z),ue[w]=0,ue[m]=0,ue[g]=N>0?1:-1,p.push(ue.x,ue.y,ue.z),_.push(De/D),_.push(1-he/K),ce+=1}}for(let he=0;he<K;he++)for(let Se=0;Se<D;Se++){const De=v+Se+se*he,et=v+Se+se*(he+1),Q=v+(Se+1)+se*(he+1),ge=v+(Se+1)+se*he;f.push(De,et,ge),f.push(et,Q,ge),te+=6}c.addGroup(x,te,pe),x+=te,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function En(r){const e={};for(let t=0;t<r.length;t++){const i=Ps(r[t]);for(const o in i)e[o]=i[o]}return e}function YE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kp(r){return r.getRenderTarget()===null?r.outputColorSpace:It.workingColorSpace}const qE={clone:Ps,merge:En};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wp extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new X,Id=new at,Dd=new at;class Gn extends Wp{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Dd),t.subVectors(Dd,Id)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class ZE extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const a=new Gn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const u=new Gn(xs,Ss,e,t);u.layers=this.layers,this.add(u);const c=new Gn(xs,Ss,e,t);c.layers=this.layers,this.add(c);const f=new Gn(xs,Ss,e,t);f.layers=this.layers,this.add(f);const d=new Gn(xs,Ss,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Xp extends yn{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Xp(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),a=new dr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:lr});a.uniforms.tEquirect.value=t;const u=new li(o,a),c=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Ln),new ZE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Nc=new X,JE=new X,QE=new mt;class sr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Nc.subVectors(i,t).cross(JE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||QE.getNormalMatrix(e),o=this.coplanarPoint(Nc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new go,wa=new X;class Yp{constructor(e=new sr,t=new sr,i=new sr,o=new sr,a=new sr,u=new sr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],x=o[8],y=o[9],w=o[10],m=o[11],g=o[12],O=o[13],b=o[14],I=o[15];if(i[0].setComponents(f-a,v-d,m-x,I-g).normalize(),i[1].setComponents(f+a,v+d,m+x,I+g).normalize(),i[2].setComponents(f+u,v+p,m+y,I+O).normalize(),i[3].setComponents(f-u,v-p,m-y,I-O).normalize(),i[4].setComponents(f-c,v-_,m-w,I-b).normalize(),t===Hi)i[5].setComponents(f+c,v+_,m+w,I+b).normalize();else if(t===Ha)i[5].setComponents(c,_,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(wa.x=o.normal.x>0?e.max.x:e.min.x,wa.y=o.normal.y>0?e.max.y:e.min.y,wa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qp(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function ey(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,x=_.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=r.SHORT;else if(_ instanceof Uint32Array)w=r.UNSIGNED_INT;else if(_ instanceof Int32Array)w=r.INT;else if(_ instanceof Int8Array)w=r.BYTE;else if(_ instanceof Uint8Array)w=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,p,_){const v=p.array,x=p._updateRange,y=p.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&y.length===0&&r.bufferSubData(_,0,v),y.length!==0){for(let w=0,m=y.length;w<m;w++){const g=y[w];t?r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class ja extends mr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,x=[],y=[],w=[],m=[];for(let g=0;g<p;g++){const O=g*v-u;for(let b=0;b<d;b++){const I=b*_-a;y.push(I,-O,0),w.push(0,0,1),m.push(b/c),m.push(1-g/f)}}for(let g=0;g<f;g++)for(let O=0;O<c;O++){const b=O+d*g,I=O+d*(g+1),G=O+1+d*(g+1),N=O+1+d*g;x.push(b,I,N),x.push(I,G,N)}this.setIndex(x),this.setAttribute("position",new xi(y,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ny=`#ifdef USE_ALPHAHASH
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
#endif`,iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
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
#endif`,ay=`#ifdef USE_AOMAP
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
#endif`,ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy=`#ifdef USE_BATCHING
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
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,py=`#ifdef USE_IRIDESCENCE
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
#endif`,my=`#ifdef USE_BUMPMAP
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
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`
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
}`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
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
}`,ky=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,$y=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,eT=`struct PhysicalMaterial {
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
}`,tT=`
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,hT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gT=`#ifdef USE_MORPHNORMALS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,xT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ST=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TT=`#ifdef USE_NORMALMAP
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
#endif`,bT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,PT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nb=`uniform sampler2D t2D;
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
}`,cb=`#define DISTANCE
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
}`,ub=`#define DISTANCE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`uniform float scale;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,Sb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
}`,Eb=`#define NORMAL
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
}`,yb=`#define PHONG
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
}`,Tb=`#define PHONG
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
}`,bb=`#define STANDARD
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
}`,Ab=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Rb=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Pb=`#include <common>
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
}`,Ib=`uniform vec3 color;
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
}`,Db=`uniform float rotation;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ty,alphahash_pars_fragment:ny,alphamap_fragment:iy,alphamap_pars_fragment:ry,alphatest_fragment:sy,alphatest_pars_fragment:oy,aomap_fragment:ay,aomap_pars_fragment:ly,batching_pars_vertex:cy,batching_vertex:uy,begin_vertex:fy,beginnormal_vertex:hy,bsdfs:dy,iridescence_fragment:py,bumpmap_pars_fragment:my,clipping_planes_fragment:gy,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:vy,clipping_planes_vertex:xy,color_fragment:Sy,color_pars_fragment:My,color_pars_vertex:Ey,color_vertex:yy,common:Ty,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ay,displacementmap_pars_vertex:wy,displacementmap_vertex:Ry,emissivemap_fragment:Cy,emissivemap_pars_fragment:Ly,colorspace_fragment:Py,colorspace_pars_fragment:Iy,envmap_fragment:Dy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Ny,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:$y,envmap_vertex:Fy,fog_vertex:By,fog_pars_vertex:zy,fog_fragment:Gy,fog_pars_fragment:Hy,gradientmap_pars_fragment:Vy,lightmap_fragment:ky,lightmap_pars_fragment:Wy,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:Yy,lights_pars_begin:qy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Zy,lights_phong_fragment:jy,lights_phong_pars_fragment:Jy,lights_physical_fragment:Qy,lights_physical_pars_fragment:eT,lights_fragment_begin:tT,lights_fragment_maps:nT,lights_fragment_end:iT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:oT,logdepthbuf_vertex:aT,map_fragment:lT,map_pars_fragment:cT,map_particle_fragment:uT,map_particle_pars_fragment:fT,metalnessmap_fragment:hT,metalnessmap_pars_fragment:dT,morphinstance_vertex:pT,morphcolor_vertex:mT,morphnormal_vertex:gT,morphtarget_pars_vertex:_T,morphtarget_vertex:vT,normal_fragment_begin:xT,normal_fragment_maps:ST,normal_pars_fragment:MT,normal_pars_vertex:ET,normal_vertex:yT,normalmap_pars_fragment:TT,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:RT,opaque_fragment:CT,packing:LT,premultiplied_alpha_fragment:PT,project_vertex:IT,dithering_fragment:DT,dithering_pars_fragment:UT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:FT,shadowmap_pars_vertex:BT,shadowmap_vertex:zT,shadowmask_pars_fragment:GT,skinbase_vertex:HT,skinning_pars_vertex:VT,skinning_vertex:kT,skinnormal_vertex:WT,specularmap_fragment:XT,specularmap_pars_fragment:YT,tonemapping_fragment:qT,tonemapping_pars_fragment:$T,transmission_fragment:KT,transmission_pars_fragment:ZT,uv_pars_fragment:jT,uv_pars_vertex:JT,uv_vertex:QT,worldpos_vertex:eb,background_vert:tb,background_frag:nb,backgroundCube_vert:ib,backgroundCube_frag:rb,cube_vert:sb,cube_frag:ob,depth_vert:ab,depth_frag:lb,distanceRGBA_vert:cb,distanceRGBA_frag:ub,equirect_vert:fb,equirect_frag:hb,linedashed_vert:db,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:_b,meshlambert_frag:vb,meshmatcap_vert:xb,meshmatcap_frag:Sb,meshnormal_vert:Mb,meshnormal_frag:Eb,meshphong_vert:yb,meshphong_frag:Tb,meshphysical_vert:bb,meshphysical_frag:Ab,meshtoon_vert:wb,meshtoon_frag:Rb,points_vert:Cb,points_frag:Lb,shadow_vert:Pb,shadow_frag:Ib,sprite_vert:Db,sprite_frag:Ub},Te={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},gi={basic:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:En([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:En([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:En([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:En([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:En([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:En([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:En([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:En([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:En([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:En([Te.lights,Te.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};gi.physical={uniforms:En([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ra={r:0,b:0,g:0},Cr=new Vi,Nb=new Wt;function Ob(r,e,t,i,o,a,u){const c=new Tt(0);let f=a===!0?0:1,d,p,_=null,v=0,x=null;function y(m,g){let O=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b)),b===null?w(c,f):b&&b.isColor&&(w(b,1),O=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||O)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===$a)?(p===void 0&&(p=new li(new _o(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Ps(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Cr.copy(g.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(Cr)),p.material.toneMapped=It.getTransfer(b.colorSpace)!==zt,(_!==b||v!==b.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=b,v=b.version,x=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new li(new ja(2,2),new dr({name:"BackgroundMaterial",uniforms:Ps(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=It.getTransfer(b.colorSpace)!==zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||v!==b.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=b,v=b.version,x=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function w(m,g){m.getRGB(Ra,kp(r)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),f=g,w(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,w(c,f)},render:y}}function Fb(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=m(null);let d=f,p=!1;function _(z,se,ne,ce,te){let ue=!1;if(u){const he=w(ce,ne,se);d!==he&&(d=he,x(d.object)),ue=g(z,ce,ne,te),ue&&O(z,ce,ne,te)}else{const he=se.wireframe===!0;(d.geometry!==ce.id||d.program!==ne.id||d.wireframe!==he)&&(d.geometry=ce.id,d.program=ne.id,d.wireframe=he,ue=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ue||p)&&(p=!1,K(z,se,ne,ce),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(z){return i.isWebGL2?r.bindVertexArray(z):a.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?r.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function w(z,se,ne){const ce=ne.wireframe===!0;let te=c[z.id];te===void 0&&(te={},c[z.id]=te);let ue=te[se.id];ue===void 0&&(ue={},te[se.id]=ue);let he=ue[ce];return he===void 0&&(he=m(v()),ue[ce]=he),he}function m(z){const se=[],ne=[],ce=[];for(let te=0;te<o;te++)se[te]=0,ne[te]=0,ce[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ne,attributeDivisors:ce,object:z,attributes:{},index:null}}function g(z,se,ne,ce){const te=d.attributes,ue=se.attributes;let he=0;const Se=ne.getAttributes();for(const De in Se)if(Se[De].location>=0){const Q=te[De];let ge=ue[De];if(ge===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;he++}return d.attributesNum!==he||d.index!==ce}function O(z,se,ne,ce){const te={},ue=se.attributes;let he=0;const Se=ne.getAttributes();for(const De in Se)if(Se[De].location>=0){let Q=ue[De];Q===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),te[De]=ge,he++}d.attributes=te,d.attributesNum=he,d.index=ce}function b(){const z=d.newAttributes;for(let se=0,ne=z.length;se<ne;se++)z[se]=0}function I(z){G(z,0)}function G(z,se){const ne=d.newAttributes,ce=d.enabledAttributes,te=d.attributeDivisors;ne[z]=1,ce[z]===0&&(r.enableVertexAttribArray(z),ce[z]=1),te[z]!==se&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,se),te[z]=se)}function N(){const z=d.newAttributes,se=d.enabledAttributes;for(let ne=0,ce=se.length;ne<ce;ne++)se[ne]!==z[ne]&&(r.disableVertexAttribArray(ne),se[ne]=0)}function D(z,se,ne,ce,te,ue,he){he===!0?r.vertexAttribIPointer(z,se,ne,te,ue):r.vertexAttribPointer(z,se,ne,ce,te,ue)}function K(z,se,ne,ce){if(i.isWebGL2===!1&&(z.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const te=ce.attributes,ue=ne.getAttributes(),he=se.defaultAttributeValues;for(const Se in ue){const De=ue[Se];if(De.location>=0){let et=te[Se];if(et===void 0&&(Se==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),Se==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){const Q=et.normalized,ge=et.itemSize,Re=t.get(et);if(Re===void 0)continue;const Ze=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,Mt=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||et.gpuType===bp);if(et.isInterleavedBufferAttribute){const ke=et.data,W=ke.stride,Xt=et.offset;if(ke.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)G(De.location+Ue,ke.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)I(De.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<De.locationSize;Ue++)D(De.location+Ue,ge/De.locationSize,Oe,Q,W*Ce,(Xt+ge/De.locationSize*Ue)*Ce,Mt)}else{if(et.isInstancedBufferAttribute){for(let ke=0;ke<De.locationSize;ke++)G(De.location+ke,et.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ke=0;ke<De.locationSize;ke++)I(De.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ke=0;ke<De.locationSize;ke++)D(De.location+ke,ge/De.locationSize,Oe,Q,ge*Ce,ge/De.locationSize*ke*Ce,Mt)}}else if(he!==void 0){const Q=he[Se];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(De.location,Q);break;case 3:r.vertexAttrib3fv(De.location,Q);break;case 4:r.vertexAttrib4fv(De.location,Q);break;default:r.vertexAttrib1fv(De.location,Q)}}}}N()}function pe(){me();for(const z in c){const se=c[z];for(const ne in se){const ce=se[ne];for(const te in ce)y(ce[te].object),delete ce[te];delete se[ne]}delete c[z]}}function T(z){if(c[z.id]===void 0)return;const se=c[z.id];for(const ne in se){const ce=se[ne];for(const te in ce)y(ce[te].object),delete ce[te];delete se[ne]}delete c[z.id]}function U(z){for(const se in c){const ne=c[se];if(ne[z.id]===void 0)continue;const ce=ne[z.id];for(const te in ce)y(ce[te].object),delete ce[te];delete ne[z.id]}}function me(){fe(),p=!0,d!==f&&(d=f,x(d.object))}function fe(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:me,resetDefaultState:fe,dispose:pe,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:I,disableUnusedAttributes:N}}function Bb(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let x,y;if(o)x=r,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v;y++)this.render(p[y],_[y]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let y=0;for(let w=0;w<v;w++)y+=_[w];t.update(y,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function zb(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),w=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,I=u||e.has("OES_texture_float"),G=b&&I,N=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:w,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:O,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:G,maxSamples:N}}function Gb(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new sr,c=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,x){const y=_.clippingPlanes,w=_.clipIntersection,m=_.clipShadows,g=r.get(_);if(!o||y===null||y.length===0||a&&!m)a?p(null):d();else{const O=a?0:i,b=O*4;let I=g.clippingState||null;f.value=I,I=p(y,v,b,x);for(let G=0;G!==b;++G)I[G]=t[G];g.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,x,y){const w=_!==null?_.length:0;let m=null;if(w!==0){if(m=f.value,y!==!0||m===null){const g=x+w*4,O=v.matrixWorldInverse;c.getNormalMatrix(O),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,I=x;b!==w;++b,I+=4)u.copy(_[b]).applyMatrix4(O,c),u.normal.toArray(m,I),m[I+3]=u.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}function Hb(r){let e=new WeakMap;function t(u,c){return c===Kc?u.mapping=Rs:c===Zc&&(u.mapping=Cs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Kc||c===Zc)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new jE(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Vb extends Wp{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Ud=[.125,.215,.35,.446,.526,.582],Dr=20,Oc=new Vb,Nd=new Tt;let Fc=null,Bc=0,zc=0;const Pr=(1+Math.sqrt(5))/2,Ms=1/Pr,Od=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Pr,Ms),new X(0,Pr,-Ms),new X(Ms,0,Pr),new X(-Ms,0,Pr),new X(Pr,Ms,0),new X(-Pr,Ms,0)];class Fd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,zc),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:fo,format:ai,colorSpace:pr,depthBuffer:!1},o=Bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kb(a)),this._blurMaterial=Wb(a,e,t)}return o}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,i,o){const c=new Gn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Nd),p.toneMapping=cr,p.autoClear=!1;const x=new hu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),y=new li(new _o,x);let w=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,w=!0):(x.color.copy(Nd),w=!0);for(let g=0;g<6;g++){const O=g%3;O===0?(c.up.set(0,f[g],0),c.lookAt(d[g],0,0)):O===1?(c.up.set(0,0,f[g]),c.lookAt(0,d[g],0)):(c.up.set(0,f[g],0),c.lookAt(0,0,d[g]));const b=this._cubeSize;Ca(o,O*b,g>2?b:0,b,b),p.setRenderTarget(o),w&&p.render(y,c),p.render(e,c)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Rs||e.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new li(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ca(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Oc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Od[(o-1)%Od.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new li(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Dr-1),w=a/y,m=isFinite(a)?1+Math.floor(p*w):Dr;m>Dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const g=[];let O=0;for(let D=0;D<Dr;++D){const K=D/w,pe=Math.exp(-K*K/2);g.push(pe),D===0?O+=pe:D<m&&(O+=2*pe)}for(let D=0;D<g.length;D++)g[D]=g[D]/O;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=y,v.mipInt.value=b-i;const I=this._sizeLods[o],G=3*I*(o>b-Ts?o-b+Ts:0),N=4*(this._cubeSize-I);Ca(t,G,N,3*I,2*I),f.setRenderTarget(t),f.render(_,Oc)}}function kb(r){const e=[],t=[],i=[];let o=r;const a=r-Ts+1+Ud.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-Ts?f=Ud[u-r+Ts-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,w=3,m=2,g=1,O=new Float32Array(w*y*x),b=new Float32Array(m*y*x),I=new Float32Array(g*y*x);for(let N=0;N<x;N++){const D=N%3*2/3-1,K=N>2?0:-1,pe=[D,K,0,D+2/3,K,0,D+2/3,K+1,0,D,K,0,D+2/3,K+1,0,D,K+1,0];O.set(pe,w*y*N),b.set(v,m*y*N);const T=[N,N,N,N,N,N];I.set(T,g*y*N)}const G=new mr;G.setAttribute("position",new ci(O,w)),G.setAttribute("uv",new ci(b,m)),G.setAttribute("faceIndex",new ci(I,g)),e.push(G),o>Ts&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bd(r,e,t){const i=new Fr(r,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function Wb(r,e,t){const i=new Float32Array(Dr),o=new X(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function zd(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Gd(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function Xb(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===Kc||f===Zc,p=f===Rs||f===Cs;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Fd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new Fd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function Yb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function qb(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const w=v.morphAttributes[y];for(let m=0,g=w.length;m<g;m++)e.remove(w[m])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const y in x){const w=x[y];for(let m=0,g=w.length;m<g;m++)e.update(w[m],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,y=_.attributes.position;let w=0;if(x!==null){const O=x.array;w=x.version;for(let b=0,I=O.length;b<I;b+=3){const G=O[b+0],N=O[b+1],D=O[b+2];v.push(G,N,N,D,D,G)}}else if(y!==void 0){const O=y.array;w=y.version;for(let b=0,I=O.length/3-1;b<I;b+=3){const G=b+0,N=b+1,D=b+2;v.push(G,N,N,D,D,G)}}else return;const m=new(Up(v)?Vp:Hp)(v,1);m.version=w;const g=a.get(_);g&&e.remove(g),a.set(_,m)}function p(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function $b(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,y){r.drawElements(a,y,c,x*f),t.update(y,a,1)}function _(x,y,w){if(w===0)return;let m,g;if(o)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,y,c,x*f,w),t.update(y,a,w)}function v(x,y,w){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<w;g++)this.render(x[g]/f,y[g]);else{m.multiDrawElementsWEBGL(a,y,0,c,x,0,w);let g=0;for(let O=0;O<w;O++)g+=y[O];t.update(g,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function Kb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function Zb(r,e){return r[0]-e[0]}function jb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Jb(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new un,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=y!==void 0?y.length:0;let m=a.get(p);if(m===void 0||m.count!==w){let fe=function(){U.dispose(),a.delete(p),p.removeEventListener("dispose",fe)};var x=fe;m!==void 0&&m.texture.dispose();const g=p.morphAttributes.position!==void 0,O=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],G=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let D=0;g===!0&&(D=1),O===!0&&(D=2),b===!0&&(D=3);let K=p.attributes.position.count*D,pe=1;K>e.maxTextureSize&&(pe=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const T=new Float32Array(K*pe*4*w),U=new Fp(T,K,pe,w);U.type=_i,U.needsUpdate=!0;const me=D*4;for(let z=0;z<w;z++){const se=I[z],ne=G[z],ce=N[z],te=K*pe*4*z;for(let ue=0;ue<se.count;ue++){const he=ue*me;g===!0&&(u.fromBufferAttribute(se,ue),T[te+he+0]=u.x,T[te+he+1]=u.y,T[te+he+2]=u.z,T[te+he+3]=0),O===!0&&(u.fromBufferAttribute(ne,ue),T[te+he+4]=u.x,T[te+he+5]=u.y,T[te+he+6]=u.z,T[te+he+7]=0),b===!0&&(u.fromBufferAttribute(ce,ue),T[te+he+8]=u.x,T[te+he+9]=u.y,T[te+he+10]=u.z,T[te+he+11]=ce.itemSize===4?u.w:1)}}m={count:w,texture:U,size:new at(K,pe)},a.set(p,m),p.addEventListener("dispose",fe)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let g=0;for(let b=0;b<v.length;b++)g+=v[b];const O=p.morphTargetsRelative?1:1-g;_.getUniforms().setValue(r,"morphTargetBaseInfluence",O),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const y=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==y){w=[];for(let I=0;I<y;I++)w[I]=[I,0];i[p.id]=w}for(let I=0;I<y;I++){const G=w[I];G[0]=I,G[1]=v[I]}w.sort(jb);for(let I=0;I<8;I++)I<y&&w[I][1]?(c[I][0]=w[I][0],c[I][1]=w[I][1]):(c[I][0]=Number.MAX_SAFE_INTEGER,c[I][1]=0);c.sort(Zb);const m=p.morphAttributes.position,g=p.morphAttributes.normal;let O=0;for(let I=0;I<8;I++){const G=c[I],N=G[0],D=G[1];N!==Number.MAX_SAFE_INTEGER&&D?(m&&p.getAttribute("morphTarget"+I)!==m[N]&&p.setAttribute("morphTarget"+I,m[N]),g&&p.getAttribute("morphNormal"+I)!==g[N]&&p.setAttribute("morphNormal"+I,g[N]),o[I]=D,O+=D):(m&&p.hasAttribute("morphTarget"+I)===!0&&p.deleteAttribute("morphTarget"+I),g&&p.hasAttribute("morphNormal"+I)===!0&&p.deleteAttribute("morphNormal"+I),o[I]=0)}const b=p.morphTargetsRelative?1:1-O;_.getUniforms().setValue(r,"morphTargetBaseInfluence",b),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function Qb(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class $p extends yn{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Or,p!==Or&&p!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Or&&(i=ar),i===void 0&&p===Ls&&(i=Nr),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:cn,this.minFilter=f!==void 0?f:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kp=new yn,Zp=new $p(1,1);Zp.compareFunction=Dp;const jp=new Fp,Jp=new UE,Qp=new Xp,Hd=[],Vd=[],kd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Ds(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Hd[o];if(a===void 0&&(a=new Float32Array(o),Hd[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ja(r,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function eA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function nA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function iA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function rA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Xd.set(i),r.uniformMatrix2fv(this.addr,!1,Xd),nn(t,i)}}function sA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Wd.set(i),r.uniformMatrix3fv(this.addr,!1,Wd),nn(t,i)}}function oA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;kd.set(i),r.uniformMatrix4fv(this.addr,!1,kd),nn(t,i)}}function aA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function fA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function mA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?Zp:Kp;t.setTexture2D(e||a,o)}function gA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Jp,o)}function _A(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Qp,o)}function vA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||jp,o)}function xA(r){switch(r){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return aA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return fA;case 36294:return hA;case 36295:return dA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return vA}}function SA(r,e){r.uniform1fv(this.addr,e)}function MA(r,e){const t=Ds(e,this.size,2);r.uniform2fv(this.addr,t)}function EA(r,e){const t=Ds(e,this.size,3);r.uniform3fv(this.addr,t)}function yA(r,e){const t=Ds(e,this.size,4);r.uniform4fv(this.addr,t)}function TA(r,e){const t=Ds(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bA(r,e){const t=Ds(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AA(r,e){const t=Ds(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wA(r,e){r.uniform1iv(this.addr,e)}function RA(r,e){r.uniform2iv(this.addr,e)}function CA(r,e){r.uniform3iv(this.addr,e)}function LA(r,e){r.uniform4iv(this.addr,e)}function PA(r,e){r.uniform1uiv(this.addr,e)}function IA(r,e){r.uniform2uiv(this.addr,e)}function DA(r,e){r.uniform3uiv(this.addr,e)}function UA(r,e){r.uniform4uiv(this.addr,e)}function NA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Kp,a[u])}function OA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Jp,a[u])}function FA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Qp,a[u])}function BA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||jp,a[u])}function zA(r){switch(r){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return yA;case 35674:return TA;case 35675:return bA;case 35676:return AA;case 5124:case 35670:return wA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return LA;case 5125:return PA;case 36294:return IA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return BA}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function kA(r,e,t){const i=r.name,o=i.length;for(Gc.lastIndex=0;;){const a=Gc.exec(i),u=Gc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){Yd(t,d===void 0?new GA(c,r,e):new HA(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new VA(c),Yd(t,_)),t=_}}}class Ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);kA(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function qd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const WA=37297;let XA=0;function YA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function qA(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let i;switch(e===t?i="":e===Ga&&t===za?i="LinearDisplayP3ToLinearSRGB":e===za&&t===Ga&&(i="LinearSRGBToLinearDisplayP3"),r){case pr:case Ka:return[i,"LinearTransferOETF"];case mi:case uu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function $d(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+YA(r.getShaderSource(e),u)}else return o}function $A(r,e){const t=qA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KA(r,e){let t;switch(e){case VM:t="Linear";break;case kM:t="Reinhard";break;case WM:t="OptimizedCineon";break;case XM:t="ACESFilmic";break;case qM:t="AgX";break;case $M:t="Neutral";break;case YM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ZA(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function jA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function JA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function bs(r){return r!==""}function Kd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(r){return r.replace(ew,nw)}const tw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nw(r,e){let t=pt[e];if(t===void 0){const i=tw.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(r){return r.replace(iw,rw)}function rw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Jd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function sw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function ow(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function lw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case HM:e="ENVMAP_BLENDING_ADD";break}return e}function cw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function uw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=sw(t),d=ow(t),p=aw(t),_=lw(t),v=cw(t),x=t.isWebGL2?"":ZA(t),y=jA(t),w=JA(a),m=o.createProgram();let g,O,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),g.length>0&&(g+=`
`),O=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),O.length>0&&(O+=`
`)):(g=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),O=[x,Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?pt.tonemapping_pars_fragment:"",t.toneMapping!==cr?KA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,$A("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),u=tu(u),u=Kd(u,t),u=Zd(u,t),c=tu(c),c=Kd(c,t),c=Zd(c,t),u=jd(u),c=jd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,O=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const I=b+g+u,G=b+O+c,N=qd(o,o.VERTEX_SHADER,I),D=qd(o,o.FRAGMENT_SHADER,G);o.attachShader(m,N),o.attachShader(m,D),t.index0AttributeName!==void 0?o.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function K(me){if(r.debug.checkShaderErrors){const fe=o.getProgramInfoLog(m).trim(),z=o.getShaderInfoLog(N).trim(),se=o.getShaderInfoLog(D).trim();let ne=!0,ce=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,m,N,D);else{const te=$d(o,N,"vertex"),ue=$d(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+me.name+`
Material Type: `+me.type+`

Program Info Log: `+fe+`
`+te+`
`+ue)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(z===""||se==="")&&(ce=!1);ce&&(me.diagnostics={runnable:ne,programLog:fe,vertexShader:{log:z,prefix:g},fragmentShader:{log:se,prefix:O}})}o.deleteShader(N),o.deleteShader(D),pe=new Ua(o,m),T=QA(o,m)}let pe;this.getUniforms=function(){return pe===void 0&&K(this),pe};let T;this.getAttributes=function(){return T===void 0&&K(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(m,WA)),U},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=N,this.fragmentShader=D,this}let fw=0;class hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dw(e),t.set(e,i)),i}}class dw{constructor(e){this.id=fw++,this.code=e,this.usedTimes=0}}function pw(r,e,t,i,o,a,u){const c=new zp,f=new hw,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return d.add(T),T===0?"uv":`uv${T}`}function g(T,U,me,fe,z){const se=fe.fog,ne=z.geometry,ce=T.isMeshStandardMaterial?fe.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),ue=te&&te.mapping===$a?te.image.height:null,he=w[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const Se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=Se!==void 0?Se.length:0;let et=0;ne.morphAttributes.position!==void 0&&(et=1),ne.morphAttributes.normal!==void 0&&(et=2),ne.morphAttributes.color!==void 0&&(et=3);let Q,ge,Re,Ze;if(he){const yt=gi[he];Q=yt.vertexShader,ge=yt.fragmentShader}else Q=T.vertexShader,ge=T.fragmentShader,f.update(T),Re=f.getVertexShaderID(T),Ze=f.getFragmentShaderID(T);const Oe=r.getRenderTarget(),Ce=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,ke=!!T.map,W=!!T.matcap,Xt=!!te,Ue=!!T.aoMap,je=!!T.lightMap,Ve=!!T.bumpMap,Qe=!!T.normalMap,tt=!!T.displacementMap,lt=!!T.emissiveMap,bt=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,ee=T.clearcoat>0,oe=T.iridescence>0,ve=T.sheen>0,_e=T.transmission>0,Ke=M&&!!T.anisotropyMap,He=ee&&!!T.clearcoatMap,ye=ee&&!!T.clearcoatNormalMap,be=ee&&!!T.clearcoatRoughnessMap,Je=oe&&!!T.iridescenceMap,Ee=oe&&!!T.iridescenceThicknessMap,Nt=ve&&!!T.sheenColorMap,rt=ve&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Pe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,L=_e&&!!T.transmissionMap,le=_e&&!!T.thicknessMap,Ne=!!T.gradientMap,F=!!T.alphaMap,Me=T.alphaTest>0,Y=!!T.alphaHash,xe=!!T.extensions;let we=cr;T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const ht={isWebGL2:_,shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:ge,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:Ze,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Mt,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:pr,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:W,envMap:Xt,envMapMode:Xt&&te.mapping,envMapCubeUVHeight:ue,aoMap:Ue,lightMap:je,bumpMap:Ve,normalMap:Qe,displacementMap:x&&tt,emissiveMap:lt,normalMapObjectSpace:Qe&&T.normalMapType===sE,normalMapTangentSpace:Qe&&T.normalMapType===rE,metalnessMap:bt,roughnessMap:C,anisotropy:M,anisotropyMap:Ke,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,iridescence:oe,iridescenceMap:Je,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:Nt,sheenRoughnessMap:rt,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:Fe,transmission:_e,transmissionMap:L,thicknessMap:le,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===As&&T.alphaToCoverage===!1,alphaMap:F,alphaTest:Me,alphaHash:Y,combine:T.combine,mapUv:ke&&m(T.map.channel),aoMapUv:Ue&&m(T.aoMap.channel),lightMapUv:je&&m(T.lightMap.channel),bumpMapUv:Ve&&m(T.bumpMap.channel),normalMapUv:Qe&&m(T.normalMap.channel),displacementMapUv:tt&&m(T.displacementMap.channel),emissiveMapUv:lt&&m(T.emissiveMap.channel),metalnessMapUv:bt&&m(T.metalnessMap.channel),roughnessMapUv:C&&m(T.roughnessMap.channel),anisotropyMapUv:Ke&&m(T.anisotropyMap.channel),clearcoatMapUv:He&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:rt&&m(T.sheenRoughnessMap.channel),specularMapUv:Ge&&m(T.specularMap.channel),specularColorMapUv:Pe&&m(T.specularColorMap.channel),specularIntensityMapUv:Fe&&m(T.specularIntensityMap.channel),transmissionMapUv:L&&m(T.transmissionMap.channel),thicknessMapUv:le&&m(T.thicknessMap.channel),alphaMapUv:F&&m(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Qe||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(ke||F),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:et,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&me.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===Pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:xe&&T.extensions.derivatives===!0,extensionFragDepth:xe&&T.extensions.fragDepth===!0,extensionDrawBuffers:xe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ht.vertexUv1s=d.has(1),ht.vertexUv2s=d.has(2),ht.vertexUv3s=d.has(3),d.clear(),ht}function O(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const me in T.defines)U.push(me),U.push(T.defines[me]);return T.isRawShaderMaterial===!1&&(b(U,T),I(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function b(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function I(T,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),T.push(c.mask)}function G(T){const U=w[T.type];let me;if(U){const fe=gi[U];me=qE.clone(fe.uniforms)}else me=T.uniforms;return me}function N(T,U){let me;for(let fe=0,z=p.length;fe<z;fe++){const se=p[fe];if(se.cacheKey===U){me=se,++me.usedTimes;break}}return me===void 0&&(me=new uw(r,U,T,a),p.push(me)),me}function D(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),T.destroy()}}function K(T){f.remove(T)}function pe(){f.dispose()}return{getParameters:g,getProgramCacheKey:O,getUniforms:G,acquireProgram:N,releaseProgram:D,releaseShaderCache:K,programs:p,dispose:pe}}function mw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function gw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ep(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,y,w,m){let g=r[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:x,groupOrder:y,renderOrder:_.renderOrder,z:w,group:m},r[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=x,g.groupOrder=y,g.renderOrder=_.renderOrder,g.z=w,g.group=m),e++,g}function c(_,v,x,y,w,m){const g=u(_,v,x,y,w,m);x.transmission>0?i.push(g):x.transparent===!0?o.push(g):t.push(g)}function f(_,v,x,y,w,m){const g=u(_,v,x,y,w,m);x.transmission>0?i.unshift(g):x.transparent===!0?o.unshift(g):t.unshift(g)}function d(_,v){t.length>1&&t.sort(_||gw),i.length>1&&i.sort(v||Qd),o.length>1&&o.sort(v||Qd)}function p(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function _w(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new ep,r.set(i,[u])):o>=a.length?(u=new ep,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function vw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Tt};break;case"SpotLight":t={position:new X,direction:new X,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Sw=0;function Mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ew(r,e){const t=new vw,i=xw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,u=new Wt,c=new Wt;function f(p,_){let v=0,x=0,y=0;for(let me=0;me<9;me++)o.probe[me].set(0,0,0);let w=0,m=0,g=0,O=0,b=0,I=0,G=0,N=0,D=0,K=0,pe=0;p.sort(Mw);const T=_===!0?Math.PI:1;for(let me=0,fe=p.length;me<fe;me++){const z=p[me],se=z.color,ne=z.intensity,ce=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=se.r*ne*T,x+=se.g*ne*T,y+=se.b*ne*T;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(z.sh.coefficients[ue],ne);pe++}else if(z.isDirectionalLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const he=z.shadow,Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,o.directionalShadow[w]=Se,o.directionalShadowMap[w]=te,o.directionalShadowMatrix[w]=z.shadow.matrix,I++}o.directional[w]=ue,w++}else if(z.isSpotLight){const ue=t.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(se).multiplyScalar(ne*T),ue.distance=ce,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,o.spot[g]=ue;const he=z.shadow;if(z.map&&(o.spotLightMap[D]=z.map,D++,he.updateMatrices(z),z.castShadow&&K++),o.spotLightMatrix[g]=he.matrix,z.castShadow){const Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,o.spotShadow[g]=Se,o.spotShadowMap[g]=te,N++}g++}else if(z.isRectAreaLight){const ue=t.get(z);ue.color.copy(se).multiplyScalar(ne),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),o.rectArea[O]=ue,O++}else if(z.isPointLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const he=z.shadow,Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,Se.shadowCameraNear=he.camera.near,Se.shadowCameraFar=he.camera.far,o.pointShadow[m]=Se,o.pointShadowMap[m]=te,o.pointShadowMatrix[m]=z.shadow.matrix,G++}o.point[m]=ue,m++}else if(z.isHemisphereLight){const ue=t.get(z);ue.skyColor.copy(z.color).multiplyScalar(ne*T),ue.groundColor.copy(z.groundColor).multiplyScalar(ne*T),o.hemi[b]=ue,b++}}O>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=y;const U=o.hash;(U.directionalLength!==w||U.pointLength!==m||U.spotLength!==g||U.rectAreaLength!==O||U.hemiLength!==b||U.numDirectionalShadows!==I||U.numPointShadows!==G||U.numSpotShadows!==N||U.numSpotMaps!==D||U.numLightProbes!==pe)&&(o.directional.length=w,o.spot.length=g,o.rectArea.length=O,o.point.length=m,o.hemi.length=b,o.directionalShadow.length=I,o.directionalShadowMap.length=I,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=N,o.spotShadowMap.length=N,o.directionalShadowMatrix.length=I,o.pointShadowMatrix.length=G,o.spotLightMatrix.length=N+D-K,o.spotLightMap.length=D,o.numSpotLightShadowsWithMaps=K,o.numLightProbes=pe,U.directionalLength=w,U.pointLength=m,U.spotLength=g,U.rectAreaLength=O,U.hemiLength=b,U.numDirectionalShadows=I,U.numPointShadows=G,U.numSpotShadows=N,U.numSpotMaps=D,U.numLightProbes=pe,o.version=Sw++)}function d(p,_){let v=0,x=0,y=0,w=0,m=0;const g=_.matrixWorldInverse;for(let O=0,b=p.length;O<b;O++){const I=p[O];if(I.isDirectionalLight){const G=o.directional[v];G.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),v++}else if(I.isSpotLight){const G=o.spot[y];G.position.setFromMatrixPosition(I.matrixWorld),G.position.applyMatrix4(g),G.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),y++}else if(I.isRectAreaLight){const G=o.rectArea[w];G.position.setFromMatrixPosition(I.matrixWorld),G.position.applyMatrix4(g),c.identity(),u.copy(I.matrixWorld),u.premultiply(g),c.extractRotation(u),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),G.halfWidth.applyMatrix4(c),G.halfHeight.applyMatrix4(c),w++}else if(I.isPointLight){const G=o.point[x];G.position.setFromMatrixPosition(I.matrixWorld),G.position.applyMatrix4(g),x++}else if(I.isHemisphereLight){const G=o.hemi[m];G.direction.setFromMatrixPosition(I.matrixWorld),G.direction.transformDirection(g),m++}}}return{setup:f,setupView:d,state:o}}function tp(r,e){const t=new Ew(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function yw(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new tp(r,e),t.set(a,[f])):u>=c.length?(f=new tp(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class Tw extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bw extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ww=`uniform sampler2D shadow_pass;
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
}`;function Rw(r,e,t){let i=new Yp;const o=new at,a=new at,u=new un,c=new Tw({depthPacking:iE}),f=new bw,d={},p=t.maxTextureSize,_={[fr]:Pn,[Pn]:fr,[Gi]:Gi},v=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Aw,fragmentShader:ww}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new mr;y.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new li(y,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let g=this.type;this.render=function(N,D,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const pe=r.getRenderTarget(),T=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),me=r.state;me.setBlending(lr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const fe=g!==Bi&&this.type===Bi,z=g===Bi&&this.type!==Bi;for(let se=0,ne=N.length;se<ne;se++){const ce=N[se],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ue=te.getFrameExtents();if(o.multiply(ue),a.copy(te.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ue.x),o.x=a.x*ue.x,te.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ue.y),o.y=a.y*ue.y,te.mapSize.y=a.y)),te.map===null||fe===!0||z===!0){const Se=this.type!==Bi?{minFilter:cn,magFilter:cn}:{};te.map!==null&&te.map.dispose(),te.map=new Fr(o.x,o.y,Se),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const he=te.getViewportCount();for(let Se=0;Se<he;Se++){const De=te.getViewport(Se);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),me.viewport(u),te.updateMatrices(ce,Se),i=te.getFrustum(),I(D,K,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Bi&&O(te,K),te.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(pe,T,U)};function O(N,D){const K=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Fr(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(D,null,K,v,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(D,null,K,x,w,null)}function b(N,D,K,pe){let T=null;const U=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)T=U;else if(T=K.isPointLight===!0?f:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const me=T.uuid,fe=D.uuid;let z=d[me];z===void 0&&(z={},d[me]=z);let se=z[fe];se===void 0&&(se=T.clone(),z[fe]=se,D.addEventListener("dispose",G)),T=se}if(T.visible=D.visible,T.wireframe=D.wireframe,pe===Bi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:_[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const me=r.properties.get(T);me.light=K}return T}function I(N,D,K,pe,T){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Bi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),z=N.material;if(Array.isArray(z)){const se=fe.groups;for(let ne=0,ce=se.length;ne<ce;ne++){const te=se[ne],ue=z[te.materialIndex];if(ue&&ue.visible){const he=b(N,ue,pe,T);N.onBeforeShadow(r,N,D,K,fe,he,te),r.renderBufferDirect(K,null,fe,he,N,te),N.onAfterShadow(r,N,D,K,fe,he,te)}}}else if(z.visible){const se=b(N,z,pe,T);N.onBeforeShadow(r,N,D,K,fe,se,null),r.renderBufferDirect(K,null,fe,se,N,null),N.onAfterShadow(r,N,D,K,fe,se,null)}}const me=N.children;for(let fe=0,z=me.length;fe<z;fe++)I(me[fe],D,K,pe,T)}function G(N){N.target.removeEventListener("dispose",G);for(const K in d){const pe=d[K],T=N.target.uuid;T in pe&&(pe[T].dispose(),delete pe[T])}}}function Cw(r,e,t){const i=t.isWebGL2;function o(){let F=!1;const Me=new un;let Y=null;const xe=new un(0,0,0,0);return{setMask:function(we){Y!==we&&!F&&(r.colorMask(we,we,we,we),Y=we)},setLocked:function(we){F=we},setClear:function(we,ht,yt,Rt,Gt){Gt===!0&&(we*=Rt,ht*=Rt,yt*=Rt),Me.set(we,ht,yt,Rt),xe.equals(Me)===!1&&(r.clearColor(we,ht,yt,Rt),xe.copy(Me))},reset:function(){F=!1,Y=null,xe.set(-1,0,0,0)}}}function a(){let F=!1,Me=null,Y=null,xe=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!F&&(r.depthMask(we),Me=we)},setFunc:function(we){if(Y!==we){switch(we){case DM:r.depthFunc(r.NEVER);break;case UM:r.depthFunc(r.ALWAYS);break;case NM:r.depthFunc(r.LESS);break;case Fa:r.depthFunc(r.LEQUAL);break;case OM:r.depthFunc(r.EQUAL);break;case FM:r.depthFunc(r.GEQUAL);break;case BM:r.depthFunc(r.GREATER);break;case zM:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=we}},setLocked:function(we){F=we},setClear:function(we){xe!==we&&(r.clearDepth(we),xe=we)},reset:function(){F=!1,Me=null,Y=null,xe=null}}}function u(){let F=!1,Me=null,Y=null,xe=null,we=null,ht=null,yt=null,Rt=null,Gt=null;return{setTest:function(Et){F||(Et?Ce(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Et){Me!==Et&&!F&&(r.stencilMask(Et),Me=Et)},setFunc:function(Et,Ct,rn){(Y!==Et||xe!==Ct||we!==rn)&&(r.stencilFunc(Et,Ct,rn),Y=Et,xe=Ct,we=rn)},setOp:function(Et,Ct,rn){(ht!==Et||yt!==Ct||Rt!==rn)&&(r.stencilOp(Et,Ct,rn),ht=Et,yt=Ct,Rt=rn)},setLocked:function(Et){F=Et},setClear:function(Et){Gt!==Et&&(r.clearStencil(Et),Gt=Et)},reset:function(){F=!1,Me=null,Y=null,xe=null,we=null,ht=null,yt=null,Rt=null,Gt=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},x={},y=new WeakMap,w=[],m=null,g=!1,O=null,b=null,I=null,G=null,N=null,D=null,K=null,pe=new Tt(0,0,0),T=0,U=!1,me=null,fe=null,z=null,se=null,ne=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ue=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(he)[1]),te=ue>=1):he.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),te=ue>=2);let Se=null,De={};const et=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ge=new un().fromArray(et),Re=new un().fromArray(Q);function Ze(F,Me,Y,xe){const we=new Uint8Array(4),ht=r.createTexture();r.bindTexture(F,ht),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<Y;yt++)i&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Me+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ht}const Oe={};Oe[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Fa),tt(!1),lt(Uh),Ce(r.CULL_FACE),Ve(lr);function Ce(F){v[F]!==!0&&(r.enable(F),v[F]=!0)}function Mt(F){v[F]!==!1&&(r.disable(F),v[F]=!1)}function ke(F,Me){return x[F]!==Me?(r.bindFramebuffer(F,Me),x[F]=Me,i&&(F===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Me),F===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function W(F,Me){let Y=w,xe=!1;if(F){Y=y.get(Me),Y===void 0&&(Y=[],y.set(Me,Y));const we=F.textures;if(Y.length!==we.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,yt=we.length;ht<yt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=we.length,xe=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,xe=!0);if(xe)if(t.isWebGL2)r.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Xt(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const Ue={[Ir]:r.FUNC_ADD,[vM]:r.FUNC_SUBTRACT,[xM]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[Bh]=r.MIN,Ue[zh]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ue[Bh]=F.MIN_EXT,Ue[zh]=F.MAX_EXT)}const je={[SM]:r.ZERO,[MM]:r.ONE,[EM]:r.SRC_COLOR,[qc]:r.SRC_ALPHA,[RM]:r.SRC_ALPHA_SATURATE,[AM]:r.DST_COLOR,[TM]:r.DST_ALPHA,[yM]:r.ONE_MINUS_SRC_COLOR,[$c]:r.ONE_MINUS_SRC_ALPHA,[wM]:r.ONE_MINUS_DST_COLOR,[bM]:r.ONE_MINUS_DST_ALPHA,[CM]:r.CONSTANT_COLOR,[LM]:r.ONE_MINUS_CONSTANT_COLOR,[PM]:r.CONSTANT_ALPHA,[IM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,Me,Y,xe,we,ht,yt,Rt,Gt,Et){if(F===lr){g===!0&&(Mt(r.BLEND),g=!1);return}if(g===!1&&(Ce(r.BLEND),g=!0),F!==_M){if(F!==O||Et!==U){if((b!==Ir||N!==Ir)&&(r.blendEquation(r.FUNC_ADD),b=Ir,N=Ir),Et)switch(F){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.ONE,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}I=null,G=null,D=null,K=null,pe.set(0,0,0),T=0,O=F,U=Et}return}we=we||Me,ht=ht||Y,yt=yt||xe,(Me!==b||we!==N)&&(r.blendEquationSeparate(Ue[Me],Ue[we]),b=Me,N=we),(Y!==I||xe!==G||ht!==D||yt!==K)&&(r.blendFuncSeparate(je[Y],je[xe],je[ht],je[yt]),I=Y,G=xe,D=ht,K=yt),(Rt.equals(pe)===!1||Gt!==T)&&(r.blendColor(Rt.r,Rt.g,Rt.b,Gt),pe.copy(Rt),T=Gt),O=F,U=!1}function Qe(F,Me){F.side===Gi?Mt(r.CULL_FACE):Ce(r.CULL_FACE);let Y=F.side===Pn;Me&&(Y=!Y),tt(Y),F.blending===As&&F.transparent===!1?Ve(lr):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),f.setFunc(F.depthFunc),f.setTest(F.depthTest),f.setMask(F.depthWrite),c.setMask(F.colorWrite);const xe=F.stencilWrite;d.setTest(xe),xe&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),C(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){me!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),me=F)}function lt(F){F!==pM?(Ce(r.CULL_FACE),F!==fe&&(F===Uh?r.cullFace(r.BACK):F===mM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),fe=F}function bt(F){F!==z&&(te&&r.lineWidth(F),z=F)}function C(F,Me,Y){F?(Ce(r.POLYGON_OFFSET_FILL),(se!==Me||ne!==Y)&&(r.polygonOffset(Me,Y),se=Me,ne=Y)):Mt(r.POLYGON_OFFSET_FILL)}function M(F){F?Ce(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function ee(F){F===void 0&&(F=r.TEXTURE0+ce-1),Se!==F&&(r.activeTexture(F),Se=F)}function oe(F,Me,Y){Y===void 0&&(Se===null?Y=r.TEXTURE0+ce-1:Y=Se);let xe=De[Y];xe===void 0&&(xe={type:void 0,texture:void 0},De[Y]=xe),(xe.type!==F||xe.texture!==Me)&&(Se!==Y&&(r.activeTexture(Y),Se=Y),r.bindTexture(F,Me||Oe[F]),xe.type=F,xe.texture=Me)}function ve(){const F=De[Se];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){ge.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function Fe(F){Re.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Re.copy(F))}function L(F,Me){let Y=_.get(Me);Y===void 0&&(Y=new WeakMap,_.set(Me,Y));let xe=Y.get(F);xe===void 0&&(xe=r.getUniformBlockIndex(Me,F.name),Y.set(F,xe))}function le(F,Me){const xe=_.get(Me).get(F);p.get(Me)!==xe&&(r.uniformBlockBinding(Me,xe,F.__bindingPointIndex),p.set(Me,xe))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,De={},x={},y=new WeakMap,w=[],m=null,g=!1,O=null,b=null,I=null,G=null,N=null,D=null,K=null,pe=new Tt(0,0,0),T=0,U=!1,me=null,fe=null,z=null,se=null,ne=null,ge.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:Mt,bindFramebuffer:ke,drawBuffers:W,useProgram:Xt,setBlending:Ve,setMaterial:Qe,setFlipSided:tt,setCullFace:lt,setLineWidth:bt,setPolygonOffset:C,setScissorTest:M,activeTexture:ee,bindTexture:oe,unbindTexture:ve,compressedTexImage2D:_e,compressedTexImage3D:Ke,texImage2D:rt,texImage3D:Ge,updateUBOMapping:L,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Je,scissor:Pe,viewport:Fe,reset:Ne}}function Lw(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,M){return y?new OffscreenCanvas(C,M):ka("canvas")}function m(C,M,ee,oe){let ve=1;const _e=bt(C);if((_e.width>oe||_e.height>oe)&&(ve=oe/Math.max(_e.width,_e.height)),ve<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ke=M?Va:Math.floor,He=Ke(ve*_e.width),ye=Ke(ve*_e.height);v===void 0&&(v=w(He,ye));const be=ee?w(He,ye):v;return be.width=He,be.height=ye,be.getContext("2d").drawImage(C,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+He+"x"+ye+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),C;return C}function g(C){const M=bt(C);return eu(M.width)&&eu(M.height)}function O(C){return c?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==cn&&C.minFilter!==Ln}function b(C,M){return C.generateMipmaps&&M&&C.minFilter!==cn&&C.minFilter!==Ln}function I(C){r.generateMipmap(C)}function G(C,M,ee,oe,ve=!1){if(c===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e=M;if(M===r.RED&&(ee===r.FLOAT&&(_e=r.R32F),ee===r.HALF_FLOAT&&(_e=r.R16F),ee===r.UNSIGNED_BYTE&&(_e=r.R8)),M===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.R8UI),ee===r.UNSIGNED_SHORT&&(_e=r.R16UI),ee===r.UNSIGNED_INT&&(_e=r.R32UI),ee===r.BYTE&&(_e=r.R8I),ee===r.SHORT&&(_e=r.R16I),ee===r.INT&&(_e=r.R32I)),M===r.RG&&(ee===r.FLOAT&&(_e=r.RG32F),ee===r.HALF_FLOAT&&(_e=r.RG16F),ee===r.UNSIGNED_BYTE&&(_e=r.RG8)),M===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.RG8UI),ee===r.UNSIGNED_SHORT&&(_e=r.RG16UI),ee===r.UNSIGNED_INT&&(_e=r.RG32UI),ee===r.BYTE&&(_e=r.RG8I),ee===r.SHORT&&(_e=r.RG16I),ee===r.INT&&(_e=r.RG32I)),M===r.RGBA){const Ke=ve?Ba:It.getTransfer(oe);ee===r.FLOAT&&(_e=r.RGBA32F),ee===r.HALF_FLOAT&&(_e=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(_e=Ke===zt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function N(C,M,ee){return b(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function D(C){return C===cn||C===Gh||C===eo?r.NEAREST:r.LINEAR}function K(C){const M=C.target;M.removeEventListener("dispose",K),T(M),M.isVideoTexture&&_.delete(M)}function pe(C){const M=C.target;M.removeEventListener("dispose",pe),me(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const ee=C.source,oe=x.get(ee);if(oe){const ve=oe[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&U(C),Object.keys(oe).length===0&&x.delete(ee)}i.remove(C)}function U(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const ee=C.source,oe=x.get(ee);delete oe[M.__cacheKey],u.memory.textures--}function me(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ve=0;ve<M.__webglFramebuffer[oe].length;ve++)r.deleteFramebuffer(M.__webglFramebuffer[oe][ve]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=i.get(ee[oe]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(C)}let fe=0;function z(){fe=0}function se(){const C=fe;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),fe+=1,C}function ne(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ce(C,M){const ee=i.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,C,M);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+M)}function te(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+M)}function ue(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+M)}function he(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Ze(ee,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+M)}const Se={[jc]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},De={[cn]:r.NEAREST,[Gh]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[fc]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},et={[oE]:r.NEVER,[hE]:r.ALWAYS,[aE]:r.LESS,[Dp]:r.LEQUAL,[lE]:r.EQUAL,[fE]:r.GEQUAL,[cE]:r.GREATER,[uE]:r.NOTEQUAL};function Q(C,M,ee){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===fc||M.magFilter===eo||M.magFilter===Ur||M.minFilter===Ln||M.minFilter===fc||M.minFilter===eo||M.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(C,r.TEXTURE_WRAP_S,Se[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Se[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Se[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==oi||M.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,D(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,D(M.minFilter)),M.minFilter!==cn&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,et[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==eo&&M.minFilter!==Ur||M.type===_i&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(C,M){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",K));const oe=M.source;let ve=x.get(oe);ve===void 0&&(ve={},x.set(oe,ve));const _e=ne(M);if(_e!==C.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[_e].usedTimes++;const Ke=ve[C.__cacheKey];Ke!==void 0&&(ve[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&U(M)),C.__cacheKey=_e,C.__webglTexture=ve[_e].texture}return ee}function Re(C,M,ee){let oe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=r.TEXTURE_3D);const ve=ge(C,M),_e=M.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+ee);const Ke=i.get(_e);if(_e.version!==Ke.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const He=It.getPrimaries(It.workingColorSpace),ye=M.colorSpace===or?null:It.getPrimaries(M.colorSpace),be=M.colorSpace===or||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Je=O(M)&&g(M.image)===!1;let Ee=m(M.image,Je,!1,o.maxTextureSize);Ee=lt(M,Ee);const Nt=g(Ee)||c,rt=a.convert(M.format,M.colorSpace);let Ge=a.convert(M.type),Pe=G(M.internalFormat,rt,Ge,M.colorSpace,M.isVideoTexture);Q(oe,M,Nt);let Fe;const L=M.mipmaps,le=c&&M.isVideoTexture!==!0&&Pe!==Ip,Ne=Ke.__version===void 0||ve===!0,F=_e.dataReady,Me=N(M,Ee,Nt);if(M.isDepthTexture)Pe=r.DEPTH_COMPONENT,c?M.type===_i?Pe=r.DEPTH_COMPONENT32F:M.type===ar?Pe=r.DEPTH_COMPONENT24:M.type===Nr?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:M.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&Pe===r.DEPTH_COMPONENT&&M.type!==cu&&M.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ar,Ge=a.convert(M.type)),M.format===Ls&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Nr,Ge=a.convert(M.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,null));else if(M.isDataTexture)if(L.length>0&&Nt){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,L[0].width,L[0].height);for(let Y=0,xe=L.length;Y<xe;Y++)Fe=L[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data);M.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,rt,Ge,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,L[0].width,L[0].height,Ee.depth);for(let Y=0,xe=L.length;Y<xe;Y++)Fe=L[Y],M.format!==ai?rt!==null?le?F&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Ge,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,rt,Ge,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,L[0].width,L[0].height);for(let Y=0,xe=L.length;Y<xe;Y++)Fe=L[Y],M.format!==ai?rt!==null?le?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data)}else if(M.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(M.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,Me,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(M.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height);else{let Y=Ee.width,xe=Ee.height;for(let we=0;we<Me;we++)t.texImage2D(r.TEXTURE_2D,we,Pe,Y,xe,0,rt,Ge,null),Y>>=1,xe>>=1}}else if(L.length>0&&Nt){if(le&&Ne){const Y=bt(L[0]);t.texStorage2D(r.TEXTURE_2D,Me,Pe,Y.width,Y.height)}for(let Y=0,xe=L.length;Y<xe;Y++)Fe=L[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,rt,Ge,Fe):t.texImage2D(r.TEXTURE_2D,Y,Pe,rt,Ge,Fe);M.generateMipmaps=!1}else if(le){if(Ne){const Y=bt(Ee);t.texStorage2D(r.TEXTURE_2D,Me,Pe,Y.width,Y.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Ge,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,rt,Ge,Ee);b(M,Nt)&&I(oe),Ke.__version=_e.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ze(C,M,ee){if(M.image.length!==6)return;const oe=ge(C,M),ve=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ee);const _e=i.get(ve);if(ve.version!==_e.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Ke=It.getPrimaries(It.workingColorSpace),He=M.colorSpace===or?null:It.getPrimaries(M.colorSpace),ye=M.colorSpace===or||Ke===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Je=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let Y=0;Y<6;Y++)!be&&!Je?Ee[Y]=m(M.image[Y],!1,!0,o.maxCubemapSize):Ee[Y]=Je?M.image[Y].image:M.image[Y],Ee[Y]=lt(M,Ee[Y]);const Nt=Ee[0],rt=g(Nt)||c,Ge=a.convert(M.format,M.colorSpace),Pe=a.convert(M.type),Fe=G(M.internalFormat,Ge,Pe,M.colorSpace),L=c&&M.isVideoTexture!==!0,le=_e.__version===void 0||oe===!0,Ne=ve.dataReady;let F=N(M,Nt,rt);Q(r.TEXTURE_CUBE_MAP,M,rt);let Me;if(be){L&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Nt.width,Nt.height);for(let Y=0;Y<6;Y++){Me=Ee[Y].mipmaps;for(let xe=0;xe<Me.length;xe++){const we=Me[xe];M.format!==ai?Ge!==null?L?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,we.width,we.height,Ge,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,Fe,we.width,we.height,0,Ge,Pe,we.data)}}}else{if(Me=M.mipmaps,L&&le){Me.length>0&&F++;const Y=bt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Je){L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee[Y].width,Ee[Y].height,Ge,Pe,Ee[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ee[Y].width,Ee[Y].height,0,Ge,Pe,Ee[Y].data);for(let xe=0;xe<Me.length;xe++){const ht=Me[xe].image[Y].image;L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,ht.width,ht.height,Ge,Pe,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,Fe,ht.width,ht.height,0,Ge,Pe,ht.data)}}else{L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ge,Pe,Ee[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ge,Pe,Ee[Y]);for(let xe=0;xe<Me.length;xe++){const we=Me[xe];L?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,Ge,Pe,we.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,Fe,Ge,Pe,we.image[Y])}}}b(M,rt)&&I(r.TEXTURE_CUBE_MAP),_e.__version=ve.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,ee,oe,ve,_e){const Ke=a.convert(ee.format,ee.colorSpace),He=a.convert(ee.type),ye=G(ee.internalFormat,Ke,He,ee.colorSpace);if(!i.get(M).__hasExternalTextures){const Je=Math.max(1,M.width>>_e),Ee=Math.max(1,M.height>>_e);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,ye,Je,Ee,M.depth,0,Ke,He,null):t.texImage2D(ve,_e,ye,Je,Ee,0,Ke,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,0,Ve(M)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,M,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||Qe(M)){const ve=M.depthTexture;ve&&ve.isDepthTexture&&(ve.type===_i?oe=r.DEPTH_COMPONENT32F:ve.type===ar&&(oe=r.DEPTH_COMPONENT24));const _e=Ve(M);Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,oe,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,oe,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Ve(M);ee&&Qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const oe=M.textures;for(let ve=0;ve<oe.length;ve++){const _e=oe[ve],Ke=a.convert(_e.format,_e.colorSpace),He=a.convert(_e.type),ye=G(_e.internalFormat,Ke,He,_e.colorSpace),be=Ve(M);ee&&Qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ye,M.width,M.height):Qe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ve=Ve(M);if(M.depthTexture.format===Or)Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Ls)Qe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(C){const M=i.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,C)}else if(ee){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(C,M,ee){const oe=i.get(C);M!==void 0&&Oe(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ke(C)}function Xt(C){const M=C.texture,ee=i.get(C),oe=i.get(M);C.addEventListener("dispose",pe);const ve=C.textures,_e=C.isWebGLCubeRenderTarget===!0,Ke=ve.length>1,He=g(C)||c;if(Ke||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,u.memory.textures++),_e){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let be=0;be<M.mipmaps.length;be++)ee.__webglFramebuffer[ye][be]=r.createFramebuffer()}else ee.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ke)if(o.drawBuffers)for(let ye=0,be=ve.length;ye<be;ye++){const Je=i.get(ve[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Qe(C)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<ve.length;ye++){const be=ve[ye];ee.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const Je=a.convert(be.format,be.colorSpace),Ee=a.convert(be.type),Nt=G(be.internalFormat,Je,Ee,be.colorSpace,C.isXRRenderTarget===!0),rt=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Nt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M,He);for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ee.__webglFramebuffer[ye][be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Oe(ee.__webglFramebuffer[ye],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);b(M,He)&&I(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let ye=0,be=ve.length;ye<be;ye++){const Je=ve[ye],Ee=i.get(Je);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Q(r.TEXTURE_2D,Je,He),Oe(ee.__webglFramebuffer,C,Je,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),b(Je,He)&&I(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),Q(ye,M,He),c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ee.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,ye,be);else Oe(ee.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ye,0);b(M,He)&&I(ye),t.unbindTexture()}C.depthBuffer&&ke(C)}function Ue(C){const M=g(C)||c,ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=ee[oe];if(b(_e,M)){const Ke=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(_e).__webglTexture;t.bindTexture(Ke,He),I(Ke),t.unbindTexture()}}}function je(C){if(c&&C.samples>0&&Qe(C)===!1){const M=C.textures,ee=C.width,oe=C.height;let ve=r.COLOR_BUFFER_BIT;const _e=[],Ke=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(C),ye=M.length>1;if(ye)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){_e.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&_e.push(Ke);const Je=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Je===!1&&(C.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Je===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ke])),ye){const Ee=i.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,ve,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Je=i.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(o.maxSamples,C.samples)}function Qe(C){const M=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(C){const M=u.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function lt(C,M){const ee=C.colorSpace,oe=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Qc||ee!==pr&&ee!==or&&(It.getTransfer(ee)===zt?c===!1?e.has("EXT_sRGB")===!0&&oe===ai?(C.format=Qc,C.minFilter=Ln,C.generateMipmaps=!1):M=Np.sRGBToLinear(M):(oe!==ai||ve!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),M}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=z,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=he,this.rebindTextures=W,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Qe}function Pw(r,e,t){const i=t.isWebGL2;function o(a,u=or){let c;const f=It.getTransfer(u);if(a===ur)return r.UNSIGNED_BYTE;if(a===Ap)return r.UNSIGNED_SHORT_4_4_4_4;if(a===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===KM)return r.BYTE;if(a===ZM)return r.SHORT;if(a===cu)return r.UNSIGNED_SHORT;if(a===bp)return r.INT;if(a===ar)return r.UNSIGNED_INT;if(a===_i)return r.FLOAT;if(a===fo)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===jM)return r.ALPHA;if(a===ai)return r.RGBA;if(a===JM)return r.LUMINANCE;if(a===QM)return r.LUMINANCE_ALPHA;if(a===Or)return r.DEPTH_COMPONENT;if(a===Ls)return r.DEPTH_STENCIL;if(a===Qc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Rp)return r.RED;if(a===Cp)return r.RED_INTEGER;if(a===eE)return r.RG;if(a===Lp)return r.RG_INTEGER;if(a===Pp)return r.RGBA_INTEGER;if(a===hc||a===dc||a===pc||a===mc)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===mc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Hh||a===Vh||a===kh||a===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ip)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Xh||a===Yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Xh)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qh||a===$h||a===Kh||a===Zh||a===jh||a===Jh||a===Qh||a===ed||a===td||a===nd||a===id||a===rd||a===sd||a===od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===qh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$h)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Kh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Jh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ed)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===td)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===nd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===id)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===od)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===gc||a===ad||a===ld)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===gc)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tE||a===cd||a===ud||a===fd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===gc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Nr?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class Iw extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dw={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,i),g=this._getHandJoint(d,w);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,y=.005;d.inputState.pinching&&v>x+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new yn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new dr({extensions:{fragDepth:!0},vertexShader:Uw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new ja(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Fw extends Br{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,x=null,y=null;const w=new Ow,m=t.getContextAttributes();let g=null,O=null;const b=[],I=[],G=new at;let N=null;const D=new Gn;D.layers.enable(1),D.viewport=new un;const K=new Gn;K.layers.enable(2),K.viewport=new un;const pe=[D,K],T=new Iw;T.layers.enable(1),T.layers.enable(2);let U=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=b[Q];return ge===void 0&&(ge=new Hc,b[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=b[Q];return ge===void 0&&(ge=new Hc,b[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=b[Q];return ge===void 0&&(ge=new Hc,b[Q]=ge),ge.getHandSpace()};function fe(Q){const ge=I.indexOf(Q.inputSource);if(ge===-1)return;const Re=b[ge];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<b.length;Q++){const ge=I[Q];ge!==null&&(I[Q]=null,b[Q].disconnect(ge))}U=null,me=null,w.reset(),e.setRenderTarget(g),x=null,v=null,_=null,o=null,O=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",z),o.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:o.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Fr(x.framebufferWidth,x.framebufferHeight,{format:ai,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ge=null,Re=null,Ze=null;m.depth&&(Ze=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Ls:Or,Re=m.stencil?Nr:ar);const Oe={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Fr(v.textureWidth,v.textureHeight,{format:ai,type:ur,depthTexture:new $p(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(O);Ce.__ignoreDepthValues=v.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),et.setContext(o),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Q){for(let ge=0;ge<Q.removed.length;ge++){const Re=Q.removed[ge],Ze=I.indexOf(Re);Ze>=0&&(I[Ze]=null,b[Ze].disconnect(Re))}for(let ge=0;ge<Q.added.length;ge++){const Re=Q.added[ge];let Ze=I.indexOf(Re);if(Ze===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=I.length){I.push(Re),Ze=Ce;break}else if(I[Ce]===null){I[Ce]=Re,Ze=Ce;break}if(Ze===-1)break}const Oe=b[Ze];Oe&&Oe.connect(Re)}}const ne=new X,ce=new X;function te(Q,ge,Re){ne.setFromMatrixPosition(ge.matrixWorld),ce.setFromMatrixPosition(Re.matrixWorld);const Ze=ne.distanceTo(ce),Oe=ge.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,Mt=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],Xt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],je=(Ce[8]+1)/Ce[0],Ve=Mt*Ue,Qe=Mt*je,tt=Ze/(-Ue+je),lt=tt*-Ue;ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const bt=Mt+tt,C=ke+tt,M=Ve-lt,ee=Qe+(Ze-lt),oe=W*ke/C*bt,ve=Xt*ke/C*bt;Q.projectionMatrix.makePerspective(M,ee,oe,ve,bt,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ue(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;w.texture!==null&&(Q.near=w.depthNear,Q.far=w.depthFar),T.near=K.near=D.near=Q.near,T.far=K.far=D.far=Q.far,(U!==T.near||me!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,me=T.far,D.near=U,D.far=me,K.near=U,K.far=me,D.updateProjectionMatrix(),K.updateProjectionMatrix(),Q.updateProjectionMatrix());const ge=Q.parent,Re=T.cameras;ue(T,ge);for(let Ze=0;Ze<Re.length;Ze++)ue(Re[Ze],ge);Re.length===2?te(T,D,K):T.projectionMatrix.copy(D.projectionMatrix),he(Q,T,ge)};function he(Q,ge,Re){Re===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ho*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null};let Se=null;function De(Q,ge){if(p=ge.getViewerPose(d||u),y=ge,p!==null){const Re=p.views;x!==null&&(e.setRenderTargetFramebuffer(O,x.framebuffer),e.setRenderTarget(O));let Ze=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,Ze=!0);for(let Ce=0;Ce<Re.length;Ce++){const Mt=Re[Ce];let ke=null;if(x!==null)ke=x.getViewport(Mt);else{const Xt=_.getViewSubImage(v,Mt);ke=Xt.viewport,Ce===0&&(e.setRenderTargetTextures(O,Xt.colorTexture,v.ignoreDepthValues?void 0:Xt.depthStencilTexture),e.setRenderTarget(O))}let W=pe[Ce];W===void 0&&(W=new Gn,W.layers.enable(Ce),W.viewport=new un,pe[Ce]=W),W.matrix.fromArray(Mt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Mt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(T.matrix.copy(W.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ze===!0&&T.cameras.push(W)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(e,Ce,o.renderState)}}for(let Re=0;Re<b.length;Re++){const Ze=I[Re],Oe=b[Re];Ze!==null&&Oe!==void 0&&Oe.update(Ze,ge,d||u)}w.render(e,T),Se&&Se(Q,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),y=null}const et=new qp;et.setAnimationLoop(De),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Lr=new Vi,Bw=new Wt;function zw(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,kp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function o(m,g,O,b,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(m,g):g.isMeshToonMaterial?(a(m,g),_(m,g)):g.isMeshPhongMaterial?(a(m,g),p(m,g)):g.isMeshStandardMaterial?(a(m,g),v(m,g),g.isMeshPhysicalMaterial&&x(m,g,I)):g.isMeshMatcapMaterial?(a(m,g),y(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),w(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(u(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?f(m,g,O,b):g.isSpriteMaterial?d(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const O=e.get(g),b=O.envMap,I=O.envMapRotation;if(b&&(m.envMap.value=b,Lr.copy(I),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Lr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const G=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*G,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function f(m,g,O,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*O,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function p(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function _(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function x(m,g,O){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=O.texture,m.transmissionSamplerSize.value.set(O.width,O.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function w(m,g){const O=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(O.matrixWorld),m.nearDistance.value=O.shadow.camera.near,m.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Gw(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(O,b){const I=b.program;i.uniformBlockBinding(O,I)}function d(O,b){let I=o[O.id];I===void 0&&(y(O),I=p(O),o[O.id]=I,O.addEventListener("dispose",m));const G=b.program;i.updateUBOMapping(O,G);const N=e.render.frame;a[O.id]!==N&&(v(O),a[O.id]=N)}function p(O){const b=_();O.__bindingPointIndex=b;const I=r.createBuffer(),G=O.__size,N=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,I),I}function _(){for(let O=0;O<c;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const b=o[O.id],I=O.uniforms,G=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let N=0,D=I.length;N<D;N++){const K=Array.isArray(I[N])?I[N]:[I[N]];for(let pe=0,T=K.length;pe<T;pe++){const U=K[pe];if(x(U,N,pe,G)===!0){const me=U.__offset,fe=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let se=0;se<fe.length;se++){const ne=fe[se],ce=w(ne);typeof ne=="number"||typeof ne=="boolean"?(U.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,me+z,U.__data)):ne.isMatrix3?(U.__data[0]=ne.elements[0],U.__data[1]=ne.elements[1],U.__data[2]=ne.elements[2],U.__data[3]=0,U.__data[4]=ne.elements[3],U.__data[5]=ne.elements[4],U.__data[6]=ne.elements[5],U.__data[7]=0,U.__data[8]=ne.elements[6],U.__data[9]=ne.elements[7],U.__data[10]=ne.elements[8],U.__data[11]=0):(ne.toArray(U.__data,z),z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,me,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(O,b,I,G){const N=O.value,D=b+"_"+I;if(G[D]===void 0)return typeof N=="number"||typeof N=="boolean"?G[D]=N:G[D]=N.clone(),!0;{const K=G[D];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return G[D]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function y(O){const b=O.uniforms;let I=0;const G=16;for(let D=0,K=b.length;D<K;D++){const pe=Array.isArray(b[D])?b[D]:[b[D]];for(let T=0,U=pe.length;T<U;T++){const me=pe[T],fe=Array.isArray(me.value)?me.value:[me.value];for(let z=0,se=fe.length;z<se;z++){const ne=fe[z],ce=w(ne),te=I%G;te!==0&&G-te<ce.boundary&&(I+=G-te),me.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=I,I+=ce.storage}}}const N=I%G;return N>0&&(I+=G-N),O.__size=I,O.__cache={},this}function w(O){const b={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(b.boundary=4,b.storage=4):O.isVector2?(b.boundary=8,b.storage=8):O.isVector3||O.isColor?(b.boundary=16,b.storage=12):O.isVector4?(b.boundary=16,b.storage=16):O.isMatrix3?(b.boundary=48,b.storage=48):O.isMatrix4?(b.boundary=64,b.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),b}function m(O){const b=O.target;b.removeEventListener("dispose",m);const I=u.indexOf(b.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function g(){for(const O in o)r.deleteBuffer(o[O]);u=[],o={},a={}}return{bind:f,update:d,dispose:g}}class pu{constructor(e={}){const{canvas:t=RE(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),y=new Int32Array(4);let w=null,m=null;const g=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const b=this;let I=!1,G=0,N=0,D=null,K=-1,pe=null;const T=new un,U=new un;let me=null;const fe=new Tt(0);let z=0,se=t.width,ne=t.height,ce=1,te=null,ue=null;const he=new un(0,0,se,ne),Se=new un(0,0,se,ne);let De=!1;const et=new Yp;let Q=!1,ge=!1,Re=null;const Ze=new Wt,Oe=new at,Ce=new X,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return D===null?ce:1}let W=i;function Xt(R,k){for(let Z=0;Z<R.length;Z++){const J=R[Z],q=t.getContext(J,k);if(q!==null)return q}return null}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Me,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&k.shift(),W=Xt(k,R),W===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,je,Ve,Qe,tt,lt,bt,C,M,ee,oe,ve,_e,Ke,He,ye,be,Je,Ee,Nt,rt,Ge,Pe,Fe;function L(){Ue=new Yb(W),je=new zb(W,Ue,e),Ue.init(je),Ge=new Pw(W,Ue,je),Ve=new Cw(W,Ue,je),Qe=new Kb(W),tt=new mw,lt=new Lw(W,Ue,Ve,tt,je,Ge,Qe),bt=new Hb(b),C=new Xb(b),M=new ey(W,je),Pe=new Fb(W,Ue,M,je),ee=new qb(W,M,Qe,Pe),oe=new Qb(W,ee,M,Qe),Ee=new Jb(W,je,lt),ye=new Gb(tt),ve=new pw(b,bt,C,Ue,je,Pe,ye),_e=new zw(b,tt),Ke=new _w,He=new yw(Ue,je),Je=new Ob(b,bt,C,Ve,oe,v,f),be=new Rw(b,oe,je),Fe=new Gw(W,Qe,je,Ve),Nt=new Bb(W,Ue,Qe,je),rt=new $b(W,Ue,Qe,je),Qe.programs=ve.programs,b.capabilities=je,b.extensions=Ue,b.properties=tt,b.renderLists=Ke,b.shadowMap=be,b.state=Ve,b.info=Qe}L();const le=new Fw(b,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(se,ne,!1))},this.getSize=function(R){return R.set(se,ne)},this.setSize=function(R,k,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ne=k,t.width=Math.floor(R*ce),t.height=Math.floor(k*ce),Z===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(se*ce,ne*ce).floor()},this.setDrawingBufferSize=function(R,k,Z){se=R,ne=k,ce=Z,t.width=Math.floor(R*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,k,Z,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,k,Z,J),Ve.viewport(T.copy(he).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,k,Z,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,k,Z,J),Ve.scissor(U.copy(Se).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ve.setScissorTest(De=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,k=!0,Z=!0){let J=0;if(R){let q=!1;if(D!==null){const Le=D.texture.format;q=Le===Pp||Le===Lp||Le===Cp}if(q){const Le=D.texture.type,Be=Le===ur||Le===ar||Le===cu||Le===Nr||Le===Ap||Le===wp,Xe=Je.getClearColor(),Ye=Je.getClearAlpha(),ut=Xe.r,nt=Xe.g,st=Xe.b;Be?(x[0]=ut,x[1]=nt,x[2]=st,x[3]=Ye,W.clearBufferuiv(W.COLOR,0,x)):(y[0]=ut,y[1]=nt,y[2]=st,y[3]=Ye,W.clearBufferiv(W.COLOR,0,y))}else J|=W.COLOR_BUFFER_BIT}k&&(J|=W.DEPTH_BUFFER_BIT),Z&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ke.dispose(),He.dispose(),tt.dispose(),bt.dispose(),C.dispose(),oe.dispose(),Pe.dispose(),Fe.dispose(),ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",Gt),le.removeEventListener("sessionend",Et),Re&&(Re.dispose(),Re=null),Ct.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Qe.autoReset,k=be.enabled,Z=be.autoUpdate,J=be.needsUpdate,q=be.type;L(),Qe.autoReset=R,be.enabled=k,be.autoUpdate=Z,be.needsUpdate=J,be.type=q}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Y(R){const k=R.target;k.removeEventListener("dispose",Y),xe(k)}function xe(R){we(R),tt.remove(R)}function we(R){const k=tt.get(R).programs;k!==void 0&&(k.forEach(function(Z){ve.releaseProgram(Z)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Z,J,q,Le){k===null&&(k=Mt);const Be=q.isMesh&&q.matrixWorld.determinant()<0,Xe=tl(R,k,Z,J,q);Ve.setMaterial(J,Be);let Ye=Z.index,ut=1;if(J.wireframe===!0){if(Ye=ee.getWireframeAttribute(Z),Ye===void 0)return;ut=2}const nt=Z.drawRange,st=Z.attributes.position;let Ht=nt.start*ut,fn=(nt.start+nt.count)*ut;Le!==null&&(Ht=Math.max(Ht,Le.start*ut),fn=Math.min(fn,(Le.start+Le.count)*ut)),Ye!==null?(Ht=Math.max(Ht,0),fn=Math.min(fn,Ye.count)):st!=null&&(Ht=Math.max(Ht,0),fn=Math.min(fn,st.count));const qt=fn-Ht;if(qt<0||qt===1/0)return;Pe.setup(q,J,Xe,Z,Ye);let Jn,Ft=Nt;if(Ye!==null&&(Jn=M.get(Ye),Ft=rt,Ft.setIndex(Jn)),q.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*ke()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(q.isLine){let ct=J.linewidth;ct===void 0&&(ct=1),Ve.setLineWidth(ct*ke()),q.isLineSegments?Ft.setMode(W.LINES):q.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else q.isPoints?Ft.setMode(W.POINTS):q.isSprite&&Ft.setMode(W.TRIANGLES);if(q.isBatchedMesh)Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ft.renderInstances(Ht,qt,q.count);else if(Z.isInstancedBufferGeometry){const ct=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Os=Math.min(Z.instanceCount,ct);Ft.renderInstances(Ht,qt,Os)}else Ft.render(Ht,qt)};function ht(R,k,Z){R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,Vr(R,k,Z),R.side=fr,R.needsUpdate=!0,Vr(R,k,Z),R.side=Gi):Vr(R,k,Z)}this.compile=function(R,k,Z=null){Z===null&&(Z=R),m=He.get(Z),m.init(),O.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==Z&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(b._useLegacyLights);const J=new Set;return R.traverse(function(q){const Le=q.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Xe=Le[Be];ht(Xe,Z,q),J.add(Xe)}else ht(Le,Z,q),J.add(Le)}),O.pop(),m=null,J},this.compileAsync=function(R,k,Z=null){const J=this.compile(R,k,Z);return new Promise(q=>{function Le(){if(J.forEach(function(Be){tt.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){q(R);return}setTimeout(Le,10)}Ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let yt=null;function Rt(R){yt&&yt(R)}function Gt(){Ct.stop()}function Et(){Ct.start()}const Ct=new qp;Ct.setAnimationLoop(Rt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(R){yt=R,le.setAnimationLoop(R),R===null?Ct.stop():Ct.start()},le.addEventListener("sessionstart",Gt),le.addEventListener("sessionend",Et),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,k,D),m=He.get(R,O.length),m.init(),O.push(m),Ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(Ze),ge=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,ge),w=Ke.get(R,g.length),w.init(),g.push(w),rn(R,k,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(te,ue),this.info.render.frame++,Q===!0&&ye.beginShadows();const Z=m.state.shadowsArray;if(be.render(Z,R,k),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Je.render(w,R),m.setupLights(b._useLegacyLights),k.isArrayCamera){const J=k.cameras;for(let q=0,Le=J.length;q<Le;q++){const Be=J[q];jn(w,R,Be,Be.viewport)}}else jn(w,R,k);D!==null&&(lt.updateMultisampleRenderTarget(D),lt.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(b,R,k),Pe.resetDefaultState(),K=-1,pe=null,O.pop(),O.length>0?m=O[O.length-1]:m=null,g.pop(),g.length>0?w=g[g.length-1]:w=null};function rn(R,k,Z,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){J&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);const Be=oe.update(R),Xe=R.material;Xe.visible&&w.push(R,Be,Xe,Z,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const Be=oe.update(R),Xe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Xe)){const Ye=Be.groups;for(let ut=0,nt=Ye.length;ut<nt;ut++){const st=Ye[ut],Ht=Xe[st.materialIndex];Ht&&Ht.visible&&w.push(R,Be,Ht,Z,Ce.z,st)}}else Xe.visible&&w.push(R,Be,Xe,Z,Ce.z,null)}}const Le=R.children;for(let Be=0,Xe=Le.length;Be<Xe;Be++)rn(Le[Be],k,Z,J)}function jn(R,k,Z,J){const q=R.opaque,Le=R.transmissive,Be=R.transparent;m.setupLightsView(Z),Q===!0&&ye.setGlobalState(b.clippingPlanes,Z),Le.length>0&&Gr(q,Le,k,Z),J&&Ve.viewport(T.copy(J)),q.length>0&&Hr(q,k,Z),Le.length>0&&Hr(Le,k,Z),Be.length>0&&Hr(Be,k,Z),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Gr(R,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Le=je.isWebGL2;Re===null&&(Re=new Fr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?fo:ur,minFilter:Ur,samples:Le?4:0})),b.getDrawingBufferSize(Oe),Le?Re.setSize(Oe.x,Oe.y):Re.setSize(Va(Oe.x),Va(Oe.y));const Be=b.getRenderTarget();b.setRenderTarget(Re),b.getClearColor(fe),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear();const Xe=b.toneMapping;b.toneMapping=cr,Hr(R,Z,J),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re);let Ye=!1;for(let ut=0,nt=k.length;ut<nt;ut++){const st=k[ut],Ht=st.object,fn=st.geometry,qt=st.material,Jn=st.group;if(qt.side===Gi&&Ht.layers.test(J.layers)){const Ft=qt.side;qt.side=Pn,qt.needsUpdate=!0,xo(Ht,Z,J,fn,qt,Jn),qt.side=Ft,qt.needsUpdate=!0,Ye=!0}}Ye===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re)),b.setRenderTarget(Be),b.setClearColor(fe,z),b.toneMapping=Xe}function Hr(R,k,Z){const J=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Le=R.length;q<Le;q++){const Be=R[q],Xe=Be.object,Ye=Be.geometry,ut=J===null?Be.material:J,nt=Be.group;Xe.layers.test(Z.layers)&&xo(Xe,k,Z,Ye,ut,nt)}}function xo(R,k,Z,J,q,Le){R.onBeforeRender(b,k,Z,J,q,Le),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(b,k,Z,J,R,Le),q.transparent===!0&&q.side===Gi&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,b.renderBufferDirect(Z,k,J,q,R,Le),q.side=fr,q.needsUpdate=!0,b.renderBufferDirect(Z,k,J,q,R,Le),q.side=Gi):b.renderBufferDirect(Z,k,J,q,R,Le),R.onAfterRender(b,k,Z,J,q,Le)}function Vr(R,k,Z){k.isScene!==!0&&(k=Mt);const J=tt.get(R),q=m.state.lights,Le=m.state.shadowsArray,Be=q.state.version,Xe=ve.getParameters(R,q.state,Le,k,Z),Ye=ve.getProgramCacheKey(Xe);let ut=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?C:bt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ut===void 0&&(R.addEventListener("dispose",Y),ut=new Map,J.programs=ut);let nt=ut.get(Ye);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Be)return Mo(R,Xe),nt}else Xe.uniforms=ve.getUniforms(R),R.onBuild(Z,Xe,b),R.onBeforeCompile(Xe,b),nt=ve.acquireProgram(Xe,Ye),ut.set(Ye,nt),J.uniforms=Xe.uniforms;const st=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ye.uniform),Mo(R,Xe),J.needsLights=Eo(R),J.lightsStateVersion=Be,J.needsLights&&(st.ambientLightColor.value=q.state.ambient,st.lightProbe.value=q.state.probe,st.directionalLights.value=q.state.directional,st.directionalLightShadows.value=q.state.directionalShadow,st.spotLights.value=q.state.spot,st.spotLightShadows.value=q.state.spotShadow,st.rectAreaLights.value=q.state.rectArea,st.ltc_1.value=q.state.rectAreaLTC1,st.ltc_2.value=q.state.rectAreaLTC2,st.pointLights.value=q.state.point,st.pointLightShadows.value=q.state.pointShadow,st.hemisphereLights.value=q.state.hemi,st.directionalShadowMap.value=q.state.directionalShadowMap,st.directionalShadowMatrix.value=q.state.directionalShadowMatrix,st.spotShadowMap.value=q.state.spotShadowMap,st.spotLightMatrix.value=q.state.spotLightMatrix,st.spotLightMap.value=q.state.spotLightMap,st.pointShadowMap.value=q.state.pointShadowMap,st.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function So(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Ua.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Mo(R,k){const Z=tt.get(R);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function tl(R,k,Z,J,q){k.isScene!==!0&&(k=Mt),lt.resetTextureUnits();const Le=k.fog,Be=J.isMeshStandardMaterial?k.environment:null,Xe=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pr,Ye=(J.isMeshStandardMaterial?C:bt).get(J.envMap||Be),ut=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),st=!!Z.morphAttributes.position,Ht=!!Z.morphAttributes.normal,fn=!!Z.morphAttributes.color;let qt=cr;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(qt=b.toneMapping);const Jn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ft=Jn!==void 0?Jn.length:0,ct=tt.get(J),Os=m.state.lights;if(Q===!0&&(ge===!0||R!==pe)){const bn=R===pe&&J.id===K;ye.setState(J,R,bn)}let Dt=!1;J.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Os.state.version||ct.outputColorSpace!==Xe||q.isBatchedMesh&&ct.batching===!1||!q.isBatchedMesh&&ct.batching===!0||q.isInstancedMesh&&ct.instancing===!1||!q.isInstancedMesh&&ct.instancing===!0||q.isSkinnedMesh&&ct.skinning===!1||!q.isSkinnedMesh&&ct.skinning===!0||q.isInstancedMesh&&ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ct.instancingMorph===!1&&q.morphTexture!==null||ct.envMap!==Ye||J.fog===!0&&ct.fog!==Le||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==ye.numPlanes||ct.numIntersection!==ye.numIntersection)||ct.vertexAlphas!==ut||ct.vertexTangents!==nt||ct.morphTargets!==st||ct.morphNormals!==Ht||ct.morphColors!==fn||ct.toneMapping!==qt||je.isWebGL2===!0&&ct.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,ct.__version=J.version);let ui=ct.currentProgram;Dt===!0&&(ui=Vr(J,k,q));let Fs=!1,Mi=!1,Bs=!1;const Jt=ui.getUniforms(),Hn=ct.uniforms;if(Ve.useProgram(ui.program)&&(Fs=!0,Mi=!0,Bs=!0),J.id!==K&&(K=J.id,Mi=!0),Fs||pe!==R){Jt.setValue(W,"projectionMatrix",R.projectionMatrix),Jt.setValue(W,"viewMatrix",R.matrixWorldInverse);const bn=Jt.map.cameraPosition;bn!==void 0&&bn.setValue(W,Ce.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&Jt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Jt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),pe!==R&&(pe=R,Mi=!0,Bs=!0)}if(q.isSkinnedMesh){Jt.setOptional(W,q,"bindMatrix"),Jt.setOptional(W,q,"bindMatrixInverse");const bn=q.skeleton;bn&&(je.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Jt.setValue(W,"boneTexture",bn.boneTexture,lt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Jt.setOptional(W,q,"batchingTexture"),Jt.setValue(W,"batchingTexture",q._matricesTexture,lt));const kr=Z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0&&je.isWebGL2===!0)&&Ee.update(q,Z,ui),(Mi||ct.receiveShadow!==q.receiveShadow)&&(ct.receiveShadow=q.receiveShadow,Jt.setValue(W,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hn.envMap.value=Ye,Hn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Mi&&(Jt.setValue(W,"toneMappingExposure",b.toneMappingExposure),ct.needsLights&&nl(Hn,Bs),Le&&J.fog===!0&&_e.refreshFogUniforms(Hn,Le),_e.refreshMaterialUniforms(Hn,J,ce,ne,Re),Ua.upload(W,So(ct),Hn,lt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ua.upload(W,So(ct),Hn,lt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Jt.setValue(W,"center",q.center),Jt.setValue(W,"modelViewMatrix",q.modelViewMatrix),Jt.setValue(W,"normalMatrix",q.normalMatrix),Jt.setValue(W,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let Wr=0,yo=bn.length;Wr<yo;Wr++)if(je.isWebGL2){const Xr=bn[Wr];Fe.update(Xr,ui),Fe.bind(Xr,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function nl(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Eo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,k,Z){tt.get(R.texture).__webglTexture=k,tt.get(R.depthTexture).__webglTexture=Z;const J=tt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const Z=tt.get(R);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Z=0){D=R,G=k,N=Z;let J=!0,q=null,Le=!1,Be=!1;if(R){const Ye=tt.get(R);Ye.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):Ye.__webglFramebuffer===void 0?lt.setupRenderTarget(R):Ye.__hasExternalTextures&&lt.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const ut=R.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Be=!0);const nt=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[k])?q=nt[k][Z]:q=nt[k],Le=!0):je.isWebGL2&&R.samples>0&&lt.useMultisampledRTT(R)===!1?q=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[Z]:q=nt,T.copy(R.viewport),U.copy(R.scissor),me=R.scissorTest}else T.copy(he).multiplyScalar(ce).floor(),U.copy(Se).multiplyScalar(ce).floor(),me=De;if(Ve.bindFramebuffer(W.FRAMEBUFFER,q)&&je.drawBuffers&&J&&Ve.drawBuffers(R,q),Ve.viewport(T),Ve.scissor(U),Ve.setScissorTest(me),Le){const Ye=tt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ye.__webglTexture,Z)}else if(Be){const Ye=tt.get(R.texture),ut=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,Z||0,ut)}K=-1},this.readRenderTargetPixels=function(R,k,Z,J,q,Le,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Ve.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ye=R.texture,ut=Ye.format,nt=Ye.type;if(ut!==ai&&Ge.convert(ut)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===fo&&(Ue.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(nt!==ur&&Ge.convert(nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===_i&&(je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&Z>=0&&Z<=R.height-q&&W.readPixels(k,Z,J,q,Ge.convert(ut),Ge.convert(nt),Le)}finally{const Ye=D!==null?tt.get(D).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,k,Z=0){const J=Math.pow(2,-Z),q=Math.floor(k.image.width*J),Le=Math.floor(k.image.height*J);lt.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,Z,0,0,R.x,R.y,q,Le),Ve.unbindTexture()},this.copyTextureToTexture=function(R,k,Z,J=0){const q=k.image.width,Le=k.image.height,Be=Ge.convert(Z.format),Xe=Ge.convert(Z.type);lt.setTexture2D(Z,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,q,Le,Be,Xe,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Be,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,Be,Xe,k.image),J===0&&Z.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Z,J,q=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Xe=R.max.z-R.min.z+1,Ye=Ge.convert(J.format),ut=Ge.convert(J.type);let nt;if(J.isData3DTexture)lt.setTexture3D(J,0),nt=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)lt.setTexture2DArray(J,0),nt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const st=W.getParameter(W.UNPACK_ROW_LENGTH),Ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),fn=W.getParameter(W.UNPACK_SKIP_PIXELS),qt=W.getParameter(W.UNPACK_SKIP_ROWS),Jn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ft=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,Ft.data):W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,st),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fn),W.pixelStorei(W.UNPACK_SKIP_ROWS,qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jn),q===0&&J.generateMipmaps&&W.generateMipmap(nt),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){G=0,N=0,D=null,Ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Hw extends pu{}Hw.prototype.isWebGL1Renderer=!0;class Vw extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kw extends yn{constructor(e=null,t=1,i=1,o,a,u,c,f,d=cn,p=cn,_,v){super(null,u,c,f,d,p,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class np extends ci{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Wt,ip=new Wt,Pa=[],rp=new zr,Ww=new Wt,so=new li,oo=new go;class sp extends li{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new np(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Ww)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),rp.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(rp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),oo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Es),ip.multiplyMatrices(i,Es),so.matrixWorld=ip,so.raycast(e,Pa);for(let u=0,c=Pa.length;u<c;u++){const f=Pa[u];f.instanceId=a,f.object=this,t.push(f)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new np(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new kw(new Float32Array(o*this.count),o,this.count,Rp,_i));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mu extends mr{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new X,p=new at;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/e+1)/2,p.y=(u[v+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(c,3)),this.setAttribute("uv",new xi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class op{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);var nu=function(r,e){return nu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},nu(r,e)};function Us(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");nu(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function iu(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ru(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function su(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function Si(r){return typeof r=="function"}function em(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Vc=em(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ou(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Qa=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=iu(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(w){e={error:w}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(Si(p))try{p()}catch(w){a=w instanceof Vc?w.errors:[w]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=iu(_),x=v.next();!x.done;x=v.next()){var y=x.value;try{ap(y)}catch(w){a=a??[],w instanceof Vc?a=su(su([],ru(a)),ru(w.errors)):a.push(w)}}}catch(w){i={error:w}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new Vc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)ap(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&ou(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&ou(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),tm=Qa.EMPTY;function nm(r){return r instanceof Qa||r&&"closed"in r&&Si(r.remove)&&Si(r.add)&&Si(r.unsubscribe)}function ap(r){Si(r)?r():r.unsubscribe()}var im={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},rm={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,su([r,e],ru(t)))},clearTimeout:function(r){var e=rm.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function Xw(r){rm.setTimeout(function(){throw r})}function lp(){}function Na(r){r()}var gu=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,nm(t)&&t.add(i)):i.destination=Kw,i}return e.create=function(t,i,o){return new au(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Qa),Yw=Function.prototype.bind;function kc(r,e){return Yw.call(r,e)}var qw=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Ia(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Ia(i)}else Ia(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Ia(t)}},r}(),au=function(r){Us(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(Si(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&im.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&kc(t.next,c),error:t.error&&kc(t.error,c),complete:t.complete&&kc(t.complete,c)}):u=t}return a.destination=new qw(u),a}return e}(gu);function Ia(r){Xw(r)}function $w(r){throw r}var Kw={closed:!0,next:lp,error:$w,complete:lp},Zw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function sm(r){return r}function jw(r){return r.length===0?sm:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var cp=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=Qw(e)?e:new au(e,t,i);return Na(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=up(t),new t(function(o,a){var u=new au({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[Zw]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return jw(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=up(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function up(r){var e;return(e=r??im.Promise)!==null&&e!==void 0?e:Promise}function Jw(r){return r&&Si(r.next)&&Si(r.error)&&Si(r.complete)}function Qw(r){return r&&r instanceof gu||Jw(r)&&nm(r)}function eR(r){return Si(r==null?void 0:r.lift)}function om(r){return function(e){if(eR(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function am(r,e,t,i,o){return new tR(r,e,t,i,o)}var tR=function(r){Us(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(gu),nR=em(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),lm=function(r){Us(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new fp(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new nR},e.prototype.next=function(t){var i=this;Na(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=iu(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Na(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Na(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?tm:(this.currentObservers=null,c.push(t),new Qa(function(){i.currentObservers=null,ou(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new cp;return t.source=this,t},e.create=function(t,i){return new fp(t,i)},e}(cp),fp=function(r){Us(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:tm},e}(lm),Ns=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(lm);function Oi(r,e){return om(function(t,i){var o=0;t.subscribe(am(i,function(a){i.next(r.call(e,a,o++))}))})}function Fi(r,e){return e===void 0&&(e=sm),r=r??iR,om(function(t,i){var o,a=!0;t.subscribe(am(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function iR(r,e){return r===e}const rR={items:[]},uo=new Ns(rR);function sR(r){const t={...uo.getValue(),items:r};uo.next(t)}const oR=new URL(window.location),hp=new URLSearchParams(oR.search),aR={columns:["X_umap0_norm","X_umap1_norm","global_sphere0_norm","global_sphere1_norm","global_sphere2_norm","clusters"],prefix:hp.has("prefix")?hp.get("prefix"):"75pe",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},Pt=new Ns(aR);function lR(r){const e=Pt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};Pt.next(i)}function cR(r){const t={...Pt.getValue(),genes:r};Pt.next(t)}function uR(r){const t={...Pt.getValue(),groups:r};Pt.next(t)}const fR={scene:new Vw},cm=new Ns(fR),hR={isLoading:!0,theme:"light"},Wa=new Ns(hR);function pi(r){const t={...Wa.getValue(),isLoading:r};Wa.next(t)}const dR=new URL(window.location),dp=new URLSearchParams(dR.search),pR={selectedCelltypes:[],mode:dp.has("mode")?Number(dp.get("mode")):1,selectedSingleGene:"",selectedGenes:[]},_t=new Ns(pR);function po(r){const t={..._t.getValue(),selectedCelltypes:[...new Set(r)]};_t.next(t)}function mR(r){const t={..._t.getValue(),mode:r};_t.next(t)}function mo(r){const t={..._t.getValue(),selectedGenes:r};_t.next(t)}const pp={type:"change"},Wc={type:"start"},mp={type:"end"},Da=new Bp,gp=new sr,gR=Math.cos(70*wE.DEG2RAD);class um extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",He),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pp),i.update(),a=o.NONE},this.update=function(){const L=new X,le=new hr().setFromUnitVectors(e.up,new X(0,1,0)),Ne=le.clone().invert(),F=new X,Me=new hr,Y=new X,xe=2*Math.PI;return function(ht=null){const yt=i.object.position;L.copy(yt).sub(i.target),L.applyQuaternion(le),c.setFromVector3(L),i.autoRotate&&a===o.NONE&&me(T(ht)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Rt=i.minAzimuthAngle,Gt=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(Gt)&&(Rt<-Math.PI?Rt+=xe:Rt>Math.PI&&(Rt-=xe),Gt<-Math.PI?Gt+=xe:Gt>Math.PI&&(Gt-=xe),Rt<=Gt?c.theta=Math.max(Rt,Math.min(Gt,c.theta)):c.theta=c.theta>(Rt+Gt)/2?Math.max(Rt,c.theta):Math.min(Gt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&N||i.object.isOrthographicCamera)c.radius=he(c.radius);else{const Ct=c.radius;c.radius=he(c.radius*d),Et=Ct!=c.radius}if(L.setFromSpherical(c),L.applyQuaternion(Ne),yt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&N){let Ct=null;if(i.object.isPerspectiveCamera){const rn=L.length();Ct=he(rn*d);const jn=rn-Ct;i.object.position.addScaledVector(I,jn),i.object.updateMatrixWorld(),Et=!!jn}else if(i.object.isOrthographicCamera){const rn=new X(G.x,G.y,0);rn.unproject(i.object);const jn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Et=jn!==i.object.zoom;const Gr=new X(G.x,G.y,0);Gr.unproject(i.object),i.object.position.sub(Gr).add(rn),i.object.updateMatrixWorld(),Ct=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ct).add(i.object.position):(Da.origin.copy(i.object.position),Da.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Da.direction))<gR?e.lookAt(i.target):(gp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Da.intersectPlane(gp,i.target))))}else if(i.object.isOrthographicCamera){const Ct=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Ct!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return d=1,N=!1,Et||F.distanceToSquared(i.object.position)>u||8*(1-Me.dot(i.object.quaternion))>u||Y.distanceToSquared(i.target)>u?(i.dispatchEvent(pp),F.copy(i.object.position),Me.copy(i.object.quaternion),Y.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",lt),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new op,f=new op;let d=1;const p=new X,_=new at,v=new at,x=new at,y=new at,w=new at,m=new at,g=new at,O=new at,b=new at,I=new X,G=new at;let N=!1;const D=[],K={};let pe=!1;function T(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function U(L){const le=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*le)}function me(L){f.theta-=L}function fe(L){f.phi-=L}const z=function(){const L=new X;return function(Ne,F){L.setFromMatrixColumn(F,0),L.multiplyScalar(-Ne),p.add(L)}}(),se=function(){const L=new X;return function(Ne,F){i.screenSpacePanning===!0?L.setFromMatrixColumn(F,1):(L.setFromMatrixColumn(F,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ne),p.add(L)}}(),ne=function(){const L=new X;return function(Ne,F){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;L.copy(Y).sub(i.target);let xe=L.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ne*xe/Me.clientHeight,i.object.matrix),se(2*F*xe/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ne*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),se(F*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(L,le){if(!i.zoomToCursor)return;N=!0;const Ne=i.domElement.getBoundingClientRect(),F=L-Ne.left,Me=le-Ne.top,Y=Ne.width,xe=Ne.height;G.x=F/Y*2-1,G.y=-(Me/xe)*2+1,I.set(G.x,G.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function Se(L){_.set(L.clientX,L.clientY)}function De(L){ue(L.clientX,L.clientX),g.set(L.clientX,L.clientY)}function et(L){y.set(L.clientX,L.clientY)}function Q(L){v.set(L.clientX,L.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function ge(L){O.set(L.clientX,L.clientY),b.subVectors(O,g),b.y>0?ce(U(b.y)):b.y<0&&te(U(b.y)),g.copy(O),i.update()}function Re(L){w.set(L.clientX,L.clientY),m.subVectors(w,y).multiplyScalar(i.panSpeed),ne(m.x,m.y),y.copy(w),i.update()}function Ze(L){ue(L.clientX,L.clientY),L.deltaY<0?te(U(L.deltaY)):L.deltaY>0&&ce(U(L.deltaY)),i.update()}function Oe(L){let le=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),le=!0;break}le&&(L.preventDefault(),i.update())}function Ce(L){if(D.length===1)_.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),F=.5*(L.pageY+le.y);_.set(Ne,F)}}function Mt(L){if(D.length===1)y.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),F=.5*(L.pageY+le.y);y.set(Ne,F)}}function ke(L){const le=Pe(L),Ne=L.pageX-le.x,F=L.pageY-le.y,Me=Math.sqrt(Ne*Ne+F*F);g.set(0,Me)}function W(L){i.enableZoom&&ke(L),i.enablePan&&Mt(L)}function Xt(L){i.enableZoom&&ke(L),i.enableRotate&&Ce(L)}function Ue(L){if(D.length==1)v.set(L.pageX,L.pageY);else{const Ne=Pe(L),F=.5*(L.pageX+Ne.x),Me=.5*(L.pageY+Ne.y);v.set(F,Me)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function je(L){if(D.length===1)w.set(L.pageX,L.pageY);else{const le=Pe(L),Ne=.5*(L.pageX+le.x),F=.5*(L.pageY+le.y);w.set(Ne,F)}m.subVectors(w,y).multiplyScalar(i.panSpeed),ne(m.x,m.y),y.copy(w)}function Ve(L){const le=Pe(L),Ne=L.pageX-le.x,F=L.pageY-le.y,Me=Math.sqrt(Ne*Ne+F*F);O.set(0,Me),b.set(0,Math.pow(O.y/g.y,i.zoomSpeed)),ce(b.y),g.copy(O);const Y=(L.pageX+le.x)*.5,xe=(L.pageY+le.y)*.5;ue(Y,xe)}function Qe(L){i.enableZoom&&Ve(L),i.enablePan&&je(L)}function tt(L){i.enableZoom&&Ve(L),i.enableRotate&&Ue(L)}function lt(L){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",bt),i.domElement.addEventListener("pointerup",C)),!rt(L)&&(Ee(L),L.pointerType==="touch"?ye(L):M(L)))}function bt(L){i.enabled!==!1&&(L.pointerType==="touch"?be(L):ee(L))}function C(L){switch(Nt(L),D.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(mp),a=o.NONE;break;case 1:const le=D[0],Ne=K[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function M(L){let le;switch(L.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case zi.DOLLY:if(i.enableZoom===!1)return;De(L),a=o.DOLLY;break;case zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;et(L),a=o.PAN}else{if(i.enableRotate===!1)return;Se(L),a=o.ROTATE}break;case zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;Se(L),a=o.ROTATE}else{if(i.enablePan===!1)return;et(L),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function ee(L){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;Q(L);break;case o.DOLLY:if(i.enableZoom===!1)return;ge(L);break;case o.PAN:if(i.enablePan===!1)return;Re(L);break}}function oe(L){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(L.preventDefault(),i.dispatchEvent(Wc),Ze(ve(L)),i.dispatchEvent(mp))}function ve(L){const le=L.deltaMode,Ne={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return L.ctrlKey&&!pe&&(Ne.deltaY*=10),Ne}function _e(L){L.key==="Control"&&(pe=!0,i.domElement.getRootNode().addEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ke(L){L.key==="Control"&&(pe=!1,i.domElement.getRootNode().removeEventListener("keyup",Ke,{passive:!0,capture:!0}))}function He(L){i.enabled===!1||i.enablePan===!1||Oe(L)}function ye(L){switch(Ge(L),D.length){case 1:switch(i.touches.ONE){case rr.ROTATE:if(i.enableRotate===!1)return;Ce(L),a=o.TOUCH_ROTATE;break;case rr.PAN:if(i.enablePan===!1)return;Mt(L),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(L),a=o.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xt(L),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function be(L){switch(Ge(L),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(L),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;je(L),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Qe(L),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(L),i.update();break;default:a=o.NONE}}function Je(L){i.enabled!==!1&&L.preventDefault()}function Ee(L){D.push(L.pointerId)}function Nt(L){delete K[L.pointerId];for(let le=0;le<D.length;le++)if(D[le]==L.pointerId){D.splice(le,1);return}}function rt(L){for(let le=0;le<D.length;le++)if(D[le]==L.pointerId)return!0;return!1}function Ge(L){let le=K[L.pointerId];le===void 0&&(le=new at,K[L.pointerId]=le),le.set(L.pageX,L.pageY)}function Pe(L){const le=L.pointerId===D[0]?D[1]:D[0];return K[le]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",lt),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Xa.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,x=4,y=1,w=2,m=1,g=2,O=4,b=8,I=16,G=32,N=64,D=128,K=256,pe=512,T=30,U="...",me=800,fe=16,z=1,se=2,ne=3,ce=1/0,te=9007199254740991,ue=17976931348623157e292,he=NaN,Se=4294967295,De=Se-1,et=Se>>>1,Q=[["ary",D],["bind",m],["bindKey",g],["curry",b],["curryRight",I],["flip",pe],["partial",G],["partialRight",N],["rearg",K]],ge="[object Arguments]",Re="[object Array]",Ze="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",Mt="[object DOMException]",ke="[object Error]",W="[object Function]",Xt="[object GeneratorFunction]",Ue="[object Map]",je="[object Number]",Ve="[object Null]",Qe="[object Object]",tt="[object Promise]",lt="[object Proxy]",bt="[object RegExp]",C="[object Set]",M="[object String]",ee="[object Symbol]",oe="[object Undefined]",ve="[object WeakMap]",_e="[object WeakSet]",Ke="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",be="[object Float64Array]",Je="[object Int8Array]",Ee="[object Int16Array]",Nt="[object Int32Array]",rt="[object Uint8Array]",Ge="[object Uint8ClampedArray]",Pe="[object Uint16Array]",Fe="[object Uint32Array]",L=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,Y=RegExp(F.source),xe=RegExp(Me.source),we=/<%-([\s\S]+?)%>/g,ht=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/[\\^$.*+?()[\]{}|]/g,rn=RegExp(Ct.source),jn=/^\s+/,Gr=/\s/,Hr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,xo=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,So=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mo=/[()=,{}\[\]\/\s]/,tl=/\\(\\)?/g,nl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Eo=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",ut="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",Ht=ut+nt+st,fn="\\u2700-\\u27bf",qt="a-z\\xdf-\\xf6\\xf8-\\xff",Jn="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ct="\\u2000-\\u206f",Os=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",ui="\\ufe0e\\ufe0f",Fs=Jn+Ft+ct+Os,Mi="['’]",Bs="["+Ye+"]",Jt="["+Fs+"]",Hn="["+Ht+"]",kr="\\d+",bn="["+fn+"]",Wr="["+qt+"]",yo="[^"+Ye+Fs+kr+fn+qt+Dt+"]",Xr="\\ud83c[\\udffb-\\udfff]",pm="(?:"+Hn+"|"+Xr+")",_u="[^"+Ye+"]",il="(?:\\ud83c[\\udde6-\\uddff]){2}",rl="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="["+Dt+"]",vu="\\u200d",xu="(?:"+Wr+"|"+yo+")",mm="(?:"+Yr+"|"+yo+")",Su="(?:"+Mi+"(?:d|ll|m|re|s|t|ve))?",Mu="(?:"+Mi+"(?:D|LL|M|RE|S|T|VE))?",Eu=pm+"?",yu="["+ui+"]?",gm="(?:"+vu+"(?:"+[_u,il,rl].join("|")+")"+yu+Eu+")*",_m="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Tu=yu+Eu+gm,xm="(?:"+[bn,il,rl].join("|")+")"+Tu,Sm="(?:"+[_u+Hn+"?",Hn,il,rl,Bs].join("|")+")",Mm=RegExp(Mi,"g"),Em=RegExp(Hn,"g"),sl=RegExp(Xr+"(?="+Xr+")|"+Sm+Tu,"g"),ym=RegExp([Yr+"?"+Wr+"+"+Su+"(?="+[Jt,Yr,"$"].join("|")+")",mm+"+"+Mu+"(?="+[Jt,Yr+xu,"$"].join("|")+")",Yr+"?"+xu+"+"+Su,Yr+"+"+Mu,vm,_m,kr,xm].join("|"),"g"),Tm=RegExp("["+vu+Ye+Ht+ui+"]"),bm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Am=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],wm=-1,Bt={};Bt[ye]=Bt[be]=Bt[Je]=Bt[Ee]=Bt[Nt]=Bt[rt]=Bt[Ge]=Bt[Pe]=Bt[Fe]=!0,Bt[ge]=Bt[Re]=Bt[Ke]=Bt[Oe]=Bt[He]=Bt[Ce]=Bt[ke]=Bt[W]=Bt[Ue]=Bt[je]=Bt[Qe]=Bt[bt]=Bt[C]=Bt[M]=Bt[ve]=!1;var Ot={};Ot[ge]=Ot[Re]=Ot[Ke]=Ot[He]=Ot[Oe]=Ot[Ce]=Ot[ye]=Ot[be]=Ot[Je]=Ot[Ee]=Ot[Nt]=Ot[Ue]=Ot[je]=Ot[Qe]=Ot[bt]=Ot[C]=Ot[M]=Ot[ee]=Ot[rt]=Ot[Ge]=Ot[Pe]=Ot[Fe]=!0,Ot[ke]=Ot[W]=Ot[ve]=!1;var Rm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Pm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Im=parseFloat,Dm=parseInt,bu=typeof ao=="object"&&ao&&ao.Object===Object&&ao,Um=typeof self=="object"&&self&&self.Object===Object&&self,an=bu||Um||Function("return this")(),ol=e&&!e.nodeType&&e,gr=ol&&!0&&r&&!r.nodeType&&r,Au=gr&&gr.exports===ol,al=Au&&bu.process,Vn=function(){try{var H=gr&&gr.require&&gr.require("util").types;return H||al&&al.binding&&al.binding("util")}catch{}}(),wu=Vn&&Vn.isArrayBuffer,Ru=Vn&&Vn.isDate,Cu=Vn&&Vn.isMap,Lu=Vn&&Vn.isRegExp,Pu=Vn&&Vn.isSet,Iu=Vn&&Vn.isTypedArray;function In(H,ie,j){switch(j.length){case 0:return H.call(ie);case 1:return H.call(ie,j[0]);case 2:return H.call(ie,j[0],j[1]);case 3:return H.call(ie,j[0],j[1],j[2])}return H.apply(ie,j)}function Nm(H,ie,j,Ie){for(var it=-1,At=H==null?0:H.length;++it<At;){var Qt=H[it];ie(Ie,Qt,j(Qt),H)}return Ie}function kn(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie&&ie(H[j],j,H)!==!1;);return H}function Om(H,ie){for(var j=H==null?0:H.length;j--&&ie(H[j],j,H)!==!1;);return H}function Du(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(!ie(H[j],j,H))return!1;return!0}function ki(H,ie){for(var j=-1,Ie=H==null?0:H.length,it=0,At=[];++j<Ie;){var Qt=H[j];ie(Qt,j,H)&&(At[it++]=Qt)}return At}function To(H,ie){var j=H==null?0:H.length;return!!j&&qr(H,ie,0)>-1}function ll(H,ie,j){for(var Ie=-1,it=H==null?0:H.length;++Ie<it;)if(j(ie,H[Ie]))return!0;return!1}function Vt(H,ie){for(var j=-1,Ie=H==null?0:H.length,it=Array(Ie);++j<Ie;)it[j]=ie(H[j],j,H);return it}function Wi(H,ie){for(var j=-1,Ie=ie.length,it=H.length;++j<Ie;)H[it+j]=ie[j];return H}function cl(H,ie,j,Ie){var it=-1,At=H==null?0:H.length;for(Ie&&At&&(j=H[++it]);++it<At;)j=ie(j,H[it],it,H);return j}function Fm(H,ie,j,Ie){var it=H==null?0:H.length;for(Ie&&it&&(j=H[--it]);it--;)j=ie(j,H[it],it,H);return j}function ul(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(ie(H[j],j,H))return!0;return!1}var Bm=fl("length");function zm(H){return H.split("")}function Gm(H){return H.match(So)||[]}function Uu(H,ie,j){var Ie;return j(H,function(it,At,Qt){if(ie(it,At,Qt))return Ie=At,!1}),Ie}function bo(H,ie,j,Ie){for(var it=H.length,At=j+(Ie?1:-1);Ie?At--:++At<it;)if(ie(H[At],At,H))return At;return-1}function qr(H,ie,j){return ie===ie?Jm(H,ie,j):bo(H,Nu,j)}function Hm(H,ie,j,Ie){for(var it=j-1,At=H.length;++it<At;)if(Ie(H[it],ie))return it;return-1}function Nu(H){return H!==H}function Ou(H,ie){var j=H==null?0:H.length;return j?dl(H,ie)/j:he}function fl(H){return function(ie){return ie==null?t:ie[H]}}function hl(H){return function(ie){return H==null?t:H[ie]}}function Fu(H,ie,j,Ie,it){return it(H,function(At,Qt,Ut){j=Ie?(Ie=!1,At):ie(j,At,Qt,Ut)}),j}function Vm(H,ie){var j=H.length;for(H.sort(ie);j--;)H[j]=H[j].value;return H}function dl(H,ie){for(var j,Ie=-1,it=H.length;++Ie<it;){var At=ie(H[Ie]);At!==t&&(j=j===t?At:j+At)}return j}function pl(H,ie){for(var j=-1,Ie=Array(H);++j<H;)Ie[j]=ie(j);return Ie}function km(H,ie){return Vt(ie,function(j){return[j,H[j]]})}function Bu(H){return H&&H.slice(0,Vu(H)+1).replace(jn,"")}function Dn(H){return function(ie){return H(ie)}}function ml(H,ie){return Vt(ie,function(j){return H[j]})}function zs(H,ie){return H.has(ie)}function zu(H,ie){for(var j=-1,Ie=H.length;++j<Ie&&qr(ie,H[j],0)>-1;);return j}function Gu(H,ie){for(var j=H.length;j--&&qr(ie,H[j],0)>-1;);return j}function Wm(H,ie){for(var j=H.length,Ie=0;j--;)H[j]===ie&&++Ie;return Ie}var Xm=hl(Rm),Ym=hl(Cm);function qm(H){return"\\"+Pm[H]}function $m(H,ie){return H==null?t:H[ie]}function $r(H){return Tm.test(H)}function Km(H){return bm.test(H)}function Zm(H){for(var ie,j=[];!(ie=H.next()).done;)j.push(ie.value);return j}function gl(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie,it){j[++ie]=[it,Ie]}),j}function Hu(H,ie){return function(j){return H(ie(j))}}function Xi(H,ie){for(var j=-1,Ie=H.length,it=0,At=[];++j<Ie;){var Qt=H[j];(Qt===ie||Qt===p)&&(H[j]=p,At[it++]=j)}return At}function Ao(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=Ie}),j}function jm(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=[Ie,Ie]}),j}function Jm(H,ie,j){for(var Ie=j-1,it=H.length;++Ie<it;)if(H[Ie]===ie)return Ie;return-1}function Qm(H,ie,j){for(var Ie=j+1;Ie--;)if(H[Ie]===ie)return Ie;return Ie}function Kr(H){return $r(H)?tg(H):Bm(H)}function Qn(H){return $r(H)?ng(H):zm(H)}function Vu(H){for(var ie=H.length;ie--&&Gr.test(H.charAt(ie)););return ie}var eg=hl(Lm);function tg(H){for(var ie=sl.lastIndex=0;sl.test(H);)++ie;return ie}function ng(H){return H.match(sl)||[]}function ig(H){return H.match(ym)||[]}var rg=function H(ie){ie=ie==null?an:Zr.defaults(an.Object(),ie,Zr.pick(an,Am));var j=ie.Array,Ie=ie.Date,it=ie.Error,At=ie.Function,Qt=ie.Math,Ut=ie.Object,_l=ie.RegExp,sg=ie.String,Wn=ie.TypeError,wo=j.prototype,og=At.prototype,jr=Ut.prototype,Ro=ie["__core-js_shared__"],Co=og.toString,Lt=jr.hasOwnProperty,ag=0,ku=function(){var n=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Lo=jr.toString,lg=Co.call(Ut),cg=an._,ug=_l("^"+Co.call(Lt).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=Au?ie.Buffer:t,Yi=ie.Symbol,Io=ie.Uint8Array,Wu=Po?Po.allocUnsafe:t,Do=Hu(Ut.getPrototypeOf,Ut),Xu=Ut.create,Yu=jr.propertyIsEnumerable,Uo=wo.splice,qu=Yi?Yi.isConcatSpreadable:t,Gs=Yi?Yi.iterator:t,_r=Yi?Yi.toStringTag:t,No=function(){try{var n=Er(Ut,"defineProperty");return n({},"",{}),n}catch{}}(),fg=ie.clearTimeout!==an.clearTimeout&&ie.clearTimeout,hg=Ie&&Ie.now!==an.Date.now&&Ie.now,dg=ie.setTimeout!==an.setTimeout&&ie.setTimeout,Oo=Qt.ceil,Fo=Qt.floor,vl=Ut.getOwnPropertySymbols,pg=Po?Po.isBuffer:t,$u=ie.isFinite,mg=wo.join,gg=Hu(Ut.keys,Ut),en=Qt.max,hn=Qt.min,_g=Ie.now,vg=ie.parseInt,Ku=Qt.random,xg=wo.reverse,xl=Er(ie,"DataView"),Hs=Er(ie,"Map"),Sl=Er(ie,"Promise"),Jr=Er(ie,"Set"),Vs=Er(ie,"WeakMap"),ks=Er(Ut,"create"),Bo=Vs&&new Vs,Qr={},Sg=yr(xl),Mg=yr(Hs),Eg=yr(Sl),yg=yr(Jr),Tg=yr(Vs),zo=Yi?Yi.prototype:t,Ws=zo?zo.valueOf:t,Zu=zo?zo.toString:t;function E(n){if(Yt(n)&&!ot(n)&&!(n instanceof xt)){if(n instanceof Xn)return n;if(Lt.call(n,"__wrapped__"))return Jf(n)}return new Xn(n)}var es=function(){function n(){}return function(s){if(!kt(s))return{};if(Xu)return Xu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Go(){}function Xn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}E.templateSettings={escape:we,evaluate:ht,interpolate:yt,variable:"",imports:{_:E}},E.prototype=Go.prototype,E.prototype.constructor=E,Xn.prototype=es(Go.prototype),Xn.prototype.constructor=Xn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function bg(){var n=new xt(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function Ag(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function wg(){var n=this.__wrapped__.value(),s=this.__dir__,l=ot(n),h=s<0,S=l?n.length:0,A=z_(0,S,this.__views__),P=A.start,B=A.end,V=B-P,re=h?B:P-1,ae=this.__iteratees__,de=ae.length,Ae=0,ze=hn(V,this.__takeCount__);if(!l||!h&&S==V&&ze==V)return Mf(n,this.__actions__);var qe=[];e:for(;V--&&Ae<ze;){re+=s;for(var dt=-1,$e=n[re];++dt<de;){var vt=ae[dt],St=vt.iteratee,On=vt.type,xn=St($e);if(On==se)$e=xn;else if(!xn){if(On==z)continue e;break e}}qe[Ae++]=$e}return qe}xt.prototype=es(Go.prototype),xt.prototype.constructor=xt;function vr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Rg(){this.__data__=ks?ks(null):{},this.size=0}function Cg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Lg(n){var s=this.__data__;if(ks){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function Pg(n){var s=this.__data__;return ks?s[n]!==t:Lt.call(s,n)}function Ig(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=ks&&s===t?f:s,this}vr.prototype.clear=Rg,vr.prototype.delete=Cg,vr.prototype.get=Lg,vr.prototype.has=Pg,vr.prototype.set=Ig;function Ei(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Dg(){this.__data__=[],this.size=0}function Ug(n){var s=this.__data__,l=Ho(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Uo.call(s,l,1),--this.size,!0}function Ng(n){var s=this.__data__,l=Ho(s,n);return l<0?t:s[l][1]}function Og(n){return Ho(this.__data__,n)>-1}function Fg(n,s){var l=this.__data__,h=Ho(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ei.prototype.clear=Dg,Ei.prototype.delete=Ug,Ei.prototype.get=Ng,Ei.prototype.has=Og,Ei.prototype.set=Fg;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Bg(){this.size=0,this.__data__={hash:new vr,map:new(Hs||Ei),string:new vr}}function zg(n){var s=Qo(this,n).delete(n);return this.size-=s?1:0,s}function Gg(n){return Qo(this,n).get(n)}function Hg(n){return Qo(this,n).has(n)}function Vg(n,s){var l=Qo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}yi.prototype.clear=Bg,yi.prototype.delete=zg,yi.prototype.get=Gg,yi.prototype.has=Hg,yi.prototype.set=Vg;function xr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new yi;++s<l;)this.add(n[s])}function kg(n){return this.__data__.set(n,f),this}function Wg(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=kg,xr.prototype.has=Wg;function ei(n){var s=this.__data__=new Ei(n);this.size=s.size}function Xg(){this.__data__=new Ei,this.size=0}function Yg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function qg(n){return this.__data__.get(n)}function $g(n){return this.__data__.has(n)}function Kg(n,s){var l=this.__data__;if(l instanceof Ei){var h=l.__data__;if(!Hs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new yi(h)}return l.set(n,s),this.size=l.size,this}ei.prototype.clear=Xg,ei.prototype.delete=Yg,ei.prototype.get=qg,ei.prototype.has=$g,ei.prototype.set=Kg;function ju(n,s){var l=ot(n),h=!l&&Tr(n),S=!l&&!h&&ji(n),A=!l&&!h&&!S&&rs(n),P=l||h||S||A,B=P?pl(n.length,sg):[],V=B.length;for(var re in n)(s||Lt.call(n,re))&&!(P&&(re=="length"||S&&(re=="offset"||re=="parent")||A&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||wi(re,V)))&&B.push(re);return B}function Ju(n){var s=n.length;return s?n[Pl(0,s-1)]:t}function Zg(n,s){return ea(An(n),Sr(s,0,n.length))}function jg(n){return ea(An(n))}function Ml(n,s,l){(l!==t&&!ti(n[s],l)||l===t&&!(s in n))&&Ti(n,s,l)}function Xs(n,s,l){var h=n[s];(!(Lt.call(n,s)&&ti(h,l))||l===t&&!(s in n))&&Ti(n,s,l)}function Ho(n,s){for(var l=n.length;l--;)if(ti(n[l][0],s))return l;return-1}function Jg(n,s,l,h){return qi(n,function(S,A,P){s(h,S,l(S),P)}),h}function Qu(n,s){return n&&hi(s,sn(s),n)}function Qg(n,s){return n&&hi(s,Rn(s),n)}function Ti(n,s,l){s=="__proto__"&&No?No(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function El(n,s){for(var l=-1,h=s.length,S=j(h),A=n==null;++l<h;)S[l]=A?t:nc(n,s[l]);return S}function Sr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,S,A){var P,B=s&_,V=s&v,re=s&x;if(l&&(P=S?l(n,h,S,A):l(n)),P!==t)return P;if(!kt(n))return n;var ae=ot(n);if(ae){if(P=H_(n),!B)return An(n,P)}else{var de=dn(n),Ae=de==W||de==Xt;if(ji(n))return Tf(n,B);if(de==Qe||de==ge||Ae&&!S){if(P=V||Ae?{}:kf(n),!B)return V?L_(n,Qg(P,n)):C_(n,Qu(P,n))}else{if(!Ot[de])return S?n:{};P=V_(n,de,B)}}A||(A=new ei);var ze=A.get(n);if(ze)return ze;A.set(n,P),vh(n)?n.forEach(function($e){P.add(Yn($e,s,l,$e,n,A))}):gh(n)&&n.forEach(function($e,vt){P.set(vt,Yn($e,s,l,vt,n,A))});var qe=re?V?Vl:Hl:V?Rn:sn,dt=ae?t:qe(n);return kn(dt||n,function($e,vt){dt&&(vt=$e,$e=n[vt]),Xs(P,vt,Yn($e,s,l,vt,n,A))}),P}function e_(n){var s=sn(n);return function(l){return ef(l,n,s)}}function ef(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ut(n);h--;){var S=l[h],A=s[S],P=n[S];if(P===t&&!(S in n)||!A(P))return!1}return!0}function tf(n,s,l){if(typeof n!="function")throw new Wn(u);return Js(function(){n.apply(t,l)},s)}function Ys(n,s,l,h){var S=-1,A=To,P=!0,B=n.length,V=[],re=s.length;if(!B)return V;l&&(s=Vt(s,Dn(l))),h?(A=ll,P=!1):s.length>=o&&(A=zs,P=!1,s=new xr(s));e:for(;++S<B;){var ae=n[S],de=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,P&&de===de){for(var Ae=re;Ae--;)if(s[Ae]===de)continue e;V.push(ae)}else A(s,de,h)||V.push(ae)}return V}var qi=Cf(fi),nf=Cf(Tl,!0);function t_(n,s){var l=!0;return qi(n,function(h,S,A){return l=!!s(h,S,A),l}),l}function Vo(n,s,l){for(var h=-1,S=n.length;++h<S;){var A=n[h],P=s(A);if(P!=null&&(B===t?P===P&&!Nn(P):l(P,B)))var B=P,V=A}return V}function n_(n,s,l,h){var S=n.length;for(l=ft(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ft(h),h<0&&(h+=S),h=l>h?0:Sh(h);l<h;)n[l++]=s;return n}function rf(n,s){var l=[];return qi(n,function(h,S,A){s(h,S,A)&&l.push(h)}),l}function ln(n,s,l,h,S){var A=-1,P=n.length;for(l||(l=W_),S||(S=[]);++A<P;){var B=n[A];s>0&&l(B)?s>1?ln(B,s-1,l,h,S):Wi(S,B):h||(S[S.length]=B)}return S}var yl=Lf(),sf=Lf(!0);function fi(n,s){return n&&yl(n,s,sn)}function Tl(n,s){return n&&sf(n,s,sn)}function ko(n,s){return ki(s,function(l){return Ri(n[l])})}function Mr(n,s){s=Ki(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[di(s[l++])];return l&&l==h?n:t}function of(n,s,l){var h=s(n);return ot(n)?h:Wi(h,l(n))}function _n(n){return n==null?n===t?oe:Ve:_r&&_r in Ut(n)?B_(n):j_(n)}function bl(n,s){return n>s}function i_(n,s){return n!=null&&Lt.call(n,s)}function r_(n,s){return n!=null&&s in Ut(n)}function s_(n,s,l){return n>=hn(s,l)&&n<en(s,l)}function Al(n,s,l){for(var h=l?ll:To,S=n[0].length,A=n.length,P=A,B=j(A),V=1/0,re=[];P--;){var ae=n[P];P&&s&&(ae=Vt(ae,Dn(s))),V=hn(ae.length,V),B[P]=!l&&(s||S>=120&&ae.length>=120)?new xr(P&&ae):t}ae=n[0];var de=-1,Ae=B[0];e:for(;++de<S&&re.length<V;){var ze=ae[de],qe=s?s(ze):ze;if(ze=l||ze!==0?ze:0,!(Ae?zs(Ae,qe):h(re,qe,l))){for(P=A;--P;){var dt=B[P];if(!(dt?zs(dt,qe):h(n[P],qe,l)))continue e}Ae&&Ae.push(qe),re.push(ze)}}return re}function o_(n,s,l,h){return fi(n,function(S,A,P){s(h,l(S),A,P)}),h}function qs(n,s,l){s=Ki(s,n),n=qf(n,s);var h=n==null?n:n[di($n(s))];return h==null?t:In(h,n,l)}function af(n){return Yt(n)&&_n(n)==ge}function a_(n){return Yt(n)&&_n(n)==Ke}function l_(n){return Yt(n)&&_n(n)==Ce}function $s(n,s,l,h,S){return n===s?!0:n==null||s==null||!Yt(n)&&!Yt(s)?n!==n&&s!==s:c_(n,s,l,h,$s,S)}function c_(n,s,l,h,S,A){var P=ot(n),B=ot(s),V=P?Re:dn(n),re=B?Re:dn(s);V=V==ge?Qe:V,re=re==ge?Qe:re;var ae=V==Qe,de=re==Qe,Ae=V==re;if(Ae&&ji(n)){if(!ji(s))return!1;P=!0,ae=!1}if(Ae&&!ae)return A||(A=new ei),P||rs(n)?Gf(n,s,l,h,S,A):O_(n,s,V,l,h,S,A);if(!(l&y)){var ze=ae&&Lt.call(n,"__wrapped__"),qe=de&&Lt.call(s,"__wrapped__");if(ze||qe){var dt=ze?n.value():n,$e=qe?s.value():s;return A||(A=new ei),S(dt,$e,l,h,A)}}return Ae?(A||(A=new ei),F_(n,s,l,h,S,A)):!1}function u_(n){return Yt(n)&&dn(n)==Ue}function wl(n,s,l,h){var S=l.length,A=S,P=!h;if(n==null)return!A;for(n=Ut(n);S--;){var B=l[S];if(P&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++S<A;){B=l[S];var V=B[0],re=n[V],ae=B[1];if(P&&B[2]){if(re===t&&!(V in n))return!1}else{var de=new ei;if(h)var Ae=h(re,ae,V,n,s,de);if(!(Ae===t?$s(ae,re,y|w,h,de):Ae))return!1}}return!0}function lf(n){if(!kt(n)||Y_(n))return!1;var s=Ri(n)?ug:Z;return s.test(yr(n))}function f_(n){return Yt(n)&&_n(n)==bt}function h_(n){return Yt(n)&&dn(n)==C}function d_(n){return Yt(n)&&oa(n.length)&&!!Bt[_n(n)]}function cf(n){return typeof n=="function"?n:n==null?Cn:typeof n=="object"?ot(n)?hf(n[0],n[1]):ff(n):Ph(n)}function Rl(n){if(!js(n))return gg(n);var s=[];for(var l in Ut(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function p_(n){if(!kt(n))return Z_(n);var s=js(n),l=[];for(var h in n)h=="constructor"&&(s||!Lt.call(n,h))||l.push(h);return l}function Cl(n,s){return n<s}function uf(n,s){var l=-1,h=wn(n)?j(n.length):[];return qi(n,function(S,A,P){h[++l]=s(S,A,P)}),h}function ff(n){var s=Wl(n);return s.length==1&&s[0][2]?Xf(s[0][0],s[0][1]):function(l){return l===n||wl(l,n,s)}}function hf(n,s){return Yl(n)&&Wf(s)?Xf(di(n),s):function(l){var h=nc(l,n);return h===t&&h===s?ic(l,n):$s(s,h,y|w)}}function Wo(n,s,l,h,S){n!==s&&yl(s,function(A,P){if(S||(S=new ei),kt(A))m_(n,s,P,l,Wo,h,S);else{var B=h?h($l(n,P),A,P+"",n,s,S):t;B===t&&(B=A),Ml(n,P,B)}},Rn)}function m_(n,s,l,h,S,A,P){var B=$l(n,l),V=$l(s,l),re=P.get(V);if(re){Ml(n,l,re);return}var ae=A?A(B,V,l+"",n,s,P):t,de=ae===t;if(de){var Ae=ot(V),ze=!Ae&&ji(V),qe=!Ae&&!ze&&rs(V);ae=V,Ae||ze||qe?ot(B)?ae=B:$t(B)?ae=An(B):ze?(de=!1,ae=Tf(V,!0)):qe?(de=!1,ae=bf(V,!0)):ae=[]:Qs(V)||Tr(V)?(ae=B,Tr(B)?ae=Mh(B):(!kt(B)||Ri(B))&&(ae=kf(V))):de=!1}de&&(P.set(V,ae),S(ae,V,h,A,P),P.delete(V)),Ml(n,l,ae)}function df(n,s){var l=n.length;if(l)return s+=s<0?l:0,wi(s,l)?n[s]:t}function pf(n,s,l){s.length?s=Vt(s,function(A){return ot(A)?function(P){return Mr(P,A.length===1?A[0]:A)}:A}):s=[Cn];var h=-1;s=Vt(s,Dn(We()));var S=uf(n,function(A,P,B){var V=Vt(s,function(re){return re(A)});return{criteria:V,index:++h,value:A}});return Vm(S,function(A,P){return R_(A,P,l)})}function g_(n,s){return mf(n,s,function(l,h){return ic(n,h)})}function mf(n,s,l){for(var h=-1,S=s.length,A={};++h<S;){var P=s[h],B=Mr(n,P);l(B,P)&&Ks(A,Ki(P,n),B)}return A}function __(n){return function(s){return Mr(s,n)}}function Ll(n,s,l,h){var S=h?Hm:qr,A=-1,P=s.length,B=n;for(n===s&&(s=An(s)),l&&(B=Vt(n,Dn(l)));++A<P;)for(var V=0,re=s[A],ae=l?l(re):re;(V=S(B,ae,V,h))>-1;)B!==n&&Uo.call(B,V,1),Uo.call(n,V,1);return n}function gf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==A){var A=S;wi(S)?Uo.call(n,S,1):Ul(n,S)}}return n}function Pl(n,s){return n+Fo(Ku()*(s-n+1))}function v_(n,s,l,h){for(var S=-1,A=en(Oo((s-n)/(l||1)),0),P=j(A);A--;)P[h?A:++S]=n,n+=l;return P}function Il(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Fo(s/2),s&&(n+=n);while(s);return l}function gt(n,s){return Kl(Yf(n,s,Cn),n+"")}function x_(n){return Ju(ss(n))}function S_(n,s){var l=ss(n);return ea(l,Sr(s,0,l.length))}function Ks(n,s,l,h){if(!kt(n))return n;s=Ki(s,n);for(var S=-1,A=s.length,P=A-1,B=n;B!=null&&++S<A;){var V=di(s[S]),re=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(S!=P){var ae=B[V];re=h?h(ae,V,B):t,re===t&&(re=kt(ae)?ae:wi(s[S+1])?[]:{})}Xs(B,V,re),B=B[V]}return n}var _f=Bo?function(n,s){return Bo.set(n,s),n}:Cn,M_=No?function(n,s){return No(n,"toString",{configurable:!0,enumerable:!1,value:sc(s),writable:!0})}:Cn;function E_(n){return ea(ss(n))}function qn(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var A=j(S);++h<S;)A[h]=n[h+s];return A}function y_(n,s){var l;return qi(n,function(h,S,A){return l=s(h,S,A),!l}),!!l}function Xo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=et){for(;h<S;){var A=h+S>>>1,P=n[A];P!==null&&!Nn(P)&&(l?P<=s:P<s)?h=A+1:S=A}return S}return Dl(n,s,Cn,l)}function Dl(n,s,l,h){var S=0,A=n==null?0:n.length;if(A===0)return 0;s=l(s);for(var P=s!==s,B=s===null,V=Nn(s),re=s===t;S<A;){var ae=Fo((S+A)/2),de=l(n[ae]),Ae=de!==t,ze=de===null,qe=de===de,dt=Nn(de);if(P)var $e=h||qe;else re?$e=qe&&(h||Ae):B?$e=qe&&Ae&&(h||!ze):V?$e=qe&&Ae&&!ze&&(h||!dt):ze||dt?$e=!1:$e=h?de<=s:de<s;$e?S=ae+1:A=ae}return hn(A,De)}function vf(n,s){for(var l=-1,h=n.length,S=0,A=[];++l<h;){var P=n[l],B=s?s(P):P;if(!l||!ti(B,V)){var V=B;A[S++]=P===0?0:P}}return A}function xf(n){return typeof n=="number"?n:Nn(n)?he:+n}function Un(n){if(typeof n=="string")return n;if(ot(n))return Vt(n,Un)+"";if(Nn(n))return Zu?Zu.call(n):"";var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function $i(n,s,l){var h=-1,S=To,A=n.length,P=!0,B=[],V=B;if(l)P=!1,S=ll;else if(A>=o){var re=s?null:U_(n);if(re)return Ao(re);P=!1,S=zs,V=new xr}else V=s?[]:B;e:for(;++h<A;){var ae=n[h],de=s?s(ae):ae;if(ae=l||ae!==0?ae:0,P&&de===de){for(var Ae=V.length;Ae--;)if(V[Ae]===de)continue e;s&&V.push(de),B.push(ae)}else S(V,de,l)||(V!==B&&V.push(de),B.push(ae))}return B}function Ul(n,s){return s=Ki(s,n),n=qf(n,s),n==null||delete n[di($n(s))]}function Sf(n,s,l,h){return Ks(n,s,l(Mr(n,s)),h)}function Yo(n,s,l,h){for(var S=n.length,A=h?S:-1;(h?A--:++A<S)&&s(n[A],A,n););return l?qn(n,h?0:A,h?A+1:S):qn(n,h?A+1:0,h?S:A)}function Mf(n,s){var l=n;return l instanceof xt&&(l=l.value()),cl(s,function(h,S){return S.func.apply(S.thisArg,Wi([h],S.args))},l)}function Nl(n,s,l){var h=n.length;if(h<2)return h?$i(n[0]):[];for(var S=-1,A=j(h);++S<h;)for(var P=n[S],B=-1;++B<h;)B!=S&&(A[S]=Ys(A[S]||P,n[B],s,l));return $i(ln(A,1),s,l)}function Ef(n,s,l){for(var h=-1,S=n.length,A=s.length,P={};++h<S;){var B=h<A?s[h]:t;l(P,n[h],B)}return P}function Ol(n){return $t(n)?n:[]}function Fl(n){return typeof n=="function"?n:Cn}function Ki(n,s){return ot(n)?n:Yl(n,s)?[n]:jf(wt(n))}var T_=gt;function Zi(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:qn(n,s,l)}var yf=fg||function(n){return an.clearTimeout(n)};function Tf(n,s){if(s)return n.slice();var l=n.length,h=Wu?Wu(l):new n.constructor(l);return n.copy(h),h}function Bl(n){var s=new n.constructor(n.byteLength);return new Io(s).set(new Io(n)),s}function b_(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function A_(n){var s=new n.constructor(n.source,Eo.exec(n));return s.lastIndex=n.lastIndex,s}function w_(n){return Ws?Ut(Ws.call(n)):{}}function bf(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Af(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,A=Nn(n),P=s!==t,B=s===null,V=s===s,re=Nn(s);if(!B&&!re&&!A&&n>s||A&&P&&V&&!B&&!re||h&&P&&V||!l&&V||!S)return 1;if(!h&&!A&&!re&&n<s||re&&l&&S&&!h&&!A||B&&l&&S||!P&&S||!V)return-1}return 0}function R_(n,s,l){for(var h=-1,S=n.criteria,A=s.criteria,P=S.length,B=l.length;++h<P;){var V=Af(S[h],A[h]);if(V){if(h>=B)return V;var re=l[h];return V*(re=="desc"?-1:1)}}return n.index-s.index}function wf(n,s,l,h){for(var S=-1,A=n.length,P=l.length,B=-1,V=s.length,re=en(A-P,0),ae=j(V+re),de=!h;++B<V;)ae[B]=s[B];for(;++S<P;)(de||S<A)&&(ae[l[S]]=n[S]);for(;re--;)ae[B++]=n[S++];return ae}function Rf(n,s,l,h){for(var S=-1,A=n.length,P=-1,B=l.length,V=-1,re=s.length,ae=en(A-B,0),de=j(ae+re),Ae=!h;++S<ae;)de[S]=n[S];for(var ze=S;++V<re;)de[ze+V]=s[V];for(;++P<B;)(Ae||S<A)&&(de[ze+l[P]]=n[S++]);return de}function An(n,s){var l=-1,h=n.length;for(s||(s=j(h));++l<h;)s[l]=n[l];return s}function hi(n,s,l,h){var S=!l;l||(l={});for(var A=-1,P=s.length;++A<P;){var B=s[A],V=h?h(l[B],n[B],B,l,n):t;V===t&&(V=n[B]),S?Ti(l,B,V):Xs(l,B,V)}return l}function C_(n,s){return hi(n,Xl(n),s)}function L_(n,s){return hi(n,Hf(n),s)}function qo(n,s){return function(l,h){var S=ot(l)?Nm:Jg,A=s?s():{};return S(l,n,We(h,2),A)}}function ts(n){return gt(function(s,l){var h=-1,S=l.length,A=S>1?l[S-1]:t,P=S>2?l[2]:t;for(A=n.length>3&&typeof A=="function"?(S--,A):t,P&&vn(l[0],l[1],P)&&(A=S<3?t:A,S=1),s=Ut(s);++h<S;){var B=l[h];B&&n(s,B,h,A)}return s})}function Cf(n,s){return function(l,h){if(l==null)return l;if(!wn(l))return n(l,h);for(var S=l.length,A=s?S:-1,P=Ut(l);(s?A--:++A<S)&&h(P[A],A,P)!==!1;);return l}}function Lf(n){return function(s,l,h){for(var S=-1,A=Ut(s),P=h(s),B=P.length;B--;){var V=P[n?B:++S];if(l(A[V],V,A)===!1)break}return s}}function P_(n,s,l){var h=s&m,S=Zs(n);function A(){var P=this&&this!==an&&this instanceof A?S:n;return P.apply(h?l:this,arguments)}return A}function Pf(n){return function(s){s=wt(s);var l=$r(s)?Qn(s):t,h=l?l[0]:s.charAt(0),S=l?Zi(l,1).join(""):s.slice(1);return h[n]()+S}}function ns(n){return function(s){return cl(Ch(Rh(s).replace(Mm,"")),n,"")}}function Zs(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=es(n.prototype),h=n.apply(l,s);return kt(h)?h:l}}function I_(n,s,l){var h=Zs(n);function S(){for(var A=arguments.length,P=j(A),B=A,V=is(S);B--;)P[B]=arguments[B];var re=A<3&&P[0]!==V&&P[A-1]!==V?[]:Xi(P,V);if(A-=re.length,A<l)return Of(n,s,$o,S.placeholder,t,P,re,t,t,l-A);var ae=this&&this!==an&&this instanceof S?h:n;return In(ae,this,P)}return S}function If(n){return function(s,l,h){var S=Ut(s);if(!wn(s)){var A=We(l,3);s=sn(s),l=function(B){return A(S[B],B,S)}}var P=n(s,l,h);return P>-1?S[A?s[P]:P]:t}}function Df(n){return Ai(function(s){var l=s.length,h=l,S=Xn.prototype.thru;for(n&&s.reverse();h--;){var A=s[h];if(typeof A!="function")throw new Wn(u);if(S&&!P&&Jo(A)=="wrapper")var P=new Xn([],!0)}for(h=P?h:l;++h<l;){A=s[h];var B=Jo(A),V=B=="wrapper"?kl(A):t;V&&ql(V[0])&&V[1]==(D|b|G|K)&&!V[4].length&&V[9]==1?P=P[Jo(V[0])].apply(P,V[3]):P=A.length==1&&ql(A)?P[B]():P.thru(A)}return function(){var re=arguments,ae=re[0];if(P&&re.length==1&&ot(ae))return P.plant(ae).value();for(var de=0,Ae=l?s[de].apply(this,re):ae;++de<l;)Ae=s[de].call(this,Ae);return Ae}})}function $o(n,s,l,h,S,A,P,B,V,re){var ae=s&D,de=s&m,Ae=s&g,ze=s&(b|I),qe=s&pe,dt=Ae?t:Zs(n);function $e(){for(var vt=arguments.length,St=j(vt),On=vt;On--;)St[On]=arguments[On];if(ze)var xn=is($e),Fn=Wm(St,xn);if(h&&(St=wf(St,h,S,ze)),A&&(St=Rf(St,A,P,ze)),vt-=Fn,ze&&vt<re){var Kt=Xi(St,xn);return Of(n,s,$o,$e.placeholder,l,St,Kt,B,V,re-vt)}var ni=de?l:this,Li=Ae?ni[n]:n;return vt=St.length,B?St=J_(St,B):qe&&vt>1&&St.reverse(),ae&&V<vt&&(St.length=V),this&&this!==an&&this instanceof $e&&(Li=dt||Zs(Li)),Li.apply(ni,St)}return $e}function Uf(n,s){return function(l,h){return o_(l,n,s(h),{})}}function Ko(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Un(l),h=Un(h)):(l=xf(l),h=xf(h)),S=n(l,h)}return S}}function zl(n){return Ai(function(s){return s=Vt(s,Dn(We())),gt(function(l){var h=this;return n(s,function(S){return In(S,h,l)})})})}function Zo(n,s){s=s===t?" ":Un(s);var l=s.length;if(l<2)return l?Il(s,n):s;var h=Il(s,Oo(n/Kr(s)));return $r(s)?Zi(Qn(h),0,n).join(""):h.slice(0,n)}function D_(n,s,l,h){var S=s&m,A=Zs(n);function P(){for(var B=-1,V=arguments.length,re=-1,ae=h.length,de=j(ae+V),Ae=this&&this!==an&&this instanceof P?A:n;++re<ae;)de[re]=h[re];for(;V--;)de[re++]=arguments[++B];return In(Ae,S?l:this,de)}return P}function Nf(n){return function(s,l,h){return h&&typeof h!="number"&&vn(s,l,h)&&(l=h=t),s=Ci(s),l===t?(l=s,s=0):l=Ci(l),h=h===t?s<l?1:-1:Ci(h),v_(s,l,h,n)}}function jo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Kn(s),l=Kn(l)),n(s,l)}}function Of(n,s,l,h,S,A,P,B,V,re){var ae=s&b,de=ae?P:t,Ae=ae?t:P,ze=ae?A:t,qe=ae?t:A;s|=ae?G:N,s&=~(ae?N:G),s&O||(s&=~(m|g));var dt=[n,s,S,ze,de,qe,Ae,B,V,re],$e=l.apply(t,dt);return ql(n)&&$f($e,dt),$e.placeholder=h,Kf($e,n,s)}function Gl(n){var s=Qt[n];return function(l,h){if(l=Kn(l),h=h==null?0:hn(ft(h),292),h&&$u(l)){var S=(wt(l)+"e").split("e"),A=s(S[0]+"e"+(+S[1]+h));return S=(wt(A)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var U_=Jr&&1/Ao(new Jr([,-0]))[1]==ce?function(n){return new Jr(n)}:lc;function Ff(n){return function(s){var l=dn(s);return l==Ue?gl(s):l==C?jm(s):km(s,n(s))}}function bi(n,s,l,h,S,A,P,B){var V=s&g;if(!V&&typeof n!="function")throw new Wn(u);var re=h?h.length:0;if(re||(s&=~(G|N),h=S=t),P=P===t?P:en(ft(P),0),B=B===t?B:ft(B),re-=S?S.length:0,s&N){var ae=h,de=S;h=S=t}var Ae=V?t:kl(n),ze=[n,s,l,h,S,ae,de,A,P,B];if(Ae&&K_(ze,Ae),n=ze[0],s=ze[1],l=ze[2],h=ze[3],S=ze[4],B=ze[9]=ze[9]===t?V?0:n.length:en(ze[9]-re,0),!B&&s&(b|I)&&(s&=~(b|I)),!s||s==m)var qe=P_(n,s,l);else s==b||s==I?qe=I_(n,s,B):(s==G||s==(m|G))&&!S.length?qe=D_(n,s,l,h):qe=$o.apply(t,ze);var dt=Ae?_f:$f;return Kf(dt(qe,ze),n,s)}function Bf(n,s,l,h){return n===t||ti(n,jr[l])&&!Lt.call(h,l)?s:n}function zf(n,s,l,h,S,A){return kt(n)&&kt(s)&&(A.set(s,n),Wo(n,s,t,zf,A),A.delete(s)),n}function N_(n){return Qs(n)?t:n}function Gf(n,s,l,h,S,A){var P=l&y,B=n.length,V=s.length;if(B!=V&&!(P&&V>B))return!1;var re=A.get(n),ae=A.get(s);if(re&&ae)return re==s&&ae==n;var de=-1,Ae=!0,ze=l&w?new xr:t;for(A.set(n,s),A.set(s,n);++de<B;){var qe=n[de],dt=s[de];if(h)var $e=P?h(dt,qe,de,s,n,A):h(qe,dt,de,n,s,A);if($e!==t){if($e)continue;Ae=!1;break}if(ze){if(!ul(s,function(vt,St){if(!zs(ze,St)&&(qe===vt||S(qe,vt,l,h,A)))return ze.push(St)})){Ae=!1;break}}else if(!(qe===dt||S(qe,dt,l,h,A))){Ae=!1;break}}return A.delete(n),A.delete(s),Ae}function O_(n,s,l,h,S,A,P){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ke:return!(n.byteLength!=s.byteLength||!A(new Io(n),new Io(s)));case Oe:case Ce:case je:return ti(+n,+s);case ke:return n.name==s.name&&n.message==s.message;case bt:case M:return n==s+"";case Ue:var B=gl;case C:var V=h&y;if(B||(B=Ao),n.size!=s.size&&!V)return!1;var re=P.get(n);if(re)return re==s;h|=w,P.set(n,s);var ae=Gf(B(n),B(s),h,S,A,P);return P.delete(n),ae;case ee:if(Ws)return Ws.call(n)==Ws.call(s)}return!1}function F_(n,s,l,h,S,A){var P=l&y,B=Hl(n),V=B.length,re=Hl(s),ae=re.length;if(V!=ae&&!P)return!1;for(var de=V;de--;){var Ae=B[de];if(!(P?Ae in s:Lt.call(s,Ae)))return!1}var ze=A.get(n),qe=A.get(s);if(ze&&qe)return ze==s&&qe==n;var dt=!0;A.set(n,s),A.set(s,n);for(var $e=P;++de<V;){Ae=B[de];var vt=n[Ae],St=s[Ae];if(h)var On=P?h(St,vt,Ae,s,n,A):h(vt,St,Ae,n,s,A);if(!(On===t?vt===St||S(vt,St,l,h,A):On)){dt=!1;break}$e||($e=Ae=="constructor")}if(dt&&!$e){var xn=n.constructor,Fn=s.constructor;xn!=Fn&&"constructor"in n&&"constructor"in s&&!(typeof xn=="function"&&xn instanceof xn&&typeof Fn=="function"&&Fn instanceof Fn)&&(dt=!1)}return A.delete(n),A.delete(s),dt}function Ai(n){return Kl(Yf(n,t,th),n+"")}function Hl(n){return of(n,sn,Xl)}function Vl(n){return of(n,Rn,Hf)}var kl=Bo?function(n){return Bo.get(n)}:lc;function Jo(n){for(var s=n.name+"",l=Qr[s],h=Lt.call(Qr,s)?l.length:0;h--;){var S=l[h],A=S.func;if(A==null||A==n)return S.name}return s}function is(n){var s=Lt.call(E,"placeholder")?E:n;return s.placeholder}function We(){var n=E.iteratee||oc;return n=n===oc?cf:n,arguments.length?n(arguments[0],arguments[1]):n}function Qo(n,s){var l=n.__data__;return X_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Wl(n){for(var s=sn(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Wf(S)]}return s}function Er(n,s){var l=$m(n,s);return lf(l)?l:t}function B_(n){var s=Lt.call(n,_r),l=n[_r];try{n[_r]=t;var h=!0}catch{}var S=Lo.call(n);return h&&(s?n[_r]=l:delete n[_r]),S}var Xl=vl?function(n){return n==null?[]:(n=Ut(n),ki(vl(n),function(s){return Yu.call(n,s)}))}:cc,Hf=vl?function(n){for(var s=[];n;)Wi(s,Xl(n)),n=Do(n);return s}:cc,dn=_n;(xl&&dn(new xl(new ArrayBuffer(1)))!=He||Hs&&dn(new Hs)!=Ue||Sl&&dn(Sl.resolve())!=tt||Jr&&dn(new Jr)!=C||Vs&&dn(new Vs)!=ve)&&(dn=function(n){var s=_n(n),l=s==Qe?n.constructor:t,h=l?yr(l):"";if(h)switch(h){case Sg:return He;case Mg:return Ue;case Eg:return tt;case yg:return C;case Tg:return ve}return s});function z_(n,s,l){for(var h=-1,S=l.length;++h<S;){var A=l[h],P=A.size;switch(A.type){case"drop":n+=P;break;case"dropRight":s-=P;break;case"take":s=hn(s,n+P);break;case"takeRight":n=en(n,s-P);break}}return{start:n,end:s}}function G_(n){var s=n.match(xo);return s?s[1].split(Vr):[]}function Vf(n,s,l){s=Ki(s,n);for(var h=-1,S=s.length,A=!1;++h<S;){var P=di(s[h]);if(!(A=n!=null&&l(n,P)))break;n=n[P]}return A||++h!=S?A:(S=n==null?0:n.length,!!S&&oa(S)&&wi(P,S)&&(ot(n)||Tr(n)))}function H_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function kf(n){return typeof n.constructor=="function"&&!js(n)?es(Do(n)):{}}function V_(n,s,l){var h=n.constructor;switch(s){case Ke:return Bl(n);case Oe:case Ce:return new h(+n);case He:return b_(n,l);case ye:case be:case Je:case Ee:case Nt:case rt:case Ge:case Pe:case Fe:return bf(n,l);case Ue:return new h;case je:case M:return new h(n);case bt:return A_(n);case C:return new h;case ee:return w_(n)}}function k_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Hr,`{
/* [wrapped with `+s+`] */
`)}function W_(n){return ot(n)||Tr(n)||!!(qu&&n&&n[qu])}function wi(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<s}function vn(n,s,l){if(!kt(l))return!1;var h=typeof s;return(h=="number"?wn(l)&&wi(s,l.length):h=="string"&&s in l)?ti(l[s],n):!1}function Yl(n,s){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:Gt.test(n)||!Rt.test(n)||s!=null&&n in Ut(s)}function X_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ql(n){var s=Jo(n),l=E[s];if(typeof l!="function"||!(s in xt.prototype))return!1;if(n===l)return!0;var h=kl(l);return!!h&&n===h[0]}function Y_(n){return!!ku&&ku in n}var q_=Ro?Ri:uc;function js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||jr;return n===l}function Wf(n){return n===n&&!kt(n)}function Xf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Ut(l))}}function $_(n){var s=ra(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function K_(n,s){var l=n[1],h=s[1],S=l|h,A=S<(m|g|D),P=h==D&&l==b||h==D&&l==K&&n[7].length<=s[8]||h==(D|K)&&s[7].length<=s[8]&&l==b;if(!(A||P))return n;h&m&&(n[2]=s[2],S|=l&m?0:O);var B=s[3];if(B){var V=n[3];n[3]=V?wf(V,B,s[4]):B,n[4]=V?Xi(n[3],p):s[4]}return B=s[5],B&&(V=n[5],n[5]=V?Rf(V,B,s[6]):B,n[6]=V?Xi(n[5],p):s[6]),B=s[7],B&&(n[7]=B),h&D&&(n[8]=n[8]==null?s[8]:hn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function Z_(n){var s=[];if(n!=null)for(var l in Ut(n))s.push(l);return s}function j_(n){return Lo.call(n)}function Yf(n,s,l){return s=en(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,A=en(h.length-s,0),P=j(A);++S<A;)P[S]=h[s+S];S=-1;for(var B=j(s+1);++S<s;)B[S]=h[S];return B[s]=l(P),In(n,this,B)}}function qf(n,s){return s.length<2?n:Mr(n,qn(s,0,-1))}function J_(n,s){for(var l=n.length,h=hn(s.length,l),S=An(n);h--;){var A=s[h];n[h]=wi(A,l)?S[A]:t}return n}function $l(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var $f=Zf(_f),Js=dg||function(n,s){return an.setTimeout(n,s)},Kl=Zf(M_);function Kf(n,s,l){var h=s+"";return Kl(n,k_(h,Q_(G_(h),l)))}function Zf(n){var s=0,l=0;return function(){var h=_g(),S=fe-(h-l);if(l=h,S>0){if(++s>=me)return arguments[0]}else s=0;return n.apply(t,arguments)}}function ea(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var A=Pl(l,S),P=n[A];n[A]=n[l],n[l]=P}return n.length=s,n}var jf=$_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,S,A){s.push(S?A.replace(tl,"$1"):h||l)}),s});function di(n){if(typeof n=="string"||Nn(n))return n;var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function yr(n){if(n!=null){try{return Co.call(n)}catch{}try{return n+""}catch{}}return""}function Q_(n,s){return kn(Q,function(l){var h="_."+l[0];s&l[1]&&!To(n,h)&&n.push(h)}),n.sort()}function Jf(n){if(n instanceof xt)return n.clone();var s=new Xn(n.__wrapped__,n.__chain__);return s.__actions__=An(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function ev(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=en(ft(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,A=0,P=j(Oo(h/s));S<h;)P[A++]=qn(n,S,S+=s);return P}function tv(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var A=n[s];A&&(S[h++]=A)}return S}function nv(){var n=arguments.length;if(!n)return[];for(var s=j(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Wi(ot(l)?An(l):[l],ln(s,1))}var iv=gt(function(n,s){return $t(n)?Ys(n,ln(s,1,$t,!0)):[]}),rv=gt(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,ln(s,1,$t,!0),We(l,2)):[]}),sv=gt(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,ln(s,1,$t,!0),t,l):[]});function ov(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),qn(n,s<0?0:s,h)):[]}function av(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,0,s<0?0:s)):[]}function lv(n,s){return n&&n.length?Yo(n,We(s,3),!0,!0):[]}function cv(n,s){return n&&n.length?Yo(n,We(s,3),!0):[]}function uv(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&vn(n,s,l)&&(l=0,h=S),n_(n,s,l,h)):[]}function Qf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ft(l);return S<0&&(S=en(h+S,0)),bo(n,We(s,3),S)}function eh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ft(l),S=l<0?en(h+S,0):hn(S,h-1)),bo(n,We(s,3),S,!0)}function th(n){var s=n==null?0:n.length;return s?ln(n,1):[]}function fv(n){var s=n==null?0:n.length;return s?ln(n,ce):[]}function hv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ft(s),ln(n,s)):[]}function dv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function nh(n){return n&&n.length?n[0]:t}function pv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ft(l);return S<0&&(S=en(h+S,0)),qr(n,s,S)}function mv(n){var s=n==null?0:n.length;return s?qn(n,0,-1):[]}var gv=gt(function(n){var s=Vt(n,Ol);return s.length&&s[0]===n[0]?Al(s):[]}),_v=gt(function(n){var s=$n(n),l=Vt(n,Ol);return s===$n(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Al(l,We(s,2)):[]}),vv=gt(function(n){var s=$n(n),l=Vt(n,Ol);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Al(l,t,s):[]});function xv(n,s){return n==null?"":mg.call(n,s)}function $n(n){var s=n==null?0:n.length;return s?n[s-1]:t}function Sv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ft(l),S=S<0?en(h+S,0):hn(S,h-1)),s===s?Qm(n,s,S):bo(n,Nu,S,!0)}function Mv(n,s){return n&&n.length?df(n,ft(s)):t}var Ev=gt(ih);function ih(n,s){return n&&n.length&&s&&s.length?Ll(n,s):n}function yv(n,s,l){return n&&n.length&&s&&s.length?Ll(n,s,We(l,2)):n}function Tv(n,s,l){return n&&n.length&&s&&s.length?Ll(n,s,t,l):n}var bv=Ai(function(n,s){var l=n==null?0:n.length,h=El(n,s);return gf(n,Vt(s,function(S){return wi(S,l)?+S:S}).sort(Af)),h});function Av(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],A=n.length;for(s=We(s,3);++h<A;){var P=n[h];s(P,h,n)&&(l.push(P),S.push(h))}return gf(n,S),l}function Zl(n){return n==null?n:xg.call(n)}function wv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&vn(n,s,l)?(s=0,l=h):(s=s==null?0:ft(s),l=l===t?h:ft(l)),qn(n,s,l)):[]}function Rv(n,s){return Xo(n,s)}function Cv(n,s,l){return Dl(n,s,We(l,2))}function Lv(n,s){var l=n==null?0:n.length;if(l){var h=Xo(n,s);if(h<l&&ti(n[h],s))return h}return-1}function Pv(n,s){return Xo(n,s,!0)}function Iv(n,s,l){return Dl(n,s,We(l,2),!0)}function Dv(n,s){var l=n==null?0:n.length;if(l){var h=Xo(n,s,!0)-1;if(ti(n[h],s))return h}return-1}function Uv(n){return n&&n.length?vf(n):[]}function Nv(n,s){return n&&n.length?vf(n,We(s,2)):[]}function Ov(n){var s=n==null?0:n.length;return s?qn(n,1,s):[]}function Fv(n,s,l){return n&&n.length?(s=l||s===t?1:ft(s),qn(n,0,s<0?0:s)):[]}function Bv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,s<0?0:s,h)):[]}function zv(n,s){return n&&n.length?Yo(n,We(s,3),!1,!0):[]}function Gv(n,s){return n&&n.length?Yo(n,We(s,3)):[]}var Hv=gt(function(n){return $i(ln(n,1,$t,!0))}),Vv=gt(function(n){var s=$n(n);return $t(s)&&(s=t),$i(ln(n,1,$t,!0),We(s,2))}),kv=gt(function(n){var s=$n(n);return s=typeof s=="function"?s:t,$i(ln(n,1,$t,!0),t,s)});function Wv(n){return n&&n.length?$i(n):[]}function Xv(n,s){return n&&n.length?$i(n,We(s,2)):[]}function Yv(n,s){return s=typeof s=="function"?s:t,n&&n.length?$i(n,t,s):[]}function jl(n){if(!(n&&n.length))return[];var s=0;return n=ki(n,function(l){if($t(l))return s=en(l.length,s),!0}),pl(s,function(l){return Vt(n,fl(l))})}function rh(n,s){if(!(n&&n.length))return[];var l=jl(n);return s==null?l:Vt(l,function(h){return In(s,t,h)})}var qv=gt(function(n,s){return $t(n)?Ys(n,s):[]}),$v=gt(function(n){return Nl(ki(n,$t))}),Kv=gt(function(n){var s=$n(n);return $t(s)&&(s=t),Nl(ki(n,$t),We(s,2))}),Zv=gt(function(n){var s=$n(n);return s=typeof s=="function"?s:t,Nl(ki(n,$t),t,s)}),jv=gt(jl);function Jv(n,s){return Ef(n||[],s||[],Xs)}function Qv(n,s){return Ef(n||[],s||[],Ks)}var e0=gt(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,rh(n,l)});function sh(n){var s=E(n);return s.__chain__=!0,s}function t0(n,s){return s(n),n}function ta(n,s){return s(n)}var n0=Ai(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(A){return El(A,n)};return s>1||this.__actions__.length||!(h instanceof xt)||!wi(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ta,args:[S],thisArg:t}),new Xn(h,this.__chain__).thru(function(A){return s&&!A.length&&A.push(t),A}))});function i0(){return sh(this)}function r0(){return new Xn(this.value(),this.__chain__)}function s0(){this.__values__===t&&(this.__values__=xh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function o0(){return this}function a0(n){for(var s,l=this;l instanceof Go;){var h=Jf(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function l0(){var n=this.__wrapped__;if(n instanceof xt){var s=n;return this.__actions__.length&&(s=new xt(this)),s=s.reverse(),s.__actions__.push({func:ta,args:[Zl],thisArg:t}),new Xn(s,this.__chain__)}return this.thru(Zl)}function c0(){return Mf(this.__wrapped__,this.__actions__)}var u0=qo(function(n,s,l){Lt.call(n,l)?++n[l]:Ti(n,l,1)});function f0(n,s,l){var h=ot(n)?Du:t_;return l&&vn(n,s,l)&&(s=t),h(n,We(s,3))}function h0(n,s){var l=ot(n)?ki:rf;return l(n,We(s,3))}var d0=If(Qf),p0=If(eh);function m0(n,s){return ln(na(n,s),1)}function g0(n,s){return ln(na(n,s),ce)}function _0(n,s,l){return l=l===t?1:ft(l),ln(na(n,s),l)}function oh(n,s){var l=ot(n)?kn:qi;return l(n,We(s,3))}function ah(n,s){var l=ot(n)?Om:nf;return l(n,We(s,3))}var v0=qo(function(n,s,l){Lt.call(n,l)?n[l].push(s):Ti(n,l,[s])});function x0(n,s,l,h){n=wn(n)?n:ss(n),l=l&&!h?ft(l):0;var S=n.length;return l<0&&(l=en(S+l,0)),aa(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&qr(n,s,l)>-1}var S0=gt(function(n,s,l){var h=-1,S=typeof s=="function",A=wn(n)?j(n.length):[];return qi(n,function(P){A[++h]=S?In(s,P,l):qs(P,s,l)}),A}),M0=qo(function(n,s,l){Ti(n,l,s)});function na(n,s){var l=ot(n)?Vt:uf;return l(n,We(s,3))}function E0(n,s,l,h){return n==null?[]:(ot(s)||(s=s==null?[]:[s]),l=h?t:l,ot(l)||(l=l==null?[]:[l]),pf(n,s,l))}var y0=qo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function T0(n,s,l){var h=ot(n)?cl:Fu,S=arguments.length<3;return h(n,We(s,4),l,S,qi)}function b0(n,s,l){var h=ot(n)?Fm:Fu,S=arguments.length<3;return h(n,We(s,4),l,S,nf)}function A0(n,s){var l=ot(n)?ki:rf;return l(n,sa(We(s,3)))}function w0(n){var s=ot(n)?Ju:x_;return s(n)}function R0(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=ft(s);var h=ot(n)?Zg:S_;return h(n,s)}function C0(n){var s=ot(n)?jg:E_;return s(n)}function L0(n){if(n==null)return 0;if(wn(n))return aa(n)?Kr(n):n.length;var s=dn(n);return s==Ue||s==C?n.size:Rl(n).length}function P0(n,s,l){var h=ot(n)?ul:y_;return l&&vn(n,s,l)&&(s=t),h(n,We(s,3))}var I0=gt(function(n,s){if(n==null)return[];var l=s.length;return l>1&&vn(n,s[0],s[1])?s=[]:l>2&&vn(s[0],s[1],s[2])&&(s=[s[0]]),pf(n,ln(s,1),[])}),ia=hg||function(){return an.Date.now()};function D0(n,s){if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){if(--n<1)return s.apply(this,arguments)}}function lh(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,bi(n,D,t,t,t,t,s)}function ch(n,s){var l;if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var Jl=gt(function(n,s,l){var h=m;if(l.length){var S=Xi(l,is(Jl));h|=G}return bi(n,h,s,l,S)}),uh=gt(function(n,s,l){var h=m|g;if(l.length){var S=Xi(l,is(uh));h|=G}return bi(s,h,n,l,S)});function fh(n,s,l){s=l?t:s;var h=bi(n,b,t,t,t,t,t,s);return h.placeholder=fh.placeholder,h}function hh(n,s,l){s=l?t:s;var h=bi(n,I,t,t,t,t,t,s);return h.placeholder=hh.placeholder,h}function dh(n,s,l){var h,S,A,P,B,V,re=0,ae=!1,de=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);s=Kn(s)||0,kt(l)&&(ae=!!l.leading,de="maxWait"in l,A=de?en(Kn(l.maxWait)||0,s):A,Ae="trailing"in l?!!l.trailing:Ae);function ze(Kt){var ni=h,Li=S;return h=S=t,re=Kt,P=n.apply(Li,ni),P}function qe(Kt){return re=Kt,B=Js(vt,s),ae?ze(Kt):P}function dt(Kt){var ni=Kt-V,Li=Kt-re,Ih=s-ni;return de?hn(Ih,A-Li):Ih}function $e(Kt){var ni=Kt-V,Li=Kt-re;return V===t||ni>=s||ni<0||de&&Li>=A}function vt(){var Kt=ia();if($e(Kt))return St(Kt);B=Js(vt,dt(Kt))}function St(Kt){return B=t,Ae&&h?ze(Kt):(h=S=t,P)}function On(){B!==t&&yf(B),re=0,h=V=S=B=t}function xn(){return B===t?P:St(ia())}function Fn(){var Kt=ia(),ni=$e(Kt);if(h=arguments,S=this,V=Kt,ni){if(B===t)return qe(V);if(de)return yf(B),B=Js(vt,s),ze(V)}return B===t&&(B=Js(vt,s)),P}return Fn.cancel=On,Fn.flush=xn,Fn}var U0=gt(function(n,s){return tf(n,1,s)}),N0=gt(function(n,s,l){return tf(n,Kn(s)||0,l)});function O0(n){return bi(n,pe)}function ra(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Wn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],A=l.cache;if(A.has(S))return A.get(S);var P=n.apply(this,h);return l.cache=A.set(S,P)||A,P};return l.cache=new(ra.Cache||yi),l}ra.Cache=yi;function sa(n){if(typeof n!="function")throw new Wn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function F0(n){return ch(2,n)}var B0=T_(function(n,s){s=s.length==1&&ot(s[0])?Vt(s[0],Dn(We())):Vt(ln(s,1),Dn(We()));var l=s.length;return gt(function(h){for(var S=-1,A=hn(h.length,l);++S<A;)h[S]=s[S].call(this,h[S]);return In(n,this,h)})}),Ql=gt(function(n,s){var l=Xi(s,is(Ql));return bi(n,G,t,s,l)}),ph=gt(function(n,s){var l=Xi(s,is(ph));return bi(n,N,t,s,l)}),z0=Ai(function(n,s){return bi(n,K,t,t,t,s)});function G0(n,s){if(typeof n!="function")throw new Wn(u);return s=s===t?s:ft(s),gt(n,s)}function H0(n,s){if(typeof n!="function")throw new Wn(u);return s=s==null?0:en(ft(s),0),gt(function(l){var h=l[s],S=Zi(l,0,s);return h&&Wi(S,h),In(n,this,S)})}function V0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Wn(u);return kt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),dh(n,s,{leading:h,maxWait:s,trailing:S})}function k0(n){return lh(n,1)}function W0(n,s){return Ql(Fl(s),n)}function X0(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function Y0(n){return Yn(n,x)}function q0(n,s){return s=typeof s=="function"?s:t,Yn(n,x,s)}function $0(n){return Yn(n,_|x)}function K0(n,s){return s=typeof s=="function"?s:t,Yn(n,_|x,s)}function Z0(n,s){return s==null||ef(n,s,sn(s))}function ti(n,s){return n===s||n!==n&&s!==s}var j0=jo(bl),J0=jo(function(n,s){return n>=s}),Tr=af(function(){return arguments}())?af:function(n){return Yt(n)&&Lt.call(n,"callee")&&!Yu.call(n,"callee")},ot=j.isArray,Q0=wu?Dn(wu):a_;function wn(n){return n!=null&&oa(n.length)&&!Ri(n)}function $t(n){return Yt(n)&&wn(n)}function ex(n){return n===!0||n===!1||Yt(n)&&_n(n)==Oe}var ji=pg||uc,tx=Ru?Dn(Ru):l_;function nx(n){return Yt(n)&&n.nodeType===1&&!Qs(n)}function ix(n){if(n==null)return!0;if(wn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||ji(n)||rs(n)||Tr(n)))return!n.length;var s=dn(n);if(s==Ue||s==C)return!n.size;if(js(n))return!Rl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function rx(n,s){return $s(n,s)}function sx(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?$s(n,s,t,l):!!h}function ec(n){if(!Yt(n))return!1;var s=_n(n);return s==ke||s==Mt||typeof n.message=="string"&&typeof n.name=="string"&&!Qs(n)}function ox(n){return typeof n=="number"&&$u(n)}function Ri(n){if(!kt(n))return!1;var s=_n(n);return s==W||s==Xt||s==Ze||s==lt}function mh(n){return typeof n=="number"&&n==ft(n)}function oa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function kt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Yt(n){return n!=null&&typeof n=="object"}var gh=Cu?Dn(Cu):u_;function ax(n,s){return n===s||wl(n,s,Wl(s))}function lx(n,s,l){return l=typeof l=="function"?l:t,wl(n,s,Wl(s),l)}function cx(n){return _h(n)&&n!=+n}function ux(n){if(q_(n))throw new it(a);return lf(n)}function fx(n){return n===null}function hx(n){return n==null}function _h(n){return typeof n=="number"||Yt(n)&&_n(n)==je}function Qs(n){if(!Yt(n)||_n(n)!=Qe)return!1;var s=Do(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Co.call(l)==lg}var tc=Lu?Dn(Lu):f_;function dx(n){return mh(n)&&n>=-te&&n<=te}var vh=Pu?Dn(Pu):h_;function aa(n){return typeof n=="string"||!ot(n)&&Yt(n)&&_n(n)==M}function Nn(n){return typeof n=="symbol"||Yt(n)&&_n(n)==ee}var rs=Iu?Dn(Iu):d_;function px(n){return n===t}function mx(n){return Yt(n)&&dn(n)==ve}function gx(n){return Yt(n)&&_n(n)==_e}var _x=jo(Cl),vx=jo(function(n,s){return n<=s});function xh(n){if(!n)return[];if(wn(n))return aa(n)?Qn(n):An(n);if(Gs&&n[Gs])return Zm(n[Gs]());var s=dn(n),l=s==Ue?gl:s==C?Ao:ss;return l(n)}function Ci(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ce||n===-ce){var s=n<0?-1:1;return s*ue}return n===n?n:0}function ft(n){var s=Ci(n),l=s%1;return s===s?l?s-l:s:0}function Sh(n){return n?Sr(ft(n),0,Se):0}function Kn(n){if(typeof n=="number")return n;if(Nn(n))return he;if(kt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=kt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Bu(n);var l=k.test(n);return l||J.test(n)?Dm(n.slice(2),l?2:8):R.test(n)?he:+n}function Mh(n){return hi(n,Rn(n))}function xx(n){return n?Sr(ft(n),-te,te):n===0?n:0}function wt(n){return n==null?"":Un(n)}var Sx=ts(function(n,s){if(js(s)||wn(s)){hi(s,sn(s),n);return}for(var l in s)Lt.call(s,l)&&Xs(n,l,s[l])}),Eh=ts(function(n,s){hi(s,Rn(s),n)}),la=ts(function(n,s,l,h){hi(s,Rn(s),n,h)}),Mx=ts(function(n,s,l,h){hi(s,sn(s),n,h)}),Ex=Ai(El);function yx(n,s){var l=es(n);return s==null?l:Qu(l,s)}var Tx=gt(function(n,s){n=Ut(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&vn(s[0],s[1],S)&&(h=1);++l<h;)for(var A=s[l],P=Rn(A),B=-1,V=P.length;++B<V;){var re=P[B],ae=n[re];(ae===t||ti(ae,jr[re])&&!Lt.call(n,re))&&(n[re]=A[re])}return n}),bx=gt(function(n){return n.push(t,zf),In(yh,t,n)});function Ax(n,s){return Uu(n,We(s,3),fi)}function wx(n,s){return Uu(n,We(s,3),Tl)}function Rx(n,s){return n==null?n:yl(n,We(s,3),Rn)}function Cx(n,s){return n==null?n:sf(n,We(s,3),Rn)}function Lx(n,s){return n&&fi(n,We(s,3))}function Px(n,s){return n&&Tl(n,We(s,3))}function Ix(n){return n==null?[]:ko(n,sn(n))}function Dx(n){return n==null?[]:ko(n,Rn(n))}function nc(n,s,l){var h=n==null?t:Mr(n,s);return h===t?l:h}function Ux(n,s){return n!=null&&Vf(n,s,i_)}function ic(n,s){return n!=null&&Vf(n,s,r_)}var Nx=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),n[s]=l},sc(Cn)),Ox=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},We),Fx=gt(qs);function sn(n){return wn(n)?ju(n):Rl(n)}function Rn(n){return wn(n)?ju(n,!0):p_(n)}function Bx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,A){Ti(l,s(h,S,A),h)}),l}function zx(n,s){var l={};return s=We(s,3),fi(n,function(h,S,A){Ti(l,S,s(h,S,A))}),l}var Gx=ts(function(n,s,l){Wo(n,s,l)}),yh=ts(function(n,s,l,h){Wo(n,s,l,h)}),Hx=Ai(function(n,s){var l={};if(n==null)return l;var h=!1;s=Vt(s,function(A){return A=Ki(A,n),h||(h=A.length>1),A}),hi(n,Vl(n),l),h&&(l=Yn(l,_|v|x,N_));for(var S=s.length;S--;)Ul(l,s[S]);return l});function Vx(n,s){return Th(n,sa(We(s)))}var kx=Ai(function(n,s){return n==null?{}:g_(n,s)});function Th(n,s){if(n==null)return{};var l=Vt(Vl(n),function(h){return[h]});return s=We(s),mf(n,l,function(h,S){return s(h,S[0])})}function Wx(n,s,l){s=Ki(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var A=n==null?t:n[di(s[h])];A===t&&(h=S,A=l),n=Ri(A)?A.call(n):A}return n}function Xx(n,s,l){return n==null?n:Ks(n,s,l)}function Yx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Ks(n,s,l,h)}var bh=Ff(sn),Ah=Ff(Rn);function qx(n,s,l){var h=ot(n),S=h||ji(n)||rs(n);if(s=We(s,4),l==null){var A=n&&n.constructor;S?l=h?new A:[]:kt(n)?l=Ri(A)?es(Do(n)):{}:l={}}return(S?kn:fi)(n,function(P,B,V){return s(l,P,B,V)}),l}function $x(n,s){return n==null?!0:Ul(n,s)}function Kx(n,s,l){return n==null?n:Sf(n,s,Fl(l))}function Zx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Sf(n,s,Fl(l),h)}function ss(n){return n==null?[]:ml(n,sn(n))}function jx(n){return n==null?[]:ml(n,Rn(n))}function Jx(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Kn(l),l=l===l?l:0),s!==t&&(s=Kn(s),s=s===s?s:0),Sr(Kn(n),s,l)}function Qx(n,s,l){return s=Ci(s),l===t?(l=s,s=0):l=Ci(l),n=Kn(n),s_(n,s,l)}function eS(n,s,l){if(l&&typeof l!="boolean"&&vn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ci(n),s===t?(s=n,n=0):s=Ci(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=Ku();return hn(n+S*(s-n+Im("1e-"+((S+"").length-1))),s)}return Pl(n,s)}var tS=ns(function(n,s,l){return s=s.toLowerCase(),n+(l?wh(s):s)});function wh(n){return rc(wt(n).toLowerCase())}function Rh(n){return n=wt(n),n&&n.replace(Le,Xm).replace(Em,"")}function nS(n,s,l){n=wt(n),s=Un(s);var h=n.length;l=l===t?h:Sr(ft(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function iS(n){return n=wt(n),n&&xe.test(n)?n.replace(Me,Ym):n}function rS(n){return n=wt(n),n&&rn.test(n)?n.replace(Ct,"\\$&"):n}var sS=ns(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),oS=ns(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),aS=Pf("toLowerCase");function lS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return Zo(Fo(S),l)+n+Zo(Oo(S),l)}function cS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?n+Zo(s-h,l):n}function uS(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?Zo(s-h,l)+n:n}function fS(n,s,l){return l||s==null?s=0:s&&(s=+s),vg(wt(n).replace(jn,""),s||0)}function hS(n,s,l){return(l?vn(n,s,l):s===t)?s=1:s=ft(s),Il(wt(n),s)}function dS(){var n=arguments,s=wt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var pS=ns(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function mS(n,s,l){return l&&typeof l!="number"&&vn(n,s,l)&&(s=l=t),l=l===t?Se:l>>>0,l?(n=wt(n),n&&(typeof s=="string"||s!=null&&!tc(s))&&(s=Un(s),!s&&$r(n))?Zi(Qn(n),0,l):n.split(s,l)):[]}var gS=ns(function(n,s,l){return n+(l?" ":"")+rc(s)});function _S(n,s,l){return n=wt(n),l=l==null?0:Sr(ft(l),0,n.length),s=Un(s),n.slice(l,l+s.length)==s}function vS(n,s,l){var h=E.templateSettings;l&&vn(n,s,l)&&(s=t),n=wt(n),s=la({},s,h,Bf);var S=la({},s.imports,h.imports,Bf),A=sn(S),P=ml(S,A),B,V,re=0,ae=s.interpolate||Be,de="__p += '",Ae=_l((s.escape||Be).source+"|"+ae.source+"|"+(ae===yt?nl:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),ze="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++wm+"]")+`
`;n.replace(Ae,function($e,vt,St,On,xn,Fn){return St||(St=On),de+=n.slice(re,Fn).replace(Xe,qm),vt&&(B=!0,de+=`' +
__e(`+vt+`) +
'`),xn&&(V=!0,de+=`';
`+xn+`;
__p += '`),St&&(de+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),re=Fn+$e.length,$e}),de+=`';
`;var qe=Lt.call(s,"variable")&&s.variable;if(!qe)de=`with (obj) {
`+de+`
}
`;else if(Mo.test(qe))throw new it(c);de=(V?de.replace(L,""):de).replace(le,"$1").replace(Ne,"$1;"),de="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+de+`return __p
}`;var dt=Lh(function(){return At(A,ze+"return "+de).apply(t,P)});if(dt.source=de,ec(dt))throw dt;return dt}function xS(n){return wt(n).toLowerCase()}function SS(n){return wt(n).toUpperCase()}function MS(n,s,l){if(n=wt(n),n&&(l||s===t))return Bu(n);if(!n||!(s=Un(s)))return n;var h=Qn(n),S=Qn(s),A=zu(h,S),P=Gu(h,S)+1;return Zi(h,A,P).join("")}function ES(n,s,l){if(n=wt(n),n&&(l||s===t))return n.slice(0,Vu(n)+1);if(!n||!(s=Un(s)))return n;var h=Qn(n),S=Gu(h,Qn(s))+1;return Zi(h,0,S).join("")}function yS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.replace(jn,"");if(!n||!(s=Un(s)))return n;var h=Qn(n),S=zu(h,Qn(s));return Zi(h,S).join("")}function TS(n,s){var l=T,h=U;if(kt(s)){var S="separator"in s?s.separator:S;l="length"in s?ft(s.length):l,h="omission"in s?Un(s.omission):h}n=wt(n);var A=n.length;if($r(n)){var P=Qn(n);A=P.length}if(l>=A)return n;var B=l-Kr(h);if(B<1)return h;var V=P?Zi(P,0,B).join(""):n.slice(0,B);if(S===t)return V+h;if(P&&(B+=V.length-B),tc(S)){if(n.slice(B).search(S)){var re,ae=V;for(S.global||(S=_l(S.source,wt(Eo.exec(S))+"g")),S.lastIndex=0;re=S.exec(ae);)var de=re.index;V=V.slice(0,de===t?B:de)}}else if(n.indexOf(Un(S),B)!=B){var Ae=V.lastIndexOf(S);Ae>-1&&(V=V.slice(0,Ae))}return V+h}function bS(n){return n=wt(n),n&&Y.test(n)?n.replace(F,eg):n}var AS=ns(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),rc=Pf("toUpperCase");function Ch(n,s,l){return n=wt(n),s=l?t:s,s===t?Km(n)?ig(n):Gm(n):n.match(s)||[]}var Lh=gt(function(n,s){try{return In(n,t,s)}catch(l){return ec(l)?l:new it(l)}}),wS=Ai(function(n,s){return kn(s,function(l){l=di(l),Ti(n,l,Jl(n[l],n))}),n});function RS(n){var s=n==null?0:n.length,l=We();return n=s?Vt(n,function(h){if(typeof h[1]!="function")throw new Wn(u);return[l(h[0]),h[1]]}):[],gt(function(h){for(var S=-1;++S<s;){var A=n[S];if(In(A[0],this,h))return In(A[1],this,h)}})}function CS(n){return e_(Yn(n,_))}function sc(n){return function(){return n}}function LS(n,s){return n==null||n!==n?s:n}var PS=Df(),IS=Df(!0);function Cn(n){return n}function oc(n){return cf(typeof n=="function"?n:Yn(n,_))}function DS(n){return ff(Yn(n,_))}function US(n,s){return hf(n,Yn(s,_))}var NS=gt(function(n,s){return function(l){return qs(l,n,s)}}),OS=gt(function(n,s){return function(l){return qs(n,l,s)}});function ac(n,s,l){var h=sn(s),S=ko(s,h);l==null&&!(kt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=ko(s,sn(s)));var A=!(kt(l)&&"chain"in l)||!!l.chain,P=Ri(n);return kn(S,function(B){var V=s[B];n[B]=V,P&&(n.prototype[B]=function(){var re=this.__chain__;if(A||re){var ae=n(this.__wrapped__),de=ae.__actions__=An(this.__actions__);return de.push({func:V,args:arguments,thisArg:n}),ae.__chain__=re,ae}return V.apply(n,Wi([this.value()],arguments))})}),n}function FS(){return an._===this&&(an._=cg),this}function lc(){}function BS(n){return n=ft(n),gt(function(s){return df(s,n)})}var zS=zl(Vt),GS=zl(Du),HS=zl(ul);function Ph(n){return Yl(n)?fl(di(n)):__(n)}function VS(n){return function(s){return n==null?t:Mr(n,s)}}var kS=Nf(),WS=Nf(!0);function cc(){return[]}function uc(){return!1}function XS(){return{}}function YS(){return""}function qS(){return!0}function $S(n,s){if(n=ft(n),n<1||n>te)return[];var l=Se,h=hn(n,Se);s=We(s),n-=Se;for(var S=pl(h,s);++l<n;)s(l);return S}function KS(n){return ot(n)?Vt(n,di):Nn(n)?[n]:An(jf(wt(n)))}function ZS(n){var s=++ag;return wt(n)+s}var jS=Ko(function(n,s){return n+s},0),JS=Gl("ceil"),QS=Ko(function(n,s){return n/s},1),eM=Gl("floor");function tM(n){return n&&n.length?Vo(n,Cn,bl):t}function nM(n,s){return n&&n.length?Vo(n,We(s,2),bl):t}function iM(n){return Ou(n,Cn)}function rM(n,s){return Ou(n,We(s,2))}function sM(n){return n&&n.length?Vo(n,Cn,Cl):t}function oM(n,s){return n&&n.length?Vo(n,We(s,2),Cl):t}var aM=Ko(function(n,s){return n*s},1),lM=Gl("round"),cM=Ko(function(n,s){return n-s},0);function uM(n){return n&&n.length?dl(n,Cn):0}function fM(n,s){return n&&n.length?dl(n,We(s,2)):0}return E.after=D0,E.ary=lh,E.assign=Sx,E.assignIn=Eh,E.assignInWith=la,E.assignWith=Mx,E.at=Ex,E.before=ch,E.bind=Jl,E.bindAll=wS,E.bindKey=uh,E.castArray=X0,E.chain=sh,E.chunk=ev,E.compact=tv,E.concat=nv,E.cond=RS,E.conforms=CS,E.constant=sc,E.countBy=u0,E.create=yx,E.curry=fh,E.curryRight=hh,E.debounce=dh,E.defaults=Tx,E.defaultsDeep=bx,E.defer=U0,E.delay=N0,E.difference=iv,E.differenceBy=rv,E.differenceWith=sv,E.drop=ov,E.dropRight=av,E.dropRightWhile=lv,E.dropWhile=cv,E.fill=uv,E.filter=h0,E.flatMap=m0,E.flatMapDeep=g0,E.flatMapDepth=_0,E.flatten=th,E.flattenDeep=fv,E.flattenDepth=hv,E.flip=O0,E.flow=PS,E.flowRight=IS,E.fromPairs=dv,E.functions=Ix,E.functionsIn=Dx,E.groupBy=v0,E.initial=mv,E.intersection=gv,E.intersectionBy=_v,E.intersectionWith=vv,E.invert=Nx,E.invertBy=Ox,E.invokeMap=S0,E.iteratee=oc,E.keyBy=M0,E.keys=sn,E.keysIn=Rn,E.map=na,E.mapKeys=Bx,E.mapValues=zx,E.matches=DS,E.matchesProperty=US,E.memoize=ra,E.merge=Gx,E.mergeWith=yh,E.method=NS,E.methodOf=OS,E.mixin=ac,E.negate=sa,E.nthArg=BS,E.omit=Hx,E.omitBy=Vx,E.once=F0,E.orderBy=E0,E.over=zS,E.overArgs=B0,E.overEvery=GS,E.overSome=HS,E.partial=Ql,E.partialRight=ph,E.partition=y0,E.pick=kx,E.pickBy=Th,E.property=Ph,E.propertyOf=VS,E.pull=Ev,E.pullAll=ih,E.pullAllBy=yv,E.pullAllWith=Tv,E.pullAt=bv,E.range=kS,E.rangeRight=WS,E.rearg=z0,E.reject=A0,E.remove=Av,E.rest=G0,E.reverse=Zl,E.sampleSize=R0,E.set=Xx,E.setWith=Yx,E.shuffle=C0,E.slice=wv,E.sortBy=I0,E.sortedUniq=Uv,E.sortedUniqBy=Nv,E.split=mS,E.spread=H0,E.tail=Ov,E.take=Fv,E.takeRight=Bv,E.takeRightWhile=zv,E.takeWhile=Gv,E.tap=t0,E.throttle=V0,E.thru=ta,E.toArray=xh,E.toPairs=bh,E.toPairsIn=Ah,E.toPath=KS,E.toPlainObject=Mh,E.transform=qx,E.unary=k0,E.union=Hv,E.unionBy=Vv,E.unionWith=kv,E.uniq=Wv,E.uniqBy=Xv,E.uniqWith=Yv,E.unset=$x,E.unzip=jl,E.unzipWith=rh,E.update=Kx,E.updateWith=Zx,E.values=ss,E.valuesIn=jx,E.without=qv,E.words=Ch,E.wrap=W0,E.xor=$v,E.xorBy=Kv,E.xorWith=Zv,E.zip=jv,E.zipObject=Jv,E.zipObjectDeep=Qv,E.zipWith=e0,E.entries=bh,E.entriesIn=Ah,E.extend=Eh,E.extendWith=la,ac(E,E),E.add=jS,E.attempt=Lh,E.camelCase=tS,E.capitalize=wh,E.ceil=JS,E.clamp=Jx,E.clone=Y0,E.cloneDeep=$0,E.cloneDeepWith=K0,E.cloneWith=q0,E.conformsTo=Z0,E.deburr=Rh,E.defaultTo=LS,E.divide=QS,E.endsWith=nS,E.eq=ti,E.escape=iS,E.escapeRegExp=rS,E.every=f0,E.find=d0,E.findIndex=Qf,E.findKey=Ax,E.findLast=p0,E.findLastIndex=eh,E.findLastKey=wx,E.floor=eM,E.forEach=oh,E.forEachRight=ah,E.forIn=Rx,E.forInRight=Cx,E.forOwn=Lx,E.forOwnRight=Px,E.get=nc,E.gt=j0,E.gte=J0,E.has=Ux,E.hasIn=ic,E.head=nh,E.identity=Cn,E.includes=x0,E.indexOf=pv,E.inRange=Qx,E.invoke=Fx,E.isArguments=Tr,E.isArray=ot,E.isArrayBuffer=Q0,E.isArrayLike=wn,E.isArrayLikeObject=$t,E.isBoolean=ex,E.isBuffer=ji,E.isDate=tx,E.isElement=nx,E.isEmpty=ix,E.isEqual=rx,E.isEqualWith=sx,E.isError=ec,E.isFinite=ox,E.isFunction=Ri,E.isInteger=mh,E.isLength=oa,E.isMap=gh,E.isMatch=ax,E.isMatchWith=lx,E.isNaN=cx,E.isNative=ux,E.isNil=hx,E.isNull=fx,E.isNumber=_h,E.isObject=kt,E.isObjectLike=Yt,E.isPlainObject=Qs,E.isRegExp=tc,E.isSafeInteger=dx,E.isSet=vh,E.isString=aa,E.isSymbol=Nn,E.isTypedArray=rs,E.isUndefined=px,E.isWeakMap=mx,E.isWeakSet=gx,E.join=xv,E.kebabCase=sS,E.last=$n,E.lastIndexOf=Sv,E.lowerCase=oS,E.lowerFirst=aS,E.lt=_x,E.lte=vx,E.max=tM,E.maxBy=nM,E.mean=iM,E.meanBy=rM,E.min=sM,E.minBy=oM,E.stubArray=cc,E.stubFalse=uc,E.stubObject=XS,E.stubString=YS,E.stubTrue=qS,E.multiply=aM,E.nth=Mv,E.noConflict=FS,E.noop=lc,E.now=ia,E.pad=lS,E.padEnd=cS,E.padStart=uS,E.parseInt=fS,E.random=eS,E.reduce=T0,E.reduceRight=b0,E.repeat=hS,E.replace=dS,E.result=Wx,E.round=lM,E.runInContext=H,E.sample=w0,E.size=L0,E.snakeCase=pS,E.some=P0,E.sortedIndex=Rv,E.sortedIndexBy=Cv,E.sortedIndexOf=Lv,E.sortedLastIndex=Pv,E.sortedLastIndexBy=Iv,E.sortedLastIndexOf=Dv,E.startCase=gS,E.startsWith=_S,E.subtract=cM,E.sum=uM,E.sumBy=fM,E.template=vS,E.times=$S,E.toFinite=Ci,E.toInteger=ft,E.toLength=Sh,E.toLower=xS,E.toNumber=Kn,E.toSafeInteger=xx,E.toString=wt,E.toUpper=SS,E.trim=MS,E.trimEnd=ES,E.trimStart=yS,E.truncate=TS,E.unescape=bS,E.uniqueId=ZS,E.upperCase=AS,E.upperFirst=rc,E.each=oh,E.eachRight=ah,E.first=nh,ac(E,function(){var n={};return fi(E,function(s,l){Lt.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),kn(["drop","take"],function(n,s){xt.prototype[n]=function(l){l=l===t?1:en(ft(l),0);var h=this.__filtered__&&!s?new xt(this):this.clone();return h.__filtered__?h.__takeCount__=hn(l,h.__takeCount__):h.__views__.push({size:hn(l,Se),type:n+(h.__dir__<0?"Right":"")}),h},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),kn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==z||l==ne;xt.prototype[n]=function(S){var A=this.clone();return A.__iteratees__.push({iteratee:We(S,3),type:l}),A.__filtered__=A.__filtered__||h,A}}),kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Cn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=gt(function(n,s){return typeof n=="function"?new xt(this):this.map(function(l){return qs(l,n,s)})}),xt.prototype.reject=function(n){return this.filter(sa(We(n)))},xt.prototype.slice=function(n,s){n=ft(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ft(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(Se)},fi(xt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=E[h?"take"+(s=="last"?"Right":""):s],A=h||/^find/.test(s);S&&(E.prototype[s]=function(){var P=this.__wrapped__,B=h?[1]:arguments,V=P instanceof xt,re=B[0],ae=V||ot(P),de=function(vt){var St=S.apply(E,Wi([vt],B));return h&&Ae?St[0]:St};ae&&l&&typeof re=="function"&&re.length!=1&&(V=ae=!1);var Ae=this.__chain__,ze=!!this.__actions__.length,qe=A&&!Ae,dt=V&&!ze;if(!A&&ae){P=dt?P:new xt(this);var $e=n.apply(P,B);return $e.__actions__.push({func:ta,args:[de],thisArg:t}),new Xn($e,Ae)}return qe&&dt?n.apply(this,B):($e=this.thru(de),qe?h?$e.value()[0]:$e.value():$e)})}),kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=wo[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var A=this.value();return s.apply(ot(A)?A:[],S)}return this[l](function(P){return s.apply(ot(P)?P:[],S)})}}),fi(xt.prototype,function(n,s){var l=E[s];if(l){var h=l.name+"";Lt.call(Qr,h)||(Qr[h]=[]),Qr[h].push({name:s,func:l})}}),Qr[$o(t,g).name]=[{name:"wrapper",func:t}],xt.prototype.clone=bg,xt.prototype.reverse=Ag,xt.prototype.value=wg,E.prototype.at=n0,E.prototype.chain=i0,E.prototype.commit=r0,E.prototype.next=s0,E.prototype.plant=a0,E.prototype.reverse=l0,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=c0,E.prototype.first=E.prototype.head,Gs&&(E.prototype[Gs]=o0),E},Zr=rg();gr?((gr.exports=Zr)._=Zr,ol._=Zr):an._=Zr}).call(ao)})(Xa,Xa.exports);var Xc=Xa.exports;const _R={dotSize:12,genePercentile:.99,cameraPositionZ:300,cameraPositionY:100,cameraPositionX:300},jt=new Ns(_R);function Yc(r){const t={...jt.getValue(),dotSize:r};jt.next(t)}function _p(r){const e=jt.getValue(),t=r*.01,i={...e,genePercentile:t};jt.next(i)}const vR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},xR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),SR(t)})};function SR(r){const e=document.getElementById("cellNotFound");let t=Pt.value.listPalette;r?(t=Pt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Ya(t)):Ya(Pt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Ya(r){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,_t.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,p,_,x=((y,w)=>{for(const m in y)if(y[m].includes(w))return m;return!1})(Pt.value.groups,o);if(x){const y=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(y),p=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,p=document.createElement("label"),p.htmlFor=x,p.setAttribute("for",y),p.style.color="white",p.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=y,p.appendChild(d),p.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(p),f.appendChild(_),t.appendChild(f));const w=document.createElement("li");w.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",y=>{console.log(y),MR(o,y.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=_t.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),po(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function MR(r,e){let t=_t.value.selectedCelltypes.map(i=>i);e?(t.push(r),po(t)):(t=t.filter(i=>i!==r),po(t))}const ER=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{po([]),Ya(Pt.value.listPalette),cellTextbox.value=""})},yR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",_t.value.selectedCelltypes.length!==0?_t.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Pt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function vo(r,e){const t=await fetch(`https://fisheyes.techkyra.com/getdata?data=${e}&gene=${r}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===null)return"[]";const o=["clusters","clusters_pal","genes","hierarchical_clusters"],a=i._id;return o.includes(a)?i.values:i.values.map(f=>parseFloat(f))}function vp(r){return vo(r,Pt.value.prefix)}function TR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function xp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:TR(r,e)}function Sp(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Mp(r,e){return r.map(t=>Math.min(t/e,1))}const bR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),AR(t)})};function AR(r){const e=document.getElementById("geneNotFound");if(r){const t=Pt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),qa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else qa(Pt.value.genes.slice(0,10))}function qa(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",_t.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(_t.value.selectedGenes.length>=_t.value.mode&&(u.target.checked=!1),_t.value.mode===1&&_t.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(_t.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(mo([]),u.target.checked=!0)}fm(t,u.target.checked)})})}function wR(){const r=document.getElementById("modeButton");r.value=_t.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,mR(e?2:1),e?hm():document.getElementById("selectedContainer").innerHTML=""}}function fm(r,e){let t=_t.value.selectedGenes.map(i=>i);e?(t.push(r),mo(t)):(t=t.filter(i=>i!==r),mo(t))}const RR=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{mo([]),qa(Pt.value.genes.slice(0,10)),geneTextbox.value=""})},CR=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",_t.value.selectedGenes.length!==0?_t.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"magenta":"green",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},hm=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",_t.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",_t.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(_t.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),fm(t.value,!1)})}),_t.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}},Oa=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)},LR=new URL(window.location),Sn=new URLSearchParams(LR.search);class PR{constructor(e){Dh(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update();const e=this.camera.quaternion;let t=uo.value.items;for(let i=0;i<t.length*2;i++){const o=new Wt,a=new X,u=new X;this.instancedMesh.getMatrixAt(i,o),o.decompose(a,new hr,u),o.compose(a,e,u),this.instancedMesh.setMatrixAt(i,o)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=cm.value.scene,this.camera=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new pu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=jt.value.cameraPositionZ,this.camera.position.y=jt.value.cameraPositionY,this.camera.position.x=jt.value.cameraPositionX,this.controls=new um(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){uo.pipe(Oi(e=>e.items),Fi((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),Pt.pipe(Oi(e=>e.prefix),Fi((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=Pt.value.prefix}),Wa.pipe(Oi(e=>e.isLoading),Fi((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),vR(Wa.value.isLoading)}),_t.pipe(Oi(e=>e.selectedCelltypes),Fi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),pi(!0),_t.value.selectedCelltypes?await this.updateInstancedMesh(_t.value.selectedCelltypes):await this.updateInstancedMesh([]),pi(!1),yR(),_t.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(_t.value.selectedCelltypes));Sn.has("celltype")?Sn.set("celltype",t):Sn.append("celltype",t)}else Sn.delete("celltype");Oa(Sn)}),_t.pipe(Oi(e=>e.selectedGenes),Fi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),_t.value.mode===2&&hm(),pi(!0),_t.value.selectedGenes?await this.updateInstancedMesh(_t.value.selectedGenes):await this.updateInstancedMesh([]),pi(!1),CR(),_t.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(_t.value.selectedGenes));Sn.append("gene",t),Sn.has("gene")?Sn.set("gene",t):Sn.append("gene",t)}else Sn.delete("gene");Oa(Sn)}),_t.pipe(Oi(e=>e.mode),Fi()).subscribe(e=>{console.log("Selected genes changed:",e),Sn.has("mode")?Sn.set("mode",e):Sn.append("mode",e),Oa(Sn)}),jt.pipe(Oi(e=>e.dotSize),Fi()).subscribe(async e=>{console.log("Dot Size Changed:",e),pi(!0),jt.value.dotSize?await this.updateInstancedMesh(jt.value.dotSize):await this.updateInstancedMesh([]),pi(!1)}),jt.pipe(Oi(e=>e.cameraPositionZ),Fi()).subscribe(async e=>{console.log("Zoom",e),console.log(jt.value.cameraPositionZ),jt.value.cameraPositionZ?await this.updateInstancedMesh(jt.value.cameraPositionZ):await this.updateInstancedMesh([])}),jt.pipe(Oi(e=>e.genePercentile),Fi()).subscribe(async e=>{console.log("Gene Percentile",e),pi(!0),jt.value.genePercentile?await this.updateInstancedMesh(jt.value.genePercentile):await this.updateInstancedMesh([]),pi(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=Pt.value.pallete,i=uo.value.items;const o=new mu(.1,32,32),a=new hu,u=i.length;console.log("Count",u),this.instancedMesh=new sp(o,a,u),this.instancedMeshUmap=new sp(o,a,u);const c=new Tn,f=new Tn;let d,p,_,v=200,x=.5,y=_t.value.selectedCelltypes,w=_t.value.selectedGenes,m=jt.value.dotSize,g=Math.floor(m/5);this.camera.position.z=jt.value.cameraPositionZ;let O=jt.value.genePercentile;if(w.length>0)try{let b=await vp(w[0]);if(w.length==2){let G=await vp(w[1]),N=Sp(G,O);_=Mp(G,N)}let I=Sp(b,O);p=Mp(b,I)}catch(b){console.error("Error fetching data:",b)}for(let b=0;b<u;b++){if(w.length>0)if(y.length===0||y.includes(i[b].clusters)){let G,N;_?(G=xp(p[b],_[b]),N=(p[b]+_[b])/2*m+m/5):(G=xp(p[b]),N=p[b]*m+m/5),d=new Tt(G),c.scale.set(N,N,N),f.scale.set(N*x,N*x,N*x)}else d=new Tt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else y.includes(i[b].clusters)||y.length==0?(d=new Tt(t[i[b].clusters]),c.scale.set(m,m,m),f.scale.set(m*x,m*x,m*x)):(d=new Tt("#5e5e5e"),c.scale.set(g,g,g),f.scale.set(g*x,g*x,g*x));c.position.set(i[b].global_sphere0_norm*v,i[b].global_sphere1_norm*v,i[b].global_sphere2_norm*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(b,c.matrix),this.instancedMesh.setColorAt(b,d);let I=1e4;Pt.value.prefix=="75pe"?f.position.set(i[b].X_umap0_norm*80+I,i[b].X_umap1_norm*80,10):f.position.set(i[b].X_umap0_norm*60+I-25,i[b].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(b,f.matrix),this.instancedMeshUmap.setColorAt(b,d)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const el=Pt.value.prefix;async function IR(){const r=Pt.value.palleteColumn;try{const e=await vo(r,el);lR(JSON.parse(e))}catch(e){console.error("Failed to load items:",e)}}async function DR(){try{const r=await vo("genes",el);cR(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}async function UR(){const r=Pt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>vo(o,el)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}sR(t)}catch(i){console.error("Error combining data:",i)}}async function NR(){try{const r=await vo("hierarchical_clusters",el);uR(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}function OR(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}function dm(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",i.title="Drag to resize UMAP.",e.appendChild(t),e.appendChild(i),r.appendChild(e);let o=!1,a=0,u=0;t.addEventListener("mousedown",N=>{o=!0,a=N.offsetX,u=N.offsetY});const c=()=>{r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const N=document.getElementsByClassName("navbar")[0].offsetHeight;r.offsetTop<N&&(r.style.top=`${N/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=N&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${N/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-N}px`,m.aspect=r.offsetWidth/r.offsetHeight,m.updateProjectionMatrix(),g.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,m.aspect=r.offsetWidth/r.offsetHeight,m.updateProjectionMatrix(),g.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",N=>{o&&(r.style.left=`${(N.clientX-a)/window.innerWidth*100}%`,r.style.top=`${(N.clientY-u)/window.innerHeight*100}%`,c())}),document.addEventListener("mouseup",()=>{o=!1}),i.addEventListener("mousedown",f);function f(N){window.addEventListener("mousemove",d),window.addEventListener("mouseup",p),N.preventDefault()}function d(N){i.style.backgroundColor="red";const D=document.getElementsByClassName("navbar")[0].offsetHeight;let K=N.clientX<0?0:N.clientX,pe=N.clientY<D?D:N.clientY;const T=100,U=100;r.offsetWidth==T&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==U&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-K),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,T)}px`,r.style.height=`${Math.max(fe,U)}px`,me>T&&(r.style.left=`${K}px`),fe>U&&(r.style.top=`${pe}px`),m.aspect=me/fe,m.updateProjectionMatrix(),g.setSize(me,fe)}function p(){i.style.backgroundColor="#ffe432",window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",p)}t.addEventListener("touchstart",N=>{o=!0,a=N.changedTouches[0].clientX,u=N.changedTouches[0].clientY}),document.addEventListener("touchmove",N=>{if(o){let D=N.changedTouches[0].clientX;D+r.offsetWidth>window.innerWidth&&(D=window.innerWidth-r.offsetWidth),r.style.left=`${D/window.innerWidth*100}%`,r.style.top=`${N.changedTouches[0].clientY/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{o=!1}),i.addEventListener("touchstart",_);function _(N){window.addEventListener("touchmove",v),window.addEventListener("touchend",x),N.preventDefault()}function v(N){i.style.backgroundColor="red";const D=document.getElementsByClassName("navbar")[0].offsetHeight;let K=N.changedTouches[0].clientX<0?0:N.changedTouches[0].clientX,pe=N.changedTouches[0].clientY<D?D:N.changedTouches[0].clientY;const T=100,U=100;r.offsetWidth==T&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==U&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-K),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,T)}px`,r.style.height=`${Math.max(fe,U)}px`,me>T&&(r.style.left=`${K}px`),fe>U&&(r.style.top=`${pe}px`),m.aspect=me/fe,m.updateProjectionMatrix(),g.setSize(me,fe)}function x(N){i.style.backgroundColor="#ffe432",window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}const y=document.createElement("div");y.id="overlayScene",y.style.width="100%",y.style.height="100%",r.appendChild(y);const w=cm.value.scene,m=new Gn(75,y.offsetWidth/y.offsetHeight,.1,1e3),g=new pu,O=window.innerWidth*.25,b=window.innerHeight*.5;m.aspect=O/b,m.updateProjectionMatrix(),g.setSize(O,b),g.render(w,m),y.appendChild(g.domElement),m.position.x=1e4,m.position.z=150;const I=new um(m,g.domElement);I.enableRotate=!1,I.mouseButtons={LEFT:zi.PAN,MIDDLE:zi.DOLLY,RIGHT:zi.ROTATE},I.touches={ONE:rr.PAN,TWO:rr.DOLLY_PAN},m.lookAt(1e4,0,10),I.target.set(1e4,0,10),I.update(),g.render(w,m);function G(){requestAnimationFrame(G),g.render(w,m)}return G(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(dm());document.addEventListener("DOMContentLoaded",async()=>{dm();const r=OR();document.body.appendChild(r),pi(!0);try{await IR(),await UR(),await DR(),await NR();const e=document.body;new PR(e);const t=new URL(window.location),i=new URLSearchParams(t.search);if(i.has("celltype")){const a=JSON.parse(decodeURIComponent(i.get("celltype"))).filter(u=>Object.keys(Pt.value.pallete).includes(u));po(a)}if(i.has("gene")){const a=JSON.parse(decodeURIComponent(i.get("gene"))).filter(u=>Pt.value.genes.includes(u));mo(a)}Ya(Pt.value.listPalette),ER(),xR(),qa(Pt.value.genes.slice(0,10)),RR(),bR()}catch(e){console.error("Failed to load data:",e)}finally{pi(!1)}});function FR(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=new URLSearchParams("");i.append("prefix",e.item(t).innerText),Oa(i),e.item(t).innerText!==Pt.value.prefix&&(r.innerHTML=Pt.value.prefix,window.location.reload())})}const BR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{console.log(r.style.display),r.style.display=r.style.display==="none"?"block":"none",console.log(r.style.display),t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white")})},zR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},GR=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),d=document.getElementById("cellCheckbox"),p=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const y=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="block"},w=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="none"};["mouseenter"].forEach(m=>{x.addEventListener(m,function(){y()})}),["mouseleave"].forEach(m=>{x.addEventListener(m,function(){w()})})}),e.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.oninput=function(){o.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))},i.addEventListener("mouseup",function(){o.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))}),o.oninput=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),_p(parseFloat(this.value).toFixed(2))}),f.oninput=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),_p(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{FR()})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{BR(),zR(),GR(),wR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);
