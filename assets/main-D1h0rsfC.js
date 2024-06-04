var dS=Object.defineProperty;var pS=(r,e,t)=>e in r?dS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Uh=(r,e,t)=>(pS(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="162",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mS=0,Nh=1,gS=2,yp=1,_S=2,Oi=3,hr=0,Ln=1,Bi=2,cr=0,As=1,Oh=2,Fh=3,Bh=4,vS=5,Pr=100,xS=101,MS=102,zh=103,Gh=104,SS=200,ES=201,yS=202,TS=203,qc=204,$c=205,bS=206,AS=207,wS=208,RS=209,CS=210,LS=211,PS=212,IS=213,DS=214,US=0,NS=1,OS=2,Oa=3,FS=4,BS=5,zS=6,GS=7,Tp=0,HS=1,VS=2,ur=0,kS=1,WS=2,XS=3,YS=4,qS=5,$S=6,KS=7,bp=300,Rs=301,Cs=302,Kc=303,Zc=304,$a=306,jc=1e3,ai=1001,Jc=1002,ln=1003,Hh=1004,eo=1005,Cn=1006,fc=1007,Dr=1008,fr=1009,ZS=1010,jS=1011,cu=1012,Ap=1013,lr=1014,vi=1015,uo=1016,wp=1017,Rp=1018,Ur=1020,JS=1021,li=1023,QS=1024,eE=1025,Nr=1026,Ls=1027,Cp=1028,Lp=1029,tE=1030,Pp=1031,Ip=1033,hc=33776,dc=33777,pc=33778,mc=33779,Vh=35840,kh=35841,Wh=35842,Xh=35843,Dp=36196,Yh=37492,qh=37496,$h=37808,Kh=37809,Zh=37810,jh=37811,Jh=37812,Qh=37813,ed=37814,td=37815,nd=37816,id=37817,rd=37818,sd=37819,od=37820,ad=37821,gc=36492,ld=36494,cd=36495,nE=36283,ud=36284,fd=36285,hd=36286,iE=3200,rE=3201,sE=0,oE=1,ar="",gi="srgb",pr="srgb-linear",uu="display-p3",Ka="display-p3-linear",Fa="linear",zt="srgb",Ba="rec709",za="p3",os=7680,dd=519,aE=512,lE=513,cE=514,Up=515,uE=516,fE=517,hE=518,dE=519,pd=35044,md="300 es",Qc=1035,zi=2e3,Ga=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const lo=Math.PI/180,fo=180/Math.PI;function Is(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function pE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function mE(r,e,t){return r!==e?(t-r)/(e-r):0}function co(r,e,t){return(1-t)*r+t*e}function gE(r,e,t,i){return co(r,e,1-Math.exp(-t*i))}function _E(r,e=1){return e-Math.abs(fu(r,e*2)-e)}function vE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ME(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SE(r,e){return r+Math.random()*(e-r)}function EE(r){return r*(.5-Math.random())}function yE(r){r!==void 0&&(gd=r);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function TE(r){return r*lo}function bE(r){return r*fo}function eu(r){return(r&r-1)===0&&r!==0}function AE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ha(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wE(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),E=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*E,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*E,c*d);break;case"ZYZ":r.set(f*E,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const RE={DEG2RAD:lo,RAD2DEG:fo,generateUUID:Is,clamp:mn,euclideanModulo:fu,mapLinear:pE,inverseLerp:mE,lerp:co,damp:gE,pingpong:_E,smoothstep:vE,smootherstep:xE,randInt:ME,randFloat:SE,randFloatSpread:EE,seededRandom:yE,degToRad:TE,radToDeg:bE,isPowerOfTwo:eu,ceilPowerOfTwo:AE,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:wE,normalize:Mn,denormalize:ys};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,o,a,u,c,f,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],x=i[5],E=i[8],w=o[0],g=o[3],m=o[6],O=o[1],T=o[4],L=o[7],z=o[2],P=o[5],U=o[8];return a[0]=u*w+c*O+f*z,a[3]=u*g+c*T+f*P,a[6]=u*m+c*L+f*U,a[1]=d*w+p*O+_*z,a[4]=d*g+p*T+_*P,a[7]=d*m+p*L+_*U,a[2]=v*w+x*O+E*z,a[5]=v*g+x*T+E*P,a[8]=v*m+x*L+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,x=d*a-u*f,E=t*_+i*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-p*i)*w,e[2]=(c*i-o*u)*w,e[3]=v*w,e[4]=(p*t-o*f)*w,e[5]=(o*a-c*t)*w,e[6]=x*w,e[7]=(i*f-d*t)*w,e[8]=(u*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new mt;function Np(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function CE(){const r=Va("canvas");return r.style.display="block",r}const _d={};function LE(r){r in _d||(_d[r]=!0,console.warn(r))}const vd=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xd=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[pr]:{transfer:Fa,primaries:Ba,toReference:r=>r,fromReference:r=>r},[gi]:{transfer:zt,primaries:Ba,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Fa,primaries:za,toReference:r=>r.applyMatrix3(xd),fromReference:r=>r.applyMatrix3(vd)},[uu]:{transfer:zt,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xd),fromReference:r=>r.applyMatrix3(vd).convertLinearToSRGB()}},PE=new Set([pr,Ka]),It={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!PE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=la[e].toReference,o=la[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return la[r].primaries},getTransfer:function(r){return r===ar?Fa:la[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class Op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Va("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ws(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IE=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(xc(o[u].image)):a.push(xc(o[u]))}else a=xc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function xc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DE=0;class En extends Br{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=ai,o=ai,a=Cn,u=Dr,c=li,f=fr,d=En.DEFAULT_ANISOTROPY,p=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Is(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=bp;En.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],x=f[5],E=f[9],w=f[2],g=f[6],m=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-g)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+g)<.1&&Math.abs(d+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,L=(x+1)/2,z=(m+1)/2,P=(p+v)/4,U=(_+w)/4,K=(E+g)/4;return T>L&&T>z?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=P/i,a=U/i):L>z?L<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),i=P/o,a=K/o):z<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(z),i=U/a,o=K/a),this.set(i,o,a,t),this}let O=Math.sqrt((g-E)*(g-E)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(O)<.001&&(O=1),this.x=(g-E)/O,this.y=(_-w)/O,this.z=(v-p)/O,this.w=Math.acos((d+x+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new En(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends UE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bp extends En{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NE extends En{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],E=a[u+2],w=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=w;return}if(_!==w||f!==v||d!==x||p!==E){let g=1-c;const m=f*v+d*x+p*E+_*w,O=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const z=Math.sqrt(T),P=Math.atan2(z,m*O);g=Math.sin(g*P)/z,c=Math.sin(c*P)/z}const L=c*O;if(f=f*g+v*L,d=d*g+x*L,p=p*g+E*L,_=_*g+w*L,g===1-c){const z=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=z,d*=z,p*=z,_*=z}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+p*_+f*x-d*v,e[t+1]=f*E+p*v+d*_-c*x,e[t+2]=d*E+p*x+c*v-f*_,e[t+3]=p*E-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),E=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_-v*x*E;break;case"YXZ":this._x=v*p*_+d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_+v*x*E;break;case"ZXY":this._x=v*p*_-d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_-v*x*E;break;case"ZYX":this._x=v*p*_-d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_+v*x*E;break;case"YZX":this._x=v*p*_+d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_-v*x*E;break;case"XZY":this._x=v*p*_-d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(p-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new X,Md=new Fr;class zr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ii):ii.fromBufferAttribute(a,u),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),ua.subVectors(this.max,to),ls.subVectors(e.a,to),cs.subVectors(e.b,to),us.subVectors(e.c,to),ji.subVectors(cs,ls),Ji.subVectors(us,cs),Tr.subVectors(ls,us);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-Tr.z,Tr.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,Tr.z,0,-Tr.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-Tr.y,Tr.x,0];return!Sc(t,ls,cs,us,ua)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,ls,cs,us,ua))?!1:(fa.crossVectors(ji,Ji),t=[fa.x,fa.y,fa.z],Sc(t,ls,cs,us,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new X,new X,new X,new X,new X,new X,new X,new X],ii=new X,ca=new zr,ls=new X,cs=new X,us=new X,ji=new X,Ji=new X,Tr=new X,to=new X,ua=new X,fa=new X,br=new X;function Sc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){br.fromArray(r,a);const c=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),f=e.dot(br),d=t.dot(br),p=i.dot(br);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const OE=new zr,no=new X,Ec=new X;class mo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):OE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(no,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Ec)),this.expandByPoint(no.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new X,yc=new X,ha=new X,Qi=new X,Tc=new X,da=new X,bc=new X;class zp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){yc.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(yc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(ha),c=Qi.dot(this.direction),f=-Qi.dot(ha),d=Qi.lengthSq(),p=Math.abs(1-u*u);let _,v,x,E;if(p>0)if(_=u*f-c,v=u*c-f,E=a*p,_>=0)if(v>=-E)if(v<=E){const w=1/p;_*=w,v*=w,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-E?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=E?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(yc).addScaledVector(ha,v),x}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),o=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,o,a){Tc.subVectors(t,e),da.subVectors(i,e),bc.crossVectors(Tc,da);let u=this.direction.dot(bc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Qi.subVectors(this.origin,e);const f=c*this.direction.dot(da.crossVectors(Qi,da));if(f<0)return null;const d=c*this.direction.dot(Tc.cross(Qi));if(d<0||f+d>u)return null;const p=-c*Qi.dot(bc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,g){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,g)}set(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=o,m[1]=a,m[5]=u,m[9]=c,m[13]=f,m[2]=d,m[6]=p,m[10]=_,m[14]=v,m[3]=x,m[7]=E,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),u=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,x=u*_,E=c*p,w=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=x+E*d,t[5]=v-w*d,t[9]=-c*f,t[2]=w-v*d,t[6]=E+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,x=f*_,E=d*p,w=d*_;t[0]=v+w*c,t[4]=E*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=x*c-E,t[6]=w+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,x=f*_,E=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,x=u*_,E=c*p,w=c*_;t[0]=f*p,t[4]=E*d-x,t[8]=v*d+w,t[1]=f*_,t[5]=w*d+v,t[9]=x*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,E=c*f,w=c*d;t[0]=f*p,t[4]=w-v*_,t[8]=E*_+x,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*_+E,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*f,x=u*d,E=c*f,w=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=x*_-E,t[2]=E*_-x,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FE,e,BE)}lookAt(e,t,i){const o=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),er.crossVectors(i,Fn),er.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),er.crossVectors(i,Fn)),er.normalize(),pa.crossVectors(Fn,er),o[0]=er.x,o[4]=pa.x,o[8]=Fn.x,o[1]=er.y,o[5]=pa.y,o[9]=Fn.y,o[2]=er.z,o[6]=pa.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],x=i[13],E=i[2],w=i[6],g=i[10],m=i[14],O=i[3],T=i[7],L=i[11],z=i[15],P=o[0],U=o[4],K=o[8],pe=o[12],b=o[1],N=o[5],me=o[9],fe=o[13],G=o[2],se=o[6],ne=o[10],ce=o[14],te=o[3],ue=o[7],he=o[11],Me=o[15];return a[0]=u*P+c*b+f*G+d*te,a[4]=u*U+c*N+f*se+d*ue,a[8]=u*K+c*me+f*ne+d*he,a[12]=u*pe+c*fe+f*ce+d*Me,a[1]=p*P+_*b+v*G+x*te,a[5]=p*U+_*N+v*se+x*ue,a[9]=p*K+_*me+v*ne+x*he,a[13]=p*pe+_*fe+v*ce+x*Me,a[2]=E*P+w*b+g*G+m*te,a[6]=E*U+w*N+g*se+m*ue,a[10]=E*K+w*me+g*ne+m*he,a[14]=E*pe+w*fe+g*ce+m*Me,a[3]=O*P+T*b+L*G+z*te,a[7]=O*U+T*N+L*se+z*ue,a[11]=O*K+T*me+L*ne+z*he,a[15]=O*pe+T*fe+L*ce+z*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],x=e[14],E=e[3],w=e[7],g=e[11],m=e[15];return E*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+w*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*p-a*f*p)+g*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*p-i*d*p)+m*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],x=e[11],E=e[12],w=e[13],g=e[14],m=e[15],O=_*g*d-w*v*d+w*f*x-c*g*x-_*f*m+c*v*m,T=E*v*d-p*g*d-E*f*x+u*g*x+p*f*m-u*v*m,L=p*w*d-E*_*d+E*c*x-u*w*x-p*c*m+u*_*m,z=E*_*f-p*w*f-E*c*v+u*w*v+p*c*g-u*_*g,P=t*O+i*T+o*L+a*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=O*U,e[1]=(w*v*a-_*g*a-w*o*x+i*g*x+_*o*m-i*v*m)*U,e[2]=(c*g*a-w*f*a+w*o*d-i*g*d-c*o*m+i*f*m)*U,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*U,e[4]=T*U,e[5]=(p*g*a-E*v*a+E*o*x-t*g*x-p*o*m+t*v*m)*U,e[6]=(E*f*a-u*g*a-E*o*d+t*g*d+u*o*m-t*f*m)*U,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*x+t*f*x)*U,e[8]=L*U,e[9]=(E*_*a-p*w*a-E*i*x+t*w*x+p*i*m-t*_*m)*U,e[10]=(u*w*a-E*c*a+E*i*d-t*w*d-u*i*m+t*c*m)*U,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*x-t*c*x)*U,e[12]=z*U,e[13]=(p*w*o-E*_*o+E*i*v-t*w*v-p*i*g+t*_*g)*U,e[14]=(E*c*o-u*w*o-E*i*f+t*w*f+u*i*g-t*c*g)*U,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*U,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,x=a*p,E=a*_,w=u*p,g=u*_,m=c*_,O=f*d,T=f*p,L=f*_,z=i.x,P=i.y,U=i.z;return o[0]=(1-(w+m))*z,o[1]=(x+L)*z,o[2]=(E-T)*z,o[3]=0,o[4]=(x-L)*P,o[5]=(1-(v+m))*P,o[6]=(g+O)*P,o[7]=0,o[8]=(E+T)*U,o[9]=(g-O)*U,o[10]=(1-(v+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=fs.set(o[0],o[1],o[2]).length();const u=fs.set(o[4],o[5],o[6]).length(),c=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ri.copy(this);const d=1/a,p=1/u,_=1/c;return ri.elements[0]*=d,ri.elements[1]*=d,ri.elements[2]*=d,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,t.setFromRotationMatrix(ri),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=zi){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,E;if(c===zi)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ga)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=zi){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*p;let E,w;if(c===zi)E=(u+a)*_,w=-2*_;else if(c===Ga)E=a*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new X,ri=new Yt,FE=new X(0,0,0),BE=new X(1,1,1),er=new X,pa=new X,Fn=new X,Sd=new Yt,Ed=new Fr;class Gi{constructor(e=0,t=0,i=0,o=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-mn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const yd=new X,hs=new Fr,Di=new Yt,ma=new X,io=new X,GE=new X,HE=new Fr,Td=new X(1,0,0),bd=new X(0,1,0),Ad=new X(0,0,1),VE={type:"added"},kE={type:"removed"},Ac={type:"childadded",child:null},wc={type:"childremoved",child:null};class yn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new X,t=new Gi,i=new Fr,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Ad,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(io,ma,this.up):Di.lookAt(ma,io,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(Di),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VE),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kE),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}yn.DEFAULT_UP=new X(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new X,Ui=new X,Rc=new X,Ni=new X,ds=new X,ps=new X,wd=new X,Cc=new X,Lc=new X,Pc=new X;class xi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),si.subVectors(e,t),o.cross(si);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){si.subVectors(o,t),Ui.subVectors(i,t),Rc.subVectors(e,t);const u=si.dot(si),c=si.dot(Ui),f=si.dot(Rc),d=Ui.dot(Ui),p=Ui.dot(Rc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*p)*v,E=(u*p-c*f)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Ni)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ni.x),f.addScaledVector(u,Ni.y),f.addScaledVector(c,Ni.z),f)}static isFrontFacing(e,t,i,o){return si.subVectors(i,t),Ui.subVectors(e,t),si.cross(Ui).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ds.subVectors(o,i),ps.subVectors(a,i),Cc.subVectors(e,i);const f=ds.dot(Cc),d=ps.dot(Cc);if(f<=0&&d<=0)return t.copy(i);Lc.subVectors(e,o);const p=ds.dot(Lc),_=ps.dot(Lc);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(ds,u);Pc.subVectors(e,a);const x=ds.dot(Pc),E=ps.dot(Pc);if(E>=0&&x<=E)return t.copy(a);const w=x*d-f*E;if(w<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(i).addScaledVector(ps,c);const g=p*E-x*_;if(g<=0&&_-p>=0&&x-E>=0)return wd.subVectors(a,o),c=(_-p)/(_-p+(x-E)),t.copy(o).addScaledVector(wd,c);const m=1/(g+w+v);return u=w*m,c=v*m,t.copy(i).addScaledVector(ds,u).addScaledVector(ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=It.workingColorSpace){if(e=fu(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Ic(u,a,e+1/3),this.g=Ic(u,a,e),this.b=Ic(u,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=gi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=Hp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return It.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,o=pn.g,a=pn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=gi){It.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,o=pn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(ga);const i=co(tr.h,ga.h,t),o=co(tr.s,ga.s,t),a=co(tr.l,ga.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Tt;Tt.NAMES=Hp;let WE=0;class Za extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=As,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=$c,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new X,_a=new at;class ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return LE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),i=Mn(i,this.array),o=Mn(o,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pd&&(e.usage=this.usage),e}}class Vp extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kp extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let XE=0;const Zn=new Yt,Dc=new yn,ms=new X,Bn=new zr,ro=new zr,sn=new X;class Hi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?kp:Vp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Bn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ro.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(Bn.min,ro.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,ro.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(ro.min),Bn.expandByPoint(ro.max))}Bn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)sn.fromBufferAttribute(c,d),f&&(ms.fromBufferAttribute(e,d),sn.add(ms)),o=Math.max(o,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let K=0;K<i.count;K++)c[K]=new X,f[K]=new X;const d=new X,p=new X,_=new X,v=new at,x=new at,E=new at,w=new X,g=new X;function m(K,pe,b){d.fromBufferAttribute(i,K),p.fromBufferAttribute(i,pe),_.fromBufferAttribute(i,b),v.fromBufferAttribute(a,K),x.fromBufferAttribute(a,pe),E.fromBufferAttribute(a,b),p.sub(d),_.sub(d),x.sub(v),E.sub(v);const N=1/(x.x*E.y-E.x*x.y);isFinite(N)&&(w.copy(p).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(N),g.copy(_).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(N),c[K].add(w),c[pe].add(w),c[b].add(w),f[K].add(g),f[pe].add(g),f[b].add(g))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,pe=O.length;K<pe;++K){const b=O[K],N=b.start,me=b.count;for(let fe=N,G=N+me;fe<G;fe+=3)m(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const T=new X,L=new X,z=new X,P=new X;function U(K){z.fromBufferAttribute(o,K),P.copy(z);const pe=c[K];T.copy(pe),T.sub(z.multiplyScalar(z.dot(pe))).normalize(),L.crossVectors(P,pe);const N=L.dot(f[K])<0?-1:1;u.setXYZW(K,T.x,T.y,T.z,N)}for(let K=0,pe=O.length;K<pe;++K){const b=O[K],N=b.start,me=b.count;for(let fe=N,G=N+me;fe<G;fe+=3)U(e.getX(fe+0)),U(e.getX(fe+1)),U(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),w=e.getX(v+1),g=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,g),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,g),c.add(p),f.add(p),d.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let x=0,E=0;for(let w=0,g=f.length;w<g;w++){c.isInterleavedBufferAttribute?x=f[w]*c.data.stride+c.offset:x=f[w]*p;for(let m=0;m<p;m++)v[E++]=d[x++]}return new ui(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rd=new Yt,Ar=new zp,va=new mo,Cd=new X,gs=new X,_s=new X,vs=new X,Uc=new X,xa=new X,Ma=new at,Sa=new at,Ea=new at,Ld=new X,Pd=new X,Id=new X,ya=new X,Ta=new X;class ci extends yn{constructor(e=new Hi,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){xa.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Uc.fromBufferAttribute(_,e),u?xa.addScaledVector(Uc,p):xa.addScaledVector(Uc.sub(t),p))}t.add(xa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(va.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(va,Cd)===null||Ar.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Rd.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(Rd),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const g=v[E],m=u[g.materialIndex],O=Math.max(g.start,x.start),T=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let L=O,z=T;L<z;L+=3){const P=c.getX(L),U=c.getX(L+1),K=c.getX(L+2);o=ba(this,m,e,i,d,p,_,P,U,K),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let g=E,m=w;g<m;g+=3){const O=c.getX(g),T=c.getX(g+1),L=c.getX(g+2);o=ba(this,u,e,i,d,p,_,O,T,L),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const g=v[E],m=u[g.materialIndex],O=Math.max(g.start,x.start),T=Math.min(f.count,Math.min(g.start+g.count,x.start+x.count));for(let L=O,z=T;L<z;L+=3){const P=L,U=L+1,K=L+2;o=ba(this,m,e,i,d,p,_,P,U,K),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let g=E,m=w;g<m;g+=3){const O=g,T=g+1,L=g+2;o=ba(this,u,e,i,d,p,_,O,T,L),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function YE(r,e,t,i,o,a,u,c){let f;if(e.side===Ln?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===hr,c),f===null)return null;Ta.copy(c),Ta.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Ta);return d<t.near||d>t.far?null:{distance:d,point:Ta.clone(),object:r}}function ba(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,gs),r.getVertexPosition(f,_s),r.getVertexPosition(d,vs);const p=YE(r,e,t,i,gs,_s,vs,ya);if(p){o&&(Ma.fromBufferAttribute(o,c),Sa.fromBufferAttribute(o,f),Ea.fromBufferAttribute(o,d),p.uv=xi.getInterpolation(ya,gs,_s,vs,Ma,Sa,Ea,new at)),a&&(Ma.fromBufferAttribute(a,c),Sa.fromBufferAttribute(a,f),Ea.fromBufferAttribute(a,d),p.uv1=xi.getInterpolation(ya,gs,_s,vs,Ma,Sa,Ea,new at)),u&&(Ld.fromBufferAttribute(u,c),Pd.fromBufferAttribute(u,f),Id.fromBufferAttribute(u,d),p.normal=xi.getInterpolation(ya,gs,_s,vs,Ld,Pd,Id,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};xi.getNormal(gs,_s,vs,_.normal),p.face=_}return p}class go extends Hi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,o,u,2),E("x","z","y",1,-1,e,i,-t,o,u,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new Gn(d,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(_,2));function E(w,g,m,O,T,L,z,P,U,K,pe){const b=L/U,N=z/K,me=L/2,fe=z/2,G=P/2,se=U+1,ne=K+1;let ce=0,te=0;const ue=new X;for(let he=0;he<ne;he++){const Me=he*N-fe;for(let De=0;De<se;De++){const et=De*b-me;ue[w]=et*O,ue[g]=Me*T,ue[m]=G,d.push(ue.x,ue.y,ue.z),ue[w]=0,ue[g]=0,ue[m]=P>0?1:-1,p.push(ue.x,ue.y,ue.z),_.push(De/U),_.push(1-he/K),ce+=1}}for(let he=0;he<K;he++)for(let Me=0;Me<U;Me++){const De=v+Me+se*he,et=v+Me+se*(he+1),Q=v+(Me+1)+se*(he+1),ge=v+(Me+1)+se*he;f.push(De,et,ge),f.push(et,Q,ge),te+=6}c.addGroup(x,te,pe),x+=te,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const i=Ps(r[t]);for(const o in i)e[o]=i[o]}return e}function qE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wp(r){return r.getRenderTarget()===null?r.outputColorSpace:It.workingColorSpace}const $E={clone:Ps,merge:Sn};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xp extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new X,Dd=new at,Ud=new at;class zn extends Xp{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ud),t.subVectors(Ud,Dd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ms=1;class jE extends yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(xs,Ms,e,t);o.layers=this.layers,this.add(o);const a=new zn(xs,Ms,e,t);a.layers=this.layers,this.add(a);const u=new zn(xs,Ms,e,t);u.layers=this.layers,this.add(u);const c=new zn(xs,Ms,e,t);c.layers=this.layers,this.add(c);const f=new zn(xs,Ms,e,t);f.layers=this.layers,this.add(f);const d=new zn(xs,Ms,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Yp extends En{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JE extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Yp(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new go(5,5,5),a=new dr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:cr});a.uniforms.tEquirect.value=t;const u=new ci(o,a),c=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Cn),new jE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Nc=new X,QE=new X,ey=new mt;class or{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Nc.subVectors(i,t).cross(QE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ey.getNormalMatrix(e),o=this.coplanarPoint(Nc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new mo,Aa=new X;class qp{constructor(e=new or,t=new or,i=new or,o=new or,a=new or,u=new or){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],x=o[8],E=o[9],w=o[10],g=o[11],m=o[12],O=o[13],T=o[14],L=o[15];if(i[0].setComponents(f-a,v-d,g-x,L-m).normalize(),i[1].setComponents(f+a,v+d,g+x,L+m).normalize(),i[2].setComponents(f+u,v+p,g+E,L+O).normalize(),i[3].setComponents(f-u,v-p,g-E,L-O).normalize(),i[4].setComponents(f-c,v-_,g-w,L-T).normalize(),t===zi)i[5].setComponents(f+c,v+_,g+w,L+T).normalize();else if(t===Ga)i[5].setComponents(c,_,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Aa.x=o.normal.x>0?e.max.x:e.min.x,Aa.y=o.normal.y>0?e.max.y:e.min.y,Aa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $p(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function ty(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,x=_.byteLength,E=r.createBuffer();r.bindBuffer(p,E),r.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=r.SHORT;else if(_ instanceof Uint32Array)w=r.UNSIGNED_INT;else if(_ instanceof Int32Array)w=r.INT;else if(_ instanceof Int8Array)w=r.BYTE;else if(_ instanceof Uint8Array)w=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,p,_){const v=p.array,x=p._updateRange,E=p.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&E.length===0&&r.bufferSubData(_,0,v),E.length!==0){for(let w=0,g=E.length;w<g;w++){const m=E[w];t?r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v,m.start,m.count):r.bufferSubData(_,m.start*v.BYTES_PER_ELEMENT,v.subarray(m.start,m.start+m.count))}p.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class ja extends Hi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,x=[],E=[],w=[],g=[];for(let m=0;m<p;m++){const O=m*v-u;for(let T=0;T<d;T++){const L=T*_-a;E.push(L,-O,0),w.push(0,0,1),g.push(T/c),g.push(1-m/f)}}for(let m=0;m<f;m++)for(let O=0;O<c;O++){const T=O+d*m,L=O+d*(m+1),z=O+1+d*(m+1),P=O+1+d*m;x.push(T,L,P),x.push(L,z,P)}this.setIndex(x),this.setAttribute("position",new Gn(E,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
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
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
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
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,by=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
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
	
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
#endif`,Yy=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
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
#endif`,tT=`struct PhysicalMaterial {
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
}`,nT=`
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
#endif`,iT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hT=`#if defined( USE_POINTS_UV )
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
#endif`,dT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
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
#endif`,AT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HT=`float getShadowMask() {
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
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
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
}`,cb=`#if DEPTH_PACKING == 3200
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
}`,ub=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,xb=`#define LAMBERT
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
}`,Mb=`#define MATCAP
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
}`,Eb=`#define NORMAL
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
}`,yb=`#define NORMAL
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
}`,Tb=`#define PHONG
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
}`,bb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,wb=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,Cb=`#define TOON
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
}`,Lb=`uniform float size;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Db=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:fy,begin_vertex:hy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:My,color_fragment:Sy,color_pars_fragment:Ey,color_pars_vertex:yy,color_vertex:Ty,common:by,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:wy,displacementmap_pars_vertex:Ry,displacementmap_vertex:Cy,emissivemap_fragment:Ly,emissivemap_pars_fragment:Py,colorspace_fragment:Iy,colorspace_pars_fragment:Dy,envmap_fragment:Uy,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Oy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:Ky,envmap_vertex:By,fog_vertex:zy,fog_pars_vertex:Gy,fog_fragment:Hy,fog_pars_fragment:Vy,gradientmap_pars_fragment:ky,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:qy,lights_pars_begin:$y,lights_toon_fragment:Zy,lights_toon_pars_fragment:jy,lights_phong_fragment:Jy,lights_phong_pars_fragment:Qy,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:nT,lights_fragment_maps:iT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:lT,map_fragment:cT,map_pars_fragment:uT,map_particle_fragment:fT,map_particle_pars_fragment:hT,metalnessmap_fragment:dT,metalnessmap_pars_fragment:pT,morphinstance_vertex:mT,morphcolor_vertex:gT,morphnormal_vertex:_T,morphtarget_pars_vertex:vT,morphtarget_vertex:xT,normal_fragment_begin:MT,normal_fragment_maps:ST,normal_pars_fragment:ET,normal_pars_vertex:yT,normal_vertex:TT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:AT,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:CT,opaque_fragment:LT,packing:PT,premultiplied_alpha_fragment:IT,project_vertex:DT,dithering_fragment:UT,dithering_pars_fragment:NT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:zT,shadowmap_vertex:GT,shadowmask_pars_fragment:HT,skinbase_vertex:VT,skinning_pars_vertex:kT,skinning_vertex:WT,skinnormal_vertex:XT,specularmap_fragment:YT,specularmap_pars_fragment:qT,tonemapping_fragment:$T,tonemapping_pars_fragment:KT,transmission_fragment:ZT,transmission_pars_fragment:jT,uv_pars_fragment:JT,uv_pars_vertex:QT,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:rb,backgroundCube_frag:sb,cube_vert:ob,cube_frag:ab,depth_vert:lb,depth_frag:cb,distanceRGBA_vert:ub,distanceRGBA_frag:fb,equirect_vert:hb,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:_b,meshlambert_vert:vb,meshlambert_frag:xb,meshmatcap_vert:Mb,meshmatcap_frag:Sb,meshnormal_vert:Eb,meshnormal_frag:yb,meshphong_vert:Tb,meshphong_frag:bb,meshphysical_vert:Ab,meshphysical_frag:wb,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:Lb,points_frag:Pb,shadow_vert:Ib,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Nb},Te={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},_i={basic:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Sn([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Sn([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Sn([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Sn([Te.common,Te.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Sn([Te.lights,Te.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};_i.physical={uniforms:Sn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const wa={r:0,b:0,g:0},Rr=new Gi,Ob=new Yt;function Fb(r,e,t,i,o,a,u){const c=new Tt(0);let f=a===!0?0:1,d,p,_=null,v=0,x=null;function E(g,m){let O=!1,T=m.isScene===!0?m.background:null;T&&T.isTexture&&(T=(m.backgroundBlurriness>0?t:e).get(T)),T===null?w(c,f):T&&T.isColor&&(w(T,1),O=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||O)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===$a)?(p===void 0&&(p=new ci(new go(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Ps(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Rr.copy(m.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(Rr)),p.material.toneMapped=It.getTransfer(T.colorSpace)!==zt,(_!==T||v!==T.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new ci(new ja(2,2),new dr({name:"BackgroundMaterial",uniforms:Ps(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=It.getTransfer(T.colorSpace)!==zt,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||v!==T.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function w(g,m){g.getRGB(wa,Wp(r)),i.buffers.color.setClear(wa.r,wa.g,wa.b,m,u)}return{getClearColor:function(){return c},setClearColor:function(g,m=1){c.set(g),f=m,w(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,w(c,f)},render:E}}function Bb(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=g(null);let d=f,p=!1;function _(G,se,ne,ce,te){let ue=!1;if(u){const he=w(ce,ne,se);d!==he&&(d=he,x(d.object)),ue=m(G,ce,ne,te),ue&&O(G,ce,ne,te)}else{const he=se.wireframe===!0;(d.geometry!==ce.id||d.program!==ne.id||d.wireframe!==he)&&(d.geometry=ce.id,d.program=ne.id,d.wireframe=he,ue=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ue||p)&&(p=!1,K(G,se,ne,ce),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(G){return i.isWebGL2?r.bindVertexArray(G):a.bindVertexArrayOES(G)}function E(G){return i.isWebGL2?r.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function w(G,se,ne){const ce=ne.wireframe===!0;let te=c[G.id];te===void 0&&(te={},c[G.id]=te);let ue=te[se.id];ue===void 0&&(ue={},te[se.id]=ue);let he=ue[ce];return he===void 0&&(he=g(v()),ue[ce]=he),he}function g(G){const se=[],ne=[],ce=[];for(let te=0;te<o;te++)se[te]=0,ne[te]=0,ce[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ne,attributeDivisors:ce,object:G,attributes:{},index:null}}function m(G,se,ne,ce){const te=d.attributes,ue=se.attributes;let he=0;const Me=ne.getAttributes();for(const De in Me)if(Me[De].location>=0){const Q=te[De];let ge=ue[De];if(ge===void 0&&(De==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),De==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;he++}return d.attributesNum!==he||d.index!==ce}function O(G,se,ne,ce){const te={},ue=se.attributes;let he=0;const Me=ne.getAttributes();for(const De in Me)if(Me[De].location>=0){let Q=ue[De];Q===void 0&&(De==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),De==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor));const ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),te[De]=ge,he++}d.attributes=te,d.attributesNum=he,d.index=ce}function T(){const G=d.newAttributes;for(let se=0,ne=G.length;se<ne;se++)G[se]=0}function L(G){z(G,0)}function z(G,se){const ne=d.newAttributes,ce=d.enabledAttributes,te=d.attributeDivisors;ne[G]=1,ce[G]===0&&(r.enableVertexAttribArray(G),ce[G]=1),te[G]!==se&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,se),te[G]=se)}function P(){const G=d.newAttributes,se=d.enabledAttributes;for(let ne=0,ce=se.length;ne<ce;ne++)se[ne]!==G[ne]&&(r.disableVertexAttribArray(ne),se[ne]=0)}function U(G,se,ne,ce,te,ue,he){he===!0?r.vertexAttribIPointer(G,se,ne,te,ue):r.vertexAttribPointer(G,se,ne,ce,te,ue)}function K(G,se,ne,ce){if(i.isWebGL2===!1&&(G.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const te=ce.attributes,ue=ne.getAttributes(),he=se.defaultAttributeValues;for(const Me in ue){const De=ue[Me];if(De.location>=0){let et=te[Me];if(et===void 0&&(Me==="instanceMatrix"&&G.instanceMatrix&&(et=G.instanceMatrix),Me==="instanceColor"&&G.instanceColor&&(et=G.instanceColor)),et!==void 0){const Q=et.normalized,ge=et.itemSize,Re=t.get(et);if(Re===void 0)continue;const Ze=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,St=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||et.gpuType===Ap);if(et.isInterleavedBufferAttribute){const ke=et.data,W=ke.stride,Wt=et.offset;if(ke.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)z(De.location+Ue,ke.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)L(De.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ue=0;Ue<De.locationSize;Ue++)U(De.location+Ue,ge/De.locationSize,Oe,Q,W*Ce,(Wt+ge/De.locationSize*Ue)*Ce,St)}else{if(et.isInstancedBufferAttribute){for(let ke=0;ke<De.locationSize;ke++)z(De.location+ke,et.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ke=0;ke<De.locationSize;ke++)L(De.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ke=0;ke<De.locationSize;ke++)U(De.location+ke,ge/De.locationSize,Oe,Q,ge*Ce,ge/De.locationSize*ke*Ce,St)}}else if(he!==void 0){const Q=he[Me];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(De.location,Q);break;case 3:r.vertexAttrib3fv(De.location,Q);break;case 4:r.vertexAttrib4fv(De.location,Q);break;default:r.vertexAttrib1fv(De.location,Q)}}}}P()}function pe(){me();for(const G in c){const se=c[G];for(const ne in se){const ce=se[ne];for(const te in ce)E(ce[te].object),delete ce[te];delete se[ne]}delete c[G]}}function b(G){if(c[G.id]===void 0)return;const se=c[G.id];for(const ne in se){const ce=se[ne];for(const te in ce)E(ce[te].object),delete ce[te];delete se[ne]}delete c[G.id]}function N(G){for(const se in c){const ne=c[se];if(ne[G.id]===void 0)continue;const ce=ne[G.id];for(const te in ce)E(ce[te].object),delete ce[te];delete ne[G.id]}}function me(){fe(),p=!0,d!==f&&(d=f,x(d.object))}function fe(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:me,resetDefaultState:fe,dispose:pe,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:L,disableUnusedAttributes:P}}function zb(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let x,E;if(o)x=r,E="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[E](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<v;E++)this.render(p[E],_[E]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w];t.update(E,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Gb(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),w=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,L=u||e.has("OES_texture_float"),z=T&&L,P=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:O,vertexTextures:T,floatFragmentTextures:L,floatVertexTextures:z,maxSamples:P}}function Hb(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new or,c=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,w=_.clipIntersection,g=_.clipShadows,m=r.get(_);if(!o||E===null||E.length===0||a&&!g)a?p(null):d();else{const O=a?0:i,T=O*4;let L=m.clippingState||null;f.value=L,L=p(E,v,T,x);for(let z=0;z!==T;++z)L[z]=t[z];m.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,x,E){const w=_!==null?_.length:0;let g=null;if(w!==0){if(g=f.value,E!==!0||g===null){const m=x+w*4,O=v.matrixWorldInverse;c.getNormalMatrix(O),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,L=x;T!==w;++T,L+=4)u.copy(_[T]).applyMatrix4(O,c),u.normal.toArray(g,L),g[L+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,g}}function Vb(r){let e=new WeakMap;function t(u,c){return c===Kc?u.mapping=Rs:c===Zc&&(u.mapping=Cs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Kc||c===Zc)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new JE(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class kb extends Xp{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Nd=[.125,.215,.35,.446,.526,.582],Ir=20,Oc=new kb,Od=new Tt;let Fc=null,Bc=0,zc=0;const Lr=(1+Math.sqrt(5))/2,Ss=1/Lr,Fd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Lr,Ss),new X(0,Lr,-Ss),new X(Ss,0,Lr),new X(-Ss,0,Lr),new X(Lr,Ss,0),new X(-Lr,Ss,0)];class Bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,zc),e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:uo,format:li,colorSpace:pr,depthBuffer:!1},o=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wb(a)),this._blurMaterial=Xb(a,e,t)}return o}_compileMaterial(e){const t=new ci(this._lodPlanes[0],e);this._renderer.compile(t,Oc)}_sceneToCubeUV(e,t,i,o){const c=new zn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Od),p.toneMapping=ur,p.autoClear=!1;const x=new hu({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new ci(new go,x);let w=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,w=!0):(x.color.copy(Od),w=!0);for(let m=0;m<6;m++){const O=m%3;O===0?(c.up.set(0,f[m],0),c.lookAt(d[m],0,0)):O===1?(c.up.set(0,0,f[m]),c.lookAt(0,d[m],0)):(c.up.set(0,f[m],0),c.lookAt(0,0,d[m]));const T=this._cubeSize;Ra(o,O*T,m>2?T:0,T,T),p.setRenderTarget(o),w&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Rs||e.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new ci(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ra(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Oc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Fd[(o-1)%Fd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ci(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ir-1),w=a/E,g=isFinite(a)?1+Math.floor(p*w):Ir;g>Ir&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ir}`);const m=[];let O=0;for(let U=0;U<Ir;++U){const K=U/w,pe=Math.exp(-K*K/2);m.push(pe),U===0?O+=pe:U<g&&(O+=2*pe)}for(let U=0;U<m.length;U++)m[U]=m[U]/O;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=m,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:T}=this;v.dTheta.value=E,v.mipInt.value=T-i;const L=this._sizeLods[o],z=3*L*(o>T-Ts?o-T+Ts:0),P=4*(this._cubeSize-L);Ra(t,z,P,3*L,2*L),f.setRenderTarget(t),f.render(_,Oc)}}function Wb(r){const e=[],t=[],i=[];let o=r;const a=r-Ts+1+Nd.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-Ts?f=Nd[u-r+Ts-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,E=6,w=3,g=2,m=1,O=new Float32Array(w*E*x),T=new Float32Array(g*E*x),L=new Float32Array(m*E*x);for(let P=0;P<x;P++){const U=P%3*2/3-1,K=P>2?0:-1,pe=[U,K,0,U+2/3,K,0,U+2/3,K+1,0,U,K,0,U+2/3,K+1,0,U,K+1,0];O.set(pe,w*E*P),T.set(v,g*E*P);const b=[P,P,P,P,P,P];L.set(b,m*E*P)}const z=new Hi;z.setAttribute("position",new ui(O,w)),z.setAttribute("uv",new ui(T,g)),z.setAttribute("faceIndex",new ui(L,m)),e.push(z),o>Ts&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zd(r,e,t){const i=new Or(r,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function Xb(r,e,t){const i=new Float32Array(Ir),o=new X(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Gd(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Hd(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function Yb(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===Kc||f===Zc,p=f===Rs||f===Cs;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Bd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new Bd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function qb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function $b(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const w=v.morphAttributes[E];for(let g=0,m=w.length;g<m;g++)e.remove(w[g])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const E in x){const w=x[E];for(let g=0,m=w.length;g<m;g++)e.update(w[g],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,E=_.attributes.position;let w=0;if(x!==null){const O=x.array;w=x.version;for(let T=0,L=O.length;T<L;T+=3){const z=O[T+0],P=O[T+1],U=O[T+2];v.push(z,P,P,U,U,z)}}else if(E!==void 0){const O=E.array;w=E.version;for(let T=0,L=O.length/3-1;T<L;T+=3){const z=T+0,P=T+1,U=T+2;v.push(z,P,P,U,U,z)}}else return;const g=new(Np(v)?kp:Vp)(v,1);g.version=w;const m=a.get(_);m&&e.remove(m),a.set(_,g)}function p(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function Kb(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,E){r.drawElements(a,E,c,x*f),t.update(E,a,1)}function _(x,E,w){if(w===0)return;let g,m;if(o)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,E,c,x*f,w),t.update(E,a,w)}function v(x,E,w){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<w;m++)this.render(x[m]/f,E[m]);else{g.multiDrawElementsWEBGL(a,E,0,c,x,0,w);let m=0;for(let O=0;O<w;O++)m+=E[O];t.update(m,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function Zb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function jb(r,e){return r[0]-e[0]}function Jb(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qb(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new cn,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let g=a.get(p);if(g===void 0||g.count!==w){let fe=function(){N.dispose(),a.delete(p),p.removeEventListener("dispose",fe)};var x=fe;g!==void 0&&g.texture.dispose();const m=p.morphAttributes.position!==void 0,O=p.morphAttributes.normal!==void 0,T=p.morphAttributes.color!==void 0,L=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let U=0;m===!0&&(U=1),O===!0&&(U=2),T===!0&&(U=3);let K=p.attributes.position.count*U,pe=1;K>e.maxTextureSize&&(pe=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const b=new Float32Array(K*pe*4*w),N=new Bp(b,K,pe,w);N.type=vi,N.needsUpdate=!0;const me=U*4;for(let G=0;G<w;G++){const se=L[G],ne=z[G],ce=P[G],te=K*pe*4*G;for(let ue=0;ue<se.count;ue++){const he=ue*me;m===!0&&(u.fromBufferAttribute(se,ue),b[te+he+0]=u.x,b[te+he+1]=u.y,b[te+he+2]=u.z,b[te+he+3]=0),O===!0&&(u.fromBufferAttribute(ne,ue),b[te+he+4]=u.x,b[te+he+5]=u.y,b[te+he+6]=u.z,b[te+he+7]=0),T===!0&&(u.fromBufferAttribute(ce,ue),b[te+he+8]=u.x,b[te+he+9]=u.y,b[te+he+10]=u.z,b[te+he+11]=ce.itemSize===4?u.w:1)}}g={count:w,texture:N,size:new at(K,pe)},a.set(p,g),p.addEventListener("dispose",fe)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let m=0;for(let T=0;T<v.length;T++)m+=v[T];const O=p.morphTargetsRelative?1:1-m;_.getUniforms().setValue(r,"morphTargetBaseInfluence",O),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const E=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==E){w=[];for(let L=0;L<E;L++)w[L]=[L,0];i[p.id]=w}for(let L=0;L<E;L++){const z=w[L];z[0]=L,z[1]=v[L]}w.sort(Jb);for(let L=0;L<8;L++)L<E&&w[L][1]?(c[L][0]=w[L][0],c[L][1]=w[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(jb);const g=p.morphAttributes.position,m=p.morphAttributes.normal;let O=0;for(let L=0;L<8;L++){const z=c[L],P=z[0],U=z[1];P!==Number.MAX_SAFE_INTEGER&&U?(g&&p.getAttribute("morphTarget"+L)!==g[P]&&p.setAttribute("morphTarget"+L,g[P]),m&&p.getAttribute("morphNormal"+L)!==m[P]&&p.setAttribute("morphNormal"+L,m[P]),o[L]=U,O+=U):(g&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),m&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),o[L]=0)}const T=p.morphTargetsRelative?1:1-O;_.getUniforms().setValue(r,"morphTargetBaseInfluence",T),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function eA(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class Kp extends En{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Nr,p!==Nr&&p!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Nr&&(i=lr),i===void 0&&p===Ls&&(i=Ur),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=f!==void 0?f:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zp=new En,jp=new Kp(1,1);jp.compareFunction=Up;const Jp=new Bp,Qp=new NE,em=new Yp,Vd=[],kd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function Ds(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Vd[o];if(a===void 0&&(a=new Float32Array(o),Vd[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ja(r,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function tA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function iA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function rA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function sA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Yd.set(i),r.uniformMatrix2fv(this.addr,!1,Yd),tn(t,i)}}function oA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Xd.set(i),r.uniformMatrix3fv(this.addr,!1,Xd),tn(t,i)}}function aA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Wd.set(i),r.uniformMatrix4fv(this.addr,!1,Wd),tn(t,i)}}function lA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function fA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function hA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function gA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?jp:Zp;t.setTexture2D(e||a,o)}function _A(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Qp,o)}function vA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||em,o)}function xA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Jp,o)}function MA(r){switch(r){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}function SA(r,e){r.uniform1fv(this.addr,e)}function EA(r,e){const t=Ds(e,this.size,2);r.uniform2fv(this.addr,t)}function yA(r,e){const t=Ds(e,this.size,3);r.uniform3fv(this.addr,t)}function TA(r,e){const t=Ds(e,this.size,4);r.uniform4fv(this.addr,t)}function bA(r,e){const t=Ds(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AA(r,e){const t=Ds(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wA(r,e){const t=Ds(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RA(r,e){r.uniform1iv(this.addr,e)}function CA(r,e){r.uniform2iv(this.addr,e)}function LA(r,e){r.uniform3iv(this.addr,e)}function PA(r,e){r.uniform4iv(this.addr,e)}function IA(r,e){r.uniform1uiv(this.addr,e)}function DA(r,e){r.uniform2uiv(this.addr,e)}function UA(r,e){r.uniform3uiv(this.addr,e)}function NA(r,e){r.uniform4uiv(this.addr,e)}function OA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Zp,a[u])}function FA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Qp,a[u])}function BA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||em,a[u])}function zA(r,e,t){const i=this.cache,o=e.length,a=Ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Jp,a[u])}function GA(r){switch(r){case 5126:return SA;case 35664:return EA;case 35665:return yA;case 35666:return TA;case 35674:return bA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return LA;case 35669:case 35673:return PA;case 5125:return IA;case 36294:return DA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}}class VA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GA(t.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function qd(r,e){r.seq.push(e),r.map[e.id]=e}function WA(r,e,t){const i=r.name,o=i.length;for(Gc.lastIndex=0;;){const a=Gc.exec(i),u=Gc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){qd(t,d===void 0?new HA(c,r,e):new VA(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new kA(c),qd(t,_)),t=_}}}class Da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);WA(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function $d(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const XA=37297;let YA=0;function qA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function $A(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let i;switch(e===t?i="":e===za&&t===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&t===za&&(i="LinearSRGBToLinearDisplayP3"),r){case pr:case Ka:return[i,"LinearTransferOETF"];case gi:case uu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Kd(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+qA(r.getShaderSource(e),u)}else return o}function KA(r,e){const t=$A(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ZA(r,e){let t;switch(e){case kS:t="Linear";break;case WS:t="Reinhard";break;case XS:t="OptimizedCineon";break;case YS:t="ACESFilmic";break;case $S:t="AgX";break;case KS:t="Neutral";break;case qS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jA(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function JA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function QA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ew(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function bs(r){return r!==""}function Zd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(r){return r.replace(tw,iw)}const nw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iw(r,e){let t=pt[e];if(t===void 0){const i=nw.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(r){return r.replace(rw,sw)}function sw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Qd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function ow(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function aw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tp:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function uw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=ow(t),d=aw(t),p=lw(t),_=cw(t),v=uw(t),x=t.isWebGL2?"":jA(t),E=JA(t),w=QA(a),g=o.createProgram();let m,O,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),m.length>0&&(m+=`
`),O=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),O.length>0&&(O+=`
`)):(m=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),O=[x,Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?pt.tonemapping_pars_fragment:"",t.toneMapping!==ur?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,KA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),u=tu(u),u=Zd(u,t),u=jd(u,t),c=tu(c),c=Zd(c,t),c=jd(c,t),u=Jd(u),c=Jd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,O=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const L=T+m+u,z=T+O+c,P=$d(o,o.VERTEX_SHADER,L),U=$d(o,o.FRAGMENT_SHADER,z);o.attachShader(g,P),o.attachShader(g,U),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function K(me){if(r.debug.checkShaderErrors){const fe=o.getProgramInfoLog(g).trim(),G=o.getShaderInfoLog(P).trim(),se=o.getShaderInfoLog(U).trim();let ne=!0,ce=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,g,P,U);else{const te=Kd(o,P,"vertex"),ue=Kd(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+me.name+`
Material Type: `+me.type+`

Program Info Log: `+fe+`
`+te+`
`+ue)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(G===""||se==="")&&(ce=!1);ce&&(me.diagnostics={runnable:ne,programLog:fe,vertexShader:{log:G,prefix:m},fragmentShader:{log:se,prefix:O}})}o.deleteShader(P),o.deleteShader(U),pe=new Da(o,g),b=ew(o,g)}let pe;this.getUniforms=function(){return pe===void 0&&K(this),pe};let b;this.getAttributes=function(){return b===void 0&&K(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(g,XA)),N},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=U,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pw(e),t.set(e,i)),i}}class pw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function mw(r,e,t,i,o,a,u){const c=new Gp,f=new dw,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let E=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return d.add(b),b===0?"uv":`uv${b}`}function m(b,N,me,fe,G){const se=fe.fog,ne=G.geometry,ce=b.isMeshStandardMaterial?fe.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),ue=te&&te.mapping===$a?te.image.height:null,he=w[b.type];b.precision!==null&&(E=o.getMaxPrecision(b.precision),E!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const Me=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=Me!==void 0?Me.length:0;let et=0;ne.morphAttributes.position!==void 0&&(et=1),ne.morphAttributes.normal!==void 0&&(et=2),ne.morphAttributes.color!==void 0&&(et=3);let Q,ge,Re,Ze;if(he){const yt=_i[he];Q=yt.vertexShader,ge=yt.fragmentShader}else Q=b.vertexShader,ge=b.fragmentShader,f.update(b),Re=f.getVertexShaderID(b),Ze=f.getFragmentShaderID(b);const Oe=r.getRenderTarget(),Ce=G.isInstancedMesh===!0,St=G.isBatchedMesh===!0,ke=!!b.map,W=!!b.matcap,Wt=!!te,Ue=!!b.aoMap,je=!!b.lightMap,Ve=!!b.bumpMap,Qe=!!b.normalMap,tt=!!b.displacementMap,lt=!!b.emissiveMap,bt=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,ee=b.clearcoat>0,oe=b.iridescence>0,ve=b.sheen>0,_e=b.transmission>0,Ke=S&&!!b.anisotropyMap,He=ee&&!!b.clearcoatMap,ye=ee&&!!b.clearcoatNormalMap,be=ee&&!!b.clearcoatRoughnessMap,Je=oe&&!!b.iridescenceMap,Ee=oe&&!!b.iridescenceThicknessMap,Nt=ve&&!!b.sheenColorMap,rt=ve&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Pe=!!b.specularColorMap,Fe=!!b.specularIntensityMap,I=_e&&!!b.transmissionMap,le=_e&&!!b.thicknessMap,Ne=!!b.gradientMap,F=!!b.alphaMap,Se=b.alphaTest>0,Y=!!b.alphaHash,xe=!!b.extensions;let we=ur;b.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const ht={isWebGL2:_,shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:ge,defines:b.defines,customVertexShaderID:Re,customFragmentShaderID:Ze,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:St,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,instancingMorph:Ce&&G.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:pr,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:W,envMap:Wt,envMapMode:Wt&&te.mapping,envMapCubeUVHeight:ue,aoMap:Ue,lightMap:je,bumpMap:Ve,normalMap:Qe,displacementMap:x&&tt,emissiveMap:lt,normalMapObjectSpace:Qe&&b.normalMapType===oE,normalMapTangentSpace:Qe&&b.normalMapType===sE,metalnessMap:bt,roughnessMap:C,anisotropy:S,anisotropyMap:Ke,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,iridescence:oe,iridescenceMap:Je,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:Nt,sheenRoughnessMap:rt,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:Fe,transmission:_e,transmissionMap:I,thicknessMap:le,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===As&&b.alphaToCoverage===!1,alphaMap:F,alphaTest:Se,alphaHash:Y,combine:b.combine,mapUv:ke&&g(b.map.channel),aoMapUv:Ue&&g(b.aoMap.channel),lightMapUv:je&&g(b.lightMap.channel),bumpMapUv:Ve&&g(b.bumpMap.channel),normalMapUv:Qe&&g(b.normalMap.channel),displacementMapUv:tt&&g(b.displacementMap.channel),emissiveMapUv:lt&&g(b.emissiveMap.channel),metalnessMapUv:bt&&g(b.metalnessMap.channel),roughnessMapUv:C&&g(b.roughnessMap.channel),anisotropyMapUv:Ke&&g(b.anisotropyMap.channel),clearcoatMapUv:He&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(b.sheenRoughnessMap.channel),specularMapUv:Ge&&g(b.specularMap.channel),specularColorMapUv:Pe&&g(b.specularColorMap.channel),specularIntensityMapUv:Fe&&g(b.specularIntensityMap.channel),transmissionMapUv:I&&g(b.transmissionMap.channel),thicknessMapUv:le&&g(b.thicknessMap.channel),alphaMapUv:F&&g(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Qe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(ke||F),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&me.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&It.getTransfer(b.map.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xe&&b.extensions.derivatives===!0,extensionFragDepth:xe&&b.extensions.fragDepth===!0,extensionDrawBuffers:xe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ht.vertexUv1s=d.has(1),ht.vertexUv2s=d.has(2),ht.vertexUv3s=d.has(3),d.clear(),ht}function O(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const me in b.defines)N.push(me),N.push(b.defines[me]);return b.isRawShaderMaterial===!1&&(T(N,b),L(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function T(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function L(b,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.instancingMorph&&c.enable(4),N.matcap&&c.enable(5),N.envMap&&c.enable(6),N.normalMapObjectSpace&&c.enable(7),N.normalMapTangentSpace&&c.enable(8),N.clearcoat&&c.enable(9),N.iridescence&&c.enable(10),N.alphaTest&&c.enable(11),N.vertexColors&&c.enable(12),N.vertexAlphas&&c.enable(13),N.vertexUv1s&&c.enable(14),N.vertexUv2s&&c.enable(15),N.vertexUv3s&&c.enable(16),N.vertexTangents&&c.enable(17),N.anisotropy&&c.enable(18),N.alphaHash&&c.enable(19),N.batching&&c.enable(20),b.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.alphaToCoverage&&c.enable(20),b.push(c.mask)}function z(b){const N=w[b.type];let me;if(N){const fe=_i[N];me=$E.clone(fe.uniforms)}else me=b.uniforms;return me}function P(b,N){let me;for(let fe=0,G=p.length;fe<G;fe++){const se=p[fe];if(se.cacheKey===N){me=se,++me.usedTimes;break}}return me===void 0&&(me=new fw(r,N,b,a),p.push(me)),me}function U(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),b.destroy()}}function K(b){f.remove(b)}function pe(){f.dispose()}return{getParameters:m,getProgramCacheKey:O,getUniforms:z,acquireProgram:P,releaseProgram:U,releaseShaderCache:K,programs:p,dispose:pe}}function gw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ep(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tp(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,E,w,g){let m=r[e];return m===void 0?(m={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:w,group:g},r[e]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=x,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=w,m.group=g),e++,m}function c(_,v,x,E,w,g){const m=u(_,v,x,E,w,g);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):t.push(m)}function f(_,v,x,E,w,g){const m=u(_,v,x,E,w,g);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):t.unshift(m)}function d(_,v){t.length>1&&t.sort(_||_w),i.length>1&&i.sort(v||ep),o.length>1&&o.sort(v||ep)}function p(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function vw(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new tp,r.set(i,[u])):o>=a.length?(u=new tp,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Tt};break;case"SpotLight":t={position:new X,direction:new X,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Mw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Sw=0;function Ew(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r,e){const t=new xw,i=Mw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,u=new Yt,c=new Yt;function f(p,_){let v=0,x=0,E=0;for(let me=0;me<9;me++)o.probe[me].set(0,0,0);let w=0,g=0,m=0,O=0,T=0,L=0,z=0,P=0,U=0,K=0,pe=0;p.sort(Ew);const b=_===!0?Math.PI:1;for(let me=0,fe=p.length;me<fe;me++){const G=p[me],se=G.color,ne=G.intensity,ce=G.distance,te=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=se.r*ne*b,x+=se.g*ne*b,E+=se.b*ne*b;else if(G.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(G.sh.coefficients[ue],ne);pe++}else if(G.isDirectionalLight){const ue=t.get(G);if(ue.color.copy(G.color).multiplyScalar(G.intensity*b),G.castShadow){const he=G.shadow,Me=i.get(G);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,o.directionalShadow[w]=Me,o.directionalShadowMap[w]=te,o.directionalShadowMatrix[w]=G.shadow.matrix,L++}o.directional[w]=ue,w++}else if(G.isSpotLight){const ue=t.get(G);ue.position.setFromMatrixPosition(G.matrixWorld),ue.color.copy(se).multiplyScalar(ne*b),ue.distance=ce,ue.coneCos=Math.cos(G.angle),ue.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ue.decay=G.decay,o.spot[m]=ue;const he=G.shadow;if(G.map&&(o.spotLightMap[U]=G.map,U++,he.updateMatrices(G),G.castShadow&&K++),o.spotLightMatrix[m]=he.matrix,G.castShadow){const Me=i.get(G);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,o.spotShadow[m]=Me,o.spotShadowMap[m]=te,P++}m++}else if(G.isRectAreaLight){const ue=t.get(G);ue.color.copy(se).multiplyScalar(ne),ue.halfWidth.set(G.width*.5,0,0),ue.halfHeight.set(0,G.height*.5,0),o.rectArea[O]=ue,O++}else if(G.isPointLight){const ue=t.get(G);if(ue.color.copy(G.color).multiplyScalar(G.intensity*b),ue.distance=G.distance,ue.decay=G.decay,G.castShadow){const he=G.shadow,Me=i.get(G);Me.shadowBias=he.bias,Me.shadowNormalBias=he.normalBias,Me.shadowRadius=he.radius,Me.shadowMapSize=he.mapSize,Me.shadowCameraNear=he.camera.near,Me.shadowCameraFar=he.camera.far,o.pointShadow[g]=Me,o.pointShadowMap[g]=te,o.pointShadowMatrix[g]=G.shadow.matrix,z++}o.point[g]=ue,g++}else if(G.isHemisphereLight){const ue=t.get(G);ue.skyColor.copy(G.color).multiplyScalar(ne*b),ue.groundColor.copy(G.groundColor).multiplyScalar(ne*b),o.hemi[T]=ue,T++}}O>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=E;const N=o.hash;(N.directionalLength!==w||N.pointLength!==g||N.spotLength!==m||N.rectAreaLength!==O||N.hemiLength!==T||N.numDirectionalShadows!==L||N.numPointShadows!==z||N.numSpotShadows!==P||N.numSpotMaps!==U||N.numLightProbes!==pe)&&(o.directional.length=w,o.spot.length=m,o.rectArea.length=O,o.point.length=g,o.hemi.length=T,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=z,o.pointShadowMap.length=z,o.spotShadow.length=P,o.spotShadowMap.length=P,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=z,o.spotLightMatrix.length=P+U-K,o.spotLightMap.length=U,o.numSpotLightShadowsWithMaps=K,o.numLightProbes=pe,N.directionalLength=w,N.pointLength=g,N.spotLength=m,N.rectAreaLength=O,N.hemiLength=T,N.numDirectionalShadows=L,N.numPointShadows=z,N.numSpotShadows=P,N.numSpotMaps=U,N.numLightProbes=pe,o.version=Sw++)}function d(p,_){let v=0,x=0,E=0,w=0,g=0;const m=_.matrixWorldInverse;for(let O=0,T=p.length;O<T;O++){const L=p[O];if(L.isDirectionalLight){const z=o.directional[v];z.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(m),v++}else if(L.isSpotLight){const z=o.spot[E];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(m),z.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(m),E++}else if(L.isRectAreaLight){const z=o.rectArea[w];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(m),c.identity(),u.copy(L.matrixWorld),u.premultiply(m),c.extractRotation(u),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const z=o.point[x];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(m),x++}else if(L.isHemisphereLight){const z=o.hemi[g];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(m),g++}}}return{setup:f,setupView:d,state:o}}function np(r,e){const t=new yw(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function Tw(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new np(r,e),t.set(a,[f])):u>=c.length?(f=new np(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class bw extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Aw extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`;function Cw(r,e,t){let i=new qp;const o=new at,a=new at,u=new cn,c=new bw({depthPacking:rE}),f=new Aw,d={},p=t.maxTextureSize,_={[hr]:Ln,[Ln]:hr,[Bi]:Bi},v=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ww,fragmentShader:Rw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Hi;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ci(E,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let m=this.type;this.render=function(P,U,K){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const pe=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),me=r.state;me.setBlending(cr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const fe=m!==Oi&&this.type===Oi,G=m===Oi&&this.type!==Oi;for(let se=0,ne=P.length;se<ne;se++){const ce=P[se],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ue=te.getFrameExtents();if(o.multiply(ue),a.copy(te.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ue.x),o.x=a.x*ue.x,te.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ue.y),o.y=a.y*ue.y,te.mapSize.y=a.y)),te.map===null||fe===!0||G===!0){const Me=this.type!==Oi?{minFilter:ln,magFilter:ln}:{};te.map!==null&&te.map.dispose(),te.map=new Or(o.x,o.y,Me),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const he=te.getViewportCount();for(let Me=0;Me<he;Me++){const De=te.getViewport(Me);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),me.viewport(u),te.updateMatrices(ce,Me),i=te.getFrustum(),L(U,K,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Oi&&O(te,K),te.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(pe,b,N)};function O(P,U){const K=e.update(w);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Or(o.x,o.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(U,null,K,v,w,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(U,null,K,x,w,null)}function T(P,U,K,pe){let b=null;const N=K.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)b=N;else if(b=K.isPointLight===!0?f:c,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const me=b.uuid,fe=U.uuid;let G=d[me];G===void 0&&(G={},d[me]=G);let se=G[fe];se===void 0&&(se=b.clone(),G[fe]=se,U.addEventListener("dispose",z)),b=se}if(b.visible=U.visible,b.wireframe=U.wireframe,pe===Oi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:_[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const me=r.properties.get(b);me.light=K}return b}function L(P,U,K,pe,b){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Oi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),G=P.material;if(Array.isArray(G)){const se=fe.groups;for(let ne=0,ce=se.length;ne<ce;ne++){const te=se[ne],ue=G[te.materialIndex];if(ue&&ue.visible){const he=T(P,ue,pe,b);P.onBeforeShadow(r,P,U,K,fe,he,te),r.renderBufferDirect(K,null,fe,he,P,te),P.onAfterShadow(r,P,U,K,fe,he,te)}}}else if(G.visible){const se=T(P,G,pe,b);P.onBeforeShadow(r,P,U,K,fe,se,null),r.renderBufferDirect(K,null,fe,se,P,null),P.onAfterShadow(r,P,U,K,fe,se,null)}}const me=P.children;for(let fe=0,G=me.length;fe<G;fe++)L(me[fe],U,K,pe,b)}function z(P){P.target.removeEventListener("dispose",z);for(const K in d){const pe=d[K],b=P.target.uuid;b in pe&&(pe[b].dispose(),delete pe[b])}}}function Lw(r,e,t){const i=t.isWebGL2;function o(){let F=!1;const Se=new cn;let Y=null;const xe=new cn(0,0,0,0);return{setMask:function(we){Y!==we&&!F&&(r.colorMask(we,we,we,we),Y=we)},setLocked:function(we){F=we},setClear:function(we,ht,yt,Rt,Gt){Gt===!0&&(we*=Rt,ht*=Rt,yt*=Rt),Se.set(we,ht,yt,Rt),xe.equals(Se)===!1&&(r.clearColor(we,ht,yt,Rt),xe.copy(Se))},reset:function(){F=!1,Y=null,xe.set(-1,0,0,0)}}}function a(){let F=!1,Se=null,Y=null,xe=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(we){Se!==we&&!F&&(r.depthMask(we),Se=we)},setFunc:function(we){if(Y!==we){switch(we){case US:r.depthFunc(r.NEVER);break;case NS:r.depthFunc(r.ALWAYS);break;case OS:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case FS:r.depthFunc(r.EQUAL);break;case BS:r.depthFunc(r.GEQUAL);break;case zS:r.depthFunc(r.GREATER);break;case GS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=we}},setLocked:function(we){F=we},setClear:function(we){xe!==we&&(r.clearDepth(we),xe=we)},reset:function(){F=!1,Se=null,Y=null,xe=null}}}function u(){let F=!1,Se=null,Y=null,xe=null,we=null,ht=null,yt=null,Rt=null,Gt=null;return{setTest:function(Et){F||(Et?Ce(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(Et){Se!==Et&&!F&&(r.stencilMask(Et),Se=Et)},setFunc:function(Et,Ct,nn){(Y!==Et||xe!==Ct||we!==nn)&&(r.stencilFunc(Et,Ct,nn),Y=Et,xe=Ct,we=nn)},setOp:function(Et,Ct,nn){(ht!==Et||yt!==Ct||Rt!==nn)&&(r.stencilOp(Et,Ct,nn),ht=Et,yt=Ct,Rt=nn)},setLocked:function(Et){F=Et},setClear:function(Et){Gt!==Et&&(r.clearStencil(Et),Gt=Et)},reset:function(){F=!1,Se=null,Y=null,xe=null,we=null,ht=null,yt=null,Rt=null,Gt=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},x={},E=new WeakMap,w=[],g=null,m=!1,O=null,T=null,L=null,z=null,P=null,U=null,K=null,pe=new Tt(0,0,0),b=0,N=!1,me=null,fe=null,G=null,se=null,ne=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ue=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(he)[1]),te=ue>=1):he.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),te=ue>=2);let Me=null,De={};const et=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ge=new cn().fromArray(et),Re=new cn().fromArray(Q);function Ze(F,Se,Y,xe){const we=new Uint8Array(4),ht=r.createTexture();r.bindTexture(F,ht),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<Y;yt++)i&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Se+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return ht}const Oe={};Oe[r.TEXTURE_2D]=Ze(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=Ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=Ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=Ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Oa),tt(!1),lt(Nh),Ce(r.CULL_FACE),Ve(cr);function Ce(F){v[F]!==!0&&(r.enable(F),v[F]=!0)}function St(F){v[F]!==!1&&(r.disable(F),v[F]=!1)}function ke(F,Se){return x[F]!==Se?(r.bindFramebuffer(F,Se),x[F]=Se,i&&(F===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Se),F===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function W(F,Se){let Y=w,xe=!1;if(F){Y=E.get(Se),Y===void 0&&(Y=[],E.set(Se,Y));const we=F.textures;if(Y.length!==we.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,yt=we.length;ht<yt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=we.length,xe=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,xe=!0);if(xe)if(t.isWebGL2)r.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const Ue={[Pr]:r.FUNC_ADD,[xS]:r.FUNC_SUBTRACT,[MS]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[zh]=r.MIN,Ue[Gh]=r.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ue[zh]=F.MIN_EXT,Ue[Gh]=F.MAX_EXT)}const je={[SS]:r.ZERO,[ES]:r.ONE,[yS]:r.SRC_COLOR,[qc]:r.SRC_ALPHA,[CS]:r.SRC_ALPHA_SATURATE,[wS]:r.DST_COLOR,[bS]:r.DST_ALPHA,[TS]:r.ONE_MINUS_SRC_COLOR,[$c]:r.ONE_MINUS_SRC_ALPHA,[RS]:r.ONE_MINUS_DST_COLOR,[AS]:r.ONE_MINUS_DST_ALPHA,[LS]:r.CONSTANT_COLOR,[PS]:r.ONE_MINUS_CONSTANT_COLOR,[IS]:r.CONSTANT_ALPHA,[DS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,Se,Y,xe,we,ht,yt,Rt,Gt,Et){if(F===cr){m===!0&&(St(r.BLEND),m=!1);return}if(m===!1&&(Ce(r.BLEND),m=!0),F!==vS){if(F!==O||Et!==N){if((T!==Pr||P!==Pr)&&(r.blendEquation(r.FUNC_ADD),T=Pr,P=Pr),Et)switch(F){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oh:r.blendFunc(r.ONE,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}L=null,z=null,U=null,K=null,pe.set(0,0,0),b=0,O=F,N=Et}return}we=we||Se,ht=ht||Y,yt=yt||xe,(Se!==T||we!==P)&&(r.blendEquationSeparate(Ue[Se],Ue[we]),T=Se,P=we),(Y!==L||xe!==z||ht!==U||yt!==K)&&(r.blendFuncSeparate(je[Y],je[xe],je[ht],je[yt]),L=Y,z=xe,U=ht,K=yt),(Rt.equals(pe)===!1||Gt!==b)&&(r.blendColor(Rt.r,Rt.g,Rt.b,Gt),pe.copy(Rt),b=Gt),O=F,N=!1}function Qe(F,Se){F.side===Bi?St(r.CULL_FACE):Ce(r.CULL_FACE);let Y=F.side===Ln;Se&&(Y=!Y),tt(Y),F.blending===As&&F.transparent===!1?Ve(cr):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),f.setFunc(F.depthFunc),f.setTest(F.depthTest),f.setMask(F.depthWrite),c.setMask(F.colorWrite);const xe=F.stencilWrite;d.setTest(xe),xe&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),C(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){me!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),me=F)}function lt(F){F!==mS?(Ce(r.CULL_FACE),F!==fe&&(F===Nh?r.cullFace(r.BACK):F===gS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),fe=F}function bt(F){F!==G&&(te&&r.lineWidth(F),G=F)}function C(F,Se,Y){F?(Ce(r.POLYGON_OFFSET_FILL),(se!==Se||ne!==Y)&&(r.polygonOffset(Se,Y),se=Se,ne=Y)):St(r.POLYGON_OFFSET_FILL)}function S(F){F?Ce(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function ee(F){F===void 0&&(F=r.TEXTURE0+ce-1),Me!==F&&(r.activeTexture(F),Me=F)}function oe(F,Se,Y){Y===void 0&&(Me===null?Y=r.TEXTURE0+ce-1:Y=Me);let xe=De[Y];xe===void 0&&(xe={type:void 0,texture:void 0},De[Y]=xe),(xe.type!==F||xe.texture!==Se)&&(Me!==Y&&(r.activeTexture(Y),Me=Y),r.bindTexture(F,Se||Oe[F]),xe.type=F,xe.texture=Se)}function ve(){const F=De[Me];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){ge.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ge.copy(F))}function Fe(F){Re.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Re.copy(F))}function I(F,Se){let Y=_.get(Se);Y===void 0&&(Y=new WeakMap,_.set(Se,Y));let xe=Y.get(F);xe===void 0&&(xe=r.getUniformBlockIndex(Se,F.name),Y.set(F,xe))}function le(F,Se){const xe=_.get(Se).get(F);p.get(Se)!==xe&&(r.uniformBlockBinding(Se,xe,F.__bindingPointIndex),p.set(Se,xe))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Me=null,De={},x={},E=new WeakMap,w=[],g=null,m=!1,O=null,T=null,L=null,z=null,P=null,U=null,K=null,pe=new Tt(0,0,0),b=0,N=!1,me=null,fe=null,G=null,se=null,ne=null,ge.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:St,bindFramebuffer:ke,drawBuffers:W,useProgram:Wt,setBlending:Ve,setMaterial:Qe,setFlipSided:tt,setCullFace:lt,setLineWidth:bt,setPolygonOffset:C,setScissorTest:S,activeTexture:ee,bindTexture:oe,unbindTexture:ve,compressedTexImage2D:_e,compressedTexImage3D:Ke,texImage2D:rt,texImage3D:Ge,updateUBOMapping:I,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Je,scissor:Pe,viewport:Fe,reset:Ne}}function Pw(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,_=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,S){return E?new OffscreenCanvas(C,S):Va("canvas")}function g(C,S,ee,oe){let ve=1;const _e=bt(C);if((_e.width>oe||_e.height>oe)&&(ve=oe/Math.max(_e.width,_e.height)),ve<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ke=S?Ha:Math.floor,He=Ke(ve*_e.width),ye=Ke(ve*_e.height);v===void 0&&(v=w(He,ye));const be=ee?w(He,ye):v;return be.width=He,be.height=ye,be.getContext("2d").drawImage(C,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+He+"x"+ye+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),C;return C}function m(C){const S=bt(C);return eu(S.width)&&eu(S.height)}function O(C){return c?!1:C.wrapS!==ai||C.wrapT!==ai||C.minFilter!==ln&&C.minFilter!==Cn}function T(C,S){return C.generateMipmaps&&S&&C.minFilter!==ln&&C.minFilter!==Cn}function L(C){r.generateMipmap(C)}function z(C,S,ee,oe,ve=!1){if(c===!1)return S;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e=S;if(S===r.RED&&(ee===r.FLOAT&&(_e=r.R32F),ee===r.HALF_FLOAT&&(_e=r.R16F),ee===r.UNSIGNED_BYTE&&(_e=r.R8)),S===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.R8UI),ee===r.UNSIGNED_SHORT&&(_e=r.R16UI),ee===r.UNSIGNED_INT&&(_e=r.R32UI),ee===r.BYTE&&(_e=r.R8I),ee===r.SHORT&&(_e=r.R16I),ee===r.INT&&(_e=r.R32I)),S===r.RG&&(ee===r.FLOAT&&(_e=r.RG32F),ee===r.HALF_FLOAT&&(_e=r.RG16F),ee===r.UNSIGNED_BYTE&&(_e=r.RG8)),S===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.RG8UI),ee===r.UNSIGNED_SHORT&&(_e=r.RG16UI),ee===r.UNSIGNED_INT&&(_e=r.RG32UI),ee===r.BYTE&&(_e=r.RG8I),ee===r.SHORT&&(_e=r.RG16I),ee===r.INT&&(_e=r.RG32I)),S===r.RGBA){const Ke=ve?Fa:It.getTransfer(oe);ee===r.FLOAT&&(_e=r.RGBA32F),ee===r.HALF_FLOAT&&(_e=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(_e=Ke===zt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function P(C,S,ee){return T(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function U(C){return C===ln||C===Hh||C===eo?r.NEAREST:r.LINEAR}function K(C){const S=C.target;S.removeEventListener("dispose",K),b(S),S.isVideoTexture&&_.delete(S)}function pe(C){const S=C.target;S.removeEventListener("dispose",pe),me(S)}function b(C){const S=i.get(C);if(S.__webglInit===void 0)return;const ee=C.source,oe=x.get(ee);if(oe){const ve=oe[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(C),Object.keys(oe).length===0&&x.delete(ee)}i.remove(C)}function N(C){const S=i.get(C);r.deleteTexture(S.__webglTexture);const ee=C.source,oe=x.get(ee);delete oe[S.__cacheKey],u.memory.textures--}function me(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let ve=0;ve<S.__webglFramebuffer[oe].length;ve++)r.deleteFramebuffer(S.__webglFramebuffer[oe][ve]);else r.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)r.deleteFramebuffer(S.__webglFramebuffer[oe]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=i.get(ee[oe]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(C)}let fe=0;function G(){fe=0}function se(){const C=fe;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),fe+=1,C}function ne(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ce(C,S){const ee=i.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,C,S);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+S)}function te(C,S){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+S)}function ue(C,S){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,S);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+S)}function he(C,S){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Ze(ee,C,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+S)}const Me={[jc]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},De={[ln]:r.NEAREST,[Hh]:r.NEAREST_MIPMAP_NEAREST,[eo]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[fc]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},et={[aE]:r.NEVER,[dE]:r.ALWAYS,[lE]:r.LESS,[Up]:r.LEQUAL,[cE]:r.EQUAL,[hE]:r.GEQUAL,[uE]:r.GREATER,[fE]:r.NOTEQUAL};function Q(C,S,ee){if(S.type===vi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===fc||S.magFilter===eo||S.magFilter===Dr||S.minFilter===Cn||S.minFilter===fc||S.minFilter===eo||S.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(C,r.TEXTURE_WRAP_S,Me[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Me[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Me[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[S.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==ai||S.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,U(S.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,U(S.minFilter)),S.minFilter!==ln&&S.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==eo&&S.minFilter!==Dr||S.type===vi&&e.has("OES_texture_float_linear")===!1||c===!1&&S.type===uo&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ge(C,S){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",K));const oe=S.source;let ve=x.get(oe);ve===void 0&&(ve={},x.set(oe,ve));const _e=ne(S);if(_e!==C.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[_e].usedTimes++;const Ke=ve[C.__cacheKey];Ke!==void 0&&(ve[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&N(S)),C.__cacheKey=_e,C.__webglTexture=ve[_e].texture}return ee}function Re(C,S,ee){let oe=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=r.TEXTURE_3D);const ve=ge(C,S),_e=S.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+ee);const Ke=i.get(_e);if(_e.version!==Ke.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const He=It.getPrimaries(It.workingColorSpace),ye=S.colorSpace===ar?null:It.getPrimaries(S.colorSpace),be=S.colorSpace===ar||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Je=O(S)&&m(S.image)===!1;let Ee=g(S.image,Je,!1,o.maxTextureSize);Ee=lt(S,Ee);const Nt=m(Ee)||c,rt=a.convert(S.format,S.colorSpace);let Ge=a.convert(S.type),Pe=z(S.internalFormat,rt,Ge,S.colorSpace,S.isVideoTexture);Q(oe,S,Nt);let Fe;const I=S.mipmaps,le=c&&S.isVideoTexture!==!0&&Pe!==Dp,Ne=Ke.__version===void 0||ve===!0,F=_e.dataReady,Se=P(S,Ee,Nt);if(S.isDepthTexture)Pe=r.DEPTH_COMPONENT,c?S.type===vi?Pe=r.DEPTH_COMPONENT32F:S.type===lr?Pe=r.DEPTH_COMPONENT24:S.type===Ur?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:S.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Nr&&Pe===r.DEPTH_COMPONENT&&S.type!==cu&&S.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=lr,Ge=a.convert(S.type)),S.format===Ls&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,S.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ur,Ge=a.convert(S.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,null));else if(S.isDataTexture)if(I.length>0&&Nt){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,I[0].width,I[0].height);for(let Y=0,xe=I.length;Y<xe;Y++)Fe=I[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data);S.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,Ee.width,Ee.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,rt,Ge,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,rt,Ge,Ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Pe,I[0].width,I[0].height,Ee.depth);for(let Y=0,xe=I.length;Y<xe;Y++)Fe=I[Y],S.format!==li?rt!==null?le?F&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Ee.depth,rt,Ge,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Pe,Fe.width,Fe.height,Ee.depth,0,rt,Ge,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Se,Pe,I[0].width,I[0].height);for(let Y=0,xe=I.length;Y<xe;Y++)Fe=I[Y],S.format!==li?rt!==null?le?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,rt,Ge,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Pe,Fe.width,Fe.height,0,rt,Ge,Fe.data)}else if(S.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(S.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,Se,Pe,Ee.width,Ee.height,Ee.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,rt,Ge,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,rt,Ge,Ee.data);else if(S.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,Se,Pe,Ee.width,Ee.height);else{let Y=Ee.width,xe=Ee.height;for(let we=0;we<Se;we++)t.texImage2D(r.TEXTURE_2D,we,Pe,Y,xe,0,rt,Ge,null),Y>>=1,xe>>=1}}else if(I.length>0&&Nt){if(le&&Ne){const Y=bt(I[0]);t.texStorage2D(r.TEXTURE_2D,Se,Pe,Y.width,Y.height)}for(let Y=0,xe=I.length;Y<xe;Y++)Fe=I[Y],le?F&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,rt,Ge,Fe):t.texImage2D(r.TEXTURE_2D,Y,Pe,rt,Ge,Fe);S.generateMipmaps=!1}else if(le){if(Ne){const Y=bt(Ee);t.texStorage2D(r.TEXTURE_2D,Se,Pe,Y.width,Y.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Ge,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,rt,Ge,Ee);T(S,Nt)&&L(oe),Ke.__version=_e.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ze(C,S,ee){if(S.image.length!==6)return;const oe=ge(C,S),ve=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ee);const _e=i.get(ve);if(ve.version!==_e.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Ke=It.getPrimaries(It.workingColorSpace),He=S.colorSpace===ar?null:It.getPrimaries(S.colorSpace),ye=S.colorSpace===ar||Ke===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Je=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let Y=0;Y<6;Y++)!be&&!Je?Ee[Y]=g(S.image[Y],!1,!0,o.maxCubemapSize):Ee[Y]=Je?S.image[Y].image:S.image[Y],Ee[Y]=lt(S,Ee[Y]);const Nt=Ee[0],rt=m(Nt)||c,Ge=a.convert(S.format,S.colorSpace),Pe=a.convert(S.type),Fe=z(S.internalFormat,Ge,Pe,S.colorSpace),I=c&&S.isVideoTexture!==!0,le=_e.__version===void 0||oe===!0,Ne=ve.dataReady;let F=P(S,Nt,rt);Q(r.TEXTURE_CUBE_MAP,S,rt);let Se;if(be){I&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Nt.width,Nt.height);for(let Y=0;Y<6;Y++){Se=Ee[Y].mipmaps;for(let xe=0;xe<Se.length;xe++){const we=Se[xe];S.format!==li?Ge!==null?I?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,0,0,we.width,we.height,Ge,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe,Fe,we.width,we.height,0,Ge,Pe,we.data)}}}else{if(Se=S.mipmaps,I&&le){Se.length>0&&F++;const Y=bt(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,F,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Je){I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee[Y].width,Ee[Y].height,Ge,Pe,Ee[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ee[Y].width,Ee[Y].height,0,Ge,Pe,Ee[Y].data);for(let xe=0;xe<Se.length;xe++){const ht=Se[xe].image[Y].image;I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,ht.width,ht.height,Ge,Pe,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,Fe,ht.width,ht.height,0,Ge,Pe,ht.data)}}else{I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ge,Pe,Ee[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Ge,Pe,Ee[Y]);for(let xe=0;xe<Se.length;xe++){const we=Se[xe];I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,0,0,Ge,Pe,we.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,xe+1,Fe,Ge,Pe,we.image[Y])}}}T(S,rt)&&L(r.TEXTURE_CUBE_MAP),_e.__version=ve.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Oe(C,S,ee,oe,ve,_e){const Ke=a.convert(ee.format,ee.colorSpace),He=a.convert(ee.type),ye=z(ee.internalFormat,Ke,He,ee.colorSpace);if(!i.get(S).__hasExternalTextures){const Je=Math.max(1,S.width>>_e),Ee=Math.max(1,S.height>>_e);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,ye,Je,Ee,S.depth,0,Ke,He,null):t.texImage2D(ve,_e,ye,Je,Ee,0,Ke,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,0,Ve(S)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,S,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||Qe(S)){const ve=S.depthTexture;ve&&ve.isDepthTexture&&(ve.type===vi?oe=r.DEPTH_COMPONENT32F:ve.type===lr&&(oe=r.DEPTH_COMPONENT24));const _e=Ve(S);Qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,oe,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,oe,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const oe=Ve(S);ee&&Qe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,S.width,S.height):Qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const oe=S.textures;for(let ve=0;ve<oe.length;ve++){const _e=oe[ve],Ke=a.convert(_e.format,_e.colorSpace),He=a.convert(_e.type),ye=z(_e.internalFormat,Ke,He,_e.colorSpace),be=Ve(S);ee&&Qe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ye,S.width,S.height):Qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ye,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ye,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ce(S.depthTexture,0);const oe=i.get(S.depthTexture).__webglTexture,ve=Ve(S);if(S.depthTexture.format===Nr)Qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Ls)Qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(C){const S=i.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,C)}else if(ee){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(S.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ce(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(C,S,ee){const oe=i.get(C);S!==void 0&&Oe(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&ke(C)}function Wt(C){const S=C.texture,ee=i.get(C),oe=i.get(S);C.addEventListener("dispose",pe);const ve=C.textures,_e=C.isWebGLCubeRenderTarget===!0,Ke=ve.length>1,He=m(C)||c;if(Ke||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=S.version,u.memory.textures++),_e){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let be=0;be<S.mipmaps.length;be++)ee.__webglFramebuffer[ye][be]=r.createFramebuffer()}else ee.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&S.mipmaps&&S.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ke)if(o.drawBuffers)for(let ye=0,be=ve.length;ye<be;ye++){const Je=i.get(ve[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Qe(C)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<ve.length;ye++){const be=ve[ye];ee.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const Je=a.convert(be.format,be.colorSpace),Ee=a.convert(be.type),Nt=z(be.internalFormat,Je,Ee,be.colorSpace,C.isXRRenderTarget===!0),rt=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Nt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(r.TEXTURE_CUBE_MAP,S,He);for(let ye=0;ye<6;ye++)if(c&&S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Oe(ee.__webglFramebuffer[ye][be],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Oe(ee.__webglFramebuffer[ye],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);T(S,He)&&L(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let ye=0,be=ve.length;ye<be;ye++){const Je=ve[ye],Ee=i.get(Je);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Q(r.TEXTURE_2D,Je,He),Oe(ee.__webglFramebuffer,C,Je,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),T(Je,He)&&L(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),Q(ye,S,He),c&&S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Oe(ee.__webglFramebuffer[be],C,S,r.COLOR_ATTACHMENT0,ye,be);else Oe(ee.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,ye,0);T(S,He)&&L(ye),t.unbindTexture()}C.depthBuffer&&ke(C)}function Ue(C){const S=m(C)||c,ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=ee[oe];if(T(_e,S)){const Ke=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(_e).__webglTexture;t.bindTexture(Ke,He),L(Ke),t.unbindTexture()}}}function je(C){if(c&&C.samples>0&&Qe(C)===!1){const S=C.textures,ee=C.width,oe=C.height;let ve=r.COLOR_BUFFER_BIT;const _e=[],Ke=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(C),ye=S.length>1;if(ye)for(let be=0;be<S.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<S.length;be++){_e.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&_e.push(Ke);const Je=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Je===!1&&(C.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Je===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ke])),ye){const Ee=i.get(S[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,ve,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<S.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Je=i.get(S[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(o.maxSamples,C.samples)}function Qe(C){const S=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(C){const S=u.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function lt(C,S){const ee=C.colorSpace,oe=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Qc||ee!==pr&&ee!==ar&&(It.getTransfer(ee)===zt?c===!1?e.has("EXT_sRGB")===!0&&oe===li?(C.format=Qc,C.minFilter=Cn,C.generateMipmaps=!1):S=Op.sRGBToLinear(S):(oe!==li||ve!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),S}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=G,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=he,this.rebindTextures=W,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Qe}function Iw(r,e,t){const i=t.isWebGL2;function o(a,u=ar){let c;const f=It.getTransfer(u);if(a===fr)return r.UNSIGNED_BYTE;if(a===wp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Rp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ZS)return r.BYTE;if(a===jS)return r.SHORT;if(a===cu)return r.UNSIGNED_SHORT;if(a===Ap)return r.INT;if(a===lr)return r.UNSIGNED_INT;if(a===vi)return r.FLOAT;if(a===uo)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===JS)return r.ALPHA;if(a===li)return r.RGBA;if(a===QS)return r.LUMINANCE;if(a===eE)return r.LUMINANCE_ALPHA;if(a===Nr)return r.DEPTH_COMPONENT;if(a===Ls)return r.DEPTH_STENCIL;if(a===Qc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Cp)return r.RED;if(a===Lp)return r.RED_INTEGER;if(a===tE)return r.RG;if(a===Pp)return r.RG_INTEGER;if(a===Ip)return r.RGBA_INTEGER;if(a===hc||a===dc||a===pc||a===mc)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===mc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vh||a===kh||a===Wh||a===Xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dp)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Yh||a===qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Yh)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===qh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===$h||a===Kh||a===Zh||a===jh||a===Jh||a===Qh||a===ed||a===td||a===nd||a===id||a===rd||a===sd||a===od||a===ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===$h)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Zh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Qh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ed)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===td)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===nd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===id)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===sd)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===od)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ad)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===gc||a===ld||a===cd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===gc)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nE||a===ud||a===fd||a===hd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===gc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===hd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ur?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class Dw extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ca extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uw={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const g=t.getJointPose(w,i),m=this._getHandJoint(d,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Uw)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
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

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new En,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new dr({extensions:{fragDepth:!0},vertexShader:Nw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new ja(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bw extends Br{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,x=null,E=null;const w=new Fw,g=t.getContextAttributes();let m=null,O=null;const T=[],L=[],z=new at;let P=null;const U=new zn;U.layers.enable(1),U.viewport=new cn;const K=new zn;K.layers.enable(2),K.viewport=new cn;const pe=[U,K],b=new Dw;b.layers.enable(1),b.layers.enable(2);let N=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=T[Q];return ge===void 0&&(ge=new Hc,T[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=T[Q];return ge===void 0&&(ge=new Hc,T[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=T[Q];return ge===void 0&&(ge=new Hc,T[Q]=ge),ge.getHandSpace()};function fe(Q){const ge=L.indexOf(Q.inputSource);if(ge===-1)return;const Re=T[ge];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<T.length;Q++){const ge=L[Q];ge!==null&&(L[Q]=null,T[Q].disconnect(ge))}N=null,me=null,w.reset(),e.setRenderTarget(m),x=null,v=null,_=null,o=null,O=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",G),o.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(z),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Or(x.framebufferWidth,x.framebufferHeight,{format:li,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ge=null,Re=null,Ze=null;g.depth&&(Ze=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?Ls:Nr,Re=g.stencil?Ur:lr);const Oe={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Or(v.textureWidth,v.textureHeight,{format:li,type:fr,depthTexture:new Kp(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(O);Ce.__ignoreDepthValues=v.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),et.setContext(o),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Q){for(let ge=0;ge<Q.removed.length;ge++){const Re=Q.removed[ge],Ze=L.indexOf(Re);Ze>=0&&(L[Ze]=null,T[Ze].disconnect(Re))}for(let ge=0;ge<Q.added.length;ge++){const Re=Q.added[ge];let Ze=L.indexOf(Re);if(Ze===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=L.length){L.push(Re),Ze=Ce;break}else if(L[Ce]===null){L[Ce]=Re,Ze=Ce;break}if(Ze===-1)break}const Oe=T[Ze];Oe&&Oe.connect(Re)}}const ne=new X,ce=new X;function te(Q,ge,Re){ne.setFromMatrixPosition(ge.matrixWorld),ce.setFromMatrixPosition(Re.matrixWorld);const Ze=ne.distanceTo(ce),Oe=ge.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,St=Oe[14]/(Oe[10]-1),ke=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],Wt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],je=(Ce[8]+1)/Ce[0],Ve=St*Ue,Qe=St*je,tt=Ze/(-Ue+je),lt=tt*-Ue;ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const bt=St+tt,C=ke+tt,S=Ve-lt,ee=Qe+(Ze-lt),oe=W*ke/C*bt,ve=Wt*ke/C*bt;Q.projectionMatrix.makePerspective(S,ee,oe,ve,bt,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ue(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;w.texture!==null&&(Q.near=w.depthNear,Q.far=w.depthFar),b.near=K.near=U.near=Q.near,b.far=K.far=U.far=Q.far,(N!==b.near||me!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,me=b.far,U.near=N,U.far=me,K.near=N,K.far=me,U.updateProjectionMatrix(),K.updateProjectionMatrix(),Q.updateProjectionMatrix());const ge=Q.parent,Re=b.cameras;ue(b,ge);for(let Ze=0;Ze<Re.length;Ze++)ue(Re[Ze],ge);Re.length===2?te(b,U,K):b.projectionMatrix.copy(U.projectionMatrix),he(Q,b,ge)};function he(Q,ge,Re){Re===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null};let Me=null;function De(Q,ge){if(p=ge.getViewerPose(d||u),E=ge,p!==null){const Re=p.views;x!==null&&(e.setRenderTargetFramebuffer(O,x.framebuffer),e.setRenderTarget(O));let Ze=!1;Re.length!==b.cameras.length&&(b.cameras.length=0,Ze=!0);for(let Ce=0;Ce<Re.length;Ce++){const St=Re[Ce];let ke=null;if(x!==null)ke=x.getViewport(St);else{const Wt=_.getViewSubImage(v,St);ke=Wt.viewport,Ce===0&&(e.setRenderTargetTextures(O,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(O))}let W=pe[Ce];W===void 0&&(W=new zn,W.layers.enable(Ce),W.viewport=new cn,pe[Ce]=W),W.matrix.fromArray(St.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(St.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(b.matrix.copy(W.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ze===!0&&b.cameras.push(W)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(e,Ce,o.renderState)}}for(let Re=0;Re<T.length;Re++){const Ze=L[Re],Oe=T[Re];Ze!==null&&Oe!==void 0&&Oe.update(Ze,ge,d||u)}w.render(e,b),Me&&Me(Q,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const et=new $p;et.setAnimationLoop(De),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const Cr=new Gi,zw=new Yt;function Gw(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Wp(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function o(g,m,O,T,L){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),_(g,m)):m.isMeshPhongMaterial?(a(g,m),p(g,m)):m.isMeshStandardMaterial?(a(g,m),v(g,m),m.isMeshPhysicalMaterial&&x(g,m,L)):m.isMeshMatcapMaterial?(a(g,m),E(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),w(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(u(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?f(g,m,O,T):m.isSpriteMaterial?d(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const O=e.get(m),T=O.envMap,L=O.envMapRotation;if(T&&(g.envMap.value=T,Cr.copy(L),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Cr)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const z=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*z,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function f(g,m,O,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*O,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function v(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function x(g,m,O){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=O.texture,g.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){const O=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(O.matrixWorld),g.nearDistance.value=O.shadow.camera.near,g.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Hw(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(O,T){const L=T.program;i.uniformBlockBinding(O,L)}function d(O,T){let L=o[O.id];L===void 0&&(E(O),L=p(O),o[O.id]=L,O.addEventListener("dispose",g));const z=T.program;i.updateUBOMapping(O,z);const P=e.render.frame;a[O.id]!==P&&(v(O),a[O.id]=P)}function p(O){const T=_();O.__bindingPointIndex=T;const L=r.createBuffer(),z=O.__size,P=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,L),L}function _(){for(let O=0;O<c;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const T=o[O.id],L=O.uniforms,z=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let P=0,U=L.length;P<U;P++){const K=Array.isArray(L[P])?L[P]:[L[P]];for(let pe=0,b=K.length;pe<b;pe++){const N=K[pe];if(x(N,P,pe,z)===!0){const me=N.__offset,fe=Array.isArray(N.value)?N.value:[N.value];let G=0;for(let se=0;se<fe.length;se++){const ne=fe[se],ce=w(ne);typeof ne=="number"||typeof ne=="boolean"?(N.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,me+G,N.__data)):ne.isMatrix3?(N.__data[0]=ne.elements[0],N.__data[1]=ne.elements[1],N.__data[2]=ne.elements[2],N.__data[3]=0,N.__data[4]=ne.elements[3],N.__data[5]=ne.elements[4],N.__data[6]=ne.elements[5],N.__data[7]=0,N.__data[8]=ne.elements[6],N.__data[9]=ne.elements[7],N.__data[10]=ne.elements[8],N.__data[11]=0):(ne.toArray(N.__data,G),G+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,me,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(O,T,L,z){const P=O.value,U=T+"_"+L;if(z[U]===void 0)return typeof P=="number"||typeof P=="boolean"?z[U]=P:z[U]=P.clone(),!0;{const K=z[U];if(typeof P=="number"||typeof P=="boolean"){if(K!==P)return z[U]=P,!0}else if(K.equals(P)===!1)return K.copy(P),!0}return!1}function E(O){const T=O.uniforms;let L=0;const z=16;for(let U=0,K=T.length;U<K;U++){const pe=Array.isArray(T[U])?T[U]:[T[U]];for(let b=0,N=pe.length;b<N;b++){const me=pe[b],fe=Array.isArray(me.value)?me.value:[me.value];for(let G=0,se=fe.length;G<se;G++){const ne=fe[G],ce=w(ne),te=L%z;te!==0&&z-te<ce.boundary&&(L+=z-te),me.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=L,L+=ce.storage}}}const P=L%z;return P>0&&(L+=z-P),O.__size=L,O.__cache={},this}function w(O){const T={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(T.boundary=4,T.storage=4):O.isVector2?(T.boundary=8,T.storage=8):O.isVector3||O.isColor?(T.boundary=16,T.storage=12):O.isVector4?(T.boundary=16,T.storage=16):O.isMatrix3?(T.boundary=48,T.storage=48):O.isMatrix4?(T.boundary=64,T.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),T}function g(O){const T=O.target;T.removeEventListener("dispose",g);const L=u.indexOf(T.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function m(){for(const O in o)r.deleteBuffer(o[O]);u=[],o={},a={}}return{bind:f,update:d,dispose:m}}class pu{constructor(e={}){const{canvas:t=CE(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),E=new Int32Array(4);let w=null,g=null;const m=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const T=this;let L=!1,z=0,P=0,U=null,K=-1,pe=null;const b=new cn,N=new cn;let me=null;const fe=new Tt(0);let G=0,se=t.width,ne=t.height,ce=1,te=null,ue=null;const he=new cn(0,0,se,ne),Me=new cn(0,0,se,ne);let De=!1;const et=new qp;let Q=!1,ge=!1,Re=null;const Ze=new Yt,Oe=new at,Ce=new X,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return U===null?ce:1}let W=i;function Wt(R,k){for(let Z=0;Z<R.length;Z++){const J=R[Z],q=t.getContext(J,k);if(q!==null)return q}return null}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Se,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&k.shift(),W=Wt(k,R),W===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,je,Ve,Qe,tt,lt,bt,C,S,ee,oe,ve,_e,Ke,He,ye,be,Je,Ee,Nt,rt,Ge,Pe,Fe;function I(){Ue=new qb(W),je=new Gb(W,Ue,e),Ue.init(je),Ge=new Iw(W,Ue,je),Ve=new Lw(W,Ue,je),Qe=new Zb(W),tt=new gw,lt=new Pw(W,Ue,Ve,tt,je,Ge,Qe),bt=new Vb(T),C=new Yb(T),S=new ty(W,je),Pe=new Bb(W,Ue,S,je),ee=new $b(W,S,Qe,Pe),oe=new eA(W,ee,S,Qe),Ee=new Qb(W,je,lt),ye=new Hb(tt),ve=new mw(T,bt,C,Ue,je,Pe,ye),_e=new Gw(T,tt),Ke=new vw,He=new Tw(Ue,je),Je=new Fb(T,bt,C,Ve,oe,v,f),be=new Cw(T,oe,je),Fe=new Hw(W,Qe,je,Ve),Nt=new zb(W,Ue,Qe,je),rt=new Kb(W,Ue,Qe,je),Qe.programs=ve.programs,T.capabilities=je,T.extensions=Ue,T.properties=tt,T.renderLists=Ke,T.shadowMap=be,T.state=Ve,T.info=Qe}I();const le=new Bw(T,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(se,ne,!1))},this.getSize=function(R){return R.set(se,ne)},this.setSize=function(R,k,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ne=k,t.width=Math.floor(R*ce),t.height=Math.floor(k*ce),Z===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(se*ce,ne*ce).floor()},this.setDrawingBufferSize=function(R,k,Z){se=R,ne=k,ce=Z,t.width=Math.floor(R*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,k,Z,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,k,Z,J),Ve.viewport(b.copy(he).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Me)},this.setScissor=function(R,k,Z,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,k,Z,J),Ve.scissor(N.copy(Me).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ve.setScissorTest(De=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,k=!0,Z=!0){let J=0;if(R){let q=!1;if(U!==null){const Le=U.texture.format;q=Le===Ip||Le===Pp||Le===Lp}if(q){const Le=U.texture.type,Be=Le===fr||Le===lr||Le===cu||Le===Ur||Le===wp||Le===Rp,Xe=Je.getClearColor(),Ye=Je.getClearAlpha(),ut=Xe.r,nt=Xe.g,st=Xe.b;Be?(x[0]=ut,x[1]=nt,x[2]=st,x[3]=Ye,W.clearBufferuiv(W.COLOR,0,x)):(E[0]=ut,E[1]=nt,E[2]=st,E[3]=Ye,W.clearBufferiv(W.COLOR,0,E))}else J|=W.COLOR_BUFFER_BIT}k&&(J|=W.DEPTH_BUFFER_BIT),Z&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ke.dispose(),He.dispose(),tt.dispose(),bt.dispose(),C.dispose(),oe.dispose(),Pe.dispose(),Fe.dispose(),ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",Gt),le.removeEventListener("sessionend",Et),Re&&(Re.dispose(),Re=null),Ct.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=Qe.autoReset,k=be.enabled,Z=be.autoUpdate,J=be.needsUpdate,q=be.type;I(),Qe.autoReset=R,be.enabled=k,be.autoUpdate=Z,be.needsUpdate=J,be.type=q}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Y(R){const k=R.target;k.removeEventListener("dispose",Y),xe(k)}function xe(R){we(R),tt.remove(R)}function we(R){const k=tt.get(R).programs;k!==void 0&&(k.forEach(function(Z){ve.releaseProgram(Z)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Z,J,q,Le){k===null&&(k=St);const Be=q.isMesh&&q.matrixWorld.determinant()<0,Xe=tl(R,k,Z,J,q);Ve.setMaterial(J,Be);let Ye=Z.index,ut=1;if(J.wireframe===!0){if(Ye=ee.getWireframeAttribute(Z),Ye===void 0)return;ut=2}const nt=Z.drawRange,st=Z.attributes.position;let Ht=nt.start*ut,un=(nt.start+nt.count)*ut;Le!==null&&(Ht=Math.max(Ht,Le.start*ut),un=Math.min(un,(Le.start+Le.count)*ut)),Ye!==null?(Ht=Math.max(Ht,0),un=Math.min(un,Ye.count)):st!=null&&(Ht=Math.max(Ht,0),un=Math.min(un,st.count));const qt=un-Ht;if(qt<0||qt===1/0)return;Pe.setup(q,J,Xe,Z,Ye);let Jn,Ft=Nt;if(Ye!==null&&(Jn=S.get(Ye),Ft=rt,Ft.setIndex(Jn)),q.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*ke()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(q.isLine){let ct=J.linewidth;ct===void 0&&(ct=1),Ve.setLineWidth(ct*ke()),q.isLineSegments?Ft.setMode(W.LINES):q.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else q.isPoints?Ft.setMode(W.POINTS):q.isSprite&&Ft.setMode(W.TRIANGLES);if(q.isBatchedMesh)Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ft.renderInstances(Ht,qt,q.count);else if(Z.isInstancedBufferGeometry){const ct=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Os=Math.min(Z.instanceCount,ct);Ft.renderInstances(Ht,qt,Os)}else Ft.render(Ht,qt)};function ht(R,k,Z){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,Vr(R,k,Z),R.side=hr,R.needsUpdate=!0,Vr(R,k,Z),R.side=Bi):Vr(R,k,Z)}this.compile=function(R,k,Z=null){Z===null&&(Z=R),g=He.get(Z),g.init(),O.push(g),Z.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),R!==Z&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(T._useLegacyLights);const J=new Set;return R.traverse(function(q){const Le=q.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Xe=Le[Be];ht(Xe,Z,q),J.add(Xe)}else ht(Le,Z,q),J.add(Le)}),O.pop(),g=null,J},this.compileAsync=function(R,k,Z=null){const J=this.compile(R,k,Z);return new Promise(q=>{function Le(){if(J.forEach(function(Be){tt.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){q(R);return}setTimeout(Le,10)}Ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let yt=null;function Rt(R){yt&&yt(R)}function Gt(){Ct.stop()}function Et(){Ct.start()}const Ct=new $p;Ct.setAnimationLoop(Rt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(R){yt=R,le.setAnimationLoop(R),R===null?Ct.stop():Ct.start()},le.addEventListener("sessionstart",Gt),le.addEventListener("sessionend",Et),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,k,U),g=He.get(R,O.length),g.init(),O.push(g),Ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(Ze),ge=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,ge),w=Ke.get(R,m.length),w.init(),m.push(w),nn(R,k,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(te,ue),this.info.render.frame++,Q===!0&&ye.beginShadows();const Z=g.state.shadowsArray;if(be.render(Z,R,k),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Je.render(w,R),g.setupLights(T._useLegacyLights),k.isArrayCamera){const J=k.cameras;for(let q=0,Le=J.length;q<Le;q++){const Be=J[q];jn(w,R,Be,Be.viewport)}}else jn(w,R,k);U!==null&&(lt.updateMultisampleRenderTarget(U),lt.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(T,R,k),Pe.resetDefaultState(),K=-1,pe=null,O.pop(),O.length>0?g=O[O.length-1]:g=null,m.pop(),m.length>0?w=m[m.length-1]:w=null};function nn(R,k,Z,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){J&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);const Be=oe.update(R),Xe=R.material;Xe.visible&&w.push(R,Be,Xe,Z,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const Be=oe.update(R),Xe=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Xe)){const Ye=Be.groups;for(let ut=0,nt=Ye.length;ut<nt;ut++){const st=Ye[ut],Ht=Xe[st.materialIndex];Ht&&Ht.visible&&w.push(R,Be,Ht,Z,Ce.z,st)}}else Xe.visible&&w.push(R,Be,Xe,Z,Ce.z,null)}}const Le=R.children;for(let Be=0,Xe=Le.length;Be<Xe;Be++)nn(Le[Be],k,Z,J)}function jn(R,k,Z,J){const q=R.opaque,Le=R.transmissive,Be=R.transparent;g.setupLightsView(Z),Q===!0&&ye.setGlobalState(T.clippingPlanes,Z),Le.length>0&&Gr(q,Le,k,Z),J&&Ve.viewport(b.copy(J)),q.length>0&&Hr(q,k,Z),Le.length>0&&Hr(Le,k,Z),Be.length>0&&Hr(Be,k,Z),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Gr(R,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Le=je.isWebGL2;Re===null&&(Re=new Or(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?uo:fr,minFilter:Dr,samples:Le?4:0})),T.getDrawingBufferSize(Oe),Le?Re.setSize(Oe.x,Oe.y):Re.setSize(Ha(Oe.x),Ha(Oe.y));const Be=T.getRenderTarget();T.setRenderTarget(Re),T.getClearColor(fe),G=T.getClearAlpha(),G<1&&T.setClearColor(16777215,.5),T.clear();const Xe=T.toneMapping;T.toneMapping=ur,Hr(R,Z,J),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re);let Ye=!1;for(let ut=0,nt=k.length;ut<nt;ut++){const st=k[ut],Ht=st.object,un=st.geometry,qt=st.material,Jn=st.group;if(qt.side===Bi&&Ht.layers.test(J.layers)){const Ft=qt.side;qt.side=Ln,qt.needsUpdate=!0,vo(Ht,Z,J,un,qt,Jn),qt.side=Ft,qt.needsUpdate=!0,Ye=!0}}Ye===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re)),T.setRenderTarget(Be),T.setClearColor(fe,G),T.toneMapping=Xe}function Hr(R,k,Z){const J=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Le=R.length;q<Le;q++){const Be=R[q],Xe=Be.object,Ye=Be.geometry,ut=J===null?Be.material:J,nt=Be.group;Xe.layers.test(Z.layers)&&vo(Xe,k,Z,Ye,ut,nt)}}function vo(R,k,Z,J,q,Le){R.onBeforeRender(T,k,Z,J,q,Le),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(T,k,Z,J,R,Le),q.transparent===!0&&q.side===Bi&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,T.renderBufferDirect(Z,k,J,q,R,Le),q.side=hr,q.needsUpdate=!0,T.renderBufferDirect(Z,k,J,q,R,Le),q.side=Bi):T.renderBufferDirect(Z,k,J,q,R,Le),R.onAfterRender(T,k,Z,J,q,Le)}function Vr(R,k,Z){k.isScene!==!0&&(k=St);const J=tt.get(R),q=g.state.lights,Le=g.state.shadowsArray,Be=q.state.version,Xe=ve.getParameters(R,q.state,Le,k,Z),Ye=ve.getProgramCacheKey(Xe);let ut=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?C:bt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ut===void 0&&(R.addEventListener("dispose",Y),ut=new Map,J.programs=ut);let nt=ut.get(Ye);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Be)return Mo(R,Xe),nt}else Xe.uniforms=ve.getUniforms(R),R.onBuild(Z,Xe,T),R.onBeforeCompile(Xe,T),nt=ve.acquireProgram(Xe,Ye),ut.set(Ye,nt),J.uniforms=Xe.uniforms;const st=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ye.uniform),Mo(R,Xe),J.needsLights=So(R),J.lightsStateVersion=Be,J.needsLights&&(st.ambientLightColor.value=q.state.ambient,st.lightProbe.value=q.state.probe,st.directionalLights.value=q.state.directional,st.directionalLightShadows.value=q.state.directionalShadow,st.spotLights.value=q.state.spot,st.spotLightShadows.value=q.state.spotShadow,st.rectAreaLights.value=q.state.rectArea,st.ltc_1.value=q.state.rectAreaLTC1,st.ltc_2.value=q.state.rectAreaLTC2,st.pointLights.value=q.state.point,st.pointLightShadows.value=q.state.pointShadow,st.hemisphereLights.value=q.state.hemi,st.directionalShadowMap.value=q.state.directionalShadowMap,st.directionalShadowMatrix.value=q.state.directionalShadowMatrix,st.spotShadowMap.value=q.state.spotShadowMap,st.spotLightMatrix.value=q.state.spotLightMatrix,st.spotLightMap.value=q.state.spotLightMap,st.pointShadowMap.value=q.state.pointShadowMap,st.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function xo(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Da.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Mo(R,k){const Z=tt.get(R);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function tl(R,k,Z,J,q){k.isScene!==!0&&(k=St),lt.resetTextureUnits();const Le=k.fog,Be=J.isMeshStandardMaterial?k.environment:null,Xe=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pr,Ye=(J.isMeshStandardMaterial?C:bt).get(J.envMap||Be),ut=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),st=!!Z.morphAttributes.position,Ht=!!Z.morphAttributes.normal,un=!!Z.morphAttributes.color;let qt=ur;J.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qt=T.toneMapping);const Jn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ft=Jn!==void 0?Jn.length:0,ct=tt.get(J),Os=g.state.lights;if(Q===!0&&(ge===!0||R!==pe)){const Tn=R===pe&&J.id===K;ye.setState(J,R,Tn)}let Dt=!1;J.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Os.state.version||ct.outputColorSpace!==Xe||q.isBatchedMesh&&ct.batching===!1||!q.isBatchedMesh&&ct.batching===!0||q.isInstancedMesh&&ct.instancing===!1||!q.isInstancedMesh&&ct.instancing===!0||q.isSkinnedMesh&&ct.skinning===!1||!q.isSkinnedMesh&&ct.skinning===!0||q.isInstancedMesh&&ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ct.instancingMorph===!1&&q.morphTexture!==null||ct.envMap!==Ye||J.fog===!0&&ct.fog!==Le||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==ye.numPlanes||ct.numIntersection!==ye.numIntersection)||ct.vertexAlphas!==ut||ct.vertexTangents!==nt||ct.morphTargets!==st||ct.morphNormals!==Ht||ct.morphColors!==un||ct.toneMapping!==qt||je.isWebGL2===!0&&ct.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,ct.__version=J.version);let fi=ct.currentProgram;Dt===!0&&(fi=Vr(J,k,q));let Fs=!1,Si=!1,Bs=!1;const jt=fi.getUniforms(),Hn=ct.uniforms;if(Ve.useProgram(fi.program)&&(Fs=!0,Si=!0,Bs=!0),J.id!==K&&(K=J.id,Si=!0),Fs||pe!==R){jt.setValue(W,"projectionMatrix",R.projectionMatrix),jt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Tn=jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(W,Ce.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&jt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),pe!==R&&(pe=R,Si=!0,Bs=!0)}if(q.isSkinnedMesh){jt.setOptional(W,q,"bindMatrix"),jt.setOptional(W,q,"bindMatrixInverse");const Tn=q.skeleton;Tn&&(je.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),jt.setValue(W,"boneTexture",Tn.boneTexture,lt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(W,q,"batchingTexture"),jt.setValue(W,"batchingTexture",q._matricesTexture,lt));const kr=Z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0&&je.isWebGL2===!0)&&Ee.update(q,Z,fi),(Si||ct.receiveShadow!==q.receiveShadow)&&(ct.receiveShadow=q.receiveShadow,jt.setValue(W,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hn.envMap.value=Ye,Hn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Si&&(jt.setValue(W,"toneMappingExposure",T.toneMappingExposure),ct.needsLights&&nl(Hn,Bs),Le&&J.fog===!0&&_e.refreshFogUniforms(Hn,Le),_e.refreshMaterialUniforms(Hn,J,ce,ne,Re),Da.upload(W,xo(ct),Hn,lt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Da.upload(W,xo(ct),Hn,lt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(W,"center",q.center),jt.setValue(W,"modelViewMatrix",q.modelViewMatrix),jt.setValue(W,"normalMatrix",q.normalMatrix),jt.setValue(W,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Tn=J.uniformsGroups;for(let Wr=0,Eo=Tn.length;Wr<Eo;Wr++)if(je.isWebGL2){const Xr=Tn[Wr];Fe.update(Xr,fi),Fe.bind(Xr,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function nl(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function So(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,k,Z){tt.get(R.texture).__webglTexture=k,tt.get(R.depthTexture).__webglTexture=Z;const J=tt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const Z=tt.get(R);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Z=0){U=R,z=k,P=Z;let J=!0,q=null,Le=!1,Be=!1;if(R){const Ye=tt.get(R);Ye.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):Ye.__webglFramebuffer===void 0?lt.setupRenderTarget(R):Ye.__hasExternalTextures&&lt.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const ut=R.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Be=!0);const nt=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[k])?q=nt[k][Z]:q=nt[k],Le=!0):je.isWebGL2&&R.samples>0&&lt.useMultisampledRTT(R)===!1?q=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[Z]:q=nt,b.copy(R.viewport),N.copy(R.scissor),me=R.scissorTest}else b.copy(he).multiplyScalar(ce).floor(),N.copy(Me).multiplyScalar(ce).floor(),me=De;if(Ve.bindFramebuffer(W.FRAMEBUFFER,q)&&je.drawBuffers&&J&&Ve.drawBuffers(R,q),Ve.viewport(b),Ve.scissor(N),Ve.setScissorTest(me),Le){const Ye=tt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ye.__webglTexture,Z)}else if(Be){const Ye=tt.get(R.texture),ut=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,Z||0,ut)}K=-1},this.readRenderTargetPixels=function(R,k,Z,J,q,Le,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){Ve.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const Ye=R.texture,ut=Ye.format,nt=Ye.type;if(ut!==li&&Ge.convert(ut)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===uo&&(Ue.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(nt!==fr&&Ge.convert(nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===vi&&(je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&Z>=0&&Z<=R.height-q&&W.readPixels(k,Z,J,q,Ge.convert(ut),Ge.convert(nt),Le)}finally{const Ye=U!==null?tt.get(U).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,k,Z=0){const J=Math.pow(2,-Z),q=Math.floor(k.image.width*J),Le=Math.floor(k.image.height*J);lt.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,Z,0,0,R.x,R.y,q,Le),Ve.unbindTexture()},this.copyTextureToTexture=function(R,k,Z,J=0){const q=k.image.width,Le=k.image.height,Be=Ge.convert(Z.format),Xe=Ge.convert(Z.type);lt.setTexture2D(Z,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,q,Le,Be,Xe,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,Be,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,Be,Xe,k.image),J===0&&Z.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Z,J,q=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Xe=R.max.z-R.min.z+1,Ye=Ge.convert(J.format),ut=Ge.convert(J.type);let nt;if(J.isData3DTexture)lt.setTexture3D(J,0),nt=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)lt.setTexture2DArray(J,0),nt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const st=W.getParameter(W.UNPACK_ROW_LENGTH),Ht=W.getParameter(W.UNPACK_IMAGE_HEIGHT),un=W.getParameter(W.UNPACK_SKIP_PIXELS),qt=W.getParameter(W.UNPACK_SKIP_ROWS),Jn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ft=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,Ft.data):W.texSubImage3D(nt,q,k.x,k.y,k.z,Le,Be,Xe,Ye,ut,Ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,st),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ht),W.pixelStorei(W.UNPACK_SKIP_PIXELS,un),W.pixelStorei(W.UNPACK_SKIP_ROWS,qt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jn),q===0&&J.generateMipmaps&&W.generateMipmap(nt),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){z=0,P=0,U=null,Ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends pu{}Vw.prototype.isWebGL1Renderer=!0;class kw extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ww extends En{constructor(e=null,t=1,i=1,o,a,u,c,f,d=ln,p=ln,_,v){super(null,u,c,f,d,p,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends ui{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Yt,rp=new Yt,La=[],sp=new zr,Xw=new Yt,so=new ci,oo=new mo;class op extends ci{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ip(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Xw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),sp.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(sp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),oo.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Es),rp.multiplyMatrices(i,Es),so.matrixWorld=rp,so.raycast(e,La);for(let u=0,c=La.length;u<c;u++){const f=La[u];f.instanceId=a,f.object=this,t.push(f)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ip(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ww(new Float32Array(o*this.count),o,this.count,Cp,vi));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mu extends Hi{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new X,p=new at;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/e+1)/2,p.y=(u[v+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(c,3)),this.setAttribute("uv",new Gn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gu extends Hi{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(u+c,Math.PI);let d=0;const p=[],_=new X,v=new X,x=[],E=[],w=[],g=[];for(let m=0;m<=i;m++){const O=[],T=m/i;let L=0;m===0&&u===0?L=.5/t:m===i&&f===Math.PI&&(L=-.5/t);for(let z=0;z<=t;z++){const P=z/t;_.x=-e*Math.cos(o+P*a)*Math.sin(u+T*c),_.y=e*Math.cos(u+T*c),_.z=e*Math.sin(o+P*a)*Math.sin(u+T*c),E.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),g.push(P+L,1-T),O.push(d++)}p.push(O)}for(let m=0;m<i;m++)for(let O=0;O<t;O++){const T=p[m][O+1],L=p[m][O],z=p[m+1][O],P=p[m+1][O+1];(m!==0||u>0)&&x.push(T,L,P),(m!==i-1||f<Math.PI)&&x.push(L,z,P)}this.setIndex(x),this.setAttribute("position",new Gn(E,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ap{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);var nu=function(r,e){return nu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},nu(r,e)};function Us(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");nu(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function iu(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ru(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function su(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function Mi(r){return typeof r=="function"}function tm(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Vc=tm(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function ou(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Qa=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=iu(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(w){e={error:w}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(Mi(p))try{p()}catch(w){a=w instanceof Vc?w.errors:[w]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=iu(_),x=v.next();!x.done;x=v.next()){var E=x.value;try{lp(E)}catch(w){a=a??[],w instanceof Vc?a=su(su([],ru(a)),ru(w.errors)):a.push(w)}}}catch(w){i={error:w}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new Vc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)lp(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&ou(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&ou(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),nm=Qa.EMPTY;function im(r){return r instanceof Qa||r&&"closed"in r&&Mi(r.remove)&&Mi(r.add)&&Mi(r.unsubscribe)}function lp(r){Mi(r)?r():r.unsubscribe()}var rm={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},sm={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,su([r,e],ru(t)))},clearTimeout:function(r){var e=sm.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function Yw(r){sm.setTimeout(function(){throw r})}function cp(){}function Ua(r){r()}var _u=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,im(t)&&t.add(i)):i.destination=Zw,i}return e.create=function(t,i,o){return new au(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Qa),qw=Function.prototype.bind;function kc(r,e){return qw.call(r,e)}var $w=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Pa(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Pa(i)}else Pa(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Pa(t)}},r}(),au=function(r){Us(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(Mi(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&rm.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&kc(t.next,c),error:t.error&&kc(t.error,c),complete:t.complete&&kc(t.complete,c)}):u=t}return a.destination=new $w(u),a}return e}(_u);function Pa(r){Yw(r)}function Kw(r){throw r}var Zw={closed:!0,next:cp,error:Kw,complete:cp},jw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function om(r){return r}function Jw(r){return r.length===0?om:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var up=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=eR(e)?e:new au(e,t,i);return Ua(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=fp(t),new t(function(o,a){var u=new au({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[jw]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Jw(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=fp(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function fp(r){var e;return(e=r??rm.Promise)!==null&&e!==void 0?e:Promise}function Qw(r){return r&&Mi(r.next)&&Mi(r.error)&&Mi(r.complete)}function eR(r){return r&&r instanceof _u||Qw(r)&&im(r)}function tR(r){return Mi(r==null?void 0:r.lift)}function am(r){return function(e){if(tR(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function lm(r,e,t,i,o){return new nR(r,e,t,i,o)}var nR=function(r){Us(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(_u),iR=tm(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),cm=function(r){Us(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new hp(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new iR},e.prototype.next=function(t){var i=this;Ua(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=iu(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Ua(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Ua(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?nm:(this.currentObservers=null,c.push(t),new Qa(function(){i.currentObservers=null,ou(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new up;return t.source=this,t},e.create=function(t,i){return new hp(t,i)},e}(up),hp=function(r){Us(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:nm},e}(cm),Ns=function(r){Us(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(cm);function ir(r,e){return am(function(t,i){var o=0;t.subscribe(lm(i,function(a){i.next(r.call(e,a,o++))}))})}function rr(r,e){return e===void 0&&(e=om),r=r??rR,am(function(t,i){var o,a=!0;t.subscribe(lm(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function rR(r,e){return r===e}const sR={items:[]},ka=new Ns(sR);function oR(r){const t={...ka.getValue(),items:r};ka.next(t)}const aR=new URL(window.location),dp=new URLSearchParams(aR.search),lR={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefix:dp.has("prefix")?dp.get("prefix"):"50pe",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},Pt=new Ns(lR);function cR(r){const e=Pt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};Pt.next(i)}function uR(r){const t={...Pt.getValue(),genes:r};Pt.next(t)}function fR(r){const t={...Pt.getValue(),groups:r};Pt.next(t)}const hR={scene:new kw},um=new Ns(hR),dR={isLoading:!0,theme:"light"},Wa=new Ns(dR);function mi(r){const t={...Wa.getValue(),isLoading:r};Wa.next(t)}const pR=new URL(window.location),pp=new URLSearchParams(pR.search),mR={selectedCelltypes:[],mode:pp.has("mode")?Number(pp.get("mode")):1,selectedSingleGene:"",selectedGenes:[]},Mt=new Ns(mR);function ho(r){const t={...Mt.getValue(),selectedCelltypes:[...new Set(r)]};Mt.next(t)}function gR(r){const t={...Mt.getValue(),mode:r};Mt.next(t)}function po(r){const t={...Mt.getValue(),selectedGenes:r};Mt.next(t)}const mp={type:"change"},Wc={type:"start"},gp={type:"end"},Ia=new zp,_p=new or,_R=Math.cos(70*RE.DEG2RAD);class fm extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",He),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mp),i.update(),a=o.NONE},this.update=function(){const I=new X,le=new Fr().setFromUnitVectors(e.up,new X(0,1,0)),Ne=le.clone().invert(),F=new X,Se=new Fr,Y=new X,xe=2*Math.PI;return function(ht=null){const yt=i.object.position;I.copy(yt).sub(i.target),I.applyQuaternion(le),c.setFromVector3(I),i.autoRotate&&a===o.NONE&&me(b(ht)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Rt=i.minAzimuthAngle,Gt=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(Gt)&&(Rt<-Math.PI?Rt+=xe:Rt>Math.PI&&(Rt-=xe),Gt<-Math.PI?Gt+=xe:Gt>Math.PI&&(Gt-=xe),Rt<=Gt?c.theta=Math.max(Rt,Math.min(Gt,c.theta)):c.theta=c.theta>(Rt+Gt)/2?Math.max(Rt,c.theta):Math.min(Gt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&P||i.object.isOrthographicCamera)c.radius=he(c.radius);else{const Ct=c.radius;c.radius=he(c.radius*d),Et=Ct!=c.radius}if(I.setFromSpherical(c),I.applyQuaternion(Ne),yt.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&P){let Ct=null;if(i.object.isPerspectiveCamera){const nn=I.length();Ct=he(nn*d);const jn=nn-Ct;i.object.position.addScaledVector(L,jn),i.object.updateMatrixWorld(),Et=!!jn}else if(i.object.isOrthographicCamera){const nn=new X(z.x,z.y,0);nn.unproject(i.object);const jn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Et=jn!==i.object.zoom;const Gr=new X(z.x,z.y,0);Gr.unproject(i.object),i.object.position.sub(Gr).add(nn),i.object.updateMatrixWorld(),Ct=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ct).add(i.object.position):(Ia.origin.copy(i.object.position),Ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ia.direction))<_R?e.lookAt(i.target):(_p.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ia.intersectPlane(_p,i.target))))}else if(i.object.isOrthographicCamera){const Ct=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Ct!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return d=1,P=!1,Et||F.distanceToSquared(i.object.position)>u||8*(1-Se.dot(i.object.quaternion))>u||Y.distanceToSquared(i.target)>u?(i.dispatchEvent(mp),F.copy(i.object.position),Se.copy(i.object.quaternion),Y.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Je),i.domElement.removeEventListener("pointerdown",lt),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new ap,f=new ap;let d=1;const p=new X,_=new at,v=new at,x=new at,E=new at,w=new at,g=new at,m=new at,O=new at,T=new at,L=new X,z=new at;let P=!1;const U=[],K={};let pe=!1;function b(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function N(I){const le=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*le)}function me(I){f.theta-=I}function fe(I){f.phi-=I}const G=function(){const I=new X;return function(Ne,F){I.setFromMatrixColumn(F,0),I.multiplyScalar(-Ne),p.add(I)}}(),se=function(){const I=new X;return function(Ne,F){i.screenSpacePanning===!0?I.setFromMatrixColumn(F,1):(I.setFromMatrixColumn(F,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Ne),p.add(I)}}(),ne=function(){const I=new X;return function(Ne,F){const Se=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;I.copy(Y).sub(i.target);let xe=I.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),G(2*Ne*xe/Se.clientHeight,i.object.matrix),se(2*F*xe/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(Ne*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),se(F*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(I,le){if(!i.zoomToCursor)return;P=!0;const Ne=i.domElement.getBoundingClientRect(),F=I-Ne.left,Se=le-Ne.top,Y=Ne.width,xe=Ne.height;z.x=F/Y*2-1,z.y=-(Se/xe)*2+1,L.set(z.x,z.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function Me(I){_.set(I.clientX,I.clientY)}function De(I){ue(I.clientX,I.clientX),m.set(I.clientX,I.clientY)}function et(I){E.set(I.clientX,I.clientY)}function Q(I){v.set(I.clientX,I.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function ge(I){O.set(I.clientX,I.clientY),T.subVectors(O,m),T.y>0?ce(N(T.y)):T.y<0&&te(N(T.y)),m.copy(O),i.update()}function Re(I){w.set(I.clientX,I.clientY),g.subVectors(w,E).multiplyScalar(i.panSpeed),ne(g.x,g.y),E.copy(w),i.update()}function Ze(I){ue(I.clientX,I.clientY),I.deltaY<0?te(N(I.deltaY)):I.deltaY>0&&ce(N(I.deltaY)),i.update()}function Oe(I){let le=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),le=!0;break}le&&(I.preventDefault(),i.update())}function Ce(I){if(U.length===1)_.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);_.set(Ne,F)}}function St(I){if(U.length===1)E.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);E.set(Ne,F)}}function ke(I){const le=Pe(I),Ne=I.pageX-le.x,F=I.pageY-le.y,Se=Math.sqrt(Ne*Ne+F*F);m.set(0,Se)}function W(I){i.enableZoom&&ke(I),i.enablePan&&St(I)}function Wt(I){i.enableZoom&&ke(I),i.enableRotate&&Ce(I)}function Ue(I){if(U.length==1)v.set(I.pageX,I.pageY);else{const Ne=Pe(I),F=.5*(I.pageX+Ne.x),Se=.5*(I.pageY+Ne.y);v.set(F,Se)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function je(I){if(U.length===1)w.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),F=.5*(I.pageY+le.y);w.set(Ne,F)}g.subVectors(w,E).multiplyScalar(i.panSpeed),ne(g.x,g.y),E.copy(w)}function Ve(I){const le=Pe(I),Ne=I.pageX-le.x,F=I.pageY-le.y,Se=Math.sqrt(Ne*Ne+F*F);O.set(0,Se),T.set(0,Math.pow(O.y/m.y,i.zoomSpeed)),ce(T.y),m.copy(O);const Y=(I.pageX+le.x)*.5,xe=(I.pageY+le.y)*.5;ue(Y,xe)}function Qe(I){i.enableZoom&&Ve(I),i.enablePan&&je(I)}function tt(I){i.enableZoom&&Ve(I),i.enableRotate&&Ue(I)}function lt(I){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",bt),i.domElement.addEventListener("pointerup",C)),!rt(I)&&(Ee(I),I.pointerType==="touch"?ye(I):S(I)))}function bt(I){i.enabled!==!1&&(I.pointerType==="touch"?be(I):ee(I))}function C(I){switch(Nt(I),U.length){case 0:i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",bt),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(gp),a=o.NONE;break;case 1:const le=U[0],Ne=K[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function S(I){let le;switch(I.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Fi.DOLLY:if(i.enableZoom===!1)return;De(I),a=o.DOLLY;break;case Fi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;et(I),a=o.PAN}else{if(i.enableRotate===!1)return;Me(I),a=o.ROTATE}break;case Fi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;Me(I),a=o.ROTATE}else{if(i.enablePan===!1)return;et(I),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function ee(I){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;Q(I);break;case o.DOLLY:if(i.enableZoom===!1)return;ge(I);break;case o.PAN:if(i.enablePan===!1)return;Re(I);break}}function oe(I){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(I.preventDefault(),i.dispatchEvent(Wc),Ze(ve(I)),i.dispatchEvent(gp))}function ve(I){const le=I.deltaMode,Ne={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return I.ctrlKey&&!pe&&(Ne.deltaY*=10),Ne}function _e(I){I.key==="Control"&&(pe=!0,i.domElement.getRootNode().addEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ke(I){I.key==="Control"&&(pe=!1,i.domElement.getRootNode().removeEventListener("keyup",Ke,{passive:!0,capture:!0}))}function He(I){i.enabled===!1||i.enablePan===!1||Oe(I)}function ye(I){switch(Ge(I),U.length){case 1:switch(i.touches.ONE){case sr.ROTATE:if(i.enableRotate===!1)return;Ce(I),a=o.TOUCH_ROTATE;break;case sr.PAN:if(i.enablePan===!1)return;St(I),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case sr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(I),a=o.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(I),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Wc)}function be(I){switch(Ge(I),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(I),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;je(I),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Qe(I),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(I),i.update();break;default:a=o.NONE}}function Je(I){i.enabled!==!1&&I.preventDefault()}function Ee(I){U.push(I.pointerId)}function Nt(I){delete K[I.pointerId];for(let le=0;le<U.length;le++)if(U[le]==I.pointerId){U.splice(le,1);return}}function rt(I){for(let le=0;le<U.length;le++)if(U[le]==I.pointerId)return!0;return!1}function Ge(I){let le=K[I.pointerId];le===void 0&&(le=new at,K[I.pointerId]=le),le.set(I.pageX,I.pageY)}function Pe(I){const le=I.pointerId===U[0]?U[1]:U[0];return K[le]}i.domElement.addEventListener("contextmenu",Je),i.domElement.addEventListener("pointerdown",lt),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Xa.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,x=4,E=1,w=2,g=1,m=2,O=4,T=8,L=16,z=32,P=64,U=128,K=256,pe=512,b=30,N="...",me=800,fe=16,G=1,se=2,ne=3,ce=1/0,te=9007199254740991,ue=17976931348623157e292,he=NaN,Me=4294967295,De=Me-1,et=Me>>>1,Q=[["ary",U],["bind",g],["bindKey",m],["curry",T],["curryRight",L],["flip",pe],["partial",z],["partialRight",P],["rearg",K]],ge="[object Arguments]",Re="[object Array]",Ze="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",St="[object DOMException]",ke="[object Error]",W="[object Function]",Wt="[object GeneratorFunction]",Ue="[object Map]",je="[object Number]",Ve="[object Null]",Qe="[object Object]",tt="[object Promise]",lt="[object Proxy]",bt="[object RegExp]",C="[object Set]",S="[object String]",ee="[object Symbol]",oe="[object Undefined]",ve="[object WeakMap]",_e="[object WeakSet]",Ke="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",be="[object Float64Array]",Je="[object Int8Array]",Ee="[object Int16Array]",Nt="[object Int32Array]",rt="[object Uint8Array]",Ge="[object Uint8ClampedArray]",Pe="[object Uint16Array]",Fe="[object Uint32Array]",I=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,Se=/[&<>"']/g,Y=RegExp(F.source),xe=RegExp(Se.source),we=/<%-([\s\S]+?)%>/g,ht=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/[\\^$.*+?()[\]{}|]/g,nn=RegExp(Ct.source),jn=/^\s+/,Gr=/\s/,Hr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,vo=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,xo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mo=/[()=,{}\[\]\/\s]/,tl=/\\(\\)?/g,nl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,So=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Xe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",ut="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",Ht=ut+nt+st,un="\\u2700-\\u27bf",qt="a-z\\xdf-\\xf6\\xf8-\\xff",Jn="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ct="\\u2000-\\u206f",Os=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",fi="\\ufe0e\\ufe0f",Fs=Jn+Ft+ct+Os,Si="['’]",Bs="["+Ye+"]",jt="["+Fs+"]",Hn="["+Ht+"]",kr="\\d+",Tn="["+un+"]",Wr="["+qt+"]",Eo="[^"+Ye+Fs+kr+un+qt+Dt+"]",Xr="\\ud83c[\\udffb-\\udfff]",mm="(?:"+Hn+"|"+Xr+")",vu="[^"+Ye+"]",il="(?:\\ud83c[\\udde6-\\uddff]){2}",rl="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="["+Dt+"]",xu="\\u200d",Mu="(?:"+Wr+"|"+Eo+")",gm="(?:"+Yr+"|"+Eo+")",Su="(?:"+Si+"(?:d|ll|m|re|s|t|ve))?",Eu="(?:"+Si+"(?:D|LL|M|RE|S|T|VE))?",yu=mm+"?",Tu="["+fi+"]?",_m="(?:"+xu+"(?:"+[vu,il,rl].join("|")+")"+Tu+yu+")*",vm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bu=Tu+yu+_m,Mm="(?:"+[Tn,il,rl].join("|")+")"+bu,Sm="(?:"+[vu+Hn+"?",Hn,il,rl,Bs].join("|")+")",Em=RegExp(Si,"g"),ym=RegExp(Hn,"g"),sl=RegExp(Xr+"(?="+Xr+")|"+Sm+bu,"g"),Tm=RegExp([Yr+"?"+Wr+"+"+Su+"(?="+[jt,Yr,"$"].join("|")+")",gm+"+"+Eu+"(?="+[jt,Yr+Mu,"$"].join("|")+")",Yr+"?"+Mu+"+"+Su,Yr+"+"+Eu,xm,vm,kr,Mm].join("|"),"g"),bm=RegExp("["+xu+Ye+Ht+fi+"]"),Am=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Rm=-1,Bt={};Bt[ye]=Bt[be]=Bt[Je]=Bt[Ee]=Bt[Nt]=Bt[rt]=Bt[Ge]=Bt[Pe]=Bt[Fe]=!0,Bt[ge]=Bt[Re]=Bt[Ke]=Bt[Oe]=Bt[He]=Bt[Ce]=Bt[ke]=Bt[W]=Bt[Ue]=Bt[je]=Bt[Qe]=Bt[bt]=Bt[C]=Bt[S]=Bt[ve]=!1;var Ot={};Ot[ge]=Ot[Re]=Ot[Ke]=Ot[He]=Ot[Oe]=Ot[Ce]=Ot[ye]=Ot[be]=Ot[Je]=Ot[Ee]=Ot[Nt]=Ot[Ue]=Ot[je]=Ot[Qe]=Ot[bt]=Ot[C]=Ot[S]=Ot[ee]=Ot[rt]=Ot[Ge]=Ot[Pe]=Ot[Fe]=!0,Ot[ke]=Ot[W]=Ot[ve]=!1;var Cm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Im={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dm=parseFloat,Um=parseInt,Au=typeof ao=="object"&&ao&&ao.Object===Object&&ao,Nm=typeof self=="object"&&self&&self.Object===Object&&self,on=Au||Nm||Function("return this")(),ol=e&&!e.nodeType&&e,mr=ol&&!0&&r&&!r.nodeType&&r,wu=mr&&mr.exports===ol,al=wu&&Au.process,Vn=function(){try{var H=mr&&mr.require&&mr.require("util").types;return H||al&&al.binding&&al.binding("util")}catch{}}(),Ru=Vn&&Vn.isArrayBuffer,Cu=Vn&&Vn.isDate,Lu=Vn&&Vn.isMap,Pu=Vn&&Vn.isRegExp,Iu=Vn&&Vn.isSet,Du=Vn&&Vn.isTypedArray;function Pn(H,ie,j){switch(j.length){case 0:return H.call(ie);case 1:return H.call(ie,j[0]);case 2:return H.call(ie,j[0],j[1]);case 3:return H.call(ie,j[0],j[1],j[2])}return H.apply(ie,j)}function Om(H,ie,j,Ie){for(var it=-1,At=H==null?0:H.length;++it<At;){var Jt=H[it];ie(Ie,Jt,j(Jt),H)}return Ie}function kn(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie&&ie(H[j],j,H)!==!1;);return H}function Fm(H,ie){for(var j=H==null?0:H.length;j--&&ie(H[j],j,H)!==!1;);return H}function Uu(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(!ie(H[j],j,H))return!1;return!0}function Vi(H,ie){for(var j=-1,Ie=H==null?0:H.length,it=0,At=[];++j<Ie;){var Jt=H[j];ie(Jt,j,H)&&(At[it++]=Jt)}return At}function yo(H,ie){var j=H==null?0:H.length;return!!j&&qr(H,ie,0)>-1}function ll(H,ie,j){for(var Ie=-1,it=H==null?0:H.length;++Ie<it;)if(j(ie,H[Ie]))return!0;return!1}function Vt(H,ie){for(var j=-1,Ie=H==null?0:H.length,it=Array(Ie);++j<Ie;)it[j]=ie(H[j],j,H);return it}function ki(H,ie){for(var j=-1,Ie=ie.length,it=H.length;++j<Ie;)H[it+j]=ie[j];return H}function cl(H,ie,j,Ie){var it=-1,At=H==null?0:H.length;for(Ie&&At&&(j=H[++it]);++it<At;)j=ie(j,H[it],it,H);return j}function Bm(H,ie,j,Ie){var it=H==null?0:H.length;for(Ie&&it&&(j=H[--it]);it--;)j=ie(j,H[it],it,H);return j}function ul(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(ie(H[j],j,H))return!0;return!1}var zm=fl("length");function Gm(H){return H.split("")}function Hm(H){return H.match(xo)||[]}function Nu(H,ie,j){var Ie;return j(H,function(it,At,Jt){if(ie(it,At,Jt))return Ie=At,!1}),Ie}function To(H,ie,j,Ie){for(var it=H.length,At=j+(Ie?1:-1);Ie?At--:++At<it;)if(ie(H[At],At,H))return At;return-1}function qr(H,ie,j){return ie===ie?Qm(H,ie,j):To(H,Ou,j)}function Vm(H,ie,j,Ie){for(var it=j-1,At=H.length;++it<At;)if(Ie(H[it],ie))return it;return-1}function Ou(H){return H!==H}function Fu(H,ie){var j=H==null?0:H.length;return j?dl(H,ie)/j:he}function fl(H){return function(ie){return ie==null?t:ie[H]}}function hl(H){return function(ie){return H==null?t:H[ie]}}function Bu(H,ie,j,Ie,it){return it(H,function(At,Jt,Ut){j=Ie?(Ie=!1,At):ie(j,At,Jt,Ut)}),j}function km(H,ie){var j=H.length;for(H.sort(ie);j--;)H[j]=H[j].value;return H}function dl(H,ie){for(var j,Ie=-1,it=H.length;++Ie<it;){var At=ie(H[Ie]);At!==t&&(j=j===t?At:j+At)}return j}function pl(H,ie){for(var j=-1,Ie=Array(H);++j<H;)Ie[j]=ie(j);return Ie}function Wm(H,ie){return Vt(ie,function(j){return[j,H[j]]})}function zu(H){return H&&H.slice(0,ku(H)+1).replace(jn,"")}function In(H){return function(ie){return H(ie)}}function ml(H,ie){return Vt(ie,function(j){return H[j]})}function zs(H,ie){return H.has(ie)}function Gu(H,ie){for(var j=-1,Ie=H.length;++j<Ie&&qr(ie,H[j],0)>-1;);return j}function Hu(H,ie){for(var j=H.length;j--&&qr(ie,H[j],0)>-1;);return j}function Xm(H,ie){for(var j=H.length,Ie=0;j--;)H[j]===ie&&++Ie;return Ie}var Ym=hl(Cm),qm=hl(Lm);function $m(H){return"\\"+Im[H]}function Km(H,ie){return H==null?t:H[ie]}function $r(H){return bm.test(H)}function Zm(H){return Am.test(H)}function jm(H){for(var ie,j=[];!(ie=H.next()).done;)j.push(ie.value);return j}function gl(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie,it){j[++ie]=[it,Ie]}),j}function Vu(H,ie){return function(j){return H(ie(j))}}function Wi(H,ie){for(var j=-1,Ie=H.length,it=0,At=[];++j<Ie;){var Jt=H[j];(Jt===ie||Jt===p)&&(H[j]=p,At[it++]=j)}return At}function bo(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=Ie}),j}function Jm(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=[Ie,Ie]}),j}function Qm(H,ie,j){for(var Ie=j-1,it=H.length;++Ie<it;)if(H[Ie]===ie)return Ie;return-1}function eg(H,ie,j){for(var Ie=j+1;Ie--;)if(H[Ie]===ie)return Ie;return Ie}function Kr(H){return $r(H)?ng(H):zm(H)}function Qn(H){return $r(H)?ig(H):Gm(H)}function ku(H){for(var ie=H.length;ie--&&Gr.test(H.charAt(ie)););return ie}var tg=hl(Pm);function ng(H){for(var ie=sl.lastIndex=0;sl.test(H);)++ie;return ie}function ig(H){return H.match(sl)||[]}function rg(H){return H.match(Tm)||[]}var sg=function H(ie){ie=ie==null?on:Zr.defaults(on.Object(),ie,Zr.pick(on,wm));var j=ie.Array,Ie=ie.Date,it=ie.Error,At=ie.Function,Jt=ie.Math,Ut=ie.Object,_l=ie.RegExp,og=ie.String,Wn=ie.TypeError,Ao=j.prototype,ag=At.prototype,jr=Ut.prototype,wo=ie["__core-js_shared__"],Ro=ag.toString,Lt=jr.hasOwnProperty,lg=0,Wu=function(){var n=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Co=jr.toString,cg=Ro.call(Ut),ug=on._,fg=_l("^"+Ro.call(Lt).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=wu?ie.Buffer:t,Xi=ie.Symbol,Po=ie.Uint8Array,Xu=Lo?Lo.allocUnsafe:t,Io=Vu(Ut.getPrototypeOf,Ut),Yu=Ut.create,qu=jr.propertyIsEnumerable,Do=Ao.splice,$u=Xi?Xi.isConcatSpreadable:t,Gs=Xi?Xi.iterator:t,gr=Xi?Xi.toStringTag:t,Uo=function(){try{var n=Sr(Ut,"defineProperty");return n({},"",{}),n}catch{}}(),hg=ie.clearTimeout!==on.clearTimeout&&ie.clearTimeout,dg=Ie&&Ie.now!==on.Date.now&&Ie.now,pg=ie.setTimeout!==on.setTimeout&&ie.setTimeout,No=Jt.ceil,Oo=Jt.floor,vl=Ut.getOwnPropertySymbols,mg=Lo?Lo.isBuffer:t,Ku=ie.isFinite,gg=Ao.join,_g=Vu(Ut.keys,Ut),Qt=Jt.max,fn=Jt.min,vg=Ie.now,xg=ie.parseInt,Zu=Jt.random,Mg=Ao.reverse,xl=Sr(ie,"DataView"),Hs=Sr(ie,"Map"),Ml=Sr(ie,"Promise"),Jr=Sr(ie,"Set"),Vs=Sr(ie,"WeakMap"),ks=Sr(Ut,"create"),Fo=Vs&&new Vs,Qr={},Sg=Er(xl),Eg=Er(Hs),yg=Er(Ml),Tg=Er(Jr),bg=Er(Vs),Bo=Xi?Xi.prototype:t,Ws=Bo?Bo.valueOf:t,ju=Bo?Bo.toString:t;function y(n){if(Xt(n)&&!ot(n)&&!(n instanceof vt)){if(n instanceof Xn)return n;if(Lt.call(n,"__wrapped__"))return Qf(n)}return new Xn(n)}var es=function(){function n(){}return function(s){if(!kt(s))return{};if(Yu)return Yu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function zo(){}function Xn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}y.templateSettings={escape:we,evaluate:ht,interpolate:yt,variable:"",imports:{_:y}},y.prototype=zo.prototype,y.prototype.constructor=y,Xn.prototype=es(zo.prototype),Xn.prototype.constructor=Xn;function vt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Me,this.__views__=[]}function Ag(){var n=new vt(this.__wrapped__);return n.__actions__=bn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=bn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=bn(this.__views__),n}function wg(){if(this.__filtered__){var n=new vt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Rg(){var n=this.__wrapped__.value(),s=this.__dir__,l=ot(n),h=s<0,M=l?n.length:0,A=G_(0,M,this.__views__),D=A.start,B=A.end,V=B-D,re=h?B:D-1,ae=this.__iteratees__,de=ae.length,Ae=0,ze=fn(V,this.__takeCount__);if(!l||!h&&M==V&&ze==V)return Ef(n,this.__actions__);var qe=[];e:for(;V--&&Ae<ze;){re+=s;for(var dt=-1,$e=n[re];++dt<de;){var _t=ae[dt],xt=_t.iteratee,Nn=_t.type,vn=xt($e);if(Nn==se)$e=vn;else if(!vn){if(Nn==G)continue e;break e}}qe[Ae++]=$e}return qe}vt.prototype=es(zo.prototype),vt.prototype.constructor=vt;function _r(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Cg(){this.__data__=ks?ks(null):{},this.size=0}function Lg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Pg(n){var s=this.__data__;if(ks){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function Ig(n){var s=this.__data__;return ks?s[n]!==t:Lt.call(s,n)}function Dg(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=ks&&s===t?f:s,this}_r.prototype.clear=Cg,_r.prototype.delete=Lg,_r.prototype.get=Pg,_r.prototype.has=Ig,_r.prototype.set=Dg;function Ei(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Ug(){this.__data__=[],this.size=0}function Ng(n){var s=this.__data__,l=Go(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Do.call(s,l,1),--this.size,!0}function Og(n){var s=this.__data__,l=Go(s,n);return l<0?t:s[l][1]}function Fg(n){return Go(this.__data__,n)>-1}function Bg(n,s){var l=this.__data__,h=Go(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ei.prototype.clear=Ug,Ei.prototype.delete=Ng,Ei.prototype.get=Og,Ei.prototype.has=Fg,Ei.prototype.set=Bg;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function zg(){this.size=0,this.__data__={hash:new _r,map:new(Hs||Ei),string:new _r}}function Gg(n){var s=Jo(this,n).delete(n);return this.size-=s?1:0,s}function Hg(n){return Jo(this,n).get(n)}function Vg(n){return Jo(this,n).has(n)}function kg(n,s){var l=Jo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}yi.prototype.clear=zg,yi.prototype.delete=Gg,yi.prototype.get=Hg,yi.prototype.has=Vg,yi.prototype.set=kg;function vr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new yi;++s<l;)this.add(n[s])}function Wg(n){return this.__data__.set(n,f),this}function Xg(n){return this.__data__.has(n)}vr.prototype.add=vr.prototype.push=Wg,vr.prototype.has=Xg;function ei(n){var s=this.__data__=new Ei(n);this.size=s.size}function Yg(){this.__data__=new Ei,this.size=0}function qg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function $g(n){return this.__data__.get(n)}function Kg(n){return this.__data__.has(n)}function Zg(n,s){var l=this.__data__;if(l instanceof Ei){var h=l.__data__;if(!Hs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new yi(h)}return l.set(n,s),this.size=l.size,this}ei.prototype.clear=Yg,ei.prototype.delete=qg,ei.prototype.get=$g,ei.prototype.has=Kg,ei.prototype.set=Zg;function Ju(n,s){var l=ot(n),h=!l&&yr(n),M=!l&&!h&&Zi(n),A=!l&&!h&&!M&&rs(n),D=l||h||M||A,B=D?pl(n.length,og):[],V=B.length;for(var re in n)(s||Lt.call(n,re))&&!(D&&(re=="length"||M&&(re=="offset"||re=="parent")||A&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||wi(re,V)))&&B.push(re);return B}function Qu(n){var s=n.length;return s?n[Pl(0,s-1)]:t}function jg(n,s){return Qo(bn(n),xr(s,0,n.length))}function Jg(n){return Qo(bn(n))}function Sl(n,s,l){(l!==t&&!ti(n[s],l)||l===t&&!(s in n))&&Ti(n,s,l)}function Xs(n,s,l){var h=n[s];(!(Lt.call(n,s)&&ti(h,l))||l===t&&!(s in n))&&Ti(n,s,l)}function Go(n,s){for(var l=n.length;l--;)if(ti(n[l][0],s))return l;return-1}function Qg(n,s,l,h){return Yi(n,function(M,A,D){s(h,M,l(M),D)}),h}function ef(n,s){return n&&di(s,rn(s),n)}function e_(n,s){return n&&di(s,wn(s),n)}function Ti(n,s,l){s=="__proto__"&&Uo?Uo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function El(n,s){for(var l=-1,h=s.length,M=j(h),A=n==null;++l<h;)M[l]=A?t:nc(n,s[l]);return M}function xr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,M,A){var D,B=s&_,V=s&v,re=s&x;if(l&&(D=M?l(n,h,M,A):l(n)),D!==t)return D;if(!kt(n))return n;var ae=ot(n);if(ae){if(D=V_(n),!B)return bn(n,D)}else{var de=hn(n),Ae=de==W||de==Wt;if(Zi(n))return bf(n,B);if(de==Qe||de==ge||Ae&&!M){if(D=V||Ae?{}:Wf(n),!B)return V?P_(n,e_(D,n)):L_(n,ef(D,n))}else{if(!Ot[de])return M?n:{};D=k_(n,de,B)}}A||(A=new ei);var ze=A.get(n);if(ze)return ze;A.set(n,D),xh(n)?n.forEach(function($e){D.add(Yn($e,s,l,$e,n,A))}):_h(n)&&n.forEach(function($e,_t){D.set(_t,Yn($e,s,l,_t,n,A))});var qe=re?V?Vl:Hl:V?wn:rn,dt=ae?t:qe(n);return kn(dt||n,function($e,_t){dt&&(_t=$e,$e=n[_t]),Xs(D,_t,Yn($e,s,l,_t,n,A))}),D}function t_(n){var s=rn(n);return function(l){return tf(l,n,s)}}function tf(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ut(n);h--;){var M=l[h],A=s[M],D=n[M];if(D===t&&!(M in n)||!A(D))return!1}return!0}function nf(n,s,l){if(typeof n!="function")throw new Wn(u);return Js(function(){n.apply(t,l)},s)}function Ys(n,s,l,h){var M=-1,A=yo,D=!0,B=n.length,V=[],re=s.length;if(!B)return V;l&&(s=Vt(s,In(l))),h?(A=ll,D=!1):s.length>=o&&(A=zs,D=!1,s=new vr(s));e:for(;++M<B;){var ae=n[M],de=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,D&&de===de){for(var Ae=re;Ae--;)if(s[Ae]===de)continue e;V.push(ae)}else A(s,de,h)||V.push(ae)}return V}var Yi=Lf(hi),rf=Lf(Tl,!0);function n_(n,s){var l=!0;return Yi(n,function(h,M,A){return l=!!s(h,M,A),l}),l}function Ho(n,s,l){for(var h=-1,M=n.length;++h<M;){var A=n[h],D=s(A);if(D!=null&&(B===t?D===D&&!Un(D):l(D,B)))var B=D,V=A}return V}function i_(n,s,l,h){var M=n.length;for(l=ft(l),l<0&&(l=-l>M?0:M+l),h=h===t||h>M?M:ft(h),h<0&&(h+=M),h=l>h?0:Sh(h);l<h;)n[l++]=s;return n}function sf(n,s){var l=[];return Yi(n,function(h,M,A){s(h,M,A)&&l.push(h)}),l}function an(n,s,l,h,M){var A=-1,D=n.length;for(l||(l=X_),M||(M=[]);++A<D;){var B=n[A];s>0&&l(B)?s>1?an(B,s-1,l,h,M):ki(M,B):h||(M[M.length]=B)}return M}var yl=Pf(),of=Pf(!0);function hi(n,s){return n&&yl(n,s,rn)}function Tl(n,s){return n&&of(n,s,rn)}function Vo(n,s){return Vi(s,function(l){return Ri(n[l])})}function Mr(n,s){s=$i(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[pi(s[l++])];return l&&l==h?n:t}function af(n,s,l){var h=s(n);return ot(n)?h:ki(h,l(n))}function gn(n){return n==null?n===t?oe:Ve:gr&&gr in Ut(n)?z_(n):J_(n)}function bl(n,s){return n>s}function r_(n,s){return n!=null&&Lt.call(n,s)}function s_(n,s){return n!=null&&s in Ut(n)}function o_(n,s,l){return n>=fn(s,l)&&n<Qt(s,l)}function Al(n,s,l){for(var h=l?ll:yo,M=n[0].length,A=n.length,D=A,B=j(A),V=1/0,re=[];D--;){var ae=n[D];D&&s&&(ae=Vt(ae,In(s))),V=fn(ae.length,V),B[D]=!l&&(s||M>=120&&ae.length>=120)?new vr(D&&ae):t}ae=n[0];var de=-1,Ae=B[0];e:for(;++de<M&&re.length<V;){var ze=ae[de],qe=s?s(ze):ze;if(ze=l||ze!==0?ze:0,!(Ae?zs(Ae,qe):h(re,qe,l))){for(D=A;--D;){var dt=B[D];if(!(dt?zs(dt,qe):h(n[D],qe,l)))continue e}Ae&&Ae.push(qe),re.push(ze)}}return re}function a_(n,s,l,h){return hi(n,function(M,A,D){s(h,l(M),A,D)}),h}function qs(n,s,l){s=$i(s,n),n=$f(n,s);var h=n==null?n:n[pi($n(s))];return h==null?t:Pn(h,n,l)}function lf(n){return Xt(n)&&gn(n)==ge}function l_(n){return Xt(n)&&gn(n)==Ke}function c_(n){return Xt(n)&&gn(n)==Ce}function $s(n,s,l,h,M){return n===s?!0:n==null||s==null||!Xt(n)&&!Xt(s)?n!==n&&s!==s:u_(n,s,l,h,$s,M)}function u_(n,s,l,h,M,A){var D=ot(n),B=ot(s),V=D?Re:hn(n),re=B?Re:hn(s);V=V==ge?Qe:V,re=re==ge?Qe:re;var ae=V==Qe,de=re==Qe,Ae=V==re;if(Ae&&Zi(n)){if(!Zi(s))return!1;D=!0,ae=!1}if(Ae&&!ae)return A||(A=new ei),D||rs(n)?Hf(n,s,l,h,M,A):F_(n,s,V,l,h,M,A);if(!(l&E)){var ze=ae&&Lt.call(n,"__wrapped__"),qe=de&&Lt.call(s,"__wrapped__");if(ze||qe){var dt=ze?n.value():n,$e=qe?s.value():s;return A||(A=new ei),M(dt,$e,l,h,A)}}return Ae?(A||(A=new ei),B_(n,s,l,h,M,A)):!1}function f_(n){return Xt(n)&&hn(n)==Ue}function wl(n,s,l,h){var M=l.length,A=M,D=!h;if(n==null)return!A;for(n=Ut(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<A;){B=l[M];var V=B[0],re=n[V],ae=B[1];if(D&&B[2]){if(re===t&&!(V in n))return!1}else{var de=new ei;if(h)var Ae=h(re,ae,V,n,s,de);if(!(Ae===t?$s(ae,re,E|w,h,de):Ae))return!1}}return!0}function cf(n){if(!kt(n)||q_(n))return!1;var s=Ri(n)?fg:Z;return s.test(Er(n))}function h_(n){return Xt(n)&&gn(n)==bt}function d_(n){return Xt(n)&&hn(n)==C}function p_(n){return Xt(n)&&sa(n.length)&&!!Bt[gn(n)]}function uf(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?ot(n)?df(n[0],n[1]):hf(n):Ih(n)}function Rl(n){if(!js(n))return _g(n);var s=[];for(var l in Ut(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function m_(n){if(!kt(n))return j_(n);var s=js(n),l=[];for(var h in n)h=="constructor"&&(s||!Lt.call(n,h))||l.push(h);return l}function Cl(n,s){return n<s}function ff(n,s){var l=-1,h=An(n)?j(n.length):[];return Yi(n,function(M,A,D){h[++l]=s(M,A,D)}),h}function hf(n){var s=Wl(n);return s.length==1&&s[0][2]?Yf(s[0][0],s[0][1]):function(l){return l===n||wl(l,n,s)}}function df(n,s){return Yl(n)&&Xf(s)?Yf(pi(n),s):function(l){var h=nc(l,n);return h===t&&h===s?ic(l,n):$s(s,h,E|w)}}function ko(n,s,l,h,M){n!==s&&yl(s,function(A,D){if(M||(M=new ei),kt(A))g_(n,s,D,l,ko,h,M);else{var B=h?h($l(n,D),A,D+"",n,s,M):t;B===t&&(B=A),Sl(n,D,B)}},wn)}function g_(n,s,l,h,M,A,D){var B=$l(n,l),V=$l(s,l),re=D.get(V);if(re){Sl(n,l,re);return}var ae=A?A(B,V,l+"",n,s,D):t,de=ae===t;if(de){var Ae=ot(V),ze=!Ae&&Zi(V),qe=!Ae&&!ze&&rs(V);ae=V,Ae||ze||qe?ot(B)?ae=B:$t(B)?ae=bn(B):ze?(de=!1,ae=bf(V,!0)):qe?(de=!1,ae=Af(V,!0)):ae=[]:Qs(V)||yr(V)?(ae=B,yr(B)?ae=Eh(B):(!kt(B)||Ri(B))&&(ae=Wf(V))):de=!1}de&&(D.set(V,ae),M(ae,V,h,A,D),D.delete(V)),Sl(n,l,ae)}function pf(n,s){var l=n.length;if(l)return s+=s<0?l:0,wi(s,l)?n[s]:t}function mf(n,s,l){s.length?s=Vt(s,function(A){return ot(A)?function(D){return Mr(D,A.length===1?A[0]:A)}:A}):s=[Rn];var h=-1;s=Vt(s,In(We()));var M=ff(n,function(A,D,B){var V=Vt(s,function(re){return re(A)});return{criteria:V,index:++h,value:A}});return km(M,function(A,D){return C_(A,D,l)})}function __(n,s){return gf(n,s,function(l,h){return ic(n,h)})}function gf(n,s,l){for(var h=-1,M=s.length,A={};++h<M;){var D=s[h],B=Mr(n,D);l(B,D)&&Ks(A,$i(D,n),B)}return A}function v_(n){return function(s){return Mr(s,n)}}function Ll(n,s,l,h){var M=h?Vm:qr,A=-1,D=s.length,B=n;for(n===s&&(s=bn(s)),l&&(B=Vt(n,In(l)));++A<D;)for(var V=0,re=s[A],ae=l?l(re):re;(V=M(B,ae,V,h))>-1;)B!==n&&Do.call(B,V,1),Do.call(n,V,1);return n}function _f(n,s){for(var l=n?s.length:0,h=l-1;l--;){var M=s[l];if(l==h||M!==A){var A=M;wi(M)?Do.call(n,M,1):Ul(n,M)}}return n}function Pl(n,s){return n+Oo(Zu()*(s-n+1))}function x_(n,s,l,h){for(var M=-1,A=Qt(No((s-n)/(l||1)),0),D=j(A);A--;)D[h?A:++M]=n,n+=l;return D}function Il(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Oo(s/2),s&&(n+=n);while(s);return l}function gt(n,s){return Kl(qf(n,s,Rn),n+"")}function M_(n){return Qu(ss(n))}function S_(n,s){var l=ss(n);return Qo(l,xr(s,0,l.length))}function Ks(n,s,l,h){if(!kt(n))return n;s=$i(s,n);for(var M=-1,A=s.length,D=A-1,B=n;B!=null&&++M<A;){var V=pi(s[M]),re=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(M!=D){var ae=B[V];re=h?h(ae,V,B):t,re===t&&(re=kt(ae)?ae:wi(s[M+1])?[]:{})}Xs(B,V,re),B=B[V]}return n}var vf=Fo?function(n,s){return Fo.set(n,s),n}:Rn,E_=Uo?function(n,s){return Uo(n,"toString",{configurable:!0,enumerable:!1,value:sc(s),writable:!0})}:Rn;function y_(n){return Qo(ss(n))}function qn(n,s,l){var h=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var A=j(M);++h<M;)A[h]=n[h+s];return A}function T_(n,s){var l;return Yi(n,function(h,M,A){return l=s(h,M,A),!l}),!!l}function Wo(n,s,l){var h=0,M=n==null?h:n.length;if(typeof s=="number"&&s===s&&M<=et){for(;h<M;){var A=h+M>>>1,D=n[A];D!==null&&!Un(D)&&(l?D<=s:D<s)?h=A+1:M=A}return M}return Dl(n,s,Rn,l)}function Dl(n,s,l,h){var M=0,A=n==null?0:n.length;if(A===0)return 0;s=l(s);for(var D=s!==s,B=s===null,V=Un(s),re=s===t;M<A;){var ae=Oo((M+A)/2),de=l(n[ae]),Ae=de!==t,ze=de===null,qe=de===de,dt=Un(de);if(D)var $e=h||qe;else re?$e=qe&&(h||Ae):B?$e=qe&&Ae&&(h||!ze):V?$e=qe&&Ae&&!ze&&(h||!dt):ze||dt?$e=!1:$e=h?de<=s:de<s;$e?M=ae+1:A=ae}return fn(A,De)}function xf(n,s){for(var l=-1,h=n.length,M=0,A=[];++l<h;){var D=n[l],B=s?s(D):D;if(!l||!ti(B,V)){var V=B;A[M++]=D===0?0:D}}return A}function Mf(n){return typeof n=="number"?n:Un(n)?he:+n}function Dn(n){if(typeof n=="string")return n;if(ot(n))return Vt(n,Dn)+"";if(Un(n))return ju?ju.call(n):"";var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function qi(n,s,l){var h=-1,M=yo,A=n.length,D=!0,B=[],V=B;if(l)D=!1,M=ll;else if(A>=o){var re=s?null:N_(n);if(re)return bo(re);D=!1,M=zs,V=new vr}else V=s?[]:B;e:for(;++h<A;){var ae=n[h],de=s?s(ae):ae;if(ae=l||ae!==0?ae:0,D&&de===de){for(var Ae=V.length;Ae--;)if(V[Ae]===de)continue e;s&&V.push(de),B.push(ae)}else M(V,de,l)||(V!==B&&V.push(de),B.push(ae))}return B}function Ul(n,s){return s=$i(s,n),n=$f(n,s),n==null||delete n[pi($n(s))]}function Sf(n,s,l,h){return Ks(n,s,l(Mr(n,s)),h)}function Xo(n,s,l,h){for(var M=n.length,A=h?M:-1;(h?A--:++A<M)&&s(n[A],A,n););return l?qn(n,h?0:A,h?A+1:M):qn(n,h?A+1:0,h?M:A)}function Ef(n,s){var l=n;return l instanceof vt&&(l=l.value()),cl(s,function(h,M){return M.func.apply(M.thisArg,ki([h],M.args))},l)}function Nl(n,s,l){var h=n.length;if(h<2)return h?qi(n[0]):[];for(var M=-1,A=j(h);++M<h;)for(var D=n[M],B=-1;++B<h;)B!=M&&(A[M]=Ys(A[M]||D,n[B],s,l));return qi(an(A,1),s,l)}function yf(n,s,l){for(var h=-1,M=n.length,A=s.length,D={};++h<M;){var B=h<A?s[h]:t;l(D,n[h],B)}return D}function Ol(n){return $t(n)?n:[]}function Fl(n){return typeof n=="function"?n:Rn}function $i(n,s){return ot(n)?n:Yl(n,s)?[n]:Jf(wt(n))}var b_=gt;function Ki(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:qn(n,s,l)}var Tf=hg||function(n){return on.clearTimeout(n)};function bf(n,s){if(s)return n.slice();var l=n.length,h=Xu?Xu(l):new n.constructor(l);return n.copy(h),h}function Bl(n){var s=new n.constructor(n.byteLength);return new Po(s).set(new Po(n)),s}function A_(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function w_(n){var s=new n.constructor(n.source,So.exec(n));return s.lastIndex=n.lastIndex,s}function R_(n){return Ws?Ut(Ws.call(n)):{}}function Af(n,s){var l=s?Bl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function wf(n,s){if(n!==s){var l=n!==t,h=n===null,M=n===n,A=Un(n),D=s!==t,B=s===null,V=s===s,re=Un(s);if(!B&&!re&&!A&&n>s||A&&D&&V&&!B&&!re||h&&D&&V||!l&&V||!M)return 1;if(!h&&!A&&!re&&n<s||re&&l&&M&&!h&&!A||B&&l&&M||!D&&M||!V)return-1}return 0}function C_(n,s,l){for(var h=-1,M=n.criteria,A=s.criteria,D=M.length,B=l.length;++h<D;){var V=wf(M[h],A[h]);if(V){if(h>=B)return V;var re=l[h];return V*(re=="desc"?-1:1)}}return n.index-s.index}function Rf(n,s,l,h){for(var M=-1,A=n.length,D=l.length,B=-1,V=s.length,re=Qt(A-D,0),ae=j(V+re),de=!h;++B<V;)ae[B]=s[B];for(;++M<D;)(de||M<A)&&(ae[l[M]]=n[M]);for(;re--;)ae[B++]=n[M++];return ae}function Cf(n,s,l,h){for(var M=-1,A=n.length,D=-1,B=l.length,V=-1,re=s.length,ae=Qt(A-B,0),de=j(ae+re),Ae=!h;++M<ae;)de[M]=n[M];for(var ze=M;++V<re;)de[ze+V]=s[V];for(;++D<B;)(Ae||M<A)&&(de[ze+l[D]]=n[M++]);return de}function bn(n,s){var l=-1,h=n.length;for(s||(s=j(h));++l<h;)s[l]=n[l];return s}function di(n,s,l,h){var M=!l;l||(l={});for(var A=-1,D=s.length;++A<D;){var B=s[A],V=h?h(l[B],n[B],B,l,n):t;V===t&&(V=n[B]),M?Ti(l,B,V):Xs(l,B,V)}return l}function L_(n,s){return di(n,Xl(n),s)}function P_(n,s){return di(n,Vf(n),s)}function Yo(n,s){return function(l,h){var M=ot(l)?Om:Qg,A=s?s():{};return M(l,n,We(h,2),A)}}function ts(n){return gt(function(s,l){var h=-1,M=l.length,A=M>1?l[M-1]:t,D=M>2?l[2]:t;for(A=n.length>3&&typeof A=="function"?(M--,A):t,D&&_n(l[0],l[1],D)&&(A=M<3?t:A,M=1),s=Ut(s);++h<M;){var B=l[h];B&&n(s,B,h,A)}return s})}function Lf(n,s){return function(l,h){if(l==null)return l;if(!An(l))return n(l,h);for(var M=l.length,A=s?M:-1,D=Ut(l);(s?A--:++A<M)&&h(D[A],A,D)!==!1;);return l}}function Pf(n){return function(s,l,h){for(var M=-1,A=Ut(s),D=h(s),B=D.length;B--;){var V=D[n?B:++M];if(l(A[V],V,A)===!1)break}return s}}function I_(n,s,l){var h=s&g,M=Zs(n);function A(){var D=this&&this!==on&&this instanceof A?M:n;return D.apply(h?l:this,arguments)}return A}function If(n){return function(s){s=wt(s);var l=$r(s)?Qn(s):t,h=l?l[0]:s.charAt(0),M=l?Ki(l,1).join(""):s.slice(1);return h[n]()+M}}function ns(n){return function(s){return cl(Lh(Ch(s).replace(Em,"")),n,"")}}function Zs(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=es(n.prototype),h=n.apply(l,s);return kt(h)?h:l}}function D_(n,s,l){var h=Zs(n);function M(){for(var A=arguments.length,D=j(A),B=A,V=is(M);B--;)D[B]=arguments[B];var re=A<3&&D[0]!==V&&D[A-1]!==V?[]:Wi(D,V);if(A-=re.length,A<l)return Ff(n,s,qo,M.placeholder,t,D,re,t,t,l-A);var ae=this&&this!==on&&this instanceof M?h:n;return Pn(ae,this,D)}return M}function Df(n){return function(s,l,h){var M=Ut(s);if(!An(s)){var A=We(l,3);s=rn(s),l=function(B){return A(M[B],B,M)}}var D=n(s,l,h);return D>-1?M[A?s[D]:D]:t}}function Uf(n){return Ai(function(s){var l=s.length,h=l,M=Xn.prototype.thru;for(n&&s.reverse();h--;){var A=s[h];if(typeof A!="function")throw new Wn(u);if(M&&!D&&jo(A)=="wrapper")var D=new Xn([],!0)}for(h=D?h:l;++h<l;){A=s[h];var B=jo(A),V=B=="wrapper"?kl(A):t;V&&ql(V[0])&&V[1]==(U|T|z|K)&&!V[4].length&&V[9]==1?D=D[jo(V[0])].apply(D,V[3]):D=A.length==1&&ql(A)?D[B]():D.thru(A)}return function(){var re=arguments,ae=re[0];if(D&&re.length==1&&ot(ae))return D.plant(ae).value();for(var de=0,Ae=l?s[de].apply(this,re):ae;++de<l;)Ae=s[de].call(this,Ae);return Ae}})}function qo(n,s,l,h,M,A,D,B,V,re){var ae=s&U,de=s&g,Ae=s&m,ze=s&(T|L),qe=s&pe,dt=Ae?t:Zs(n);function $e(){for(var _t=arguments.length,xt=j(_t),Nn=_t;Nn--;)xt[Nn]=arguments[Nn];if(ze)var vn=is($e),On=Xm(xt,vn);if(h&&(xt=Rf(xt,h,M,ze)),A&&(xt=Cf(xt,A,D,ze)),_t-=On,ze&&_t<re){var Kt=Wi(xt,vn);return Ff(n,s,qo,$e.placeholder,l,xt,Kt,B,V,re-_t)}var ni=de?l:this,Li=Ae?ni[n]:n;return _t=xt.length,B?xt=Q_(xt,B):qe&&_t>1&&xt.reverse(),ae&&V<_t&&(xt.length=V),this&&this!==on&&this instanceof $e&&(Li=dt||Zs(Li)),Li.apply(ni,xt)}return $e}function Nf(n,s){return function(l,h){return a_(l,n,s(h),{})}}function $o(n,s){return function(l,h){var M;if(l===t&&h===t)return s;if(l!==t&&(M=l),h!==t){if(M===t)return h;typeof l=="string"||typeof h=="string"?(l=Dn(l),h=Dn(h)):(l=Mf(l),h=Mf(h)),M=n(l,h)}return M}}function zl(n){return Ai(function(s){return s=Vt(s,In(We())),gt(function(l){var h=this;return n(s,function(M){return Pn(M,h,l)})})})}function Ko(n,s){s=s===t?" ":Dn(s);var l=s.length;if(l<2)return l?Il(s,n):s;var h=Il(s,No(n/Kr(s)));return $r(s)?Ki(Qn(h),0,n).join(""):h.slice(0,n)}function U_(n,s,l,h){var M=s&g,A=Zs(n);function D(){for(var B=-1,V=arguments.length,re=-1,ae=h.length,de=j(ae+V),Ae=this&&this!==on&&this instanceof D?A:n;++re<ae;)de[re]=h[re];for(;V--;)de[re++]=arguments[++B];return Pn(Ae,M?l:this,de)}return D}function Of(n){return function(s,l,h){return h&&typeof h!="number"&&_n(s,l,h)&&(l=h=t),s=Ci(s),l===t?(l=s,s=0):l=Ci(l),h=h===t?s<l?1:-1:Ci(h),x_(s,l,h,n)}}function Zo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Kn(s),l=Kn(l)),n(s,l)}}function Ff(n,s,l,h,M,A,D,B,V,re){var ae=s&T,de=ae?D:t,Ae=ae?t:D,ze=ae?A:t,qe=ae?t:A;s|=ae?z:P,s&=~(ae?P:z),s&O||(s&=~(g|m));var dt=[n,s,M,ze,de,qe,Ae,B,V,re],$e=l.apply(t,dt);return ql(n)&&Kf($e,dt),$e.placeholder=h,Zf($e,n,s)}function Gl(n){var s=Jt[n];return function(l,h){if(l=Kn(l),h=h==null?0:fn(ft(h),292),h&&Ku(l)){var M=(wt(l)+"e").split("e"),A=s(M[0]+"e"+(+M[1]+h));return M=(wt(A)+"e").split("e"),+(M[0]+"e"+(+M[1]-h))}return s(l)}}var N_=Jr&&1/bo(new Jr([,-0]))[1]==ce?function(n){return new Jr(n)}:lc;function Bf(n){return function(s){var l=hn(s);return l==Ue?gl(s):l==C?Jm(s):Wm(s,n(s))}}function bi(n,s,l,h,M,A,D,B){var V=s&m;if(!V&&typeof n!="function")throw new Wn(u);var re=h?h.length:0;if(re||(s&=~(z|P),h=M=t),D=D===t?D:Qt(ft(D),0),B=B===t?B:ft(B),re-=M?M.length:0,s&P){var ae=h,de=M;h=M=t}var Ae=V?t:kl(n),ze=[n,s,l,h,M,ae,de,A,D,B];if(Ae&&Z_(ze,Ae),n=ze[0],s=ze[1],l=ze[2],h=ze[3],M=ze[4],B=ze[9]=ze[9]===t?V?0:n.length:Qt(ze[9]-re,0),!B&&s&(T|L)&&(s&=~(T|L)),!s||s==g)var qe=I_(n,s,l);else s==T||s==L?qe=D_(n,s,B):(s==z||s==(g|z))&&!M.length?qe=U_(n,s,l,h):qe=qo.apply(t,ze);var dt=Ae?vf:Kf;return Zf(dt(qe,ze),n,s)}function zf(n,s,l,h){return n===t||ti(n,jr[l])&&!Lt.call(h,l)?s:n}function Gf(n,s,l,h,M,A){return kt(n)&&kt(s)&&(A.set(s,n),ko(n,s,t,Gf,A),A.delete(s)),n}function O_(n){return Qs(n)?t:n}function Hf(n,s,l,h,M,A){var D=l&E,B=n.length,V=s.length;if(B!=V&&!(D&&V>B))return!1;var re=A.get(n),ae=A.get(s);if(re&&ae)return re==s&&ae==n;var de=-1,Ae=!0,ze=l&w?new vr:t;for(A.set(n,s),A.set(s,n);++de<B;){var qe=n[de],dt=s[de];if(h)var $e=D?h(dt,qe,de,s,n,A):h(qe,dt,de,n,s,A);if($e!==t){if($e)continue;Ae=!1;break}if(ze){if(!ul(s,function(_t,xt){if(!zs(ze,xt)&&(qe===_t||M(qe,_t,l,h,A)))return ze.push(xt)})){Ae=!1;break}}else if(!(qe===dt||M(qe,dt,l,h,A))){Ae=!1;break}}return A.delete(n),A.delete(s),Ae}function F_(n,s,l,h,M,A,D){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ke:return!(n.byteLength!=s.byteLength||!A(new Po(n),new Po(s)));case Oe:case Ce:case je:return ti(+n,+s);case ke:return n.name==s.name&&n.message==s.message;case bt:case S:return n==s+"";case Ue:var B=gl;case C:var V=h&E;if(B||(B=bo),n.size!=s.size&&!V)return!1;var re=D.get(n);if(re)return re==s;h|=w,D.set(n,s);var ae=Hf(B(n),B(s),h,M,A,D);return D.delete(n),ae;case ee:if(Ws)return Ws.call(n)==Ws.call(s)}return!1}function B_(n,s,l,h,M,A){var D=l&E,B=Hl(n),V=B.length,re=Hl(s),ae=re.length;if(V!=ae&&!D)return!1;for(var de=V;de--;){var Ae=B[de];if(!(D?Ae in s:Lt.call(s,Ae)))return!1}var ze=A.get(n),qe=A.get(s);if(ze&&qe)return ze==s&&qe==n;var dt=!0;A.set(n,s),A.set(s,n);for(var $e=D;++de<V;){Ae=B[de];var _t=n[Ae],xt=s[Ae];if(h)var Nn=D?h(xt,_t,Ae,s,n,A):h(_t,xt,Ae,n,s,A);if(!(Nn===t?_t===xt||M(_t,xt,l,h,A):Nn)){dt=!1;break}$e||($e=Ae=="constructor")}if(dt&&!$e){var vn=n.constructor,On=s.constructor;vn!=On&&"constructor"in n&&"constructor"in s&&!(typeof vn=="function"&&vn instanceof vn&&typeof On=="function"&&On instanceof On)&&(dt=!1)}return A.delete(n),A.delete(s),dt}function Ai(n){return Kl(qf(n,t,nh),n+"")}function Hl(n){return af(n,rn,Xl)}function Vl(n){return af(n,wn,Vf)}var kl=Fo?function(n){return Fo.get(n)}:lc;function jo(n){for(var s=n.name+"",l=Qr[s],h=Lt.call(Qr,s)?l.length:0;h--;){var M=l[h],A=M.func;if(A==null||A==n)return M.name}return s}function is(n){var s=Lt.call(y,"placeholder")?y:n;return s.placeholder}function We(){var n=y.iteratee||oc;return n=n===oc?uf:n,arguments.length?n(arguments[0],arguments[1]):n}function Jo(n,s){var l=n.__data__;return Y_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Wl(n){for(var s=rn(n),l=s.length;l--;){var h=s[l],M=n[h];s[l]=[h,M,Xf(M)]}return s}function Sr(n,s){var l=Km(n,s);return cf(l)?l:t}function z_(n){var s=Lt.call(n,gr),l=n[gr];try{n[gr]=t;var h=!0}catch{}var M=Co.call(n);return h&&(s?n[gr]=l:delete n[gr]),M}var Xl=vl?function(n){return n==null?[]:(n=Ut(n),Vi(vl(n),function(s){return qu.call(n,s)}))}:cc,Vf=vl?function(n){for(var s=[];n;)ki(s,Xl(n)),n=Io(n);return s}:cc,hn=gn;(xl&&hn(new xl(new ArrayBuffer(1)))!=He||Hs&&hn(new Hs)!=Ue||Ml&&hn(Ml.resolve())!=tt||Jr&&hn(new Jr)!=C||Vs&&hn(new Vs)!=ve)&&(hn=function(n){var s=gn(n),l=s==Qe?n.constructor:t,h=l?Er(l):"";if(h)switch(h){case Sg:return He;case Eg:return Ue;case yg:return tt;case Tg:return C;case bg:return ve}return s});function G_(n,s,l){for(var h=-1,M=l.length;++h<M;){var A=l[h],D=A.size;switch(A.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=fn(s,n+D);break;case"takeRight":n=Qt(n,s-D);break}}return{start:n,end:s}}function H_(n){var s=n.match(vo);return s?s[1].split(Vr):[]}function kf(n,s,l){s=$i(s,n);for(var h=-1,M=s.length,A=!1;++h<M;){var D=pi(s[h]);if(!(A=n!=null&&l(n,D)))break;n=n[D]}return A||++h!=M?A:(M=n==null?0:n.length,!!M&&sa(M)&&wi(D,M)&&(ot(n)||yr(n)))}function V_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Wf(n){return typeof n.constructor=="function"&&!js(n)?es(Io(n)):{}}function k_(n,s,l){var h=n.constructor;switch(s){case Ke:return Bl(n);case Oe:case Ce:return new h(+n);case He:return A_(n,l);case ye:case be:case Je:case Ee:case Nt:case rt:case Ge:case Pe:case Fe:return Af(n,l);case Ue:return new h;case je:case S:return new h(n);case bt:return w_(n);case C:return new h;case ee:return R_(n)}}function W_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Hr,`{
/* [wrapped with `+s+`] */
`)}function X_(n){return ot(n)||yr(n)||!!($u&&n&&n[$u])}function wi(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<s}function _n(n,s,l){if(!kt(l))return!1;var h=typeof s;return(h=="number"?An(l)&&wi(s,l.length):h=="string"&&s in l)?ti(l[s],n):!1}function Yl(n,s){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Un(n)?!0:Gt.test(n)||!Rt.test(n)||s!=null&&n in Ut(s)}function Y_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ql(n){var s=jo(n),l=y[s];if(typeof l!="function"||!(s in vt.prototype))return!1;if(n===l)return!0;var h=kl(l);return!!h&&n===h[0]}function q_(n){return!!Wu&&Wu in n}var $_=wo?Ri:uc;function js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||jr;return n===l}function Xf(n){return n===n&&!kt(n)}function Yf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Ut(l))}}function K_(n){var s=ia(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function Z_(n,s){var l=n[1],h=s[1],M=l|h,A=M<(g|m|U),D=h==U&&l==T||h==U&&l==K&&n[7].length<=s[8]||h==(U|K)&&s[7].length<=s[8]&&l==T;if(!(A||D))return n;h&g&&(n[2]=s[2],M|=l&g?0:O);var B=s[3];if(B){var V=n[3];n[3]=V?Rf(V,B,s[4]):B,n[4]=V?Wi(n[3],p):s[4]}return B=s[5],B&&(V=n[5],n[5]=V?Cf(V,B,s[6]):B,n[6]=V?Wi(n[5],p):s[6]),B=s[7],B&&(n[7]=B),h&U&&(n[8]=n[8]==null?s[8]:fn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function j_(n){var s=[];if(n!=null)for(var l in Ut(n))s.push(l);return s}function J_(n){return Co.call(n)}function qf(n,s,l){return s=Qt(s===t?n.length-1:s,0),function(){for(var h=arguments,M=-1,A=Qt(h.length-s,0),D=j(A);++M<A;)D[M]=h[s+M];M=-1;for(var B=j(s+1);++M<s;)B[M]=h[M];return B[s]=l(D),Pn(n,this,B)}}function $f(n,s){return s.length<2?n:Mr(n,qn(s,0,-1))}function Q_(n,s){for(var l=n.length,h=fn(s.length,l),M=bn(n);h--;){var A=s[h];n[h]=wi(A,l)?M[A]:t}return n}function $l(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Kf=jf(vf),Js=pg||function(n,s){return on.setTimeout(n,s)},Kl=jf(E_);function Zf(n,s,l){var h=s+"";return Kl(n,W_(h,ev(H_(h),l)))}function jf(n){var s=0,l=0;return function(){var h=vg(),M=fe-(h-l);if(l=h,M>0){if(++s>=me)return arguments[0]}else s=0;return n.apply(t,arguments)}}function Qo(n,s){var l=-1,h=n.length,M=h-1;for(s=s===t?h:s;++l<s;){var A=Pl(l,M),D=n[A];n[A]=n[l],n[l]=D}return n.length=s,n}var Jf=K_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,M,A){s.push(M?A.replace(tl,"$1"):h||l)}),s});function pi(n){if(typeof n=="string"||Un(n))return n;var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Er(n){if(n!=null){try{return Ro.call(n)}catch{}try{return n+""}catch{}}return""}function ev(n,s){return kn(Q,function(l){var h="_."+l[0];s&l[1]&&!yo(n,h)&&n.push(h)}),n.sort()}function Qf(n){if(n instanceof vt)return n.clone();var s=new Xn(n.__wrapped__,n.__chain__);return s.__actions__=bn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function tv(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=Qt(ft(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var M=0,A=0,D=j(No(h/s));M<h;)D[A++]=qn(n,M,M+=s);return D}function nv(n){for(var s=-1,l=n==null?0:n.length,h=0,M=[];++s<l;){var A=n[s];A&&(M[h++]=A)}return M}function iv(){var n=arguments.length;if(!n)return[];for(var s=j(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return ki(ot(l)?bn(l):[l],an(s,1))}var rv=gt(function(n,s){return $t(n)?Ys(n,an(s,1,$t,!0)):[]}),sv=gt(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,an(s,1,$t,!0),We(l,2)):[]}),ov=gt(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?Ys(n,an(s,1,$t,!0),t,l):[]});function av(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),qn(n,s<0?0:s,h)):[]}function lv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,0,s<0?0:s)):[]}function cv(n,s){return n&&n.length?Xo(n,We(s,3),!0,!0):[]}function uv(n,s){return n&&n.length?Xo(n,We(s,3),!0):[]}function fv(n,s,l,h){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&_n(n,s,l)&&(l=0,h=M),i_(n,s,l,h)):[]}function eh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:ft(l);return M<0&&(M=Qt(h+M,0)),To(n,We(s,3),M)}function th(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=h-1;return l!==t&&(M=ft(l),M=l<0?Qt(h+M,0):fn(M,h-1)),To(n,We(s,3),M,!0)}function nh(n){var s=n==null?0:n.length;return s?an(n,1):[]}function hv(n){var s=n==null?0:n.length;return s?an(n,ce):[]}function dv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ft(s),an(n,s)):[]}function pv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var M=n[s];h[M[0]]=M[1]}return h}function ih(n){return n&&n.length?n[0]:t}function mv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:ft(l);return M<0&&(M=Qt(h+M,0)),qr(n,s,M)}function gv(n){var s=n==null?0:n.length;return s?qn(n,0,-1):[]}var _v=gt(function(n){var s=Vt(n,Ol);return s.length&&s[0]===n[0]?Al(s):[]}),vv=gt(function(n){var s=$n(n),l=Vt(n,Ol);return s===$n(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Al(l,We(s,2)):[]}),xv=gt(function(n){var s=$n(n),l=Vt(n,Ol);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Al(l,t,s):[]});function Mv(n,s){return n==null?"":gg.call(n,s)}function $n(n){var s=n==null?0:n.length;return s?n[s-1]:t}function Sv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var M=h;return l!==t&&(M=ft(l),M=M<0?Qt(h+M,0):fn(M,h-1)),s===s?eg(n,s,M):To(n,Ou,M,!0)}function Ev(n,s){return n&&n.length?pf(n,ft(s)):t}var yv=gt(rh);function rh(n,s){return n&&n.length&&s&&s.length?Ll(n,s):n}function Tv(n,s,l){return n&&n.length&&s&&s.length?Ll(n,s,We(l,2)):n}function bv(n,s,l){return n&&n.length&&s&&s.length?Ll(n,s,t,l):n}var Av=Ai(function(n,s){var l=n==null?0:n.length,h=El(n,s);return _f(n,Vt(s,function(M){return wi(M,l)?+M:M}).sort(wf)),h});function wv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,M=[],A=n.length;for(s=We(s,3);++h<A;){var D=n[h];s(D,h,n)&&(l.push(D),M.push(h))}return _f(n,M),l}function Zl(n){return n==null?n:Mg.call(n)}function Rv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&_n(n,s,l)?(s=0,l=h):(s=s==null?0:ft(s),l=l===t?h:ft(l)),qn(n,s,l)):[]}function Cv(n,s){return Wo(n,s)}function Lv(n,s,l){return Dl(n,s,We(l,2))}function Pv(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s);if(h<l&&ti(n[h],s))return h}return-1}function Iv(n,s){return Wo(n,s,!0)}function Dv(n,s,l){return Dl(n,s,We(l,2),!0)}function Uv(n,s){var l=n==null?0:n.length;if(l){var h=Wo(n,s,!0)-1;if(ti(n[h],s))return h}return-1}function Nv(n){return n&&n.length?xf(n):[]}function Ov(n,s){return n&&n.length?xf(n,We(s,2)):[]}function Fv(n){var s=n==null?0:n.length;return s?qn(n,1,s):[]}function Bv(n,s,l){return n&&n.length?(s=l||s===t?1:ft(s),qn(n,0,s<0?0:s)):[]}function zv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ft(s),s=h-s,qn(n,s<0?0:s,h)):[]}function Gv(n,s){return n&&n.length?Xo(n,We(s,3),!1,!0):[]}function Hv(n,s){return n&&n.length?Xo(n,We(s,3)):[]}var Vv=gt(function(n){return qi(an(n,1,$t,!0))}),kv=gt(function(n){var s=$n(n);return $t(s)&&(s=t),qi(an(n,1,$t,!0),We(s,2))}),Wv=gt(function(n){var s=$n(n);return s=typeof s=="function"?s:t,qi(an(n,1,$t,!0),t,s)});function Xv(n){return n&&n.length?qi(n):[]}function Yv(n,s){return n&&n.length?qi(n,We(s,2)):[]}function qv(n,s){return s=typeof s=="function"?s:t,n&&n.length?qi(n,t,s):[]}function jl(n){if(!(n&&n.length))return[];var s=0;return n=Vi(n,function(l){if($t(l))return s=Qt(l.length,s),!0}),pl(s,function(l){return Vt(n,fl(l))})}function sh(n,s){if(!(n&&n.length))return[];var l=jl(n);return s==null?l:Vt(l,function(h){return Pn(s,t,h)})}var $v=gt(function(n,s){return $t(n)?Ys(n,s):[]}),Kv=gt(function(n){return Nl(Vi(n,$t))}),Zv=gt(function(n){var s=$n(n);return $t(s)&&(s=t),Nl(Vi(n,$t),We(s,2))}),jv=gt(function(n){var s=$n(n);return s=typeof s=="function"?s:t,Nl(Vi(n,$t),t,s)}),Jv=gt(jl);function Qv(n,s){return yf(n||[],s||[],Xs)}function e0(n,s){return yf(n||[],s||[],Ks)}var t0=gt(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,sh(n,l)});function oh(n){var s=y(n);return s.__chain__=!0,s}function n0(n,s){return s(n),n}function ea(n,s){return s(n)}var i0=Ai(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,M=function(A){return El(A,n)};return s>1||this.__actions__.length||!(h instanceof vt)||!wi(l)?this.thru(M):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ea,args:[M],thisArg:t}),new Xn(h,this.__chain__).thru(function(A){return s&&!A.length&&A.push(t),A}))});function r0(){return oh(this)}function s0(){return new Xn(this.value(),this.__chain__)}function o0(){this.__values__===t&&(this.__values__=Mh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function a0(){return this}function l0(n){for(var s,l=this;l instanceof zo;){var h=Qf(l);h.__index__=0,h.__values__=t,s?M.__wrapped__=h:s=h;var M=h;l=l.__wrapped__}return M.__wrapped__=n,s}function c0(){var n=this.__wrapped__;if(n instanceof vt){var s=n;return this.__actions__.length&&(s=new vt(this)),s=s.reverse(),s.__actions__.push({func:ea,args:[Zl],thisArg:t}),new Xn(s,this.__chain__)}return this.thru(Zl)}function u0(){return Ef(this.__wrapped__,this.__actions__)}var f0=Yo(function(n,s,l){Lt.call(n,l)?++n[l]:Ti(n,l,1)});function h0(n,s,l){var h=ot(n)?Uu:n_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}function d0(n,s){var l=ot(n)?Vi:sf;return l(n,We(s,3))}var p0=Df(eh),m0=Df(th);function g0(n,s){return an(ta(n,s),1)}function _0(n,s){return an(ta(n,s),ce)}function v0(n,s,l){return l=l===t?1:ft(l),an(ta(n,s),l)}function ah(n,s){var l=ot(n)?kn:Yi;return l(n,We(s,3))}function lh(n,s){var l=ot(n)?Fm:rf;return l(n,We(s,3))}var x0=Yo(function(n,s,l){Lt.call(n,l)?n[l].push(s):Ti(n,l,[s])});function M0(n,s,l,h){n=An(n)?n:ss(n),l=l&&!h?ft(l):0;var M=n.length;return l<0&&(l=Qt(M+l,0)),oa(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&qr(n,s,l)>-1}var S0=gt(function(n,s,l){var h=-1,M=typeof s=="function",A=An(n)?j(n.length):[];return Yi(n,function(D){A[++h]=M?Pn(s,D,l):qs(D,s,l)}),A}),E0=Yo(function(n,s,l){Ti(n,l,s)});function ta(n,s){var l=ot(n)?Vt:ff;return l(n,We(s,3))}function y0(n,s,l,h){return n==null?[]:(ot(s)||(s=s==null?[]:[s]),l=h?t:l,ot(l)||(l=l==null?[]:[l]),mf(n,s,l))}var T0=Yo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function b0(n,s,l){var h=ot(n)?cl:Bu,M=arguments.length<3;return h(n,We(s,4),l,M,Yi)}function A0(n,s,l){var h=ot(n)?Bm:Bu,M=arguments.length<3;return h(n,We(s,4),l,M,rf)}function w0(n,s){var l=ot(n)?Vi:sf;return l(n,ra(We(s,3)))}function R0(n){var s=ot(n)?Qu:M_;return s(n)}function C0(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=ft(s);var h=ot(n)?jg:S_;return h(n,s)}function L0(n){var s=ot(n)?Jg:y_;return s(n)}function P0(n){if(n==null)return 0;if(An(n))return oa(n)?Kr(n):n.length;var s=hn(n);return s==Ue||s==C?n.size:Rl(n).length}function I0(n,s,l){var h=ot(n)?ul:T_;return l&&_n(n,s,l)&&(s=t),h(n,We(s,3))}var D0=gt(function(n,s){if(n==null)return[];var l=s.length;return l>1&&_n(n,s[0],s[1])?s=[]:l>2&&_n(s[0],s[1],s[2])&&(s=[s[0]]),mf(n,an(s,1),[])}),na=dg||function(){return on.Date.now()};function U0(n,s){if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){if(--n<1)return s.apply(this,arguments)}}function ch(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,bi(n,U,t,t,t,t,s)}function uh(n,s){var l;if(typeof s!="function")throw new Wn(u);return n=ft(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var Jl=gt(function(n,s,l){var h=g;if(l.length){var M=Wi(l,is(Jl));h|=z}return bi(n,h,s,l,M)}),fh=gt(function(n,s,l){var h=g|m;if(l.length){var M=Wi(l,is(fh));h|=z}return bi(s,h,n,l,M)});function hh(n,s,l){s=l?t:s;var h=bi(n,T,t,t,t,t,t,s);return h.placeholder=hh.placeholder,h}function dh(n,s,l){s=l?t:s;var h=bi(n,L,t,t,t,t,t,s);return h.placeholder=dh.placeholder,h}function ph(n,s,l){var h,M,A,D,B,V,re=0,ae=!1,de=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);s=Kn(s)||0,kt(l)&&(ae=!!l.leading,de="maxWait"in l,A=de?Qt(Kn(l.maxWait)||0,s):A,Ae="trailing"in l?!!l.trailing:Ae);function ze(Kt){var ni=h,Li=M;return h=M=t,re=Kt,D=n.apply(Li,ni),D}function qe(Kt){return re=Kt,B=Js(_t,s),ae?ze(Kt):D}function dt(Kt){var ni=Kt-V,Li=Kt-re,Dh=s-ni;return de?fn(Dh,A-Li):Dh}function $e(Kt){var ni=Kt-V,Li=Kt-re;return V===t||ni>=s||ni<0||de&&Li>=A}function _t(){var Kt=na();if($e(Kt))return xt(Kt);B=Js(_t,dt(Kt))}function xt(Kt){return B=t,Ae&&h?ze(Kt):(h=M=t,D)}function Nn(){B!==t&&Tf(B),re=0,h=V=M=B=t}function vn(){return B===t?D:xt(na())}function On(){var Kt=na(),ni=$e(Kt);if(h=arguments,M=this,V=Kt,ni){if(B===t)return qe(V);if(de)return Tf(B),B=Js(_t,s),ze(V)}return B===t&&(B=Js(_t,s)),D}return On.cancel=Nn,On.flush=vn,On}var N0=gt(function(n,s){return nf(n,1,s)}),O0=gt(function(n,s,l){return nf(n,Kn(s)||0,l)});function F0(n){return bi(n,pe)}function ia(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Wn(u);var l=function(){var h=arguments,M=s?s.apply(this,h):h[0],A=l.cache;if(A.has(M))return A.get(M);var D=n.apply(this,h);return l.cache=A.set(M,D)||A,D};return l.cache=new(ia.Cache||yi),l}ia.Cache=yi;function ra(n){if(typeof n!="function")throw new Wn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function B0(n){return uh(2,n)}var z0=b_(function(n,s){s=s.length==1&&ot(s[0])?Vt(s[0],In(We())):Vt(an(s,1),In(We()));var l=s.length;return gt(function(h){for(var M=-1,A=fn(h.length,l);++M<A;)h[M]=s[M].call(this,h[M]);return Pn(n,this,h)})}),Ql=gt(function(n,s){var l=Wi(s,is(Ql));return bi(n,z,t,s,l)}),mh=gt(function(n,s){var l=Wi(s,is(mh));return bi(n,P,t,s,l)}),G0=Ai(function(n,s){return bi(n,K,t,t,t,s)});function H0(n,s){if(typeof n!="function")throw new Wn(u);return s=s===t?s:ft(s),gt(n,s)}function V0(n,s){if(typeof n!="function")throw new Wn(u);return s=s==null?0:Qt(ft(s),0),gt(function(l){var h=l[s],M=Ki(l,0,s);return h&&ki(M,h),Pn(n,this,M)})}function k0(n,s,l){var h=!0,M=!0;if(typeof n!="function")throw new Wn(u);return kt(l)&&(h="leading"in l?!!l.leading:h,M="trailing"in l?!!l.trailing:M),ph(n,s,{leading:h,maxWait:s,trailing:M})}function W0(n){return ch(n,1)}function X0(n,s){return Ql(Fl(s),n)}function Y0(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function q0(n){return Yn(n,x)}function $0(n,s){return s=typeof s=="function"?s:t,Yn(n,x,s)}function K0(n){return Yn(n,_|x)}function Z0(n,s){return s=typeof s=="function"?s:t,Yn(n,_|x,s)}function j0(n,s){return s==null||tf(n,s,rn(s))}function ti(n,s){return n===s||n!==n&&s!==s}var J0=Zo(bl),Q0=Zo(function(n,s){return n>=s}),yr=lf(function(){return arguments}())?lf:function(n){return Xt(n)&&Lt.call(n,"callee")&&!qu.call(n,"callee")},ot=j.isArray,ex=Ru?In(Ru):l_;function An(n){return n!=null&&sa(n.length)&&!Ri(n)}function $t(n){return Xt(n)&&An(n)}function tx(n){return n===!0||n===!1||Xt(n)&&gn(n)==Oe}var Zi=mg||uc,nx=Cu?In(Cu):c_;function ix(n){return Xt(n)&&n.nodeType===1&&!Qs(n)}function rx(n){if(n==null)return!0;if(An(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||Zi(n)||rs(n)||yr(n)))return!n.length;var s=hn(n);if(s==Ue||s==C)return!n.size;if(js(n))return!Rl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function sx(n,s){return $s(n,s)}function ox(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?$s(n,s,t,l):!!h}function ec(n){if(!Xt(n))return!1;var s=gn(n);return s==ke||s==St||typeof n.message=="string"&&typeof n.name=="string"&&!Qs(n)}function ax(n){return typeof n=="number"&&Ku(n)}function Ri(n){if(!kt(n))return!1;var s=gn(n);return s==W||s==Wt||s==Ze||s==lt}function gh(n){return typeof n=="number"&&n==ft(n)}function sa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function kt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xt(n){return n!=null&&typeof n=="object"}var _h=Lu?In(Lu):f_;function lx(n,s){return n===s||wl(n,s,Wl(s))}function cx(n,s,l){return l=typeof l=="function"?l:t,wl(n,s,Wl(s),l)}function ux(n){return vh(n)&&n!=+n}function fx(n){if($_(n))throw new it(a);return cf(n)}function hx(n){return n===null}function dx(n){return n==null}function vh(n){return typeof n=="number"||Xt(n)&&gn(n)==je}function Qs(n){if(!Xt(n)||gn(n)!=Qe)return!1;var s=Io(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ro.call(l)==cg}var tc=Pu?In(Pu):h_;function px(n){return gh(n)&&n>=-te&&n<=te}var xh=Iu?In(Iu):d_;function oa(n){return typeof n=="string"||!ot(n)&&Xt(n)&&gn(n)==S}function Un(n){return typeof n=="symbol"||Xt(n)&&gn(n)==ee}var rs=Du?In(Du):p_;function mx(n){return n===t}function gx(n){return Xt(n)&&hn(n)==ve}function _x(n){return Xt(n)&&gn(n)==_e}var vx=Zo(Cl),xx=Zo(function(n,s){return n<=s});function Mh(n){if(!n)return[];if(An(n))return oa(n)?Qn(n):bn(n);if(Gs&&n[Gs])return jm(n[Gs]());var s=hn(n),l=s==Ue?gl:s==C?bo:ss;return l(n)}function Ci(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ce||n===-ce){var s=n<0?-1:1;return s*ue}return n===n?n:0}function ft(n){var s=Ci(n),l=s%1;return s===s?l?s-l:s:0}function Sh(n){return n?xr(ft(n),0,Me):0}function Kn(n){if(typeof n=="number")return n;if(Un(n))return he;if(kt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=kt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=zu(n);var l=k.test(n);return l||J.test(n)?Um(n.slice(2),l?2:8):R.test(n)?he:+n}function Eh(n){return di(n,wn(n))}function Mx(n){return n?xr(ft(n),-te,te):n===0?n:0}function wt(n){return n==null?"":Dn(n)}var Sx=ts(function(n,s){if(js(s)||An(s)){di(s,rn(s),n);return}for(var l in s)Lt.call(s,l)&&Xs(n,l,s[l])}),yh=ts(function(n,s){di(s,wn(s),n)}),aa=ts(function(n,s,l,h){di(s,wn(s),n,h)}),Ex=ts(function(n,s,l,h){di(s,rn(s),n,h)}),yx=Ai(El);function Tx(n,s){var l=es(n);return s==null?l:ef(l,s)}var bx=gt(function(n,s){n=Ut(n);var l=-1,h=s.length,M=h>2?s[2]:t;for(M&&_n(s[0],s[1],M)&&(h=1);++l<h;)for(var A=s[l],D=wn(A),B=-1,V=D.length;++B<V;){var re=D[B],ae=n[re];(ae===t||ti(ae,jr[re])&&!Lt.call(n,re))&&(n[re]=A[re])}return n}),Ax=gt(function(n){return n.push(t,Gf),Pn(Th,t,n)});function wx(n,s){return Nu(n,We(s,3),hi)}function Rx(n,s){return Nu(n,We(s,3),Tl)}function Cx(n,s){return n==null?n:yl(n,We(s,3),wn)}function Lx(n,s){return n==null?n:of(n,We(s,3),wn)}function Px(n,s){return n&&hi(n,We(s,3))}function Ix(n,s){return n&&Tl(n,We(s,3))}function Dx(n){return n==null?[]:Vo(n,rn(n))}function Ux(n){return n==null?[]:Vo(n,wn(n))}function nc(n,s,l){var h=n==null?t:Mr(n,s);return h===t?l:h}function Nx(n,s){return n!=null&&kf(n,s,r_)}function ic(n,s){return n!=null&&kf(n,s,s_)}var Ox=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),n[s]=l},sc(Rn)),Fx=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Co.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},We),Bx=gt(qs);function rn(n){return An(n)?Ju(n):Rl(n)}function wn(n){return An(n)?Ju(n,!0):m_(n)}function zx(n,s){var l={};return s=We(s,3),hi(n,function(h,M,A){Ti(l,s(h,M,A),h)}),l}function Gx(n,s){var l={};return s=We(s,3),hi(n,function(h,M,A){Ti(l,M,s(h,M,A))}),l}var Hx=ts(function(n,s,l){ko(n,s,l)}),Th=ts(function(n,s,l,h){ko(n,s,l,h)}),Vx=Ai(function(n,s){var l={};if(n==null)return l;var h=!1;s=Vt(s,function(A){return A=$i(A,n),h||(h=A.length>1),A}),di(n,Vl(n),l),h&&(l=Yn(l,_|v|x,O_));for(var M=s.length;M--;)Ul(l,s[M]);return l});function kx(n,s){return bh(n,ra(We(s)))}var Wx=Ai(function(n,s){return n==null?{}:__(n,s)});function bh(n,s){if(n==null)return{};var l=Vt(Vl(n),function(h){return[h]});return s=We(s),gf(n,l,function(h,M){return s(h,M[0])})}function Xx(n,s,l){s=$i(s,n);var h=-1,M=s.length;for(M||(M=1,n=t);++h<M;){var A=n==null?t:n[pi(s[h])];A===t&&(h=M,A=l),n=Ri(A)?A.call(n):A}return n}function Yx(n,s,l){return n==null?n:Ks(n,s,l)}function qx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Ks(n,s,l,h)}var Ah=Bf(rn),wh=Bf(wn);function $x(n,s,l){var h=ot(n),M=h||Zi(n)||rs(n);if(s=We(s,4),l==null){var A=n&&n.constructor;M?l=h?new A:[]:kt(n)?l=Ri(A)?es(Io(n)):{}:l={}}return(M?kn:hi)(n,function(D,B,V){return s(l,D,B,V)}),l}function Kx(n,s){return n==null?!0:Ul(n,s)}function Zx(n,s,l){return n==null?n:Sf(n,s,Fl(l))}function jx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Sf(n,s,Fl(l),h)}function ss(n){return n==null?[]:ml(n,rn(n))}function Jx(n){return n==null?[]:ml(n,wn(n))}function Qx(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Kn(l),l=l===l?l:0),s!==t&&(s=Kn(s),s=s===s?s:0),xr(Kn(n),s,l)}function eM(n,s,l){return s=Ci(s),l===t?(l=s,s=0):l=Ci(l),n=Kn(n),o_(n,s,l)}function tM(n,s,l){if(l&&typeof l!="boolean"&&_n(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ci(n),s===t?(s=n,n=0):s=Ci(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var M=Zu();return fn(n+M*(s-n+Dm("1e-"+((M+"").length-1))),s)}return Pl(n,s)}var nM=ns(function(n,s,l){return s=s.toLowerCase(),n+(l?Rh(s):s)});function Rh(n){return rc(wt(n).toLowerCase())}function Ch(n){return n=wt(n),n&&n.replace(Le,Ym).replace(ym,"")}function iM(n,s,l){n=wt(n),s=Dn(s);var h=n.length;l=l===t?h:xr(ft(l),0,h);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function rM(n){return n=wt(n),n&&xe.test(n)?n.replace(Se,qm):n}function sM(n){return n=wt(n),n&&nn.test(n)?n.replace(Ct,"\\$&"):n}var oM=ns(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),aM=ns(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),lM=If("toLowerCase");function cM(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;if(!s||h>=s)return n;var M=(s-h)/2;return Ko(Oo(M),l)+n+Ko(No(M),l)}function uM(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?n+Ko(s-h,l):n}function fM(n,s,l){n=wt(n),s=ft(s);var h=s?Kr(n):0;return s&&h<s?Ko(s-h,l)+n:n}function hM(n,s,l){return l||s==null?s=0:s&&(s=+s),xg(wt(n).replace(jn,""),s||0)}function dM(n,s,l){return(l?_n(n,s,l):s===t)?s=1:s=ft(s),Il(wt(n),s)}function pM(){var n=arguments,s=wt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var mM=ns(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function gM(n,s,l){return l&&typeof l!="number"&&_n(n,s,l)&&(s=l=t),l=l===t?Me:l>>>0,l?(n=wt(n),n&&(typeof s=="string"||s!=null&&!tc(s))&&(s=Dn(s),!s&&$r(n))?Ki(Qn(n),0,l):n.split(s,l)):[]}var _M=ns(function(n,s,l){return n+(l?" ":"")+rc(s)});function vM(n,s,l){return n=wt(n),l=l==null?0:xr(ft(l),0,n.length),s=Dn(s),n.slice(l,l+s.length)==s}function xM(n,s,l){var h=y.templateSettings;l&&_n(n,s,l)&&(s=t),n=wt(n),s=aa({},s,h,zf);var M=aa({},s.imports,h.imports,zf),A=rn(M),D=ml(M,A),B,V,re=0,ae=s.interpolate||Be,de="__p += '",Ae=_l((s.escape||Be).source+"|"+ae.source+"|"+(ae===yt?nl:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),ze="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Rm+"]")+`
`;n.replace(Ae,function($e,_t,xt,Nn,vn,On){return xt||(xt=Nn),de+=n.slice(re,On).replace(Xe,$m),_t&&(B=!0,de+=`' +
__e(`+_t+`) +
'`),vn&&(V=!0,de+=`';
`+vn+`;
__p += '`),xt&&(de+=`' +
((__t = (`+xt+`)) == null ? '' : __t) +
'`),re=On+$e.length,$e}),de+=`';
`;var qe=Lt.call(s,"variable")&&s.variable;if(!qe)de=`with (obj) {
`+de+`
}
`;else if(Mo.test(qe))throw new it(c);de=(V?de.replace(I,""):de).replace(le,"$1").replace(Ne,"$1;"),de="function("+(qe||"obj")+`) {
`+(qe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+de+`return __p
}`;var dt=Ph(function(){return At(A,ze+"return "+de).apply(t,D)});if(dt.source=de,ec(dt))throw dt;return dt}function MM(n){return wt(n).toLowerCase()}function SM(n){return wt(n).toUpperCase()}function EM(n,s,l){if(n=wt(n),n&&(l||s===t))return zu(n);if(!n||!(s=Dn(s)))return n;var h=Qn(n),M=Qn(s),A=Gu(h,M),D=Hu(h,M)+1;return Ki(h,A,D).join("")}function yM(n,s,l){if(n=wt(n),n&&(l||s===t))return n.slice(0,ku(n)+1);if(!n||!(s=Dn(s)))return n;var h=Qn(n),M=Hu(h,Qn(s))+1;return Ki(h,0,M).join("")}function TM(n,s,l){if(n=wt(n),n&&(l||s===t))return n.replace(jn,"");if(!n||!(s=Dn(s)))return n;var h=Qn(n),M=Gu(h,Qn(s));return Ki(h,M).join("")}function bM(n,s){var l=b,h=N;if(kt(s)){var M="separator"in s?s.separator:M;l="length"in s?ft(s.length):l,h="omission"in s?Dn(s.omission):h}n=wt(n);var A=n.length;if($r(n)){var D=Qn(n);A=D.length}if(l>=A)return n;var B=l-Kr(h);if(B<1)return h;var V=D?Ki(D,0,B).join(""):n.slice(0,B);if(M===t)return V+h;if(D&&(B+=V.length-B),tc(M)){if(n.slice(B).search(M)){var re,ae=V;for(M.global||(M=_l(M.source,wt(So.exec(M))+"g")),M.lastIndex=0;re=M.exec(ae);)var de=re.index;V=V.slice(0,de===t?B:de)}}else if(n.indexOf(Dn(M),B)!=B){var Ae=V.lastIndexOf(M);Ae>-1&&(V=V.slice(0,Ae))}return V+h}function AM(n){return n=wt(n),n&&Y.test(n)?n.replace(F,tg):n}var wM=ns(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),rc=If("toUpperCase");function Lh(n,s,l){return n=wt(n),s=l?t:s,s===t?Zm(n)?rg(n):Hm(n):n.match(s)||[]}var Ph=gt(function(n,s){try{return Pn(n,t,s)}catch(l){return ec(l)?l:new it(l)}}),RM=Ai(function(n,s){return kn(s,function(l){l=pi(l),Ti(n,l,Jl(n[l],n))}),n});function CM(n){var s=n==null?0:n.length,l=We();return n=s?Vt(n,function(h){if(typeof h[1]!="function")throw new Wn(u);return[l(h[0]),h[1]]}):[],gt(function(h){for(var M=-1;++M<s;){var A=n[M];if(Pn(A[0],this,h))return Pn(A[1],this,h)}})}function LM(n){return t_(Yn(n,_))}function sc(n){return function(){return n}}function PM(n,s){return n==null||n!==n?s:n}var IM=Uf(),DM=Uf(!0);function Rn(n){return n}function oc(n){return uf(typeof n=="function"?n:Yn(n,_))}function UM(n){return hf(Yn(n,_))}function NM(n,s){return df(n,Yn(s,_))}var OM=gt(function(n,s){return function(l){return qs(l,n,s)}}),FM=gt(function(n,s){return function(l){return qs(n,l,s)}});function ac(n,s,l){var h=rn(s),M=Vo(s,h);l==null&&!(kt(s)&&(M.length||!h.length))&&(l=s,s=n,n=this,M=Vo(s,rn(s)));var A=!(kt(l)&&"chain"in l)||!!l.chain,D=Ri(n);return kn(M,function(B){var V=s[B];n[B]=V,D&&(n.prototype[B]=function(){var re=this.__chain__;if(A||re){var ae=n(this.__wrapped__),de=ae.__actions__=bn(this.__actions__);return de.push({func:V,args:arguments,thisArg:n}),ae.__chain__=re,ae}return V.apply(n,ki([this.value()],arguments))})}),n}function BM(){return on._===this&&(on._=ug),this}function lc(){}function zM(n){return n=ft(n),gt(function(s){return pf(s,n)})}var GM=zl(Vt),HM=zl(Uu),VM=zl(ul);function Ih(n){return Yl(n)?fl(pi(n)):v_(n)}function kM(n){return function(s){return n==null?t:Mr(n,s)}}var WM=Of(),XM=Of(!0);function cc(){return[]}function uc(){return!1}function YM(){return{}}function qM(){return""}function $M(){return!0}function KM(n,s){if(n=ft(n),n<1||n>te)return[];var l=Me,h=fn(n,Me);s=We(s),n-=Me;for(var M=pl(h,s);++l<n;)s(l);return M}function ZM(n){return ot(n)?Vt(n,pi):Un(n)?[n]:bn(Jf(wt(n)))}function jM(n){var s=++lg;return wt(n)+s}var JM=$o(function(n,s){return n+s},0),QM=Gl("ceil"),eS=$o(function(n,s){return n/s},1),tS=Gl("floor");function nS(n){return n&&n.length?Ho(n,Rn,bl):t}function iS(n,s){return n&&n.length?Ho(n,We(s,2),bl):t}function rS(n){return Fu(n,Rn)}function sS(n,s){return Fu(n,We(s,2))}function oS(n){return n&&n.length?Ho(n,Rn,Cl):t}function aS(n,s){return n&&n.length?Ho(n,We(s,2),Cl):t}var lS=$o(function(n,s){return n*s},1),cS=Gl("round"),uS=$o(function(n,s){return n-s},0);function fS(n){return n&&n.length?dl(n,Rn):0}function hS(n,s){return n&&n.length?dl(n,We(s,2)):0}return y.after=U0,y.ary=ch,y.assign=Sx,y.assignIn=yh,y.assignInWith=aa,y.assignWith=Ex,y.at=yx,y.before=uh,y.bind=Jl,y.bindAll=RM,y.bindKey=fh,y.castArray=Y0,y.chain=oh,y.chunk=tv,y.compact=nv,y.concat=iv,y.cond=CM,y.conforms=LM,y.constant=sc,y.countBy=f0,y.create=Tx,y.curry=hh,y.curryRight=dh,y.debounce=ph,y.defaults=bx,y.defaultsDeep=Ax,y.defer=N0,y.delay=O0,y.difference=rv,y.differenceBy=sv,y.differenceWith=ov,y.drop=av,y.dropRight=lv,y.dropRightWhile=cv,y.dropWhile=uv,y.fill=fv,y.filter=d0,y.flatMap=g0,y.flatMapDeep=_0,y.flatMapDepth=v0,y.flatten=nh,y.flattenDeep=hv,y.flattenDepth=dv,y.flip=F0,y.flow=IM,y.flowRight=DM,y.fromPairs=pv,y.functions=Dx,y.functionsIn=Ux,y.groupBy=x0,y.initial=gv,y.intersection=_v,y.intersectionBy=vv,y.intersectionWith=xv,y.invert=Ox,y.invertBy=Fx,y.invokeMap=S0,y.iteratee=oc,y.keyBy=E0,y.keys=rn,y.keysIn=wn,y.map=ta,y.mapKeys=zx,y.mapValues=Gx,y.matches=UM,y.matchesProperty=NM,y.memoize=ia,y.merge=Hx,y.mergeWith=Th,y.method=OM,y.methodOf=FM,y.mixin=ac,y.negate=ra,y.nthArg=zM,y.omit=Vx,y.omitBy=kx,y.once=B0,y.orderBy=y0,y.over=GM,y.overArgs=z0,y.overEvery=HM,y.overSome=VM,y.partial=Ql,y.partialRight=mh,y.partition=T0,y.pick=Wx,y.pickBy=bh,y.property=Ih,y.propertyOf=kM,y.pull=yv,y.pullAll=rh,y.pullAllBy=Tv,y.pullAllWith=bv,y.pullAt=Av,y.range=WM,y.rangeRight=XM,y.rearg=G0,y.reject=w0,y.remove=wv,y.rest=H0,y.reverse=Zl,y.sampleSize=C0,y.set=Yx,y.setWith=qx,y.shuffle=L0,y.slice=Rv,y.sortBy=D0,y.sortedUniq=Nv,y.sortedUniqBy=Ov,y.split=gM,y.spread=V0,y.tail=Fv,y.take=Bv,y.takeRight=zv,y.takeRightWhile=Gv,y.takeWhile=Hv,y.tap=n0,y.throttle=k0,y.thru=ea,y.toArray=Mh,y.toPairs=Ah,y.toPairsIn=wh,y.toPath=ZM,y.toPlainObject=Eh,y.transform=$x,y.unary=W0,y.union=Vv,y.unionBy=kv,y.unionWith=Wv,y.uniq=Xv,y.uniqBy=Yv,y.uniqWith=qv,y.unset=Kx,y.unzip=jl,y.unzipWith=sh,y.update=Zx,y.updateWith=jx,y.values=ss,y.valuesIn=Jx,y.without=$v,y.words=Lh,y.wrap=X0,y.xor=Kv,y.xorBy=Zv,y.xorWith=jv,y.zip=Jv,y.zipObject=Qv,y.zipObjectDeep=e0,y.zipWith=t0,y.entries=Ah,y.entriesIn=wh,y.extend=yh,y.extendWith=aa,ac(y,y),y.add=JM,y.attempt=Ph,y.camelCase=nM,y.capitalize=Rh,y.ceil=QM,y.clamp=Qx,y.clone=q0,y.cloneDeep=K0,y.cloneDeepWith=Z0,y.cloneWith=$0,y.conformsTo=j0,y.deburr=Ch,y.defaultTo=PM,y.divide=eS,y.endsWith=iM,y.eq=ti,y.escape=rM,y.escapeRegExp=sM,y.every=h0,y.find=p0,y.findIndex=eh,y.findKey=wx,y.findLast=m0,y.findLastIndex=th,y.findLastKey=Rx,y.floor=tS,y.forEach=ah,y.forEachRight=lh,y.forIn=Cx,y.forInRight=Lx,y.forOwn=Px,y.forOwnRight=Ix,y.get=nc,y.gt=J0,y.gte=Q0,y.has=Nx,y.hasIn=ic,y.head=ih,y.identity=Rn,y.includes=M0,y.indexOf=mv,y.inRange=eM,y.invoke=Bx,y.isArguments=yr,y.isArray=ot,y.isArrayBuffer=ex,y.isArrayLike=An,y.isArrayLikeObject=$t,y.isBoolean=tx,y.isBuffer=Zi,y.isDate=nx,y.isElement=ix,y.isEmpty=rx,y.isEqual=sx,y.isEqualWith=ox,y.isError=ec,y.isFinite=ax,y.isFunction=Ri,y.isInteger=gh,y.isLength=sa,y.isMap=_h,y.isMatch=lx,y.isMatchWith=cx,y.isNaN=ux,y.isNative=fx,y.isNil=dx,y.isNull=hx,y.isNumber=vh,y.isObject=kt,y.isObjectLike=Xt,y.isPlainObject=Qs,y.isRegExp=tc,y.isSafeInteger=px,y.isSet=xh,y.isString=oa,y.isSymbol=Un,y.isTypedArray=rs,y.isUndefined=mx,y.isWeakMap=gx,y.isWeakSet=_x,y.join=Mv,y.kebabCase=oM,y.last=$n,y.lastIndexOf=Sv,y.lowerCase=aM,y.lowerFirst=lM,y.lt=vx,y.lte=xx,y.max=nS,y.maxBy=iS,y.mean=rS,y.meanBy=sS,y.min=oS,y.minBy=aS,y.stubArray=cc,y.stubFalse=uc,y.stubObject=YM,y.stubString=qM,y.stubTrue=$M,y.multiply=lS,y.nth=Ev,y.noConflict=BM,y.noop=lc,y.now=na,y.pad=cM,y.padEnd=uM,y.padStart=fM,y.parseInt=hM,y.random=tM,y.reduce=b0,y.reduceRight=A0,y.repeat=dM,y.replace=pM,y.result=Xx,y.round=cS,y.runInContext=H,y.sample=R0,y.size=P0,y.snakeCase=mM,y.some=I0,y.sortedIndex=Cv,y.sortedIndexBy=Lv,y.sortedIndexOf=Pv,y.sortedLastIndex=Iv,y.sortedLastIndexBy=Dv,y.sortedLastIndexOf=Uv,y.startCase=_M,y.startsWith=vM,y.subtract=uS,y.sum=fS,y.sumBy=hS,y.template=xM,y.times=KM,y.toFinite=Ci,y.toInteger=ft,y.toLength=Sh,y.toLower=MM,y.toNumber=Kn,y.toSafeInteger=Mx,y.toString=wt,y.toUpper=SM,y.trim=EM,y.trimEnd=yM,y.trimStart=TM,y.truncate=bM,y.unescape=AM,y.uniqueId=jM,y.upperCase=wM,y.upperFirst=rc,y.each=ah,y.eachRight=lh,y.first=ih,ac(y,function(){var n={};return hi(y,function(s,l){Lt.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),kn(["drop","take"],function(n,s){vt.prototype[n]=function(l){l=l===t?1:Qt(ft(l),0);var h=this.__filtered__&&!s?new vt(this):this.clone();return h.__filtered__?h.__takeCount__=fn(l,h.__takeCount__):h.__views__.push({size:fn(l,Me),type:n+(h.__dir__<0?"Right":"")}),h},vt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),kn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==G||l==ne;vt.prototype[n]=function(M){var A=this.clone();return A.__iteratees__.push({iteratee:We(M,3),type:l}),A.__filtered__=A.__filtered__||h,A}}),kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");vt.prototype[n]=function(){return this[l](1).value()[0]}}),kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");vt.prototype[n]=function(){return this.__filtered__?new vt(this):this[l](1)}}),vt.prototype.compact=function(){return this.filter(Rn)},vt.prototype.find=function(n){return this.filter(n).head()},vt.prototype.findLast=function(n){return this.reverse().find(n)},vt.prototype.invokeMap=gt(function(n,s){return typeof n=="function"?new vt(this):this.map(function(l){return qs(l,n,s)})}),vt.prototype.reject=function(n){return this.filter(ra(We(n)))},vt.prototype.slice=function(n,s){n=ft(n);var l=this;return l.__filtered__&&(n>0||s<0)?new vt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ft(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},vt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},vt.prototype.toArray=function(){return this.take(Me)},hi(vt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),M=y[h?"take"+(s=="last"?"Right":""):s],A=h||/^find/.test(s);M&&(y.prototype[s]=function(){var D=this.__wrapped__,B=h?[1]:arguments,V=D instanceof vt,re=B[0],ae=V||ot(D),de=function(_t){var xt=M.apply(y,ki([_t],B));return h&&Ae?xt[0]:xt};ae&&l&&typeof re=="function"&&re.length!=1&&(V=ae=!1);var Ae=this.__chain__,ze=!!this.__actions__.length,qe=A&&!Ae,dt=V&&!ze;if(!A&&ae){D=dt?D:new vt(this);var $e=n.apply(D,B);return $e.__actions__.push({func:ea,args:[de],thisArg:t}),new Xn($e,Ae)}return qe&&dt?n.apply(this,B):($e=this.thru(de),qe?h?$e.value()[0]:$e.value():$e)})}),kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Ao[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var M=arguments;if(h&&!this.__chain__){var A=this.value();return s.apply(ot(A)?A:[],M)}return this[l](function(D){return s.apply(ot(D)?D:[],M)})}}),hi(vt.prototype,function(n,s){var l=y[s];if(l){var h=l.name+"";Lt.call(Qr,h)||(Qr[h]=[]),Qr[h].push({name:s,func:l})}}),Qr[qo(t,m).name]=[{name:"wrapper",func:t}],vt.prototype.clone=Ag,vt.prototype.reverse=wg,vt.prototype.value=Rg,y.prototype.at=i0,y.prototype.chain=r0,y.prototype.commit=s0,y.prototype.next=o0,y.prototype.plant=l0,y.prototype.reverse=c0,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=u0,y.prototype.first=y.prototype.head,Gs&&(y.prototype[Gs]=a0),y},Zr=sg();mr?((mr.exports=Zr)._=Zr,ol._=Zr):on._=Zr}).call(ao)})(Xa,Xa.exports);var Xc=Xa.exports;const vR={dotSize:12,genePercentile:.99,cameraPositionZ:300,cameraPositionY:100,cameraPositionX:300},oi=new Ns(vR);function Yc(r){const t={...oi.getValue(),dotSize:r};oi.next(t)}function vp(r){const e=oi.getValue(),t=r*.01,i={...e,genePercentile:t};oi.next(i)}const xR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},MR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),SR(t)})};function SR(r){const e=document.getElementById("cellNotFound");let t=Pt.value.listPalette;r?(t=Pt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Ya(t)):Ya(Pt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Ya(r){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,Mt.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,p,_,x=((E,w)=>{for(const g in E)if(E[g].includes(w))return g;return!1})(Pt.value.groups,o);if(x){const E=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(E),p=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,p=document.createElement("label"),p.htmlFor=x,p.setAttribute("for",E),p.style.color="white",p.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=E,p.appendChild(d),p.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(p),f.appendChild(_),t.appendChild(f));const w=document.createElement("li");w.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",E=>{console.log(E),ER(o,E.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=Mt.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),ho(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function ER(r,e){let t=Mt.value.selectedCelltypes.map(i=>i);e?(t.push(r),ho(t)):(t=t.filter(i=>i!==r),ho(t))}const yR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{ho([]),Ya(Pt.value.listPalette),cellTextbox.value=""})},TR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",Mt.value.selectedCelltypes.length!==0?Mt.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Pt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function _o(r,e){const t=await fetch(`https://fisheyes.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===void 0||i.gene_values==null)return"[]";let o=i.gene_values.split(",").filter(c=>c!=="");const u=["clusters","clusters_pal","genes","hierarchical_clusters"].includes(r);if(console.log(r),console.log(typeof r),console.log(u),u==!0)return console.log(o),o;{o.shift(),console.log("float");let c=o.map(f=>parseFloat(f));return console.log(c),c}}function xp(r){return _o(r,Pt.value.prefix)}function bR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function Mp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:bR(r,e)}function Sp(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Ep(r,e){return r.map(t=>Math.min(t/e,1))}const AR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),wR(t)})};function wR(r){const e=document.getElementById("geneNotFound");if(r){const t=Pt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),qa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else qa(Pt.value.genes.slice(0,1e3))}function qa(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",Mt.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(Mt.value.selectedGenes.length>=Mt.value.mode&&(u.target.checked=!1),Mt.value.mode===1&&Mt.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(Mt.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(po([]),u.target.checked=!0)}hm(t,u.target.checked)})})}function RR(){const r=document.getElementById("modeButton");r.value=Mt.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,gR(e?2:1),e?dm():document.getElementById("selectedContainer").innerHTML=""}}function hm(r,e){let t=Mt.value.selectedGenes.map(i=>i);e?(t.push(r),po(t)):(t=t.filter(i=>i!==r),po(t))}const CR=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{po([]),qa(Pt.value.genes.slice(0,1e3)),geneTextbox.value=""})},LR=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",Mt.value.selectedGenes.length!==0?Mt.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"magenta":"green",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},dm=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",Mt.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",Mt.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(Mt.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),hm(t.value,!1)})}),Mt.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}},Na=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)},PR=new URL(window.location),xn=new URLSearchParams(PR.search);class IR{constructor(e){Uh(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=um.value.scene,this.camera=new zn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new pu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=oi.value.cameraPositionZ,this.camera.position.y=oi.value.cameraPositionY,this.camera.position.x=oi.value.cameraPositionX,this.controls=new fm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){ka.pipe(ir(e=>e.items),rr((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),Pt.pipe(ir(e=>e.prefix),rr((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=Pt.value.prefix}),Wa.pipe(ir(e=>e.isLoading),rr((e,t)=>Xc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),xR(Wa.value.isLoading)}),Mt.pipe(ir(e=>e.selectedCelltypes),rr((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),mi(!0),await this.updateInstancedMesh(),mi(!1),TR(),Mt.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(Mt.value.selectedCelltypes));xn.has("celltype")?xn.set("celltype",t):xn.append("celltype",t)}else xn.delete("celltype");Na(xn)}),Mt.pipe(ir(e=>e.selectedGenes),rr((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),Mt.value.mode===2&&dm(),mi(!0),await this.updateInstancedMesh(),mi(!1),LR(),Mt.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(Mt.value.selectedGenes));xn.append("gene",t),xn.has("gene")?xn.set("gene",t):xn.append("gene",t)}else xn.delete("gene");Na(xn)}),Mt.pipe(ir(e=>e.mode),rr()).subscribe(e=>{console.log("Selected genes changed:",e),xn.has("mode")?xn.set("mode",e):xn.append("mode",e),Na(xn)}),oi.pipe(ir(e=>e.dotSize),rr()).subscribe(async e=>{console.log("Dot Size Changed:",e),mi(!0),await this.updateInstancedMesh(),mi(!1)}),oi.pipe(ir(e=>e.genePercentile),rr()).subscribe(async e=>{console.log("Gene Percentile",e),mi(!0),await this.updateInstancedMesh(),mi(!1)})}async updateInstancedMesh(){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let e=Pt.value.pallete,t=ka.value.items;const i=new gu(.1,16,16),o=new mu(.1,32,32),a=new hu,u=t.length;console.log("Count",u),this.instancedMesh=new op(i,a,u),this.instancedMeshUmap=new op(o,a,u);const c=new yn,f=new yn;let d,p,_,v=200,x=.5,E=Mt.value.selectedCelltypes,w=Mt.value.selectedGenes,g=oi.value.dotSize,m=Math.floor(g/5),O=oi.value.genePercentile;if(w.length>0)try{let T=await xp(w[0]);if(w.length==2){let z=await xp(w[1]),P=Sp(z,O);_=Ep(z,P)}let L=Sp(T,O);p=Ep(T,L)}catch(T){console.error("Error fetching data:",T)}for(let T=0;T<u;T++){if(w.length>0)if(E.length===0||E.includes(t[T].clusters)){let z,P;_?(z=Mp(p[T],_[T]),P=(p[T]+_[T])/2*g+g/5):(z=Mp(p[T]),P=p[T]*g+g/5),d=new Tt(z),c.scale.set(P,P,P),f.scale.set(P*x,P*x,P*x)}else d=new Tt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else E.includes(t[T].clusters)||E.length==0?(d=new Tt(e[t[T].clusters]),c.scale.set(g,g,g),f.scale.set(g*x,g*x,g*x)):(d=new Tt("#5e5e5e"),c.scale.set(m,m,m),f.scale.set(m*x,m*x,m*x));c.position.set(t[T].X_spatial0_norm*v,t[T].X_spatial1_norm*v,t[T].X_spatial2_norm*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(T,c.matrix),this.instancedMesh.setColorAt(T,d);let L=1e4;Pt.value.prefix=="75pe"?f.position.set(t[T].X_umap0_norm*80+L,t[T].X_umap1_norm*80,10):f.position.set(t[T].X_umap0_norm*200+L-25,t[T].X_umap1_norm*200,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(T,f.matrix),this.instancedMeshUmap.setColorAt(T,d)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const el=Pt.value.prefix;async function DR(){const r=Pt.value.palleteColumn;try{const e=await _o(r,el);console.log(e),e.shift();let t={};e.forEach(i=>{let[o,a]=i.split(":");o=o.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[o]=a}),cR(t)}catch(e){console.error("Failed to load items:",e)}}async function UR(){try{const r=await _o("genes",el);r.shift(),uR(r)}catch(r){console.error("Failed to load items:",r)}}async function NR(){const r=Pt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>_o(o,el)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}oR(t)}catch(i){console.error("Error combining data:",i)}}async function OR(){try{const r=await _o("hierarchical_clusters",el);fR(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}function FR(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}function pm(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",i.title="Drag to resize UMAP.",e.appendChild(t),e.appendChild(i),r.appendChild(e);let o=!1,a=0,u=0;t.addEventListener("mousedown",P=>{o=!0,a=P.offsetX,u=P.offsetY});const c=()=>{r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const P=document.getElementsByClassName("navbar")[0].offsetHeight;r.offsetTop<P&&(r.style.top=`${P/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=P&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${P/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-P}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),m.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),m.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",P=>{o&&(r.style.left=`${(P.clientX-a)/window.innerWidth*100}%`,r.style.top=`${(P.clientY-u)/window.innerHeight*100}%`,c())}),document.addEventListener("mouseup",()=>{o=!1}),i.addEventListener("mousedown",f);function f(P){window.addEventListener("mousemove",d),window.addEventListener("mouseup",p),P.preventDefault()}function d(P){i.style.backgroundColor="red";const U=document.getElementsByClassName("navbar")[0].offsetHeight;let K=P.clientX<0?0:P.clientX,pe=P.clientY<U?U:P.clientY;const b=100,N=100;r.offsetWidth==b&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==N&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-K),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,b)}px`,r.style.height=`${Math.max(fe,N)}px`,me>b&&(r.style.left=`${K}px`),fe>N&&(r.style.top=`${pe}px`),g.aspect=me/fe,g.updateProjectionMatrix(),m.setSize(me,fe)}function p(){i.style.backgroundColor="#ffe432",window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",p)}t.addEventListener("touchstart",P=>{o=!0,a=P.changedTouches[0].clientX,u=P.changedTouches[0].clientY}),document.addEventListener("touchmove",P=>{if(o){let U=P.changedTouches[0].clientX;U+r.offsetWidth>window.innerWidth&&(U=window.innerWidth-r.offsetWidth),r.style.left=`${U/window.innerWidth*100}%`,r.style.top=`${P.changedTouches[0].clientY/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{o=!1}),i.addEventListener("touchstart",_);function _(P){window.addEventListener("touchmove",v),window.addEventListener("touchend",x),P.preventDefault()}function v(P){i.style.backgroundColor="red";const U=document.getElementsByClassName("navbar")[0].offsetHeight;let K=P.changedTouches[0].clientX<0?0:P.changedTouches[0].clientX,pe=P.changedTouches[0].clientY<U?U:P.changedTouches[0].clientY;const b=100,N=100;r.offsetWidth==b&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==N&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-K),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,b)}px`,r.style.height=`${Math.max(fe,N)}px`,me>b&&(r.style.left=`${K}px`),fe>N&&(r.style.top=`${pe}px`),g.aspect=me/fe,g.updateProjectionMatrix(),m.setSize(me,fe)}function x(P){i.style.backgroundColor="#ffe432",window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}const E=document.createElement("div");E.id="overlayScene",E.style.width="100%",E.style.height="100%",r.appendChild(E);const w=um.value.scene,g=new zn(75,E.offsetWidth/E.offsetHeight,.1,1e3),m=new pu,O=window.innerWidth*.25,T=window.innerHeight*.5;g.aspect=O/T,g.updateProjectionMatrix(),m.setSize(O,T),m.render(w,g),E.appendChild(m.domElement),g.position.x=1e4,g.position.z=150;const L=new fm(g,m.domElement);L.enableRotate=!1,L.mouseButtons={LEFT:Fi.PAN,MIDDLE:Fi.DOLLY,RIGHT:Fi.ROTATE},L.touches={ONE:sr.PAN,TWO:sr.DOLLY_PAN},g.lookAt(1e4,0,10),L.target.set(1e4,0,10),L.update(),m.render(w,g);function z(){requestAnimationFrame(z),m.render(w,g)}return z(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(pm());document.addEventListener("DOMContentLoaded",async()=>{pm();const r=FR();document.body.appendChild(r),mi(!0);try{await DR(),await NR(),await UR(),await OR();const e=document.body;new IR(e);const t=new URL(window.location),i=new URLSearchParams(t.search);if(i.has("celltype")){const a=JSON.parse(decodeURIComponent(i.get("celltype"))).filter(u=>Object.keys(Pt.value.pallete).includes(u));ho(a)}if(i.has("gene")){const a=JSON.parse(decodeURIComponent(i.get("gene"))).filter(u=>Pt.value.genes.includes(u));po(a)}Ya(Pt.value.listPalette),yR(),MR(),qa(Pt.value.genes.slice(0,1e3)),CR(),AR()}catch(e){console.error("Failed to load data:",e)}finally{mi(!1)}});function BR(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=new URLSearchParams("");i.append("prefix",e.item(t).innerText),Na(i),e.item(t).innerText!==Pt.value.prefix&&(r.innerHTML=Pt.value.prefix,window.location.reload())})}const zR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),i=document.getElementById("toggleCellCheckbox"),o=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");i.addEventListener("click",()=>{console.log(r.style.display),r.style.display=r.style.display==="none"?"block":"none",console.log(r.style.display),i.style.backgroundColor="white",i.style.color="black",o.style.backgroundColor="rgb(97, 97, 97)",o.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),r.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},GR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),i=document.getElementById("toggleCellCheckbox"),o=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");o.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",o.style.backgroundColor="white",o.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",r.style.display==="block"&&(r.style.display="none"),t.style.display==="block"&&(t.style.display="none"),e.style.display==="none"&&(o.style.backgroundColor="rgb(97, 97, 97)",o.style.color="white")})},HR=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),d=document.getElementById("cellCheckbox"),p=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const E=()=>{const g=x.dataset.target,m=document.getElementById(g);m.style.display="block"},w=()=>{const g=x.dataset.target,m=document.getElementById(g);m.style.display="none"};["mouseenter"].forEach(g=>{x.addEventListener(g,function(){E()})}),["mouseleave"].forEach(g=>{x.addEventListener(g,function(){w()})})}),e.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.onchange=function(){o.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))},i.addEventListener("mouseup",function(){o.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))}),o.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),Yc(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),vp(parseFloat(this.value).toFixed(2))}),f.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),vp(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{BR()})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{zR(),GR(),HR(),RR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);
