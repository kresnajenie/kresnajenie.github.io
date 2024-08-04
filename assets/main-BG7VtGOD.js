var lM=Object.defineProperty;var cM=(i,e,t)=>e in i?lM(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var gd=(i,e,t)=>(cM(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="162",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uM=0,_d=1,hM=2,um=1,fM=2,ki=3,mr=0,Dn=1,Wi=2,fr=0,Ds=1,vd=2,xd=3,yd=4,dM=5,Ur=100,pM=101,mM=102,Sd=103,Md=104,gM=200,_M=201,vM=202,xM=203,_u=204,vu=205,yM=206,SM=207,MM=208,EM=209,bM=210,TM=211,AM=212,wM=213,CM=214,RM=0,LM=1,PM=2,tl=3,IM=4,DM=5,UM=6,NM=7,hm=0,OM=1,FM=2,dr=0,BM=1,zM=2,GM=3,HM=4,kM=5,VM=6,WM=7,fm=300,Os=301,Fs=302,xu=303,yu=304,dl=306,Su=1e3,ui=1001,Mu=1002,hn=1003,Ed=1004,co=1005,In=1006,Pc=1007,Or=1008,pr=1009,XM=1010,qM=1011,zu=1012,dm=1013,hr=1014,Mi=1015,Eo=1016,pm=1017,mm=1018,Fr=1020,YM=1021,hi=1023,$M=1024,KM=1025,Br=1026,Bs=1027,gm=1028,_m=1029,ZM=1030,vm=1031,xm=1033,Ic=33776,Dc=33777,Uc=33778,Nc=33779,bd=35840,Td=35841,Ad=35842,wd=35843,ym=36196,Cd=37492,Rd=37496,Ld=37808,Pd=37809,Id=37810,Dd=37811,Ud=37812,Nd=37813,Od=37814,Fd=37815,Bd=37816,zd=37817,Gd=37818,Hd=37819,kd=37820,Vd=37821,Oc=36492,Wd=36494,Xd=36495,JM=36283,qd=36284,Yd=36285,$d=36286,jM=3200,QM=3201,eE=0,tE=1,ur="",yi="srgb",_r="srgb-linear",Gu="display-p3",pl="display-p3-linear",nl="linear",Gt="srgb",il="rec709",rl="p3",fs=7680,Kd=519,nE=512,iE=513,rE=514,Sm=515,sE=516,oE=517,aE=518,lE=519,Zd=35044,Jd="300 es",Eu=1035,Xi=2e3,sl=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jd=1234567;const xo=Math.PI/180,bo=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Hu(i,e){return(i%e+e)%e}function cE(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function uE(i,e,t){return i!==e?(t-i)/(e-i):0}function yo(i,e,t){return(1-t)*i+t*e}function hE(i,e,t,n){return yo(i,e,1-Math.exp(-t*n))}function fE(i,e=1){return e-Math.abs(Hu(i,e*2)-e)}function dE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gE(i,e){return i+Math.random()*(e-i)}function _E(i){return i*(.5-Math.random())}function vE(i){i!==void 0&&(jd=i);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xE(i){return i*xo}function yE(i){return i*bo}function bu(i){return(i&i-1)===0&&i!==0}function SE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ME(i,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),h=c(t/2),f=a((e+n)/2),d=c((e+n)/2),m=a((e-n)/2),v=c((e-n)/2),x=a((n-e)/2),y=c((n-e)/2);switch(s){case"XYX":i.set(l*d,h*m,h*v,l*f);break;case"YZY":i.set(h*v,l*d,h*m,l*f);break;case"ZXZ":i.set(h*m,h*v,l*d,l*f);break;case"XZX":i.set(l*d,h*y,h*x,l*f);break;case"YXY":i.set(h*x,l*d,h*y,l*f);break;case"ZYZ":i.set(h*y,h*x,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const EE={DEG2RAD:xo,RAD2DEG:bo,generateUUID:Wr,clamp:ln,euclideanModulo:Hu,mapLinear:cE,inverseLerp:uE,lerp:yo,damp:hE,pingpong:fE,smoothstep:dE,smootherstep:pE,randInt:mE,randFloat:gE,randFloatSpread:_E,seededRandom:vE,degToRad:xE,radToDeg:yE,isPowerOfTwo:bu,ceilPowerOfTwo:SE,floorPowerOfTwo:ol,setQuaternionFromProperEuler:ME,normalize:Mn,denormalize:Rs};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,s,a,c,l,h,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f)}set(e,t,n,s,a,c,l,h,f){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],h=n[6],f=n[1],d=n[4],m=n[7],v=n[2],x=n[5],y=n[8],E=s[0],_=s[3],g=s[6],D=s[1],M=s[4],R=s[7],G=s[2],U=s[5],C=s[8];return a[0]=c*E+l*D+h*G,a[3]=c*_+l*M+h*U,a[6]=c*g+l*R+h*C,a[1]=f*E+d*D+m*G,a[4]=f*_+d*M+m*U,a[7]=f*g+d*R+m*C,a[2]=v*E+x*D+y*G,a[5]=v*_+x*M+y*U,a[8]=v*g+x*R+y*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8];return t*c*d-t*l*f-n*a*d+n*l*h+s*a*f-s*c*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],m=d*c-l*f,v=l*h-d*a,x=f*a-c*h,y=t*m+n*v+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=m*E,e[1]=(s*f-d*n)*E,e[2]=(l*n-s*c)*E,e[3]=v*E,e[4]=(d*t-s*h)*E,e[5]=(s*a-l*t)*E,e[6]=x*E,e[7]=(n*h-f*t)*E,e[8]=(c*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*c+f*l)+c+e,-s*f,s*h,-s*(-f*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new xt;function Mm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function al(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bE(){const i=al("canvas");return i.style.display="block",i}const Qd={};function TE(i){i in Qd||(Qd[i]=!0,console.warn(i))}const ep=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tp=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[_r]:{transfer:nl,primaries:il,toReference:i=>i,fromReference:i=>i},[yi]:{transfer:Gt,primaries:il,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[pl]:{transfer:nl,primaries:rl,toReference:i=>i.applyMatrix3(tp),fromReference:i=>i.applyMatrix3(ep)},[Gu]:{transfer:Gt,primaries:rl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(tp),fromReference:i=>i.applyMatrix3(ep).convertLinearToSRGB()}},AE=new Set([_r,pl]),Dt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!AE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Sa[e].toReference,s=Sa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Sa[i].primaries},getTransfer:function(i){return i===ur?nl:Sa[i].transfer}};function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class Em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=al("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Us(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Us(t[n]/255)*255):t[n]=Us(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class bm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(zc(s[c].image)):a.push(zc(s[c]))}else a=zc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class bn extends Vr{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=ui,s=ui,a=In,c=Or,l=hi,h=pr,f=bn.DEFAULT_ANISOTROPY,d=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Wr(),this.name="",this.source=new bm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Su:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Su:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=fm;bn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,n=0,s=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,f=h[0],d=h[4],m=h[8],v=h[1],x=h[5],y=h[9],E=h[2],_=h[6],g=h[10];if(Math.abs(d-v)<.01&&Math.abs(m-E)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+v)<.1&&Math.abs(m+E)<.1&&Math.abs(y+_)<.1&&Math.abs(f+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(f+1)/2,R=(x+1)/2,G=(g+1)/2,U=(d+v)/4,C=(m+E)/4,W=(y+_)/4;return M>R&&M>G?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=U/n,a=C/n):R>G?R<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),n=U/s,a=W/s):G<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),n=C/a,s=W/a),this.set(n,s,a,t),this}let D=Math.sqrt((_-y)*(_-y)+(m-E)*(m-E)+(v-d)*(v-d));return Math.abs(D)<.001&&(D=1),this.x=(_-y)/D,this.y=(m-E)/D,this.z=(v-d)/D,this.w=Math.acos((f+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends Vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends RE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tm extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LE extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let h=n[s+0],f=n[s+1],d=n[s+2],m=n[s+3];const v=a[c+0],x=a[c+1],y=a[c+2],E=a[c+3];if(l===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=m;return}if(l===1){e[t+0]=v,e[t+1]=x,e[t+2]=y,e[t+3]=E;return}if(m!==E||h!==v||f!==x||d!==y){let _=1-l;const g=h*v+f*x+d*y+m*E,D=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const G=Math.sqrt(M),U=Math.atan2(G,g*D);_=Math.sin(_*U)/G,l=Math.sin(l*U)/G}const R=l*D;if(h=h*_+v*R,f=f*_+x*R,d=d*_+y*R,m=m*_+E*R,_===1-l){const G=1/Math.sqrt(h*h+f*f+d*d+m*m);h*=G,f*=G,d*=G,m*=G}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],h=n[s+1],f=n[s+2],d=n[s+3],m=a[c],v=a[c+1],x=a[c+2],y=a[c+3];return e[t]=l*y+d*m+h*x-f*v,e[t+1]=h*y+d*v+f*m-l*x,e[t+2]=f*y+d*x+l*v-h*m,e[t+3]=d*y-l*m-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,h=Math.sin,f=l(n/2),d=l(s/2),m=l(a/2),v=h(n/2),x=h(s/2),y=h(a/2);switch(c){case"XYZ":this._x=v*d*m+f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m-v*x*y;break;case"YXZ":this._x=v*d*m+f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m+v*x*y;break;case"ZXY":this._x=v*d*m-f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m-v*x*y;break;case"ZYX":this._x=v*d*m-f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m+v*x*y;break;case"YZX":this._x=v*d*m+f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m-v*x*y;break;case"XZY":this._x=v*d*m-f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],h=t[9],f=t[2],d=t[6],m=t[10],v=n+l+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(d-h)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(n>l&&n>m){const x=2*Math.sqrt(1+n-l-m);this._w=(d-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(l>m){const x=2*Math.sqrt(1+l-n-m);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+d)/x}else{const x=2*Math.sqrt(1+m-n-l);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+c*l+s*f-a*h,this._y=s*d+c*h+a*l-n*f,this._z=a*d+c*f+n*h-s*l,this._w=c*d-n*l-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,l),m=Math.sin((1-t)*d)/f,v=Math.sin(t*d)/f;return this._w=c*m+this._w*v,this._x=n*m+this._x*v,this._y=s*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,h=e.w,f=2*(c*s-l*n),d=2*(l*t-a*s),m=2*(a*n-c*t);return this.x=t+h*f+c*m-l*d,this.y=n+h*d+l*f-a*m,this.z=s+h*m+a*d-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,h=t.z;return this.x=s*h-a*l,this.y=a*c-n*h,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gc=new V,np=new Gr;class Xr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(a,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Ea.subVectors(this.max,uo),ps.subVectors(e.a,uo),ms.subVectors(e.b,uo),gs.subVectors(e.c,uo),nr.subVectors(ms,ps),ir.subVectors(gs,ms),wr.subVectors(ps,gs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-wr.z,wr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,wr.z,0,-wr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-wr.y,wr.x,0];return!Hc(t,ps,ms,gs,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,ps,ms,gs,Ea))?!1:(ba.crossVectors(nr,ir),t=[ba.x,ba.y,ba.z],Hc(t,ps,ms,gs,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,Ma=new Xr,ps=new V,ms=new V,gs=new V,nr=new V,ir=new V,wr=new V,uo=new V,Ea=new V,ba=new V,Cr=new V;function Hc(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Cr.fromArray(i,a);const l=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),h=e.dot(Cr),f=t.dot(Cr),d=n.dot(Cr);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>l)return!1}return!0}const PE=new Xr,ho=new V,kc=new V;class Ro{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):PE.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(kc)),this.expandByPoint(ho.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new V,Vc=new V,Ta=new V,rr=new V,Wc=new V,Aa=new V,Xc=new V;class Am{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Vc);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ta),l=rr.dot(this.direction),h=-rr.dot(Ta),f=rr.lengthSq(),d=Math.abs(1-c*c);let m,v,x,y;if(d>0)if(m=c*h-l,v=c*l-h,y=a*d,m>=0)if(v>=-y)if(v<=y){const E=1/d;m*=E,v*=E,x=m*(m+c*v+2*l)+v*(c*m+v+2*h)+f}else v=a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;else v=-a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;else v<=-y?(m=Math.max(0,-(-c*a+l)),v=m>0?-a:Math.min(Math.max(-a,-h),a),x=-m*m+v*(v+2*h)+f):v<=y?(m=0,v=Math.min(Math.max(-a,-h),a),x=v*(v+2*h)+f):(m=Math.max(0,-(c*a+l)),v=m>0?a:Math.min(Math.max(-a,-h),a),x=-m*m+v*(v+2*h)+f);else v=c>0?-a:a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Vc).addScaledVector(Ta,v),x}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,h;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,s=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,s=(e.min.x-v.x)*f),d>=0?(a=(e.min.y-v.y)*d,c=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,c=(e.min.y-v.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),m>=0?(l=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,a){Wc.subVectors(t,e),Aa.subVectors(n,e),Xc.crossVectors(Wc,Aa);let c=this.direction.dot(Xc),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;rr.subVectors(this.origin,e);const h=l*this.direction.dot(Aa.crossVectors(rr,Aa));if(h<0)return null;const f=l*this.direction.dot(Wc.cross(rr));if(f<0||h+f>c)return null;const d=-l*rr.dot(Xc);return d<0?null:this.at(d/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,s,a,c,l,h,f,d,m,v,x,y,E,_){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f,d,m,v,x,y,E,_)}set(e,t,n,s,a,c,l,h,f,d,m,v,x,y,E,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=a,g[5]=c,g[9]=l,g[13]=h,g[2]=f,g[6]=d,g[10]=m,g[14]=v,g[3]=x,g[7]=y,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),a=1/_s.setFromMatrixColumn(e,1).length(),c=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*d,x=c*m,y=l*d,E=l*m;t[0]=h*d,t[4]=-h*m,t[8]=f,t[1]=x+y*f,t[5]=v-E*f,t[9]=-l*h,t[2]=E-v*f,t[6]=y+x*f,t[10]=c*h}else if(e.order==="YXZ"){const v=h*d,x=h*m,y=f*d,E=f*m;t[0]=v+E*l,t[4]=y*l-x,t[8]=c*f,t[1]=c*m,t[5]=c*d,t[9]=-l,t[2]=x*l-y,t[6]=E+v*l,t[10]=c*h}else if(e.order==="ZXY"){const v=h*d,x=h*m,y=f*d,E=f*m;t[0]=v-E*l,t[4]=-c*m,t[8]=y+x*l,t[1]=x+y*l,t[5]=c*d,t[9]=E-v*l,t[2]=-c*f,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const v=c*d,x=c*m,y=l*d,E=l*m;t[0]=h*d,t[4]=y*f-x,t[8]=v*f+E,t[1]=h*m,t[5]=E*f+v,t[9]=x*f-y,t[2]=-f,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,x=c*f,y=l*h,E=l*f;t[0]=h*d,t[4]=E-v*m,t[8]=y*m+x,t[1]=m,t[5]=c*d,t[9]=-l*d,t[2]=-f*d,t[6]=x*m+y,t[10]=v-E*m}else if(e.order==="XZY"){const v=c*h,x=c*f,y=l*h,E=l*f;t[0]=h*d,t[4]=-m,t[8]=f*d,t[1]=v*m+E,t[5]=c*d,t[9]=x*m-y,t[2]=y*m-x,t[6]=l*d,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IE,e,DE)}lookAt(e,t,n){const s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),sr.crossVectors(n,Gn),sr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),sr.crossVectors(n,Gn)),sr.normalize(),wa.crossVectors(Gn,sr),s[0]=sr.x,s[4]=wa.x,s[8]=Gn.x,s[1]=sr.y,s[5]=wa.y,s[9]=Gn.y,s[2]=sr.z,s[6]=wa.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],h=n[8],f=n[12],d=n[1],m=n[5],v=n[9],x=n[13],y=n[2],E=n[6],_=n[10],g=n[14],D=n[3],M=n[7],R=n[11],G=n[15],U=s[0],C=s[4],W=s[8],ae=s[12],T=s[1],I=s[5],xe=s[9],fe=s[13],H=s[2],oe=s[6],Q=s[10],ce=s[14],ne=s[3],ue=s[7],me=s[11],ye=s[15];return a[0]=c*U+l*T+h*H+f*ne,a[4]=c*C+l*I+h*oe+f*ue,a[8]=c*W+l*xe+h*Q+f*me,a[12]=c*ae+l*fe+h*ce+f*ye,a[1]=d*U+m*T+v*H+x*ne,a[5]=d*C+m*I+v*oe+x*ue,a[9]=d*W+m*xe+v*Q+x*me,a[13]=d*ae+m*fe+v*ce+x*ye,a[2]=y*U+E*T+_*H+g*ne,a[6]=y*C+E*I+_*oe+g*ue,a[10]=y*W+E*xe+_*Q+g*me,a[14]=y*ae+E*fe+_*ce+g*ye,a[3]=D*U+M*T+R*H+G*ne,a[7]=D*C+M*I+R*oe+G*ue,a[11]=D*W+M*xe+R*Q+G*me,a[15]=D*ae+M*fe+R*ce+G*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],h=e[9],f=e[13],d=e[2],m=e[6],v=e[10],x=e[14],y=e[3],E=e[7],_=e[11],g=e[15];return y*(+a*h*m-s*f*m-a*l*v+n*f*v+s*l*x-n*h*x)+E*(+t*h*x-t*f*v+a*c*v-s*c*x+s*f*d-a*h*d)+_*(+t*f*m-t*l*x-a*c*m+n*c*x+a*l*d-n*f*d)+g*(-s*l*d-t*h*m+t*l*v+s*c*m-n*c*v+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],m=e[9],v=e[10],x=e[11],y=e[12],E=e[13],_=e[14],g=e[15],D=m*_*f-E*v*f+E*h*x-l*_*x-m*h*g+l*v*g,M=y*v*f-d*_*f-y*h*x+c*_*x+d*h*g-c*v*g,R=d*E*f-y*m*f+y*l*x-c*E*x-d*l*g+c*m*g,G=y*m*h-d*E*h-y*l*v+c*E*v+d*l*_-c*m*_,U=t*D+n*M+s*R+a*G;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/U;return e[0]=D*C,e[1]=(E*v*a-m*_*a-E*s*x+n*_*x+m*s*g-n*v*g)*C,e[2]=(l*_*a-E*h*a+E*s*f-n*_*f-l*s*g+n*h*g)*C,e[3]=(m*h*a-l*v*a-m*s*f+n*v*f+l*s*x-n*h*x)*C,e[4]=M*C,e[5]=(d*_*a-y*v*a+y*s*x-t*_*x-d*s*g+t*v*g)*C,e[6]=(y*h*a-c*_*a-y*s*f+t*_*f+c*s*g-t*h*g)*C,e[7]=(c*v*a-d*h*a+d*s*f-t*v*f-c*s*x+t*h*x)*C,e[8]=R*C,e[9]=(y*m*a-d*E*a-y*n*x+t*E*x+d*n*g-t*m*g)*C,e[10]=(c*E*a-y*l*a+y*n*f-t*E*f-c*n*g+t*l*g)*C,e[11]=(d*l*a-c*m*a-d*n*f+t*m*f+c*n*x-t*l*x)*C,e[12]=G*C,e[13]=(d*E*s-y*m*s+y*n*v-t*E*v-d*n*_+t*m*_)*C,e[14]=(y*l*s-c*E*s-y*n*h+t*E*h+c*n*_-t*l*_)*C,e[15]=(c*m*s-d*l*s+d*n*h-t*m*h-c*n*v+t*l*v)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,h=e.z,f=a*c,d=a*l;return this.set(f*c+n,f*l-s*h,f*h+s*l,0,f*l+s*h,d*l+n,d*h-s*c,0,f*h-s*l,d*h+s*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,h=t._w,f=a+a,d=c+c,m=l+l,v=a*f,x=a*d,y=a*m,E=c*d,_=c*m,g=l*m,D=h*f,M=h*d,R=h*m,G=n.x,U=n.y,C=n.z;return s[0]=(1-(E+g))*G,s[1]=(x+R)*G,s[2]=(y-M)*G,s[3]=0,s[4]=(x-R)*U,s[5]=(1-(v+g))*U,s[6]=(_+D)*U,s[7]=0,s[8]=(y+M)*C,s[9]=(_-D)*C,s[10]=(1-(v+E))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=_s.set(s[0],s[1],s[2]).length();const c=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const f=1/a,d=1/c,m=1/l;return ai.elements[0]*=f,ai.elements[1]*=f,ai.elements[2]*=f,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=m,ai.elements[9]*=m,ai.elements[10]*=m,t.setFromRotationMatrix(ai),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=Xi){const h=this.elements,f=2*a/(t-e),d=2*a/(n-s),m=(t+e)/(t-e),v=(n+s)/(n-s);let x,y;if(l===Xi)x=-(c+a)/(c-a),y=-2*c*a/(c-a);else if(l===sl)x=-c/(c-a),y=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=d,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=Xi){const h=this.elements,f=1/(t-e),d=1/(n-s),m=1/(c-a),v=(t+e)*f,x=(n+s)*d;let y,E;if(l===Xi)y=(c+a)*m,E=-2*m;else if(l===sl)y=a*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=E,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new V,ai=new qt,IE=new V(0,0,0),DE=new V(1,1,1),sr=new V,wa=new V,Gn=new V,ip=new qt,rp=new Gr;class qi{constructor(e=0,t=0,n=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],h=s[1],f=s[5],d=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UE=0;const sp=new V,vs=new Gr,Bi=new qt,Ca=new V,fo=new V,NE=new V,OE=new Gr,op=new V(1,0,0),ap=new V(0,1,0),lp=new V(0,0,1),FE={type:"added"},BE={type:"removed"},qc={type:"childadded",child:null},Yc={type:"childremoved",child:null};class Tn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new V,t=new qi,n=new Gr,s=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new xt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return sp.copy(e).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(fo,Ca,this.up):Bi.lookAt(Ca,fo,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(Bi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FE),qc.child=e,this.dispatchEvent(qc),qc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BE),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const l=s[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const m=h[f];a(e.shapes,m)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,f=this.material.length;h<f;h++)l.push(a(e.materials,this.material[h]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(a(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),f=c(e.textures),d=c(e.images),m=c(e.shapes),v=c(e.skeletons),x=c(e.animations),y=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function c(l){const h=[];for(const f in l){const d=l[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tn.DEFAULT_UP=new V(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new V,zi=new V,$c=new V,Gi=new V,xs=new V,ys=new V,cp=new V,Kc=new V,Zc=new V,Jc=new V;class Ei{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){li.subVectors(s,t),zi.subVectors(n,t),$c.subVectors(e,t);const c=li.dot(li),l=li.dot(zi),h=li.dot($c),f=zi.dot(zi),d=zi.dot($c),m=c*f-l*l;if(m===0)return a.set(0,0,0),null;const v=1/m,x=(f*h-l*d)*v,y=(c*d-l*h)*v;return a.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,a,c,l,h){return this.getBarycoord(e,t,n,s,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Gi.x),h.addScaledVector(c,Gi.y),h.addScaledVector(l,Gi.z),h)}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),zi.subVectors(e,t),li.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;xs.subVectors(s,n),ys.subVectors(a,n),Kc.subVectors(e,n);const h=xs.dot(Kc),f=ys.dot(Kc);if(h<=0&&f<=0)return t.copy(n);Zc.subVectors(e,s);const d=xs.dot(Zc),m=ys.dot(Zc);if(d>=0&&m<=d)return t.copy(s);const v=h*m-d*f;if(v<=0&&h>=0&&d<=0)return c=h/(h-d),t.copy(n).addScaledVector(xs,c);Jc.subVectors(e,a);const x=xs.dot(Jc),y=ys.dot(Jc);if(y>=0&&x<=y)return t.copy(a);const E=x*f-h*y;if(E<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector(ys,l);const _=d*y-x*m;if(_<=0&&m-d>=0&&x-y>=0)return cp.subVectors(a,s),l=(m-d)/(m-d+(x-y)),t.copy(s).addScaledVector(cp,l);const g=1/(_+E+v);return c=E*g,l=v*g,t.copy(n).addScaledVector(xs,c).addScaledVector(ys,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function jc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=Hu(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=jc(c,a,e+1/3),this.g=jc(c,a,e),this.b=jc(c,a,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=yi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const n=Cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Bc(e.r),this.g=Bc(e.g),this.b=Bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Dt.fromWorkingColorSpace(_n.copy(this),e),Math.round(ln(_n.r*255,0,255))*65536+Math.round(ln(_n.g*255,0,255))*256+Math.round(ln(_n.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,a=_n.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let h,f;const d=(l+c)/2;if(l===c)h=0,f=0;else{const m=c-l;switch(f=d<=.5?m/(c+l):m/(2-c-l),c){case n:h=(s-a)/m+(s<a?6:0);break;case s:h=(a-n)/m+2;break;case a:h=(n-s)/m+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=yi){Dt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Ra);const n=yo(or.h,Ra.h,t),s=yo(or.s,Ra.s,t),a=yo(or.l,Ra.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Tt;Tt.NAMES=Cm;let zE=0;class ml extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ds,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=vu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_u&&(n.blendSrc=this.blendSrc),this.blendDst!==vu&&(n.blendDst=this.blendDst),this.blendEquation!==Ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ll extends ml{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new V,La=new Ce;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return TE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),s=Mn(s,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zd&&(e.usage=this.usage),e}}class Rm extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lm extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let GE=0;const Qn=new qt,Qc=new Tn,Ss=new V,Hn=new Xr,po=new Xr,an=new V;class bi extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mm(e)?Lm:Rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];po.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Hn.min,po.min),Hn.expandByPoint(an),an.addVectors(Hn.max,po.max),Hn.expandByPoint(an)):(Hn.expandByPoint(po.min),Hn.expandByPoint(po.max))}Hn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)an.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(an));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],h=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)an.fromBufferAttribute(l,f),h&&(Ss.fromBufferAttribute(e,f),an.add(Ss)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let W=0;W<n.count;W++)l[W]=new V,h[W]=new V;const f=new V,d=new V,m=new V,v=new Ce,x=new Ce,y=new Ce,E=new V,_=new V;function g(W,ae,T){f.fromBufferAttribute(n,W),d.fromBufferAttribute(n,ae),m.fromBufferAttribute(n,T),v.fromBufferAttribute(a,W),x.fromBufferAttribute(a,ae),y.fromBufferAttribute(a,T),d.sub(f),m.sub(f),x.sub(v),y.sub(v);const I=1/(x.x*y.y-y.x*x.y);isFinite(I)&&(E.copy(d).multiplyScalar(y.y).addScaledVector(m,-x.y).multiplyScalar(I),_.copy(m).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(I),l[W].add(E),l[ae].add(E),l[T].add(E),h[W].add(_),h[ae].add(_),h[T].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let W=0,ae=D.length;W<ae;++W){const T=D[W],I=T.start,xe=T.count;for(let fe=I,H=I+xe;fe<H;fe+=3)g(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const M=new V,R=new V,G=new V,U=new V;function C(W){G.fromBufferAttribute(s,W),U.copy(G);const ae=l[W];M.copy(ae),M.sub(G.multiplyScalar(G.dot(ae))).normalize(),R.crossVectors(U,ae);const I=R.dot(h[W])<0?-1:1;c.setXYZW(W,M.x,M.y,M.z,I)}for(let W=0,ae=D.length;W<ae;++W){const T=D[W],I=T.start,xe=T.count;for(let fe=I,H=I+xe;fe<H;fe+=3)C(e.getX(fe+0)),C(e.getX(fe+1)),C(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const s=new V,a=new V,c=new V,l=new V,h=new V,f=new V,d=new V,m=new V;if(e)for(let v=0,x=e.count;v<x;v+=3){const y=e.getX(v+0),E=e.getX(v+1),_=e.getX(v+2);s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,_),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,_),l.add(d),h.add(d),f.add(d),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,h){const f=l.array,d=l.itemSize,m=l.normalized,v=new f.constructor(h.length*d);let x=0,y=0;for(let E=0,_=h.length;E<_;E++){l.isInterleavedBufferAttribute?x=h[E]*l.data.stride+l.offset:x=h[E]*d;for(let g=0;g<d;g++)v[y++]=f[x++]}return new fi(v,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,s=this.attributes;for(const l in s){const h=s[l],f=e(h,n);t.setAttribute(l,f)}const a=this.morphAttributes;for(const l in a){const h=[],f=a[l];for(let d=0,m=f.length;d<m;d++){const v=f[d],x=e(v,n);h.push(x)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const f=c[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let m=0,v=f.length;m<v;m++){const x=f[m];d.push(x.toJSON(e.data))}d.length>0&&(s[h]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],m=a[f];for(let v=0,x=m.length;v<x;v++)d.push(m[v].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new qt,Rr=new Am,Pa=new Ro,hp=new V,Ms=new V,Es=new V,bs=new V,eu=new V,Ia=new V,Da=new Ce,Ua=new Ce,Na=new Ce,fp=new V,dp=new V,pp=new V,Oa=new V,Fa=new V;class Vn extends Tn{constructor(e=new bi,t=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){Ia.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=l[h],m=a[h];d!==0&&(eu.fromBufferAttribute(m,e),c?Ia.addScaledVector(eu,d):Ia.addScaledVector(eu.sub(t),d))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(a),Rr.copy(e.ray).recast(e.near),!(Pa.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Pa,hp)===null||Rr.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(up.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,v=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(c))for(let y=0,E=v.length;y<E;y++){const _=v[y],g=c[_.materialIndex],D=Math.max(_.start,x.start),M=Math.min(l.count,Math.min(_.start+_.count,x.start+x.count));for(let R=D,G=M;R<G;R+=3){const U=l.getX(R),C=l.getX(R+1),W=l.getX(R+2);s=Ba(this,g,e,n,f,d,m,U,C,W),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),E=Math.min(l.count,x.start+x.count);for(let _=y,g=E;_<g;_+=3){const D=l.getX(_),M=l.getX(_+1),R=l.getX(_+2);s=Ba(this,c,e,n,f,d,m,D,M,R),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let y=0,E=v.length;y<E;y++){const _=v[y],g=c[_.materialIndex],D=Math.max(_.start,x.start),M=Math.min(h.count,Math.min(_.start+_.count,x.start+x.count));for(let R=D,G=M;R<G;R+=3){const U=R,C=R+1,W=R+2;s=Ba(this,g,e,n,f,d,m,U,C,W),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let _=y,g=E;_<g;_+=3){const D=_,M=_+1,R=_+2;s=Ba(this,c,e,n,f,d,m,D,M,R),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function HE(i,e,t,n,s,a,c,l){let h;if(e.side===Dn?h=n.intersectTriangle(c,a,s,!0,l):h=n.intersectTriangle(s,a,c,e.side===mr,l),h===null)return null;Fa.copy(l),Fa.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Fa);return f<t.near||f>t.far?null:{distance:f,point:Fa.clone(),object:i}}function Ba(i,e,t,n,s,a,c,l,h,f){i.getVertexPosition(l,Ms),i.getVertexPosition(h,Es),i.getVertexPosition(f,bs);const d=HE(i,e,t,n,Ms,Es,bs,Oa);if(d){s&&(Da.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,h),Na.fromBufferAttribute(s,f),d.uv=Ei.getInterpolation(Oa,Ms,Es,bs,Da,Ua,Na,new Ce)),a&&(Da.fromBufferAttribute(a,l),Ua.fromBufferAttribute(a,h),Na.fromBufferAttribute(a,f),d.uv1=Ei.getInterpolation(Oa,Ms,Es,bs,Da,Ua,Na,new Ce)),c&&(fp.fromBufferAttribute(c,l),dp.fromBufferAttribute(c,h),pp.fromBufferAttribute(c,f),d.normal=Ei.getInterpolation(Oa,Ms,Es,bs,fp,dp,pp,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:l,b:h,c:f,normal:new V,materialIndex:0};Ei.getNormal(Ms,Es,bs,m.normal),d.face=m}return d}class Lo extends bi{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],d=[],m=[];let v=0,x=0;y("z","y","x",-1,-1,n,t,e,c,a,0),y("z","y","x",1,-1,n,t,-e,c,a,1),y("x","z","y",1,1,e,n,t,s,c,2),y("x","z","y",1,-1,e,n,-t,s,c,3),y("x","y","z",1,-1,e,t,n,s,a,4),y("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new An(f,3)),this.setAttribute("normal",new An(d,3)),this.setAttribute("uv",new An(m,2));function y(E,_,g,D,M,R,G,U,C,W,ae){const T=R/C,I=G/W,xe=R/2,fe=G/2,H=U/2,oe=C+1,Q=W+1;let ce=0,ne=0;const ue=new V;for(let me=0;me<Q;me++){const ye=me*I-fe;for(let Fe=0;Fe<oe;Fe++){const st=Fe*T-xe;ue[E]=st*D,ue[_]=ye*M,ue[g]=H,f.push(ue.x,ue.y,ue.z),ue[E]=0,ue[_]=0,ue[g]=U>0?1:-1,d.push(ue.x,ue.y,ue.z),m.push(Fe/C),m.push(1-me/W),ce+=1}}for(let me=0;me<W;me++)for(let ye=0;ye<C;ye++){const Fe=v+ye+oe*me,st=v+ye+oe*(me+1),te=v+(ye+1)+oe*(me+1),ve=v+(ye+1)+oe*me;h.push(Fe,st,ve),h.push(st,te,ve),ne+=6}l.addGroup(x,ne,ae),x+=ne,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=zs(i[t]);for(const s in n)e[s]=n[s]}return e}function kE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pm(i){return i.getRenderTarget()===null?i.outputColorSpace:Dt.workingColorSpace}const VE={clone:zs,merge:En};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends ml{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Im extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new V,mp=new Ce,gp=new Ce;class kn extends Im{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,mp,gp),t.subVectors(gp,mp)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,As=1;class qE extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(Ts,As,e,t);s.layers=this.layers,this.add(s);const a=new kn(Ts,As,e,t);a.layers=this.layers,this.add(a);const c=new kn(Ts,As,e,t);c.layers=this.layers,this.add(c);const l=new kn(Ts,As,e,t);l.layers=this.layers,this.add(l);const h=new kn(Ts,As,e,t);h.layers=this.layers,this.add(h);const f=new kn(Ts,As,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,h]=t;for(const f of t)this.remove(f);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,h,f,d]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(m,v,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Dm extends bn{constructor(e,t,n,s,a,c,l,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,s,a,c,l,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YE extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Dm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lo(5,5,5),a=new gr({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:fr});a.uniforms.tEquirect.value=t;const c=new Vn(s,a),l=t.minFilter;return t.minFilter===Or&&(t.minFilter=In),new qE(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const tu=new V,$E=new V,KE=new xt;class cr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tu.subVectors(n,t).cross($E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||KE.getNormalMatrix(e),s=this.coplanarPoint(tu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new Ro,za=new V;class Um{constructor(e=new cr,t=new cr,n=new cr,s=new cr,a=new cr,c=new cr){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],h=s[3],f=s[4],d=s[5],m=s[6],v=s[7],x=s[8],y=s[9],E=s[10],_=s[11],g=s[12],D=s[13],M=s[14],R=s[15];if(n[0].setComponents(h-a,v-f,_-x,R-g).normalize(),n[1].setComponents(h+a,v+f,_+x,R+g).normalize(),n[2].setComponents(h+c,v+d,_+y,R+D).normalize(),n[3].setComponents(h-c,v-d,_-y,R-D).normalize(),n[4].setComponents(h-l,v-m,_-E,R-M).normalize(),t===Xi)n[5].setComponents(h+l,v+m,_+E,R+M).normalize();else if(t===sl)n[5].setComponents(l,m,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nm(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ZE(i,e){const t=e.isWebGL2,n=new WeakMap;function s(f,d){const m=f.array,v=f.usage,x=m.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,m,v),f.onUploadCallback();let E;if(m instanceof Float32Array)E=i.FLOAT;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=i.SHORT;else if(m instanceof Uint32Array)E=i.UNSIGNED_INT;else if(m instanceof Int32Array)E=i.INT;else if(m instanceof Int8Array)E=i.BYTE;else if(m instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function a(f,d,m){const v=d.array,x=d._updateRange,y=d.updateRanges;if(i.bindBuffer(m,f),x.count===-1&&y.length===0&&i.bufferSubData(m,0,v),y.length!==0){for(let E=0,_=y.length;E<_;E++){const g=y[E];t?i.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):i.bufferSubData(m,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}d.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):i.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),d.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function h(f,d){if(f.isGLBufferAttribute){const v=n.get(f);(!v||v.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);if(m===void 0)n.set(f,s(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,f,d),m.version=f.version}}return{get:c,remove:l,update:h}}class gl extends bi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),h=Math.floor(s),f=l+1,d=h+1,m=e/l,v=t/h,x=[],y=[],E=[],_=[];for(let g=0;g<d;g++){const D=g*v-c;for(let M=0;M<f;M++){const R=M*m-a;y.push(R,-D,0),E.push(0,0,1),_.push(M/l),_.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<l;D++){const M=D+f*g,R=D+f*(g+1),G=D+1+f*(g+1),U=D+1+f*g;x.push(M,R,U),x.push(R,G,U)}this.setIndex(x),this.setAttribute("position",new An(y,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ib=`#ifdef USE_AOMAP
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
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
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
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ub=`#ifdef USE_IRIDESCENCE
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
#endif`,hb=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yb=`#define PI 3.141592653589793
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
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`
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
}`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
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
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
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
#endif`,Zb=`struct PhysicalMaterial {
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
}`,Jb=`
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
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
#endif`,dT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`#ifdef USE_MORPHTARGETS
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
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OT=`float getShadowMask() {
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
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,zT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,HT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
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
#endif`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
}`,rA=`#if DEPTH_PACKING == 3200
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
}`,sA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,fA=`uniform vec3 diffuse;
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
}`,dA=`#define LAMBERT
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define MATCAP
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
}`,gA=`#define MATCAP
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
}`,_A=`#define NORMAL
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
}`,vA=`#define NORMAL
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
}`,xA=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,MA=`#define STANDARD
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
}`,EA=`#define TOON
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
}`,bA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,wA=`#include <common>
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
}`,CA=`uniform vec3 color;
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
}`,RA=`uniform float rotation;
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
}`,LA=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:JE,alphahash_pars_fragment:jE,alphamap_fragment:QE,alphamap_pars_fragment:eb,alphatest_fragment:tb,alphatest_pars_fragment:nb,aomap_fragment:ib,aomap_pars_fragment:rb,batching_pars_vertex:sb,batching_vertex:ob,begin_vertex:ab,beginnormal_vertex:lb,bsdfs:cb,iridescence_fragment:ub,bumpmap_pars_fragment:hb,clipping_planes_fragment:fb,clipping_planes_pars_fragment:db,clipping_planes_pars_vertex:pb,clipping_planes_vertex:mb,color_fragment:gb,color_pars_fragment:_b,color_pars_vertex:vb,color_vertex:xb,common:yb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:Eb,displacementmap_vertex:bb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,colorspace_fragment:wb,colorspace_pars_fragment:Cb,envmap_fragment:Rb,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Pb,envmap_pars_vertex:Ib,envmap_physical_pars_fragment:Wb,envmap_vertex:Db,fog_vertex:Ub,fog_pars_vertex:Nb,fog_fragment:Ob,fog_pars_fragment:Fb,gradientmap_pars_fragment:Bb,lightmap_fragment:zb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:kb,lights_pars_begin:Vb,lights_toon_fragment:Xb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:$b,lights_physical_fragment:Kb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Jb,lights_fragment_maps:jb,lights_fragment_end:Qb,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:rT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:aT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:hT,morphnormal_vertex:fT,morphtarget_pars_vertex:dT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:_T,normal_pars_vertex:vT,normal_vertex:xT,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:MT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:bT,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:wT,project_vertex:CT,dithering_fragment:RT,dithering_pars_fragment:LT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:IT,shadowmap_pars_fragment:DT,shadowmap_pars_vertex:UT,shadowmap_vertex:NT,shadowmask_pars_fragment:OT,skinbase_vertex:FT,skinning_pars_vertex:BT,skinning_vertex:zT,skinnormal_vertex:GT,specularmap_fragment:HT,specularmap_pars_fragment:kT,tonemapping_fragment:VT,tonemapping_pars_fragment:WT,transmission_fragment:XT,transmission_pars_fragment:qT,uv_pars_fragment:YT,uv_pars_vertex:$T,uv_vertex:KT,worldpos_vertex:ZT,background_vert:JT,background_frag:jT,backgroundCube_vert:QT,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:hA,meshbasic_frag:fA,meshlambert_vert:dA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:_A,meshnormal_frag:vA,meshphong_vert:xA,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:MA,meshtoon_vert:EA,meshtoon_frag:bA,points_vert:TA,points_frag:AA,shadow_vert:wA,shadow_frag:CA,sprite_vert:RA,sprite_frag:LA},Le={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Si={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Tt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Si.physical={uniforms:En([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ga={r:0,b:0,g:0},Pr=new qi,PA=new qt;function IA(i,e,t,n,s,a,c){const l=new Tt(0);let h=a===!0?0:1,f,d,m=null,v=0,x=null;function y(_,g){let D=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M)),M===null?E(l,h):M&&M.isColor&&(E(M,1),D=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===dl)?(d===void 0&&(d=new Vn(new Lo(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:zs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,U,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Pr.copy(g.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(PA.makeRotationFromEuler(Pr)),d.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Gt,(m!==M||v!==M.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,m=M,v=M.version,x=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(f===void 0&&(f=new Vn(new gl(2,2),new gr({name:"BackgroundMaterial",uniforms:zs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=M,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),f.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||v!==M.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,m=M,v=M.version,x=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function E(_,g){_.getRGB(Ga,Pm(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,g,c)}return{getClearColor:function(){return l},setClearColor:function(_,g=1){l.set(_),h=g,E(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,E(l,h)},render:y}}function DA(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,l={},h=_(null);let f=h,d=!1;function m(H,oe,Q,ce,ne){let ue=!1;if(c){const me=E(ce,Q,oe);f!==me&&(f=me,x(f.object)),ue=g(H,ce,Q,ne),ue&&D(H,ce,Q,ne)}else{const me=oe.wireframe===!0;(f.geometry!==ce.id||f.program!==Q.id||f.wireframe!==me)&&(f.geometry=ce.id,f.program=Q.id,f.wireframe=me,ue=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,W(H,oe,Q,ce),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function v(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function x(H){return n.isWebGL2?i.bindVertexArray(H):a.bindVertexArrayOES(H)}function y(H){return n.isWebGL2?i.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function E(H,oe,Q){const ce=Q.wireframe===!0;let ne=l[H.id];ne===void 0&&(ne={},l[H.id]=ne);let ue=ne[oe.id];ue===void 0&&(ue={},ne[oe.id]=ue);let me=ue[ce];return me===void 0&&(me=_(v()),ue[ce]=me),me}function _(H){const oe=[],Q=[],ce=[];for(let ne=0;ne<s;ne++)oe[ne]=0,Q[ne]=0,ce[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:Q,attributeDivisors:ce,object:H,attributes:{},index:null}}function g(H,oe,Q,ce){const ne=f.attributes,ue=oe.attributes;let me=0;const ye=Q.getAttributes();for(const Fe in ye)if(ye[Fe].location>=0){const te=ne[Fe];let ve=ue[Fe];if(ve===void 0&&(Fe==="instanceMatrix"&&H.instanceMatrix&&(ve=H.instanceMatrix),Fe==="instanceColor"&&H.instanceColor&&(ve=H.instanceColor)),te===void 0||te.attribute!==ve||ve&&te.data!==ve.data)return!0;me++}return f.attributesNum!==me||f.index!==ce}function D(H,oe,Q,ce){const ne={},ue=oe.attributes;let me=0;const ye=Q.getAttributes();for(const Fe in ye)if(ye[Fe].location>=0){let te=ue[Fe];te===void 0&&(Fe==="instanceMatrix"&&H.instanceMatrix&&(te=H.instanceMatrix),Fe==="instanceColor"&&H.instanceColor&&(te=H.instanceColor));const ve={};ve.attribute=te,te&&te.data&&(ve.data=te.data),ne[Fe]=ve,me++}f.attributes=ne,f.attributesNum=me,f.index=ce}function M(){const H=f.newAttributes;for(let oe=0,Q=H.length;oe<Q;oe++)H[oe]=0}function R(H){G(H,0)}function G(H,oe){const Q=f.newAttributes,ce=f.enabledAttributes,ne=f.attributeDivisors;Q[H]=1,ce[H]===0&&(i.enableVertexAttribArray(H),ce[H]=1),ne[H]!==oe&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,oe),ne[H]=oe)}function U(){const H=f.newAttributes,oe=f.enabledAttributes;for(let Q=0,ce=oe.length;Q<ce;Q++)oe[Q]!==H[Q]&&(i.disableVertexAttribArray(Q),oe[Q]=0)}function C(H,oe,Q,ce,ne,ue,me){me===!0?i.vertexAttribIPointer(H,oe,Q,ne,ue):i.vertexAttribPointer(H,oe,Q,ce,ne,ue)}function W(H,oe,Q,ce){if(n.isWebGL2===!1&&(H.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const ne=ce.attributes,ue=Q.getAttributes(),me=oe.defaultAttributeValues;for(const ye in ue){const Fe=ue[ye];if(Fe.location>=0){let st=ne[ye];if(st===void 0&&(ye==="instanceMatrix"&&H.instanceMatrix&&(st=H.instanceMatrix),ye==="instanceColor"&&H.instanceColor&&(st=H.instanceColor)),st!==void 0){const te=st.normalized,ve=st.itemSize,De=t.get(st);if(De===void 0)continue;const Je=De.buffer,He=De.type,Oe=De.bytesPerElement,at=n.isWebGL2===!0&&(He===i.INT||He===i.UNSIGNED_INT||st.gpuType===dm);if(st.isInterleavedBufferAttribute){const Xe=st.data,F=Xe.stride,Ae=st.offset;if(Xe.isInstancedInterleavedBuffer){for(let ie=0;ie<Fe.locationSize;ie++)G(Fe.location+ie,Xe.meshPerAttribute);H.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ie=0;ie<Fe.locationSize;ie++)R(Fe.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ie=0;ie<Fe.locationSize;ie++)C(Fe.location+ie,ve/Fe.locationSize,He,te,F*Oe,(Ae+ve/Fe.locationSize*ie)*Oe,at)}else{if(st.isInstancedBufferAttribute){for(let Xe=0;Xe<Fe.locationSize;Xe++)G(Fe.location+Xe,st.meshPerAttribute);H.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Xe=0;Xe<Fe.locationSize;Xe++)R(Fe.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Xe=0;Xe<Fe.locationSize;Xe++)C(Fe.location+Xe,ve/Fe.locationSize,He,te,ve*Oe,ve/Fe.locationSize*Xe*Oe,at)}}else if(me!==void 0){const te=me[ye];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Fe.location,te);break;case 3:i.vertexAttrib3fv(Fe.location,te);break;case 4:i.vertexAttrib4fv(Fe.location,te);break;default:i.vertexAttrib1fv(Fe.location,te)}}}}U()}function ae(){xe();for(const H in l){const oe=l[H];for(const Q in oe){const ce=oe[Q];for(const ne in ce)y(ce[ne].object),delete ce[ne];delete oe[Q]}delete l[H]}}function T(H){if(l[H.id]===void 0)return;const oe=l[H.id];for(const Q in oe){const ce=oe[Q];for(const ne in ce)y(ce[ne].object),delete ce[ne];delete oe[Q]}delete l[H.id]}function I(H){for(const oe in l){const Q=l[oe];if(Q[H.id]===void 0)continue;const ce=Q[H.id];for(const ne in ce)y(ce[ne].object),delete ce[ne];delete Q[H.id]}}function xe(){fe(),d=!0,f!==h&&(f=h,x(f.object))}function fe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:xe,resetDefaultState:fe,dispose:ae,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:R,disableUnusedAttributes:U}}function UA(i,e,t,n){const s=n.isWebGL2;let a;function c(d){a=d}function l(d,m){i.drawArrays(a,d,m),t.update(m,a,1)}function h(d,m,v){if(v===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,d,m,v),t.update(m,a,v)}function f(d,m,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v;y++)this.render(d[y],m[y]);else{x.multiDrawArraysWEBGL(a,d,0,m,0,v);let y=0;for(let E=0;E<v;E++)y+=m[E];t.update(y,a,1)}}this.setMode=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=f}function NA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=a(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=c||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=v>0,R=c||e.has("OES_texture_float"),G=M&&R,U=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:E,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:D,vertexTextures:M,floatFragmentTextures:R,floatVertexTextures:G,maxSamples:U}}function OA(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new cr,l=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||n!==0||s;return s=v,n=m.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=d(m,v,0)},this.setState=function(m,v,x){const y=m.clippingPlanes,E=m.clipIntersection,_=m.clipShadows,g=i.get(m);if(!s||y===null||y.length===0||a&&!_)a?d(null):f();else{const D=a?0:n,M=D*4;let R=g.clippingState||null;h.value=R,R=d(y,v,M,x);for(let G=0;G!==M;++G)R[G]=t[G];g.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,v,x,y){const E=m!==null?m.length:0;let _=null;if(E!==0){if(_=h.value,y!==!0||_===null){const g=x+E*4,D=v.matrixWorldInverse;l.getNormalMatrix(D),(_===null||_.length<g)&&(_=new Float32Array(g));for(let M=0,R=x;M!==E;++M,R+=4)c.copy(m[M]).applyMatrix4(D,l),c.normal.toArray(_,R),_[R+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function FA(i){let e=new WeakMap;function t(c,l){return l===xu?c.mapping=Os:l===yu&&(c.mapping=Fs),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===xu||l===yu)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new YE(h.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class BA extends Im{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,_p=[.125,.215,.35,.446,.526,.582],Nr=20,nu=new BA,vp=new Tt;let iu=null,ru=0,su=0;const Dr=(1+Math.sqrt(5))/2,ws=1/Dr,xp=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Dr,ws),new V(0,Dr,-ws),new V(ws,0,Dr),new V(-ws,0,Dr),new V(Dr,ws,0),new V(-Dr,ws,0)];class yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Eo,format:hi,colorSpace:_r,depthBuffer:!1},s=Sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zA(a)),this._blurMaterial=GA(a,e,t)}return s}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,n,s){const l=new kn(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,v=d.toneMapping;d.getClearColor(vp),d.toneMapping=dr,d.autoClear=!1;const x=new ll({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),y=new Vn(new Lo,x);let E=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,E=!0):(x.color.copy(vp),E=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(l.up.set(0,h[g],0),l.lookAt(f[g],0,0)):D===1?(l.up.set(0,0,h[g]),l.lookAt(0,f[g],0)):(l.up.set(0,h[g],0),l.lookAt(0,0,f[g]));const M=this._cubeSize;Ha(s,D*M,g>2?M:0,M,M),d.setRenderTarget(s),E&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=v,d.autoClear=m,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Os||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Vn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const h=this._cubeSize;Ha(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,nu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=xp[(s-1)%xp.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new Vn(this._lodPlanes[s],f),v=f.uniforms,x=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Nr-1),E=a/y,_=isFinite(a)?1+Math.floor(d*E):Nr;_>Nr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Nr}`);const g=[];let D=0;for(let C=0;C<Nr;++C){const W=C/E,ae=Math.exp(-W*W/2);g.push(ae),C===0?D+=ae:C<_&&(D+=2*ae)}for(let C=0;C<g.length;C++)g[C]=g[C]/D;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=g,v.latitudinal.value=c==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:M}=this;v.dTheta.value=y,v.mipInt.value=M-n;const R=this._sizeLods[s],G=3*R*(s>M-Ls?s-M+Ls:0),U=4*(this._cubeSize-R);Ha(t,G,U,3*R,2*R),h.setRenderTarget(t),h.render(m,nu)}}function zA(i){const e=[],t=[],n=[];let s=i;const a=i-Ls+1+_p.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let h=1/l;c>i-Ls?h=_p[c-i+Ls-1]:c===0&&(h=0),n.push(h);const f=1/(l-2),d=-f,m=1+f,v=[d,d,m,d,m,m,d,d,m,m,d,m],x=6,y=6,E=3,_=2,g=1,D=new Float32Array(E*y*x),M=new Float32Array(_*y*x),R=new Float32Array(g*y*x);for(let U=0;U<x;U++){const C=U%3*2/3-1,W=U>2?0:-1,ae=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];D.set(ae,E*y*U),M.set(v,_*y*U);const T=[U,U,U,U,U,U];R.set(T,g*y*U)}const G=new bi;G.setAttribute("position",new fi(D,E)),G.setAttribute("uv",new fi(M,_)),G.setAttribute("faceIndex",new fi(R,g)),e.push(G),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sp(i,e,t){const n=new zr(i,e,t);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function GA(i,e,t){const n=new Float32Array(Nr),s=new V(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Mp(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Ep(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function HA(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,f=h===xu||h===yu,d=h===Os||h===Fs;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new yp(i)),m=f?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{const m=l.image;if(f&&m&&m.height>0||d&&m&&s(m)){t===null&&(t=new yp(i));const v=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function s(l){let h=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&h++;return h===f}function a(l){const h=l.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function kA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function VA(i,e,t,n){const s={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const E=v.morphAttributes[y];for(let _=0,g=E.length;_<g;_++)e.remove(E[_])}v.removeEventListener("dispose",c),delete s[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function h(m){const v=m.attributes;for(const y in v)e.update(v[y],i.ARRAY_BUFFER);const x=m.morphAttributes;for(const y in x){const E=x[y];for(let _=0,g=E.length;_<g;_++)e.update(E[_],i.ARRAY_BUFFER)}}function f(m){const v=[],x=m.index,y=m.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let M=0,R=D.length;M<R;M+=3){const G=D[M+0],U=D[M+1],C=D[M+2];v.push(G,U,U,C,C,G)}}else if(y!==void 0){const D=y.array;E=y.version;for(let M=0,R=D.length/3-1;M<R;M+=3){const G=M+0,U=M+1,C=M+2;v.push(G,U,U,C,C,G)}}else return;const _=new(Mm(v)?Lm:Rm)(v,1);_.version=E;const g=a.get(m);g&&e.remove(g),a.set(m,_)}function d(m){const v=a.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&f(m)}else f(m);return a.get(m)}return{get:l,update:h,getWireframeAttribute:d}}function WA(i,e,t,n){const s=n.isWebGL2;let a;function c(x){a=x}let l,h;function f(x){l=x.type,h=x.bytesPerElement}function d(x,y){i.drawElements(a,y,l,x*h),t.update(y,a,1)}function m(x,y,E){if(E===0)return;let _,g;if(s)_=i,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](a,y,l,x*h,E),t.update(y,a,E)}function v(x,y,E){if(E===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<E;g++)this.render(x[g]/h,y[g]);else{_.multiDrawElementsWEBGL(a,y,0,l,x,0,E);let g=0;for(let D=0;D<E;D++)g+=y[D];t.update(g,a,1)}}this.setMode=c,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=v}function XA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qA(i,e){return i[0]-e[0]}function YA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function $A(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,c=new fn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function h(f,d,m){const v=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=y!==void 0?y.length:0;let _=a.get(d);if(_===void 0||_.count!==E){let fe=function(){I.dispose(),a.delete(d),d.removeEventListener("dispose",fe)};var x=fe;_!==void 0&&_.texture.dispose();const g=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let C=0;g===!0&&(C=1),D===!0&&(C=2),M===!0&&(C=3);let W=d.attributes.position.count*C,ae=1;W>e.maxTextureSize&&(ae=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const T=new Float32Array(W*ae*4*E),I=new Tm(T,W,ae,E);I.type=Mi,I.needsUpdate=!0;const xe=C*4;for(let H=0;H<E;H++){const oe=R[H],Q=G[H],ce=U[H],ne=W*ae*4*H;for(let ue=0;ue<oe.count;ue++){const me=ue*xe;g===!0&&(c.fromBufferAttribute(oe,ue),T[ne+me+0]=c.x,T[ne+me+1]=c.y,T[ne+me+2]=c.z,T[ne+me+3]=0),D===!0&&(c.fromBufferAttribute(Q,ue),T[ne+me+4]=c.x,T[ne+me+5]=c.y,T[ne+me+6]=c.z,T[ne+me+7]=0),M===!0&&(c.fromBufferAttribute(ce,ue),T[ne+me+8]=c.x,T[ne+me+9]=c.y,T[ne+me+10]=c.z,T[ne+me+11]=ce.itemSize===4?c.w:1)}}_={count:E,texture:I,size:new Ce(W,ae)},a.set(d,_),d.addEventListener("dispose",fe)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let g=0;for(let M=0;M<v.length;M++)g+=v[M];const D=d.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",D),m.getUniforms().setValue(i,"morphTargetInfluences",v)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const y=v===void 0?0:v.length;let E=n[d.id];if(E===void 0||E.length!==y){E=[];for(let R=0;R<y;R++)E[R]=[R,0];n[d.id]=E}for(let R=0;R<y;R++){const G=E[R];G[0]=R,G[1]=v[R]}E.sort(YA);for(let R=0;R<8;R++)R<y&&E[R][1]?(l[R][0]=E[R][0],l[R][1]=E[R][1]):(l[R][0]=Number.MAX_SAFE_INTEGER,l[R][1]=0);l.sort(qA);const _=d.morphAttributes.position,g=d.morphAttributes.normal;let D=0;for(let R=0;R<8;R++){const G=l[R],U=G[0],C=G[1];U!==Number.MAX_SAFE_INTEGER&&C?(_&&d.getAttribute("morphTarget"+R)!==_[U]&&d.setAttribute("morphTarget"+R,_[U]),g&&d.getAttribute("morphNormal"+R)!==g[U]&&d.setAttribute("morphNormal"+R,g[U]),s[R]=C,D+=C):(_&&d.hasAttribute("morphTarget"+R)===!0&&d.deleteAttribute("morphTarget"+R),g&&d.hasAttribute("morphNormal"+R)===!0&&d.deleteAttribute("morphNormal"+R),s[R]=0)}const M=d.morphTargetsRelative?1:1-D;m.getUniforms().setValue(i,"morphTargetBaseInfluence",M),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function KA(i,e,t,n){let s=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,m=e.get(h,d);if(s.get(m)!==f&&(e.update(m),s.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==f&&(v.update(),s.set(v,f))}return m}function c(){s=new WeakMap}function l(h){const f=h.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}class Om extends bn{constructor(e,t,n,s,a,c,l,h,f,d){if(d=d!==void 0?d:Br,d!==Br&&d!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Br&&(n=hr),n===void 0&&d===Bs&&(n=Fr),super(null,s,a,c,l,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:hn,this.minFilter=h!==void 0?h:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fm=new bn,Bm=new Om(1,1);Bm.compareFunction=Sm;const zm=new Tm,Gm=new LE,Hm=new Dm,bp=[],Tp=[],Ap=new Float32Array(16),wp=new Float32Array(9),Cp=new Float32Array(4);function Hs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=bp[s];if(a===void 0&&(a=new Float32Array(s),bp[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _l(i,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ZA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function JA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function jA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function ew(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Cp.set(n),i.uniformMatrix2fv(this.addr,!1,Cp),rn(t,n)}}function tw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;wp.set(n),i.uniformMatrix3fv(this.addr,!1,wp),rn(t,n)}}function nw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Ap.set(n),i.uniformMatrix4fv(this.addr,!1,Ap),rn(t,n)}}function iw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function hw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?Bm:Fm;t.setTexture2D(e||a,s)}function fw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gm,s)}function dw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hm,s)}function pw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zm,s)}function mw(i){switch(i){case 5126:return ZA;case 35664:return JA;case 35665:return jA;case 35666:return QA;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return pw}}function gw(i,e){i.uniform1fv(this.addr,e)}function _w(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function vw(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function xw(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function yw(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sw(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mw(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ew(i,e){i.uniform1iv(this.addr,e)}function bw(i,e){i.uniform2iv(this.addr,e)}function Tw(i,e){i.uniform3iv(this.addr,e)}function Aw(i,e){i.uniform4iv(this.addr,e)}function ww(i,e){i.uniform1uiv(this.addr,e)}function Cw(i,e){i.uniform2uiv(this.addr,e)}function Rw(i,e){i.uniform3uiv(this.addr,e)}function Lw(i,e){i.uniform4uiv(this.addr,e)}function Pw(i,e,t){const n=this.cache,s=e.length,a=_l(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Fm,a[c])}function Iw(i,e,t){const n=this.cache,s=e.length,a=_l(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Gm,a[c])}function Dw(i,e,t){const n=this.cache,s=e.length,a=_l(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Hm,a[c])}function Uw(i,e,t){const n=this.cache,s=e.length,a=_l(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||zm,a[c])}function Nw(i){switch(i){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return bw;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return ww;case 36294:return Cw;case 36295:return Rw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mw(t.type)}}class Fw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nw(t.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function Rp(i,e){i.seq.push(e),i.map[e.id]=e}function zw(i,e,t){const n=i.name,s=n.length;for(ou.lastIndex=0;;){const a=ou.exec(n),c=ou.lastIndex;let l=a[1];const h=a[2]==="]",f=a[3];if(h&&(l=l|0),f===void 0||f==="["&&c+2===s){Rp(t,f===void 0?new Ow(l,i,e):new Fw(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new Bw(l),Rp(t,m)),t=m}}}class ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);zw(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Lp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gw=37297;let Hw=0;function kw(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Vw(i){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(i);let n;switch(e===t?n="":e===rl&&t===il?n="LinearDisplayP3ToLinearSRGB":e===il&&t===rl&&(n="LinearSRGBToLinearDisplayP3"),i){case _r:case pl:return[n,"LinearTransferOETF"];case yi:case Gu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kw(i.getShaderSource(e),c)}else return s}function Ww(i,e){const t=Vw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xw(i,e){let t;switch(e){case BM:t="Linear";break;case zM:t="Reinhard";break;case GM:t="OptimizedCineon";break;case HM:t="ACESFilmic";break;case VM:t="AgX";break;case WM:t="Neutral";break;case kM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function Yw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function $w(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Ps(i){return i!==""}function Ip(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(Zw,jw)}const Jw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jw(i,e){let t=vt[e];if(t===void 0){const n=Jw.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(i){return i.replace(Qw,e1)}function e1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Np(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===um?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function n1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function r1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case FM:e="ENVMAP_BLENDING_ADD";break}return e}function s1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o1(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=t1(t),f=n1(t),d=i1(t),m=r1(t),v=s1(t),x=t.isWebGL2?"":qw(t),y=Yw(t),E=$w(a),_=s.createProgram();let g,D,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ps).join(`
`),g.length>0&&(g+=`
`),D=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ps).join(`
`),D.length>0&&(D+=`
`)):(g=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),D=[x,Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?vt.tonemapping_pars_fragment:"",t.toneMapping!==dr?Xw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Ww("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),c=Tu(c),c=Ip(c,t),c=Dp(c,t),l=Tu(l),l=Ip(l,t),l=Dp(l,t),c=Up(c),l=Up(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const R=M+g+c,G=M+D+l,U=Lp(s,s.VERTEX_SHADER,R),C=Lp(s,s.FRAGMENT_SHADER,G);s.attachShader(_,U),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function W(xe){if(i.debug.checkShaderErrors){const fe=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(U).trim(),oe=s.getShaderInfoLog(C).trim();let Q=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,C);else{const ne=Pp(s,U,"vertex"),ue=Pp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+xe.name+`
Material Type: `+xe.type+`

Program Info Log: `+fe+`
`+ne+`
`+ue)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(H===""||oe==="")&&(ce=!1);ce&&(xe.diagnostics={runnable:Q,programLog:fe,vertexShader:{log:H,prefix:g},fragmentShader:{log:oe,prefix:D}})}s.deleteShader(U),s.deleteShader(C),ae=new ja(s,_),T=Kw(s,_)}let ae;this.getUniforms=function(){return ae===void 0&&W(this),ae};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Gw)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=C,this}let a1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c1(e),t.set(e,n)),n}}class c1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function u1(i,e,t,n,s,a,c){const l=new wm,h=new l1,f=new Set,d=[],m=s.isWebGL2,v=s.logarithmicDepthBuffer,x=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return f.add(T),T===0?"uv":`uv${T}`}function g(T,I,xe,fe,H){const oe=fe.fog,Q=H.geometry,ce=T.isMeshStandardMaterial?fe.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),ue=ne&&ne.mapping===dl?ne.image.height:null,me=E[T.type];T.precision!==null&&(y=s.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const ye=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Fe=ye!==void 0?ye.length:0;let st=0;Q.morphAttributes.position!==void 0&&(st=1),Q.morphAttributes.normal!==void 0&&(st=2),Q.morphAttributes.color!==void 0&&(st=3);let te,ve,De,Je;if(me){const wt=Si[me];te=wt.vertexShader,ve=wt.fragmentShader}else te=T.vertexShader,ve=T.fragmentShader,h.update(T),De=h.getVertexShaderID(T),Je=h.getFragmentShaderID(T);const He=i.getRenderTarget(),Oe=H.isInstancedMesh===!0,at=H.isBatchedMesh===!0,Xe=!!T.map,F=!!T.matcap,Ae=!!ne,ie=!!T.aoMap,Ee=!!T.lightMap,pe=!!T.bumpMap,Pe=!!T.normalMap,Ue=!!T.displacementMap,ke=!!T.emissiveMap,ot=!!T.metalnessMap,P=!!T.roughnessMap,b=T.anisotropy>0,ee=T.clearcoat>0,re=T.iridescence>0,Se=T.sheen>0,ge=T.transmission>0,je=b&&!!T.anisotropyMap,Ke=ee&&!!T.clearcoatMap,we=ee&&!!T.clearcoatNormalMap,Re=ee&&!!T.clearcoatRoughnessMap,et=re&&!!T.iridescenceMap,Te=re&&!!T.iridescenceThicknessMap,Ot=Se&&!!T.sheenColorMap,ut=Se&&!!T.sheenRoughnessMap,Ze=!!T.specularMap,ze=!!T.specularColorMap,qe=!!T.specularIntensityMap,N=ge&&!!T.transmissionMap,de=ge&&!!T.thicknessMap,Ve=!!T.gradientMap,B=!!T.alphaMap,be=T.alphaTest>0,Y=!!T.alphaHash,Me=!!T.extensions;let Ne=dr;T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const gt={isWebGL2:m,shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:te,fragmentShader:ve,defines:T.defines,customVertexShaderID:De,customFragmentShaderID:Je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:at,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:_r,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:F,envMap:Ae,envMapMode:Ae&&ne.mapping,envMapCubeUVHeight:ue,aoMap:ie,lightMap:Ee,bumpMap:pe,normalMap:Pe,displacementMap:x&&Ue,emissiveMap:ke,normalMapObjectSpace:Pe&&T.normalMapType===tE,normalMapTangentSpace:Pe&&T.normalMapType===eE,metalnessMap:ot,roughnessMap:P,anisotropy:b,anisotropyMap:je,clearcoat:ee,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:Re,iridescence:re,iridescenceMap:et,iridescenceThicknessMap:Te,sheen:Se,sheenColorMap:Ot,sheenRoughnessMap:ut,specularMap:Ze,specularColorMap:ze,specularIntensityMap:qe,transmission:ge,transmissionMap:N,thicknessMap:de,gradientMap:Ve,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:be,alphaHash:Y,combine:T.combine,mapUv:Xe&&_(T.map.channel),aoMapUv:ie&&_(T.aoMap.channel),lightMapUv:Ee&&_(T.lightMap.channel),bumpMapUv:pe&&_(T.bumpMap.channel),normalMapUv:Pe&&_(T.normalMap.channel),displacementMapUv:Ue&&_(T.displacementMap.channel),emissiveMapUv:ke&&_(T.emissiveMap.channel),metalnessMapUv:ot&&_(T.metalnessMap.channel),roughnessMapUv:P&&_(T.roughnessMap.channel),anisotropyMapUv:je&&_(T.anisotropyMap.channel),clearcoatMapUv:Ke&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(T.sheenRoughnessMap.channel),specularMapUv:Ze&&_(T.specularMap.channel),specularColorMapUv:ze&&_(T.specularColorMap.channel),specularIntensityMapUv:qe&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:de&&_(T.thicknessMap.channel),alphaMapUv:B&&_(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Pe||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Xe||B),fog:!!oe,useFog:T.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:st,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&xe.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Wi,flipSided:T.side===Dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Me&&T.extensions.derivatives===!0,extensionFragDepth:Me&&T.extensions.fragDepth===!0,extensionDrawBuffers:Me&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=f.has(1),gt.vertexUv2s=f.has(2),gt.vertexUv3s=f.has(3),f.clear(),gt}function D(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const xe in T.defines)I.push(xe),I.push(T.defines[xe]);return T.isRawShaderMaterial===!1&&(M(I,T),R(I,T),I.push(i.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function M(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){l.disableAll(),I.isWebGL2&&l.enable(0),I.supportsVertexTextures&&l.enable(1),I.instancing&&l.enable(2),I.instancingColor&&l.enable(3),I.instancingMorph&&l.enable(4),I.matcap&&l.enable(5),I.envMap&&l.enable(6),I.normalMapObjectSpace&&l.enable(7),I.normalMapTangentSpace&&l.enable(8),I.clearcoat&&l.enable(9),I.iridescence&&l.enable(10),I.alphaTest&&l.enable(11),I.vertexColors&&l.enable(12),I.vertexAlphas&&l.enable(13),I.vertexUv1s&&l.enable(14),I.vertexUv2s&&l.enable(15),I.vertexUv3s&&l.enable(16),I.vertexTangents&&l.enable(17),I.anisotropy&&l.enable(18),I.alphaHash&&l.enable(19),I.batching&&l.enable(20),T.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.skinning&&l.enable(4),I.morphTargets&&l.enable(5),I.morphNormals&&l.enable(6),I.morphColors&&l.enable(7),I.premultipliedAlpha&&l.enable(8),I.shadowMapEnabled&&l.enable(9),I.useLegacyLights&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.transmission&&l.enable(15),I.sheen&&l.enable(16),I.opaque&&l.enable(17),I.pointsUvs&&l.enable(18),I.decodeVideoTexture&&l.enable(19),I.alphaToCoverage&&l.enable(20),T.push(l.mask)}function G(T){const I=E[T.type];let xe;if(I){const fe=Si[I];xe=VE.clone(fe.uniforms)}else xe=T.uniforms;return xe}function U(T,I){let xe;for(let fe=0,H=d.length;fe<H;fe++){const oe=d[fe];if(oe.cacheKey===I){xe=oe,++xe.usedTimes;break}}return xe===void 0&&(xe=new o1(i,I,T,a),d.push(xe)),xe}function C(T){if(--T.usedTimes===0){const I=d.indexOf(T);d[I]=d[d.length-1],d.pop(),T.destroy()}}function W(T){h.remove(T)}function ae(){h.dispose()}return{getParameters:g,getProgramCacheKey:D,getUniforms:G,acquireProgram:U,releaseProgram:C,releaseShaderCache:W,programs:d,dispose:ae}}function h1(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,l){i.get(a)[c]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function f1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fp(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(m,v,x,y,E,_){let g=i[e];return g===void 0?(g={id:m.id,object:m,geometry:v,material:x,groupOrder:y,renderOrder:m.renderOrder,z:E,group:_},i[e]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=x,g.groupOrder=y,g.renderOrder=m.renderOrder,g.z=E,g.group=_),e++,g}function l(m,v,x,y,E,_){const g=c(m,v,x,y,E,_);x.transmission>0?n.push(g):x.transparent===!0?s.push(g):t.push(g)}function h(m,v,x,y,E,_){const g=c(m,v,x,y,E,_);x.transmission>0?n.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function f(m,v){t.length>1&&t.sort(m||f1),n.length>1&&n.sort(v||Op),s.length>1&&s.sort(v||Op)}function d(){for(let m=e,v=i.length;m<v;m++){const x=i[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:h,finish:d,sort:f}}function d1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Fp,i.set(n,[c])):s>=a.length?(c=new Fp,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function p1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Tt};break;case"SpotLight":t={position:new V,direction:new V,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function m1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g1=0;function _1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v1(i,e){const t=new p1,n=m1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new V);const a=new V,c=new qt,l=new qt;function h(d,m){let v=0,x=0,y=0;for(let xe=0;xe<9;xe++)s.probe[xe].set(0,0,0);let E=0,_=0,g=0,D=0,M=0,R=0,G=0,U=0,C=0,W=0,ae=0;d.sort(_1);const T=m===!0?Math.PI:1;for(let xe=0,fe=d.length;xe<fe;xe++){const H=d[xe],oe=H.color,Q=H.intensity,ce=H.distance,ne=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=oe.r*Q*T,x+=oe.g*Q*T,y+=oe.b*Q*T;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(H.sh.coefficients[ue],Q);ae++}else if(H.isDirectionalLight){const ue=t.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const me=H.shadow,ye=n.get(H);ye.shadowBias=me.bias,ye.shadowNormalBias=me.normalBias,ye.shadowRadius=me.radius,ye.shadowMapSize=me.mapSize,s.directionalShadow[E]=ye,s.directionalShadowMap[E]=ne,s.directionalShadowMatrix[E]=H.shadow.matrix,R++}s.directional[E]=ue,E++}else if(H.isSpotLight){const ue=t.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy(oe).multiplyScalar(Q*T),ue.distance=ce,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,s.spot[g]=ue;const me=H.shadow;if(H.map&&(s.spotLightMap[C]=H.map,C++,me.updateMatrices(H),H.castShadow&&W++),s.spotLightMatrix[g]=me.matrix,H.castShadow){const ye=n.get(H);ye.shadowBias=me.bias,ye.shadowNormalBias=me.normalBias,ye.shadowRadius=me.radius,ye.shadowMapSize=me.mapSize,s.spotShadow[g]=ye,s.spotShadowMap[g]=ne,U++}g++}else if(H.isRectAreaLight){const ue=t.get(H);ue.color.copy(oe).multiplyScalar(Q),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),s.rectArea[D]=ue,D++}else if(H.isPointLight){const ue=t.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity*T),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const me=H.shadow,ye=n.get(H);ye.shadowBias=me.bias,ye.shadowNormalBias=me.normalBias,ye.shadowRadius=me.radius,ye.shadowMapSize=me.mapSize,ye.shadowCameraNear=me.camera.near,ye.shadowCameraFar=me.camera.far,s.pointShadow[_]=ye,s.pointShadowMap[_]=ne,s.pointShadowMatrix[_]=H.shadow.matrix,G++}s.point[_]=ue,_++}else if(H.isHemisphereLight){const ue=t.get(H);ue.skyColor.copy(H.color).multiplyScalar(Q*T),ue.groundColor.copy(H.groundColor).multiplyScalar(Q*T),s.hemi[M]=ue,M++}}D>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=y;const I=s.hash;(I.directionalLength!==E||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==D||I.hemiLength!==M||I.numDirectionalShadows!==R||I.numPointShadows!==G||I.numSpotShadows!==U||I.numSpotMaps!==C||I.numLightProbes!==ae)&&(s.directional.length=E,s.spot.length=g,s.rectArea.length=D,s.point.length=_,s.hemi.length=M,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=U+C-W,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=ae,I.directionalLength=E,I.pointLength=_,I.spotLength=g,I.rectAreaLength=D,I.hemiLength=M,I.numDirectionalShadows=R,I.numPointShadows=G,I.numSpotShadows=U,I.numSpotMaps=C,I.numLightProbes=ae,s.version=g1++)}function f(d,m){let v=0,x=0,y=0,E=0,_=0;const g=m.matrixWorldInverse;for(let D=0,M=d.length;D<M;D++){const R=d[D];if(R.isDirectionalLight){const G=s.directional[v];G.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),v++}else if(R.isSpotLight){const G=s.spot[y];G.position.setFromMatrixPosition(R.matrixWorld),G.position.applyMatrix4(g),G.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),y++}else if(R.isRectAreaLight){const G=s.rectArea[E];G.position.setFromMatrixPosition(R.matrixWorld),G.position.applyMatrix4(g),l.identity(),c.copy(R.matrixWorld),c.premultiply(g),l.extractRotation(c),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),G.halfWidth.applyMatrix4(l),G.halfHeight.applyMatrix4(l),E++}else if(R.isPointLight){const G=s.point[x];G.position.setFromMatrixPosition(R.matrixWorld),G.position.applyMatrix4(g),x++}else if(R.isHemisphereLight){const G=s.hemi[_];G.direction.setFromMatrixPosition(R.matrixWorld),G.direction.transformDirection(g),_++}}}return{setup:h,setupView:f,state:s}}function Bp(i,e){const t=new v1(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function c(m){n.push(m)}function l(m){s.push(m)}function h(m){t.setup(n,m)}function f(m){t.setupView(n,m)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:h,setupLightsView:f,pushLight:c,pushShadow:l}}function x1(i,e){let t=new WeakMap;function n(a,c=0){const l=t.get(a);let h;return l===void 0?(h=new Bp(i,e),t.set(a,[h])):c>=l.length?(h=new Bp(i,e),l.push(h)):h=l[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}class y1 extends ml{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S1 extends ml{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
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
}`;function b1(i,e,t){let n=new Um;const s=new Ce,a=new Ce,c=new fn,l=new y1({depthPacking:QM}),h=new S1,f={},d=t.maxTextureSize,m={[mr]:Dn,[Dn]:mr,[Wi]:Wi},v=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:M1,fragmentShader:E1}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new bi;y.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vn(y,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=um;let g=this.type;this.render=function(U,C,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||U.length===0)return;const ae=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),xe=i.state;xe.setBlending(fr),xe.buffers.color.setClear(1,1,1,1),xe.buffers.depth.setTest(!0),xe.setScissorTest(!1);const fe=g!==ki&&this.type===ki,H=g===ki&&this.type!==ki;for(let oe=0,Q=U.length;oe<Q;oe++){const ce=U[oe],ne=ce.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const ue=ne.getFrameExtents();if(s.multiply(ue),a.copy(ne.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/ue.x),s.x=a.x*ue.x,ne.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/ue.y),s.y=a.y*ue.y,ne.mapSize.y=a.y)),ne.map===null||fe===!0||H===!0){const ye=this.type!==ki?{minFilter:hn,magFilter:hn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new zr(s.x,s.y,ye),ne.map.texture.name=ce.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const me=ne.getViewportCount();for(let ye=0;ye<me;ye++){const Fe=ne.getViewport(ye);c.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),xe.viewport(c),ne.updateMatrices(ce,ye),n=ne.getFrustum(),R(C,W,ne.camera,ce,this.type)}ne.isPointLightShadow!==!0&&this.type===ki&&D(ne,W),ne.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(ae,T,I)};function D(U,C){const W=e.update(E);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new zr(s.x,s.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(C,null,W,v,E,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(C,null,W,x,E,null)}function M(U,C,W,ae){let T=null;const I=W.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)T=I;else if(T=W.isPointLight===!0?h:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const xe=T.uuid,fe=C.uuid;let H=f[xe];H===void 0&&(H={},f[xe]=H);let oe=H[fe];oe===void 0&&(oe=T.clone(),H[fe]=oe,C.addEventListener("dispose",G)),T=oe}if(T.visible=C.visible,T.wireframe=C.wireframe,ae===ki?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:m[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const xe=i.properties.get(T);xe.light=W}return T}function R(U,C,W,ae,T){if(U.visible===!1)return;if(U.layers.test(C.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===ki)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),H=U.material;if(Array.isArray(H)){const oe=fe.groups;for(let Q=0,ce=oe.length;Q<ce;Q++){const ne=oe[Q],ue=H[ne.materialIndex];if(ue&&ue.visible){const me=M(U,ue,ae,T);U.onBeforeShadow(i,U,C,W,fe,me,ne),i.renderBufferDirect(W,null,fe,me,U,ne),U.onAfterShadow(i,U,C,W,fe,me,ne)}}}else if(H.visible){const oe=M(U,H,ae,T);U.onBeforeShadow(i,U,C,W,fe,oe,null),i.renderBufferDirect(W,null,fe,oe,U,null),U.onAfterShadow(i,U,C,W,fe,oe,null)}}const xe=U.children;for(let fe=0,H=xe.length;fe<H;fe++)R(xe[fe],C,W,ae,T)}function G(U){U.target.removeEventListener("dispose",G);for(const W in f){const ae=f[W],T=U.target.uuid;T in ae&&(ae[T].dispose(),delete ae[T])}}}function T1(i,e,t){const n=t.isWebGL2;function s(){let B=!1;const be=new fn;let Y=null;const Me=new fn(0,0,0,0);return{setMask:function(Ne){Y!==Ne&&!B&&(i.colorMask(Ne,Ne,Ne,Ne),Y=Ne)},setLocked:function(Ne){B=Ne},setClear:function(Ne,gt,wt,Lt,Ht){Ht===!0&&(Ne*=Lt,gt*=Lt,wt*=Lt),be.set(Ne,gt,wt,Lt),Me.equals(be)===!1&&(i.clearColor(Ne,gt,wt,Lt),Me.copy(be))},reset:function(){B=!1,Y=null,Me.set(-1,0,0,0)}}}function a(){let B=!1,be=null,Y=null,Me=null;return{setTest:function(Ne){Ne?Oe(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Ne){be!==Ne&&!B&&(i.depthMask(Ne),be=Ne)},setFunc:function(Ne){if(Y!==Ne){switch(Ne){case RM:i.depthFunc(i.NEVER);break;case LM:i.depthFunc(i.ALWAYS);break;case PM:i.depthFunc(i.LESS);break;case tl:i.depthFunc(i.LEQUAL);break;case IM:i.depthFunc(i.EQUAL);break;case DM:i.depthFunc(i.GEQUAL);break;case UM:i.depthFunc(i.GREATER);break;case NM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=Ne}},setLocked:function(Ne){B=Ne},setClear:function(Ne){Me!==Ne&&(i.clearDepth(Ne),Me=Ne)},reset:function(){B=!1,be=null,Y=null,Me=null}}}function c(){let B=!1,be=null,Y=null,Me=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null;return{setTest:function(At){B||(At?Oe(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(At){be!==At&&!B&&(i.stencilMask(At),be=At)},setFunc:function(At,Pt,sn){(Y!==At||Me!==Pt||Ne!==sn)&&(i.stencilFunc(At,Pt,sn),Y=At,Me=Pt,Ne=sn)},setOp:function(At,Pt,sn){(gt!==At||wt!==Pt||Lt!==sn)&&(i.stencilOp(At,Pt,sn),gt=At,wt=Pt,Lt=sn)},setLocked:function(At){B=At},setClear:function(At){Ht!==At&&(i.clearStencil(At),Ht=At)},reset:function(){B=!1,be=null,Y=null,Me=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null}}}const l=new s,h=new a,f=new c,d=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,E=[],_=null,g=!1,D=null,M=null,R=null,G=null,U=null,C=null,W=null,ae=new Tt(0,0,0),T=0,I=!1,xe=null,fe=null,H=null,oe=null,Q=null;const ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ue=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(me)[1]),ne=ue>=1):me.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ne=ue>=2);let ye=null,Fe={};const st=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ve=new fn().fromArray(st),De=new fn().fromArray(te);function Je(B,be,Y,Me){const Ne=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Y;wt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(be,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(be+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return gt}const He={};He[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),f.setClear(0),Oe(i.DEPTH_TEST),h.setFunc(tl),Ue(!1),ke(_d),Oe(i.CULL_FACE),pe(fr);function Oe(B){v[B]!==!0&&(i.enable(B),v[B]=!0)}function at(B){v[B]!==!1&&(i.disable(B),v[B]=!1)}function Xe(B,be){return x[B]!==be?(i.bindFramebuffer(B,be),x[B]=be,n&&(B===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=be)),!0):!1}function F(B,be){let Y=E,Me=!1;if(B){Y=y.get(be),Y===void 0&&(Y=[],y.set(be,Y));const Ne=B.textures;if(Y.length!==Ne.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,wt=Ne.length;gt<wt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=Ne.length,Me=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Me=!0);if(Me)if(t.isWebGL2)i.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const ie={[Ur]:i.FUNC_ADD,[pM]:i.FUNC_SUBTRACT,[mM]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[Sd]=i.MIN,ie[Md]=i.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(ie[Sd]=B.MIN_EXT,ie[Md]=B.MAX_EXT)}const Ee={[gM]:i.ZERO,[_M]:i.ONE,[vM]:i.SRC_COLOR,[_u]:i.SRC_ALPHA,[bM]:i.SRC_ALPHA_SATURATE,[MM]:i.DST_COLOR,[yM]:i.DST_ALPHA,[xM]:i.ONE_MINUS_SRC_COLOR,[vu]:i.ONE_MINUS_SRC_ALPHA,[EM]:i.ONE_MINUS_DST_COLOR,[SM]:i.ONE_MINUS_DST_ALPHA,[TM]:i.CONSTANT_COLOR,[AM]:i.ONE_MINUS_CONSTANT_COLOR,[wM]:i.CONSTANT_ALPHA,[CM]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(B,be,Y,Me,Ne,gt,wt,Lt,Ht,At){if(B===fr){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(Oe(i.BLEND),g=!0),B!==dM){if(B!==D||At!==I){if((M!==Ur||U!==Ur)&&(i.blendEquation(i.FUNC_ADD),M=Ur,U=Ur),At)switch(B){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vd:i.blendFunc(i.ONE,i.ONE);break;case xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,G=null,C=null,W=null,ae.set(0,0,0),T=0,D=B,I=At}return}Ne=Ne||be,gt=gt||Y,wt=wt||Me,(be!==M||Ne!==U)&&(i.blendEquationSeparate(ie[be],ie[Ne]),M=be,U=Ne),(Y!==R||Me!==G||gt!==C||wt!==W)&&(i.blendFuncSeparate(Ee[Y],Ee[Me],Ee[gt],Ee[wt]),R=Y,G=Me,C=gt,W=wt),(Lt.equals(ae)===!1||Ht!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Ht),ae.copy(Lt),T=Ht),D=B,I=!1}function Pe(B,be){B.side===Wi?at(i.CULL_FACE):Oe(i.CULL_FACE);let Y=B.side===Dn;be&&(Y=!Y),Ue(Y),B.blending===Ds&&B.transparent===!1?pe(fr):pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),h.setFunc(B.depthFunc),h.setTest(B.depthTest),h.setMask(B.depthWrite),l.setMask(B.colorWrite);const Me=B.stencilWrite;f.setTest(Me),Me&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),P(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(B){xe!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),xe=B)}function ke(B){B!==uM?(Oe(i.CULL_FACE),B!==fe&&(B===_d?i.cullFace(i.BACK):B===hM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),fe=B}function ot(B){B!==H&&(ne&&i.lineWidth(B),H=B)}function P(B,be,Y){B?(Oe(i.POLYGON_OFFSET_FILL),(oe!==be||Q!==Y)&&(i.polygonOffset(be,Y),oe=be,Q=Y)):at(i.POLYGON_OFFSET_FILL)}function b(B){B?Oe(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function ee(B){B===void 0&&(B=i.TEXTURE0+ce-1),ye!==B&&(i.activeTexture(B),ye=B)}function re(B,be,Y){Y===void 0&&(ye===null?Y=i.TEXTURE0+ce-1:Y=ye);let Me=Fe[Y];Me===void 0&&(Me={type:void 0,texture:void 0},Fe[Y]=Me),(Me.type!==B||Me.texture!==be)&&(ye!==Y&&(i.activeTexture(Y),ye=Y),i.bindTexture(B,be||He[B]),Me.type=B,Me.texture=be)}function Se(){const B=Fe[ye];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){ve.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ve.copy(B))}function qe(B){De.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),De.copy(B))}function N(B,be){let Y=m.get(be);Y===void 0&&(Y=new WeakMap,m.set(be,Y));let Me=Y.get(B);Me===void 0&&(Me=i.getUniformBlockIndex(be,B.name),Y.set(B,Me))}function de(B,be){const Me=m.get(be).get(B);d.get(be)!==Me&&(i.uniformBlockBinding(be,Me,B.__bindingPointIndex),d.set(be,Me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},ye=null,Fe={},x={},y=new WeakMap,E=[],_=null,g=!1,D=null,M=null,R=null,G=null,U=null,C=null,W=null,ae=new Tt(0,0,0),T=0,I=!1,xe=null,fe=null,H=null,oe=null,Q=null,ve.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),l.reset(),h.reset(),f.reset()}return{buffers:{color:l,depth:h,stencil:f},enable:Oe,disable:at,bindFramebuffer:Xe,drawBuffers:F,useProgram:Ae,setBlending:pe,setMaterial:Pe,setFlipSided:Ue,setCullFace:ke,setLineWidth:ot,setPolygonOffset:P,setScissorTest:b,activeTexture:ee,bindTexture:re,unbindTexture:Se,compressedTexImage2D:ge,compressedTexImage3D:je,texImage2D:ut,texImage3D:Ze,updateUBOMapping:N,uniformBlockBinding:de,texStorage2D:Te,texStorage3D:Ot,texSubImage2D:Ke,texSubImage3D:we,compressedTexSubImage2D:Re,compressedTexSubImage3D:et,scissor:ze,viewport:qe,reset:Ve}}function A1(i,e,t,n,s,a,c){const l=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,m=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return y?new OffscreenCanvas(P,b):al("canvas")}function _(P,b,ee,re){let Se=1;const ge=ot(P);if((ge.width>re||ge.height>re)&&(Se=re/Math.max(ge.width,ge.height)),Se<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const je=b?ol:Math.floor,Ke=je(Se*ge.width),we=je(Se*ge.height);v===void 0&&(v=E(Ke,we));const Re=ee?E(Ke,we):v;return Re.width=Ke,Re.height=we,Re.getContext("2d").drawImage(P,0,0,Ke,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ke+"x"+we+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function g(P){const b=ot(P);return bu(b.width)&&bu(b.height)}function D(P){return l?!1:P.wrapS!==ui||P.wrapT!==ui||P.minFilter!==hn&&P.minFilter!==In}function M(P,b){return P.generateMipmaps&&b&&P.minFilter!==hn&&P.minFilter!==In}function R(P){i.generateMipmap(P)}function G(P,b,ee,re,Se=!1){if(l===!1)return b;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge=b;if(b===i.RED&&(ee===i.FLOAT&&(ge=i.R32F),ee===i.HALF_FLOAT&&(ge=i.R16F),ee===i.UNSIGNED_BYTE&&(ge=i.R8)),b===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ge=i.R8UI),ee===i.UNSIGNED_SHORT&&(ge=i.R16UI),ee===i.UNSIGNED_INT&&(ge=i.R32UI),ee===i.BYTE&&(ge=i.R8I),ee===i.SHORT&&(ge=i.R16I),ee===i.INT&&(ge=i.R32I)),b===i.RG&&(ee===i.FLOAT&&(ge=i.RG32F),ee===i.HALF_FLOAT&&(ge=i.RG16F),ee===i.UNSIGNED_BYTE&&(ge=i.RG8)),b===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ge=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ge=i.RG16UI),ee===i.UNSIGNED_INT&&(ge=i.RG32UI),ee===i.BYTE&&(ge=i.RG8I),ee===i.SHORT&&(ge=i.RG16I),ee===i.INT&&(ge=i.RG32I)),b===i.RGBA){const je=Se?nl:Dt.getTransfer(re);ee===i.FLOAT&&(ge=i.RGBA32F),ee===i.HALF_FLOAT&&(ge=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ge=je===Gt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function U(P,b,ee){return M(P,ee)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){return P===hn||P===Ed||P===co?i.NEAREST:i.LINEAR}function W(P){const b=P.target;b.removeEventListener("dispose",W),T(b),b.isVideoTexture&&m.delete(b)}function ae(P){const b=P.target;b.removeEventListener("dispose",ae),xe(b)}function T(P){const b=n.get(P);if(b.__webglInit===void 0)return;const ee=P.source,re=x.get(ee);if(re){const Se=re[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&I(P),Object.keys(re).length===0&&x.delete(ee)}n.remove(P)}function I(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const ee=P.source,re=x.get(ee);delete re[b.__cacheKey],c.memory.textures--}function xe(P){const b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let Se=0;Se<b.__webglFramebuffer[re].length;Se++)i.deleteFramebuffer(b.__webglFramebuffer[re][Se]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=P.textures;for(let re=0,Se=ee.length;re<Se;re++){const ge=n.get(ee[re]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),c.memory.textures--),n.remove(ee[re])}n.remove(P)}let fe=0;function H(){fe=0}function oe(){const P=fe;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),fe+=1,P}function Q(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ce(P,b){const ee=n.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ee,P,b);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+b)}function ne(P,b){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){De(ee,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+b)}function ue(P,b){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){De(ee,P,b);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+b)}function me(P,b){const ee=n.get(P);if(P.version>0&&ee.__version!==P.version){Je(ee,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+b)}const ye={[Su]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Mu]:i.MIRRORED_REPEAT},Fe={[hn]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Pc]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},st={[nE]:i.NEVER,[lE]:i.ALWAYS,[iE]:i.LESS,[Sm]:i.LEQUAL,[rE]:i.EQUAL,[aE]:i.GEQUAL,[sE]:i.GREATER,[oE]:i.NOTEQUAL};function te(P,b,ee){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Pc||b.magFilter===co||b.magFilter===Or||b.minFilter===In||b.minFilter===Pc||b.minFilter===co||b.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(i.texParameteri(P,i.TEXTURE_WRAP_S,ye[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ye[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ye[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Fe[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Fe[b.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==ui||b.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,C(b.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==hn&&b.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==co&&b.minFilter!==Or||b.type===Mi&&e.has("OES_texture_float_linear")===!1||l===!1&&b.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ve(P,b){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",W));const re=b.source;let Se=x.get(re);Se===void 0&&(Se={},x.set(re,Se));const ge=Q(b);if(ge!==P.__cacheKey){Se[ge]===void 0&&(Se[ge]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),Se[ge].usedTimes++;const je=Se[P.__cacheKey];je!==void 0&&(Se[P.__cacheKey].usedTimes--,je.usedTimes===0&&I(b)),P.__cacheKey=ge,P.__webglTexture=Se[ge].texture}return ee}function De(P,b,ee){let re=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=i.TEXTURE_3D);const Se=ve(P,b),ge=b.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+ee);const je=n.get(ge);if(ge.version!==je.__version||Se===!0){t.activeTexture(i.TEXTURE0+ee);const Ke=Dt.getPrimaries(Dt.workingColorSpace),we=b.colorSpace===ur?null:Dt.getPrimaries(b.colorSpace),Re=b.colorSpace===ur||Ke===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const et=D(b)&&g(b.image)===!1;let Te=_(b.image,et,!1,s.maxTextureSize);Te=ke(b,Te);const Ot=g(Te)||l,ut=a.convert(b.format,b.colorSpace);let Ze=a.convert(b.type),ze=G(b.internalFormat,ut,Ze,b.colorSpace,b.isVideoTexture);te(re,b,Ot);let qe;const N=b.mipmaps,de=l&&b.isVideoTexture!==!0&&ze!==ym,Ve=je.__version===void 0||Se===!0,B=ge.dataReady,be=U(b,Te,Ot);if(b.isDepthTexture)ze=i.DEPTH_COMPONENT,l?b.type===Mi?ze=i.DEPTH_COMPONENT32F:b.type===hr?ze=i.DEPTH_COMPONENT24:b.type===Fr?ze=i.DEPTH24_STENCIL8:ze=i.DEPTH_COMPONENT16:b.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Br&&ze===i.DEPTH_COMPONENT&&b.type!==zu&&b.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=hr,Ze=a.convert(b.type)),b.format===Bs&&ze===i.DEPTH_COMPONENT&&(ze=i.DEPTH_STENCIL,b.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Fr,Ze=a.convert(b.type))),Ve&&(de?t.texStorage2D(i.TEXTURE_2D,1,ze,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,ze,Te.width,Te.height,0,ut,Ze,null));else if(b.isDataTexture)if(N.length>0&&Ot){de&&Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,N[0].width,N[0].height);for(let Y=0,Me=N.length;Y<Me;Y++)qe=N[Y],de?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,Ze,qe.data):t.texImage2D(i.TEXTURE_2D,Y,ze,qe.width,qe.height,0,ut,Ze,qe.data);b.generateMipmaps=!1}else de?(Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,Te.width,Te.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,ut,Ze,Te.data)):t.texImage2D(i.TEXTURE_2D,0,ze,Te.width,Te.height,0,ut,Ze,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ze,N[0].width,N[0].height,Te.depth);for(let Y=0,Me=N.length;Y<Me;Y++)qe=N[Y],b.format!==hi?ut!==null?de?B&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,qe.width,qe.height,Te.depth,ut,qe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ze,qe.width,qe.height,Te.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,qe.width,qe.height,Te.depth,ut,Ze,qe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ze,qe.width,qe.height,Te.depth,0,ut,Ze,qe.data)}else{de&&Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,N[0].width,N[0].height);for(let Y=0,Me=N.length;Y<Me;Y++)qe=N[Y],b.format!==hi?ut!==null?de?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,qe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ze,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,Ze,qe.data):t.texImage2D(i.TEXTURE_2D,Y,ze,qe.width,qe.height,0,ut,Ze,qe.data)}else if(b.isDataArrayTexture)de?(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ze,Te.width,Te.height,Te.depth),B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ze,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,Te.width,Te.height,Te.depth,0,ut,Ze,Te.data);else if(b.isData3DTexture)de?(Ve&&t.texStorage3D(i.TEXTURE_3D,be,ze,Te.width,Te.height,Te.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ze,Te.data)):t.texImage3D(i.TEXTURE_3D,0,ze,Te.width,Te.height,Te.depth,0,ut,Ze,Te.data);else if(b.isFramebufferTexture){if(Ve)if(de)t.texStorage2D(i.TEXTURE_2D,be,ze,Te.width,Te.height);else{let Y=Te.width,Me=Te.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ze,Y,Me,0,ut,Ze,null),Y>>=1,Me>>=1}}else if(N.length>0&&Ot){if(de&&Ve){const Y=ot(N[0]);t.texStorage2D(i.TEXTURE_2D,be,ze,Y.width,Y.height)}for(let Y=0,Me=N.length;Y<Me;Y++)qe=N[Y],de?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ut,Ze,qe):t.texImage2D(i.TEXTURE_2D,Y,ze,ut,Ze,qe);b.generateMipmaps=!1}else if(de){if(Ve){const Y=ot(Te);t.texStorage2D(i.TEXTURE_2D,be,ze,Y.width,Y.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ze,Te)}else t.texImage2D(i.TEXTURE_2D,0,ze,ut,Ze,Te);M(b,Ot)&&R(re),je.__version=ge.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Je(P,b,ee){if(b.image.length!==6)return;const re=ve(P,b),Se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+ee);const ge=n.get(Se);if(Se.version!==ge.__version||re===!0){t.activeTexture(i.TEXTURE0+ee);const je=Dt.getPrimaries(Dt.workingColorSpace),Ke=b.colorSpace===ur?null:Dt.getPrimaries(b.colorSpace),we=b.colorSpace===ur||je===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let Y=0;Y<6;Y++)!Re&&!et?Te[Y]=_(b.image[Y],!1,!0,s.maxCubemapSize):Te[Y]=et?b.image[Y].image:b.image[Y],Te[Y]=ke(b,Te[Y]);const Ot=Te[0],ut=g(Ot)||l,Ze=a.convert(b.format,b.colorSpace),ze=a.convert(b.type),qe=G(b.internalFormat,Ze,ze,b.colorSpace),N=l&&b.isVideoTexture!==!0,de=ge.__version===void 0||re===!0,Ve=Se.dataReady;let B=U(b,Ot,ut);te(i.TEXTURE_CUBE_MAP,b,ut);let be;if(Re){N&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,B,qe,Ot.width,Ot.height);for(let Y=0;Y<6;Y++){be=Te[Y].mipmaps;for(let Me=0;Me<be.length;Me++){const Ne=be[Me];b.format!==hi?Ze!==null?N?Ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Ne.width,Ne.height,Ze,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Ne.width,Ne.height,Ze,ze,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,qe,Ne.width,Ne.height,0,Ze,ze,Ne.data)}}}else{if(be=b.mipmaps,N&&de){be.length>0&&B++;const Y=ot(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,B,qe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(et){N?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te[Y].width,Te[Y].height,Ze,ze,Te[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Te[Y].width,Te[Y].height,0,Ze,ze,Te[Y].data);for(let Me=0;Me<be.length;Me++){const gt=be[Me].image[Y].image;N?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,gt.width,gt.height,Ze,ze,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,qe,gt.width,gt.height,0,Ze,ze,gt.data)}}else{N?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ze,ze,Te[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Ze,ze,Te[Y]);for(let Me=0;Me<be.length;Me++){const Ne=be[Me];N?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,Ze,ze,Ne.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,qe,Ze,ze,Ne.image[Y])}}}M(b,ut)&&R(i.TEXTURE_CUBE_MAP),ge.__version=Se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function He(P,b,ee,re,Se,ge){const je=a.convert(ee.format,ee.colorSpace),Ke=a.convert(ee.type),we=G(ee.internalFormat,je,Ke,ee.colorSpace);if(!n.get(b).__hasExternalTextures){const et=Math.max(1,b.width>>ge),Te=Math.max(1,b.height>>ge);Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,ge,we,et,Te,b.depth,0,je,Ke,null):t.texImage2D(Se,ge,we,et,Te,0,je,Ke,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,Se,n.get(ee).__webglTexture,0,pe(b)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,Se,n.get(ee).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(P,b,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let re=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Pe(b)){const Se=b.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Mi?re=i.DEPTH_COMPONENT32F:Se.type===hr&&(re=i.DEPTH_COMPONENT24));const ge=pe(b);Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,re,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,re,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const re=pe(b);ee&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const re=b.textures;for(let Se=0;Se<re.length;Se++){const ge=re[Se],je=a.convert(ge.format,ge.colorSpace),Ke=a.convert(ge.type),we=G(ge.internalFormat,je,Ke,ge.colorSpace),Re=pe(b);ee&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const re=n.get(b.depthTexture).__webglTexture,Se=pe(b);if(b.depthTexture.format===Br)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===Bs)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const b=n.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,P)}else if(ee){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]=i.createRenderbuffer(),Oe(b.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Oe(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(P,b,ee){const re=n.get(P);b!==void 0&&He(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Xe(P)}function Ae(P){const b=P.texture,ee=n.get(P),re=n.get(b);P.addEventListener("dispose",ae);const Se=P.textures,ge=P.isWebGLCubeRenderTarget===!0,je=Se.length>1,Ke=g(P)||l;if(je||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=b.version,c.memory.textures++),ge){ee.__webglFramebuffer=[];for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[we]=[];for(let Re=0;Re<b.mipmaps.length;Re++)ee.__webglFramebuffer[we][Re]=i.createFramebuffer()}else ee.__webglFramebuffer[we]=i.createFramebuffer()}else{if(l&&b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)ee.__webglFramebuffer[we]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(je)if(s.drawBuffers)for(let we=0,Re=Se.length;we<Re;we++){const et=n.get(Se[we]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&P.samples>0&&Pe(P)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let we=0;we<Se.length;we++){const Re=Se[we];ee.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[we]);const et=a.convert(Re.format,Re.colorSpace),Te=a.convert(Re.type),Ot=G(Re.internalFormat,et,Te,Re.colorSpace,P.isXRRenderTarget===!0),ut=pe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Ot,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ee.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ke);for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)He(ee.__webglFramebuffer[we][Re],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else He(ee.__webglFramebuffer[we],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b,Ke)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let we=0,Re=Se.length;we<Re;we++){const et=Se[we],Te=n.get(et);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),te(i.TEXTURE_2D,et,Ke),He(ee.__webglFramebuffer,P,et,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),M(et,Ke)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(l?we=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,re.__webglTexture),te(we,b,Ke),l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)He(ee.__webglFramebuffer[Re],P,b,i.COLOR_ATTACHMENT0,we,Re);else He(ee.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,we,0);M(b,Ke)&&R(we),t.unbindTexture()}P.depthBuffer&&Xe(P)}function ie(P){const b=g(P)||l,ee=P.textures;for(let re=0,Se=ee.length;re<Se;re++){const ge=ee[re];if(M(ge,b)){const je=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ke=n.get(ge).__webglTexture;t.bindTexture(je,Ke),R(je),t.unbindTexture()}}}function Ee(P){if(l&&P.samples>0&&Pe(P)===!1){const b=P.textures,ee=P.width,re=P.height;let Se=i.COLOR_BUFFER_BIT;const ge=[],je=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ke=n.get(P),we=b.length>1;if(we)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){ge.push(i.COLOR_ATTACHMENT0+Re),P.depthBuffer&&ge.push(je);const et=Ke.__ignoreDepthValues!==void 0?Ke.__ignoreDepthValues:!1;if(et===!1&&(P.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Re]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[je])),we){const Te=n.get(b[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,ee,re,0,0,ee,re,Se,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ke.__webglColorRenderbuffer[Re]);const et=n.get(b[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}}function pe(P){return Math.min(s.maxSamples,P.samples)}function Pe(P){const b=n.get(P);return l&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(P){const b=c.render.frame;m.get(P)!==b&&(m.set(P,b),P.update())}function ke(P,b){const ee=P.colorSpace,re=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Eu||ee!==_r&&ee!==ur&&(Dt.getTransfer(ee)===Gt?l===!1?e.has("EXT_sRGB")===!0&&re===hi?(P.format=Eu,P.minFilter=In,P.generateMipmaps=!1):b=Em.sRGBToLinear(b):(re!==hi||Se!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=oe,this.resetTextureUnits=H,this.setTexture2D=ce,this.setTexture2DArray=ne,this.setTexture3D=ue,this.setTextureCube=me,this.rebindTextures=F,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Pe}function w1(i,e,t){const n=t.isWebGL2;function s(a,c=ur){let l;const h=Dt.getTransfer(c);if(a===pr)return i.UNSIGNED_BYTE;if(a===pm)return i.UNSIGNED_SHORT_4_4_4_4;if(a===mm)return i.UNSIGNED_SHORT_5_5_5_1;if(a===XM)return i.BYTE;if(a===qM)return i.SHORT;if(a===zu)return i.UNSIGNED_SHORT;if(a===dm)return i.INT;if(a===hr)return i.UNSIGNED_INT;if(a===Mi)return i.FLOAT;if(a===Eo)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===YM)return i.ALPHA;if(a===hi)return i.RGBA;if(a===$M)return i.LUMINANCE;if(a===KM)return i.LUMINANCE_ALPHA;if(a===Br)return i.DEPTH_COMPONENT;if(a===Bs)return i.DEPTH_STENCIL;if(a===Eu)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===gm)return i.RED;if(a===_m)return i.RED_INTEGER;if(a===ZM)return i.RG;if(a===vm)return i.RG_INTEGER;if(a===xm)return i.RGBA_INTEGER;if(a===Ic||a===Dc||a===Uc||a===Nc)if(h===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bd||a===Td||a===Ad||a===wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ym)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Cd||a===Rd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Cd)return h===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Rd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ld||a===Pd||a===Id||a===Dd||a===Ud||a===Nd||a===Od||a===Fd||a===Bd||a===zd||a===Gd||a===Hd||a===kd||a===Vd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ld)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Id)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ud)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Nd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Fd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===zd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Oc||a===Wd||a===Xd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Oc)return h===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===JM||a===qd||a===Yd||a===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Oc)return l.COMPRESSED_RED_RGTC1_EXT;if(a===qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fr?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class C1 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,n),g=this._getHandJoint(f,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],v=d.position.distanceTo(m.position),x=.02,y=.005;f.inputState.pinching&&v>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ka;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
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

}`;class I1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new bn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new gr({extensions:{fragDepth:!0},vertexShader:L1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new gl(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class D1 extends Vr{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",h=1,f=null,d=null,m=null,v=null,x=null,y=null;const E=new I1,_=t.getContextAttributes();let g=null,D=null;const M=[],R=[],G=new Ce;let U=null;const C=new kn;C.layers.enable(1),C.viewport=new fn;const W=new kn;W.layers.enable(2),W.viewport=new fn;const ae=[C,W],T=new C1;T.layers.enable(1),T.layers.enable(2);let I=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=M[te];return ve===void 0&&(ve=new au,M[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=M[te];return ve===void 0&&(ve=new au,M[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=M[te];return ve===void 0&&(ve=new au,M[te]=ve),ve.getHandSpace()};function fe(te){const ve=R.indexOf(te.inputSource);if(ve===-1)return;const De=M[ve];De!==void 0&&(De.update(te.inputSource,te.frame,f||c),De.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){s.removeEventListener("select",fe),s.removeEventListener("selectstart",fe),s.removeEventListener("selectend",fe),s.removeEventListener("squeeze",fe),s.removeEventListener("squeezestart",fe),s.removeEventListener("squeezeend",fe),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",oe);for(let te=0;te<M.length;te++){const ve=R[te];ve!==null&&(R[te]=null,M[te].disconnect(ve))}I=null,xe=null,E.reset(),e.setRenderTarget(g),x=null,v=null,m=null,s=null,D=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",fe),s.addEventListener("selectstart",fe),s.addEventListener("selectend",fe),s.addEventListener("squeeze",fe),s.addEventListener("squeezestart",fe),s.addEventListener("squeezeend",fe),s.addEventListener("end",H),s.addEventListener("inputsourceschange",oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ve={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new zr(x.framebufferWidth,x.framebufferHeight,{format:hi,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ve=null,De=null,Je=null;_.depth&&(Je=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?Bs:Br,De=_.stencil?Fr:hr);const He={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};m=new XRWebGLBinding(s,t),v=m.createProjectionLayer(He),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new zr(v.textureWidth,v.textureHeight,{format:hi,type:pr,depthTexture:new Om(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Oe=e.properties.get(D);Oe.__ignoreDepthValues=v.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(l),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function oe(te){for(let ve=0;ve<te.removed.length;ve++){const De=te.removed[ve],Je=R.indexOf(De);Je>=0&&(R[Je]=null,M[Je].disconnect(De))}for(let ve=0;ve<te.added.length;ve++){const De=te.added[ve];let Je=R.indexOf(De);if(Je===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=R.length){R.push(De),Je=Oe;break}else if(R[Oe]===null){R[Oe]=De,Je=Oe;break}if(Je===-1)break}const He=M[Je];He&&He.connect(De)}}const Q=new V,ce=new V;function ne(te,ve,De){Q.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(De.matrixWorld);const Je=Q.distanceTo(ce),He=ve.projectionMatrix.elements,Oe=De.projectionMatrix.elements,at=He[14]/(He[10]-1),Xe=He[14]/(He[10]+1),F=(He[9]+1)/He[5],Ae=(He[9]-1)/He[5],ie=(He[8]-1)/He[0],Ee=(Oe[8]+1)/Oe[0],pe=at*ie,Pe=at*Ee,Ue=Je/(-ie+Ee),ke=Ue*-ie;ve.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ke),te.translateZ(Ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const ot=at+Ue,P=Xe+Ue,b=pe-ke,ee=Pe+(Je-ke),re=F*Xe/P*ot,Se=Ae*Xe/P*ot;te.projectionMatrix.makePerspective(b,ee,re,Se,ot,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ue(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;E.texture!==null&&(te.near=E.depthNear,te.far=E.depthFar),T.near=W.near=C.near=te.near,T.far=W.far=C.far=te.far,(I!==T.near||xe!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,xe=T.far,C.near=I,C.far=xe,W.near=I,W.far=xe,C.updateProjectionMatrix(),W.updateProjectionMatrix(),te.updateProjectionMatrix());const ve=te.parent,De=T.cameras;ue(T,ve);for(let Je=0;Je<De.length;Je++)ue(De[Je],ve);De.length===2?ne(T,C,W):T.projectionMatrix.copy(C.projectionMatrix),me(te,T,ve)};function me(te,ve,De){De===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=bo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(te){h=te,v!==null&&(v.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return E.texture!==null};let ye=null;function Fe(te,ve){if(d=ve.getViewerPose(f||c),y=ve,d!==null){const De=d.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Je=!1;De.length!==T.cameras.length&&(T.cameras.length=0,Je=!0);for(let Oe=0;Oe<De.length;Oe++){const at=De[Oe];let Xe=null;if(x!==null)Xe=x.getViewport(at);else{const Ae=m.getViewSubImage(v,at);Xe=Ae.viewport,Oe===0&&(e.setRenderTargetTextures(D,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(D))}let F=ae[Oe];F===void 0&&(F=new kn,F.layers.enable(Oe),F.viewport=new fn,ae[Oe]=F),F.matrix.fromArray(at.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(at.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Oe===0&&(T.matrix.copy(F.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Je===!0&&T.cameras.push(F)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const Oe=m.getDepthInformation(De[0]);Oe&&Oe.isValid&&Oe.texture&&E.init(e,Oe,s.renderState)}}for(let De=0;De<M.length;De++){const Je=R[De],He=M[De];Je!==null&&He!==void 0&&He.update(Je,ve,f||c)}E.render(e,T),ye&&ye(te,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),y=null}const st=new Nm;st.setAnimationLoop(Fe),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Ir=new qi,U1=new qt;function N1(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Pm(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,D,M,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(_,g):g.isMeshToonMaterial?(a(_,g),m(_,g)):g.isMeshPhongMaterial?(a(_,g),d(_,g)):g.isMeshStandardMaterial?(a(_,g),v(_,g),g.isMeshPhysicalMaterial&&x(_,g,R)):g.isMeshMatcapMaterial?(a(_,g),y(_,g)):g.isMeshDepthMaterial?a(_,g):g.isMeshDistanceMaterial?(a(_,g),E(_,g)):g.isMeshNormalMaterial?a(_,g):g.isLineBasicMaterial?(c(_,g),g.isLineDashedMaterial&&l(_,g)):g.isPointsMaterial?h(_,g,D,M):g.isSpriteMaterial?f(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Dn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Dn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const D=e.get(g),M=D.envMap,R=D.envMapRotation;if(M&&(_.envMap.value=M,Ir.copy(R),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),_.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Ir)),_.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap){_.lightMap.value=g.lightMap;const G=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=g.lightMapIntensity*G,t(g.lightMap,_.lightMapTransform)}g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function l(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function h(_,g,D,M){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*D,_.scale.value=M*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function d(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function m(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function v(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),e.get(g).envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function x(_,g,D){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&_.clearcoatNormalScale.value.negate())),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const D=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O1(i,e,t,n){let s={},a={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,M){const R=M.program;n.uniformBlockBinding(D,R)}function f(D,M){let R=s[D.id];R===void 0&&(y(D),R=d(D),s[D.id]=R,D.addEventListener("dispose",_));const G=M.program;n.updateUBOMapping(D,G);const U=e.render.frame;a[D.id]!==U&&(v(D),a[D.id]=U)}function d(D){const M=m();D.__bindingPointIndex=M;const R=i.createBuffer(),G=D.__size,U=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,G,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function m(){for(let D=0;D<l;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const M=s[D.id],R=D.uniforms,G=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let U=0,C=R.length;U<C;U++){const W=Array.isArray(R[U])?R[U]:[R[U]];for(let ae=0,T=W.length;ae<T;ae++){const I=W[ae];if(x(I,U,ae,G)===!0){const xe=I.__offset,fe=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let oe=0;oe<fe.length;oe++){const Q=fe[oe],ce=E(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,xe+H,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,H),H+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,xe,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(D,M,R,G){const U=D.value,C=M+"_"+R;if(G[C]===void 0)return typeof U=="number"||typeof U=="boolean"?G[C]=U:G[C]=U.clone(),!0;{const W=G[C];if(typeof U=="number"||typeof U=="boolean"){if(W!==U)return G[C]=U,!0}else if(W.equals(U)===!1)return W.copy(U),!0}return!1}function y(D){const M=D.uniforms;let R=0;const G=16;for(let C=0,W=M.length;C<W;C++){const ae=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,I=ae.length;T<I;T++){const xe=ae[T],fe=Array.isArray(xe.value)?xe.value:[xe.value];for(let H=0,oe=fe.length;H<oe;H++){const Q=fe[H],ce=E(Q),ne=R%G;ne!==0&&G-ne<ce.boundary&&(R+=G-ne),xe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=R,R+=ce.storage}}}const U=R%G;return U>0&&(R+=G-U),D.__size=R,D.__cache={},this}function E(D){const M={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(M.boundary=4,M.storage=4):D.isVector2?(M.boundary=8,M.storage=8):D.isVector3||D.isColor?(M.boundary=16,M.storage=12):D.isVector4?(M.boundary=16,M.storage=16):D.isMatrix3?(M.boundary=48,M.storage=48):D.isMatrix4?(M.boundary=64,M.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),M}function _(D){const M=D.target;M.removeEventListener("dispose",_);const R=c.indexOf(M.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function g(){for(const D in s)i.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:h,update:f,dispose:g}}class Vu{constructor(e={}){const{canvas:t=bE(),context:n=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=c;const x=new Uint32Array(4),y=new Int32Array(4);let E=null,_=null;const g=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this._useLegacyLights=!1,this.toneMapping=dr,this.toneMappingExposure=1;const M=this;let R=!1,G=0,U=0,C=null,W=-1,ae=null;const T=new fn,I=new fn;let xe=null;const fe=new Tt(0);let H=0,oe=t.width,Q=t.height,ce=1,ne=null,ue=null;const me=new fn(0,0,oe,Q),ye=new fn(0,0,oe,Q);let Fe=!1;const st=new Um;let te=!1,ve=!1,De=null;const Je=new qt,He=new Ce,Oe=new V,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return C===null?ce:1}let F=n;function Ae(L,q){for(let Z=0;Z<L.length;Z++){const j=L[Z],K=t.getContext(j,q);if(K!==null)return K}return null}try{const L={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){const q=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&q.shift(),F=Ae(q,L),F===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ie,Ee,pe,Pe,Ue,ke,ot,P,b,ee,re,Se,ge,je,Ke,we,Re,et,Te,Ot,ut,Ze,ze,qe;function N(){ie=new kA(F),Ee=new NA(F,ie,e),ie.init(Ee),Ze=new w1(F,ie,Ee),pe=new T1(F,ie,Ee),Pe=new XA(F),Ue=new h1,ke=new A1(F,ie,pe,Ue,Ee,Ze,Pe),ot=new FA(M),P=new HA(M),b=new ZE(F,Ee),ze=new DA(F,ie,b,Ee),ee=new VA(F,b,Pe,ze),re=new KA(F,ee,b,Pe),Te=new $A(F,Ee,ke),we=new OA(Ue),Se=new u1(M,ot,P,ie,Ee,ze,we),ge=new N1(M,Ue),je=new d1,Ke=new x1(ie,Ee),et=new IA(M,ot,P,pe,re,v,h),Re=new b1(M,re,Ee),qe=new O1(F,Pe,Ee,pe),Ot=new UA(F,ie,Pe,Ee),ut=new WA(F,ie,Pe,Ee),Pe.programs=Se.programs,M.capabilities=Ee,M.extensions=ie,M.properties=Ue,M.renderLists=je,M.shadowMap=Re,M.state=pe,M.info=Pe}N();const de=new D1(M,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=ie.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ie.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(L){L!==void 0&&(ce=L,this.setSize(oe,Q,!1))},this.getSize=function(L){return L.set(oe,Q)},this.setSize=function(L,q,Z=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=L,Q=q,t.width=Math.floor(L*ce),t.height=Math.floor(q*ce),Z===!0&&(t.style.width=L+"px",t.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(oe*ce,Q*ce).floor()},this.setDrawingBufferSize=function(L,q,Z){oe=L,Q=q,ce=Z,t.width=Math.floor(L*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(me)},this.setViewport=function(L,q,Z,j){L.isVector4?me.set(L.x,L.y,L.z,L.w):me.set(L,q,Z,j),pe.viewport(T.copy(me).multiplyScalar(ce).round())},this.getScissor=function(L){return L.copy(ye)},this.setScissor=function(L,q,Z,j){L.isVector4?ye.set(L.x,L.y,L.z,L.w):ye.set(L,q,Z,j),pe.scissor(I.copy(ye).multiplyScalar(ce).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(L){pe.setScissorTest(Fe=L)},this.setOpaqueSort=function(L){ne=L},this.setTransparentSort=function(L){ue=L},this.getClearColor=function(L){return L.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(L=!0,q=!0,Z=!0){let j=0;if(L){let K=!1;if(C!==null){const Be=C.texture.format;K=Be===xm||Be===vm||Be===_m}if(K){const Be=C.texture.type,Ye=Be===pr||Be===hr||Be===zu||Be===Fr||Be===pm||Be===mm,tt=et.getClearColor(),nt=et.getClearAlpha(),pt=tt.r,lt=tt.g,ht=tt.b;Ye?(x[0]=pt,x[1]=lt,x[2]=ht,x[3]=nt,F.clearBufferuiv(F.COLOR,0,x)):(y[0]=pt,y[1]=lt,y[2]=ht,y[3]=nt,F.clearBufferiv(F.COLOR,0,y))}else j|=F.COLOR_BUFFER_BIT}q&&(j|=F.DEPTH_BUFFER_BIT),Z&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",be,!1),je.dispose(),Ke.dispose(),Ue.dispose(),ot.dispose(),P.dispose(),re.dispose(),ze.dispose(),qe.dispose(),Se.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ht),de.removeEventListener("sessionend",At),De&&(De.dispose(),De=null),Pt.stop()};function Ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const L=Pe.autoReset,q=Re.enabled,Z=Re.autoUpdate,j=Re.needsUpdate,K=Re.type;N(),Pe.autoReset=L,Re.enabled=q,Re.autoUpdate=Z,Re.needsUpdate=j,Re.type=K}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Y(L){const q=L.target;q.removeEventListener("dispose",Y),Me(q)}function Me(L){Ne(L),Ue.remove(L)}function Ne(L){const q=Ue.get(L).programs;q!==void 0&&(q.forEach(function(Z){Se.releaseProgram(Z)}),L.isShaderMaterial&&Se.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,Z,j,K,Be){q===null&&(q=at);const Ye=K.isMesh&&K.matrixWorld.determinant()<0,tt=Sl(L,q,Z,j,K);pe.setMaterial(j,Ye);let nt=Z.index,pt=1;if(j.wireframe===!0){if(nt=ee.getWireframeAttribute(Z),nt===void 0)return;pt=2}const lt=Z.drawRange,ht=Z.attributes.position;let kt=lt.start*pt,dn=(lt.start+lt.count)*pt;Be!==null&&(kt=Math.max(kt,Be.start*pt),dn=Math.min(dn,(Be.start+Be.count)*pt)),nt!==null?(kt=Math.max(kt,0),dn=Math.min(dn,nt.count)):ht!=null&&(kt=Math.max(kt,0),dn=Math.min(dn,ht.count));const $t=dn-kt;if($t<0||$t===1/0)return;ze.setup(K,j,tt,Z,nt);let ti,Bt=Ot;if(nt!==null&&(ti=b.get(nt),Bt=ut,Bt.setIndex(ti)),K.isMesh)j.wireframe===!0?(pe.setLineWidth(j.wireframeLinewidth*Xe()),Bt.setMode(F.LINES)):Bt.setMode(F.TRIANGLES);else if(K.isLine){let dt=j.linewidth;dt===void 0&&(dt=1),pe.setLineWidth(dt*Xe()),K.isLineSegments?Bt.setMode(F.LINES):K.isLineLoop?Bt.setMode(F.LINE_LOOP):Bt.setMode(F.LINE_STRIP)}else K.isPoints?Bt.setMode(F.POINTS):K.isSprite&&Bt.setMode(F.TRIANGLES);if(K.isBatchedMesh)Bt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Bt.renderInstances(kt,$t,K.count);else if(Z.isInstancedBufferGeometry){const dt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Xs=Math.min(Z.instanceCount,dt);Bt.renderInstances(kt,$t,Xs)}else Bt.render(kt,$t)};function gt(L,q,Z){L.transparent===!0&&L.side===Wi&&L.forceSinglePass===!1?(L.side=Dn,L.needsUpdate=!0,$r(L,q,Z),L.side=mr,L.needsUpdate=!0,$r(L,q,Z),L.side=Wi):$r(L,q,Z)}this.compile=function(L,q,Z=null){Z===null&&(Z=L),_=Ke.get(Z),_.init(),D.push(_),Z.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),L!==Z&&L.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(M._useLegacyLights);const j=new Set;return L.traverse(function(K){const Be=K.material;if(Be)if(Array.isArray(Be))for(let Ye=0;Ye<Be.length;Ye++){const tt=Be[Ye];gt(tt,Z,K),j.add(tt)}else gt(Be,Z,K),j.add(Be)}),D.pop(),_=null,j},this.compileAsync=function(L,q,Z=null){const j=this.compile(L,q,Z);return new Promise(K=>{function Be(){if(j.forEach(function(Ye){Ue.get(Ye).currentProgram.isReady()&&j.delete(Ye)}),j.size===0){K(L);return}setTimeout(Be,10)}ie.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let wt=null;function Lt(L){wt&&wt(L)}function Ht(){Pt.stop()}function At(){Pt.start()}const Pt=new Nm;Pt.setAnimationLoop(Lt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(L){wt=L,de.setAnimationLoop(L),L===null?Pt.stop():Pt.start()},de.addEventListener("sessionstart",Ht),de.addEventListener("sessionend",At),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(q),q=de.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,q,C),_=Ke.get(L,D.length),_.init(),D.push(_),Je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Je),ve=this.localClippingEnabled,te=we.init(this.clippingPlanes,ve),E=je.get(L,g.length),E.init(),g.push(E),sn(L,q,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ne,ue),this.info.render.frame++,te===!0&&we.beginShadows();const Z=_.state.shadowsArray;if(Re.render(Z,L,q),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&et.render(E,L),_.setupLights(M._useLegacyLights),q.isArrayCamera){const j=q.cameras;for(let K=0,Be=j.length;K<Be;K++){const Ye=j[K];ei(E,L,Ye,Ye.viewport)}}else ei(E,L,q);C!==null&&(ke.updateMultisampleRenderTarget(C),ke.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(M,L,q),ze.resetDefaultState(),W=-1,ae=null,D.pop(),D.length>0?_=D[D.length-1]:_=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function sn(L,q,Z,j){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||st.intersectsSprite(L)){j&&Oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Je);const Ye=re.update(L),tt=L.material;tt.visible&&E.push(L,Ye,tt,Z,Oe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||st.intersectsObject(L))){const Ye=re.update(L),tt=L.material;if(j&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Oe.copy(L.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Oe.copy(Ye.boundingSphere.center)),Oe.applyMatrix4(L.matrixWorld).applyMatrix4(Je)),Array.isArray(tt)){const nt=Ye.groups;for(let pt=0,lt=nt.length;pt<lt;pt++){const ht=nt[pt],kt=tt[ht.materialIndex];kt&&kt.visible&&E.push(L,Ye,kt,Z,Oe.z,ht)}}else tt.visible&&E.push(L,Ye,tt,Z,Oe.z,null)}}const Be=L.children;for(let Ye=0,tt=Be.length;Ye<tt;Ye++)sn(Be[Ye],q,Z,j)}function ei(L,q,Z,j){const K=L.opaque,Be=L.transmissive,Ye=L.transparent;_.setupLightsView(Z),te===!0&&we.setGlobalState(M.clippingPlanes,Z),Be.length>0&&qr(K,Be,q,Z),j&&pe.viewport(T.copy(j)),K.length>0&&Yr(K,q,Z),Be.length>0&&Yr(Be,q,Z),Ye.length>0&&Yr(Ye,q,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function qr(L,q,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Be=Ee.isWebGL2;De===null&&(De=new zr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?Eo:pr,minFilter:Or,samples:Be?4:0})),M.getDrawingBufferSize(He),Be?De.setSize(He.x,He.y):De.setSize(ol(He.x),ol(He.y));const Ye=M.getRenderTarget();M.setRenderTarget(De),M.getClearColor(fe),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const tt=M.toneMapping;M.toneMapping=dr,Yr(L,Z,j),ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De);let nt=!1;for(let pt=0,lt=q.length;pt<lt;pt++){const ht=q[pt],kt=ht.object,dn=ht.geometry,$t=ht.material,ti=ht.group;if($t.side===Wi&&kt.layers.test(j.layers)){const Bt=$t.side;$t.side=Dn,$t.needsUpdate=!0,Po(kt,Z,j,dn,$t,ti),$t.side=Bt,$t.needsUpdate=!0,nt=!0}}nt===!0&&(ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De)),M.setRenderTarget(Ye),M.setClearColor(fe,H),M.toneMapping=tt}function Yr(L,q,Z){const j=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Be=L.length;K<Be;K++){const Ye=L[K],tt=Ye.object,nt=Ye.geometry,pt=j===null?Ye.material:j,lt=Ye.group;tt.layers.test(Z.layers)&&Po(tt,q,Z,nt,pt,lt)}}function Po(L,q,Z,j,K,Be){L.onBeforeRender(M,q,Z,j,K,Be),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(M,q,Z,j,L,Be),K.transparent===!0&&K.side===Wi&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,M.renderBufferDirect(Z,q,j,K,L,Be),K.side=mr,K.needsUpdate=!0,M.renderBufferDirect(Z,q,j,K,L,Be),K.side=Wi):M.renderBufferDirect(Z,q,j,K,L,Be),L.onAfterRender(M,q,Z,j,K,Be)}function $r(L,q,Z){q.isScene!==!0&&(q=at);const j=Ue.get(L),K=_.state.lights,Be=_.state.shadowsArray,Ye=K.state.version,tt=Se.getParameters(L,K.state,Be,q,Z),nt=Se.getProgramCacheKey(tt);let pt=j.programs;j.environment=L.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=(L.isMeshStandardMaterial?P:ot).get(L.envMap||j.environment),j.envMapRotation=j.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,pt===void 0&&(L.addEventListener("dispose",Y),pt=new Map,j.programs=pt);let lt=pt.get(nt);if(lt!==void 0){if(j.currentProgram===lt&&j.lightsStateVersion===Ye)return Do(L,tt),lt}else tt.uniforms=Se.getUniforms(L),L.onBuild(Z,tt,M),L.onBeforeCompile(tt,M),lt=Se.acquireProgram(tt,nt),pt.set(nt,lt),j.uniforms=tt.uniforms;const ht=j.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ht.clippingPlanes=we.uniform),Do(L,tt),j.needsLights=Uo(L),j.lightsStateVersion=Ye,j.needsLights&&(ht.ambientLightColor.value=K.state.ambient,ht.lightProbe.value=K.state.probe,ht.directionalLights.value=K.state.directional,ht.directionalLightShadows.value=K.state.directionalShadow,ht.spotLights.value=K.state.spot,ht.spotLightShadows.value=K.state.spotShadow,ht.rectAreaLights.value=K.state.rectArea,ht.ltc_1.value=K.state.rectAreaLTC1,ht.ltc_2.value=K.state.rectAreaLTC2,ht.pointLights.value=K.state.point,ht.pointLightShadows.value=K.state.pointShadow,ht.hemisphereLights.value=K.state.hemi,ht.directionalShadowMap.value=K.state.directionalShadowMap,ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ht.spotShadowMap.value=K.state.spotShadowMap,ht.spotLightMatrix.value=K.state.spotLightMatrix,ht.spotLightMap.value=K.state.spotLightMap,ht.pointShadowMap.value=K.state.pointShadowMap,ht.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=lt,j.uniformsList=null,lt}function Io(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=ja.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function Do(L,q){const Z=Ue.get(L);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.instancingMorph=q.instancingMorph,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Sl(L,q,Z,j,K){q.isScene!==!0&&(q=at),ke.resetTextureUnits();const Be=q.fog,Ye=j.isMeshStandardMaterial?q.environment:null,tt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_r,nt=(j.isMeshStandardMaterial?P:ot).get(j.envMap||Ye),pt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,lt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ht=!!Z.morphAttributes.position,kt=!!Z.morphAttributes.normal,dn=!!Z.morphAttributes.color;let $t=dr;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&($t=M.toneMapping);const ti=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=ti!==void 0?ti.length:0,dt=Ue.get(j),Xs=_.state.lights;if(te===!0&&(ve===!0||L!==ae)){const wn=L===ae&&j.id===W;we.setState(j,L,wn)}let Ut=!1;j.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Xs.state.version||dt.outputColorSpace!==tt||K.isBatchedMesh&&dt.batching===!1||!K.isBatchedMesh&&dt.batching===!0||K.isInstancedMesh&&dt.instancing===!1||!K.isInstancedMesh&&dt.instancing===!0||K.isSkinnedMesh&&dt.skinning===!1||!K.isSkinnedMesh&&dt.skinning===!0||K.isInstancedMesh&&dt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&dt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&dt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&dt.instancingMorph===!1&&K.morphTexture!==null||dt.envMap!==nt||j.fog===!0&&dt.fog!==Be||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==we.numPlanes||dt.numIntersection!==we.numIntersection)||dt.vertexAlphas!==pt||dt.vertexTangents!==lt||dt.morphTargets!==ht||dt.morphNormals!==kt||dt.morphColors!==dn||dt.toneMapping!==$t||Ee.isWebGL2===!0&&dt.morphTargetsCount!==Bt)&&(Ut=!0):(Ut=!0,dt.__version=j.version);let pi=dt.currentProgram;Ut===!0&&(pi=$r(j,q,K));let qs=!1,Ai=!1,Ys=!1;const Qt=pi.getUniforms(),Wn=dt.uniforms;if(pe.useProgram(pi.program)&&(qs=!0,Ai=!0,Ys=!0),j.id!==W&&(W=j.id,Ai=!0),qs||ae!==L){Qt.setValue(F,"projectionMatrix",L.projectionMatrix),Qt.setValue(F,"viewMatrix",L.matrixWorldInverse);const wn=Qt.map.cameraPosition;wn!==void 0&&wn.setValue(F,Oe.setFromMatrixPosition(L.matrixWorld)),Ee.logarithmicDepthBuffer&&Qt.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Qt.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),ae!==L&&(ae=L,Ai=!0,Ys=!0)}if(K.isSkinnedMesh){Qt.setOptional(F,K,"bindMatrix"),Qt.setOptional(F,K,"bindMatrixInverse");const wn=K.skeleton;wn&&(Ee.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Qt.setValue(F,"boneTexture",wn.boneTexture,ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Qt.setOptional(F,K,"batchingTexture"),Qt.setValue(F,"batchingTexture",K._matricesTexture,ke));const Kr=Z.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0&&Ee.isWebGL2===!0)&&Te.update(K,Z,pi),(Ai||dt.receiveShadow!==K.receiveShadow)&&(dt.receiveShadow=K.receiveShadow,Qt.setValue(F,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=nt,Wn.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Ai&&(Qt.setValue(F,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&Ml(Wn,Ys),Be&&j.fog===!0&&ge.refreshFogUniforms(Wn,Be),ge.refreshMaterialUniforms(Wn,j,ce,Q,De),ja.upload(F,Io(dt),Wn,ke)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ja.upload(F,Io(dt),Wn,ke),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Qt.setValue(F,"center",K.center),Qt.setValue(F,"modelViewMatrix",K.modelViewMatrix),Qt.setValue(F,"normalMatrix",K.normalMatrix),Qt.setValue(F,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const wn=j.uniformsGroups;for(let Zr=0,No=wn.length;Zr<No;Zr++)if(Ee.isWebGL2){const Jr=wn[Zr];qe.update(Jr,pi),qe.bind(Jr,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Ml(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Uo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,q,Z){Ue.get(L.texture).__webglTexture=q,Ue.get(L.depthTexture).__webglTexture=Z;const j=Ue.get(L);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,q){const Z=Ue.get(L);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,Z=0){C=L,G=q,U=Z;let j=!0,K=null,Be=!1,Ye=!1;if(L){const nt=Ue.get(L);nt.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):nt.__webglFramebuffer===void 0?ke.setupRenderTarget(L):nt.__hasExternalTextures&&ke.rebindTextures(L,Ue.get(L.texture).__webglTexture,Ue.get(L.depthTexture).__webglTexture);const pt=L.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ye=!0);const lt=Ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(lt[q])?K=lt[q][Z]:K=lt[q],Be=!0):Ee.isWebGL2&&L.samples>0&&ke.useMultisampledRTT(L)===!1?K=Ue.get(L).__webglMultisampledFramebuffer:Array.isArray(lt)?K=lt[Z]:K=lt,T.copy(L.viewport),I.copy(L.scissor),xe=L.scissorTest}else T.copy(me).multiplyScalar(ce).floor(),I.copy(ye).multiplyScalar(ce).floor(),xe=Fe;if(pe.bindFramebuffer(F.FRAMEBUFFER,K)&&Ee.drawBuffers&&j&&pe.drawBuffers(L,K),pe.viewport(T),pe.scissor(I),pe.setScissorTest(xe),Be){const nt=Ue.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt.__webglTexture,Z)}else if(Ye){const nt=Ue.get(L.texture),pt=q||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,nt.__webglTexture,Z||0,pt)}W=-1},this.readRenderTargetPixels=function(L,q,Z,j,K,Be,Ye){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){pe.bindFramebuffer(F.FRAMEBUFFER,tt);try{const nt=L.texture,pt=nt.format,lt=nt.type;if(pt!==hi&&Ze.convert(pt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=lt===Eo&&(ie.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ie.has("EXT_color_buffer_float"));if(lt!==pr&&Ze.convert(lt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Mi&&(Ee.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-j&&Z>=0&&Z<=L.height-K&&F.readPixels(q,Z,j,K,Ze.convert(pt),Ze.convert(lt),Be)}finally{const nt=C!==null?Ue.get(C).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(L,q,Z=0){const j=Math.pow(2,-Z),K=Math.floor(q.image.width*j),Be=Math.floor(q.image.height*j);ke.setTexture2D(q,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,L.x,L.y,K,Be),pe.unbindTexture()},this.copyTextureToTexture=function(L,q,Z,j=0){const K=q.image.width,Be=q.image.height,Ye=Ze.convert(Z.format),tt=Ze.convert(Z.type);ke.setTexture2D(Z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment),q.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,L.x,L.y,K,Be,Ye,tt,q.image.data):q.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,L.x,L.y,q.mipmaps[0].width,q.mipmaps[0].height,Ye,q.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,L.x,L.y,Ye,tt,q.image),j===0&&Z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(L,q,Z,j,K=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=Math.round(L.max.x-L.min.x),Ye=Math.round(L.max.y-L.min.y),tt=L.max.z-L.min.z+1,nt=Ze.convert(j.format),pt=Ze.convert(j.type);let lt;if(j.isData3DTexture)ke.setTexture3D(j,0),lt=F.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)ke.setTexture2DArray(j,0),lt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dn=F.getParameter(F.UNPACK_SKIP_PIXELS),$t=F.getParameter(F.UNPACK_SKIP_ROWS),ti=F.getParameter(F.UNPACK_SKIP_IMAGES),Bt=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,L.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,L.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,L.min.z),Z.isDataTexture||Z.isData3DTexture?F.texSubImage3D(lt,K,q.x,q.y,q.z,Be,Ye,tt,nt,pt,Bt.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(lt,K,q.x,q.y,q.z,Be,Ye,tt,nt,Bt.data):F.texSubImage3D(lt,K,q.x,q.y,q.z,Be,Ye,tt,nt,pt,Bt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ti),K===0&&j.generateMipmaps&&F.generateMipmap(lt),pe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?ke.setTextureCube(L,0):L.isData3DTexture?ke.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ke.setTexture2DArray(L,0):ke.setTexture2D(L,0),pe.unbindTexture()},this.resetState=function(){G=0,U=0,C=null,pe.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gu?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===pl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class F1 extends Vu{}F1.prototype.isWebGL1Renderer=!0;class B1 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z1 extends bn{constructor(e=null,t=1,n=1,s,a,c,l,h,f=hn,d=hn,m,v){super(null,c,l,h,f,d,s,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zp extends fi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new qt,Gp=new qt,Va=[],Hp=new Xr,G1=new qt,mo=new Vn,go=new Ro;class kp extends Vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Hp.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Hp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ro),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),go.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,c=e*a+1;for(let l=0;l<n.length;l++)n[l]=s[c+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),e.ray.intersectsSphere(go)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Cs),Gp.multiplyMatrices(n,Cs),mo.matrixWorld=Gp,mo.raycast(e,Va);for(let c=0,l=Va.length;c<l;c++){const h=Va[c];h.instanceId=a,h.object=this,t.push(h)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new z1(new Float32Array(s*this.count),s,this.count,gm,Mi));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<n.length;f++)c+=n[f];const l=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=l,a.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let c;t?c=t:c=e*n[a-1];let l=0,h=a-1,f;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),f=n[s]-c,f<0)l=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(a-1);const d=n[s],v=n[s+1]-d,x=(c-d)/v;return(s+x)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),l=this.getPoint(a),h=t||(c.isVector2?new Ce:new V);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,s=[],a=[],c=[],l=new V,h=new qt;for(let x=0;x<=e;x++){const y=x/e;s[x]=this.getTangentAt(y,new V)}a[0]=new V,c[0]=new V;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),v<=f&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],l),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(ln(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(h.makeRotationAxis(l,y))}c[x].crossVectors(s[x],a[x])}if(t===!0){let x=Math.acos(ln(a[0].dot(a[e]),-1,1));x/=e,s[0].dot(l.crossVectors(a[0],a[e]))>0&&(x=-x);for(let y=1;y<=e;y++)a[y].applyMatrix4(h.makeRotationAxis(s[y],x*y)),c[y].crossVectors(s[y],a[y])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wu extends Ti{constructor(e=0,t=0,n=1,s=1,a=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const l=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=h-this.aX,x=f-this.aY;h=v*d-x*m+this.aX,f=v*m+x*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class H1 extends Wu{constructor(e,t,n,s,a,c){super(e,t,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Xu(){let i=0,e=0,t=0,n=0;function s(a,c,l,h){i=a,e=l,t=-3*a+3*c-2*l-h,n=2*a-2*c+l+h}return{initCatmullRom:function(a,c,l,h,f){s(c,l,f*(l-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,l,h,f,d,m){let v=(c-a)/f-(l-a)/(f+d)+(l-c)/d,x=(l-c)/d-(h-c)/(d+m)+(h-l)/m;v*=d,x*=d,s(c,l,v,x)},calc:function(a){const c=a*a,l=c*a;return i+e*a+t*c+n*l}}}const Wa=new V,lu=new Xu,cu=new Xu,uu=new Xu;class k1 extends Ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){const n=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1);let f,d;this.closed||l>0?f=s[(l-1)%a]:(Wa.subVectors(s[0],s[1]).add(s[0]),f=Wa);const m=s[l%a],v=s[(l+1)%a];if(this.closed||l+2<a?d=s[(l+2)%a]:(Wa.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(f.distanceToSquared(m),x),E=Math.pow(m.distanceToSquared(v),x),_=Math.pow(v.distanceToSquared(d),x);E<1e-4&&(E=1),y<1e-4&&(y=E),_<1e-4&&(_=E),lu.initNonuniformCatmullRom(f.x,m.x,v.x,d.x,y,E,_),cu.initNonuniformCatmullRom(f.y,m.y,v.y,d.y,y,E,_),uu.initNonuniformCatmullRom(f.z,m.z,v.z,d.z,y,E,_)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(f.x,m.x,v.x,d.x,this.tension),cu.initCatmullRom(f.y,m.y,v.y,d.y,this.tension),uu.initCatmullRom(f.z,m.z,v.z,d.z,this.tension));return n.set(lu.calc(h),cu.calc(h),uu.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vp(i,e,t,n,s){const a=(n-e)*.5,c=(s-t)*.5,l=i*i,h=i*l;return(2*t-2*n+a+c)*h+(-3*t+3*n-2*a-c)*l+a*i+t}function V1(i,e){const t=1-i;return t*t*e}function W1(i,e){return 2*(1-i)*i*e}function X1(i,e){return i*i*e}function So(i,e,t,n){return V1(i,e)+W1(i,t)+X1(i,n)}function q1(i,e){const t=1-i;return t*t*t*e}function Y1(i,e){const t=1-i;return 3*t*t*i*e}function $1(i,e){return 3*(1-i)*i*i*e}function K1(i,e){return i*i*i*e}function Mo(i,e,t,n,s){return q1(i,e)+Y1(i,t)+$1(i,n)+K1(i,s)}class km extends Ti{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Mo(e,s.x,a.x,c.x,l.x),Mo(e,s.y,a.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Z1 extends Ti{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Mo(e,s.x,a.x,c.x,l.x),Mo(e,s.y,a.y,c.y,l.y),Mo(e,s.z,a.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vm extends Ti{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J1 extends Ti{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wm extends Ti{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(So(e,s.x,a.x,c.x),So(e,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j1 extends Ti{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(So(e,s.x,a.x,c.x),So(e,s.y,a.y,c.y),So(e,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xm extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),l=a-c,h=s[c===0?c:c-1],f=s[c],d=s[c>s.length-2?s.length-1:c+1],m=s[c>s.length-3?s.length-1:c+2];return n.set(Vp(l,h.x,f.x,d.x,m.x),Vp(l,h.y,f.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Au=Object.freeze({__proto__:null,ArcCurve:H1,CatmullRomCurve3:k1,CubicBezierCurve:km,CubicBezierCurve3:Z1,EllipseCurve:Wu,LineCurve:Vm,LineCurve3:J1,QuadraticBezierCurve:Wm,QuadraticBezierCurve3:j1,SplineCurve:Xm});class Q1 extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Au[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const c=s[a]-n,l=this.curves[a],h=l.getLength(),f=h===0?0:1-c/h;return l.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Au[s.type]().fromJSON(s))}return this}}class wu extends Q1{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vm(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new Wm(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,c){const l=new km(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(a,c));return this.curves.push(l),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,s,a,c),this}absarc(e,t,n,s,a,c){return this.absellipse(e,t,n,n,s,a,c),this}ellipse(e,t,n,s,a,c,l,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,a,c,l,h),this}absellipse(e,t,n,s,a,c,l,h){const f=new Wu(e,t,n,s,a,c,l,h);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qu extends bi{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],c=[],l=[],h=[],f=new V,d=new Ce;c.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){const x=n+m/t*s;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(c[v]/e+1)/2,d.y=(c[v+1]/e+1)/2,h.push(d.x,d.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(l,3)),this.setAttribute("uv",new An(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qa extends wu{constructor(e){super(e),this.uuid=Wr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wu().fromJSON(s))}return this}}const eC={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=qm(i,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let l,h,f,d,m,v,x;if(n&&(a=sC(i,e,a,t)),i.length>80*t){l=f=i[0],h=d=i[1];for(let y=t;y<s;y+=t)m=i[y],v=i[y+1],m<l&&(l=m),v<h&&(h=v),m>f&&(f=m),v>d&&(d=v);x=Math.max(f-l,d-h),x=x!==0?32767/x:0}return To(a,c,t,l,h,x,0),c}};function qm(i,e,t,n,s){let a,c;if(s===gC(i,e,t,n)>0)for(a=e;a<t;a+=n)c=Wp(a,i[a],i[a+1],c);else for(a=t-n;a>=e;a-=n)c=Wp(a,i[a],i[a+1],c);return c&&vl(c,c.next)&&(wo(c),c=c.next),c}function Hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function To(i,e,t,n,s,a,c){if(!i)return;!c&&a&&uC(i,n,s,a);let l=i,h,f;for(;i.prev!==i.next;){if(h=i.prev,f=i.next,a?nC(i,n,s,a):tC(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),wo(i),i=f.next,l=f.next;continue}if(i=f,i===l){c?c===1?(i=iC(Hr(i),e,t),To(i,e,t,n,s,a,2)):c===2&&rC(i,e,t,n,s,a):To(Hr(i),e,t,n,s,a,1);break}}}function tC(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,a=t.x,c=n.x,l=e.y,h=t.y,f=n.y,d=s<a?s<c?s:c:a<c?a:c,m=l<h?l<f?l:f:h<f?h:f,v=s>a?s>c?s:c:a>c?a:c,x=l>h?l>f?l:f:h>f?h:f;let y=n.next;for(;y!==e;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=x&&Is(s,l,a,h,c,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function nC(i,e,t,n){const s=i.prev,a=i,c=i.next;if(Xt(s,a,c)>=0)return!1;const l=s.x,h=a.x,f=c.x,d=s.y,m=a.y,v=c.y,x=l<h?l<f?l:f:h<f?h:f,y=d<m?d<v?d:v:m<v?m:v,E=l>h?l>f?l:f:h>f?h:f,_=d>m?d>v?d:v:m>v?m:v,g=Cu(x,y,e,t,n),D=Cu(E,_,e,t,n);let M=i.prevZ,R=i.nextZ;for(;M&&M.z>=g&&R&&R.z<=D;){if(M.x>=x&&M.x<=E&&M.y>=y&&M.y<=_&&M!==s&&M!==c&&Is(l,d,h,m,f,v,M.x,M.y)&&Xt(M.prev,M,M.next)>=0||(M=M.prevZ,R.x>=x&&R.x<=E&&R.y>=y&&R.y<=_&&R!==s&&R!==c&&Is(l,d,h,m,f,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;M&&M.z>=g;){if(M.x>=x&&M.x<=E&&M.y>=y&&M.y<=_&&M!==s&&M!==c&&Is(l,d,h,m,f,v,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;R&&R.z<=D;){if(R.x>=x&&R.x<=E&&R.y>=y&&R.y<=_&&R!==s&&R!==c&&Is(l,d,h,m,f,v,R.x,R.y)&&Xt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function iC(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!vl(s,a)&&Ym(s,n,n.next,a)&&Ao(s,a)&&Ao(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),wo(n),wo(n.next),n=i=a),n=n.next}while(n!==i);return Hr(n)}function rC(i,e,t,n,s,a){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&dC(c,l)){let h=$m(c,l);c=Hr(c,c.next),h=Hr(h,h.next),To(c,e,t,n,s,a,0),To(h,e,t,n,s,a,0);return}l=l.next}c=c.next}while(c!==i)}function sC(i,e,t,n){const s=[];let a,c,l,h,f;for(a=0,c=e.length;a<c;a++)l=e[a]*n,h=a<c-1?e[a+1]*n:i.length,f=qm(i,l,h,n,!1),f===f.next&&(f.steiner=!0),s.push(fC(f));for(s.sort(oC),a=0;a<s.length;a++)t=aC(s[a],t);return t}function oC(i,e){return i.x-e.x}function aC(i,e){const t=lC(i,e);if(!t)return e;const n=$m(t,i);return Hr(n,n.next),Hr(t,t.next)}function lC(i,e){let t=e,n=-1/0,s;const a=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>n&&(n=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,h=s.x,f=s.y;let d=1/0,m;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&Is(c<f?a:n,c,h,f,c<f?n:a,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(a-t.x),Ao(t,i)&&(m<d||m===d&&(t.x>s.x||t.x===s.x&&cC(s,t)))&&(s=t,d=m)),t=t.next;while(t!==l);return s}function cC(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function uC(i,e,t,n){let s=i;do s.z===0&&(s.z=Cu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hC(s)}function hC(i){let e,t,n,s,a,c,l,h,f=1;do{for(t=i,i=null,a=null,c=0;t;){for(c++,n=t,l=0,e=0;e<f&&(l++,n=n.nextZ,!!n);e++);for(h=f;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,l--):(s=n,n=n.nextZ,h--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(c>1);return i}function Cu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fC(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Is(i,e,t,n,s,a,c,l){return(s-c)*(e-l)>=(i-c)*(a-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(a-l)>=(s-c)*(n-l)}function dC(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pC(i,e)&&(Ao(i,e)&&Ao(e,i)&&mC(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||vl(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vl(i,e){return i.x===e.x&&i.y===e.y}function Ym(i,e,t,n){const s=qa(Xt(i,e,t)),a=qa(Xt(i,e,n)),c=qa(Xt(t,n,i)),l=qa(Xt(t,n,e));return!!(s!==a&&c!==l||s===0&&Xa(i,t,e)||a===0&&Xa(i,n,e)||c===0&&Xa(t,i,n)||l===0&&Xa(t,e,n))}function Xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qa(i){return i>0?1:i<0?-1:0}function pC(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ym(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ao(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function mC(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $m(i,e){const t=new Ru(i.i,i.x,i.y),n=new Ru(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Wp(i,e,t,n){const s=new Ru(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ru(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gC(i,e,t,n){let s=0;for(let a=e,c=t-n;a<t;a+=n)s+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return s}class Ns{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Ns.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];Xp(e),qp(n,e);let c=e.length;t.forEach(Xp);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,qp(n,t[h]);const l=eC.triangulate(n,s);for(let h=0;h<l.length;h+=3)a.push(l.slice(h,h+3));return a}}function Xp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Yu extends bi{constructor(e=new Qa([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let l=0,h=e.length;l<h;l++){const f=e[l];c(f)}this.setAttribute("position",new An(s,3)),this.setAttribute("uv",new An(a,2)),this.computeVertexNormals();function c(l){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,D=t.UVGenerator!==void 0?t.UVGenerator:_C;let M,R=!1,G,U,C,W;g&&(M=g.getSpacedPoints(d),R=!0,v=!1,G=g.computeFrenetFrames(d,!1),U=new V,C=new V,W=new V),v||(_=0,x=0,y=0,E=0);const ae=l.extractPoints(f);let T=ae.shape;const I=ae.holes;if(!Ns.isClockWise(T)){T=T.reverse();for(let F=0,Ae=I.length;F<Ae;F++){const ie=I[F];Ns.isClockWise(ie)&&(I[F]=ie.reverse())}}const fe=Ns.triangulateShape(T,I),H=T;for(let F=0,Ae=I.length;F<Ae;F++){const ie=I[F];T=T.concat(ie)}function oe(F,Ae,ie){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(Ae,ie)}const Q=T.length,ce=fe.length;function ne(F,Ae,ie){let Ee,pe,Pe;const Ue=F.x-Ae.x,ke=F.y-Ae.y,ot=ie.x-F.x,P=ie.y-F.y,b=Ue*Ue+ke*ke,ee=Ue*P-ke*ot;if(Math.abs(ee)>Number.EPSILON){const re=Math.sqrt(b),Se=Math.sqrt(ot*ot+P*P),ge=Ae.x-ke/re,je=Ae.y+Ue/re,Ke=ie.x-P/Se,we=ie.y+ot/Se,Re=((Ke-ge)*P-(we-je)*ot)/(Ue*P-ke*ot);Ee=ge+Ue*Re-F.x,pe=je+ke*Re-F.y;const et=Ee*Ee+pe*pe;if(et<=2)return new Ce(Ee,pe);Pe=Math.sqrt(et/2)}else{let re=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(re=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(re=!0):Math.sign(ke)===Math.sign(P)&&(re=!0),re?(Ee=-ke,pe=Ue,Pe=Math.sqrt(b)):(Ee=Ue,pe=ke,Pe=Math.sqrt(b/2))}return new Ce(Ee/Pe,pe/Pe)}const ue=[];for(let F=0,Ae=H.length,ie=Ae-1,Ee=F+1;F<Ae;F++,ie++,Ee++)ie===Ae&&(ie=0),Ee===Ae&&(Ee=0),ue[F]=ne(H[F],H[ie],H[Ee]);const me=[];let ye,Fe=ue.concat();for(let F=0,Ae=I.length;F<Ae;F++){const ie=I[F];ye=[];for(let Ee=0,pe=ie.length,Pe=pe-1,Ue=Ee+1;Ee<pe;Ee++,Pe++,Ue++)Pe===pe&&(Pe=0),Ue===pe&&(Ue=0),ye[Ee]=ne(ie[Ee],ie[Pe],ie[Ue]);me.push(ye),Fe=Fe.concat(ye)}for(let F=0;F<_;F++){const Ae=F/_,ie=x*Math.cos(Ae*Math.PI/2),Ee=y*Math.sin(Ae*Math.PI/2)+E;for(let pe=0,Pe=H.length;pe<Pe;pe++){const Ue=oe(H[pe],ue[pe],Ee);Je(Ue.x,Ue.y,-ie)}for(let pe=0,Pe=I.length;pe<Pe;pe++){const Ue=I[pe];ye=me[pe];for(let ke=0,ot=Ue.length;ke<ot;ke++){const P=oe(Ue[ke],ye[ke],Ee);Je(P.x,P.y,-ie)}}}const st=y+E;for(let F=0;F<Q;F++){const Ae=v?oe(T[F],Fe[F],st):T[F];R?(C.copy(G.normals[0]).multiplyScalar(Ae.x),U.copy(G.binormals[0]).multiplyScalar(Ae.y),W.copy(M[0]).add(C).add(U),Je(W.x,W.y,W.z)):Je(Ae.x,Ae.y,0)}for(let F=1;F<=d;F++)for(let Ae=0;Ae<Q;Ae++){const ie=v?oe(T[Ae],Fe[Ae],st):T[Ae];R?(C.copy(G.normals[F]).multiplyScalar(ie.x),U.copy(G.binormals[F]).multiplyScalar(ie.y),W.copy(M[F]).add(C).add(U),Je(W.x,W.y,W.z)):Je(ie.x,ie.y,m/d*F)}for(let F=_-1;F>=0;F--){const Ae=F/_,ie=x*Math.cos(Ae*Math.PI/2),Ee=y*Math.sin(Ae*Math.PI/2)+E;for(let pe=0,Pe=H.length;pe<Pe;pe++){const Ue=oe(H[pe],ue[pe],Ee);Je(Ue.x,Ue.y,m+ie)}for(let pe=0,Pe=I.length;pe<Pe;pe++){const Ue=I[pe];ye=me[pe];for(let ke=0,ot=Ue.length;ke<ot;ke++){const P=oe(Ue[ke],ye[ke],Ee);R?Je(P.x,P.y+M[d-1].y,M[d-1].x+ie):Je(P.x,P.y,m+ie)}}}te(),ve();function te(){const F=s.length/3;if(v){let Ae=0,ie=Q*Ae;for(let Ee=0;Ee<ce;Ee++){const pe=fe[Ee];He(pe[2]+ie,pe[1]+ie,pe[0]+ie)}Ae=d+_*2,ie=Q*Ae;for(let Ee=0;Ee<ce;Ee++){const pe=fe[Ee];He(pe[0]+ie,pe[1]+ie,pe[2]+ie)}}else{for(let Ae=0;Ae<ce;Ae++){const ie=fe[Ae];He(ie[2],ie[1],ie[0])}for(let Ae=0;Ae<ce;Ae++){const ie=fe[Ae];He(ie[0]+Q*d,ie[1]+Q*d,ie[2]+Q*d)}}n.addGroup(F,s.length/3-F,0)}function ve(){const F=s.length/3;let Ae=0;De(H,Ae),Ae+=H.length;for(let ie=0,Ee=I.length;ie<Ee;ie++){const pe=I[ie];De(pe,Ae),Ae+=pe.length}n.addGroup(F,s.length/3-F,1)}function De(F,Ae){let ie=F.length;for(;--ie>=0;){const Ee=ie;let pe=ie-1;pe<0&&(pe=F.length-1);for(let Pe=0,Ue=d+_*2;Pe<Ue;Pe++){const ke=Q*Pe,ot=Q*(Pe+1),P=Ae+Ee+ke,b=Ae+pe+ke,ee=Ae+pe+ot,re=Ae+Ee+ot;Oe(P,b,ee,re)}}}function Je(F,Ae,ie){h.push(F),h.push(Ae),h.push(ie)}function He(F,Ae,ie){at(F),at(Ae),at(ie);const Ee=s.length/3,pe=D.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);Xe(pe[0]),Xe(pe[1]),Xe(pe[2])}function Oe(F,Ae,ie,Ee){at(F),at(Ae),at(Ee),at(Ae),at(ie),at(Ee);const pe=s.length/3,Pe=D.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);Xe(Pe[0]),Xe(Pe[1]),Xe(Pe[3]),Xe(Pe[1]),Xe(Pe[2]),Xe(Pe[3])}function at(F){s.push(h[F*3+0]),s.push(h[F*3+1]),s.push(h[F*3+2])}function Xe(F){a.push(F.x),a.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vC(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,c=e.shapes.length;a<c;a++){const l=t[e.shapes[a]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Au[s.type]().fromJSON(s)),new Yu(n,e.options)}}const _C={generateTopUV:function(i,e,t,n,s){const a=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],f=e[s*3],d=e[s*3+1];return[new Ce(a,c),new Ce(l,h),new Ce(f,d)]},generateSideWallUV:function(i,e,t,n,s,a){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],f=e[n*3],d=e[n*3+1],m=e[n*3+2],v=e[s*3],x=e[s*3+1],y=e[s*3+2],E=e[a*3],_=e[a*3+1],g=e[a*3+2];return Math.abs(l-d)<Math.abs(c-f)?[new Ce(c,1-h),new Ce(f,1-m),new Ce(v,1-y),new Ce(E,1-g)]:[new Ce(l,1-h),new Ce(d,1-m),new Ce(x,1-y),new Ce(_,1-g)]}};function vC(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $u extends bi{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let f=0;const d=[],m=new V,v=new V,x=[],y=[],E=[],_=[];for(let g=0;g<=n;g++){const D=[],M=g/n;let R=0;g===0&&c===0?R=.5/t:g===n&&h===Math.PI&&(R=-.5/t);for(let G=0;G<=t;G++){const U=G/t;m.x=-e*Math.cos(s+U*a)*Math.sin(c+M*l),m.y=e*Math.cos(c+M*l),m.z=e*Math.sin(s+U*a)*Math.sin(c+M*l),y.push(m.x,m.y,m.z),v.copy(m).normalize(),E.push(v.x,v.y,v.z),_.push(U+R,1-M),D.push(f++)}d.push(D)}for(let g=0;g<n;g++)for(let D=0;D<t;D++){const M=d[g][D+1],R=d[g][D],G=d[g+1][D],U=d[g+1][D+1];(g!==0||c>0)&&x.push(M,R,U),(g!==n-1||h<Math.PI)&&x.push(R,G,U)}this.setIndex(x),this.setAttribute("position",new An(y,3)),this.setAttribute("normal",new An(E,3)),this.setAttribute("uv",new An(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Yp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xC{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,l),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,m){return f.push(d,m),this},this.removeHandler=function(d){const m=f.indexOf(d);return m!==-1&&f.splice(m,2),this},this.getHandler=function(d){for(let m=0,v=f.length;m<v;m+=2){const x=f[m],y=f[m+1];if(x.global&&(x.lastIndex=0),x.test(d))return y}return null}}}const yC=new xC;class Ku{constructor(e){this.manager=e!==void 0?e:yC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ku.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class SC extends Error{constructor(e,t){super(e),this.response=t}}class MC extends Ku{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Yp.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=Hi[e],m=f.body.getReader(),v=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),x=v?parseInt(v):0,y=x!==0;let E=0;const _=new ReadableStream({start(g){D();function D(){m.read().then(({done:M,value:R})=>{if(M)g.close();else{E+=R.byteLength;const G=new ProgressEvent("progress",{lengthComputable:y,loaded:E,total:x});for(let U=0,C=d.length;U<C;U++){const W=d[U];W.onProgress&&W.onProgress(G)}g.enqueue(R),D()}})}}});return new Response(_)}else throw new SC(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return f.json();default:if(l===void 0)return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),v=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(v);return f.arrayBuffer().then(y=>x.decode(y))}}}).then(f=>{Yp.add(e,f);const d=Hi[e];delete Hi[e];for(let m=0,v=d.length;m<v;m++){const x=d[m];x.onLoad&&x.onLoad(f)}}).catch(f=>{const d=Hi[e];if(d===void 0)throw this.manager.itemError(e),f;delete Hi[e];for(let m=0,v=d.length;m<v;m++){const x=d[m];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $p{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class EC{constructor(){this.type="ShapePath",this.color=new Tt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new wu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,c){return this.currentPath.bezierCurveTo(e,t,n,s,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const D=[];for(let M=0,R=g.length;M<R;M++){const G=g[M],U=new Qa;U.curves=G.curves,D.push(U)}return D}function n(g,D){const M=D.length;let R=!1;for(let G=M-1,U=0;U<M;G=U++){let C=D[G],W=D[U],ae=W.x-C.x,T=W.y-C.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(C=D[U],ae=-ae,W=D[G],T=-T),g.y<C.y||g.y>W.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{const I=T*(g.x-C.x)-ae*(g.y-C.y);if(I===0)return!0;if(I<0)continue;R=!R}}else{if(g.y!==C.y)continue;if(W.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=W.x)return!0}}return R}const s=Ns.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,l,h;const f=[];if(a.length===1)return l=a[0],h=new Qa,h.curves=l.curves,f.push(h),f;let d=!s(a[0].getPoints());d=e?!d:d;const m=[],v=[];let x=[],y=0,E;v[y]=void 0,x[y]=[];for(let g=0,D=a.length;g<D;g++)l=a[g],E=l.getPoints(),c=s(E),c=e?!c:c,c?(!d&&v[y]&&y++,v[y]={s:new Qa,p:E},v[y].s.curves=l.curves,d&&y++,x[y]=[]):x[y].push({h:l,p:E[0]});if(!v[0])return t(a);if(v.length>1){let g=!1,D=0;for(let M=0,R=v.length;M<R;M++)m[M]=[];for(let M=0,R=v.length;M<R;M++){const G=x[M];for(let U=0;U<G.length;U++){const C=G[U];let W=!0;for(let ae=0;ae<v.length;ae++)n(C.p,v[ae].p)&&(M!==ae&&D++,W?(W=!1,m[ae].push(C)):g=!0);W&&m[M].push(C)}}D>0&&g===!1&&(x=m)}let _;for(let g=0,D=v.length;g<D;g++){h=v[g].s,f.push(h),_=x[g];for(let M=0,R=_.length;M<R;M++)h.holes.push(_[M].h)}return f}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);var Lu=function(i,e){return Lu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Lu(i,e)};function ks(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Lu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Pu(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Iu(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,a=[],c;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)a.push(s.value)}catch(l){c={error:l}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return a}function Du(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}function di(i){return typeof i=="function"}function Km(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var hu=Km(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,s){return s+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Uu(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var xl=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,s,a;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var l=Pu(c),h=l.next();!h.done;h=l.next()){var f=h.value;f.remove(this)}}catch(E){e={error:E}}finally{try{h&&!h.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}else c.remove(this);var d=this.initialTeardown;if(di(d))try{d()}catch(E){a=E instanceof hu?E.errors:[E]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var v=Pu(m),x=v.next();!x.done;x=v.next()){var y=x.value;try{Kp(y)}catch(E){a=a??[],E instanceof hu?a=Du(Du([],Iu(a)),Iu(E.errors)):a.push(E)}}}catch(E){n={error:E}}finally{try{x&&!x.done&&(s=v.return)&&s.call(v)}finally{if(n)throw n.error}}}if(a)throw new hu(a)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Kp(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Uu(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&Uu(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),Zm=xl.EMPTY;function Jm(i){return i instanceof xl||i&&"closed"in i&&di(i.remove)&&di(i.add)&&di(i.unsubscribe)}function Kp(i){di(i)?i():i.unsubscribe()}var jm={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Qm={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,Du([i,e],Iu(t)))},clearTimeout:function(i){var e=Qm.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(i)},delegate:void 0};function bC(i){Qm.setTimeout(function(){throw i})}function Zp(){}function el(i){i()}var Zu=function(i){ks(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,Jm(t)&&t.add(n)):n.destination=CC,n}return e.create=function(t,n,s){return new Nu(t,n,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(xl),TC=Function.prototype.bind;function fu(i,e){return TC.call(i,e)}var AC=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){Ya(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){Ya(n)}else Ya(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Ya(t)}},i}(),Nu=function(i){ks(e,i);function e(t,n,s){var a=i.call(this)||this,c;if(di(t)||!t)c={next:t??void 0,error:n??void 0,complete:s??void 0};else{var l;a&&jm.useDeprecatedNextContext?(l=Object.create(t),l.unsubscribe=function(){return a.unsubscribe()},c={next:t.next&&fu(t.next,l),error:t.error&&fu(t.error,l),complete:t.complete&&fu(t.complete,l)}):c=t}return a.destination=new AC(c),a}return e}(Zu);function Ya(i){bC(i)}function wC(i){throw i}var CC={closed:!0,next:Zp,error:wC,complete:Zp},RC=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ju(i){return i}function LC(i){return i.length===0?Ju:i.length===1?i[0]:function(t){return i.reduce(function(n,s){return s(n)},t)}}var Jp=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var s=this,a=IC(e)?e:new Nu(e,t,n);return el(function(){var c=s,l=c.operator,h=c.source;a.add(l?l.call(a,h):h?s._subscribe(a):s._trySubscribe(a))}),a},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=jp(t),new t(function(s,a){var c=new Nu({next:function(l){try{e(l)}catch(h){a(h),c.unsubscribe()}},error:a,complete:s});n.subscribe(c)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[RC]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return LC(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=jp(e),new e(function(n,s){var a;t.subscribe(function(c){return a=c},function(c){return s(c)},function(){return n(a)})})},i.create=function(e){return new i(e)},i}();function jp(i){var e;return(e=i??jm.Promise)!==null&&e!==void 0?e:Promise}function PC(i){return i&&di(i.next)&&di(i.error)&&di(i.complete)}function IC(i){return i&&i instanceof Zu||PC(i)&&Jm(i)}function DC(i){return di(i==null?void 0:i.lift)}function ju(i){return function(e){if(DC(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qu(i,e,t,n,s){return new UC(i,e,t,n,s)}var UC=function(i){ks(e,i);function e(t,n,s,a,c,l){var h=i.call(this,t)||this;return h.onFinalize=c,h.shouldUnsubscribe=l,h._next=n?function(f){try{n(f)}catch(d){t.error(d)}}:i.prototype._next,h._error=a?function(f){try{a(f)}catch(d){t.error(d)}finally{this.unsubscribe()}}:i.prototype._error,h._complete=s?function(){try{s()}catch(f){t.error(f)}finally{this.unsubscribe()}}:i.prototype._complete,h}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Zu),NC=Km(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),eg=function(i){ks(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new Qp(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new NC},e.prototype.next=function(t){var n=this;el(function(){var s,a;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var c=Pu(n.currentObservers),l=c.next();!l.done;l=c.next()){var h=l.value;h.next(t)}}catch(f){s={error:f}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var n=this;el(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var s=n.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;el(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,s=this,a=s.hasError,c=s.isStopped,l=s.observers;return a||c?Zm:(this.currentObservers=null,l.push(t),new xl(function(){n.currentObservers=null,Uu(l,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,s=n.hasError,a=n.thrownError,c=n.isStopped;s?t.error(a):c&&t.complete()},e.prototype.asObservable=function(){var t=new Jp;return t.source=this,t},e.create=function(t,n){return new Qp(t,n)},e}(Jp),Qp=function(i){ks(e,i);function e(t,n){var s=i.call(this)||this;return s.destination=t,s.source=n,s}return e.prototype.next=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.next)===null||s===void 0||s.call(n,t)},e.prototype.error=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.error)===null||s===void 0||s.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,s;return(s=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&s!==void 0?s:Zm},e}(eg),Vs=function(i){ks(e,i);function e(t){var n=i.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=i.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,s=t.thrownError,a=t._value;if(n)throw s;return this._throwIfClosed(),a},e.prototype.next=function(t){i.prototype.next.call(this,this._value=t)},e}(eg);function vi(i,e){return ju(function(t,n){var s=0;t.subscribe(Qu(n,function(a){n.next(i.call(e,a,s++))}))})}function xi(i,e){return e===void 0&&(e=Ju),i=i??OC,ju(function(t,n){var s,a=!0;t.subscribe(Qu(n,function(c){var l=e(c);(a||!i(s,l))&&(a=!1,s=l,n.next(c))}))})}function OC(i,e){return i===e}function FC(i,e,t){var n=di(i)||e||t?{next:i,error:e,complete:t}:i;return n?ju(function(s,a){var c;(c=n.subscribe)===null||c===void 0||c.call(n);var l=!0;s.subscribe(Qu(a,function(h){var f;(f=n.next)===null||f===void 0||f.call(n,h),a.next(h)},function(){var h;l=!1,(h=n.complete)===null||h===void 0||h.call(n),a.complete()},function(h){var f;l=!1,(f=n.error)===null||f===void 0||f.call(n,h),a.error(h)},function(){var h,f;l&&((h=n.unsubscribe)===null||h===void 0||h.call(n)),(f=n.finalize)===null||f===void 0||f.call(n)}))}):Ju}const BC={items:[]},cl=new Vs(BC);function zC(i){const t={...cl.getValue(),items:i};cl.next(t)}const GC=new URL(window.location),em=new URLSearchParams(GC.search),HC={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefixOptions:["50pe","75pe","6s"],prefix:em.has("prefix")?em.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],atacs:[],items:[],groups:[]},Mt=new Vs(HC);function kC(i){const e=Mt.getValue(),t=Object.keys(i).map(s=>[s,i[s]]),n={...e,pallete:i,listPalette:t};Mt.next(n)}function VC(i){const t={...Mt.getValue(),genes:i};Mt.next(t)}function WC(i){const t={...Mt.getValue(),atacs:i};Mt.next(t)}const XC={scene:new B1},tg=new Vs(XC),qC={isLoading:!0,theme:"light"},ul=new Vs(qC);function ci(i,e=""){console.log(e);const n={...ul.getValue(),isLoading:i};ul.next(n)}const YC=new URL(window.location),tm=new URLSearchParams(YC.search),$C={selectedCelltypes:[],mode:tm.has("mode")?Number(tm.get("mode")):1,selectedSingleGene:"",selectedSingleAtac:"",selectedGenes:[],selectedAtacs:[],intervalsData:[],showing:"celltype"},We=new Vs($C);function Co(i){const t={...We.getValue(),selectedCelltypes:[...new Set(i)]};We.next(t)}function ng(i){const t={...We.getValue(),intervalsData:[...new Set(i)]};We.next(t)}function KC(i){const t={...We.getValue(),mode:i};We.next(t)}function Gs(i){const e=We.getValue(),t=e.selectedGenes;if(t.length>0){const a=document.getElementById(t[0]);console.log(a),a&&(a.checked=!1)}const n={...e,selectedGenes:i},s=document.getElementById(i[0]);console.log(s),s&&(s.checked=!0),We.next(n)}function kr(i){const e=We.getValue(),t=e.selectedAtacs;if(t.length>0){const a=document.getElementById(t[0]);console.log(a),a&&(a.checked=!1)}const n={...e,selectedAtacs:i},s=document.getElementById(i[0]);s&&(s.checked=!0),We.next(n)}const nm={type:"change"},du={type:"start"},im={type:"end"},$a=new Am,rm=new cr,ZC=Math.cos(70*EE.DEG2RAD);class ig extends Vr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ke),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ke),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nm),n.update(),a=s.NONE},this.update=function(){const N=new V,de=new Gr().setFromUnitVectors(e.up,new V(0,1,0)),Ve=de.clone().invert(),B=new V,be=new Gr,Y=new V,Me=2*Math.PI;return function(gt=null){const wt=n.object.position;N.copy(wt).sub(n.target),N.applyQuaternion(de),l.setFromVector3(N),n.autoRotate&&a===s.NONE&&xe(T(gt)),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let Lt=n.minAzimuthAngle,Ht=n.maxAzimuthAngle;isFinite(Lt)&&isFinite(Ht)&&(Lt<-Math.PI?Lt+=Me:Lt>Math.PI&&(Lt-=Me),Ht<-Math.PI?Ht+=Me:Ht>Math.PI&&(Ht-=Me),Lt<=Ht?l.theta=Math.max(Lt,Math.min(Ht,l.theta)):l.theta=l.theta>(Lt+Ht)/2?Math.max(Lt,l.theta):Math.min(Ht,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let At=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)l.radius=me(l.radius);else{const Pt=l.radius;l.radius=me(l.radius*f),At=Pt!=l.radius}if(N.setFromSpherical(l),N.applyQuaternion(Ve),wt.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&U){let Pt=null;if(n.object.isPerspectiveCamera){const sn=N.length();Pt=me(sn*f);const ei=sn-Pt;n.object.position.addScaledVector(R,ei),n.object.updateMatrixWorld(),At=!!ei}else if(n.object.isOrthographicCamera){const sn=new V(G.x,G.y,0);sn.unproject(n.object);const ei=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),At=ei!==n.object.zoom;const qr=new V(G.x,G.y,0);qr.unproject(n.object),n.object.position.sub(qr).add(sn),n.object.updateMatrixWorld(),Pt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):($a.origin.copy(n.object.position),$a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($a.direction))<ZC?e.lookAt(n.target):(rm.setFromNormalAndCoplanarPoint(n.object.up,n.target),$a.intersectPlane(rm,n.target))))}else if(n.object.isOrthographicCamera){const Pt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),Pt!==n.object.zoom&&(n.object.updateProjectionMatrix(),At=!0)}return f=1,U=!1,At||B.distanceToSquared(n.object.position)>c||8*(1-be.dot(n.object.quaternion))>c||Y.distanceToSquared(n.target)>c?(n.dispatchEvent(nm),B.copy(n.object.position),be.copy(n.object.quaternion),Y.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",et),n.domElement.removeEventListener("pointerdown",ke),n.domElement.removeEventListener("pointercancel",P),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",P),n.domElement.getRootNode().removeEventListener("keydown",ge,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ke),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const c=1e-6,l=new $p,h=new $p;let f=1;const d=new V,m=new Ce,v=new Ce,x=new Ce,y=new Ce,E=new Ce,_=new Ce,g=new Ce,D=new Ce,M=new Ce,R=new V,G=new Ce;let U=!1;const C=[],W={};let ae=!1;function T(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function I(N){const de=Math.abs(N*.01);return Math.pow(.95,n.zoomSpeed*de)}function xe(N){h.theta-=N}function fe(N){h.phi-=N}const H=function(){const N=new V;return function(Ve,B){N.setFromMatrixColumn(B,0),N.multiplyScalar(-Ve),d.add(N)}}(),oe=function(){const N=new V;return function(Ve,B){n.screenSpacePanning===!0?N.setFromMatrixColumn(B,1):(N.setFromMatrixColumn(B,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Ve),d.add(N)}}(),Q=function(){const N=new V;return function(Ve,B){const be=n.domElement;if(n.object.isPerspectiveCamera){const Y=n.object.position;N.copy(Y).sub(n.target);let Me=N.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),H(2*Ve*Me/be.clientHeight,n.object.matrix),oe(2*B*Me/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(Ve*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),oe(B*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(N,de){if(!n.zoomToCursor)return;U=!0;const Ve=n.domElement.getBoundingClientRect(),B=N-Ve.left,be=de-Ve.top,Y=Ve.width,Me=Ve.height;G.x=B/Y*2-1,G.y=-(be/Me)*2+1,R.set(G.x,G.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function ye(N){m.set(N.clientX,N.clientY)}function Fe(N){ue(N.clientX,N.clientX),g.set(N.clientX,N.clientY)}function st(N){y.set(N.clientX,N.clientY)}function te(N){v.set(N.clientX,N.clientY),x.subVectors(v,m).multiplyScalar(n.rotateSpeed);const de=n.domElement;xe(2*Math.PI*x.x/de.clientHeight),fe(2*Math.PI*x.y/de.clientHeight),m.copy(v),n.update()}function ve(N){D.set(N.clientX,N.clientY),M.subVectors(D,g),M.y>0?ce(I(M.y)):M.y<0&&ne(I(M.y)),g.copy(D),n.update()}function De(N){E.set(N.clientX,N.clientY),_.subVectors(E,y).multiplyScalar(n.panSpeed),Q(_.x,_.y),y.copy(E),n.update()}function Je(N){ue(N.clientX,N.clientY),N.deltaY<0?ne(I(N.deltaY)):N.deltaY>0&&ce(I(N.deltaY)),n.update()}function He(N){let de=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?fe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?fe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?xe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?xe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),de=!0;break}de&&(N.preventDefault(),n.update())}function Oe(N){if(C.length===1)m.set(N.pageX,N.pageY);else{const de=ze(N),Ve=.5*(N.pageX+de.x),B=.5*(N.pageY+de.y);m.set(Ve,B)}}function at(N){if(C.length===1)y.set(N.pageX,N.pageY);else{const de=ze(N),Ve=.5*(N.pageX+de.x),B=.5*(N.pageY+de.y);y.set(Ve,B)}}function Xe(N){const de=ze(N),Ve=N.pageX-de.x,B=N.pageY-de.y,be=Math.sqrt(Ve*Ve+B*B);g.set(0,be)}function F(N){n.enableZoom&&Xe(N),n.enablePan&&at(N)}function Ae(N){n.enableZoom&&Xe(N),n.enableRotate&&Oe(N)}function ie(N){if(C.length==1)v.set(N.pageX,N.pageY);else{const Ve=ze(N),B=.5*(N.pageX+Ve.x),be=.5*(N.pageY+Ve.y);v.set(B,be)}x.subVectors(v,m).multiplyScalar(n.rotateSpeed);const de=n.domElement;xe(2*Math.PI*x.x/de.clientHeight),fe(2*Math.PI*x.y/de.clientHeight),m.copy(v)}function Ee(N){if(C.length===1)E.set(N.pageX,N.pageY);else{const de=ze(N),Ve=.5*(N.pageX+de.x),B=.5*(N.pageY+de.y);E.set(Ve,B)}_.subVectors(E,y).multiplyScalar(n.panSpeed),Q(_.x,_.y),y.copy(E)}function pe(N){const de=ze(N),Ve=N.pageX-de.x,B=N.pageY-de.y,be=Math.sqrt(Ve*Ve+B*B);D.set(0,be),M.set(0,Math.pow(D.y/g.y,n.zoomSpeed)),ce(M.y),g.copy(D);const Y=(N.pageX+de.x)*.5,Me=(N.pageY+de.y)*.5;ue(Y,Me)}function Pe(N){n.enableZoom&&pe(N),n.enablePan&&Ee(N)}function Ue(N){n.enableZoom&&pe(N),n.enableRotate&&ie(N)}function ke(N){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",P)),!ut(N)&&(Te(N),N.pointerType==="touch"?we(N):b(N)))}function ot(N){n.enabled!==!1&&(N.pointerType==="touch"?Re(N):ee(N))}function P(N){switch(Ot(N),C.length){case 0:n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",P),n.dispatchEvent(im),a=s.NONE;break;case 1:const de=C[0],Ve=W[de];we({pointerId:de,pageX:Ve.x,pageY:Ve.y});break}}function b(N){let de;switch(N.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Vi.DOLLY:if(n.enableZoom===!1)return;Fe(N),a=s.DOLLY;break;case Vi.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;st(N),a=s.PAN}else{if(n.enableRotate===!1)return;ye(N),a=s.ROTATE}break;case Vi.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;ye(N),a=s.ROTATE}else{if(n.enablePan===!1)return;st(N),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(du)}function ee(N){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;te(N);break;case s.DOLLY:if(n.enableZoom===!1)return;ve(N);break;case s.PAN:if(n.enablePan===!1)return;De(N);break}}function re(N){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(N.preventDefault(),n.dispatchEvent(du),Je(Se(N)),n.dispatchEvent(im))}function Se(N){const de=N.deltaMode,Ve={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(de){case 1:Ve.deltaY*=16;break;case 2:Ve.deltaY*=100;break}return N.ctrlKey&&!ae&&(Ve.deltaY*=10),Ve}function ge(N){N.key==="Control"&&(ae=!0,n.domElement.getRootNode().addEventListener("keyup",je,{passive:!0,capture:!0}))}function je(N){N.key==="Control"&&(ae=!1,n.domElement.getRootNode().removeEventListener("keyup",je,{passive:!0,capture:!0}))}function Ke(N){n.enabled===!1||n.enablePan===!1||He(N)}function we(N){switch(Ze(N),C.length){case 1:switch(n.touches.ONE){case lr.ROTATE:if(n.enableRotate===!1)return;Oe(N),a=s.TOUCH_ROTATE;break;case lr.PAN:if(n.enablePan===!1)return;at(N),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case lr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(N),a=s.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(N),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(du)}function Re(N){switch(Ze(N),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ie(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ee(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(N),n.update();break;default:a=s.NONE}}function et(N){n.enabled!==!1&&N.preventDefault()}function Te(N){C.push(N.pointerId)}function Ot(N){delete W[N.pointerId];for(let de=0;de<C.length;de++)if(C[de]==N.pointerId){C.splice(de,1);return}}function ut(N){for(let de=0;de<C.length;de++)if(C[de]==N.pointerId)return!0;return!1}function Ze(N){let de=W[N.pointerId];de===void 0&&(de=new Ce,W[N.pointerId]=de),de.set(N.pageX,N.pageY)}function ze(N){const de=N.pointerId===C[0]?C[1]:C[0];return W[de]}n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",ke),n.domElement.addEventListener("pointercancel",P),n.domElement.addEventListener("wheel",re,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */hl.exports;(function(i,e){(function(){var t,n="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",m=1,v=2,x=4,y=1,E=2,_=1,g=2,D=4,M=8,R=16,G=32,U=64,C=128,W=256,ae=512,T=30,I="...",xe=800,fe=16,H=1,oe=2,Q=3,ce=1/0,ne=9007199254740991,ue=17976931348623157e292,me=NaN,ye=4294967295,Fe=ye-1,st=ye>>>1,te=[["ary",C],["bind",_],["bindKey",g],["curry",M],["curryRight",R],["flip",ae],["partial",G],["partialRight",U],["rearg",W]],ve="[object Arguments]",De="[object Array]",Je="[object AsyncFunction]",He="[object Boolean]",Oe="[object Date]",at="[object DOMException]",Xe="[object Error]",F="[object Function]",Ae="[object GeneratorFunction]",ie="[object Map]",Ee="[object Number]",pe="[object Null]",Pe="[object Object]",Ue="[object Promise]",ke="[object Proxy]",ot="[object RegExp]",P="[object Set]",b="[object String]",ee="[object Symbol]",re="[object Undefined]",Se="[object WeakMap]",ge="[object WeakSet]",je="[object ArrayBuffer]",Ke="[object DataView]",we="[object Float32Array]",Re="[object Float64Array]",et="[object Int8Array]",Te="[object Int16Array]",Ot="[object Int32Array]",ut="[object Uint8Array]",Ze="[object Uint8ClampedArray]",ze="[object Uint16Array]",qe="[object Uint32Array]",N=/\b__p \+= '';/g,de=/\b(__p \+=) '' \+/g,Ve=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,be=/[&<>"']/g,Y=RegExp(B.source),Me=RegExp(be.source),Ne=/<%-([\s\S]+?)%>/g,gt=/<%([\s\S]+?)%>/g,wt=/<%=([\s\S]+?)%>/g,Lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ht=/^\w*$/,At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,sn=RegExp(Pt.source),ei=/^\s+/,qr=/\s/,Yr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Po=/\{\n\/\* \[wrapped with (.+)\] \*/,$r=/,? & /,Io=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Do=/[()=,{}\[\]\/\s]/,Sl=/\\(\\)?/g,Ml=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Uo=/\w*$/,L=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,j=/^0o[0-7]+$/i,K=/^(?:0|[1-9]\d*)$/,Be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ye=/($^)/,tt=/['\n\r\u2028\u2029\\]/g,nt="\\ud800-\\udfff",pt="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",kt=pt+lt+ht,dn="\\u2700-\\u27bf",$t="a-z\\xdf-\\xf6\\xf8-\\xff",ti="\\xac\\xb1\\xd7\\xf7",Bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",Xs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ut="A-Z\\xc0-\\xd6\\xd8-\\xde",pi="\\ufe0e\\ufe0f",qs=ti+Bt+dt+Xs,Ai="['’]",Ys="["+nt+"]",Qt="["+qs+"]",Wn="["+kt+"]",Kr="\\d+",wn="["+dn+"]",Zr="["+$t+"]",No="[^"+nt+qs+Kr+dn+$t+Ut+"]",Jr="\\ud83c[\\udffb-\\udfff]",ug="(?:"+Wn+"|"+Jr+")",eh="[^"+nt+"]",El="(?:\\ud83c[\\udde6-\\uddff]){2}",bl="[\\ud800-\\udbff][\\udc00-\\udfff]",jr="["+Ut+"]",th="\\u200d",nh="(?:"+Zr+"|"+No+")",hg="(?:"+jr+"|"+No+")",ih="(?:"+Ai+"(?:d|ll|m|re|s|t|ve))?",rh="(?:"+Ai+"(?:D|LL|M|RE|S|T|VE))?",sh=ug+"?",oh="["+pi+"]?",fg="(?:"+th+"(?:"+[eh,El,bl].join("|")+")"+oh+sh+")*",dg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ah=oh+sh+fg,mg="(?:"+[wn,El,bl].join("|")+")"+ah,gg="(?:"+[eh+Wn+"?",Wn,El,bl,Ys].join("|")+")",_g=RegExp(Ai,"g"),vg=RegExp(Wn,"g"),Tl=RegExp(Jr+"(?="+Jr+")|"+gg+ah,"g"),xg=RegExp([jr+"?"+Zr+"+"+ih+"(?="+[Qt,jr,"$"].join("|")+")",hg+"+"+rh+"(?="+[Qt,jr+nh,"$"].join("|")+")",jr+"?"+nh+"+"+ih,jr+"+"+rh,pg,dg,Kr,mg].join("|"),"g"),yg=RegExp("["+th+nt+kt+pi+"]"),Sg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Mg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Eg=-1,zt={};zt[we]=zt[Re]=zt[et]=zt[Te]=zt[Ot]=zt[ut]=zt[Ze]=zt[ze]=zt[qe]=!0,zt[ve]=zt[De]=zt[je]=zt[He]=zt[Ke]=zt[Oe]=zt[Xe]=zt[F]=zt[ie]=zt[Ee]=zt[Pe]=zt[ot]=zt[P]=zt[b]=zt[Se]=!1;var Ft={};Ft[ve]=Ft[De]=Ft[je]=Ft[Ke]=Ft[He]=Ft[Oe]=Ft[we]=Ft[Re]=Ft[et]=Ft[Te]=Ft[Ot]=Ft[ie]=Ft[Ee]=Ft[Pe]=Ft[ot]=Ft[P]=Ft[b]=Ft[ee]=Ft[ut]=Ft[Ze]=Ft[ze]=Ft[qe]=!0,Ft[Xe]=Ft[F]=Ft[Se]=!1;var bg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Tg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ag={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cg=parseFloat,Rg=parseInt,lh=typeof _o=="object"&&_o&&_o.Object===Object&&_o,Lg=typeof self=="object"&&self&&self.Object===Object&&self,cn=lh||Lg||Function("return this")(),Al=e&&!e.nodeType&&e,vr=Al&&!0&&i&&!i.nodeType&&i,ch=vr&&vr.exports===Al,wl=ch&&lh.process,Xn=function(){try{var k=vr&&vr.require&&vr.require("util").types;return k||wl&&wl.binding&&wl.binding("util")}catch{}}(),uh=Xn&&Xn.isArrayBuffer,hh=Xn&&Xn.isDate,fh=Xn&&Xn.isMap,dh=Xn&&Xn.isRegExp,ph=Xn&&Xn.isSet,mh=Xn&&Xn.isTypedArray;function Un(k,se,J){switch(J.length){case 0:return k.call(se);case 1:return k.call(se,J[0]);case 2:return k.call(se,J[0],J[1]);case 3:return k.call(se,J[0],J[1],J[2])}return k.apply(se,J)}function Pg(k,se,J,Ge){for(var ct=-1,Ct=k==null?0:k.length;++ct<Ct;){var en=k[ct];se(Ge,en,J(en),k)}return Ge}function qn(k,se){for(var J=-1,Ge=k==null?0:k.length;++J<Ge&&se(k[J],J,k)!==!1;);return k}function Ig(k,se){for(var J=k==null?0:k.length;J--&&se(k[J],J,k)!==!1;);return k}function gh(k,se){for(var J=-1,Ge=k==null?0:k.length;++J<Ge;)if(!se(k[J],J,k))return!1;return!0}function Yi(k,se){for(var J=-1,Ge=k==null?0:k.length,ct=0,Ct=[];++J<Ge;){var en=k[J];se(en,J,k)&&(Ct[ct++]=en)}return Ct}function Oo(k,se){var J=k==null?0:k.length;return!!J&&Qr(k,se,0)>-1}function Cl(k,se,J){for(var Ge=-1,ct=k==null?0:k.length;++Ge<ct;)if(J(se,k[Ge]))return!0;return!1}function Vt(k,se){for(var J=-1,Ge=k==null?0:k.length,ct=Array(Ge);++J<Ge;)ct[J]=se(k[J],J,k);return ct}function $i(k,se){for(var J=-1,Ge=se.length,ct=k.length;++J<Ge;)k[ct+J]=se[J];return k}function Rl(k,se,J,Ge){var ct=-1,Ct=k==null?0:k.length;for(Ge&&Ct&&(J=k[++ct]);++ct<Ct;)J=se(J,k[ct],ct,k);return J}function Dg(k,se,J,Ge){var ct=k==null?0:k.length;for(Ge&&ct&&(J=k[--ct]);ct--;)J=se(J,k[ct],ct,k);return J}function Ll(k,se){for(var J=-1,Ge=k==null?0:k.length;++J<Ge;)if(se(k[J],J,k))return!0;return!1}var Ug=Pl("length");function Ng(k){return k.split("")}function Og(k){return k.match(Io)||[]}function _h(k,se,J){var Ge;return J(k,function(ct,Ct,en){if(se(ct,Ct,en))return Ge=Ct,!1}),Ge}function Fo(k,se,J,Ge){for(var ct=k.length,Ct=J+(Ge?1:-1);Ge?Ct--:++Ct<ct;)if(se(k[Ct],Ct,k))return Ct;return-1}function Qr(k,se,J){return se===se?$g(k,se,J):Fo(k,vh,J)}function Fg(k,se,J,Ge){for(var ct=J-1,Ct=k.length;++ct<Ct;)if(Ge(k[ct],se))return ct;return-1}function vh(k){return k!==k}function xh(k,se){var J=k==null?0:k.length;return J?Dl(k,se)/J:me}function Pl(k){return function(se){return se==null?t:se[k]}}function Il(k){return function(se){return k==null?t:k[se]}}function yh(k,se,J,Ge,ct){return ct(k,function(Ct,en,Nt){J=Ge?(Ge=!1,Ct):se(J,Ct,en,Nt)}),J}function Bg(k,se){var J=k.length;for(k.sort(se);J--;)k[J]=k[J].value;return k}function Dl(k,se){for(var J,Ge=-1,ct=k.length;++Ge<ct;){var Ct=se(k[Ge]);Ct!==t&&(J=J===t?Ct:J+Ct)}return J}function Ul(k,se){for(var J=-1,Ge=Array(k);++J<k;)Ge[J]=se(J);return Ge}function zg(k,se){return Vt(se,function(J){return[J,k[J]]})}function Sh(k){return k&&k.slice(0,Th(k)+1).replace(ei,"")}function Nn(k){return function(se){return k(se)}}function Nl(k,se){return Vt(se,function(J){return k[J]})}function $s(k,se){return k.has(se)}function Mh(k,se){for(var J=-1,Ge=k.length;++J<Ge&&Qr(se,k[J],0)>-1;);return J}function Eh(k,se){for(var J=k.length;J--&&Qr(se,k[J],0)>-1;);return J}function Gg(k,se){for(var J=k.length,Ge=0;J--;)k[J]===se&&++Ge;return Ge}var Hg=Il(bg),kg=Il(Tg);function Vg(k){return"\\"+wg[k]}function Wg(k,se){return k==null?t:k[se]}function es(k){return yg.test(k)}function Xg(k){return Sg.test(k)}function qg(k){for(var se,J=[];!(se=k.next()).done;)J.push(se.value);return J}function Ol(k){var se=-1,J=Array(k.size);return k.forEach(function(Ge,ct){J[++se]=[ct,Ge]}),J}function bh(k,se){return function(J){return k(se(J))}}function Ki(k,se){for(var J=-1,Ge=k.length,ct=0,Ct=[];++J<Ge;){var en=k[J];(en===se||en===d)&&(k[J]=d,Ct[ct++]=J)}return Ct}function Bo(k){var se=-1,J=Array(k.size);return k.forEach(function(Ge){J[++se]=Ge}),J}function Yg(k){var se=-1,J=Array(k.size);return k.forEach(function(Ge){J[++se]=[Ge,Ge]}),J}function $g(k,se,J){for(var Ge=J-1,ct=k.length;++Ge<ct;)if(k[Ge]===se)return Ge;return-1}function Kg(k,se,J){for(var Ge=J+1;Ge--;)if(k[Ge]===se)return Ge;return Ge}function ts(k){return es(k)?Jg(k):Ug(k)}function ni(k){return es(k)?jg(k):Ng(k)}function Th(k){for(var se=k.length;se--&&qr.test(k.charAt(se)););return se}var Zg=Il(Ag);function Jg(k){for(var se=Tl.lastIndex=0;Tl.test(k);)++se;return se}function jg(k){return k.match(Tl)||[]}function Qg(k){return k.match(xg)||[]}var e_=function k(se){se=se==null?cn:ns.defaults(cn.Object(),se,ns.pick(cn,Mg));var J=se.Array,Ge=se.Date,ct=se.Error,Ct=se.Function,en=se.Math,Nt=se.Object,Fl=se.RegExp,t_=se.String,Yn=se.TypeError,zo=J.prototype,n_=Ct.prototype,is=Nt.prototype,Go=se["__core-js_shared__"],Ho=n_.toString,It=is.hasOwnProperty,i_=0,Ah=function(){var r=/[^.]+$/.exec(Go&&Go.keys&&Go.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),ko=is.toString,r_=Ho.call(Nt),s_=cn._,o_=Fl("^"+Ho.call(It).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vo=ch?se.Buffer:t,Zi=se.Symbol,Wo=se.Uint8Array,wh=Vo?Vo.allocUnsafe:t,Xo=bh(Nt.getPrototypeOf,Nt),Ch=Nt.create,Rh=is.propertyIsEnumerable,qo=zo.splice,Lh=Zi?Zi.isConcatSpreadable:t,Ks=Zi?Zi.iterator:t,xr=Zi?Zi.toStringTag:t,Yo=function(){try{var r=br(Nt,"defineProperty");return r({},"",{}),r}catch{}}(),a_=se.clearTimeout!==cn.clearTimeout&&se.clearTimeout,l_=Ge&&Ge.now!==cn.Date.now&&Ge.now,c_=se.setTimeout!==cn.setTimeout&&se.setTimeout,$o=en.ceil,Ko=en.floor,Bl=Nt.getOwnPropertySymbols,u_=Vo?Vo.isBuffer:t,Ph=se.isFinite,h_=zo.join,f_=bh(Nt.keys,Nt),tn=en.max,pn=en.min,d_=Ge.now,p_=se.parseInt,Ih=en.random,m_=zo.reverse,zl=br(se,"DataView"),Zs=br(se,"Map"),Gl=br(se,"Promise"),rs=br(se,"Set"),Js=br(se,"WeakMap"),js=br(Nt,"create"),Zo=Js&&new Js,ss={},g_=Tr(zl),__=Tr(Zs),v_=Tr(Gl),x_=Tr(rs),y_=Tr(Js),Jo=Zi?Zi.prototype:t,Qs=Jo?Jo.valueOf:t,Dh=Jo?Jo.toString:t;function A(r){if(Yt(r)&&!ft(r)&&!(r instanceof Et)){if(r instanceof $n)return r;if(It.call(r,"__wrapped__"))return Nf(r)}return new $n(r)}var os=function(){function r(){}return function(o){if(!Wt(o))return{};if(Ch)return Ch(o);r.prototype=o;var u=new r;return r.prototype=t,u}}();function jo(){}function $n(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}A.templateSettings={escape:Ne,evaluate:gt,interpolate:wt,variable:"",imports:{_:A}},A.prototype=jo.prototype,A.prototype.constructor=A,$n.prototype=os(jo.prototype),$n.prototype.constructor=$n;function Et(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ye,this.__views__=[]}function S_(){var r=new Et(this.__wrapped__);return r.__actions__=Cn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Cn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Cn(this.__views__),r}function M_(){if(this.__filtered__){var r=new Et(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function E_(){var r=this.__wrapped__.value(),o=this.__dir__,u=ft(r),p=o<0,S=u?r.length:0,w=Nv(0,S,this.__views__),O=w.start,z=w.end,X=z-O,le=p?z:O-1,he=this.__iteratees__,_e=he.length,Ie=0,$e=pn(X,this.__takeCount__);if(!u||!p&&S==X&&$e==X)return rf(r,this.__actions__);var it=[];e:for(;X--&&Ie<$e;){le+=o;for(var _t=-1,rt=r[le];++_t<_e;){var St=he[_t],bt=St.iteratee,Bn=St.type,Sn=bt(rt);if(Bn==oe)rt=Sn;else if(!Sn){if(Bn==H)continue e;break e}}it[Ie++]=rt}return it}Et.prototype=os(jo.prototype),Et.prototype.constructor=Et;function yr(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}function b_(){this.__data__=js?js(null):{},this.size=0}function T_(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function A_(r){var o=this.__data__;if(js){var u=o[r];return u===h?t:u}return It.call(o,r)?o[r]:t}function w_(r){var o=this.__data__;return js?o[r]!==t:It.call(o,r)}function C_(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=js&&o===t?h:o,this}yr.prototype.clear=b_,yr.prototype.delete=T_,yr.prototype.get=A_,yr.prototype.has=w_,yr.prototype.set=C_;function wi(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}function R_(){this.__data__=[],this.size=0}function L_(r){var o=this.__data__,u=Qo(o,r);if(u<0)return!1;var p=o.length-1;return u==p?o.pop():qo.call(o,u,1),--this.size,!0}function P_(r){var o=this.__data__,u=Qo(o,r);return u<0?t:o[u][1]}function I_(r){return Qo(this.__data__,r)>-1}function D_(r,o){var u=this.__data__,p=Qo(u,r);return p<0?(++this.size,u.push([r,o])):u[p][1]=o,this}wi.prototype.clear=R_,wi.prototype.delete=L_,wi.prototype.get=P_,wi.prototype.has=I_,wi.prototype.set=D_;function Ci(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var p=r[o];this.set(p[0],p[1])}}function U_(){this.size=0,this.__data__={hash:new yr,map:new(Zs||wi),string:new yr}}function N_(r){var o=ha(this,r).delete(r);return this.size-=o?1:0,o}function O_(r){return ha(this,r).get(r)}function F_(r){return ha(this,r).has(r)}function B_(r,o){var u=ha(this,r),p=u.size;return u.set(r,o),this.size+=u.size==p?0:1,this}Ci.prototype.clear=U_,Ci.prototype.delete=N_,Ci.prototype.get=O_,Ci.prototype.has=F_,Ci.prototype.set=B_;function Sr(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new Ci;++o<u;)this.add(r[o])}function z_(r){return this.__data__.set(r,h),this}function G_(r){return this.__data__.has(r)}Sr.prototype.add=Sr.prototype.push=z_,Sr.prototype.has=G_;function ii(r){var o=this.__data__=new wi(r);this.size=o.size}function H_(){this.__data__=new wi,this.size=0}function k_(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}function V_(r){return this.__data__.get(r)}function W_(r){return this.__data__.has(r)}function X_(r,o){var u=this.__data__;if(u instanceof wi){var p=u.__data__;if(!Zs||p.length<s-1)return p.push([r,o]),this.size=++u.size,this;u=this.__data__=new Ci(p)}return u.set(r,o),this.size=u.size,this}ii.prototype.clear=H_,ii.prototype.delete=k_,ii.prototype.get=V_,ii.prototype.has=W_,ii.prototype.set=X_;function Uh(r,o){var u=ft(r),p=!u&&Ar(r),S=!u&&!p&&tr(r),w=!u&&!p&&!S&&us(r),O=u||p||S||w,z=O?Ul(r.length,t_):[],X=z.length;for(var le in r)(o||It.call(r,le))&&!(O&&(le=="length"||S&&(le=="offset"||le=="parent")||w&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||Ii(le,X)))&&z.push(le);return z}function Nh(r){var o=r.length;return o?r[Jl(0,o-1)]:t}function q_(r,o){return fa(Cn(r),Mr(o,0,r.length))}function Y_(r){return fa(Cn(r))}function Hl(r,o,u){(u!==t&&!ri(r[o],u)||u===t&&!(o in r))&&Ri(r,o,u)}function eo(r,o,u){var p=r[o];(!(It.call(r,o)&&ri(p,u))||u===t&&!(o in r))&&Ri(r,o,u)}function Qo(r,o){for(var u=r.length;u--;)if(ri(r[u][0],o))return u;return-1}function $_(r,o,u,p){return Ji(r,function(S,w,O){o(p,S,u(S),O)}),p}function Oh(r,o){return r&&gi(o,on(o),r)}function K_(r,o){return r&&gi(o,Ln(o),r)}function Ri(r,o,u){o=="__proto__"&&Yo?Yo(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}function kl(r,o){for(var u=-1,p=o.length,S=J(p),w=r==null;++u<p;)S[u]=w?t:Mc(r,o[u]);return S}function Mr(r,o,u){return r===r&&(u!==t&&(r=r<=u?r:u),o!==t&&(r=r>=o?r:o)),r}function Kn(r,o,u,p,S,w){var O,z=o&m,X=o&v,le=o&x;if(u&&(O=S?u(r,p,S,w):u(r)),O!==t)return O;if(!Wt(r))return r;var he=ft(r);if(he){if(O=Fv(r),!z)return Cn(r,O)}else{var _e=mn(r),Ie=_e==F||_e==Ae;if(tr(r))return af(r,z);if(_e==Pe||_e==ve||Ie&&!S){if(O=X||Ie?{}:Af(r),!z)return X?Av(r,K_(O,r)):Tv(r,Oh(O,r))}else{if(!Ft[_e])return S?r:{};O=Bv(r,_e,z)}}w||(w=new ii);var $e=w.get(r);if($e)return $e;w.set(r,O),td(r)?r.forEach(function(rt){O.add(Kn(rt,o,u,rt,r,w))}):Qf(r)&&r.forEach(function(rt,St){O.set(St,Kn(rt,o,u,St,r,w))});var it=le?X?lc:ac:X?Ln:on,_t=he?t:it(r);return qn(_t||r,function(rt,St){_t&&(St=rt,rt=r[St]),eo(O,St,Kn(rt,o,u,St,r,w))}),O}function Z_(r){var o=on(r);return function(u){return Fh(u,r,o)}}function Fh(r,o,u){var p=u.length;if(r==null)return!p;for(r=Nt(r);p--;){var S=u[p],w=o[S],O=r[S];if(O===t&&!(S in r)||!w(O))return!1}return!0}function Bh(r,o,u){if(typeof r!="function")throw new Yn(c);return ao(function(){r.apply(t,u)},o)}function to(r,o,u,p){var S=-1,w=Oo,O=!0,z=r.length,X=[],le=o.length;if(!z)return X;u&&(o=Vt(o,Nn(u))),p?(w=Cl,O=!1):o.length>=s&&(w=$s,O=!1,o=new Sr(o));e:for(;++S<z;){var he=r[S],_e=u==null?he:u(he);if(he=p||he!==0?he:0,O&&_e===_e){for(var Ie=le;Ie--;)if(o[Ie]===_e)continue e;X.push(he)}else w(o,_e,p)||X.push(he)}return X}var Ji=ff(mi),zh=ff(Wl,!0);function J_(r,o){var u=!0;return Ji(r,function(p,S,w){return u=!!o(p,S,w),u}),u}function ea(r,o,u){for(var p=-1,S=r.length;++p<S;){var w=r[p],O=o(w);if(O!=null&&(z===t?O===O&&!Fn(O):u(O,z)))var z=O,X=w}return X}function j_(r,o,u,p){var S=r.length;for(u=mt(u),u<0&&(u=-u>S?0:S+u),p=p===t||p>S?S:mt(p),p<0&&(p+=S),p=u>p?0:id(p);u<p;)r[u++]=o;return r}function Gh(r,o){var u=[];return Ji(r,function(p,S,w){o(p,S,w)&&u.push(p)}),u}function un(r,o,u,p,S){var w=-1,O=r.length;for(u||(u=Gv),S||(S=[]);++w<O;){var z=r[w];o>0&&u(z)?o>1?un(z,o-1,u,p,S):$i(S,z):p||(S[S.length]=z)}return S}var Vl=df(),Hh=df(!0);function mi(r,o){return r&&Vl(r,o,on)}function Wl(r,o){return r&&Hh(r,o,on)}function ta(r,o){return Yi(o,function(u){return Di(r[u])})}function Er(r,o){o=Qi(o,r);for(var u=0,p=o.length;r!=null&&u<p;)r=r[_i(o[u++])];return u&&u==p?r:t}function kh(r,o,u){var p=o(r);return ft(r)?p:$i(p,u(r))}function xn(r){return r==null?r===t?re:pe:xr&&xr in Nt(r)?Uv(r):Yv(r)}function Xl(r,o){return r>o}function Q_(r,o){return r!=null&&It.call(r,o)}function ev(r,o){return r!=null&&o in Nt(r)}function tv(r,o,u){return r>=pn(o,u)&&r<tn(o,u)}function ql(r,o,u){for(var p=u?Cl:Oo,S=r[0].length,w=r.length,O=w,z=J(w),X=1/0,le=[];O--;){var he=r[O];O&&o&&(he=Vt(he,Nn(o))),X=pn(he.length,X),z[O]=!u&&(o||S>=120&&he.length>=120)?new Sr(O&&he):t}he=r[0];var _e=-1,Ie=z[0];e:for(;++_e<S&&le.length<X;){var $e=he[_e],it=o?o($e):$e;if($e=u||$e!==0?$e:0,!(Ie?$s(Ie,it):p(le,it,u))){for(O=w;--O;){var _t=z[O];if(!(_t?$s(_t,it):p(r[O],it,u)))continue e}Ie&&Ie.push(it),le.push($e)}}return le}function nv(r,o,u,p){return mi(r,function(S,w,O){o(p,u(S),w,O)}),p}function no(r,o,u){o=Qi(o,r),r=Lf(r,o);var p=r==null?r:r[_i(Jn(o))];return p==null?t:Un(p,r,u)}function Vh(r){return Yt(r)&&xn(r)==ve}function iv(r){return Yt(r)&&xn(r)==je}function rv(r){return Yt(r)&&xn(r)==Oe}function io(r,o,u,p,S){return r===o?!0:r==null||o==null||!Yt(r)&&!Yt(o)?r!==r&&o!==o:sv(r,o,u,p,io,S)}function sv(r,o,u,p,S,w){var O=ft(r),z=ft(o),X=O?De:mn(r),le=z?De:mn(o);X=X==ve?Pe:X,le=le==ve?Pe:le;var he=X==Pe,_e=le==Pe,Ie=X==le;if(Ie&&tr(r)){if(!tr(o))return!1;O=!0,he=!1}if(Ie&&!he)return w||(w=new ii),O||us(r)?Ef(r,o,u,p,S,w):Iv(r,o,X,u,p,S,w);if(!(u&y)){var $e=he&&It.call(r,"__wrapped__"),it=_e&&It.call(o,"__wrapped__");if($e||it){var _t=$e?r.value():r,rt=it?o.value():o;return w||(w=new ii),S(_t,rt,u,p,w)}}return Ie?(w||(w=new ii),Dv(r,o,u,p,S,w)):!1}function ov(r){return Yt(r)&&mn(r)==ie}function Yl(r,o,u,p){var S=u.length,w=S,O=!p;if(r==null)return!w;for(r=Nt(r);S--;){var z=u[S];if(O&&z[2]?z[1]!==r[z[0]]:!(z[0]in r))return!1}for(;++S<w;){z=u[S];var X=z[0],le=r[X],he=z[1];if(O&&z[2]){if(le===t&&!(X in r))return!1}else{var _e=new ii;if(p)var Ie=p(le,he,X,r,o,_e);if(!(Ie===t?io(he,le,y|E,p,_e):Ie))return!1}}return!0}function Wh(r){if(!Wt(r)||kv(r))return!1;var o=Di(r)?o_:Z;return o.test(Tr(r))}function av(r){return Yt(r)&&xn(r)==ot}function lv(r){return Yt(r)&&mn(r)==P}function cv(r){return Yt(r)&&va(r.length)&&!!zt[xn(r)]}function Xh(r){return typeof r=="function"?r:r==null?Pn:typeof r=="object"?ft(r)?$h(r[0],r[1]):Yh(r):pd(r)}function $l(r){if(!oo(r))return f_(r);var o=[];for(var u in Nt(r))It.call(r,u)&&u!="constructor"&&o.push(u);return o}function uv(r){if(!Wt(r))return qv(r);var o=oo(r),u=[];for(var p in r)p=="constructor"&&(o||!It.call(r,p))||u.push(p);return u}function Kl(r,o){return r<o}function qh(r,o){var u=-1,p=Rn(r)?J(r.length):[];return Ji(r,function(S,w,O){p[++u]=o(S,w,O)}),p}function Yh(r){var o=uc(r);return o.length==1&&o[0][2]?Cf(o[0][0],o[0][1]):function(u){return u===r||Yl(u,r,o)}}function $h(r,o){return fc(r)&&wf(o)?Cf(_i(r),o):function(u){var p=Mc(u,r);return p===t&&p===o?Ec(u,r):io(o,p,y|E)}}function na(r,o,u,p,S){r!==o&&Vl(o,function(w,O){if(S||(S=new ii),Wt(w))hv(r,o,O,u,na,p,S);else{var z=p?p(pc(r,O),w,O+"",r,o,S):t;z===t&&(z=w),Hl(r,O,z)}},Ln)}function hv(r,o,u,p,S,w,O){var z=pc(r,u),X=pc(o,u),le=O.get(X);if(le){Hl(r,u,le);return}var he=w?w(z,X,u+"",r,o,O):t,_e=he===t;if(_e){var Ie=ft(X),$e=!Ie&&tr(X),it=!Ie&&!$e&&us(X);he=X,Ie||$e||it?ft(z)?he=z:Kt(z)?he=Cn(z):$e?(_e=!1,he=af(X,!0)):it?(_e=!1,he=lf(X,!0)):he=[]:lo(X)||Ar(X)?(he=z,Ar(z)?he=rd(z):(!Wt(z)||Di(z))&&(he=Af(X))):_e=!1}_e&&(O.set(X,he),S(he,X,p,w,O),O.delete(X)),Hl(r,u,he)}function Kh(r,o){var u=r.length;if(u)return o+=o<0?u:0,Ii(o,u)?r[o]:t}function Zh(r,o,u){o.length?o=Vt(o,function(w){return ft(w)?function(O){return Er(O,w.length===1?w[0]:w)}:w}):o=[Pn];var p=-1;o=Vt(o,Nn(Qe()));var S=qh(r,function(w,O,z){var X=Vt(o,function(le){return le(w)});return{criteria:X,index:++p,value:w}});return Bg(S,function(w,O){return bv(w,O,u)})}function fv(r,o){return Jh(r,o,function(u,p){return Ec(r,p)})}function Jh(r,o,u){for(var p=-1,S=o.length,w={};++p<S;){var O=o[p],z=Er(r,O);u(z,O)&&ro(w,Qi(O,r),z)}return w}function dv(r){return function(o){return Er(o,r)}}function Zl(r,o,u,p){var S=p?Fg:Qr,w=-1,O=o.length,z=r;for(r===o&&(o=Cn(o)),u&&(z=Vt(r,Nn(u)));++w<O;)for(var X=0,le=o[w],he=u?u(le):le;(X=S(z,he,X,p))>-1;)z!==r&&qo.call(z,X,1),qo.call(r,X,1);return r}function jh(r,o){for(var u=r?o.length:0,p=u-1;u--;){var S=o[u];if(u==p||S!==w){var w=S;Ii(S)?qo.call(r,S,1):ec(r,S)}}return r}function Jl(r,o){return r+Ko(Ih()*(o-r+1))}function pv(r,o,u,p){for(var S=-1,w=tn($o((o-r)/(u||1)),0),O=J(w);w--;)O[p?w:++S]=r,r+=u;return O}function jl(r,o){var u="";if(!r||o<1||o>ne)return u;do o%2&&(u+=r),o=Ko(o/2),o&&(r+=r);while(o);return u}function yt(r,o){return mc(Rf(r,o,Pn),r+"")}function mv(r){return Nh(hs(r))}function gv(r,o){var u=hs(r);return fa(u,Mr(o,0,u.length))}function ro(r,o,u,p){if(!Wt(r))return r;o=Qi(o,r);for(var S=-1,w=o.length,O=w-1,z=r;z!=null&&++S<w;){var X=_i(o[S]),le=u;if(X==="__proto__"||X==="constructor"||X==="prototype")return r;if(S!=O){var he=z[X];le=p?p(he,X,z):t,le===t&&(le=Wt(he)?he:Ii(o[S+1])?[]:{})}eo(z,X,le),z=z[X]}return r}var Qh=Zo?function(r,o){return Zo.set(r,o),r}:Pn,_v=Yo?function(r,o){return Yo(r,"toString",{configurable:!0,enumerable:!1,value:Tc(o),writable:!0})}:Pn;function vv(r){return fa(hs(r))}function Zn(r,o,u){var p=-1,S=r.length;o<0&&(o=-o>S?0:S+o),u=u>S?S:u,u<0&&(u+=S),S=o>u?0:u-o>>>0,o>>>=0;for(var w=J(S);++p<S;)w[p]=r[p+o];return w}function xv(r,o){var u;return Ji(r,function(p,S,w){return u=o(p,S,w),!u}),!!u}function ia(r,o,u){var p=0,S=r==null?p:r.length;if(typeof o=="number"&&o===o&&S<=st){for(;p<S;){var w=p+S>>>1,O=r[w];O!==null&&!Fn(O)&&(u?O<=o:O<o)?p=w+1:S=w}return S}return Ql(r,o,Pn,u)}function Ql(r,o,u,p){var S=0,w=r==null?0:r.length;if(w===0)return 0;o=u(o);for(var O=o!==o,z=o===null,X=Fn(o),le=o===t;S<w;){var he=Ko((S+w)/2),_e=u(r[he]),Ie=_e!==t,$e=_e===null,it=_e===_e,_t=Fn(_e);if(O)var rt=p||it;else le?rt=it&&(p||Ie):z?rt=it&&Ie&&(p||!$e):X?rt=it&&Ie&&!$e&&(p||!_t):$e||_t?rt=!1:rt=p?_e<=o:_e<o;rt?S=he+1:w=he}return pn(w,Fe)}function ef(r,o){for(var u=-1,p=r.length,S=0,w=[];++u<p;){var O=r[u],z=o?o(O):O;if(!u||!ri(z,X)){var X=z;w[S++]=O===0?0:O}}return w}function tf(r){return typeof r=="number"?r:Fn(r)?me:+r}function On(r){if(typeof r=="string")return r;if(ft(r))return Vt(r,On)+"";if(Fn(r))return Dh?Dh.call(r):"";var o=r+"";return o=="0"&&1/r==-ce?"-0":o}function ji(r,o,u){var p=-1,S=Oo,w=r.length,O=!0,z=[],X=z;if(u)O=!1,S=Cl;else if(w>=s){var le=o?null:Lv(r);if(le)return Bo(le);O=!1,S=$s,X=new Sr}else X=o?[]:z;e:for(;++p<w;){var he=r[p],_e=o?o(he):he;if(he=u||he!==0?he:0,O&&_e===_e){for(var Ie=X.length;Ie--;)if(X[Ie]===_e)continue e;o&&X.push(_e),z.push(he)}else S(X,_e,u)||(X!==z&&X.push(_e),z.push(he))}return z}function ec(r,o){return o=Qi(o,r),r=Lf(r,o),r==null||delete r[_i(Jn(o))]}function nf(r,o,u,p){return ro(r,o,u(Er(r,o)),p)}function ra(r,o,u,p){for(var S=r.length,w=p?S:-1;(p?w--:++w<S)&&o(r[w],w,r););return u?Zn(r,p?0:w,p?w+1:S):Zn(r,p?w+1:0,p?S:w)}function rf(r,o){var u=r;return u instanceof Et&&(u=u.value()),Rl(o,function(p,S){return S.func.apply(S.thisArg,$i([p],S.args))},u)}function tc(r,o,u){var p=r.length;if(p<2)return p?ji(r[0]):[];for(var S=-1,w=J(p);++S<p;)for(var O=r[S],z=-1;++z<p;)z!=S&&(w[S]=to(w[S]||O,r[z],o,u));return ji(un(w,1),o,u)}function sf(r,o,u){for(var p=-1,S=r.length,w=o.length,O={};++p<S;){var z=p<w?o[p]:t;u(O,r[p],z)}return O}function nc(r){return Kt(r)?r:[]}function ic(r){return typeof r=="function"?r:Pn}function Qi(r,o){return ft(r)?r:fc(r,o)?[r]:Uf(Rt(r))}var yv=yt;function er(r,o,u){var p=r.length;return u=u===t?p:u,!o&&u>=p?r:Zn(r,o,u)}var of=a_||function(r){return cn.clearTimeout(r)};function af(r,o){if(o)return r.slice();var u=r.length,p=wh?wh(u):new r.constructor(u);return r.copy(p),p}function rc(r){var o=new r.constructor(r.byteLength);return new Wo(o).set(new Wo(r)),o}function Sv(r,o){var u=o?rc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Mv(r){var o=new r.constructor(r.source,Uo.exec(r));return o.lastIndex=r.lastIndex,o}function Ev(r){return Qs?Nt(Qs.call(r)):{}}function lf(r,o){var u=o?rc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function cf(r,o){if(r!==o){var u=r!==t,p=r===null,S=r===r,w=Fn(r),O=o!==t,z=o===null,X=o===o,le=Fn(o);if(!z&&!le&&!w&&r>o||w&&O&&X&&!z&&!le||p&&O&&X||!u&&X||!S)return 1;if(!p&&!w&&!le&&r<o||le&&u&&S&&!p&&!w||z&&u&&S||!O&&S||!X)return-1}return 0}function bv(r,o,u){for(var p=-1,S=r.criteria,w=o.criteria,O=S.length,z=u.length;++p<O;){var X=cf(S[p],w[p]);if(X){if(p>=z)return X;var le=u[p];return X*(le=="desc"?-1:1)}}return r.index-o.index}function uf(r,o,u,p){for(var S=-1,w=r.length,O=u.length,z=-1,X=o.length,le=tn(w-O,0),he=J(X+le),_e=!p;++z<X;)he[z]=o[z];for(;++S<O;)(_e||S<w)&&(he[u[S]]=r[S]);for(;le--;)he[z++]=r[S++];return he}function hf(r,o,u,p){for(var S=-1,w=r.length,O=-1,z=u.length,X=-1,le=o.length,he=tn(w-z,0),_e=J(he+le),Ie=!p;++S<he;)_e[S]=r[S];for(var $e=S;++X<le;)_e[$e+X]=o[X];for(;++O<z;)(Ie||S<w)&&(_e[$e+u[O]]=r[S++]);return _e}function Cn(r,o){var u=-1,p=r.length;for(o||(o=J(p));++u<p;)o[u]=r[u];return o}function gi(r,o,u,p){var S=!u;u||(u={});for(var w=-1,O=o.length;++w<O;){var z=o[w],X=p?p(u[z],r[z],z,u,r):t;X===t&&(X=r[z]),S?Ri(u,z,X):eo(u,z,X)}return u}function Tv(r,o){return gi(r,hc(r),o)}function Av(r,o){return gi(r,bf(r),o)}function sa(r,o){return function(u,p){var S=ft(u)?Pg:$_,w=o?o():{};return S(u,r,Qe(p,2),w)}}function as(r){return yt(function(o,u){var p=-1,S=u.length,w=S>1?u[S-1]:t,O=S>2?u[2]:t;for(w=r.length>3&&typeof w=="function"?(S--,w):t,O&&yn(u[0],u[1],O)&&(w=S<3?t:w,S=1),o=Nt(o);++p<S;){var z=u[p];z&&r(o,z,p,w)}return o})}function ff(r,o){return function(u,p){if(u==null)return u;if(!Rn(u))return r(u,p);for(var S=u.length,w=o?S:-1,O=Nt(u);(o?w--:++w<S)&&p(O[w],w,O)!==!1;);return u}}function df(r){return function(o,u,p){for(var S=-1,w=Nt(o),O=p(o),z=O.length;z--;){var X=O[r?z:++S];if(u(w[X],X,w)===!1)break}return o}}function wv(r,o,u){var p=o&_,S=so(r);function w(){var O=this&&this!==cn&&this instanceof w?S:r;return O.apply(p?u:this,arguments)}return w}function pf(r){return function(o){o=Rt(o);var u=es(o)?ni(o):t,p=u?u[0]:o.charAt(0),S=u?er(u,1).join(""):o.slice(1);return p[r]()+S}}function ls(r){return function(o){return Rl(fd(hd(o).replace(_g,"")),r,"")}}function so(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=os(r.prototype),p=r.apply(u,o);return Wt(p)?p:u}}function Cv(r,o,u){var p=so(r);function S(){for(var w=arguments.length,O=J(w),z=w,X=cs(S);z--;)O[z]=arguments[z];var le=w<3&&O[0]!==X&&O[w-1]!==X?[]:Ki(O,X);if(w-=le.length,w<u)return xf(r,o,oa,S.placeholder,t,O,le,t,t,u-w);var he=this&&this!==cn&&this instanceof S?p:r;return Un(he,this,O)}return S}function mf(r){return function(o,u,p){var S=Nt(o);if(!Rn(o)){var w=Qe(u,3);o=on(o),u=function(z){return w(S[z],z,S)}}var O=r(o,u,p);return O>-1?S[w?o[O]:O]:t}}function gf(r){return Pi(function(o){var u=o.length,p=u,S=$n.prototype.thru;for(r&&o.reverse();p--;){var w=o[p];if(typeof w!="function")throw new Yn(c);if(S&&!O&&ua(w)=="wrapper")var O=new $n([],!0)}for(p=O?p:u;++p<u;){w=o[p];var z=ua(w),X=z=="wrapper"?cc(w):t;X&&dc(X[0])&&X[1]==(C|M|G|W)&&!X[4].length&&X[9]==1?O=O[ua(X[0])].apply(O,X[3]):O=w.length==1&&dc(w)?O[z]():O.thru(w)}return function(){var le=arguments,he=le[0];if(O&&le.length==1&&ft(he))return O.plant(he).value();for(var _e=0,Ie=u?o[_e].apply(this,le):he;++_e<u;)Ie=o[_e].call(this,Ie);return Ie}})}function oa(r,o,u,p,S,w,O,z,X,le){var he=o&C,_e=o&_,Ie=o&g,$e=o&(M|R),it=o&ae,_t=Ie?t:so(r);function rt(){for(var St=arguments.length,bt=J(St),Bn=St;Bn--;)bt[Bn]=arguments[Bn];if($e)var Sn=cs(rt),zn=Gg(bt,Sn);if(p&&(bt=uf(bt,p,S,$e)),w&&(bt=hf(bt,w,O,$e)),St-=zn,$e&&St<le){var Zt=Ki(bt,Sn);return xf(r,o,oa,rt.placeholder,u,bt,Zt,z,X,le-St)}var si=_e?u:this,Ni=Ie?si[r]:r;return St=bt.length,z?bt=$v(bt,z):it&&St>1&&bt.reverse(),he&&X<St&&(bt.length=X),this&&this!==cn&&this instanceof rt&&(Ni=_t||so(Ni)),Ni.apply(si,bt)}return rt}function _f(r,o){return function(u,p){return nv(u,r,o(p),{})}}function aa(r,o){return function(u,p){var S;if(u===t&&p===t)return o;if(u!==t&&(S=u),p!==t){if(S===t)return p;typeof u=="string"||typeof p=="string"?(u=On(u),p=On(p)):(u=tf(u),p=tf(p)),S=r(u,p)}return S}}function sc(r){return Pi(function(o){return o=Vt(o,Nn(Qe())),yt(function(u){var p=this;return r(o,function(S){return Un(S,p,u)})})})}function la(r,o){o=o===t?" ":On(o);var u=o.length;if(u<2)return u?jl(o,r):o;var p=jl(o,$o(r/ts(o)));return es(o)?er(ni(p),0,r).join(""):p.slice(0,r)}function Rv(r,o,u,p){var S=o&_,w=so(r);function O(){for(var z=-1,X=arguments.length,le=-1,he=p.length,_e=J(he+X),Ie=this&&this!==cn&&this instanceof O?w:r;++le<he;)_e[le]=p[le];for(;X--;)_e[le++]=arguments[++z];return Un(Ie,S?u:this,_e)}return O}function vf(r){return function(o,u,p){return p&&typeof p!="number"&&yn(o,u,p)&&(u=p=t),o=Ui(o),u===t?(u=o,o=0):u=Ui(u),p=p===t?o<u?1:-1:Ui(p),pv(o,u,p,r)}}function ca(r){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=jn(o),u=jn(u)),r(o,u)}}function xf(r,o,u,p,S,w,O,z,X,le){var he=o&M,_e=he?O:t,Ie=he?t:O,$e=he?w:t,it=he?t:w;o|=he?G:U,o&=~(he?U:G),o&D||(o&=~(_|g));var _t=[r,o,S,$e,_e,it,Ie,z,X,le],rt=u.apply(t,_t);return dc(r)&&Pf(rt,_t),rt.placeholder=p,If(rt,r,o)}function oc(r){var o=en[r];return function(u,p){if(u=jn(u),p=p==null?0:pn(mt(p),292),p&&Ph(u)){var S=(Rt(u)+"e").split("e"),w=o(S[0]+"e"+(+S[1]+p));return S=(Rt(w)+"e").split("e"),+(S[0]+"e"+(+S[1]-p))}return o(u)}}var Lv=rs&&1/Bo(new rs([,-0]))[1]==ce?function(r){return new rs(r)}:Cc;function yf(r){return function(o){var u=mn(o);return u==ie?Ol(o):u==P?Yg(o):zg(o,r(o))}}function Li(r,o,u,p,S,w,O,z){var X=o&g;if(!X&&typeof r!="function")throw new Yn(c);var le=p?p.length:0;if(le||(o&=~(G|U),p=S=t),O=O===t?O:tn(mt(O),0),z=z===t?z:mt(z),le-=S?S.length:0,o&U){var he=p,_e=S;p=S=t}var Ie=X?t:cc(r),$e=[r,o,u,p,S,he,_e,w,O,z];if(Ie&&Xv($e,Ie),r=$e[0],o=$e[1],u=$e[2],p=$e[3],S=$e[4],z=$e[9]=$e[9]===t?X?0:r.length:tn($e[9]-le,0),!z&&o&(M|R)&&(o&=~(M|R)),!o||o==_)var it=wv(r,o,u);else o==M||o==R?it=Cv(r,o,z):(o==G||o==(_|G))&&!S.length?it=Rv(r,o,u,p):it=oa.apply(t,$e);var _t=Ie?Qh:Pf;return If(_t(it,$e),r,o)}function Sf(r,o,u,p){return r===t||ri(r,is[u])&&!It.call(p,u)?o:r}function Mf(r,o,u,p,S,w){return Wt(r)&&Wt(o)&&(w.set(o,r),na(r,o,t,Mf,w),w.delete(o)),r}function Pv(r){return lo(r)?t:r}function Ef(r,o,u,p,S,w){var O=u&y,z=r.length,X=o.length;if(z!=X&&!(O&&X>z))return!1;var le=w.get(r),he=w.get(o);if(le&&he)return le==o&&he==r;var _e=-1,Ie=!0,$e=u&E?new Sr:t;for(w.set(r,o),w.set(o,r);++_e<z;){var it=r[_e],_t=o[_e];if(p)var rt=O?p(_t,it,_e,o,r,w):p(it,_t,_e,r,o,w);if(rt!==t){if(rt)continue;Ie=!1;break}if($e){if(!Ll(o,function(St,bt){if(!$s($e,bt)&&(it===St||S(it,St,u,p,w)))return $e.push(bt)})){Ie=!1;break}}else if(!(it===_t||S(it,_t,u,p,w))){Ie=!1;break}}return w.delete(r),w.delete(o),Ie}function Iv(r,o,u,p,S,w,O){switch(u){case Ke:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case je:return!(r.byteLength!=o.byteLength||!w(new Wo(r),new Wo(o)));case He:case Oe:case Ee:return ri(+r,+o);case Xe:return r.name==o.name&&r.message==o.message;case ot:case b:return r==o+"";case ie:var z=Ol;case P:var X=p&y;if(z||(z=Bo),r.size!=o.size&&!X)return!1;var le=O.get(r);if(le)return le==o;p|=E,O.set(r,o);var he=Ef(z(r),z(o),p,S,w,O);return O.delete(r),he;case ee:if(Qs)return Qs.call(r)==Qs.call(o)}return!1}function Dv(r,o,u,p,S,w){var O=u&y,z=ac(r),X=z.length,le=ac(o),he=le.length;if(X!=he&&!O)return!1;for(var _e=X;_e--;){var Ie=z[_e];if(!(O?Ie in o:It.call(o,Ie)))return!1}var $e=w.get(r),it=w.get(o);if($e&&it)return $e==o&&it==r;var _t=!0;w.set(r,o),w.set(o,r);for(var rt=O;++_e<X;){Ie=z[_e];var St=r[Ie],bt=o[Ie];if(p)var Bn=O?p(bt,St,Ie,o,r,w):p(St,bt,Ie,r,o,w);if(!(Bn===t?St===bt||S(St,bt,u,p,w):Bn)){_t=!1;break}rt||(rt=Ie=="constructor")}if(_t&&!rt){var Sn=r.constructor,zn=o.constructor;Sn!=zn&&"constructor"in r&&"constructor"in o&&!(typeof Sn=="function"&&Sn instanceof Sn&&typeof zn=="function"&&zn instanceof zn)&&(_t=!1)}return w.delete(r),w.delete(o),_t}function Pi(r){return mc(Rf(r,t,Bf),r+"")}function ac(r){return kh(r,on,hc)}function lc(r){return kh(r,Ln,bf)}var cc=Zo?function(r){return Zo.get(r)}:Cc;function ua(r){for(var o=r.name+"",u=ss[o],p=It.call(ss,o)?u.length:0;p--;){var S=u[p],w=S.func;if(w==null||w==r)return S.name}return o}function cs(r){var o=It.call(A,"placeholder")?A:r;return o.placeholder}function Qe(){var r=A.iteratee||Ac;return r=r===Ac?Xh:r,arguments.length?r(arguments[0],arguments[1]):r}function ha(r,o){var u=r.__data__;return Hv(o)?u[typeof o=="string"?"string":"hash"]:u.map}function uc(r){for(var o=on(r),u=o.length;u--;){var p=o[u],S=r[p];o[u]=[p,S,wf(S)]}return o}function br(r,o){var u=Wg(r,o);return Wh(u)?u:t}function Uv(r){var o=It.call(r,xr),u=r[xr];try{r[xr]=t;var p=!0}catch{}var S=ko.call(r);return p&&(o?r[xr]=u:delete r[xr]),S}var hc=Bl?function(r){return r==null?[]:(r=Nt(r),Yi(Bl(r),function(o){return Rh.call(r,o)}))}:Rc,bf=Bl?function(r){for(var o=[];r;)$i(o,hc(r)),r=Xo(r);return o}:Rc,mn=xn;(zl&&mn(new zl(new ArrayBuffer(1)))!=Ke||Zs&&mn(new Zs)!=ie||Gl&&mn(Gl.resolve())!=Ue||rs&&mn(new rs)!=P||Js&&mn(new Js)!=Se)&&(mn=function(r){var o=xn(r),u=o==Pe?r.constructor:t,p=u?Tr(u):"";if(p)switch(p){case g_:return Ke;case __:return ie;case v_:return Ue;case x_:return P;case y_:return Se}return o});function Nv(r,o,u){for(var p=-1,S=u.length;++p<S;){var w=u[p],O=w.size;switch(w.type){case"drop":r+=O;break;case"dropRight":o-=O;break;case"take":o=pn(o,r+O);break;case"takeRight":r=tn(r,o-O);break}}return{start:r,end:o}}function Ov(r){var o=r.match(Po);return o?o[1].split($r):[]}function Tf(r,o,u){o=Qi(o,r);for(var p=-1,S=o.length,w=!1;++p<S;){var O=_i(o[p]);if(!(w=r!=null&&u(r,O)))break;r=r[O]}return w||++p!=S?w:(S=r==null?0:r.length,!!S&&va(S)&&Ii(O,S)&&(ft(r)||Ar(r)))}function Fv(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&It.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Af(r){return typeof r.constructor=="function"&&!oo(r)?os(Xo(r)):{}}function Bv(r,o,u){var p=r.constructor;switch(o){case je:return rc(r);case He:case Oe:return new p(+r);case Ke:return Sv(r,u);case we:case Re:case et:case Te:case Ot:case ut:case Ze:case ze:case qe:return lf(r,u);case ie:return new p;case Ee:case b:return new p(r);case ot:return Mv(r);case P:return new p;case ee:return Ev(r)}}function zv(r,o){var u=o.length;if(!u)return r;var p=u-1;return o[p]=(u>1?"& ":"")+o[p],o=o.join(u>2?", ":" "),r.replace(Yr,`{
/* [wrapped with `+o+`] */
`)}function Gv(r){return ft(r)||Ar(r)||!!(Lh&&r&&r[Lh])}function Ii(r,o){var u=typeof r;return o=o??ne,!!o&&(u=="number"||u!="symbol"&&K.test(r))&&r>-1&&r%1==0&&r<o}function yn(r,o,u){if(!Wt(u))return!1;var p=typeof o;return(p=="number"?Rn(u)&&Ii(o,u.length):p=="string"&&o in u)?ri(u[o],r):!1}function fc(r,o){if(ft(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||Fn(r)?!0:Ht.test(r)||!Lt.test(r)||o!=null&&r in Nt(o)}function Hv(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function dc(r){var o=ua(r),u=A[o];if(typeof u!="function"||!(o in Et.prototype))return!1;if(r===u)return!0;var p=cc(u);return!!p&&r===p[0]}function kv(r){return!!Ah&&Ah in r}var Vv=Go?Di:Lc;function oo(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||is;return r===u}function wf(r){return r===r&&!Wt(r)}function Cf(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==t||r in Nt(u))}}function Wv(r){var o=ga(r,function(p){return u.size===f&&u.clear(),p}),u=o.cache;return o}function Xv(r,o){var u=r[1],p=o[1],S=u|p,w=S<(_|g|C),O=p==C&&u==M||p==C&&u==W&&r[7].length<=o[8]||p==(C|W)&&o[7].length<=o[8]&&u==M;if(!(w||O))return r;p&_&&(r[2]=o[2],S|=u&_?0:D);var z=o[3];if(z){var X=r[3];r[3]=X?uf(X,z,o[4]):z,r[4]=X?Ki(r[3],d):o[4]}return z=o[5],z&&(X=r[5],r[5]=X?hf(X,z,o[6]):z,r[6]=X?Ki(r[5],d):o[6]),z=o[7],z&&(r[7]=z),p&C&&(r[8]=r[8]==null?o[8]:pn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=S,r}function qv(r){var o=[];if(r!=null)for(var u in Nt(r))o.push(u);return o}function Yv(r){return ko.call(r)}function Rf(r,o,u){return o=tn(o===t?r.length-1:o,0),function(){for(var p=arguments,S=-1,w=tn(p.length-o,0),O=J(w);++S<w;)O[S]=p[o+S];S=-1;for(var z=J(o+1);++S<o;)z[S]=p[S];return z[o]=u(O),Un(r,this,z)}}function Lf(r,o){return o.length<2?r:Er(r,Zn(o,0,-1))}function $v(r,o){for(var u=r.length,p=pn(o.length,u),S=Cn(r);p--;){var w=o[p];r[p]=Ii(w,u)?S[w]:t}return r}function pc(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var Pf=Df(Qh),ao=c_||function(r,o){return cn.setTimeout(r,o)},mc=Df(_v);function If(r,o,u){var p=o+"";return mc(r,zv(p,Kv(Ov(p),u)))}function Df(r){var o=0,u=0;return function(){var p=d_(),S=fe-(p-u);if(u=p,S>0){if(++o>=xe)return arguments[0]}else o=0;return r.apply(t,arguments)}}function fa(r,o){var u=-1,p=r.length,S=p-1;for(o=o===t?p:o;++u<o;){var w=Jl(u,S),O=r[w];r[w]=r[u],r[u]=O}return r.length=o,r}var Uf=Wv(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(At,function(u,p,S,w){o.push(S?w.replace(Sl,"$1"):p||u)}),o});function _i(r){if(typeof r=="string"||Fn(r))return r;var o=r+"";return o=="0"&&1/r==-ce?"-0":o}function Tr(r){if(r!=null){try{return Ho.call(r)}catch{}try{return r+""}catch{}}return""}function Kv(r,o){return qn(te,function(u){var p="_."+u[0];o&u[1]&&!Oo(r,p)&&r.push(p)}),r.sort()}function Nf(r){if(r instanceof Et)return r.clone();var o=new $n(r.__wrapped__,r.__chain__);return o.__actions__=Cn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function Zv(r,o,u){(u?yn(r,o,u):o===t)?o=1:o=tn(mt(o),0);var p=r==null?0:r.length;if(!p||o<1)return[];for(var S=0,w=0,O=J($o(p/o));S<p;)O[w++]=Zn(r,S,S+=o);return O}function Jv(r){for(var o=-1,u=r==null?0:r.length,p=0,S=[];++o<u;){var w=r[o];w&&(S[p++]=w)}return S}function jv(){var r=arguments.length;if(!r)return[];for(var o=J(r-1),u=arguments[0],p=r;p--;)o[p-1]=arguments[p];return $i(ft(u)?Cn(u):[u],un(o,1))}var Qv=yt(function(r,o){return Kt(r)?to(r,un(o,1,Kt,!0)):[]}),e0=yt(function(r,o){var u=Jn(o);return Kt(u)&&(u=t),Kt(r)?to(r,un(o,1,Kt,!0),Qe(u,2)):[]}),t0=yt(function(r,o){var u=Jn(o);return Kt(u)&&(u=t),Kt(r)?to(r,un(o,1,Kt,!0),t,u):[]});function n0(r,o,u){var p=r==null?0:r.length;return p?(o=u||o===t?1:mt(o),Zn(r,o<0?0:o,p)):[]}function i0(r,o,u){var p=r==null?0:r.length;return p?(o=u||o===t?1:mt(o),o=p-o,Zn(r,0,o<0?0:o)):[]}function r0(r,o){return r&&r.length?ra(r,Qe(o,3),!0,!0):[]}function s0(r,o){return r&&r.length?ra(r,Qe(o,3),!0):[]}function o0(r,o,u,p){var S=r==null?0:r.length;return S?(u&&typeof u!="number"&&yn(r,o,u)&&(u=0,p=S),j_(r,o,u,p)):[]}function Of(r,o,u){var p=r==null?0:r.length;if(!p)return-1;var S=u==null?0:mt(u);return S<0&&(S=tn(p+S,0)),Fo(r,Qe(o,3),S)}function Ff(r,o,u){var p=r==null?0:r.length;if(!p)return-1;var S=p-1;return u!==t&&(S=mt(u),S=u<0?tn(p+S,0):pn(S,p-1)),Fo(r,Qe(o,3),S,!0)}function Bf(r){var o=r==null?0:r.length;return o?un(r,1):[]}function a0(r){var o=r==null?0:r.length;return o?un(r,ce):[]}function l0(r,o){var u=r==null?0:r.length;return u?(o=o===t?1:mt(o),un(r,o)):[]}function c0(r){for(var o=-1,u=r==null?0:r.length,p={};++o<u;){var S=r[o];p[S[0]]=S[1]}return p}function zf(r){return r&&r.length?r[0]:t}function u0(r,o,u){var p=r==null?0:r.length;if(!p)return-1;var S=u==null?0:mt(u);return S<0&&(S=tn(p+S,0)),Qr(r,o,S)}function h0(r){var o=r==null?0:r.length;return o?Zn(r,0,-1):[]}var f0=yt(function(r){var o=Vt(r,nc);return o.length&&o[0]===r[0]?ql(o):[]}),d0=yt(function(r){var o=Jn(r),u=Vt(r,nc);return o===Jn(u)?o=t:u.pop(),u.length&&u[0]===r[0]?ql(u,Qe(o,2)):[]}),p0=yt(function(r){var o=Jn(r),u=Vt(r,nc);return o=typeof o=="function"?o:t,o&&u.pop(),u.length&&u[0]===r[0]?ql(u,t,o):[]});function m0(r,o){return r==null?"":h_.call(r,o)}function Jn(r){var o=r==null?0:r.length;return o?r[o-1]:t}function g0(r,o,u){var p=r==null?0:r.length;if(!p)return-1;var S=p;return u!==t&&(S=mt(u),S=S<0?tn(p+S,0):pn(S,p-1)),o===o?Kg(r,o,S):Fo(r,vh,S,!0)}function _0(r,o){return r&&r.length?Kh(r,mt(o)):t}var v0=yt(Gf);function Gf(r,o){return r&&r.length&&o&&o.length?Zl(r,o):r}function x0(r,o,u){return r&&r.length&&o&&o.length?Zl(r,o,Qe(u,2)):r}function y0(r,o,u){return r&&r.length&&o&&o.length?Zl(r,o,t,u):r}var S0=Pi(function(r,o){var u=r==null?0:r.length,p=kl(r,o);return jh(r,Vt(o,function(S){return Ii(S,u)?+S:S}).sort(cf)),p});function M0(r,o){var u=[];if(!(r&&r.length))return u;var p=-1,S=[],w=r.length;for(o=Qe(o,3);++p<w;){var O=r[p];o(O,p,r)&&(u.push(O),S.push(p))}return jh(r,S),u}function gc(r){return r==null?r:m_.call(r)}function E0(r,o,u){var p=r==null?0:r.length;return p?(u&&typeof u!="number"&&yn(r,o,u)?(o=0,u=p):(o=o==null?0:mt(o),u=u===t?p:mt(u)),Zn(r,o,u)):[]}function b0(r,o){return ia(r,o)}function T0(r,o,u){return Ql(r,o,Qe(u,2))}function A0(r,o){var u=r==null?0:r.length;if(u){var p=ia(r,o);if(p<u&&ri(r[p],o))return p}return-1}function w0(r,o){return ia(r,o,!0)}function C0(r,o,u){return Ql(r,o,Qe(u,2),!0)}function R0(r,o){var u=r==null?0:r.length;if(u){var p=ia(r,o,!0)-1;if(ri(r[p],o))return p}return-1}function L0(r){return r&&r.length?ef(r):[]}function P0(r,o){return r&&r.length?ef(r,Qe(o,2)):[]}function I0(r){var o=r==null?0:r.length;return o?Zn(r,1,o):[]}function D0(r,o,u){return r&&r.length?(o=u||o===t?1:mt(o),Zn(r,0,o<0?0:o)):[]}function U0(r,o,u){var p=r==null?0:r.length;return p?(o=u||o===t?1:mt(o),o=p-o,Zn(r,o<0?0:o,p)):[]}function N0(r,o){return r&&r.length?ra(r,Qe(o,3),!1,!0):[]}function O0(r,o){return r&&r.length?ra(r,Qe(o,3)):[]}var F0=yt(function(r){return ji(un(r,1,Kt,!0))}),B0=yt(function(r){var o=Jn(r);return Kt(o)&&(o=t),ji(un(r,1,Kt,!0),Qe(o,2))}),z0=yt(function(r){var o=Jn(r);return o=typeof o=="function"?o:t,ji(un(r,1,Kt,!0),t,o)});function G0(r){return r&&r.length?ji(r):[]}function H0(r,o){return r&&r.length?ji(r,Qe(o,2)):[]}function k0(r,o){return o=typeof o=="function"?o:t,r&&r.length?ji(r,t,o):[]}function _c(r){if(!(r&&r.length))return[];var o=0;return r=Yi(r,function(u){if(Kt(u))return o=tn(u.length,o),!0}),Ul(o,function(u){return Vt(r,Pl(u))})}function Hf(r,o){if(!(r&&r.length))return[];var u=_c(r);return o==null?u:Vt(u,function(p){return Un(o,t,p)})}var V0=yt(function(r,o){return Kt(r)?to(r,o):[]}),W0=yt(function(r){return tc(Yi(r,Kt))}),X0=yt(function(r){var o=Jn(r);return Kt(o)&&(o=t),tc(Yi(r,Kt),Qe(o,2))}),q0=yt(function(r){var o=Jn(r);return o=typeof o=="function"?o:t,tc(Yi(r,Kt),t,o)}),Y0=yt(_c);function $0(r,o){return sf(r||[],o||[],eo)}function K0(r,o){return sf(r||[],o||[],ro)}var Z0=yt(function(r){var o=r.length,u=o>1?r[o-1]:t;return u=typeof u=="function"?(r.pop(),u):t,Hf(r,u)});function kf(r){var o=A(r);return o.__chain__=!0,o}function J0(r,o){return o(r),r}function da(r,o){return o(r)}var j0=Pi(function(r){var o=r.length,u=o?r[0]:0,p=this.__wrapped__,S=function(w){return kl(w,r)};return o>1||this.__actions__.length||!(p instanceof Et)||!Ii(u)?this.thru(S):(p=p.slice(u,+u+(o?1:0)),p.__actions__.push({func:da,args:[S],thisArg:t}),new $n(p,this.__chain__).thru(function(w){return o&&!w.length&&w.push(t),w}))});function Q0(){return kf(this)}function ex(){return new $n(this.value(),this.__chain__)}function tx(){this.__values__===t&&(this.__values__=nd(this.value()));var r=this.__index__>=this.__values__.length,o=r?t:this.__values__[this.__index__++];return{done:r,value:o}}function nx(){return this}function ix(r){for(var o,u=this;u instanceof jo;){var p=Nf(u);p.__index__=0,p.__values__=t,o?S.__wrapped__=p:o=p;var S=p;u=u.__wrapped__}return S.__wrapped__=r,o}function rx(){var r=this.__wrapped__;if(r instanceof Et){var o=r;return this.__actions__.length&&(o=new Et(this)),o=o.reverse(),o.__actions__.push({func:da,args:[gc],thisArg:t}),new $n(o,this.__chain__)}return this.thru(gc)}function sx(){return rf(this.__wrapped__,this.__actions__)}var ox=sa(function(r,o,u){It.call(r,u)?++r[u]:Ri(r,u,1)});function ax(r,o,u){var p=ft(r)?gh:J_;return u&&yn(r,o,u)&&(o=t),p(r,Qe(o,3))}function lx(r,o){var u=ft(r)?Yi:Gh;return u(r,Qe(o,3))}var cx=mf(Of),ux=mf(Ff);function hx(r,o){return un(pa(r,o),1)}function fx(r,o){return un(pa(r,o),ce)}function dx(r,o,u){return u=u===t?1:mt(u),un(pa(r,o),u)}function Vf(r,o){var u=ft(r)?qn:Ji;return u(r,Qe(o,3))}function Wf(r,o){var u=ft(r)?Ig:zh;return u(r,Qe(o,3))}var px=sa(function(r,o,u){It.call(r,u)?r[u].push(o):Ri(r,u,[o])});function mx(r,o,u,p){r=Rn(r)?r:hs(r),u=u&&!p?mt(u):0;var S=r.length;return u<0&&(u=tn(S+u,0)),xa(r)?u<=S&&r.indexOf(o,u)>-1:!!S&&Qr(r,o,u)>-1}var gx=yt(function(r,o,u){var p=-1,S=typeof o=="function",w=Rn(r)?J(r.length):[];return Ji(r,function(O){w[++p]=S?Un(o,O,u):no(O,o,u)}),w}),_x=sa(function(r,o,u){Ri(r,u,o)});function pa(r,o){var u=ft(r)?Vt:qh;return u(r,Qe(o,3))}function vx(r,o,u,p){return r==null?[]:(ft(o)||(o=o==null?[]:[o]),u=p?t:u,ft(u)||(u=u==null?[]:[u]),Zh(r,o,u))}var xx=sa(function(r,o,u){r[u?0:1].push(o)},function(){return[[],[]]});function yx(r,o,u){var p=ft(r)?Rl:yh,S=arguments.length<3;return p(r,Qe(o,4),u,S,Ji)}function Sx(r,o,u){var p=ft(r)?Dg:yh,S=arguments.length<3;return p(r,Qe(o,4),u,S,zh)}function Mx(r,o){var u=ft(r)?Yi:Gh;return u(r,_a(Qe(o,3)))}function Ex(r){var o=ft(r)?Nh:mv;return o(r)}function bx(r,o,u){(u?yn(r,o,u):o===t)?o=1:o=mt(o);var p=ft(r)?q_:gv;return p(r,o)}function Tx(r){var o=ft(r)?Y_:vv;return o(r)}function Ax(r){if(r==null)return 0;if(Rn(r))return xa(r)?ts(r):r.length;var o=mn(r);return o==ie||o==P?r.size:$l(r).length}function wx(r,o,u){var p=ft(r)?Ll:xv;return u&&yn(r,o,u)&&(o=t),p(r,Qe(o,3))}var Cx=yt(function(r,o){if(r==null)return[];var u=o.length;return u>1&&yn(r,o[0],o[1])?o=[]:u>2&&yn(o[0],o[1],o[2])&&(o=[o[0]]),Zh(r,un(o,1),[])}),ma=l_||function(){return cn.Date.now()};function Rx(r,o){if(typeof o!="function")throw new Yn(c);return r=mt(r),function(){if(--r<1)return o.apply(this,arguments)}}function Xf(r,o,u){return o=u?t:o,o=r&&o==null?r.length:o,Li(r,C,t,t,t,t,o)}function qf(r,o){var u;if(typeof o!="function")throw new Yn(c);return r=mt(r),function(){return--r>0&&(u=o.apply(this,arguments)),r<=1&&(o=t),u}}var vc=yt(function(r,o,u){var p=_;if(u.length){var S=Ki(u,cs(vc));p|=G}return Li(r,p,o,u,S)}),Yf=yt(function(r,o,u){var p=_|g;if(u.length){var S=Ki(u,cs(Yf));p|=G}return Li(o,p,r,u,S)});function $f(r,o,u){o=u?t:o;var p=Li(r,M,t,t,t,t,t,o);return p.placeholder=$f.placeholder,p}function Kf(r,o,u){o=u?t:o;var p=Li(r,R,t,t,t,t,t,o);return p.placeholder=Kf.placeholder,p}function Zf(r,o,u){var p,S,w,O,z,X,le=0,he=!1,_e=!1,Ie=!0;if(typeof r!="function")throw new Yn(c);o=jn(o)||0,Wt(u)&&(he=!!u.leading,_e="maxWait"in u,w=_e?tn(jn(u.maxWait)||0,o):w,Ie="trailing"in u?!!u.trailing:Ie);function $e(Zt){var si=p,Ni=S;return p=S=t,le=Zt,O=r.apply(Ni,si),O}function it(Zt){return le=Zt,z=ao(St,o),he?$e(Zt):O}function _t(Zt){var si=Zt-X,Ni=Zt-le,md=o-si;return _e?pn(md,w-Ni):md}function rt(Zt){var si=Zt-X,Ni=Zt-le;return X===t||si>=o||si<0||_e&&Ni>=w}function St(){var Zt=ma();if(rt(Zt))return bt(Zt);z=ao(St,_t(Zt))}function bt(Zt){return z=t,Ie&&p?$e(Zt):(p=S=t,O)}function Bn(){z!==t&&of(z),le=0,p=X=S=z=t}function Sn(){return z===t?O:bt(ma())}function zn(){var Zt=ma(),si=rt(Zt);if(p=arguments,S=this,X=Zt,si){if(z===t)return it(X);if(_e)return of(z),z=ao(St,o),$e(X)}return z===t&&(z=ao(St,o)),O}return zn.cancel=Bn,zn.flush=Sn,zn}var Lx=yt(function(r,o){return Bh(r,1,o)}),Px=yt(function(r,o,u){return Bh(r,jn(o)||0,u)});function Ix(r){return Li(r,ae)}function ga(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new Yn(c);var u=function(){var p=arguments,S=o?o.apply(this,p):p[0],w=u.cache;if(w.has(S))return w.get(S);var O=r.apply(this,p);return u.cache=w.set(S,O)||w,O};return u.cache=new(ga.Cache||Ci),u}ga.Cache=Ci;function _a(r){if(typeof r!="function")throw new Yn(c);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Dx(r){return qf(2,r)}var Ux=yv(function(r,o){o=o.length==1&&ft(o[0])?Vt(o[0],Nn(Qe())):Vt(un(o,1),Nn(Qe()));var u=o.length;return yt(function(p){for(var S=-1,w=pn(p.length,u);++S<w;)p[S]=o[S].call(this,p[S]);return Un(r,this,p)})}),xc=yt(function(r,o){var u=Ki(o,cs(xc));return Li(r,G,t,o,u)}),Jf=yt(function(r,o){var u=Ki(o,cs(Jf));return Li(r,U,t,o,u)}),Nx=Pi(function(r,o){return Li(r,W,t,t,t,o)});function Ox(r,o){if(typeof r!="function")throw new Yn(c);return o=o===t?o:mt(o),yt(r,o)}function Fx(r,o){if(typeof r!="function")throw new Yn(c);return o=o==null?0:tn(mt(o),0),yt(function(u){var p=u[o],S=er(u,0,o);return p&&$i(S,p),Un(r,this,S)})}function Bx(r,o,u){var p=!0,S=!0;if(typeof r!="function")throw new Yn(c);return Wt(u)&&(p="leading"in u?!!u.leading:p,S="trailing"in u?!!u.trailing:S),Zf(r,o,{leading:p,maxWait:o,trailing:S})}function zx(r){return Xf(r,1)}function Gx(r,o){return xc(ic(o),r)}function Hx(){if(!arguments.length)return[];var r=arguments[0];return ft(r)?r:[r]}function kx(r){return Kn(r,x)}function Vx(r,o){return o=typeof o=="function"?o:t,Kn(r,x,o)}function Wx(r){return Kn(r,m|x)}function Xx(r,o){return o=typeof o=="function"?o:t,Kn(r,m|x,o)}function qx(r,o){return o==null||Fh(r,o,on(o))}function ri(r,o){return r===o||r!==r&&o!==o}var Yx=ca(Xl),$x=ca(function(r,o){return r>=o}),Ar=Vh(function(){return arguments}())?Vh:function(r){return Yt(r)&&It.call(r,"callee")&&!Rh.call(r,"callee")},ft=J.isArray,Kx=uh?Nn(uh):iv;function Rn(r){return r!=null&&va(r.length)&&!Di(r)}function Kt(r){return Yt(r)&&Rn(r)}function Zx(r){return r===!0||r===!1||Yt(r)&&xn(r)==He}var tr=u_||Lc,Jx=hh?Nn(hh):rv;function jx(r){return Yt(r)&&r.nodeType===1&&!lo(r)}function Qx(r){if(r==null)return!0;if(Rn(r)&&(ft(r)||typeof r=="string"||typeof r.splice=="function"||tr(r)||us(r)||Ar(r)))return!r.length;var o=mn(r);if(o==ie||o==P)return!r.size;if(oo(r))return!$l(r).length;for(var u in r)if(It.call(r,u))return!1;return!0}function ey(r,o){return io(r,o)}function ty(r,o,u){u=typeof u=="function"?u:t;var p=u?u(r,o):t;return p===t?io(r,o,t,u):!!p}function yc(r){if(!Yt(r))return!1;var o=xn(r);return o==Xe||o==at||typeof r.message=="string"&&typeof r.name=="string"&&!lo(r)}function ny(r){return typeof r=="number"&&Ph(r)}function Di(r){if(!Wt(r))return!1;var o=xn(r);return o==F||o==Ae||o==Je||o==ke}function jf(r){return typeof r=="number"&&r==mt(r)}function va(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ne}function Wt(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function Yt(r){return r!=null&&typeof r=="object"}var Qf=fh?Nn(fh):ov;function iy(r,o){return r===o||Yl(r,o,uc(o))}function ry(r,o,u){return u=typeof u=="function"?u:t,Yl(r,o,uc(o),u)}function sy(r){return ed(r)&&r!=+r}function oy(r){if(Vv(r))throw new ct(a);return Wh(r)}function ay(r){return r===null}function ly(r){return r==null}function ed(r){return typeof r=="number"||Yt(r)&&xn(r)==Ee}function lo(r){if(!Yt(r)||xn(r)!=Pe)return!1;var o=Xo(r);if(o===null)return!0;var u=It.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&Ho.call(u)==r_}var Sc=dh?Nn(dh):av;function cy(r){return jf(r)&&r>=-ne&&r<=ne}var td=ph?Nn(ph):lv;function xa(r){return typeof r=="string"||!ft(r)&&Yt(r)&&xn(r)==b}function Fn(r){return typeof r=="symbol"||Yt(r)&&xn(r)==ee}var us=mh?Nn(mh):cv;function uy(r){return r===t}function hy(r){return Yt(r)&&mn(r)==Se}function fy(r){return Yt(r)&&xn(r)==ge}var dy=ca(Kl),py=ca(function(r,o){return r<=o});function nd(r){if(!r)return[];if(Rn(r))return xa(r)?ni(r):Cn(r);if(Ks&&r[Ks])return qg(r[Ks]());var o=mn(r),u=o==ie?Ol:o==P?Bo:hs;return u(r)}function Ui(r){if(!r)return r===0?r:0;if(r=jn(r),r===ce||r===-ce){var o=r<0?-1:1;return o*ue}return r===r?r:0}function mt(r){var o=Ui(r),u=o%1;return o===o?u?o-u:o:0}function id(r){return r?Mr(mt(r),0,ye):0}function jn(r){if(typeof r=="number")return r;if(Fn(r))return me;if(Wt(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Wt(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=Sh(r);var u=q.test(r);return u||j.test(r)?Rg(r.slice(2),u?2:8):L.test(r)?me:+r}function rd(r){return gi(r,Ln(r))}function my(r){return r?Mr(mt(r),-ne,ne):r===0?r:0}function Rt(r){return r==null?"":On(r)}var gy=as(function(r,o){if(oo(o)||Rn(o)){gi(o,on(o),r);return}for(var u in o)It.call(o,u)&&eo(r,u,o[u])}),sd=as(function(r,o){gi(o,Ln(o),r)}),ya=as(function(r,o,u,p){gi(o,Ln(o),r,p)}),_y=as(function(r,o,u,p){gi(o,on(o),r,p)}),vy=Pi(kl);function xy(r,o){var u=os(r);return o==null?u:Oh(u,o)}var yy=yt(function(r,o){r=Nt(r);var u=-1,p=o.length,S=p>2?o[2]:t;for(S&&yn(o[0],o[1],S)&&(p=1);++u<p;)for(var w=o[u],O=Ln(w),z=-1,X=O.length;++z<X;){var le=O[z],he=r[le];(he===t||ri(he,is[le])&&!It.call(r,le))&&(r[le]=w[le])}return r}),Sy=yt(function(r){return r.push(t,Mf),Un(od,t,r)});function My(r,o){return _h(r,Qe(o,3),mi)}function Ey(r,o){return _h(r,Qe(o,3),Wl)}function by(r,o){return r==null?r:Vl(r,Qe(o,3),Ln)}function Ty(r,o){return r==null?r:Hh(r,Qe(o,3),Ln)}function Ay(r,o){return r&&mi(r,Qe(o,3))}function wy(r,o){return r&&Wl(r,Qe(o,3))}function Cy(r){return r==null?[]:ta(r,on(r))}function Ry(r){return r==null?[]:ta(r,Ln(r))}function Mc(r,o,u){var p=r==null?t:Er(r,o);return p===t?u:p}function Ly(r,o){return r!=null&&Tf(r,o,Q_)}function Ec(r,o){return r!=null&&Tf(r,o,ev)}var Py=_f(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=ko.call(o)),r[o]=u},Tc(Pn)),Iy=_f(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=ko.call(o)),It.call(r,o)?r[o].push(u):r[o]=[u]},Qe),Dy=yt(no);function on(r){return Rn(r)?Uh(r):$l(r)}function Ln(r){return Rn(r)?Uh(r,!0):uv(r)}function Uy(r,o){var u={};return o=Qe(o,3),mi(r,function(p,S,w){Ri(u,o(p,S,w),p)}),u}function Ny(r,o){var u={};return o=Qe(o,3),mi(r,function(p,S,w){Ri(u,S,o(p,S,w))}),u}var Oy=as(function(r,o,u){na(r,o,u)}),od=as(function(r,o,u,p){na(r,o,u,p)}),Fy=Pi(function(r,o){var u={};if(r==null)return u;var p=!1;o=Vt(o,function(w){return w=Qi(w,r),p||(p=w.length>1),w}),gi(r,lc(r),u),p&&(u=Kn(u,m|v|x,Pv));for(var S=o.length;S--;)ec(u,o[S]);return u});function By(r,o){return ad(r,_a(Qe(o)))}var zy=Pi(function(r,o){return r==null?{}:fv(r,o)});function ad(r,o){if(r==null)return{};var u=Vt(lc(r),function(p){return[p]});return o=Qe(o),Jh(r,u,function(p,S){return o(p,S[0])})}function Gy(r,o,u){o=Qi(o,r);var p=-1,S=o.length;for(S||(S=1,r=t);++p<S;){var w=r==null?t:r[_i(o[p])];w===t&&(p=S,w=u),r=Di(w)?w.call(r):w}return r}function Hy(r,o,u){return r==null?r:ro(r,o,u)}function ky(r,o,u,p){return p=typeof p=="function"?p:t,r==null?r:ro(r,o,u,p)}var ld=yf(on),cd=yf(Ln);function Vy(r,o,u){var p=ft(r),S=p||tr(r)||us(r);if(o=Qe(o,4),u==null){var w=r&&r.constructor;S?u=p?new w:[]:Wt(r)?u=Di(w)?os(Xo(r)):{}:u={}}return(S?qn:mi)(r,function(O,z,X){return o(u,O,z,X)}),u}function Wy(r,o){return r==null?!0:ec(r,o)}function Xy(r,o,u){return r==null?r:nf(r,o,ic(u))}function qy(r,o,u,p){return p=typeof p=="function"?p:t,r==null?r:nf(r,o,ic(u),p)}function hs(r){return r==null?[]:Nl(r,on(r))}function Yy(r){return r==null?[]:Nl(r,Ln(r))}function $y(r,o,u){return u===t&&(u=o,o=t),u!==t&&(u=jn(u),u=u===u?u:0),o!==t&&(o=jn(o),o=o===o?o:0),Mr(jn(r),o,u)}function Ky(r,o,u){return o=Ui(o),u===t?(u=o,o=0):u=Ui(u),r=jn(r),tv(r,o,u)}function Zy(r,o,u){if(u&&typeof u!="boolean"&&yn(r,o,u)&&(o=u=t),u===t&&(typeof o=="boolean"?(u=o,o=t):typeof r=="boolean"&&(u=r,r=t)),r===t&&o===t?(r=0,o=1):(r=Ui(r),o===t?(o=r,r=0):o=Ui(o)),r>o){var p=r;r=o,o=p}if(u||r%1||o%1){var S=Ih();return pn(r+S*(o-r+Cg("1e-"+((S+"").length-1))),o)}return Jl(r,o)}var Jy=ls(function(r,o,u){return o=o.toLowerCase(),r+(u?ud(o):o)});function ud(r){return bc(Rt(r).toLowerCase())}function hd(r){return r=Rt(r),r&&r.replace(Be,Hg).replace(vg,"")}function jy(r,o,u){r=Rt(r),o=On(o);var p=r.length;u=u===t?p:Mr(mt(u),0,p);var S=u;return u-=o.length,u>=0&&r.slice(u,S)==o}function Qy(r){return r=Rt(r),r&&Me.test(r)?r.replace(be,kg):r}function eS(r){return r=Rt(r),r&&sn.test(r)?r.replace(Pt,"\\$&"):r}var tS=ls(function(r,o,u){return r+(u?"-":"")+o.toLowerCase()}),nS=ls(function(r,o,u){return r+(u?" ":"")+o.toLowerCase()}),iS=pf("toLowerCase");function rS(r,o,u){r=Rt(r),o=mt(o);var p=o?ts(r):0;if(!o||p>=o)return r;var S=(o-p)/2;return la(Ko(S),u)+r+la($o(S),u)}function sS(r,o,u){r=Rt(r),o=mt(o);var p=o?ts(r):0;return o&&p<o?r+la(o-p,u):r}function oS(r,o,u){r=Rt(r),o=mt(o);var p=o?ts(r):0;return o&&p<o?la(o-p,u)+r:r}function aS(r,o,u){return u||o==null?o=0:o&&(o=+o),p_(Rt(r).replace(ei,""),o||0)}function lS(r,o,u){return(u?yn(r,o,u):o===t)?o=1:o=mt(o),jl(Rt(r),o)}function cS(){var r=arguments,o=Rt(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var uS=ls(function(r,o,u){return r+(u?"_":"")+o.toLowerCase()});function hS(r,o,u){return u&&typeof u!="number"&&yn(r,o,u)&&(o=u=t),u=u===t?ye:u>>>0,u?(r=Rt(r),r&&(typeof o=="string"||o!=null&&!Sc(o))&&(o=On(o),!o&&es(r))?er(ni(r),0,u):r.split(o,u)):[]}var fS=ls(function(r,o,u){return r+(u?" ":"")+bc(o)});function dS(r,o,u){return r=Rt(r),u=u==null?0:Mr(mt(u),0,r.length),o=On(o),r.slice(u,u+o.length)==o}function pS(r,o,u){var p=A.templateSettings;u&&yn(r,o,u)&&(o=t),r=Rt(r),o=ya({},o,p,Sf);var S=ya({},o.imports,p.imports,Sf),w=on(S),O=Nl(S,w),z,X,le=0,he=o.interpolate||Ye,_e="__p += '",Ie=Fl((o.escape||Ye).source+"|"+he.source+"|"+(he===wt?Ml:Ye).source+"|"+(o.evaluate||Ye).source+"|$","g"),$e="//# sourceURL="+(It.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Eg+"]")+`
`;r.replace(Ie,function(rt,St,bt,Bn,Sn,zn){return bt||(bt=Bn),_e+=r.slice(le,zn).replace(tt,Vg),St&&(z=!0,_e+=`' +
__e(`+St+`) +
'`),Sn&&(X=!0,_e+=`';
`+Sn+`;
__p += '`),bt&&(_e+=`' +
((__t = (`+bt+`)) == null ? '' : __t) +
'`),le=zn+rt.length,rt}),_e+=`';
`;var it=It.call(o,"variable")&&o.variable;if(!it)_e=`with (obj) {
`+_e+`
}
`;else if(Do.test(it))throw new ct(l);_e=(X?_e.replace(N,""):_e).replace(de,"$1").replace(Ve,"$1;"),_e="function("+(it||"obj")+`) {
`+(it?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var _t=dd(function(){return Ct(w,$e+"return "+_e).apply(t,O)});if(_t.source=_e,yc(_t))throw _t;return _t}function mS(r){return Rt(r).toLowerCase()}function gS(r){return Rt(r).toUpperCase()}function _S(r,o,u){if(r=Rt(r),r&&(u||o===t))return Sh(r);if(!r||!(o=On(o)))return r;var p=ni(r),S=ni(o),w=Mh(p,S),O=Eh(p,S)+1;return er(p,w,O).join("")}function vS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.slice(0,Th(r)+1);if(!r||!(o=On(o)))return r;var p=ni(r),S=Eh(p,ni(o))+1;return er(p,0,S).join("")}function xS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.replace(ei,"");if(!r||!(o=On(o)))return r;var p=ni(r),S=Mh(p,ni(o));return er(p,S).join("")}function yS(r,o){var u=T,p=I;if(Wt(o)){var S="separator"in o?o.separator:S;u="length"in o?mt(o.length):u,p="omission"in o?On(o.omission):p}r=Rt(r);var w=r.length;if(es(r)){var O=ni(r);w=O.length}if(u>=w)return r;var z=u-ts(p);if(z<1)return p;var X=O?er(O,0,z).join(""):r.slice(0,z);if(S===t)return X+p;if(O&&(z+=X.length-z),Sc(S)){if(r.slice(z).search(S)){var le,he=X;for(S.global||(S=Fl(S.source,Rt(Uo.exec(S))+"g")),S.lastIndex=0;le=S.exec(he);)var _e=le.index;X=X.slice(0,_e===t?z:_e)}}else if(r.indexOf(On(S),z)!=z){var Ie=X.lastIndexOf(S);Ie>-1&&(X=X.slice(0,Ie))}return X+p}function SS(r){return r=Rt(r),r&&Y.test(r)?r.replace(B,Zg):r}var MS=ls(function(r,o,u){return r+(u?" ":"")+o.toUpperCase()}),bc=pf("toUpperCase");function fd(r,o,u){return r=Rt(r),o=u?t:o,o===t?Xg(r)?Qg(r):Og(r):r.match(o)||[]}var dd=yt(function(r,o){try{return Un(r,t,o)}catch(u){return yc(u)?u:new ct(u)}}),ES=Pi(function(r,o){return qn(o,function(u){u=_i(u),Ri(r,u,vc(r[u],r))}),r});function bS(r){var o=r==null?0:r.length,u=Qe();return r=o?Vt(r,function(p){if(typeof p[1]!="function")throw new Yn(c);return[u(p[0]),p[1]]}):[],yt(function(p){for(var S=-1;++S<o;){var w=r[S];if(Un(w[0],this,p))return Un(w[1],this,p)}})}function TS(r){return Z_(Kn(r,m))}function Tc(r){return function(){return r}}function AS(r,o){return r==null||r!==r?o:r}var wS=gf(),CS=gf(!0);function Pn(r){return r}function Ac(r){return Xh(typeof r=="function"?r:Kn(r,m))}function RS(r){return Yh(Kn(r,m))}function LS(r,o){return $h(r,Kn(o,m))}var PS=yt(function(r,o){return function(u){return no(u,r,o)}}),IS=yt(function(r,o){return function(u){return no(r,u,o)}});function wc(r,o,u){var p=on(o),S=ta(o,p);u==null&&!(Wt(o)&&(S.length||!p.length))&&(u=o,o=r,r=this,S=ta(o,on(o)));var w=!(Wt(u)&&"chain"in u)||!!u.chain,O=Di(r);return qn(S,function(z){var X=o[z];r[z]=X,O&&(r.prototype[z]=function(){var le=this.__chain__;if(w||le){var he=r(this.__wrapped__),_e=he.__actions__=Cn(this.__actions__);return _e.push({func:X,args:arguments,thisArg:r}),he.__chain__=le,he}return X.apply(r,$i([this.value()],arguments))})}),r}function DS(){return cn._===this&&(cn._=s_),this}function Cc(){}function US(r){return r=mt(r),yt(function(o){return Kh(o,r)})}var NS=sc(Vt),OS=sc(gh),FS=sc(Ll);function pd(r){return fc(r)?Pl(_i(r)):dv(r)}function BS(r){return function(o){return r==null?t:Er(r,o)}}var zS=vf(),GS=vf(!0);function Rc(){return[]}function Lc(){return!1}function HS(){return{}}function kS(){return""}function VS(){return!0}function WS(r,o){if(r=mt(r),r<1||r>ne)return[];var u=ye,p=pn(r,ye);o=Qe(o),r-=ye;for(var S=Ul(p,o);++u<r;)o(u);return S}function XS(r){return ft(r)?Vt(r,_i):Fn(r)?[r]:Cn(Uf(Rt(r)))}function qS(r){var o=++i_;return Rt(r)+o}var YS=aa(function(r,o){return r+o},0),$S=oc("ceil"),KS=aa(function(r,o){return r/o},1),ZS=oc("floor");function JS(r){return r&&r.length?ea(r,Pn,Xl):t}function jS(r,o){return r&&r.length?ea(r,Qe(o,2),Xl):t}function QS(r){return xh(r,Pn)}function eM(r,o){return xh(r,Qe(o,2))}function tM(r){return r&&r.length?ea(r,Pn,Kl):t}function nM(r,o){return r&&r.length?ea(r,Qe(o,2),Kl):t}var iM=aa(function(r,o){return r*o},1),rM=oc("round"),sM=aa(function(r,o){return r-o},0);function oM(r){return r&&r.length?Dl(r,Pn):0}function aM(r,o){return r&&r.length?Dl(r,Qe(o,2)):0}return A.after=Rx,A.ary=Xf,A.assign=gy,A.assignIn=sd,A.assignInWith=ya,A.assignWith=_y,A.at=vy,A.before=qf,A.bind=vc,A.bindAll=ES,A.bindKey=Yf,A.castArray=Hx,A.chain=kf,A.chunk=Zv,A.compact=Jv,A.concat=jv,A.cond=bS,A.conforms=TS,A.constant=Tc,A.countBy=ox,A.create=xy,A.curry=$f,A.curryRight=Kf,A.debounce=Zf,A.defaults=yy,A.defaultsDeep=Sy,A.defer=Lx,A.delay=Px,A.difference=Qv,A.differenceBy=e0,A.differenceWith=t0,A.drop=n0,A.dropRight=i0,A.dropRightWhile=r0,A.dropWhile=s0,A.fill=o0,A.filter=lx,A.flatMap=hx,A.flatMapDeep=fx,A.flatMapDepth=dx,A.flatten=Bf,A.flattenDeep=a0,A.flattenDepth=l0,A.flip=Ix,A.flow=wS,A.flowRight=CS,A.fromPairs=c0,A.functions=Cy,A.functionsIn=Ry,A.groupBy=px,A.initial=h0,A.intersection=f0,A.intersectionBy=d0,A.intersectionWith=p0,A.invert=Py,A.invertBy=Iy,A.invokeMap=gx,A.iteratee=Ac,A.keyBy=_x,A.keys=on,A.keysIn=Ln,A.map=pa,A.mapKeys=Uy,A.mapValues=Ny,A.matches=RS,A.matchesProperty=LS,A.memoize=ga,A.merge=Oy,A.mergeWith=od,A.method=PS,A.methodOf=IS,A.mixin=wc,A.negate=_a,A.nthArg=US,A.omit=Fy,A.omitBy=By,A.once=Dx,A.orderBy=vx,A.over=NS,A.overArgs=Ux,A.overEvery=OS,A.overSome=FS,A.partial=xc,A.partialRight=Jf,A.partition=xx,A.pick=zy,A.pickBy=ad,A.property=pd,A.propertyOf=BS,A.pull=v0,A.pullAll=Gf,A.pullAllBy=x0,A.pullAllWith=y0,A.pullAt=S0,A.range=zS,A.rangeRight=GS,A.rearg=Nx,A.reject=Mx,A.remove=M0,A.rest=Ox,A.reverse=gc,A.sampleSize=bx,A.set=Hy,A.setWith=ky,A.shuffle=Tx,A.slice=E0,A.sortBy=Cx,A.sortedUniq=L0,A.sortedUniqBy=P0,A.split=hS,A.spread=Fx,A.tail=I0,A.take=D0,A.takeRight=U0,A.takeRightWhile=N0,A.takeWhile=O0,A.tap=J0,A.throttle=Bx,A.thru=da,A.toArray=nd,A.toPairs=ld,A.toPairsIn=cd,A.toPath=XS,A.toPlainObject=rd,A.transform=Vy,A.unary=zx,A.union=F0,A.unionBy=B0,A.unionWith=z0,A.uniq=G0,A.uniqBy=H0,A.uniqWith=k0,A.unset=Wy,A.unzip=_c,A.unzipWith=Hf,A.update=Xy,A.updateWith=qy,A.values=hs,A.valuesIn=Yy,A.without=V0,A.words=fd,A.wrap=Gx,A.xor=W0,A.xorBy=X0,A.xorWith=q0,A.zip=Y0,A.zipObject=$0,A.zipObjectDeep=K0,A.zipWith=Z0,A.entries=ld,A.entriesIn=cd,A.extend=sd,A.extendWith=ya,wc(A,A),A.add=YS,A.attempt=dd,A.camelCase=Jy,A.capitalize=ud,A.ceil=$S,A.clamp=$y,A.clone=kx,A.cloneDeep=Wx,A.cloneDeepWith=Xx,A.cloneWith=Vx,A.conformsTo=qx,A.deburr=hd,A.defaultTo=AS,A.divide=KS,A.endsWith=jy,A.eq=ri,A.escape=Qy,A.escapeRegExp=eS,A.every=ax,A.find=cx,A.findIndex=Of,A.findKey=My,A.findLast=ux,A.findLastIndex=Ff,A.findLastKey=Ey,A.floor=ZS,A.forEach=Vf,A.forEachRight=Wf,A.forIn=by,A.forInRight=Ty,A.forOwn=Ay,A.forOwnRight=wy,A.get=Mc,A.gt=Yx,A.gte=$x,A.has=Ly,A.hasIn=Ec,A.head=zf,A.identity=Pn,A.includes=mx,A.indexOf=u0,A.inRange=Ky,A.invoke=Dy,A.isArguments=Ar,A.isArray=ft,A.isArrayBuffer=Kx,A.isArrayLike=Rn,A.isArrayLikeObject=Kt,A.isBoolean=Zx,A.isBuffer=tr,A.isDate=Jx,A.isElement=jx,A.isEmpty=Qx,A.isEqual=ey,A.isEqualWith=ty,A.isError=yc,A.isFinite=ny,A.isFunction=Di,A.isInteger=jf,A.isLength=va,A.isMap=Qf,A.isMatch=iy,A.isMatchWith=ry,A.isNaN=sy,A.isNative=oy,A.isNil=ly,A.isNull=ay,A.isNumber=ed,A.isObject=Wt,A.isObjectLike=Yt,A.isPlainObject=lo,A.isRegExp=Sc,A.isSafeInteger=cy,A.isSet=td,A.isString=xa,A.isSymbol=Fn,A.isTypedArray=us,A.isUndefined=uy,A.isWeakMap=hy,A.isWeakSet=fy,A.join=m0,A.kebabCase=tS,A.last=Jn,A.lastIndexOf=g0,A.lowerCase=nS,A.lowerFirst=iS,A.lt=dy,A.lte=py,A.max=JS,A.maxBy=jS,A.mean=QS,A.meanBy=eM,A.min=tM,A.minBy=nM,A.stubArray=Rc,A.stubFalse=Lc,A.stubObject=HS,A.stubString=kS,A.stubTrue=VS,A.multiply=iM,A.nth=_0,A.noConflict=DS,A.noop=Cc,A.now=ma,A.pad=rS,A.padEnd=sS,A.padStart=oS,A.parseInt=aS,A.random=Zy,A.reduce=yx,A.reduceRight=Sx,A.repeat=lS,A.replace=cS,A.result=Gy,A.round=rM,A.runInContext=k,A.sample=Ex,A.size=Ax,A.snakeCase=uS,A.some=wx,A.sortedIndex=b0,A.sortedIndexBy=T0,A.sortedIndexOf=A0,A.sortedLastIndex=w0,A.sortedLastIndexBy=C0,A.sortedLastIndexOf=R0,A.startCase=fS,A.startsWith=dS,A.subtract=sM,A.sum=oM,A.sumBy=aM,A.template=pS,A.times=WS,A.toFinite=Ui,A.toInteger=mt,A.toLength=id,A.toLower=mS,A.toNumber=jn,A.toSafeInteger=my,A.toString=Rt,A.toUpper=gS,A.trim=_S,A.trimEnd=vS,A.trimStart=xS,A.truncate=yS,A.unescape=SS,A.uniqueId=qS,A.upperCase=MS,A.upperFirst=bc,A.each=Vf,A.eachRight=Wf,A.first=zf,wc(A,function(){var r={};return mi(A,function(o,u){It.call(A.prototype,u)||(r[u]=o)}),r}(),{chain:!1}),A.VERSION=n,qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),qn(["drop","take"],function(r,o){Et.prototype[r]=function(u){u=u===t?1:tn(mt(u),0);var p=this.__filtered__&&!o?new Et(this):this.clone();return p.__filtered__?p.__takeCount__=pn(u,p.__takeCount__):p.__views__.push({size:pn(u,ye),type:r+(p.__dir__<0?"Right":"")}),p},Et.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),qn(["filter","map","takeWhile"],function(r,o){var u=o+1,p=u==H||u==Q;Et.prototype[r]=function(S){var w=this.clone();return w.__iteratees__.push({iteratee:Qe(S,3),type:u}),w.__filtered__=w.__filtered__||p,w}}),qn(["head","last"],function(r,o){var u="take"+(o?"Right":"");Et.prototype[r]=function(){return this[u](1).value()[0]}}),qn(["initial","tail"],function(r,o){var u="drop"+(o?"":"Right");Et.prototype[r]=function(){return this.__filtered__?new Et(this):this[u](1)}}),Et.prototype.compact=function(){return this.filter(Pn)},Et.prototype.find=function(r){return this.filter(r).head()},Et.prototype.findLast=function(r){return this.reverse().find(r)},Et.prototype.invokeMap=yt(function(r,o){return typeof r=="function"?new Et(this):this.map(function(u){return no(u,r,o)})}),Et.prototype.reject=function(r){return this.filter(_a(Qe(r)))},Et.prototype.slice=function(r,o){r=mt(r);var u=this;return u.__filtered__&&(r>0||o<0)?new Et(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),o!==t&&(o=mt(o),u=o<0?u.dropRight(-o):u.take(o-r)),u)},Et.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Et.prototype.toArray=function(){return this.take(ye)},mi(Et.prototype,function(r,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),S=A[p?"take"+(o=="last"?"Right":""):o],w=p||/^find/.test(o);S&&(A.prototype[o]=function(){var O=this.__wrapped__,z=p?[1]:arguments,X=O instanceof Et,le=z[0],he=X||ft(O),_e=function(St){var bt=S.apply(A,$i([St],z));return p&&Ie?bt[0]:bt};he&&u&&typeof le=="function"&&le.length!=1&&(X=he=!1);var Ie=this.__chain__,$e=!!this.__actions__.length,it=w&&!Ie,_t=X&&!$e;if(!w&&he){O=_t?O:new Et(this);var rt=r.apply(O,z);return rt.__actions__.push({func:da,args:[_e],thisArg:t}),new $n(rt,Ie)}return it&&_t?r.apply(this,z):(rt=this.thru(_e),it?p?rt.value()[0]:rt.value():rt)})}),qn(["pop","push","shift","sort","splice","unshift"],function(r){var o=zo[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var S=arguments;if(p&&!this.__chain__){var w=this.value();return o.apply(ft(w)?w:[],S)}return this[u](function(O){return o.apply(ft(O)?O:[],S)})}}),mi(Et.prototype,function(r,o){var u=A[o];if(u){var p=u.name+"";It.call(ss,p)||(ss[p]=[]),ss[p].push({name:o,func:u})}}),ss[oa(t,g).name]=[{name:"wrapper",func:t}],Et.prototype.clone=S_,Et.prototype.reverse=M_,Et.prototype.value=E_,A.prototype.at=j0,A.prototype.chain=Q0,A.prototype.commit=ex,A.prototype.next=tx,A.prototype.plant=ix,A.prototype.reverse=rx,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=sx,A.prototype.first=A.prototype.head,Ks&&(A.prototype[Ks]=nx),A},ns=e_();vr?((vr.exports=ns)._=ns,Al._=ns):cn._=ns}).call(_o)})(hl,hl.exports);var pu=hl.exports;const JC={dotSize:6,genePercentile:.99,cameraPositionZ:300,cameraPositionY:50,cameraPositionX:40,umapOffset:1e4,cameraUmapPositionY:0,cameraUmapPositionZ:400},vn=new Vs(JC);function mu(i){const t={...vn.getValue(),dotSize:i};vn.next(t)}function sm(i){const e=vn.getValue(),t=i*.01,n={...e,genePercentile:t};vn.next(n)}const jC=i=>{const e=document.getElementById("loadingIndicator");i?e.style.display="flex":e.style.display="none"},QC=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),eR(t)})};function eR(i){const e=document.getElementById("cellNotFound");let t=Mt.value.listPalette;i?(t=Mt.value.listPalette.filter(([n,s])=>n.toLowerCase().startsWith(i)),console.log(t),fl(t)):fl(Mt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function fl(i){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",i.sort((s,a)=>s[0].toLowerCase()<a[0].toLowerCase()?-1:s[0].toLowerCase()>a[0].toLowerCase()?1:0),i.forEach(([s,a])=>{const c=document.createElement("input");c.type="checkbox",c.className="box",c.id=s,c.value=s,We.value.selectedCelltypes.includes(s)&&(c.checked=!0);const l=document.createElement("label");l.htmlFor=s,l.style.color=a,l.appendChild(c),l.appendChild(document.createTextNode(s));let h,f,d,m,x=((y,E)=>{for(const _ in y)if(y[_].includes(E))return _;return!1})(Mt.value.groups,s);if(x){const y=`${x}-group`;Object.keys(e).includes(x)?(h=document.getElementById(`${x}-div`),f=document.getElementById(y),d=document.getElementById(`${x}-label`),m=document.getElementById(`${x}-list`)):(e[x]=[],h=document.createElement("div"),h.id=`${x}-div`,d=document.createElement("label"),d.htmlFor=x,d.setAttribute("for",y),d.style.color="white",d.id=`${x}-label`,f=document.createElement("input"),f.type="checkbox",f.classList.add("box"),f.classList.add("group-input"),f.value=x,f.id=y,d.appendChild(f),d.appendChild(document.createTextNode(x.toUpperCase())),m=document.createElement("ul"),m.id=`${x}-list`,m.style.marginBottom=0,h.appendChild(d),h.appendChild(m),t.appendChild(h));const E=document.createElement("li");E.id=`${x}-item`,m.appendChild(l),m.append(document.createElement("br")),e[x].push(c),t.appendChild(h)}else t.appendChild(l),t.appendChild(document.createElement("br"));c.addEventListener("change",y=>{console.log(y),tR(s,y.target.checked)})});const n=document.getElementsByClassName("group-input");Array.prototype.slice.call(n).forEach(s=>{s.addEventListener("change",a=>{let c=We.value.selectedCelltypes.map(l=>l);console.log("CHECKING",c),e[a.target.value].forEach(l=>{l.checked=a.target.checked,a.target.checked?c.push(l.value):c.splice(c.indexOf(l.value),1)}),Co(c)}),e[s.value].forEach(a=>{let c=!0;a.checked||(c=!1),s.checked=c,a.addEventListener("change",()=>{let l=!0;e[s.value].forEach(h=>{h.checked||(l=!1)}),s.checked=l})})})}async function tR(i,e){let t=We.value.selectedCelltypes.map(n=>n);e?(t.push(i),Co(t)):(t=t.filter(n=>n!==i),Co(t))}const nR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{Co([]),fl(Mt.value.listPalette),cellTextbox.value=""})},iR=()=>{const i=document.getElementById("cellFilters");i.innerHTML="",We.value.selectedCelltypes.length!==0?We.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Mt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,i.appendChild(t)}):i.innerHTML="No celltype filters selected"};async function Ws(i,e,t=!1){let n="";if(t==!0?n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_atac.csv`):n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s===void 0||s.gene_values==null)return"[]";let a=s.gene_values.split(",").filter(h=>h!=="");return["clusters","clusters_pal","genes","hierarchical_clusters"].includes(i)==!0?(a.shift(),a):(a.shift(),a.map(f=>parseFloat(f)))}async function rR(i,e=1e5){let t="";if(t=await fetch(`https://backendbasel.techkyra.com/get-intervals?gene=${i}&range=${e}`),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();return n===void 0?"[]":n}const sR=()=>{};function oR(i){const e=document.getElementById("atacNotFound");if(i){const t=Mt.value.atacs.filter(n=>n.toLowerCase().startsWith(i));console.log(t),Ou(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Ou(Mt.value.atacs.slice(0,1e3))}function Ou(i){const e=document.getElementById("atacContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedAtacs.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedAtacs.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedAtacs.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedAtacs[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(kr([]),c.target.checked=!0)}rg(t,c.target.checked)})})}function rg(i,e){let t=We.value.selectedAtacs.map(n=>n);e?(t.push(i),kr(t)):(t=t.filter(n=>n!==i),kr(t))}const sg=()=>{document.getElementById("atacClearButton").addEventListener("click",()=>{kr([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),atacTextbox.value=""})},aR=()=>{document.getElementById("atacEnterButton").addEventListener("click",()=>{console.log("entered clicked");const t=document.getElementById("atacTextbox").value.toLowerCase();oR(t)})},lR=()=>{const i=document.getElementById("atacFilters");i.innerHTML="",We.value.selectedAtacs.length!==0?We.value.selectedAtacs.forEach((e,t)=>{const n=document.createElement("p");n.style.color=t===0?"magenta":"green",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No ATAC filters selected"},cR=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedAtacs.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedAtacs.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#atacContainer [value=${CSS.escape(We.value.selectedAtacs[0])}]`);c!==null&&(c.checked=!1),rg(t.value,!1)})}),We.value.selectedAtacs.length>0){const e=document.createElement("p");e.innerText="Selected atacs",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function uR(i){const e=i.match(/^(\d+)-(\d+)-(\d+)$/);return e?`chr${e[1]}:${e[2]}-${e[3]}`:null}function hR(i){const e=i.match(/^chr(\d+):(\d+)-(\d+)$/);return e?`${e[1]}-${e[2]}-${e[3]}`:null}function om(i){return Ws(i,Mt.value.prefix)}function am(i){return Ws(hR(i),Mt.value.prefix,!0)}function fR(i,e){const t={r:255,g:255,b:255},n={r:0,g:255,b:0},s={r:255,g:0,b:255},a={r:Math.round(n.r+(t.r-n.r)*e),g:Math.round(n.g+(t.g-n.g)*e),b:Math.round(n.b+(t.b-n.b)*e)},c={r:Math.round(s.r+(t.r-s.r)*i),g:Math.round(s.g+(t.g-s.g)*i),b:Math.round(s.b+(t.b-s.b)*i)},l={r:(a.r+c.r)/2,g:(a.g+c.g)/2,b:(a.b+c.b)/2};return`rgb(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)})`}function Ka(i,e){const t={r:0,g:0,b:255},n={r:255,g:255,b:255},s={r:255,g:0,b:0};return e==null?i<.5?`rgb(${Math.floor(n.r*i*2)}, ${Math.floor(n.g*i*2)}, ${t.b})`:i===.5?`rgb(${n.r}, ${n.g}, ${n.b})`:`rgb(${s.r}, ${Math.floor(n.g-n.g*(i-.5)*2)}, ${Math.floor(n.b-n.b*(i-.5)*2)})`:fR(i,e)}function Za(i,e){const t=i.slice().sort((s,a)=>s-a),n=Math.floor(t.length*e)-1;return t[n]}function Ja(i,e){return i.map(t=>Math.min(t/e,1))}const dR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),pR(t)})};function pR(i){const e=document.getElementById("geneNotFound");if(i){const t=Mt.value.genes.filter(n=>n.toLowerCase().startsWith(i));Fu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Fu(Mt.value.genes.slice(0,1e3))}function Fu(i){const e=document.getElementById("geneContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedGenes.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedGenes.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedGenes.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedGenes[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(Gs([]),c.target.checked=!0)}og(t,c.target.checked)})})}function mR(){const i=document.getElementById("modeButton");i.value=We.value.mode,i.value==="1"?(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")):(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")),i.onclick=()=>{let e=i.value==="1";e?(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")):(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")),i.value=e?2:1,KC(e?2:1),e?lg():document.getElementById("selectedContainer").innerHTML=""}}function og(i,e){let t=We.value.selectedGenes.map(n=>n);e?(t.push(i),Gs(t)):(t=t.filter(n=>n!==i),Gs(t))}const ag=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Gs([]),ng([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),kr([]),geneTextbox.value=""})},gR=()=>{const i=document.getElementById("geneFilters");i.innerHTML="",We.value.selectedGenes.length!==0?We.value.selectedGenes.forEach((e,t)=>{const n=document.createElement("p");We.value.selectedGenes.length===1?n.style.color="white":n.style.color=t===0?"green":"magenta",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No gene filters selected"},lg=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedGenes.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#geneContainer [value=${CSS.escape(We.value.selectedGenes[0])}]`);c!==null&&(c.checked=!1),og(t.value,!1)})}),We.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}},vo=i=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:e},"",e)};class _R extends Ku{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new MC(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){const h=a.parse(JSON.parse(l));t&&t(h)},n,s)}parse(e){return new vR(e)}}class vR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=xR(e,t,this.data);for(let a=0,c=s.length;a<c;a++)n.push(...s[a].toShapes());return n}}function xR(i,e,t){const n=Array.from(i),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,c=[];let l=0,h=0;for(let f=0;f<n.length;f++){const d=n[f];if(d===`
`)l=0,h-=a;else{const m=yR(d,s,l,h,t);l+=m.offsetX,c.push(m.path)}}return c}function yR(i,e,t,n,s){const a=s.glyphs[i]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const c=new EC;let l,h,f,d,m,v,x,y;if(a.o){const E=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let _=0,g=E.length;_<g;)switch(E[_++]){case"m":l=E[_++]*e+t,h=E[_++]*e+n,c.moveTo(l,h);break;case"l":l=E[_++]*e+t,h=E[_++]*e+n,c.lineTo(l,h);break;case"q":f=E[_++]*e+t,d=E[_++]*e+n,m=E[_++]*e+t,v=E[_++]*e+n,c.quadraticCurveTo(m,v,f,d);break;case"b":f=E[_++]*e+t,d=E[_++]*e+n,m=E[_++]*e+t,v=E[_++]*e+n,x=E[_++]*e+t,y=E[_++]*e+n,c.bezierCurveTo(m,v,x,y,f,d);break}}return{offsetX:a.ha*e,path:c}}class lm extends Yu{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}function gu(i){const e=document.querySelector(".showing-badge");if(!e){console.error("Badge container not found");return}e.querySelectorAll(".showing-label").forEach(s=>s.style.display="none");const n=e.querySelector(`.showing-${i}`);n?n.style.display="inline-block":console.warn(`Unknown label: ${i}`)}function SR(i,e){const t=document.getElementById("top-label"),n=document.getElementById("bottom-label");let s=e;e<1?s=e.toExponential(1):s=Math.round(e),t&&n?(t.textContent=s,n.textContent=i):console.error("Labels not found in the DOM.")}function cm(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function MR(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}const ER=new URL(window.location),Jt=new URLSearchParams(ER.search);class bR{constructor(e){gd(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}addText(){new _R().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",t=>{const n=new lm("Anterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),s=new ll({color:16777215}),a=new Vn(n,s);a.position.set(-30,190,0),this.scene.add(a);const c=new lm("Posterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),l=new Vn(c,s);l.position.set(-30,-190,0),this.scene.add(l)})}initScene(){this.scene=tg.value.scene,this.camera=new kn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Vu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),Mt.value.prefix=="6s"?(this.camera.position.y=vn.value.cameraPositionY,this.camera.position.x=vn.value.cameraPositionX,this.addText()):(document.getElementById("toggleATACRadio").style.display="none",document.getElementById("atac-desc").style.display="none",this.camera.position.y=0,this.camera.position.x=0),this.camera.position.z=vn.value.cameraPositionZ,this.controls=new ig(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh("initScene"),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){cl.pipe(vi(e=>e.items),xi((e,t)=>pu.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),Mt.pipe(vi(e=>e.prefix),xi((e,t)=>pu.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=Mt.value.prefix}),ul.pipe(vi(e=>e.isLoading),xi((e,t)=>pu.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),jC(ul.value.isLoading)}),We.pipe(vi(e=>e.selectedCelltypes),xi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),ci(!0),await this.updateInstancedMesh("selectedCelltype"),ci(!1),iR(),We.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedCelltypes));Jt.has("celltype")?Jt.set("celltype",t):Jt.append("celltype",t)}else Jt.delete("celltype");vo(Jt)}),We.pipe(vi(e=>e.selectedGenes),FC((e,t)=>{t>0&&(console.log("Previous selected genes:",prev),console.log("Current selected genes:",e))}),xi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),We.value.mode===2&&lg(),ci(!0),sg(),gR(),We.value.selectedGenes.length>0){console.log("BANGABNGABNGBANG"),console.log(We.value.selectedGenes);let n=We.value.selectedGenes[0].split("_")[0];if(console.log(n),Mt.value.prefix=="6s")try{const a=await rR(n);ng(a.intervals)}catch(a){console.error("Error fetching interval gene:",a)}const s=encodeURIComponent(JSON.stringify(We.value.selectedGenes));Jt.append("gene",s),Jt.has("gene")?Jt.set("gene",s):Jt.append("gene",s)}else console.log("ASSALAM"),Jt.delete("gene");await this.updateInstancedMesh("selectedGene"),vo(Jt),ci(!1)}),We.pipe(vi(e=>e.selectedAtacs),xi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected atacs changed:",e),ag(),We.value.mode===2&&cR(),ci(!0),lR(),We.value.selectedAtacs.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedAtacs));Jt.append("atac",t),Jt.has("atac")?Jt.set("atac",t):Jt.append("atac",t)}else Jt.delete("atac");await this.updateInstancedMesh("selectedAtac"),vo(Jt),ci(!1)}),We.pipe(vi(e=>e.mode),xi()).subscribe(e=>{console.log("Selected genes changed:",e),Jt.has("mode")?Jt.set("mode",e):Jt.append("mode",e),vo(Jt)}),vn.pipe(vi(e=>e.dotSize),xi()).subscribe(async e=>{console.log("Dot Size Changed:",e),ci(!0),await this.updateInstancedMesh("dotSize"),ci(!1)}),vn.pipe(vi(e=>e.genePercentile),xi()).subscribe(async e=>{console.log("Gene Percentile",e),ci(!0),await this.updateInstancedMesh("genePercentile"),ci(!1)})}async updateInstancedMesh(e){console.log("^^^^^^^^^"),console.log(e),console.log("^^^^^^^^^"),this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=Mt.value.pallete,n=cl.value.items;const s=new $u(.1,16,16),a=new qu(.1,32,32),c=new ll,l=n.length;console.log("Count",l),this.instancedMesh=new kp(s,c,l),this.instancedMeshUmap=new kp(a,c,l);const h=new Tn,f=new Tn;let d,m,v,x=200,y=2,E=We.value.selectedCelltypes,_=We.value.selectedGenes,g=We.value.selectedAtacs,D=vn.value.dotSize,M=Math.floor(D/2),R=vn.value.genePercentile,G=vn.value.genePercentile,U=1;if(g.length>0)try{let C=await am(g[0]);if(g.length==2){let W=await am(g[1]),ae=Za(W,G);v=Ja(W,ae)}U=Za(C,G),m=Ja(C,U)}catch(C){console.error("Error fetching data:",C)}else if(_.length>0)try{let C=await om(_[0]);if(_.length==2){let W=await om(_[1]),ae=Za(W,R);v=Ja(W,ae)}U=Za(C,R),m=Ja(C,U)}catch(C){console.error("Error fetching data:",C)}console.log("KESINI KANNNN"),console.log(U),SR(0,U);for(let C=0;C<l;C++){if(g.length>0)if(E.length===0||E.includes(n[C].clusters)){let T,I;v?(T=Ka(m[C],v[C]),I=(m[C]+v[C])/2*D+D/1.5):(T=Ka(m[C]),I=m[C]*D+D/1.5),d=new Tt(T),h.scale.set(I,I,I),f.scale.set(I*y,I*y,I*y)}else d=new Tt("#5e5e5e"),h.scale.set(1,1,1),f.scale.set(1*y,1*y,1*y);else if(_.length>0)if(E.length===0||E.includes(n[C].clusters)){let T,I;v?(T=Ka(m[C],v[C]),I=(m[C]+v[C])/2*D+D/1.5):(T=Ka(m[C]),I=m[C]*D+D/1.5),d=new Tt(T),h.scale.set(I,I,I),f.scale.set(I*y,I*y,I*y)}else d=new Tt("#5e5e5e"),h.scale.set(1,1,1),f.scale.set(1*y,1*y,1*y);else E.includes(n[C].clusters)||E.length==0?(d=new Tt(t[n[C].clusters]),h.scale.set(D,D,D),f.scale.set(D*y,D*y,D*y)):(d=new Tt("#5e5e5e"),h.scale.set(M,M,M),f.scale.set(M*y,M*y,M*y));let W=1;Mt.value.prefix=="6s"&&(W=-1),h.position.set(n[C].X_spatial0_norm*x,n[C].X_spatial1_norm*W*x,n[C].X_spatial2_norm*x),h.updateMatrix(),this.instancedMesh.setMatrixAt(C,h.matrix),this.instancedMesh.setColorAt(C,d);let ae=vn.value.umapOffset;f.position.set(n[C].X_umap0_norm*300+ae-25,n[C].X_umap1_norm*300,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(C,f.matrix),this.instancedMeshUmap.setColorAt(C,d)}console.log(g),g.length>0?(console.log("EMG KESINI BANG"),gu("atac"),cm()):_.length>0?(gu("gene"),cm()):(gu("celltype"),MR()),console.log(g),this.scene.add(this.instancedMesh),console.log(this.instancedMesh),console.log(this.scene),this.scene.add(this.instancedMeshUmap)}}const yl=Mt.value.prefix;async function TR(){const i=Mt.value.palleteColumn;try{const e=await Ws(i,yl);let t={};e.forEach(n=>{let[s,a]=n.split(":");s=s.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[s]=a}),kC(t)}catch(e){console.error("Failed to load items:",e)}}async function AR(){try{const i=await Ws("genes",yl);VC(i)}catch(i){console.error("Failed to load items:",i)}}async function wR(){try{const e=(await Ws("genes",yl,!0)).map(t=>uR(t)).filter(t=>t!==null);WC(e)}catch(i){console.error("Failed to load items:",i)}}async function CR(){const i=Mt.value.columns;let e={},t=[];try{const n=await Promise.all(i.map(s=>Ws(s,yl)));i.forEach((s,a)=>{e[s]=n[a]});for(let s=0;s<e.clusters.length;s++){let a={};for(let c in e)a[c]=e[c][s];t.push(a)}zC(t)}catch(n){console.error("Error combining data:",n)}}function RR(){const i=document.createElement("div");i.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const n=document.createElement("li");for(let a=0;a<2;a++){const c=document.createElement("div");n.appendChild(c)}const s=document.createElement("span");n.appendChild(s),e.appendChild(n)}return i.appendChild(e),i}function cg(){const i=document.createElement("div");i.id="overlay",i.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const n=document.createElement("div");n.id="resizeHandle",n.className="resize-handle",n.title="Drag to resize UMAP.",e.appendChild(t),e.appendChild(n),i.appendChild(e);let s=!1,a=0,c=0;t.addEventListener("mousedown",U=>{s=!0,a=U.offsetX,c=U.offsetY});const l=()=>{i.offsetLeft<0&&(i.style.left="0%"),i.offsetLeft+i.offsetWidth>window.innerWidth&&(i.style.left=`${(window.innerWidth-i.offsetWidth)/window.innerWidth*100}%`);const U=document.getElementsByClassName("navbar")[0].offsetHeight;i.offsetTop<U&&(i.style.top=`${U/window.innerHeight*100}%`),i.offsetTop+i.offsetHeight>window.innerHeight&&(i.style.top=`${(window.innerHeight-i.offsetHeight)/window.innerHeight*100}%`),i.offsetTop<=U&&i.offsetTop+i.offsetHeight>=window.innerHeight&&(i.style.top=`${U/window.innerHeight*100}%`,i.style.height=`${window.innerHeight-U}px`,_.aspect=i.offsetWidth/i.offsetHeight,_.updateProjectionMatrix(),g.setSize(i.offsetWidth,i.offsetHeight)),i.offsetLeft<=0&&i.offsetLeft+i.offsetWidth>=window.innerWidth&&(i.style.left="0%",i.style.width=`${window.innerWidth}px`,_.aspect=i.offsetWidth/i.offsetHeight,_.updateProjectionMatrix(),g.setSize(i.offsetWidth,i.offsetHeight))};document.addEventListener("mousemove",U=>{s&&(i.style.left=`${(U.clientX-a)/window.innerWidth*100}%`,i.style.top=`${(U.clientY-c)/window.innerHeight*100}%`,l())}),document.addEventListener("mouseup",()=>{s=!1}),n.addEventListener("mousedown",h);function h(U){window.addEventListener("mousemove",f),window.addEventListener("mouseup",d),U.preventDefault()}function f(U){n.style.backgroundColor="red";const C=document.getElementsByClassName("navbar")[0].offsetHeight;let W=U.clientX<0?0:U.clientX,ae=U.clientY<C?C:U.clientY;const T=100,I=100;i.offsetWidth==T&&W>i.offsetLeft&&(W=i.offsetLeft),i.offsetHeight==I&&ae>i.offsetTop&&(ae=i.offsetTop);const xe=i.offsetWidth+(i.offsetLeft-W),fe=i.offsetHeight+(i.offsetTop-ae);i.style.width=`${Math.max(xe,T)}px`,i.style.height=`${Math.max(fe,I)}px`,xe>T&&(i.style.left=`${W}px`),fe>I&&(i.style.top=`${ae}px`),_.aspect=xe/fe,_.updateProjectionMatrix(),g.setSize(xe,fe)}function d(){n.style.backgroundColor="#ffe432",window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",d)}t.addEventListener("touchstart",U=>{s=!0,a=U.changedTouches[0].clientX,c=U.changedTouches[0].clientY}),document.addEventListener("touchmove",U=>{if(s){let C=U.changedTouches[0].clientX;C+i.offsetWidth>window.innerWidth&&(C=window.innerWidth-i.offsetWidth),i.style.left=`${C/window.innerWidth*100}%`,i.style.top=`${U.changedTouches[0].clientY/window.innerHeight*100}%`,l()}}),document.addEventListener("touchend",()=>{s=!1}),n.addEventListener("touchstart",m);function m(U){window.addEventListener("touchmove",v),window.addEventListener("touchend",x),U.preventDefault()}function v(U){n.style.backgroundColor="red";const C=document.getElementsByClassName("navbar")[0].offsetHeight;let W=U.changedTouches[0].clientX<0?0:U.changedTouches[0].clientX,ae=U.changedTouches[0].clientY<C?C:U.changedTouches[0].clientY;const T=100,I=100;i.offsetWidth==T&&W>i.offsetLeft&&(W=i.offsetLeft),i.offsetHeight==I&&ae>i.offsetTop&&(ae=i.offsetTop);const xe=i.offsetWidth+(i.offsetLeft-W),fe=i.offsetHeight+(i.offsetTop-ae);i.style.width=`${Math.max(xe,T)}px`,i.style.height=`${Math.max(fe,I)}px`,xe>T&&(i.style.left=`${W}px`),fe>I&&(i.style.top=`${ae}px`),_.aspect=xe/fe,_.updateProjectionMatrix(),g.setSize(xe,fe)}function x(U){n.style.backgroundColor="#ffe432",window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}const y=document.createElement("div");y.id="overlayScene",y.style.width="100%",y.style.height="100%",i.appendChild(y);const E=tg.value.scene,_=new kn(75,y.offsetWidth/y.offsetHeight,.1,1e3),g=new Vu,D=window.innerWidth*.25,M=window.innerHeight*.5;_.aspect=D/M,_.updateProjectionMatrix(),g.setSize(D,M),g.render(E,_),y.appendChild(g.domElement),_.position.x=vn.value.umapOffset,_.position.y=vn.value.cameraUmapPositionY,_.position.z=vn.value.cameraUmapPositionZ;const R=new ig(_,g.domElement);R.enableRotate=!1,R.mouseButtons={LEFT:Vi.PAN,MIDDLE:Vi.DOLLY,RIGHT:Vi.ROTATE},R.touches={ONE:lr.PAN,TWO:lr.DOLLY_PAN},_.lookAt(1e4,0,10),R.target.set(1e4,0,10),R.update(),g.render(E,_);function G(){requestAnimationFrame(G),g.render(E,_)}return G(),window.addEventListener("resize",()=>{l()}),i}document.body.appendChild(cg());We.pipe(vi(i=>i.intervalsData),xi((i,e)=>i.join()===e.join())).subscribe(async i=>{LR(We.value.selectedGenes[0]),PR(i)});function LR(i){const e=document.querySelector(".left-text");e.textContent=i}function PR(i=[]){const e=document.getElementById("line-container"),t=document.getElementById("middle-space");if(!e||!t){console.error("Required elements not found");return}if(i.length===0)t.style.display="none";else{t.style.display="grid";let n=1;e.innerHTML="",i.forEach(s=>{const a=document.createElement("div"),c=document.createElement("div");if(c.className="tooltip",s.label==="atac")s.enriched===1?a.className="atac-peaks-enriched":a.className="atac-peaks",c.textContent=s.interval,a.style.zIndex=n,n++,a.addEventListener("mouseout",()=>{a.style.zIndex=1}),a.addEventListener("click",()=>{IR(s)});else{a.addEventListener("mouseout",()=>{a.style.zIndex=196});let l=s.label[0]==="-";s.label.split("__")[1]==="mygene"?l?a.className="gene-left":a.className="gene":l?a.className="gene-left-border":a.className="gene-border";let f=s.label.split("__").pop();c.textContent=f,a.addEventListener("click",()=>{DR(s)})}a.addEventListener("mouseover",()=>{a.style.zIndex=1998}),a.style.left=s.start*100+"%",a.style.width=s.width*100+"%",a.appendChild(c),e.appendChild(a)})}}function IR(i){kr([i.interval])}function DR(i){let e=UR(i.label.split("__").pop());e==null?alert(`Gene ${i} was not measured`):(kr([]),Gs([e]))}function UR(i){return Mt.value.genes.includes(`${i}_measured`)?`${i}_measured`:Mt.value.genes.includes(`${i}_imputed`)?`${i}_imputed`:null}document.addEventListener("DOMContentLoaded",async()=>{cg();const i=RR();document.body.appendChild(i),ci(!0);try{await TR(),await CR(),await AR(),await wR();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(c=>Object.keys(Mt.value.pallete).includes(c));Co(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(c=>Mt.value.genes.includes(c));Gs(a)}fl(Mt.value.listPalette),nR(),QC(),Fu(Mt.value.genes.slice(0,1e3)),ag(),dR(),Ou(Mt.value.atacs.slice(0,1e3)),sg(),aR(),sR();const n=document.body;new bR(n)}catch(e){console.error("Failed to load data:",e)}finally{console.log("GAAA KESINSINI YAA")}});function NR(){const i=Mt.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");console.log("PREFIXXXX"),console.log(e);for(let t=0;t<i.length;t++){const n=document.createElement("p");n.innerHTML=`<a class="dropdown-item">${i[t]}</a>`,e.appendChild(n)}}function OR(){const i=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const n=new URLSearchParams("");n.append("prefix",e.item(t).innerText),vo(n),e.item(t).innerText!==Mt.value.prefix&&(i.innerHTML=Mt.value.prefix,window.location.reload())})}const FR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");n.addEventListener("click",()=>{console.log(i.style.display),i.style.display=i.style.display==="none"?"block":"none",console.log(i.style.display),n.style.backgroundColor="white",n.style.color="black",s.style.backgroundColor="rgb(97, 97, 97)",s.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),i.style.display==="none"&&(n.style.backgroundColor="rgb(97, 97, 97)",n.style.color="white")})},BR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");s.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",s.style.backgroundColor="white",s.style.color="black",n.style.backgroundColor="rgb(97, 97, 97)",n.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",i.style.display==="block"&&(i.style.display="none"),t.style.display==="block"&&(t.style.display="none"),e.style.display==="none"&&(s.style.backgroundColor="rgb(97, 97, 97)",s.style.color="white")})},zR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");a.addEventListener("click",()=>{console.log("halo atac clicked"),t.style.display=t.style.display==="none"?"block":"none",a.style.backgroundColor="white",a.style.color="black",n.style.backgroundColor="rgb(97, 97, 97)",n.style.color="white",s.style.backgroundColor="rgb(97, 97, 97)",s.style.color="white",i.style.display==="block"&&(i.style.display="none"),e.style.display==="block"&&(e.style.display="none"),t.style.display==="none"&&(a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white")})},GR=()=>{const i=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),n=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),c=document.getElementById("geneSliderBox"),l=document.getElementById("geneSlider"),h=document.getElementById("geneSliderValue"),f=document.getElementById("cellCheckbox"),d=document.getElementById("geneRadioContainer"),m=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");i.forEach(x=>{const y=()=>{const _=x.dataset.target,g=document.getElementById(_);g.style.display="block"},E=()=>{const _=x.dataset.target,g=document.getElementById(_);g.style.display="none"};["mouseenter"].forEach(_=>{x.addEventListener(_,function(){y()})}),["mouseleave"].forEach(_=>{x.addEventListener(_,function(){E()})})}),e.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",m.style.backgroundColor="rgb(97, 97, 97)",m.style.color="white"),d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),c.style.display==="block"&&(c.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),n.onchange=function(){s.value=parseFloat(this.value).toFixed(2),mu(parseFloat(this.value).toFixed(2))},n.addEventListener("mouseup",function(){s.value=parseFloat(this.value).toFixed(2),mu(parseFloat(this.value).toFixed(2))}),s.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),n.value=parseFloat(this.value).toFixed(2),mu(parseFloat(this.value).toFixed(2))},s.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",m.style.backgroundColor="rgb(97, 97, 97)",m.style.color="white"),d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),c.style.display=c.style.display==="none"?"block":"none"}),l.addEventListener("mouseup",function(){h.value=parseFloat(this.value).toFixed(2),sm(parseFloat(this.value).toFixed(2))}),h.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),l.value=parseFloat(this.value).toFixed(2),sm(parseFloat(this.value).toFixed(2))},h.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{NR(),OR()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{FR(),BR(),zR(),GR(),mR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(i){i.style.visibility="visible"})},0);
