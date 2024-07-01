var _M=Object.defineProperty;var vM=(r,e,t)=>e in r?_M(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Gh=(r,e,t)=>(vM(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="162",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xM=0,zh=1,SM=2,Ap=1,MM=2,Bi=3,hr=0,Ln=1,zi=2,cr=0,ws=1,Hh=2,kh=3,Vh=4,EM=5,Pr=100,yM=101,TM=102,Wh=103,Xh=104,bM=200,AM=201,wM=202,RM=203,Jc=204,Qc=205,CM=206,LM=207,PM=208,IM=209,DM=210,UM=211,NM=212,OM=213,FM=214,BM=0,GM=1,zM=2,za=3,HM=4,kM=5,VM=6,WM=7,wp=0,XM=1,YM=2,ur=0,qM=1,$M=2,KM=3,ZM=4,jM=5,JM=6,QM=7,Rp=300,Cs=301,Ls=302,eu=303,tu=304,el=306,nu=1e3,li=1001,iu=1002,cn=1003,Yh=1004,to=1005,Cn=1006,gc=1007,Dr=1008,fr=1009,eE=1010,tE=1011,pu=1012,Cp=1013,lr=1014,vi=1015,ho=1016,Lp=1017,Pp=1018,Ur=1020,nE=1021,ci=1023,iE=1024,rE=1025,Nr=1026,Ps=1027,Ip=1028,Dp=1029,sE=1030,Up=1031,Np=1033,_c=33776,vc=33777,xc=33778,Sc=33779,qh=35840,$h=35841,Kh=35842,Zh=35843,Op=36196,jh=37492,Jh=37496,Qh=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,Mc=36492,dd=36494,pd=36495,oE=36283,md=36284,gd=36285,_d=36286,aE=3200,lE=3201,cE=0,uE=1,ar="",gi="srgb",pr="srgb-linear",mu="display-p3",tl="display-p3-linear",Ha="linear",Gt="srgb",ka="rec709",Va="p3",as=7680,vd=519,fE=512,hE=513,dE=514,Fp=515,pE=516,mE=517,gE=518,_E=519,xd=35044,Sd="300 es",ru=1035,Hi=2e3,Wa=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Md=1234567;const uo=Math.PI/180,po=180/Math.PI;function Ds(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function gu(r,e){return(r%e+e)%e}function vE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function xE(r,e,t){return r!==e?(t-r)/(e-r):0}function fo(r,e,t){return(1-t)*r+t*e}function SE(r,e,t,i){return fo(r,e,1-Math.exp(-t*i))}function ME(r,e=1){return e-Math.abs(gu(r,e*2)-e)}function EE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function TE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bE(r,e){return r+Math.random()*(e-r)}function AE(r){return r*(.5-Math.random())}function wE(r){r!==void 0&&(Md=r);let e=Md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RE(r){return r*uo}function CE(r){return r*po}function su(r){return(r&r-1)===0&&r!==0}function LE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PE(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),m=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),E=u((i-e)/2);switch(o){case"XYX":r.set(c*m,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*m,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*m,c*d);break;case"XZX":r.set(c*m,f*E,f*x,c*d);break;case"YXY":r.set(f*x,c*m,f*E,c*d);break;case"ZYZ":r.set(f*E,f*x,c*m,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ts(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const IE={DEG2RAD:uo,RAD2DEG:po,generateUUID:Ds,clamp:gn,euclideanModulo:gu,mapLinear:vE,inverseLerp:xE,lerp:fo,damp:SE,pingpong:ME,smoothstep:EE,smootherstep:yE,randInt:TE,randFloat:bE,randFloatSpread:AE,seededRandom:wE,degToRad:RE,radToDeg:CE,isPowerOfTwo:su,ceilPowerOfTwo:LE,floorPowerOfTwo:Xa,setQuaternionFromProperEuler:PE,normalize:Sn,denormalize:Ts};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,o,a,u,c,f,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=u,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],m=i[4],_=i[7],v=i[2],x=i[5],E=i[8],A=o[0],g=o[3],p=o[6],U=o[1],w=o[4],P=o[7],F=o[2],N=o[5],L=o[8];return a[0]=u*A+c*U+f*F,a[3]=u*g+c*w+f*N,a[6]=u*p+c*P+f*L,a[1]=d*A+m*U+_*F,a[4]=d*g+m*w+_*N,a[7]=d*p+m*P+_*L,a[2]=v*A+x*U+E*F,a[5]=v*g+x*w+E*N,a[8]=v*p+x*P+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8];return t*u*m-t*c*d-i*a*m+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8],_=m*u-c*d,v=c*f-m*a,x=d*a-u*f,E=t*_+i*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(o*d-m*i)*A,e[2]=(c*i-o*u)*A,e[3]=v*A,e[4]=(m*t-o*f)*A,e[5]=(o*a-c*t)*A,e[6]=x*A,e[7]=(i*f-d*t)*A,e[8]=(u*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new gt;function Bp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ya(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function DE(){const r=Ya("canvas");return r.style.display="block",r}const Ed={};function UE(r){r in Ed||(Ed[r]=!0,console.warn(r))}const yd=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Td=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[pr]:{transfer:Ha,primaries:ka,toReference:r=>r,fromReference:r=>r},[gi]:{transfer:Gt,primaries:ka,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[tl]:{transfer:Ha,primaries:Va,toReference:r=>r.applyMatrix3(Td),fromReference:r=>r.applyMatrix3(yd)},[mu]:{transfer:Gt,primaries:Va,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Td),fromReference:r=>r.applyMatrix3(yd).convertLinearToSRGB()}},NE=new Set([pr,tl]),It={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!NE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ua[e].toReference,o=ua[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ua[r].primaries},getTransfer:function(r){return r===ar?Ha:ua[r].transfer}};function Rs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class Gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ya("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Rs(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(Tc(o[u].image)):a.push(Tc(o[u]))}else a=Tc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class En extends Br{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=li,o=li,a=Cn,u=Dr,c=ci,f=fr,d=En.DEFAULT_ANISOTROPY,m=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Ds(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Rp;En.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,t=0,i=0,o=1){un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],m=f[4],_=f[8],v=f[1],x=f[5],E=f[9],A=f[2],g=f[6],p=f[10];if(Math.abs(m-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-g)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+g)<.1&&Math.abs(d+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,P=(x+1)/2,F=(p+1)/2,N=(m+v)/4,L=(_+A)/4,V=(E+g)/4;return w>P&&w>F?w<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(w),o=N/i,a=L/i):P>F?P<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),i=N/o,a=V/o):F<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(F),i=L/a,o=V/a),this.set(i,o,a,t),this}let U=Math.sqrt((g-E)*(g-E)+(_-A)*(_-A)+(v-m)*(v-m));return Math.abs(U)<.001&&(U=1),this.x=(g-E)/U,this.y=(_-A)/U,this.z=(v-m)/U,this.w=Math.acos((d+x+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends Br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new En(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends BE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hp extends En{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GE extends En{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=cn,this.minFilter=cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],m=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],E=a[u+2],A=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=A;return}if(_!==A||f!==v||d!==x||m!==E){let g=1-c;const p=f*v+d*x+m*E+_*A,U=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const F=Math.sqrt(w),N=Math.atan2(F,p*U);g=Math.sin(g*N)/F,c=Math.sin(c*N)/F}const P=c*U;if(f=f*g+v*P,d=d*g+x*P,m=m*g+E*P,_=_*g+A*P,g===1-c){const F=1/Math.sqrt(f*f+d*d+m*m+_*_);f*=F,d*=F,m*=F,_*=F}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],m=i[o+3],_=a[u],v=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+m*_+f*x-d*v,e[t+1]=f*E+m*v+d*_-c*x,e[t+2]=d*E+m*x+c*v-f*_,e[t+3]=m*E-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),m=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),E=f(a/2);switch(u){case"XYZ":this._x=v*m*_+d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_-v*x*E;break;case"YXZ":this._x=v*m*_+d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_+v*x*E;break;case"ZXY":this._x=v*m*_-d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_-v*x*E;break;case"ZYX":this._x=v*m*_-d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_+v*x*E;break;case"YZX":this._x=v*m*_+d*x*E,this._y=d*x*_+v*m*E,this._z=d*m*E-v*x*_,this._w=d*m*_-v*x*E;break;case"XZY":this._x=v*m*_-d*x*E,this._y=d*x*_-v*m*E,this._z=d*m*E+v*x*_,this._w=d*m*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],m=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(m-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,m=t._w;return this._x=i*m+u*c+o*d-a*f,this._y=o*m+u*f+a*c-i*d,this._z=a*m+u*d+i*f-o*c,this._w=u*m-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,c),_=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),m=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*m,this.y=i+f*m+c*d-a*_,this.z=o+f*_+a*m-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new Y,bd=new Fr;class Gr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(a,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),ha.subVectors(this.max,no),cs.subVectors(e.a,no),us.subVectors(e.b,no),fs.subVectors(e.c,no),Qi.subVectors(us,cs),er.subVectors(fs,us),Tr.subVectors(cs,fs);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Tr.z,Tr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Tr.z,0,-Tr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Tr.y,Tr.x,0];return!Ac(t,cs,us,fs,ha)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,cs,us,fs,ha))?!1:(da.crossVectors(Qi,er),t=[da.x,da.y,da.z],Ac(t,cs,us,fs,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],si=new Y,fa=new Gr,cs=new Y,us=new Y,fs=new Y,Qi=new Y,er=new Y,Tr=new Y,no=new Y,ha=new Y,da=new Y,br=new Y;function Ac(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){br.fromArray(r,a);const c=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),f=e.dot(br),d=t.dot(br),m=i.dot(br);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>c)return!1}return!0}const zE=new Gr,io=new Y,wc=new Y;class _o{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(io,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(wc)),this.expandByPoint(io.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Y,Rc=new Y,pa=new Y,tr=new Y,Cc=new Y,ma=new Y,Lc=new Y;class kp{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Rc.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(Rc);const a=e.distanceTo(t)*.5,u=-this.direction.dot(pa),c=tr.dot(this.direction),f=-tr.dot(pa),d=tr.lengthSq(),m=Math.abs(1-u*u);let _,v,x,E;if(m>0)if(_=u*f-c,v=u*c-f,E=a*m,_>=0)if(v>=-E)if(v<=E){const A=1/m;_*=A,v*=A,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-E?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=E?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Rc).addScaledVector(pa,v),x}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),o=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,o,a){Cc.subVectors(t,e),ma.subVectors(i,e),Lc.crossVectors(Cc,ma);let u=this.direction.dot(Lc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;tr.subVectors(this.origin,e);const f=c*this.direction.dot(ma.crossVectors(tr,ma));if(f<0)return null;const d=c*this.direction.dot(Cc.cross(tr));if(d<0||f+d>u)return null;const m=-c*tr.dot(Lc);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,o,a,u,c,f,d,m,_,v,x,E,A,g){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,m,_,v,x,E,A,g)}set(e,t,i,o,a,u,c,f,d,m,_,v,x,E,A,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=o,p[1]=a,p[5]=u,p[9]=c,p[13]=f,p[2]=d,p[6]=m,p[10]=_,p[14]=v,p[3]=x,p[7]=E,p[11]=A,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/hs.setFromMatrixColumn(e,0).length(),a=1/hs.setFromMatrixColumn(e,1).length(),u=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*m,x=u*_,E=c*m,A=c*_;t[0]=f*m,t[4]=-f*_,t[8]=d,t[1]=x+E*d,t[5]=v-A*d,t[9]=-c*f,t[2]=A-v*d,t[6]=E+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*m,x=f*_,E=d*m,A=d*_;t[0]=v+A*c,t[4]=E*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*m,t[9]=-c,t[2]=x*c-E,t[6]=A+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*m,x=f*_,E=d*m,A=d*_;t[0]=v-A*c,t[4]=-u*_,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*m,t[9]=A-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*m,x=u*_,E=c*m,A=c*_;t[0]=f*m,t[4]=E*d-x,t[8]=v*d+A,t[1]=f*_,t[5]=A*d+v,t[9]=x*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,E=c*f,A=c*d;t[0]=f*m,t[4]=A-v*_,t[8]=E*_+x,t[1]=_,t[5]=u*m,t[9]=-c*m,t[2]=-d*m,t[6]=x*_+E,t[10]=v-A*_}else if(e.order==="XZY"){const v=u*f,x=u*d,E=c*f,A=c*d;t[0]=f*m,t[4]=-_,t[8]=d*m,t[1]=v*_+A,t[5]=u*m,t[9]=x*_-E,t[2]=E*_-x,t[6]=c*m,t[10]=A*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HE,e,kE)}lookAt(e,t,i){const o=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),nr.crossVectors(i,Fn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),nr.crossVectors(i,Fn)),nr.normalize(),ga.crossVectors(Fn,nr),o[0]=nr.x,o[4]=ga.x,o[8]=Fn.x,o[1]=nr.y,o[5]=ga.y,o[9]=Fn.y,o[2]=nr.z,o[6]=ga.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],m=i[1],_=i[5],v=i[9],x=i[13],E=i[2],A=i[6],g=i[10],p=i[14],U=i[3],w=i[7],P=i[11],F=i[15],N=o[0],L=o[4],V=o[8],pe=o[12],T=o[1],O=o[5],me=o[9],fe=o[13],z=o[2],se=o[6],ne=o[10],ce=o[14],te=o[3],ue=o[7],he=o[11],Se=o[15];return a[0]=u*N+c*T+f*z+d*te,a[4]=u*L+c*O+f*se+d*ue,a[8]=u*V+c*me+f*ne+d*he,a[12]=u*pe+c*fe+f*ce+d*Se,a[1]=m*N+_*T+v*z+x*te,a[5]=m*L+_*O+v*se+x*ue,a[9]=m*V+_*me+v*ne+x*he,a[13]=m*pe+_*fe+v*ce+x*Se,a[2]=E*N+A*T+g*z+p*te,a[6]=E*L+A*O+g*se+p*ue,a[10]=E*V+A*me+g*ne+p*he,a[14]=E*pe+A*fe+g*ce+p*Se,a[3]=U*N+w*T+P*z+F*te,a[7]=U*L+w*O+P*se+F*ue,a[11]=U*V+w*me+P*ne+F*he,a[15]=U*pe+w*fe+P*ce+F*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],m=e[2],_=e[6],v=e[10],x=e[14],E=e[3],A=e[7],g=e[11],p=e[15];return E*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+A*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*m-a*f*m)+g*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*m-i*d*m)+p*(-o*c*m-t*f*_+t*c*v+o*u*_-i*u*v+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],m=e[8],_=e[9],v=e[10],x=e[11],E=e[12],A=e[13],g=e[14],p=e[15],U=_*g*d-A*v*d+A*f*x-c*g*x-_*f*p+c*v*p,w=E*v*d-m*g*d-E*f*x+u*g*x+m*f*p-u*v*p,P=m*A*d-E*_*d+E*c*x-u*A*x-m*c*p+u*_*p,F=E*_*f-m*A*f-E*c*v+u*A*v+m*c*g-u*_*g,N=t*U+i*w+o*P+a*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=U*L,e[1]=(A*v*a-_*g*a-A*o*x+i*g*x+_*o*p-i*v*p)*L,e[2]=(c*g*a-A*f*a+A*o*d-i*g*d-c*o*p+i*f*p)*L,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*L,e[4]=w*L,e[5]=(m*g*a-E*v*a+E*o*x-t*g*x-m*o*p+t*v*p)*L,e[6]=(E*f*a-u*g*a-E*o*d+t*g*d+u*o*p-t*f*p)*L,e[7]=(u*v*a-m*f*a+m*o*d-t*v*d-u*o*x+t*f*x)*L,e[8]=P*L,e[9]=(E*_*a-m*A*a-E*i*x+t*A*x+m*i*p-t*_*p)*L,e[10]=(u*A*a-E*c*a+E*i*d-t*A*d-u*i*p+t*c*p)*L,e[11]=(m*c*a-u*_*a-m*i*d+t*_*d+u*i*x-t*c*x)*L,e[12]=F*L,e[13]=(m*A*o-E*_*o+E*i*v-t*A*v-m*i*g+t*_*g)*L,e[14]=(E*c*o-u*A*o-E*i*f+t*A*f+u*i*g-t*c*g)*L,e[15]=(u*_*o-m*c*o+m*i*f-t*_*f-u*i*v+t*c*v)*L,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,m=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,m*c+i,m*f-o*u,0,d*f-o*c,m*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,m=u+u,_=c+c,v=a*d,x=a*m,E=a*_,A=u*m,g=u*_,p=c*_,U=f*d,w=f*m,P=f*_,F=i.x,N=i.y,L=i.z;return o[0]=(1-(A+p))*F,o[1]=(x+P)*F,o[2]=(E-w)*F,o[3]=0,o[4]=(x-P)*N,o[5]=(1-(v+p))*N,o[6]=(g+U)*N,o[7]=0,o[8]=(E+w)*L,o[9]=(g-U)*L,o[10]=(1-(v+A))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=hs.set(o[0],o[1],o[2]).length();const u=hs.set(o[4],o[5],o[6]).length(),c=hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const d=1/a,m=1/u,_=1/c;return oi.elements[0]*=d,oi.elements[1]*=d,oi.elements[2]*=d,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,t.setFromRotationMatrix(oi),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Hi){const f=this.elements,d=2*a/(t-e),m=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,E;if(c===Hi)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Wa)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Hi){const f=this.elements,d=1/(t-e),m=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*m;let E,A;if(c===Hi)E=(u+a)*_,A=-2*_;else if(c===Wa)E=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=A,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new Y,oi=new Yt,HE=new Y(0,0,0),kE=new Y(1,1,1),nr=new Y,ga=new Y,Fn=new Y,Ad=new Yt,wd=new Fr;class ki{constructor(e=0,t=0,i=0,o=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],m=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ad,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VE=0;const Rd=new Y,ds=new Fr,Di=new Yt,_a=new Y,ro=new Y,WE=new Y,XE=new Fr,Cd=new Y(1,0,0),Ld=new Y(0,1,0),Pd=new Y(0,0,1),YE={type:"added"},qE={type:"removed"},Pc={type:"childadded",child:null},Ic={type:"childremoved",child:null};class yn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Y,t=new ki,i=new Fr,o=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new gt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ro,_a,this.up):Di.lookAt(_a,ro,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),ds.setFromRotationMatrix(Di),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YE),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qE),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,WE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}yn.DEFAULT_UP=new Y(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Y,Ui=new Y,Dc=new Y,Ni=new Y,ps=new Y,ms=new Y,Id=new Y,Uc=new Y,Nc=new Y,Oc=new Y;class xi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),ai.subVectors(e,t),o.cross(ai);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){ai.subVectors(o,t),Ui.subVectors(i,t),Dc.subVectors(e,t);const u=ai.dot(ai),c=ai.dot(Ui),f=ai.dot(Dc),d=Ui.dot(Ui),m=Ui.dot(Dc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*m)*v,E=(u*m-c*f)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Ni)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ni.x),f.addScaledVector(u,Ni.y),f.addScaledVector(c,Ni.z),f)}static isFrontFacing(e,t,i,o){return ai.subVectors(i,t),Ui.subVectors(e,t),ai.cross(Ui).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return xi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;ps.subVectors(o,i),ms.subVectors(a,i),Uc.subVectors(e,i);const f=ps.dot(Uc),d=ms.dot(Uc);if(f<=0&&d<=0)return t.copy(i);Nc.subVectors(e,o);const m=ps.dot(Nc),_=ms.dot(Nc);if(m>=0&&_<=m)return t.copy(o);const v=f*_-m*d;if(v<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(i).addScaledVector(ps,u);Oc.subVectors(e,a);const x=ps.dot(Oc),E=ms.dot(Oc);if(E>=0&&x<=E)return t.copy(a);const A=x*d-f*E;if(A<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(i).addScaledVector(ms,c);const g=m*E-x*_;if(g<=0&&_-m>=0&&x-E>=0)return Id.subVectors(a,o),c=(_-m)/(_-m+(x-E)),t.copy(o).addScaledVector(Id,c);const p=1/(g+A+v);return u=A*p,c=v*p,t.copy(i).addScaledVector(ps,u).addScaledVector(ms,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},va={h:0,s:0,l:0};function Fc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=It.workingColorSpace){if(e=gu(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Fc(u,a,e+1/3),this.g=Fc(u,a,e),this.b=Fc(u,a,e-1/3)}return It.toWorkingColorSpace(this,o),this}setStyle(e,t=gi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=Wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return It.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(mn.copy(this),t);const i=mn.r,o=mn.g,a=mn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const m=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=m<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gi){It.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,o=mn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(va);const i=fo(ir.h,va.h,t),o=fo(ir.s,va.s,t),a=fo(ir.l,va.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Tt;Tt.NAMES=Wp;let $E=0;class nl extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=ws,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Y,xa=new lt;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return UE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),o=Sn(o,this.array),a=Sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),e}}class Xp extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yp extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zn extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KE=0;const Zn=new Yt,Bc=new yn,gs=new Y,Bn=new Gr,so=new Gr,on=new Y;class Vi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?Yp:Xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Bn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];so.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Bn.min,so.min),Bn.expandByPoint(on),on.addVectors(Bn.max,so.max),Bn.expandByPoint(on)):(Bn.expandByPoint(so.min),Bn.expandByPoint(so.max))}Bn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)on.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(on));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)on.fromBufferAttribute(c,d),f&&(gs.fromBufferAttribute(e,d),on.add(gs)),o=Math.max(o,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let V=0;V<i.count;V++)c[V]=new Y,f[V]=new Y;const d=new Y,m=new Y,_=new Y,v=new lt,x=new lt,E=new lt,A=new Y,g=new Y;function p(V,pe,T){d.fromBufferAttribute(i,V),m.fromBufferAttribute(i,pe),_.fromBufferAttribute(i,T),v.fromBufferAttribute(a,V),x.fromBufferAttribute(a,pe),E.fromBufferAttribute(a,T),m.sub(d),_.sub(d),x.sub(v),E.sub(v);const O=1/(x.x*E.y-E.x*x.y);isFinite(O)&&(A.copy(m).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(O),g.copy(_).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(O),c[V].add(A),c[pe].add(A),c[T].add(A),f[V].add(g),f[pe].add(g),f[T].add(g))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let V=0,pe=U.length;V<pe;++V){const T=U[V],O=T.start,me=T.count;for(let fe=O,z=O+me;fe<z;fe+=3)p(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const w=new Y,P=new Y,F=new Y,N=new Y;function L(V){F.fromBufferAttribute(o,V),N.copy(F);const pe=c[V];w.copy(pe),w.sub(F.multiplyScalar(F.dot(pe))).normalize(),P.crossVectors(N,pe);const O=P.dot(f[V])<0?-1:1;u.setXYZW(V,w.x,w.y,w.z,O)}for(let V=0,pe=U.length;V<pe;++V){const T=U[V],O=T.start,me=T.count;for(let fe=O,z=O+me;fe<z;fe+=3)L(e.getX(fe+0)),L(e.getX(fe+1)),L(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new Y,a=new Y,u=new Y,c=new Y,f=new Y,d=new Y,m=new Y,_=new Y;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),A=e.getX(v+1),g=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,A),u.fromBufferAttribute(t,g),m.subVectors(u,a),_.subVectors(o,a),m.cross(_),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,g),c.add(m),f.add(m),d.add(m),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),_.subVectors(o,a),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,f){const d=c.array,m=c.itemSize,_=c.normalized,v=new d.constructor(f.length*m);let x=0,E=0;for(let A=0,g=f.length;A<g;A++){c.isInterleavedBufferAttribute?x=f[A]*c.data.stride+c.offset:x=f[A]*m;for(let p=0;p<m;p++)v[E++]=d[x++]}return new fi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let m=0,_=d.length;m<_;m++){const v=d[m],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];m.push(x.toJSON(e.data))}m.length>0&&(o[f]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const a=e.morphAttributes;for(const d in a){const m=[],_=a[d];for(let v=0,x=_.length;v<x;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,m=u.length;d<m;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new Yt,Ar=new kp,Sa=new _o,Ud=new Y,_s=new Y,vs=new Y,xs=new Y,Gc=new Y,Ma=new Y,Ea=new lt,ya=new lt,Ta=new lt,Nd=new Y,Od=new Y,Fd=new Y,ba=new Y,Aa=new Y;class ui extends yn{constructor(e=new Vi,t=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Ma.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const m=c[f],_=a[f];m!==0&&(Gc.fromBufferAttribute(_,e),u?Ma.addScaledVector(Gc,m):Ma.addScaledVector(Gc.sub(t),m))}t.add(Ma)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(a),Ar.copy(e.ray).recast(e.near),!(Sa.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Sa,Ud)===null||Ar.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Dd.copy(a).invert(),Ar.copy(e.ray).applyMatrix4(Dd),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const g=v[E],p=u[g.materialIndex],U=Math.max(g.start,x.start),w=Math.min(c.count,Math.min(g.start+g.count,x.start+x.count));for(let P=U,F=w;P<F;P+=3){const N=c.getX(P),L=c.getX(P+1),V=c.getX(P+2);o=wa(this,p,e,i,d,m,_,N,L,V),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(c.count,x.start+x.count);for(let g=E,p=A;g<p;g+=3){const U=c.getX(g),w=c.getX(g+1),P=c.getX(g+2);o=wa(this,u,e,i,d,m,_,U,w,P),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const g=v[E],p=u[g.materialIndex],U=Math.max(g.start,x.start),w=Math.min(f.count,Math.min(g.start+g.count,x.start+x.count));for(let P=U,F=w;P<F;P+=3){const N=P,L=P+1,V=P+2;o=wa(this,p,e,i,d,m,_,N,L,V),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let g=E,p=A;g<p;g+=3){const U=g,w=g+1,P=g+2;o=wa(this,u,e,i,d,m,_,U,w,P),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function ZE(r,e,t,i,o,a,u,c){let f;if(e.side===Ln?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===hr,c),f===null)return null;Aa.copy(c),Aa.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Aa);return d<t.near||d>t.far?null:{distance:d,point:Aa.clone(),object:r}}function wa(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,_s),r.getVertexPosition(f,vs),r.getVertexPosition(d,xs);const m=ZE(r,e,t,i,_s,vs,xs,ba);if(m){o&&(Ea.fromBufferAttribute(o,c),ya.fromBufferAttribute(o,f),Ta.fromBufferAttribute(o,d),m.uv=xi.getInterpolation(ba,_s,vs,xs,Ea,ya,Ta,new lt)),a&&(Ea.fromBufferAttribute(a,c),ya.fromBufferAttribute(a,f),Ta.fromBufferAttribute(a,d),m.uv1=xi.getInterpolation(ba,_s,vs,xs,Ea,ya,Ta,new lt)),u&&(Nd.fromBufferAttribute(u,c),Od.fromBufferAttribute(u,f),Fd.fromBufferAttribute(u,d),m.normal=xi.getInterpolation(ba,_s,vs,xs,Nd,Od,Fd,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new Y,materialIndex:0};xi.getNormal(_s,vs,xs,_.normal),m.face=_}return m}class vo extends Vi{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],m=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,o,u,2),E("x","z","y",1,-1,e,i,-t,o,u,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(_,2));function E(A,g,p,U,w,P,F,N,L,V,pe){const T=P/L,O=F/V,me=P/2,fe=F/2,z=N/2,se=L+1,ne=V+1;let ce=0,te=0;const ue=new Y;for(let he=0;he<ne;he++){const Se=he*O-fe;for(let De=0;De<se;De++){const tt=De*T-me;ue[A]=tt*U,ue[g]=Se*w,ue[p]=z,d.push(ue.x,ue.y,ue.z),ue[A]=0,ue[g]=0,ue[p]=N>0?1:-1,m.push(ue.x,ue.y,ue.z),_.push(De/L),_.push(1-he/V),ce+=1}}for(let he=0;he<V;he++)for(let Se=0;Se<L;Se++){const De=v+Se+se*he,tt=v+Se+se*(he+1),Q=v+(Se+1)+se*(he+1),ge=v+(Se+1)+se*he;f.push(De,tt,ge),f.push(tt,Q,ge),te+=6}c.addGroup(x,te,pe),x+=te,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const i=Is(r[t]);for(const o in i)e[o]=i[o]}return e}function jE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qp(r){return r.getRenderTarget()===null?r.outputColorSpace:It.workingColorSpace}const JE={clone:Is,merge:Mn};var QE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QE,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $p extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new Y,Bd=new lt,Gd=new lt;class Gn extends $p{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,Bd,Gd),t.subVectors(Gd,Bd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,Ms=1;class ty extends yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const a=new Gn(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const u=new Gn(Ss,Ms,e,t);u.layers=this.layers,this.add(u);const c=new Gn(Ss,Ms,e,t);c.layers=this.layers,this.add(c);const f=new Gn(Ss,Ms,e,t);f.layers=this.layers,this.add(f);const d=new Gn(Ss,Ms,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(_,v,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Kp extends En{constructor(e,t,i,o,a,u,c,f,d,m){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,i,o,a,u,c,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ny extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Kp(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),a=new dr({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:cr});a.uniforms.tEquirect.value=t;const u=new ui(o,a),c=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Cn),new ty(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const zc=new Y,iy=new Y,ry=new gt;class or{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=zc.subVectors(i,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ry.getNormalMatrix(e),o=this.coplanarPoint(zc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new _o,Ra=new Y;class Zp{constructor(e=new or,t=new or,i=new or,o=new or,a=new or,u=new or){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],m=o[5],_=o[6],v=o[7],x=o[8],E=o[9],A=o[10],g=o[11],p=o[12],U=o[13],w=o[14],P=o[15];if(i[0].setComponents(f-a,v-d,g-x,P-p).normalize(),i[1].setComponents(f+a,v+d,g+x,P+p).normalize(),i[2].setComponents(f+u,v+m,g+E,P+U).normalize(),i[3].setComponents(f-u,v-m,g-E,P-U).normalize(),i[4].setComponents(f-c,v-_,g-A,P-w).normalize(),t===Hi)i[5].setComponents(f+c,v+_,g+A,P+w).normalize();else if(t===Wa)i[5].setComponents(c,_,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ra.x=o.normal.x>0?e.max.x:e.min.x,Ra.y=o.normal.y>0?e.max.y:e.min.y,Ra.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jp(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function sy(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,m){const _=d.array,v=d.usage,x=_.byteLength,E=r.createBuffer();r.bindBuffer(m,E),r.bufferData(m,_,v),d.onUploadCallback();let A;if(_ instanceof Float32Array)A=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)A=r.SHORT;else if(_ instanceof Uint32Array)A=r.UNSIGNED_INT;else if(_ instanceof Int32Array)A=r.INT;else if(_ instanceof Int8Array)A=r.BYTE;else if(_ instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:A,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,_){const v=m.array,x=m._updateRange,E=m.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&E.length===0&&r.bufferSubData(_,0,v),E.length!==0){for(let A=0,g=E.length;A<g;A++){const p=E[A];t?r.bufferSubData(_,p.start*v.BYTES_PER_ELEMENT,v,p.start,p.count):r.bufferSubData(_,p.start*v.BYTES_PER_ELEMENT,v.subarray(p.start,p.start+p.count))}m.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),m.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m&&(r.deleteBuffer(m.buffer),i.delete(d))}function f(d,m){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,m));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,m),_.version=d.version}}return{get:u,remove:c,update:f}}class il extends Vi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,m=f+1,_=e/c,v=t/f,x=[],E=[],A=[],g=[];for(let p=0;p<m;p++){const U=p*v-u;for(let w=0;w<d;w++){const P=w*_-a;E.push(P,-U,0),A.push(0,0,1),g.push(w/c),g.push(1-p/f)}}for(let p=0;p<f;p++)for(let U=0;U<c;U++){const w=U+d*p,P=U+d*(p+1),F=U+1+d*(p+1),N=U+1+d*p;x.push(w,P,N),x.push(P,F,N)}this.setIndex(x),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xy=`#ifdef USE_IRIDESCENCE
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
#endif`,Sy=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`
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
}`,By=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
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
#endif`,sT=`struct PhysicalMaterial {
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
}`,oT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MT=`#ifdef USE_MORPHNORMALS
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
#endif`,ET=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,TT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XT=`float getShadowMask() {
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
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
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
}`,db=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,mb=`#define DISTANCE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Ab=`#define NORMAL
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
}`,wb=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,Cb=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Pb=`#define STANDARD
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
}`,Ib=`#define TOON
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
}`,Db=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,Bb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:oy,alphahash_pars_fragment:ay,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:fy,aomap_fragment:hy,aomap_pars_fragment:dy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:_y,bsdfs:vy,iridescence_fragment:xy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Ty,color_fragment:by,color_pars_fragment:Ay,color_pars_vertex:wy,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Py,displacementmap_pars_vertex:Iy,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ny,colorspace_fragment:Oy,colorspace_pars_fragment:Fy,envmap_fragment:By,envmap_common_pars_fragment:Gy,envmap_pars_fragment:zy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Qy,envmap_vertex:ky,fog_vertex:Vy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:Yy,gradientmap_pars_fragment:qy,lightmap_fragment:$y,lightmap_pars_fragment:Ky,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:jy,lights_pars_begin:Jy,lights_toon_fragment:eT,lights_toon_pars_fragment:tT,lights_phong_fragment:nT,lights_phong_pars_fragment:iT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:aT,lights_fragment_end:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:hT,map_fragment:dT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:ST,morphnormal_vertex:MT,morphtarget_pars_vertex:ET,morphtarget_vertex:yT,normal_fragment_begin:TT,normal_fragment_maps:bT,normal_pars_fragment:AT,normal_pars_vertex:wT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:NT,premultiplied_alpha_fragment:OT,project_vertex:FT,dithering_fragment:BT,dithering_pars_fragment:GT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:VT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:YT,skinning_pars_vertex:qT,skinning_vertex:$T,skinnormal_vertex:KT,specularmap_fragment:ZT,specularmap_pars_fragment:jT,tonemapping_fragment:JT,tonemapping_pars_fragment:QT,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:rb,worldpos_vertex:sb,background_vert:ob,background_frag:ab,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:fb,depth_vert:hb,depth_frag:db,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:Sb,meshbasic_frag:Mb,meshlambert_vert:Eb,meshlambert_frag:yb,meshmatcap_vert:Tb,meshmatcap_frag:bb,meshnormal_vert:Ab,meshnormal_frag:wb,meshphong_vert:Rb,meshphong_frag:Cb,meshphysical_vert:Lb,meshphysical_frag:Pb,meshtoon_vert:Ib,meshtoon_frag:Db,points_vert:Ub,points_frag:Nb,shadow_vert:Ob,shadow_frag:Fb,sprite_vert:Bb,sprite_frag:Gb},Te={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},_i={basic:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Mn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Mn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Tt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Mn([Te.points,Te.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Mn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Mn([Te.common,Te.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Mn([Te.sprite,Te.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Mn([Te.common,Te.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Mn([Te.lights,Te.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};_i.physical={uniforms:Mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ca={r:0,b:0,g:0},Rr=new ki,zb=new Yt;function Hb(r,e,t,i,o,a,u){const c=new Tt(0);let f=a===!0?0:1,d,m,_=null,v=0,x=null;function E(g,p){let U=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=(p.backgroundBlurriness>0?t:e).get(w)),w===null?A(c,f):w&&w.isColor&&(A(w,1),U=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||U)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===el)?(m===void 0&&(m=new ui(new vo(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Is(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Rr.copy(p.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(Rr)),m.material.toneMapped=It.getTransfer(w.colorSpace)!==Gt,(_!==w||v!==w.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),m.layers.enableAll(),g.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new ui(new il(2,2),new dr({name:"BackgroundMaterial",uniforms:Is(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=It.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=w,v=w.version,x=r.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function A(g,p){g.getRGB(Ca,qp(r)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,p,u)}return{getClearColor:function(){return c},setClearColor:function(g,p=1){c.set(g),f=p,A(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(g){f=g,A(c,f)},render:E}}function kb(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=g(null);let d=f,m=!1;function _(z,se,ne,ce,te){let ue=!1;if(u){const he=A(ce,ne,se);d!==he&&(d=he,x(d.object)),ue=p(z,ce,ne,te),ue&&U(z,ce,ne,te)}else{const he=se.wireframe===!0;(d.geometry!==ce.id||d.program!==ne.id||d.wireframe!==he)&&(d.geometry=ce.id,d.program=ne.id,d.wireframe=he,ue=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(ue||m)&&(m=!1,V(z,se,ne,ce),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(z){return i.isWebGL2?r.bindVertexArray(z):a.bindVertexArrayOES(z)}function E(z){return i.isWebGL2?r.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function A(z,se,ne){const ce=ne.wireframe===!0;let te=c[z.id];te===void 0&&(te={},c[z.id]=te);let ue=te[se.id];ue===void 0&&(ue={},te[se.id]=ue);let he=ue[ce];return he===void 0&&(he=g(v()),ue[ce]=he),he}function g(z){const se=[],ne=[],ce=[];for(let te=0;te<o;te++)se[te]=0,ne[te]=0,ce[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:ne,attributeDivisors:ce,object:z,attributes:{},index:null}}function p(z,se,ne,ce){const te=d.attributes,ue=se.attributes;let he=0;const Se=ne.getAttributes();for(const De in Se)if(Se[De].location>=0){const Q=te[De];let ge=ue[De];if(ge===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;he++}return d.attributesNum!==he||d.index!==ce}function U(z,se,ne,ce){const te={},ue=se.attributes;let he=0;const Se=ne.getAttributes();for(const De in Se)if(Se[De].location>=0){let Q=ue[De];Q===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),te[De]=ge,he++}d.attributes=te,d.attributesNum=he,d.index=ce}function w(){const z=d.newAttributes;for(let se=0,ne=z.length;se<ne;se++)z[se]=0}function P(z){F(z,0)}function F(z,se){const ne=d.newAttributes,ce=d.enabledAttributes,te=d.attributeDivisors;ne[z]=1,ce[z]===0&&(r.enableVertexAttribArray(z),ce[z]=1),te[z]!==se&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,se),te[z]=se)}function N(){const z=d.newAttributes,se=d.enabledAttributes;for(let ne=0,ce=se.length;ne<ce;ne++)se[ne]!==z[ne]&&(r.disableVertexAttribArray(ne),se[ne]=0)}function L(z,se,ne,ce,te,ue,he){he===!0?r.vertexAttribIPointer(z,se,ne,te,ue):r.vertexAttribPointer(z,se,ne,ce,te,ue)}function V(z,se,ne,ce){if(i.isWebGL2===!1&&(z.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const te=ce.attributes,ue=ne.getAttributes(),he=se.defaultAttributeValues;for(const Se in ue){const De=ue[Se];if(De.location>=0){let tt=te[Se];if(tt===void 0&&(Se==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),Se==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),tt!==void 0){const Q=tt.normalized,ge=tt.itemSize,Re=t.get(tt);if(Re===void 0)continue;const je=Re.buffer,Oe=Re.type,Ce=Re.bytesPerElement,Et=i.isWebGL2===!0&&(Oe===r.INT||Oe===r.UNSIGNED_INT||tt.gpuType===Cp);if(tt.isInterleavedBufferAttribute){const We=tt.data,X=We.stride,Wt=tt.offset;if(We.isInstancedInterleavedBuffer){for(let Ue=0;Ue<De.locationSize;Ue++)F(De.location+Ue,We.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Ue=0;Ue<De.locationSize;Ue++)P(De.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,je);for(let Ue=0;Ue<De.locationSize;Ue++)L(De.location+Ue,ge/De.locationSize,Oe,Q,X*Ce,(Wt+ge/De.locationSize*Ue)*Ce,Et)}else{if(tt.isInstancedBufferAttribute){for(let We=0;We<De.locationSize;We++)F(De.location+We,tt.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let We=0;We<De.locationSize;We++)P(De.location+We);r.bindBuffer(r.ARRAY_BUFFER,je);for(let We=0;We<De.locationSize;We++)L(De.location+We,ge/De.locationSize,Oe,Q,ge*Ce,ge/De.locationSize*We*Ce,Et)}}else if(he!==void 0){const Q=he[Se];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(De.location,Q);break;case 3:r.vertexAttrib3fv(De.location,Q);break;case 4:r.vertexAttrib4fv(De.location,Q);break;default:r.vertexAttrib1fv(De.location,Q)}}}}N()}function pe(){me();for(const z in c){const se=c[z];for(const ne in se){const ce=se[ne];for(const te in ce)E(ce[te].object),delete ce[te];delete se[ne]}delete c[z]}}function T(z){if(c[z.id]===void 0)return;const se=c[z.id];for(const ne in se){const ce=se[ne];for(const te in ce)E(ce[te].object),delete ce[te];delete se[ne]}delete c[z.id]}function O(z){for(const se in c){const ne=c[se];if(ne[z.id]===void 0)continue;const ce=ne[z.id];for(const te in ce)E(ce[te].object),delete ce[te];delete ne[z.id]}}function me(){fe(),m=!0,d!==f&&(d=f,x(d.object))}function fe(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:me,resetDefaultState:fe,dispose:pe,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:P,disableUnusedAttributes:N}}function Vb(r,e,t,i){const o=i.isWebGL2;let a;function u(m){a=m}function c(m,_){r.drawArrays(a,m,_),t.update(_,a,1)}function f(m,_,v){if(v===0)return;let x,E;if(o)x=r,E="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[E](a,m,_,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<v;E++)this.render(m[E],_[E]);else{x.multiDrawArraysWEBGL(a,m,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=_[A];t.update(E,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function Wb(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,P=u||e.has("OES_texture_float"),F=w&&P,N=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:E,maxAttributes:A,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:U,vertexTextures:w,floatFragmentTextures:P,floatVertexTextures:F,maxSamples:N}}function Xb(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new or,c=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,A=_.clipIntersection,g=_.clipShadows,p=r.get(_);if(!o||E===null||E.length===0||a&&!g)a?m(null):d();else{const U=a?0:i,w=U*4;let P=p.clippingState||null;f.value=P,P=m(E,v,w,x);for(let F=0;F!==w;++F)P[F]=t[F];p.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,x,E){const A=_!==null?_.length:0;let g=null;if(A!==0){if(g=f.value,E!==!0||g===null){const p=x+A*4,U=v.matrixWorldInverse;c.getNormalMatrix(U),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,P=x;w!==A;++w,P+=4)u.copy(_[w]).applyMatrix4(U,c),u.normal.toArray(g,P),g[P+3]=u.constant}f.value=g,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,g}}function Yb(r){let e=new WeakMap;function t(u,c){return c===eu?u.mapping=Cs:c===tu&&(u.mapping=Ls),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===eu||c===tu)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new ny(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class qb extends $p{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=m*this.view.offsetY,f=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,zd=[.125,.215,.35,.446,.526,.582],Ir=20,Hc=new qb,Hd=new Tt;let kc=null,Vc=0,Wc=0;const Lr=(1+Math.sqrt(5))/2,Es=1/Lr,kd=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Lr,Es),new Y(0,Lr,-Es),new Y(Es,0,Lr),new Y(-Es,0,Lr),new Y(Lr,Es,0),new Y(-Lr,Es,0)];class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Vc,Wc),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ho,format:ci,colorSpace:pr,depthBuffer:!1},o=Wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$b(a)),this._blurMaterial=Kb(a,e,t)}return o}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,i,o){const c=new Gn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Hd),m.toneMapping=ur,m.autoClear=!1;const x=new _u({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new ui(new vo,x);let A=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,A=!0):(x.color.copy(Hd),A=!0);for(let p=0;p<6;p++){const U=p%3;U===0?(c.up.set(0,f[p],0),c.lookAt(d[p],0,0)):U===1?(c.up.set(0,0,f[p]),c.lookAt(0,d[p],0)):(c.up.set(0,f[p],0),c.lookAt(0,0,d[p]));const w=this._cubeSize;La(o,U*w,p>2?w:0,w,w),m.setRenderTarget(o),A&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Cs||e.mapping===Ls;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new ui(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;La(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Hc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=kd[(o-1)%kd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new ui(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ir-1),A=a/E,g=isFinite(a)?1+Math.floor(m*A):Ir;g>Ir&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ir}`);const p=[];let U=0;for(let L=0;L<Ir;++L){const V=L/A,pe=Math.exp(-V*V/2);p.push(pe),L===0?U+=pe:L<g&&(U+=2*pe)}for(let L=0;L<p.length;L++)p[L]=p[L]/U;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=p,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-i;const P=this._sizeLods[o],F=3*P*(o>w-bs?o-w+bs:0),N=4*(this._cubeSize-P);La(t,F,N,3*P,2*P),f.setRenderTarget(t),f.render(_,Hc)}}function $b(r){const e=[],t=[],i=[];let o=r;const a=r-bs+1+zd.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-bs?f=zd[u-r+bs-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,E=6,A=3,g=2,p=1,U=new Float32Array(A*E*x),w=new Float32Array(g*E*x),P=new Float32Array(p*E*x);for(let N=0;N<x;N++){const L=N%3*2/3-1,V=N>2?0:-1,pe=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];U.set(pe,A*E*N),w.set(v,g*E*N);const T=[N,N,N,N,N,N];P.set(T,p*E*N)}const F=new Vi;F.setAttribute("position",new fi(U,A)),F.setAttribute("uv",new fi(w,g)),F.setAttribute("faceIndex",new fi(P,p)),e.push(F),o>bs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wd(r,e,t){const i=new Or(r,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function Kb(r,e,t){const i=new Float32Array(Ir),o=new Y(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Xd(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Yd(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function Zb(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===eu||f===tu,m=f===Cs||f===Ls;if(d||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Vd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||m&&_&&o(_)){t===null&&(t=new Vd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let m=0;m<d;m++)c[m]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function jb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Jb(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const A=v.morphAttributes[E];for(let g=0,p=A.length;g<p;g++)e.remove(A[g])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const E in x){const A=x[E];for(let g=0,p=A.length;g<p;g++)e.update(A[g],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,E=_.attributes.position;let A=0;if(x!==null){const U=x.array;A=x.version;for(let w=0,P=U.length;w<P;w+=3){const F=U[w+0],N=U[w+1],L=U[w+2];v.push(F,N,N,L,L,F)}}else if(E!==void 0){const U=E.array;A=E.version;for(let w=0,P=U.length/3-1;w<P;w+=3){const F=w+0,N=w+1,L=w+2;v.push(F,N,N,L,L,F)}}else return;const g=new(Bp(v)?Yp:Xp)(v,1);g.version=A;const p=a.get(_);p&&e.remove(p),a.set(_,g)}function m(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:m}}function Qb(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,E){r.drawElements(a,E,c,x*f),t.update(E,a,1)}function _(x,E,A){if(A===0)return;let g,p;if(o)g=r,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](a,E,c,x*f,A),t.update(E,a,A)}function v(x,E,A){if(A===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<A;p++)this.render(x[p]/f,E[p]);else{g.multiDrawElementsWEBGL(a,E,0,c,x,0,A);let p=0;for(let U=0;U<A;U++)p+=E[U];t.update(p,a,1)}}this.setMode=u,this.setIndex=d,this.render=m,this.renderInstances=_,this.renderMultiDraw=v}function eA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function tA(r,e){return r[0]-e[0]}function nA(r,e){return Math.abs(e[1])-Math.abs(r[1])}function iA(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new un,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,m,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,A=E!==void 0?E.length:0;let g=a.get(m);if(g===void 0||g.count!==A){let fe=function(){O.dispose(),a.delete(m),m.removeEventListener("dispose",fe)};var x=fe;g!==void 0&&g.texture.dispose();const p=m.morphAttributes.position!==void 0,U=m.morphAttributes.normal!==void 0,w=m.morphAttributes.color!==void 0,P=m.morphAttributes.position||[],F=m.morphAttributes.normal||[],N=m.morphAttributes.color||[];let L=0;p===!0&&(L=1),U===!0&&(L=2),w===!0&&(L=3);let V=m.attributes.position.count*L,pe=1;V>e.maxTextureSize&&(pe=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const T=new Float32Array(V*pe*4*A),O=new Hp(T,V,pe,A);O.type=vi,O.needsUpdate=!0;const me=L*4;for(let z=0;z<A;z++){const se=P[z],ne=F[z],ce=N[z],te=V*pe*4*z;for(let ue=0;ue<se.count;ue++){const he=ue*me;p===!0&&(u.fromBufferAttribute(se,ue),T[te+he+0]=u.x,T[te+he+1]=u.y,T[te+he+2]=u.z,T[te+he+3]=0),U===!0&&(u.fromBufferAttribute(ne,ue),T[te+he+4]=u.x,T[te+he+5]=u.y,T[te+he+6]=u.z,T[te+he+7]=0),w===!0&&(u.fromBufferAttribute(ce,ue),T[te+he+8]=u.x,T[te+he+9]=u.y,T[te+he+10]=u.z,T[te+he+11]=ce.itemSize===4?u.w:1)}}g={count:A,texture:O,size:new lt(V,pe)},a.set(m,g),m.addEventListener("dispose",fe)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let p=0;for(let w=0;w<v.length;w++)p+=v[w];const U=m.morphTargetsRelative?1:1-p;_.getUniforms().setValue(r,"morphTargetBaseInfluence",U),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const E=v===void 0?0:v.length;let A=i[m.id];if(A===void 0||A.length!==E){A=[];for(let P=0;P<E;P++)A[P]=[P,0];i[m.id]=A}for(let P=0;P<E;P++){const F=A[P];F[0]=P,F[1]=v[P]}A.sort(nA);for(let P=0;P<8;P++)P<E&&A[P][1]?(c[P][0]=A[P][0],c[P][1]=A[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(tA);const g=m.morphAttributes.position,p=m.morphAttributes.normal;let U=0;for(let P=0;P<8;P++){const F=c[P],N=F[0],L=F[1];N!==Number.MAX_SAFE_INTEGER&&L?(g&&m.getAttribute("morphTarget"+P)!==g[N]&&m.setAttribute("morphTarget"+P,g[N]),p&&m.getAttribute("morphNormal"+P)!==p[N]&&m.setAttribute("morphNormal"+P,p[N]),o[P]=L,U+=L):(g&&m.hasAttribute("morphTarget"+P)===!0&&m.deleteAttribute("morphTarget"+P),p&&m.hasAttribute("morphNormal"+P)===!0&&m.deleteAttribute("morphNormal"+P),o[P]=0)}const w=m.morphTargetsRelative?1:1-U;_.getUniforms().setValue(r,"morphTargetBaseInfluence",w),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function rA(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,m=f.geometry,_=e.get(f,m);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class Jp extends En{constructor(e,t,i,o,a,u,c,f,d,m){if(m=m!==void 0?m:Nr,m!==Nr&&m!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Nr&&(i=lr),i===void 0&&m===Ps&&(i=Ur),super(null,o,a,u,c,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:cn,this.minFilter=f!==void 0?f:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qp=new En,em=new Jp(1,1);em.compareFunction=Fp;const tm=new Hp,nm=new GE,im=new Kp,qd=[],$d=[],Kd=new Float32Array(16),Zd=new Float32Array(9),jd=new Float32Array(4);function Us(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=qd[o];if(a===void 0&&(a=new Float32Array(o),qd[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function rl(r,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function sA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function aA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function lA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function cA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;jd.set(i),r.uniformMatrix2fv(this.addr,!1,jd),nn(t,i)}}function uA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Zd.set(i),r.uniformMatrix3fv(this.addr,!1,Zd),nn(t,i)}}function fA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Kd.set(i),r.uniformMatrix4fv(this.addr,!1,Kd),nn(t,i)}}function hA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function gA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _A(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function vA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function xA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function SA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?em:Qp;t.setTexture2D(e||a,o)}function MA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||nm,o)}function EA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||im,o)}function yA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||tm,o)}function TA(r){switch(r){case 5126:return sA;case 35664:return oA;case 35665:return aA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return yA}}function bA(r,e){r.uniform1fv(this.addr,e)}function AA(r,e){const t=Us(e,this.size,2);r.uniform2fv(this.addr,t)}function wA(r,e){const t=Us(e,this.size,3);r.uniform3fv(this.addr,t)}function RA(r,e){const t=Us(e,this.size,4);r.uniform4fv(this.addr,t)}function CA(r,e){const t=Us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function LA(r,e){const t=Us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function PA(r,e){const t=Us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IA(r,e){r.uniform1iv(this.addr,e)}function DA(r,e){r.uniform2iv(this.addr,e)}function UA(r,e){r.uniform3iv(this.addr,e)}function NA(r,e){r.uniform4iv(this.addr,e)}function OA(r,e){r.uniform1uiv(this.addr,e)}function FA(r,e){r.uniform2uiv(this.addr,e)}function BA(r,e){r.uniform3uiv(this.addr,e)}function GA(r,e){r.uniform4uiv(this.addr,e)}function zA(r,e,t){const i=this.cache,o=e.length,a=rl(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Qp,a[u])}function HA(r,e,t){const i=this.cache,o=e.length,a=rl(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||nm,a[u])}function kA(r,e,t){const i=this.cache,o=e.length,a=rl(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||im,a[u])}function VA(r,e,t){const i=this.cache,o=e.length,a=rl(t,o);tn(i,a)||(r.uniform1iv(this.addr,a),nn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||tm,a[u])}function WA(r){switch(r){case 5126:return bA;case 35664:return AA;case 35665:return wA;case 35666:return RA;case 35674:return CA;case 35675:return LA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return DA;case 35668:case 35672:return UA;case 35669:case 35673:return NA;case 5125:return OA;case 36294:return FA;case 36295:return BA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TA(t.type)}}class YA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WA(t.type)}}class qA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Jd(r,e){r.seq.push(e),r.map[e.id]=e}function $A(r,e,t){const i=r.name,o=i.length;for(Xc.lastIndex=0;;){const a=Xc.exec(i),u=Xc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){Jd(t,d===void 0?new XA(c,r,e):new YA(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new qA(c),Jd(t,_)),t=_}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);$A(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function Qd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const KA=37297;let ZA=0;function jA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function JA(r){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(r);let i;switch(e===t?i="":e===Va&&t===ka?i="LinearDisplayP3ToLinearSRGB":e===ka&&t===Va&&(i="LinearSRGBToLinearDisplayP3"),r){case pr:case tl:return[i,"LinearTransferOETF"];case gi:case mu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ep(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+jA(r.getShaderSource(e),u)}else return o}function QA(r,e){const t=JA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ew(r,e){let t;switch(e){case qM:t="Linear";break;case $M:t="Reinhard";break;case KM:t="OptimizedCineon";break;case ZM:t="ACESFilmic";break;case JM:t="AgX";break;case QM:t="Neutral";break;case jM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tw(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function nw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function iw(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rw(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function As(r){return r!==""}function tp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function np(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(sw,aw)}const ow=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aw(r,e){let t=mt[e];if(t===void 0){const i=ow.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ip(r){return r.replace(lw,cw)}function cw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function rp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function uw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===MM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Ls:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function dw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case XM:e="ENVMAP_BLENDING_MIX";break;case YM:e="ENVMAP_BLENDING_ADD";break}return e}function pw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=uw(t),d=fw(t),m=hw(t),_=dw(t),v=pw(t),x=t.isWebGL2?"":tw(t),E=nw(t),A=iw(a),g=o.createProgram();let p,U,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(As).join(`
`),p.length>0&&(p+=`
`),U=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(As).join(`
`),U.length>0&&(U+=`
`)):(p=[rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),U=[x,rp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?mt.tonemapping_pars_fragment:"",t.toneMapping!==ur?ew("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,QA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),u=ou(u),u=tp(u,t),u=np(u,t),c=ou(c),c=tp(c,t),c=np(c,t),u=ip(u),c=ip(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,U=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const P=w+p+u,F=w+U+c,N=Qd(o,o.VERTEX_SHADER,P),L=Qd(o,o.FRAGMENT_SHADER,F);o.attachShader(g,N),o.attachShader(g,L),t.index0AttributeName!==void 0?o.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(g,0,"position"),o.linkProgram(g);function V(me){if(r.debug.checkShaderErrors){const fe=o.getProgramInfoLog(g).trim(),z=o.getShaderInfoLog(N).trim(),se=o.getShaderInfoLog(L).trim();let ne=!0,ce=!0;if(o.getProgramParameter(g,o.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,g,N,L);else{const te=ep(o,N,"vertex"),ue=ep(o,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(g,o.VALIDATE_STATUS)+`

Material Name: `+me.name+`
Material Type: `+me.type+`

Program Info Log: `+fe+`
`+te+`
`+ue)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(z===""||se==="")&&(ce=!1);ce&&(me.diagnostics={runnable:ne,programLog:fe,vertexShader:{log:z,prefix:p},fragmentShader:{log:se,prefix:U}})}o.deleteShader(N),o.deleteShader(L),pe=new Ba(o,g),T=rw(o,g)}let pe;this.getUniforms=function(){return pe===void 0&&V(this),pe};let T;this.getAttributes=function(){return T===void 0&&V(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(g,KA)),O},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=L,this}let gw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vw(e),t.set(e,i)),i}}class vw{constructor(e){this.id=gw++,this.code=e,this.usedTimes=0}}function xw(r,e,t,i,o,a,u){const c=new Vp,f=new _w,d=new Set,m=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let E=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return d.add(T),T===0?"uv":`uv${T}`}function p(T,O,me,fe,z){const se=fe.fog,ne=z.geometry,ce=T.isMeshStandardMaterial?fe.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ce),ue=te&&te.mapping===el?te.image.height:null,he=A[T.type];T.precision!==null&&(E=o.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const Se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,De=Se!==void 0?Se.length:0;let tt=0;ne.morphAttributes.position!==void 0&&(tt=1),ne.morphAttributes.normal!==void 0&&(tt=2),ne.morphAttributes.color!==void 0&&(tt=3);let Q,ge,Re,je;if(he){const bt=_i[he];Q=bt.vertexShader,ge=bt.fragmentShader}else Q=T.vertexShader,ge=T.fragmentShader,f.update(T),Re=f.getVertexShaderID(T),je=f.getFragmentShaderID(T);const Oe=r.getRenderTarget(),Ce=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,We=!!T.map,X=!!T.matcap,Wt=!!te,Ue=!!T.aoMap,Je=!!T.lightMap,Ve=!!T.bumpMap,et=!!T.normalMap,nt=!!T.displacementMap,ct=!!T.emissiveMap,At=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,ee=T.clearcoat>0,oe=T.iridescence>0,ve=T.sheen>0,_e=T.transmission>0,Ze=M&&!!T.anisotropyMap,He=ee&&!!T.clearcoatMap,ye=ee&&!!T.clearcoatNormalMap,be=ee&&!!T.clearcoatRoughnessMap,Qe=oe&&!!T.iridescenceMap,Ee=oe&&!!T.iridescenceThicknessMap,Nt=ve&&!!T.sheenColorMap,st=ve&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Pe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,I=_e&&!!T.transmissionMap,le=_e&&!!T.thicknessMap,Ne=!!T.gradientMap,B=!!T.alphaMap,Me=T.alphaTest>0,q=!!T.alphaHash,xe=!!T.extensions;let we=ur;T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(we=r.toneMapping);const dt={isWebGL2:_,shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:ge,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:Et,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Oe===null?r.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:pr,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:X,envMap:Wt,envMapMode:Wt&&te.mapping,envMapCubeUVHeight:ue,aoMap:Ue,lightMap:Je,bumpMap:Ve,normalMap:et,displacementMap:x&&nt,emissiveMap:ct,normalMapObjectSpace:et&&T.normalMapType===uE,normalMapTangentSpace:et&&T.normalMapType===cE,metalnessMap:At,roughnessMap:C,anisotropy:M,anisotropyMap:Ze,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,iridescence:oe,iridescenceMap:Qe,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:Nt,sheenRoughnessMap:st,specularMap:ze,specularColorMap:Pe,specularIntensityMap:Fe,transmission:_e,transmissionMap:I,thicknessMap:le,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===ws&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:Me,alphaHash:q,combine:T.combine,mapUv:We&&g(T.map.channel),aoMapUv:Ue&&g(T.aoMap.channel),lightMapUv:Je&&g(T.lightMap.channel),bumpMapUv:Ve&&g(T.bumpMap.channel),normalMapUv:et&&g(T.normalMap.channel),displacementMapUv:nt&&g(T.displacementMap.channel),emissiveMapUv:ct&&g(T.emissiveMap.channel),metalnessMapUv:At&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:Ze&&g(T.anisotropyMap.channel),clearcoatMapUv:He&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:st&&g(T.sheenRoughnessMap.channel),specularMapUv:ze&&g(T.specularMap.channel),specularColorMapUv:Pe&&g(T.specularColorMap.channel),specularIntensityMapUv:Fe&&g(T.specularIntensityMap.channel),transmissionMapUv:I&&g(T.transmissionMap.channel),thicknessMapUv:le&&g(T.thicknessMap.channel),alphaMapUv:B&&g(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(et||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ne.attributes.uv&&(We||B),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:z.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:tt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&me.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,useLegacyLights:r._useLegacyLights,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===Ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:xe&&T.extensions.derivatives===!0,extensionFragDepth:xe&&T.extensions.fragDepth===!0,extensionDrawBuffers:xe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:xe&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=d.has(1),dt.vertexUv2s=d.has(2),dt.vertexUv3s=d.has(3),d.clear(),dt}function U(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const me in T.defines)O.push(me),O.push(T.defines[me]);return T.isRawShaderMaterial===!1&&(w(O,T),P(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function w(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function P(T,O){c.disableAll(),O.isWebGL2&&c.enable(0),O.supportsVertexTextures&&c.enable(1),O.instancing&&c.enable(2),O.instancingColor&&c.enable(3),O.instancingMorph&&c.enable(4),O.matcap&&c.enable(5),O.envMap&&c.enable(6),O.normalMapObjectSpace&&c.enable(7),O.normalMapTangentSpace&&c.enable(8),O.clearcoat&&c.enable(9),O.iridescence&&c.enable(10),O.alphaTest&&c.enable(11),O.vertexColors&&c.enable(12),O.vertexAlphas&&c.enable(13),O.vertexUv1s&&c.enable(14),O.vertexUv2s&&c.enable(15),O.vertexUv3s&&c.enable(16),O.vertexTangents&&c.enable(17),O.anisotropy&&c.enable(18),O.alphaHash&&c.enable(19),O.batching&&c.enable(20),T.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.skinning&&c.enable(4),O.morphTargets&&c.enable(5),O.morphNormals&&c.enable(6),O.morphColors&&c.enable(7),O.premultipliedAlpha&&c.enable(8),O.shadowMapEnabled&&c.enable(9),O.useLegacyLights&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.alphaToCoverage&&c.enable(20),T.push(c.mask)}function F(T){const O=A[T.type];let me;if(O){const fe=_i[O];me=JE.clone(fe.uniforms)}else me=T.uniforms;return me}function N(T,O){let me;for(let fe=0,z=m.length;fe<z;fe++){const se=m[fe];if(se.cacheKey===O){me=se,++me.usedTimes;break}}return me===void 0&&(me=new mw(r,O,T,a),m.push(me)),me}function L(T){if(--T.usedTimes===0){const O=m.indexOf(T);m[O]=m[m.length-1],m.pop(),T.destroy()}}function V(T){f.remove(T)}function pe(){f.dispose()}return{getParameters:p,getProgramCacheKey:U,getUniforms:F,acquireProgram:N,releaseProgram:L,releaseShaderCache:V,programs:m,dispose:pe}}function Sw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function Mw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function op(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,E,A,g){let p=r[e];return p===void 0?(p={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:A,group:g},r[e]=p):(p.id=_.id,p.object=_,p.geometry=v,p.material=x,p.groupOrder=E,p.renderOrder=_.renderOrder,p.z=A,p.group=g),e++,p}function c(_,v,x,E,A,g){const p=u(_,v,x,E,A,g);x.transmission>0?i.push(p):x.transparent===!0?o.push(p):t.push(p)}function f(_,v,x,E,A,g){const p=u(_,v,x,E,A,g);x.transmission>0?i.unshift(p):x.transparent===!0?o.unshift(p):t.unshift(p)}function d(_,v){t.length>1&&t.sort(_||Mw),i.length>1&&i.sort(v||sp),o.length>1&&o.sort(v||sp)}function m(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:m,sort:d}}function Ew(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new op,r.set(i,[u])):o>=a.length?(u=new op,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function yw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function Tw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bw=0;function Aw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ww(r,e){const t=new yw,i=Tw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)o.probe.push(new Y);const a=new Y,u=new Yt,c=new Yt;function f(m,_){let v=0,x=0,E=0;for(let me=0;me<9;me++)o.probe[me].set(0,0,0);let A=0,g=0,p=0,U=0,w=0,P=0,F=0,N=0,L=0,V=0,pe=0;m.sort(Aw);const T=_===!0?Math.PI:1;for(let me=0,fe=m.length;me<fe;me++){const z=m[me],se=z.color,ne=z.intensity,ce=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=se.r*ne*T,x+=se.g*ne*T,E+=se.b*ne*T;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)o.probe[ue].addScaledVector(z.sh.coefficients[ue],ne);pe++}else if(z.isDirectionalLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const he=z.shadow,Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,o.directionalShadow[A]=Se,o.directionalShadowMap[A]=te,o.directionalShadowMatrix[A]=z.shadow.matrix,P++}o.directional[A]=ue,A++}else if(z.isSpotLight){const ue=t.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(se).multiplyScalar(ne*T),ue.distance=ce,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,o.spot[p]=ue;const he=z.shadow;if(z.map&&(o.spotLightMap[L]=z.map,L++,he.updateMatrices(z),z.castShadow&&V++),o.spotLightMatrix[p]=he.matrix,z.castShadow){const Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,o.spotShadow[p]=Se,o.spotShadowMap[p]=te,N++}p++}else if(z.isRectAreaLight){const ue=t.get(z);ue.color.copy(se).multiplyScalar(ne),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),o.rectArea[U]=ue,U++}else if(z.isPointLight){const ue=t.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity*T),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const he=z.shadow,Se=i.get(z);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,Se.shadowCameraNear=he.camera.near,Se.shadowCameraFar=he.camera.far,o.pointShadow[g]=Se,o.pointShadowMap[g]=te,o.pointShadowMatrix[g]=z.shadow.matrix,F++}o.point[g]=ue,g++}else if(z.isHemisphereLight){const ue=t.get(z);ue.skyColor.copy(z.color).multiplyScalar(ne*T),ue.groundColor.copy(z.groundColor).multiplyScalar(ne*T),o.hemi[w]=ue,w++}}U>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_FLOAT_1,o.rectAreaLTC2=Te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Te.LTC_HALF_1,o.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=E;const O=o.hash;(O.directionalLength!==A||O.pointLength!==g||O.spotLength!==p||O.rectAreaLength!==U||O.hemiLength!==w||O.numDirectionalShadows!==P||O.numPointShadows!==F||O.numSpotShadows!==N||O.numSpotMaps!==L||O.numLightProbes!==pe)&&(o.directional.length=A,o.spot.length=p,o.rectArea.length=U,o.point.length=g,o.hemi.length=w,o.directionalShadow.length=P,o.directionalShadowMap.length=P,o.pointShadow.length=F,o.pointShadowMap.length=F,o.spotShadow.length=N,o.spotShadowMap.length=N,o.directionalShadowMatrix.length=P,o.pointShadowMatrix.length=F,o.spotLightMatrix.length=N+L-V,o.spotLightMap.length=L,o.numSpotLightShadowsWithMaps=V,o.numLightProbes=pe,O.directionalLength=A,O.pointLength=g,O.spotLength=p,O.rectAreaLength=U,O.hemiLength=w,O.numDirectionalShadows=P,O.numPointShadows=F,O.numSpotShadows=N,O.numSpotMaps=L,O.numLightProbes=pe,o.version=bw++)}function d(m,_){let v=0,x=0,E=0,A=0,g=0;const p=_.matrixWorldInverse;for(let U=0,w=m.length;U<w;U++){const P=m[U];if(P.isDirectionalLight){const F=o.directional[v];F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(p),v++}else if(P.isSpotLight){const F=o.spot[E];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(p),F.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(p),E++}else if(P.isRectAreaLight){const F=o.rectArea[A];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(p),c.identity(),u.copy(P.matrixWorld),u.premultiply(p),c.extractRotation(u),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),A++}else if(P.isPointLight){const F=o.point[x];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(p),x++}else if(P.isHemisphereLight){const F=o.hemi[g];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(p),g++}}}return{setup:f,setupView:d,state:o}}function ap(r,e){const t=new ww(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function Rw(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new ap(r,e),t.set(a,[f])):u>=c.length?(f=new ap(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class Cw extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lw extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`;function Dw(r,e,t){let i=new Zp;const o=new lt,a=new lt,u=new un,c=new Cw({depthPacking:lE}),f=new Lw,d={},m=t.maxTextureSize,_={[hr]:Ln,[Ln]:hr,[zi]:zi},v=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Pw,fragmentShader:Iw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Vi;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(E,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ap;let p=this.type;this.render=function(N,L,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const pe=r.getRenderTarget(),T=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),me=r.state;me.setBlending(cr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const fe=p!==Bi&&this.type===Bi,z=p===Bi&&this.type!==Bi;for(let se=0,ne=N.length;se<ne;se++){const ce=N[se],te=ce.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const ue=te.getFrameExtents();if(o.multiply(ue),a.copy(te.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/ue.x),o.x=a.x*ue.x,te.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/ue.y),o.y=a.y*ue.y,te.mapSize.y=a.y)),te.map===null||fe===!0||z===!0){const Se=this.type!==Bi?{minFilter:cn,magFilter:cn}:{};te.map!==null&&te.map.dispose(),te.map=new Or(o.x,o.y,Se),te.map.texture.name=ce.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const he=te.getViewportCount();for(let Se=0;Se<he;Se++){const De=te.getViewport(Se);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),me.viewport(u),te.updateMatrices(ce,Se),i=te.getFrustum(),P(L,V,te.camera,ce,this.type)}te.isPointLightShadow!==!0&&this.type===Bi&&U(te,V),te.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(pe,T,O)};function U(N,L){const V=e.update(A);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Or(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(L,null,V,v,A,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(L,null,V,x,A,null)}function w(N,L,V,pe){let T=null;const O=V.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)T=O;else if(T=V.isPointLight===!0?f:c,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const me=T.uuid,fe=L.uuid;let z=d[me];z===void 0&&(z={},d[me]=z);let se=z[fe];se===void 0&&(se=T.clone(),z[fe]=se,L.addEventListener("dispose",F)),T=se}if(T.visible=L.visible,T.wireframe=L.wireframe,pe===Bi?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:_[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const me=r.properties.get(T);me.light=V}return T}function P(N,L,V,pe,T){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Bi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),z=N.material;if(Array.isArray(z)){const se=fe.groups;for(let ne=0,ce=se.length;ne<ce;ne++){const te=se[ne],ue=z[te.materialIndex];if(ue&&ue.visible){const he=w(N,ue,pe,T);N.onBeforeShadow(r,N,L,V,fe,he,te),r.renderBufferDirect(V,null,fe,he,N,te),N.onAfterShadow(r,N,L,V,fe,he,te)}}}else if(z.visible){const se=w(N,z,pe,T);N.onBeforeShadow(r,N,L,V,fe,se,null),r.renderBufferDirect(V,null,fe,se,N,null),N.onAfterShadow(r,N,L,V,fe,se,null)}}const me=N.children;for(let fe=0,z=me.length;fe<z;fe++)P(me[fe],L,V,pe,T)}function F(N){N.target.removeEventListener("dispose",F);for(const V in d){const pe=d[V],T=N.target.uuid;T in pe&&(pe[T].dispose(),delete pe[T])}}}function Uw(r,e,t){const i=t.isWebGL2;function o(){let B=!1;const Me=new un;let q=null;const xe=new un(0,0,0,0);return{setMask:function(we){q!==we&&!B&&(r.colorMask(we,we,we,we),q=we)},setLocked:function(we){B=we},setClear:function(we,dt,bt,Ct,zt){zt===!0&&(we*=Ct,dt*=Ct,bt*=Ct),Me.set(we,dt,bt,Ct),xe.equals(Me)===!1&&(r.clearColor(we,dt,bt,Ct),xe.copy(Me))},reset:function(){B=!1,q=null,xe.set(-1,0,0,0)}}}function a(){let B=!1,Me=null,q=null,xe=null;return{setTest:function(we){we?Ce(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(we){Me!==we&&!B&&(r.depthMask(we),Me=we)},setFunc:function(we){if(q!==we){switch(we){case BM:r.depthFunc(r.NEVER);break;case GM:r.depthFunc(r.ALWAYS);break;case zM:r.depthFunc(r.LESS);break;case za:r.depthFunc(r.LEQUAL);break;case HM:r.depthFunc(r.EQUAL);break;case kM:r.depthFunc(r.GEQUAL);break;case VM:r.depthFunc(r.GREATER);break;case WM:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=we}},setLocked:function(we){B=we},setClear:function(we){xe!==we&&(r.clearDepth(we),xe=we)},reset:function(){B=!1,Me=null,q=null,xe=null}}}function u(){let B=!1,Me=null,q=null,xe=null,we=null,dt=null,bt=null,Ct=null,zt=null;return{setTest:function(yt){B||(yt?Ce(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(yt){Me!==yt&&!B&&(r.stencilMask(yt),Me=yt)},setFunc:function(yt,Lt,rn){(q!==yt||xe!==Lt||we!==rn)&&(r.stencilFunc(yt,Lt,rn),q=yt,xe=Lt,we=rn)},setOp:function(yt,Lt,rn){(dt!==yt||bt!==Lt||Ct!==rn)&&(r.stencilOp(yt,Lt,rn),dt=yt,bt=Lt,Ct=rn)},setLocked:function(yt){B=yt},setClear:function(yt){zt!==yt&&(r.clearStencil(yt),zt=yt)},reset:function(){B=!1,Me=null,q=null,xe=null,we=null,dt=null,bt=null,Ct=null,zt=null}}}const c=new o,f=new a,d=new u,m=new WeakMap,_=new WeakMap;let v={},x={},E=new WeakMap,A=[],g=null,p=!1,U=null,w=null,P=null,F=null,N=null,L=null,V=null,pe=new Tt(0,0,0),T=0,O=!1,me=null,fe=null,z=null,se=null,ne=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ue=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(he)[1]),te=ue>=1):he.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),te=ue>=2);let Se=null,De={};const tt=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ge=new un().fromArray(tt),Re=new un().fromArray(Q);function je(B,Me,q,xe){const we=new Uint8Array(4),dt=r.createTexture();r.bindTexture(B,dt),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let bt=0;bt<q;bt++)i&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Me+bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return dt}const Oe={};Oe[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(za),nt(!1),ct(zh),Ce(r.CULL_FACE),Ve(cr);function Ce(B){v[B]!==!0&&(r.enable(B),v[B]=!0)}function Et(B){v[B]!==!1&&(r.disable(B),v[B]=!1)}function We(B,Me){return x[B]!==Me?(r.bindFramebuffer(B,Me),x[B]=Me,i&&(B===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Me),B===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function X(B,Me){let q=A,xe=!1;if(B){q=E.get(Me),q===void 0&&(q=[],E.set(Me,q));const we=B.textures;if(q.length!==we.length||q[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,bt=we.length;dt<bt;dt++)q[dt]=r.COLOR_ATTACHMENT0+dt;q.length=we.length,xe=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,xe=!0);if(xe)if(t.isWebGL2)r.drawBuffers(q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const Ue={[Pr]:r.FUNC_ADD,[yM]:r.FUNC_SUBTRACT,[TM]:r.FUNC_REVERSE_SUBTRACT};if(i)Ue[Wh]=r.MIN,Ue[Xh]=r.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Ue[Wh]=B.MIN_EXT,Ue[Xh]=B.MAX_EXT)}const Je={[bM]:r.ZERO,[AM]:r.ONE,[wM]:r.SRC_COLOR,[Jc]:r.SRC_ALPHA,[DM]:r.SRC_ALPHA_SATURATE,[PM]:r.DST_COLOR,[CM]:r.DST_ALPHA,[RM]:r.ONE_MINUS_SRC_COLOR,[Qc]:r.ONE_MINUS_SRC_ALPHA,[IM]:r.ONE_MINUS_DST_COLOR,[LM]:r.ONE_MINUS_DST_ALPHA,[UM]:r.CONSTANT_COLOR,[NM]:r.ONE_MINUS_CONSTANT_COLOR,[OM]:r.CONSTANT_ALPHA,[FM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(B,Me,q,xe,we,dt,bt,Ct,zt,yt){if(B===cr){p===!0&&(Et(r.BLEND),p=!1);return}if(p===!1&&(Ce(r.BLEND),p=!0),B!==EM){if(B!==U||yt!==O){if((w!==Pr||N!==Pr)&&(r.blendEquation(r.FUNC_ADD),w=Pr,N=Pr),yt)switch(B){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hh:r.blendFunc(r.ONE,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}P=null,F=null,L=null,V=null,pe.set(0,0,0),T=0,U=B,O=yt}return}we=we||Me,dt=dt||q,bt=bt||xe,(Me!==w||we!==N)&&(r.blendEquationSeparate(Ue[Me],Ue[we]),w=Me,N=we),(q!==P||xe!==F||dt!==L||bt!==V)&&(r.blendFuncSeparate(Je[q],Je[xe],Je[dt],Je[bt]),P=q,F=xe,L=dt,V=bt),(Ct.equals(pe)===!1||zt!==T)&&(r.blendColor(Ct.r,Ct.g,Ct.b,zt),pe.copy(Ct),T=zt),U=B,O=!1}function et(B,Me){B.side===zi?Et(r.CULL_FACE):Ce(r.CULL_FACE);let q=B.side===Ln;Me&&(q=!q),nt(q),B.blending===ws&&B.transparent===!1?Ve(cr):Ve(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),c.setMask(B.colorWrite);const xe=B.stencilWrite;d.setTest(xe),xe&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),C(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(B){me!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),me=B)}function ct(B){B!==xM?(Ce(r.CULL_FACE),B!==fe&&(B===zh?r.cullFace(r.BACK):B===SM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),fe=B}function At(B){B!==z&&(te&&r.lineWidth(B),z=B)}function C(B,Me,q){B?(Ce(r.POLYGON_OFFSET_FILL),(se!==Me||ne!==q)&&(r.polygonOffset(Me,q),se=Me,ne=q)):Et(r.POLYGON_OFFSET_FILL)}function M(B){B?Ce(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function ee(B){B===void 0&&(B=r.TEXTURE0+ce-1),Se!==B&&(r.activeTexture(B),Se=B)}function oe(B,Me,q){q===void 0&&(Se===null?q=r.TEXTURE0+ce-1:q=Se);let xe=De[q];xe===void 0&&(xe={type:void 0,texture:void 0},De[q]=xe),(xe.type!==B||xe.texture!==Me)&&(Se!==q&&(r.activeTexture(q),Se=q),r.bindTexture(B,Me||Oe[B]),xe.type=B,xe.texture=Me)}function ve(){const B=De[Se];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){ge.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ge.copy(B))}function Fe(B){Re.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Re.copy(B))}function I(B,Me){let q=_.get(Me);q===void 0&&(q=new WeakMap,_.set(Me,q));let xe=q.get(B);xe===void 0&&(xe=r.getUniformBlockIndex(Me,B.name),q.set(B,xe))}function le(B,Me){const xe=_.get(Me).get(B);m.get(Me)!==xe&&(r.uniformBlockBinding(Me,xe,B.__bindingPointIndex),m.set(Me,xe))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Se=null,De={},x={},E=new WeakMap,A=[],g=null,p=!1,U=null,w=null,P=null,F=null,N=null,L=null,V=null,pe=new Tt(0,0,0),T=0,O=!1,me=null,fe=null,z=null,se=null,ne=null,ge.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:Et,bindFramebuffer:We,drawBuffers:X,useProgram:Wt,setBlending:Ve,setMaterial:et,setFlipSided:nt,setCullFace:ct,setLineWidth:At,setPolygonOffset:C,setScissorTest:M,activeTexture:ee,bindTexture:oe,unbindTexture:ve,compressedTexImage2D:_e,compressedTexImage3D:Ze,texImage2D:st,texImage3D:ze,updateUBOMapping:I,uniformBlockBinding:le,texStorage2D:Ee,texStorage3D:Nt,texSubImage2D:He,texSubImage3D:ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Qe,scissor:Pe,viewport:Fe,reset:Ne}}function Nw(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,_=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,M){return E?new OffscreenCanvas(C,M):Ya("canvas")}function g(C,M,ee,oe){let ve=1;const _e=At(C);if((_e.width>oe||_e.height>oe)&&(ve=oe/Math.max(_e.width,_e.height)),ve<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ze=M?Xa:Math.floor,He=Ze(ve*_e.width),ye=Ze(ve*_e.height);v===void 0&&(v=A(He,ye));const be=ee?A(He,ye):v;return be.width=He,be.height=ye,be.getContext("2d").drawImage(C,0,0,He,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+He+"x"+ye+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),C;return C}function p(C){const M=At(C);return su(M.width)&&su(M.height)}function U(C){return c?!1:C.wrapS!==li||C.wrapT!==li||C.minFilter!==cn&&C.minFilter!==Cn}function w(C,M){return C.generateMipmaps&&M&&C.minFilter!==cn&&C.minFilter!==Cn}function P(C){r.generateMipmap(C)}function F(C,M,ee,oe,ve=!1){if(c===!1)return M;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e=M;if(M===r.RED&&(ee===r.FLOAT&&(_e=r.R32F),ee===r.HALF_FLOAT&&(_e=r.R16F),ee===r.UNSIGNED_BYTE&&(_e=r.R8)),M===r.RED_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.R8UI),ee===r.UNSIGNED_SHORT&&(_e=r.R16UI),ee===r.UNSIGNED_INT&&(_e=r.R32UI),ee===r.BYTE&&(_e=r.R8I),ee===r.SHORT&&(_e=r.R16I),ee===r.INT&&(_e=r.R32I)),M===r.RG&&(ee===r.FLOAT&&(_e=r.RG32F),ee===r.HALF_FLOAT&&(_e=r.RG16F),ee===r.UNSIGNED_BYTE&&(_e=r.RG8)),M===r.RG_INTEGER&&(ee===r.UNSIGNED_BYTE&&(_e=r.RG8UI),ee===r.UNSIGNED_SHORT&&(_e=r.RG16UI),ee===r.UNSIGNED_INT&&(_e=r.RG32UI),ee===r.BYTE&&(_e=r.RG8I),ee===r.SHORT&&(_e=r.RG16I),ee===r.INT&&(_e=r.RG32I)),M===r.RGBA){const Ze=ve?Ha:It.getTransfer(oe);ee===r.FLOAT&&(_e=r.RGBA32F),ee===r.HALF_FLOAT&&(_e=r.RGBA16F),ee===r.UNSIGNED_BYTE&&(_e=Ze===Gt?r.SRGB8_ALPHA8:r.RGBA8),ee===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),ee===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function N(C,M,ee){return w(C,ee)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function L(C){return C===cn||C===Yh||C===to?r.NEAREST:r.LINEAR}function V(C){const M=C.target;M.removeEventListener("dispose",V),T(M),M.isVideoTexture&&_.delete(M)}function pe(C){const M=C.target;M.removeEventListener("dispose",pe),me(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const ee=C.source,oe=x.get(ee);if(oe){const ve=oe[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&O(C),Object.keys(oe).length===0&&x.delete(ee)}i.remove(C)}function O(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const ee=C.source,oe=x.get(ee);delete oe[M.__cacheKey],u.memory.textures--}function me(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let ve=0;ve<M.__webglFramebuffer[oe].length;ve++)r.deleteFramebuffer(M.__webglFramebuffer[oe][ve]);else r.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)r.deleteFramebuffer(M.__webglFramebuffer[oe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=i.get(ee[oe]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),u.memory.textures--),i.remove(ee[oe])}i.remove(C)}let fe=0;function z(){fe=0}function se(){const C=fe;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),fe+=1,C}function ne(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ce(C,M){const ee=i.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.version>0&&ee.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ee,C,M);return}}t.bindTexture(r.TEXTURE_2D,ee.__webglTexture,r.TEXTURE0+M)}function te(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ee.__webglTexture,r.TEXTURE0+M)}function ue(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){Re(ee,C,M);return}t.bindTexture(r.TEXTURE_3D,ee.__webglTexture,r.TEXTURE0+M)}function he(C,M){const ee=i.get(C);if(C.version>0&&ee.__version!==C.version){je(ee,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+M)}const Se={[nu]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[iu]:r.MIRRORED_REPEAT},De={[cn]:r.NEAREST,[Yh]:r.NEAREST_MIPMAP_NEAREST,[to]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},tt={[fE]:r.NEVER,[_E]:r.ALWAYS,[hE]:r.LESS,[Fp]:r.LEQUAL,[dE]:r.EQUAL,[gE]:r.GEQUAL,[pE]:r.GREATER,[mE]:r.NOTEQUAL};function Q(C,M,ee){if(M.type===vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===gc||M.magFilter===to||M.magFilter===Dr||M.minFilter===Cn||M.minFilter===gc||M.minFilter===to||M.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(r.texParameteri(C,r.TEXTURE_WRAP_S,Se[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Se[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Se[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,De[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,De[M.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==li||M.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L(M.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L(M.minFilter)),M.minFilter!==cn&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==to&&M.minFilter!==Dr||M.type===vi&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===ho&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(C,M){let ee=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",V));const oe=M.source;let ve=x.get(oe);ve===void 0&&(ve={},x.set(oe,ve));const _e=ne(M);if(_e!==C.__cacheKey){ve[_e]===void 0&&(ve[_e]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ve[_e].usedTimes++;const Ze=ve[C.__cacheKey];Ze!==void 0&&(ve[C.__cacheKey].usedTimes--,Ze.usedTimes===0&&O(M)),C.__cacheKey=_e,C.__webglTexture=ve[_e].texture}return ee}function Re(C,M,ee){let oe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=r.TEXTURE_3D);const ve=ge(C,M),_e=M.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+ee);const Ze=i.get(_e);if(_e.version!==Ze.__version||ve===!0){t.activeTexture(r.TEXTURE0+ee);const He=It.getPrimaries(It.workingColorSpace),ye=M.colorSpace===ar?null:It.getPrimaries(M.colorSpace),be=M.colorSpace===ar||He===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Qe=U(M)&&p(M.image)===!1;let Ee=g(M.image,Qe,!1,o.maxTextureSize);Ee=ct(M,Ee);const Nt=p(Ee)||c,st=a.convert(M.format,M.colorSpace);let ze=a.convert(M.type),Pe=F(M.internalFormat,st,ze,M.colorSpace,M.isVideoTexture);Q(oe,M,Nt);let Fe;const I=M.mipmaps,le=c&&M.isVideoTexture!==!0&&Pe!==Op,Ne=Ze.__version===void 0||ve===!0,B=_e.dataReady,Me=N(M,Ee,Nt);if(M.isDepthTexture)Pe=r.DEPTH_COMPONENT,c?M.type===vi?Pe=r.DEPTH_COMPONENT32F:M.type===lr?Pe=r.DEPTH_COMPONENT24:M.type===Ur?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:M.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nr&&Pe===r.DEPTH_COMPONENT&&M.type!==pu&&M.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=lr,ze=a.convert(M.type)),M.format===Ps&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,ze=a.convert(M.type))),Ne&&(le?t.texStorage2D(r.TEXTURE_2D,1,Pe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,st,ze,null));else if(M.isDataTexture)if(I.length>0&&Nt){le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,I[0].width,I[0].height);for(let q=0,xe=I.length;q<xe;q++)Fe=I[q],le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,st,ze,Fe.data);M.generateMipmaps=!1}else le?(Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height),B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,st,ze,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,st,ze,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,I[0].width,I[0].height,Ee.depth);for(let q=0,xe=I.length;q<xe;q++)Fe=I[q],M.format!==ci?st!==null?le?B&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,st,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Pe,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Fe.width,Fe.height,Ee.depth,st,ze,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Pe,Fe.width,Fe.height,Ee.depth,0,st,ze,Fe.data)}else{le&&Ne&&t.texStorage2D(r.TEXTURE_2D,Me,Pe,I[0].width,I[0].height);for(let q=0,xe=I.length;q<xe;q++)Fe=I[q],M.format!==ci?st!==null?le?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Fe.width,Fe.height,st,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,q,Pe,Fe.width,Fe.height,0,st,ze,Fe.data)}else if(M.isDataArrayTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Pe,Ee.width,Ee.height,Ee.depth),B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,st,ze,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,st,ze,Ee.data);else if(M.isData3DTexture)le?(Ne&&t.texStorage3D(r.TEXTURE_3D,Me,Pe,Ee.width,Ee.height,Ee.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,st,ze,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,st,ze,Ee.data);else if(M.isFramebufferTexture){if(Ne)if(le)t.texStorage2D(r.TEXTURE_2D,Me,Pe,Ee.width,Ee.height);else{let q=Ee.width,xe=Ee.height;for(let we=0;we<Me;we++)t.texImage2D(r.TEXTURE_2D,we,Pe,q,xe,0,st,ze,null),q>>=1,xe>>=1}}else if(I.length>0&&Nt){if(le&&Ne){const q=At(I[0]);t.texStorage2D(r.TEXTURE_2D,Me,Pe,q.width,q.height)}for(let q=0,xe=I.length;q<xe;q++)Fe=I[q],le?B&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,st,ze,Fe):t.texImage2D(r.TEXTURE_2D,q,Pe,st,ze,Fe);M.generateMipmaps=!1}else if(le){if(Ne){const q=At(Ee);t.texStorage2D(r.TEXTURE_2D,Me,Pe,q.width,q.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,st,ze,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,st,ze,Ee);w(M,Nt)&&P(oe),Ze.__version=_e.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function je(C,M,ee){if(M.image.length!==6)return;const oe=ge(C,M),ve=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+ee);const _e=i.get(ve);if(ve.version!==_e.__version||oe===!0){t.activeTexture(r.TEXTURE0+ee);const Ze=It.getPrimaries(It.workingColorSpace),He=M.colorSpace===ar?null:It.getPrimaries(M.colorSpace),ye=M.colorSpace===ar||Ze===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,Qe=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let q=0;q<6;q++)!be&&!Qe?Ee[q]=g(M.image[q],!1,!0,o.maxCubemapSize):Ee[q]=Qe?M.image[q].image:M.image[q],Ee[q]=ct(M,Ee[q]);const Nt=Ee[0],st=p(Nt)||c,ze=a.convert(M.format,M.colorSpace),Pe=a.convert(M.type),Fe=F(M.internalFormat,ze,Pe,M.colorSpace),I=c&&M.isVideoTexture!==!0,le=_e.__version===void 0||oe===!0,Ne=ve.dataReady;let B=N(M,Nt,st);Q(r.TEXTURE_CUBE_MAP,M,st);let Me;if(be){I&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Fe,Nt.width,Nt.height);for(let q=0;q<6;q++){Me=Ee[q].mipmaps;for(let xe=0;xe<Me.length;xe++){const we=Me[xe];M.format!==ci?ze!==null?I?Ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,0,0,we.width,we.height,ze,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,0,0,we.width,we.height,ze,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,Fe,we.width,we.height,0,ze,Pe,we.data)}}}else{if(Me=M.mipmaps,I&&le){Me.length>0&&B++;const q=At(Ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,B,Fe,q.width,q.height)}for(let q=0;q<6;q++)if(Qe){I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee[q].width,Ee[q].height,ze,Pe,Ee[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Ee[q].width,Ee[q].height,0,ze,Pe,Ee[q].data);for(let xe=0;xe<Me.length;xe++){const dt=Me[xe].image[q].image;I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,0,0,dt.width,dt.height,ze,Pe,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,Fe,dt.width,dt.height,0,ze,Pe,dt.data)}}else{I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ze,Pe,Ee[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,ze,Pe,Ee[q]);for(let xe=0;xe<Me.length;xe++){const we=Me[xe];I?Ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,0,0,ze,Pe,we.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,Fe,ze,Pe,we.image[q])}}}w(M,st)&&P(r.TEXTURE_CUBE_MAP),_e.__version=ve.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,ee,oe,ve,_e){const Ze=a.convert(ee.format,ee.colorSpace),He=a.convert(ee.type),ye=F(ee.internalFormat,Ze,He,ee.colorSpace);if(!i.get(M).__hasExternalTextures){const Qe=Math.max(1,M.width>>_e),Ee=Math.max(1,M.height>>_e);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,_e,ye,Qe,Ee,M.depth,0,Ze,He,null):t.texImage2D(ve,_e,ye,Qe,Ee,0,Ze,He,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,0,Ve(M)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,ve,i.get(ee).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,M,ee){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let oe=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(ee||et(M)){const ve=M.depthTexture;ve&&ve.isDepthTexture&&(ve.type===vi?oe=r.DEPTH_COMPONENT32F:ve.type===lr&&(oe=r.DEPTH_COMPONENT24));const _e=Ve(M);et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,oe,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,oe,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,oe,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Ve(M);ee&&et(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const oe=M.textures;for(let ve=0;ve<oe.length;ve++){const _e=oe[ve],Ze=a.convert(_e.format,_e.colorSpace),He=a.convert(_e.type),ye=F(_e.internalFormat,Ze,He,_e.colorSpace),be=Ve(M);ee&&et(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ye,M.width,M.height):et(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ve=Ve(M);if(M.depthTexture.format===Nr)et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Ps)et(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function We(C){const M=i.get(C),ee=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Et(M.__webglFramebuffer,C)}else if(ee){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function X(C,M,ee){const oe=i.get(C);M!==void 0&&Oe(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ee!==void 0&&We(C)}function Wt(C){const M=C.texture,ee=i.get(C),oe=i.get(M);C.addEventListener("dispose",pe);const ve=C.textures,_e=C.isWebGLCubeRenderTarget===!0,Ze=ve.length>1,He=p(C)||c;if(Ze||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=M.version,u.memory.textures++),_e){ee.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[ye]=[];for(let be=0;be<M.mipmaps.length;be++)ee.__webglFramebuffer[ye][be]=r.createFramebuffer()}else ee.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)ee.__webglFramebuffer[ye]=r.createFramebuffer()}else ee.__webglFramebuffer=r.createFramebuffer();if(Ze)if(o.drawBuffers)for(let ye=0,be=ve.length;ye<be;ye++){const Qe=i.get(ve[ye]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&et(C)===!1){ee.__webglMultisampledFramebuffer=r.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ye=0;ye<ve.length;ye++){const be=ve[ye];ee.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye]);const Qe=a.convert(be.format,be.colorSpace),Ee=a.convert(be.type),Nt=F(be.internalFormat,Qe,Ee,be.colorSpace,C.isXRRenderTarget===!0),st=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Nt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ee.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(ee.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(ee.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(r.TEXTURE_CUBE_MAP,M,He);for(let ye=0;ye<6;ye++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ee.__webglFramebuffer[ye][be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else Oe(ee.__webglFramebuffer[ye],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);w(M,He)&&P(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let ye=0,be=ve.length;ye<be;ye++){const Qe=ve[ye],Ee=i.get(Qe);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),Q(r.TEXTURE_2D,Qe,He),Oe(ee.__webglFramebuffer,C,Qe,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),w(Qe,He)&&P(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ye=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,oe.__webglTexture),Q(ye,M,He),c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Oe(ee.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,ye,be);else Oe(ee.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,ye,0);w(M,He)&&P(ye),t.unbindTexture()}C.depthBuffer&&We(C)}function Ue(C){const M=p(C)||c,ee=C.textures;for(let oe=0,ve=ee.length;oe<ve;oe++){const _e=ee[oe];if(w(_e,M)){const Ze=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,He=i.get(_e).__webglTexture;t.bindTexture(Ze,He),P(Ze),t.unbindTexture()}}}function Je(C){if(c&&C.samples>0&&et(C)===!1){const M=C.textures,ee=C.width,oe=C.height;let ve=r.COLOR_BUFFER_BIT;const _e=[],Ze=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=i.get(C),ye=M.length>1;if(ye)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let be=0;be<M.length;be++){_e.push(r.COLOR_ATTACHMENT0+be),C.depthBuffer&&_e.push(Ze);const Qe=He.__ignoreDepthValues!==void 0?He.__ignoreDepthValues:!1;if(Qe===!1&&(C.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),ye&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]),Qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ze]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ze])),ye){const Ee=i.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,ee,oe,0,0,ee,oe,ve,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,He.__webglColorRenderbuffer[be]);const Qe=i.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}}function Ve(C){return Math.min(o.maxSamples,C.samples)}function et(C){const M=i.get(C);return c&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(C){const M=u.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function ct(C,M){const ee=C.colorSpace,oe=C.format,ve=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ru||ee!==pr&&ee!==ar&&(It.getTransfer(ee)===Gt?c===!1?e.has("EXT_sRGB")===!0&&oe===ci?(C.format=ru,C.minFilter=Cn,C.generateMipmaps=!1):M=Gp.sRGBToLinear(M):(oe!==ci||ve!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),M}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=se,this.resetTextureUnits=z,this.setTexture2D=ce,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=he,this.rebindTextures=X,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=et}function Ow(r,e,t){const i=t.isWebGL2;function o(a,u=ar){let c;const f=It.getTransfer(u);if(a===fr)return r.UNSIGNED_BYTE;if(a===Lp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===eE)return r.BYTE;if(a===tE)return r.SHORT;if(a===pu)return r.UNSIGNED_SHORT;if(a===Cp)return r.INT;if(a===lr)return r.UNSIGNED_INT;if(a===vi)return r.FLOAT;if(a===ho)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===nE)return r.ALPHA;if(a===ci)return r.RGBA;if(a===iE)return r.LUMINANCE;if(a===rE)return r.LUMINANCE_ALPHA;if(a===Nr)return r.DEPTH_COMPONENT;if(a===Ps)return r.DEPTH_STENCIL;if(a===ru)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Ip)return r.RED;if(a===Dp)return r.RED_INTEGER;if(a===sE)return r.RG;if(a===Up)return r.RG_INTEGER;if(a===Np)return r.RGBA_INTEGER;if(a===_c||a===vc||a===xc||a===Sc)if(f===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===_c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Sc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===_c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Sc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qh||a===$h||a===Kh||a===Zh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Op)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===jh||a===Jh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===jh)return f===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Jh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Qh||a===ed||a===td||a===nd||a===id||a===rd||a===sd||a===od||a===ad||a===ld||a===cd||a===ud||a===fd||a===hd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Qh)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ed)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===td)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===id)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===od)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ad)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ld)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ud)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hd)return f===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Mc||a===dd||a===pd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Mc)return f===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===oE||a===md||a===gd||a===_d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Mc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===md)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ur?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class Fw extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pa extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const g=t.getJointPose(A,i),p=this._getHandJoint(d,A);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
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

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new En,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new dr({extensions:{fragDepth:!0},vertexShader:Gw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new il(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class kw extends Br{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,m=null,_=null,v=null,x=null,E=null;const A=new Hw,g=t.getContextAttributes();let p=null,U=null;const w=[],P=[],F=new lt;let N=null;const L=new Gn;L.layers.enable(1),L.viewport=new un;const V=new Gn;V.layers.enable(2),V.viewport=new un;const pe=[L,V],T=new Fw;T.layers.enable(1),T.layers.enable(2);let O=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Yc,w[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Yc,w[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=w[Q];return ge===void 0&&(ge=new Yc,w[Q]=ge),ge.getHandSpace()};function fe(Q){const ge=P.indexOf(Q.inputSource);if(ge===-1)return;const Re=w[ge];Re!==void 0&&(Re.update(Q.inputSource,Q.frame,d||u),Re.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",se);for(let Q=0;Q<w.length;Q++){const ge=P[Q];ge!==null&&(P[Q]=null,w[Q].disconnect(ge))}O=null,me=null,A.reset(),e.setRenderTarget(p),x=null,v=null,_=null,o=null,U=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",z),o.addEventListener("inputsourceschange",se),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:o.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Or(x.framebufferWidth,x.framebufferHeight,{format:ci,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ge=null,Re=null,je=null;g.depth&&(je=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?Ps:Nr,Re=g.stencil?Ur:lr);const Oe={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Or(v.textureWidth,v.textureHeight,{format:ci,type:fr,depthTexture:new Jp(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(U);Ce.__ignoreDepthValues=v.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),tt.setContext(o),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function se(Q){for(let ge=0;ge<Q.removed.length;ge++){const Re=Q.removed[ge],je=P.indexOf(Re);je>=0&&(P[je]=null,w[je].disconnect(Re))}for(let ge=0;ge<Q.added.length;ge++){const Re=Q.added[ge];let je=P.indexOf(Re);if(je===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=P.length){P.push(Re),je=Ce;break}else if(P[Ce]===null){P[Ce]=Re,je=Ce;break}if(je===-1)break}const Oe=w[je];Oe&&Oe.connect(Re)}}const ne=new Y,ce=new Y;function te(Q,ge,Re){ne.setFromMatrixPosition(ge.matrixWorld),ce.setFromMatrixPosition(Re.matrixWorld);const je=ne.distanceTo(ce),Oe=ge.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,Et=Oe[14]/(Oe[10]-1),We=Oe[14]/(Oe[10]+1),X=(Oe[9]+1)/Oe[5],Wt=(Oe[9]-1)/Oe[5],Ue=(Oe[8]-1)/Oe[0],Je=(Ce[8]+1)/Ce[0],Ve=Et*Ue,et=Et*Je,nt=je/(-Ue+Je),ct=nt*-Ue;ge.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ct),Q.translateZ(nt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const At=Et+nt,C=We+nt,M=Ve-ct,ee=et+(je-ct),oe=X*We/C*At,ve=Wt*We/C*At;Q.projectionMatrix.makePerspective(M,ee,oe,ve,At,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ue(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;A.texture!==null&&(Q.near=A.depthNear,Q.far=A.depthFar),T.near=V.near=L.near=Q.near,T.far=V.far=L.far=Q.far,(O!==T.near||me!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,me=T.far,L.near=O,L.far=me,V.near=O,V.far=me,L.updateProjectionMatrix(),V.updateProjectionMatrix(),Q.updateProjectionMatrix());const ge=Q.parent,Re=T.cameras;ue(T,ge);for(let je=0;je<Re.length;je++)ue(Re[je],ge);Re.length===2?te(T,L,V):T.projectionMatrix.copy(L.projectionMatrix),he(Q,T,ge)};function he(Q,ge,Re){Re===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Re.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=po*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null};let Se=null;function De(Q,ge){if(m=ge.getViewerPose(d||u),E=ge,m!==null){const Re=m.views;x!==null&&(e.setRenderTargetFramebuffer(U,x.framebuffer),e.setRenderTarget(U));let je=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,je=!0);for(let Ce=0;Ce<Re.length;Ce++){const Et=Re[Ce];let We=null;if(x!==null)We=x.getViewport(Et);else{const Wt=_.getViewSubImage(v,Et);We=Wt.viewport,Ce===0&&(e.setRenderTargetTextures(U,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(U))}let X=pe[Ce];X===void 0&&(X=new Gn,X.layers.enable(Ce),X.viewport=new un,pe[Ce]=X),X.matrix.fromArray(Et.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Et.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(We.x,We.y,We.width,We.height),Ce===0&&(T.matrix.copy(X.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),je===!0&&T.cameras.push(X)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=_.getDepthInformation(Re[0]);Ce&&Ce.isValid&&Ce.texture&&A.init(e,Ce,o.renderState)}}for(let Re=0;Re<w.length;Re++){const je=P[Re],Oe=w[Re];je!==null&&Oe!==void 0&&Oe.update(je,ge,d||u)}A.render(e,T),Se&&Se(Q,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const tt=new jp;tt.setAnimationLoop(De),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const Cr=new ki,Vw=new Yt;function Ww(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,qp(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function o(g,p,U,w,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),_(g,p)):p.isMeshPhongMaterial?(a(g,p),m(g,p)):p.isMeshStandardMaterial?(a(g,p),v(g,p),p.isMeshPhysicalMaterial&&x(g,p,P)):p.isMeshMatcapMaterial?(a(g,p),E(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),A(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(u(g,p),p.isLineDashedMaterial&&c(g,p)):p.isPointsMaterial?f(g,p,U,w):p.isSpriteMaterial?d(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const U=e.get(p),w=U.envMap,P=U.envMapRotation;if(w&&(g.envMap.value=w,Cr.copy(P),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(Cr)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const F=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*F,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function c(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function f(g,p,U,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*U,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function m(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function _(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function v(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function x(g,p,U){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=U.texture,g.transmissionSamplerSize.value.set(U.width,U.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,p){p.matcap&&(g.matcap.value=p.matcap)}function A(g,p){const U=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(U.matrixWorld),g.nearDistance.value=U.shadow.camera.near,g.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Xw(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(U,w){const P=w.program;i.uniformBlockBinding(U,P)}function d(U,w){let P=o[U.id];P===void 0&&(E(U),P=m(U),o[U.id]=P,U.addEventListener("dispose",g));const F=w.program;i.updateUBOMapping(U,F);const N=e.render.frame;a[U.id]!==N&&(v(U),a[U.id]=N)}function m(U){const w=_();U.__bindingPointIndex=w;const P=r.createBuffer(),F=U.__size,N=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,P),P}function _(){for(let U=0;U<c;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const w=o[U.id],P=U.uniforms,F=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let N=0,L=P.length;N<L;N++){const V=Array.isArray(P[N])?P[N]:[P[N]];for(let pe=0,T=V.length;pe<T;pe++){const O=V[pe];if(x(O,N,pe,F)===!0){const me=O.__offset,fe=Array.isArray(O.value)?O.value:[O.value];let z=0;for(let se=0;se<fe.length;se++){const ne=fe[se],ce=A(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,me+z,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):(ne.toArray(O.__data,z),z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,me,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(U,w,P,F){const N=U.value,L=w+"_"+P;if(F[L]===void 0)return typeof N=="number"||typeof N=="boolean"?F[L]=N:F[L]=N.clone(),!0;{const V=F[L];if(typeof N=="number"||typeof N=="boolean"){if(V!==N)return F[L]=N,!0}else if(V.equals(N)===!1)return V.copy(N),!0}return!1}function E(U){const w=U.uniforms;let P=0;const F=16;for(let L=0,V=w.length;L<V;L++){const pe=Array.isArray(w[L])?w[L]:[w[L]];for(let T=0,O=pe.length;T<O;T++){const me=pe[T],fe=Array.isArray(me.value)?me.value:[me.value];for(let z=0,se=fe.length;z<se;z++){const ne=fe[z],ce=A(ne),te=P%F;te!==0&&F-te<ce.boundary&&(P+=F-te),me.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=P,P+=ce.storage}}}const N=P%F;return N>0&&(P+=F-N),U.__size=P,U.__cache={},this}function A(U){const w={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(w.boundary=4,w.storage=4):U.isVector2?(w.boundary=8,w.storage=8):U.isVector3||U.isColor?(w.boundary=16,w.storage=12):U.isVector4?(w.boundary=16,w.storage=16):U.isMatrix3?(w.boundary=48,w.storage=48):U.isMatrix4?(w.boundary=64,w.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),w}function g(U){const w=U.target;w.removeEventListener("dispose",g);const P=u.indexOf(w.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[w.id]),delete o[w.id],delete a[w.id]}function p(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},a={}}return{bind:f,update:d,dispose:p}}class xu{constructor(e={}){const{canvas:t=DE(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),E=new Int32Array(4);let A=null,g=null;const p=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;const w=this;let P=!1,F=0,N=0,L=null,V=-1,pe=null;const T=new un,O=new un;let me=null;const fe=new Tt(0);let z=0,se=t.width,ne=t.height,ce=1,te=null,ue=null;const he=new un(0,0,se,ne),Se=new un(0,0,se,ne);let De=!1;const tt=new Zp;let Q=!1,ge=!1,Re=null;const je=new Yt,Oe=new lt,Ce=new Y,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return L===null?ce:1}let X=i;function Wt(R,W){for(let Z=0;Z<R.length;Z++){const J=R[Z],K=t.getContext(J,W);if(K!==null)return K}return null}try{const R={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Me,!1),X===null){const W=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&W.shift(),X=Wt(W,R),X===null)throw Wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,Je,Ve,et,nt,ct,At,C,M,ee,oe,ve,_e,Ze,He,ye,be,Qe,Ee,Nt,st,ze,Pe,Fe;function I(){Ue=new jb(X),Je=new Wb(X,Ue,e),Ue.init(Je),ze=new Ow(X,Ue,Je),Ve=new Uw(X,Ue,Je),et=new eA(X),nt=new Sw,ct=new Nw(X,Ue,Ve,nt,Je,ze,et),At=new Yb(w),C=new Zb(w),M=new sy(X,Je),Pe=new kb(X,Ue,M,Je),ee=new Jb(X,M,et,Pe),oe=new rA(X,ee,M,et),Ee=new iA(X,Je,ct),ye=new Xb(nt),ve=new xw(w,At,C,Ue,Je,Pe,ye),_e=new Ww(w,nt),Ze=new Ew,He=new Rw(Ue,Je),Qe=new Hb(w,At,C,Ve,oe,v,f),be=new Dw(w,oe,Je),Fe=new Xw(X,et,Je,Ve),Nt=new Vb(X,Ue,et,Je),st=new Qb(X,Ue,et,Je),et.programs=ve.programs,w.capabilities=Je,w.extensions=Ue,w.properties=nt,w.renderLists=Ze,w.shadowMap=be,w.state=Ve,w.info=et}I();const le=new kw(w,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(R){R!==void 0&&(ce=R,this.setSize(se,ne,!1))},this.getSize=function(R){return R.set(se,ne)},this.setSize=function(R,W,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ne=W,t.width=Math.floor(R*ce),t.height=Math.floor(W*ce),Z===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(se*ce,ne*ce).floor()},this.setDrawingBufferSize=function(R,W,Z){se=R,ne=W,ce=Z,t.width=Math.floor(R*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,W,Z,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,W,Z,J),Ve.viewport(T.copy(he).multiplyScalar(ce).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,W,Z,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,Z,J),Ve.scissor(O.copy(Se).multiplyScalar(ce).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){Ve.setScissorTest(De=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(R=!0,W=!0,Z=!0){let J=0;if(R){let K=!1;if(L!==null){const Le=L.texture.format;K=Le===Np||Le===Up||Le===Dp}if(K){const Le=L.texture.type,Be=Le===fr||Le===lr||Le===pu||Le===Ur||Le===Lp||Le===Pp,Ye=Qe.getClearColor(),qe=Qe.getClearAlpha(),ft=Ye.r,it=Ye.g,ot=Ye.b;Be?(x[0]=ft,x[1]=it,x[2]=ot,x[3]=qe,X.clearBufferuiv(X.COLOR,0,x)):(E[0]=ft,E[1]=it,E[2]=ot,E[3]=qe,X.clearBufferiv(X.COLOR,0,E))}else J|=X.COLOR_BUFFER_BIT}W&&(J|=X.DEPTH_BUFFER_BIT),Z&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ze.dispose(),He.dispose(),nt.dispose(),At.dispose(),C.dispose(),oe.dispose(),Pe.dispose(),Fe.dispose(),ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",zt),le.removeEventListener("sessionend",yt),Re&&(Re.dispose(),Re=null),Lt.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=et.autoReset,W=be.enabled,Z=be.autoUpdate,J=be.needsUpdate,K=be.type;I(),et.autoReset=R,be.enabled=W,be.autoUpdate=Z,be.needsUpdate=J,be.type=K}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function q(R){const W=R.target;W.removeEventListener("dispose",q),xe(W)}function xe(R){we(R),nt.remove(R)}function we(R){const W=nt.get(R).programs;W!==void 0&&(W.forEach(function(Z){ve.releaseProgram(Z)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Z,J,K,Le){W===null&&(W=Et);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Ye=ol(R,W,Z,J,K);Ve.setMaterial(J,Be);let qe=Z.index,ft=1;if(J.wireframe===!0){if(qe=ee.getWireframeAttribute(Z),qe===void 0)return;ft=2}const it=Z.drawRange,ot=Z.attributes.position;let Ht=it.start*ft,fn=(it.start+it.count)*ft;Le!==null&&(Ht=Math.max(Ht,Le.start*ft),fn=Math.min(fn,(Le.start+Le.count)*ft)),qe!==null?(Ht=Math.max(Ht,0),fn=Math.min(fn,qe.count)):ot!=null&&(Ht=Math.max(Ht,0),fn=Math.min(fn,ot.count));const qt=fn-Ht;if(qt<0||qt===1/0)return;Pe.setup(K,J,Ye,Z,qe);let ei,Ft=Nt;if(qe!==null&&(ei=M.get(qe),Ft=st,Ft.setIndex(ei)),K.isMesh)J.wireframe===!0?(Ve.setLineWidth(J.wireframeLinewidth*We()),Ft.setMode(X.LINES)):Ft.setMode(X.TRIANGLES);else if(K.isLine){let ut=J.linewidth;ut===void 0&&(ut=1),Ve.setLineWidth(ut*We()),K.isLineSegments?Ft.setMode(X.LINES):K.isLineLoop?Ft.setMode(X.LINE_LOOP):Ft.setMode(X.LINE_STRIP)}else K.isPoints?Ft.setMode(X.POINTS):K.isSprite&&Ft.setMode(X.TRIANGLES);if(K.isBatchedMesh)Ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Ft.renderInstances(Ht,qt,K.count);else if(Z.isInstancedBufferGeometry){const ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fs=Math.min(Z.instanceCount,ut);Ft.renderInstances(Ht,qt,Fs)}else Ft.render(Ht,qt)};function dt(R,W,Z){R.transparent===!0&&R.side===zi&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,Vr(R,W,Z),R.side=hr,R.needsUpdate=!0,Vr(R,W,Z),R.side=zi):Vr(R,W,Z)}this.compile=function(R,W,Z=null){Z===null&&(Z=R),g=He.get(Z),g.init(),U.push(g),Z.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),R!==Z&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(w._useLegacyLights);const J=new Set;return R.traverse(function(K){const Le=K.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Ye=Le[Be];dt(Ye,Z,K),J.add(Ye)}else dt(Le,Z,K),J.add(Le)}),U.pop(),g=null,J},this.compileAsync=function(R,W,Z=null){const J=this.compile(R,W,Z);return new Promise(K=>{function Le(){if(J.forEach(function(Be){nt.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){K(R);return}setTimeout(Le,10)}Ue.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let bt=null;function Ct(R){bt&&bt(R)}function zt(){Lt.stop()}function yt(){Lt.start()}const Lt=new jp;Lt.setAnimationLoop(Ct),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(R){bt=R,le.setAnimationLoop(R),R===null?Lt.stop():Lt.start()},le.addEventListener("sessionstart",zt),le.addEventListener("sessionend",yt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(W),W=le.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,L),g=He.get(R,U.length),g.init(),U.push(g),je.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(je),ge=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,ge),A=Ze.get(R,p.length),A.init(),p.push(A),rn(R,W,0,w.sortObjects),A.finish(),w.sortObjects===!0&&A.sort(te,ue),this.info.render.frame++,Q===!0&&ye.beginShadows();const Z=g.state.shadowsArray;if(be.render(Z,R,W),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&Qe.render(A,R),g.setupLights(w._useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let K=0,Le=J.length;K<Le;K++){const Be=J[K];Qn(A,R,Be,Be.viewport)}}else Qn(A,R,W);L!==null&&(ct.updateMultisampleRenderTarget(L),ct.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(w,R,W),Pe.resetDefaultState(),V=-1,pe=null,U.pop(),U.length>0?g=U[U.length-1]:g=null,p.pop(),p.length>0?A=p[p.length-1]:A=null};function rn(R,W,Z,J){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){J&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Be=oe.update(R),Ye=R.material;Ye.visible&&A.push(R,Be,Ye,Z,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const Be=oe.update(R),Ye=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ce.copy(Be.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(Ye)){const qe=Be.groups;for(let ft=0,it=qe.length;ft<it;ft++){const ot=qe[ft],Ht=Ye[ot.materialIndex];Ht&&Ht.visible&&A.push(R,Be,Ht,Z,Ce.z,ot)}}else Ye.visible&&A.push(R,Be,Ye,Z,Ce.z,null)}}const Le=R.children;for(let Be=0,Ye=Le.length;Be<Ye;Be++)rn(Le[Be],W,Z,J)}function Qn(R,W,Z,J){const K=R.opaque,Le=R.transmissive,Be=R.transparent;g.setupLightsView(Z),Q===!0&&ye.setGlobalState(w.clippingPlanes,Z),Le.length>0&&Hr(K,Le,W,Z),J&&Ve.viewport(T.copy(J)),K.length>0&&kr(K,W,Z),Le.length>0&&kr(Le,W,Z),Be.length>0&&kr(Be,W,Z),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Hr(R,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Le=Je.isWebGL2;Re===null&&(Re=new Or(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?ho:fr,minFilter:Dr,samples:Le?4:0})),w.getDrawingBufferSize(Oe),Le?Re.setSize(Oe.x,Oe.y):Re.setSize(Xa(Oe.x),Xa(Oe.y));const Be=w.getRenderTarget();w.setRenderTarget(Re),w.getClearColor(fe),z=w.getClearAlpha(),z<1&&w.setClearColor(16777215,.5),w.clear();const Ye=w.toneMapping;w.toneMapping=ur,kr(R,Z,J),ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re);let qe=!1;for(let ft=0,it=W.length;ft<it;ft++){const ot=W[ft],Ht=ot.object,fn=ot.geometry,qt=ot.material,ei=ot.group;if(qt.side===zi&&Ht.layers.test(J.layers)){const Ft=qt.side;qt.side=Ln,qt.needsUpdate=!0,So(Ht,Z,J,fn,qt,ei),qt.side=Ft,qt.needsUpdate=!0,qe=!0}}qe===!0&&(ct.updateMultisampleRenderTarget(Re),ct.updateRenderTargetMipmap(Re)),w.setRenderTarget(Be),w.setClearColor(fe,z),w.toneMapping=Ye}function kr(R,W,Z){const J=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Le=R.length;K<Le;K++){const Be=R[K],Ye=Be.object,qe=Be.geometry,ft=J===null?Be.material:J,it=Be.group;Ye.layers.test(Z.layers)&&So(Ye,W,Z,qe,ft,it)}}function So(R,W,Z,J,K,Le){R.onBeforeRender(w,W,Z,J,K,Le),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,W,Z,J,R,Le),K.transparent===!0&&K.side===zi&&K.forceSinglePass===!1?(K.side=Ln,K.needsUpdate=!0,w.renderBufferDirect(Z,W,J,K,R,Le),K.side=hr,K.needsUpdate=!0,w.renderBufferDirect(Z,W,J,K,R,Le),K.side=zi):w.renderBufferDirect(Z,W,J,K,R,Le),R.onAfterRender(w,W,Z,J,K,Le)}function Vr(R,W,Z){W.isScene!==!0&&(W=Et);const J=nt.get(R),K=g.state.lights,Le=g.state.shadowsArray,Be=K.state.version,Ye=ve.getParameters(R,K.state,Le,W,Z),qe=ve.getProgramCacheKey(Ye);let ft=J.programs;J.environment=R.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(R.isMeshStandardMaterial?C:At).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ft===void 0&&(R.addEventListener("dispose",q),ft=new Map,J.programs=ft);let it=ft.get(qe);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===Be)return Eo(R,Ye),it}else Ye.uniforms=ve.getUniforms(R),R.onBuild(Z,Ye,w),R.onBeforeCompile(Ye,w),it=ve.acquireProgram(Ye,qe),ft.set(qe,it),J.uniforms=Ye.uniforms;const ot=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=ye.uniform),Eo(R,Ye),J.needsLights=yo(R),J.lightsStateVersion=Be,J.needsLights&&(ot.ambientLightColor.value=K.state.ambient,ot.lightProbe.value=K.state.probe,ot.directionalLights.value=K.state.directional,ot.directionalLightShadows.value=K.state.directionalShadow,ot.spotLights.value=K.state.spot,ot.spotLightShadows.value=K.state.spotShadow,ot.rectAreaLights.value=K.state.rectArea,ot.ltc_1.value=K.state.rectAreaLTC1,ot.ltc_2.value=K.state.rectAreaLTC2,ot.pointLights.value=K.state.point,ot.pointLightShadows.value=K.state.pointShadow,ot.hemisphereLights.value=K.state.hemi,ot.directionalShadowMap.value=K.state.directionalShadowMap,ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ot.spotShadowMap.value=K.state.spotShadowMap,ot.spotLightMatrix.value=K.state.spotLightMatrix,ot.spotLightMap.value=K.state.spotLightMap,ot.pointShadowMap.value=K.state.pointShadowMap,ot.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=it,J.uniformsList=null,it}function Mo(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ba.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Eo(R,W){const Z=nt.get(R);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function ol(R,W,Z,J,K){W.isScene!==!0&&(W=Et),ct.resetTextureUnits();const Le=W.fog,Be=J.isMeshStandardMaterial?W.environment:null,Ye=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pr,qe=(J.isMeshStandardMaterial?C:At).get(J.envMap||Be),ft=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ot=!!Z.morphAttributes.position,Ht=!!Z.morphAttributes.normal,fn=!!Z.morphAttributes.color;let qt=ur;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(qt=w.toneMapping);const ei=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ft=ei!==void 0?ei.length:0,ut=nt.get(J),Fs=g.state.lights;if(Q===!0&&(ge===!0||R!==pe)){const Tn=R===pe&&J.id===V;ye.setState(J,R,Tn)}let Dt=!1;J.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Fs.state.version||ut.outputColorSpace!==Ye||K.isBatchedMesh&&ut.batching===!1||!K.isBatchedMesh&&ut.batching===!0||K.isInstancedMesh&&ut.instancing===!1||!K.isInstancedMesh&&ut.instancing===!0||K.isSkinnedMesh&&ut.skinning===!1||!K.isSkinnedMesh&&ut.skinning===!0||K.isInstancedMesh&&ut.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ut.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ut.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ut.instancingMorph===!1&&K.morphTexture!==null||ut.envMap!==qe||J.fog===!0&&ut.fog!==Le||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ye.numPlanes||ut.numIntersection!==ye.numIntersection)||ut.vertexAlphas!==ft||ut.vertexTangents!==it||ut.morphTargets!==ot||ut.morphNormals!==Ht||ut.morphColors!==fn||ut.toneMapping!==qt||Je.isWebGL2===!0&&ut.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,ut.__version=J.version);let hi=ut.currentProgram;Dt===!0&&(hi=Vr(J,W,K));let Bs=!1,Mi=!1,Gs=!1;const Jt=hi.getUniforms(),Hn=ut.uniforms;if(Ve.useProgram(hi.program)&&(Bs=!0,Mi=!0,Gs=!0),J.id!==V&&(V=J.id,Mi=!0),Bs||pe!==R){Jt.setValue(X,"projectionMatrix",R.projectionMatrix),Jt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Tn=Jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,Ce.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&Jt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Jt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),pe!==R&&(pe=R,Mi=!0,Gs=!0)}if(K.isSkinnedMesh){Jt.setOptional(X,K,"bindMatrix"),Jt.setOptional(X,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Je.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Jt.setValue(X,"boneTexture",Tn.boneTexture,ct)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Jt.setOptional(X,K,"batchingTexture"),Jt.setValue(X,"batchingTexture",K._matricesTexture,ct));const Wr=Z.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&Je.isWebGL2===!0)&&Ee.update(K,Z,hi),(Mi||ut.receiveShadow!==K.receiveShadow)&&(ut.receiveShadow=K.receiveShadow,Jt.setValue(X,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hn.envMap.value=qe,Hn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),Mi&&(Jt.setValue(X,"toneMappingExposure",w.toneMappingExposure),ut.needsLights&&al(Hn,Gs),Le&&J.fog===!0&&_e.refreshFogUniforms(Hn,Le),_e.refreshMaterialUniforms(Hn,J,ce,ne,Re),Ba.upload(X,Mo(ut),Hn,ct)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ba.upload(X,Mo(ut),Hn,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Jt.setValue(X,"center",K.center),Jt.setValue(X,"modelViewMatrix",K.modelViewMatrix),Jt.setValue(X,"normalMatrix",K.normalMatrix),Jt.setValue(X,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Tn=J.uniformsGroups;for(let Xr=0,To=Tn.length;Xr<To;Xr++)if(Je.isWebGL2){const Yr=Tn[Xr];Fe.update(Yr,hi),Fe.bind(Yr,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function al(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function yo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,W,Z){nt.get(R.texture).__webglTexture=W,nt.get(R.depthTexture).__webglTexture=Z;const J=nt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const Z=nt.get(R);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Z=0){L=R,F=W,N=Z;let J=!0,K=null,Le=!1,Be=!1;if(R){const qe=nt.get(R);qe.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(X.FRAMEBUFFER,null),J=!1):qe.__webglFramebuffer===void 0?ct.setupRenderTarget(R):qe.__hasExternalTextures&&ct.rebindTextures(R,nt.get(R.texture).__webglTexture,nt.get(R.depthTexture).__webglTexture);const ft=R.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Be=!0);const it=nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?K=it[W][Z]:K=it[W],Le=!0):Je.isWebGL2&&R.samples>0&&ct.useMultisampledRTT(R)===!1?K=nt.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[Z]:K=it,T.copy(R.viewport),O.copy(R.scissor),me=R.scissorTest}else T.copy(he).multiplyScalar(ce).floor(),O.copy(Se).multiplyScalar(ce).floor(),me=De;if(Ve.bindFramebuffer(X.FRAMEBUFFER,K)&&Je.drawBuffers&&J&&Ve.drawBuffers(R,K),Ve.viewport(T),Ve.scissor(O),Ve.setScissorTest(me),Le){const qe=nt.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,qe.__webglTexture,Z)}else if(Be){const qe=nt.get(R.texture),ft=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.__webglTexture,Z||0,ft)}V=-1},this.readRenderTargetPixels=function(R,W,Z,J,K,Le,Be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){Ve.bindFramebuffer(X.FRAMEBUFFER,Ye);try{const qe=R.texture,ft=qe.format,it=qe.type;if(ft!==ci&&ze.convert(ft)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=it===ho&&(Ue.has("EXT_color_buffer_half_float")||Je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(it!==fr&&ze.convert(it)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===vi&&(Je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-J&&Z>=0&&Z<=R.height-K&&X.readPixels(W,Z,J,K,ze.convert(ft),ze.convert(it),Le)}finally{const qe=L!==null?nt.get(L).__webglFramebuffer:null;Ve.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(R,W,Z=0){const J=Math.pow(2,-Z),K=Math.floor(W.image.width*J),Le=Math.floor(W.image.height*J);ct.setTexture2D(W,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,R.x,R.y,K,Le),Ve.unbindTexture()},this.copyTextureToTexture=function(R,W,Z,J=0){const K=W.image.width,Le=W.image.height,Be=ze.convert(Z.format),Ye=ze.convert(Z.type);ct.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,J,R.x,R.y,K,Le,Be,Ye,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,J,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Be,W.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,J,R.x,R.y,Be,Ye,W.image),J===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Z,J,K=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=Math.round(R.max.x-R.min.x),Be=Math.round(R.max.y-R.min.y),Ye=R.max.z-R.min.z+1,qe=ze.convert(J.format),ft=ze.convert(J.type);let it;if(J.isData3DTexture)ct.setTexture3D(J,0),it=X.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ct.setTexture2DArray(J,0),it=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const ot=X.getParameter(X.UNPACK_ROW_LENGTH),Ht=X.getParameter(X.UNPACK_IMAGE_HEIGHT),fn=X.getParameter(X.UNPACK_SKIP_PIXELS),qt=X.getParameter(X.UNPACK_SKIP_ROWS),ei=X.getParameter(X.UNPACK_SKIP_IMAGES),Ft=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ft.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,R.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,R.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(it,K,W.x,W.y,W.z,Le,Be,Ye,qe,ft,Ft.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(it,K,W.x,W.y,W.z,Le,Be,Ye,qe,Ft.data):X.texSubImage3D(it,K,W.x,W.y,W.z,Le,Be,Ye,qe,ft,Ft),X.pixelStorei(X.UNPACK_ROW_LENGTH,ot),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ht),X.pixelStorei(X.UNPACK_SKIP_PIXELS,fn),X.pixelStorei(X.UNPACK_SKIP_ROWS,qt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ei),K===0&&J.generateMipmaps&&X.generateMipmap(it),Ve.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){F=0,N=0,L=null,Ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mu?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===tl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Yw extends xu{}Yw.prototype.isWebGL1Renderer=!0;class qw extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $w extends En{constructor(e=null,t=1,i=1,o,a,u,c,f,d=cn,m=cn,_,v){super(null,u,c,f,d,m,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lp extends fi{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new Yt,cp=new Yt,Ia=[],up=new Gr,Kw=new Yt,oo=new ui,ao=new _o;class fp extends ui{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Kw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),up.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(up)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ys),ao.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(i),e.ray.intersectsSphere(ao)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,ys),cp.multiplyMatrices(i,ys),oo.matrixWorld=cp,oo.raycast(e,Ia);for(let u=0,c=Ia.length;u<c;u++){const f=Ia[u];f.instanceId=a,f.object=this,t.push(f)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new $w(new Float32Array(o*this.count),o,this.count,Ip,vi));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Su extends Vi{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new Y,m=new lt;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(u[v]/e+1)/2,m.y=(u[v+1]/e+1)/2,f.push(m.x,m.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new zn(u,3)),this.setAttribute("normal",new zn(c,3)),this.setAttribute("uv",new zn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mu extends Vi{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(u+c,Math.PI);let d=0;const m=[],_=new Y,v=new Y,x=[],E=[],A=[],g=[];for(let p=0;p<=i;p++){const U=[],w=p/i;let P=0;p===0&&u===0?P=.5/t:p===i&&f===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){const N=F/t;_.x=-e*Math.cos(o+N*a)*Math.sin(u+w*c),_.y=e*Math.cos(u+w*c),_.z=e*Math.sin(o+N*a)*Math.sin(u+w*c),E.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),g.push(N+P,1-w),U.push(d++)}m.push(U)}for(let p=0;p<i;p++)for(let U=0;U<t;U++){const w=m[p][U+1],P=m[p][U],F=m[p+1][U],N=m[p+1][U+1];(p!==0||u>0)&&x.push(w,P,N),(p!==i-1||f<Math.PI)&&x.push(P,F,N)}this.setIndex(x),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);var au=function(r,e){return au=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},au(r,e)};function Ns(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");au(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function lu(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function cu(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function uu(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function Si(r){return typeof r=="function"}function rm(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var qc=rm(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function fu(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var sl=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=lu(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(A){e={error:A}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var m=this.initialTeardown;if(Si(m))try{m()}catch(A){a=A instanceof qc?A.errors:[A]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=lu(_),x=v.next();!x.done;x=v.next()){var E=x.value;try{dp(E)}catch(A){a=a??[],A instanceof qc?a=uu(uu([],cu(a)),cu(A.errors)):a.push(A)}}}catch(A){i={error:A}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new qc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)dp(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&fu(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&fu(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),sm=sl.EMPTY;function om(r){return r instanceof sl||r&&"closed"in r&&Si(r.remove)&&Si(r.add)&&Si(r.unsubscribe)}function dp(r){Si(r)?r():r.unsubscribe()}var am={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},lm={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,uu([r,e],cu(t)))},clearTimeout:function(r){var e=lm.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function Zw(r){lm.setTimeout(function(){throw r})}function pp(){}function Ga(r){r()}var Eu=function(r){Ns(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,om(t)&&t.add(i)):i.destination=eR,i}return e.create=function(t,i,o){return new hu(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(sl),jw=Function.prototype.bind;function $c(r,e){return jw.call(r,e)}var Jw=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Da(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Da(i)}else Da(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Da(t)}},r}(),hu=function(r){Ns(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(Si(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&am.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&$c(t.next,c),error:t.error&&$c(t.error,c),complete:t.complete&&$c(t.complete,c)}):u=t}return a.destination=new Jw(u),a}return e}(Eu);function Da(r){Zw(r)}function Qw(r){throw r}var eR={closed:!0,next:pp,error:Qw,complete:pp},tR=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function cm(r){return r}function nR(r){return r.length===0?cm:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var mp=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=rR(e)?e:new hu(e,t,i);return Ga(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=gp(t),new t(function(o,a){var u=new hu({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[tR]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nR(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=gp(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function gp(r){var e;return(e=r??am.Promise)!==null&&e!==void 0?e:Promise}function iR(r){return r&&Si(r.next)&&Si(r.error)&&Si(r.complete)}function rR(r){return r&&r instanceof Eu||iR(r)&&om(r)}function sR(r){return Si(r==null?void 0:r.lift)}function um(r){return function(e){if(sR(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function fm(r,e,t,i,o){return new oR(r,e,t,i,o)}var oR=function(r){Ns(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(m){t.error(m)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(m){t.error(m)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Eu),aR=rm(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),hm=function(r){Ns(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new _p(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new aR},e.prototype.next=function(t){var i=this;Ga(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=lu(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Ga(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Ga(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?sm:(this.currentObservers=null,c.push(t),new sl(function(){i.currentObservers=null,fu(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new mp;return t.source=this,t},e.create=function(t,i){return new _p(t,i)},e}(mp),_p=function(r){Ns(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:sm},e}(hm),Os=function(r){Ns(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(hm);function Oi(r,e){return um(function(t,i){var o=0;t.subscribe(fm(i,function(a){i.next(r.call(e,a,o++))}))})}function Fi(r,e){return e===void 0&&(e=cm),r=r??lR,um(function(t,i){var o,a=!0;t.subscribe(fm(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function lR(r,e){return r===e}const cR={items:[]},qa=new Os(cR);function uR(r){const t={...qa.getValue(),items:r};qa.next(t)}const fR=new URL(window.location),vp=new URLSearchParams(fR.search),hR={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefixOptions:["50pe","75pe","6s"],prefix:vp.has("prefix")?vp.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],atacs:[],items:[],groups:[]},xt=new Os(hR);function dR(r){const e=xt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};xt.next(i)}function pR(r){const t={...xt.getValue(),genes:r};xt.next(t)}function mR(r){const t={...xt.getValue(),atacs:r};xt.next(t)}function gR(r){const t={...xt.getValue(),groups:r};xt.next(t)}const _R={scene:new qw},dm=new Os(_R),vR={isLoading:!0,theme:"light"},$a=new Os(vR);function jn(r){const t={...$a.getValue(),isLoading:r};$a.next(t)}const xR=new URL(window.location),xp=new URLSearchParams(xR.search),SR={selectedCelltypes:[],mode:xp.has("mode")?Number(xp.get("mode")):1,selectedSingleGene:"",selectedSingleAtac:"",selectedGenes:[],selectedAtacs:[]},ke=new Os(SR);function mo(r){const t={...ke.getValue(),selectedCelltypes:[...new Set(r)]};ke.next(t)}function MR(r){const t={...ke.getValue(),mode:r};ke.next(t)}function go(r){const t={...ke.getValue(),selectedGenes:r};ke.next(t)}function Ka(r){const t={...ke.getValue(),selectedAtacs:r};ke.next(t)}const Sp={type:"change"},Kc={type:"start"},Mp={type:"end"},Ua=new kp,Ep=new or,ER=Math.cos(70*IE.DEG2RAD);class pm extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",He),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sp),i.update(),a=o.NONE},this.update=function(){const I=new Y,le=new Fr().setFromUnitVectors(e.up,new Y(0,1,0)),Ne=le.clone().invert(),B=new Y,Me=new Fr,q=new Y,xe=2*Math.PI;return function(dt=null){const bt=i.object.position;I.copy(bt).sub(i.target),I.applyQuaternion(le),c.setFromVector3(I),i.autoRotate&&a===o.NONE&&me(T(dt)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Ct=i.minAzimuthAngle,zt=i.maxAzimuthAngle;isFinite(Ct)&&isFinite(zt)&&(Ct<-Math.PI?Ct+=xe:Ct>Math.PI&&(Ct-=xe),zt<-Math.PI?zt+=xe:zt>Math.PI&&(zt-=xe),Ct<=zt?c.theta=Math.max(Ct,Math.min(zt,c.theta)):c.theta=c.theta>(Ct+zt)/2?Math.max(Ct,c.theta):Math.min(zt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let yt=!1;if(i.zoomToCursor&&N||i.object.isOrthographicCamera)c.radius=he(c.radius);else{const Lt=c.radius;c.radius=he(c.radius*d),yt=Lt!=c.radius}if(I.setFromSpherical(c),I.applyQuaternion(Ne),bt.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),m.set(0,0,0)),i.zoomToCursor&&N){let Lt=null;if(i.object.isPerspectiveCamera){const rn=I.length();Lt=he(rn*d);const Qn=rn-Lt;i.object.position.addScaledVector(P,Qn),i.object.updateMatrixWorld(),yt=!!Qn}else if(i.object.isOrthographicCamera){const rn=new Y(F.x,F.y,0);rn.unproject(i.object);const Qn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),yt=Qn!==i.object.zoom;const Hr=new Y(F.x,F.y,0);Hr.unproject(i.object),i.object.position.sub(Hr).add(rn),i.object.updateMatrixWorld(),Lt=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Lt).add(i.object.position):(Ua.origin.copy(i.object.position),Ua.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ua.direction))<ER?e.lookAt(i.target):(Ep.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ua.intersectPlane(Ep,i.target))))}else if(i.object.isOrthographicCamera){const Lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),yt=!0)}return d=1,N=!1,yt||B.distanceToSquared(i.object.position)>u||8*(1-Me.dot(i.object.quaternion))>u||q.distanceToSquared(i.target)>u?(i.dispatchEvent(Sp),B.copy(i.object.position),Me.copy(i.object.quaternion),q.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Qe),i.domElement.removeEventListener("pointerdown",ct),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",At),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new hp,f=new hp;let d=1;const m=new Y,_=new lt,v=new lt,x=new lt,E=new lt,A=new lt,g=new lt,p=new lt,U=new lt,w=new lt,P=new Y,F=new lt;let N=!1;const L=[],V={};let pe=!1;function T(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function O(I){const le=Math.abs(I*.01);return Math.pow(.95,i.zoomSpeed*le)}function me(I){f.theta-=I}function fe(I){f.phi-=I}const z=function(){const I=new Y;return function(Ne,B){I.setFromMatrixColumn(B,0),I.multiplyScalar(-Ne),m.add(I)}}(),se=function(){const I=new Y;return function(Ne,B){i.screenSpacePanning===!0?I.setFromMatrixColumn(B,1):(I.setFromMatrixColumn(B,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(Ne),m.add(I)}}(),ne=function(){const I=new Y;return function(Ne,B){const Me=i.domElement;if(i.object.isPerspectiveCamera){const q=i.object.position;I.copy(q).sub(i.target);let xe=I.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ne*xe/Me.clientHeight,i.object.matrix),se(2*B*xe/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ne*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),se(B*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ce(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(I,le){if(!i.zoomToCursor)return;N=!0;const Ne=i.domElement.getBoundingClientRect(),B=I-Ne.left,Me=le-Ne.top,q=Ne.width,xe=Ne.height;F.x=B/q*2-1,F.y=-(Me/xe)*2+1,P.set(F.x,F.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function Se(I){_.set(I.clientX,I.clientY)}function De(I){ue(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function tt(I){E.set(I.clientX,I.clientY)}function Q(I){v.set(I.clientX,I.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v),i.update()}function ge(I){U.set(I.clientX,I.clientY),w.subVectors(U,p),w.y>0?ce(O(w.y)):w.y<0&&te(O(w.y)),p.copy(U),i.update()}function Re(I){A.set(I.clientX,I.clientY),g.subVectors(A,E).multiplyScalar(i.panSpeed),ne(g.x,g.y),E.copy(A),i.update()}function je(I){ue(I.clientX,I.clientY),I.deltaY<0?te(O(I.deltaY)):I.deltaY>0&&ce(O(I.deltaY)),i.update()}function Oe(I){let le=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,i.keyPanSpeed),le=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(0,-i.keyPanSpeed),le=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?me(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(i.keyPanSpeed,0),le=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?me(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ne(-i.keyPanSpeed,0),le=!0;break}le&&(I.preventDefault(),i.update())}function Ce(I){if(L.length===1)_.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),B=.5*(I.pageY+le.y);_.set(Ne,B)}}function Et(I){if(L.length===1)E.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),B=.5*(I.pageY+le.y);E.set(Ne,B)}}function We(I){const le=Pe(I),Ne=I.pageX-le.x,B=I.pageY-le.y,Me=Math.sqrt(Ne*Ne+B*B);p.set(0,Me)}function X(I){i.enableZoom&&We(I),i.enablePan&&Et(I)}function Wt(I){i.enableZoom&&We(I),i.enableRotate&&Ce(I)}function Ue(I){if(L.length==1)v.set(I.pageX,I.pageY);else{const Ne=Pe(I),B=.5*(I.pageX+Ne.x),Me=.5*(I.pageY+Ne.y);v.set(B,Me)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const le=i.domElement;me(2*Math.PI*x.x/le.clientHeight),fe(2*Math.PI*x.y/le.clientHeight),_.copy(v)}function Je(I){if(L.length===1)A.set(I.pageX,I.pageY);else{const le=Pe(I),Ne=.5*(I.pageX+le.x),B=.5*(I.pageY+le.y);A.set(Ne,B)}g.subVectors(A,E).multiplyScalar(i.panSpeed),ne(g.x,g.y),E.copy(A)}function Ve(I){const le=Pe(I),Ne=I.pageX-le.x,B=I.pageY-le.y,Me=Math.sqrt(Ne*Ne+B*B);U.set(0,Me),w.set(0,Math.pow(U.y/p.y,i.zoomSpeed)),ce(w.y),p.copy(U);const q=(I.pageX+le.x)*.5,xe=(I.pageY+le.y)*.5;ue(q,xe)}function et(I){i.enableZoom&&Ve(I),i.enablePan&&Je(I)}function nt(I){i.enableZoom&&Ve(I),i.enableRotate&&Ue(I)}function ct(I){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",At),i.domElement.addEventListener("pointerup",C)),!st(I)&&(Ee(I),I.pointerType==="touch"?ye(I):M(I)))}function At(I){i.enabled!==!1&&(I.pointerType==="touch"?be(I):ee(I))}function C(I){switch(Nt(I),L.length){case 0:i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",At),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(Mp),a=o.NONE;break;case 1:const le=L[0],Ne=V[le];ye({pointerId:le,pageX:Ne.x,pageY:Ne.y});break}}function M(I){let le;switch(I.button){case 0:le=i.mouseButtons.LEFT;break;case 1:le=i.mouseButtons.MIDDLE;break;case 2:le=i.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Gi.DOLLY:if(i.enableZoom===!1)return;De(I),a=o.DOLLY;break;case Gi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;tt(I),a=o.PAN}else{if(i.enableRotate===!1)return;Se(I),a=o.ROTATE}break;case Gi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;Se(I),a=o.ROTATE}else{if(i.enablePan===!1)return;tt(I),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Kc)}function ee(I){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;Q(I);break;case o.DOLLY:if(i.enableZoom===!1)return;ge(I);break;case o.PAN:if(i.enablePan===!1)return;Re(I);break}}function oe(I){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(I.preventDefault(),i.dispatchEvent(Kc),je(ve(I)),i.dispatchEvent(Mp))}function ve(I){const le=I.deltaMode,Ne={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(le){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return I.ctrlKey&&!pe&&(Ne.deltaY*=10),Ne}function _e(I){I.key==="Control"&&(pe=!0,i.domElement.getRootNode().addEventListener("keyup",Ze,{passive:!0,capture:!0}))}function Ze(I){I.key==="Control"&&(pe=!1,i.domElement.getRootNode().removeEventListener("keyup",Ze,{passive:!0,capture:!0}))}function He(I){i.enabled===!1||i.enablePan===!1||Oe(I)}function ye(I){switch(ze(I),L.length){case 1:switch(i.touches.ONE){case sr.ROTATE:if(i.enableRotate===!1)return;Ce(I),a=o.TOUCH_ROTATE;break;case sr.PAN:if(i.enablePan===!1)return;Et(I),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case sr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;X(I),a=o.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(I),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Kc)}function be(I){switch(ze(I),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(I),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Je(I),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;et(I),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;nt(I),i.update();break;default:a=o.NONE}}function Qe(I){i.enabled!==!1&&I.preventDefault()}function Ee(I){L.push(I.pointerId)}function Nt(I){delete V[I.pointerId];for(let le=0;le<L.length;le++)if(L[le]==I.pointerId){L.splice(le,1);return}}function st(I){for(let le=0;le<L.length;le++)if(L[le]==I.pointerId)return!0;return!1}function ze(I){let le=V[I.pointerId];le===void 0&&(le=new lt,V[I.pointerId]=le),le.set(I.pageX,I.pageY)}function Pe(I){const le=I.pointerId===L[0]?L[1]:L[0];return V[le]}i.domElement.addEventListener("contextmenu",Qe),i.domElement.addEventListener("pointerdown",ct),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Za={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Za.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,m="__lodash_placeholder__",_=1,v=2,x=4,E=1,A=2,g=1,p=2,U=4,w=8,P=16,F=32,N=64,L=128,V=256,pe=512,T=30,O="...",me=800,fe=16,z=1,se=2,ne=3,ce=1/0,te=9007199254740991,ue=17976931348623157e292,he=NaN,Se=4294967295,De=Se-1,tt=Se>>>1,Q=[["ary",L],["bind",g],["bindKey",p],["curry",w],["curryRight",P],["flip",pe],["partial",F],["partialRight",N],["rearg",V]],ge="[object Arguments]",Re="[object Array]",je="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",Et="[object DOMException]",We="[object Error]",X="[object Function]",Wt="[object GeneratorFunction]",Ue="[object Map]",Je="[object Number]",Ve="[object Null]",et="[object Object]",nt="[object Promise]",ct="[object Proxy]",At="[object RegExp]",C="[object Set]",M="[object String]",ee="[object Symbol]",oe="[object Undefined]",ve="[object WeakMap]",_e="[object WeakSet]",Ze="[object ArrayBuffer]",He="[object DataView]",ye="[object Float32Array]",be="[object Float64Array]",Qe="[object Int8Array]",Ee="[object Int16Array]",Nt="[object Int32Array]",st="[object Uint8Array]",ze="[object Uint8ClampedArray]",Pe="[object Uint16Array]",Fe="[object Uint32Array]",I=/\b__p \+= '';/g,le=/\b(__p \+=) '' \+/g,Ne=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,q=RegExp(B.source),xe=RegExp(Me.source),we=/<%-([\s\S]+?)%>/g,dt=/<%([\s\S]+?)%>/g,bt=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zt=/^\w*$/,yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,rn=RegExp(Lt.source),Qn=/^\s+/,Hr=/\s/,kr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,So=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,Mo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Eo=/[()=,{}\[\]\/\s]/,ol=/\\(\\)?/g,al=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,yo=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,Z=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,K=/^(?:0|[1-9]\d*)$/,Le=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Be=/($^)/,Ye=/['\n\r\u2028\u2029\\]/g,qe="\\ud800-\\udfff",ft="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",Ht=ft+it+ot,fn="\\u2700-\\u27bf",qt="a-z\\xdf-\\xf6\\xf8-\\xff",ei="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",Fs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",hi="\\ufe0e\\ufe0f",Bs=ei+Ft+ut+Fs,Mi="['’]",Gs="["+qe+"]",Jt="["+Bs+"]",Hn="["+Ht+"]",Wr="\\d+",Tn="["+fn+"]",Xr="["+qt+"]",To="[^"+qe+Bs+Wr+fn+qt+Dt+"]",Yr="\\ud83c[\\udffb-\\udfff]",xm="(?:"+Hn+"|"+Yr+")",yu="[^"+qe+"]",ll="(?:\\ud83c[\\udde6-\\uddff]){2}",cl="[\\ud800-\\udbff][\\udc00-\\udfff]",qr="["+Dt+"]",Tu="\\u200d",bu="(?:"+Xr+"|"+To+")",Sm="(?:"+qr+"|"+To+")",Au="(?:"+Mi+"(?:d|ll|m|re|s|t|ve))?",wu="(?:"+Mi+"(?:D|LL|M|RE|S|T|VE))?",Ru=xm+"?",Cu="["+hi+"]?",Mm="(?:"+Tu+"(?:"+[yu,ll,cl].join("|")+")"+Cu+Ru+")*",Em="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ym="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lu=Cu+Ru+Mm,Tm="(?:"+[Tn,ll,cl].join("|")+")"+Lu,bm="(?:"+[yu+Hn+"?",Hn,ll,cl,Gs].join("|")+")",Am=RegExp(Mi,"g"),wm=RegExp(Hn,"g"),ul=RegExp(Yr+"(?="+Yr+")|"+bm+Lu,"g"),Rm=RegExp([qr+"?"+Xr+"+"+Au+"(?="+[Jt,qr,"$"].join("|")+")",Sm+"+"+wu+"(?="+[Jt,qr+bu,"$"].join("|")+")",qr+"?"+bu+"+"+Au,qr+"+"+wu,ym,Em,Wr,Tm].join("|"),"g"),Cm=RegExp("["+Tu+qe+Ht+hi+"]"),Lm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Pm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Im=-1,Bt={};Bt[ye]=Bt[be]=Bt[Qe]=Bt[Ee]=Bt[Nt]=Bt[st]=Bt[ze]=Bt[Pe]=Bt[Fe]=!0,Bt[ge]=Bt[Re]=Bt[Ze]=Bt[Oe]=Bt[He]=Bt[Ce]=Bt[We]=Bt[X]=Bt[Ue]=Bt[Je]=Bt[et]=Bt[At]=Bt[C]=Bt[M]=Bt[ve]=!1;var Ot={};Ot[ge]=Ot[Re]=Ot[Ze]=Ot[He]=Ot[Oe]=Ot[Ce]=Ot[ye]=Ot[be]=Ot[Qe]=Ot[Ee]=Ot[Nt]=Ot[Ue]=Ot[Je]=Ot[et]=Ot[At]=Ot[C]=Ot[M]=Ot[ee]=Ot[st]=Ot[ze]=Ot[Pe]=Ot[Fe]=!0,Ot[We]=Ot[X]=Ot[ve]=!1;var Dm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Um={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Nm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Om={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fm=parseFloat,Bm=parseInt,Pu=typeof lo=="object"&&lo&&lo.Object===Object&&lo,Gm=typeof self=="object"&&self&&self.Object===Object&&self,an=Pu||Gm||Function("return this")(),fl=e&&!e.nodeType&&e,mr=fl&&!0&&r&&!r.nodeType&&r,Iu=mr&&mr.exports===fl,hl=Iu&&Pu.process,kn=function(){try{var H=mr&&mr.require&&mr.require("util").types;return H||hl&&hl.binding&&hl.binding("util")}catch{}}(),Du=kn&&kn.isArrayBuffer,Uu=kn&&kn.isDate,Nu=kn&&kn.isMap,Ou=kn&&kn.isRegExp,Fu=kn&&kn.isSet,Bu=kn&&kn.isTypedArray;function Pn(H,ie,j){switch(j.length){case 0:return H.call(ie);case 1:return H.call(ie,j[0]);case 2:return H.call(ie,j[0],j[1]);case 3:return H.call(ie,j[0],j[1],j[2])}return H.apply(ie,j)}function zm(H,ie,j,Ie){for(var rt=-1,wt=H==null?0:H.length;++rt<wt;){var Qt=H[rt];ie(Ie,Qt,j(Qt),H)}return Ie}function Vn(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie&&ie(H[j],j,H)!==!1;);return H}function Hm(H,ie){for(var j=H==null?0:H.length;j--&&ie(H[j],j,H)!==!1;);return H}function Gu(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(!ie(H[j],j,H))return!1;return!0}function Wi(H,ie){for(var j=-1,Ie=H==null?0:H.length,rt=0,wt=[];++j<Ie;){var Qt=H[j];ie(Qt,j,H)&&(wt[rt++]=Qt)}return wt}function bo(H,ie){var j=H==null?0:H.length;return!!j&&$r(H,ie,0)>-1}function dl(H,ie,j){for(var Ie=-1,rt=H==null?0:H.length;++Ie<rt;)if(j(ie,H[Ie]))return!0;return!1}function kt(H,ie){for(var j=-1,Ie=H==null?0:H.length,rt=Array(Ie);++j<Ie;)rt[j]=ie(H[j],j,H);return rt}function Xi(H,ie){for(var j=-1,Ie=ie.length,rt=H.length;++j<Ie;)H[rt+j]=ie[j];return H}function pl(H,ie,j,Ie){var rt=-1,wt=H==null?0:H.length;for(Ie&&wt&&(j=H[++rt]);++rt<wt;)j=ie(j,H[rt],rt,H);return j}function km(H,ie,j,Ie){var rt=H==null?0:H.length;for(Ie&&rt&&(j=H[--rt]);rt--;)j=ie(j,H[rt],rt,H);return j}function ml(H,ie){for(var j=-1,Ie=H==null?0:H.length;++j<Ie;)if(ie(H[j],j,H))return!0;return!1}var Vm=gl("length");function Wm(H){return H.split("")}function Xm(H){return H.match(Mo)||[]}function zu(H,ie,j){var Ie;return j(H,function(rt,wt,Qt){if(ie(rt,wt,Qt))return Ie=wt,!1}),Ie}function Ao(H,ie,j,Ie){for(var rt=H.length,wt=j+(Ie?1:-1);Ie?wt--:++wt<rt;)if(ie(H[wt],wt,H))return wt;return-1}function $r(H,ie,j){return ie===ie?ig(H,ie,j):Ao(H,Hu,j)}function Ym(H,ie,j,Ie){for(var rt=j-1,wt=H.length;++rt<wt;)if(Ie(H[rt],ie))return rt;return-1}function Hu(H){return H!==H}function ku(H,ie){var j=H==null?0:H.length;return j?vl(H,ie)/j:he}function gl(H){return function(ie){return ie==null?t:ie[H]}}function _l(H){return function(ie){return H==null?t:H[ie]}}function Vu(H,ie,j,Ie,rt){return rt(H,function(wt,Qt,Ut){j=Ie?(Ie=!1,wt):ie(j,wt,Qt,Ut)}),j}function qm(H,ie){var j=H.length;for(H.sort(ie);j--;)H[j]=H[j].value;return H}function vl(H,ie){for(var j,Ie=-1,rt=H.length;++Ie<rt;){var wt=ie(H[Ie]);wt!==t&&(j=j===t?wt:j+wt)}return j}function xl(H,ie){for(var j=-1,Ie=Array(H);++j<H;)Ie[j]=ie(j);return Ie}function $m(H,ie){return kt(ie,function(j){return[j,H[j]]})}function Wu(H){return H&&H.slice(0,$u(H)+1).replace(Qn,"")}function In(H){return function(ie){return H(ie)}}function Sl(H,ie){return kt(ie,function(j){return H[j]})}function zs(H,ie){return H.has(ie)}function Xu(H,ie){for(var j=-1,Ie=H.length;++j<Ie&&$r(ie,H[j],0)>-1;);return j}function Yu(H,ie){for(var j=H.length;j--&&$r(ie,H[j],0)>-1;);return j}function Km(H,ie){for(var j=H.length,Ie=0;j--;)H[j]===ie&&++Ie;return Ie}var Zm=_l(Dm),jm=_l(Um);function Jm(H){return"\\"+Om[H]}function Qm(H,ie){return H==null?t:H[ie]}function Kr(H){return Cm.test(H)}function eg(H){return Lm.test(H)}function tg(H){for(var ie,j=[];!(ie=H.next()).done;)j.push(ie.value);return j}function Ml(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie,rt){j[++ie]=[rt,Ie]}),j}function qu(H,ie){return function(j){return H(ie(j))}}function Yi(H,ie){for(var j=-1,Ie=H.length,rt=0,wt=[];++j<Ie;){var Qt=H[j];(Qt===ie||Qt===m)&&(H[j]=m,wt[rt++]=j)}return wt}function wo(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=Ie}),j}function ng(H){var ie=-1,j=Array(H.size);return H.forEach(function(Ie){j[++ie]=[Ie,Ie]}),j}function ig(H,ie,j){for(var Ie=j-1,rt=H.length;++Ie<rt;)if(H[Ie]===ie)return Ie;return-1}function rg(H,ie,j){for(var Ie=j+1;Ie--;)if(H[Ie]===ie)return Ie;return Ie}function Zr(H){return Kr(H)?og(H):Vm(H)}function ti(H){return Kr(H)?ag(H):Wm(H)}function $u(H){for(var ie=H.length;ie--&&Hr.test(H.charAt(ie)););return ie}var sg=_l(Nm);function og(H){for(var ie=ul.lastIndex=0;ul.test(H);)++ie;return ie}function ag(H){return H.match(ul)||[]}function lg(H){return H.match(Rm)||[]}var cg=function H(ie){ie=ie==null?an:jr.defaults(an.Object(),ie,jr.pick(an,Pm));var j=ie.Array,Ie=ie.Date,rt=ie.Error,wt=ie.Function,Qt=ie.Math,Ut=ie.Object,El=ie.RegExp,ug=ie.String,Wn=ie.TypeError,Ro=j.prototype,fg=wt.prototype,Jr=Ut.prototype,Co=ie["__core-js_shared__"],Lo=fg.toString,Pt=Jr.hasOwnProperty,hg=0,Ku=function(){var n=/[^.]+$/.exec(Co&&Co.keys&&Co.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Po=Jr.toString,dg=Lo.call(Ut),pg=an._,mg=El("^"+Lo.call(Pt).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Io=Iu?ie.Buffer:t,qi=ie.Symbol,Do=ie.Uint8Array,Zu=Io?Io.allocUnsafe:t,Uo=qu(Ut.getPrototypeOf,Ut),ju=Ut.create,Ju=Jr.propertyIsEnumerable,No=Ro.splice,Qu=qi?qi.isConcatSpreadable:t,Hs=qi?qi.iterator:t,gr=qi?qi.toStringTag:t,Oo=function(){try{var n=Mr(Ut,"defineProperty");return n({},"",{}),n}catch{}}(),gg=ie.clearTimeout!==an.clearTimeout&&ie.clearTimeout,_g=Ie&&Ie.now!==an.Date.now&&Ie.now,vg=ie.setTimeout!==an.setTimeout&&ie.setTimeout,Fo=Qt.ceil,Bo=Qt.floor,yl=Ut.getOwnPropertySymbols,xg=Io?Io.isBuffer:t,ef=ie.isFinite,Sg=Ro.join,Mg=qu(Ut.keys,Ut),en=Qt.max,hn=Qt.min,Eg=Ie.now,yg=ie.parseInt,tf=Qt.random,Tg=Ro.reverse,Tl=Mr(ie,"DataView"),ks=Mr(ie,"Map"),bl=Mr(ie,"Promise"),Qr=Mr(ie,"Set"),Vs=Mr(ie,"WeakMap"),Ws=Mr(Ut,"create"),Go=Vs&&new Vs,es={},bg=Er(Tl),Ag=Er(ks),wg=Er(bl),Rg=Er(Qr),Cg=Er(Vs),zo=qi?qi.prototype:t,Xs=zo?zo.valueOf:t,nf=zo?zo.toString:t;function y(n){if(Xt(n)&&!at(n)&&!(n instanceof St)){if(n instanceof Xn)return n;if(Pt.call(n,"__wrapped__"))return rh(n)}return new Xn(n)}var ts=function(){function n(){}return function(s){if(!Vt(s))return{};if(ju)return ju(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Ho(){}function Xn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}y.templateSettings={escape:we,evaluate:dt,interpolate:bt,variable:"",imports:{_:y}},y.prototype=Ho.prototype,y.prototype.constructor=y,Xn.prototype=ts(Ho.prototype),Xn.prototype.constructor=Xn;function St(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Se,this.__views__=[]}function Lg(){var n=new St(this.__wrapped__);return n.__actions__=bn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=bn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=bn(this.__views__),n}function Pg(){if(this.__filtered__){var n=new St(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Ig(){var n=this.__wrapped__.value(),s=this.__dir__,l=at(n),h=s<0,S=l?n.length:0,b=W_(0,S,this.__views__),D=b.start,G=b.end,k=G-D,re=h?G:D-1,ae=this.__iteratees__,de=ae.length,Ae=0,Ge=hn(k,this.__takeCount__);if(!l||!h&&S==k&&Ge==k)return wf(n,this.__actions__);var $e=[];e:for(;k--&&Ae<Ge;){re+=s;for(var pt=-1,Ke=n[re];++pt<de;){var vt=ae[pt],Mt=vt.iteratee,Nn=vt.type,xn=Mt(Ke);if(Nn==se)Ke=xn;else if(!xn){if(Nn==z)continue e;break e}}$e[Ae++]=Ke}return $e}St.prototype=ts(Ho.prototype),St.prototype.constructor=St;function _r(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Dg(){this.__data__=Ws?Ws(null):{},this.size=0}function Ug(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Ng(n){var s=this.__data__;if(Ws){var l=s[n];return l===f?t:l}return Pt.call(s,n)?s[n]:t}function Og(n){var s=this.__data__;return Ws?s[n]!==t:Pt.call(s,n)}function Fg(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ws&&s===t?f:s,this}_r.prototype.clear=Dg,_r.prototype.delete=Ug,_r.prototype.get=Ng,_r.prototype.has=Og,_r.prototype.set=Fg;function Ei(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Bg(){this.__data__=[],this.size=0}function Gg(n){var s=this.__data__,l=ko(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():No.call(s,l,1),--this.size,!0}function zg(n){var s=this.__data__,l=ko(s,n);return l<0?t:s[l][1]}function Hg(n){return ko(this.__data__,n)>-1}function kg(n,s){var l=this.__data__,h=ko(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ei.prototype.clear=Bg,Ei.prototype.delete=Gg,Ei.prototype.get=zg,Ei.prototype.has=Hg,Ei.prototype.set=kg;function yi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Vg(){this.size=0,this.__data__={hash:new _r,map:new(ks||Ei),string:new _r}}function Wg(n){var s=ea(this,n).delete(n);return this.size-=s?1:0,s}function Xg(n){return ea(this,n).get(n)}function Yg(n){return ea(this,n).has(n)}function qg(n,s){var l=ea(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}yi.prototype.clear=Vg,yi.prototype.delete=Wg,yi.prototype.get=Xg,yi.prototype.has=Yg,yi.prototype.set=qg;function vr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new yi;++s<l;)this.add(n[s])}function $g(n){return this.__data__.set(n,f),this}function Kg(n){return this.__data__.has(n)}vr.prototype.add=vr.prototype.push=$g,vr.prototype.has=Kg;function ni(n){var s=this.__data__=new Ei(n);this.size=s.size}function Zg(){this.__data__=new Ei,this.size=0}function jg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Jg(n){return this.__data__.get(n)}function Qg(n){return this.__data__.has(n)}function e_(n,s){var l=this.__data__;if(l instanceof Ei){var h=l.__data__;if(!ks||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new yi(h)}return l.set(n,s),this.size=l.size,this}ni.prototype.clear=Zg,ni.prototype.delete=jg,ni.prototype.get=Jg,ni.prototype.has=Qg,ni.prototype.set=e_;function rf(n,s){var l=at(n),h=!l&&yr(n),S=!l&&!h&&Ji(n),b=!l&&!h&&!S&&ss(n),D=l||h||S||b,G=D?xl(n.length,ug):[],k=G.length;for(var re in n)(s||Pt.call(n,re))&&!(D&&(re=="length"||S&&(re=="offset"||re=="parent")||b&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||wi(re,k)))&&G.push(re);return G}function sf(n){var s=n.length;return s?n[Ol(0,s-1)]:t}function t_(n,s){return ta(bn(n),xr(s,0,n.length))}function n_(n){return ta(bn(n))}function Al(n,s,l){(l!==t&&!ii(n[s],l)||l===t&&!(s in n))&&Ti(n,s,l)}function Ys(n,s,l){var h=n[s];(!(Pt.call(n,s)&&ii(h,l))||l===t&&!(s in n))&&Ti(n,s,l)}function ko(n,s){for(var l=n.length;l--;)if(ii(n[l][0],s))return l;return-1}function i_(n,s,l,h){return $i(n,function(S,b,D){s(h,S,l(S),D)}),h}function of(n,s){return n&&pi(s,sn(s),n)}function r_(n,s){return n&&pi(s,wn(s),n)}function Ti(n,s,l){s=="__proto__"&&Oo?Oo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function wl(n,s){for(var l=-1,h=s.length,S=j(h),b=n==null;++l<h;)S[l]=b?t:ac(n,s[l]);return S}function xr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Yn(n,s,l,h,S,b){var D,G=s&_,k=s&v,re=s&x;if(l&&(D=S?l(n,h,S,b):l(n)),D!==t)return D;if(!Vt(n))return n;var ae=at(n);if(ae){if(D=Y_(n),!G)return bn(n,D)}else{var de=dn(n),Ae=de==X||de==Wt;if(Ji(n))return Lf(n,G);if(de==et||de==ge||Ae&&!S){if(D=k||Ae?{}:Kf(n),!G)return k?N_(n,r_(D,n)):U_(n,of(D,n))}else{if(!Ot[de])return S?n:{};D=q_(n,de,G)}}b||(b=new ni);var Ge=b.get(n);if(Ge)return Ge;b.set(n,D),Th(n)?n.forEach(function(Ke){D.add(Yn(Ke,s,l,Ke,n,b))}):Eh(n)&&n.forEach(function(Ke,vt){D.set(vt,Yn(Ke,s,l,vt,n,b))});var $e=re?k?ql:Yl:k?wn:sn,pt=ae?t:$e(n);return Vn(pt||n,function(Ke,vt){pt&&(vt=Ke,Ke=n[vt]),Ys(D,vt,Yn(Ke,s,l,vt,n,b))}),D}function s_(n){var s=sn(n);return function(l){return af(l,n,s)}}function af(n,s,l){var h=l.length;if(n==null)return!h;for(n=Ut(n);h--;){var S=l[h],b=s[S],D=n[S];if(D===t&&!(S in n)||!b(D))return!1}return!0}function lf(n,s,l){if(typeof n!="function")throw new Wn(u);return Qs(function(){n.apply(t,l)},s)}function qs(n,s,l,h){var S=-1,b=bo,D=!0,G=n.length,k=[],re=s.length;if(!G)return k;l&&(s=kt(s,In(l))),h?(b=dl,D=!1):s.length>=o&&(b=zs,D=!1,s=new vr(s));e:for(;++S<G;){var ae=n[S],de=l==null?ae:l(ae);if(ae=h||ae!==0?ae:0,D&&de===de){for(var Ae=re;Ae--;)if(s[Ae]===de)continue e;k.push(ae)}else b(s,de,h)||k.push(ae)}return k}var $i=Nf(di),cf=Nf(Cl,!0);function o_(n,s){var l=!0;return $i(n,function(h,S,b){return l=!!s(h,S,b),l}),l}function Vo(n,s,l){for(var h=-1,S=n.length;++h<S;){var b=n[h],D=s(b);if(D!=null&&(G===t?D===D&&!Un(D):l(D,G)))var G=D,k=b}return k}function a_(n,s,l,h){var S=n.length;for(l=ht(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ht(h),h<0&&(h+=S),h=l>h?0:Ah(h);l<h;)n[l++]=s;return n}function uf(n,s){var l=[];return $i(n,function(h,S,b){s(h,S,b)&&l.push(h)}),l}function ln(n,s,l,h,S){var b=-1,D=n.length;for(l||(l=K_),S||(S=[]);++b<D;){var G=n[b];s>0&&l(G)?s>1?ln(G,s-1,l,h,S):Xi(S,G):h||(S[S.length]=G)}return S}var Rl=Of(),ff=Of(!0);function di(n,s){return n&&Rl(n,s,sn)}function Cl(n,s){return n&&ff(n,s,sn)}function Wo(n,s){return Wi(s,function(l){return Ri(n[l])})}function Sr(n,s){s=Zi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[mi(s[l++])];return l&&l==h?n:t}function hf(n,s,l){var h=s(n);return at(n)?h:Xi(h,l(n))}function _n(n){return n==null?n===t?oe:Ve:gr&&gr in Ut(n)?V_(n):nv(n)}function Ll(n,s){return n>s}function l_(n,s){return n!=null&&Pt.call(n,s)}function c_(n,s){return n!=null&&s in Ut(n)}function u_(n,s,l){return n>=hn(s,l)&&n<en(s,l)}function Pl(n,s,l){for(var h=l?dl:bo,S=n[0].length,b=n.length,D=b,G=j(b),k=1/0,re=[];D--;){var ae=n[D];D&&s&&(ae=kt(ae,In(s))),k=hn(ae.length,k),G[D]=!l&&(s||S>=120&&ae.length>=120)?new vr(D&&ae):t}ae=n[0];var de=-1,Ae=G[0];e:for(;++de<S&&re.length<k;){var Ge=ae[de],$e=s?s(Ge):Ge;if(Ge=l||Ge!==0?Ge:0,!(Ae?zs(Ae,$e):h(re,$e,l))){for(D=b;--D;){var pt=G[D];if(!(pt?zs(pt,$e):h(n[D],$e,l)))continue e}Ae&&Ae.push($e),re.push(Ge)}}return re}function f_(n,s,l,h){return di(n,function(S,b,D){s(h,l(S),b,D)}),h}function $s(n,s,l){s=Zi(s,n),n=Qf(n,s);var h=n==null?n:n[mi($n(s))];return h==null?t:Pn(h,n,l)}function df(n){return Xt(n)&&_n(n)==ge}function h_(n){return Xt(n)&&_n(n)==Ze}function d_(n){return Xt(n)&&_n(n)==Ce}function Ks(n,s,l,h,S){return n===s?!0:n==null||s==null||!Xt(n)&&!Xt(s)?n!==n&&s!==s:p_(n,s,l,h,Ks,S)}function p_(n,s,l,h,S,b){var D=at(n),G=at(s),k=D?Re:dn(n),re=G?Re:dn(s);k=k==ge?et:k,re=re==ge?et:re;var ae=k==et,de=re==et,Ae=k==re;if(Ae&&Ji(n)){if(!Ji(s))return!1;D=!0,ae=!1}if(Ae&&!ae)return b||(b=new ni),D||ss(n)?Yf(n,s,l,h,S,b):H_(n,s,k,l,h,S,b);if(!(l&E)){var Ge=ae&&Pt.call(n,"__wrapped__"),$e=de&&Pt.call(s,"__wrapped__");if(Ge||$e){var pt=Ge?n.value():n,Ke=$e?s.value():s;return b||(b=new ni),S(pt,Ke,l,h,b)}}return Ae?(b||(b=new ni),k_(n,s,l,h,S,b)):!1}function m_(n){return Xt(n)&&dn(n)==Ue}function Il(n,s,l,h){var S=l.length,b=S,D=!h;if(n==null)return!b;for(n=Ut(n);S--;){var G=l[S];if(D&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++S<b;){G=l[S];var k=G[0],re=n[k],ae=G[1];if(D&&G[2]){if(re===t&&!(k in n))return!1}else{var de=new ni;if(h)var Ae=h(re,ae,k,n,s,de);if(!(Ae===t?Ks(ae,re,E|A,h,de):Ae))return!1}}return!0}function pf(n){if(!Vt(n)||j_(n))return!1;var s=Ri(n)?mg:Z;return s.test(Er(n))}function g_(n){return Xt(n)&&_n(n)==At}function __(n){return Xt(n)&&dn(n)==C}function v_(n){return Xt(n)&&aa(n.length)&&!!Bt[_n(n)]}function mf(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?at(n)?vf(n[0],n[1]):_f(n):Fh(n)}function Dl(n){if(!Js(n))return Mg(n);var s=[];for(var l in Ut(n))Pt.call(n,l)&&l!="constructor"&&s.push(l);return s}function x_(n){if(!Vt(n))return tv(n);var s=Js(n),l=[];for(var h in n)h=="constructor"&&(s||!Pt.call(n,h))||l.push(h);return l}function Ul(n,s){return n<s}function gf(n,s){var l=-1,h=An(n)?j(n.length):[];return $i(n,function(S,b,D){h[++l]=s(S,b,D)}),h}function _f(n){var s=Kl(n);return s.length==1&&s[0][2]?jf(s[0][0],s[0][1]):function(l){return l===n||Il(l,n,s)}}function vf(n,s){return jl(n)&&Zf(s)?jf(mi(n),s):function(l){var h=ac(l,n);return h===t&&h===s?lc(l,n):Ks(s,h,E|A)}}function Xo(n,s,l,h,S){n!==s&&Rl(s,function(b,D){if(S||(S=new ni),Vt(b))S_(n,s,D,l,Xo,h,S);else{var G=h?h(Ql(n,D),b,D+"",n,s,S):t;G===t&&(G=b),Al(n,D,G)}},wn)}function S_(n,s,l,h,S,b,D){var G=Ql(n,l),k=Ql(s,l),re=D.get(k);if(re){Al(n,l,re);return}var ae=b?b(G,k,l+"",n,s,D):t,de=ae===t;if(de){var Ae=at(k),Ge=!Ae&&Ji(k),$e=!Ae&&!Ge&&ss(k);ae=k,Ae||Ge||$e?at(G)?ae=G:$t(G)?ae=bn(G):Ge?(de=!1,ae=Lf(k,!0)):$e?(de=!1,ae=Pf(k,!0)):ae=[]:eo(k)||yr(k)?(ae=G,yr(G)?ae=wh(G):(!Vt(G)||Ri(G))&&(ae=Kf(k))):de=!1}de&&(D.set(k,ae),S(ae,k,h,b,D),D.delete(k)),Al(n,l,ae)}function xf(n,s){var l=n.length;if(l)return s+=s<0?l:0,wi(s,l)?n[s]:t}function Sf(n,s,l){s.length?s=kt(s,function(b){return at(b)?function(D){return Sr(D,b.length===1?b[0]:b)}:b}):s=[Rn];var h=-1;s=kt(s,In(Xe()));var S=gf(n,function(b,D,G){var k=kt(s,function(re){return re(b)});return{criteria:k,index:++h,value:b}});return qm(S,function(b,D){return D_(b,D,l)})}function M_(n,s){return Mf(n,s,function(l,h){return lc(n,h)})}function Mf(n,s,l){for(var h=-1,S=s.length,b={};++h<S;){var D=s[h],G=Sr(n,D);l(G,D)&&Zs(b,Zi(D,n),G)}return b}function E_(n){return function(s){return Sr(s,n)}}function Nl(n,s,l,h){var S=h?Ym:$r,b=-1,D=s.length,G=n;for(n===s&&(s=bn(s)),l&&(G=kt(n,In(l)));++b<D;)for(var k=0,re=s[b],ae=l?l(re):re;(k=S(G,ae,k,h))>-1;)G!==n&&No.call(G,k,1),No.call(n,k,1);return n}function Ef(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==b){var b=S;wi(S)?No.call(n,S,1):Gl(n,S)}}return n}function Ol(n,s){return n+Bo(tf()*(s-n+1))}function y_(n,s,l,h){for(var S=-1,b=en(Fo((s-n)/(l||1)),0),D=j(b);b--;)D[h?b:++S]=n,n+=l;return D}function Fl(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Bo(s/2),s&&(n+=n);while(s);return l}function _t(n,s){return ec(Jf(n,s,Rn),n+"")}function T_(n){return sf(os(n))}function b_(n,s){var l=os(n);return ta(l,xr(s,0,l.length))}function Zs(n,s,l,h){if(!Vt(n))return n;s=Zi(s,n);for(var S=-1,b=s.length,D=b-1,G=n;G!=null&&++S<b;){var k=mi(s[S]),re=l;if(k==="__proto__"||k==="constructor"||k==="prototype")return n;if(S!=D){var ae=G[k];re=h?h(ae,k,G):t,re===t&&(re=Vt(ae)?ae:wi(s[S+1])?[]:{})}Ys(G,k,re),G=G[k]}return n}var yf=Go?function(n,s){return Go.set(n,s),n}:Rn,A_=Oo?function(n,s){return Oo(n,"toString",{configurable:!0,enumerable:!1,value:uc(s),writable:!0})}:Rn;function w_(n){return ta(os(n))}function qn(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var b=j(S);++h<S;)b[h]=n[h+s];return b}function R_(n,s){var l;return $i(n,function(h,S,b){return l=s(h,S,b),!l}),!!l}function Yo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=tt){for(;h<S;){var b=h+S>>>1,D=n[b];D!==null&&!Un(D)&&(l?D<=s:D<s)?h=b+1:S=b}return S}return Bl(n,s,Rn,l)}function Bl(n,s,l,h){var S=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var D=s!==s,G=s===null,k=Un(s),re=s===t;S<b;){var ae=Bo((S+b)/2),de=l(n[ae]),Ae=de!==t,Ge=de===null,$e=de===de,pt=Un(de);if(D)var Ke=h||$e;else re?Ke=$e&&(h||Ae):G?Ke=$e&&Ae&&(h||!Ge):k?Ke=$e&&Ae&&!Ge&&(h||!pt):Ge||pt?Ke=!1:Ke=h?de<=s:de<s;Ke?S=ae+1:b=ae}return hn(b,De)}function Tf(n,s){for(var l=-1,h=n.length,S=0,b=[];++l<h;){var D=n[l],G=s?s(D):D;if(!l||!ii(G,k)){var k=G;b[S++]=D===0?0:D}}return b}function bf(n){return typeof n=="number"?n:Un(n)?he:+n}function Dn(n){if(typeof n=="string")return n;if(at(n))return kt(n,Dn)+"";if(Un(n))return nf?nf.call(n):"";var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Ki(n,s,l){var h=-1,S=bo,b=n.length,D=!0,G=[],k=G;if(l)D=!1,S=dl;else if(b>=o){var re=s?null:G_(n);if(re)return wo(re);D=!1,S=zs,k=new vr}else k=s?[]:G;e:for(;++h<b;){var ae=n[h],de=s?s(ae):ae;if(ae=l||ae!==0?ae:0,D&&de===de){for(var Ae=k.length;Ae--;)if(k[Ae]===de)continue e;s&&k.push(de),G.push(ae)}else S(k,de,l)||(k!==G&&k.push(de),G.push(ae))}return G}function Gl(n,s){return s=Zi(s,n),n=Qf(n,s),n==null||delete n[mi($n(s))]}function Af(n,s,l,h){return Zs(n,s,l(Sr(n,s)),h)}function qo(n,s,l,h){for(var S=n.length,b=h?S:-1;(h?b--:++b<S)&&s(n[b],b,n););return l?qn(n,h?0:b,h?b+1:S):qn(n,h?b+1:0,h?S:b)}function wf(n,s){var l=n;return l instanceof St&&(l=l.value()),pl(s,function(h,S){return S.func.apply(S.thisArg,Xi([h],S.args))},l)}function zl(n,s,l){var h=n.length;if(h<2)return h?Ki(n[0]):[];for(var S=-1,b=j(h);++S<h;)for(var D=n[S],G=-1;++G<h;)G!=S&&(b[S]=qs(b[S]||D,n[G],s,l));return Ki(ln(b,1),s,l)}function Rf(n,s,l){for(var h=-1,S=n.length,b=s.length,D={};++h<S;){var G=h<b?s[h]:t;l(D,n[h],G)}return D}function Hl(n){return $t(n)?n:[]}function kl(n){return typeof n=="function"?n:Rn}function Zi(n,s){return at(n)?n:jl(n,s)?[n]:ih(Rt(n))}var C_=_t;function ji(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:qn(n,s,l)}var Cf=gg||function(n){return an.clearTimeout(n)};function Lf(n,s){if(s)return n.slice();var l=n.length,h=Zu?Zu(l):new n.constructor(l);return n.copy(h),h}function Vl(n){var s=new n.constructor(n.byteLength);return new Do(s).set(new Do(n)),s}function L_(n,s){var l=s?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function P_(n){var s=new n.constructor(n.source,yo.exec(n));return s.lastIndex=n.lastIndex,s}function I_(n){return Xs?Ut(Xs.call(n)):{}}function Pf(n,s){var l=s?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function If(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,b=Un(n),D=s!==t,G=s===null,k=s===s,re=Un(s);if(!G&&!re&&!b&&n>s||b&&D&&k&&!G&&!re||h&&D&&k||!l&&k||!S)return 1;if(!h&&!b&&!re&&n<s||re&&l&&S&&!h&&!b||G&&l&&S||!D&&S||!k)return-1}return 0}function D_(n,s,l){for(var h=-1,S=n.criteria,b=s.criteria,D=S.length,G=l.length;++h<D;){var k=If(S[h],b[h]);if(k){if(h>=G)return k;var re=l[h];return k*(re=="desc"?-1:1)}}return n.index-s.index}function Df(n,s,l,h){for(var S=-1,b=n.length,D=l.length,G=-1,k=s.length,re=en(b-D,0),ae=j(k+re),de=!h;++G<k;)ae[G]=s[G];for(;++S<D;)(de||S<b)&&(ae[l[S]]=n[S]);for(;re--;)ae[G++]=n[S++];return ae}function Uf(n,s,l,h){for(var S=-1,b=n.length,D=-1,G=l.length,k=-1,re=s.length,ae=en(b-G,0),de=j(ae+re),Ae=!h;++S<ae;)de[S]=n[S];for(var Ge=S;++k<re;)de[Ge+k]=s[k];for(;++D<G;)(Ae||S<b)&&(de[Ge+l[D]]=n[S++]);return de}function bn(n,s){var l=-1,h=n.length;for(s||(s=j(h));++l<h;)s[l]=n[l];return s}function pi(n,s,l,h){var S=!l;l||(l={});for(var b=-1,D=s.length;++b<D;){var G=s[b],k=h?h(l[G],n[G],G,l,n):t;k===t&&(k=n[G]),S?Ti(l,G,k):Ys(l,G,k)}return l}function U_(n,s){return pi(n,Zl(n),s)}function N_(n,s){return pi(n,qf(n),s)}function $o(n,s){return function(l,h){var S=at(l)?zm:i_,b=s?s():{};return S(l,n,Xe(h,2),b)}}function ns(n){return _t(function(s,l){var h=-1,S=l.length,b=S>1?l[S-1]:t,D=S>2?l[2]:t;for(b=n.length>3&&typeof b=="function"?(S--,b):t,D&&vn(l[0],l[1],D)&&(b=S<3?t:b,S=1),s=Ut(s);++h<S;){var G=l[h];G&&n(s,G,h,b)}return s})}function Nf(n,s){return function(l,h){if(l==null)return l;if(!An(l))return n(l,h);for(var S=l.length,b=s?S:-1,D=Ut(l);(s?b--:++b<S)&&h(D[b],b,D)!==!1;);return l}}function Of(n){return function(s,l,h){for(var S=-1,b=Ut(s),D=h(s),G=D.length;G--;){var k=D[n?G:++S];if(l(b[k],k,b)===!1)break}return s}}function O_(n,s,l){var h=s&g,S=js(n);function b(){var D=this&&this!==an&&this instanceof b?S:n;return D.apply(h?l:this,arguments)}return b}function Ff(n){return function(s){s=Rt(s);var l=Kr(s)?ti(s):t,h=l?l[0]:s.charAt(0),S=l?ji(l,1).join(""):s.slice(1);return h[n]()+S}}function is(n){return function(s){return pl(Nh(Uh(s).replace(Am,"")),n,"")}}function js(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=ts(n.prototype),h=n.apply(l,s);return Vt(h)?h:l}}function F_(n,s,l){var h=js(n);function S(){for(var b=arguments.length,D=j(b),G=b,k=rs(S);G--;)D[G]=arguments[G];var re=b<3&&D[0]!==k&&D[b-1]!==k?[]:Yi(D,k);if(b-=re.length,b<l)return kf(n,s,Ko,S.placeholder,t,D,re,t,t,l-b);var ae=this&&this!==an&&this instanceof S?h:n;return Pn(ae,this,D)}return S}function Bf(n){return function(s,l,h){var S=Ut(s);if(!An(s)){var b=Xe(l,3);s=sn(s),l=function(G){return b(S[G],G,S)}}var D=n(s,l,h);return D>-1?S[b?s[D]:D]:t}}function Gf(n){return Ai(function(s){var l=s.length,h=l,S=Xn.prototype.thru;for(n&&s.reverse();h--;){var b=s[h];if(typeof b!="function")throw new Wn(u);if(S&&!D&&Qo(b)=="wrapper")var D=new Xn([],!0)}for(h=D?h:l;++h<l;){b=s[h];var G=Qo(b),k=G=="wrapper"?$l(b):t;k&&Jl(k[0])&&k[1]==(L|w|F|V)&&!k[4].length&&k[9]==1?D=D[Qo(k[0])].apply(D,k[3]):D=b.length==1&&Jl(b)?D[G]():D.thru(b)}return function(){var re=arguments,ae=re[0];if(D&&re.length==1&&at(ae))return D.plant(ae).value();for(var de=0,Ae=l?s[de].apply(this,re):ae;++de<l;)Ae=s[de].call(this,Ae);return Ae}})}function Ko(n,s,l,h,S,b,D,G,k,re){var ae=s&L,de=s&g,Ae=s&p,Ge=s&(w|P),$e=s&pe,pt=Ae?t:js(n);function Ke(){for(var vt=arguments.length,Mt=j(vt),Nn=vt;Nn--;)Mt[Nn]=arguments[Nn];if(Ge)var xn=rs(Ke),On=Km(Mt,xn);if(h&&(Mt=Df(Mt,h,S,Ge)),b&&(Mt=Uf(Mt,b,D,Ge)),vt-=On,Ge&&vt<re){var Kt=Yi(Mt,xn);return kf(n,s,Ko,Ke.placeholder,l,Mt,Kt,G,k,re-vt)}var ri=de?l:this,Li=Ae?ri[n]:n;return vt=Mt.length,G?Mt=iv(Mt,G):$e&&vt>1&&Mt.reverse(),ae&&k<vt&&(Mt.length=k),this&&this!==an&&this instanceof Ke&&(Li=pt||js(Li)),Li.apply(ri,Mt)}return Ke}function zf(n,s){return function(l,h){return f_(l,n,s(h),{})}}function Zo(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Dn(l),h=Dn(h)):(l=bf(l),h=bf(h)),S=n(l,h)}return S}}function Wl(n){return Ai(function(s){return s=kt(s,In(Xe())),_t(function(l){var h=this;return n(s,function(S){return Pn(S,h,l)})})})}function jo(n,s){s=s===t?" ":Dn(s);var l=s.length;if(l<2)return l?Fl(s,n):s;var h=Fl(s,Fo(n/Zr(s)));return Kr(s)?ji(ti(h),0,n).join(""):h.slice(0,n)}function B_(n,s,l,h){var S=s&g,b=js(n);function D(){for(var G=-1,k=arguments.length,re=-1,ae=h.length,de=j(ae+k),Ae=this&&this!==an&&this instanceof D?b:n;++re<ae;)de[re]=h[re];for(;k--;)de[re++]=arguments[++G];return Pn(Ae,S?l:this,de)}return D}function Hf(n){return function(s,l,h){return h&&typeof h!="number"&&vn(s,l,h)&&(l=h=t),s=Ci(s),l===t?(l=s,s=0):l=Ci(l),h=h===t?s<l?1:-1:Ci(h),y_(s,l,h,n)}}function Jo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Kn(s),l=Kn(l)),n(s,l)}}function kf(n,s,l,h,S,b,D,G,k,re){var ae=s&w,de=ae?D:t,Ae=ae?t:D,Ge=ae?b:t,$e=ae?t:b;s|=ae?F:N,s&=~(ae?N:F),s&U||(s&=~(g|p));var pt=[n,s,S,Ge,de,$e,Ae,G,k,re],Ke=l.apply(t,pt);return Jl(n)&&eh(Ke,pt),Ke.placeholder=h,th(Ke,n,s)}function Xl(n){var s=Qt[n];return function(l,h){if(l=Kn(l),h=h==null?0:hn(ht(h),292),h&&ef(l)){var S=(Rt(l)+"e").split("e"),b=s(S[0]+"e"+(+S[1]+h));return S=(Rt(b)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var G_=Qr&&1/wo(new Qr([,-0]))[1]==ce?function(n){return new Qr(n)}:dc;function Vf(n){return function(s){var l=dn(s);return l==Ue?Ml(s):l==C?ng(s):$m(s,n(s))}}function bi(n,s,l,h,S,b,D,G){var k=s&p;if(!k&&typeof n!="function")throw new Wn(u);var re=h?h.length:0;if(re||(s&=~(F|N),h=S=t),D=D===t?D:en(ht(D),0),G=G===t?G:ht(G),re-=S?S.length:0,s&N){var ae=h,de=S;h=S=t}var Ae=k?t:$l(n),Ge=[n,s,l,h,S,ae,de,b,D,G];if(Ae&&ev(Ge,Ae),n=Ge[0],s=Ge[1],l=Ge[2],h=Ge[3],S=Ge[4],G=Ge[9]=Ge[9]===t?k?0:n.length:en(Ge[9]-re,0),!G&&s&(w|P)&&(s&=~(w|P)),!s||s==g)var $e=O_(n,s,l);else s==w||s==P?$e=F_(n,s,G):(s==F||s==(g|F))&&!S.length?$e=B_(n,s,l,h):$e=Ko.apply(t,Ge);var pt=Ae?yf:eh;return th(pt($e,Ge),n,s)}function Wf(n,s,l,h){return n===t||ii(n,Jr[l])&&!Pt.call(h,l)?s:n}function Xf(n,s,l,h,S,b){return Vt(n)&&Vt(s)&&(b.set(s,n),Xo(n,s,t,Xf,b),b.delete(s)),n}function z_(n){return eo(n)?t:n}function Yf(n,s,l,h,S,b){var D=l&E,G=n.length,k=s.length;if(G!=k&&!(D&&k>G))return!1;var re=b.get(n),ae=b.get(s);if(re&&ae)return re==s&&ae==n;var de=-1,Ae=!0,Ge=l&A?new vr:t;for(b.set(n,s),b.set(s,n);++de<G;){var $e=n[de],pt=s[de];if(h)var Ke=D?h(pt,$e,de,s,n,b):h($e,pt,de,n,s,b);if(Ke!==t){if(Ke)continue;Ae=!1;break}if(Ge){if(!ml(s,function(vt,Mt){if(!zs(Ge,Mt)&&($e===vt||S($e,vt,l,h,b)))return Ge.push(Mt)})){Ae=!1;break}}else if(!($e===pt||S($e,pt,l,h,b))){Ae=!1;break}}return b.delete(n),b.delete(s),Ae}function H_(n,s,l,h,S,b,D){switch(l){case He:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ze:return!(n.byteLength!=s.byteLength||!b(new Do(n),new Do(s)));case Oe:case Ce:case Je:return ii(+n,+s);case We:return n.name==s.name&&n.message==s.message;case At:case M:return n==s+"";case Ue:var G=Ml;case C:var k=h&E;if(G||(G=wo),n.size!=s.size&&!k)return!1;var re=D.get(n);if(re)return re==s;h|=A,D.set(n,s);var ae=Yf(G(n),G(s),h,S,b,D);return D.delete(n),ae;case ee:if(Xs)return Xs.call(n)==Xs.call(s)}return!1}function k_(n,s,l,h,S,b){var D=l&E,G=Yl(n),k=G.length,re=Yl(s),ae=re.length;if(k!=ae&&!D)return!1;for(var de=k;de--;){var Ae=G[de];if(!(D?Ae in s:Pt.call(s,Ae)))return!1}var Ge=b.get(n),$e=b.get(s);if(Ge&&$e)return Ge==s&&$e==n;var pt=!0;b.set(n,s),b.set(s,n);for(var Ke=D;++de<k;){Ae=G[de];var vt=n[Ae],Mt=s[Ae];if(h)var Nn=D?h(Mt,vt,Ae,s,n,b):h(vt,Mt,Ae,n,s,b);if(!(Nn===t?vt===Mt||S(vt,Mt,l,h,b):Nn)){pt=!1;break}Ke||(Ke=Ae=="constructor")}if(pt&&!Ke){var xn=n.constructor,On=s.constructor;xn!=On&&"constructor"in n&&"constructor"in s&&!(typeof xn=="function"&&xn instanceof xn&&typeof On=="function"&&On instanceof On)&&(pt=!1)}return b.delete(n),b.delete(s),pt}function Ai(n){return ec(Jf(n,t,ah),n+"")}function Yl(n){return hf(n,sn,Zl)}function ql(n){return hf(n,wn,qf)}var $l=Go?function(n){return Go.get(n)}:dc;function Qo(n){for(var s=n.name+"",l=es[s],h=Pt.call(es,s)?l.length:0;h--;){var S=l[h],b=S.func;if(b==null||b==n)return S.name}return s}function rs(n){var s=Pt.call(y,"placeholder")?y:n;return s.placeholder}function Xe(){var n=y.iteratee||fc;return n=n===fc?mf:n,arguments.length?n(arguments[0],arguments[1]):n}function ea(n,s){var l=n.__data__;return Z_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Kl(n){for(var s=sn(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Zf(S)]}return s}function Mr(n,s){var l=Qm(n,s);return pf(l)?l:t}function V_(n){var s=Pt.call(n,gr),l=n[gr];try{n[gr]=t;var h=!0}catch{}var S=Po.call(n);return h&&(s?n[gr]=l:delete n[gr]),S}var Zl=yl?function(n){return n==null?[]:(n=Ut(n),Wi(yl(n),function(s){return Ju.call(n,s)}))}:pc,qf=yl?function(n){for(var s=[];n;)Xi(s,Zl(n)),n=Uo(n);return s}:pc,dn=_n;(Tl&&dn(new Tl(new ArrayBuffer(1)))!=He||ks&&dn(new ks)!=Ue||bl&&dn(bl.resolve())!=nt||Qr&&dn(new Qr)!=C||Vs&&dn(new Vs)!=ve)&&(dn=function(n){var s=_n(n),l=s==et?n.constructor:t,h=l?Er(l):"";if(h)switch(h){case bg:return He;case Ag:return Ue;case wg:return nt;case Rg:return C;case Cg:return ve}return s});function W_(n,s,l){for(var h=-1,S=l.length;++h<S;){var b=l[h],D=b.size;switch(b.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=hn(s,n+D);break;case"takeRight":n=en(n,s-D);break}}return{start:n,end:s}}function X_(n){var s=n.match(So);return s?s[1].split(Vr):[]}function $f(n,s,l){s=Zi(s,n);for(var h=-1,S=s.length,b=!1;++h<S;){var D=mi(s[h]);if(!(b=n!=null&&l(n,D)))break;n=n[D]}return b||++h!=S?b:(S=n==null?0:n.length,!!S&&aa(S)&&wi(D,S)&&(at(n)||yr(n)))}function Y_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Pt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Kf(n){return typeof n.constructor=="function"&&!Js(n)?ts(Uo(n)):{}}function q_(n,s,l){var h=n.constructor;switch(s){case Ze:return Vl(n);case Oe:case Ce:return new h(+n);case He:return L_(n,l);case ye:case be:case Qe:case Ee:case Nt:case st:case ze:case Pe:case Fe:return Pf(n,l);case Ue:return new h;case Je:case M:return new h(n);case At:return P_(n);case C:return new h;case ee:return I_(n)}}function $_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(kr,`{
/* [wrapped with `+s+`] */
`)}function K_(n){return at(n)||yr(n)||!!(Qu&&n&&n[Qu])}function wi(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&K.test(n))&&n>-1&&n%1==0&&n<s}function vn(n,s,l){if(!Vt(l))return!1;var h=typeof s;return(h=="number"?An(l)&&wi(s,l.length):h=="string"&&s in l)?ii(l[s],n):!1}function jl(n,s){if(at(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Un(n)?!0:zt.test(n)||!Ct.test(n)||s!=null&&n in Ut(s)}function Z_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Jl(n){var s=Qo(n),l=y[s];if(typeof l!="function"||!(s in St.prototype))return!1;if(n===l)return!0;var h=$l(l);return!!h&&n===h[0]}function j_(n){return!!Ku&&Ku in n}var J_=Co?Ri:mc;function Js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Jr;return n===l}function Zf(n){return n===n&&!Vt(n)}function jf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Ut(l))}}function Q_(n){var s=sa(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function ev(n,s){var l=n[1],h=s[1],S=l|h,b=S<(g|p|L),D=h==L&&l==w||h==L&&l==V&&n[7].length<=s[8]||h==(L|V)&&s[7].length<=s[8]&&l==w;if(!(b||D))return n;h&g&&(n[2]=s[2],S|=l&g?0:U);var G=s[3];if(G){var k=n[3];n[3]=k?Df(k,G,s[4]):G,n[4]=k?Yi(n[3],m):s[4]}return G=s[5],G&&(k=n[5],n[5]=k?Uf(k,G,s[6]):G,n[6]=k?Yi(n[5],m):s[6]),G=s[7],G&&(n[7]=G),h&L&&(n[8]=n[8]==null?s[8]:hn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function tv(n){var s=[];if(n!=null)for(var l in Ut(n))s.push(l);return s}function nv(n){return Po.call(n)}function Jf(n,s,l){return s=en(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,b=en(h.length-s,0),D=j(b);++S<b;)D[S]=h[s+S];S=-1;for(var G=j(s+1);++S<s;)G[S]=h[S];return G[s]=l(D),Pn(n,this,G)}}function Qf(n,s){return s.length<2?n:Sr(n,qn(s,0,-1))}function iv(n,s){for(var l=n.length,h=hn(s.length,l),S=bn(n);h--;){var b=s[h];n[h]=wi(b,l)?S[b]:t}return n}function Ql(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var eh=nh(yf),Qs=vg||function(n,s){return an.setTimeout(n,s)},ec=nh(A_);function th(n,s,l){var h=s+"";return ec(n,$_(h,rv(X_(h),l)))}function nh(n){var s=0,l=0;return function(){var h=Eg(),S=fe-(h-l);if(l=h,S>0){if(++s>=me)return arguments[0]}else s=0;return n.apply(t,arguments)}}function ta(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var b=Ol(l,S),D=n[b];n[b]=n[l],n[l]=D}return n.length=s,n}var ih=Q_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(yt,function(l,h,S,b){s.push(S?b.replace(ol,"$1"):h||l)}),s});function mi(n){if(typeof n=="string"||Un(n))return n;var s=n+"";return s=="0"&&1/n==-ce?"-0":s}function Er(n){if(n!=null){try{return Lo.call(n)}catch{}try{return n+""}catch{}}return""}function rv(n,s){return Vn(Q,function(l){var h="_."+l[0];s&l[1]&&!bo(n,h)&&n.push(h)}),n.sort()}function rh(n){if(n instanceof St)return n.clone();var s=new Xn(n.__wrapped__,n.__chain__);return s.__actions__=bn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function sv(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=en(ht(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,b=0,D=j(Fo(h/s));S<h;)D[b++]=qn(n,S,S+=s);return D}function ov(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var b=n[s];b&&(S[h++]=b)}return S}function av(){var n=arguments.length;if(!n)return[];for(var s=j(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Xi(at(l)?bn(l):[l],ln(s,1))}var lv=_t(function(n,s){return $t(n)?qs(n,ln(s,1,$t,!0)):[]}),cv=_t(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?qs(n,ln(s,1,$t,!0),Xe(l,2)):[]}),uv=_t(function(n,s){var l=$n(s);return $t(l)&&(l=t),$t(n)?qs(n,ln(s,1,$t,!0),t,l):[]});function fv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),qn(n,s<0?0:s,h)):[]}function hv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,qn(n,0,s<0?0:s)):[]}function dv(n,s){return n&&n.length?qo(n,Xe(s,3),!0,!0):[]}function pv(n,s){return n&&n.length?qo(n,Xe(s,3),!0):[]}function mv(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&vn(n,s,l)&&(l=0,h=S),a_(n,s,l,h)):[]}function sh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=en(h+S,0)),Ao(n,Xe(s,3),S)}function oh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ht(l),S=l<0?en(h+S,0):hn(S,h-1)),Ao(n,Xe(s,3),S,!0)}function ah(n){var s=n==null?0:n.length;return s?ln(n,1):[]}function gv(n){var s=n==null?0:n.length;return s?ln(n,ce):[]}function _v(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ht(s),ln(n,s)):[]}function vv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function lh(n){return n&&n.length?n[0]:t}function xv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ht(l);return S<0&&(S=en(h+S,0)),$r(n,s,S)}function Sv(n){var s=n==null?0:n.length;return s?qn(n,0,-1):[]}var Mv=_t(function(n){var s=kt(n,Hl);return s.length&&s[0]===n[0]?Pl(s):[]}),Ev=_t(function(n){var s=$n(n),l=kt(n,Hl);return s===$n(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Pl(l,Xe(s,2)):[]}),yv=_t(function(n){var s=$n(n),l=kt(n,Hl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Pl(l,t,s):[]});function Tv(n,s){return n==null?"":Sg.call(n,s)}function $n(n){var s=n==null?0:n.length;return s?n[s-1]:t}function bv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ht(l),S=S<0?en(h+S,0):hn(S,h-1)),s===s?rg(n,s,S):Ao(n,Hu,S,!0)}function Av(n,s){return n&&n.length?xf(n,ht(s)):t}var wv=_t(ch);function ch(n,s){return n&&n.length&&s&&s.length?Nl(n,s):n}function Rv(n,s,l){return n&&n.length&&s&&s.length?Nl(n,s,Xe(l,2)):n}function Cv(n,s,l){return n&&n.length&&s&&s.length?Nl(n,s,t,l):n}var Lv=Ai(function(n,s){var l=n==null?0:n.length,h=wl(n,s);return Ef(n,kt(s,function(S){return wi(S,l)?+S:S}).sort(If)),h});function Pv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],b=n.length;for(s=Xe(s,3);++h<b;){var D=n[h];s(D,h,n)&&(l.push(D),S.push(h))}return Ef(n,S),l}function tc(n){return n==null?n:Tg.call(n)}function Iv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&vn(n,s,l)?(s=0,l=h):(s=s==null?0:ht(s),l=l===t?h:ht(l)),qn(n,s,l)):[]}function Dv(n,s){return Yo(n,s)}function Uv(n,s,l){return Bl(n,s,Xe(l,2))}function Nv(n,s){var l=n==null?0:n.length;if(l){var h=Yo(n,s);if(h<l&&ii(n[h],s))return h}return-1}function Ov(n,s){return Yo(n,s,!0)}function Fv(n,s,l){return Bl(n,s,Xe(l,2),!0)}function Bv(n,s){var l=n==null?0:n.length;if(l){var h=Yo(n,s,!0)-1;if(ii(n[h],s))return h}return-1}function Gv(n){return n&&n.length?Tf(n):[]}function zv(n,s){return n&&n.length?Tf(n,Xe(s,2)):[]}function Hv(n){var s=n==null?0:n.length;return s?qn(n,1,s):[]}function kv(n,s,l){return n&&n.length?(s=l||s===t?1:ht(s),qn(n,0,s<0?0:s)):[]}function Vv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ht(s),s=h-s,qn(n,s<0?0:s,h)):[]}function Wv(n,s){return n&&n.length?qo(n,Xe(s,3),!1,!0):[]}function Xv(n,s){return n&&n.length?qo(n,Xe(s,3)):[]}var Yv=_t(function(n){return Ki(ln(n,1,$t,!0))}),qv=_t(function(n){var s=$n(n);return $t(s)&&(s=t),Ki(ln(n,1,$t,!0),Xe(s,2))}),$v=_t(function(n){var s=$n(n);return s=typeof s=="function"?s:t,Ki(ln(n,1,$t,!0),t,s)});function Kv(n){return n&&n.length?Ki(n):[]}function Zv(n,s){return n&&n.length?Ki(n,Xe(s,2)):[]}function jv(n,s){return s=typeof s=="function"?s:t,n&&n.length?Ki(n,t,s):[]}function nc(n){if(!(n&&n.length))return[];var s=0;return n=Wi(n,function(l){if($t(l))return s=en(l.length,s),!0}),xl(s,function(l){return kt(n,gl(l))})}function uh(n,s){if(!(n&&n.length))return[];var l=nc(n);return s==null?l:kt(l,function(h){return Pn(s,t,h)})}var Jv=_t(function(n,s){return $t(n)?qs(n,s):[]}),Qv=_t(function(n){return zl(Wi(n,$t))}),e0=_t(function(n){var s=$n(n);return $t(s)&&(s=t),zl(Wi(n,$t),Xe(s,2))}),t0=_t(function(n){var s=$n(n);return s=typeof s=="function"?s:t,zl(Wi(n,$t),t,s)}),n0=_t(nc);function i0(n,s){return Rf(n||[],s||[],Ys)}function r0(n,s){return Rf(n||[],s||[],Zs)}var s0=_t(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,uh(n,l)});function fh(n){var s=y(n);return s.__chain__=!0,s}function o0(n,s){return s(n),n}function na(n,s){return s(n)}var a0=Ai(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(b){return wl(b,n)};return s>1||this.__actions__.length||!(h instanceof St)||!wi(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:na,args:[S],thisArg:t}),new Xn(h,this.__chain__).thru(function(b){return s&&!b.length&&b.push(t),b}))});function l0(){return fh(this)}function c0(){return new Xn(this.value(),this.__chain__)}function u0(){this.__values__===t&&(this.__values__=bh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function f0(){return this}function h0(n){for(var s,l=this;l instanceof Ho;){var h=rh(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function d0(){var n=this.__wrapped__;if(n instanceof St){var s=n;return this.__actions__.length&&(s=new St(this)),s=s.reverse(),s.__actions__.push({func:na,args:[tc],thisArg:t}),new Xn(s,this.__chain__)}return this.thru(tc)}function p0(){return wf(this.__wrapped__,this.__actions__)}var m0=$o(function(n,s,l){Pt.call(n,l)?++n[l]:Ti(n,l,1)});function g0(n,s,l){var h=at(n)?Gu:o_;return l&&vn(n,s,l)&&(s=t),h(n,Xe(s,3))}function _0(n,s){var l=at(n)?Wi:uf;return l(n,Xe(s,3))}var v0=Bf(sh),x0=Bf(oh);function S0(n,s){return ln(ia(n,s),1)}function M0(n,s){return ln(ia(n,s),ce)}function E0(n,s,l){return l=l===t?1:ht(l),ln(ia(n,s),l)}function hh(n,s){var l=at(n)?Vn:$i;return l(n,Xe(s,3))}function dh(n,s){var l=at(n)?Hm:cf;return l(n,Xe(s,3))}var y0=$o(function(n,s,l){Pt.call(n,l)?n[l].push(s):Ti(n,l,[s])});function T0(n,s,l,h){n=An(n)?n:os(n),l=l&&!h?ht(l):0;var S=n.length;return l<0&&(l=en(S+l,0)),la(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&$r(n,s,l)>-1}var b0=_t(function(n,s,l){var h=-1,S=typeof s=="function",b=An(n)?j(n.length):[];return $i(n,function(D){b[++h]=S?Pn(s,D,l):$s(D,s,l)}),b}),A0=$o(function(n,s,l){Ti(n,l,s)});function ia(n,s){var l=at(n)?kt:gf;return l(n,Xe(s,3))}function w0(n,s,l,h){return n==null?[]:(at(s)||(s=s==null?[]:[s]),l=h?t:l,at(l)||(l=l==null?[]:[l]),Sf(n,s,l))}var R0=$o(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function C0(n,s,l){var h=at(n)?pl:Vu,S=arguments.length<3;return h(n,Xe(s,4),l,S,$i)}function L0(n,s,l){var h=at(n)?km:Vu,S=arguments.length<3;return h(n,Xe(s,4),l,S,cf)}function P0(n,s){var l=at(n)?Wi:uf;return l(n,oa(Xe(s,3)))}function I0(n){var s=at(n)?sf:T_;return s(n)}function D0(n,s,l){(l?vn(n,s,l):s===t)?s=1:s=ht(s);var h=at(n)?t_:b_;return h(n,s)}function U0(n){var s=at(n)?n_:w_;return s(n)}function N0(n){if(n==null)return 0;if(An(n))return la(n)?Zr(n):n.length;var s=dn(n);return s==Ue||s==C?n.size:Dl(n).length}function O0(n,s,l){var h=at(n)?ml:R_;return l&&vn(n,s,l)&&(s=t),h(n,Xe(s,3))}var F0=_t(function(n,s){if(n==null)return[];var l=s.length;return l>1&&vn(n,s[0],s[1])?s=[]:l>2&&vn(s[0],s[1],s[2])&&(s=[s[0]]),Sf(n,ln(s,1),[])}),ra=_g||function(){return an.Date.now()};function B0(n,s){if(typeof s!="function")throw new Wn(u);return n=ht(n),function(){if(--n<1)return s.apply(this,arguments)}}function ph(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,bi(n,L,t,t,t,t,s)}function mh(n,s){var l;if(typeof s!="function")throw new Wn(u);return n=ht(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var ic=_t(function(n,s,l){var h=g;if(l.length){var S=Yi(l,rs(ic));h|=F}return bi(n,h,s,l,S)}),gh=_t(function(n,s,l){var h=g|p;if(l.length){var S=Yi(l,rs(gh));h|=F}return bi(s,h,n,l,S)});function _h(n,s,l){s=l?t:s;var h=bi(n,w,t,t,t,t,t,s);return h.placeholder=_h.placeholder,h}function vh(n,s,l){s=l?t:s;var h=bi(n,P,t,t,t,t,t,s);return h.placeholder=vh.placeholder,h}function xh(n,s,l){var h,S,b,D,G,k,re=0,ae=!1,de=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);s=Kn(s)||0,Vt(l)&&(ae=!!l.leading,de="maxWait"in l,b=de?en(Kn(l.maxWait)||0,s):b,Ae="trailing"in l?!!l.trailing:Ae);function Ge(Kt){var ri=h,Li=S;return h=S=t,re=Kt,D=n.apply(Li,ri),D}function $e(Kt){return re=Kt,G=Qs(vt,s),ae?Ge(Kt):D}function pt(Kt){var ri=Kt-k,Li=Kt-re,Bh=s-ri;return de?hn(Bh,b-Li):Bh}function Ke(Kt){var ri=Kt-k,Li=Kt-re;return k===t||ri>=s||ri<0||de&&Li>=b}function vt(){var Kt=ra();if(Ke(Kt))return Mt(Kt);G=Qs(vt,pt(Kt))}function Mt(Kt){return G=t,Ae&&h?Ge(Kt):(h=S=t,D)}function Nn(){G!==t&&Cf(G),re=0,h=k=S=G=t}function xn(){return G===t?D:Mt(ra())}function On(){var Kt=ra(),ri=Ke(Kt);if(h=arguments,S=this,k=Kt,ri){if(G===t)return $e(k);if(de)return Cf(G),G=Qs(vt,s),Ge(k)}return G===t&&(G=Qs(vt,s)),D}return On.cancel=Nn,On.flush=xn,On}var G0=_t(function(n,s){return lf(n,1,s)}),z0=_t(function(n,s,l){return lf(n,Kn(s)||0,l)});function H0(n){return bi(n,pe)}function sa(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Wn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],b=l.cache;if(b.has(S))return b.get(S);var D=n.apply(this,h);return l.cache=b.set(S,D)||b,D};return l.cache=new(sa.Cache||yi),l}sa.Cache=yi;function oa(n){if(typeof n!="function")throw new Wn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function k0(n){return mh(2,n)}var V0=C_(function(n,s){s=s.length==1&&at(s[0])?kt(s[0],In(Xe())):kt(ln(s,1),In(Xe()));var l=s.length;return _t(function(h){for(var S=-1,b=hn(h.length,l);++S<b;)h[S]=s[S].call(this,h[S]);return Pn(n,this,h)})}),rc=_t(function(n,s){var l=Yi(s,rs(rc));return bi(n,F,t,s,l)}),Sh=_t(function(n,s){var l=Yi(s,rs(Sh));return bi(n,N,t,s,l)}),W0=Ai(function(n,s){return bi(n,V,t,t,t,s)});function X0(n,s){if(typeof n!="function")throw new Wn(u);return s=s===t?s:ht(s),_t(n,s)}function Y0(n,s){if(typeof n!="function")throw new Wn(u);return s=s==null?0:en(ht(s),0),_t(function(l){var h=l[s],S=ji(l,0,s);return h&&Xi(S,h),Pn(n,this,S)})}function q0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Wn(u);return Vt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),xh(n,s,{leading:h,maxWait:s,trailing:S})}function $0(n){return ph(n,1)}function K0(n,s){return rc(kl(s),n)}function Z0(){if(!arguments.length)return[];var n=arguments[0];return at(n)?n:[n]}function j0(n){return Yn(n,x)}function J0(n,s){return s=typeof s=="function"?s:t,Yn(n,x,s)}function Q0(n){return Yn(n,_|x)}function ex(n,s){return s=typeof s=="function"?s:t,Yn(n,_|x,s)}function tx(n,s){return s==null||af(n,s,sn(s))}function ii(n,s){return n===s||n!==n&&s!==s}var nx=Jo(Ll),ix=Jo(function(n,s){return n>=s}),yr=df(function(){return arguments}())?df:function(n){return Xt(n)&&Pt.call(n,"callee")&&!Ju.call(n,"callee")},at=j.isArray,rx=Du?In(Du):h_;function An(n){return n!=null&&aa(n.length)&&!Ri(n)}function $t(n){return Xt(n)&&An(n)}function sx(n){return n===!0||n===!1||Xt(n)&&_n(n)==Oe}var Ji=xg||mc,ox=Uu?In(Uu):d_;function ax(n){return Xt(n)&&n.nodeType===1&&!eo(n)}function lx(n){if(n==null)return!0;if(An(n)&&(at(n)||typeof n=="string"||typeof n.splice=="function"||Ji(n)||ss(n)||yr(n)))return!n.length;var s=dn(n);if(s==Ue||s==C)return!n.size;if(Js(n))return!Dl(n).length;for(var l in n)if(Pt.call(n,l))return!1;return!0}function cx(n,s){return Ks(n,s)}function ux(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?Ks(n,s,t,l):!!h}function sc(n){if(!Xt(n))return!1;var s=_n(n);return s==We||s==Et||typeof n.message=="string"&&typeof n.name=="string"&&!eo(n)}function fx(n){return typeof n=="number"&&ef(n)}function Ri(n){if(!Vt(n))return!1;var s=_n(n);return s==X||s==Wt||s==je||s==ct}function Mh(n){return typeof n=="number"&&n==ht(n)}function aa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function Vt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xt(n){return n!=null&&typeof n=="object"}var Eh=Nu?In(Nu):m_;function hx(n,s){return n===s||Il(n,s,Kl(s))}function dx(n,s,l){return l=typeof l=="function"?l:t,Il(n,s,Kl(s),l)}function px(n){return yh(n)&&n!=+n}function mx(n){if(J_(n))throw new rt(a);return pf(n)}function gx(n){return n===null}function _x(n){return n==null}function yh(n){return typeof n=="number"||Xt(n)&&_n(n)==Je}function eo(n){if(!Xt(n)||_n(n)!=et)return!1;var s=Uo(n);if(s===null)return!0;var l=Pt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Lo.call(l)==dg}var oc=Ou?In(Ou):g_;function vx(n){return Mh(n)&&n>=-te&&n<=te}var Th=Fu?In(Fu):__;function la(n){return typeof n=="string"||!at(n)&&Xt(n)&&_n(n)==M}function Un(n){return typeof n=="symbol"||Xt(n)&&_n(n)==ee}var ss=Bu?In(Bu):v_;function xx(n){return n===t}function Sx(n){return Xt(n)&&dn(n)==ve}function Mx(n){return Xt(n)&&_n(n)==_e}var Ex=Jo(Ul),yx=Jo(function(n,s){return n<=s});function bh(n){if(!n)return[];if(An(n))return la(n)?ti(n):bn(n);if(Hs&&n[Hs])return tg(n[Hs]());var s=dn(n),l=s==Ue?Ml:s==C?wo:os;return l(n)}function Ci(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ce||n===-ce){var s=n<0?-1:1;return s*ue}return n===n?n:0}function ht(n){var s=Ci(n),l=s%1;return s===s?l?s-l:s:0}function Ah(n){return n?xr(ht(n),0,Se):0}function Kn(n){if(typeof n=="number")return n;if(Un(n))return he;if(Vt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Vt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Wu(n);var l=W.test(n);return l||J.test(n)?Bm(n.slice(2),l?2:8):R.test(n)?he:+n}function wh(n){return pi(n,wn(n))}function Tx(n){return n?xr(ht(n),-te,te):n===0?n:0}function Rt(n){return n==null?"":Dn(n)}var bx=ns(function(n,s){if(Js(s)||An(s)){pi(s,sn(s),n);return}for(var l in s)Pt.call(s,l)&&Ys(n,l,s[l])}),Rh=ns(function(n,s){pi(s,wn(s),n)}),ca=ns(function(n,s,l,h){pi(s,wn(s),n,h)}),Ax=ns(function(n,s,l,h){pi(s,sn(s),n,h)}),wx=Ai(wl);function Rx(n,s){var l=ts(n);return s==null?l:of(l,s)}var Cx=_t(function(n,s){n=Ut(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&vn(s[0],s[1],S)&&(h=1);++l<h;)for(var b=s[l],D=wn(b),G=-1,k=D.length;++G<k;){var re=D[G],ae=n[re];(ae===t||ii(ae,Jr[re])&&!Pt.call(n,re))&&(n[re]=b[re])}return n}),Lx=_t(function(n){return n.push(t,Xf),Pn(Ch,t,n)});function Px(n,s){return zu(n,Xe(s,3),di)}function Ix(n,s){return zu(n,Xe(s,3),Cl)}function Dx(n,s){return n==null?n:Rl(n,Xe(s,3),wn)}function Ux(n,s){return n==null?n:ff(n,Xe(s,3),wn)}function Nx(n,s){return n&&di(n,Xe(s,3))}function Ox(n,s){return n&&Cl(n,Xe(s,3))}function Fx(n){return n==null?[]:Wo(n,sn(n))}function Bx(n){return n==null?[]:Wo(n,wn(n))}function ac(n,s,l){var h=n==null?t:Sr(n,s);return h===t?l:h}function Gx(n,s){return n!=null&&$f(n,s,l_)}function lc(n,s){return n!=null&&$f(n,s,c_)}var zx=zf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),n[s]=l},uc(Rn)),Hx=zf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),Pt.call(n,s)?n[s].push(l):n[s]=[l]},Xe),kx=_t($s);function sn(n){return An(n)?rf(n):Dl(n)}function wn(n){return An(n)?rf(n,!0):x_(n)}function Vx(n,s){var l={};return s=Xe(s,3),di(n,function(h,S,b){Ti(l,s(h,S,b),h)}),l}function Wx(n,s){var l={};return s=Xe(s,3),di(n,function(h,S,b){Ti(l,S,s(h,S,b))}),l}var Xx=ns(function(n,s,l){Xo(n,s,l)}),Ch=ns(function(n,s,l,h){Xo(n,s,l,h)}),Yx=Ai(function(n,s){var l={};if(n==null)return l;var h=!1;s=kt(s,function(b){return b=Zi(b,n),h||(h=b.length>1),b}),pi(n,ql(n),l),h&&(l=Yn(l,_|v|x,z_));for(var S=s.length;S--;)Gl(l,s[S]);return l});function qx(n,s){return Lh(n,oa(Xe(s)))}var $x=Ai(function(n,s){return n==null?{}:M_(n,s)});function Lh(n,s){if(n==null)return{};var l=kt(ql(n),function(h){return[h]});return s=Xe(s),Mf(n,l,function(h,S){return s(h,S[0])})}function Kx(n,s,l){s=Zi(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var b=n==null?t:n[mi(s[h])];b===t&&(h=S,b=l),n=Ri(b)?b.call(n):b}return n}function Zx(n,s,l){return n==null?n:Zs(n,s,l)}function jx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Zs(n,s,l,h)}var Ph=Vf(sn),Ih=Vf(wn);function Jx(n,s,l){var h=at(n),S=h||Ji(n)||ss(n);if(s=Xe(s,4),l==null){var b=n&&n.constructor;S?l=h?new b:[]:Vt(n)?l=Ri(b)?ts(Uo(n)):{}:l={}}return(S?Vn:di)(n,function(D,G,k){return s(l,D,G,k)}),l}function Qx(n,s){return n==null?!0:Gl(n,s)}function eS(n,s,l){return n==null?n:Af(n,s,kl(l))}function tS(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Af(n,s,kl(l),h)}function os(n){return n==null?[]:Sl(n,sn(n))}function nS(n){return n==null?[]:Sl(n,wn(n))}function iS(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Kn(l),l=l===l?l:0),s!==t&&(s=Kn(s),s=s===s?s:0),xr(Kn(n),s,l)}function rS(n,s,l){return s=Ci(s),l===t?(l=s,s=0):l=Ci(l),n=Kn(n),u_(n,s,l)}function sS(n,s,l){if(l&&typeof l!="boolean"&&vn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ci(n),s===t?(s=n,n=0):s=Ci(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=tf();return hn(n+S*(s-n+Fm("1e-"+((S+"").length-1))),s)}return Ol(n,s)}var oS=is(function(n,s,l){return s=s.toLowerCase(),n+(l?Dh(s):s)});function Dh(n){return cc(Rt(n).toLowerCase())}function Uh(n){return n=Rt(n),n&&n.replace(Le,Zm).replace(wm,"")}function aS(n,s,l){n=Rt(n),s=Dn(s);var h=n.length;l=l===t?h:xr(ht(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function lS(n){return n=Rt(n),n&&xe.test(n)?n.replace(Me,jm):n}function cS(n){return n=Rt(n),n&&rn.test(n)?n.replace(Lt,"\\$&"):n}var uS=is(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),fS=is(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),hS=Ff("toLowerCase");function dS(n,s,l){n=Rt(n),s=ht(s);var h=s?Zr(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return jo(Bo(S),l)+n+jo(Fo(S),l)}function pS(n,s,l){n=Rt(n),s=ht(s);var h=s?Zr(n):0;return s&&h<s?n+jo(s-h,l):n}function mS(n,s,l){n=Rt(n),s=ht(s);var h=s?Zr(n):0;return s&&h<s?jo(s-h,l)+n:n}function gS(n,s,l){return l||s==null?s=0:s&&(s=+s),yg(Rt(n).replace(Qn,""),s||0)}function _S(n,s,l){return(l?vn(n,s,l):s===t)?s=1:s=ht(s),Fl(Rt(n),s)}function vS(){var n=arguments,s=Rt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var xS=is(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function SS(n,s,l){return l&&typeof l!="number"&&vn(n,s,l)&&(s=l=t),l=l===t?Se:l>>>0,l?(n=Rt(n),n&&(typeof s=="string"||s!=null&&!oc(s))&&(s=Dn(s),!s&&Kr(n))?ji(ti(n),0,l):n.split(s,l)):[]}var MS=is(function(n,s,l){return n+(l?" ":"")+cc(s)});function ES(n,s,l){return n=Rt(n),l=l==null?0:xr(ht(l),0,n.length),s=Dn(s),n.slice(l,l+s.length)==s}function yS(n,s,l){var h=y.templateSettings;l&&vn(n,s,l)&&(s=t),n=Rt(n),s=ca({},s,h,Wf);var S=ca({},s.imports,h.imports,Wf),b=sn(S),D=Sl(S,b),G,k,re=0,ae=s.interpolate||Be,de="__p += '",Ae=El((s.escape||Be).source+"|"+ae.source+"|"+(ae===bt?al:Be).source+"|"+(s.evaluate||Be).source+"|$","g"),Ge="//# sourceURL="+(Pt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Im+"]")+`
`;n.replace(Ae,function(Ke,vt,Mt,Nn,xn,On){return Mt||(Mt=Nn),de+=n.slice(re,On).replace(Ye,Jm),vt&&(G=!0,de+=`' +
__e(`+vt+`) +
'`),xn&&(k=!0,de+=`';
`+xn+`;
__p += '`),Mt&&(de+=`' +
((__t = (`+Mt+`)) == null ? '' : __t) +
'`),re=On+Ke.length,Ke}),de+=`';
`;var $e=Pt.call(s,"variable")&&s.variable;if(!$e)de=`with (obj) {
`+de+`
}
`;else if(Eo.test($e))throw new rt(c);de=(k?de.replace(I,""):de).replace(le,"$1").replace(Ne,"$1;"),de="function("+($e||"obj")+`) {
`+($e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(k?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+de+`return __p
}`;var pt=Oh(function(){return wt(b,Ge+"return "+de).apply(t,D)});if(pt.source=de,sc(pt))throw pt;return pt}function TS(n){return Rt(n).toLowerCase()}function bS(n){return Rt(n).toUpperCase()}function AS(n,s,l){if(n=Rt(n),n&&(l||s===t))return Wu(n);if(!n||!(s=Dn(s)))return n;var h=ti(n),S=ti(s),b=Xu(h,S),D=Yu(h,S)+1;return ji(h,b,D).join("")}function wS(n,s,l){if(n=Rt(n),n&&(l||s===t))return n.slice(0,$u(n)+1);if(!n||!(s=Dn(s)))return n;var h=ti(n),S=Yu(h,ti(s))+1;return ji(h,0,S).join("")}function RS(n,s,l){if(n=Rt(n),n&&(l||s===t))return n.replace(Qn,"");if(!n||!(s=Dn(s)))return n;var h=ti(n),S=Xu(h,ti(s));return ji(h,S).join("")}function CS(n,s){var l=T,h=O;if(Vt(s)){var S="separator"in s?s.separator:S;l="length"in s?ht(s.length):l,h="omission"in s?Dn(s.omission):h}n=Rt(n);var b=n.length;if(Kr(n)){var D=ti(n);b=D.length}if(l>=b)return n;var G=l-Zr(h);if(G<1)return h;var k=D?ji(D,0,G).join(""):n.slice(0,G);if(S===t)return k+h;if(D&&(G+=k.length-G),oc(S)){if(n.slice(G).search(S)){var re,ae=k;for(S.global||(S=El(S.source,Rt(yo.exec(S))+"g")),S.lastIndex=0;re=S.exec(ae);)var de=re.index;k=k.slice(0,de===t?G:de)}}else if(n.indexOf(Dn(S),G)!=G){var Ae=k.lastIndexOf(S);Ae>-1&&(k=k.slice(0,Ae))}return k+h}function LS(n){return n=Rt(n),n&&q.test(n)?n.replace(B,sg):n}var PS=is(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),cc=Ff("toUpperCase");function Nh(n,s,l){return n=Rt(n),s=l?t:s,s===t?eg(n)?lg(n):Xm(n):n.match(s)||[]}var Oh=_t(function(n,s){try{return Pn(n,t,s)}catch(l){return sc(l)?l:new rt(l)}}),IS=Ai(function(n,s){return Vn(s,function(l){l=mi(l),Ti(n,l,ic(n[l],n))}),n});function DS(n){var s=n==null?0:n.length,l=Xe();return n=s?kt(n,function(h){if(typeof h[1]!="function")throw new Wn(u);return[l(h[0]),h[1]]}):[],_t(function(h){for(var S=-1;++S<s;){var b=n[S];if(Pn(b[0],this,h))return Pn(b[1],this,h)}})}function US(n){return s_(Yn(n,_))}function uc(n){return function(){return n}}function NS(n,s){return n==null||n!==n?s:n}var OS=Gf(),FS=Gf(!0);function Rn(n){return n}function fc(n){return mf(typeof n=="function"?n:Yn(n,_))}function BS(n){return _f(Yn(n,_))}function GS(n,s){return vf(n,Yn(s,_))}var zS=_t(function(n,s){return function(l){return $s(l,n,s)}}),HS=_t(function(n,s){return function(l){return $s(n,l,s)}});function hc(n,s,l){var h=sn(s),S=Wo(s,h);l==null&&!(Vt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=Wo(s,sn(s)));var b=!(Vt(l)&&"chain"in l)||!!l.chain,D=Ri(n);return Vn(S,function(G){var k=s[G];n[G]=k,D&&(n.prototype[G]=function(){var re=this.__chain__;if(b||re){var ae=n(this.__wrapped__),de=ae.__actions__=bn(this.__actions__);return de.push({func:k,args:arguments,thisArg:n}),ae.__chain__=re,ae}return k.apply(n,Xi([this.value()],arguments))})}),n}function kS(){return an._===this&&(an._=pg),this}function dc(){}function VS(n){return n=ht(n),_t(function(s){return xf(s,n)})}var WS=Wl(kt),XS=Wl(Gu),YS=Wl(ml);function Fh(n){return jl(n)?gl(mi(n)):E_(n)}function qS(n){return function(s){return n==null?t:Sr(n,s)}}var $S=Hf(),KS=Hf(!0);function pc(){return[]}function mc(){return!1}function ZS(){return{}}function jS(){return""}function JS(){return!0}function QS(n,s){if(n=ht(n),n<1||n>te)return[];var l=Se,h=hn(n,Se);s=Xe(s),n-=Se;for(var S=xl(h,s);++l<n;)s(l);return S}function eM(n){return at(n)?kt(n,mi):Un(n)?[n]:bn(ih(Rt(n)))}function tM(n){var s=++hg;return Rt(n)+s}var nM=Zo(function(n,s){return n+s},0),iM=Xl("ceil"),rM=Zo(function(n,s){return n/s},1),sM=Xl("floor");function oM(n){return n&&n.length?Vo(n,Rn,Ll):t}function aM(n,s){return n&&n.length?Vo(n,Xe(s,2),Ll):t}function lM(n){return ku(n,Rn)}function cM(n,s){return ku(n,Xe(s,2))}function uM(n){return n&&n.length?Vo(n,Rn,Ul):t}function fM(n,s){return n&&n.length?Vo(n,Xe(s,2),Ul):t}var hM=Zo(function(n,s){return n*s},1),dM=Xl("round"),pM=Zo(function(n,s){return n-s},0);function mM(n){return n&&n.length?vl(n,Rn):0}function gM(n,s){return n&&n.length?vl(n,Xe(s,2)):0}return y.after=B0,y.ary=ph,y.assign=bx,y.assignIn=Rh,y.assignInWith=ca,y.assignWith=Ax,y.at=wx,y.before=mh,y.bind=ic,y.bindAll=IS,y.bindKey=gh,y.castArray=Z0,y.chain=fh,y.chunk=sv,y.compact=ov,y.concat=av,y.cond=DS,y.conforms=US,y.constant=uc,y.countBy=m0,y.create=Rx,y.curry=_h,y.curryRight=vh,y.debounce=xh,y.defaults=Cx,y.defaultsDeep=Lx,y.defer=G0,y.delay=z0,y.difference=lv,y.differenceBy=cv,y.differenceWith=uv,y.drop=fv,y.dropRight=hv,y.dropRightWhile=dv,y.dropWhile=pv,y.fill=mv,y.filter=_0,y.flatMap=S0,y.flatMapDeep=M0,y.flatMapDepth=E0,y.flatten=ah,y.flattenDeep=gv,y.flattenDepth=_v,y.flip=H0,y.flow=OS,y.flowRight=FS,y.fromPairs=vv,y.functions=Fx,y.functionsIn=Bx,y.groupBy=y0,y.initial=Sv,y.intersection=Mv,y.intersectionBy=Ev,y.intersectionWith=yv,y.invert=zx,y.invertBy=Hx,y.invokeMap=b0,y.iteratee=fc,y.keyBy=A0,y.keys=sn,y.keysIn=wn,y.map=ia,y.mapKeys=Vx,y.mapValues=Wx,y.matches=BS,y.matchesProperty=GS,y.memoize=sa,y.merge=Xx,y.mergeWith=Ch,y.method=zS,y.methodOf=HS,y.mixin=hc,y.negate=oa,y.nthArg=VS,y.omit=Yx,y.omitBy=qx,y.once=k0,y.orderBy=w0,y.over=WS,y.overArgs=V0,y.overEvery=XS,y.overSome=YS,y.partial=rc,y.partialRight=Sh,y.partition=R0,y.pick=$x,y.pickBy=Lh,y.property=Fh,y.propertyOf=qS,y.pull=wv,y.pullAll=ch,y.pullAllBy=Rv,y.pullAllWith=Cv,y.pullAt=Lv,y.range=$S,y.rangeRight=KS,y.rearg=W0,y.reject=P0,y.remove=Pv,y.rest=X0,y.reverse=tc,y.sampleSize=D0,y.set=Zx,y.setWith=jx,y.shuffle=U0,y.slice=Iv,y.sortBy=F0,y.sortedUniq=Gv,y.sortedUniqBy=zv,y.split=SS,y.spread=Y0,y.tail=Hv,y.take=kv,y.takeRight=Vv,y.takeRightWhile=Wv,y.takeWhile=Xv,y.tap=o0,y.throttle=q0,y.thru=na,y.toArray=bh,y.toPairs=Ph,y.toPairsIn=Ih,y.toPath=eM,y.toPlainObject=wh,y.transform=Jx,y.unary=$0,y.union=Yv,y.unionBy=qv,y.unionWith=$v,y.uniq=Kv,y.uniqBy=Zv,y.uniqWith=jv,y.unset=Qx,y.unzip=nc,y.unzipWith=uh,y.update=eS,y.updateWith=tS,y.values=os,y.valuesIn=nS,y.without=Jv,y.words=Nh,y.wrap=K0,y.xor=Qv,y.xorBy=e0,y.xorWith=t0,y.zip=n0,y.zipObject=i0,y.zipObjectDeep=r0,y.zipWith=s0,y.entries=Ph,y.entriesIn=Ih,y.extend=Rh,y.extendWith=ca,hc(y,y),y.add=nM,y.attempt=Oh,y.camelCase=oS,y.capitalize=Dh,y.ceil=iM,y.clamp=iS,y.clone=j0,y.cloneDeep=Q0,y.cloneDeepWith=ex,y.cloneWith=J0,y.conformsTo=tx,y.deburr=Uh,y.defaultTo=NS,y.divide=rM,y.endsWith=aS,y.eq=ii,y.escape=lS,y.escapeRegExp=cS,y.every=g0,y.find=v0,y.findIndex=sh,y.findKey=Px,y.findLast=x0,y.findLastIndex=oh,y.findLastKey=Ix,y.floor=sM,y.forEach=hh,y.forEachRight=dh,y.forIn=Dx,y.forInRight=Ux,y.forOwn=Nx,y.forOwnRight=Ox,y.get=ac,y.gt=nx,y.gte=ix,y.has=Gx,y.hasIn=lc,y.head=lh,y.identity=Rn,y.includes=T0,y.indexOf=xv,y.inRange=rS,y.invoke=kx,y.isArguments=yr,y.isArray=at,y.isArrayBuffer=rx,y.isArrayLike=An,y.isArrayLikeObject=$t,y.isBoolean=sx,y.isBuffer=Ji,y.isDate=ox,y.isElement=ax,y.isEmpty=lx,y.isEqual=cx,y.isEqualWith=ux,y.isError=sc,y.isFinite=fx,y.isFunction=Ri,y.isInteger=Mh,y.isLength=aa,y.isMap=Eh,y.isMatch=hx,y.isMatchWith=dx,y.isNaN=px,y.isNative=mx,y.isNil=_x,y.isNull=gx,y.isNumber=yh,y.isObject=Vt,y.isObjectLike=Xt,y.isPlainObject=eo,y.isRegExp=oc,y.isSafeInteger=vx,y.isSet=Th,y.isString=la,y.isSymbol=Un,y.isTypedArray=ss,y.isUndefined=xx,y.isWeakMap=Sx,y.isWeakSet=Mx,y.join=Tv,y.kebabCase=uS,y.last=$n,y.lastIndexOf=bv,y.lowerCase=fS,y.lowerFirst=hS,y.lt=Ex,y.lte=yx,y.max=oM,y.maxBy=aM,y.mean=lM,y.meanBy=cM,y.min=uM,y.minBy=fM,y.stubArray=pc,y.stubFalse=mc,y.stubObject=ZS,y.stubString=jS,y.stubTrue=JS,y.multiply=hM,y.nth=Av,y.noConflict=kS,y.noop=dc,y.now=ra,y.pad=dS,y.padEnd=pS,y.padStart=mS,y.parseInt=gS,y.random=sS,y.reduce=C0,y.reduceRight=L0,y.repeat=_S,y.replace=vS,y.result=Kx,y.round=dM,y.runInContext=H,y.sample=I0,y.size=N0,y.snakeCase=xS,y.some=O0,y.sortedIndex=Dv,y.sortedIndexBy=Uv,y.sortedIndexOf=Nv,y.sortedLastIndex=Ov,y.sortedLastIndexBy=Fv,y.sortedLastIndexOf=Bv,y.startCase=MS,y.startsWith=ES,y.subtract=pM,y.sum=mM,y.sumBy=gM,y.template=yS,y.times=QS,y.toFinite=Ci,y.toInteger=ht,y.toLength=Ah,y.toLower=TS,y.toNumber=Kn,y.toSafeInteger=Tx,y.toString=Rt,y.toUpper=bS,y.trim=AS,y.trimEnd=wS,y.trimStart=RS,y.truncate=CS,y.unescape=LS,y.uniqueId=tM,y.upperCase=PS,y.upperFirst=cc,y.each=hh,y.eachRight=dh,y.first=lh,hc(y,function(){var n={};return di(y,function(s,l){Pt.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),Vn(["drop","take"],function(n,s){St.prototype[n]=function(l){l=l===t?1:en(ht(l),0);var h=this.__filtered__&&!s?new St(this):this.clone();return h.__filtered__?h.__takeCount__=hn(l,h.__takeCount__):h.__views__.push({size:hn(l,Se),type:n+(h.__dir__<0?"Right":"")}),h},St.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Vn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==z||l==ne;St.prototype[n]=function(S){var b=this.clone();return b.__iteratees__.push({iteratee:Xe(S,3),type:l}),b.__filtered__=b.__filtered__||h,b}}),Vn(["head","last"],function(n,s){var l="take"+(s?"Right":"");St.prototype[n]=function(){return this[l](1).value()[0]}}),Vn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");St.prototype[n]=function(){return this.__filtered__?new St(this):this[l](1)}}),St.prototype.compact=function(){return this.filter(Rn)},St.prototype.find=function(n){return this.filter(n).head()},St.prototype.findLast=function(n){return this.reverse().find(n)},St.prototype.invokeMap=_t(function(n,s){return typeof n=="function"?new St(this):this.map(function(l){return $s(l,n,s)})}),St.prototype.reject=function(n){return this.filter(oa(Xe(n)))},St.prototype.slice=function(n,s){n=ht(n);var l=this;return l.__filtered__&&(n>0||s<0)?new St(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ht(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},St.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},St.prototype.toArray=function(){return this.take(Se)},di(St.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=y[h?"take"+(s=="last"?"Right":""):s],b=h||/^find/.test(s);S&&(y.prototype[s]=function(){var D=this.__wrapped__,G=h?[1]:arguments,k=D instanceof St,re=G[0],ae=k||at(D),de=function(vt){var Mt=S.apply(y,Xi([vt],G));return h&&Ae?Mt[0]:Mt};ae&&l&&typeof re=="function"&&re.length!=1&&(k=ae=!1);var Ae=this.__chain__,Ge=!!this.__actions__.length,$e=b&&!Ae,pt=k&&!Ge;if(!b&&ae){D=pt?D:new St(this);var Ke=n.apply(D,G);return Ke.__actions__.push({func:na,args:[de],thisArg:t}),new Xn(Ke,Ae)}return $e&&pt?n.apply(this,G):(Ke=this.thru(de),$e?h?Ke.value()[0]:Ke.value():Ke)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Ro[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var b=this.value();return s.apply(at(b)?b:[],S)}return this[l](function(D){return s.apply(at(D)?D:[],S)})}}),di(St.prototype,function(n,s){var l=y[s];if(l){var h=l.name+"";Pt.call(es,h)||(es[h]=[]),es[h].push({name:s,func:l})}}),es[Ko(t,p).name]=[{name:"wrapper",func:t}],St.prototype.clone=Lg,St.prototype.reverse=Pg,St.prototype.value=Ig,y.prototype.at=a0,y.prototype.chain=l0,y.prototype.commit=c0,y.prototype.next=u0,y.prototype.plant=h0,y.prototype.reverse=d0,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=p0,y.prototype.first=y.prototype.head,Hs&&(y.prototype[Hs]=f0),y},jr=cg();mr?((mr.exports=jr)._=jr,fl._=jr):an._=jr}).call(lo)})(Za,Za.exports);var Zc=Za.exports;const yR={dotSize:12,genePercentile:.99,cameraPositionZ:300,cameraPositionY:100,cameraPositionX:300},Jn=new Os(yR);function jc(r){const t={...Jn.getValue(),dotSize:r};Jn.next(t)}function yp(r){const e=Jn.getValue(),t=r*.01,i={...e,genePercentile:t};Jn.next(i)}const TR=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},bR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),AR(t)})};function AR(r){const e=document.getElementById("cellNotFound");let t=xt.value.listPalette;r?(t=xt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),ja(t)):ja(xt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function ja(r){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,ke.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,m,_,x=((E,A)=>{for(const g in E)if(E[g].includes(A))return g;return!1})(xt.value.groups,o);if(x){const E=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(E),m=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,m=document.createElement("label"),m.htmlFor=x,m.setAttribute("for",E),m.style.color="white",m.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=E,m.appendChild(d),m.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(m),f.appendChild(_),t.appendChild(f));const A=document.createElement("li");A.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",E=>{console.log(E),wR(o,E.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=ke.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),mo(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function wR(r,e){let t=ke.value.selectedCelltypes.map(i=>i);e?(t.push(r),mo(t)):(t=t.filter(i=>i!==r),mo(t))}const RR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{mo([]),ja(xt.value.listPalette),cellTextbox.value=""})},CR=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",ke.value.selectedCelltypes.length!==0?ke.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=xt.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function zr(r,e,t=!1){let i="";if(t==!0?(console.log("ATACATACATACATACATACATACATAC"),i=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_atac.csv`)):(console.log("MATRIXMATRIXMATRIXMATRIXMATRIXMATRIX"),i=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${r}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`)),!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();if(o===void 0||o.gene_values==null)return"[]";let a=o.gene_values.split(",").filter(f=>f!=="");const c=["clusters","clusters_pal","genes","hierarchical_clusters"].includes(r);return console.log(r),console.log(typeof r),console.log(c),c==!0?(a.shift(),console.log(a),a):(r=="clusters"&&console.log("sini bang"),a.shift(),console.log("float"),a.map(d=>parseFloat(d)))}function Tp(r){return zr(r,xt.value.prefix)}function bp(r){return zr(r,xt.value.prefix,!0)}function LR(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function Na(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:LR(r,e)}function Oa(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Fa(r,e){return r.map(t=>Math.min(t/e,1))}const PR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),IR(t)})};function IR(r){const e=document.getElementById("geneNotFound");if(r){const t=xt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Ja(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Ja(xt.value.genes.slice(0,1e3))}function Ja(r){const e=document.getElementById("geneContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",ke.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(ke.value.selectedGenes.length>=ke.value.mode&&(u.target.checked=!1),ke.value.mode===1&&ke.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(ke.value.selectedGenes[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(go([]),u.target.checked=!0)}mm(t,u.target.checked)})})}function DR(){const r=document.getElementById("modeButton");r.value=ke.value.mode,r.value==="1"?(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")):(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")),r.onclick=()=>{let e=r.value==="1";e?(r.innerText="Two Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?2:1,MR(e?2:1),e?gm():document.getElementById("selectedContainer").innerHTML=""}}function mm(r,e){let t=ke.value.selectedGenes.map(i=>i);e?(t.push(r),go(t)):(t=t.filter(i=>i!==r),go(t))}const UR=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{go([]),Ja(xt.value.genes.slice(0,1e3)),geneTextbox.value=""})},NR=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",ke.value.selectedGenes.length!==0?ke.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");ke.value.selectedGenes.length===1?i.style.color="white":i.style.color=t===0?"green":"magenta",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},gm=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",ke.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",ke.value.selectedGenes.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#geneContainer [value=${CSS.escape(ke.value.selectedGenes[0])}]`);u!==null&&(u.checked=!1),mm(t.value,!1)})}),ke.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}},OR=()=>{};function FR(r){const e=document.getElementById("atacNotFound");if(r){const t=xt.value.atacs.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Qa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Qa(xt.value.atacs.slice(0,1e3))}function Qa(r){const e=document.getElementById("atacContainer");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",ke.value.selectedAtacs.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("div");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(ke.value.selectedAtacs.length>=ke.value.mode&&(u.target.checked=!1),ke.value.mode===1&&ke.value.selectedAtacs.length===1){const c=document.querySelector(`[value=${CSS.escape(ke.value.selectedAtacs[0])}]`);c&&(c.checked=!1),(c===null||c.value!==u.target.value)&&(Ka([]),u.target.checked=!0)}_m(t,u.target.checked)})})}function _m(r,e){let t=ke.value.selectedAtacs.map(i=>i);e?(t.push(r),Ka(t)):(t=t.filter(i=>i!==r),Ka(t))}const BR=()=>{document.getElementById("atacClearButton").addEventListener("click",()=>{Ka([]),Qa(xt.value.atacs.slice(0,1e3)),atacTextbox.value=""})},GR=()=>{document.getElementById("atacEnterButton").addEventListener("click",()=>{console.log("entered clicked");const t=document.getElementById("atacTextbox").value.toLowerCase();FR(t)})},zR=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",ke.value.selectedGenes.length!==0?ke.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"magenta":"green",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No atac filters selected"},HR=()=>{const r=document.getElementById("selectedContainer");if(r.innerHTML="",ke.value.selectedAtacs.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",ke.value.selectedAtacs.includes(e)&&(t.checked=!0);const i=document.createElement("label");i.htmlFor="select-"+e,i.textContent=e,i.style.color="white";const o=document.createElement("div");o.appendChild(t),o.appendChild(i),o.appendChild(document.createElement("br")),r.appendChild(o),t.addEventListener("change",a=>{const u=document.querySelector(`#atacContainer [value=${CSS.escape(ke.value.selectedAtacs[0])}]`);u!==null&&(u.checked=!1),_m(t.value,!1)})}),ke.value.selectedAtacs.length>0){const e=document.createElement("p");e.innerText="Selected atacs",e.style.color="white",e.style.margin=0,r.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",r.appendChild(t)}},co=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)},kR=new URL(window.location),Zt=new URLSearchParams(kR.search);class VR{constructor(e){Gh(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=dm.value.scene,this.camera=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new xu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=Jn.value.cameraPositionZ,this.camera.position.y=Jn.value.cameraPositionY,this.camera.position.x=Jn.value.cameraPositionX,this.controls=new pm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){qa.pipe(Oi(e=>e.items),Fi((e,t)=>Zc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),xt.pipe(Oi(e=>e.prefix),Fi((e,t)=>Zc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e);const t=document.getElementById("dropdownMenuButton");t.innerText=xt.value.prefix}),$a.pipe(Oi(e=>e.isLoading),Fi((e,t)=>Zc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),TR($a.value.isLoading)}),ke.pipe(Oi(e=>e.selectedCelltypes),Fi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),jn(!0),await this.updateInstancedMesh(),jn(!1),CR(),ke.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(ke.value.selectedCelltypes));Zt.has("celltype")?Zt.set("celltype",t):Zt.append("celltype",t)}else Zt.delete("celltype");co(Zt)}),ke.pipe(Oi(e=>e.selectedGenes),Fi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),ke.value.mode===2&&gm(),jn(!0),console.log("ANJINGNGINGIGNGING"),await this.updateInstancedMesh(),NR(),ke.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(ke.value.selectedGenes));Zt.append("gene",t),Zt.has("gene")?Zt.set("gene",t):Zt.append("gene",t)}else Zt.delete("gene");co(Zt),jn(!1)}),ke.pipe(Oi(e=>e.selectedAtacs),Fi((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected atacs changed:",e),ke.value.mode===2&&HR(),jn(!0),await this.updateInstancedMesh(),jn(!1),zR(),ke.value.selectedAtacs.length>0){const t=encodeURIComponent(JSON.stringify(ke.value.selectedAtacs));Zt.append("atac",t),Zt.has("atac")?Zt.set("atac",t):Zt.append("atac",t)}else Zt.delete("atac");co(Zt)}),ke.pipe(Oi(e=>e.mode),Fi()).subscribe(e=>{console.log("Selected genes changed:",e),Zt.has("mode")?Zt.set("mode",e):Zt.append("mode",e),co(Zt)}),Jn.pipe(Oi(e=>e.dotSize),Fi()).subscribe(async e=>{console.log("Dot Size Changed:",e),jn(!0),await this.updateInstancedMesh(),jn(!1)}),Jn.pipe(Oi(e=>e.genePercentile),Fi()).subscribe(async e=>{console.log("Gene Percentile",e),jn(!0),await this.updateInstancedMesh(),jn(!1)})}async updateInstancedMesh(){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let e=xt.value.pallete,t=qa.value.items;const i=new Mu(.1,16,16),o=new Su(.1,32,32),a=new _u,u=t.length;console.log("Count",u),this.instancedMesh=new fp(i,a,u),this.instancedMeshUmap=new fp(o,a,u);const c=new yn,f=new yn;let d,m,_,v=200,x=.5,E=ke.value.selectedCelltypes,A=ke.value.selectedGenes,g=ke.value.selectedAtacs,p=Jn.value.dotSize,U=Math.floor(p/5),w=Jn.value.genePercentile,P=Jn.value.genePercentile;if(A.length>0)try{let F=await Tp(A[0]);if(A.length==2){let L=await Tp(A[1]),V=Oa(L,w);_=Fa(L,V)}let N=Oa(F,w);m=Fa(F,N)}catch(F){console.error("Error fetching data:",F)}if(g.length>0)try{let F=await bp(g[0]);if(g.length==2){let L=await bp(g[1]),V=Oa(L,P);_=Fa(L,V)}let N=Oa(F,P);m=Fa(F,N)}catch(F){console.error("Error fetching data:",F)}for(let F=0;F<u;F++){if(A.length>0)if(E.length===0||E.includes(t[F].clusters)){let L,V;_?(L=Na(m[F],_[F]),V=(m[F]+_[F])/2*p+p/5):(L=Na(m[F]),V=m[F]*p+p/5),d=new Tt(L),c.scale.set(V,V,V),f.scale.set(V*x,V*x,V*x)}else d=new Tt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else if(g.length>0)if(E.length===0||E.includes(t[F].clusters)){let L,V;_?(L=Na(m[F],_[F]),V=(m[F]+_[F])/2*p+p/5):(L=Na(m[F]),V=m[F]*p+p/5),d=new Tt(L),c.scale.set(V,V,V),f.scale.set(V*x,V*x,V*x)}else d=new Tt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else E.includes(t[F].clusters)||E.length==0?(d=new Tt(e[t[F].clusters]),c.scale.set(p,p,p),f.scale.set(p*x,p*x,p*x)):(d=new Tt("#5e5e5e"),c.scale.set(U,U,U),f.scale.set(U*x,U*x,U*x));c.position.set(t[F].X_spatial0_norm*v,t[F].X_spatial1_norm*-1*v,t[F].X_spatial2_norm*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(F,c.matrix),this.instancedMesh.setColorAt(F,d);let N=1e4;xt.value.prefix=="75pe"?f.position.set(t[F].X_umap0_norm*80+N,t[F].X_umap1_norm*80,10):f.position.set(t[F].X_umap0_norm*200+N-25,t[F].X_umap1_norm*200,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(F,f.matrix),this.instancedMeshUmap.setColorAt(F,d)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const xo=xt.value.prefix;async function WR(){const r=xt.value.palleteColumn;try{const e=await zr(r,xo);console.log(e);let t={};e.forEach(i=>{let[o,a]=i.split(":");o=o.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[o]=a}),dR(t)}catch(e){console.error("Failed to load items:",e)}}async function XR(){try{const r=await zr("genes",xo);pR(r)}catch(r){console.error("Failed to load items:",r)}}async function YR(){try{const r=await zr("genes",xo,!0);console.log("ATACCC"),mR(r)}catch(r){console.error("Failed to load items:",r)}}async function qR(){const r=xt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>zr(o,xo)));console.log("Load Results",i),r.forEach((o,a)=>{e[o]=i[a]}),console.log("trfdata",e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}uR(t)}catch(i){console.error("Error combining data:",i)}}async function $R(){try{const r=await zr("hierarchical_clusters",xo);gR(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}function KR(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}function vm(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",i.title="Drag to resize UMAP.",e.appendChild(t),e.appendChild(i),r.appendChild(e);let o=!1,a=0,u=0;t.addEventListener("mousedown",N=>{o=!0,a=N.offsetX,u=N.offsetY});const c=()=>{r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const N=document.getElementsByClassName("navbar")[0].offsetHeight;r.offsetTop<N&&(r.style.top=`${N/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=N&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${N/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-N}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),p.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,g.aspect=r.offsetWidth/r.offsetHeight,g.updateProjectionMatrix(),p.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",N=>{o&&(r.style.left=`${(N.clientX-a)/window.innerWidth*100}%`,r.style.top=`${(N.clientY-u)/window.innerHeight*100}%`,c())}),document.addEventListener("mouseup",()=>{o=!1}),i.addEventListener("mousedown",f);function f(N){window.addEventListener("mousemove",d),window.addEventListener("mouseup",m),N.preventDefault()}function d(N){i.style.backgroundColor="red";const L=document.getElementsByClassName("navbar")[0].offsetHeight;let V=N.clientX<0?0:N.clientX,pe=N.clientY<L?L:N.clientY;const T=100,O=100;r.offsetWidth==T&&V>r.offsetLeft&&(V=r.offsetLeft),r.offsetHeight==O&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-V),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,T)}px`,r.style.height=`${Math.max(fe,O)}px`,me>T&&(r.style.left=`${V}px`),fe>O&&(r.style.top=`${pe}px`),g.aspect=me/fe,g.updateProjectionMatrix(),p.setSize(me,fe)}function m(){i.style.backgroundColor="#ffe432",window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",m)}t.addEventListener("touchstart",N=>{o=!0,a=N.changedTouches[0].clientX,u=N.changedTouches[0].clientY}),document.addEventListener("touchmove",N=>{if(o){let L=N.changedTouches[0].clientX;L+r.offsetWidth>window.innerWidth&&(L=window.innerWidth-r.offsetWidth),r.style.left=`${L/window.innerWidth*100}%`,r.style.top=`${N.changedTouches[0].clientY/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{o=!1}),i.addEventListener("touchstart",_);function _(N){window.addEventListener("touchmove",v),window.addEventListener("touchend",x),N.preventDefault()}function v(N){i.style.backgroundColor="red";const L=document.getElementsByClassName("navbar")[0].offsetHeight;let V=N.changedTouches[0].clientX<0?0:N.changedTouches[0].clientX,pe=N.changedTouches[0].clientY<L?L:N.changedTouches[0].clientY;const T=100,O=100;r.offsetWidth==T&&V>r.offsetLeft&&(V=r.offsetLeft),r.offsetHeight==O&&pe>r.offsetTop&&(pe=r.offsetTop);const me=r.offsetWidth+(r.offsetLeft-V),fe=r.offsetHeight+(r.offsetTop-pe);r.style.width=`${Math.max(me,T)}px`,r.style.height=`${Math.max(fe,O)}px`,me>T&&(r.style.left=`${V}px`),fe>O&&(r.style.top=`${pe}px`),g.aspect=me/fe,g.updateProjectionMatrix(),p.setSize(me,fe)}function x(N){i.style.backgroundColor="#ffe432",window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}const E=document.createElement("div");E.id="overlayScene",E.style.width="100%",E.style.height="100%",r.appendChild(E);const A=dm.value.scene,g=new Gn(75,E.offsetWidth/E.offsetHeight,.1,1e3),p=new xu,U=window.innerWidth*.25,w=window.innerHeight*.5;g.aspect=U/w,g.updateProjectionMatrix(),p.setSize(U,w),p.render(A,g),E.appendChild(p.domElement),g.position.x=1e4,g.position.z=150;const P=new pm(g,p.domElement);P.enableRotate=!1,P.mouseButtons={LEFT:Gi.PAN,MIDDLE:Gi.DOLLY,RIGHT:Gi.ROTATE},P.touches={ONE:sr.PAN,TWO:sr.DOLLY_PAN},g.lookAt(1e4,0,10),P.target.set(1e4,0,10),P.update(),p.render(A,g);function F(){requestAnimationFrame(F),p.render(A,g)}return F(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(vm());document.addEventListener("DOMContentLoaded",async()=>{vm();const r=KR();document.body.appendChild(r),jn(!0);try{await WR(),await qR(),await XR(),await YR(),await $R();const e=document.body;new VR(e);const t=new URL(window.location),i=new URLSearchParams(t.search);if(i.has("celltype")){const a=JSON.parse(decodeURIComponent(i.get("celltype"))).filter(u=>Object.keys(xt.value.pallete).includes(u));mo(a)}if(i.has("gene")){const a=JSON.parse(decodeURIComponent(i.get("gene"))).filter(u=>xt.value.genes.includes(u));go(a)}ja(xt.value.listPalette),RR(),bR(),Ja(xt.value.genes.slice(0,1e3)),UR(),PR(),Qa(xt.value.atacs.slice(0,1e3)),BR(),GR(),OR()}catch(e){console.error("Failed to load data:",e)}finally{jn(!1)}});function ZR(){const r=xt.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<r.length;t++){const i=document.createElement("p");i.innerHTML=`<a class="dropdown-item">${r[t]}</a>`,e.appendChild(i)}}function jR(){const r=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const i=new URLSearchParams("");i.append("prefix",e.item(t).innerText),co(i),e.item(t).innerText!==xt.value.prefix&&(r.innerHTML=xt.value.prefix,window.location.reload())})}const JR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),i=document.getElementById("toggleCellCheckbox"),o=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");i.addEventListener("click",()=>{console.log(r.style.display),r.style.display=r.style.display==="none"?"block":"none",console.log(r.style.display),i.style.backgroundColor="white",i.style.color="black",o.style.backgroundColor="rgb(97, 97, 97)",o.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),r.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},QR=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),i=document.getElementById("toggleCellCheckbox"),o=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");o.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",o.style.backgroundColor="white",o.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white",r.style.display==="block"&&(r.style.display="none"),t.style.display==="block"&&(t.style.display="none"),e.style.display==="none"&&(o.style.backgroundColor="rgb(97, 97, 97)",o.style.color="white")})},e1=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),i=document.getElementById("toggleCellCheckbox"),o=document.getElementById("toggleGeneRadio"),a=document.getElementById("toggleATACRadio");a.addEventListener("click",()=>{console.log("halo atac clicked"),t.style.display=t.style.display==="none"?"block":"none",a.style.backgroundColor="white",a.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",o.style.backgroundColor="rgb(97, 97, 97)",o.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="block"&&(e.style.display="none"),t.style.display==="none"&&(a.style.backgroundColor="rgb(97, 97, 97)",a.style.color="white")})},t1=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),d=document.getElementById("cellCheckbox"),m=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const E=()=>{const g=x.dataset.target,p=document.getElementById(g);p.style.display="block"},A=()=>{const g=x.dataset.target,p=document.getElementById(g);p.style.display="none"};["mouseenter"].forEach(g=>{x.addEventListener(g,function(){E()})}),["mouseleave"].forEach(g=>{x.addEventListener(g,function(){A()})})}),e.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),m.style.display==="block"&&(m.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.onchange=function(){o.value=parseFloat(this.value).toFixed(2),jc(parseFloat(this.value).toFixed(2))},i.addEventListener("mouseup",function(){o.value=parseFloat(this.value).toFixed(2),jc(parseFloat(this.value).toFixed(2))}),o.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),jc(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),m.style.display==="block"&&(m.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),yp(parseFloat(this.value).toFixed(2))}),f.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),yp(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{ZR(),jR()})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{JR(),QR(),e1(),t1(),DR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(r){r.style.visibility="visible"})},0);
