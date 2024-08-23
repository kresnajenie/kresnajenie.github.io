var uE=Object.defineProperty;var hE=(i,e,t)=>e in i?uE(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xd=(i,e,t)=>(hE(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ku="162",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fE=0,yd=1,dE=2,dm=1,pE=2,Vi=3,gr=0,In=1,Xi=2,dr=0,Us=1,Sd=2,Ed=3,Md=4,mE=5,Or=100,gE=101,_E=102,bd=103,Td=104,vE=200,xE=201,yE=202,SE=203,Su=204,Eu=205,EE=206,ME=207,bE=208,TE=209,AE=210,wE=211,CE=212,RE=213,LE=214,PE=0,IE=1,DE=2,il=3,UE=4,NE=5,OE=6,FE=7,pm=0,BE=1,zE=2,pr=0,GE=1,HE=2,kE=3,VE=4,WE=5,XE=6,YE=7,mm=300,Fs=301,Bs=302,Mu=303,bu=304,ml=306,Tu=1e3,ui=1001,Au=1002,un=1003,Ad=1004,uo=1005,Pn=1006,Nc=1007,Br=1008,mr=1009,qE=1010,$E=1011,Vu=1012,gm=1013,fr=1014,Ei=1015,bo=1016,_m=1017,vm=1018,zr=1020,ZE=1021,hi=1023,KE=1024,JE=1025,Gr=1026,zs=1027,xm=1028,ym=1029,jE=1030,Sm=1031,Em=1033,Oc=33776,Fc=33777,Bc=33778,zc=33779,wd=35840,Cd=35841,Rd=35842,Ld=35843,Mm=36196,Pd=37492,Id=37496,Dd=37808,Ud=37809,Nd=37810,Od=37811,Fd=37812,Bd=37813,zd=37814,Gd=37815,Hd=37816,kd=37817,Vd=37818,Wd=37819,Xd=37820,Yd=37821,Gc=36492,qd=36494,$d=36495,QE=36283,Zd=36284,Kd=36285,Jd=36286,eM=3200,tM=3201,nM=0,iM=1,hr="",yi="srgb",xr="srgb-linear",Wu="display-p3",gl="display-p3-linear",rl="linear",Gt="srgb",sl="rec709",ol="p3",ds=7680,jd=519,rM=512,sM=513,oM=514,bm=515,aM=516,lM=517,cM=518,uM=519,Qd=35044,ep="300 es",wu=1035,Yi=2e3,al=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tp=1234567;const yo=Math.PI/180,To=180/Math.PI;function Xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function Xu(i,e){return(i%e+e)%e}function hM(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fM(i,e,t){return i!==e?(t-i)/(e-i):0}function So(i,e,t){return(1-t)*i+t*e}function dM(i,e,t,n){return So(i,e,1-Math.exp(-t*n))}function pM(i,e=1){return e-Math.abs(Xu(i,e*2)-e)}function mM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _M(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vM(i,e){return i+Math.random()*(e-i)}function xM(i){return i*(.5-Math.random())}function yM(i){i!==void 0&&(tp=i);let e=tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SM(i){return i*yo}function EM(i){return i*To}function Cu(i){return(i&i-1)===0&&i!==0}function MM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ll(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bM(i,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),h=c(t/2),f=a((e+n)/2),d=c((e+n)/2),m=a((e-n)/2),v=c((e-n)/2),x=a((n-e)/2),y=c((n-e)/2);switch(s){case"XYX":i.set(l*d,h*m,h*v,l*f);break;case"YZY":i.set(h*v,l*d,h*m,l*f);break;case"ZXZ":i.set(h*m,h*v,l*d,l*f);break;case"XZX":i.set(l*d,h*y,h*x,l*f);break;case"YXY":i.set(h*x,l*d,h*y,l*f);break;case"ZYZ":i.set(h*y,h*x,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const TM={DEG2RAD:yo,RAD2DEG:To,generateUUID:Xr,clamp:an,euclideanModulo:Xu,mapLinear:hM,inverseLerp:fM,lerp:So,damp:dM,pingpong:pM,smoothstep:mM,smootherstep:gM,randInt:_M,randFloat:vM,randFloatSpread:xM,seededRandom:yM,degToRad:SM,radToDeg:EM,isPowerOfTwo:Cu,ceilPowerOfTwo:MM,floorPowerOfTwo:ll,setQuaternionFromProperEuler:bM,normalize:Sn,denormalize:Ls};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,s,a,c,l,h,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f)}set(e,t,n,s,a,c,l,h,f){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],h=n[6],f=n[1],d=n[4],m=n[7],v=n[2],x=n[5],y=n[8],M=s[0],_=s[3],p=s[6],P=s[1],E=s[4],C=s[7],z=s[2],F=s[5],R=s[8];return a[0]=c*M+l*P+h*z,a[3]=c*_+l*E+h*F,a[6]=c*p+l*C+h*R,a[1]=f*M+d*P+m*z,a[4]=f*_+d*E+m*F,a[7]=f*p+d*C+m*R,a[2]=v*M+x*P+y*z,a[5]=v*_+x*E+y*F,a[8]=v*p+x*C+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8];return t*c*d-t*l*f-n*a*d+n*l*h+s*a*f-s*c*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],m=d*c-l*f,v=l*h-d*a,x=f*a-c*h,y=t*m+n*v+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=m*M,e[1]=(s*f-d*n)*M,e[2]=(l*n-s*c)*M,e[3]=v*M,e[4]=(d*t-s*h)*M,e[5]=(s*a-l*t)*M,e[6]=x*M,e[7]=(n*h-f*t)*M,e[8]=(c*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*c+f*l)+c+e,-s*f,s*h,-s*(-f*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new xt;function Tm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function AM(){const i=cl("canvas");return i.style.display="block",i}const np={};function wM(i){i in np||(np[i]=!0,console.warn(i))}const ip=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rp=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[xr]:{transfer:rl,primaries:sl,toReference:i=>i,fromReference:i=>i},[yi]:{transfer:Gt,primaries:sl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[gl]:{transfer:rl,primaries:ol,toReference:i=>i.applyMatrix3(rp),fromReference:i=>i.applyMatrix3(ip)},[Wu]:{transfer:Gt,primaries:ol,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rp),fromReference:i=>i.applyMatrix3(ip).convertLinearToSRGB()}},CM=new Set([xr,gl]),Dt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!CM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ea[e].toReference,s=Ea[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ea[i].primaries},getTransfer:function(i){return i===hr?rl:Ea[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class Am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=cl("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Ns(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RM=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(Vc(s[c].image)):a.push(Vc(s[c]))}else a=Vc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Am.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;class Mn extends Wr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=ui,s=ui,a=Pn,c=Br,l=hi,h=mr,f=Mn.DEFAULT_ANISOTROPY,d=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Xr(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tu:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tu:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=mm;Mn.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,n=0,s=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,f=h[0],d=h[4],m=h[8],v=h[1],x=h[5],y=h[9],M=h[2],_=h[6],p=h[10];if(Math.abs(d-v)<.01&&Math.abs(m-M)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+v)<.1&&Math.abs(m+M)<.1&&Math.abs(y+_)<.1&&Math.abs(f+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,C=(x+1)/2,z=(p+1)/2,F=(d+v)/4,R=(m+M)/4,X=(y+_)/4;return E>C&&E>z?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=F/n,a=R/n):C>z?C<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),n=F/s,a=X/s):z<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(z),n=R/a,s=X/a),this.set(n,s,a,t),this}let P=Math.sqrt((_-y)*(_-y)+(m-M)*(m-M)+(v-d)*(v-d));return Math.abs(P)<.001&&(P=1),this.x=(_-y)/P,this.y=(m-M)/P,this.z=(v-d)/P,this.w=Math.acos((f+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PM extends Wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends PM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cm extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IM extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let h=n[s+0],f=n[s+1],d=n[s+2],m=n[s+3];const v=a[c+0],x=a[c+1],y=a[c+2],M=a[c+3];if(l===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=m;return}if(l===1){e[t+0]=v,e[t+1]=x,e[t+2]=y,e[t+3]=M;return}if(m!==M||h!==v||f!==x||d!==y){let _=1-l;const p=h*v+f*x+d*y+m*M,P=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const z=Math.sqrt(E),F=Math.atan2(z,p*P);_=Math.sin(_*F)/z,l=Math.sin(l*F)/z}const C=l*P;if(h=h*_+v*C,f=f*_+x*C,d=d*_+y*C,m=m*_+M*C,_===1-l){const z=1/Math.sqrt(h*h+f*f+d*d+m*m);h*=z,f*=z,d*=z,m*=z}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],h=n[s+1],f=n[s+2],d=n[s+3],m=a[c],v=a[c+1],x=a[c+2],y=a[c+3];return e[t]=l*y+d*m+h*x-f*v,e[t+1]=h*y+d*v+f*m-l*x,e[t+2]=f*y+d*x+l*v-h*m,e[t+3]=d*y-l*m-h*v-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,h=Math.sin,f=l(n/2),d=l(s/2),m=l(a/2),v=h(n/2),x=h(s/2),y=h(a/2);switch(c){case"XYZ":this._x=v*d*m+f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m-v*x*y;break;case"YXZ":this._x=v*d*m+f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m+v*x*y;break;case"ZXY":this._x=v*d*m-f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m-v*x*y;break;case"ZYX":this._x=v*d*m-f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m+v*x*y;break;case"YZX":this._x=v*d*m+f*x*y,this._y=f*x*m+v*d*y,this._z=f*d*y-v*x*m,this._w=f*d*m-v*x*y;break;case"XZY":this._x=v*d*m-f*x*y,this._y=f*x*m-v*d*y,this._z=f*d*y+v*x*m,this._w=f*d*m+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],h=t[9],f=t[2],d=t[6],m=t[10],v=n+l+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(d-h)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(n>l&&n>m){const x=2*Math.sqrt(1+n-l-m);this._w=(d-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(l>m){const x=2*Math.sqrt(1+l-n-m);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+d)/x}else{const x=2*Math.sqrt(1+m-n-l);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+c*l+s*f-a*h,this._y=s*d+c*h+a*l-n*f,this._z=a*d+c*f+n*h-s*l,this._w=c*d-n*l-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,l),m=Math.sin((1-t)*d)/f,v=Math.sin(t*d)/f;return this._w=c*m+this._w*v,this._x=n*m+this._x*v,this._y=s*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,h=e.w,f=2*(c*s-l*n),d=2*(l*t-a*s),m=2*(a*n-c*t);return this.x=t+h*f+c*m-l*d,this.y=n+h*d+l*f-a*m,this.z=s+h*m+a*d-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,h=t.z;return this.x=s*h-a*l,this.y=a*c-n*h,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new V,sp=new kr;class Yr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(a,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),ba.subVectors(this.max,ho),ms.subVectors(e.a,ho),gs.subVectors(e.b,ho),_s.subVectors(e.c,ho),ir.subVectors(gs,ms),rr.subVectors(_s,gs),Rr.subVectors(ms,_s);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Rr.z,Rr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Rr.z,0,-Rr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Rr.y,Rr.x,0];return!Xc(t,ms,gs,_s,ba)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,ms,gs,_s,ba))?!1:(Ta.crossVectors(ir,rr),t=[Ta.x,Ta.y,Ta.z],Xc(t,ms,gs,_s,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,Ma=new Yr,ms=new V,gs=new V,_s=new V,ir=new V,rr=new V,Rr=new V,ho=new V,ba=new V,Ta=new V,Lr=new V;function Xc(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Lr.fromArray(i,a);const l=s.x*Math.abs(Lr.x)+s.y*Math.abs(Lr.y)+s.z*Math.abs(Lr.z),h=e.dot(Lr),f=t.dot(Lr),d=n.dot(Lr);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>l)return!1}return!0}const DM=new Yr,fo=new V,Yc=new V;class Lo{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):DM.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Yc)),this.expandByPoint(fo.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new V,qc=new V,Aa=new V,sr=new V,$c=new V,wa=new V,Zc=new V;class Rm{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(qc);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Aa),l=sr.dot(this.direction),h=-sr.dot(Aa),f=sr.lengthSq(),d=Math.abs(1-c*c);let m,v,x,y;if(d>0)if(m=c*h-l,v=c*l-h,y=a*d,m>=0)if(v>=-y)if(v<=y){const M=1/d;m*=M,v*=M,x=m*(m+c*v+2*l)+v*(c*m+v+2*h)+f}else v=a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;else v=-a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;else v<=-y?(m=Math.max(0,-(-c*a+l)),v=m>0?-a:Math.min(Math.max(-a,-h),a),x=-m*m+v*(v+2*h)+f):v<=y?(m=0,v=Math.min(Math.max(-a,-h),a),x=v*(v+2*h)+f):(m=Math.max(0,-(c*a+l)),v=m>0?a:Math.min(Math.max(-a,-h),a),x=-m*m+v*(v+2*h)+f);else v=c>0?-a:a,m=Math.max(0,-(c*v+l)),x=-m*m+v*(v+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(qc).addScaledVector(Aa,v),x}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,h;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,s=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,s=(e.min.x-v.x)*f),d>=0?(a=(e.min.y-v.y)*d,c=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,c=(e.min.y-v.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),m>=0?(l=(e.min.z-v.z)*m,h=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,h=(e.min.z-v.z)*m),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,a){$c.subVectors(t,e),wa.subVectors(n,e),Zc.crossVectors($c,wa);let c=this.direction.dot(Zc),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;sr.subVectors(this.origin,e);const h=l*this.direction.dot(wa.crossVectors(sr,wa));if(h<0)return null;const f=l*this.direction.dot($c.cross(sr));if(f<0||h+f>c)return null;const d=-l*sr.dot(Zc);return d<0?null:this.at(d/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,n,s,a,c,l,h,f,d,m,v,x,y,M,_){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f,d,m,v,x,y,M,_)}set(e,t,n,s,a,c,l,h,f,d,m,v,x,y,M,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=c,p[9]=l,p[13]=h,p[2]=f,p[6]=d,p[10]=m,p[14]=v,p[3]=x,p[7]=y,p[11]=M,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),a=1/vs.setFromMatrixColumn(e,1).length(),c=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*d,x=c*m,y=l*d,M=l*m;t[0]=h*d,t[4]=-h*m,t[8]=f,t[1]=x+y*f,t[5]=v-M*f,t[9]=-l*h,t[2]=M-v*f,t[6]=y+x*f,t[10]=c*h}else if(e.order==="YXZ"){const v=h*d,x=h*m,y=f*d,M=f*m;t[0]=v+M*l,t[4]=y*l-x,t[8]=c*f,t[1]=c*m,t[5]=c*d,t[9]=-l,t[2]=x*l-y,t[6]=M+v*l,t[10]=c*h}else if(e.order==="ZXY"){const v=h*d,x=h*m,y=f*d,M=f*m;t[0]=v-M*l,t[4]=-c*m,t[8]=y+x*l,t[1]=x+y*l,t[5]=c*d,t[9]=M-v*l,t[2]=-c*f,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const v=c*d,x=c*m,y=l*d,M=l*m;t[0]=h*d,t[4]=y*f-x,t[8]=v*f+M,t[1]=h*m,t[5]=M*f+v,t[9]=x*f-y,t[2]=-f,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,x=c*f,y=l*h,M=l*f;t[0]=h*d,t[4]=M-v*m,t[8]=y*m+x,t[1]=m,t[5]=c*d,t[9]=-l*d,t[2]=-f*d,t[6]=x*m+y,t[10]=v-M*m}else if(e.order==="XZY"){const v=c*h,x=c*f,y=l*h,M=l*f;t[0]=h*d,t[4]=-m,t[8]=f*d,t[1]=v*m+M,t[5]=c*d,t[9]=x*m-y,t[2]=y*m-x,t[6]=l*d,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UM,e,NM)}lookAt(e,t,n){const s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),or.crossVectors(n,zn),or.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),or.crossVectors(n,zn)),or.normalize(),Ca.crossVectors(zn,or),s[0]=or.x,s[4]=Ca.x,s[8]=zn.x,s[1]=or.y,s[5]=Ca.y,s[9]=zn.y,s[2]=or.z,s[6]=Ca.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],h=n[8],f=n[12],d=n[1],m=n[5],v=n[9],x=n[13],y=n[2],M=n[6],_=n[10],p=n[14],P=n[3],E=n[7],C=n[11],z=n[15],F=s[0],R=s[4],X=s[8],le=s[12],T=s[1],D=s[5],Se=s[9],pe=s[13],B=s[2],K=s[6],J=s[10],ce=s[14],ie=s[3],ue=s[7],me=s[11],xe=s[15];return a[0]=c*F+l*T+h*B+f*ie,a[4]=c*R+l*D+h*K+f*ue,a[8]=c*X+l*Se+h*J+f*me,a[12]=c*le+l*pe+h*ce+f*xe,a[1]=d*F+m*T+v*B+x*ie,a[5]=d*R+m*D+v*K+x*ue,a[9]=d*X+m*Se+v*J+x*me,a[13]=d*le+m*pe+v*ce+x*xe,a[2]=y*F+M*T+_*B+p*ie,a[6]=y*R+M*D+_*K+p*ue,a[10]=y*X+M*Se+_*J+p*me,a[14]=y*le+M*pe+_*ce+p*xe,a[3]=P*F+E*T+C*B+z*ie,a[7]=P*R+E*D+C*K+z*ue,a[11]=P*X+E*Se+C*J+z*me,a[15]=P*le+E*pe+C*ce+z*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],h=e[9],f=e[13],d=e[2],m=e[6],v=e[10],x=e[14],y=e[3],M=e[7],_=e[11],p=e[15];return y*(+a*h*m-s*f*m-a*l*v+n*f*v+s*l*x-n*h*x)+M*(+t*h*x-t*f*v+a*c*v-s*c*x+s*f*d-a*h*d)+_*(+t*f*m-t*l*x-a*c*m+n*c*x+a*l*d-n*f*d)+p*(-s*l*d-t*h*m+t*l*v+s*c*m-n*c*v+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],m=e[9],v=e[10],x=e[11],y=e[12],M=e[13],_=e[14],p=e[15],P=m*_*f-M*v*f+M*h*x-l*_*x-m*h*p+l*v*p,E=y*v*f-d*_*f-y*h*x+c*_*x+d*h*p-c*v*p,C=d*M*f-y*m*f+y*l*x-c*M*x-d*l*p+c*m*p,z=y*m*h-d*M*h-y*l*v+c*M*v+d*l*_-c*m*_,F=t*P+n*E+s*C+a*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/F;return e[0]=P*R,e[1]=(M*v*a-m*_*a-M*s*x+n*_*x+m*s*p-n*v*p)*R,e[2]=(l*_*a-M*h*a+M*s*f-n*_*f-l*s*p+n*h*p)*R,e[3]=(m*h*a-l*v*a-m*s*f+n*v*f+l*s*x-n*h*x)*R,e[4]=E*R,e[5]=(d*_*a-y*v*a+y*s*x-t*_*x-d*s*p+t*v*p)*R,e[6]=(y*h*a-c*_*a-y*s*f+t*_*f+c*s*p-t*h*p)*R,e[7]=(c*v*a-d*h*a+d*s*f-t*v*f-c*s*x+t*h*x)*R,e[8]=C*R,e[9]=(y*m*a-d*M*a-y*n*x+t*M*x+d*n*p-t*m*p)*R,e[10]=(c*M*a-y*l*a+y*n*f-t*M*f-c*n*p+t*l*p)*R,e[11]=(d*l*a-c*m*a-d*n*f+t*m*f+c*n*x-t*l*x)*R,e[12]=z*R,e[13]=(d*M*s-y*m*s+y*n*v-t*M*v-d*n*_+t*m*_)*R,e[14]=(y*l*s-c*M*s-y*n*h+t*M*h+c*n*_-t*l*_)*R,e[15]=(c*m*s-d*l*s+d*n*h-t*m*h-c*n*v+t*l*v)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,h=e.z,f=a*c,d=a*l;return this.set(f*c+n,f*l-s*h,f*h+s*l,0,f*l+s*h,d*l+n,d*h-s*c,0,f*h-s*l,d*h+s*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,h=t._w,f=a+a,d=c+c,m=l+l,v=a*f,x=a*d,y=a*m,M=c*d,_=c*m,p=l*m,P=h*f,E=h*d,C=h*m,z=n.x,F=n.y,R=n.z;return s[0]=(1-(M+p))*z,s[1]=(x+C)*z,s[2]=(y-E)*z,s[3]=0,s[4]=(x-C)*F,s[5]=(1-(v+p))*F,s[6]=(_+P)*F,s[7]=0,s[8]=(y+E)*R,s[9]=(_-P)*R,s[10]=(1-(v+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=vs.set(s[0],s[1],s[2]).length();const c=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const f=1/a,d=1/c,m=1/l;return ai.elements[0]*=f,ai.elements[1]*=f,ai.elements[2]*=f,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=m,ai.elements[9]*=m,ai.elements[10]*=m,t.setFromRotationMatrix(ai),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=Yi){const h=this.elements,f=2*a/(t-e),d=2*a/(n-s),m=(t+e)/(t-e),v=(n+s)/(n-s);let x,y;if(l===Yi)x=-(c+a)/(c-a),y=-2*c*a/(c-a);else if(l===al)x=-c/(c-a),y=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=d,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=Yi){const h=this.elements,f=1/(t-e),d=1/(n-s),m=1/(c-a),v=(t+e)*f,x=(n+s)*d;let y,M;if(l===Yi)y=(c+a)*m,M=-2*m;else if(l===al)y=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=M,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new V,ai=new Yt,UM=new V(0,0,0),NM=new V(1,1,1),or=new V,Ca=new V,zn=new V,op=new Yt,ap=new kr;class qi{constructor(e=0,t=0,n=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],h=s[1],f=s[5],d=s[9],m=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(an(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-an(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const lp=new V,xs=new kr,Bi=new Yt,Ra=new V,po=new V,FM=new V,BM=new kr,cp=new V(1,0,0),up=new V(0,1,0),hp=new V(0,0,1),zM={type:"added"},GM={type:"removed"},Kc={type:"childadded",child:null},Jc={type:"childremoved",child:null};class bn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new V,t=new qi,n=new kr,s=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new xt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(po,Ra,this.up):Bi.lookAt(Ra,po,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Bi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zM),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GM),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const l=s[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const m=h[f];a(e.shapes,m)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,f=this.material.length;h<f;h++)l.push(a(e.materials,this.material[h]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(a(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),f=c(e.textures),d=c(e.images),m=c(e.shapes),v=c(e.skeletons),x=c(e.animations),y=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function c(l){const h=[];for(const f in l){const d=l[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bn.DEFAULT_UP=new V(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new V,zi=new V,jc=new V,Gi=new V,ys=new V,Ss=new V,fp=new V,Qc=new V,eu=new V,tu=new V;class Mi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){li.subVectors(s,t),zi.subVectors(n,t),jc.subVectors(e,t);const c=li.dot(li),l=li.dot(zi),h=li.dot(jc),f=zi.dot(zi),d=zi.dot(jc),m=c*f-l*l;if(m===0)return a.set(0,0,0),null;const v=1/m,x=(f*h-l*d)*v,y=(c*d-l*h)*v;return a.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,s,a,c,l,h){return this.getBarycoord(e,t,n,s,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Gi.x),h.addScaledVector(c,Gi.y),h.addScaledVector(l,Gi.z),h)}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),zi.subVectors(e,t),li.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;ys.subVectors(s,n),Ss.subVectors(a,n),Qc.subVectors(e,n);const h=ys.dot(Qc),f=Ss.dot(Qc);if(h<=0&&f<=0)return t.copy(n);eu.subVectors(e,s);const d=ys.dot(eu),m=Ss.dot(eu);if(d>=0&&m<=d)return t.copy(s);const v=h*m-d*f;if(v<=0&&h>=0&&d<=0)return c=h/(h-d),t.copy(n).addScaledVector(ys,c);tu.subVectors(e,a);const x=ys.dot(tu),y=Ss.dot(tu);if(y>=0&&x<=y)return t.copy(a);const M=x*f-h*y;if(M<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector(Ss,l);const _=d*y-x*m;if(_<=0&&m-d>=0&&x-y>=0)return fp.subVectors(a,s),l=(m-d)/(m-d+(x-y)),t.copy(s).addScaledVector(fp,l);const p=1/(_+M+v);return c=M*p,l=v*p,t.copy(n).addScaledVector(ys,c).addScaledVector(Ss,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},La={h:0,s:0,l:0};function nu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=Xu(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=nu(c,a,e+1/3),this.g=nu(c,a,e),this.b=nu(c,a,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=yi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const n=Pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=kc(e.r),this.g=kc(e.g),this.b=kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Dt.fromWorkingColorSpace(gn.copy(this),e),Math.round(an(gn.r*255,0,255))*65536+Math.round(an(gn.g*255,0,255))*256+Math.round(an(gn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,s=gn.g,a=gn.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let h,f;const d=(l+c)/2;if(l===c)h=0,f=0;else{const m=c-l;switch(f=d<=.5?m/(c+l):m/(2-c-l),c){case n:h=(s-a)/m+(s<a?6:0);break;case s:h=(a-n)/m+2;break;case a:h=(n-s)/m+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=yi){Dt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,s=gn.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(La);const n=So(ar.h,La.h,t),s=So(ar.s,La.s,t),a=So(ar.l,La.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Et;Et.NAMES=Pm;let HM=0;class _l extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Us,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=Eu,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Su&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==il&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ul extends _l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new V,Pa=new Ce;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),s=Sn(s,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class Im extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dm extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kM=0;const jn=new Yt,iu=new bn,Es=new V,Gn=new Yr,mo=new Yr,on=new V;class bi extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Dm:Im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];mo.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(Gn.min,mo.min),Gn.expandByPoint(on),on.addVectors(Gn.max,mo.max),Gn.expandByPoint(on)):(Gn.expandByPoint(mo.min),Gn.expandByPoint(mo.max))}Gn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)on.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(on));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],h=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)on.fromBufferAttribute(l,f),h&&(Es.fromBufferAttribute(e,f),on.add(Es)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let X=0;X<n.count;X++)l[X]=new V,h[X]=new V;const f=new V,d=new V,m=new V,v=new Ce,x=new Ce,y=new Ce,M=new V,_=new V;function p(X,le,T){f.fromBufferAttribute(n,X),d.fromBufferAttribute(n,le),m.fromBufferAttribute(n,T),v.fromBufferAttribute(a,X),x.fromBufferAttribute(a,le),y.fromBufferAttribute(a,T),d.sub(f),m.sub(f),x.sub(v),y.sub(v);const D=1/(x.x*y.y-y.x*x.y);isFinite(D)&&(M.copy(d).multiplyScalar(y.y).addScaledVector(m,-x.y).multiplyScalar(D),_.copy(m).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(D),l[X].add(M),l[le].add(M),l[T].add(M),h[X].add(_),h[le].add(_),h[T].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let X=0,le=P.length;X<le;++X){const T=P[X],D=T.start,Se=T.count;for(let pe=D,B=D+Se;pe<B;pe+=3)p(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const E=new V,C=new V,z=new V,F=new V;function R(X){z.fromBufferAttribute(s,X),F.copy(z);const le=l[X];E.copy(le),E.sub(z.multiplyScalar(z.dot(le))).normalize(),C.crossVectors(F,le);const D=C.dot(h[X])<0?-1:1;c.setXYZW(X,E.x,E.y,E.z,D)}for(let X=0,le=P.length;X<le;++X){const T=P[X],D=T.start,Se=T.count;for(let pe=D,B=D+Se;pe<B;pe+=3)R(e.getX(pe+0)),R(e.getX(pe+1)),R(e.getX(pe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const s=new V,a=new V,c=new V,l=new V,h=new V,f=new V,d=new V,m=new V;if(e)for(let v=0,x=e.count;v<x;v+=3){const y=e.getX(v+0),M=e.getX(v+1),_=e.getX(v+2);s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,_),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,_),l.add(d),h.add(d),f.add(d),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(l,h){const f=l.array,d=l.itemSize,m=l.normalized,v=new f.constructor(h.length*d);let x=0,y=0;for(let M=0,_=h.length;M<_;M++){l.isInterleavedBufferAttribute?x=h[M]*l.data.stride+l.offset:x=h[M]*d;for(let p=0;p<d;p++)v[y++]=f[x++]}return new fi(v,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,s=this.attributes;for(const l in s){const h=s[l],f=e(h,n);t.setAttribute(l,f)}const a=this.morphAttributes;for(const l in a){const h=[],f=a[l];for(let d=0,m=f.length;d<m;d++){const v=f[d],x=e(v,n);h.push(x)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const f=c[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let m=0,v=f.length;m<v;m++){const x=f[m];d.push(x.toJSON(e.data))}d.length>0&&(s[h]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],m=a[f];for(let v=0,x=m.length;v<x;v++)d.push(m[v].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dp=new Yt,Pr=new Rm,Ia=new Lo,pp=new V,Ms=new V,bs=new V,Ts=new V,ru=new V,Da=new V,Ua=new Ce,Na=new Ce,Oa=new Ce,mp=new V,gp=new V,_p=new V,Fa=new V,Ba=new V;class kn extends bn{constructor(e=new bi,t=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){Da.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=l[h],m=a[h];d!==0&&(ru.fromBufferAttribute(m,e),c?Da.addScaledVector(ru,d):Da.addScaledVector(ru.sub(t),d))}t.add(Da)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(a),Pr.copy(e.ray).recast(e.near),!(Ia.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Ia,pp)===null||Pr.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(dp.copy(a).invert(),Pr.copy(e.ray).applyMatrix4(dp),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,v=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(c))for(let y=0,M=v.length;y<M;y++){const _=v[y],p=c[_.materialIndex],P=Math.max(_.start,x.start),E=Math.min(l.count,Math.min(_.start+_.count,x.start+x.count));for(let C=P,z=E;C<z;C+=3){const F=l.getX(C),R=l.getX(C+1),X=l.getX(C+2);s=za(this,p,e,n,f,d,m,F,R,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),M=Math.min(l.count,x.start+x.count);for(let _=y,p=M;_<p;_+=3){const P=l.getX(_),E=l.getX(_+1),C=l.getX(_+2);s=za(this,c,e,n,f,d,m,P,E,C),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let y=0,M=v.length;y<M;y++){const _=v[y],p=c[_.materialIndex],P=Math.max(_.start,x.start),E=Math.min(h.count,Math.min(_.start+_.count,x.start+x.count));for(let C=P,z=E;C<z;C+=3){const F=C,R=C+1,X=C+2;s=za(this,p,e,n,f,d,m,F,R,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let _=y,p=M;_<p;_+=3){const P=_,E=_+1,C=_+2;s=za(this,c,e,n,f,d,m,P,E,C),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function VM(i,e,t,n,s,a,c,l){let h;if(e.side===In?h=n.intersectTriangle(c,a,s,!0,l):h=n.intersectTriangle(s,a,c,e.side===gr,l),h===null)return null;Ba.copy(l),Ba.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Ba);return f<t.near||f>t.far?null:{distance:f,point:Ba.clone(),object:i}}function za(i,e,t,n,s,a,c,l,h,f){i.getVertexPosition(l,Ms),i.getVertexPosition(h,bs),i.getVertexPosition(f,Ts);const d=VM(i,e,t,n,Ms,bs,Ts,Fa);if(d){s&&(Ua.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,h),Oa.fromBufferAttribute(s,f),d.uv=Mi.getInterpolation(Fa,Ms,bs,Ts,Ua,Na,Oa,new Ce)),a&&(Ua.fromBufferAttribute(a,l),Na.fromBufferAttribute(a,h),Oa.fromBufferAttribute(a,f),d.uv1=Mi.getInterpolation(Fa,Ms,bs,Ts,Ua,Na,Oa,new Ce)),c&&(mp.fromBufferAttribute(c,l),gp.fromBufferAttribute(c,h),_p.fromBufferAttribute(c,f),d.normal=Mi.getInterpolation(Fa,Ms,bs,Ts,mp,gp,_p,new V),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:l,b:h,c:f,normal:new V,materialIndex:0};Mi.getNormal(Ms,bs,Ts,m.normal),d.face=m}return d}class Po extends bi{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],d=[],m=[];let v=0,x=0;y("z","y","x",-1,-1,n,t,e,c,a,0),y("z","y","x",1,-1,n,t,-e,c,a,1),y("x","z","y",1,1,e,n,t,s,c,2),y("x","z","y",1,-1,e,n,-t,s,c,3),y("x","y","z",1,-1,e,t,n,s,a,4),y("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new Tn(f,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(m,2));function y(M,_,p,P,E,C,z,F,R,X,le){const T=C/R,D=z/X,Se=C/2,pe=z/2,B=F/2,K=R+1,J=X+1;let ce=0,ie=0;const ue=new V;for(let me=0;me<J;me++){const xe=me*D-pe;for(let Fe=0;Fe<K;Fe++){const st=Fe*T-Se;ue[M]=st*P,ue[_]=xe*E,ue[p]=B,f.push(ue.x,ue.y,ue.z),ue[M]=0,ue[_]=0,ue[p]=F>0?1:-1,d.push(ue.x,ue.y,ue.z),m.push(Fe/R),m.push(1-me/X),ce+=1}}for(let me=0;me<X;me++)for(let xe=0;xe<R;xe++){const Fe=v+xe+K*me,st=v+xe+K*(me+1),ne=v+(xe+1)+K*(me+1),ve=v+(xe+1)+K*me;h.push(Fe,st,ve),h.push(st,ne,ve),ie+=6}l.addGroup(x,ie,le),x+=ie,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function En(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function WM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Um(i){return i.getRenderTarget()===null?i.outputColorSpace:Dt.workingColorSpace}const XM={clone:Gs,merge:En};var YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends _l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=qM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nm extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new V,vp=new Ce,xp=new Ce;class Hn extends Nm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,vp,xp),t.subVectors(xp,vp)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,ws=1;class $M extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hn(As,ws,e,t);s.layers=this.layers,this.add(s);const a=new Hn(As,ws,e,t);a.layers=this.layers,this.add(a);const c=new Hn(As,ws,e,t);c.layers=this.layers,this.add(c);const l=new Hn(As,ws,e,t);l.layers=this.layers,this.add(l);const h=new Hn(As,ws,e,t);h.layers=this.layers,this.add(h);const f=new Hn(As,ws,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,h]=t;for(const f of t)this.remove(f);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===al)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,h,f,d]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(m,v,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Om extends Mn{constructor(e,t,n,s,a,c,l,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,a,c,l,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZM extends Hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Om(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Po(5,5,5),a=new _r({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:dr});a.uniforms.tEquirect.value=t;const c=new kn(s,a),l=t.minFilter;return t.minFilter===Br&&(t.minFilter=Pn),new $M(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const su=new V,KM=new V,JM=new xt;class ur{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=su.subVectors(n,t).cross(KM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(su),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||JM.getNormalMatrix(e),s=this.coplanarPoint(su).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Lo,Ga=new V;class Fm{constructor(e=new ur,t=new ur,n=new ur,s=new ur,a=new ur,c=new ur){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],h=s[3],f=s[4],d=s[5],m=s[6],v=s[7],x=s[8],y=s[9],M=s[10],_=s[11],p=s[12],P=s[13],E=s[14],C=s[15];if(n[0].setComponents(h-a,v-f,_-x,C-p).normalize(),n[1].setComponents(h+a,v+f,_+x,C+p).normalize(),n[2].setComponents(h+c,v+d,_+y,C+P).normalize(),n[3].setComponents(h-c,v-d,_-y,C-P).normalize(),n[4].setComponents(h-l,v-m,_-M,C-E).normalize(),t===Yi)n[5].setComponents(h+l,v+m,_+M,C+E).normalize();else if(t===al)n[5].setComponents(l,m,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function jM(i,e){const t=e.isWebGL2,n=new WeakMap;function s(f,d){const m=f.array,v=f.usage,x=m.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(m instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function a(f,d,m){const v=d.array,x=d._updateRange,y=d.updateRanges;if(i.bindBuffer(m,f),x.count===-1&&y.length===0&&i.bufferSubData(m,0,v),y.length!==0){for(let M=0,_=y.length;M<_;M++){const p=y[M];t?i.bufferSubData(m,p.start*v.BYTES_PER_ELEMENT,v,p.start,p.count):i.bufferSubData(m,p.start*v.BYTES_PER_ELEMENT,v.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):i.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),d.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function h(f,d){if(f.isGLBufferAttribute){const v=n.get(f);(!v||v.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);if(m===void 0)n.set(f,s(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,f,d),m.version=f.version}}return{get:c,remove:l,update:h}}class vl extends bi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),h=Math.floor(s),f=l+1,d=h+1,m=e/l,v=t/h,x=[],y=[],M=[],_=[];for(let p=0;p<d;p++){const P=p*v-c;for(let E=0;E<f;E++){const C=E*m-a;y.push(C,-P,0),M.push(0,0,1),_.push(E/l),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let P=0;P<l;P++){const E=P+f*p,C=P+f*(p+1),z=P+1+f*(p+1),F=P+1+f*p;x.push(E,C,F),x.push(C,z,F)}this.setIndex(x),this.setAttribute("position",new Tn(y,3)),this.setAttribute("normal",new Tn(M,3)),this.setAttribute("uv",new Tn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
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
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,db=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Eb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`
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
}`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
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
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
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
#endif`,jb=`struct PhysicalMaterial {
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
}`,Qb=`
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
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
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cT=`#if defined( USE_POINTS_UV )
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
#endif`,uT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
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
#endif`,mT=`#ifdef USE_MORPHTARGETS
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
#endif`,gT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xT=`#ifndef FLAT_SHADED
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
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BT=`float getShadowMask() {
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
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,aA=`#define DISTANCE
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
}`,lA=`#define DISTANCE
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,fA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define MATCAP
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
}`,vA=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,yA=`#define NORMAL
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
}`,SA=`#define PHONG
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
}`,EA=`#define PHONG
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
}`,MA=`#define STANDARD
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
}`,bA=`#define STANDARD
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
}`,TA=`#define TOON
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
}`,AA=`#define TOON
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
}`,wA=`uniform float size;
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
}`,CA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,LA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:QM,alphahash_pars_fragment:eb,alphamap_fragment:tb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:rb,aomap_fragment:sb,aomap_pars_fragment:ob,batching_pars_vertex:ab,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:hb,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:_b,color_fragment:vb,color_pars_fragment:xb,color_pars_vertex:yb,color_vertex:Sb,common:Eb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Ab,emissivemap_fragment:wb,emissivemap_pars_fragment:Cb,colorspace_fragment:Rb,colorspace_pars_fragment:Lb,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Db,envmap_pars_vertex:Ub,envmap_physical_pars_fragment:Yb,envmap_vertex:Nb,fog_vertex:Ob,fog_pars_vertex:Fb,fog_fragment:Bb,fog_pars_fragment:zb,gradientmap_pars_fragment:Gb,lightmap_fragment:Hb,lightmap_pars_fragment:kb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Wb,lights_pars_begin:Xb,lights_toon_fragment:qb,lights_toon_pars_fragment:$b,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Jb,lights_physical_pars_fragment:jb,lights_fragment_begin:Qb,lights_fragment_maps:eT,lights_fragment_end:tT,logdepthbuf_fragment:nT,logdepthbuf_pars_fragment:iT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:sT,map_fragment:oT,map_pars_fragment:aT,map_particle_fragment:lT,map_particle_pars_fragment:cT,metalnessmap_fragment:uT,metalnessmap_pars_fragment:hT,morphinstance_vertex:fT,morphcolor_vertex:dT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:gT,normal_fragment_begin:_T,normal_fragment_maps:vT,normal_pars_fragment:xT,normal_pars_vertex:yT,normal_vertex:ST,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:TT,iridescence_pars_fragment:AT,opaque_fragment:wT,packing:CT,premultiplied_alpha_fragment:RT,project_vertex:LT,dithering_fragment:PT,dithering_pars_fragment:IT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:OT,shadowmap_vertex:FT,shadowmask_pars_fragment:BT,skinbase_vertex:zT,skinning_pars_vertex:GT,skinning_vertex:HT,skinnormal_vertex:kT,specularmap_fragment:VT,specularmap_pars_fragment:WT,tonemapping_fragment:XT,tonemapping_pars_fragment:YT,transmission_fragment:qT,transmission_pars_fragment:$T,uv_pars_fragment:ZT,uv_pars_vertex:KT,uv_vertex:JT,worldpos_vertex:jT,background_vert:QT,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distanceRGBA_vert:aA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:uA,linedashed_vert:hA,linedashed_frag:fA,meshbasic_vert:dA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:_A,meshmatcap_frag:vA,meshnormal_vert:xA,meshnormal_frag:yA,meshphong_vert:SA,meshphong_frag:EA,meshphysical_vert:MA,meshphysical_frag:bA,meshtoon_vert:TA,meshtoon_frag:AA,points_vert:wA,points_frag:CA,shadow_vert:RA,shadow_frag:LA,sprite_vert:PA,sprite_frag:IA},Le={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Si={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Si.physical={uniforms:En([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ha={r:0,b:0,g:0},Dr=new qi,DA=new Yt;function UA(i,e,t,n,s,a,c){const l=new Et(0);let h=a===!0?0:1,f,d,m=null,v=0,x=null;function y(_,p){let P=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?t:e).get(E)),E===null?M(l,h):E&&E.isColor&&(M(E,1),P=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ml)?(d===void 0&&(d=new kn(new Po(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Gs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,F,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Dr.copy(p.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Dr)),d.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Gt,(m!==E||v!==E.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,m=E,v=E.version,x=i.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new kn(new vl(2,2),new _r({name:"BackgroundMaterial",uniforms:Gs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||v!==E.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,m=E,v=E.version,x=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function M(_,p){_.getRGB(Ha,Um(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,p,c)}return{getClearColor:function(){return l},setClearColor:function(_,p=1){l.set(_),h=p,M(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,M(l,h)},render:y}}function NA(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,l={},h=_(null);let f=h,d=!1;function m(B,K,J,ce,ie){let ue=!1;if(c){const me=M(ce,J,K);f!==me&&(f=me,x(f.object)),ue=p(B,ce,J,ie),ue&&P(B,ce,J,ie)}else{const me=K.wireframe===!0;(f.geometry!==ce.id||f.program!==J.id||f.wireframe!==me)&&(f.geometry=ce.id,f.program=J.id,f.wireframe=me,ue=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,X(B,K,J,ce),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function v(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function x(B){return n.isWebGL2?i.bindVertexArray(B):a.bindVertexArrayOES(B)}function y(B){return n.isWebGL2?i.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function M(B,K,J){const ce=J.wireframe===!0;let ie=l[B.id];ie===void 0&&(ie={},l[B.id]=ie);let ue=ie[K.id];ue===void 0&&(ue={},ie[K.id]=ue);let me=ue[ce];return me===void 0&&(me=_(v()),ue[ce]=me),me}function _(B){const K=[],J=[],ce=[];for(let ie=0;ie<s;ie++)K[ie]=0,J[ie]=0,ce[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:ce,object:B,attributes:{},index:null}}function p(B,K,J,ce){const ie=f.attributes,ue=K.attributes;let me=0;const xe=J.getAttributes();for(const Fe in xe)if(xe[Fe].location>=0){const ne=ie[Fe];let ve=ue[Fe];if(ve===void 0&&(Fe==="instanceMatrix"&&B.instanceMatrix&&(ve=B.instanceMatrix),Fe==="instanceColor"&&B.instanceColor&&(ve=B.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;me++}return f.attributesNum!==me||f.index!==ce}function P(B,K,J,ce){const ie={},ue=K.attributes;let me=0;const xe=J.getAttributes();for(const Fe in xe)if(xe[Fe].location>=0){let ne=ue[Fe];ne===void 0&&(Fe==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),Fe==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor));const ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),ie[Fe]=ve,me++}f.attributes=ie,f.attributesNum=me,f.index=ce}function E(){const B=f.newAttributes;for(let K=0,J=B.length;K<J;K++)B[K]=0}function C(B){z(B,0)}function z(B,K){const J=f.newAttributes,ce=f.enabledAttributes,ie=f.attributeDivisors;J[B]=1,ce[B]===0&&(i.enableVertexAttribArray(B),ce[B]=1),ie[B]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,K),ie[B]=K)}function F(){const B=f.newAttributes,K=f.enabledAttributes;for(let J=0,ce=K.length;J<ce;J++)K[J]!==B[J]&&(i.disableVertexAttribArray(J),K[J]=0)}function R(B,K,J,ce,ie,ue,me){me===!0?i.vertexAttribIPointer(B,K,J,ie,ue):i.vertexAttribPointer(B,K,J,ce,ie,ue)}function X(B,K,J,ce){if(n.isWebGL2===!1&&(B.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const ie=ce.attributes,ue=J.getAttributes(),me=K.defaultAttributeValues;for(const xe in ue){const Fe=ue[xe];if(Fe.location>=0){let st=ie[xe];if(st===void 0&&(xe==="instanceMatrix"&&B.instanceMatrix&&(st=B.instanceMatrix),xe==="instanceColor"&&B.instanceColor&&(st=B.instanceColor)),st!==void 0){const ne=st.normalized,ve=st.itemSize,De=t.get(st);if(De===void 0)continue;const Je=De.buffer,He=De.type,Oe=De.bytesPerElement,at=n.isWebGL2===!0&&(He===i.INT||He===i.UNSIGNED_INT||st.gpuType===gm);if(st.isInterleavedBufferAttribute){const Xe=st.data,O=Xe.stride,Ae=st.offset;if(Xe.isInstancedInterleavedBuffer){for(let re=0;re<Fe.locationSize;re++)z(Fe.location+re,Xe.meshPerAttribute);B.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let re=0;re<Fe.locationSize;re++)C(Fe.location+re);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let re=0;re<Fe.locationSize;re++)R(Fe.location+re,ve/Fe.locationSize,He,ne,O*Oe,(Ae+ve/Fe.locationSize*re)*Oe,at)}else{if(st.isInstancedBufferAttribute){for(let Xe=0;Xe<Fe.locationSize;Xe++)z(Fe.location+Xe,st.meshPerAttribute);B.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Xe=0;Xe<Fe.locationSize;Xe++)C(Fe.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Xe=0;Xe<Fe.locationSize;Xe++)R(Fe.location+Xe,ve/Fe.locationSize,He,ne,ve*Oe,ve/Fe.locationSize*Xe*Oe,at)}}else if(me!==void 0){const ne=me[xe];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Fe.location,ne);break;case 3:i.vertexAttrib3fv(Fe.location,ne);break;case 4:i.vertexAttrib4fv(Fe.location,ne);break;default:i.vertexAttrib1fv(Fe.location,ne)}}}}F()}function le(){Se();for(const B in l){const K=l[B];for(const J in K){const ce=K[J];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete K[J]}delete l[B]}}function T(B){if(l[B.id]===void 0)return;const K=l[B.id];for(const J in K){const ce=K[J];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete K[J]}delete l[B.id]}function D(B){for(const K in l){const J=l[K];if(J[B.id]===void 0)continue;const ce=J[B.id];for(const ie in ce)y(ce[ie].object),delete ce[ie];delete J[B.id]}}function Se(){pe(),d=!0,f!==h&&(f=h,x(f.object))}function pe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:Se,resetDefaultState:pe,dispose:le,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:C,disableUnusedAttributes:F}}function OA(i,e,t,n){const s=n.isWebGL2;let a;function c(d){a=d}function l(d,m){i.drawArrays(a,d,m),t.update(m,a,1)}function h(d,m,v){if(v===0)return;let x,y;if(s)x=i,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](a,d,m,v),t.update(m,a,v)}function f(d,m,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v;y++)this.render(d[y],m[y]);else{x.multiDrawArraysWEBGL(a,d,0,m,0,v);let y=0;for(let M=0;M<v;M++)y+=m[M];t.update(y,a,1)}}this.setMode=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=f}function FA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=a(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=c||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,C=c||e.has("OES_texture_float"),z=E&&C,F=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:P,vertexTextures:E,floatFragmentTextures:C,floatVertexTextures:z,maxSamples:F}}function BA(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new ur,l=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||n!==0||s;return s=v,n=m.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=d(m,v,0)},this.setState=function(m,v,x){const y=m.clippingPlanes,M=m.clipIntersection,_=m.clipShadows,p=i.get(m);if(!s||y===null||y.length===0||a&&!_)a?d(null):f();else{const P=a?0:n,E=P*4;let C=p.clippingState||null;h.value=C,C=d(y,v,E,x);for(let z=0;z!==E;++z)C[z]=t[z];p.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,v,x,y){const M=m!==null?m.length:0;let _=null;if(M!==0){if(_=h.value,y!==!0||_===null){const p=x+M*4,P=v.matrixWorldInverse;l.getNormalMatrix(P),(_===null||_.length<p)&&(_=new Float32Array(p));for(let E=0,C=x;E!==M;++E,C+=4)c.copy(m[E]).applyMatrix4(P,l),c.normal.toArray(_,C),_[C+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function zA(i){let e=new WeakMap;function t(c,l){return l===Mu?c.mapping=Fs:l===bu&&(c.mapping=Bs),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Mu||l===bu)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new ZM(h.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class GA extends Nm{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,yp=[.125,.215,.35,.446,.526,.582],Fr=20,ou=new GA,Sp=new Et;let au=null,lu=0,cu=0;const Nr=(1+Math.sqrt(5))/2,Cs=1/Nr,Ep=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Nr,Cs),new V(0,Nr,-Cs),new V(Cs,0,Nr),new V(-Cs,0,Nr),new V(Nr,Cs,0),new V(-Nr,Cs,0)];class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(au,lu,cu),e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:bo,format:hi,colorSpace:xr,depthBuffer:!1},s=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HA(a)),this._blurMaterial=kA(a,e,t)}return s}_compileMaterial(e){const t=new kn(this._lodPlanes[0],e);this._renderer.compile(t,ou)}_sceneToCubeUV(e,t,n,s){const l=new Hn(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,v=d.toneMapping;d.getClearColor(Sp),d.toneMapping=pr,d.autoClear=!1;const x=new ul({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),y=new kn(new Po,x);let M=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,M=!0):(x.color.copy(Sp),M=!0);for(let p=0;p<6;p++){const P=p%3;P===0?(l.up.set(0,h[p],0),l.lookAt(f[p],0,0)):P===1?(l.up.set(0,0,h[p]),l.lookAt(0,f[p],0)):(l.up.set(0,h[p],0),l.lookAt(0,0,f[p]));const E=this._cubeSize;ka(s,P*E,p>2?E:0,E,E),d.setRenderTarget(s),M&&d.render(y,l),d.render(e,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=v,d.autoClear=m,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new kn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const h=this._cubeSize;ka(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,ou)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Ep[(s-1)%Ep.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new kn(this._lodPlanes[s],f),v=f.uniforms,x=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Fr-1),M=a/y,_=isFinite(a)?1+Math.floor(d*M):Fr;_>Fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fr}`);const p=[];let P=0;for(let R=0;R<Fr;++R){const X=R/M,le=Math.exp(-X*X/2);p.push(le),R===0?P+=le:R<_&&(P+=2*le)}for(let R=0;R<p.length;R++)p[R]=p[R]/P;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=p,v.latitudinal.value=c==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:E}=this;v.dTheta.value=y,v.mipInt.value=E-n;const C=this._sizeLods[s],z=3*C*(s>E-Ps?s-E+Ps:0),F=4*(this._cubeSize-C);ka(t,z,F,3*C,2*C),h.setRenderTarget(t),h.render(m,ou)}}function HA(i){const e=[],t=[],n=[];let s=i;const a=i-Ps+1+yp.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let h=1/l;c>i-Ps?h=yp[c-i+Ps-1]:c===0&&(h=0),n.push(h);const f=1/(l-2),d=-f,m=1+f,v=[d,d,m,d,m,m,d,d,m,m,d,m],x=6,y=6,M=3,_=2,p=1,P=new Float32Array(M*y*x),E=new Float32Array(_*y*x),C=new Float32Array(p*y*x);for(let F=0;F<x;F++){const R=F%3*2/3-1,X=F>2?0:-1,le=[R,X,0,R+2/3,X,0,R+2/3,X+1,0,R,X,0,R+2/3,X+1,0,R,X+1,0];P.set(le,M*y*F),E.set(v,_*y*F);const T=[F,F,F,F,F,F];C.set(T,p*y*F)}const z=new bi;z.setAttribute("position",new fi(P,M)),z.setAttribute("uv",new fi(E,_)),z.setAttribute("faceIndex",new fi(C,p)),e.push(z),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bp(i,e,t){const n=new Hr(i,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kA(i,e,t){const n=new Float32Array(Fr),s=new V(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Tp(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Ap(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function VA(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,f=h===Mu||h===bu,d=h===Fs||h===Bs;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new Mp(i)),m=f?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{const m=l.image;if(f&&m&&m.height>0||d&&m&&s(m)){t===null&&(t=new Mp(i));const v=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function s(l){let h=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&h++;return h===f}function a(l){const h=l.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function WA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function XA(i,e,t,n){const s={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const M=v.morphAttributes[y];for(let _=0,p=M.length;_<p;_++)e.remove(M[_])}v.removeEventListener("dispose",c),delete s[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function h(m){const v=m.attributes;for(const y in v)e.update(v[y],i.ARRAY_BUFFER);const x=m.morphAttributes;for(const y in x){const M=x[y];for(let _=0,p=M.length;_<p;_++)e.update(M[_],i.ARRAY_BUFFER)}}function f(m){const v=[],x=m.index,y=m.attributes.position;let M=0;if(x!==null){const P=x.array;M=x.version;for(let E=0,C=P.length;E<C;E+=3){const z=P[E+0],F=P[E+1],R=P[E+2];v.push(z,F,F,R,R,z)}}else if(y!==void 0){const P=y.array;M=y.version;for(let E=0,C=P.length/3-1;E<C;E+=3){const z=E+0,F=E+1,R=E+2;v.push(z,F,F,R,R,z)}}else return;const _=new(Tm(v)?Dm:Im)(v,1);_.version=M;const p=a.get(m);p&&e.remove(p),a.set(m,_)}function d(m){const v=a.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&f(m)}else f(m);return a.get(m)}return{get:l,update:h,getWireframeAttribute:d}}function YA(i,e,t,n){const s=n.isWebGL2;let a;function c(x){a=x}let l,h;function f(x){l=x.type,h=x.bytesPerElement}function d(x,y){i.drawElements(a,y,l,x*h),t.update(y,a,1)}function m(x,y,M){if(M===0)return;let _,p;if(s)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](a,y,l,x*h,M),t.update(y,a,M)}function v(x,y,M){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<M;p++)this.render(x[p]/h,y[p]);else{_.multiDrawElementsWEBGL(a,y,0,l,x,0,M);let p=0;for(let P=0;P<M;P++)p+=y[P];t.update(p,a,1)}}this.setMode=c,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=v}function qA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $A(i,e){return i[0]-e[0]}function ZA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function KA(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,c=new hn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function h(f,d,m){const v=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=y!==void 0?y.length:0;let _=a.get(d);if(_===void 0||_.count!==M){let pe=function(){D.dispose(),a.delete(d),d.removeEventListener("dispose",pe)};var x=pe;_!==void 0&&_.texture.dispose();const p=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let R=0;p===!0&&(R=1),P===!0&&(R=2),E===!0&&(R=3);let X=d.attributes.position.count*R,le=1;X>e.maxTextureSize&&(le=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const T=new Float32Array(X*le*4*M),D=new Cm(T,X,le,M);D.type=Ei,D.needsUpdate=!0;const Se=R*4;for(let B=0;B<M;B++){const K=C[B],J=z[B],ce=F[B],ie=X*le*4*B;for(let ue=0;ue<K.count;ue++){const me=ue*Se;p===!0&&(c.fromBufferAttribute(K,ue),T[ie+me+0]=c.x,T[ie+me+1]=c.y,T[ie+me+2]=c.z,T[ie+me+3]=0),P===!0&&(c.fromBufferAttribute(J,ue),T[ie+me+4]=c.x,T[ie+me+5]=c.y,T[ie+me+6]=c.z,T[ie+me+7]=0),E===!0&&(c.fromBufferAttribute(ce,ue),T[ie+me+8]=c.x,T[ie+me+9]=c.y,T[ie+me+10]=c.z,T[ie+me+11]=ce.itemSize===4?c.w:1)}}_={count:M,texture:D,size:new Ce(X,le)},a.set(d,_),d.addEventListener("dispose",pe)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let p=0;for(let E=0;E<v.length;E++)p+=v[E];const P=d.morphTargetsRelative?1:1-p;m.getUniforms().setValue(i,"morphTargetBaseInfluence",P),m.getUniforms().setValue(i,"morphTargetInfluences",v)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const y=v===void 0?0:v.length;let M=n[d.id];if(M===void 0||M.length!==y){M=[];for(let C=0;C<y;C++)M[C]=[C,0];n[d.id]=M}for(let C=0;C<y;C++){const z=M[C];z[0]=C,z[1]=v[C]}M.sort(ZA);for(let C=0;C<8;C++)C<y&&M[C][1]?(l[C][0]=M[C][0],l[C][1]=M[C][1]):(l[C][0]=Number.MAX_SAFE_INTEGER,l[C][1]=0);l.sort($A);const _=d.morphAttributes.position,p=d.morphAttributes.normal;let P=0;for(let C=0;C<8;C++){const z=l[C],F=z[0],R=z[1];F!==Number.MAX_SAFE_INTEGER&&R?(_&&d.getAttribute("morphTarget"+C)!==_[F]&&d.setAttribute("morphTarget"+C,_[F]),p&&d.getAttribute("morphNormal"+C)!==p[F]&&d.setAttribute("morphNormal"+C,p[F]),s[C]=R,P+=R):(_&&d.hasAttribute("morphTarget"+C)===!0&&d.deleteAttribute("morphTarget"+C),p&&d.hasAttribute("morphNormal"+C)===!0&&d.deleteAttribute("morphNormal"+C),s[C]=0)}const E=d.morphTargetsRelative?1:1-P;m.getUniforms().setValue(i,"morphTargetBaseInfluence",E),m.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function JA(i,e,t,n){let s=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,m=e.get(h,d);if(s.get(m)!==f&&(e.update(m),s.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==f&&(v.update(),s.set(v,f))}return m}function c(){s=new WeakMap}function l(h){const f=h.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}class zm extends Mn{constructor(e,t,n,s,a,c,l,h,f,d){if(d=d!==void 0?d:Gr,d!==Gr&&d!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Gr&&(n=fr),n===void 0&&d===zs&&(n=zr),super(null,s,a,c,l,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:un,this.minFilter=h!==void 0?h:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gm=new Mn,Hm=new zm(1,1);Hm.compareFunction=bm;const km=new Cm,Vm=new IM,Wm=new Om,wp=[],Cp=[],Rp=new Float32Array(16),Lp=new Float32Array(9),Pp=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=wp[s];if(a===void 0&&(a=new Float32Array(s),wp[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function nw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Pp.set(n),i.uniformMatrix2fv(this.addr,!1,Pp),nn(t,n)}}function iw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),nn(t,n)}}function rw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Rp.set(n),i.uniformMatrix4fv(this.addr,!1,Rp),nn(t,n)}}function sw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function cw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function dw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?Hm:Gm;t.setTexture2D(e||a,s)}function pw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vm,s)}function mw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wm,s)}function gw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||km,s)}function _w(i){switch(i){case 5126:return jA;case 35664:return QA;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return hw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function vw(i,e){i.uniform1fv(this.addr,e)}function xw(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function yw(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function Sw(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Ew(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mw(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bw(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tw(i,e){i.uniform1iv(this.addr,e)}function Aw(i,e){i.uniform2iv(this.addr,e)}function ww(i,e){i.uniform3iv(this.addr,e)}function Cw(i,e){i.uniform4iv(this.addr,e)}function Rw(i,e){i.uniform1uiv(this.addr,e)}function Lw(i,e){i.uniform2uiv(this.addr,e)}function Pw(i,e){i.uniform3uiv(this.addr,e)}function Iw(i,e){i.uniform4uiv(this.addr,e)}function Dw(i,e,t){const n=this.cache,s=e.length,a=xl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Gm,a[c])}function Uw(i,e,t){const n=this.cache,s=e.length,a=xl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Vm,a[c])}function Nw(i,e,t){const n=this.cache,s=e.length,a=xl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Wm,a[c])}function Ow(i,e,t){const n=this.cache,s=e.length,a=xl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||km,a[c])}function Fw(i){switch(i){case 5126:return vw;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Ew;case 35675:return Mw;case 35676:return bw;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return ww;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Lw;case 36295:return Pw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Ow}}class Bw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_w(t.type)}}class zw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fw(t.type)}}class Gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function Ip(i,e){i.seq.push(e),i.map[e.id]=e}function Hw(i,e,t){const n=i.name,s=n.length;for(uu.lastIndex=0;;){const a=uu.exec(n),c=uu.lastIndex;let l=a[1];const h=a[2]==="]",f=a[3];if(h&&(l=l|0),f===void 0||f==="["&&c+2===s){Ip(t,f===void 0?new Bw(l,i,e):new zw(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new Gw(l),Ip(t,m)),t=m}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Hw(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Dp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kw=37297;let Vw=0;function Ww(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Xw(i){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(i);let n;switch(e===t?n="":e===ol&&t===sl?n="LinearDisplayP3ToLinearSRGB":e===sl&&t===ol&&(n="LinearSRGBToLinearDisplayP3"),i){case xr:case gl:return[n,"LinearTransferOETF"];case yi:case Wu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Up(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ww(i.getShaderSource(e),c)}else return s}function Yw(i,e){const t=Xw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qw(i,e){let t;switch(e){case GE:t="Linear";break;case HE:t="Reinhard";break;case kE:t="OptimizedCineon";break;case VE:t="ACESFilmic";break;case XE:t="AgX";break;case YE:t="Neutral";break;case WE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $w(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function Zw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Kw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Is(i){return i!==""}function Np(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(jw,e1)}const Qw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e1(i,e){let t=vt[e];if(t===void 0){const n=Qw.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(i){return i.replace(t1,n1)}function n1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Bp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function i1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function o1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pm:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case zE:e="ENVMAP_BLENDING_ADD";break}return e}function a1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function l1(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=i1(t),f=r1(t),d=s1(t),m=o1(t),v=a1(t),x=t.isWebGL2?"":$w(t),y=Zw(t),M=Kw(a),_=s.createProgram();let p,P,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Is).join(`
`),p.length>0&&(p+=`
`),P=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Is).join(`
`),P.length>0&&(P+=`
`)):(p=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),P=[x,Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?vt.tonemapping_pars_fragment:"",t.toneMapping!==pr?qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),c=Ru(c),c=Np(c,t),c=Op(c,t),l=Ru(l),l=Np(l,t),l=Op(l,t),c=Fp(c),l=Fp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const C=E+p+c,z=E+P+l,F=Dp(s,s.VERTEX_SHADER,C),R=Dp(s,s.FRAGMENT_SHADER,z);s.attachShader(_,F),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function X(Se){if(i.debug.checkShaderErrors){const pe=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(F).trim(),K=s.getShaderInfoLog(R).trim();let J=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,R);else{const ie=Up(s,F,"vertex"),ue=Up(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+Se.name+`
Material Type: `+Se.type+`

Program Info Log: `+pe+`
`+ie+`
`+ue)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(B===""||K==="")&&(ce=!1);ce&&(Se.diagnostics={runnable:J,programLog:pe,vertexShader:{log:B,prefix:p},fragmentShader:{log:K,prefix:P}})}s.deleteShader(F),s.deleteShader(R),le=new el(s,_),T=Jw(s,_)}let le;this.getUniforms=function(){return le===void 0&&X(this),le};let T;this.getAttributes=function(){return T===void 0&&X(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,kw)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h1(e),t.set(e,n)),n}}class h1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function f1(i,e,t,n,s,a,c){const l=new Lm,h=new u1,f=new Set,d=[],m=s.isWebGL2,v=s.logarithmicDepthBuffer,x=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return f.add(T),T===0?"uv":`uv${T}`}function p(T,D,Se,pe,B){const K=pe.fog,J=B.geometry,ce=T.isMeshStandardMaterial?pe.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),ue=ie&&ie.mapping===ml?ie.image.height:null,me=M[T.type];T.precision!==null&&(y=s.getMaxPrecision(T.precision),y!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Fe=xe!==void 0?xe.length:0;let st=0;J.morphAttributes.position!==void 0&&(st=1),J.morphAttributes.normal!==void 0&&(st=2),J.morphAttributes.color!==void 0&&(st=3);let ne,ve,De,Je;if(me){const wt=Si[me];ne=wt.vertexShader,ve=wt.fragmentShader}else ne=T.vertexShader,ve=T.fragmentShader,h.update(T),De=h.getVertexShaderID(T),Je=h.getFragmentShaderID(T);const He=i.getRenderTarget(),Oe=B.isInstancedMesh===!0,at=B.isBatchedMesh===!0,Xe=!!T.map,O=!!T.matcap,Ae=!!ie,re=!!T.aoMap,Me=!!T.lightMap,de=!!T.bumpMap,Pe=!!T.normalMap,Ue=!!T.displacementMap,ke=!!T.emissiveMap,ot=!!T.metalnessMap,I=!!T.roughnessMap,b=T.anisotropy>0,te=T.clearcoat>0,se=T.iridescence>0,ye=T.sheen>0,ge=T.transmission>0,je=b&&!!T.anisotropyMap,Ze=te&&!!T.clearcoatMap,we=te&&!!T.clearcoatNormalMap,Re=te&&!!T.clearcoatRoughnessMap,et=se&&!!T.iridescenceMap,Te=se&&!!T.iridescenceThicknessMap,Ot=ye&&!!T.sheenColorMap,ut=ye&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,ze=!!T.specularColorMap,Ye=!!T.specularIntensityMap,U=ge&&!!T.transmissionMap,fe=ge&&!!T.thicknessMap,Ve=!!T.gradientMap,G=!!T.alphaMap,be=T.alphaTest>0,q=!!T.alphaHash,Ee=!!T.extensions;let Ne=pr;T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const gt={isWebGL2:m,shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:ve,defines:T.defines,customVertexShaderID:De,customFragmentShaderID:Je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:at,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:He===null?i.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:xr,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:O,envMap:Ae,envMapMode:Ae&&ie.mapping,envMapCubeUVHeight:ue,aoMap:re,lightMap:Me,bumpMap:de,normalMap:Pe,displacementMap:x&&Ue,emissiveMap:ke,normalMapObjectSpace:Pe&&T.normalMapType===iM,normalMapTangentSpace:Pe&&T.normalMapType===nM,metalnessMap:ot,roughnessMap:I,anisotropy:b,anisotropyMap:je,clearcoat:te,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:Re,iridescence:se,iridescenceMap:et,iridescenceThicknessMap:Te,sheen:ye,sheenColorMap:Ot,sheenRoughnessMap:ut,specularMap:Ke,specularColorMap:ze,specularIntensityMap:Ye,transmission:ge,transmissionMap:U,thicknessMap:fe,gradientMap:Ve,opaque:T.transparent===!1&&T.blending===Us&&T.alphaToCoverage===!1,alphaMap:G,alphaTest:be,alphaHash:q,combine:T.combine,mapUv:Xe&&_(T.map.channel),aoMapUv:re&&_(T.aoMap.channel),lightMapUv:Me&&_(T.lightMap.channel),bumpMapUv:de&&_(T.bumpMap.channel),normalMapUv:Pe&&_(T.normalMap.channel),displacementMapUv:Ue&&_(T.displacementMap.channel),emissiveMapUv:ke&&_(T.emissiveMap.channel),metalnessMapUv:ot&&_(T.metalnessMap.channel),roughnessMapUv:I&&_(T.roughnessMap.channel),anisotropyMapUv:je&&_(T.anisotropyMap.channel),clearcoatMapUv:Ze&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(T.sheenRoughnessMap.channel),specularMapUv:Ke&&_(T.specularMap.channel),specularColorMapUv:ze&&_(T.specularColorMap.channel),specularIntensityMapUv:Ye&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:fe&&_(T.thicknessMap.channel),alphaMapUv:G&&_(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Pe||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Xe||G),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:st,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&Se.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xi,flipSided:T.side===In,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ee&&T.extensions.derivatives===!0,extensionFragDepth:Ee&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=f.has(1),gt.vertexUv2s=f.has(2),gt.vertexUv3s=f.has(3),f.clear(),gt}function P(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Se in T.defines)D.push(Se),D.push(T.defines[Se]);return T.isRawShaderMaterial===!1&&(E(D,T),C(D,T),D.push(i.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function E(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){l.disableAll(),D.isWebGL2&&l.enable(0),D.supportsVertexTextures&&l.enable(1),D.instancing&&l.enable(2),D.instancingColor&&l.enable(3),D.instancingMorph&&l.enable(4),D.matcap&&l.enable(5),D.envMap&&l.enable(6),D.normalMapObjectSpace&&l.enable(7),D.normalMapTangentSpace&&l.enable(8),D.clearcoat&&l.enable(9),D.iridescence&&l.enable(10),D.alphaTest&&l.enable(11),D.vertexColors&&l.enable(12),D.vertexAlphas&&l.enable(13),D.vertexUv1s&&l.enable(14),D.vertexUv2s&&l.enable(15),D.vertexUv3s&&l.enable(16),D.vertexTangents&&l.enable(17),D.anisotropy&&l.enable(18),D.alphaHash&&l.enable(19),D.batching&&l.enable(20),T.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.skinning&&l.enable(4),D.morphTargets&&l.enable(5),D.morphNormals&&l.enable(6),D.morphColors&&l.enable(7),D.premultipliedAlpha&&l.enable(8),D.shadowMapEnabled&&l.enable(9),D.useLegacyLights&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.alphaToCoverage&&l.enable(20),T.push(l.mask)}function z(T){const D=M[T.type];let Se;if(D){const pe=Si[D];Se=XM.clone(pe.uniforms)}else Se=T.uniforms;return Se}function F(T,D){let Se;for(let pe=0,B=d.length;pe<B;pe++){const K=d[pe];if(K.cacheKey===D){Se=K,++Se.usedTimes;break}}return Se===void 0&&(Se=new l1(i,D,T,a),d.push(Se)),Se}function R(T){if(--T.usedTimes===0){const D=d.indexOf(T);d[D]=d[d.length-1],d.pop(),T.destroy()}}function X(T){h.remove(T)}function le(){h.dispose()}return{getParameters:p,getProgramCacheKey:P,getUniforms:z,acquireProgram:F,releaseProgram:R,releaseShaderCache:X,programs:d,dispose:le}}function d1(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,l){i.get(a)[c]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function p1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(m,v,x,y,M,_){let p=i[e];return p===void 0?(p={id:m.id,object:m,geometry:v,material:x,groupOrder:y,renderOrder:m.renderOrder,z:M,group:_},i[e]=p):(p.id=m.id,p.object=m,p.geometry=v,p.material=x,p.groupOrder=y,p.renderOrder=m.renderOrder,p.z=M,p.group=_),e++,p}function l(m,v,x,y,M,_){const p=c(m,v,x,y,M,_);x.transmission>0?n.push(p):x.transparent===!0?s.push(p):t.push(p)}function h(m,v,x,y,M,_){const p=c(m,v,x,y,M,_);x.transmission>0?n.unshift(p):x.transparent===!0?s.unshift(p):t.unshift(p)}function f(m,v){t.length>1&&t.sort(m||p1),n.length>1&&n.sort(v||zp),s.length>1&&s.sort(v||zp)}function d(){for(let m=e,v=i.length;m<v;m++){const x=i[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:h,finish:d,sort:f}}function m1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Gp,i.set(n,[c])):s>=a.length?(c=new Gp,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function g1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Et};break;case"SpotLight":t={position:new V,direction:new V,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function _1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v1=0;function x1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y1(i,e){const t=new g1,n=_1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new V);const a=new V,c=new Yt,l=new Yt;function h(d,m){let v=0,x=0,y=0;for(let Se=0;Se<9;Se++)s.probe[Se].set(0,0,0);let M=0,_=0,p=0,P=0,E=0,C=0,z=0,F=0,R=0,X=0,le=0;d.sort(x1);const T=m===!0?Math.PI:1;for(let Se=0,pe=d.length;Se<pe;Se++){const B=d[Se],K=B.color,J=B.intensity,ce=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=K.r*J*T,x+=K.g*J*T,y+=K.b*J*T;else if(B.isLightProbe){for(let ue=0;ue<9;ue++)s.probe[ue].addScaledVector(B.sh.coefficients[ue],J);le++}else if(B.isDirectionalLight){const ue=t.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){const me=B.shadow,xe=n.get(B);xe.shadowBias=me.bias,xe.shadowNormalBias=me.normalBias,xe.shadowRadius=me.radius,xe.shadowMapSize=me.mapSize,s.directionalShadow[M]=xe,s.directionalShadowMap[M]=ie,s.directionalShadowMatrix[M]=B.shadow.matrix,C++}s.directional[M]=ue,M++}else if(B.isSpotLight){const ue=t.get(B);ue.position.setFromMatrixPosition(B.matrixWorld),ue.color.copy(K).multiplyScalar(J*T),ue.distance=ce,ue.coneCos=Math.cos(B.angle),ue.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ue.decay=B.decay,s.spot[p]=ue;const me=B.shadow;if(B.map&&(s.spotLightMap[R]=B.map,R++,me.updateMatrices(B),B.castShadow&&X++),s.spotLightMatrix[p]=me.matrix,B.castShadow){const xe=n.get(B);xe.shadowBias=me.bias,xe.shadowNormalBias=me.normalBias,xe.shadowRadius=me.radius,xe.shadowMapSize=me.mapSize,s.spotShadow[p]=xe,s.spotShadowMap[p]=ie,F++}p++}else if(B.isRectAreaLight){const ue=t.get(B);ue.color.copy(K).multiplyScalar(J),ue.halfWidth.set(B.width*.5,0,0),ue.halfHeight.set(0,B.height*.5,0),s.rectArea[P]=ue,P++}else if(B.isPointLight){const ue=t.get(B);if(ue.color.copy(B.color).multiplyScalar(B.intensity*T),ue.distance=B.distance,ue.decay=B.decay,B.castShadow){const me=B.shadow,xe=n.get(B);xe.shadowBias=me.bias,xe.shadowNormalBias=me.normalBias,xe.shadowRadius=me.radius,xe.shadowMapSize=me.mapSize,xe.shadowCameraNear=me.camera.near,xe.shadowCameraFar=me.camera.far,s.pointShadow[_]=xe,s.pointShadowMap[_]=ie,s.pointShadowMatrix[_]=B.shadow.matrix,z++}s.point[_]=ue,_++}else if(B.isHemisphereLight){const ue=t.get(B);ue.skyColor.copy(B.color).multiplyScalar(J*T),ue.groundColor.copy(B.groundColor).multiplyScalar(J*T),s.hemi[E]=ue,E++}}P>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=y;const D=s.hash;(D.directionalLength!==M||D.pointLength!==_||D.spotLength!==p||D.rectAreaLength!==P||D.hemiLength!==E||D.numDirectionalShadows!==C||D.numPointShadows!==z||D.numSpotShadows!==F||D.numSpotMaps!==R||D.numLightProbes!==le)&&(s.directional.length=M,s.spot.length=p,s.rectArea.length=P,s.point.length=_,s.hemi.length=E,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=F+R-X,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=le,D.directionalLength=M,D.pointLength=_,D.spotLength=p,D.rectAreaLength=P,D.hemiLength=E,D.numDirectionalShadows=C,D.numPointShadows=z,D.numSpotShadows=F,D.numSpotMaps=R,D.numLightProbes=le,s.version=v1++)}function f(d,m){let v=0,x=0,y=0,M=0,_=0;const p=m.matrixWorldInverse;for(let P=0,E=d.length;P<E;P++){const C=d[P];if(C.isDirectionalLight){const z=s.directional[v];z.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(p),v++}else if(C.isSpotLight){const z=s.spot[y];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(p),z.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(a),z.direction.transformDirection(p),y++}else if(C.isRectAreaLight){const z=s.rectArea[M];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(p),l.identity(),c.copy(C.matrixWorld),c.premultiply(p),l.extractRotation(c),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),z.halfWidth.applyMatrix4(l),z.halfHeight.applyMatrix4(l),M++}else if(C.isPointLight){const z=s.point[x];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(p),x++}else if(C.isHemisphereLight){const z=s.hemi[_];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(p),_++}}}return{setup:h,setupView:f,state:s}}function Hp(i,e){const t=new y1(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function c(m){n.push(m)}function l(m){s.push(m)}function h(m){t.setup(n,m)}function f(m){t.setupView(n,m)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:h,setupLightsView:f,pushLight:c,pushShadow:l}}function S1(i,e){let t=new WeakMap;function n(a,c=0){const l=t.get(a);let h;return l===void 0?(h=new Hp(i,e),t.set(a,[h])):c>=l.length?(h=new Hp(i,e),l.push(h)):h=l[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}class E1 extends _l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends _l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
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
}`;function A1(i,e,t){let n=new Fm;const s=new Ce,a=new Ce,c=new hn,l=new E1({depthPacking:tM}),h=new M1,f={},d=t.maxTextureSize,m={[gr]:In,[In]:gr,[Xi]:Xi},v=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:b1,fragmentShader:T1}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const y=new bi;y.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new kn(y,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dm;let p=this.type;this.render=function(F,R,X){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;const le=i.getRenderTarget(),T=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Se=i.state;Se.setBlending(dr),Se.buffers.color.setClear(1,1,1,1),Se.buffers.depth.setTest(!0),Se.setScissorTest(!1);const pe=p!==Vi&&this.type===Vi,B=p===Vi&&this.type!==Vi;for(let K=0,J=F.length;K<J;K++){const ce=F[K],ie=ce.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);const ue=ie.getFrameExtents();if(s.multiply(ue),a.copy(ie.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/ue.x),s.x=a.x*ue.x,ie.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/ue.y),s.y=a.y*ue.y,ie.mapSize.y=a.y)),ie.map===null||pe===!0||B===!0){const xe=this.type!==Vi?{minFilter:un,magFilter:un}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Hr(s.x,s.y,xe),ie.map.texture.name=ce.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const me=ie.getViewportCount();for(let xe=0;xe<me;xe++){const Fe=ie.getViewport(xe);c.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),Se.viewport(c),ie.updateMatrices(ce,xe),n=ie.getFrustum(),C(R,X,ie.camera,ce,this.type)}ie.isPointLightShadow!==!0&&this.type===Vi&&P(ie,X),ie.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(le,T,D)};function P(F,R){const X=e.update(M);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Hr(s.x,s.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(R,null,X,v,M,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(R,null,X,x,M,null)}function E(F,R,X,le){let T=null;const D=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(D!==void 0)T=D;else if(T=X.isPointLight===!0?h:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Se=T.uuid,pe=R.uuid;let B=f[Se];B===void 0&&(B={},f[Se]=B);let K=B[pe];K===void 0&&(K=T.clone(),B[pe]=K,R.addEventListener("dispose",z)),T=K}if(T.visible=R.visible,T.wireframe=R.wireframe,le===Vi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:m[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,X.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Se=i.properties.get(T);Se.light=X}return T}function C(F,R,X,le,T){if(F.visible===!1)return;if(F.layers.test(R.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Vi)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const pe=e.update(F),B=F.material;if(Array.isArray(B)){const K=pe.groups;for(let J=0,ce=K.length;J<ce;J++){const ie=K[J],ue=B[ie.materialIndex];if(ue&&ue.visible){const me=E(F,ue,le,T);F.onBeforeShadow(i,F,R,X,pe,me,ie),i.renderBufferDirect(X,null,pe,me,F,ie),F.onAfterShadow(i,F,R,X,pe,me,ie)}}}else if(B.visible){const K=E(F,B,le,T);F.onBeforeShadow(i,F,R,X,pe,K,null),i.renderBufferDirect(X,null,pe,K,F,null),F.onAfterShadow(i,F,R,X,pe,K,null)}}const Se=F.children;for(let pe=0,B=Se.length;pe<B;pe++)C(Se[pe],R,X,le,T)}function z(F){F.target.removeEventListener("dispose",z);for(const X in f){const le=f[X],T=F.target.uuid;T in le&&(le[T].dispose(),delete le[T])}}}function w1(i,e,t){const n=t.isWebGL2;function s(){let G=!1;const be=new hn;let q=null;const Ee=new hn(0,0,0,0);return{setMask:function(Ne){q!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),q=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,gt,wt,Lt,Ht){Ht===!0&&(Ne*=Lt,gt*=Lt,wt*=Lt),be.set(Ne,gt,wt,Lt),Ee.equals(be)===!1&&(i.clearColor(Ne,gt,wt,Lt),Ee.copy(be))},reset:function(){G=!1,q=null,Ee.set(-1,0,0,0)}}}function a(){let G=!1,be=null,q=null,Ee=null;return{setTest:function(Ne){Ne?Oe(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Ne){be!==Ne&&!G&&(i.depthMask(Ne),be=Ne)},setFunc:function(Ne){if(q!==Ne){switch(Ne){case PE:i.depthFunc(i.NEVER);break;case IE:i.depthFunc(i.ALWAYS);break;case DE:i.depthFunc(i.LESS);break;case il:i.depthFunc(i.LEQUAL);break;case UE:i.depthFunc(i.EQUAL);break;case NE:i.depthFunc(i.GEQUAL);break;case OE:i.depthFunc(i.GREATER);break;case FE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=Ne}},setLocked:function(Ne){G=Ne},setClear:function(Ne){Ee!==Ne&&(i.clearDepth(Ne),Ee=Ne)},reset:function(){G=!1,be=null,q=null,Ee=null}}}function c(){let G=!1,be=null,q=null,Ee=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null;return{setTest:function(At){G||(At?Oe(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(At){be!==At&&!G&&(i.stencilMask(At),be=At)},setFunc:function(At,Pt,rn){(q!==At||Ee!==Pt||Ne!==rn)&&(i.stencilFunc(At,Pt,rn),q=At,Ee=Pt,Ne=rn)},setOp:function(At,Pt,rn){(gt!==At||wt!==Pt||Lt!==rn)&&(i.stencilOp(At,Pt,rn),gt=At,wt=Pt,Lt=rn)},setLocked:function(At){G=At},setClear:function(At){Ht!==At&&(i.clearStencil(At),Ht=At)},reset:function(){G=!1,be=null,q=null,Ee=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null}}}const l=new s,h=new a,f=new c,d=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,M=[],_=null,p=!1,P=null,E=null,C=null,z=null,F=null,R=null,X=null,le=new Et(0,0,0),T=0,D=!1,Se=null,pe=null,B=null,K=null,J=null;const ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ue=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(me)[1]),ie=ue>=1):me.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ie=ue>=2);let xe=null,Fe={};const st=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ve=new hn().fromArray(st),De=new hn().fromArray(ne);function Je(G,be,q,Ee){const Ne=new Uint8Array(4),gt=i.createTexture();i.bindTexture(G,gt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<q;wt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(be,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(be+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return gt}const He={};He[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),He[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(He[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),He[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),f.setClear(0),Oe(i.DEPTH_TEST),h.setFunc(il),Ue(!1),ke(yd),Oe(i.CULL_FACE),de(dr);function Oe(G){v[G]!==!0&&(i.enable(G),v[G]=!0)}function at(G){v[G]!==!1&&(i.disable(G),v[G]=!1)}function Xe(G,be){return x[G]!==be?(i.bindFramebuffer(G,be),x[G]=be,n&&(G===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=be),G===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=be)),!0):!1}function O(G,be){let q=M,Ee=!1;if(G){q=y.get(be),q===void 0&&(q=[],y.set(be,q));const Ne=G.textures;if(q.length!==Ne.length||q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,wt=Ne.length;gt<wt;gt++)q[gt]=i.COLOR_ATTACHMENT0+gt;q.length=Ne.length,Ee=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Ee=!0);if(Ee)if(t.isWebGL2)i.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(G){return _!==G?(i.useProgram(G),_=G,!0):!1}const re={[Or]:i.FUNC_ADD,[gE]:i.FUNC_SUBTRACT,[_E]:i.FUNC_REVERSE_SUBTRACT};if(n)re[bd]=i.MIN,re[Td]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(re[bd]=G.MIN_EXT,re[Td]=G.MAX_EXT)}const Me={[vE]:i.ZERO,[xE]:i.ONE,[yE]:i.SRC_COLOR,[Su]:i.SRC_ALPHA,[AE]:i.SRC_ALPHA_SATURATE,[bE]:i.DST_COLOR,[EE]:i.DST_ALPHA,[SE]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[TE]:i.ONE_MINUS_DST_COLOR,[ME]:i.ONE_MINUS_DST_ALPHA,[wE]:i.CONSTANT_COLOR,[CE]:i.ONE_MINUS_CONSTANT_COLOR,[RE]:i.CONSTANT_ALPHA,[LE]:i.ONE_MINUS_CONSTANT_ALPHA};function de(G,be,q,Ee,Ne,gt,wt,Lt,Ht,At){if(G===dr){p===!0&&(at(i.BLEND),p=!1);return}if(p===!1&&(Oe(i.BLEND),p=!0),G!==mE){if(G!==P||At!==D){if((E!==Or||F!==Or)&&(i.blendEquation(i.FUNC_ADD),E=Or,F=Or),At)switch(G){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sd:i.blendFunc(i.ONE,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Md:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Md:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}C=null,z=null,R=null,X=null,le.set(0,0,0),T=0,P=G,D=At}return}Ne=Ne||be,gt=gt||q,wt=wt||Ee,(be!==E||Ne!==F)&&(i.blendEquationSeparate(re[be],re[Ne]),E=be,F=Ne),(q!==C||Ee!==z||gt!==R||wt!==X)&&(i.blendFuncSeparate(Me[q],Me[Ee],Me[gt],Me[wt]),C=q,z=Ee,R=gt,X=wt),(Lt.equals(le)===!1||Ht!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Ht),le.copy(Lt),T=Ht),P=G,D=!1}function Pe(G,be){G.side===Xi?at(i.CULL_FACE):Oe(i.CULL_FACE);let q=G.side===In;be&&(q=!q),Ue(q),G.blending===Us&&G.transparent===!1?de(dr):de(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ee=G.stencilWrite;f.setTest(Ee),Ee&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),I(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(G){Se!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),Se=G)}function ke(G){G!==fE?(Oe(i.CULL_FACE),G!==pe&&(G===yd?i.cullFace(i.BACK):G===dE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),pe=G}function ot(G){G!==B&&(ie&&i.lineWidth(G),B=G)}function I(G,be,q){G?(Oe(i.POLYGON_OFFSET_FILL),(K!==be||J!==q)&&(i.polygonOffset(be,q),K=be,J=q)):at(i.POLYGON_OFFSET_FILL)}function b(G){G?Oe(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function te(G){G===void 0&&(G=i.TEXTURE0+ce-1),xe!==G&&(i.activeTexture(G),xe=G)}function se(G,be,q){q===void 0&&(xe===null?q=i.TEXTURE0+ce-1:q=xe);let Ee=Fe[q];Ee===void 0&&(Ee={type:void 0,texture:void 0},Fe[q]=Ee),(Ee.type!==G||Ee.texture!==be)&&(xe!==q&&(i.activeTexture(q),xe=q),i.bindTexture(G,be||He[G]),Ee.type=G,Ee.texture=be)}function ye(){const G=Fe[xe];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(G){ve.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ve.copy(G))}function Ye(G){De.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function U(G,be){let q=m.get(be);q===void 0&&(q=new WeakMap,m.set(be,q));let Ee=q.get(G);Ee===void 0&&(Ee=i.getUniformBlockIndex(be,G.name),q.set(G,Ee))}function fe(G,be){const Ee=m.get(be).get(G);d.get(be)!==Ee&&(i.uniformBlockBinding(be,Ee,G.__bindingPointIndex),d.set(be,Ee))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},xe=null,Fe={},x={},y=new WeakMap,M=[],_=null,p=!1,P=null,E=null,C=null,z=null,F=null,R=null,X=null,le=new Et(0,0,0),T=0,D=!1,Se=null,pe=null,B=null,K=null,J=null,ve.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),l.reset(),h.reset(),f.reset()}return{buffers:{color:l,depth:h,stencil:f},enable:Oe,disable:at,bindFramebuffer:Xe,drawBuffers:O,useProgram:Ae,setBlending:de,setMaterial:Pe,setFlipSided:Ue,setCullFace:ke,setLineWidth:ot,setPolygonOffset:I,setScissorTest:b,activeTexture:te,bindTexture:se,unbindTexture:ye,compressedTexImage2D:ge,compressedTexImage3D:je,texImage2D:ut,texImage3D:Ke,updateUBOMapping:U,uniformBlockBinding:fe,texStorage2D:Te,texStorage3D:Ot,texSubImage2D:Ze,texSubImage3D:we,compressedTexSubImage2D:Re,compressedTexSubImage3D:et,scissor:ze,viewport:Ye,reset:Ve}}function C1(i,e,t,n,s,a,c){const l=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,m=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,b){return y?new OffscreenCanvas(I,b):cl("canvas")}function _(I,b,te,se){let ye=1;const ge=ot(I);if((ge.width>se||ge.height>se)&&(ye=se/Math.max(ge.width,ge.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const je=b?ll:Math.floor,Ze=je(ye*ge.width),we=je(ye*ge.height);v===void 0&&(v=M(Ze,we));const Re=te?M(Ze,we):v;return Re.width=Ze,Re.height=we,Re.getContext("2d").drawImage(I,0,0,Ze,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ze+"x"+we+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function p(I){const b=ot(I);return Cu(b.width)&&Cu(b.height)}function P(I){return l?!1:I.wrapS!==ui||I.wrapT!==ui||I.minFilter!==un&&I.minFilter!==Pn}function E(I,b){return I.generateMipmaps&&b&&I.minFilter!==un&&I.minFilter!==Pn}function C(I){i.generateMipmap(I)}function z(I,b,te,se,ye=!1){if(l===!1)return b;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ge=b;if(b===i.RED&&(te===i.FLOAT&&(ge=i.R32F),te===i.HALF_FLOAT&&(ge=i.R16F),te===i.UNSIGNED_BYTE&&(ge=i.R8)),b===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ge=i.R8UI),te===i.UNSIGNED_SHORT&&(ge=i.R16UI),te===i.UNSIGNED_INT&&(ge=i.R32UI),te===i.BYTE&&(ge=i.R8I),te===i.SHORT&&(ge=i.R16I),te===i.INT&&(ge=i.R32I)),b===i.RG&&(te===i.FLOAT&&(ge=i.RG32F),te===i.HALF_FLOAT&&(ge=i.RG16F),te===i.UNSIGNED_BYTE&&(ge=i.RG8)),b===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ge=i.RG8UI),te===i.UNSIGNED_SHORT&&(ge=i.RG16UI),te===i.UNSIGNED_INT&&(ge=i.RG32UI),te===i.BYTE&&(ge=i.RG8I),te===i.SHORT&&(ge=i.RG16I),te===i.INT&&(ge=i.RG32I)),b===i.RGBA){const je=ye?rl:Dt.getTransfer(se);te===i.FLOAT&&(ge=i.RGBA32F),te===i.HALF_FLOAT&&(ge=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ge=je===Gt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function F(I,b,te){return E(I,te)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){return I===un||I===Ad||I===uo?i.NEAREST:i.LINEAR}function X(I){const b=I.target;b.removeEventListener("dispose",X),T(b),b.isVideoTexture&&m.delete(b)}function le(I){const b=I.target;b.removeEventListener("dispose",le),Se(b)}function T(I){const b=n.get(I);if(b.__webglInit===void 0)return;const te=I.source,se=x.get(te);if(se){const ye=se[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(I),Object.keys(se).length===0&&x.delete(te)}n.remove(I)}function D(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const te=I.source,se=x.get(te);delete se[b.__cacheKey],c.memory.textures--}function Se(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let ye=0;ye<b.__webglFramebuffer[se].length;ye++)i.deleteFramebuffer(b.__webglFramebuffer[se][ye]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const te=I.textures;for(let se=0,ye=te.length;se<ye;se++){const ge=n.get(te[se]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),c.memory.textures--),n.remove(te[se])}n.remove(I)}let pe=0;function B(){pe=0}function K(){const I=pe;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),pe+=1,I}function J(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ce(I,b){const te=n.get(I);if(I.isVideoTexture&&Ue(I),I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){const se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(te,I,b);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+b)}function ie(I,b){const te=n.get(I);if(I.version>0&&te.__version!==I.version){De(te,I,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+b)}function ue(I,b){const te=n.get(I);if(I.version>0&&te.__version!==I.version){De(te,I,b);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+b)}function me(I,b){const te=n.get(I);if(I.version>0&&te.__version!==I.version){Je(te,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+b)}const xe={[Tu]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Au]:i.MIRRORED_REPEAT},Fe={[un]:i.NEAREST,[Ad]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Nc]:i.LINEAR_MIPMAP_NEAREST,[Br]:i.LINEAR_MIPMAP_LINEAR},st={[rM]:i.NEVER,[uM]:i.ALWAYS,[sM]:i.LESS,[bm]:i.LEQUAL,[oM]:i.EQUAL,[cM]:i.GEQUAL,[aM]:i.GREATER,[lM]:i.NOTEQUAL};function ne(I,b,te){if(b.type===Ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===Nc||b.magFilter===uo||b.magFilter===Br||b.minFilter===Pn||b.minFilter===Nc||b.minFilter===uo||b.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),te?(i.texParameteri(I,i.TEXTURE_WRAP_S,xe[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,xe[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,xe[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Fe[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Fe[b.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==ui||b.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,R(b.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==un&&b.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==uo&&b.minFilter!==Br||b.type===Ei&&e.has("OES_texture_float_linear")===!1||l===!1&&b.type===bo&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ve(I,b){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",X));const se=b.source;let ye=x.get(se);ye===void 0&&(ye={},x.set(se,ye));const ge=J(b);if(ge!==I.__cacheKey){ye[ge]===void 0&&(ye[ge]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,te=!0),ye[ge].usedTimes++;const je=ye[I.__cacheKey];je!==void 0&&(ye[I.__cacheKey].usedTimes--,je.usedTimes===0&&D(b)),I.__cacheKey=ge,I.__webglTexture=ye[ge].texture}return te}function De(I,b,te){let se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=i.TEXTURE_3D);const ye=ve(I,b),ge=b.source;t.bindTexture(se,I.__webglTexture,i.TEXTURE0+te);const je=n.get(ge);if(ge.version!==je.__version||ye===!0){t.activeTexture(i.TEXTURE0+te);const Ze=Dt.getPrimaries(Dt.workingColorSpace),we=b.colorSpace===hr?null:Dt.getPrimaries(b.colorSpace),Re=b.colorSpace===hr||Ze===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const et=P(b)&&p(b.image)===!1;let Te=_(b.image,et,!1,s.maxTextureSize);Te=ke(b,Te);const Ot=p(Te)||l,ut=a.convert(b.format,b.colorSpace);let Ke=a.convert(b.type),ze=z(b.internalFormat,ut,Ke,b.colorSpace,b.isVideoTexture);ne(se,b,Ot);let Ye;const U=b.mipmaps,fe=l&&b.isVideoTexture!==!0&&ze!==Mm,Ve=je.__version===void 0||ye===!0,G=ge.dataReady,be=F(b,Te,Ot);if(b.isDepthTexture)ze=i.DEPTH_COMPONENT,l?b.type===Ei?ze=i.DEPTH_COMPONENT32F:b.type===fr?ze=i.DEPTH_COMPONENT24:b.type===zr?ze=i.DEPTH24_STENCIL8:ze=i.DEPTH_COMPONENT16:b.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Gr&&ze===i.DEPTH_COMPONENT&&b.type!==Vu&&b.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=fr,Ke=a.convert(b.type)),b.format===zs&&ze===i.DEPTH_COMPONENT&&(ze=i.DEPTH_STENCIL,b.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=zr,Ke=a.convert(b.type))),Ve&&(fe?t.texStorage2D(i.TEXTURE_2D,1,ze,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,ze,Te.width,Te.height,0,ut,Ke,null));else if(b.isDataTexture)if(U.length>0&&Ot){fe&&Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,U[0].width,U[0].height);for(let q=0,Ee=U.length;q<Ee;q++)Ye=U[q],fe?G&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ye.width,Ye.height,ut,Ke,Ye.data):t.texImage2D(i.TEXTURE_2D,q,ze,Ye.width,Ye.height,0,ut,Ke,Ye.data);b.generateMipmaps=!1}else fe?(Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,Te.width,Te.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,ut,Ke,Te.data)):t.texImage2D(i.TEXTURE_2D,0,ze,Te.width,Te.height,0,ut,Ke,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ze,U[0].width,U[0].height,Te.depth);for(let q=0,Ee=U.length;q<Ee;q++)Ye=U[q],b.format!==hi?ut!==null?fe?G&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ye.width,Ye.height,Te.depth,ut,Ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ze,Ye.width,Ye.height,Te.depth,0,Ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ye.width,Ye.height,Te.depth,ut,Ke,Ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,ze,Ye.width,Ye.height,Te.depth,0,ut,Ke,Ye.data)}else{fe&&Ve&&t.texStorage2D(i.TEXTURE_2D,be,ze,U[0].width,U[0].height);for(let q=0,Ee=U.length;q<Ee;q++)Ye=U[q],b.format!==hi?ut!==null?fe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ye.width,Ye.height,ut,Ye.data):t.compressedTexImage2D(i.TEXTURE_2D,q,ze,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?G&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ye.width,Ye.height,ut,Ke,Ye.data):t.texImage2D(i.TEXTURE_2D,q,ze,Ye.width,Ye.height,0,ut,Ke,Ye.data)}else if(b.isDataArrayTexture)fe?(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ze,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ke,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,Te.width,Te.height,Te.depth,0,ut,Ke,Te.data);else if(b.isData3DTexture)fe?(Ve&&t.texStorage3D(i.TEXTURE_3D,be,ze,Te.width,Te.height,Te.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ke,Te.data)):t.texImage3D(i.TEXTURE_3D,0,ze,Te.width,Te.height,Te.depth,0,ut,Ke,Te.data);else if(b.isFramebufferTexture){if(Ve)if(fe)t.texStorage2D(i.TEXTURE_2D,be,ze,Te.width,Te.height);else{let q=Te.width,Ee=Te.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ze,q,Ee,0,ut,Ke,null),q>>=1,Ee>>=1}}else if(U.length>0&&Ot){if(fe&&Ve){const q=ot(U[0]);t.texStorage2D(i.TEXTURE_2D,be,ze,q.width,q.height)}for(let q=0,Ee=U.length;q<Ee;q++)Ye=U[q],fe?G&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ut,Ke,Ye):t.texImage2D(i.TEXTURE_2D,q,ze,ut,Ke,Ye);b.generateMipmaps=!1}else if(fe){if(Ve){const q=ot(Te);t.texStorage2D(i.TEXTURE_2D,be,ze,q.width,q.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ke,Te)}else t.texImage2D(i.TEXTURE_2D,0,ze,ut,Ke,Te);E(b,Ot)&&C(se),je.__version=ge.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Je(I,b,te){if(b.image.length!==6)return;const se=ve(I,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+te);const ge=n.get(ye);if(ye.version!==ge.__version||se===!0){t.activeTexture(i.TEXTURE0+te);const je=Dt.getPrimaries(Dt.workingColorSpace),Ze=b.colorSpace===hr?null:Dt.getPrimaries(b.colorSpace),we=b.colorSpace===hr||je===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let q=0;q<6;q++)!Re&&!et?Te[q]=_(b.image[q],!1,!0,s.maxCubemapSize):Te[q]=et?b.image[q].image:b.image[q],Te[q]=ke(b,Te[q]);const Ot=Te[0],ut=p(Ot)||l,Ke=a.convert(b.format,b.colorSpace),ze=a.convert(b.type),Ye=z(b.internalFormat,Ke,ze,b.colorSpace),U=l&&b.isVideoTexture!==!0,fe=ge.__version===void 0||se===!0,Ve=ye.dataReady;let G=F(b,Ot,ut);ne(i.TEXTURE_CUBE_MAP,b,ut);let be;if(Re){U&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ye,Ot.width,Ot.height);for(let q=0;q<6;q++){be=Te[q].mipmaps;for(let Ee=0;Ee<be.length;Ee++){const Ne=be[Ee];b.format!==hi?Ke!==null?U?Ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,0,0,Ne.width,Ne.height,Ke,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,Ye,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,0,0,Ne.width,Ne.height,Ke,ze,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee,Ye,Ne.width,Ne.height,0,Ke,ze,Ne.data)}}}else{if(be=b.mipmaps,U&&fe){be.length>0&&G++;const q=ot(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ye,q.width,q.height)}for(let q=0;q<6;q++)if(et){U?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Te[q].width,Te[q].height,Ke,ze,Te[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,Te[q].width,Te[q].height,0,Ke,ze,Te[q].data);for(let Ee=0;Ee<be.length;Ee++){const gt=be[Ee].image[q].image;U?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,0,0,gt.width,gt.height,Ke,ze,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,Ye,gt.width,gt.height,0,Ke,ze,gt.data)}}else{U?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ke,ze,Te[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,Ke,ze,Te[q]);for(let Ee=0;Ee<be.length;Ee++){const Ne=be[Ee];U?Ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,0,0,Ke,ze,Ne.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee+1,Ye,Ke,ze,Ne.image[q])}}}E(b,ut)&&C(i.TEXTURE_CUBE_MAP),ge.__version=ye.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function He(I,b,te,se,ye,ge){const je=a.convert(te.format,te.colorSpace),Ze=a.convert(te.type),we=z(te.internalFormat,je,Ze,te.colorSpace);if(!n.get(b).__hasExternalTextures){const et=Math.max(1,b.width>>ge),Te=Math.max(1,b.height>>ge);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,ge,we,et,Te,b.depth,0,je,Ze,null):t.texImage2D(ye,ge,we,et,Te,0,je,Ze,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ye,n.get(te).__webglTexture,0,de(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ye,n.get(te).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(I,b,te){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer&&!b.stencilBuffer){let se=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||Pe(b)){const ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Ei?se=i.DEPTH_COMPONENT32F:ye.type===fr&&(se=i.DEPTH_COMPONENT24));const ge=de(b);Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,se,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,se,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(b.depthBuffer&&b.stencilBuffer){const se=de(b);te&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const se=b.textures;for(let ye=0;ye<se.length;ye++){const ge=se[ye],je=a.convert(ge.format,ge.colorSpace),Ze=a.convert(ge.type),we=z(ge.internalFormat,je,Ze,ge.colorSpace),Re=de(b);te&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce(b.depthTexture,0);const se=n.get(b.depthTexture).__webglTexture,ye=de(b);if(b.depthTexture.format===Gr)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===zs)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Xe(I){const b=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,I)}else if(te){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=i.createRenderbuffer(),Oe(b.__webglDepthbuffer[se],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Oe(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(I,b,te){const se=n.get(I);b!==void 0&&He(se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&Xe(I)}function Ae(I){const b=I.texture,te=n.get(I),se=n.get(b);I.addEventListener("dispose",le);const ye=I.textures,ge=I.isWebGLCubeRenderTarget===!0,je=ye.length>1,Ze=p(I)||l;if(je||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=b.version,c.memory.textures++),ge){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let Re=0;Re<b.mipmaps.length;Re++)te.__webglFramebuffer[we][Re]=i.createFramebuffer()}else te.__webglFramebuffer[we]=i.createFramebuffer()}else{if(l&&b.mipmaps&&b.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)te.__webglFramebuffer[we]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(je)if(s.drawBuffers)for(let we=0,Re=ye.length;we<Re;we++){const et=n.get(ye[we]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&Pe(I)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Re=ye[we];te.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const et=a.convert(Re.format,Re.colorSpace),Te=a.convert(Re.type),Ot=z(Re.internalFormat,et,Te,Re.colorSpace,I.isXRRenderTarget===!0),ut=de(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,te.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ne(i.TEXTURE_CUBE_MAP,b,Ze);for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)He(te.__webglFramebuffer[we][Re],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else He(te.__webglFramebuffer[we],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);E(b,Ze)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let we=0,Re=ye.length;we<Re;we++){const et=ye[we],Te=n.get(et);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),ne(i.TEXTURE_2D,et,Ze),He(te.__webglFramebuffer,I,et,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),E(et,Ze)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?we=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,se.__webglTexture),ne(we,b,Ze),l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)He(te.__webglFramebuffer[Re],I,b,i.COLOR_ATTACHMENT0,we,Re);else He(te.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,we,0);E(b,Ze)&&C(we),t.unbindTexture()}I.depthBuffer&&Xe(I)}function re(I){const b=p(I)||l,te=I.textures;for(let se=0,ye=te.length;se<ye;se++){const ge=te[se];if(E(ge,b)){const je=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ze=n.get(ge).__webglTexture;t.bindTexture(je,Ze),C(je),t.unbindTexture()}}}function Me(I){if(l&&I.samples>0&&Pe(I)===!1){const b=I.textures,te=I.width,se=I.height;let ye=i.COLOR_BUFFER_BIT;const ge=[],je=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=n.get(I),we=b.length>1;if(we)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){ge.push(i.COLOR_ATTACHMENT0+Re),I.depthBuffer&&ge.push(je);const et=Ze.__ignoreDepthValues!==void 0?Ze.__ignoreDepthValues:!1;if(et===!1&&(I.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Re]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[je])),we){const Te=n.get(b[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,te,se,0,0,te,se,ye,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Re]);const et=n.get(b[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}}function de(I){return Math.min(s.maxSamples,I.samples)}function Pe(I){const b=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(I){const b=c.render.frame;m.get(I)!==b&&(m.set(I,b),I.update())}function ke(I,b){const te=I.colorSpace,se=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===wu||te!==xr&&te!==hr&&(Dt.getTransfer(te)===Gt?l===!1?e.has("EXT_sRGB")===!0&&se===hi?(I.format=wu,I.minFilter=Pn,I.generateMipmaps=!1):b=Am.sRGBToLinear(b):(se!==hi||ye!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.setTexture2D=ce,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=me,this.rebindTextures=O,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Pe}function R1(i,e,t){const n=t.isWebGL2;function s(a,c=hr){let l;const h=Dt.getTransfer(c);if(a===mr)return i.UNSIGNED_BYTE;if(a===_m)return i.UNSIGNED_SHORT_4_4_4_4;if(a===vm)return i.UNSIGNED_SHORT_5_5_5_1;if(a===qE)return i.BYTE;if(a===$E)return i.SHORT;if(a===Vu)return i.UNSIGNED_SHORT;if(a===gm)return i.INT;if(a===fr)return i.UNSIGNED_INT;if(a===Ei)return i.FLOAT;if(a===bo)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===ZE)return i.ALPHA;if(a===hi)return i.RGBA;if(a===KE)return i.LUMINANCE;if(a===JE)return i.LUMINANCE_ALPHA;if(a===Gr)return i.DEPTH_COMPONENT;if(a===zs)return i.DEPTH_STENCIL;if(a===wu)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===xm)return i.RED;if(a===ym)return i.RED_INTEGER;if(a===jE)return i.RG;if(a===Sm)return i.RG_INTEGER;if(a===Em)return i.RGBA_INTEGER;if(a===Oc||a===Fc||a===Bc||a===zc)if(h===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wd||a===Cd||a===Rd||a===Ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===wd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Mm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Pd||a===Id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Pd)return h===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Id)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Dd||a===Ud||a===Nd||a===Od||a===Fd||a===Bd||a===zd||a===Gd||a===Hd||a===kd||a===Vd||a===Wd||a===Xd||a===Yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Dd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ud)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Od)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Vd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gc||a===qd||a===$d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Gc)return h===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===$d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===QE||a===Zd||a===Kd||a===Jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Gc)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Kd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===zr?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class L1 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P1={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,n),p=this._getHandJoint(f,M);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],v=d.position.distanceTo(m.position),x=.02,y=.005;f.inputState.pinching&&v>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(P1)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Va;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
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

}`;class U1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Mn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new _r({extensions:{fragDepth:!0},vertexShader:I1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new vl(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class N1 extends Wr{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",h=1,f=null,d=null,m=null,v=null,x=null,y=null;const M=new U1,_=t.getContextAttributes();let p=null,P=null;const E=[],C=[],z=new Ce;let F=null;const R=new Hn;R.layers.enable(1),R.viewport=new hn;const X=new Hn;X.layers.enable(2),X.viewport=new hn;const le=[R,X],T=new L1;T.layers.enable(1),T.layers.enable(2);let D=null,Se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=E[ne];return ve===void 0&&(ve=new hu,E[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=E[ne];return ve===void 0&&(ve=new hu,E[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=E[ne];return ve===void 0&&(ve=new hu,E[ne]=ve),ve.getHandSpace()};function pe(ne){const ve=C.indexOf(ne.inputSource);if(ve===-1)return;const De=E[ve];De!==void 0&&(De.update(ne.inputSource,ne.frame,f||c),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){s.removeEventListener("select",pe),s.removeEventListener("selectstart",pe),s.removeEventListener("selectend",pe),s.removeEventListener("squeeze",pe),s.removeEventListener("squeezestart",pe),s.removeEventListener("squeezeend",pe),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let ne=0;ne<E.length;ne++){const ve=C[ne];ve!==null&&(C[ne]=null,E[ne].disconnect(ve))}D=null,Se=null,M.reset(),e.setRenderTarget(p),x=null,v=null,m=null,s=null,P=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",pe),s.addEventListener("selectstart",pe),s.addEventListener("selectend",pe),s.addEventListener("squeeze",pe),s.addEventListener("squeezestart",pe),s.addEventListener("squeezeend",pe),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ve={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Hr(x.framebufferWidth,x.framebufferHeight,{format:hi,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ve=null,De=null,Je=null;_.depth&&(Je=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?zs:Gr,De=_.stencil?zr:fr);const He={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};m=new XRWebGLBinding(s,t),v=m.createProjectionLayer(He),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Hr(v.textureWidth,v.textureHeight,{format:hi,type:mr,depthTexture:new zm(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Oe=e.properties.get(P);Oe.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(l),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(ne){for(let ve=0;ve<ne.removed.length;ve++){const De=ne.removed[ve],Je=C.indexOf(De);Je>=0&&(C[Je]=null,E[Je].disconnect(De))}for(let ve=0;ve<ne.added.length;ve++){const De=ne.added[ve];let Je=C.indexOf(De);if(Je===-1){for(let Oe=0;Oe<E.length;Oe++)if(Oe>=C.length){C.push(De),Je=Oe;break}else if(C[Oe]===null){C[Oe]=De,Je=Oe;break}if(Je===-1)break}const He=E[Je];He&&He.connect(De)}}const J=new V,ce=new V;function ie(ne,ve,De){J.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(De.matrixWorld);const Je=J.distanceTo(ce),He=ve.projectionMatrix.elements,Oe=De.projectionMatrix.elements,at=He[14]/(He[10]-1),Xe=He[14]/(He[10]+1),O=(He[9]+1)/He[5],Ae=(He[9]-1)/He[5],re=(He[8]-1)/He[0],Me=(Oe[8]+1)/Oe[0],de=at*re,Pe=at*Me,Ue=Je/(-re+Me),ke=Ue*-re;ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ke),ne.translateZ(Ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const ot=at+Ue,I=Xe+Ue,b=de-ke,te=Pe+(Je-ke),se=O*Xe/I*ot,ye=Ae*Xe/I*ot;ne.projectionMatrix.makePerspective(b,te,se,ye,ot,I),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ue(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;M.texture!==null&&(ne.near=M.depthNear,ne.far=M.depthFar),T.near=X.near=R.near=ne.near,T.far=X.far=R.far=ne.far,(D!==T.near||Se!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,Se=T.far,R.near=D,R.far=Se,X.near=D,X.far=Se,R.updateProjectionMatrix(),X.updateProjectionMatrix(),ne.updateProjectionMatrix());const ve=ne.parent,De=T.cameras;ue(T,ve);for(let Je=0;Je<De.length;Je++)ue(De[Je],ve);De.length===2?ie(T,R,X):T.projectionMatrix.copy(R.projectionMatrix),me(ne,T,ve)};function me(ne,ve,De){De===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=To*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function(ne){h=ne,v!==null&&(v.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null};let xe=null;function Fe(ne,ve){if(d=ve.getViewerPose(f||c),y=ve,d!==null){const De=d.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Je=!1;De.length!==T.cameras.length&&(T.cameras.length=0,Je=!0);for(let Oe=0;Oe<De.length;Oe++){const at=De[Oe];let Xe=null;if(x!==null)Xe=x.getViewport(at);else{const Ae=m.getViewSubImage(v,at);Xe=Ae.viewport,Oe===0&&(e.setRenderTargetTextures(P,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(P))}let O=le[Oe];O===void 0&&(O=new Hn,O.layers.enable(Oe),O.viewport=new hn,le[Oe]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Oe===0&&(T.matrix.copy(O.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Je===!0&&T.cameras.push(O)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")){const Oe=m.getDepthInformation(De[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,s.renderState)}}for(let De=0;De<E.length;De++){const Je=C[De],He=E[De];Je!==null&&He!==void 0&&He.update(Je,ve,f||c)}M.render(e,T),xe&&xe(ne,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),y=null}const st=new Bm;st.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){xe=ne},this.dispose=function(){}}}const Ur=new qi,O1=new Yt;function F1(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Um(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,P,E,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(_,p):p.isMeshToonMaterial?(a(_,p),m(_,p)):p.isMeshPhongMaterial?(a(_,p),d(_,p)):p.isMeshStandardMaterial?(a(_,p),v(_,p),p.isMeshPhysicalMaterial&&x(_,p,C)):p.isMeshMatcapMaterial?(a(_,p),y(_,p)):p.isMeshDepthMaterial?a(_,p):p.isMeshDistanceMaterial?(a(_,p),M(_,p)):p.isMeshNormalMaterial?a(_,p):p.isLineBasicMaterial?(c(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?h(_,p,P,E):p.isSpriteMaterial?f(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===In&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===In&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const P=e.get(p),E=P.envMap,C=P.envMapRotation;if(E&&(_.envMap.value=E,Ur.copy(C),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Ur)),_.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const z=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*z,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,P,E){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*P,_.scale.value=E*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function v(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function x(_,p,P){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,p){p.matcap&&(_.matcap.value=p.matcap)}function M(_,p){const P=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B1(i,e,t,n){let s={},a={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(P,E){const C=E.program;n.uniformBlockBinding(P,C)}function f(P,E){let C=s[P.id];C===void 0&&(y(P),C=d(P),s[P.id]=C,P.addEventListener("dispose",_));const z=E.program;n.updateUBOMapping(P,z);const F=e.render.frame;a[P.id]!==F&&(v(P),a[P.id]=F)}function d(P){const E=m();P.__bindingPointIndex=E;const C=i.createBuffer(),z=P.__size,F=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,z,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,C),C}function m(){for(let P=0;P<l;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const E=s[P.id],C=P.uniforms,z=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let F=0,R=C.length;F<R;F++){const X=Array.isArray(C[F])?C[F]:[C[F]];for(let le=0,T=X.length;le<T;le++){const D=X[le];if(x(D,F,le,z)===!0){const Se=D.__offset,pe=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let K=0;K<pe.length;K++){const J=pe[K],ce=M(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,Se+B,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,B),B+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Se,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(P,E,C,z){const F=P.value,R=E+"_"+C;if(z[R]===void 0)return typeof F=="number"||typeof F=="boolean"?z[R]=F:z[R]=F.clone(),!0;{const X=z[R];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return z[R]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function y(P){const E=P.uniforms;let C=0;const z=16;for(let R=0,X=E.length;R<X;R++){const le=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,D=le.length;T<D;T++){const Se=le[T],pe=Array.isArray(Se.value)?Se.value:[Se.value];for(let B=0,K=pe.length;B<K;B++){const J=pe[B],ce=M(J),ie=C%z;ie!==0&&z-ie<ce.boundary&&(C+=z-ie),Se.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Se.__offset=C,C+=ce.storage}}}const F=C%z;return F>0&&(C+=z-F),P.__size=C,P.__cache={},this}function M(P){const E={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(E.boundary=4,E.storage=4):P.isVector2?(E.boundary=8,E.storage=8):P.isVector3||P.isColor?(E.boundary=16,E.storage=12):P.isVector4?(E.boundary=16,E.storage=16):P.isMatrix3?(E.boundary=48,E.storage=48):P.isMatrix4?(E.boundary=64,E.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),E}function _(P){const E=P.target;E.removeEventListener("dispose",_);const C=c.indexOf(E.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function p(){for(const P in s)i.deleteBuffer(s[P]);c=[],s={},a={}}return{bind:h,update:f,dispose:p}}class qu{constructor(e={}){const{canvas:t=AM(),context:n=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=c;const x=new Uint32Array(4),y=new Int32Array(4);let M=null,_=null;const p=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const E=this;let C=!1,z=0,F=0,R=null,X=-1,le=null;const T=new hn,D=new hn;let Se=null;const pe=new Et(0);let B=0,K=t.width,J=t.height,ce=1,ie=null,ue=null;const me=new hn(0,0,K,J),xe=new hn(0,0,K,J);let Fe=!1;const st=new Fm;let ne=!1,ve=!1,De=null;const Je=new Yt,He=new Ce,Oe=new V,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return R===null?ce:1}let O=n;function Ae(L,Y){for(let j=0;j<L.length;j++){const ee=L[j],Z=t.getContext(ee,Y);if(Z!==null)return Z}return null}try{const L={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ku}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){const Y=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&Y.shift(),O=Ae(Y,L),O===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let re,Me,de,Pe,Ue,ke,ot,I,b,te,se,ye,ge,je,Ze,we,Re,et,Te,Ot,ut,Ke,ze,Ye;function U(){re=new WA(O),Me=new FA(O,re,e),re.init(Me),Ke=new R1(O,re,Me),de=new w1(O,re,Me),Pe=new qA(O),Ue=new d1,ke=new C1(O,re,de,Ue,Me,Ke,Pe),ot=new zA(E),I=new VA(E),b=new jM(O,Me),ze=new NA(O,re,b,Me),te=new XA(O,b,Pe,ze),se=new JA(O,te,b,Pe),Te=new KA(O,Me,ke),we=new BA(Ue),ye=new f1(E,ot,I,re,Me,ze,we),ge=new F1(E,Ue),je=new m1,Ze=new S1(re,Me),et=new UA(E,ot,I,de,se,v,h),Re=new A1(E,se,Me),Ye=new B1(O,Pe,Me,de),Ot=new OA(O,re,Pe,Me),ut=new YA(O,re,Pe,Me),Pe.programs=ye.programs,E.capabilities=Me,E.extensions=re,E.properties=Ue,E.renderLists=je,E.shadowMap=Re,E.state=de,E.info=Pe}U();const fe=new N1(E,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(L){L!==void 0&&(ce=L,this.setSize(K,J,!1))},this.getSize=function(L){return L.set(K,J)},this.setSize=function(L,Y,j=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,J=Y,t.width=Math.floor(L*ce),t.height=Math.floor(Y*ce),j===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(K*ce,J*ce).floor()},this.setDrawingBufferSize=function(L,Y,j){K=L,J=Y,ce=j,t.width=Math.floor(L*j),t.height=Math.floor(Y*j),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(me)},this.setViewport=function(L,Y,j,ee){L.isVector4?me.set(L.x,L.y,L.z,L.w):me.set(L,Y,j,ee),de.viewport(T.copy(me).multiplyScalar(ce).round())},this.getScissor=function(L){return L.copy(xe)},this.setScissor=function(L,Y,j,ee){L.isVector4?xe.set(L.x,L.y,L.z,L.w):xe.set(L,Y,j,ee),de.scissor(D.copy(xe).multiplyScalar(ce).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(L){de.setScissorTest(Fe=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){ue=L},this.getClearColor=function(L){return L.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(L=!0,Y=!0,j=!0){let ee=0;if(L){let Z=!1;if(R!==null){const Be=R.texture.format;Z=Be===Em||Be===Sm||Be===ym}if(Z){const Be=R.texture.type,qe=Be===mr||Be===fr||Be===Vu||Be===zr||Be===_m||Be===vm,tt=et.getClearColor(),nt=et.getClearAlpha(),pt=tt.r,lt=tt.g,ht=tt.b;qe?(x[0]=pt,x[1]=lt,x[2]=ht,x[3]=nt,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=pt,y[1]=lt,y[2]=ht,y[3]=nt,O.clearBufferiv(O.COLOR,0,y))}else ee|=O.COLOR_BUFFER_BIT}Y&&(ee|=O.DEPTH_BUFFER_BIT),j&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",be,!1),je.dispose(),Ze.dispose(),Ue.dispose(),ot.dispose(),I.dispose(),se.dispose(),ze.dispose(),Ye.dispose(),ye.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ht),fe.removeEventListener("sessionend",At),De&&(De.dispose(),De=null),Pt.stop()};function Ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=Pe.autoReset,Y=Re.enabled,j=Re.autoUpdate,ee=Re.needsUpdate,Z=Re.type;U(),Pe.autoReset=L,Re.enabled=Y,Re.autoUpdate=j,Re.needsUpdate=ee,Re.type=Z}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function q(L){const Y=L.target;Y.removeEventListener("dispose",q),Ee(Y)}function Ee(L){Ne(L),Ue.remove(L)}function Ne(L){const Y=Ue.get(L).programs;Y!==void 0&&(Y.forEach(function(j){ye.releaseProgram(j)}),L.isShaderMaterial&&ye.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,j,ee,Z,Be){Y===null&&(Y=at);const qe=Z.isMesh&&Z.matrixWorld.determinant()<0,tt=Tl(L,Y,j,ee,Z);de.setMaterial(ee,qe);let nt=j.index,pt=1;if(ee.wireframe===!0){if(nt=te.getWireframeAttribute(j),nt===void 0)return;pt=2}const lt=j.drawRange,ht=j.attributes.position;let kt=lt.start*pt,fn=(lt.start+lt.count)*pt;Be!==null&&(kt=Math.max(kt,Be.start*pt),fn=Math.min(fn,(Be.start+Be.count)*pt)),nt!==null?(kt=Math.max(kt,0),fn=Math.min(fn,nt.count)):ht!=null&&(kt=Math.max(kt,0),fn=Math.min(fn,ht.count));const $t=fn-kt;if($t<0||$t===1/0)return;ze.setup(Z,ee,tt,j,nt);let ti,Bt=Ot;if(nt!==null&&(ti=b.get(nt),Bt=ut,Bt.setIndex(ti)),Z.isMesh)ee.wireframe===!0?(de.setLineWidth(ee.wireframeLinewidth*Xe()),Bt.setMode(O.LINES)):Bt.setMode(O.TRIANGLES);else if(Z.isLine){let dt=ee.linewidth;dt===void 0&&(dt=1),de.setLineWidth(dt*Xe()),Z.isLineSegments?Bt.setMode(O.LINES):Z.isLineLoop?Bt.setMode(O.LINE_LOOP):Bt.setMode(O.LINE_STRIP)}else Z.isPoints?Bt.setMode(O.POINTS):Z.isSprite&&Bt.setMode(O.TRIANGLES);if(Z.isBatchedMesh)Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Bt.renderInstances(kt,$t,Z.count);else if(j.isInstancedBufferGeometry){const dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ys=Math.min(j.instanceCount,dt);Bt.renderInstances(kt,$t,Ys)}else Bt.render(kt,$t)};function gt(L,Y,j){L.transparent===!0&&L.side===Xi&&L.forceSinglePass===!1?(L.side=In,L.needsUpdate=!0,Zr(L,Y,j),L.side=gr,L.needsUpdate=!0,Zr(L,Y,j),L.side=Xi):Zr(L,Y,j)}this.compile=function(L,Y,j=null){j===null&&(j=L),_=Ze.get(j),_.init(),P.push(_),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),L!==j&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(E._useLegacyLights);const ee=new Set;return L.traverse(function(Z){const Be=Z.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){const tt=Be[qe];gt(tt,j,Z),ee.add(tt)}else gt(Be,j,Z),ee.add(Be)}),P.pop(),_=null,ee},this.compileAsync=function(L,Y,j=null){const ee=this.compile(L,Y,j);return new Promise(Z=>{function Be(){if(ee.forEach(function(qe){Ue.get(qe).currentProgram.isReady()&&ee.delete(qe)}),ee.size===0){Z(L);return}setTimeout(Be,10)}re.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let wt=null;function Lt(L){wt&&wt(L)}function Ht(){Pt.stop()}function At(){Pt.start()}const Pt=new Bm;Pt.setAnimationLoop(Lt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(L){wt=L,fe.setAnimationLoop(L),L===null?Pt.stop():Pt.start()},fe.addEventListener("sessionstart",Ht),fe.addEventListener("sessionend",At),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,Y,R),_=Ze.get(L,P.length),_.init(),P.push(_),Je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix(Je),ve=this.localClippingEnabled,ne=we.init(this.clippingPlanes,ve),M=je.get(L,p.length),M.init(),p.push(M),rn(L,Y,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(ie,ue),this.info.render.frame++,ne===!0&&we.beginShadows();const j=_.state.shadowsArray;if(Re.render(j,L,Y),ne===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1)&&et.render(M,L),_.setupLights(E._useLegacyLights),Y.isArrayCamera){const ee=Y.cameras;for(let Z=0,Be=ee.length;Z<Be;Z++){const qe=ee[Z];ei(M,L,qe,qe.viewport)}}else ei(M,L,Y);R!==null&&(ke.updateMultisampleRenderTarget(R),ke.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(E,L,Y),ze.resetDefaultState(),X=-1,le=null,P.pop(),P.length>0?_=P[P.length-1]:_=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function rn(L,Y,j,ee){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)j=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||st.intersectsSprite(L)){ee&&Oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Je);const qe=se.update(L),tt=L.material;tt.visible&&M.push(L,qe,tt,j,Oe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||st.intersectsObject(L))){const qe=se.update(L),tt=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Oe.copy(L.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Oe.copy(qe.boundingSphere.center)),Oe.applyMatrix4(L.matrixWorld).applyMatrix4(Je)),Array.isArray(tt)){const nt=qe.groups;for(let pt=0,lt=nt.length;pt<lt;pt++){const ht=nt[pt],kt=tt[ht.materialIndex];kt&&kt.visible&&M.push(L,qe,kt,j,Oe.z,ht)}}else tt.visible&&M.push(L,qe,tt,j,Oe.z,null)}}const Be=L.children;for(let qe=0,tt=Be.length;qe<tt;qe++)rn(Be[qe],Y,j,ee)}function ei(L,Y,j,ee){const Z=L.opaque,Be=L.transmissive,qe=L.transparent;_.setupLightsView(j),ne===!0&&we.setGlobalState(E.clippingPlanes,j),Be.length>0&&qr(Z,Be,Y,j),ee&&de.viewport(T.copy(ee)),Z.length>0&&$r(Z,Y,j),Be.length>0&&$r(Be,Y,j),qe.length>0&&$r(qe,Y,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function qr(L,Y,j,ee){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Be=Me.isWebGL2;De===null&&(De=new Hr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?bo:mr,minFilter:Br,samples:Be?4:0})),E.getDrawingBufferSize(He),Be?De.setSize(He.x,He.y):De.setSize(ll(He.x),ll(He.y));const qe=E.getRenderTarget();E.setRenderTarget(De),E.getClearColor(pe),B=E.getClearAlpha(),B<1&&E.setClearColor(16777215,.5),E.clear();const tt=E.toneMapping;E.toneMapping=pr,$r(L,j,ee),ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De);let nt=!1;for(let pt=0,lt=Y.length;pt<lt;pt++){const ht=Y[pt],kt=ht.object,fn=ht.geometry,$t=ht.material,ti=ht.group;if($t.side===Xi&&kt.layers.test(ee.layers)){const Bt=$t.side;$t.side=In,$t.needsUpdate=!0,Io(kt,j,ee,fn,$t,ti),$t.side=Bt,$t.needsUpdate=!0,nt=!0}}nt===!0&&(ke.updateMultisampleRenderTarget(De),ke.updateRenderTargetMipmap(De)),E.setRenderTarget(qe),E.setClearColor(pe,B),E.toneMapping=tt}function $r(L,Y,j){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Be=L.length;Z<Be;Z++){const qe=L[Z],tt=qe.object,nt=qe.geometry,pt=ee===null?qe.material:ee,lt=qe.group;tt.layers.test(j.layers)&&Io(tt,Y,j,nt,pt,lt)}}function Io(L,Y,j,ee,Z,Be){L.onBeforeRender(E,Y,j,ee,Z,Be),L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(E,Y,j,ee,L,Be),Z.transparent===!0&&Z.side===Xi&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,E.renderBufferDirect(j,Y,ee,Z,L,Be),Z.side=gr,Z.needsUpdate=!0,E.renderBufferDirect(j,Y,ee,Z,L,Be),Z.side=Xi):E.renderBufferDirect(j,Y,ee,Z,L,Be),L.onAfterRender(E,Y,j,ee,Z,Be)}function Zr(L,Y,j){Y.isScene!==!0&&(Y=at);const ee=Ue.get(L),Z=_.state.lights,Be=_.state.shadowsArray,qe=Z.state.version,tt=ye.getParameters(L,Z.state,Be,Y,j),nt=ye.getProgramCacheKey(tt);let pt=ee.programs;ee.environment=L.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(L.isMeshStandardMaterial?I:ot).get(L.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,pt===void 0&&(L.addEventListener("dispose",q),pt=new Map,ee.programs=pt);let lt=pt.get(nt);if(lt!==void 0){if(ee.currentProgram===lt&&ee.lightsStateVersion===qe)return Uo(L,tt),lt}else tt.uniforms=ye.getUniforms(L),L.onBuild(j,tt,E),L.onBeforeCompile(tt,E),lt=ye.acquireProgram(tt,nt),pt.set(nt,lt),ee.uniforms=tt.uniforms;const ht=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ht.clippingPlanes=we.uniform),Uo(L,tt),ee.needsLights=No(L),ee.lightsStateVersion=qe,ee.needsLights&&(ht.ambientLightColor.value=Z.state.ambient,ht.lightProbe.value=Z.state.probe,ht.directionalLights.value=Z.state.directional,ht.directionalLightShadows.value=Z.state.directionalShadow,ht.spotLights.value=Z.state.spot,ht.spotLightShadows.value=Z.state.spotShadow,ht.rectAreaLights.value=Z.state.rectArea,ht.ltc_1.value=Z.state.rectAreaLTC1,ht.ltc_2.value=Z.state.rectAreaLTC2,ht.pointLights.value=Z.state.point,ht.pointLightShadows.value=Z.state.pointShadow,ht.hemisphereLights.value=Z.state.hemi,ht.directionalShadowMap.value=Z.state.directionalShadowMap,ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ht.spotShadowMap.value=Z.state.spotShadowMap,ht.spotLightMatrix.value=Z.state.spotLightMatrix,ht.spotLightMap.value=Z.state.spotLightMap,ht.pointShadowMap.value=Z.state.pointShadowMap,ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=lt,ee.uniformsList=null,lt}function Do(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=el.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Uo(L,Y){const j=Ue.get(L);j.outputColorSpace=Y.outputColorSpace,j.batching=Y.batching,j.instancing=Y.instancing,j.instancingColor=Y.instancingColor,j.instancingMorph=Y.instancingMorph,j.skinning=Y.skinning,j.morphTargets=Y.morphTargets,j.morphNormals=Y.morphNormals,j.morphColors=Y.morphColors,j.morphTargetsCount=Y.morphTargetsCount,j.numClippingPlanes=Y.numClippingPlanes,j.numIntersection=Y.numClipIntersection,j.vertexAlphas=Y.vertexAlphas,j.vertexTangents=Y.vertexTangents,j.toneMapping=Y.toneMapping}function Tl(L,Y,j,ee,Z){Y.isScene!==!0&&(Y=at),ke.resetTextureUnits();const Be=Y.fog,qe=ee.isMeshStandardMaterial?Y.environment:null,tt=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xr,nt=(ee.isMeshStandardMaterial?I:ot).get(ee.envMap||qe),pt=ee.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,lt=!!j.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ht=!!j.morphAttributes.position,kt=!!j.morphAttributes.normal,fn=!!j.morphAttributes.color;let $t=pr;ee.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&($t=E.toneMapping);const ti=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Bt=ti!==void 0?ti.length:0,dt=Ue.get(ee),Ys=_.state.lights;if(ne===!0&&(ve===!0||L!==le)){const An=L===le&&ee.id===X;we.setState(ee,L,An)}let Ut=!1;ee.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Ys.state.version||dt.outputColorSpace!==tt||Z.isBatchedMesh&&dt.batching===!1||!Z.isBatchedMesh&&dt.batching===!0||Z.isInstancedMesh&&dt.instancing===!1||!Z.isInstancedMesh&&dt.instancing===!0||Z.isSkinnedMesh&&dt.skinning===!1||!Z.isSkinnedMesh&&dt.skinning===!0||Z.isInstancedMesh&&dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&dt.instancingMorph===!1&&Z.morphTexture!==null||dt.envMap!==nt||ee.fog===!0&&dt.fog!==Be||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==we.numPlanes||dt.numIntersection!==we.numIntersection)||dt.vertexAlphas!==pt||dt.vertexTangents!==lt||dt.morphTargets!==ht||dt.morphNormals!==kt||dt.morphColors!==fn||dt.toneMapping!==$t||Me.isWebGL2===!0&&dt.morphTargetsCount!==Bt)&&(Ut=!0):(Ut=!0,dt.__version=ee.version);let pi=dt.currentProgram;Ut===!0&&(pi=Zr(ee,Y,Z));let qs=!1,Ai=!1,$s=!1;const jt=pi.getUniforms(),Vn=dt.uniforms;if(de.useProgram(pi.program)&&(qs=!0,Ai=!0,$s=!0),ee.id!==X&&(X=ee.id,Ai=!0),qs||le!==L){jt.setValue(O,"projectionMatrix",L.projectionMatrix),jt.setValue(O,"viewMatrix",L.matrixWorldInverse);const An=jt.map.cameraPosition;An!==void 0&&An.setValue(O,Oe.setFromMatrixPosition(L.matrixWorld)),Me.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&jt.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),le!==L&&(le=L,Ai=!0,$s=!0)}if(Z.isSkinnedMesh){jt.setOptional(O,Z,"bindMatrix"),jt.setOptional(O,Z,"bindMatrixInverse");const An=Z.skeleton;An&&(Me.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),jt.setValue(O,"boneTexture",An.boneTexture,ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(jt.setOptional(O,Z,"batchingTexture"),jt.setValue(O,"batchingTexture",Z._matricesTexture,ke));const Kr=j.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0&&Me.isWebGL2===!0)&&Te.update(Z,j,pi),(Ai||dt.receiveShadow!==Z.receiveShadow)&&(dt.receiveShadow=Z.receiveShadow,jt.setValue(O,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Vn.envMap.value=nt,Vn.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Ai&&(jt.setValue(O,"toneMappingExposure",E.toneMappingExposure),dt.needsLights&&Al(Vn,$s),Be&&ee.fog===!0&&ge.refreshFogUniforms(Vn,Be),ge.refreshMaterialUniforms(Vn,ee,ce,J,De),el.upload(O,Do(dt),Vn,ke)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(el.upload(O,Do(dt),Vn,ke),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&jt.setValue(O,"center",Z.center),jt.setValue(O,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(O,"normalMatrix",Z.normalMatrix),jt.setValue(O,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const An=ee.uniformsGroups;for(let Jr=0,Oo=An.length;Jr<Oo;Jr++)if(Me.isWebGL2){const jr=An[Jr];Ye.update(jr,pi),Ye.bind(jr,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Al(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function No(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,Y,j){Ue.get(L.texture).__webglTexture=Y,Ue.get(L.depthTexture).__webglTexture=j;const ee=Ue.get(L);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=j===void 0,ee.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const j=Ue.get(L);j.__webglFramebuffer=Y,j.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,j=0){R=L,z=Y,F=j;let ee=!0,Z=null,Be=!1,qe=!1;if(L){const nt=Ue.get(L);nt.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1):nt.__webglFramebuffer===void 0?ke.setupRenderTarget(L):nt.__hasExternalTextures&&ke.rebindTextures(L,Ue.get(L.texture).__webglTexture,Ue.get(L.depthTexture).__webglTexture);const pt=L.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(qe=!0);const lt=Ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?Z=lt[Y][j]:Z=lt[Y],Be=!0):Me.isWebGL2&&L.samples>0&&ke.useMultisampledRTT(L)===!1?Z=Ue.get(L).__webglMultisampledFramebuffer:Array.isArray(lt)?Z=lt[j]:Z=lt,T.copy(L.viewport),D.copy(L.scissor),Se=L.scissorTest}else T.copy(me).multiplyScalar(ce).floor(),D.copy(xe).multiplyScalar(ce).floor(),Se=Fe;if(de.bindFramebuffer(O.FRAMEBUFFER,Z)&&Me.drawBuffers&&ee&&de.drawBuffers(L,Z),de.viewport(T),de.scissor(D),de.setScissorTest(Se),Be){const nt=Ue.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt.__webglTexture,j)}else if(qe){const nt=Ue.get(L.texture),pt=Y||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,j||0,pt)}X=-1},this.readRenderTargetPixels=function(L,Y,j,ee,Z,Be,qe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(tt=tt[qe]),tt){de.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=L.texture,pt=nt.format,lt=nt.type;if(pt!==hi&&Ke.convert(pt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=lt===bo&&(re.has("EXT_color_buffer_half_float")||Me.isWebGL2&&re.has("EXT_color_buffer_float"));if(lt!==mr&&Ke.convert(lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===Ei&&(Me.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-ee&&j>=0&&j<=L.height-Z&&O.readPixels(Y,j,ee,Z,Ke.convert(pt),Ke.convert(lt),Be)}finally{const nt=R!==null?Ue.get(R).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(L,Y,j=0){const ee=Math.pow(2,-j),Z=Math.floor(Y.image.width*ee),Be=Math.floor(Y.image.height*ee);ke.setTexture2D(Y,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,L.x,L.y,Z,Be),de.unbindTexture()},this.copyTextureToTexture=function(L,Y,j,ee=0){const Z=Y.image.width,Be=Y.image.height,qe=Ke.convert(j.format),tt=Ke.convert(j.type);ke.setTexture2D(j,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment),Y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ee,L.x,L.y,Z,Be,qe,tt,Y.image.data):Y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ee,L.x,L.y,Y.mipmaps[0].width,Y.mipmaps[0].height,qe,Y.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,ee,L.x,L.y,qe,tt,Y.image),ee===0&&j.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,j,ee,Z=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Be=Math.round(L.max.x-L.min.x),qe=Math.round(L.max.y-L.min.y),tt=L.max.z-L.min.z+1,nt=Ke.convert(ee.format),pt=Ke.convert(ee.type);let lt;if(ee.isData3DTexture)ke.setTexture3D(ee,0),lt=O.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)ke.setTexture2DArray(ee,0),lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,ee.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,ee.unpackAlignment);const ht=O.getParameter(O.UNPACK_ROW_LENGTH),kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),$t=O.getParameter(O.UNPACK_SKIP_ROWS),ti=O.getParameter(O.UNPACK_SKIP_IMAGES),Bt=j.isCompressedTexture?j.mipmaps[Z]:j.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,L.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,L.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,L.min.z),j.isDataTexture||j.isData3DTexture?O.texSubImage3D(lt,Z,Y.x,Y.y,Y.z,Be,qe,tt,nt,pt,Bt.data):ee.isCompressedArrayTexture?O.compressedTexSubImage3D(lt,Z,Y.x,Y.y,Y.z,Be,qe,tt,nt,Bt.data):O.texSubImage3D(lt,Z,Y.x,Y.y,Y.z,Be,qe,tt,nt,pt,Bt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ti),Z===0&&ee.generateMipmaps&&O.generateMipmap(lt),de.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?ke.setTextureCube(L,0):L.isData3DTexture?ke.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ke.setTexture2DArray(L,0):ke.setTexture2D(L,0),de.unbindTexture()},this.resetState=function(){z=0,F=0,R=null,de.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wu?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===gl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class z1 extends qu{}z1.prototype.isWebGL1Renderer=!0;class G1 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H1 extends Mn{constructor(e=null,t=1,n=1,s,a,c,l,h,f=un,d=un,m,v){super(null,c,l,h,f,d,s,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kp extends fi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new Yt,Vp=new Yt,Wa=[],Wp=new Yr,k1=new Yt,go=new kn,_o=new Lo;class Xp extends kn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,k1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Wp.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Wp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),_o.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,c=e*a+1;for(let l=0;l<n.length;l++)n[l]=s[c+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(go.geometry=this.geometry,go.material=this.material,go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Rs),Vp.multiplyMatrices(n,Rs),go.matrixWorld=Vp,go.raycast(e,Wa);for(let c=0,l=Wa.length;c<l;c++){const h=Wa[c];h.instanceId=a,h.object=this,t.push(h)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new H1(new Float32Array(s*this.count),s,this.count,xm,Ei));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<n.length;f++)c+=n[f];const l=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=l,a.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let c;t?c=t:c=e*n[a-1];let l=0,h=a-1,f;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),f=n[s]-c,f<0)l=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(a-1);const d=n[s],v=n[s+1]-d,x=(c-d)/v;return(s+x)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),l=this.getPoint(a),h=t||(c.isVector2?new Ce:new V);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,s=[],a=[],c=[],l=new V,h=new Yt;for(let x=0;x<=e;x++){const y=x/e;s[x]=this.getTangentAt(y,new V)}a[0]=new V,c[0]=new V;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),v<=f&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],l),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(an(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(h.makeRotationAxis(l,y))}c[x].crossVectors(s[x],a[x])}if(t===!0){let x=Math.acos(an(a[0].dot(a[e]),-1,1));x/=e,s[0].dot(l.crossVectors(a[0],a[e]))>0&&(x=-x);for(let y=1;y<=e;y++)a[y].applyMatrix4(h.makeRotationAxis(s[y],x*y)),c[y].crossVectors(s[y],a[y])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $u extends Ti{constructor(e=0,t=0,n=1,s=1,a=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const l=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=h-this.aX,x=f-this.aY;h=v*d-x*m+this.aX,f=v*m+x*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class V1 extends $u{constructor(e,t,n,s,a,c){super(e,t,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Zu(){let i=0,e=0,t=0,n=0;function s(a,c,l,h){i=a,e=l,t=-3*a+3*c-2*l-h,n=2*a-2*c+l+h}return{initCatmullRom:function(a,c,l,h,f){s(c,l,f*(l-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,l,h,f,d,m){let v=(c-a)/f-(l-a)/(f+d)+(l-c)/d,x=(l-c)/d-(h-c)/(d+m)+(h-l)/m;v*=d,x*=d,s(c,l,v,x)},calc:function(a){const c=a*a,l=c*a;return i+e*a+t*c+n*l}}}const Xa=new V,fu=new Zu,du=new Zu,pu=new Zu;class W1 extends Ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){const n=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1);let f,d;this.closed||l>0?f=s[(l-1)%a]:(Xa.subVectors(s[0],s[1]).add(s[0]),f=Xa);const m=s[l%a],v=s[(l+1)%a];if(this.closed||l+2<a?d=s[(l+2)%a]:(Xa.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(f.distanceToSquared(m),x),M=Math.pow(m.distanceToSquared(v),x),_=Math.pow(v.distanceToSquared(d),x);M<1e-4&&(M=1),y<1e-4&&(y=M),_<1e-4&&(_=M),fu.initNonuniformCatmullRom(f.x,m.x,v.x,d.x,y,M,_),du.initNonuniformCatmullRom(f.y,m.y,v.y,d.y,y,M,_),pu.initNonuniformCatmullRom(f.z,m.z,v.z,d.z,y,M,_)}else this.curveType==="catmullrom"&&(fu.initCatmullRom(f.x,m.x,v.x,d.x,this.tension),du.initCatmullRom(f.y,m.y,v.y,d.y,this.tension),pu.initCatmullRom(f.z,m.z,v.z,d.z,this.tension));return n.set(fu.calc(h),du.calc(h),pu.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yp(i,e,t,n,s){const a=(n-e)*.5,c=(s-t)*.5,l=i*i,h=i*l;return(2*t-2*n+a+c)*h+(-3*t+3*n-2*a-c)*l+a*i+t}function X1(i,e){const t=1-i;return t*t*e}function Y1(i,e){return 2*(1-i)*i*e}function q1(i,e){return i*i*e}function Eo(i,e,t,n){return X1(i,e)+Y1(i,t)+q1(i,n)}function $1(i,e){const t=1-i;return t*t*t*e}function Z1(i,e){const t=1-i;return 3*t*t*i*e}function K1(i,e){return 3*(1-i)*i*i*e}function J1(i,e){return i*i*i*e}function Mo(i,e,t,n,s){return $1(i,e)+Z1(i,t)+K1(i,n)+J1(i,s)}class Xm extends Ti{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Mo(e,s.x,a.x,c.x,l.x),Mo(e,s.y,a.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class j1 extends Ti{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Mo(e,s.x,a.x,c.x,l.x),Mo(e,s.y,a.y,c.y,l.y),Mo(e,s.z,a.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ym extends Ti{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q1 extends Ti{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qm extends Ti{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Eo(e,s.x,a.x,c.x),Eo(e,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eC extends Ti{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Eo(e,s.x,a.x,c.x),Eo(e,s.y,a.y,c.y),Eo(e,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),l=a-c,h=s[c===0?c:c-1],f=s[c],d=s[c>s.length-2?s.length-1:c+1],m=s[c>s.length-3?s.length-1:c+2];return n.set(Yp(l,h.x,f.x,d.x,m.x),Yp(l,h.y,f.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Lu=Object.freeze({__proto__:null,ArcCurve:V1,CatmullRomCurve3:W1,CubicBezierCurve:Xm,CubicBezierCurve3:j1,EllipseCurve:$u,LineCurve:Ym,LineCurve3:Q1,QuadraticBezierCurve:qm,QuadraticBezierCurve3:eC,SplineCurve:$m});class tC extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const c=s[a]-n,l=this.curves[a],h=l.getLength(),f=h===0?0:1-c/h;return l.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}}class Pu extends tC{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ym(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new qm(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,c){const l=new Xm(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(a,c));return this.curves.push(l),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $m(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,s,a,c),this}absarc(e,t,n,s,a,c){return this.absellipse(e,t,n,n,s,a,c),this}ellipse(e,t,n,s,a,c,l,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,a,c,l,h),this}absellipse(e,t,n,s,a,c,l,h){const f=new $u(e,t,n,s,a,c,l,h);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ku extends bi{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],c=[],l=[],h=[],f=new V,d=new Ce;c.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){const x=n+m/t*s;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(c[v]/e+1)/2,d.y=(c[v+1]/e+1)/2,h.push(d.x,d.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(l,3)),this.setAttribute("uv",new Tn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tl extends Pu{constructor(e){super(e),this.uuid=Xr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Pu().fromJSON(s))}return this}}const nC={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=Zm(i,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let l,h,f,d,m,v,x;if(n&&(a=aC(i,e,a,t)),i.length>80*t){l=f=i[0],h=d=i[1];for(let y=t;y<s;y+=t)m=i[y],v=i[y+1],m<l&&(l=m),v<h&&(h=v),m>f&&(f=m),v>d&&(d=v);x=Math.max(f-l,d-h),x=x!==0?32767/x:0}return Ao(a,c,t,l,h,x,0),c}};function Zm(i,e,t,n,s){let a,c;if(s===vC(i,e,t,n)>0)for(a=e;a<t;a+=n)c=qp(a,i[a],i[a+1],c);else for(a=t-n;a>=e;a-=n)c=qp(a,i[a],i[a+1],c);return c&&yl(c,c.next)&&(Co(c),c=c.next),c}function Vr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ao(i,e,t,n,s,a,c){if(!i)return;!c&&a&&fC(i,n,s,a);let l=i,h,f;for(;i.prev!==i.next;){if(h=i.prev,f=i.next,a?rC(i,n,s,a):iC(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),Co(i),i=f.next,l=f.next;continue}if(i=f,i===l){c?c===1?(i=sC(Vr(i),e,t),Ao(i,e,t,n,s,a,2)):c===2&&oC(i,e,t,n,s,a):Ao(Vr(i),e,t,n,s,a,1);break}}}function iC(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,a=t.x,c=n.x,l=e.y,h=t.y,f=n.y,d=s<a?s<c?s:c:a<c?a:c,m=l<h?l<f?l:f:h<f?h:f,v=s>a?s>c?s:c:a>c?a:c,x=l>h?l>f?l:f:h>f?h:f;let y=n.next;for(;y!==e;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=x&&Ds(s,l,a,h,c,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function rC(i,e,t,n){const s=i.prev,a=i,c=i.next;if(Xt(s,a,c)>=0)return!1;const l=s.x,h=a.x,f=c.x,d=s.y,m=a.y,v=c.y,x=l<h?l<f?l:f:h<f?h:f,y=d<m?d<v?d:v:m<v?m:v,M=l>h?l>f?l:f:h>f?h:f,_=d>m?d>v?d:v:m>v?m:v,p=Iu(x,y,e,t,n),P=Iu(M,_,e,t,n);let E=i.prevZ,C=i.nextZ;for(;E&&E.z>=p&&C&&C.z<=P;){if(E.x>=x&&E.x<=M&&E.y>=y&&E.y<=_&&E!==s&&E!==c&&Ds(l,d,h,m,f,v,E.x,E.y)&&Xt(E.prev,E,E.next)>=0||(E=E.prevZ,C.x>=x&&C.x<=M&&C.y>=y&&C.y<=_&&C!==s&&C!==c&&Ds(l,d,h,m,f,v,C.x,C.y)&&Xt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;E&&E.z>=p;){if(E.x>=x&&E.x<=M&&E.y>=y&&E.y<=_&&E!==s&&E!==c&&Ds(l,d,h,m,f,v,E.x,E.y)&&Xt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;C&&C.z<=P;){if(C.x>=x&&C.x<=M&&C.y>=y&&C.y<=_&&C!==s&&C!==c&&Ds(l,d,h,m,f,v,C.x,C.y)&&Xt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function sC(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!yl(s,a)&&Km(s,n,n.next,a)&&wo(s,a)&&wo(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Co(n),Co(n.next),n=i=a),n=n.next}while(n!==i);return Vr(n)}function oC(i,e,t,n,s,a){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&mC(c,l)){let h=Jm(c,l);c=Vr(c,c.next),h=Vr(h,h.next),Ao(c,e,t,n,s,a,0),Ao(h,e,t,n,s,a,0);return}l=l.next}c=c.next}while(c!==i)}function aC(i,e,t,n){const s=[];let a,c,l,h,f;for(a=0,c=e.length;a<c;a++)l=e[a]*n,h=a<c-1?e[a+1]*n:i.length,f=Zm(i,l,h,n,!1),f===f.next&&(f.steiner=!0),s.push(pC(f));for(s.sort(lC),a=0;a<s.length;a++)t=cC(s[a],t);return t}function lC(i,e){return i.x-e.x}function cC(i,e){const t=uC(i,e);if(!t)return e;const n=Jm(t,i);return Vr(n,n.next),Vr(t,t.next)}function uC(i,e){let t=e,n=-1/0,s;const a=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>n&&(n=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,h=s.x,f=s.y;let d=1/0,m;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&Ds(c<f?a:n,c,h,f,c<f?n:a,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(a-t.x),wo(t,i)&&(m<d||m===d&&(t.x>s.x||t.x===s.x&&hC(s,t)))&&(s=t,d=m)),t=t.next;while(t!==l);return s}function hC(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function fC(i,e,t,n){let s=i;do s.z===0&&(s.z=Iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dC(s)}function dC(i){let e,t,n,s,a,c,l,h,f=1;do{for(t=i,i=null,a=null,c=0;t;){for(c++,n=t,l=0,e=0;e<f&&(l++,n=n.nextZ,!!n);e++);for(h=f;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,l--):(s=n,n=n.nextZ,h--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(c>1);return i}function Iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pC(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ds(i,e,t,n,s,a,c,l){return(s-c)*(e-l)>=(i-c)*(a-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(a-l)>=(s-c)*(n-l)}function mC(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gC(i,e)&&(wo(i,e)&&wo(e,i)&&_C(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||yl(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yl(i,e){return i.x===e.x&&i.y===e.y}function Km(i,e,t,n){const s=qa(Xt(i,e,t)),a=qa(Xt(i,e,n)),c=qa(Xt(t,n,i)),l=qa(Xt(t,n,e));return!!(s!==a&&c!==l||s===0&&Ya(i,t,e)||a===0&&Ya(i,n,e)||c===0&&Ya(t,i,n)||l===0&&Ya(t,e,n))}function Ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qa(i){return i>0?1:i<0?-1:0}function gC(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Km(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wo(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function _C(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jm(i,e){const t=new Du(i.i,i.x,i.y),n=new Du(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function qp(i,e,t,n){const s=new Du(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Du(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vC(i,e,t,n){let s=0;for(let a=e,c=t-n;a<t;a+=n)s+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return s}class Os{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Os.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];$p(e),Zp(n,e);let c=e.length;t.forEach($p);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,Zp(n,t[h]);const l=nC.triangulate(n,s);for(let h=0;h<l.length;h+=3)a.push(l.slice(h,h+3));return a}}function $p(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ju extends bi{constructor(e=new tl([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let l=0,h=e.length;l<h;l++){const f=e[l];c(f)}this.setAttribute("position",new Tn(s,3)),this.setAttribute("uv",new Tn(a,2)),this.computeVertexNormals();function c(l){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:x-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,P=t.UVGenerator!==void 0?t.UVGenerator:xC;let E,C=!1,z,F,R,X;p&&(E=p.getSpacedPoints(d),C=!0,v=!1,z=p.computeFrenetFrames(d,!1),F=new V,R=new V,X=new V),v||(_=0,x=0,y=0,M=0);const le=l.extractPoints(f);let T=le.shape;const D=le.holes;if(!Os.isClockWise(T)){T=T.reverse();for(let O=0,Ae=D.length;O<Ae;O++){const re=D[O];Os.isClockWise(re)&&(D[O]=re.reverse())}}const pe=Os.triangulateShape(T,D),B=T;for(let O=0,Ae=D.length;O<Ae;O++){const re=D[O];T=T.concat(re)}function K(O,Ae,re){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(Ae,re)}const J=T.length,ce=pe.length;function ie(O,Ae,re){let Me,de,Pe;const Ue=O.x-Ae.x,ke=O.y-Ae.y,ot=re.x-O.x,I=re.y-O.y,b=Ue*Ue+ke*ke,te=Ue*I-ke*ot;if(Math.abs(te)>Number.EPSILON){const se=Math.sqrt(b),ye=Math.sqrt(ot*ot+I*I),ge=Ae.x-ke/se,je=Ae.y+Ue/se,Ze=re.x-I/ye,we=re.y+ot/ye,Re=((Ze-ge)*I-(we-je)*ot)/(Ue*I-ke*ot);Me=ge+Ue*Re-O.x,de=je+ke*Re-O.y;const et=Me*Me+de*de;if(et<=2)return new Ce(Me,de);Pe=Math.sqrt(et/2)}else{let se=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(se=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(se=!0):Math.sign(ke)===Math.sign(I)&&(se=!0),se?(Me=-ke,de=Ue,Pe=Math.sqrt(b)):(Me=Ue,de=ke,Pe=Math.sqrt(b/2))}return new Ce(Me/Pe,de/Pe)}const ue=[];for(let O=0,Ae=B.length,re=Ae-1,Me=O+1;O<Ae;O++,re++,Me++)re===Ae&&(re=0),Me===Ae&&(Me=0),ue[O]=ie(B[O],B[re],B[Me]);const me=[];let xe,Fe=ue.concat();for(let O=0,Ae=D.length;O<Ae;O++){const re=D[O];xe=[];for(let Me=0,de=re.length,Pe=de-1,Ue=Me+1;Me<de;Me++,Pe++,Ue++)Pe===de&&(Pe=0),Ue===de&&(Ue=0),xe[Me]=ie(re[Me],re[Pe],re[Ue]);me.push(xe),Fe=Fe.concat(xe)}for(let O=0;O<_;O++){const Ae=O/_,re=x*Math.cos(Ae*Math.PI/2),Me=y*Math.sin(Ae*Math.PI/2)+M;for(let de=0,Pe=B.length;de<Pe;de++){const Ue=K(B[de],ue[de],Me);Je(Ue.x,Ue.y,-re)}for(let de=0,Pe=D.length;de<Pe;de++){const Ue=D[de];xe=me[de];for(let ke=0,ot=Ue.length;ke<ot;ke++){const I=K(Ue[ke],xe[ke],Me);Je(I.x,I.y,-re)}}}const st=y+M;for(let O=0;O<J;O++){const Ae=v?K(T[O],Fe[O],st):T[O];C?(R.copy(z.normals[0]).multiplyScalar(Ae.x),F.copy(z.binormals[0]).multiplyScalar(Ae.y),X.copy(E[0]).add(R).add(F),Je(X.x,X.y,X.z)):Je(Ae.x,Ae.y,0)}for(let O=1;O<=d;O++)for(let Ae=0;Ae<J;Ae++){const re=v?K(T[Ae],Fe[Ae],st):T[Ae];C?(R.copy(z.normals[O]).multiplyScalar(re.x),F.copy(z.binormals[O]).multiplyScalar(re.y),X.copy(E[O]).add(R).add(F),Je(X.x,X.y,X.z)):Je(re.x,re.y,m/d*O)}for(let O=_-1;O>=0;O--){const Ae=O/_,re=x*Math.cos(Ae*Math.PI/2),Me=y*Math.sin(Ae*Math.PI/2)+M;for(let de=0,Pe=B.length;de<Pe;de++){const Ue=K(B[de],ue[de],Me);Je(Ue.x,Ue.y,m+re)}for(let de=0,Pe=D.length;de<Pe;de++){const Ue=D[de];xe=me[de];for(let ke=0,ot=Ue.length;ke<ot;ke++){const I=K(Ue[ke],xe[ke],Me);C?Je(I.x,I.y+E[d-1].y,E[d-1].x+re):Je(I.x,I.y,m+re)}}}ne(),ve();function ne(){const O=s.length/3;if(v){let Ae=0,re=J*Ae;for(let Me=0;Me<ce;Me++){const de=pe[Me];He(de[2]+re,de[1]+re,de[0]+re)}Ae=d+_*2,re=J*Ae;for(let Me=0;Me<ce;Me++){const de=pe[Me];He(de[0]+re,de[1]+re,de[2]+re)}}else{for(let Ae=0;Ae<ce;Ae++){const re=pe[Ae];He(re[2],re[1],re[0])}for(let Ae=0;Ae<ce;Ae++){const re=pe[Ae];He(re[0]+J*d,re[1]+J*d,re[2]+J*d)}}n.addGroup(O,s.length/3-O,0)}function ve(){const O=s.length/3;let Ae=0;De(B,Ae),Ae+=B.length;for(let re=0,Me=D.length;re<Me;re++){const de=D[re];De(de,Ae),Ae+=de.length}n.addGroup(O,s.length/3-O,1)}function De(O,Ae){let re=O.length;for(;--re>=0;){const Me=re;let de=re-1;de<0&&(de=O.length-1);for(let Pe=0,Ue=d+_*2;Pe<Ue;Pe++){const ke=J*Pe,ot=J*(Pe+1),I=Ae+Me+ke,b=Ae+de+ke,te=Ae+de+ot,se=Ae+Me+ot;Oe(I,b,te,se)}}}function Je(O,Ae,re){h.push(O),h.push(Ae),h.push(re)}function He(O,Ae,re){at(O),at(Ae),at(re);const Me=s.length/3,de=P.generateTopUV(n,s,Me-3,Me-2,Me-1);Xe(de[0]),Xe(de[1]),Xe(de[2])}function Oe(O,Ae,re,Me){at(O),at(Ae),at(Me),at(Ae),at(re),at(Me);const de=s.length/3,Pe=P.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);Xe(Pe[0]),Xe(Pe[1]),Xe(Pe[3]),Xe(Pe[1]),Xe(Pe[2]),Xe(Pe[3])}function at(O){s.push(h[O*3+0]),s.push(h[O*3+1]),s.push(h[O*3+2])}function Xe(O){a.push(O.x),a.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yC(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,c=e.shapes.length;a<c;a++){const l=t[e.shapes[a]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lu[s.type]().fromJSON(s)),new Ju(n,e.options)}}const xC={generateTopUV:function(i,e,t,n,s){const a=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],f=e[s*3],d=e[s*3+1];return[new Ce(a,c),new Ce(l,h),new Ce(f,d)]},generateSideWallUV:function(i,e,t,n,s,a){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],f=e[n*3],d=e[n*3+1],m=e[n*3+2],v=e[s*3],x=e[s*3+1],y=e[s*3+2],M=e[a*3],_=e[a*3+1],p=e[a*3+2];return Math.abs(l-d)<Math.abs(c-f)?[new Ce(c,1-h),new Ce(f,1-m),new Ce(v,1-y),new Ce(M,1-p)]:[new Ce(l,1-h),new Ce(d,1-m),new Ce(x,1-y),new Ce(_,1-p)]}};function yC(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ju extends bi{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let f=0;const d=[],m=new V,v=new V,x=[],y=[],M=[],_=[];for(let p=0;p<=n;p++){const P=[],E=p/n;let C=0;p===0&&c===0?C=.5/t:p===n&&h===Math.PI&&(C=-.5/t);for(let z=0;z<=t;z++){const F=z/t;m.x=-e*Math.cos(s+F*a)*Math.sin(c+E*l),m.y=e*Math.cos(c+E*l),m.z=e*Math.sin(s+F*a)*Math.sin(c+E*l),y.push(m.x,m.y,m.z),v.copy(m).normalize(),M.push(v.x,v.y,v.z),_.push(F+C,1-E),P.push(f++)}d.push(P)}for(let p=0;p<n;p++)for(let P=0;P<t;P++){const E=d[p][P+1],C=d[p][P],z=d[p+1][P],F=d[p+1][P+1];(p!==0||c>0)&&x.push(E,C,F),(p!==n-1||h<Math.PI)&&x.push(C,z,F)}this.setIndex(x),this.setAttribute("position",new Tn(y,3)),this.setAttribute("normal",new Tn(M,3)),this.setAttribute("uv",new Tn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Kp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class SC{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,l),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,m){return f.push(d,m),this},this.removeHandler=function(d){const m=f.indexOf(d);return m!==-1&&f.splice(m,2),this},this.getHandler=function(d){for(let m=0,v=f.length;m<v;m+=2){const x=f[m],y=f[m+1];if(x.global&&(x.lastIndex=0),x.test(d))return y}return null}}}const EC=new SC;class Qu{constructor(e){this.manager=e!==void 0?e:EC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class MC extends Error{constructor(e,t){super(e),this.response=t}}class bC extends Qu{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Kp.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=Hi[e],m=f.body.getReader(),v=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),x=v?parseInt(v):0,y=x!==0;let M=0;const _=new ReadableStream({start(p){P();function P(){m.read().then(({done:E,value:C})=>{if(E)p.close();else{M+=C.byteLength;const z=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:x});for(let F=0,R=d.length;F<R;F++){const X=d[F];X.onProgress&&X.onProgress(z)}p.enqueue(C),P()}})}}});return new Response(_)}else throw new MC(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return f.json();default:if(l===void 0)return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),v=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(v);return f.arrayBuffer().then(y=>x.decode(y))}}}).then(f=>{Kp.add(e,f);const d=Hi[e];delete Hi[e];for(let m=0,v=d.length;m<v;m++){const x=d[m];x.onLoad&&x.onLoad(f)}}).catch(f=>{const d=Hi[e];if(d===void 0)throw this.manager.itemError(e),f;delete Hi[e];for(let m=0,v=d.length;m<v;m++){const x=d[m];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TC{constructor(){this.type="ShapePath",this.color=new Et,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,c){return this.currentPath.bezierCurveTo(e,t,n,s,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const P=[];for(let E=0,C=p.length;E<C;E++){const z=p[E],F=new tl;F.curves=z.curves,P.push(F)}return P}function n(p,P){const E=P.length;let C=!1;for(let z=E-1,F=0;F<E;z=F++){let R=P[z],X=P[F],le=X.x-R.x,T=X.y-R.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(R=P[F],le=-le,X=P[z],T=-T),p.y<R.y||p.y>X.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const D=T*(p.x-R.x)-le*(p.y-R.y);if(D===0)return!0;if(D<0)continue;C=!C}}else{if(p.y!==R.y)continue;if(X.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=X.x)return!0}}return C}const s=Os.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,l,h;const f=[];if(a.length===1)return l=a[0],h=new tl,h.curves=l.curves,f.push(h),f;let d=!s(a[0].getPoints());d=e?!d:d;const m=[],v=[];let x=[],y=0,M;v[y]=void 0,x[y]=[];for(let p=0,P=a.length;p<P;p++)l=a[p],M=l.getPoints(),c=s(M),c=e?!c:c,c?(!d&&v[y]&&y++,v[y]={s:new tl,p:M},v[y].s.curves=l.curves,d&&y++,x[y]=[]):x[y].push({h:l,p:M[0]});if(!v[0])return t(a);if(v.length>1){let p=!1,P=0;for(let E=0,C=v.length;E<C;E++)m[E]=[];for(let E=0,C=v.length;E<C;E++){const z=x[E];for(let F=0;F<z.length;F++){const R=z[F];let X=!0;for(let le=0;le<v.length;le++)n(R.p,v[le].p)&&(E!==le&&P++,X?(X=!1,m[le].push(R)):p=!0);X&&m[E].push(R)}}P>0&&p===!1&&(x=m)}let _;for(let p=0,P=v.length;p<P;p++){h=v[p].s,f.push(h),_=x[p];for(let E=0,C=_.length;E<C;E++)h.holes.push(_[E].h)}return f}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);var Uu=function(i,e){return Uu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Uu(i,e)};function Vs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Uu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Nu(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ou(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,a=[],c;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)a.push(s.value)}catch(l){c={error:l}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return a}function Fu(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}function di(i){return typeof i=="function"}function jm(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var mu=jm(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,s){return s+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Bu(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var Sl=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,s,a;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var l=Nu(c),h=l.next();!h.done;h=l.next()){var f=h.value;f.remove(this)}}catch(M){e={error:M}}finally{try{h&&!h.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}else c.remove(this);var d=this.initialTeardown;if(di(d))try{d()}catch(M){a=M instanceof mu?M.errors:[M]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var v=Nu(m),x=v.next();!x.done;x=v.next()){var y=x.value;try{jp(y)}catch(M){a=a??[],M instanceof mu?a=Fu(Fu([],Ou(a)),Ou(M.errors)):a.push(M)}}}catch(M){n={error:M}}finally{try{x&&!x.done&&(s=v.return)&&s.call(v)}finally{if(n)throw n.error}}}if(a)throw new mu(a)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)jp(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Bu(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&Bu(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),Qm=Sl.EMPTY;function eg(i){return i instanceof Sl||i&&"closed"in i&&di(i.remove)&&di(i.add)&&di(i.unsubscribe)}function jp(i){di(i)?i():i.unsubscribe()}var tg={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ng={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,Fu([i,e],Ou(t)))},clearTimeout:function(i){var e=ng.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(i)},delegate:void 0};function AC(i){ng.setTimeout(function(){throw i})}function Qp(){}function nl(i){i()}var eh=function(i){Vs(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,eg(t)&&t.add(n)):n.destination=LC,n}return e.create=function(t,n,s){return new zu(t,n,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Sl),wC=Function.prototype.bind;function gu(i,e){return wC.call(i,e)}var CC=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){$a(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){$a(n)}else $a(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){$a(t)}},i}(),zu=function(i){Vs(e,i);function e(t,n,s){var a=i.call(this)||this,c;if(di(t)||!t)c={next:t??void 0,error:n??void 0,complete:s??void 0};else{var l;a&&tg.useDeprecatedNextContext?(l=Object.create(t),l.unsubscribe=function(){return a.unsubscribe()},c={next:t.next&&gu(t.next,l),error:t.error&&gu(t.error,l),complete:t.complete&&gu(t.complete,l)}):c=t}return a.destination=new CC(c),a}return e}(eh);function $a(i){AC(i)}function RC(i){throw i}var LC={closed:!0,next:Qp,error:RC,complete:Qp},PC=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function th(i){return i}function IC(i){return i.length===0?th:i.length===1?i[0]:function(t){return i.reduce(function(n,s){return s(n)},t)}}var em=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var s=this,a=UC(e)?e:new zu(e,t,n);return nl(function(){var c=s,l=c.operator,h=c.source;a.add(l?l.call(a,h):h?s._subscribe(a):s._trySubscribe(a))}),a},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=tm(t),new t(function(s,a){var c=new zu({next:function(l){try{e(l)}catch(h){a(h),c.unsubscribe()}},error:a,complete:s});n.subscribe(c)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[PC]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return IC(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=tm(e),new e(function(n,s){var a;t.subscribe(function(c){return a=c},function(c){return s(c)},function(){return n(a)})})},i.create=function(e){return new i(e)},i}();function tm(i){var e;return(e=i??tg.Promise)!==null&&e!==void 0?e:Promise}function DC(i){return i&&di(i.next)&&di(i.error)&&di(i.complete)}function UC(i){return i&&i instanceof eh||DC(i)&&eg(i)}function NC(i){return di(i==null?void 0:i.lift)}function El(i){return function(e){if(NC(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ml(i,e,t,n,s){return new OC(i,e,t,n,s)}var OC=function(i){Vs(e,i);function e(t,n,s,a,c,l){var h=i.call(this,t)||this;return h.onFinalize=c,h.shouldUnsubscribe=l,h._next=n?function(f){try{n(f)}catch(d){t.error(d)}}:i.prototype._next,h._error=a?function(f){try{a(f)}catch(d){t.error(d)}finally{this.unsubscribe()}}:i.prototype._error,h._complete=s?function(){try{s()}catch(f){t.error(f)}finally{this.unsubscribe()}}:i.prototype._complete,h}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(eh),FC=jm(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ig=function(i){Vs(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new nm(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new FC},e.prototype.next=function(t){var n=this;nl(function(){var s,a;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var c=Nu(n.currentObservers),l=c.next();!l.done;l=c.next()){var h=l.value;h.next(t)}}catch(f){s={error:f}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var n=this;nl(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var s=n.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;nl(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,s=this,a=s.hasError,c=s.isStopped,l=s.observers;return a||c?Qm:(this.currentObservers=null,l.push(t),new Sl(function(){n.currentObservers=null,Bu(l,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,s=n.hasError,a=n.thrownError,c=n.isStopped;s?t.error(a):c&&t.complete()},e.prototype.asObservable=function(){var t=new em;return t.source=this,t},e.create=function(t,n){return new nm(t,n)},e}(em),nm=function(i){Vs(e,i);function e(t,n){var s=i.call(this)||this;return s.destination=t,s.source=n,s}return e.prototype.next=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.next)===null||s===void 0||s.call(n,t)},e.prototype.error=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.error)===null||s===void 0||s.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,s;return(s=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&s!==void 0?s:Qm},e}(ig),Ws=function(i){Vs(e,i);function e(t){var n=i.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=i.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,s=t.thrownError,a=t._value;if(n)throw s;return this._throwIfClosed(),a},e.prototype.next=function(t){i.prototype.next.call(this,this._value=t)},e}(ig);function vi(i,e){return El(function(t,n){var s=0;t.subscribe(Ml(n,function(a){n.next(i.call(e,a,s++))}))})}function BC(i,e){return El(function(t,n){var s=0;t.subscribe(Ml(n,function(a){return i.call(e,a,s++)&&n.next(a)}))})}function xi(i,e){return e===void 0&&(e=th),i=i??zC,El(function(t,n){var s,a=!0;t.subscribe(Ml(n,function(c){var l=e(c);(a||!i(s,l))&&(a=!1,s=l,n.next(c))}))})}function zC(i,e){return i===e}function ki(i){return BC(function(e,t){return i<=t})}function GC(i,e,t){var n=di(i)||e||t?{next:i,error:e,complete:t}:i;return n?El(function(s,a){var c;(c=n.subscribe)===null||c===void 0||c.call(n);var l=!0;s.subscribe(Ml(a,function(h){var f;(f=n.next)===null||f===void 0||f.call(n,h),a.next(h)},function(){var h;l=!1,(h=n.complete)===null||h===void 0||h.call(n),a.complete()},function(h){var f;l=!1,(f=n.error)===null||f===void 0||f.call(n,h),a.error(h)},function(){var h,f;l&&((h=n.unsubscribe)===null||h===void 0||h.call(n)),(f=n.finalize)===null||f===void 0||f.call(n)}))}):th}const HC={items:[]},hl=new Ws(HC);function kC(i){const t={...hl.getValue(),items:i};hl.next(t)}const VC=new URL(window.location),im=new URLSearchParams(VC.search),WC={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefixOptions:["50pe","75pe","6s"],prefix:im.has("prefix")?im.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],atacs:[],items:[],groups:[]},Mt=new Ws(WC);function XC(i){const e=Mt.getValue(),t=Object.keys(i).map(s=>[s,i[s]]),n={...e,pallete:i,listPalette:t};Mt.next(n)}function YC(i){const t={...Mt.getValue(),genes:i};Mt.next(t)}function qC(i){const t={...Mt.getValue(),atacs:i};Mt.next(t)}const $C={scene:new G1},rg=new Ws($C),ZC={isLoading:!0,theme:"light"},fl=new Ws(ZC);function Qn(i,e=""){console.log(e);const n={...fl.getValue(),isLoading:i};fl.next(n)}const KC=new URL(window.location),rm=new URLSearchParams(KC.search),JC={selectedCelltypes:[],mode:rm.has("mode")?Number(rm.get("mode")):1,selectedSingleGene:"",selectedSingleAtac:"",selectedGenes:[],selectedAtacs:[],intervalsData:[],geneGenomeHover:!1,showing:"celltype",selectedGenesPrev:[]},We=new Ws(JC);function Ro(i){const t={...We.getValue(),selectedCelltypes:[...new Set(i)]};We.next(t)}function sg(i){const t={...We.getValue(),intervalsData:[...new Set(i)]};We.next(t)}function jC(i){const t={...We.getValue(),mode:i};We.next(t)}function Hs(i){i.includes(void 0)&&(i=[]);const e=We.getValue(),t=e.selectedGenes;if(t.length>0){const s=document.getElementById(t[0]);s&&(s.checked=!1)}const n={...e,selectedGenes:i,selectedGenesPrev:t};if(i.length>0){const s=document.getElementById(i[0]);s&&(s.checked=!0)}We.next(n)}function vr(i){i.includes(void 0)&&(i=[]),console.log(i);const e=We.getValue(),t=e.selectedAtacs;if(t.length>0){const a=document.getElementById(t[0]);console.log(a),a&&(a.checked=!1)}const n={...e,selectedAtacs:i},s=document.getElementById(i[0]);s&&(s.checked=!0),We.next(n)}const sm={type:"change"},_u={type:"start"},om={type:"end"},Za=new Rm,am=new ur,QC=Math.cos(70*TM.DEG2RAD);class og extends Wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Ze),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sm),n.update(),a=s.NONE},this.update=function(){const U=new V,fe=new kr().setFromUnitVectors(e.up,new V(0,1,0)),Ve=fe.clone().invert(),G=new V,be=new kr,q=new V,Ee=2*Math.PI;return function(gt=null){const wt=n.object.position;U.copy(wt).sub(n.target),U.applyQuaternion(fe),l.setFromVector3(U),n.autoRotate&&a===s.NONE&&Se(T(gt)),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let Lt=n.minAzimuthAngle,Ht=n.maxAzimuthAngle;isFinite(Lt)&&isFinite(Ht)&&(Lt<-Math.PI?Lt+=Ee:Lt>Math.PI&&(Lt-=Ee),Ht<-Math.PI?Ht+=Ee:Ht>Math.PI&&(Ht-=Ee),Lt<=Ht?l.theta=Math.max(Lt,Math.min(Ht,l.theta)):l.theta=l.theta>(Lt+Ht)/2?Math.max(Lt,l.theta):Math.min(Ht,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let At=!1;if(n.zoomToCursor&&F||n.object.isOrthographicCamera)l.radius=me(l.radius);else{const Pt=l.radius;l.radius=me(l.radius*f),At=Pt!=l.radius}if(U.setFromSpherical(l),U.applyQuaternion(Ve),wt.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&F){let Pt=null;if(n.object.isPerspectiveCamera){const rn=U.length();Pt=me(rn*f);const ei=rn-Pt;n.object.position.addScaledVector(C,ei),n.object.updateMatrixWorld(),At=!!ei}else if(n.object.isOrthographicCamera){const rn=new V(z.x,z.y,0);rn.unproject(n.object);const ei=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),At=ei!==n.object.zoom;const qr=new V(z.x,z.y,0);qr.unproject(n.object),n.object.position.sub(qr).add(rn),n.object.updateMatrixWorld(),Pt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):(Za.origin.copy(n.object.position),Za.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Za.direction))<QC?e.lookAt(n.target):(am.setFromNormalAndCoplanarPoint(n.object.up,n.target),Za.intersectPlane(am,n.target))))}else if(n.object.isOrthographicCamera){const Pt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),Pt!==n.object.zoom&&(n.object.updateProjectionMatrix(),At=!0)}return f=1,F=!1,At||G.distanceToSquared(n.object.position)>c||8*(1-be.dot(n.object.quaternion))>c||q.distanceToSquared(n.target)>c?(n.dispatchEvent(sm),G.copy(n.object.position),be.copy(n.object.quaternion),q.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",et),n.domElement.removeEventListener("pointerdown",ke),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",I),n.domElement.getRootNode().removeEventListener("keydown",ge,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ze),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const c=1e-6,l=new Jp,h=new Jp;let f=1;const d=new V,m=new Ce,v=new Ce,x=new Ce,y=new Ce,M=new Ce,_=new Ce,p=new Ce,P=new Ce,E=new Ce,C=new V,z=new Ce;let F=!1;const R=[],X={};let le=!1;function T(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function D(U){const fe=Math.abs(U*.01);return Math.pow(.95,n.zoomSpeed*fe)}function Se(U){h.theta-=U}function pe(U){h.phi-=U}const B=function(){const U=new V;return function(Ve,G){U.setFromMatrixColumn(G,0),U.multiplyScalar(-Ve),d.add(U)}}(),K=function(){const U=new V;return function(Ve,G){n.screenSpacePanning===!0?U.setFromMatrixColumn(G,1):(U.setFromMatrixColumn(G,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ve),d.add(U)}}(),J=function(){const U=new V;return function(Ve,G){const be=n.domElement;if(n.object.isPerspectiveCamera){const q=n.object.position;U.copy(q).sub(n.target);let Ee=U.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),B(2*Ve*Ee/be.clientHeight,n.object.matrix),K(2*G*Ee/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(Ve*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),K(G*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(U,fe){if(!n.zoomToCursor)return;F=!0;const Ve=n.domElement.getBoundingClientRect(),G=U-Ve.left,be=fe-Ve.top,q=Ve.width,Ee=Ve.height;z.x=G/q*2-1,z.y=-(be/Ee)*2+1,C.set(z.x,z.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function xe(U){m.set(U.clientX,U.clientY)}function Fe(U){ue(U.clientX,U.clientX),p.set(U.clientX,U.clientY)}function st(U){y.set(U.clientX,U.clientY)}function ne(U){v.set(U.clientX,U.clientY),x.subVectors(v,m).multiplyScalar(n.rotateSpeed);const fe=n.domElement;Se(2*Math.PI*x.x/fe.clientHeight),pe(2*Math.PI*x.y/fe.clientHeight),m.copy(v),n.update()}function ve(U){P.set(U.clientX,U.clientY),E.subVectors(P,p),E.y>0?ce(D(E.y)):E.y<0&&ie(D(E.y)),p.copy(P),n.update()}function De(U){M.set(U.clientX,U.clientY),_.subVectors(M,y).multiplyScalar(n.panSpeed),J(_.x,_.y),y.copy(M),n.update()}function Je(U){ue(U.clientX,U.clientY),U.deltaY<0?ie(D(U.deltaY)):U.deltaY>0&&ce(D(U.deltaY)),n.update()}function He(U){let fe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?pe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?pe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?Se(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?Se(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),fe=!0;break}fe&&(U.preventDefault(),n.update())}function Oe(U){if(R.length===1)m.set(U.pageX,U.pageY);else{const fe=ze(U),Ve=.5*(U.pageX+fe.x),G=.5*(U.pageY+fe.y);m.set(Ve,G)}}function at(U){if(R.length===1)y.set(U.pageX,U.pageY);else{const fe=ze(U),Ve=.5*(U.pageX+fe.x),G=.5*(U.pageY+fe.y);y.set(Ve,G)}}function Xe(U){const fe=ze(U),Ve=U.pageX-fe.x,G=U.pageY-fe.y,be=Math.sqrt(Ve*Ve+G*G);p.set(0,be)}function O(U){n.enableZoom&&Xe(U),n.enablePan&&at(U)}function Ae(U){n.enableZoom&&Xe(U),n.enableRotate&&Oe(U)}function re(U){if(R.length==1)v.set(U.pageX,U.pageY);else{const Ve=ze(U),G=.5*(U.pageX+Ve.x),be=.5*(U.pageY+Ve.y);v.set(G,be)}x.subVectors(v,m).multiplyScalar(n.rotateSpeed);const fe=n.domElement;Se(2*Math.PI*x.x/fe.clientHeight),pe(2*Math.PI*x.y/fe.clientHeight),m.copy(v)}function Me(U){if(R.length===1)M.set(U.pageX,U.pageY);else{const fe=ze(U),Ve=.5*(U.pageX+fe.x),G=.5*(U.pageY+fe.y);M.set(Ve,G)}_.subVectors(M,y).multiplyScalar(n.panSpeed),J(_.x,_.y),y.copy(M)}function de(U){const fe=ze(U),Ve=U.pageX-fe.x,G=U.pageY-fe.y,be=Math.sqrt(Ve*Ve+G*G);P.set(0,be),E.set(0,Math.pow(P.y/p.y,n.zoomSpeed)),ce(E.y),p.copy(P);const q=(U.pageX+fe.x)*.5,Ee=(U.pageY+fe.y)*.5;ue(q,Ee)}function Pe(U){n.enableZoom&&de(U),n.enablePan&&Me(U)}function Ue(U){n.enableZoom&&de(U),n.enableRotate&&re(U)}function ke(U){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",I)),!ut(U)&&(Te(U),U.pointerType==="touch"?we(U):b(U)))}function ot(U){n.enabled!==!1&&(U.pointerType==="touch"?Re(U):te(U))}function I(U){switch(Ot(U),R.length){case 0:n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",I),n.dispatchEvent(om),a=s.NONE;break;case 1:const fe=R[0],Ve=X[fe];we({pointerId:fe,pageX:Ve.x,pageY:Ve.y});break}}function b(U){let fe;switch(U.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Wi.DOLLY:if(n.enableZoom===!1)return;Fe(U),a=s.DOLLY;break;case Wi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;st(U),a=s.PAN}else{if(n.enableRotate===!1)return;xe(U),a=s.ROTATE}break;case Wi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;xe(U),a=s.ROTATE}else{if(n.enablePan===!1)return;st(U),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(_u)}function te(U){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;ne(U);break;case s.DOLLY:if(n.enableZoom===!1)return;ve(U);break;case s.PAN:if(n.enablePan===!1)return;De(U);break}}function se(U){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(U.preventDefault(),n.dispatchEvent(_u),Je(ye(U)),n.dispatchEvent(om))}function ye(U){const fe=U.deltaMode,Ve={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(fe){case 1:Ve.deltaY*=16;break;case 2:Ve.deltaY*=100;break}return U.ctrlKey&&!le&&(Ve.deltaY*=10),Ve}function ge(U){U.key==="Control"&&(le=!0,n.domElement.getRootNode().addEventListener("keyup",je,{passive:!0,capture:!0}))}function je(U){U.key==="Control"&&(le=!1,n.domElement.getRootNode().removeEventListener("keyup",je,{passive:!0,capture:!0}))}function Ze(U){n.enabled===!1||n.enablePan===!1||He(U)}function we(U){switch(Ke(U),R.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;Oe(U),a=s.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;at(U),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(U),a=s.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(U),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(_u)}function Re(U){switch(Ke(U),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;re(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Me(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(U),n.update();break;default:a=s.NONE}}function et(U){n.enabled!==!1&&U.preventDefault()}function Te(U){R.push(U.pointerId)}function Ot(U){delete X[U.pointerId];for(let fe=0;fe<R.length;fe++)if(R[fe]==U.pointerId){R.splice(fe,1);return}}function ut(U){for(let fe=0;fe<R.length;fe++)if(R[fe]==U.pointerId)return!0;return!1}function Ke(U){let fe=X[U.pointerId];fe===void 0&&(fe=new Ce,X[U.pointerId]=fe),fe.set(U.pageX,U.pageY)}function ze(U){const fe=U.pointerId===R[0]?R[1]:R[0];return X[fe]}n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",ke),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */dl.exports;(function(i,e){(function(){var t,n="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",m=1,v=2,x=4,y=1,M=2,_=1,p=2,P=4,E=8,C=16,z=32,F=64,R=128,X=256,le=512,T=30,D="...",Se=800,pe=16,B=1,K=2,J=3,ce=1/0,ie=9007199254740991,ue=17976931348623157e292,me=NaN,xe=4294967295,Fe=xe-1,st=xe>>>1,ne=[["ary",R],["bind",_],["bindKey",p],["curry",E],["curryRight",C],["flip",le],["partial",z],["partialRight",F],["rearg",X]],ve="[object Arguments]",De="[object Array]",Je="[object AsyncFunction]",He="[object Boolean]",Oe="[object Date]",at="[object DOMException]",Xe="[object Error]",O="[object Function]",Ae="[object GeneratorFunction]",re="[object Map]",Me="[object Number]",de="[object Null]",Pe="[object Object]",Ue="[object Promise]",ke="[object Proxy]",ot="[object RegExp]",I="[object Set]",b="[object String]",te="[object Symbol]",se="[object Undefined]",ye="[object WeakMap]",ge="[object WeakSet]",je="[object ArrayBuffer]",Ze="[object DataView]",we="[object Float32Array]",Re="[object Float64Array]",et="[object Int8Array]",Te="[object Int16Array]",Ot="[object Int32Array]",ut="[object Uint8Array]",Ke="[object Uint8ClampedArray]",ze="[object Uint16Array]",Ye="[object Uint32Array]",U=/\b__p \+= '';/g,fe=/\b(__p \+=) '' \+/g,Ve=/(__e\(.*?\)|\b__t\)) \+\n'';/g,G=/&(?:amp|lt|gt|quot|#39);/g,be=/[&<>"']/g,q=RegExp(G.source),Ee=RegExp(be.source),Ne=/<%-([\s\S]+?)%>/g,gt=/<%([\s\S]+?)%>/g,wt=/<%=([\s\S]+?)%>/g,Lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ht=/^\w*$/,At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,rn=RegExp(Pt.source),ei=/^\s+/,qr=/\s/,$r=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Io=/\{\n\/\* \[wrapped with (.+)\] \*/,Zr=/,? & /,Do=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Uo=/[()=,{}\[\]\/\s]/,Tl=/\\(\\)?/g,Al=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,No=/\w*$/,L=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,j=/^\[object .+?Constructor\]$/,ee=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,Be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qe=/($^)/,tt=/['\n\r\u2028\u2029\\]/g,nt="\\ud800-\\udfff",pt="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",kt=pt+lt+ht,fn="\\u2700-\\u27bf",$t="a-z\\xdf-\\xf6\\xf8-\\xff",ti="\\xac\\xb1\\xd7\\xf7",Bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",Ys=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ut="A-Z\\xc0-\\xd6\\xd8-\\xde",pi="\\ufe0e\\ufe0f",qs=ti+Bt+dt+Ys,Ai="['’]",$s="["+nt+"]",jt="["+qs+"]",Vn="["+kt+"]",Kr="\\d+",An="["+fn+"]",Jr="["+$t+"]",Oo="[^"+nt+qs+Kr+fn+$t+Ut+"]",jr="\\ud83c[\\udffb-\\udfff]",fg="(?:"+Vn+"|"+jr+")",ih="[^"+nt+"]",wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Cl="[\\ud800-\\udbff][\\udc00-\\udfff]",Qr="["+Ut+"]",rh="\\u200d",sh="(?:"+Jr+"|"+Oo+")",dg="(?:"+Qr+"|"+Oo+")",oh="(?:"+Ai+"(?:d|ll|m|re|s|t|ve))?",ah="(?:"+Ai+"(?:D|LL|M|RE|S|T|VE))?",lh=fg+"?",ch="["+pi+"]?",pg="(?:"+rh+"(?:"+[ih,wl,Cl].join("|")+")"+ch+lh+")*",mg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",uh=ch+lh+pg,_g="(?:"+[An,wl,Cl].join("|")+")"+uh,vg="(?:"+[ih+Vn+"?",Vn,wl,Cl,$s].join("|")+")",xg=RegExp(Ai,"g"),yg=RegExp(Vn,"g"),Rl=RegExp(jr+"(?="+jr+")|"+vg+uh,"g"),Sg=RegExp([Qr+"?"+Jr+"+"+oh+"(?="+[jt,Qr,"$"].join("|")+")",dg+"+"+ah+"(?="+[jt,Qr+sh,"$"].join("|")+")",Qr+"?"+sh+"+"+oh,Qr+"+"+ah,gg,mg,Kr,_g].join("|"),"g"),Eg=RegExp("["+rh+nt+kt+pi+"]"),Mg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,bg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Tg=-1,zt={};zt[we]=zt[Re]=zt[et]=zt[Te]=zt[Ot]=zt[ut]=zt[Ke]=zt[ze]=zt[Ye]=!0,zt[ve]=zt[De]=zt[je]=zt[He]=zt[Ze]=zt[Oe]=zt[Xe]=zt[O]=zt[re]=zt[Me]=zt[Pe]=zt[ot]=zt[I]=zt[b]=zt[ye]=!1;var Ft={};Ft[ve]=Ft[De]=Ft[je]=Ft[Ze]=Ft[He]=Ft[Oe]=Ft[we]=Ft[Re]=Ft[et]=Ft[Te]=Ft[Ot]=Ft[re]=Ft[Me]=Ft[Pe]=Ft[ot]=Ft[I]=Ft[b]=Ft[te]=Ft[ut]=Ft[Ke]=Ft[ze]=Ft[Ye]=!0,Ft[Xe]=Ft[O]=Ft[ye]=!1;var Ag={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},wg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Lg=parseFloat,Pg=parseInt,hh=typeof vo=="object"&&vo&&vo.Object===Object&&vo,Ig=typeof self=="object"&&self&&self.Object===Object&&self,ln=hh||Ig||Function("return this")(),Ll=e&&!e.nodeType&&e,yr=Ll&&!0&&i&&!i.nodeType&&i,fh=yr&&yr.exports===Ll,Pl=fh&&hh.process,Wn=function(){try{var k=yr&&yr.require&&yr.require("util").types;return k||Pl&&Pl.binding&&Pl.binding("util")}catch{}}(),dh=Wn&&Wn.isArrayBuffer,ph=Wn&&Wn.isDate,mh=Wn&&Wn.isMap,gh=Wn&&Wn.isRegExp,_h=Wn&&Wn.isSet,vh=Wn&&Wn.isTypedArray;function Dn(k,oe,Q){switch(Q.length){case 0:return k.call(oe);case 1:return k.call(oe,Q[0]);case 2:return k.call(oe,Q[0],Q[1]);case 3:return k.call(oe,Q[0],Q[1],Q[2])}return k.apply(oe,Q)}function Dg(k,oe,Q,Ge){for(var ct=-1,Ct=k==null?0:k.length;++ct<Ct;){var Qt=k[ct];oe(Ge,Qt,Q(Qt),k)}return Ge}function Xn(k,oe){for(var Q=-1,Ge=k==null?0:k.length;++Q<Ge&&oe(k[Q],Q,k)!==!1;);return k}function Ug(k,oe){for(var Q=k==null?0:k.length;Q--&&oe(k[Q],Q,k)!==!1;);return k}function xh(k,oe){for(var Q=-1,Ge=k==null?0:k.length;++Q<Ge;)if(!oe(k[Q],Q,k))return!1;return!0}function $i(k,oe){for(var Q=-1,Ge=k==null?0:k.length,ct=0,Ct=[];++Q<Ge;){var Qt=k[Q];oe(Qt,Q,k)&&(Ct[ct++]=Qt)}return Ct}function Fo(k,oe){var Q=k==null?0:k.length;return!!Q&&es(k,oe,0)>-1}function Il(k,oe,Q){for(var Ge=-1,ct=k==null?0:k.length;++Ge<ct;)if(Q(oe,k[Ge]))return!0;return!1}function Vt(k,oe){for(var Q=-1,Ge=k==null?0:k.length,ct=Array(Ge);++Q<Ge;)ct[Q]=oe(k[Q],Q,k);return ct}function Zi(k,oe){for(var Q=-1,Ge=oe.length,ct=k.length;++Q<Ge;)k[ct+Q]=oe[Q];return k}function Dl(k,oe,Q,Ge){var ct=-1,Ct=k==null?0:k.length;for(Ge&&Ct&&(Q=k[++ct]);++ct<Ct;)Q=oe(Q,k[ct],ct,k);return Q}function Ng(k,oe,Q,Ge){var ct=k==null?0:k.length;for(Ge&&ct&&(Q=k[--ct]);ct--;)Q=oe(Q,k[ct],ct,k);return Q}function Ul(k,oe){for(var Q=-1,Ge=k==null?0:k.length;++Q<Ge;)if(oe(k[Q],Q,k))return!0;return!1}var Og=Nl("length");function Fg(k){return k.split("")}function Bg(k){return k.match(Do)||[]}function yh(k,oe,Q){var Ge;return Q(k,function(ct,Ct,Qt){if(oe(ct,Ct,Qt))return Ge=Ct,!1}),Ge}function Bo(k,oe,Q,Ge){for(var ct=k.length,Ct=Q+(Ge?1:-1);Ge?Ct--:++Ct<ct;)if(oe(k[Ct],Ct,k))return Ct;return-1}function es(k,oe,Q){return oe===oe?Kg(k,oe,Q):Bo(k,Sh,Q)}function zg(k,oe,Q,Ge){for(var ct=Q-1,Ct=k.length;++ct<Ct;)if(Ge(k[ct],oe))return ct;return-1}function Sh(k){return k!==k}function Eh(k,oe){var Q=k==null?0:k.length;return Q?Fl(k,oe)/Q:me}function Nl(k){return function(oe){return oe==null?t:oe[k]}}function Ol(k){return function(oe){return k==null?t:k[oe]}}function Mh(k,oe,Q,Ge,ct){return ct(k,function(Ct,Qt,Nt){Q=Ge?(Ge=!1,Ct):oe(Q,Ct,Qt,Nt)}),Q}function Gg(k,oe){var Q=k.length;for(k.sort(oe);Q--;)k[Q]=k[Q].value;return k}function Fl(k,oe){for(var Q,Ge=-1,ct=k.length;++Ge<ct;){var Ct=oe(k[Ge]);Ct!==t&&(Q=Q===t?Ct:Q+Ct)}return Q}function Bl(k,oe){for(var Q=-1,Ge=Array(k);++Q<k;)Ge[Q]=oe(Q);return Ge}function Hg(k,oe){return Vt(oe,function(Q){return[Q,k[Q]]})}function bh(k){return k&&k.slice(0,Ch(k)+1).replace(ei,"")}function Un(k){return function(oe){return k(oe)}}function zl(k,oe){return Vt(oe,function(Q){return k[Q]})}function Zs(k,oe){return k.has(oe)}function Th(k,oe){for(var Q=-1,Ge=k.length;++Q<Ge&&es(oe,k[Q],0)>-1;);return Q}function Ah(k,oe){for(var Q=k.length;Q--&&es(oe,k[Q],0)>-1;);return Q}function kg(k,oe){for(var Q=k.length,Ge=0;Q--;)k[Q]===oe&&++Ge;return Ge}var Vg=Ol(Ag),Wg=Ol(wg);function Xg(k){return"\\"+Rg[k]}function Yg(k,oe){return k==null?t:k[oe]}function ts(k){return Eg.test(k)}function qg(k){return Mg.test(k)}function $g(k){for(var oe,Q=[];!(oe=k.next()).done;)Q.push(oe.value);return Q}function Gl(k){var oe=-1,Q=Array(k.size);return k.forEach(function(Ge,ct){Q[++oe]=[ct,Ge]}),Q}function wh(k,oe){return function(Q){return k(oe(Q))}}function Ki(k,oe){for(var Q=-1,Ge=k.length,ct=0,Ct=[];++Q<Ge;){var Qt=k[Q];(Qt===oe||Qt===d)&&(k[Q]=d,Ct[ct++]=Q)}return Ct}function zo(k){var oe=-1,Q=Array(k.size);return k.forEach(function(Ge){Q[++oe]=Ge}),Q}function Zg(k){var oe=-1,Q=Array(k.size);return k.forEach(function(Ge){Q[++oe]=[Ge,Ge]}),Q}function Kg(k,oe,Q){for(var Ge=Q-1,ct=k.length;++Ge<ct;)if(k[Ge]===oe)return Ge;return-1}function Jg(k,oe,Q){for(var Ge=Q+1;Ge--;)if(k[Ge]===oe)return Ge;return Ge}function ns(k){return ts(k)?Qg(k):Og(k)}function ni(k){return ts(k)?e_(k):Fg(k)}function Ch(k){for(var oe=k.length;oe--&&qr.test(k.charAt(oe)););return oe}var jg=Ol(Cg);function Qg(k){for(var oe=Rl.lastIndex=0;Rl.test(k);)++oe;return oe}function e_(k){return k.match(Rl)||[]}function t_(k){return k.match(Sg)||[]}var n_=function k(oe){oe=oe==null?ln:is.defaults(ln.Object(),oe,is.pick(ln,bg));var Q=oe.Array,Ge=oe.Date,ct=oe.Error,Ct=oe.Function,Qt=oe.Math,Nt=oe.Object,Hl=oe.RegExp,i_=oe.String,Yn=oe.TypeError,Go=Q.prototype,r_=Ct.prototype,rs=Nt.prototype,Ho=oe["__core-js_shared__"],ko=r_.toString,It=rs.hasOwnProperty,s_=0,Rh=function(){var r=/[^.]+$/.exec(Ho&&Ho.keys&&Ho.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Vo=rs.toString,o_=ko.call(Nt),a_=ln._,l_=Hl("^"+ko.call(It).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wo=fh?oe.Buffer:t,Ji=oe.Symbol,Xo=oe.Uint8Array,Lh=Wo?Wo.allocUnsafe:t,Yo=wh(Nt.getPrototypeOf,Nt),Ph=Nt.create,Ih=rs.propertyIsEnumerable,qo=Go.splice,Dh=Ji?Ji.isConcatSpreadable:t,Ks=Ji?Ji.iterator:t,Sr=Ji?Ji.toStringTag:t,$o=function(){try{var r=Ar(Nt,"defineProperty");return r({},"",{}),r}catch{}}(),c_=oe.clearTimeout!==ln.clearTimeout&&oe.clearTimeout,u_=Ge&&Ge.now!==ln.Date.now&&Ge.now,h_=oe.setTimeout!==ln.setTimeout&&oe.setTimeout,Zo=Qt.ceil,Ko=Qt.floor,kl=Nt.getOwnPropertySymbols,f_=Wo?Wo.isBuffer:t,Uh=oe.isFinite,d_=Go.join,p_=wh(Nt.keys,Nt),en=Qt.max,dn=Qt.min,m_=Ge.now,g_=oe.parseInt,Nh=Qt.random,__=Go.reverse,Vl=Ar(oe,"DataView"),Js=Ar(oe,"Map"),Wl=Ar(oe,"Promise"),ss=Ar(oe,"Set"),js=Ar(oe,"WeakMap"),Qs=Ar(Nt,"create"),Jo=js&&new js,os={},v_=wr(Vl),x_=wr(Js),y_=wr(Wl),S_=wr(ss),E_=wr(js),jo=Ji?Ji.prototype:t,eo=jo?jo.valueOf:t,Oh=jo?jo.toString:t;function A(r){if(qt(r)&&!ft(r)&&!(r instanceof bt)){if(r instanceof qn)return r;if(It.call(r,"__wrapped__"))return Bf(r)}return new qn(r)}var as=function(){function r(){}return function(o){if(!Wt(o))return{};if(Ph)return Ph(o);r.prototype=o;var u=new r;return r.prototype=t,u}}();function Qo(){}function qn(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}A.templateSettings={escape:Ne,evaluate:gt,interpolate:wt,variable:"",imports:{_:A}},A.prototype=Qo.prototype,A.prototype.constructor=A,qn.prototype=as(Qo.prototype),qn.prototype.constructor=qn;function bt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xe,this.__views__=[]}function M_(){var r=new bt(this.__wrapped__);return r.__actions__=wn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=wn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=wn(this.__views__),r}function b_(){if(this.__filtered__){var r=new bt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function T_(){var r=this.__wrapped__.value(),o=this.__dir__,u=ft(r),g=o<0,S=u?r.length:0,w=Fv(0,S,this.__views__),N=w.start,H=w.end,W=H-N,ae=g?H:N-1,he=this.__iteratees__,_e=he.length,Ie=0,$e=dn(W,this.__takeCount__);if(!u||!g&&S==W&&$e==W)return af(r,this.__actions__);var it=[];e:for(;W--&&Ie<$e;){ae+=o;for(var _t=-1,rt=r[ae];++_t<_e;){var St=he[_t],Tt=St.iteratee,Fn=St.type,yn=Tt(rt);if(Fn==K)rt=yn;else if(!yn){if(Fn==B)continue e;break e}}it[Ie++]=rt}return it}bt.prototype=as(Qo.prototype),bt.prototype.constructor=bt;function Er(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function A_(){this.__data__=Qs?Qs(null):{},this.size=0}function w_(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function C_(r){var o=this.__data__;if(Qs){var u=o[r];return u===h?t:u}return It.call(o,r)?o[r]:t}function R_(r){var o=this.__data__;return Qs?o[r]!==t:It.call(o,r)}function L_(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=Qs&&o===t?h:o,this}Er.prototype.clear=A_,Er.prototype.delete=w_,Er.prototype.get=C_,Er.prototype.has=R_,Er.prototype.set=L_;function wi(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function P_(){this.__data__=[],this.size=0}function I_(r){var o=this.__data__,u=ea(o,r);if(u<0)return!1;var g=o.length-1;return u==g?o.pop():qo.call(o,u,1),--this.size,!0}function D_(r){var o=this.__data__,u=ea(o,r);return u<0?t:o[u][1]}function U_(r){return ea(this.__data__,r)>-1}function N_(r,o){var u=this.__data__,g=ea(u,r);return g<0?(++this.size,u.push([r,o])):u[g][1]=o,this}wi.prototype.clear=P_,wi.prototype.delete=I_,wi.prototype.get=D_,wi.prototype.has=U_,wi.prototype.set=N_;function Ci(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var g=r[o];this.set(g[0],g[1])}}function O_(){this.size=0,this.__data__={hash:new Er,map:new(Js||wi),string:new Er}}function F_(r){var o=fa(this,r).delete(r);return this.size-=o?1:0,o}function B_(r){return fa(this,r).get(r)}function z_(r){return fa(this,r).has(r)}function G_(r,o){var u=fa(this,r),g=u.size;return u.set(r,o),this.size+=u.size==g?0:1,this}Ci.prototype.clear=O_,Ci.prototype.delete=F_,Ci.prototype.get=B_,Ci.prototype.has=z_,Ci.prototype.set=G_;function Mr(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new Ci;++o<u;)this.add(r[o])}function H_(r){return this.__data__.set(r,h),this}function k_(r){return this.__data__.has(r)}Mr.prototype.add=Mr.prototype.push=H_,Mr.prototype.has=k_;function ii(r){var o=this.__data__=new wi(r);this.size=o.size}function V_(){this.__data__=new wi,this.size=0}function W_(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}function X_(r){return this.__data__.get(r)}function Y_(r){return this.__data__.has(r)}function q_(r,o){var u=this.__data__;if(u instanceof wi){var g=u.__data__;if(!Js||g.length<s-1)return g.push([r,o]),this.size=++u.size,this;u=this.__data__=new Ci(g)}return u.set(r,o),this.size=u.size,this}ii.prototype.clear=V_,ii.prototype.delete=W_,ii.prototype.get=X_,ii.prototype.has=Y_,ii.prototype.set=q_;function Fh(r,o){var u=ft(r),g=!u&&Cr(r),S=!u&&!g&&nr(r),w=!u&&!g&&!S&&hs(r),N=u||g||S||w,H=N?Bl(r.length,i_):[],W=H.length;for(var ae in r)(o||It.call(r,ae))&&!(N&&(ae=="length"||S&&(ae=="offset"||ae=="parent")||w&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||Ii(ae,W)))&&H.push(ae);return H}function Bh(r){var o=r.length;return o?r[tc(0,o-1)]:t}function $_(r,o){return da(wn(r),br(o,0,r.length))}function Z_(r){return da(wn(r))}function Xl(r,o,u){(u!==t&&!ri(r[o],u)||u===t&&!(o in r))&&Ri(r,o,u)}function to(r,o,u){var g=r[o];(!(It.call(r,o)&&ri(g,u))||u===t&&!(o in r))&&Ri(r,o,u)}function ea(r,o){for(var u=r.length;u--;)if(ri(r[u][0],o))return u;return-1}function K_(r,o,u,g){return ji(r,function(S,w,N){o(g,S,u(S),N)}),g}function zh(r,o){return r&&gi(o,sn(o),r)}function J_(r,o){return r&&gi(o,Rn(o),r)}function Ri(r,o,u){o=="__proto__"&&$o?$o(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}function Yl(r,o){for(var u=-1,g=o.length,S=Q(g),w=r==null;++u<g;)S[u]=w?t:Ac(r,o[u]);return S}function br(r,o,u){return r===r&&(u!==t&&(r=r<=u?r:u),o!==t&&(r=r>=o?r:o)),r}function $n(r,o,u,g,S,w){var N,H=o&m,W=o&v,ae=o&x;if(u&&(N=S?u(r,g,S,w):u(r)),N!==t)return N;if(!Wt(r))return r;var he=ft(r);if(he){if(N=zv(r),!H)return wn(r,N)}else{var _e=pn(r),Ie=_e==O||_e==Ae;if(nr(r))return uf(r,H);if(_e==Pe||_e==ve||Ie&&!S){if(N=W||Ie?{}:Rf(r),!H)return W?Cv(r,J_(N,r)):wv(r,zh(N,r))}else{if(!Ft[_e])return S?r:{};N=Gv(r,_e,H)}}w||(w=new ii);var $e=w.get(r);if($e)return $e;w.set(r,N),rd(r)?r.forEach(function(rt){N.add($n(rt,o,u,rt,r,w))}):nd(r)&&r.forEach(function(rt,St){N.set(St,$n(rt,o,u,St,r,w))});var it=ae?W?fc:hc:W?Rn:sn,_t=he?t:it(r);return Xn(_t||r,function(rt,St){_t&&(St=rt,rt=r[St]),to(N,St,$n(rt,o,u,St,r,w))}),N}function j_(r){var o=sn(r);return function(u){return Gh(u,r,o)}}function Gh(r,o,u){var g=u.length;if(r==null)return!g;for(r=Nt(r);g--;){var S=u[g],w=o[S],N=r[S];if(N===t&&!(S in r)||!w(N))return!1}return!0}function Hh(r,o,u){if(typeof r!="function")throw new Yn(c);return lo(function(){r.apply(t,u)},o)}function no(r,o,u,g){var S=-1,w=Fo,N=!0,H=r.length,W=[],ae=o.length;if(!H)return W;u&&(o=Vt(o,Un(u))),g?(w=Il,N=!1):o.length>=s&&(w=Zs,N=!1,o=new Mr(o));e:for(;++S<H;){var he=r[S],_e=u==null?he:u(he);if(he=g||he!==0?he:0,N&&_e===_e){for(var Ie=ae;Ie--;)if(o[Ie]===_e)continue e;W.push(he)}else w(o,_e,g)||W.push(he)}return W}var ji=mf(mi),kh=mf($l,!0);function Q_(r,o){var u=!0;return ji(r,function(g,S,w){return u=!!o(g,S,w),u}),u}function ta(r,o,u){for(var g=-1,S=r.length;++g<S;){var w=r[g],N=o(w);if(N!=null&&(H===t?N===N&&!On(N):u(N,H)))var H=N,W=w}return W}function ev(r,o,u,g){var S=r.length;for(u=mt(u),u<0&&(u=-u>S?0:S+u),g=g===t||g>S?S:mt(g),g<0&&(g+=S),g=u>g?0:od(g);u<g;)r[u++]=o;return r}function Vh(r,o){var u=[];return ji(r,function(g,S,w){o(g,S,w)&&u.push(g)}),u}function cn(r,o,u,g,S){var w=-1,N=r.length;for(u||(u=kv),S||(S=[]);++w<N;){var H=r[w];o>0&&u(H)?o>1?cn(H,o-1,u,g,S):Zi(S,H):g||(S[S.length]=H)}return S}var ql=gf(),Wh=gf(!0);function mi(r,o){return r&&ql(r,o,sn)}function $l(r,o){return r&&Wh(r,o,sn)}function na(r,o){return $i(o,function(u){return Di(r[u])})}function Tr(r,o){o=er(o,r);for(var u=0,g=o.length;r!=null&&u<g;)r=r[_i(o[u++])];return u&&u==g?r:t}function Xh(r,o,u){var g=o(r);return ft(r)?g:Zi(g,u(r))}function vn(r){return r==null?r===t?se:de:Sr&&Sr in Nt(r)?Ov(r):Zv(r)}function Zl(r,o){return r>o}function tv(r,o){return r!=null&&It.call(r,o)}function nv(r,o){return r!=null&&o in Nt(r)}function iv(r,o,u){return r>=dn(o,u)&&r<en(o,u)}function Kl(r,o,u){for(var g=u?Il:Fo,S=r[0].length,w=r.length,N=w,H=Q(w),W=1/0,ae=[];N--;){var he=r[N];N&&o&&(he=Vt(he,Un(o))),W=dn(he.length,W),H[N]=!u&&(o||S>=120&&he.length>=120)?new Mr(N&&he):t}he=r[0];var _e=-1,Ie=H[0];e:for(;++_e<S&&ae.length<W;){var $e=he[_e],it=o?o($e):$e;if($e=u||$e!==0?$e:0,!(Ie?Zs(Ie,it):g(ae,it,u))){for(N=w;--N;){var _t=H[N];if(!(_t?Zs(_t,it):g(r[N],it,u)))continue e}Ie&&Ie.push(it),ae.push($e)}}return ae}function rv(r,o,u,g){return mi(r,function(S,w,N){o(g,u(S),w,N)}),g}function io(r,o,u){o=er(o,r),r=Df(r,o);var g=r==null?r:r[_i(Kn(o))];return g==null?t:Dn(g,r,u)}function Yh(r){return qt(r)&&vn(r)==ve}function sv(r){return qt(r)&&vn(r)==je}function ov(r){return qt(r)&&vn(r)==Oe}function ro(r,o,u,g,S){return r===o?!0:r==null||o==null||!qt(r)&&!qt(o)?r!==r&&o!==o:av(r,o,u,g,ro,S)}function av(r,o,u,g,S,w){var N=ft(r),H=ft(o),W=N?De:pn(r),ae=H?De:pn(o);W=W==ve?Pe:W,ae=ae==ve?Pe:ae;var he=W==Pe,_e=ae==Pe,Ie=W==ae;if(Ie&&nr(r)){if(!nr(o))return!1;N=!0,he=!1}if(Ie&&!he)return w||(w=new ii),N||hs(r)?Af(r,o,u,g,S,w):Uv(r,o,W,u,g,S,w);if(!(u&y)){var $e=he&&It.call(r,"__wrapped__"),it=_e&&It.call(o,"__wrapped__");if($e||it){var _t=$e?r.value():r,rt=it?o.value():o;return w||(w=new ii),S(_t,rt,u,g,w)}}return Ie?(w||(w=new ii),Nv(r,o,u,g,S,w)):!1}function lv(r){return qt(r)&&pn(r)==re}function Jl(r,o,u,g){var S=u.length,w=S,N=!g;if(r==null)return!w;for(r=Nt(r);S--;){var H=u[S];if(N&&H[2]?H[1]!==r[H[0]]:!(H[0]in r))return!1}for(;++S<w;){H=u[S];var W=H[0],ae=r[W],he=H[1];if(N&&H[2]){if(ae===t&&!(W in r))return!1}else{var _e=new ii;if(g)var Ie=g(ae,he,W,r,o,_e);if(!(Ie===t?ro(he,ae,y|M,g,_e):Ie))return!1}}return!0}function qh(r){if(!Wt(r)||Wv(r))return!1;var o=Di(r)?l_:j;return o.test(wr(r))}function cv(r){return qt(r)&&vn(r)==ot}function uv(r){return qt(r)&&pn(r)==I}function hv(r){return qt(r)&&xa(r.length)&&!!zt[vn(r)]}function $h(r){return typeof r=="function"?r:r==null?Ln:typeof r=="object"?ft(r)?Jh(r[0],r[1]):Kh(r):_d(r)}function jl(r){if(!ao(r))return p_(r);var o=[];for(var u in Nt(r))It.call(r,u)&&u!="constructor"&&o.push(u);return o}function fv(r){if(!Wt(r))return $v(r);var o=ao(r),u=[];for(var g in r)g=="constructor"&&(o||!It.call(r,g))||u.push(g);return u}function Ql(r,o){return r<o}function Zh(r,o){var u=-1,g=Cn(r)?Q(r.length):[];return ji(r,function(S,w,N){g[++u]=o(S,w,N)}),g}function Kh(r){var o=pc(r);return o.length==1&&o[0][2]?Pf(o[0][0],o[0][1]):function(u){return u===r||Jl(u,r,o)}}function Jh(r,o){return gc(r)&&Lf(o)?Pf(_i(r),o):function(u){var g=Ac(u,r);return g===t&&g===o?wc(u,r):ro(o,g,y|M)}}function ia(r,o,u,g,S){r!==o&&ql(o,function(w,N){if(S||(S=new ii),Wt(w))dv(r,o,N,u,ia,g,S);else{var H=g?g(vc(r,N),w,N+"",r,o,S):t;H===t&&(H=w),Xl(r,N,H)}},Rn)}function dv(r,o,u,g,S,w,N){var H=vc(r,u),W=vc(o,u),ae=N.get(W);if(ae){Xl(r,u,ae);return}var he=w?w(H,W,u+"",r,o,N):t,_e=he===t;if(_e){var Ie=ft(W),$e=!Ie&&nr(W),it=!Ie&&!$e&&hs(W);he=W,Ie||$e||it?ft(H)?he=H:Zt(H)?he=wn(H):$e?(_e=!1,he=uf(W,!0)):it?(_e=!1,he=hf(W,!0)):he=[]:co(W)||Cr(W)?(he=H,Cr(H)?he=ad(H):(!Wt(H)||Di(H))&&(he=Rf(W))):_e=!1}_e&&(N.set(W,he),S(he,W,g,w,N),N.delete(W)),Xl(r,u,he)}function jh(r,o){var u=r.length;if(u)return o+=o<0?u:0,Ii(o,u)?r[o]:t}function Qh(r,o,u){o.length?o=Vt(o,function(w){return ft(w)?function(N){return Tr(N,w.length===1?w[0]:w)}:w}):o=[Ln];var g=-1;o=Vt(o,Un(Qe()));var S=Zh(r,function(w,N,H){var W=Vt(o,function(ae){return ae(w)});return{criteria:W,index:++g,value:w}});return Gg(S,function(w,N){return Av(w,N,u)})}function pv(r,o){return ef(r,o,function(u,g){return wc(r,g)})}function ef(r,o,u){for(var g=-1,S=o.length,w={};++g<S;){var N=o[g],H=Tr(r,N);u(H,N)&&so(w,er(N,r),H)}return w}function mv(r){return function(o){return Tr(o,r)}}function ec(r,o,u,g){var S=g?zg:es,w=-1,N=o.length,H=r;for(r===o&&(o=wn(o)),u&&(H=Vt(r,Un(u)));++w<N;)for(var W=0,ae=o[w],he=u?u(ae):ae;(W=S(H,he,W,g))>-1;)H!==r&&qo.call(H,W,1),qo.call(r,W,1);return r}function tf(r,o){for(var u=r?o.length:0,g=u-1;u--;){var S=o[u];if(u==g||S!==w){var w=S;Ii(S)?qo.call(r,S,1):rc(r,S)}}return r}function tc(r,o){return r+Ko(Nh()*(o-r+1))}function gv(r,o,u,g){for(var S=-1,w=en(Zo((o-r)/(u||1)),0),N=Q(w);w--;)N[g?w:++S]=r,r+=u;return N}function nc(r,o){var u="";if(!r||o<1||o>ie)return u;do o%2&&(u+=r),o=Ko(o/2),o&&(r+=r);while(o);return u}function yt(r,o){return xc(If(r,o,Ln),r+"")}function _v(r){return Bh(fs(r))}function vv(r,o){var u=fs(r);return da(u,br(o,0,u.length))}function so(r,o,u,g){if(!Wt(r))return r;o=er(o,r);for(var S=-1,w=o.length,N=w-1,H=r;H!=null&&++S<w;){var W=_i(o[S]),ae=u;if(W==="__proto__"||W==="constructor"||W==="prototype")return r;if(S!=N){var he=H[W];ae=g?g(he,W,H):t,ae===t&&(ae=Wt(he)?he:Ii(o[S+1])?[]:{})}to(H,W,ae),H=H[W]}return r}var nf=Jo?function(r,o){return Jo.set(r,o),r}:Ln,xv=$o?function(r,o){return $o(r,"toString",{configurable:!0,enumerable:!1,value:Rc(o),writable:!0})}:Ln;function yv(r){return da(fs(r))}function Zn(r,o,u){var g=-1,S=r.length;o<0&&(o=-o>S?0:S+o),u=u>S?S:u,u<0&&(u+=S),S=o>u?0:u-o>>>0,o>>>=0;for(var w=Q(S);++g<S;)w[g]=r[g+o];return w}function Sv(r,o){var u;return ji(r,function(g,S,w){return u=o(g,S,w),!u}),!!u}function ra(r,o,u){var g=0,S=r==null?g:r.length;if(typeof o=="number"&&o===o&&S<=st){for(;g<S;){var w=g+S>>>1,N=r[w];N!==null&&!On(N)&&(u?N<=o:N<o)?g=w+1:S=w}return S}return ic(r,o,Ln,u)}function ic(r,o,u,g){var S=0,w=r==null?0:r.length;if(w===0)return 0;o=u(o);for(var N=o!==o,H=o===null,W=On(o),ae=o===t;S<w;){var he=Ko((S+w)/2),_e=u(r[he]),Ie=_e!==t,$e=_e===null,it=_e===_e,_t=On(_e);if(N)var rt=g||it;else ae?rt=it&&(g||Ie):H?rt=it&&Ie&&(g||!$e):W?rt=it&&Ie&&!$e&&(g||!_t):$e||_t?rt=!1:rt=g?_e<=o:_e<o;rt?S=he+1:w=he}return dn(w,Fe)}function rf(r,o){for(var u=-1,g=r.length,S=0,w=[];++u<g;){var N=r[u],H=o?o(N):N;if(!u||!ri(H,W)){var W=H;w[S++]=N===0?0:N}}return w}function sf(r){return typeof r=="number"?r:On(r)?me:+r}function Nn(r){if(typeof r=="string")return r;if(ft(r))return Vt(r,Nn)+"";if(On(r))return Oh?Oh.call(r):"";var o=r+"";return o=="0"&&1/r==-ce?"-0":o}function Qi(r,o,u){var g=-1,S=Fo,w=r.length,N=!0,H=[],W=H;if(u)N=!1,S=Il;else if(w>=s){var ae=o?null:Iv(r);if(ae)return zo(ae);N=!1,S=Zs,W=new Mr}else W=o?[]:H;e:for(;++g<w;){var he=r[g],_e=o?o(he):he;if(he=u||he!==0?he:0,N&&_e===_e){for(var Ie=W.length;Ie--;)if(W[Ie]===_e)continue e;o&&W.push(_e),H.push(he)}else S(W,_e,u)||(W!==H&&W.push(_e),H.push(he))}return H}function rc(r,o){return o=er(o,r),r=Df(r,o),r==null||delete r[_i(Kn(o))]}function of(r,o,u,g){return so(r,o,u(Tr(r,o)),g)}function sa(r,o,u,g){for(var S=r.length,w=g?S:-1;(g?w--:++w<S)&&o(r[w],w,r););return u?Zn(r,g?0:w,g?w+1:S):Zn(r,g?w+1:0,g?S:w)}function af(r,o){var u=r;return u instanceof bt&&(u=u.value()),Dl(o,function(g,S){return S.func.apply(S.thisArg,Zi([g],S.args))},u)}function sc(r,o,u){var g=r.length;if(g<2)return g?Qi(r[0]):[];for(var S=-1,w=Q(g);++S<g;)for(var N=r[S],H=-1;++H<g;)H!=S&&(w[S]=no(w[S]||N,r[H],o,u));return Qi(cn(w,1),o,u)}function lf(r,o,u){for(var g=-1,S=r.length,w=o.length,N={};++g<S;){var H=g<w?o[g]:t;u(N,r[g],H)}return N}function oc(r){return Zt(r)?r:[]}function ac(r){return typeof r=="function"?r:Ln}function er(r,o){return ft(r)?r:gc(r,o)?[r]:Ff(Rt(r))}var Ev=yt;function tr(r,o,u){var g=r.length;return u=u===t?g:u,!o&&u>=g?r:Zn(r,o,u)}var cf=c_||function(r){return ln.clearTimeout(r)};function uf(r,o){if(o)return r.slice();var u=r.length,g=Lh?Lh(u):new r.constructor(u);return r.copy(g),g}function lc(r){var o=new r.constructor(r.byteLength);return new Xo(o).set(new Xo(r)),o}function Mv(r,o){var u=o?lc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function bv(r){var o=new r.constructor(r.source,No.exec(r));return o.lastIndex=r.lastIndex,o}function Tv(r){return eo?Nt(eo.call(r)):{}}function hf(r,o){var u=o?lc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function ff(r,o){if(r!==o){var u=r!==t,g=r===null,S=r===r,w=On(r),N=o!==t,H=o===null,W=o===o,ae=On(o);if(!H&&!ae&&!w&&r>o||w&&N&&W&&!H&&!ae||g&&N&&W||!u&&W||!S)return 1;if(!g&&!w&&!ae&&r<o||ae&&u&&S&&!g&&!w||H&&u&&S||!N&&S||!W)return-1}return 0}function Av(r,o,u){for(var g=-1,S=r.criteria,w=o.criteria,N=S.length,H=u.length;++g<N;){var W=ff(S[g],w[g]);if(W){if(g>=H)return W;var ae=u[g];return W*(ae=="desc"?-1:1)}}return r.index-o.index}function df(r,o,u,g){for(var S=-1,w=r.length,N=u.length,H=-1,W=o.length,ae=en(w-N,0),he=Q(W+ae),_e=!g;++H<W;)he[H]=o[H];for(;++S<N;)(_e||S<w)&&(he[u[S]]=r[S]);for(;ae--;)he[H++]=r[S++];return he}function pf(r,o,u,g){for(var S=-1,w=r.length,N=-1,H=u.length,W=-1,ae=o.length,he=en(w-H,0),_e=Q(he+ae),Ie=!g;++S<he;)_e[S]=r[S];for(var $e=S;++W<ae;)_e[$e+W]=o[W];for(;++N<H;)(Ie||S<w)&&(_e[$e+u[N]]=r[S++]);return _e}function wn(r,o){var u=-1,g=r.length;for(o||(o=Q(g));++u<g;)o[u]=r[u];return o}function gi(r,o,u,g){var S=!u;u||(u={});for(var w=-1,N=o.length;++w<N;){var H=o[w],W=g?g(u[H],r[H],H,u,r):t;W===t&&(W=r[H]),S?Ri(u,H,W):to(u,H,W)}return u}function wv(r,o){return gi(r,mc(r),o)}function Cv(r,o){return gi(r,wf(r),o)}function oa(r,o){return function(u,g){var S=ft(u)?Dg:K_,w=o?o():{};return S(u,r,Qe(g,2),w)}}function ls(r){return yt(function(o,u){var g=-1,S=u.length,w=S>1?u[S-1]:t,N=S>2?u[2]:t;for(w=r.length>3&&typeof w=="function"?(S--,w):t,N&&xn(u[0],u[1],N)&&(w=S<3?t:w,S=1),o=Nt(o);++g<S;){var H=u[g];H&&r(o,H,g,w)}return o})}function mf(r,o){return function(u,g){if(u==null)return u;if(!Cn(u))return r(u,g);for(var S=u.length,w=o?S:-1,N=Nt(u);(o?w--:++w<S)&&g(N[w],w,N)!==!1;);return u}}function gf(r){return function(o,u,g){for(var S=-1,w=Nt(o),N=g(o),H=N.length;H--;){var W=N[r?H:++S];if(u(w[W],W,w)===!1)break}return o}}function Rv(r,o,u){var g=o&_,S=oo(r);function w(){var N=this&&this!==ln&&this instanceof w?S:r;return N.apply(g?u:this,arguments)}return w}function _f(r){return function(o){o=Rt(o);var u=ts(o)?ni(o):t,g=u?u[0]:o.charAt(0),S=u?tr(u,1).join(""):o.slice(1);return g[r]()+S}}function cs(r){return function(o){return Dl(md(pd(o).replace(xg,"")),r,"")}}function oo(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=as(r.prototype),g=r.apply(u,o);return Wt(g)?g:u}}function Lv(r,o,u){var g=oo(r);function S(){for(var w=arguments.length,N=Q(w),H=w,W=us(S);H--;)N[H]=arguments[H];var ae=w<3&&N[0]!==W&&N[w-1]!==W?[]:Ki(N,W);if(w-=ae.length,w<u)return Ef(r,o,aa,S.placeholder,t,N,ae,t,t,u-w);var he=this&&this!==ln&&this instanceof S?g:r;return Dn(he,this,N)}return S}function vf(r){return function(o,u,g){var S=Nt(o);if(!Cn(o)){var w=Qe(u,3);o=sn(o),u=function(H){return w(S[H],H,S)}}var N=r(o,u,g);return N>-1?S[w?o[N]:N]:t}}function xf(r){return Pi(function(o){var u=o.length,g=u,S=qn.prototype.thru;for(r&&o.reverse();g--;){var w=o[g];if(typeof w!="function")throw new Yn(c);if(S&&!N&&ha(w)=="wrapper")var N=new qn([],!0)}for(g=N?g:u;++g<u;){w=o[g];var H=ha(w),W=H=="wrapper"?dc(w):t;W&&_c(W[0])&&W[1]==(R|E|z|X)&&!W[4].length&&W[9]==1?N=N[ha(W[0])].apply(N,W[3]):N=w.length==1&&_c(w)?N[H]():N.thru(w)}return function(){var ae=arguments,he=ae[0];if(N&&ae.length==1&&ft(he))return N.plant(he).value();for(var _e=0,Ie=u?o[_e].apply(this,ae):he;++_e<u;)Ie=o[_e].call(this,Ie);return Ie}})}function aa(r,o,u,g,S,w,N,H,W,ae){var he=o&R,_e=o&_,Ie=o&p,$e=o&(E|C),it=o&le,_t=Ie?t:oo(r);function rt(){for(var St=arguments.length,Tt=Q(St),Fn=St;Fn--;)Tt[Fn]=arguments[Fn];if($e)var yn=us(rt),Bn=kg(Tt,yn);if(g&&(Tt=df(Tt,g,S,$e)),w&&(Tt=pf(Tt,w,N,$e)),St-=Bn,$e&&St<ae){var Kt=Ki(Tt,yn);return Ef(r,o,aa,rt.placeholder,u,Tt,Kt,H,W,ae-St)}var si=_e?u:this,Ni=Ie?si[r]:r;return St=Tt.length,H?Tt=Kv(Tt,H):it&&St>1&&Tt.reverse(),he&&W<St&&(Tt.length=W),this&&this!==ln&&this instanceof rt&&(Ni=_t||oo(Ni)),Ni.apply(si,Tt)}return rt}function yf(r,o){return function(u,g){return rv(u,r,o(g),{})}}function la(r,o){return function(u,g){var S;if(u===t&&g===t)return o;if(u!==t&&(S=u),g!==t){if(S===t)return g;typeof u=="string"||typeof g=="string"?(u=Nn(u),g=Nn(g)):(u=sf(u),g=sf(g)),S=r(u,g)}return S}}function cc(r){return Pi(function(o){return o=Vt(o,Un(Qe())),yt(function(u){var g=this;return r(o,function(S){return Dn(S,g,u)})})})}function ca(r,o){o=o===t?" ":Nn(o);var u=o.length;if(u<2)return u?nc(o,r):o;var g=nc(o,Zo(r/ns(o)));return ts(o)?tr(ni(g),0,r).join(""):g.slice(0,r)}function Pv(r,o,u,g){var S=o&_,w=oo(r);function N(){for(var H=-1,W=arguments.length,ae=-1,he=g.length,_e=Q(he+W),Ie=this&&this!==ln&&this instanceof N?w:r;++ae<he;)_e[ae]=g[ae];for(;W--;)_e[ae++]=arguments[++H];return Dn(Ie,S?u:this,_e)}return N}function Sf(r){return function(o,u,g){return g&&typeof g!="number"&&xn(o,u,g)&&(u=g=t),o=Ui(o),u===t?(u=o,o=0):u=Ui(u),g=g===t?o<u?1:-1:Ui(g),gv(o,u,g,r)}}function ua(r){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Jn(o),u=Jn(u)),r(o,u)}}function Ef(r,o,u,g,S,w,N,H,W,ae){var he=o&E,_e=he?N:t,Ie=he?t:N,$e=he?w:t,it=he?t:w;o|=he?z:F,o&=~(he?F:z),o&P||(o&=~(_|p));var _t=[r,o,S,$e,_e,it,Ie,H,W,ae],rt=u.apply(t,_t);return _c(r)&&Uf(rt,_t),rt.placeholder=g,Nf(rt,r,o)}function uc(r){var o=Qt[r];return function(u,g){if(u=Jn(u),g=g==null?0:dn(mt(g),292),g&&Uh(u)){var S=(Rt(u)+"e").split("e"),w=o(S[0]+"e"+(+S[1]+g));return S=(Rt(w)+"e").split("e"),+(S[0]+"e"+(+S[1]-g))}return o(u)}}var Iv=ss&&1/zo(new ss([,-0]))[1]==ce?function(r){return new ss(r)}:Ic;function Mf(r){return function(o){var u=pn(o);return u==re?Gl(o):u==I?Zg(o):Hg(o,r(o))}}function Li(r,o,u,g,S,w,N,H){var W=o&p;if(!W&&typeof r!="function")throw new Yn(c);var ae=g?g.length:0;if(ae||(o&=~(z|F),g=S=t),N=N===t?N:en(mt(N),0),H=H===t?H:mt(H),ae-=S?S.length:0,o&F){var he=g,_e=S;g=S=t}var Ie=W?t:dc(r),$e=[r,o,u,g,S,he,_e,w,N,H];if(Ie&&qv($e,Ie),r=$e[0],o=$e[1],u=$e[2],g=$e[3],S=$e[4],H=$e[9]=$e[9]===t?W?0:r.length:en($e[9]-ae,0),!H&&o&(E|C)&&(o&=~(E|C)),!o||o==_)var it=Rv(r,o,u);else o==E||o==C?it=Lv(r,o,H):(o==z||o==(_|z))&&!S.length?it=Pv(r,o,u,g):it=aa.apply(t,$e);var _t=Ie?nf:Uf;return Nf(_t(it,$e),r,o)}function bf(r,o,u,g){return r===t||ri(r,rs[u])&&!It.call(g,u)?o:r}function Tf(r,o,u,g,S,w){return Wt(r)&&Wt(o)&&(w.set(o,r),ia(r,o,t,Tf,w),w.delete(o)),r}function Dv(r){return co(r)?t:r}function Af(r,o,u,g,S,w){var N=u&y,H=r.length,W=o.length;if(H!=W&&!(N&&W>H))return!1;var ae=w.get(r),he=w.get(o);if(ae&&he)return ae==o&&he==r;var _e=-1,Ie=!0,$e=u&M?new Mr:t;for(w.set(r,o),w.set(o,r);++_e<H;){var it=r[_e],_t=o[_e];if(g)var rt=N?g(_t,it,_e,o,r,w):g(it,_t,_e,r,o,w);if(rt!==t){if(rt)continue;Ie=!1;break}if($e){if(!Ul(o,function(St,Tt){if(!Zs($e,Tt)&&(it===St||S(it,St,u,g,w)))return $e.push(Tt)})){Ie=!1;break}}else if(!(it===_t||S(it,_t,u,g,w))){Ie=!1;break}}return w.delete(r),w.delete(o),Ie}function Uv(r,o,u,g,S,w,N){switch(u){case Ze:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case je:return!(r.byteLength!=o.byteLength||!w(new Xo(r),new Xo(o)));case He:case Oe:case Me:return ri(+r,+o);case Xe:return r.name==o.name&&r.message==o.message;case ot:case b:return r==o+"";case re:var H=Gl;case I:var W=g&y;if(H||(H=zo),r.size!=o.size&&!W)return!1;var ae=N.get(r);if(ae)return ae==o;g|=M,N.set(r,o);var he=Af(H(r),H(o),g,S,w,N);return N.delete(r),he;case te:if(eo)return eo.call(r)==eo.call(o)}return!1}function Nv(r,o,u,g,S,w){var N=u&y,H=hc(r),W=H.length,ae=hc(o),he=ae.length;if(W!=he&&!N)return!1;for(var _e=W;_e--;){var Ie=H[_e];if(!(N?Ie in o:It.call(o,Ie)))return!1}var $e=w.get(r),it=w.get(o);if($e&&it)return $e==o&&it==r;var _t=!0;w.set(r,o),w.set(o,r);for(var rt=N;++_e<W;){Ie=H[_e];var St=r[Ie],Tt=o[Ie];if(g)var Fn=N?g(Tt,St,Ie,o,r,w):g(St,Tt,Ie,r,o,w);if(!(Fn===t?St===Tt||S(St,Tt,u,g,w):Fn)){_t=!1;break}rt||(rt=Ie=="constructor")}if(_t&&!rt){var yn=r.constructor,Bn=o.constructor;yn!=Bn&&"constructor"in r&&"constructor"in o&&!(typeof yn=="function"&&yn instanceof yn&&typeof Bn=="function"&&Bn instanceof Bn)&&(_t=!1)}return w.delete(r),w.delete(o),_t}function Pi(r){return xc(If(r,t,Hf),r+"")}function hc(r){return Xh(r,sn,mc)}function fc(r){return Xh(r,Rn,wf)}var dc=Jo?function(r){return Jo.get(r)}:Ic;function ha(r){for(var o=r.name+"",u=os[o],g=It.call(os,o)?u.length:0;g--;){var S=u[g],w=S.func;if(w==null||w==r)return S.name}return o}function us(r){var o=It.call(A,"placeholder")?A:r;return o.placeholder}function Qe(){var r=A.iteratee||Lc;return r=r===Lc?$h:r,arguments.length?r(arguments[0],arguments[1]):r}function fa(r,o){var u=r.__data__;return Vv(o)?u[typeof o=="string"?"string":"hash"]:u.map}function pc(r){for(var o=sn(r),u=o.length;u--;){var g=o[u],S=r[g];o[u]=[g,S,Lf(S)]}return o}function Ar(r,o){var u=Yg(r,o);return qh(u)?u:t}function Ov(r){var o=It.call(r,Sr),u=r[Sr];try{r[Sr]=t;var g=!0}catch{}var S=Vo.call(r);return g&&(o?r[Sr]=u:delete r[Sr]),S}var mc=kl?function(r){return r==null?[]:(r=Nt(r),$i(kl(r),function(o){return Ih.call(r,o)}))}:Dc,wf=kl?function(r){for(var o=[];r;)Zi(o,mc(r)),r=Yo(r);return o}:Dc,pn=vn;(Vl&&pn(new Vl(new ArrayBuffer(1)))!=Ze||Js&&pn(new Js)!=re||Wl&&pn(Wl.resolve())!=Ue||ss&&pn(new ss)!=I||js&&pn(new js)!=ye)&&(pn=function(r){var o=vn(r),u=o==Pe?r.constructor:t,g=u?wr(u):"";if(g)switch(g){case v_:return Ze;case x_:return re;case y_:return Ue;case S_:return I;case E_:return ye}return o});function Fv(r,o,u){for(var g=-1,S=u.length;++g<S;){var w=u[g],N=w.size;switch(w.type){case"drop":r+=N;break;case"dropRight":o-=N;break;case"take":o=dn(o,r+N);break;case"takeRight":r=en(r,o-N);break}}return{start:r,end:o}}function Bv(r){var o=r.match(Io);return o?o[1].split(Zr):[]}function Cf(r,o,u){o=er(o,r);for(var g=-1,S=o.length,w=!1;++g<S;){var N=_i(o[g]);if(!(w=r!=null&&u(r,N)))break;r=r[N]}return w||++g!=S?w:(S=r==null?0:r.length,!!S&&xa(S)&&Ii(N,S)&&(ft(r)||Cr(r)))}function zv(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&It.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Rf(r){return typeof r.constructor=="function"&&!ao(r)?as(Yo(r)):{}}function Gv(r,o,u){var g=r.constructor;switch(o){case je:return lc(r);case He:case Oe:return new g(+r);case Ze:return Mv(r,u);case we:case Re:case et:case Te:case Ot:case ut:case Ke:case ze:case Ye:return hf(r,u);case re:return new g;case Me:case b:return new g(r);case ot:return bv(r);case I:return new g;case te:return Tv(r)}}function Hv(r,o){var u=o.length;if(!u)return r;var g=u-1;return o[g]=(u>1?"& ":"")+o[g],o=o.join(u>2?", ":" "),r.replace($r,`{
/* [wrapped with `+o+`] */
`)}function kv(r){return ft(r)||Cr(r)||!!(Dh&&r&&r[Dh])}function Ii(r,o){var u=typeof r;return o=o??ie,!!o&&(u=="number"||u!="symbol"&&Z.test(r))&&r>-1&&r%1==0&&r<o}function xn(r,o,u){if(!Wt(u))return!1;var g=typeof o;return(g=="number"?Cn(u)&&Ii(o,u.length):g=="string"&&o in u)?ri(u[o],r):!1}function gc(r,o){if(ft(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||On(r)?!0:Ht.test(r)||!Lt.test(r)||o!=null&&r in Nt(o)}function Vv(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function _c(r){var o=ha(r),u=A[o];if(typeof u!="function"||!(o in bt.prototype))return!1;if(r===u)return!0;var g=dc(u);return!!g&&r===g[0]}function Wv(r){return!!Rh&&Rh in r}var Xv=Ho?Di:Uc;function ao(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||rs;return r===u}function Lf(r){return r===r&&!Wt(r)}function Pf(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==t||r in Nt(u))}}function Yv(r){var o=_a(r,function(g){return u.size===f&&u.clear(),g}),u=o.cache;return o}function qv(r,o){var u=r[1],g=o[1],S=u|g,w=S<(_|p|R),N=g==R&&u==E||g==R&&u==X&&r[7].length<=o[8]||g==(R|X)&&o[7].length<=o[8]&&u==E;if(!(w||N))return r;g&_&&(r[2]=o[2],S|=u&_?0:P);var H=o[3];if(H){var W=r[3];r[3]=W?df(W,H,o[4]):H,r[4]=W?Ki(r[3],d):o[4]}return H=o[5],H&&(W=r[5],r[5]=W?pf(W,H,o[6]):H,r[6]=W?Ki(r[5],d):o[6]),H=o[7],H&&(r[7]=H),g&R&&(r[8]=r[8]==null?o[8]:dn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=S,r}function $v(r){var o=[];if(r!=null)for(var u in Nt(r))o.push(u);return o}function Zv(r){return Vo.call(r)}function If(r,o,u){return o=en(o===t?r.length-1:o,0),function(){for(var g=arguments,S=-1,w=en(g.length-o,0),N=Q(w);++S<w;)N[S]=g[o+S];S=-1;for(var H=Q(o+1);++S<o;)H[S]=g[S];return H[o]=u(N),Dn(r,this,H)}}function Df(r,o){return o.length<2?r:Tr(r,Zn(o,0,-1))}function Kv(r,o){for(var u=r.length,g=dn(o.length,u),S=wn(r);g--;){var w=o[g];r[g]=Ii(w,u)?S[w]:t}return r}function vc(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var Uf=Of(nf),lo=h_||function(r,o){return ln.setTimeout(r,o)},xc=Of(xv);function Nf(r,o,u){var g=o+"";return xc(r,Hv(g,Jv(Bv(g),u)))}function Of(r){var o=0,u=0;return function(){var g=m_(),S=pe-(g-u);if(u=g,S>0){if(++o>=Se)return arguments[0]}else o=0;return r.apply(t,arguments)}}function da(r,o){var u=-1,g=r.length,S=g-1;for(o=o===t?g:o;++u<o;){var w=tc(u,S),N=r[w];r[w]=r[u],r[u]=N}return r.length=o,r}var Ff=Yv(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(At,function(u,g,S,w){o.push(S?w.replace(Tl,"$1"):g||u)}),o});function _i(r){if(typeof r=="string"||On(r))return r;var o=r+"";return o=="0"&&1/r==-ce?"-0":o}function wr(r){if(r!=null){try{return ko.call(r)}catch{}try{return r+""}catch{}}return""}function Jv(r,o){return Xn(ne,function(u){var g="_."+u[0];o&u[1]&&!Fo(r,g)&&r.push(g)}),r.sort()}function Bf(r){if(r instanceof bt)return r.clone();var o=new qn(r.__wrapped__,r.__chain__);return o.__actions__=wn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function jv(r,o,u){(u?xn(r,o,u):o===t)?o=1:o=en(mt(o),0);var g=r==null?0:r.length;if(!g||o<1)return[];for(var S=0,w=0,N=Q(Zo(g/o));S<g;)N[w++]=Zn(r,S,S+=o);return N}function Qv(r){for(var o=-1,u=r==null?0:r.length,g=0,S=[];++o<u;){var w=r[o];w&&(S[g++]=w)}return S}function e0(){var r=arguments.length;if(!r)return[];for(var o=Q(r-1),u=arguments[0],g=r;g--;)o[g-1]=arguments[g];return Zi(ft(u)?wn(u):[u],cn(o,1))}var t0=yt(function(r,o){return Zt(r)?no(r,cn(o,1,Zt,!0)):[]}),n0=yt(function(r,o){var u=Kn(o);return Zt(u)&&(u=t),Zt(r)?no(r,cn(o,1,Zt,!0),Qe(u,2)):[]}),i0=yt(function(r,o){var u=Kn(o);return Zt(u)&&(u=t),Zt(r)?no(r,cn(o,1,Zt,!0),t,u):[]});function r0(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===t?1:mt(o),Zn(r,o<0?0:o,g)):[]}function s0(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===t?1:mt(o),o=g-o,Zn(r,0,o<0?0:o)):[]}function o0(r,o){return r&&r.length?sa(r,Qe(o,3),!0,!0):[]}function a0(r,o){return r&&r.length?sa(r,Qe(o,3),!0):[]}function l0(r,o,u,g){var S=r==null?0:r.length;return S?(u&&typeof u!="number"&&xn(r,o,u)&&(u=0,g=S),ev(r,o,u,g)):[]}function zf(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var S=u==null?0:mt(u);return S<0&&(S=en(g+S,0)),Bo(r,Qe(o,3),S)}function Gf(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var S=g-1;return u!==t&&(S=mt(u),S=u<0?en(g+S,0):dn(S,g-1)),Bo(r,Qe(o,3),S,!0)}function Hf(r){var o=r==null?0:r.length;return o?cn(r,1):[]}function c0(r){var o=r==null?0:r.length;return o?cn(r,ce):[]}function u0(r,o){var u=r==null?0:r.length;return u?(o=o===t?1:mt(o),cn(r,o)):[]}function h0(r){for(var o=-1,u=r==null?0:r.length,g={};++o<u;){var S=r[o];g[S[0]]=S[1]}return g}function kf(r){return r&&r.length?r[0]:t}function f0(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var S=u==null?0:mt(u);return S<0&&(S=en(g+S,0)),es(r,o,S)}function d0(r){var o=r==null?0:r.length;return o?Zn(r,0,-1):[]}var p0=yt(function(r){var o=Vt(r,oc);return o.length&&o[0]===r[0]?Kl(o):[]}),m0=yt(function(r){var o=Kn(r),u=Vt(r,oc);return o===Kn(u)?o=t:u.pop(),u.length&&u[0]===r[0]?Kl(u,Qe(o,2)):[]}),g0=yt(function(r){var o=Kn(r),u=Vt(r,oc);return o=typeof o=="function"?o:t,o&&u.pop(),u.length&&u[0]===r[0]?Kl(u,t,o):[]});function _0(r,o){return r==null?"":d_.call(r,o)}function Kn(r){var o=r==null?0:r.length;return o?r[o-1]:t}function v0(r,o,u){var g=r==null?0:r.length;if(!g)return-1;var S=g;return u!==t&&(S=mt(u),S=S<0?en(g+S,0):dn(S,g-1)),o===o?Jg(r,o,S):Bo(r,Sh,S,!0)}function x0(r,o){return r&&r.length?jh(r,mt(o)):t}var y0=yt(Vf);function Vf(r,o){return r&&r.length&&o&&o.length?ec(r,o):r}function S0(r,o,u){return r&&r.length&&o&&o.length?ec(r,o,Qe(u,2)):r}function E0(r,o,u){return r&&r.length&&o&&o.length?ec(r,o,t,u):r}var M0=Pi(function(r,o){var u=r==null?0:r.length,g=Yl(r,o);return tf(r,Vt(o,function(S){return Ii(S,u)?+S:S}).sort(ff)),g});function b0(r,o){var u=[];if(!(r&&r.length))return u;var g=-1,S=[],w=r.length;for(o=Qe(o,3);++g<w;){var N=r[g];o(N,g,r)&&(u.push(N),S.push(g))}return tf(r,S),u}function yc(r){return r==null?r:__.call(r)}function T0(r,o,u){var g=r==null?0:r.length;return g?(u&&typeof u!="number"&&xn(r,o,u)?(o=0,u=g):(o=o==null?0:mt(o),u=u===t?g:mt(u)),Zn(r,o,u)):[]}function A0(r,o){return ra(r,o)}function w0(r,o,u){return ic(r,o,Qe(u,2))}function C0(r,o){var u=r==null?0:r.length;if(u){var g=ra(r,o);if(g<u&&ri(r[g],o))return g}return-1}function R0(r,o){return ra(r,o,!0)}function L0(r,o,u){return ic(r,o,Qe(u,2),!0)}function P0(r,o){var u=r==null?0:r.length;if(u){var g=ra(r,o,!0)-1;if(ri(r[g],o))return g}return-1}function I0(r){return r&&r.length?rf(r):[]}function D0(r,o){return r&&r.length?rf(r,Qe(o,2)):[]}function U0(r){var o=r==null?0:r.length;return o?Zn(r,1,o):[]}function N0(r,o,u){return r&&r.length?(o=u||o===t?1:mt(o),Zn(r,0,o<0?0:o)):[]}function O0(r,o,u){var g=r==null?0:r.length;return g?(o=u||o===t?1:mt(o),o=g-o,Zn(r,o<0?0:o,g)):[]}function F0(r,o){return r&&r.length?sa(r,Qe(o,3),!1,!0):[]}function B0(r,o){return r&&r.length?sa(r,Qe(o,3)):[]}var z0=yt(function(r){return Qi(cn(r,1,Zt,!0))}),G0=yt(function(r){var o=Kn(r);return Zt(o)&&(o=t),Qi(cn(r,1,Zt,!0),Qe(o,2))}),H0=yt(function(r){var o=Kn(r);return o=typeof o=="function"?o:t,Qi(cn(r,1,Zt,!0),t,o)});function k0(r){return r&&r.length?Qi(r):[]}function V0(r,o){return r&&r.length?Qi(r,Qe(o,2)):[]}function W0(r,o){return o=typeof o=="function"?o:t,r&&r.length?Qi(r,t,o):[]}function Sc(r){if(!(r&&r.length))return[];var o=0;return r=$i(r,function(u){if(Zt(u))return o=en(u.length,o),!0}),Bl(o,function(u){return Vt(r,Nl(u))})}function Wf(r,o){if(!(r&&r.length))return[];var u=Sc(r);return o==null?u:Vt(u,function(g){return Dn(o,t,g)})}var X0=yt(function(r,o){return Zt(r)?no(r,o):[]}),Y0=yt(function(r){return sc($i(r,Zt))}),q0=yt(function(r){var o=Kn(r);return Zt(o)&&(o=t),sc($i(r,Zt),Qe(o,2))}),$0=yt(function(r){var o=Kn(r);return o=typeof o=="function"?o:t,sc($i(r,Zt),t,o)}),Z0=yt(Sc);function K0(r,o){return lf(r||[],o||[],to)}function J0(r,o){return lf(r||[],o||[],so)}var j0=yt(function(r){var o=r.length,u=o>1?r[o-1]:t;return u=typeof u=="function"?(r.pop(),u):t,Wf(r,u)});function Xf(r){var o=A(r);return o.__chain__=!0,o}function Q0(r,o){return o(r),r}function pa(r,o){return o(r)}var ex=Pi(function(r){var o=r.length,u=o?r[0]:0,g=this.__wrapped__,S=function(w){return Yl(w,r)};return o>1||this.__actions__.length||!(g instanceof bt)||!Ii(u)?this.thru(S):(g=g.slice(u,+u+(o?1:0)),g.__actions__.push({func:pa,args:[S],thisArg:t}),new qn(g,this.__chain__).thru(function(w){return o&&!w.length&&w.push(t),w}))});function tx(){return Xf(this)}function nx(){return new qn(this.value(),this.__chain__)}function ix(){this.__values__===t&&(this.__values__=sd(this.value()));var r=this.__index__>=this.__values__.length,o=r?t:this.__values__[this.__index__++];return{done:r,value:o}}function rx(){return this}function sx(r){for(var o,u=this;u instanceof Qo;){var g=Bf(u);g.__index__=0,g.__values__=t,o?S.__wrapped__=g:o=g;var S=g;u=u.__wrapped__}return S.__wrapped__=r,o}function ox(){var r=this.__wrapped__;if(r instanceof bt){var o=r;return this.__actions__.length&&(o=new bt(this)),o=o.reverse(),o.__actions__.push({func:pa,args:[yc],thisArg:t}),new qn(o,this.__chain__)}return this.thru(yc)}function ax(){return af(this.__wrapped__,this.__actions__)}var lx=oa(function(r,o,u){It.call(r,u)?++r[u]:Ri(r,u,1)});function cx(r,o,u){var g=ft(r)?xh:Q_;return u&&xn(r,o,u)&&(o=t),g(r,Qe(o,3))}function ux(r,o){var u=ft(r)?$i:Vh;return u(r,Qe(o,3))}var hx=vf(zf),fx=vf(Gf);function dx(r,o){return cn(ma(r,o),1)}function px(r,o){return cn(ma(r,o),ce)}function mx(r,o,u){return u=u===t?1:mt(u),cn(ma(r,o),u)}function Yf(r,o){var u=ft(r)?Xn:ji;return u(r,Qe(o,3))}function qf(r,o){var u=ft(r)?Ug:kh;return u(r,Qe(o,3))}var gx=oa(function(r,o,u){It.call(r,u)?r[u].push(o):Ri(r,u,[o])});function _x(r,o,u,g){r=Cn(r)?r:fs(r),u=u&&!g?mt(u):0;var S=r.length;return u<0&&(u=en(S+u,0)),ya(r)?u<=S&&r.indexOf(o,u)>-1:!!S&&es(r,o,u)>-1}var vx=yt(function(r,o,u){var g=-1,S=typeof o=="function",w=Cn(r)?Q(r.length):[];return ji(r,function(N){w[++g]=S?Dn(o,N,u):io(N,o,u)}),w}),xx=oa(function(r,o,u){Ri(r,u,o)});function ma(r,o){var u=ft(r)?Vt:Zh;return u(r,Qe(o,3))}function yx(r,o,u,g){return r==null?[]:(ft(o)||(o=o==null?[]:[o]),u=g?t:u,ft(u)||(u=u==null?[]:[u]),Qh(r,o,u))}var Sx=oa(function(r,o,u){r[u?0:1].push(o)},function(){return[[],[]]});function Ex(r,o,u){var g=ft(r)?Dl:Mh,S=arguments.length<3;return g(r,Qe(o,4),u,S,ji)}function Mx(r,o,u){var g=ft(r)?Ng:Mh,S=arguments.length<3;return g(r,Qe(o,4),u,S,kh)}function bx(r,o){var u=ft(r)?$i:Vh;return u(r,va(Qe(o,3)))}function Tx(r){var o=ft(r)?Bh:_v;return o(r)}function Ax(r,o,u){(u?xn(r,o,u):o===t)?o=1:o=mt(o);var g=ft(r)?$_:vv;return g(r,o)}function wx(r){var o=ft(r)?Z_:yv;return o(r)}function Cx(r){if(r==null)return 0;if(Cn(r))return ya(r)?ns(r):r.length;var o=pn(r);return o==re||o==I?r.size:jl(r).length}function Rx(r,o,u){var g=ft(r)?Ul:Sv;return u&&xn(r,o,u)&&(o=t),g(r,Qe(o,3))}var Lx=yt(function(r,o){if(r==null)return[];var u=o.length;return u>1&&xn(r,o[0],o[1])?o=[]:u>2&&xn(o[0],o[1],o[2])&&(o=[o[0]]),Qh(r,cn(o,1),[])}),ga=u_||function(){return ln.Date.now()};function Px(r,o){if(typeof o!="function")throw new Yn(c);return r=mt(r),function(){if(--r<1)return o.apply(this,arguments)}}function $f(r,o,u){return o=u?t:o,o=r&&o==null?r.length:o,Li(r,R,t,t,t,t,o)}function Zf(r,o){var u;if(typeof o!="function")throw new Yn(c);return r=mt(r),function(){return--r>0&&(u=o.apply(this,arguments)),r<=1&&(o=t),u}}var Ec=yt(function(r,o,u){var g=_;if(u.length){var S=Ki(u,us(Ec));g|=z}return Li(r,g,o,u,S)}),Kf=yt(function(r,o,u){var g=_|p;if(u.length){var S=Ki(u,us(Kf));g|=z}return Li(o,g,r,u,S)});function Jf(r,o,u){o=u?t:o;var g=Li(r,E,t,t,t,t,t,o);return g.placeholder=Jf.placeholder,g}function jf(r,o,u){o=u?t:o;var g=Li(r,C,t,t,t,t,t,o);return g.placeholder=jf.placeholder,g}function Qf(r,o,u){var g,S,w,N,H,W,ae=0,he=!1,_e=!1,Ie=!0;if(typeof r!="function")throw new Yn(c);o=Jn(o)||0,Wt(u)&&(he=!!u.leading,_e="maxWait"in u,w=_e?en(Jn(u.maxWait)||0,o):w,Ie="trailing"in u?!!u.trailing:Ie);function $e(Kt){var si=g,Ni=S;return g=S=t,ae=Kt,N=r.apply(Ni,si),N}function it(Kt){return ae=Kt,H=lo(St,o),he?$e(Kt):N}function _t(Kt){var si=Kt-W,Ni=Kt-ae,vd=o-si;return _e?dn(vd,w-Ni):vd}function rt(Kt){var si=Kt-W,Ni=Kt-ae;return W===t||si>=o||si<0||_e&&Ni>=w}function St(){var Kt=ga();if(rt(Kt))return Tt(Kt);H=lo(St,_t(Kt))}function Tt(Kt){return H=t,Ie&&g?$e(Kt):(g=S=t,N)}function Fn(){H!==t&&cf(H),ae=0,g=W=S=H=t}function yn(){return H===t?N:Tt(ga())}function Bn(){var Kt=ga(),si=rt(Kt);if(g=arguments,S=this,W=Kt,si){if(H===t)return it(W);if(_e)return cf(H),H=lo(St,o),$e(W)}return H===t&&(H=lo(St,o)),N}return Bn.cancel=Fn,Bn.flush=yn,Bn}var Ix=yt(function(r,o){return Hh(r,1,o)}),Dx=yt(function(r,o,u){return Hh(r,Jn(o)||0,u)});function Ux(r){return Li(r,le)}function _a(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new Yn(c);var u=function(){var g=arguments,S=o?o.apply(this,g):g[0],w=u.cache;if(w.has(S))return w.get(S);var N=r.apply(this,g);return u.cache=w.set(S,N)||w,N};return u.cache=new(_a.Cache||Ci),u}_a.Cache=Ci;function va(r){if(typeof r!="function")throw new Yn(c);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Nx(r){return Zf(2,r)}var Ox=Ev(function(r,o){o=o.length==1&&ft(o[0])?Vt(o[0],Un(Qe())):Vt(cn(o,1),Un(Qe()));var u=o.length;return yt(function(g){for(var S=-1,w=dn(g.length,u);++S<w;)g[S]=o[S].call(this,g[S]);return Dn(r,this,g)})}),Mc=yt(function(r,o){var u=Ki(o,us(Mc));return Li(r,z,t,o,u)}),ed=yt(function(r,o){var u=Ki(o,us(ed));return Li(r,F,t,o,u)}),Fx=Pi(function(r,o){return Li(r,X,t,t,t,o)});function Bx(r,o){if(typeof r!="function")throw new Yn(c);return o=o===t?o:mt(o),yt(r,o)}function zx(r,o){if(typeof r!="function")throw new Yn(c);return o=o==null?0:en(mt(o),0),yt(function(u){var g=u[o],S=tr(u,0,o);return g&&Zi(S,g),Dn(r,this,S)})}function Gx(r,o,u){var g=!0,S=!0;if(typeof r!="function")throw new Yn(c);return Wt(u)&&(g="leading"in u?!!u.leading:g,S="trailing"in u?!!u.trailing:S),Qf(r,o,{leading:g,maxWait:o,trailing:S})}function Hx(r){return $f(r,1)}function kx(r,o){return Mc(ac(o),r)}function Vx(){if(!arguments.length)return[];var r=arguments[0];return ft(r)?r:[r]}function Wx(r){return $n(r,x)}function Xx(r,o){return o=typeof o=="function"?o:t,$n(r,x,o)}function Yx(r){return $n(r,m|x)}function qx(r,o){return o=typeof o=="function"?o:t,$n(r,m|x,o)}function $x(r,o){return o==null||Gh(r,o,sn(o))}function ri(r,o){return r===o||r!==r&&o!==o}var Zx=ua(Zl),Kx=ua(function(r,o){return r>=o}),Cr=Yh(function(){return arguments}())?Yh:function(r){return qt(r)&&It.call(r,"callee")&&!Ih.call(r,"callee")},ft=Q.isArray,Jx=dh?Un(dh):sv;function Cn(r){return r!=null&&xa(r.length)&&!Di(r)}function Zt(r){return qt(r)&&Cn(r)}function jx(r){return r===!0||r===!1||qt(r)&&vn(r)==He}var nr=f_||Uc,Qx=ph?Un(ph):ov;function ey(r){return qt(r)&&r.nodeType===1&&!co(r)}function ty(r){if(r==null)return!0;if(Cn(r)&&(ft(r)||typeof r=="string"||typeof r.splice=="function"||nr(r)||hs(r)||Cr(r)))return!r.length;var o=pn(r);if(o==re||o==I)return!r.size;if(ao(r))return!jl(r).length;for(var u in r)if(It.call(r,u))return!1;return!0}function ny(r,o){return ro(r,o)}function iy(r,o,u){u=typeof u=="function"?u:t;var g=u?u(r,o):t;return g===t?ro(r,o,t,u):!!g}function bc(r){if(!qt(r))return!1;var o=vn(r);return o==Xe||o==at||typeof r.message=="string"&&typeof r.name=="string"&&!co(r)}function ry(r){return typeof r=="number"&&Uh(r)}function Di(r){if(!Wt(r))return!1;var o=vn(r);return o==O||o==Ae||o==Je||o==ke}function td(r){return typeof r=="number"&&r==mt(r)}function xa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ie}function Wt(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function qt(r){return r!=null&&typeof r=="object"}var nd=mh?Un(mh):lv;function sy(r,o){return r===o||Jl(r,o,pc(o))}function oy(r,o,u){return u=typeof u=="function"?u:t,Jl(r,o,pc(o),u)}function ay(r){return id(r)&&r!=+r}function ly(r){if(Xv(r))throw new ct(a);return qh(r)}function cy(r){return r===null}function uy(r){return r==null}function id(r){return typeof r=="number"||qt(r)&&vn(r)==Me}function co(r){if(!qt(r)||vn(r)!=Pe)return!1;var o=Yo(r);if(o===null)return!0;var u=It.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&ko.call(u)==o_}var Tc=gh?Un(gh):cv;function hy(r){return td(r)&&r>=-ie&&r<=ie}var rd=_h?Un(_h):uv;function ya(r){return typeof r=="string"||!ft(r)&&qt(r)&&vn(r)==b}function On(r){return typeof r=="symbol"||qt(r)&&vn(r)==te}var hs=vh?Un(vh):hv;function fy(r){return r===t}function dy(r){return qt(r)&&pn(r)==ye}function py(r){return qt(r)&&vn(r)==ge}var my=ua(Ql),gy=ua(function(r,o){return r<=o});function sd(r){if(!r)return[];if(Cn(r))return ya(r)?ni(r):wn(r);if(Ks&&r[Ks])return $g(r[Ks]());var o=pn(r),u=o==re?Gl:o==I?zo:fs;return u(r)}function Ui(r){if(!r)return r===0?r:0;if(r=Jn(r),r===ce||r===-ce){var o=r<0?-1:1;return o*ue}return r===r?r:0}function mt(r){var o=Ui(r),u=o%1;return o===o?u?o-u:o:0}function od(r){return r?br(mt(r),0,xe):0}function Jn(r){if(typeof r=="number")return r;if(On(r))return me;if(Wt(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Wt(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=bh(r);var u=Y.test(r);return u||ee.test(r)?Pg(r.slice(2),u?2:8):L.test(r)?me:+r}function ad(r){return gi(r,Rn(r))}function _y(r){return r?br(mt(r),-ie,ie):r===0?r:0}function Rt(r){return r==null?"":Nn(r)}var vy=ls(function(r,o){if(ao(o)||Cn(o)){gi(o,sn(o),r);return}for(var u in o)It.call(o,u)&&to(r,u,o[u])}),ld=ls(function(r,o){gi(o,Rn(o),r)}),Sa=ls(function(r,o,u,g){gi(o,Rn(o),r,g)}),xy=ls(function(r,o,u,g){gi(o,sn(o),r,g)}),yy=Pi(Yl);function Sy(r,o){var u=as(r);return o==null?u:zh(u,o)}var Ey=yt(function(r,o){r=Nt(r);var u=-1,g=o.length,S=g>2?o[2]:t;for(S&&xn(o[0],o[1],S)&&(g=1);++u<g;)for(var w=o[u],N=Rn(w),H=-1,W=N.length;++H<W;){var ae=N[H],he=r[ae];(he===t||ri(he,rs[ae])&&!It.call(r,ae))&&(r[ae]=w[ae])}return r}),My=yt(function(r){return r.push(t,Tf),Dn(cd,t,r)});function by(r,o){return yh(r,Qe(o,3),mi)}function Ty(r,o){return yh(r,Qe(o,3),$l)}function Ay(r,o){return r==null?r:ql(r,Qe(o,3),Rn)}function wy(r,o){return r==null?r:Wh(r,Qe(o,3),Rn)}function Cy(r,o){return r&&mi(r,Qe(o,3))}function Ry(r,o){return r&&$l(r,Qe(o,3))}function Ly(r){return r==null?[]:na(r,sn(r))}function Py(r){return r==null?[]:na(r,Rn(r))}function Ac(r,o,u){var g=r==null?t:Tr(r,o);return g===t?u:g}function Iy(r,o){return r!=null&&Cf(r,o,tv)}function wc(r,o){return r!=null&&Cf(r,o,nv)}var Dy=yf(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Vo.call(o)),r[o]=u},Rc(Ln)),Uy=yf(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Vo.call(o)),It.call(r,o)?r[o].push(u):r[o]=[u]},Qe),Ny=yt(io);function sn(r){return Cn(r)?Fh(r):jl(r)}function Rn(r){return Cn(r)?Fh(r,!0):fv(r)}function Oy(r,o){var u={};return o=Qe(o,3),mi(r,function(g,S,w){Ri(u,o(g,S,w),g)}),u}function Fy(r,o){var u={};return o=Qe(o,3),mi(r,function(g,S,w){Ri(u,S,o(g,S,w))}),u}var By=ls(function(r,o,u){ia(r,o,u)}),cd=ls(function(r,o,u,g){ia(r,o,u,g)}),zy=Pi(function(r,o){var u={};if(r==null)return u;var g=!1;o=Vt(o,function(w){return w=er(w,r),g||(g=w.length>1),w}),gi(r,fc(r),u),g&&(u=$n(u,m|v|x,Dv));for(var S=o.length;S--;)rc(u,o[S]);return u});function Gy(r,o){return ud(r,va(Qe(o)))}var Hy=Pi(function(r,o){return r==null?{}:pv(r,o)});function ud(r,o){if(r==null)return{};var u=Vt(fc(r),function(g){return[g]});return o=Qe(o),ef(r,u,function(g,S){return o(g,S[0])})}function ky(r,o,u){o=er(o,r);var g=-1,S=o.length;for(S||(S=1,r=t);++g<S;){var w=r==null?t:r[_i(o[g])];w===t&&(g=S,w=u),r=Di(w)?w.call(r):w}return r}function Vy(r,o,u){return r==null?r:so(r,o,u)}function Wy(r,o,u,g){return g=typeof g=="function"?g:t,r==null?r:so(r,o,u,g)}var hd=Mf(sn),fd=Mf(Rn);function Xy(r,o,u){var g=ft(r),S=g||nr(r)||hs(r);if(o=Qe(o,4),u==null){var w=r&&r.constructor;S?u=g?new w:[]:Wt(r)?u=Di(w)?as(Yo(r)):{}:u={}}return(S?Xn:mi)(r,function(N,H,W){return o(u,N,H,W)}),u}function Yy(r,o){return r==null?!0:rc(r,o)}function qy(r,o,u){return r==null?r:of(r,o,ac(u))}function $y(r,o,u,g){return g=typeof g=="function"?g:t,r==null?r:of(r,o,ac(u),g)}function fs(r){return r==null?[]:zl(r,sn(r))}function Zy(r){return r==null?[]:zl(r,Rn(r))}function Ky(r,o,u){return u===t&&(u=o,o=t),u!==t&&(u=Jn(u),u=u===u?u:0),o!==t&&(o=Jn(o),o=o===o?o:0),br(Jn(r),o,u)}function Jy(r,o,u){return o=Ui(o),u===t?(u=o,o=0):u=Ui(u),r=Jn(r),iv(r,o,u)}function jy(r,o,u){if(u&&typeof u!="boolean"&&xn(r,o,u)&&(o=u=t),u===t&&(typeof o=="boolean"?(u=o,o=t):typeof r=="boolean"&&(u=r,r=t)),r===t&&o===t?(r=0,o=1):(r=Ui(r),o===t?(o=r,r=0):o=Ui(o)),r>o){var g=r;r=o,o=g}if(u||r%1||o%1){var S=Nh();return dn(r+S*(o-r+Lg("1e-"+((S+"").length-1))),o)}return tc(r,o)}var Qy=cs(function(r,o,u){return o=o.toLowerCase(),r+(u?dd(o):o)});function dd(r){return Cc(Rt(r).toLowerCase())}function pd(r){return r=Rt(r),r&&r.replace(Be,Vg).replace(yg,"")}function eS(r,o,u){r=Rt(r),o=Nn(o);var g=r.length;u=u===t?g:br(mt(u),0,g);var S=u;return u-=o.length,u>=0&&r.slice(u,S)==o}function tS(r){return r=Rt(r),r&&Ee.test(r)?r.replace(be,Wg):r}function nS(r){return r=Rt(r),r&&rn.test(r)?r.replace(Pt,"\\$&"):r}var iS=cs(function(r,o,u){return r+(u?"-":"")+o.toLowerCase()}),rS=cs(function(r,o,u){return r+(u?" ":"")+o.toLowerCase()}),sS=_f("toLowerCase");function oS(r,o,u){r=Rt(r),o=mt(o);var g=o?ns(r):0;if(!o||g>=o)return r;var S=(o-g)/2;return ca(Ko(S),u)+r+ca(Zo(S),u)}function aS(r,o,u){r=Rt(r),o=mt(o);var g=o?ns(r):0;return o&&g<o?r+ca(o-g,u):r}function lS(r,o,u){r=Rt(r),o=mt(o);var g=o?ns(r):0;return o&&g<o?ca(o-g,u)+r:r}function cS(r,o,u){return u||o==null?o=0:o&&(o=+o),g_(Rt(r).replace(ei,""),o||0)}function uS(r,o,u){return(u?xn(r,o,u):o===t)?o=1:o=mt(o),nc(Rt(r),o)}function hS(){var r=arguments,o=Rt(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var fS=cs(function(r,o,u){return r+(u?"_":"")+o.toLowerCase()});function dS(r,o,u){return u&&typeof u!="number"&&xn(r,o,u)&&(o=u=t),u=u===t?xe:u>>>0,u?(r=Rt(r),r&&(typeof o=="string"||o!=null&&!Tc(o))&&(o=Nn(o),!o&&ts(r))?tr(ni(r),0,u):r.split(o,u)):[]}var pS=cs(function(r,o,u){return r+(u?" ":"")+Cc(o)});function mS(r,o,u){return r=Rt(r),u=u==null?0:br(mt(u),0,r.length),o=Nn(o),r.slice(u,u+o.length)==o}function gS(r,o,u){var g=A.templateSettings;u&&xn(r,o,u)&&(o=t),r=Rt(r),o=Sa({},o,g,bf);var S=Sa({},o.imports,g.imports,bf),w=sn(S),N=zl(S,w),H,W,ae=0,he=o.interpolate||qe,_e="__p += '",Ie=Hl((o.escape||qe).source+"|"+he.source+"|"+(he===wt?Al:qe).source+"|"+(o.evaluate||qe).source+"|$","g"),$e="//# sourceURL="+(It.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Tg+"]")+`
`;r.replace(Ie,function(rt,St,Tt,Fn,yn,Bn){return Tt||(Tt=Fn),_e+=r.slice(ae,Bn).replace(tt,Xg),St&&(H=!0,_e+=`' +
__e(`+St+`) +
'`),yn&&(W=!0,_e+=`';
`+yn+`;
__p += '`),Tt&&(_e+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),ae=Bn+rt.length,rt}),_e+=`';
`;var it=It.call(o,"variable")&&o.variable;if(!it)_e=`with (obj) {
`+_e+`
}
`;else if(Uo.test(it))throw new ct(l);_e=(W?_e.replace(U,""):_e).replace(fe,"$1").replace(Ve,"$1;"),_e="function("+(it||"obj")+`) {
`+(it?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var _t=gd(function(){return Ct(w,$e+"return "+_e).apply(t,N)});if(_t.source=_e,bc(_t))throw _t;return _t}function _S(r){return Rt(r).toLowerCase()}function vS(r){return Rt(r).toUpperCase()}function xS(r,o,u){if(r=Rt(r),r&&(u||o===t))return bh(r);if(!r||!(o=Nn(o)))return r;var g=ni(r),S=ni(o),w=Th(g,S),N=Ah(g,S)+1;return tr(g,w,N).join("")}function yS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.slice(0,Ch(r)+1);if(!r||!(o=Nn(o)))return r;var g=ni(r),S=Ah(g,ni(o))+1;return tr(g,0,S).join("")}function SS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.replace(ei,"");if(!r||!(o=Nn(o)))return r;var g=ni(r),S=Th(g,ni(o));return tr(g,S).join("")}function ES(r,o){var u=T,g=D;if(Wt(o)){var S="separator"in o?o.separator:S;u="length"in o?mt(o.length):u,g="omission"in o?Nn(o.omission):g}r=Rt(r);var w=r.length;if(ts(r)){var N=ni(r);w=N.length}if(u>=w)return r;var H=u-ns(g);if(H<1)return g;var W=N?tr(N,0,H).join(""):r.slice(0,H);if(S===t)return W+g;if(N&&(H+=W.length-H),Tc(S)){if(r.slice(H).search(S)){var ae,he=W;for(S.global||(S=Hl(S.source,Rt(No.exec(S))+"g")),S.lastIndex=0;ae=S.exec(he);)var _e=ae.index;W=W.slice(0,_e===t?H:_e)}}else if(r.indexOf(Nn(S),H)!=H){var Ie=W.lastIndexOf(S);Ie>-1&&(W=W.slice(0,Ie))}return W+g}function MS(r){return r=Rt(r),r&&q.test(r)?r.replace(G,jg):r}var bS=cs(function(r,o,u){return r+(u?" ":"")+o.toUpperCase()}),Cc=_f("toUpperCase");function md(r,o,u){return r=Rt(r),o=u?t:o,o===t?qg(r)?t_(r):Bg(r):r.match(o)||[]}var gd=yt(function(r,o){try{return Dn(r,t,o)}catch(u){return bc(u)?u:new ct(u)}}),TS=Pi(function(r,o){return Xn(o,function(u){u=_i(u),Ri(r,u,Ec(r[u],r))}),r});function AS(r){var o=r==null?0:r.length,u=Qe();return r=o?Vt(r,function(g){if(typeof g[1]!="function")throw new Yn(c);return[u(g[0]),g[1]]}):[],yt(function(g){for(var S=-1;++S<o;){var w=r[S];if(Dn(w[0],this,g))return Dn(w[1],this,g)}})}function wS(r){return j_($n(r,m))}function Rc(r){return function(){return r}}function CS(r,o){return r==null||r!==r?o:r}var RS=xf(),LS=xf(!0);function Ln(r){return r}function Lc(r){return $h(typeof r=="function"?r:$n(r,m))}function PS(r){return Kh($n(r,m))}function IS(r,o){return Jh(r,$n(o,m))}var DS=yt(function(r,o){return function(u){return io(u,r,o)}}),US=yt(function(r,o){return function(u){return io(r,u,o)}});function Pc(r,o,u){var g=sn(o),S=na(o,g);u==null&&!(Wt(o)&&(S.length||!g.length))&&(u=o,o=r,r=this,S=na(o,sn(o)));var w=!(Wt(u)&&"chain"in u)||!!u.chain,N=Di(r);return Xn(S,function(H){var W=o[H];r[H]=W,N&&(r.prototype[H]=function(){var ae=this.__chain__;if(w||ae){var he=r(this.__wrapped__),_e=he.__actions__=wn(this.__actions__);return _e.push({func:W,args:arguments,thisArg:r}),he.__chain__=ae,he}return W.apply(r,Zi([this.value()],arguments))})}),r}function NS(){return ln._===this&&(ln._=a_),this}function Ic(){}function OS(r){return r=mt(r),yt(function(o){return jh(o,r)})}var FS=cc(Vt),BS=cc(xh),zS=cc(Ul);function _d(r){return gc(r)?Nl(_i(r)):mv(r)}function GS(r){return function(o){return r==null?t:Tr(r,o)}}var HS=Sf(),kS=Sf(!0);function Dc(){return[]}function Uc(){return!1}function VS(){return{}}function WS(){return""}function XS(){return!0}function YS(r,o){if(r=mt(r),r<1||r>ie)return[];var u=xe,g=dn(r,xe);o=Qe(o),r-=xe;for(var S=Bl(g,o);++u<r;)o(u);return S}function qS(r){return ft(r)?Vt(r,_i):On(r)?[r]:wn(Ff(Rt(r)))}function $S(r){var o=++s_;return Rt(r)+o}var ZS=la(function(r,o){return r+o},0),KS=uc("ceil"),JS=la(function(r,o){return r/o},1),jS=uc("floor");function QS(r){return r&&r.length?ta(r,Ln,Zl):t}function eE(r,o){return r&&r.length?ta(r,Qe(o,2),Zl):t}function tE(r){return Eh(r,Ln)}function nE(r,o){return Eh(r,Qe(o,2))}function iE(r){return r&&r.length?ta(r,Ln,Ql):t}function rE(r,o){return r&&r.length?ta(r,Qe(o,2),Ql):t}var sE=la(function(r,o){return r*o},1),oE=uc("round"),aE=la(function(r,o){return r-o},0);function lE(r){return r&&r.length?Fl(r,Ln):0}function cE(r,o){return r&&r.length?Fl(r,Qe(o,2)):0}return A.after=Px,A.ary=$f,A.assign=vy,A.assignIn=ld,A.assignInWith=Sa,A.assignWith=xy,A.at=yy,A.before=Zf,A.bind=Ec,A.bindAll=TS,A.bindKey=Kf,A.castArray=Vx,A.chain=Xf,A.chunk=jv,A.compact=Qv,A.concat=e0,A.cond=AS,A.conforms=wS,A.constant=Rc,A.countBy=lx,A.create=Sy,A.curry=Jf,A.curryRight=jf,A.debounce=Qf,A.defaults=Ey,A.defaultsDeep=My,A.defer=Ix,A.delay=Dx,A.difference=t0,A.differenceBy=n0,A.differenceWith=i0,A.drop=r0,A.dropRight=s0,A.dropRightWhile=o0,A.dropWhile=a0,A.fill=l0,A.filter=ux,A.flatMap=dx,A.flatMapDeep=px,A.flatMapDepth=mx,A.flatten=Hf,A.flattenDeep=c0,A.flattenDepth=u0,A.flip=Ux,A.flow=RS,A.flowRight=LS,A.fromPairs=h0,A.functions=Ly,A.functionsIn=Py,A.groupBy=gx,A.initial=d0,A.intersection=p0,A.intersectionBy=m0,A.intersectionWith=g0,A.invert=Dy,A.invertBy=Uy,A.invokeMap=vx,A.iteratee=Lc,A.keyBy=xx,A.keys=sn,A.keysIn=Rn,A.map=ma,A.mapKeys=Oy,A.mapValues=Fy,A.matches=PS,A.matchesProperty=IS,A.memoize=_a,A.merge=By,A.mergeWith=cd,A.method=DS,A.methodOf=US,A.mixin=Pc,A.negate=va,A.nthArg=OS,A.omit=zy,A.omitBy=Gy,A.once=Nx,A.orderBy=yx,A.over=FS,A.overArgs=Ox,A.overEvery=BS,A.overSome=zS,A.partial=Mc,A.partialRight=ed,A.partition=Sx,A.pick=Hy,A.pickBy=ud,A.property=_d,A.propertyOf=GS,A.pull=y0,A.pullAll=Vf,A.pullAllBy=S0,A.pullAllWith=E0,A.pullAt=M0,A.range=HS,A.rangeRight=kS,A.rearg=Fx,A.reject=bx,A.remove=b0,A.rest=Bx,A.reverse=yc,A.sampleSize=Ax,A.set=Vy,A.setWith=Wy,A.shuffle=wx,A.slice=T0,A.sortBy=Lx,A.sortedUniq=I0,A.sortedUniqBy=D0,A.split=dS,A.spread=zx,A.tail=U0,A.take=N0,A.takeRight=O0,A.takeRightWhile=F0,A.takeWhile=B0,A.tap=Q0,A.throttle=Gx,A.thru=pa,A.toArray=sd,A.toPairs=hd,A.toPairsIn=fd,A.toPath=qS,A.toPlainObject=ad,A.transform=Xy,A.unary=Hx,A.union=z0,A.unionBy=G0,A.unionWith=H0,A.uniq=k0,A.uniqBy=V0,A.uniqWith=W0,A.unset=Yy,A.unzip=Sc,A.unzipWith=Wf,A.update=qy,A.updateWith=$y,A.values=fs,A.valuesIn=Zy,A.without=X0,A.words=md,A.wrap=kx,A.xor=Y0,A.xorBy=q0,A.xorWith=$0,A.zip=Z0,A.zipObject=K0,A.zipObjectDeep=J0,A.zipWith=j0,A.entries=hd,A.entriesIn=fd,A.extend=ld,A.extendWith=Sa,Pc(A,A),A.add=ZS,A.attempt=gd,A.camelCase=Qy,A.capitalize=dd,A.ceil=KS,A.clamp=Ky,A.clone=Wx,A.cloneDeep=Yx,A.cloneDeepWith=qx,A.cloneWith=Xx,A.conformsTo=$x,A.deburr=pd,A.defaultTo=CS,A.divide=JS,A.endsWith=eS,A.eq=ri,A.escape=tS,A.escapeRegExp=nS,A.every=cx,A.find=hx,A.findIndex=zf,A.findKey=by,A.findLast=fx,A.findLastIndex=Gf,A.findLastKey=Ty,A.floor=jS,A.forEach=Yf,A.forEachRight=qf,A.forIn=Ay,A.forInRight=wy,A.forOwn=Cy,A.forOwnRight=Ry,A.get=Ac,A.gt=Zx,A.gte=Kx,A.has=Iy,A.hasIn=wc,A.head=kf,A.identity=Ln,A.includes=_x,A.indexOf=f0,A.inRange=Jy,A.invoke=Ny,A.isArguments=Cr,A.isArray=ft,A.isArrayBuffer=Jx,A.isArrayLike=Cn,A.isArrayLikeObject=Zt,A.isBoolean=jx,A.isBuffer=nr,A.isDate=Qx,A.isElement=ey,A.isEmpty=ty,A.isEqual=ny,A.isEqualWith=iy,A.isError=bc,A.isFinite=ry,A.isFunction=Di,A.isInteger=td,A.isLength=xa,A.isMap=nd,A.isMatch=sy,A.isMatchWith=oy,A.isNaN=ay,A.isNative=ly,A.isNil=uy,A.isNull=cy,A.isNumber=id,A.isObject=Wt,A.isObjectLike=qt,A.isPlainObject=co,A.isRegExp=Tc,A.isSafeInteger=hy,A.isSet=rd,A.isString=ya,A.isSymbol=On,A.isTypedArray=hs,A.isUndefined=fy,A.isWeakMap=dy,A.isWeakSet=py,A.join=_0,A.kebabCase=iS,A.last=Kn,A.lastIndexOf=v0,A.lowerCase=rS,A.lowerFirst=sS,A.lt=my,A.lte=gy,A.max=QS,A.maxBy=eE,A.mean=tE,A.meanBy=nE,A.min=iE,A.minBy=rE,A.stubArray=Dc,A.stubFalse=Uc,A.stubObject=VS,A.stubString=WS,A.stubTrue=XS,A.multiply=sE,A.nth=x0,A.noConflict=NS,A.noop=Ic,A.now=ga,A.pad=oS,A.padEnd=aS,A.padStart=lS,A.parseInt=cS,A.random=jy,A.reduce=Ex,A.reduceRight=Mx,A.repeat=uS,A.replace=hS,A.result=ky,A.round=oE,A.runInContext=k,A.sample=Tx,A.size=Cx,A.snakeCase=fS,A.some=Rx,A.sortedIndex=A0,A.sortedIndexBy=w0,A.sortedIndexOf=C0,A.sortedLastIndex=R0,A.sortedLastIndexBy=L0,A.sortedLastIndexOf=P0,A.startCase=pS,A.startsWith=mS,A.subtract=aE,A.sum=lE,A.sumBy=cE,A.template=gS,A.times=YS,A.toFinite=Ui,A.toInteger=mt,A.toLength=od,A.toLower=_S,A.toNumber=Jn,A.toSafeInteger=_y,A.toString=Rt,A.toUpper=vS,A.trim=xS,A.trimEnd=yS,A.trimStart=SS,A.truncate=ES,A.unescape=MS,A.uniqueId=$S,A.upperCase=bS,A.upperFirst=Cc,A.each=Yf,A.eachRight=qf,A.first=kf,Pc(A,function(){var r={};return mi(A,function(o,u){It.call(A.prototype,u)||(r[u]=o)}),r}(),{chain:!1}),A.VERSION=n,Xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),Xn(["drop","take"],function(r,o){bt.prototype[r]=function(u){u=u===t?1:en(mt(u),0);var g=this.__filtered__&&!o?new bt(this):this.clone();return g.__filtered__?g.__takeCount__=dn(u,g.__takeCount__):g.__views__.push({size:dn(u,xe),type:r+(g.__dir__<0?"Right":"")}),g},bt.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),Xn(["filter","map","takeWhile"],function(r,o){var u=o+1,g=u==B||u==J;bt.prototype[r]=function(S){var w=this.clone();return w.__iteratees__.push({iteratee:Qe(S,3),type:u}),w.__filtered__=w.__filtered__||g,w}}),Xn(["head","last"],function(r,o){var u="take"+(o?"Right":"");bt.prototype[r]=function(){return this[u](1).value()[0]}}),Xn(["initial","tail"],function(r,o){var u="drop"+(o?"":"Right");bt.prototype[r]=function(){return this.__filtered__?new bt(this):this[u](1)}}),bt.prototype.compact=function(){return this.filter(Ln)},bt.prototype.find=function(r){return this.filter(r).head()},bt.prototype.findLast=function(r){return this.reverse().find(r)},bt.prototype.invokeMap=yt(function(r,o){return typeof r=="function"?new bt(this):this.map(function(u){return io(u,r,o)})}),bt.prototype.reject=function(r){return this.filter(va(Qe(r)))},bt.prototype.slice=function(r,o){r=mt(r);var u=this;return u.__filtered__&&(r>0||o<0)?new bt(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),o!==t&&(o=mt(o),u=o<0?u.dropRight(-o):u.take(o-r)),u)},bt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},bt.prototype.toArray=function(){return this.take(xe)},mi(bt.prototype,function(r,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),g=/^(?:head|last)$/.test(o),S=A[g?"take"+(o=="last"?"Right":""):o],w=g||/^find/.test(o);S&&(A.prototype[o]=function(){var N=this.__wrapped__,H=g?[1]:arguments,W=N instanceof bt,ae=H[0],he=W||ft(N),_e=function(St){var Tt=S.apply(A,Zi([St],H));return g&&Ie?Tt[0]:Tt};he&&u&&typeof ae=="function"&&ae.length!=1&&(W=he=!1);var Ie=this.__chain__,$e=!!this.__actions__.length,it=w&&!Ie,_t=W&&!$e;if(!w&&he){N=_t?N:new bt(this);var rt=r.apply(N,H);return rt.__actions__.push({func:pa,args:[_e],thisArg:t}),new qn(rt,Ie)}return it&&_t?r.apply(this,H):(rt=this.thru(_e),it?g?rt.value()[0]:rt.value():rt)})}),Xn(["pop","push","shift","sort","splice","unshift"],function(r){var o=Go[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",g=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var S=arguments;if(g&&!this.__chain__){var w=this.value();return o.apply(ft(w)?w:[],S)}return this[u](function(N){return o.apply(ft(N)?N:[],S)})}}),mi(bt.prototype,function(r,o){var u=A[o];if(u){var g=u.name+"";It.call(os,g)||(os[g]=[]),os[g].push({name:o,func:u})}}),os[aa(t,p).name]=[{name:"wrapper",func:t}],bt.prototype.clone=M_,bt.prototype.reverse=b_,bt.prototype.value=T_,A.prototype.at=ex,A.prototype.chain=tx,A.prototype.commit=nx,A.prototype.next=ix,A.prototype.plant=sx,A.prototype.reverse=ox,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=ax,A.prototype.first=A.prototype.head,Ks&&(A.prototype[Ks]=rx),A},is=n_();yr?((yr.exports=is)._=is,Ll._=is):ln._=is}).call(vo)})(dl,dl.exports);var vu=dl.exports;const eR={dotSize:6,genePercentile:.99,cameraPositionZ:300,cameraPositionY:50,cameraPositionX:40,umapOffset:1e4,cameraUmapPositionY:0,cameraUmapPositionZ:400},_n=new Ws(eR);function xu(i){const t={..._n.getValue(),dotSize:i};_n.next(t)}function lm(i){const e=_n.getValue(),t=i*.01,n={...e,genePercentile:t};_n.next(n)}const tR=i=>{const e=document.getElementById("loadingIndicator");i?e.style.display="flex":e.style.display="none"},nR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),iR(t)})};function iR(i){const e=document.getElementById("cellNotFound");let t=Mt.value.listPalette;i?(t=Mt.value.listPalette.filter(([n,s])=>n.toLowerCase().startsWith(i)),console.log(t),pl(t)):pl(Mt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function pl(i){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",i.sort((s,a)=>s[0].toLowerCase()<a[0].toLowerCase()?-1:s[0].toLowerCase()>a[0].toLowerCase()?1:0),i.forEach(([s,a])=>{const c=document.createElement("input");c.type="checkbox",c.className="box",c.id=s,c.value=s,We.value.selectedCelltypes.includes(s)&&(c.checked=!0);const l=document.createElement("label");l.htmlFor=s,l.style.color=a,l.appendChild(c),l.appendChild(document.createTextNode(s));let h,f,d,m,x=((y,M)=>{for(const _ in y)if(y[_].includes(M))return _;return!1})(Mt.value.groups,s);if(x){const y=`${x}-group`;Object.keys(e).includes(x)?(h=document.getElementById(`${x}-div`),f=document.getElementById(y),d=document.getElementById(`${x}-label`),m=document.getElementById(`${x}-list`)):(e[x]=[],h=document.createElement("div"),h.id=`${x}-div`,d=document.createElement("label"),d.htmlFor=x,d.setAttribute("for",y),d.style.color="white",d.id=`${x}-label`,f=document.createElement("input"),f.type="checkbox",f.classList.add("box"),f.classList.add("group-input"),f.value=x,f.id=y,d.appendChild(f),d.appendChild(document.createTextNode(x.toUpperCase())),m=document.createElement("ul"),m.id=`${x}-list`,m.style.marginBottom=0,h.appendChild(d),h.appendChild(m),t.appendChild(h));const M=document.createElement("li");M.id=`${x}-item`,m.appendChild(l),m.append(document.createElement("br")),e[x].push(c),t.appendChild(h)}else t.appendChild(l),t.appendChild(document.createElement("br"));c.addEventListener("change",y=>{console.log(y),rR(s,y.target.checked)})});const n=document.getElementsByClassName("group-input");Array.prototype.slice.call(n).forEach(s=>{s.addEventListener("change",a=>{let c=We.value.selectedCelltypes.map(l=>l);console.log("CHECKING",c),e[a.target.value].forEach(l=>{l.checked=a.target.checked,a.target.checked?c.push(l.value):c.splice(c.indexOf(l.value),1)}),Ro(c)}),e[s.value].forEach(a=>{let c=!0;a.checked||(c=!1),s.checked=c,a.addEventListener("change",()=>{let l=!0;e[s.value].forEach(h=>{h.checked||(l=!1)}),s.checked=l})})})}async function rR(i,e){let t=We.value.selectedCelltypes.map(n=>n);e?(t.push(i),Ro(t)):(t=t.filter(n=>n!==i),Ro(t))}const sR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{Ro([]),pl(Mt.value.listPalette),cellTextbox.value=""})},oR=()=>{const i=document.getElementById("cellFilters");i.innerHTML="",We.value.selectedCelltypes.length!==0?We.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=Mt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,i.appendChild(t)}):i.innerHTML="No celltype filters selected"};async function Xs(i,e,t=!1){let n="";if(t==!0?n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_atac_new.csv`):n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s===void 0||s.gene_values==null)return"[]";let a=s.gene_values.split(",").filter(h=>h!=="");return["clusters","clusters_pal","genes","hierarchical_clusters"].includes(i)==!0?(a.shift(),a):(a.shift(),a.map(f=>parseFloat(f)))}async function aR(i,e=1e5){let t="";if(t=await fetch(`https://backendbasel.techkyra.com/get-intervals?gene=${i}&range=${e}`),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();return n===void 0?"[]":n}const lR=()=>{};function cR(i){const e=document.getElementById("atacNotFound");if(i){const t=Mt.value.atacs.filter(n=>n.toLowerCase().startsWith(i));console.log(t),Gu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Gu(Mt.value.atacs.slice(0,1e3))}function Gu(i){const e=document.getElementById("atacContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedAtacs.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedAtacs.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedAtacs.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedAtacs[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(vr([]),c.target.checked=!0)}ag(t,c.target.checked)})})}function ag(i,e){let t=We.value.selectedAtacs.map(n=>n);e?(t.push(i),vr(t)):(t=t.filter(n=>n!==i),vr(t))}const nh=()=>{document.getElementById("atacClearButton").addEventListener("click",()=>{vr([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),vr([]),atacTextbox.value=""})},uR=()=>{document.getElementById("atacEnterButton").addEventListener("click",()=>{console.log("entered clicked");const t=document.getElementById("atacTextbox").value.toLowerCase();cR(t)})},hR=()=>{const i=document.getElementById("atacFilters");i.innerHTML="",We.value.selectedAtacs.length!==0?We.value.selectedAtacs.forEach((e,t)=>{const n=document.createElement("p");n.style.color=t===0?"magenta":"green",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No ATAC filters selected"},fR=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedAtacs.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedAtacs.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#atacContainer [value=${CSS.escape(We.value.selectedAtacs[0])}]`);c!==null&&(c.checked=!1),ag(t.value,!1)})}),We.value.selectedAtacs.length>0){const e=document.createElement("p");e.innerText="Selected atacs",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function dR(i){const e=i.match(/^(\d+)-(\d+)-(\d+)$/);return e?`chr${e[1]}:${e[2]}-${e[3]}`:null}function pR(i){const e=i.match(/^chr(\d+):(\d+)-(\d+)$/);return e?`${e[1]}-${e[2]}-${e[3]}`:null}function cm(i){return Xs(i,Mt.value.prefix)}function um(i){return Xs(pR(i),Mt.value.prefix,!0)}function mR(i,e){const t={r:255,g:255,b:255},n={r:0,g:255,b:0},s={r:255,g:0,b:255},a={r:Math.round(n.r+(t.r-n.r)*e),g:Math.round(n.g+(t.g-n.g)*e),b:Math.round(n.b+(t.b-n.b)*e)},c={r:Math.round(s.r+(t.r-s.r)*i),g:Math.round(s.g+(t.g-s.g)*i),b:Math.round(s.b+(t.b-s.b)*i)},l={r:(a.r+c.r)/2,g:(a.g+c.g)/2,b:(a.b+c.b)/2};return`rgb(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)})`}function Ka(i,e){const t={r:0,g:0,b:255},n={r:255,g:255,b:255},s={r:255,g:0,b:0};return e==null?i<.5?`rgb(${Math.floor(n.r*i*2)}, ${Math.floor(n.g*i*2)}, ${t.b})`:i===.5?`rgb(${n.r}, ${n.g}, ${n.b})`:`rgb(${s.r}, ${Math.floor(n.g-n.g*(i-.5)*2)}, ${Math.floor(n.b-n.b*(i-.5)*2)})`:mR(i,e)}function Ja(i,e){const t=i.slice().sort((s,a)=>s-a),n=Math.floor(t.length*e)-1;return t[n]}function ja(i,e){return i.map(t=>Math.min(t/e,1))}const gR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),_R(t)})};function _R(i){const e=document.getElementById("geneNotFound");if(i){const t=Mt.value.genes.filter(n=>n.toLowerCase().startsWith(i));Hu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Hu(Mt.value.genes.slice(0,1e3))}function Hu(i){const e=document.getElementById("geneContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedGenes.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedGenes.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedGenes.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedGenes[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(Hs([]),c.target.checked=!0)}lg(t,c.target.checked)})})}function vR(){const i=document.getElementById("modeButton");i.value=We.value.mode,i.value==="1"?(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")):(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")),i.onclick=()=>{let e=i.value==="1";e?(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")):(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")),i.value=e?2:1,jC(e?2:1),e?ug():document.getElementById("selectedContainer").innerHTML=""}}function lg(i,e){let t=We.value.selectedGenes.map(n=>n);e?(t.push(i),Hs(t)):(t=t.filter(n=>n!==i),Hs(t))}const cg=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{Hs([]),sg([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),vr([]),geneTextbox.value=""})},xR=()=>{const i=document.getElementById("geneFilters");i.innerHTML="",We.value.selectedGenes.length!==0?We.value.selectedGenes.forEach((e,t)=>{const n=document.createElement("p");We.value.selectedGenes.length===1?n.style.color="white":n.style.color=t===0?"green":"magenta",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No gene filters selected"},ug=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedGenes.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#geneContainer [value=${CSS.escape(We.value.selectedGenes[0])}]`);c!==null&&(c.checked=!1),lg(t.value,!1)})}),We.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}},xo=i=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:e},"",e)};class yR extends Qu{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new bC(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){const h=a.parse(JSON.parse(l));t&&t(h)},n,s)}parse(e){return new SR(e)}}class SR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=ER(e,t,this.data);for(let a=0,c=s.length;a<c;a++)n.push(...s[a].toShapes());return n}}function ER(i,e,t){const n=Array.from(i),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,c=[];let l=0,h=0;for(let f=0;f<n.length;f++){const d=n[f];if(d===`
`)l=0,h-=a;else{const m=MR(d,s,l,h,t);l+=m.offsetX,c.push(m.path)}}return c}function MR(i,e,t,n,s){const a=s.glyphs[i]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const c=new TC;let l,h,f,d,m,v,x,y;if(a.o){const M=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let _=0,p=M.length;_<p;)switch(M[_++]){case"m":l=M[_++]*e+t,h=M[_++]*e+n,c.moveTo(l,h);break;case"l":l=M[_++]*e+t,h=M[_++]*e+n,c.lineTo(l,h);break;case"q":f=M[_++]*e+t,d=M[_++]*e+n,m=M[_++]*e+t,v=M[_++]*e+n,c.quadraticCurveTo(m,v,f,d);break;case"b":f=M[_++]*e+t,d=M[_++]*e+n,m=M[_++]*e+t,v=M[_++]*e+n,x=M[_++]*e+t,y=M[_++]*e+n,c.bezierCurveTo(m,v,x,y,f,d);break}}return{offsetX:a.ha*e,path:c}}class hm extends Ju{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}function yu(i){const e=document.querySelector(".showing-badge");if(!e){console.error("Badge container not found");return}e.querySelectorAll(".showing-label").forEach(s=>s.style.display="none");const n=e.querySelector(`.showing-${i}`);n?n.style.display="inline-block":console.warn(`Unknown label: ${i}`)}function bR(i,e){const t=document.getElementById("top-label"),n=document.getElementById("bottom-label");let s=e;e<1?s=e.toExponential(1):s=Math.round(e),t&&n?(t.textContent=s,n.textContent=i):console.error("Labels not found in the DOM.")}function fm(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function TR(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}We.pipe(vi(i=>i.intervalsData),xi((i,e)=>i.join()===e.join())).subscribe(async i=>{AR(We.value.selectedGenes[0]),wR(i)});function AR(i){const e=document.querySelector(".left-text");e.textContent=i}function wR(i=[]){const e=document.getElementById("line-container"),t=document.getElementById("middle-space");if(!e||!t){console.error("Required elements not found");return}if(i.length===0)t.style.display="none";else{t.style.display="grid";let n=1;e.innerHTML="";let s,a=!1;i.forEach(c=>{const l=document.createElement("div"),h=document.createElement("div");if(h.className="tooltip",c.label==="atac")c.enriched===1?l.className="atac-peaks-enriched":l.className="atac-peaks",h.textContent=c.interval,l.style.zIndex=n,n++,l.addEventListener("mouseout",()=>{l.style.zIndex=1}),l.addEventListener("mouseover",()=>{a||(s=setTimeout(()=>{Qa(c)},800))}),l.addEventListener("mouseout",()=>{l.style.zindex=1,a||(clearTimeout(s),l.classList.contains("clicked")||Qa([]))}),l.addEventListener("click",()=>{clearTimeout(s);const f=document.querySelector(".atac-peaks.clicked, .atac-peaks-enriched.clicked");f&&f!==l&&(f.classList.remove("clicked"),f.style.background=""),l.classList.toggle("clicked"),a=l.classList.contains("clicked"),Qa(a?c:[])});else{let f=c.label[0]==="-";c.label.split("__")[1]==="mygene"?f?l.className="gene-left":l.className="gene":f?l.className="gene-left-border":l.className="gene-border";let m=c.label.split("__").pop();h.textContent=m,l.addEventListener("mouseover",()=>{}),l.addEventListener("mouseout",()=>{l.style.zIndex=196}),l.addEventListener("click",async()=>{CR(c)})}l.addEventListener("mouseover",()=>{l.style.zIndex=1998}),l.style.left=c.start*100+"%",l.style.width=c.width*100+"%",l.appendChild(h),e.appendChild(l)})}}function Qa(i){if(console.log("Peak clicked:",i),i==[]){nh();return}vr([i.interval])}function CR(i){console.log("Gene clicked:",i);let e=RR(i.label.split("__").pop());e==null?alert(`Gene ${i} was not measured`):(vr([]),Hs([e]))}function RR(i){return Mt.value.genes.includes(`${i}_measured`)?`${i}_measured`:Mt.value.genes.includes(`${i}_imputed`)?`${i}_imputed`:null}async function LR(i){try{const e=await aR(i);sg(e.intervals)}catch(e){console.error("Error fetching interval gene:",e)}}const PR=new URL(window.location),ci=new URLSearchParams(PR.search);new Ce;class IR{constructor(e){xd(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}addText(){new yR().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",t=>{const n=new hm("Anterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),s=new ul({color:16777215}),a=new kn(n,s);a.position.set(-30,190,0),this.scene.add(a);const c=new hm("Posterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),l=new kn(c,s);l.position.set(-30,-190,0),this.scene.add(l)})}initScene(){this.scene=rg.value.scene,this.scene.background=new Et(0),this.camera=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new qu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),Mt.value.prefix=="6s"?(this.camera.position.y=_n.value.cameraPositionY,this.camera.position.x=_n.value.cameraPositionX,this.addText()):(document.getElementById("toggleATACRadio").style.display="none",document.getElementById("atac-desc").style.display="none",this.camera.position.y=0,this.camera.position.x=0),this.camera.position.z=_n.value.cameraPositionZ,this.controls=new og(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh("initScene"),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){hl.pipe(vi(e=>e.items),xi((e,t)=>vu.isEqual(e,t)),ki(1)).subscribe(e=>{console.log("Items have updated:")}),Mt.pipe(vi(e=>e.prefix),xi((e,t)=>vu.isEqual(e,t)),ki(1)).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=Mt.value.prefix}),fl.pipe(vi(e=>e.isLoading),xi((e,t)=>vu.isEqual(e,t)),ki(1)).subscribe(e=>{console.log("Loading changed:",e),tR(fl.value.isLoading)}),We.pipe(vi(e=>e.selectedCelltypes),xi((e,t)=>e.join()===t.join()),ki(1)).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),Qn(!0),await this.updateInstancedMesh("selectedCelltype"),Qn(!1),oR(),We.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedCelltypes));ci.set("celltype",t)}else ci.delete("celltype");xo(ci)}),We.pipe(vi(e=>e.selectedGenes),GC((e,t)=>{t>0&&(console.log("Previous selected genes:",prev),console.log("Current selected genes:",e))}),xi((e,t)=>e.join()===t.join()),ki(1)).subscribe(async e=>{if(console.log("Selected genes changed:",e),We.value.mode===2&&ug(),Qn(!0),nh(),xR(),We.value.selectedGenes.length>0){let n=We.value.selectedGenes[0].split("_")[0];console.log(We.value.geneGenomeHover),Mt.value.prefix=="6s"&&We.value.geneGenomeHover==!1&&LR(n);const s=encodeURIComponent(JSON.stringify(We.value.selectedGenes));ci.set("gene",s)}else ci.delete("gene");await this.updateInstancedMesh("selectedGene"),xo(ci),Qn(!1)}),We.pipe(vi(e=>e.selectedAtacs),xi((e,t)=>e.join()===t.join()),ki(1)).subscribe(async e=>{if(console.log("Selected atacs changed:",e),cg(),We.value.mode===2&&fR(),Qn(!0),hR(),We.value.selectedAtacs.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedAtacs));ci.set("atac",t)}else ci.delete("atac");await this.updateInstancedMesh("selectedAtac"),xo(ci),Qn(!1)}),_n.pipe(vi(e=>e.dotSize),xi(),ki(1)).subscribe(async e=>{console.log("Dot Size Changed:",e),Qn(!0),await this.updateInstancedMesh("dotSize"),Qn(!1)}),_n.pipe(vi(e=>e.genePercentile),xi(),ki(1)).subscribe(async e=>{console.log("Gene Percentile",e),Qn(!0),await this.updateInstancedMesh("genePercentile"),Qn(!1)}),We.pipe(vi(e=>e.mode),xi(),ki(1)).subscribe(e=>{console.log("Selected genes changed:",e),ci.set("mode",e),xo(ci)})}async updateInstancedMesh(e){console.log("^^^^^^^^^"),console.log(e),console.log("^^^^^^^^^"),console.log("PALETTTE"),this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=Mt.value.pallete,n=hl.value.items;const s=new ju(.1,16,16),a=new Ku(.1,32,32),c=new ul,l=n.length;console.log("Count",l),this.instancedMesh=new Xp(s,c,l),this.instancedMeshUmap=new Xp(a,c,l);const h=new bn,f=new bn;let d,m,v,x=200,y=2,M=We.value.selectedCelltypes,_=We.value.selectedGenes,p=We.value.selectedAtacs,P=_n.value.dotSize,E=Math.floor(P/2),C=_n.value.genePercentile,z=_n.value.genePercentile,F=1;if(p.length>0){console.log("ASSALAM");try{let R=await um(p[0]);if(p.length==2){let X=await um(p[1]),le=Ja(X,z);v=ja(X,le)}F=Ja(R,z),m=ja(R,F)}catch(R){console.error("Error fetching data:",R)}}else if(_.length>0)try{let R=await cm(_[0]);if(_.length==2){let X=await cm(_[1]),le=Ja(X,C);v=ja(X,le)}F=Ja(R,C),m=ja(R,F)}catch(R){console.error("Error fetching data:",R)}bR(0,F);for(let R=0;R<l;R++){if(p.length>0)if(M.length===0||M.includes(n[R].clusters)){let T,D;v?(T=Ka(m[R],v[R]),D=(m[R]+v[R])/2*P+P/1.5):(T=Ka(m[R]),D=m[R]*P+P/1.5),d=new Et(T),h.scale.set(D,D,D),f.scale.set(D*y,D*y,D*y)}else d=new Et("#5e5e5e"),h.scale.set(1,1,1),f.scale.set(1*y,1*y,1*y);else if(_.length>0)if(M.length===0||M.includes(n[R].clusters)){let T,D;v?(T=Ka(m[R],v[R]),D=(m[R]+v[R])/2*P+P/1.5):(T=Ka(m[R]),D=m[R]*P+P/1.5),d=new Et(T),h.scale.set(D,D,D),f.scale.set(D*y,D*y,D*y)}else d=new Et("#5e5e5e"),h.scale.set(1,1,1),f.scale.set(1*y,1*y,1*y);else M.includes(n[R].clusters)||M.length==0?(d=new Et(t[n[R].clusters]),h.scale.set(P,P,P),f.scale.set(P*y,P*y,P*y)):(d=new Et("#5e5e5e"),h.scale.set(E,E,E),f.scale.set(E*y,E*y,E*y));let X=1;Mt.value.prefix=="6s"&&(X=-1),h.position.set(n[R].X_spatial0_norm*x,n[R].X_spatial1_norm*X*x,n[R].X_spatial2_norm*x),h.updateMatrix(),this.instancedMesh.setMatrixAt(R,h.matrix),this.instancedMesh.setColorAt(R,d);let le=_n.value.umapOffset;f.position.set(n[R].X_umap0_norm*300+le-25,n[R].X_umap1_norm*300,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(R,f.matrix),this.instancedMeshUmap.setColorAt(R,d)}p.length>0?(yu("atac"),fm()):_.length>0?(yu("gene"),fm()):(yu("celltype"),TR()),console.log(p),this.scene.add(this.instancedMesh),console.log(this.instancedMesh),console.log(this.scene),this.scene.add(this.instancedMeshUmap)}}const bl=Mt.value.prefix;async function DR(){const i=Mt.value.palleteColumn;try{const e=await Xs(i,bl);let t={};e.forEach(n=>{let[s,a]=n.split(":");s=s.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[s]=a}),XC(t)}catch(e){console.error("Failed to load items:",e)}}async function UR(){try{const i=await Xs("genes",bl);YC(i)}catch(i){console.error("Failed to load items:",i)}}async function NR(){try{const e=(await Xs("genes",bl,!0)).map(t=>dR(t)).filter(t=>t!==null);qC(e)}catch(i){console.error("Failed to load items:",i)}}async function OR(){const i=Mt.value.columns;let e={},t=[];try{const n=await Promise.all(i.map(s=>Xs(s,bl)));i.forEach((s,a)=>{e[s]=n[a]});for(let s=0;s<e.clusters.length;s++){let a={};for(let c in e)a[c]=e[c][s];t.push(a)}kC(t)}catch(n){console.error("Error combining data:",n)}}function FR(){const i=document.createElement("div");i.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const n=document.createElement("li");for(let a=0;a<2;a++){const c=document.createElement("div");n.appendChild(c)}const s=document.createElement("span");n.appendChild(s),e.appendChild(n)}return i.appendChild(e),i}function hg(){const i=document.createElement("div");i.id="overlay",i.className="overlay";const e=document.createElement("div");e.className="top-controls",i.appendChild(e);let t=!1,n=0,s=0,a=0,c=0;e.addEventListener("mousedown",_=>{t=!0,n=_.clientX,s=_.clientY;const p=i.getBoundingClientRect();a=p.left,c=p.top});const l=()=>{var p;i.offsetLeft<0&&(i.style.left="0%"),i.offsetLeft+i.offsetWidth>window.innerWidth&&(i.style.left=`${(window.innerWidth-i.offsetWidth)/window.innerWidth*100}%`);const _=((p=document.getElementsByClassName("navbar")[0])==null?void 0:p.offsetHeight)||0;i.offsetTop<_&&(i.style.top=`${_/window.innerHeight*100}%`),i.offsetTop+i.offsetHeight>window.innerHeight&&(i.style.top=`${(window.innerHeight-i.offsetHeight)/window.innerHeight*100}%`),i.offsetTop<=_&&i.offsetTop+i.offsetHeight>=window.innerHeight&&(i.style.top=`${_/window.innerHeight*100}%`,i.style.height=`${window.innerHeight-_}px`,d.aspect=i.offsetWidth/i.offsetHeight,d.updateProjectionMatrix(),m.setSize(i.offsetWidth,i.offsetHeight)),i.offsetLeft<=0&&i.offsetLeft+i.offsetWidth>=window.innerWidth&&(i.style.left="0%",i.style.width=`${window.innerWidth}px`,d.aspect=i.offsetWidth/i.offsetHeight,d.updateProjectionMatrix(),m.setSize(i.offsetWidth,i.offsetHeight))};document.addEventListener("mousemove",_=>{if(t){const p=a+(_.clientX-n),P=c+(_.clientY-s);i.style.left=`${p/window.innerWidth*100}%`,i.style.top=`${P/window.innerHeight*100}%`,l()}}),document.addEventListener("mouseup",()=>{t=!1}),i.addEventListener("mousemove",_=>{const p=i.getBoundingClientRect(),P=10,E=_.clientX>p.right-P&&_.clientX<p.right+P,C=_.clientX>p.left-P&&_.clientX<p.left+P,z=_.clientY>p.bottom-P&&_.clientY<p.bottom+P,F=_.clientY>p.top-P&&_.clientY<p.top+P;C&&F?(i.classList.add("resizable-corner"),i.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),i.style.cursor="nwse-resize"):E&&F||C&&z?(i.classList.add("resizable-corner"),i.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),i.style.cursor="nesw-resize"):E&&z?(i.classList.add("resizable-corner"),i.classList.remove("resizable-right","resizable-bottom","resizable-top","resizable-left"),i.style.cursor="nwse-resize"):E?(i.classList.add("resizable-right"),i.classList.remove("resizable-corner","resizable-bottom","resizable-top","resizable-left"),i.style.cursor="ew-resize"):C?(i.classList.add("resizable-left"),i.classList.remove("resizable-corner","resizable-right","resizable-bottom","resizable-top"),i.style.cursor="ew-resize"):z?(i.classList.add("resizable-bottom"),i.classList.remove("resizable-corner","resizable-right","resizable-top","resizable-left"),i.style.cursor="ns-resize"):F?(i.classList.add("resizable-top"),i.classList.remove("resizable-corner","resizable-right","resizable-bottom","resizable-left"),i.style.cursor="ns-resize"):(i.style.cursor="default",i.classList.remove("resizable-right","resizable-bottom","resizable-corner","resizable-top","resizable-left"))}),i.addEventListener("mousedown",_=>{const p=i.getBoundingClientRect(),P=_.clientX>p.right-10&&_.clientX<p.right+10,E=_.clientX>p.left-10&&_.clientX<p.left+10,C=_.clientY>p.bottom-10&&_.clientY<p.bottom+10,z=_.clientY>p.top-10&&_.clientY<p.top+10,F=E&&z,R=P&&z,X=E&&C,le=P&&C;if(P||E||C||z){let Se=function(B){if(le)i.style.width=`${B.clientX-p.left}px`,i.style.height=`${B.clientY-p.top}px`;else if(X){const K=p.right-B.clientX;i.style.width=`${K}px`,i.style.height=`${B.clientY-p.top}px`,i.style.left=`${p.right-K}px`}else if(R)i.style.width=`${B.clientX-p.left}px`,i.style.height=`${p.bottom-B.clientY}px`,i.style.top=`${B.clientY}px`;else if(F){const K=p.right-B.clientX,J=p.bottom-B.clientY;i.style.width=`${K}px`,i.style.height=`${J}px`,i.style.left=`${p.right-K}px`,i.style.top=`${p.bottom-J}px`}else if(P)i.style.width=`${B.clientX-p.left}px`;else if(E){const K=p.right-B.clientX;i.style.width=`${K}px`,i.style.left=`${p.right-K}px`}else if(C)i.style.height=`${B.clientY-p.top}px`;else if(z){const K=p.bottom-B.clientY;i.style.height=`${K}px`,i.style.top=`${p.bottom-K}px`}d.aspect=i.offsetWidth/i.offsetHeight,d.updateProjectionMatrix(),m.setSize(i.offsetWidth,i.offsetHeight)},pe=function(){window.removeEventListener("mousemove",Se),window.removeEventListener("mouseup",pe)};var T=Se,D=pe;window.addEventListener("mousemove",Se),window.addEventListener("mouseup",pe)}}),e.addEventListener("touchstart",_=>{t=!0,n=_.changedTouches[0].clientX,s=_.changedTouches[0].clientY;const p=i.getBoundingClientRect();a=p.left,c=p.top}),document.addEventListener("touchmove",_=>{if(t){let p=_.changedTouches[0].clientX;p+i.offsetWidth>window.innerWidth&&(p=window.innerWidth-i.offsetWidth);const P=a+(_.changedTouches[0].clientX-n),E=c+(_.changedTouches[0].clientY-s);i.style.left=`${P/window.innerWidth*100}%`,i.style.top=`${E/window.innerHeight*100}%`,l()}}),document.addEventListener("touchend",()=>{t=!1}),i.addEventListener("touchstart",_=>{const p=i.getBoundingClientRect(),P=_.changedTouches[0].clientX>p.right-10&&_.changedTouches[0].clientX<p.right+10,E=_.changedTouches[0].clientX>p.left-10&&_.changedTouches[0].clientX<p.left+10,C=_.changedTouches[0].clientY>p.bottom-10&&_.changedTouches[0].clientY<p.bottom+10,z=_.changedTouches[0].clientY>p.top-10&&_.changedTouches[0].clientY<p.top+10,F=E&&z,R=P&&z,X=E&&C,le=P&&C;if(P||E||C||z){let Se=function(B){if(le)i.style.width=`${B.changedTouches[0].clientX-p.left}px`,i.style.height=`${B.changedTouches[0].clientY-p.top}px`;else if(X){const K=p.right-B.changedTouches[0].clientX;i.style.width=`${K}px`,i.style.height=`${B.changedTouches[0].clientY-p.top}px`,i.style.left=`${p.right-K}px`}else if(R)i.style.width=`${B.changedTouches[0].clientX-p.left}px`,i.style.height=`${p.bottom-B.changedTouches[0].clientY}px`,i.style.top=`${B.changedTouches[0].clientY}px`;else if(F){const K=p.right-B.changedTouches[0].clientX,J=p.bottom-B.changedTouches[0].clientY;i.style.width=`${K}px`,i.style.height=`${J}px`,i.style.left=`${p.right-K}px`,i.style.top=`${p.bottom-J}px`}else if(P)i.style.width=`${B.changedTouches[0].clientX-p.left}px`;else if(E){const K=p.right-B.changedTouches[0].clientX;i.style.width=`${K}px`,i.style.left=`${p.right-K}px`}else if(C)i.style.height=`${B.changedTouches[0].clientY-p.top}px`;else if(z){const K=p.bottom-B.changedTouches[0].clientY;i.style.height=`${K}px`,i.style.top=`${p.bottom-K}px`}d.aspect=i.offsetWidth/i.offsetHeight,d.updateProjectionMatrix(),m.setSize(i.offsetWidth,i.offsetHeight)},pe=function(){window.removeEventListener("touchmove",Se),window.removeEventListener("touchend",pe)};var T=Se,D=pe;window.addEventListener("touchmove",Se),window.addEventListener("touchend",pe)}});const h=document.createElement("div");h.id="overlayScene",h.style.width="100%",h.style.height="100%",i.appendChild(h);const f=rg.value.scene;f.background=new Et(0);const d=new Hn(75,h.offsetWidth/h.offsetHeight,.1,1e3),m=new qu,v=window.innerWidth*.25,x=window.innerHeight*.5;d.aspect=v/x,d.updateProjectionMatrix(),m.setSize(v,x),m.render(f,d),h.appendChild(m.domElement),d.position.x=_n.value.umapOffset,d.position.y=_n.value.cameraUmapPositionY,d.position.z=_n.value.cameraUmapPositionZ;const y=new og(d,m.domElement);y.enableRotate=!1,y.mouseButtons={LEFT:Wi.PAN,MIDDLE:Wi.DOLLY,RIGHT:Wi.ROTATE},y.touches={ONE:cr.PAN,TWO:cr.DOLLY_PAN},d.lookAt(1e4,0,10),y.target.set(1e4,0,10),y.update(),m.render(f,d);function M(){requestAnimationFrame(M),m.render(f,d)}return M(),window.addEventListener("resize",()=>{l()}),i}document.body.appendChild(hg());document.addEventListener("DOMContentLoaded",async()=>{hg();const i=FR();document.body.appendChild(i),Qn(!0);try{await DR(),await OR(),await UR(),await NR();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(c=>Object.keys(Mt.value.pallete).includes(c));Ro(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(c=>Mt.value.genes.includes(c));Hs(a)}pl(Mt.value.listPalette),sR(),nR(),Hu(Mt.value.genes.slice(0,1e3)),cg(),gR(),Gu(Mt.value.atacs.slice(0,1e3)),nh(),uR(),lR();const n=document.body;new IR(n)}catch(e){console.error("Failed to load data:",e)}finally{console.log("GAAA KESINSINI YAA"),Qn(!1)}});function BR(){const i=Mt.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");console.log("PREFIXXXX"),console.log(e);for(let t=0;t<i.length;t++){const n=document.createElement("p");n.innerHTML=`<a class="dropdown-item">${i[t]}</a>`,e.appendChild(n)}}function zR(){const i=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const n=new URLSearchParams("");n.append("prefix",e.item(t).innerText),xo(n),e.item(t).innerText!==Mt.value.prefix&&(i.innerHTML=Mt.value.prefix,window.location.reload())})}const GR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");n.addEventListener("click",()=>{console.log(i.style.display),i.style.display=i.style.display==="none"?"block":"none",console.log(i.style.display),n.style.backgroundColor="white",n.style.color="black",s.style.backgroundColor="#282828",s.style.color="white",a.style.backgroundColor="#282828",a.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),i.style.display==="none"&&(n.style.backgroundColor="#282828",n.style.color="white")})},HR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");s.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",s.style.backgroundColor="white",s.style.color="black",n.style.backgroundColor="#282828",n.style.color="white",a.style.backgroundColor="#282828",a.style.color="white",i.style.display==="block"&&(i.style.display="none"),t.style.display==="block"&&(t.style.display="none"),e.style.display==="none"&&(s.style.backgroundColor="#282828",s.style.color="white")})},kR=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("toggleCellCheckbox"),s=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");a.addEventListener("click",()=>{console.log("halo atac clicked"),t.style.display=t.style.display==="none"?"block":"none",a.style.backgroundColor="white",a.style.color="black",n.style.backgroundColor="#282828",n.style.color="white",s.style.backgroundColor="#282828",s.style.color="white",i.style.display==="block"&&(i.style.display="none"),e.style.display==="block"&&(e.style.display="none"),t.style.display==="none"&&(a.style.backgroundColor="#282828",a.style.color="white")})},VR=()=>{const i=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),n=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),c=document.getElementById("geneSliderBox"),l=document.getElementById("geneSlider"),h=document.getElementById("geneSliderValue"),f=document.getElementById("cellCheckbox"),d=document.getElementById("geneRadioContainer"),m=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");i.forEach(x=>{const y=()=>{const _=x.dataset.target,p=document.getElementById(_);p.style.display="block"},M=()=>{const _=x.dataset.target,p=document.getElementById(_);p.style.display="none"};["mouseenter"].forEach(_=>{x.addEventListener(_,function(){y()})}),["mouseleave"].forEach(_=>{x.addEventListener(_,function(){M()})})}),e.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",m.style.backgroundColor="#282828",m.style.color="white"),d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),c.style.display==="block"&&(c.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),n.onchange=function(){s.value=parseFloat(this.value).toFixed(2),xu(parseFloat(this.value).toFixed(2))},n.addEventListener("mouseup",function(){s.value=parseFloat(this.value).toFixed(2),xu(parseFloat(this.value).toFixed(2))}),s.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),n.value=parseFloat(this.value).toFixed(2),xu(parseFloat(this.value).toFixed(2))},s.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",m.style.backgroundColor="#282828",m.style.color="white"),d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),c.style.display=c.style.display==="none"?"block":"none"}),l.addEventListener("mouseup",function(){h.value=parseFloat(this.value).toFixed(2),lm(parseFloat(this.value).toFixed(2))}),h.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),l.value=parseFloat(this.value).toFixed(2),lm(parseFloat(this.value).toFixed(2))},h.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{BR(),zR()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{GR(),HR(),kR(),VR(),vR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(i){i.style.visibility="visible"})},0);