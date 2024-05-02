var dM=Object.defineProperty;var pM=(r,e,t)=>e in r?dM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ih=(r,e,t)=>(pM(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="162",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mM=0,Uh=1,gM=2,Tp=1,_M=2,Ui=3,cr=0,Rn=1,Fi=2,or=0,Ts=1,Nh=2,Fh=3,Oh=4,vM=5,Pr=100,xM=101,SM=102,Bh=103,zh=104,MM=200,EM=201,yM=202,bM=203,Yc=204,qc=205,TM=206,AM=207,wM=208,CM=209,RM=210,LM=211,PM=212,DM=213,IM=214,UM=0,NM=1,FM=2,Fa=3,OM=4,BM=5,zM=6,GM=7,Ap=0,HM=1,VM=2,ar=0,kM=1,WM=2,XM=3,YM=4,qM=5,KM=6,$M=7,wp=300,ws=301,Cs=302,Kc=303,$c=304,qa=306,Zc=1e3,ri=1001,jc=1002,ln=1003,Gh=1004,Qs=1005,Cn=1006,uc=1007,Ir=1008,lr=1009,ZM=1010,jM=1011,cu=1012,Cp=1013,sr=1014,mi=1015,fo=1016,Rp=1017,Lp=1018,Ur=1020,JM=1021,si=1023,QM=1024,eE=1025,Nr=1026,Rs=1027,Pp=1028,Dp=1029,tE=1030,Ip=1031,Up=1033,fc=33776,hc=33777,dc=33778,pc=33779,Hh=35840,Vh=35841,kh=35842,Wh=35843,Np=36196,Xh=37492,Yh=37496,qh=37808,Kh=37809,$h=37810,Zh=37811,jh=37812,Jh=37813,Qh=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,sd=37820,od=37821,mc=36492,ad=36494,ld=36495,nE=36283,cd=36284,ud=36285,fd=36286,iE=3200,rE=3201,sE=0,oE=1,rr="",di="srgb",hr="srgb-linear",uu="display-p3",Ka="display-p3-linear",Oa="linear",Bt="srgb",Ba="rec709",za="p3",ss=7680,hd=519,aE=512,lE=513,cE=514,Fp=515,uE=516,fE=517,hE=518,dE=519,dd=35044,pd="300 es",Jc=1035,Oi=2e3,Ga=2001;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let md=1234567;const ao=Math.PI/180,ho=180/Math.PI;function Ps(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function pE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function mE(r,e,t){return r!==e?(t-r)/(e-r):0}function lo(r,e,t){return(1-t)*r+t*e}function gE(r,e,t,i){return lo(r,e,1-Math.exp(-t*i))}function _E(r,e=1){return e-Math.abs(fu(r,e*2)-e)}function vE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function SE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ME(r,e){return r+Math.random()*(e-r)}function EE(r){return r*(.5-Math.random())}function yE(r){r!==void 0&&(md=r);let e=md+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bE(r){return r*ao}function TE(r){return r*ho}function Qc(r){return(r&r-1)===0&&r!==0}function AE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ha(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wE(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),x=a((i-e)/2),E=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*E,f*x,c*d);break;case"YXY":r.set(f*x,c*p,f*E,c*d);break;case"ZYZ":r.set(f*E,f*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Es(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const CE={DEG2RAD:ao,RAD2DEG:ho,generateUUID:Ps,clamp:mn,euclideanModulo:fu,mapLinear:pE,inverseLerp:mE,lerp:lo,damp:gE,pingpong:_E,smoothstep:vE,smootherstep:xE,randInt:SE,randFloat:ME,randFloatSpread:EE,seededRandom:yE,degToRad:bE,radToDeg:TE,isPowerOfTwo:Qc,ceilPowerOfTwo:AE,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:wE,normalize:xn,denormalize:Es};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,o,a,u,c,f,d){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],x=i[5],E=i[8],w=o[0],m=o[3],g=o[6],F=o[1],T=o[4],D=o[7],G=o[2],N=o[5],I=o[8];return a[0]=u*w+c*F+f*G,a[3]=u*m+c*T+f*N,a[6]=u*g+c*D+f*I,a[1]=d*w+p*F+_*G,a[4]=d*m+p*T+_*N,a[7]=d*g+p*D+_*I,a[2]=v*w+x*F+E*G,a[5]=v*m+x*T+E*N,a[8]=v*g+x*D+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,x=d*a-u*f,E=t*_+i*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*d-p*i)*w,e[2]=(c*i-o*u)*w,e[3]=v*w,e[4]=(p*t-o*f)*w,e[5]=(o*a-c*t)*w,e[6]=x*w,e[7]=(i*f-d*t)*w,e[8]=(u*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(gc.makeScale(e,t)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new pt;function Op(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RE(){const r=Va("canvas");return r.style.display="block",r}const gd={};function LE(r){r in gd||(gd[r]=!0,console.warn(r))}const _d=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vd=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ca={[hr]:{transfer:Oa,primaries:Ba,toReference:r=>r,fromReference:r=>r},[di]:{transfer:Bt,primaries:Ba,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Oa,primaries:za,toReference:r=>r.applyMatrix3(vd),fromReference:r=>r.applyMatrix3(_d)},[uu]:{transfer:Bt,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vd),fromReference:r=>r.applyMatrix3(_d).convertLinearToSRGB()}},PE=new Set([hr,Ka]),Pt={enabled:!0,_workingColorSpace:hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!PE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ca[e].toReference,o=ca[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ca[r].primaries},getTransfer:function(r){return r===rr?Oa:ca[r].transfer}};function As(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _c(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let os;class Bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Va("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=As(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DE=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(vc(o[u].image)):a.push(vc(o[u]))}else a=vc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IE=0;class Mn extends Or{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=ri,o=ri,a=Cn,u=Ir,c=si,f=lr,d=Mn.DEFAULT_ANISOTROPY,p=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Ps(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=wp;Mn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],x=f[5],E=f[9],w=f[2],m=f[6],g=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+m)<.1&&Math.abs(d+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(d+1)/2,D=(x+1)/2,G=(g+1)/2,N=(p+v)/4,I=(_+w)/4,K=(E+m)/4;return T>D&&T>G?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=N/i,a=I/i):D>G?D<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(D),i=N/o,a=K/o):G<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(G),i=I/a,o=K/a),this.set(i,o,a,t),this}let F=Math.sqrt((m-E)*(m-E)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(F)<.001&&(F=1),this.x=(m-E)/F,this.y=(_-w)/F,this.z=(v-p)/F,this.w=Math.acos((d+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UE extends Or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new Mn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends UE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gp extends Mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NE extends Mn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=ln,this.minFilter=ln,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],x=a[u+1],E=a[u+2],w=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=E,e[t+3]=w;return}if(_!==w||f!==v||d!==x||p!==E){let m=1-c;const g=f*v+d*x+p*E+_*w,F=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const G=Math.sqrt(T),N=Math.atan2(G,g*F);m=Math.sin(m*N)/G,c=Math.sin(c*N)/G}const D=c*F;if(f=f*m+v*D,d=d*m+x*D,p=p*m+E*D,_=_*m+w*D,m===1-c){const G=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=G,d*=G,p*=G,_*=G}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],x=a[u+2],E=a[u+3];return e[t]=c*E+p*_+f*x-d*v,e[t+1]=f*E+p*v+d*_-c*x,e[t+2]=d*E+p*x+c*v-f*_,e[t+3]=p*E-c*_-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),x=f(o/2),E=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_-v*x*E;break;case"YXZ":this._x=v*p*_+d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_+v*x*E;break;case"ZXY":this._x=v*p*_-d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_-v*x*E;break;case"ZYX":this._x=v*p*_-d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_+v*x*E;break;case"YZX":this._x=v*p*_+d*x*E,this._y=d*x*_+v*p*E,this._z=d*p*E-v*x*_,this._w=d*p*_-v*x*E;break;case"XZY":this._x=v*p*_-d*x*E,this._y=d*x*_-v*p*E,this._z=d*p*E+v*x*_,this._w=d*p*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(u-o)*x}else if(i>c&&i>_){const x=2*Math.sqrt(1+i-c-_);this._w=(p-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(a+d)/x}else if(c>_){const x=2*Math.sqrt(1+c-i-_);this._w=(a-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-c);this._w=(u-o)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new X,xd=new ur;class Br{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ti):ti.fromBufferAttribute(a,u),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),fa.subVectors(this.max,eo),as.subVectors(e.a,eo),ls.subVectors(e.b,eo),cs.subVectors(e.c,eo),Ki.subVectors(ls,as),$i.subVectors(cs,ls),yr.subVectors(as,cs);let t=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-yr.z,yr.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,yr.z,0,-yr.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-yr.y,yr.x,0];return!Sc(t,as,ls,cs,fa)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,as,ls,cs,fa))?!1:(ha.crossVectors(Ki,$i),t=[ha.x,ha.y,ha.z],Sc(t,as,ls,cs,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new X,new X,new X,new X,new X,new X,new X,new X],ti=new X,ua=new Br,as=new X,ls=new X,cs=new X,Ki=new X,$i=new X,yr=new X,eo=new X,fa=new X,ha=new X,br=new X;function Sc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){br.fromArray(r,a);const c=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),f=e.dot(br),d=t.dot(br),p=i.dot(br);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const FE=new Br,to=new X,Mc=new X;class go{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):FE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(to,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Mc)),this.expandByPoint(to.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new X,Ec=new X,da=new X,Zi=new X,yc=new X,pa=new X,bc=new X;class Hp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Ec.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Ec);const a=e.distanceTo(t)*.5,u=-this.direction.dot(da),c=Zi.dot(this.direction),f=-Zi.dot(da),d=Zi.lengthSq(),p=Math.abs(1-u*u);let _,v,x,E;if(p>0)if(_=u*f-c,v=u*c-f,E=a*p,_>=0)if(v>=-E)if(v<=E){const w=1/p;_*=w,v*=w,x=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;else v<=-E?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d):v<=E?(_=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),x=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),x=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ec).addScaledVector(da,v),x}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),o=Li.dot(Li)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,o,a){yc.subVectors(t,e),pa.subVectors(i,e),bc.crossVectors(yc,pa);let u=this.direction.dot(bc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Zi.subVectors(this.origin,e);const f=c*this.direction.dot(pa.crossVectors(Zi,pa));if(f<0)return null;const d=c*this.direction.dot(yc.cross(Zi));if(d<0||f+d>u)return null;const p=-c*Zi.dot(bc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,m)}set(e,t,i,o,a,u,c,f,d,p,_,v,x,E,w,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=o,g[1]=a,g[5]=u,g[9]=c,g[13]=f,g[2]=d,g[6]=p,g[10]=_,g[14]=v,g[3]=x,g[7]=E,g[11]=w,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/us.setFromMatrixColumn(e,0).length(),a=1/us.setFromMatrixColumn(e,1).length(),u=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,x=u*_,E=c*p,w=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=x+E*d,t[5]=v-w*d,t[9]=-c*f,t[2]=w-v*d,t[6]=E+x*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,x=f*_,E=d*p,w=d*_;t[0]=v+w*c,t[4]=E*c-x,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=x*c-E,t[6]=w+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,x=f*_,E=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=E+x*c,t[1]=x+E*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,x=u*_,E=c*p,w=c*_;t[0]=f*p,t[4]=E*d-x,t[8]=v*d+w,t[1]=f*_,t[5]=w*d+v,t[9]=x*d-E,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,x=u*d,E=c*f,w=c*d;t[0]=f*p,t[4]=w-v*_,t[8]=E*_+x,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=x*_+E,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*f,x=u*d,E=c*f,w=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=x*_-E,t[2]=E*_-x,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OE,e,BE)}lookAt(e,t,i){const o=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ji.crossVectors(i,Fn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ji.crossVectors(i,Fn)),ji.normalize(),ma.crossVectors(Fn,ji),o[0]=ji.x,o[4]=ma.x,o[8]=Fn.x,o[1]=ji.y,o[5]=ma.y,o[9]=Fn.y,o[2]=ji.z,o[6]=ma.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],x=i[13],E=i[2],w=i[6],m=i[10],g=i[14],F=i[3],T=i[7],D=i[11],G=i[15],N=o[0],I=o[4],K=o[8],de=o[12],b=o[1],U=o[5],pe=o[9],ue=o[13],z=o[2],re=o[6],te=o[10],le=o[14],ee=o[3],ce=o[7],fe=o[11],xe=o[15];return a[0]=u*N+c*b+f*z+d*ee,a[4]=u*I+c*U+f*re+d*ce,a[8]=u*K+c*pe+f*te+d*fe,a[12]=u*de+c*ue+f*le+d*xe,a[1]=p*N+_*b+v*z+x*ee,a[5]=p*I+_*U+v*re+x*ce,a[9]=p*K+_*pe+v*te+x*fe,a[13]=p*de+_*ue+v*le+x*xe,a[2]=E*N+w*b+m*z+g*ee,a[6]=E*I+w*U+m*re+g*ce,a[10]=E*K+w*pe+m*te+g*fe,a[14]=E*de+w*ue+m*le+g*xe,a[3]=F*N+T*b+D*z+G*ee,a[7]=F*I+T*U+D*re+G*ce,a[11]=F*K+T*pe+D*te+G*fe,a[15]=F*de+T*ue+D*le+G*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],x=e[14],E=e[3],w=e[7],m=e[11],g=e[15];return E*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*x-i*f*x)+w*(+t*f*x-t*d*v+a*u*v-o*u*x+o*d*p-a*f*p)+m*(+t*d*_-t*c*x-a*u*_+i*u*x+a*c*p-i*d*p)+g*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],x=e[11],E=e[12],w=e[13],m=e[14],g=e[15],F=_*m*d-w*v*d+w*f*x-c*m*x-_*f*g+c*v*g,T=E*v*d-p*m*d-E*f*x+u*m*x+p*f*g-u*v*g,D=p*w*d-E*_*d+E*c*x-u*w*x-p*c*g+u*_*g,G=E*_*f-p*w*f-E*c*v+u*w*v+p*c*m-u*_*m,N=t*F+i*T+o*D+a*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=F*I,e[1]=(w*v*a-_*m*a-w*o*x+i*m*x+_*o*g-i*v*g)*I,e[2]=(c*m*a-w*f*a+w*o*d-i*m*d-c*o*g+i*f*g)*I,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*x-i*f*x)*I,e[4]=T*I,e[5]=(p*m*a-E*v*a+E*o*x-t*m*x-p*o*g+t*v*g)*I,e[6]=(E*f*a-u*m*a-E*o*d+t*m*d+u*o*g-t*f*g)*I,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*x+t*f*x)*I,e[8]=D*I,e[9]=(E*_*a-p*w*a-E*i*x+t*w*x+p*i*g-t*_*g)*I,e[10]=(u*w*a-E*c*a+E*i*d-t*w*d-u*i*g+t*c*g)*I,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*x-t*c*x)*I,e[12]=G*I,e[13]=(p*w*o-E*_*o+E*i*v-t*w*v-p*i*m+t*_*m)*I,e[14]=(E*c*o-u*w*o-E*i*f+t*w*f+u*i*m-t*c*m)*I,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*I,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,x=a*p,E=a*_,w=u*p,m=u*_,g=c*_,F=f*d,T=f*p,D=f*_,G=i.x,N=i.y,I=i.z;return o[0]=(1-(w+g))*G,o[1]=(x+D)*G,o[2]=(E-T)*G,o[3]=0,o[4]=(x-D)*N,o[5]=(1-(v+g))*N,o[6]=(m+F)*N,o[7]=0,o[8]=(E+T)*I,o[9]=(m-F)*I,o[10]=(1-(v+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=us.set(o[0],o[1],o[2]).length();const u=us.set(o[4],o[5],o[6]).length(),c=us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ni.copy(this);const d=1/a,p=1/u,_=1/c;return ni.elements[0]*=d,ni.elements[1]*=d,ni.elements[2]*=d,ni.elements[4]*=p,ni.elements[5]*=p,ni.elements[6]*=p,ni.elements[8]*=_,ni.elements[9]*=_,ni.elements[10]*=_,t.setFromRotationMatrix(ni),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Oi){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let x,E;if(c===Oi)x=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===Ga)x=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Oi){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,x=(i+o)*p;let E,w;if(c===Oi)E=(u+a)*_,w=-2*_;else if(c===Ga)E=a*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new X,ni=new kt,OE=new X(0,0,0),BE=new X(1,1,1),ji=new X,ma=new X,Fn=new X,Sd=new kt,Md=new ur;class Bi{constructor(e=0,t=0,i=0,o=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-mn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const Ed=new X,fs=new ur,Pi=new kt,ga=new X,no=new X,GE=new X,HE=new ur,yd=new X(1,0,0),bd=new X(0,1,0),Td=new X(0,0,1),VE={type:"added"},kE={type:"removed"},Tc={type:"childadded",child:null},Ac={type:"childremoved",child:null};class En extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new X,t=new Bi,i=new ur,o=new X(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new pt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(bd,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(bd,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(no,ga,this.up):Pi.lookAt(ga,no,this.up),this.quaternion.setFromRotationMatrix(Pi),o&&(Pi.extractRotation(o.matrixWorld),fs.setFromRotationMatrix(Pi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VE),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kE),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}En.DEFAULT_UP=new X(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new X,Di=new X,wc=new X,Ii=new X,hs=new X,ds=new X,Ad=new X,Cc=new X,Rc=new X,Lc=new X;class gi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),ii.subVectors(e,t),o.cross(ii);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){ii.subVectors(o,t),Di.subVectors(i,t),wc.subVectors(e,t);const u=ii.dot(ii),c=ii.dot(Di),f=ii.dot(wc),d=Di.dot(Di),p=Di.dot(wc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,x=(d*f-c*p)*v,E=(u*p-c*f)*v;return a.set(1-x-E,E,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Ii)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ii.x),f.addScaledVector(u,Ii.y),f.addScaledVector(c,Ii.z),f)}static isFrontFacing(e,t,i,o){return ii.subVectors(i,t),Di.subVectors(e,t),ii.cross(Di).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ii.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return gi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;hs.subVectors(o,i),ds.subVectors(a,i),Cc.subVectors(e,i);const f=hs.dot(Cc),d=ds.dot(Cc);if(f<=0&&d<=0)return t.copy(i);Rc.subVectors(e,o);const p=hs.dot(Rc),_=ds.dot(Rc);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(hs,u);Lc.subVectors(e,a);const x=hs.dot(Lc),E=ds.dot(Lc);if(E>=0&&x<=E)return t.copy(a);const w=x*d-f*E;if(w<=0&&d>=0&&E<=0)return c=d/(d-E),t.copy(i).addScaledVector(ds,c);const m=p*E-x*_;if(m<=0&&_-p>=0&&x-E>=0)return Ad.subVectors(a,o),c=(_-p)/(_-p+(x-E)),t.copy(o).addScaledVector(Ad,c);const g=1/(m+w+v);return u=w*g,c=v*g,t.copy(i).addScaledVector(hs,u).addScaledVector(ds,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Pc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Pt.workingColorSpace){if(e=fu(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Pc(u,a,e+1/3),this.g=Pc(u,a,e),this.b=Pc(u,a,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=di){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=_c(e.r),this.g=_c(e.g),this.b=_c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Pt.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,o=pn.g,a=pn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=di){Pt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,o=pn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(_a);const i=lo(Ji.h,_a.h,t),o=lo(Ji.s,_a.s,t),a=lo(Ji.l,_a.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new bt;bt.NAMES=kp;let WE=0;class $a extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=Ts,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=qc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new X,va=new ot;class ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return LE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),o=xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),o=xn(o,this.array),a=xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dd&&(e.usage=this.usage),e}}class Wp extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xp extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _i extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let XE=0;const Kn=new kt,Dc=new En,ps=new X,On=new Br,io=new Br,sn=new X;class dr extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?Xp:Wp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];On.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];io.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(On.min,io.min),On.expandByPoint(sn),sn.addVectors(On.max,io.max),On.expandByPoint(sn)):(On.expandByPoint(io.min),On.expandByPoint(io.max))}On.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)sn.fromBufferAttribute(c,d),f&&(ps.fromBufferAttribute(e,d),sn.add(ps)),o=Math.max(o,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let K=0;K<i.count;K++)c[K]=new X,f[K]=new X;const d=new X,p=new X,_=new X,v=new ot,x=new ot,E=new ot,w=new X,m=new X;function g(K,de,b){d.fromBufferAttribute(i,K),p.fromBufferAttribute(i,de),_.fromBufferAttribute(i,b),v.fromBufferAttribute(a,K),x.fromBufferAttribute(a,de),E.fromBufferAttribute(a,b),p.sub(d),_.sub(d),x.sub(v),E.sub(v);const U=1/(x.x*E.y-E.x*x.y);isFinite(U)&&(w.copy(p).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(U),m.copy(_).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(U),c[K].add(w),c[de].add(w),c[b].add(w),f[K].add(m),f[de].add(m),f[b].add(m))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,de=F.length;K<de;++K){const b=F[K],U=b.start,pe=b.count;for(let ue=U,z=U+pe;ue<z;ue+=3)g(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const T=new X,D=new X,G=new X,N=new X;function I(K){G.fromBufferAttribute(o,K),N.copy(G);const de=c[K];T.copy(de),T.sub(G.multiplyScalar(G.dot(de))).normalize(),D.crossVectors(N,de);const U=D.dot(f[K])<0?-1:1;u.setXYZW(K,T.x,T.y,T.z,U)}for(let K=0,de=F.length;K<de;++K){const b=F[K],U=b.start,pe=b.count;for(let ue=U,z=U+pe;ue<z;ue+=3)I(e.getX(ue+0)),I(e.getX(ue+1)),I(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new X,a=new X,u=new X,c=new X,f=new X,d=new X,p=new X,_=new X;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),w=e.getX(v+1),m=e.getX(v+2);o.fromBufferAttribute(t,E),a.fromBufferAttribute(t,w),u.fromBufferAttribute(t,m),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,m),c.add(p),f.add(p),d.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let x=0,E=0;for(let w=0,m=f.length;w<m;w++){c.isInterleavedBufferAttribute?x=f[w]*c.data.stride+c.offset:x=f[w]*p;for(let g=0;g<p;g++)v[E++]=d[x++]}return new ai(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];p.push(x.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,x=_.length;v<x;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new kt,Tr=new Hp,xa=new go,Cd=new X,ms=new X,gs=new X,_s=new X,Ic=new X,Sa=new X,Ma=new ot,Ea=new ot,ya=new ot,Rd=new X,Ld=new X,Pd=new X,ba=new X,Ta=new X;class oi extends En{constructor(e=new dr,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){Sa.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Ic.fromBufferAttribute(_,e),u?Sa.addScaledVector(Ic,p):Sa.addScaledVector(Ic.sub(t),p))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(a),Tr.copy(e.ray).recast(e.near),!(xa.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(xa,Cd)===null||Tr.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(wd.copy(a).invert(),Tr.copy(e.ray).applyMatrix4(wd),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const m=v[E],g=u[m.materialIndex],F=Math.max(m.start,x.start),T=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let D=F,G=T;D<G;D+=3){const N=c.getX(D),I=c.getX(D+1),K=c.getX(D+2);o=Aa(this,g,e,i,d,p,_,N,I,K),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(c.count,x.start+x.count);for(let m=E,g=w;m<g;m+=3){const F=c.getX(m),T=c.getX(m+1),D=c.getX(m+2);o=Aa(this,u,e,i,d,p,_,F,T,D),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,w=v.length;E<w;E++){const m=v[E],g=u[m.materialIndex],F=Math.max(m.start,x.start),T=Math.min(f.count,Math.min(m.start+m.count,x.start+x.count));for(let D=F,G=T;D<G;D+=3){const N=D,I=D+1,K=D+2;o=Aa(this,g,e,i,d,p,_,N,I,K),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let m=E,g=w;m<g;m+=3){const F=m,T=m+1,D=m+2;o=Aa(this,u,e,i,d,p,_,F,T,D),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function YE(r,e,t,i,o,a,u,c){let f;if(e.side===Rn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===cr,c),f===null)return null;Ta.copy(c),Ta.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Ta);return d<t.near||d>t.far?null:{distance:d,point:Ta.clone(),object:r}}function Aa(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,ms),r.getVertexPosition(f,gs),r.getVertexPosition(d,_s);const p=YE(r,e,t,i,ms,gs,_s,ba);if(p){o&&(Ma.fromBufferAttribute(o,c),Ea.fromBufferAttribute(o,f),ya.fromBufferAttribute(o,d),p.uv=gi.getInterpolation(ba,ms,gs,_s,Ma,Ea,ya,new ot)),a&&(Ma.fromBufferAttribute(a,c),Ea.fromBufferAttribute(a,f),ya.fromBufferAttribute(a,d),p.uv1=gi.getInterpolation(ba,ms,gs,_s,Ma,Ea,ya,new ot)),u&&(Rd.fromBufferAttribute(u,c),Ld.fromBufferAttribute(u,f),Pd.fromBufferAttribute(u,d),p.normal=gi.getInterpolation(ba,ms,gs,_s,Rd,Ld,Pd,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new X,materialIndex:0};gi.getNormal(ms,gs,_s,_.normal),p.face=_}return p}class _o extends dr{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,i,t,e,u,a,0),E("z","y","x",1,-1,i,t,-e,u,a,1),E("x","z","y",1,1,e,i,t,o,u,2),E("x","z","y",1,-1,e,i,-t,o,u,3),E("x","y","z",1,-1,e,t,i,o,a,4),E("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new _i(d,3)),this.setAttribute("normal",new _i(p,3)),this.setAttribute("uv",new _i(_,2));function E(w,m,g,F,T,D,G,N,I,K,de){const b=D/I,U=G/K,pe=D/2,ue=G/2,z=N/2,re=I+1,te=K+1;let le=0,ee=0;const ce=new X;for(let fe=0;fe<te;fe++){const xe=fe*U-ue;for(let De=0;De<re;De++){const Qe=De*b-pe;ce[w]=Qe*F,ce[m]=xe*T,ce[g]=z,d.push(ce.x,ce.y,ce.z),ce[w]=0,ce[m]=0,ce[g]=N>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(De/I),_.push(1-fe/K),le+=1}}for(let fe=0;fe<K;fe++)for(let xe=0;xe<I;xe++){const De=v+xe+re*fe,Qe=v+xe+re*(fe+1),J=v+(xe+1)+re*(fe+1),me=v+(xe+1)+re*fe;f.push(De,Qe,me),f.push(Qe,J,me),ee+=6}c.addGroup(x,ee,de),x+=ee,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const i=Ls(r[t]);for(const o in i)e[o]=i[o]}return e}function qE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yp(r){return r.getRenderTarget()===null?r.outputColorSpace:Pt.workingColorSpace}const KE={clone:Ls,merge:Sn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qp extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new X,Dd=new ot,Id=new ot;class Bn extends qp{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Id),t.subVectors(Id,Dd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class jE extends En{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new Bn(vs,xs,e,t);a.layers=this.layers,this.add(a);const u=new Bn(vs,xs,e,t);u.layers=this.layers,this.add(u);const c=new Bn(vs,xs,e,t);c.layers=this.layers,this.add(c);const f=new Bn(vs,xs,e,t);f.layers=this.layers,this.add(f);const d=new Bn(vs,xs,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,x),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Kp extends Mn{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JE extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Kp(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),a=new fr({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:or});a.uniforms.tEquirect.value=t;const u=new oi(o,a),c=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Cn),new jE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Uc=new X,QE=new X,ey=new pt;class ir{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Uc.subVectors(i,t).cross(QE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ey.getNormalMatrix(e),o=this.coplanarPoint(Uc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new go,wa=new X;class $p{constructor(e=new ir,t=new ir,i=new ir,o=new ir,a=new ir,u=new ir){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],x=o[8],E=o[9],w=o[10],m=o[11],g=o[12],F=o[13],T=o[14],D=o[15];if(i[0].setComponents(f-a,v-d,m-x,D-g).normalize(),i[1].setComponents(f+a,v+d,m+x,D+g).normalize(),i[2].setComponents(f+u,v+p,m+E,D+F).normalize(),i[3].setComponents(f-u,v-p,m-E,D-F).normalize(),i[4].setComponents(f-c,v-_,m-w,D-T).normalize(),t===Oi)i[5].setComponents(f+c,v+_,m+w,D+T).normalize();else if(t===Ga)i[5].setComponents(c,_,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(wa.x=o.normal.x>0?e.max.x:e.min.x,wa.y=o.normal.y>0?e.max.y:e.min.y,wa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function ty(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,x=_.byteLength,E=r.createBuffer();r.bindBuffer(p,E),r.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=r.SHORT;else if(_ instanceof Uint32Array)w=r.UNSIGNED_INT;else if(_ instanceof Int32Array)w=r.INT;else if(_ instanceof Int8Array)w=r.BYTE;else if(_ instanceof Uint8Array)w=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,p,_){const v=p.array,x=p._updateRange,E=p.updateRanges;if(r.bindBuffer(_,d),x.count===-1&&E.length===0&&r.bufferSubData(_,0,v),E.length!==0){for(let w=0,m=E.length;w<m;w++){const g=E[w];t?r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}x.count!==-1&&(t?r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(_,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class Za extends dr{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,x=[],E=[],w=[],m=[];for(let g=0;g<p;g++){const F=g*v-u;for(let T=0;T<d;T++){const D=T*_-a;E.push(D,-F,0),w.push(0,0,1),m.push(T/c),m.push(1-g/f)}}for(let g=0;g<f;g++)for(let F=0;F<c;F++){const T=F+d*g,D=F+d*(g+1),G=F+1+d*(g+1),N=F+1+d*g;x.push(T,D,N),x.push(D,G,N)}this.setIndex(x),this.setAttribute("position",new _i(E,3)),this.setAttribute("normal",new _i(w,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}var ny=`#ifdef USE_ALPHAHASH
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
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
#endif`,by=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
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
#endif`,tb=`struct PhysicalMaterial {
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
}`,nb=`
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
#endif`,ib=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ob=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hb=`#if defined( USE_POINTS_UV )
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
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hb=`float getShadowMask() {
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
}`,Vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Wb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
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
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,ET=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,bT=`#define PHONG
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
}`,TT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,RT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,PT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,IT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,NT=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:uy,batching_vertex:fy,begin_vertex:hy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:xy,clipping_planes_vertex:Sy,color_fragment:My,color_pars_fragment:Ey,color_pars_vertex:yy,color_vertex:by,common:Ty,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:wy,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:Ly,emissivemap_pars_fragment:Py,colorspace_fragment:Dy,colorspace_pars_fragment:Iy,envmap_fragment:Uy,envmap_common_pars_fragment:Ny,envmap_pars_fragment:Fy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:$y,envmap_vertex:By,fog_vertex:zy,fog_pars_vertex:Gy,fog_fragment:Hy,fog_pars_fragment:Vy,gradientmap_pars_fragment:ky,lightmap_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:qy,lights_pars_begin:Ky,lights_toon_fragment:Zy,lights_toon_pars_fragment:jy,lights_phong_fragment:Jy,lights_phong_pars_fragment:Qy,lights_physical_fragment:eb,lights_physical_pars_fragment:tb,lights_fragment_begin:nb,lights_fragment_maps:ib,lights_fragment_end:rb,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:ob,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:lb,map_fragment:cb,map_pars_fragment:ub,map_particle_fragment:fb,map_particle_pars_fragment:hb,metalnessmap_fragment:db,metalnessmap_pars_fragment:pb,morphinstance_vertex:mb,morphcolor_vertex:gb,morphnormal_vertex:_b,morphtarget_pars_vertex:vb,morphtarget_vertex:xb,normal_fragment_begin:Sb,normal_fragment_maps:Mb,normal_pars_fragment:Eb,normal_pars_vertex:yb,normal_vertex:bb,normalmap_pars_fragment:Tb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Cb,iridescence_pars_fragment:Rb,opaque_fragment:Lb,packing:Pb,premultiplied_alpha_fragment:Db,project_vertex:Ib,dithering_fragment:Ub,dithering_pars_fragment:Nb,roughnessmap_fragment:Fb,roughnessmap_pars_fragment:Ob,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:zb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Hb,skinbase_vertex:Vb,skinning_pars_vertex:kb,skinning_vertex:Wb,skinnormal_vertex:Xb,specularmap_fragment:Yb,specularmap_pars_fragment:qb,tonemapping_fragment:Kb,tonemapping_pars_fragment:$b,transmission_fragment:Zb,transmission_pars_fragment:jb,uv_pars_fragment:Jb,uv_pars_vertex:Qb,uv_vertex:eT,worldpos_vertex:tT,background_vert:nT,background_frag:iT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:oT,cube_frag:aT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:fT,equirect_vert:hT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:yT,meshphong_vert:bT,meshphong_frag:TT,meshphysical_vert:AT,meshphysical_frag:wT,meshtoon_vert:CT,meshtoon_frag:RT,points_vert:LT,points_frag:PT,shadow_vert:DT,shadow_frag:IT,sprite_vert:UT,sprite_frag:NT},ye={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},pi={basic:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Sn([ye.points,ye.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Sn([ye.common,ye.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Sn([ye.sprite,ye.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Sn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Sn([ye.lights,ye.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};pi.physical={uniforms:Sn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ca={r:0,b:0,g:0},wr=new Bi,FT=new kt;function OT(r,e,t,i,o,a,u){const c=new bt(0);let f=a===!0?0:1,d,p,_=null,v=0,x=null;function E(m,g){let F=!1,T=g.isScene===!0?g.background:null;T&&T.isTexture&&(T=(g.backgroundBlurriness>0?t:e).get(T)),T===null?w(c,f):T&&T.isColor&&(w(T,1),F=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||F)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),T&&(T.isCubeTexture||T.mapping===qa)?(p===void 0&&(p=new oi(new _o(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Ls(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(G,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),wr.copy(g.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(wr)),p.material.toneMapped=Pt.getTransfer(T.colorSpace)!==Bt,(_!==T||v!==T.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new oi(new Za(2,2),new fr({name:"BackgroundMaterial",uniforms:Ls(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(T.colorSpace)!==Bt,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(_!==T||v!==T.version||x!==r.toneMapping)&&(d.material.needsUpdate=!0,_=T,v=T.version,x=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function w(m,g){m.getRGB(Ca,Yp(r)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),f=g,w(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,w(c,f)},render:E}}function BT(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=m(null);let d=f,p=!1;function _(z,re,te,le,ee){let ce=!1;if(u){const fe=w(le,te,re);d!==fe&&(d=fe,x(d.object)),ce=g(z,le,te,ee),ce&&F(z,le,te,ee)}else{const fe=re.wireframe===!0;(d.geometry!==le.id||d.program!==te.id||d.wireframe!==fe)&&(d.geometry=le.id,d.program=te.id,d.wireframe=fe,ce=!0)}ee!==null&&t.update(ee,r.ELEMENT_ARRAY_BUFFER),(ce||p)&&(p=!1,K(z,re,te,le),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function x(z){return i.isWebGL2?r.bindVertexArray(z):a.bindVertexArrayOES(z)}function E(z){return i.isWebGL2?r.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function w(z,re,te){const le=te.wireframe===!0;let ee=c[z.id];ee===void 0&&(ee={},c[z.id]=ee);let ce=ee[re.id];ce===void 0&&(ce={},ee[re.id]=ce);let fe=ce[le];return fe===void 0&&(fe=m(v()),ce[le]=fe),fe}function m(z){const re=[],te=[],le=[];for(let ee=0;ee<o;ee++)re[ee]=0,te[ee]=0,le[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:re,enabledAttributes:te,attributeDivisors:le,object:z,attributes:{},index:null}}function g(z,re,te,le){const ee=d.attributes,ce=re.attributes;let fe=0;const xe=te.getAttributes();for(const De in xe)if(xe[De].location>=0){const J=ee[De];let me=ce[De];if(me===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(me=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(me=z.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;fe++}return d.attributesNum!==fe||d.index!==le}function F(z,re,te,le){const ee={},ce=re.attributes;let fe=0;const xe=te.getAttributes();for(const De in xe)if(xe[De].location>=0){let J=ce[De];J===void 0&&(De==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),De==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),ee[De]=me,fe++}d.attributes=ee,d.attributesNum=fe,d.index=le}function T(){const z=d.newAttributes;for(let re=0,te=z.length;re<te;re++)z[re]=0}function D(z){G(z,0)}function G(z,re){const te=d.newAttributes,le=d.enabledAttributes,ee=d.attributeDivisors;te[z]=1,le[z]===0&&(r.enableVertexAttribArray(z),le[z]=1),ee[z]!==re&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,re),ee[z]=re)}function N(){const z=d.newAttributes,re=d.enabledAttributes;for(let te=0,le=re.length;te<le;te++)re[te]!==z[te]&&(r.disableVertexAttribArray(te),re[te]=0)}function I(z,re,te,le,ee,ce,fe){fe===!0?r.vertexAttribIPointer(z,re,te,ee,ce):r.vertexAttribPointer(z,re,te,le,ee,ce)}function K(z,re,te,le){if(i.isWebGL2===!1&&(z.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ee=le.attributes,ce=te.getAttributes(),fe=re.defaultAttributeValues;for(const xe in ce){const De=ce[xe];if(De.location>=0){let Qe=ee[xe];if(Qe===void 0&&(xe==="instanceMatrix"&&z.instanceMatrix&&(Qe=z.instanceMatrix),xe==="instanceColor"&&z.instanceColor&&(Qe=z.instanceColor)),Qe!==void 0){const J=Qe.normalized,me=Qe.itemSize,we=t.get(Qe);if(we===void 0)continue;const $e=we.buffer,Ne=we.type,Ce=we.bytesPerElement,Mt=i.isWebGL2===!0&&(Ne===r.INT||Ne===r.UNSIGNED_INT||Qe.gpuType===Cp);if(Qe.isInterleavedBufferAttribute){const Ve=Qe.data,W=Ve.stride,Wt=Qe.offset;if(Ve.isInstancedInterleavedBuffer){for(let Ie=0;Ie<De.locationSize;Ie++)G(De.location+Ie,Ve.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Ie=0;Ie<De.locationSize;Ie++)D(De.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Ie=0;Ie<De.locationSize;Ie++)I(De.location+Ie,me/De.locationSize,Ne,J,W*Ce,(Wt+me/De.locationSize*Ie)*Ce,Mt)}else{if(Qe.isInstancedBufferAttribute){for(let Ve=0;Ve<De.locationSize;Ve++)G(De.location+Ve,Qe.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ve=0;Ve<De.locationSize;Ve++)D(De.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Ve=0;Ve<De.locationSize;Ve++)I(De.location+Ve,me/De.locationSize,Ne,J,me*Ce,me/De.locationSize*Ve*Ce,Mt)}}else if(fe!==void 0){const J=fe[xe];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(De.location,J);break;case 3:r.vertexAttrib3fv(De.location,J);break;case 4:r.vertexAttrib4fv(De.location,J);break;default:r.vertexAttrib1fv(De.location,J)}}}}N()}function de(){pe();for(const z in c){const re=c[z];for(const te in re){const le=re[te];for(const ee in le)E(le[ee].object),delete le[ee];delete re[te]}delete c[z]}}function b(z){if(c[z.id]===void 0)return;const re=c[z.id];for(const te in re){const le=re[te];for(const ee in le)E(le[ee].object),delete le[ee];delete re[te]}delete c[z.id]}function U(z){for(const re in c){const te=c[re];if(te[z.id]===void 0)continue;const le=te[z.id];for(const ee in le)E(le[ee].object),delete le[ee];delete te[z.id]}}function pe(){ue(),p=!0,d!==f&&(d=f,x(d.object))}function ue(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:pe,resetDefaultState:ue,dispose:de,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:D,disableUnusedAttributes:N}}function zT(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let x,E;if(o)x=r,E="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[E](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<v;E++)this.render(p[E],_[E]);else{x.multiDrawArraysWEBGL(a,p,0,_,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w];t.update(E,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function GT(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),w=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),F=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,D=u||e.has("OES_texture_float"),G=T&&D,N=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:F,vertexTextures:T,floatFragmentTextures:D,floatVertexTextures:G,maxSamples:N}}function HT(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new ir,c=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||i!==0||o;return o=v,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,w=_.clipIntersection,m=_.clipShadows,g=r.get(_);if(!o||E===null||E.length===0||a&&!m)a?p(null):d();else{const F=a?0:i,T=F*4;let D=g.clippingState||null;f.value=D,D=p(E,v,T,x);for(let G=0;G!==T;++G)D[G]=t[G];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,x,E){const w=_!==null?_.length:0;let m=null;if(w!==0){if(m=f.value,E!==!0||m===null){const g=x+w*4,F=v.matrixWorldInverse;c.getNormalMatrix(F),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,D=x;T!==w;++T,D+=4)u.copy(_[T]).applyMatrix4(F,c),u.normal.toArray(m,D),m[D+3]=u.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}function VT(r){let e=new WeakMap;function t(u,c){return c===Kc?u.mapping=ws:c===$c&&(u.mapping=Cs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Kc||c===$c)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new JE(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class kT extends qp{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,Ud=[.125,.215,.35,.446,.526,.582],Dr=20,Nc=new kT,Nd=new bt;let Fc=null,Oc=0,Bc=0;const Lr=(1+Math.sqrt(5))/2,Ss=1/Lr,Fd=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Lr,Ss),new X(0,Lr,-Ss),new X(Ss,0,Lr),new X(-Ss,0,Lr),new X(Lr,Ss,0),new X(-Lr,Ss,0)];class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,Bc),e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:fo,format:si,colorSpace:hr,depthBuffer:!1},o=Bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(a)),this._blurMaterial=XT(a,e,t)}return o}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,i,o){const c=new Bn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Nd),p.toneMapping=ar,p.autoClear=!1;const x=new hu({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new oi(new _o,x);let w=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,w=!0):(x.color.copy(Nd),w=!0);for(let g=0;g<6;g++){const F=g%3;F===0?(c.up.set(0,f[g],0),c.lookAt(d[g],0,0)):F===1?(c.up.set(0,0,f[g]),c.lookAt(0,d[g],0)):(c.up.set(0,f[g],0),c.lookAt(0,0,d[g]));const T=this._cubeSize;Ra(o,F*T,g>2?T:0,T,T),p.setRenderTarget(o),w&&p.render(E,c),p.render(e,c)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===ws||e.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new oi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ra(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Nc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Fd[(o-1)%Fd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new oi(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Dr-1),w=a/E,m=isFinite(a)?1+Math.floor(p*w):Dr;m>Dr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const g=[];let F=0;for(let I=0;I<Dr;++I){const K=I/w,de=Math.exp(-K*K/2);g.push(de),I===0?F+=de:I<m&&(F+=2*de)}for(let I=0;I<g.length;I++)g[I]=g[I]/F;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:T}=this;v.dTheta.value=E,v.mipInt.value=T-i;const D=this._sizeLods[o],G=3*D*(o>T-ys?o-T+ys:0),N=4*(this._cubeSize-D);Ra(t,G,N,3*D,2*D),f.setRenderTarget(t),f.render(_,Nc)}}function WT(r){const e=[],t=[],i=[];let o=r;const a=r-ys+1+Ud.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-ys?f=Ud[u-r+ys-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,E=6,w=3,m=2,g=1,F=new Float32Array(w*E*x),T=new Float32Array(m*E*x),D=new Float32Array(g*E*x);for(let N=0;N<x;N++){const I=N%3*2/3-1,K=N>2?0:-1,de=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];F.set(de,w*E*N),T.set(v,m*E*N);const b=[N,N,N,N,N,N];D.set(b,g*E*N)}const G=new dr;G.setAttribute("position",new ai(F,w)),G.setAttribute("uv",new ai(T,m)),G.setAttribute("faceIndex",new ai(D,g)),e.push(G),o>ys&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bd(r,e,t){const i=new Fr(r,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function XT(r,e,t){const i=new Float32Array(Dr),o=new X(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function zd(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gd(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function YT(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===Kc||f===$c,p=f===ws||f===Cs;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Od(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new Od(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function qT(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function KT(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const w=v.morphAttributes[E];for(let m=0,g=w.length;m<g;m++)e.remove(w[m])}v.removeEventListener("dispose",u),delete o[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const E in v)e.update(v[E],r.ARRAY_BUFFER);const x=_.morphAttributes;for(const E in x){const w=x[E];for(let m=0,g=w.length;m<g;m++)e.update(w[m],r.ARRAY_BUFFER)}}function d(_){const v=[],x=_.index,E=_.attributes.position;let w=0;if(x!==null){const F=x.array;w=x.version;for(let T=0,D=F.length;T<D;T+=3){const G=F[T+0],N=F[T+1],I=F[T+2];v.push(G,N,N,I,I,G)}}else if(E!==void 0){const F=E.array;w=E.version;for(let T=0,D=F.length/3-1;T<D;T+=3){const G=T+0,N=T+1,I=T+2;v.push(G,N,N,I,I,G)}}else return;const m=new(Op(v)?Xp:Wp)(v,1);m.version=w;const g=a.get(_);g&&e.remove(g),a.set(_,m)}function p(_){const v=a.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function $T(r,e,t,i){const o=i.isWebGL2;let a;function u(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,E){r.drawElements(a,E,c,x*f),t.update(E,a,1)}function _(x,E,w){if(w===0)return;let m,g;if(o)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,E,c,x*f,w),t.update(E,a,w)}function v(x,E,w){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<w;g++)this.render(x[g]/f,E[g]);else{m.multiDrawElementsWEBGL(a,E,0,c,x,0,w);let g=0;for(let F=0;F<w;F++)g+=E[F];t.update(g,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function ZT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function jT(r,e){return r[0]-e[0]}function JT(r,e){return Math.abs(e[1])-Math.abs(r[1])}function QT(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new cn,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=E!==void 0?E.length:0;let m=a.get(p);if(m===void 0||m.count!==w){let ue=function(){U.dispose(),a.delete(p),p.removeEventListener("dispose",ue)};var x=ue;m!==void 0&&m.texture.dispose();const g=p.morphAttributes.position!==void 0,F=p.morphAttributes.normal!==void 0,T=p.morphAttributes.color!==void 0,D=p.morphAttributes.position||[],G=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let I=0;g===!0&&(I=1),F===!0&&(I=2),T===!0&&(I=3);let K=p.attributes.position.count*I,de=1;K>e.maxTextureSize&&(de=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const b=new Float32Array(K*de*4*w),U=new Gp(b,K,de,w);U.type=mi,U.needsUpdate=!0;const pe=I*4;for(let z=0;z<w;z++){const re=D[z],te=G[z],le=N[z],ee=K*de*4*z;for(let ce=0;ce<re.count;ce++){const fe=ce*pe;g===!0&&(u.fromBufferAttribute(re,ce),b[ee+fe+0]=u.x,b[ee+fe+1]=u.y,b[ee+fe+2]=u.z,b[ee+fe+3]=0),F===!0&&(u.fromBufferAttribute(te,ce),b[ee+fe+4]=u.x,b[ee+fe+5]=u.y,b[ee+fe+6]=u.z,b[ee+fe+7]=0),T===!0&&(u.fromBufferAttribute(le,ce),b[ee+fe+8]=u.x,b[ee+fe+9]=u.y,b[ee+fe+10]=u.z,b[ee+fe+11]=le.itemSize===4?u.w:1)}}m={count:w,texture:U,size:new ot(K,de)},a.set(p,m),p.addEventListener("dispose",ue)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let g=0;for(let T=0;T<v.length;T++)g+=v[T];const F=p.morphTargetsRelative?1:1-g;_.getUniforms().setValue(r,"morphTargetBaseInfluence",F),_.getUniforms().setValue(r,"morphTargetInfluences",v)}_.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const E=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==E){w=[];for(let D=0;D<E;D++)w[D]=[D,0];i[p.id]=w}for(let D=0;D<E;D++){const G=w[D];G[0]=D,G[1]=v[D]}w.sort(JT);for(let D=0;D<8;D++)D<E&&w[D][1]?(c[D][0]=w[D][0],c[D][1]=w[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(jT);const m=p.morphAttributes.position,g=p.morphAttributes.normal;let F=0;for(let D=0;D<8;D++){const G=c[D],N=G[0],I=G[1];N!==Number.MAX_SAFE_INTEGER&&I?(m&&p.getAttribute("morphTarget"+D)!==m[N]&&p.setAttribute("morphTarget"+D,m[N]),g&&p.getAttribute("morphNormal"+D)!==g[N]&&p.setAttribute("morphNormal"+D,g[N]),o[D]=I,F+=I):(m&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),g&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),o[D]=0)}const T=p.morphTargetsRelative?1:1-F;_.getUniforms().setValue(r,"morphTargetBaseInfluence",T),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function eA(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class jp extends Mn{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Nr,p!==Nr&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Nr&&(i=sr),i===void 0&&p===Rs&&(i=Ur),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=f!==void 0?f:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jp=new Mn,Qp=new jp(1,1);Qp.compareFunction=Fp;const em=new Gp,tm=new NE,nm=new Kp,Hd=[],Vd=[],kd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Ds(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Hd[o];if(a===void 0&&(a=new Float32Array(o),Hd[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ja(r,e){let t=Vd[e];t===void 0&&(t=new Int32Array(e),Vd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function tA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function iA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function rA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function sA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Xd.set(i),r.uniformMatrix2fv(this.addr,!1,Xd),tn(t,i)}}function oA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Wd.set(i),r.uniformMatrix3fv(this.addr,!1,Wd),tn(t,i)}}function aA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;kd.set(i),r.uniformMatrix4fv(this.addr,!1,kd),tn(t,i)}}function lA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function fA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function hA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function gA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?Qp:Jp;t.setTexture2D(e||a,o)}function _A(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||tm,o)}function vA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||nm,o)}function xA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||em,o)}function SA(r){switch(r){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}function MA(r,e){r.uniform1fv(this.addr,e)}function EA(r,e){const t=Ds(e,this.size,2);r.uniform2fv(this.addr,t)}function yA(r,e){const t=Ds(e,this.size,3);r.uniform3fv(this.addr,t)}function bA(r,e){const t=Ds(e,this.size,4);r.uniform4fv(this.addr,t)}function TA(r,e){const t=Ds(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AA(r,e){const t=Ds(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wA(r,e){const t=Ds(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CA(r,e){r.uniform1iv(this.addr,e)}function RA(r,e){r.uniform2iv(this.addr,e)}function LA(r,e){r.uniform3iv(this.addr,e)}function PA(r,e){r.uniform4iv(this.addr,e)}function DA(r,e){r.uniform1uiv(this.addr,e)}function IA(r,e){r.uniform2uiv(this.addr,e)}function UA(r,e){r.uniform3uiv(this.addr,e)}function NA(r,e){r.uniform4uiv(this.addr,e)}function FA(r,e,t){const i=this.cache,o=e.length,a=ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Jp,a[u])}function OA(r,e,t){const i=this.cache,o=e.length,a=ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||tm,a[u])}function BA(r,e,t){const i=this.cache,o=e.length,a=ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||nm,a[u])}function zA(r,e,t){const i=this.cache,o=e.length,a=ja(t,o);en(i,a)||(r.uniform1iv(this.addr,a),tn(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||em,a[u])}function GA(r){switch(r){case 5126:return MA;case 35664:return EA;case 35665:return yA;case 35666:return bA;case 35674:return TA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return LA;case 35669:case 35673:return PA;case 5125:return DA;case 36294:return IA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SA(t.type)}}class VA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GA(t.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function WA(r,e,t){const i=r.name,o=i.length;for(zc.lastIndex=0;;){const a=zc.exec(i),u=zc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){Yd(t,d===void 0?new HA(c,r,e):new VA(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new kA(c),Yd(t,_)),t=_}}}class Ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);WA(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function qd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const XA=37297;let YA=0;function qA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function KA(r){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(r);let i;switch(e===t?i="":e===za&&t===Ba?i="LinearDisplayP3ToLinearSRGB":e===Ba&&t===za&&(i="LinearSRGBToLinearDisplayP3"),r){case hr:case Ka:return[i,"LinearTransferOETF"];case di:case uu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Kd(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+qA(r.getShaderSource(e),u)}else return o}function $A(r,e){const t=KA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ZA(r,e){let t;switch(e){case kM:t="Linear";break;case WM:t="Reinhard";break;case XM:t="OptimizedCineon";break;case YM:t="ACESFilmic";break;case KM:t="AgX";break;case $M:t="Neutral";break;case qM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jA(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function JA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function QA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ew(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function bs(r){return r!==""}function $d(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(r){return r.replace(tw,iw)}const nw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iw(r,e){let t=dt[e];if(t===void 0){const i=nw.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(r){return r.replace(rw,sw)}function sw(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Jd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function ow(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_M?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function aw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Cs:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case VM:e="ENVMAP_BLENDING_ADD";break}return e}function uw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fw(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=ow(t),d=aw(t),p=lw(t),_=cw(t),v=uw(t),x=t.isWebGL2?"":jA(t),E=JA(t),w=QA(a),m=o.createProgram();let g,F,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),g.length>0&&(g+=`
`),F=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bs).join(`
`),F.length>0&&(F+=`
`)):(g=[Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),F=[x,Jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?dt.tonemapping_pars_fragment:"",t.toneMapping!==ar?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$A("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),u=eu(u),u=$d(u,t),u=Zd(u,t),c=eu(c),c=$d(c,t),c=Zd(c,t),u=jd(u),c=jd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[E,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,F=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F);const D=T+g+u,G=T+F+c,N=qd(o,o.VERTEX_SHADER,D),I=qd(o,o.FRAGMENT_SHADER,G);o.attachShader(m,N),o.attachShader(m,I),t.index0AttributeName!==void 0?o.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function K(pe){if(r.debug.checkShaderErrors){const ue=o.getProgramInfoLog(m).trim(),z=o.getShaderInfoLog(N).trim(),re=o.getShaderInfoLog(I).trim();let te=!0,le=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,m,N,I);else{const ee=Kd(o,N,"vertex"),ce=Kd(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+pe.name+`
Material Type: `+pe.type+`

Program Info Log: `+ue+`
`+ee+`
`+ce)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(z===""||re==="")&&(le=!1);le&&(pe.diagnostics={runnable:te,programLog:ue,vertexShader:{log:z,prefix:g},fragmentShader:{log:re,prefix:F}})}o.deleteShader(N),o.deleteShader(I),de=new Ua(o,m),b=ew(o,m)}let de;this.getUniforms=function(){return de===void 0&&K(this),de};let b;this.getAttributes=function(){return b===void 0&&K(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(m,XA)),U},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=N,this.fragmentShader=I,this}let hw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pw(e),t.set(e,i)),i}}class pw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function mw(r,e,t,i,o,a,u){const c=new Vp,f=new dw,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,x=o.vertexTextures;let E=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return d.add(b),b===0?"uv":`uv${b}`}function g(b,U,pe,ue,z){const re=ue.fog,te=z.geometry,le=b.isMeshStandardMaterial?ue.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||le),ce=ee&&ee.mapping===qa?ee.image.height:null,fe=w[b.type];b.precision!==null&&(E=o.getMaxPrecision(b.precision),E!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",E,"instead."));const xe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,De=xe!==void 0?xe.length:0;let Qe=0;te.morphAttributes.position!==void 0&&(Qe=1),te.morphAttributes.normal!==void 0&&(Qe=2),te.morphAttributes.color!==void 0&&(Qe=3);let J,me,we,$e;if(fe){const yt=pi[fe];J=yt.vertexShader,me=yt.fragmentShader}else J=b.vertexShader,me=b.fragmentShader,f.update(b),we=f.getVertexShaderID(b),$e=f.getFragmentShaderID(b);const Ne=r.getRenderTarget(),Ce=z.isInstancedMesh===!0,Mt=z.isBatchedMesh===!0,Ve=!!b.map,W=!!b.matcap,Wt=!!ee,Ie=!!b.aoMap,Ze=!!b.lightMap,He=!!b.bumpMap,Je=!!b.normalMap,et=!!b.displacementMap,at=!!b.emissiveMap,Tt=!!b.metalnessMap,R=!!b.roughnessMap,M=b.anisotropy>0,Q=b.clearcoat>0,se=b.iridescence>0,_e=b.sheen>0,ge=b.transmission>0,Ke=M&&!!b.anisotropyMap,Ge=Q&&!!b.clearcoatMap,Ee=Q&&!!b.clearcoatNormalMap,be=Q&&!!b.clearcoatRoughnessMap,je=se&&!!b.iridescenceMap,Me=se&&!!b.iridescenceThicknessMap,Ut=_e&&!!b.sheenColorMap,it=_e&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Le=!!b.specularColorMap,Fe=!!b.specularIntensityMap,L=ge&&!!b.transmissionMap,ae=ge&&!!b.thicknessMap,Ue=!!b.gradientMap,O=!!b.alphaMap,Se=b.alphaTest>0,Y=!!b.alphaHash,ve=!!b.extensions;let Ae=ar;b.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const ft={isWebGL2:_,shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:me,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:$e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:E,batching:Mt,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ne===null?r.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:hr,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:W,envMap:Wt,envMapMode:Wt&&ee.mapping,envMapCubeUVHeight:ce,aoMap:Ie,lightMap:Ze,bumpMap:He,normalMap:Je,displacementMap:x&&et,emissiveMap:at,normalMapObjectSpace:Je&&b.normalMapType===oE,normalMapTangentSpace:Je&&b.normalMapType===sE,metalnessMap:Tt,roughnessMap:R,anisotropy:M,anisotropyMap:Ke,clearcoat:Q,clearcoatMap:Ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:be,iridescence:se,iridescenceMap:je,iridescenceThicknessMap:Me,sheen:_e,sheenColorMap:Ut,sheenRoughnessMap:it,specularMap:ze,specularColorMap:Le,specularIntensityMap:Fe,transmission:ge,transmissionMap:L,thicknessMap:ae,gradientMap:Ue,opaque:b.transparent===!1&&b.blending===Ts&&b.alphaToCoverage===!1,alphaMap:O,alphaTest:Se,alphaHash:Y,combine:b.combine,mapUv:Ve&&m(b.map.channel),aoMapUv:Ie&&m(b.aoMap.channel),lightMapUv:Ze&&m(b.lightMap.channel),bumpMapUv:He&&m(b.bumpMap.channel),normalMapUv:Je&&m(b.normalMap.channel),displacementMapUv:et&&m(b.displacementMap.channel),emissiveMapUv:at&&m(b.emissiveMap.channel),metalnessMapUv:Tt&&m(b.metalnessMap.channel),roughnessMapUv:R&&m(b.roughnessMap.channel),anisotropyMapUv:Ke&&m(b.anisotropyMap.channel),clearcoatMapUv:Ge&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&m(b.sheenRoughnessMap.channel),specularMapUv:ze&&m(b.specularMap.channel),specularColorMapUv:Le&&m(b.specularColorMap.channel),specularIntensityMapUv:Fe&&m(b.specularIntensityMap.channel),transmissionMapUv:L&&m(b.transmissionMap.channel),thicknessMapUv:ae&&m(b.thicknessMap.channel),alphaMapUv:O&&m(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Je||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(Ve||O),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Qe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&pe.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===Bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fi,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ve&&b.extensions.derivatives===!0,extensionFragDepth:ve&&b.extensions.fragDepth===!0,extensionDrawBuffers:ve&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=d.has(1),ft.vertexUv2s=d.has(2),ft.vertexUv3s=d.has(3),d.clear(),ft}function F(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const pe in b.defines)U.push(pe),U.push(b.defines[pe]);return b.isRawShaderMaterial===!1&&(T(U,b),D(U,b),U.push(r.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function T(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.instancingMorph&&c.enable(4),U.matcap&&c.enable(5),U.envMap&&c.enable(6),U.normalMapObjectSpace&&c.enable(7),U.normalMapTangentSpace&&c.enable(8),U.clearcoat&&c.enable(9),U.iridescence&&c.enable(10),U.alphaTest&&c.enable(11),U.vertexColors&&c.enable(12),U.vertexAlphas&&c.enable(13),U.vertexUv1s&&c.enable(14),U.vertexUv2s&&c.enable(15),U.vertexUv3s&&c.enable(16),U.vertexTangents&&c.enable(17),U.anisotropy&&c.enable(18),U.alphaHash&&c.enable(19),U.batching&&c.enable(20),b.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.alphaToCoverage&&c.enable(20),b.push(c.mask)}function G(b){const U=w[b.type];let pe;if(U){const ue=pi[U];pe=KE.clone(ue.uniforms)}else pe=b.uniforms;return pe}function N(b,U){let pe;for(let ue=0,z=p.length;ue<z;ue++){const re=p[ue];if(re.cacheKey===U){pe=re,++pe.usedTimes;break}}return pe===void 0&&(pe=new fw(r,U,b,a),p.push(pe)),pe}function I(b){if(--b.usedTimes===0){const U=p.indexOf(b);p[U]=p[p.length-1],p.pop(),b.destroy()}}function K(b){f.remove(b)}function de(){f.dispose()}return{getParameters:g,getProgramCacheKey:F,getUniforms:G,acquireProgram:N,releaseProgram:I,releaseShaderCache:K,programs:p,dispose:de}}function gw(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ep(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,x,E,w,m){let g=r[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:w,group:m},r[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=x,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=w,g.group=m),e++,g}function c(_,v,x,E,w,m){const g=u(_,v,x,E,w,m);x.transmission>0?i.push(g):x.transparent===!0?o.push(g):t.push(g)}function f(_,v,x,E,w,m){const g=u(_,v,x,E,w,m);x.transmission>0?i.unshift(g):x.transparent===!0?o.unshift(g):t.unshift(g)}function d(_,v){t.length>1&&t.sort(_||_w),i.length>1&&i.sort(v||Qd),o.length>1&&o.sort(v||Qd)}function p(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function vw(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new ep,r.set(i,[u])):o>=a.length?(u=new ep,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new bt};break;case"SpotLight":t={position:new X,direction:new X,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Sw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Mw=0;function Ew(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r,e){const t=new xw,i=Sw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new X);const a=new X,u=new kt,c=new kt;function f(p,_){let v=0,x=0,E=0;for(let pe=0;pe<9;pe++)o.probe[pe].set(0,0,0);let w=0,m=0,g=0,F=0,T=0,D=0,G=0,N=0,I=0,K=0,de=0;p.sort(Ew);const b=_===!0?Math.PI:1;for(let pe=0,ue=p.length;pe<ue;pe++){const z=p[pe],re=z.color,te=z.intensity,le=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=re.r*te*b,x+=re.g*te*b,E+=re.b*te*b;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)o.probe[ce].addScaledVector(z.sh.coefficients[ce],te);de++}else if(z.isDirectionalLight){const ce=t.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity*b),z.castShadow){const fe=z.shadow,xe=i.get(z);xe.shadowBias=fe.bias,xe.shadowNormalBias=fe.normalBias,xe.shadowRadius=fe.radius,xe.shadowMapSize=fe.mapSize,o.directionalShadow[w]=xe,o.directionalShadowMap[w]=ee,o.directionalShadowMatrix[w]=z.shadow.matrix,D++}o.directional[w]=ce,w++}else if(z.isSpotLight){const ce=t.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(re).multiplyScalar(te*b),ce.distance=le,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,o.spot[g]=ce;const fe=z.shadow;if(z.map&&(o.spotLightMap[I]=z.map,I++,fe.updateMatrices(z),z.castShadow&&K++),o.spotLightMatrix[g]=fe.matrix,z.castShadow){const xe=i.get(z);xe.shadowBias=fe.bias,xe.shadowNormalBias=fe.normalBias,xe.shadowRadius=fe.radius,xe.shadowMapSize=fe.mapSize,o.spotShadow[g]=xe,o.spotShadowMap[g]=ee,N++}g++}else if(z.isRectAreaLight){const ce=t.get(z);ce.color.copy(re).multiplyScalar(te),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),o.rectArea[F]=ce,F++}else if(z.isPointLight){const ce=t.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity*b),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const fe=z.shadow,xe=i.get(z);xe.shadowBias=fe.bias,xe.shadowNormalBias=fe.normalBias,xe.shadowRadius=fe.radius,xe.shadowMapSize=fe.mapSize,xe.shadowCameraNear=fe.camera.near,xe.shadowCameraFar=fe.camera.far,o.pointShadow[m]=xe,o.pointShadowMap[m]=ee,o.pointShadowMatrix[m]=z.shadow.matrix,G++}o.point[m]=ce,m++}else if(z.isHemisphereLight){const ce=t.get(z);ce.skyColor.copy(z.color).multiplyScalar(te*b),ce.groundColor.copy(z.groundColor).multiplyScalar(te*b),o.hemi[T]=ce,T++}}F>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ye.LTC_FLOAT_1,o.rectAreaLTC2=ye.LTC_FLOAT_2):(o.rectAreaLTC1=ye.LTC_HALF_1,o.rectAreaLTC2=ye.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=ye.LTC_FLOAT_1,o.rectAreaLTC2=ye.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=ye.LTC_HALF_1,o.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=x,o.ambient[2]=E;const U=o.hash;(U.directionalLength!==w||U.pointLength!==m||U.spotLength!==g||U.rectAreaLength!==F||U.hemiLength!==T||U.numDirectionalShadows!==D||U.numPointShadows!==G||U.numSpotShadows!==N||U.numSpotMaps!==I||U.numLightProbes!==de)&&(o.directional.length=w,o.spot.length=g,o.rectArea.length=F,o.point.length=m,o.hemi.length=T,o.directionalShadow.length=D,o.directionalShadowMap.length=D,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=N,o.spotShadowMap.length=N,o.directionalShadowMatrix.length=D,o.pointShadowMatrix.length=G,o.spotLightMatrix.length=N+I-K,o.spotLightMap.length=I,o.numSpotLightShadowsWithMaps=K,o.numLightProbes=de,U.directionalLength=w,U.pointLength=m,U.spotLength=g,U.rectAreaLength=F,U.hemiLength=T,U.numDirectionalShadows=D,U.numPointShadows=G,U.numSpotShadows=N,U.numSpotMaps=I,U.numLightProbes=de,o.version=Mw++)}function d(p,_){let v=0,x=0,E=0,w=0,m=0;const g=_.matrixWorldInverse;for(let F=0,T=p.length;F<T;F++){const D=p[F];if(D.isDirectionalLight){const G=o.directional[v];G.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),v++}else if(D.isSpotLight){const G=o.spot[E];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(g),G.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),E++}else if(D.isRectAreaLight){const G=o.rectArea[w];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(g),c.identity(),u.copy(D.matrixWorld),u.premultiply(g),c.extractRotation(u),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),G.halfWidth.applyMatrix4(c),G.halfHeight.applyMatrix4(c),w++}else if(D.isPointLight){const G=o.point[x];G.position.setFromMatrixPosition(D.matrixWorld),G.position.applyMatrix4(g),x++}else if(D.isHemisphereLight){const G=o.hemi[m];G.direction.setFromMatrixPosition(D.matrixWorld),G.direction.transformDirection(g),m++}}}return{setup:f,setupView:d,state:o}}function tp(r,e){const t=new yw(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function bw(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new tp(r,e),t.set(a,[f])):u>=c.length?(f=new tp(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class Tw extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Aw extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ww=`void main() {
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
}`;function Rw(r,e,t){let i=new $p;const o=new ot,a=new ot,u=new cn,c=new Tw({depthPacking:rE}),f=new Aw,d={},p=t.maxTextureSize,_={[cr]:Rn,[Rn]:cr,[Fi]:Fi},v=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:ww,fragmentShader:Cw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new dr;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new oi(E,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let g=this.type;this.render=function(N,I,K){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const de=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),pe=r.state;pe.setBlending(or),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const ue=g!==Ui&&this.type===Ui,z=g===Ui&&this.type!==Ui;for(let re=0,te=N.length;re<te;re++){const le=N[re],ee=le.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const ce=ee.getFrameExtents();if(o.multiply(ce),a.copy(ee.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ce.x),o.x=a.x*ce.x,ee.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ce.y),o.y=a.y*ce.y,ee.mapSize.y=a.y)),ee.map===null||ue===!0||z===!0){const xe=this.type!==Ui?{minFilter:ln,magFilter:ln}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Fr(o.x,o.y,xe),ee.map.texture.name=le.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();const fe=ee.getViewportCount();for(let xe=0;xe<fe;xe++){const De=ee.getViewport(xe);u.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),pe.viewport(u),ee.updateMatrices(le,xe),i=ee.getFrustum(),D(I,K,ee.camera,le,this.type)}ee.isPointLightShadow!==!0&&this.type===Ui&&F(ee,K),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(de,b,U)};function F(N,I){const K=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Fr(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,K,v,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,K,x,w,null)}function T(N,I,K,de){let b=null;const U=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)b=U;else if(b=K.isPointLight===!0?f:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const pe=b.uuid,ue=I.uuid;let z=d[pe];z===void 0&&(z={},d[pe]=z);let re=z[ue];re===void 0&&(re=b.clone(),z[ue]=re,I.addEventListener("dispose",G)),b=re}if(b.visible=I.visible,b.wireframe=I.wireframe,de===Ui?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:_[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const pe=r.properties.get(b);pe.light=K}return b}function D(N,I,K,de,b){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===Ui)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),z=N.material;if(Array.isArray(z)){const re=ue.groups;for(let te=0,le=re.length;te<le;te++){const ee=re[te],ce=z[ee.materialIndex];if(ce&&ce.visible){const fe=T(N,ce,de,b);N.onBeforeShadow(r,N,I,K,ue,fe,ee),r.renderBufferDirect(K,null,ue,fe,N,ee),N.onAfterShadow(r,N,I,K,ue,fe,ee)}}}else if(z.visible){const re=T(N,z,de,b);N.onBeforeShadow(r,N,I,K,ue,re,null),r.renderBufferDirect(K,null,ue,re,N,null),N.onAfterShadow(r,N,I,K,ue,re,null)}}const pe=N.children;for(let ue=0,z=pe.length;ue<z;ue++)D(pe[ue],I,K,de,b)}function G(N){N.target.removeEventListener("dispose",G);for(const K in d){const de=d[K],b=N.target.uuid;b in de&&(de[b].dispose(),delete de[b])}}}function Lw(r,e,t){const i=t.isWebGL2;function o(){let O=!1;const Se=new cn;let Y=null;const ve=new cn(0,0,0,0);return{setMask:function(Ae){Y!==Ae&&!O&&(r.colorMask(Ae,Ae,Ae,Ae),Y=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,ft,yt,Ct,zt){zt===!0&&(Ae*=Ct,ft*=Ct,yt*=Ct),Se.set(Ae,ft,yt,Ct),ve.equals(Se)===!1&&(r.clearColor(Ae,ft,yt,Ct),ve.copy(Se))},reset:function(){O=!1,Y=null,ve.set(-1,0,0,0)}}}function a(){let O=!1,Se=null,Y=null,ve=null;return{setTest:function(Ae){Ae?Ce(r.DEPTH_TEST):Mt(r.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!O&&(r.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(Y!==Ae){switch(Ae){case UM:r.depthFunc(r.NEVER);break;case NM:r.depthFunc(r.ALWAYS);break;case FM:r.depthFunc(r.LESS);break;case Fa:r.depthFunc(r.LEQUAL);break;case OM:r.depthFunc(r.EQUAL);break;case BM:r.depthFunc(r.GEQUAL);break;case zM:r.depthFunc(r.GREATER);break;case GM:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){ve!==Ae&&(r.clearDepth(Ae),ve=Ae)},reset:function(){O=!1,Se=null,Y=null,ve=null}}}function u(){let O=!1,Se=null,Y=null,ve=null,Ae=null,ft=null,yt=null,Ct=null,zt=null;return{setTest:function(Et){O||(Et?Ce(r.STENCIL_TEST):Mt(r.STENCIL_TEST))},setMask:function(Et){Se!==Et&&!O&&(r.stencilMask(Et),Se=Et)},setFunc:function(Et,Rt,nn){(Y!==Et||ve!==Rt||Ae!==nn)&&(r.stencilFunc(Et,Rt,nn),Y=Et,ve=Rt,Ae=nn)},setOp:function(Et,Rt,nn){(ft!==Et||yt!==Rt||Ct!==nn)&&(r.stencilOp(Et,Rt,nn),ft=Et,yt=Rt,Ct=nn)},setLocked:function(Et){O=Et},setClear:function(Et){zt!==Et&&(r.clearStencil(Et),zt=Et)},reset:function(){O=!1,Se=null,Y=null,ve=null,Ae=null,ft=null,yt=null,Ct=null,zt=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},x={},E=new WeakMap,w=[],m=null,g=!1,F=null,T=null,D=null,G=null,N=null,I=null,K=null,de=new bt(0,0,0),b=0,U=!1,pe=null,ue=null,z=null,re=null,te=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ce=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(fe)[1]),ee=ce>=1):fe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),ee=ce>=2);let xe=null,De={};const Qe=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),me=new cn().fromArray(Qe),we=new cn().fromArray(J);function $e(O,Se,Y,ve){const Ae=new Uint8Array(4),ft=r.createTexture();r.bindTexture(O,ft),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<Y;yt++)i&&(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Se+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return ft}const Ne={};Ne[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),Ne[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ne[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ce(r.DEPTH_TEST),f.setFunc(Fa),et(!1),at(Uh),Ce(r.CULL_FACE),He(or);function Ce(O){v[O]!==!0&&(r.enable(O),v[O]=!0)}function Mt(O){v[O]!==!1&&(r.disable(O),v[O]=!1)}function Ve(O,Se){return x[O]!==Se?(r.bindFramebuffer(O,Se),x[O]=Se,i&&(O===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Se),O===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function W(O,Se){let Y=w,ve=!1;if(O){Y=E.get(Se),Y===void 0&&(Y=[],E.set(Se,Y));const Ae=O.textures;if(Y.length!==Ae.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,yt=Ae.length;ft<yt;ft++)Y[ft]=r.COLOR_ATTACHMENT0+ft;Y.length=Ae.length,ve=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ve=!0);if(ve)if(t.isWebGL2)r.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const Ie={[Pr]:r.FUNC_ADD,[xM]:r.FUNC_SUBTRACT,[SM]:r.FUNC_REVERSE_SUBTRACT};if(i)Ie[Bh]=r.MIN,Ie[zh]=r.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ie[Bh]=O.MIN_EXT,Ie[zh]=O.MAX_EXT)}const Ze={[MM]:r.ZERO,[EM]:r.ONE,[yM]:r.SRC_COLOR,[Yc]:r.SRC_ALPHA,[RM]:r.SRC_ALPHA_SATURATE,[wM]:r.DST_COLOR,[TM]:r.DST_ALPHA,[bM]:r.ONE_MINUS_SRC_COLOR,[qc]:r.ONE_MINUS_SRC_ALPHA,[CM]:r.ONE_MINUS_DST_COLOR,[AM]:r.ONE_MINUS_DST_ALPHA,[LM]:r.CONSTANT_COLOR,[PM]:r.ONE_MINUS_CONSTANT_COLOR,[DM]:r.CONSTANT_ALPHA,[IM]:r.ONE_MINUS_CONSTANT_ALPHA};function He(O,Se,Y,ve,Ae,ft,yt,Ct,zt,Et){if(O===or){g===!0&&(Mt(r.BLEND),g=!1);return}if(g===!1&&(Ce(r.BLEND),g=!0),O!==vM){if(O!==F||Et!==U){if((T!==Pr||N!==Pr)&&(r.blendEquation(r.FUNC_ADD),T=Pr,N=Pr),Et)switch(O){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.ONE,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Oh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}D=null,G=null,I=null,K=null,de.set(0,0,0),b=0,F=O,U=Et}return}Ae=Ae||Se,ft=ft||Y,yt=yt||ve,(Se!==T||Ae!==N)&&(r.blendEquationSeparate(Ie[Se],Ie[Ae]),T=Se,N=Ae),(Y!==D||ve!==G||ft!==I||yt!==K)&&(r.blendFuncSeparate(Ze[Y],Ze[ve],Ze[ft],Ze[yt]),D=Y,G=ve,I=ft,K=yt),(Ct.equals(de)===!1||zt!==b)&&(r.blendColor(Ct.r,Ct.g,Ct.b,zt),de.copy(Ct),b=zt),F=O,U=!1}function Je(O,Se){O.side===Fi?Mt(r.CULL_FACE):Ce(r.CULL_FACE);let Y=O.side===Rn;Se&&(Y=!Y),et(Y),O.blending===Ts&&O.transparent===!1?He(or):He(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),f.setFunc(O.depthFunc),f.setTest(O.depthTest),f.setMask(O.depthWrite),c.setMask(O.colorWrite);const ve=O.stencilWrite;d.setTest(ve),ve&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),R(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):Mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){pe!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),pe=O)}function at(O){O!==mM?(Ce(r.CULL_FACE),O!==ue&&(O===Uh?r.cullFace(r.BACK):O===gM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Mt(r.CULL_FACE),ue=O}function Tt(O){O!==z&&(ee&&r.lineWidth(O),z=O)}function R(O,Se,Y){O?(Ce(r.POLYGON_OFFSET_FILL),(re!==Se||te!==Y)&&(r.polygonOffset(Se,Y),re=Se,te=Y)):Mt(r.POLYGON_OFFSET_FILL)}function M(O){O?Ce(r.SCISSOR_TEST):Mt(r.SCISSOR_TEST)}function Q(O){O===void 0&&(O=r.TEXTURE0+le-1),xe!==O&&(r.activeTexture(O),xe=O)}function se(O,Se,Y){Y===void 0&&(xe===null?Y=r.TEXTURE0+le-1:Y=xe);let ve=De[Y];ve===void 0&&(ve={type:void 0,texture:void 0},De[Y]=ve),(ve.type!==O||ve.texture!==Se)&&(xe!==Y&&(r.activeTexture(Y),xe=Y),r.bindTexture(O,Se||Ne[O]),ve.type=O,ve.texture=Se)}function _e(){const O=De[xe];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){me.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function Fe(O){we.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function L(O,Se){let Y=_.get(Se);Y===void 0&&(Y=new WeakMap,_.set(Se,Y));let ve=Y.get(O);ve===void 0&&(ve=r.getUniformBlockIndex(Se,O.name),Y.set(O,ve))}function ae(O,Se){const ve=_.get(Se).get(O);p.get(Se)!==ve&&(r.uniformBlockBinding(Se,ve,O.__bindingPointIndex),p.set(Se,ve))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},xe=null,De={},x={},E=new WeakMap,w=[],m=null,g=!1,F=null,T=null,D=null,G=null,N=null,I=null,K=null,de=new bt(0,0,0),b=0,U=!1,pe=null,ue=null,z=null,re=null,te=null,me.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ce,disable:Mt,bindFramebuffer:Ve,drawBuffers:W,useProgram:Wt,setBlending:He,setMaterial:Je,setFlipSided:et,setCullFace:at,setLineWidth:Tt,setPolygonOffset:R,setScissorTest:M,activeTexture:Q,bindTexture:se,unbindTexture:_e,compressedTexImage2D:ge,compressedTexImage3D:Ke,texImage2D:it,texImage3D:ze,updateUBOMapping:L,uniformBlockBinding:ae,texStorage2D:Me,texStorage3D:Ut,texSubImage2D:Ge,texSubImage3D:Ee,compressedTexSubImage2D:be,compressedTexSubImage3D:je,scissor:Le,viewport:Fe,reset:Ue}}function Pw(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,_=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,M){return E?new OffscreenCanvas(R,M):Va("canvas")}function m(R,M,Q,se){let _e=1;const ge=Tt(R);if((ge.width>se||ge.height>se)&&(_e=se/Math.max(ge.width,ge.height)),_e<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ke=M?Ha:Math.floor,Ge=Ke(_e*ge.width),Ee=Ke(_e*ge.height);v===void 0&&(v=w(Ge,Ee));const be=Q?w(Ge,Ee):v;return be.width=Ge,be.height=Ee,be.getContext("2d").drawImage(R,0,0,Ge,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ge+"x"+Ee+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function g(R){const M=Tt(R);return Qc(M.width)&&Qc(M.height)}function F(R){return c?!1:R.wrapS!==ri||R.wrapT!==ri||R.minFilter!==ln&&R.minFilter!==Cn}function T(R,M){return R.generateMipmaps&&M&&R.minFilter!==ln&&R.minFilter!==Cn}function D(R){r.generateMipmap(R)}function G(R,M,Q,se,_e=!1){if(c===!1)return M;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge=M;if(M===r.RED&&(Q===r.FLOAT&&(ge=r.R32F),Q===r.HALF_FLOAT&&(ge=r.R16F),Q===r.UNSIGNED_BYTE&&(ge=r.R8)),M===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ge=r.R8UI),Q===r.UNSIGNED_SHORT&&(ge=r.R16UI),Q===r.UNSIGNED_INT&&(ge=r.R32UI),Q===r.BYTE&&(ge=r.R8I),Q===r.SHORT&&(ge=r.R16I),Q===r.INT&&(ge=r.R32I)),M===r.RG&&(Q===r.FLOAT&&(ge=r.RG32F),Q===r.HALF_FLOAT&&(ge=r.RG16F),Q===r.UNSIGNED_BYTE&&(ge=r.RG8)),M===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ge=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ge=r.RG16UI),Q===r.UNSIGNED_INT&&(ge=r.RG32UI),Q===r.BYTE&&(ge=r.RG8I),Q===r.SHORT&&(ge=r.RG16I),Q===r.INT&&(ge=r.RG32I)),M===r.RGBA){const Ke=_e?Oa:Pt.getTransfer(se);Q===r.FLOAT&&(ge=r.RGBA32F),Q===r.HALF_FLOAT&&(ge=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ge=Ke===Bt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(R,M,Q){return T(R,Q)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function I(R){return R===ln||R===Gh||R===Qs?r.NEAREST:r.LINEAR}function K(R){const M=R.target;M.removeEventListener("dispose",K),b(M),M.isVideoTexture&&_.delete(M)}function de(R){const M=R.target;M.removeEventListener("dispose",de),pe(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const Q=R.source,se=x.get(Q);if(se){const _e=se[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&U(R),Object.keys(se).length===0&&x.delete(Q)}i.remove(R)}function U(R){const M=i.get(R);r.deleteTexture(M.__webglTexture);const Q=R.source,se=x.get(Q);delete se[M.__cacheKey],u.memory.textures--}function pe(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let _e=0;_e<M.__webglFramebuffer[se].length;_e++)r.deleteFramebuffer(M.__webglFramebuffer[se][_e]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=R.textures;for(let se=0,_e=Q.length;se<_e;se++){const ge=i.get(Q[se]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),u.memory.textures--),i.remove(Q[se])}i.remove(R)}let ue=0;function z(){ue=0}function re(){const R=ue;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),ue+=1,R}function te(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function le(R,M){const Q=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Q,R,M);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+M)}function ee(R,M){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){we(Q,R,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+M)}function ce(R,M){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){we(Q,R,M);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+M)}function fe(R,M){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){$e(Q,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+M)}const xe={[Zc]:r.REPEAT,[ri]:r.CLAMP_TO_EDGE,[jc]:r.MIRRORED_REPEAT},De={[ln]:r.NEAREST,[Gh]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[uc]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},Qe={[aE]:r.NEVER,[dE]:r.ALWAYS,[lE]:r.LESS,[Fp]:r.LEQUAL,[cE]:r.EQUAL,[hE]:r.GEQUAL,[uE]:r.GREATER,[fE]:r.NOTEQUAL};function J(R,M,Q){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===uc||M.magFilter===Qs||M.magFilter===Ir||M.minFilter===Cn||M.minFilter===uc||M.minFilter===Qs||M.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Q?(r.texParameteri(R,r.TEXTURE_WRAP_S,xe[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,xe[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,xe[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,De[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,De[M.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==ri||M.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I(M.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I(M.minFilter)),M.minFilter!==ln&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==Qs&&M.minFilter!==Ir||M.type===mi&&e.has("OES_texture_float_linear")===!1||c===!1&&M.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function me(R,M){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",K));const se=M.source;let _e=x.get(se);_e===void 0&&(_e={},x.set(se,_e));const ge=te(M);if(ge!==R.__cacheKey){_e[ge]===void 0&&(_e[ge]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[ge].usedTimes++;const Ke=_e[R.__cacheKey];Ke!==void 0&&(_e[R.__cacheKey].usedTimes--,Ke.usedTimes===0&&U(M)),R.__cacheKey=ge,R.__webglTexture=_e[ge].texture}return Q}function we(R,M,Q){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const _e=me(R,M),ge=M.source;t.bindTexture(se,R.__webglTexture,r.TEXTURE0+Q);const Ke=i.get(ge);if(ge.version!==Ke.__version||_e===!0){t.activeTexture(r.TEXTURE0+Q);const Ge=Pt.getPrimaries(Pt.workingColorSpace),Ee=M.colorSpace===rr?null:Pt.getPrimaries(M.colorSpace),be=M.colorSpace===rr||Ge===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const je=F(M)&&g(M.image)===!1;let Me=m(M.image,je,!1,o.maxTextureSize);Me=at(M,Me);const Ut=g(Me)||c,it=a.convert(M.format,M.colorSpace);let ze=a.convert(M.type),Le=G(M.internalFormat,it,ze,M.colorSpace,M.isVideoTexture);J(se,M,Ut);let Fe;const L=M.mipmaps,ae=c&&M.isVideoTexture!==!0&&Le!==Np,Ue=Ke.__version===void 0||_e===!0,O=ge.dataReady,Se=N(M,Me,Ut);if(M.isDepthTexture)Le=r.DEPTH_COMPONENT,c?M.type===mi?Le=r.DEPTH_COMPONENT32F:M.type===sr?Le=r.DEPTH_COMPONENT24:M.type===Ur?Le=r.DEPTH24_STENCIL8:Le=r.DEPTH_COMPONENT16:M.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nr&&Le===r.DEPTH_COMPONENT&&M.type!==cu&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,ze=a.convert(M.type)),M.format===Rs&&Le===r.DEPTH_COMPONENT&&(Le=r.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,ze=a.convert(M.type))),Ue&&(ae?t.texStorage2D(r.TEXTURE_2D,1,Le,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Le,Me.width,Me.height,0,it,ze,null));else if(M.isDataTexture)if(L.length>0&&Ut){ae&&Ue&&t.texStorage2D(r.TEXTURE_2D,Se,Le,L[0].width,L[0].height);for(let Y=0,ve=L.length;Y<ve;Y++)Fe=L[Y],ae?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,it,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Le,Fe.width,Fe.height,0,it,ze,Fe.data);M.generateMipmaps=!1}else ae?(Ue&&t.texStorage2D(r.TEXTURE_2D,Se,Le,Me.width,Me.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,it,ze,Me.data)):t.texImage2D(r.TEXTURE_2D,0,Le,Me.width,Me.height,0,it,ze,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Le,L[0].width,L[0].height,Me.depth);for(let Y=0,ve=L.length;Y<ve;Y++)Fe=L[Y],M.format!==si?it!==null?ae?O&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Me.depth,it,Fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Le,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Fe.width,Fe.height,Me.depth,it,ze,Fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Le,Fe.width,Fe.height,Me.depth,0,it,ze,Fe.data)}else{ae&&Ue&&t.texStorage2D(r.TEXTURE_2D,Se,Le,L[0].width,L[0].height);for(let Y=0,ve=L.length;Y<ve;Y++)Fe=L[Y],M.format!==si?it!==null?ae?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,it,Fe.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Le,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Fe.width,Fe.height,it,ze,Fe.data):t.texImage2D(r.TEXTURE_2D,Y,Le,Fe.width,Fe.height,0,it,ze,Fe.data)}else if(M.isDataArrayTexture)ae?(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Le,Me.width,Me.height,Me.depth),O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,it,ze,Me.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,Me.width,Me.height,Me.depth,0,it,ze,Me.data);else if(M.isData3DTexture)ae?(Ue&&t.texStorage3D(r.TEXTURE_3D,Se,Le,Me.width,Me.height,Me.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,it,ze,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Le,Me.width,Me.height,Me.depth,0,it,ze,Me.data);else if(M.isFramebufferTexture){if(Ue)if(ae)t.texStorage2D(r.TEXTURE_2D,Se,Le,Me.width,Me.height);else{let Y=Me.width,ve=Me.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,Le,Y,ve,0,it,ze,null),Y>>=1,ve>>=1}}else if(L.length>0&&Ut){if(ae&&Ue){const Y=Tt(L[0]);t.texStorage2D(r.TEXTURE_2D,Se,Le,Y.width,Y.height)}for(let Y=0,ve=L.length;Y<ve;Y++)Fe=L[Y],ae?O&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,it,ze,Fe):t.texImage2D(r.TEXTURE_2D,Y,Le,it,ze,Fe);M.generateMipmaps=!1}else if(ae){if(Ue){const Y=Tt(Me);t.texStorage2D(r.TEXTURE_2D,Se,Le,Y.width,Y.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,it,ze,Me)}else t.texImage2D(r.TEXTURE_2D,0,Le,it,ze,Me);T(M,Ut)&&D(se),Ke.__version=ge.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $e(R,M,Q){if(M.image.length!==6)return;const se=me(R,M),_e=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Q);const ge=i.get(_e);if(_e.version!==ge.__version||se===!0){t.activeTexture(r.TEXTURE0+Q);const Ke=Pt.getPrimaries(Pt.workingColorSpace),Ge=M.colorSpace===rr?null:Pt.getPrimaries(M.colorSpace),Ee=M.colorSpace===rr||Ke===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,je=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let Y=0;Y<6;Y++)!be&&!je?Me[Y]=m(M.image[Y],!1,!0,o.maxCubemapSize):Me[Y]=je?M.image[Y].image:M.image[Y],Me[Y]=at(M,Me[Y]);const Ut=Me[0],it=g(Ut)||c,ze=a.convert(M.format,M.colorSpace),Le=a.convert(M.type),Fe=G(M.internalFormat,ze,Le,M.colorSpace),L=c&&M.isVideoTexture!==!0,ae=ge.__version===void 0||se===!0,Ue=_e.dataReady;let O=N(M,Ut,it);J(r.TEXTURE_CUBE_MAP,M,it);let Se;if(be){L&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,O,Fe,Ut.width,Ut.height);for(let Y=0;Y<6;Y++){Se=Me[Y].mipmaps;for(let ve=0;ve<Se.length;ve++){const Ae=Se[ve];M.format!==si?ze!==null?L?Ue&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Ae.width,Ae.height,ze,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Ae.width,Ae.height,ze,Le,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Fe,Ae.width,Ae.height,0,ze,Le,Ae.data)}}}else{if(Se=M.mipmaps,L&&ae){Se.length>0&&O++;const Y=Tt(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,O,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(je){L?Ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me[Y].width,Me[Y].height,ze,Le,Me[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,Me[Y].width,Me[Y].height,0,ze,Le,Me[Y].data);for(let ve=0;ve<Se.length;ve++){const ft=Se[ve].image[Y].image;L?Ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,ft.width,ft.height,ze,Le,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Fe,ft.width,ft.height,0,ze,Le,ft.data)}}else{L?Ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ze,Le,Me[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,ze,Le,Me[Y]);for(let ve=0;ve<Se.length;ve++){const Ae=Se[ve];L?Ue&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,ze,Le,Ae.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Fe,ze,Le,Ae.image[Y])}}}T(M,it)&&D(r.TEXTURE_CUBE_MAP),ge.__version=_e.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ne(R,M,Q,se,_e,ge){const Ke=a.convert(Q.format,Q.colorSpace),Ge=a.convert(Q.type),Ee=G(Q.internalFormat,Ke,Ge,Q.colorSpace);if(!i.get(M).__hasExternalTextures){const je=Math.max(1,M.width>>ge),Me=Math.max(1,M.height>>ge);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,ge,Ee,je,Me,M.depth,0,Ke,Ge,null):t.texImage2D(_e,ge,Ee,je,Me,0,Ke,Ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,_e,i.get(Q).__webglTexture,0,He(M)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,_e,i.get(Q).__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(R,M,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let se=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||Je(M)){const _e=M.depthTexture;_e&&_e.isDepthTexture&&(_e.type===mi?se=r.DEPTH_COMPONENT32F:_e.type===sr&&(se=r.DEPTH_COMPONENT24));const ge=He(M);Je(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,se,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,se,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,se,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const se=He(M);Q&&Je(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,M.width,M.height):Je(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const se=M.textures;for(let _e=0;_e<se.length;_e++){const ge=se[_e],Ke=a.convert(ge.format,ge.colorSpace),Ge=a.convert(ge.type),Ee=G(ge.internalFormat,Ke,Ge,ge.colorSpace),be=He(M);Q&&Je(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,Ee,M.width,M.height):Je(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,Ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,_e=He(M);if(M.depthTexture.format===Nr)Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(M.depthTexture.format===Rs)Je(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,_e):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const M=i.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Mt(M.__webglFramebuffer,R)}else if(Q){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(R,M,Q){const se=i.get(R);M!==void 0&&Ne(se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&Ve(R)}function Wt(R){const M=R.texture,Q=i.get(R),se=i.get(M);R.addEventListener("dispose",de);const _e=R.textures,ge=R.isWebGLCubeRenderTarget===!0,Ke=_e.length>1,Ge=g(R)||c;if(Ke||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,u.memory.textures++),ge){Q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(c&&M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[Ee]=[];for(let be=0;be<M.mipmaps.length;be++)Q.__webglFramebuffer[Ee][be]=r.createFramebuffer()}else Q.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(c&&M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)Q.__webglFramebuffer[Ee]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ke)if(o.drawBuffers)for(let Ee=0,be=_e.length;Ee<be;Ee++){const je=i.get(_e[Ee]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),u.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&Je(R)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<_e.length;Ee++){const be=_e[Ee];Q.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const je=a.convert(be.format,be.colorSpace),Me=a.convert(be.type),Ut=G(be.internalFormat,je,Me,be.colorSpace,R.isXRRenderTarget===!0),it=He(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Ut,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),J(r.TEXTURE_CUBE_MAP,M,Ge);for(let Ee=0;Ee<6;Ee++)if(c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Ne(Q.__webglFramebuffer[Ee][be],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,be);else Ne(Q.__webglFramebuffer[Ee],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);T(M,Ge)&&D(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ee=0,be=_e.length;Ee<be;Ee++){const je=_e[Ee],Me=i.get(je);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),J(r.TEXTURE_2D,je,Ge),Ne(Q.__webglFramebuffer,R,je,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),T(je,Ge)&&D(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?Ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,se.__webglTexture),J(Ee,M,Ge),c&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)Ne(Q.__webglFramebuffer[be],R,M,r.COLOR_ATTACHMENT0,Ee,be);else Ne(Q.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,Ee,0);T(M,Ge)&&D(Ee),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Ie(R){const M=g(R)||c,Q=R.textures;for(let se=0,_e=Q.length;se<_e;se++){const ge=Q[se];if(T(ge,M)){const Ke=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ge=i.get(ge).__webglTexture;t.bindTexture(Ke,Ge),D(Ke),t.unbindTexture()}}}function Ze(R){if(c&&R.samples>0&&Je(R)===!1){const M=R.textures,Q=R.width,se=R.height;let _e=r.COLOR_BUFFER_BIT;const ge=[],Ke=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=i.get(R),Ee=M.length>1;if(Ee)for(let be=0;be<M.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let be=0;be<M.length;be++){ge.push(r.COLOR_ATTACHMENT0+be),R.depthBuffer&&ge.push(Ke);const je=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(je===!1&&(R.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ee&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[be]),je===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ke])),Ee){const Me=i.get(M[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,Q,se,0,0,Q,se,_e,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let be=0;be<M.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[be]);const je=i.get(M[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function He(R){return Math.min(o.maxSamples,R.samples)}function Je(R){const M=i.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=u.render.frame;_.get(R)!==M&&(_.set(R,M),R.update())}function at(R,M){const Q=R.colorSpace,se=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Jc||Q!==hr&&Q!==rr&&(Pt.getTransfer(Q)===Bt?c===!1?e.has("EXT_sRGB")===!0&&se===si?(R.format=Jc,R.minFilter=Cn,R.generateMipmaps=!1):M=Bp.sRGBToLinear(M):(se!==si||_e!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=z,this.setTexture2D=le,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=fe,this.rebindTextures=W,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Je}function Dw(r,e,t){const i=t.isWebGL2;function o(a,u=rr){let c;const f=Pt.getTransfer(u);if(a===lr)return r.UNSIGNED_BYTE;if(a===Rp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Lp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ZM)return r.BYTE;if(a===jM)return r.SHORT;if(a===cu)return r.UNSIGNED_SHORT;if(a===Cp)return r.INT;if(a===sr)return r.UNSIGNED_INT;if(a===mi)return r.FLOAT;if(a===fo)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===JM)return r.ALPHA;if(a===si)return r.RGBA;if(a===QM)return r.LUMINANCE;if(a===eE)return r.LUMINANCE_ALPHA;if(a===Nr)return r.DEPTH_COMPONENT;if(a===Rs)return r.DEPTH_STENCIL;if(a===Jc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Pp)return r.RED;if(a===Dp)return r.RED_INTEGER;if(a===tE)return r.RG;if(a===Ip)return r.RG_INTEGER;if(a===Up)return r.RGBA_INTEGER;if(a===fc||a===hc||a===dc||a===pc)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===dc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Hh||a===Vh||a===kh||a===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Np)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Xh||a===Yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Xh)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qh||a===Kh||a===$h||a===Zh||a===jh||a===Jh||a===Qh||a===ed||a===td||a===nd||a===id||a===rd||a===sd||a===od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===qh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===$h)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Jh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qh)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ed)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===td)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===nd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===id)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===rd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sd)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===od)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mc||a===ad||a===ld)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===mc)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nE||a===cd||a===ud||a===fd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===mc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ur?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class Iw extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class La extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uw={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,i),g=this._getHandJoint(d,w);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Uw)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new La;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Mn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new fr({extensions:{fragDepth:!0},vertexShader:Nw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new Za(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bw extends Or{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,x=null,E=null;const w=new Ow,m=t.getContextAttributes();let g=null,F=null;const T=[],D=[],G=new ot;let N=null;const I=new Bn;I.layers.enable(1),I.viewport=new cn;const K=new Bn;K.layers.enable(2),K.viewport=new cn;const de=[I,K],b=new Iw;b.layers.enable(1),b.layers.enable(2);let U=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=T[J];return me===void 0&&(me=new Gc,T[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=T[J];return me===void 0&&(me=new Gc,T[J]=me),me.getGripSpace()},this.getHand=function(J){let me=T[J];return me===void 0&&(me=new Gc,T[J]=me),me.getHandSpace()};function ue(J){const me=D.indexOf(J.inputSource);if(me===-1)return;const we=T[me];we!==void 0&&(we.update(J.inputSource,J.frame,d||u),we.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",re);for(let J=0;J<T.length;J++){const me=D[J];me!==null&&(D[J]=null,T[J].disconnect(me))}U=null,pe=null,w.reset(),e.setRenderTarget(g),x=null,v=null,_=null,o=null,F=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",z),o.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const me={antialias:o.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),F=new Fr(x.framebufferWidth,x.framebufferHeight,{format:si,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,we=null,$e=null;m.depth&&($e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Rs:Nr,we=m.stencil?Ur:sr);const Ne={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Ne),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),F=new Fr(v.textureWidth,v.textureHeight,{format:si,type:lr,depthTexture:new jp(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ce=e.properties.get(F);Ce.__ignoreDepthValues=v.ignoreDepthValues}F.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),Qe.setContext(o),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function re(J){for(let me=0;me<J.removed.length;me++){const we=J.removed[me],$e=D.indexOf(we);$e>=0&&(D[$e]=null,T[$e].disconnect(we))}for(let me=0;me<J.added.length;me++){const we=J.added[me];let $e=D.indexOf(we);if($e===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=D.length){D.push(we),$e=Ce;break}else if(D[Ce]===null){D[Ce]=we,$e=Ce;break}if($e===-1)break}const Ne=T[$e];Ne&&Ne.connect(we)}}const te=new X,le=new X;function ee(J,me,we){te.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);const $e=te.distanceTo(le),Ne=me.projectionMatrix.elements,Ce=we.projectionMatrix.elements,Mt=Ne[14]/(Ne[10]-1),Ve=Ne[14]/(Ne[10]+1),W=(Ne[9]+1)/Ne[5],Wt=(Ne[9]-1)/Ne[5],Ie=(Ne[8]-1)/Ne[0],Ze=(Ce[8]+1)/Ce[0],He=Mt*Ie,Je=Mt*Ze,et=$e/(-Ie+Ze),at=et*-Ie;me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(at),J.translateZ(et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const Tt=Mt+et,R=Ve+et,M=He-at,Q=Je+($e-at),se=W*Ve/R*Tt,_e=Wt*Ve/R*Tt;J.projectionMatrix.makePerspective(M,Q,se,_e,Tt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ce(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;w.texture!==null&&(J.near=w.depthNear,J.far=w.depthFar),b.near=K.near=I.near=J.near,b.far=K.far=I.far=J.far,(U!==b.near||pe!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,pe=b.far,I.near=U,I.far=pe,K.near=U,K.far=pe,I.updateProjectionMatrix(),K.updateProjectionMatrix(),J.updateProjectionMatrix());const me=J.parent,we=b.cameras;ce(b,me);for(let $e=0;$e<we.length;$e++)ce(we[$e],me);we.length===2?ee(b,I,K):b.projectionMatrix.copy(I.projectionMatrix),fe(J,b,me)};function fe(J,me,we){we===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ho*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(J){f=J,v!==null&&(v.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null};let xe=null;function De(J,me){if(p=me.getViewerPose(d||u),E=me,p!==null){const we=p.views;x!==null&&(e.setRenderTargetFramebuffer(F,x.framebuffer),e.setRenderTarget(F));let $e=!1;we.length!==b.cameras.length&&(b.cameras.length=0,$e=!0);for(let Ce=0;Ce<we.length;Ce++){const Mt=we[Ce];let Ve=null;if(x!==null)Ve=x.getViewport(Mt);else{const Wt=_.getViewSubImage(v,Mt);Ve=Wt.viewport,Ce===0&&(e.setRenderTargetTextures(F,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(F))}let W=de[Ce];W===void 0&&(W=new Bn,W.layers.enable(Ce),W.viewport=new cn,de[Ce]=W),W.matrix.fromArray(Mt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Mt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ce===0&&(b.matrix.copy(W.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),$e===!0&&b.cameras.push(W)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Ce=_.getDepthInformation(we[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(e,Ce,o.renderState)}}for(let we=0;we<T.length;we++){const $e=D[we],Ne=T[we];$e!==null&&Ne!==void 0&&Ne.update($e,me,d||u)}w.render(e,b),xe&&xe(J,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),E=null}const Qe=new Zp;Qe.setAnimationLoop(De),this.setAnimationLoop=function(J){xe=J},this.dispose=function(){}}}const Cr=new Bi,zw=new kt;function Gw(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Yp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function o(m,g,F,T,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(m,g):g.isMeshToonMaterial?(a(m,g),_(m,g)):g.isMeshPhongMaterial?(a(m,g),p(m,g)):g.isMeshStandardMaterial?(a(m,g),v(m,g),g.isMeshPhysicalMaterial&&x(m,g,D)):g.isMeshMatcapMaterial?(a(m,g),E(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),w(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(u(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?f(m,g,F,T):g.isSpriteMaterial?d(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const F=e.get(g),T=F.envMap,D=F.envMapRotation;if(T&&(m.envMap.value=T,Cr.copy(D),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Cr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const G=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*G,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function f(m,g,F,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*F,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function p(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function _(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function x(m,g,F){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=F.texture,m.transmissionSamplerSize.value.set(F.width,F.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function E(m,g){g.matcap&&(m.matcap.value=g.matcap)}function w(m,g){const F=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(F.matrixWorld),m.nearDistance.value=F.shadow.camera.near,m.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Hw(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(F,T){const D=T.program;i.uniformBlockBinding(F,D)}function d(F,T){let D=o[F.id];D===void 0&&(E(F),D=p(F),o[F.id]=D,F.addEventListener("dispose",m));const G=T.program;i.updateUBOMapping(F,G);const N=e.render.frame;a[F.id]!==N&&(v(F),a[F.id]=N)}function p(F){const T=_();F.__bindingPointIndex=T;const D=r.createBuffer(),G=F.__size,N=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,D),D}function _(){for(let F=0;F<c;F++)if(u.indexOf(F)===-1)return u.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const T=o[F.id],D=F.uniforms,G=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let N=0,I=D.length;N<I;N++){const K=Array.isArray(D[N])?D[N]:[D[N]];for(let de=0,b=K.length;de<b;de++){const U=K[de];if(x(U,N,de,G)===!0){const pe=U.__offset,ue=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let re=0;re<ue.length;re++){const te=ue[re],le=w(te);typeof te=="number"||typeof te=="boolean"?(U.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,pe+z,U.__data)):te.isMatrix3?(U.__data[0]=te.elements[0],U.__data[1]=te.elements[1],U.__data[2]=te.elements[2],U.__data[3]=0,U.__data[4]=te.elements[3],U.__data[5]=te.elements[4],U.__data[6]=te.elements[5],U.__data[7]=0,U.__data[8]=te.elements[6],U.__data[9]=te.elements[7],U.__data[10]=te.elements[8],U.__data[11]=0):(te.toArray(U.__data,z),z+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,pe,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(F,T,D,G){const N=F.value,I=T+"_"+D;if(G[I]===void 0)return typeof N=="number"||typeof N=="boolean"?G[I]=N:G[I]=N.clone(),!0;{const K=G[I];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return G[I]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function E(F){const T=F.uniforms;let D=0;const G=16;for(let I=0,K=T.length;I<K;I++){const de=Array.isArray(T[I])?T[I]:[T[I]];for(let b=0,U=de.length;b<U;b++){const pe=de[b],ue=Array.isArray(pe.value)?pe.value:[pe.value];for(let z=0,re=ue.length;z<re;z++){const te=ue[z],le=w(te),ee=D%G;ee!==0&&G-ee<le.boundary&&(D+=G-ee),pe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=D,D+=le.storage}}}const N=D%G;return N>0&&(D+=G-N),F.__size=D,F.__cache={},this}function w(F){const T={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(T.boundary=4,T.storage=4):F.isVector2?(T.boundary=8,T.storage=8):F.isVector3||F.isColor?(T.boundary=16,T.storage=12):F.isVector4?(T.boundary=16,T.storage=16):F.isMatrix3?(T.boundary=48,T.storage=48):F.isMatrix4?(T.boundary=64,T.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),T}function m(F){const T=F.target;T.removeEventListener("dispose",m);const D=u.indexOf(T.__bindingPointIndex);u.splice(D,1),r.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function g(){for(const F in o)r.deleteBuffer(o[F]);u=[],o={},a={}}return{bind:f,update:d,dispose:g}}class pu{constructor(e={}){const{canvas:t=RE(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),E=new Int32Array(4);let w=null,m=null;const g=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const T=this;let D=!1,G=0,N=0,I=null,K=-1,de=null;const b=new cn,U=new cn;let pe=null;const ue=new bt(0);let z=0,re=t.width,te=t.height,le=1,ee=null,ce=null;const fe=new cn(0,0,re,te),xe=new cn(0,0,re,te);let De=!1;const Qe=new $p;let J=!1,me=!1,we=null;const $e=new kt,Ne=new ot,Ce=new X,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return I===null?le:1}let W=i;function Wt(C,k){for(let $=0;$<C.length;$++){const j=C[$],q=t.getContext(j,k);if(q!==null)return q}return null}try{const C={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Se,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&k.shift(),W=Wt(k,C),W===null)throw Wt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,Ze,He,Je,et,at,Tt,R,M,Q,se,_e,ge,Ke,Ge,Ee,be,je,Me,Ut,it,ze,Le,Fe;function L(){Ie=new qT(W),Ze=new GT(W,Ie,e),Ie.init(Ze),ze=new Dw(W,Ie,Ze),He=new Lw(W,Ie,Ze),Je=new ZT(W),et=new gw,at=new Pw(W,Ie,He,et,Ze,ze,Je),Tt=new VT(T),R=new YT(T),M=new ty(W,Ze),Le=new BT(W,Ie,M,Ze),Q=new KT(W,M,Je,Le),se=new eA(W,Q,M,Je),Me=new QT(W,Ze,at),Ee=new HT(et),_e=new mw(T,Tt,R,Ie,Ze,Le,Ee),ge=new Gw(T,et),Ke=new vw,Ge=new bw(Ie,Ze),je=new OT(T,Tt,R,He,se,v,f),be=new Rw(T,se,Ze),Fe=new Hw(W,Je,Ze,He),Ut=new zT(W,Ie,Je,Ze),it=new $T(W,Ie,Je,Ze),Je.programs=_e.programs,T.capabilities=Ze,T.extensions=Ie,T.properties=et,T.renderLists=Ke,T.shadowMap=be,T.state=He,T.info=Je}L();const ae=new Bw(T,W);this.xr=ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(C){C!==void 0&&(le=C,this.setSize(re,te,!1))},this.getSize=function(C){return C.set(re,te)},this.setSize=function(C,k,$=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,te=k,t.width=Math.floor(C*le),t.height=Math.floor(k*le),$===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(re*le,te*le).floor()},this.setDrawingBufferSize=function(C,k,$){re=C,te=k,le=$,t.width=Math.floor(C*$),t.height=Math.floor(k*$),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,k,$,j){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,k,$,j),He.viewport(b.copy(fe).multiplyScalar(le).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,k,$,j){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,k,$,j),He.scissor(U.copy(xe).multiplyScalar(le).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){He.setScissorTest(De=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(C=!0,k=!0,$=!0){let j=0;if(C){let q=!1;if(I!==null){const Re=I.texture.format;q=Re===Up||Re===Ip||Re===Dp}if(q){const Re=I.texture.type,Oe=Re===lr||Re===sr||Re===cu||Re===Ur||Re===Rp||Re===Lp,We=je.getClearColor(),Xe=je.getClearAlpha(),ct=We.r,tt=We.g,rt=We.b;Oe?(x[0]=ct,x[1]=tt,x[2]=rt,x[3]=Xe,W.clearBufferuiv(W.COLOR,0,x)):(E[0]=ct,E[1]=tt,E[2]=rt,E[3]=Xe,W.clearBufferiv(W.COLOR,0,E))}else j|=W.COLOR_BUFFER_BIT}k&&(j|=W.DEPTH_BUFFER_BIT),$&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ke.dispose(),Ge.dispose(),et.dispose(),Tt.dispose(),R.dispose(),se.dispose(),Le.dispose(),Fe.dispose(),_e.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",zt),ae.removeEventListener("sessionend",Et),we&&(we.dispose(),we=null),Rt.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Je.autoReset,k=be.enabled,$=be.autoUpdate,j=be.needsUpdate,q=be.type;L(),Je.autoReset=C,be.enabled=k,be.autoUpdate=$,be.needsUpdate=j,be.type=q}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Y(C){const k=C.target;k.removeEventListener("dispose",Y),ve(k)}function ve(C){Ae(C),et.remove(C)}function Ae(C){const k=et.get(C).programs;k!==void 0&&(k.forEach(function($){_e.releaseProgram($)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,$,j,q,Re){k===null&&(k=Mt);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,We=el(C,k,$,j,q);He.setMaterial(j,Oe);let Xe=$.index,ct=1;if(j.wireframe===!0){if(Xe=Q.getWireframeAttribute($),Xe===void 0)return;ct=2}const tt=$.drawRange,rt=$.attributes.position;let Gt=tt.start*ct,un=(tt.start+tt.count)*ct;Re!==null&&(Gt=Math.max(Gt,Re.start*ct),un=Math.min(un,(Re.start+Re.count)*ct)),Xe!==null?(Gt=Math.max(Gt,0),un=Math.min(un,Xe.count)):rt!=null&&(Gt=Math.max(Gt,0),un=Math.min(un,rt.count));const Yt=un-Gt;if(Yt<0||Yt===1/0)return;Le.setup(q,j,We,$,Xe);let Zn,Ft=Ut;if(Xe!==null&&(Zn=M.get(Xe),Ft=it,Ft.setIndex(Zn)),q.isMesh)j.wireframe===!0?(He.setLineWidth(j.wireframeLinewidth*Ve()),Ft.setMode(W.LINES)):Ft.setMode(W.TRIANGLES);else if(q.isLine){let lt=j.linewidth;lt===void 0&&(lt=1),He.setLineWidth(lt*Ve()),q.isLineSegments?Ft.setMode(W.LINES):q.isLineLoop?Ft.setMode(W.LINE_LOOP):Ft.setMode(W.LINE_STRIP)}else q.isPoints?Ft.setMode(W.POINTS):q.isSprite&&Ft.setMode(W.TRIANGLES);if(q.isBatchedMesh)Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ft.renderInstances(Gt,Yt,q.count);else if($.isInstancedBufferGeometry){const lt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ns=Math.min($.instanceCount,lt);Ft.renderInstances(Gt,Yt,Ns)}else Ft.render(Gt,Yt)};function ft(C,k,$){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Hr(C,k,$),C.side=cr,C.needsUpdate=!0,Hr(C,k,$),C.side=Fi):Hr(C,k,$)}this.compile=function(C,k,$=null){$===null&&($=C),m=Ge.get($),m.init(),F.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),C!==$&&C.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(T._useLegacyLights);const j=new Set;return C.traverse(function(q){const Re=q.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const We=Re[Oe];ft(We,$,q),j.add(We)}else ft(Re,$,q),j.add(Re)}),F.pop(),m=null,j},this.compileAsync=function(C,k,$=null){const j=this.compile(C,k,$);return new Promise(q=>{function Re(){if(j.forEach(function(Oe){et.get(Oe).currentProgram.isReady()&&j.delete(Oe)}),j.size===0){q(C);return}setTimeout(Re,10)}Ie.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let yt=null;function Ct(C){yt&&yt(C)}function zt(){Rt.stop()}function Et(){Rt.start()}const Rt=new Zp;Rt.setAnimationLoop(Ct),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(C){yt=C,ae.setAnimationLoop(C),C===null?Rt.stop():Rt.start()},ae.addEventListener("sessionstart",zt),ae.addEventListener("sessionend",Et),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,I),m=Ge.get(C,F.length),m.init(),F.push(m),$e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Qe.setFromProjectionMatrix($e),me=this.localClippingEnabled,J=Ee.init(this.clippingPlanes,me),w=Ke.get(C,g.length),w.init(),g.push(w),nn(C,k,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(ee,ce),this.info.render.frame++,J===!0&&Ee.beginShadows();const $=m.state.shadowsArray;if(be.render($,C,k),J===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1)&&je.render(w,C),m.setupLights(T._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let q=0,Re=j.length;q<Re;q++){const Oe=j[q];$n(w,C,Oe,Oe.viewport)}}else $n(w,C,k);I!==null&&(at.updateMultisampleRenderTarget(I),at.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(T,C,k),Le.resetDefaultState(),K=-1,de=null,F.pop(),F.length>0?m=F[F.length-1]:m=null,g.pop(),g.length>0?w=g[g.length-1]:w=null};function nn(C,k,$,j){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Qe.intersectsSprite(C)){j&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4($e);const Oe=se.update(C),We=C.material;We.visible&&w.push(C,Oe,We,$,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Qe.intersectsObject(C))){const Oe=se.update(C),We=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ce.copy(Oe.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4($e)),Array.isArray(We)){const Xe=Oe.groups;for(let ct=0,tt=Xe.length;ct<tt;ct++){const rt=Xe[ct],Gt=We[rt.materialIndex];Gt&&Gt.visible&&w.push(C,Oe,Gt,$,Ce.z,rt)}}else We.visible&&w.push(C,Oe,We,$,Ce.z,null)}}const Re=C.children;for(let Oe=0,We=Re.length;Oe<We;Oe++)nn(Re[Oe],k,$,j)}function $n(C,k,$,j){const q=C.opaque,Re=C.transmissive,Oe=C.transparent;m.setupLightsView($),J===!0&&Ee.setGlobalState(T.clippingPlanes,$),Re.length>0&&zr(q,Re,k,$),j&&He.viewport(b.copy(j)),q.length>0&&Gr(q,k,$),Re.length>0&&Gr(Re,k,$),Oe.length>0&&Gr(Oe,k,$),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function zr(C,k,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Re=Ze.isWebGL2;we===null&&(we=new Fr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?fo:lr,minFilter:Ir,samples:Re?4:0})),T.getDrawingBufferSize(Ne),Re?we.setSize(Ne.x,Ne.y):we.setSize(Ha(Ne.x),Ha(Ne.y));const Oe=T.getRenderTarget();T.setRenderTarget(we),T.getClearColor(ue),z=T.getClearAlpha(),z<1&&T.setClearColor(16777215,.5),T.clear();const We=T.toneMapping;T.toneMapping=ar,Gr(C,$,j),at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we);let Xe=!1;for(let ct=0,tt=k.length;ct<tt;ct++){const rt=k[ct],Gt=rt.object,un=rt.geometry,Yt=rt.material,Zn=rt.group;if(Yt.side===Fi&&Gt.layers.test(j.layers)){const Ft=Yt.side;Yt.side=Rn,Yt.needsUpdate=!0,xo(Gt,$,j,un,Yt,Zn),Yt.side=Ft,Yt.needsUpdate=!0,Xe=!0}}Xe===!0&&(at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we)),T.setRenderTarget(Oe),T.setClearColor(ue,z),T.toneMapping=We}function Gr(C,k,$){const j=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Re=C.length;q<Re;q++){const Oe=C[q],We=Oe.object,Xe=Oe.geometry,ct=j===null?Oe.material:j,tt=Oe.group;We.layers.test($.layers)&&xo(We,k,$,Xe,ct,tt)}}function xo(C,k,$,j,q,Re){C.onBeforeRender(T,k,$,j,q,Re),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(T,k,$,j,C,Re),q.transparent===!0&&q.side===Fi&&q.forceSinglePass===!1?(q.side=Rn,q.needsUpdate=!0,T.renderBufferDirect($,k,j,q,C,Re),q.side=cr,q.needsUpdate=!0,T.renderBufferDirect($,k,j,q,C,Re),q.side=Fi):T.renderBufferDirect($,k,j,q,C,Re),C.onAfterRender(T,k,$,j,q,Re)}function Hr(C,k,$){k.isScene!==!0&&(k=Mt);const j=et.get(C),q=m.state.lights,Re=m.state.shadowsArray,Oe=q.state.version,We=_e.getParameters(C,q.state,Re,k,$),Xe=_e.getProgramCacheKey(We);let ct=j.programs;j.environment=C.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(C.isMeshStandardMaterial?R:Tt).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",Y),ct=new Map,j.programs=ct);let tt=ct.get(Xe);if(tt!==void 0){if(j.currentProgram===tt&&j.lightsStateVersion===Oe)return Mo(C,We),tt}else We.uniforms=_e.getUniforms(C),C.onBuild($,We,T),C.onBeforeCompile(We,T),tt=_e.acquireProgram(We,Xe),ct.set(Xe,tt),j.uniforms=We.uniforms;const rt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=Ee.uniform),Mo(C,We),j.needsLights=Eo(C),j.lightsStateVersion=Oe,j.needsLights&&(rt.ambientLightColor.value=q.state.ambient,rt.lightProbe.value=q.state.probe,rt.directionalLights.value=q.state.directional,rt.directionalLightShadows.value=q.state.directionalShadow,rt.spotLights.value=q.state.spot,rt.spotLightShadows.value=q.state.spotShadow,rt.rectAreaLights.value=q.state.rectArea,rt.ltc_1.value=q.state.rectAreaLTC1,rt.ltc_2.value=q.state.rectAreaLTC2,rt.pointLights.value=q.state.point,rt.pointLightShadows.value=q.state.pointShadow,rt.hemisphereLights.value=q.state.hemi,rt.directionalShadowMap.value=q.state.directionalShadowMap,rt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,rt.spotShadowMap.value=q.state.spotShadowMap,rt.spotLightMatrix.value=q.state.spotLightMatrix,rt.spotLightMap.value=q.state.spotLightMap,rt.pointShadowMap.value=q.state.pointShadowMap,rt.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=tt,j.uniformsList=null,tt}function So(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ua.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Mo(C,k){const $=et.get(C);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function el(C,k,$,j,q){k.isScene!==!0&&(k=Mt),at.resetTextureUnits();const Re=k.fog,Oe=j.isMeshStandardMaterial?k.environment:null,We=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hr,Xe=(j.isMeshStandardMaterial?R:Tt).get(j.envMap||Oe),ct=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,tt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),rt=!!$.morphAttributes.position,Gt=!!$.morphAttributes.normal,un=!!$.morphAttributes.color;let Yt=ar;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=T.toneMapping);const Zn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=Zn!==void 0?Zn.length:0,lt=et.get(j),Ns=m.state.lights;if(J===!0&&(me===!0||C!==de)){const yn=C===de&&j.id===K;Ee.setState(j,C,yn)}let Dt=!1;j.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Ns.state.version||lt.outputColorSpace!==We||q.isBatchedMesh&&lt.batching===!1||!q.isBatchedMesh&&lt.batching===!0||q.isInstancedMesh&&lt.instancing===!1||!q.isInstancedMesh&&lt.instancing===!0||q.isSkinnedMesh&&lt.skinning===!1||!q.isSkinnedMesh&&lt.skinning===!0||q.isInstancedMesh&&lt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&lt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&lt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&lt.instancingMorph===!1&&q.morphTexture!==null||lt.envMap!==Xe||j.fog===!0&&lt.fog!==Re||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Ee.numPlanes||lt.numIntersection!==Ee.numIntersection)||lt.vertexAlphas!==ct||lt.vertexTangents!==tt||lt.morphTargets!==rt||lt.morphNormals!==Gt||lt.morphColors!==un||lt.toneMapping!==Yt||Ze.isWebGL2===!0&&lt.morphTargetsCount!==Ft)&&(Dt=!0):(Dt=!0,lt.__version=j.version);let li=lt.currentProgram;Dt===!0&&(li=Hr(j,k,q));let Fs=!1,xi=!1,Os=!1;const jt=li.getUniforms(),zn=lt.uniforms;if(He.useProgram(li.program)&&(Fs=!0,xi=!0,Os=!0),j.id!==K&&(K=j.id,xi=!0),Fs||de!==C){jt.setValue(W,"projectionMatrix",C.projectionMatrix),jt.setValue(W,"viewMatrix",C.matrixWorldInverse);const yn=jt.map.cameraPosition;yn!==void 0&&yn.setValue(W,Ce.setFromMatrixPosition(C.matrixWorld)),Ze.logarithmicDepthBuffer&&jt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),de!==C&&(de=C,xi=!0,Os=!0)}if(q.isSkinnedMesh){jt.setOptional(W,q,"bindMatrix"),jt.setOptional(W,q,"bindMatrixInverse");const yn=q.skeleton;yn&&(Ze.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),jt.setValue(W,"boneTexture",yn.boneTexture,at)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(W,q,"batchingTexture"),jt.setValue(W,"batchingTexture",q._matricesTexture,at));const Vr=$.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&Ze.isWebGL2===!0)&&Me.update(q,$,li),(xi||lt.receiveShadow!==q.receiveShadow)&&(lt.receiveShadow=q.receiveShadow,jt.setValue(W,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zn.envMap.value=Xe,zn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),xi&&(jt.setValue(W,"toneMappingExposure",T.toneMappingExposure),lt.needsLights&&tl(zn,Os),Re&&j.fog===!0&&ge.refreshFogUniforms(zn,Re),ge.refreshMaterialUniforms(zn,j,le,te,we),Ua.upload(W,So(lt),zn,at)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ua.upload(W,So(lt),zn,at),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(W,"center",q.center),jt.setValue(W,"modelViewMatrix",q.modelViewMatrix),jt.setValue(W,"normalMatrix",q.normalMatrix),jt.setValue(W,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const yn=j.uniformsGroups;for(let kr=0,yo=yn.length;kr<yo;kr++)if(Ze.isWebGL2){const Wr=yn[kr];Fe.update(Wr,li),Fe.bind(Wr,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function tl(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Eo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,k,$){et.get(C.texture).__webglTexture=k,et.get(C.depthTexture).__webglTexture=$;const j=et.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const $=et.get(C);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,$=0){I=C,G=k,N=$;let j=!0,q=null,Re=!1,Oe=!1;if(C){const Xe=et.get(C);Xe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(W.FRAMEBUFFER,null),j=!1):Xe.__webglFramebuffer===void 0?at.setupRenderTarget(C):Xe.__hasExternalTextures&&at.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);const ct=C.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Oe=!0);const tt=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?q=tt[k][$]:q=tt[k],Re=!0):Ze.isWebGL2&&C.samples>0&&at.useMultisampledRTT(C)===!1?q=et.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[$]:q=tt,b.copy(C.viewport),U.copy(C.scissor),pe=C.scissorTest}else b.copy(fe).multiplyScalar(le).floor(),U.copy(xe).multiplyScalar(le).floor(),pe=De;if(He.bindFramebuffer(W.FRAMEBUFFER,q)&&Ze.drawBuffers&&j&&He.drawBuffers(C,q),He.viewport(b),He.scissor(U),He.setScissorTest(pe),Re){const Xe=et.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Xe.__webglTexture,$)}else if(Oe){const Xe=et.get(C.texture),ct=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xe.__webglTexture,$||0,ct)}K=-1},this.readRenderTargetPixels=function(C,k,$,j,q,Re,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){He.bindFramebuffer(W.FRAMEBUFFER,We);try{const Xe=C.texture,ct=Xe.format,tt=Xe.type;if(ct!==si&&ze.convert(ct)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=tt===fo&&(Ie.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(tt!==lr&&ze.convert(tt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===mi&&(Ze.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-j&&$>=0&&$<=C.height-q&&W.readPixels(k,$,j,q,ze.convert(ct),ze.convert(tt),Re)}finally{const Xe=I!==null?et.get(I).__webglFramebuffer:null;He.bindFramebuffer(W.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,k,$=0){const j=Math.pow(2,-$),q=Math.floor(k.image.width*j),Re=Math.floor(k.image.height*j);at.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,C.x,C.y,q,Re),He.unbindTexture()},this.copyTextureToTexture=function(C,k,$,j=0){const q=k.image.width,Re=k.image.height,Oe=ze.convert($.format),We=ze.convert($.type);at.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,C.x,C.y,q,Re,Oe,We,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Oe,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,j,C.x,C.y,Oe,We,k.image),j===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(C,k,$,j,q=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=Math.round(C.max.x-C.min.x),Oe=Math.round(C.max.y-C.min.y),We=C.max.z-C.min.z+1,Xe=ze.convert(j.format),ct=ze.convert(j.type);let tt;if(j.isData3DTexture)at.setTexture3D(j,0),tt=W.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)at.setTexture2DArray(j,0),tt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const rt=W.getParameter(W.UNPACK_ROW_LENGTH),Gt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),un=W.getParameter(W.UNPACK_SKIP_PIXELS),Yt=W.getParameter(W.UNPACK_SKIP_ROWS),Zn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ft=$.isCompressedTexture?$.mipmaps[q]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ft.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ft.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,C.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,C.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(tt,q,k.x,k.y,k.z,Re,Oe,We,Xe,ct,Ft.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(tt,q,k.x,k.y,k.z,Re,Oe,We,Xe,Ft.data):W.texSubImage3D(tt,q,k.x,k.y,k.z,Re,Oe,We,Xe,ct,Ft),W.pixelStorei(W.UNPACK_ROW_LENGTH,rt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,un),W.pixelStorei(W.UNPACK_SKIP_ROWS,Yt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Zn),q===0&&j.generateMipmaps&&W.generateMipmap(tt),He.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){G=0,N=0,I=null,He.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uu?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vw extends pu{}Vw.prototype.isWebGL1Renderer=!0;class kw extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ww extends Mn{constructor(e=null,t=1,i=1,o,a,u,c,f,d=ln,p=ln,_,v){super(null,u,c,f,d,p,o,a,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class np extends ai{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ms=new kt,ip=new kt,Pa=[],rp=new Br,Xw=new kt,ro=new oi,so=new go;class sp extends oi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new np(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Xw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ms),rp.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(rp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ms),so.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,u=e*a+1;for(let c=0;c<i.length;c++)i[c]=o[u+c]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(i),e.ray.intersectsSphere(so)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,Ms),ip.multiplyMatrices(i,Ms),ro.matrixWorld=ip,ro.raycast(e,Pa);for(let u=0,c=Pa.length;u<c;u++){const f=Pa[u];f.instanceId=a,f.object=this,t.push(f)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new np(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ww(new Float32Array(o*this.count),o,this.count,Pp,mi));const a=this.morphTexture.source.data.data;let u=0;for(let d=0;d<i.length;d++)u+=i[d];const c=this.geometry.morphTargetsRelative?1:1-u,f=o*e;a[f]=c,a.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mu extends dr{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new X,p=new ot;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=i+_/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/e+1)/2,p.y=(u[v+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new _i(u,3)),this.setAttribute("normal",new _i(c,3)),this.setAttribute("uv",new _i(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class op{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);var tu=function(r,e){return tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},tu(r,e)};function Is(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");tu(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function nu(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function iu(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function ru(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function vi(r){return typeof r=="function"}function im(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Hc=im(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function su(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Ja=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=nu(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(w){e={error:w}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(vi(p))try{p()}catch(w){a=w instanceof Hc?w.errors:[w]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=nu(_),x=v.next();!x.done;x=v.next()){var E=x.value;try{ap(E)}catch(w){a=a??[],w instanceof Hc?a=ru(ru([],iu(a)),iu(w.errors)):a.push(w)}}}catch(w){i={error:w}}finally{try{x&&!x.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new Hc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)ap(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&su(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&su(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),rm=Ja.EMPTY;function sm(r){return r instanceof Ja||r&&"closed"in r&&vi(r.remove)&&vi(r.add)&&vi(r.unsubscribe)}function ap(r){vi(r)?r():r.unsubscribe()}var om={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},am={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,ru([r,e],iu(t)))},clearTimeout:function(r){var e=am.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function Yw(r){am.setTimeout(function(){throw r})}function lp(){}function Na(r){r()}var gu=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,sm(t)&&t.add(i)):i.destination=Zw,i}return e.create=function(t,i,o){return new ou(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ja),qw=Function.prototype.bind;function Vc(r,e){return qw.call(r,e)}var Kw=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Da(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Da(i)}else Da(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Da(t)}},r}(),ou=function(r){Is(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(vi(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&om.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&Vc(t.next,c),error:t.error&&Vc(t.error,c),complete:t.complete&&Vc(t.complete,c)}):u=t}return a.destination=new Kw(u),a}return e}(gu);function Da(r){Yw(r)}function $w(r){throw r}var Zw={closed:!0,next:lp,error:$w,complete:lp},jw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function lm(r){return r}function Jw(r){return r.length===0?lm:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var cp=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=e1(e)?e:new ou(e,t,i);return Na(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=up(t),new t(function(o,a){var u=new ou({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[jw]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Jw(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=up(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function up(r){var e;return(e=r??om.Promise)!==null&&e!==void 0?e:Promise}function Qw(r){return r&&vi(r.next)&&vi(r.error)&&vi(r.complete)}function e1(r){return r&&r instanceof gu||Qw(r)&&sm(r)}function t1(r){return vi(r==null?void 0:r.lift)}function cm(r){return function(e){if(t1(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function um(r,e,t,i,o){return new n1(r,e,t,i,o)}var n1=function(r){Is(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(gu),i1=im(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),fm=function(r){Is(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new fp(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new i1},e.prototype.next=function(t){var i=this;Na(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=nu(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Na(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Na(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?rm:(this.currentObservers=null,c.push(t),new Ja(function(){i.currentObservers=null,su(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new cp;return t.source=this,t},e.create=function(t,i){return new fp(t,i)},e}(cp),fp=function(r){Is(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:rm},e}(fm),Us=function(r){Is(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(fm);function er(r,e){return cm(function(t,i){var o=0;t.subscribe(um(i,function(a){i.next(r.call(e,a,o++))}))})}function tr(r,e){return e===void 0&&(e=lm),r=r??r1,cm(function(t,i){var o,a=!0;t.subscribe(um(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function r1(r,e){return r===e}const s1={items:[]},co=new Us(s1);function o1(r){const t={...co.getValue(),items:r};co.next(t)}const a1=new URL(window.location),hp=new URLSearchParams(a1.search),l1={columns:["X_umap0_norm","X_umap1_norm","global_sphere0_norm","global_sphere1_norm","global_sphere2_norm","clusters"],prefix:hp.has("prefix")?hp.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[],groups:[]},St=new Us(l1);function c1(r){const e=St.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};St.next(i)}function u1(r){const t={...St.getValue(),genes:r};St.next(t)}function f1(r){const t={...St.getValue(),prefix:r};St.next(t)}function h1(r){const t={...St.getValue(),groups:r};St.next(t)}const d1={scene:new kw},hm=new Us(d1),p1={isLoading:!0,theme:"light"},uo=new Us(p1);function hi(r){const t={...uo.getValue(),isLoading:r};uo.next(t)}const m1={selectedCelltypes:[],mode:1,selectedSingleGene:"",selectedGenes:[]},xt=new Us(m1);function po(r){const t={...xt.getValue(),selectedCelltypes:[...new Set(r)]};xt.next(t)}function g1(r){const t={...xt.getValue(),mode:r};xt.next(t)}function mo(r){const t={...xt.getValue(),selectedGenes:r};xt.next(t)}const dp={type:"change"},kc={type:"start"},pp={type:"end"},Ia=new Hp,mp=new ir,_1=Math.cos(70*CE.DEG2RAD);class dm extends Or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ge),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ge),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(dp),i.update(),a=o.NONE},this.update=function(){const L=new X,ae=new ur().setFromUnitVectors(e.up,new X(0,1,0)),Ue=ae.clone().invert(),O=new X,Se=new ur,Y=new X,ve=2*Math.PI;return function(ft=null){const yt=i.object.position;L.copy(yt).sub(i.target),L.applyQuaternion(ae),c.setFromVector3(L),i.autoRotate&&a===o.NONE&&pe(b(ft)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let Ct=i.minAzimuthAngle,zt=i.maxAzimuthAngle;isFinite(Ct)&&isFinite(zt)&&(Ct<-Math.PI?Ct+=ve:Ct>Math.PI&&(Ct-=ve),zt<-Math.PI?zt+=ve:zt>Math.PI&&(zt-=ve),Ct<=zt?c.theta=Math.max(Ct,Math.min(zt,c.theta)):c.theta=c.theta>(Ct+zt)/2?Math.max(Ct,c.theta):Math.min(zt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Et=!1;if(i.zoomToCursor&&N||i.object.isOrthographicCamera)c.radius=fe(c.radius);else{const Rt=c.radius;c.radius=fe(c.radius*d),Et=Rt!=c.radius}if(L.setFromSpherical(c),L.applyQuaternion(Ue),yt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0)),i.zoomToCursor&&N){let Rt=null;if(i.object.isPerspectiveCamera){const nn=L.length();Rt=fe(nn*d);const $n=nn-Rt;i.object.position.addScaledVector(D,$n),i.object.updateMatrixWorld(),Et=!!$n}else if(i.object.isOrthographicCamera){const nn=new X(G.x,G.y,0);nn.unproject(i.object);const $n=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Et=$n!==i.object.zoom;const zr=new X(G.x,G.y,0);zr.unproject(i.object),i.object.position.sub(zr).add(nn),i.object.updateMatrixWorld(),Rt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Rt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Rt).add(i.object.position):(Ia.origin.copy(i.object.position),Ia.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ia.direction))<_1?e.lookAt(i.target):(mp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ia.intersectPlane(mp,i.target))))}else if(i.object.isOrthographicCamera){const Rt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),Rt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Et=!0)}return d=1,N=!1,Et||O.distanceToSquared(i.object.position)>u||8*(1-Se.dot(i.object.quaternion))>u||Y.distanceToSquared(i.target)>u?(i.dispatchEvent(dp),O.copy(i.object.position),Se.copy(i.object.quaternion),Y.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",je),i.domElement.removeEventListener("pointerdown",at),i.domElement.removeEventListener("pointercancel",R),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",R),i.domElement.getRootNode().removeEventListener("keydown",ge,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ge),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new op,f=new op;let d=1;const p=new X,_=new ot,v=new ot,x=new ot,E=new ot,w=new ot,m=new ot,g=new ot,F=new ot,T=new ot,D=new X,G=new ot;let N=!1;const I=[],K={};let de=!1;function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function U(L){const ae=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ae)}function pe(L){f.theta-=L}function ue(L){f.phi-=L}const z=function(){const L=new X;return function(Ue,O){L.setFromMatrixColumn(O,0),L.multiplyScalar(-Ue),p.add(L)}}(),re=function(){const L=new X;return function(Ue,O){i.screenSpacePanning===!0?L.setFromMatrixColumn(O,1):(L.setFromMatrixColumn(O,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ue),p.add(L)}}(),te=function(){const L=new X;return function(Ue,O){const Se=i.domElement;if(i.object.isPerspectiveCamera){const Y=i.object.position;L.copy(Y).sub(i.target);let ve=L.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ue*ve/Se.clientHeight,i.object.matrix),re(2*O*ve/Se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ue*(i.object.right-i.object.left)/i.object.zoom/Se.clientWidth,i.object.matrix),re(O*(i.object.top-i.object.bottom)/i.object.zoom/Se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function le(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(L,ae){if(!i.zoomToCursor)return;N=!0;const Ue=i.domElement.getBoundingClientRect(),O=L-Ue.left,Se=ae-Ue.top,Y=Ue.width,ve=Ue.height;G.x=O/Y*2-1,G.y=-(Se/ve)*2+1,D.set(G.x,G.y,1).unproject(i.object).sub(i.object.position).normalize()}function fe(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function xe(L){_.set(L.clientX,L.clientY)}function De(L){ce(L.clientX,L.clientX),g.set(L.clientX,L.clientY)}function Qe(L){E.set(L.clientX,L.clientY)}function J(L){v.set(L.clientX,L.clientY),x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const ae=i.domElement;pe(2*Math.PI*x.x/ae.clientHeight),ue(2*Math.PI*x.y/ae.clientHeight),_.copy(v),i.update()}function me(L){F.set(L.clientX,L.clientY),T.subVectors(F,g),T.y>0?le(U(T.y)):T.y<0&&ee(U(T.y)),g.copy(F),i.update()}function we(L){w.set(L.clientX,L.clientY),m.subVectors(w,E).multiplyScalar(i.panSpeed),te(m.x,m.y),E.copy(w),i.update()}function $e(L){ce(L.clientX,L.clientY),L.deltaY<0?ee(U(L.deltaY)):L.deltaY>0&&le(U(L.deltaY)),i.update()}function Ne(L){let ae=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?ue(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?ue(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?pe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?pe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(-i.keyPanSpeed,0),ae=!0;break}ae&&(L.preventDefault(),i.update())}function Ce(L){if(I.length===1)_.set(L.pageX,L.pageY);else{const ae=Le(L),Ue=.5*(L.pageX+ae.x),O=.5*(L.pageY+ae.y);_.set(Ue,O)}}function Mt(L){if(I.length===1)E.set(L.pageX,L.pageY);else{const ae=Le(L),Ue=.5*(L.pageX+ae.x),O=.5*(L.pageY+ae.y);E.set(Ue,O)}}function Ve(L){const ae=Le(L),Ue=L.pageX-ae.x,O=L.pageY-ae.y,Se=Math.sqrt(Ue*Ue+O*O);g.set(0,Se)}function W(L){i.enableZoom&&Ve(L),i.enablePan&&Mt(L)}function Wt(L){i.enableZoom&&Ve(L),i.enableRotate&&Ce(L)}function Ie(L){if(I.length==1)v.set(L.pageX,L.pageY);else{const Ue=Le(L),O=.5*(L.pageX+Ue.x),Se=.5*(L.pageY+Ue.y);v.set(O,Se)}x.subVectors(v,_).multiplyScalar(i.rotateSpeed);const ae=i.domElement;pe(2*Math.PI*x.x/ae.clientHeight),ue(2*Math.PI*x.y/ae.clientHeight),_.copy(v)}function Ze(L){if(I.length===1)w.set(L.pageX,L.pageY);else{const ae=Le(L),Ue=.5*(L.pageX+ae.x),O=.5*(L.pageY+ae.y);w.set(Ue,O)}m.subVectors(w,E).multiplyScalar(i.panSpeed),te(m.x,m.y),E.copy(w)}function He(L){const ae=Le(L),Ue=L.pageX-ae.x,O=L.pageY-ae.y,Se=Math.sqrt(Ue*Ue+O*O);F.set(0,Se),T.set(0,Math.pow(F.y/g.y,i.zoomSpeed)),le(T.y),g.copy(F);const Y=(L.pageX+ae.x)*.5,ve=(L.pageY+ae.y)*.5;ce(Y,ve)}function Je(L){i.enableZoom&&He(L),i.enablePan&&Ze(L)}function et(L){i.enableZoom&&He(L),i.enableRotate&&Ie(L)}function at(L){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Tt),i.domElement.addEventListener("pointerup",R)),!it(L)&&(Me(L),L.pointerType==="touch"?Ee(L):M(L)))}function Tt(L){i.enabled!==!1&&(L.pointerType==="touch"?be(L):Q(L))}function R(L){switch(Ut(L),I.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Tt),i.domElement.removeEventListener("pointerup",R),i.dispatchEvent(pp),a=o.NONE;break;case 1:const ae=I[0],Ue=K[ae];Ee({pointerId:ae,pageX:Ue.x,pageY:Ue.y});break}}function M(L){let ae;switch(L.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Ni.DOLLY:if(i.enableZoom===!1)return;De(L),a=o.DOLLY;break;case Ni.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Qe(L),a=o.PAN}else{if(i.enableRotate===!1)return;xe(L),a=o.ROTATE}break;case Ni.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;xe(L),a=o.ROTATE}else{if(i.enablePan===!1)return;Qe(L),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(kc)}function Q(L){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;J(L);break;case o.DOLLY:if(i.enableZoom===!1)return;me(L);break;case o.PAN:if(i.enablePan===!1)return;we(L);break}}function se(L){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(L.preventDefault(),i.dispatchEvent(kc),$e(_e(L)),i.dispatchEvent(pp))}function _e(L){const ae=L.deltaMode,Ue={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ae){case 1:Ue.deltaY*=16;break;case 2:Ue.deltaY*=100;break}return L.ctrlKey&&!de&&(Ue.deltaY*=10),Ue}function ge(L){L.key==="Control"&&(de=!0,i.domElement.getRootNode().addEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ke(L){L.key==="Control"&&(de=!1,i.domElement.getRootNode().removeEventListener("keyup",Ke,{passive:!0,capture:!0}))}function Ge(L){i.enabled===!1||i.enablePan===!1||Ne(L)}function Ee(L){switch(ze(L),I.length){case 1:switch(i.touches.ONE){case Rr.ROTATE:if(i.enableRotate===!1)return;Ce(L),a=o.TOUCH_ROTATE;break;case Rr.PAN:if(i.enablePan===!1)return;Mt(L),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case Rr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(L),a=o.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Wt(L),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(kc)}function be(L){switch(ze(L),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(L),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;Ze(L),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(L),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(L),i.update();break;default:a=o.NONE}}function je(L){i.enabled!==!1&&L.preventDefault()}function Me(L){I.push(L.pointerId)}function Ut(L){delete K[L.pointerId];for(let ae=0;ae<I.length;ae++)if(I[ae]==L.pointerId){I.splice(ae,1);return}}function it(L){for(let ae=0;ae<I.length;ae++)if(I[ae]==L.pointerId)return!0;return!1}function ze(L){let ae=K[L.pointerId];ae===void 0&&(ae=new ot,K[L.pointerId]=ae),ae.set(L.pageX,L.pageY)}function Le(L){const ae=L.pointerId===I[0]?I[1]:I[0];return K[ae]}i.domElement.addEventListener("contextmenu",je),i.domElement.addEventListener("pointerdown",at),i.domElement.addEventListener("pointercancel",R),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ka={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ka.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,x=4,E=1,w=2,m=1,g=2,F=4,T=8,D=16,G=32,N=64,I=128,K=256,de=512,b=30,U="...",pe=800,ue=16,z=1,re=2,te=3,le=1/0,ee=9007199254740991,ce=17976931348623157e292,fe=NaN,xe=4294967295,De=xe-1,Qe=xe>>>1,J=[["ary",I],["bind",m],["bindKey",g],["curry",T],["curryRight",D],["flip",de],["partial",G],["partialRight",N],["rearg",K]],me="[object Arguments]",we="[object Array]",$e="[object AsyncFunction]",Ne="[object Boolean]",Ce="[object Date]",Mt="[object DOMException]",Ve="[object Error]",W="[object Function]",Wt="[object GeneratorFunction]",Ie="[object Map]",Ze="[object Number]",He="[object Null]",Je="[object Object]",et="[object Promise]",at="[object Proxy]",Tt="[object RegExp]",R="[object Set]",M="[object String]",Q="[object Symbol]",se="[object Undefined]",_e="[object WeakMap]",ge="[object WeakSet]",Ke="[object ArrayBuffer]",Ge="[object DataView]",Ee="[object Float32Array]",be="[object Float64Array]",je="[object Int8Array]",Me="[object Int16Array]",Ut="[object Int32Array]",it="[object Uint8Array]",ze="[object Uint8ClampedArray]",Le="[object Uint16Array]",Fe="[object Uint32Array]",L=/\b__p \+= '';/g,ae=/\b(__p \+=) '' \+/g,Ue=/(__e\(.*?\)|\b__t\)) \+\n'';/g,O=/&(?:amp|lt|gt|quot|#39);/g,Se=/[&<>"']/g,Y=RegExp(O.source),ve=RegExp(Se.source),Ae=/<%-([\s\S]+?)%>/g,ft=/<%([\s\S]+?)%>/g,yt=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,nn=RegExp(Rt.source),$n=/^\s+/,zr=/\s/,Gr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,xo=/\{\n\/\* \[wrapped with (.+)\] \*/,Hr=/,? & /,So=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mo=/[()=,{}\[\]\/\s]/,el=/\\(\\)?/g,tl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Eo=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,$=/^\[object .+?Constructor\]$/,j=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Re=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Oe=/($^)/,We=/['\n\r\u2028\u2029\\]/g,Xe="\\ud800-\\udfff",ct="\\u0300-\\u036f",tt="\\ufe20-\\ufe2f",rt="\\u20d0-\\u20ff",Gt=ct+tt+rt,un="\\u2700-\\u27bf",Yt="a-z\\xdf-\\xf6\\xf8-\\xff",Zn="\\xac\\xb1\\xd7\\xf7",Ft="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",lt="\\u2000-\\u206f",Ns=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Dt="A-Z\\xc0-\\xd6\\xd8-\\xde",li="\\ufe0e\\ufe0f",Fs=Zn+Ft+lt+Ns,xi="['’]",Os="["+Xe+"]",jt="["+Fs+"]",zn="["+Gt+"]",Vr="\\d+",yn="["+un+"]",kr="["+Yt+"]",yo="[^"+Xe+Fs+Vr+un+Yt+Dt+"]",Wr="\\ud83c[\\udffb-\\udfff]",mm="(?:"+zn+"|"+Wr+")",_u="[^"+Xe+"]",nl="(?:\\ud83c[\\udde6-\\uddff]){2}",il="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+Dt+"]",vu="\\u200d",xu="(?:"+kr+"|"+yo+")",gm="(?:"+Xr+"|"+yo+")",Su="(?:"+xi+"(?:d|ll|m|re|s|t|ve))?",Mu="(?:"+xi+"(?:D|LL|M|RE|S|T|VE))?",Eu=mm+"?",yu="["+li+"]?",_m="(?:"+vu+"(?:"+[_u,nl,il].join("|")+")"+yu+Eu+")*",vm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bu=yu+Eu+_m,Sm="(?:"+[yn,nl,il].join("|")+")"+bu,Mm="(?:"+[_u+zn+"?",zn,nl,il,Os].join("|")+")",Em=RegExp(xi,"g"),ym=RegExp(zn,"g"),rl=RegExp(Wr+"(?="+Wr+")|"+Mm+bu,"g"),bm=RegExp([Xr+"?"+kr+"+"+Su+"(?="+[jt,Xr,"$"].join("|")+")",gm+"+"+Mu+"(?="+[jt,Xr+xu,"$"].join("|")+")",Xr+"?"+xu+"+"+Su,Xr+"+"+Mu,xm,vm,Vr,Sm].join("|"),"g"),Tm=RegExp("["+vu+Xe+Gt+li+"]"),Am=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Cm=-1,Ot={};Ot[Ee]=Ot[be]=Ot[je]=Ot[Me]=Ot[Ut]=Ot[it]=Ot[ze]=Ot[Le]=Ot[Fe]=!0,Ot[me]=Ot[we]=Ot[Ke]=Ot[Ne]=Ot[Ge]=Ot[Ce]=Ot[Ve]=Ot[W]=Ot[Ie]=Ot[Ze]=Ot[Je]=Ot[Tt]=Ot[R]=Ot[M]=Ot[_e]=!1;var Nt={};Nt[me]=Nt[we]=Nt[Ke]=Nt[Ge]=Nt[Ne]=Nt[Ce]=Nt[Ee]=Nt[be]=Nt[je]=Nt[Me]=Nt[Ut]=Nt[Ie]=Nt[Ze]=Nt[Je]=Nt[Tt]=Nt[R]=Nt[M]=Nt[Q]=Nt[it]=Nt[ze]=Nt[Le]=Nt[Fe]=!0,Nt[Ve]=Nt[W]=Nt[_e]=!1;var Rm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Dm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Im=parseFloat,Um=parseInt,Tu=typeof oo=="object"&&oo&&oo.Object===Object&&oo,Nm=typeof self=="object"&&self&&self.Object===Object&&self,on=Tu||Nm||Function("return this")(),sl=e&&!e.nodeType&&e,pr=sl&&!0&&r&&!r.nodeType&&r,Au=pr&&pr.exports===sl,ol=Au&&Tu.process,Gn=function(){try{var H=pr&&pr.require&&pr.require("util").types;return H||ol&&ol.binding&&ol.binding("util")}catch{}}(),wu=Gn&&Gn.isArrayBuffer,Cu=Gn&&Gn.isDate,Ru=Gn&&Gn.isMap,Lu=Gn&&Gn.isRegExp,Pu=Gn&&Gn.isSet,Du=Gn&&Gn.isTypedArray;function Ln(H,ne,Z){switch(Z.length){case 0:return H.call(ne);case 1:return H.call(ne,Z[0]);case 2:return H.call(ne,Z[0],Z[1]);case 3:return H.call(ne,Z[0],Z[1],Z[2])}return H.apply(ne,Z)}function Fm(H,ne,Z,Pe){for(var nt=-1,At=H==null?0:H.length;++nt<At;){var Jt=H[nt];ne(Pe,Jt,Z(Jt),H)}return Pe}function Hn(H,ne){for(var Z=-1,Pe=H==null?0:H.length;++Z<Pe&&ne(H[Z],Z,H)!==!1;);return H}function Om(H,ne){for(var Z=H==null?0:H.length;Z--&&ne(H[Z],Z,H)!==!1;);return H}function Iu(H,ne){for(var Z=-1,Pe=H==null?0:H.length;++Z<Pe;)if(!ne(H[Z],Z,H))return!1;return!0}function zi(H,ne){for(var Z=-1,Pe=H==null?0:H.length,nt=0,At=[];++Z<Pe;){var Jt=H[Z];ne(Jt,Z,H)&&(At[nt++]=Jt)}return At}function bo(H,ne){var Z=H==null?0:H.length;return!!Z&&Yr(H,ne,0)>-1}function al(H,ne,Z){for(var Pe=-1,nt=H==null?0:H.length;++Pe<nt;)if(Z(ne,H[Pe]))return!0;return!1}function Ht(H,ne){for(var Z=-1,Pe=H==null?0:H.length,nt=Array(Pe);++Z<Pe;)nt[Z]=ne(H[Z],Z,H);return nt}function Gi(H,ne){for(var Z=-1,Pe=ne.length,nt=H.length;++Z<Pe;)H[nt+Z]=ne[Z];return H}function ll(H,ne,Z,Pe){var nt=-1,At=H==null?0:H.length;for(Pe&&At&&(Z=H[++nt]);++nt<At;)Z=ne(Z,H[nt],nt,H);return Z}function Bm(H,ne,Z,Pe){var nt=H==null?0:H.length;for(Pe&&nt&&(Z=H[--nt]);nt--;)Z=ne(Z,H[nt],nt,H);return Z}function cl(H,ne){for(var Z=-1,Pe=H==null?0:H.length;++Z<Pe;)if(ne(H[Z],Z,H))return!0;return!1}var zm=ul("length");function Gm(H){return H.split("")}function Hm(H){return H.match(So)||[]}function Uu(H,ne,Z){var Pe;return Z(H,function(nt,At,Jt){if(ne(nt,At,Jt))return Pe=At,!1}),Pe}function To(H,ne,Z,Pe){for(var nt=H.length,At=Z+(Pe?1:-1);Pe?At--:++At<nt;)if(ne(H[At],At,H))return At;return-1}function Yr(H,ne,Z){return ne===ne?Qm(H,ne,Z):To(H,Nu,Z)}function Vm(H,ne,Z,Pe){for(var nt=Z-1,At=H.length;++nt<At;)if(Pe(H[nt],ne))return nt;return-1}function Nu(H){return H!==H}function Fu(H,ne){var Z=H==null?0:H.length;return Z?hl(H,ne)/Z:fe}function ul(H){return function(ne){return ne==null?t:ne[H]}}function fl(H){return function(ne){return H==null?t:H[ne]}}function Ou(H,ne,Z,Pe,nt){return nt(H,function(At,Jt,It){Z=Pe?(Pe=!1,At):ne(Z,At,Jt,It)}),Z}function km(H,ne){var Z=H.length;for(H.sort(ne);Z--;)H[Z]=H[Z].value;return H}function hl(H,ne){for(var Z,Pe=-1,nt=H.length;++Pe<nt;){var At=ne(H[Pe]);At!==t&&(Z=Z===t?At:Z+At)}return Z}function dl(H,ne){for(var Z=-1,Pe=Array(H);++Z<H;)Pe[Z]=ne(Z);return Pe}function Wm(H,ne){return Ht(ne,function(Z){return[Z,H[Z]]})}function Bu(H){return H&&H.slice(0,Vu(H)+1).replace($n,"")}function Pn(H){return function(ne){return H(ne)}}function pl(H,ne){return Ht(ne,function(Z){return H[Z]})}function Bs(H,ne){return H.has(ne)}function zu(H,ne){for(var Z=-1,Pe=H.length;++Z<Pe&&Yr(ne,H[Z],0)>-1;);return Z}function Gu(H,ne){for(var Z=H.length;Z--&&Yr(ne,H[Z],0)>-1;);return Z}function Xm(H,ne){for(var Z=H.length,Pe=0;Z--;)H[Z]===ne&&++Pe;return Pe}var Ym=fl(Rm),qm=fl(Lm);function Km(H){return"\\"+Dm[H]}function $m(H,ne){return H==null?t:H[ne]}function qr(H){return Tm.test(H)}function Zm(H){return Am.test(H)}function jm(H){for(var ne,Z=[];!(ne=H.next()).done;)Z.push(ne.value);return Z}function ml(H){var ne=-1,Z=Array(H.size);return H.forEach(function(Pe,nt){Z[++ne]=[nt,Pe]}),Z}function Hu(H,ne){return function(Z){return H(ne(Z))}}function Hi(H,ne){for(var Z=-1,Pe=H.length,nt=0,At=[];++Z<Pe;){var Jt=H[Z];(Jt===ne||Jt===p)&&(H[Z]=p,At[nt++]=Z)}return At}function Ao(H){var ne=-1,Z=Array(H.size);return H.forEach(function(Pe){Z[++ne]=Pe}),Z}function Jm(H){var ne=-1,Z=Array(H.size);return H.forEach(function(Pe){Z[++ne]=[Pe,Pe]}),Z}function Qm(H,ne,Z){for(var Pe=Z-1,nt=H.length;++Pe<nt;)if(H[Pe]===ne)return Pe;return-1}function eg(H,ne,Z){for(var Pe=Z+1;Pe--;)if(H[Pe]===ne)return Pe;return Pe}function Kr(H){return qr(H)?ng(H):zm(H)}function jn(H){return qr(H)?ig(H):Gm(H)}function Vu(H){for(var ne=H.length;ne--&&zr.test(H.charAt(ne)););return ne}var tg=fl(Pm);function ng(H){for(var ne=rl.lastIndex=0;rl.test(H);)++ne;return ne}function ig(H){return H.match(rl)||[]}function rg(H){return H.match(bm)||[]}var sg=function H(ne){ne=ne==null?on:$r.defaults(on.Object(),ne,$r.pick(on,wm));var Z=ne.Array,Pe=ne.Date,nt=ne.Error,At=ne.Function,Jt=ne.Math,It=ne.Object,gl=ne.RegExp,og=ne.String,Vn=ne.TypeError,wo=Z.prototype,ag=At.prototype,Zr=It.prototype,Co=ne["__core-js_shared__"],Ro=ag.toString,Lt=Zr.hasOwnProperty,lg=0,ku=function(){var n=/[^.]+$/.exec(Co&&Co.keys&&Co.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Lo=Zr.toString,cg=Ro.call(It),ug=on._,fg=gl("^"+Ro.call(Lt).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=Au?ne.Buffer:t,Vi=ne.Symbol,Do=ne.Uint8Array,Wu=Po?Po.allocUnsafe:t,Io=Hu(It.getPrototypeOf,It),Xu=It.create,Yu=Zr.propertyIsEnumerable,Uo=wo.splice,qu=Vi?Vi.isConcatSpreadable:t,zs=Vi?Vi.iterator:t,mr=Vi?Vi.toStringTag:t,No=function(){try{var n=Sr(It,"defineProperty");return n({},"",{}),n}catch{}}(),hg=ne.clearTimeout!==on.clearTimeout&&ne.clearTimeout,dg=Pe&&Pe.now!==on.Date.now&&Pe.now,pg=ne.setTimeout!==on.setTimeout&&ne.setTimeout,Fo=Jt.ceil,Oo=Jt.floor,_l=It.getOwnPropertySymbols,mg=Po?Po.isBuffer:t,Ku=ne.isFinite,gg=wo.join,_g=Hu(It.keys,It),Qt=Jt.max,fn=Jt.min,vg=Pe.now,xg=ne.parseInt,$u=Jt.random,Sg=wo.reverse,vl=Sr(ne,"DataView"),Gs=Sr(ne,"Map"),xl=Sr(ne,"Promise"),jr=Sr(ne,"Set"),Hs=Sr(ne,"WeakMap"),Vs=Sr(It,"create"),Bo=Hs&&new Hs,Jr={},Mg=Mr(vl),Eg=Mr(Gs),yg=Mr(xl),bg=Mr(jr),Tg=Mr(Hs),zo=Vi?Vi.prototype:t,ks=zo?zo.valueOf:t,Zu=zo?zo.toString:t;function y(n){if(Xt(n)&&!st(n)&&!(n instanceof _t)){if(n instanceof kn)return n;if(Lt.call(n,"__wrapped__"))return Jf(n)}return new kn(n)}var Qr=function(){function n(){}return function(s){if(!Vt(s))return{};if(Xu)return Xu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Go(){}function kn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}y.templateSettings={escape:Ae,evaluate:ft,interpolate:yt,variable:"",imports:{_:y}},y.prototype=Go.prototype,y.prototype.constructor=y,kn.prototype=Qr(Go.prototype),kn.prototype.constructor=kn;function _t(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xe,this.__views__=[]}function Ag(){var n=new _t(this.__wrapped__);return n.__actions__=bn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=bn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=bn(this.__views__),n}function wg(){if(this.__filtered__){var n=new _t(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Cg(){var n=this.__wrapped__.value(),s=this.__dir__,l=st(n),h=s<0,S=l?n.length:0,A=G_(0,S,this.__views__),P=A.start,B=A.end,V=B-P,ie=h?B:P-1,oe=this.__iteratees__,he=oe.length,Te=0,Be=fn(V,this.__takeCount__);if(!l||!h&&S==V&&Be==V)return Mf(n,this.__actions__);var Ye=[];e:for(;V--&&Te<Be;){ie+=s;for(var ht=-1,qe=n[ie];++ht<he;){var gt=oe[ht],vt=gt.iteratee,Un=gt.type,vn=vt(qe);if(Un==re)qe=vn;else if(!vn){if(Un==z)continue e;break e}}Ye[Te++]=qe}return Ye}_t.prototype=Qr(Go.prototype),_t.prototype.constructor=_t;function gr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Rg(){this.__data__=Vs?Vs(null):{},this.size=0}function Lg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Pg(n){var s=this.__data__;if(Vs){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function Dg(n){var s=this.__data__;return Vs?s[n]!==t:Lt.call(s,n)}function Ig(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Vs&&s===t?f:s,this}gr.prototype.clear=Rg,gr.prototype.delete=Lg,gr.prototype.get=Pg,gr.prototype.has=Dg,gr.prototype.set=Ig;function Si(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Ug(){this.__data__=[],this.size=0}function Ng(n){var s=this.__data__,l=Ho(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Uo.call(s,l,1),--this.size,!0}function Fg(n){var s=this.__data__,l=Ho(s,n);return l<0?t:s[l][1]}function Og(n){return Ho(this.__data__,n)>-1}function Bg(n,s){var l=this.__data__,h=Ho(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Si.prototype.clear=Ug,Si.prototype.delete=Ng,Si.prototype.get=Fg,Si.prototype.has=Og,Si.prototype.set=Bg;function Mi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function zg(){this.size=0,this.__data__={hash:new gr,map:new(Gs||Si),string:new gr}}function Gg(n){var s=Qo(this,n).delete(n);return this.size-=s?1:0,s}function Hg(n){return Qo(this,n).get(n)}function Vg(n){return Qo(this,n).has(n)}function kg(n,s){var l=Qo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}Mi.prototype.clear=zg,Mi.prototype.delete=Gg,Mi.prototype.get=Hg,Mi.prototype.has=Vg,Mi.prototype.set=kg;function _r(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Mi;++s<l;)this.add(n[s])}function Wg(n){return this.__data__.set(n,f),this}function Xg(n){return this.__data__.has(n)}_r.prototype.add=_r.prototype.push=Wg,_r.prototype.has=Xg;function Jn(n){var s=this.__data__=new Si(n);this.size=s.size}function Yg(){this.__data__=new Si,this.size=0}function qg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Kg(n){return this.__data__.get(n)}function $g(n){return this.__data__.has(n)}function Zg(n,s){var l=this.__data__;if(l instanceof Si){var h=l.__data__;if(!Gs||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new Mi(h)}return l.set(n,s),this.size=l.size,this}Jn.prototype.clear=Yg,Jn.prototype.delete=qg,Jn.prototype.get=Kg,Jn.prototype.has=$g,Jn.prototype.set=Zg;function ju(n,s){var l=st(n),h=!l&&Er(n),S=!l&&!h&&qi(n),A=!l&&!h&&!S&&is(n),P=l||h||S||A,B=P?dl(n.length,og):[],V=B.length;for(var ie in n)(s||Lt.call(n,ie))&&!(P&&(ie=="length"||S&&(ie=="offset"||ie=="parent")||A&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||Ti(ie,V)))&&B.push(ie);return B}function Ju(n){var s=n.length;return s?n[Ll(0,s-1)]:t}function jg(n,s){return ea(bn(n),vr(s,0,n.length))}function Jg(n){return ea(bn(n))}function Sl(n,s,l){(l!==t&&!Qn(n[s],l)||l===t&&!(s in n))&&Ei(n,s,l)}function Ws(n,s,l){var h=n[s];(!(Lt.call(n,s)&&Qn(h,l))||l===t&&!(s in n))&&Ei(n,s,l)}function Ho(n,s){for(var l=n.length;l--;)if(Qn(n[l][0],s))return l;return-1}function Qg(n,s,l,h){return ki(n,function(S,A,P){s(h,S,l(S),P)}),h}function Qu(n,s){return n&&ui(s,rn(s),n)}function e_(n,s){return n&&ui(s,An(s),n)}function Ei(n,s,l){s=="__proto__"&&No?No(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Ml(n,s){for(var l=-1,h=s.length,S=Z(h),A=n==null;++l<h;)S[l]=A?t:tc(n,s[l]);return S}function vr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Wn(n,s,l,h,S,A){var P,B=s&_,V=s&v,ie=s&x;if(l&&(P=S?l(n,h,S,A):l(n)),P!==t)return P;if(!Vt(n))return n;var oe=st(n);if(oe){if(P=V_(n),!B)return bn(n,P)}else{var he=hn(n),Te=he==W||he==Wt;if(qi(n))return bf(n,B);if(he==Je||he==me||Te&&!S){if(P=V||Te?{}:kf(n),!B)return V?P_(n,e_(P,n)):L_(n,Qu(P,n))}else{if(!Nt[he])return S?n:{};P=k_(n,he,B)}}A||(A=new Jn);var Be=A.get(n);if(Be)return Be;A.set(n,P),vh(n)?n.forEach(function(qe){P.add(Wn(qe,s,l,qe,n,A))}):gh(n)&&n.forEach(function(qe,gt){P.set(gt,Wn(qe,s,l,gt,n,A))});var Ye=ie?V?Hl:Gl:V?An:rn,ht=oe?t:Ye(n);return Hn(ht||n,function(qe,gt){ht&&(gt=qe,qe=n[gt]),Ws(P,gt,Wn(qe,s,l,gt,n,A))}),P}function t_(n){var s=rn(n);return function(l){return ef(l,n,s)}}function ef(n,s,l){var h=l.length;if(n==null)return!h;for(n=It(n);h--;){var S=l[h],A=s[S],P=n[S];if(P===t&&!(S in n)||!A(P))return!1}return!0}function tf(n,s,l){if(typeof n!="function")throw new Vn(u);return js(function(){n.apply(t,l)},s)}function Xs(n,s,l,h){var S=-1,A=bo,P=!0,B=n.length,V=[],ie=s.length;if(!B)return V;l&&(s=Ht(s,Pn(l))),h?(A=al,P=!1):s.length>=o&&(A=Bs,P=!1,s=new _r(s));e:for(;++S<B;){var oe=n[S],he=l==null?oe:l(oe);if(oe=h||oe!==0?oe:0,P&&he===he){for(var Te=ie;Te--;)if(s[Te]===he)continue e;V.push(oe)}else A(s,he,h)||V.push(oe)}return V}var ki=Rf(ci),nf=Rf(yl,!0);function n_(n,s){var l=!0;return ki(n,function(h,S,A){return l=!!s(h,S,A),l}),l}function Vo(n,s,l){for(var h=-1,S=n.length;++h<S;){var A=n[h],P=s(A);if(P!=null&&(B===t?P===P&&!In(P):l(P,B)))var B=P,V=A}return V}function i_(n,s,l,h){var S=n.length;for(l=ut(l),l<0&&(l=-l>S?0:S+l),h=h===t||h>S?S:ut(h),h<0&&(h+=S),h=l>h?0:Sh(h);l<h;)n[l++]=s;return n}function rf(n,s){var l=[];return ki(n,function(h,S,A){s(h,S,A)&&l.push(h)}),l}function an(n,s,l,h,S){var A=-1,P=n.length;for(l||(l=X_),S||(S=[]);++A<P;){var B=n[A];s>0&&l(B)?s>1?an(B,s-1,l,h,S):Gi(S,B):h||(S[S.length]=B)}return S}var El=Lf(),sf=Lf(!0);function ci(n,s){return n&&El(n,s,rn)}function yl(n,s){return n&&sf(n,s,rn)}function ko(n,s){return zi(s,function(l){return Ai(n[l])})}function xr(n,s){s=Xi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[fi(s[l++])];return l&&l==h?n:t}function of(n,s,l){var h=s(n);return st(n)?h:Gi(h,l(n))}function gn(n){return n==null?n===t?se:He:mr&&mr in It(n)?z_(n):J_(n)}function bl(n,s){return n>s}function r_(n,s){return n!=null&&Lt.call(n,s)}function s_(n,s){return n!=null&&s in It(n)}function o_(n,s,l){return n>=fn(s,l)&&n<Qt(s,l)}function Tl(n,s,l){for(var h=l?al:bo,S=n[0].length,A=n.length,P=A,B=Z(A),V=1/0,ie=[];P--;){var oe=n[P];P&&s&&(oe=Ht(oe,Pn(s))),V=fn(oe.length,V),B[P]=!l&&(s||S>=120&&oe.length>=120)?new _r(P&&oe):t}oe=n[0];var he=-1,Te=B[0];e:for(;++he<S&&ie.length<V;){var Be=oe[he],Ye=s?s(Be):Be;if(Be=l||Be!==0?Be:0,!(Te?Bs(Te,Ye):h(ie,Ye,l))){for(P=A;--P;){var ht=B[P];if(!(ht?Bs(ht,Ye):h(n[P],Ye,l)))continue e}Te&&Te.push(Ye),ie.push(Be)}}return ie}function a_(n,s,l,h){return ci(n,function(S,A,P){s(h,l(S),A,P)}),h}function Ys(n,s,l){s=Xi(s,n),n=qf(n,s);var h=n==null?n:n[fi(Yn(s))];return h==null?t:Ln(h,n,l)}function af(n){return Xt(n)&&gn(n)==me}function l_(n){return Xt(n)&&gn(n)==Ke}function c_(n){return Xt(n)&&gn(n)==Ce}function qs(n,s,l,h,S){return n===s?!0:n==null||s==null||!Xt(n)&&!Xt(s)?n!==n&&s!==s:u_(n,s,l,h,qs,S)}function u_(n,s,l,h,S,A){var P=st(n),B=st(s),V=P?we:hn(n),ie=B?we:hn(s);V=V==me?Je:V,ie=ie==me?Je:ie;var oe=V==Je,he=ie==Je,Te=V==ie;if(Te&&qi(n)){if(!qi(s))return!1;P=!0,oe=!1}if(Te&&!oe)return A||(A=new Jn),P||is(n)?Gf(n,s,l,h,S,A):O_(n,s,V,l,h,S,A);if(!(l&E)){var Be=oe&&Lt.call(n,"__wrapped__"),Ye=he&&Lt.call(s,"__wrapped__");if(Be||Ye){var ht=Be?n.value():n,qe=Ye?s.value():s;return A||(A=new Jn),S(ht,qe,l,h,A)}}return Te?(A||(A=new Jn),B_(n,s,l,h,S,A)):!1}function f_(n){return Xt(n)&&hn(n)==Ie}function Al(n,s,l,h){var S=l.length,A=S,P=!h;if(n==null)return!A;for(n=It(n);S--;){var B=l[S];if(P&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++S<A;){B=l[S];var V=B[0],ie=n[V],oe=B[1];if(P&&B[2]){if(ie===t&&!(V in n))return!1}else{var he=new Jn;if(h)var Te=h(ie,oe,V,n,s,he);if(!(Te===t?qs(oe,ie,E|w,h,he):Te))return!1}}return!0}function lf(n){if(!Vt(n)||q_(n))return!1;var s=Ai(n)?fg:$;return s.test(Mr(n))}function h_(n){return Xt(n)&&gn(n)==Tt}function d_(n){return Xt(n)&&hn(n)==R}function p_(n){return Xt(n)&&oa(n.length)&&!!Ot[gn(n)]}function cf(n){return typeof n=="function"?n:n==null?wn:typeof n=="object"?st(n)?hf(n[0],n[1]):ff(n):Ph(n)}function wl(n){if(!Zs(n))return _g(n);var s=[];for(var l in It(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function m_(n){if(!Vt(n))return j_(n);var s=Zs(n),l=[];for(var h in n)h=="constructor"&&(s||!Lt.call(n,h))||l.push(h);return l}function Cl(n,s){return n<s}function uf(n,s){var l=-1,h=Tn(n)?Z(n.length):[];return ki(n,function(S,A,P){h[++l]=s(S,A,P)}),h}function ff(n){var s=kl(n);return s.length==1&&s[0][2]?Xf(s[0][0],s[0][1]):function(l){return l===n||Al(l,n,s)}}function hf(n,s){return Xl(n)&&Wf(s)?Xf(fi(n),s):function(l){var h=tc(l,n);return h===t&&h===s?nc(l,n):qs(s,h,E|w)}}function Wo(n,s,l,h,S){n!==s&&El(s,function(A,P){if(S||(S=new Jn),Vt(A))g_(n,s,P,l,Wo,h,S);else{var B=h?h(ql(n,P),A,P+"",n,s,S):t;B===t&&(B=A),Sl(n,P,B)}},An)}function g_(n,s,l,h,S,A,P){var B=ql(n,l),V=ql(s,l),ie=P.get(V);if(ie){Sl(n,l,ie);return}var oe=A?A(B,V,l+"",n,s,P):t,he=oe===t;if(he){var Te=st(V),Be=!Te&&qi(V),Ye=!Te&&!Be&&is(V);oe=V,Te||Be||Ye?st(B)?oe=B:qt(B)?oe=bn(B):Be?(he=!1,oe=bf(V,!0)):Ye?(he=!1,oe=Tf(V,!0)):oe=[]:Js(V)||Er(V)?(oe=B,Er(B)?oe=Mh(B):(!Vt(B)||Ai(B))&&(oe=kf(V))):he=!1}he&&(P.set(V,oe),S(oe,V,h,A,P),P.delete(V)),Sl(n,l,oe)}function df(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ti(s,l)?n[s]:t}function pf(n,s,l){s.length?s=Ht(s,function(A){return st(A)?function(P){return xr(P,A.length===1?A[0]:A)}:A}):s=[wn];var h=-1;s=Ht(s,Pn(ke()));var S=uf(n,function(A,P,B){var V=Ht(s,function(ie){return ie(A)});return{criteria:V,index:++h,value:A}});return km(S,function(A,P){return R_(A,P,l)})}function __(n,s){return mf(n,s,function(l,h){return nc(n,h)})}function mf(n,s,l){for(var h=-1,S=s.length,A={};++h<S;){var P=s[h],B=xr(n,P);l(B,P)&&Ks(A,Xi(P,n),B)}return A}function v_(n){return function(s){return xr(s,n)}}function Rl(n,s,l,h){var S=h?Vm:Yr,A=-1,P=s.length,B=n;for(n===s&&(s=bn(s)),l&&(B=Ht(n,Pn(l)));++A<P;)for(var V=0,ie=s[A],oe=l?l(ie):ie;(V=S(B,oe,V,h))>-1;)B!==n&&Uo.call(B,V,1),Uo.call(n,V,1);return n}function gf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==A){var A=S;Ti(S)?Uo.call(n,S,1):Il(n,S)}}return n}function Ll(n,s){return n+Oo($u()*(s-n+1))}function x_(n,s,l,h){for(var S=-1,A=Qt(Fo((s-n)/(l||1)),0),P=Z(A);A--;)P[h?A:++S]=n,n+=l;return P}function Pl(n,s){var l="";if(!n||s<1||s>ee)return l;do s%2&&(l+=n),s=Oo(s/2),s&&(n+=n);while(s);return l}function mt(n,s){return Kl(Yf(n,s,wn),n+"")}function S_(n){return Ju(rs(n))}function M_(n,s){var l=rs(n);return ea(l,vr(s,0,l.length))}function Ks(n,s,l,h){if(!Vt(n))return n;s=Xi(s,n);for(var S=-1,A=s.length,P=A-1,B=n;B!=null&&++S<A;){var V=fi(s[S]),ie=l;if(V==="__proto__"||V==="constructor"||V==="prototype")return n;if(S!=P){var oe=B[V];ie=h?h(oe,V,B):t,ie===t&&(ie=Vt(oe)?oe:Ti(s[S+1])?[]:{})}Ws(B,V,ie),B=B[V]}return n}var _f=Bo?function(n,s){return Bo.set(n,s),n}:wn,E_=No?function(n,s){return No(n,"toString",{configurable:!0,enumerable:!1,value:rc(s),writable:!0})}:wn;function y_(n){return ea(rs(n))}function Xn(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var A=Z(S);++h<S;)A[h]=n[h+s];return A}function b_(n,s){var l;return ki(n,function(h,S,A){return l=s(h,S,A),!l}),!!l}function Xo(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=Qe){for(;h<S;){var A=h+S>>>1,P=n[A];P!==null&&!In(P)&&(l?P<=s:P<s)?h=A+1:S=A}return S}return Dl(n,s,wn,l)}function Dl(n,s,l,h){var S=0,A=n==null?0:n.length;if(A===0)return 0;s=l(s);for(var P=s!==s,B=s===null,V=In(s),ie=s===t;S<A;){var oe=Oo((S+A)/2),he=l(n[oe]),Te=he!==t,Be=he===null,Ye=he===he,ht=In(he);if(P)var qe=h||Ye;else ie?qe=Ye&&(h||Te):B?qe=Ye&&Te&&(h||!Be):V?qe=Ye&&Te&&!Be&&(h||!ht):Be||ht?qe=!1:qe=h?he<=s:he<s;qe?S=oe+1:A=oe}return fn(A,De)}function vf(n,s){for(var l=-1,h=n.length,S=0,A=[];++l<h;){var P=n[l],B=s?s(P):P;if(!l||!Qn(B,V)){var V=B;A[S++]=P===0?0:P}}return A}function xf(n){return typeof n=="number"?n:In(n)?fe:+n}function Dn(n){if(typeof n=="string")return n;if(st(n))return Ht(n,Dn)+"";if(In(n))return Zu?Zu.call(n):"";var s=n+"";return s=="0"&&1/n==-le?"-0":s}function Wi(n,s,l){var h=-1,S=bo,A=n.length,P=!0,B=[],V=B;if(l)P=!1,S=al;else if(A>=o){var ie=s?null:N_(n);if(ie)return Ao(ie);P=!1,S=Bs,V=new _r}else V=s?[]:B;e:for(;++h<A;){var oe=n[h],he=s?s(oe):oe;if(oe=l||oe!==0?oe:0,P&&he===he){for(var Te=V.length;Te--;)if(V[Te]===he)continue e;s&&V.push(he),B.push(oe)}else S(V,he,l)||(V!==B&&V.push(he),B.push(oe))}return B}function Il(n,s){return s=Xi(s,n),n=qf(n,s),n==null||delete n[fi(Yn(s))]}function Sf(n,s,l,h){return Ks(n,s,l(xr(n,s)),h)}function Yo(n,s,l,h){for(var S=n.length,A=h?S:-1;(h?A--:++A<S)&&s(n[A],A,n););return l?Xn(n,h?0:A,h?A+1:S):Xn(n,h?A+1:0,h?S:A)}function Mf(n,s){var l=n;return l instanceof _t&&(l=l.value()),ll(s,function(h,S){return S.func.apply(S.thisArg,Gi([h],S.args))},l)}function Ul(n,s,l){var h=n.length;if(h<2)return h?Wi(n[0]):[];for(var S=-1,A=Z(h);++S<h;)for(var P=n[S],B=-1;++B<h;)B!=S&&(A[S]=Xs(A[S]||P,n[B],s,l));return Wi(an(A,1),s,l)}function Ef(n,s,l){for(var h=-1,S=n.length,A=s.length,P={};++h<S;){var B=h<A?s[h]:t;l(P,n[h],B)}return P}function Nl(n){return qt(n)?n:[]}function Fl(n){return typeof n=="function"?n:wn}function Xi(n,s){return st(n)?n:Xl(n,s)?[n]:jf(wt(n))}var T_=mt;function Yi(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:Xn(n,s,l)}var yf=hg||function(n){return on.clearTimeout(n)};function bf(n,s){if(s)return n.slice();var l=n.length,h=Wu?Wu(l):new n.constructor(l);return n.copy(h),h}function Ol(n){var s=new n.constructor(n.byteLength);return new Do(s).set(new Do(n)),s}function A_(n,s){var l=s?Ol(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function w_(n){var s=new n.constructor(n.source,Eo.exec(n));return s.lastIndex=n.lastIndex,s}function C_(n){return ks?It(ks.call(n)):{}}function Tf(n,s){var l=s?Ol(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Af(n,s){if(n!==s){var l=n!==t,h=n===null,S=n===n,A=In(n),P=s!==t,B=s===null,V=s===s,ie=In(s);if(!B&&!ie&&!A&&n>s||A&&P&&V&&!B&&!ie||h&&P&&V||!l&&V||!S)return 1;if(!h&&!A&&!ie&&n<s||ie&&l&&S&&!h&&!A||B&&l&&S||!P&&S||!V)return-1}return 0}function R_(n,s,l){for(var h=-1,S=n.criteria,A=s.criteria,P=S.length,B=l.length;++h<P;){var V=Af(S[h],A[h]);if(V){if(h>=B)return V;var ie=l[h];return V*(ie=="desc"?-1:1)}}return n.index-s.index}function wf(n,s,l,h){for(var S=-1,A=n.length,P=l.length,B=-1,V=s.length,ie=Qt(A-P,0),oe=Z(V+ie),he=!h;++B<V;)oe[B]=s[B];for(;++S<P;)(he||S<A)&&(oe[l[S]]=n[S]);for(;ie--;)oe[B++]=n[S++];return oe}function Cf(n,s,l,h){for(var S=-1,A=n.length,P=-1,B=l.length,V=-1,ie=s.length,oe=Qt(A-B,0),he=Z(oe+ie),Te=!h;++S<oe;)he[S]=n[S];for(var Be=S;++V<ie;)he[Be+V]=s[V];for(;++P<B;)(Te||S<A)&&(he[Be+l[P]]=n[S++]);return he}function bn(n,s){var l=-1,h=n.length;for(s||(s=Z(h));++l<h;)s[l]=n[l];return s}function ui(n,s,l,h){var S=!l;l||(l={});for(var A=-1,P=s.length;++A<P;){var B=s[A],V=h?h(l[B],n[B],B,l,n):t;V===t&&(V=n[B]),S?Ei(l,B,V):Ws(l,B,V)}return l}function L_(n,s){return ui(n,Wl(n),s)}function P_(n,s){return ui(n,Hf(n),s)}function qo(n,s){return function(l,h){var S=st(l)?Fm:Qg,A=s?s():{};return S(l,n,ke(h,2),A)}}function es(n){return mt(function(s,l){var h=-1,S=l.length,A=S>1?l[S-1]:t,P=S>2?l[2]:t;for(A=n.length>3&&typeof A=="function"?(S--,A):t,P&&_n(l[0],l[1],P)&&(A=S<3?t:A,S=1),s=It(s);++h<S;){var B=l[h];B&&n(s,B,h,A)}return s})}function Rf(n,s){return function(l,h){if(l==null)return l;if(!Tn(l))return n(l,h);for(var S=l.length,A=s?S:-1,P=It(l);(s?A--:++A<S)&&h(P[A],A,P)!==!1;);return l}}function Lf(n){return function(s,l,h){for(var S=-1,A=It(s),P=h(s),B=P.length;B--;){var V=P[n?B:++S];if(l(A[V],V,A)===!1)break}return s}}function D_(n,s,l){var h=s&m,S=$s(n);function A(){var P=this&&this!==on&&this instanceof A?S:n;return P.apply(h?l:this,arguments)}return A}function Pf(n){return function(s){s=wt(s);var l=qr(s)?jn(s):t,h=l?l[0]:s.charAt(0),S=l?Yi(l,1).join(""):s.slice(1);return h[n]()+S}}function ts(n){return function(s){return ll(Rh(Ch(s).replace(Em,"")),n,"")}}function $s(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Qr(n.prototype),h=n.apply(l,s);return Vt(h)?h:l}}function I_(n,s,l){var h=$s(n);function S(){for(var A=arguments.length,P=Z(A),B=A,V=ns(S);B--;)P[B]=arguments[B];var ie=A<3&&P[0]!==V&&P[A-1]!==V?[]:Hi(P,V);if(A-=ie.length,A<l)return Ff(n,s,Ko,S.placeholder,t,P,ie,t,t,l-A);var oe=this&&this!==on&&this instanceof S?h:n;return Ln(oe,this,P)}return S}function Df(n){return function(s,l,h){var S=It(s);if(!Tn(s)){var A=ke(l,3);s=rn(s),l=function(B){return A(S[B],B,S)}}var P=n(s,l,h);return P>-1?S[A?s[P]:P]:t}}function If(n){return bi(function(s){var l=s.length,h=l,S=kn.prototype.thru;for(n&&s.reverse();h--;){var A=s[h];if(typeof A!="function")throw new Vn(u);if(S&&!P&&Jo(A)=="wrapper")var P=new kn([],!0)}for(h=P?h:l;++h<l;){A=s[h];var B=Jo(A),V=B=="wrapper"?Vl(A):t;V&&Yl(V[0])&&V[1]==(I|T|G|K)&&!V[4].length&&V[9]==1?P=P[Jo(V[0])].apply(P,V[3]):P=A.length==1&&Yl(A)?P[B]():P.thru(A)}return function(){var ie=arguments,oe=ie[0];if(P&&ie.length==1&&st(oe))return P.plant(oe).value();for(var he=0,Te=l?s[he].apply(this,ie):oe;++he<l;)Te=s[he].call(this,Te);return Te}})}function Ko(n,s,l,h,S,A,P,B,V,ie){var oe=s&I,he=s&m,Te=s&g,Be=s&(T|D),Ye=s&de,ht=Te?t:$s(n);function qe(){for(var gt=arguments.length,vt=Z(gt),Un=gt;Un--;)vt[Un]=arguments[Un];if(Be)var vn=ns(qe),Nn=Xm(vt,vn);if(h&&(vt=wf(vt,h,S,Be)),A&&(vt=Cf(vt,A,P,Be)),gt-=Nn,Be&&gt<ie){var Kt=Hi(vt,vn);return Ff(n,s,Ko,qe.placeholder,l,vt,Kt,B,V,ie-gt)}var ei=he?l:this,Ci=Te?ei[n]:n;return gt=vt.length,B?vt=Q_(vt,B):Ye&&gt>1&&vt.reverse(),oe&&V<gt&&(vt.length=V),this&&this!==on&&this instanceof qe&&(Ci=ht||$s(Ci)),Ci.apply(ei,vt)}return qe}function Uf(n,s){return function(l,h){return a_(l,n,s(h),{})}}function $o(n,s){return function(l,h){var S;if(l===t&&h===t)return s;if(l!==t&&(S=l),h!==t){if(S===t)return h;typeof l=="string"||typeof h=="string"?(l=Dn(l),h=Dn(h)):(l=xf(l),h=xf(h)),S=n(l,h)}return S}}function Bl(n){return bi(function(s){return s=Ht(s,Pn(ke())),mt(function(l){var h=this;return n(s,function(S){return Ln(S,h,l)})})})}function Zo(n,s){s=s===t?" ":Dn(s);var l=s.length;if(l<2)return l?Pl(s,n):s;var h=Pl(s,Fo(n/Kr(s)));return qr(s)?Yi(jn(h),0,n).join(""):h.slice(0,n)}function U_(n,s,l,h){var S=s&m,A=$s(n);function P(){for(var B=-1,V=arguments.length,ie=-1,oe=h.length,he=Z(oe+V),Te=this&&this!==on&&this instanceof P?A:n;++ie<oe;)he[ie]=h[ie];for(;V--;)he[ie++]=arguments[++B];return Ln(Te,S?l:this,he)}return P}function Nf(n){return function(s,l,h){return h&&typeof h!="number"&&_n(s,l,h)&&(l=h=t),s=wi(s),l===t?(l=s,s=0):l=wi(l),h=h===t?s<l?1:-1:wi(h),x_(s,l,h,n)}}function jo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=qn(s),l=qn(l)),n(s,l)}}function Ff(n,s,l,h,S,A,P,B,V,ie){var oe=s&T,he=oe?P:t,Te=oe?t:P,Be=oe?A:t,Ye=oe?t:A;s|=oe?G:N,s&=~(oe?N:G),s&F||(s&=~(m|g));var ht=[n,s,S,Be,he,Ye,Te,B,V,ie],qe=l.apply(t,ht);return Yl(n)&&Kf(qe,ht),qe.placeholder=h,$f(qe,n,s)}function zl(n){var s=Jt[n];return function(l,h){if(l=qn(l),h=h==null?0:fn(ut(h),292),h&&Ku(l)){var S=(wt(l)+"e").split("e"),A=s(S[0]+"e"+(+S[1]+h));return S=(wt(A)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var N_=jr&&1/Ao(new jr([,-0]))[1]==le?function(n){return new jr(n)}:ac;function Of(n){return function(s){var l=hn(s);return l==Ie?ml(s):l==R?Jm(s):Wm(s,n(s))}}function yi(n,s,l,h,S,A,P,B){var V=s&g;if(!V&&typeof n!="function")throw new Vn(u);var ie=h?h.length:0;if(ie||(s&=~(G|N),h=S=t),P=P===t?P:Qt(ut(P),0),B=B===t?B:ut(B),ie-=S?S.length:0,s&N){var oe=h,he=S;h=S=t}var Te=V?t:Vl(n),Be=[n,s,l,h,S,oe,he,A,P,B];if(Te&&Z_(Be,Te),n=Be[0],s=Be[1],l=Be[2],h=Be[3],S=Be[4],B=Be[9]=Be[9]===t?V?0:n.length:Qt(Be[9]-ie,0),!B&&s&(T|D)&&(s&=~(T|D)),!s||s==m)var Ye=D_(n,s,l);else s==T||s==D?Ye=I_(n,s,B):(s==G||s==(m|G))&&!S.length?Ye=U_(n,s,l,h):Ye=Ko.apply(t,Be);var ht=Te?_f:Kf;return $f(ht(Ye,Be),n,s)}function Bf(n,s,l,h){return n===t||Qn(n,Zr[l])&&!Lt.call(h,l)?s:n}function zf(n,s,l,h,S,A){return Vt(n)&&Vt(s)&&(A.set(s,n),Wo(n,s,t,zf,A),A.delete(s)),n}function F_(n){return Js(n)?t:n}function Gf(n,s,l,h,S,A){var P=l&E,B=n.length,V=s.length;if(B!=V&&!(P&&V>B))return!1;var ie=A.get(n),oe=A.get(s);if(ie&&oe)return ie==s&&oe==n;var he=-1,Te=!0,Be=l&w?new _r:t;for(A.set(n,s),A.set(s,n);++he<B;){var Ye=n[he],ht=s[he];if(h)var qe=P?h(ht,Ye,he,s,n,A):h(Ye,ht,he,n,s,A);if(qe!==t){if(qe)continue;Te=!1;break}if(Be){if(!cl(s,function(gt,vt){if(!Bs(Be,vt)&&(Ye===gt||S(Ye,gt,l,h,A)))return Be.push(vt)})){Te=!1;break}}else if(!(Ye===ht||S(Ye,ht,l,h,A))){Te=!1;break}}return A.delete(n),A.delete(s),Te}function O_(n,s,l,h,S,A,P){switch(l){case Ge:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ke:return!(n.byteLength!=s.byteLength||!A(new Do(n),new Do(s)));case Ne:case Ce:case Ze:return Qn(+n,+s);case Ve:return n.name==s.name&&n.message==s.message;case Tt:case M:return n==s+"";case Ie:var B=ml;case R:var V=h&E;if(B||(B=Ao),n.size!=s.size&&!V)return!1;var ie=P.get(n);if(ie)return ie==s;h|=w,P.set(n,s);var oe=Gf(B(n),B(s),h,S,A,P);return P.delete(n),oe;case Q:if(ks)return ks.call(n)==ks.call(s)}return!1}function B_(n,s,l,h,S,A){var P=l&E,B=Gl(n),V=B.length,ie=Gl(s),oe=ie.length;if(V!=oe&&!P)return!1;for(var he=V;he--;){var Te=B[he];if(!(P?Te in s:Lt.call(s,Te)))return!1}var Be=A.get(n),Ye=A.get(s);if(Be&&Ye)return Be==s&&Ye==n;var ht=!0;A.set(n,s),A.set(s,n);for(var qe=P;++he<V;){Te=B[he];var gt=n[Te],vt=s[Te];if(h)var Un=P?h(vt,gt,Te,s,n,A):h(gt,vt,Te,n,s,A);if(!(Un===t?gt===vt||S(gt,vt,l,h,A):Un)){ht=!1;break}qe||(qe=Te=="constructor")}if(ht&&!qe){var vn=n.constructor,Nn=s.constructor;vn!=Nn&&"constructor"in n&&"constructor"in s&&!(typeof vn=="function"&&vn instanceof vn&&typeof Nn=="function"&&Nn instanceof Nn)&&(ht=!1)}return A.delete(n),A.delete(s),ht}function bi(n){return Kl(Yf(n,t,th),n+"")}function Gl(n){return of(n,rn,Wl)}function Hl(n){return of(n,An,Hf)}var Vl=Bo?function(n){return Bo.get(n)}:ac;function Jo(n){for(var s=n.name+"",l=Jr[s],h=Lt.call(Jr,s)?l.length:0;h--;){var S=l[h],A=S.func;if(A==null||A==n)return S.name}return s}function ns(n){var s=Lt.call(y,"placeholder")?y:n;return s.placeholder}function ke(){var n=y.iteratee||sc;return n=n===sc?cf:n,arguments.length?n(arguments[0],arguments[1]):n}function Qo(n,s){var l=n.__data__;return Y_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function kl(n){for(var s=rn(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Wf(S)]}return s}function Sr(n,s){var l=$m(n,s);return lf(l)?l:t}function z_(n){var s=Lt.call(n,mr),l=n[mr];try{n[mr]=t;var h=!0}catch{}var S=Lo.call(n);return h&&(s?n[mr]=l:delete n[mr]),S}var Wl=_l?function(n){return n==null?[]:(n=It(n),zi(_l(n),function(s){return Yu.call(n,s)}))}:lc,Hf=_l?function(n){for(var s=[];n;)Gi(s,Wl(n)),n=Io(n);return s}:lc,hn=gn;(vl&&hn(new vl(new ArrayBuffer(1)))!=Ge||Gs&&hn(new Gs)!=Ie||xl&&hn(xl.resolve())!=et||jr&&hn(new jr)!=R||Hs&&hn(new Hs)!=_e)&&(hn=function(n){var s=gn(n),l=s==Je?n.constructor:t,h=l?Mr(l):"";if(h)switch(h){case Mg:return Ge;case Eg:return Ie;case yg:return et;case bg:return R;case Tg:return _e}return s});function G_(n,s,l){for(var h=-1,S=l.length;++h<S;){var A=l[h],P=A.size;switch(A.type){case"drop":n+=P;break;case"dropRight":s-=P;break;case"take":s=fn(s,n+P);break;case"takeRight":n=Qt(n,s-P);break}}return{start:n,end:s}}function H_(n){var s=n.match(xo);return s?s[1].split(Hr):[]}function Vf(n,s,l){s=Xi(s,n);for(var h=-1,S=s.length,A=!1;++h<S;){var P=fi(s[h]);if(!(A=n!=null&&l(n,P)))break;n=n[P]}return A||++h!=S?A:(S=n==null?0:n.length,!!S&&oa(S)&&Ti(P,S)&&(st(n)||Er(n)))}function V_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function kf(n){return typeof n.constructor=="function"&&!Zs(n)?Qr(Io(n)):{}}function k_(n,s,l){var h=n.constructor;switch(s){case Ke:return Ol(n);case Ne:case Ce:return new h(+n);case Ge:return A_(n,l);case Ee:case be:case je:case Me:case Ut:case it:case ze:case Le:case Fe:return Tf(n,l);case Ie:return new h;case Ze:case M:return new h(n);case Tt:return w_(n);case R:return new h;case Q:return C_(n)}}function W_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Gr,`{
/* [wrapped with `+s+`] */
`)}function X_(n){return st(n)||Er(n)||!!(qu&&n&&n[qu])}function Ti(n,s){var l=typeof n;return s=s??ee,!!s&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<s}function _n(n,s,l){if(!Vt(l))return!1;var h=typeof s;return(h=="number"?Tn(l)&&Ti(s,l.length):h=="string"&&s in l)?Qn(l[s],n):!1}function Xl(n,s){if(st(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||In(n)?!0:zt.test(n)||!Ct.test(n)||s!=null&&n in It(s)}function Y_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Yl(n){var s=Jo(n),l=y[s];if(typeof l!="function"||!(s in _t.prototype))return!1;if(n===l)return!0;var h=Vl(l);return!!h&&n===h[0]}function q_(n){return!!ku&&ku in n}var K_=Co?Ai:cc;function Zs(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Zr;return n===l}function Wf(n){return n===n&&!Vt(n)}function Xf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in It(l))}}function $_(n){var s=ra(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function Z_(n,s){var l=n[1],h=s[1],S=l|h,A=S<(m|g|I),P=h==I&&l==T||h==I&&l==K&&n[7].length<=s[8]||h==(I|K)&&s[7].length<=s[8]&&l==T;if(!(A||P))return n;h&m&&(n[2]=s[2],S|=l&m?0:F);var B=s[3];if(B){var V=n[3];n[3]=V?wf(V,B,s[4]):B,n[4]=V?Hi(n[3],p):s[4]}return B=s[5],B&&(V=n[5],n[5]=V?Cf(V,B,s[6]):B,n[6]=V?Hi(n[5],p):s[6]),B=s[7],B&&(n[7]=B),h&I&&(n[8]=n[8]==null?s[8]:fn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function j_(n){var s=[];if(n!=null)for(var l in It(n))s.push(l);return s}function J_(n){return Lo.call(n)}function Yf(n,s,l){return s=Qt(s===t?n.length-1:s,0),function(){for(var h=arguments,S=-1,A=Qt(h.length-s,0),P=Z(A);++S<A;)P[S]=h[s+S];S=-1;for(var B=Z(s+1);++S<s;)B[S]=h[S];return B[s]=l(P),Ln(n,this,B)}}function qf(n,s){return s.length<2?n:xr(n,Xn(s,0,-1))}function Q_(n,s){for(var l=n.length,h=fn(s.length,l),S=bn(n);h--;){var A=s[h];n[h]=Ti(A,l)?S[A]:t}return n}function ql(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Kf=Zf(_f),js=pg||function(n,s){return on.setTimeout(n,s)},Kl=Zf(E_);function $f(n,s,l){var h=s+"";return Kl(n,W_(h,ev(H_(h),l)))}function Zf(n){var s=0,l=0;return function(){var h=vg(),S=ue-(h-l);if(l=h,S>0){if(++s>=pe)return arguments[0]}else s=0;return n.apply(t,arguments)}}function ea(n,s){var l=-1,h=n.length,S=h-1;for(s=s===t?h:s;++l<s;){var A=Ll(l,S),P=n[A];n[A]=n[l],n[l]=P}return n.length=s,n}var jf=$_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(Et,function(l,h,S,A){s.push(S?A.replace(el,"$1"):h||l)}),s});function fi(n){if(typeof n=="string"||In(n))return n;var s=n+"";return s=="0"&&1/n==-le?"-0":s}function Mr(n){if(n!=null){try{return Ro.call(n)}catch{}try{return n+""}catch{}}return""}function ev(n,s){return Hn(J,function(l){var h="_."+l[0];s&l[1]&&!bo(n,h)&&n.push(h)}),n.sort()}function Jf(n){if(n instanceof _t)return n.clone();var s=new kn(n.__wrapped__,n.__chain__);return s.__actions__=bn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function tv(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=Qt(ut(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,A=0,P=Z(Fo(h/s));S<h;)P[A++]=Xn(n,S,S+=s);return P}function nv(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var A=n[s];A&&(S[h++]=A)}return S}function iv(){var n=arguments.length;if(!n)return[];for(var s=Z(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Gi(st(l)?bn(l):[l],an(s,1))}var rv=mt(function(n,s){return qt(n)?Xs(n,an(s,1,qt,!0)):[]}),sv=mt(function(n,s){var l=Yn(s);return qt(l)&&(l=t),qt(n)?Xs(n,an(s,1,qt,!0),ke(l,2)):[]}),ov=mt(function(n,s){var l=Yn(s);return qt(l)&&(l=t),qt(n)?Xs(n,an(s,1,qt,!0),t,l):[]});function av(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ut(s),Xn(n,s<0?0:s,h)):[]}function lv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ut(s),s=h-s,Xn(n,0,s<0?0:s)):[]}function cv(n,s){return n&&n.length?Yo(n,ke(s,3),!0,!0):[]}function uv(n,s){return n&&n.length?Yo(n,ke(s,3),!0):[]}function fv(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&_n(n,s,l)&&(l=0,h=S),i_(n,s,l,h)):[]}function Qf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ut(l);return S<0&&(S=Qt(h+S,0)),To(n,ke(s,3),S)}function eh(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==t&&(S=ut(l),S=l<0?Qt(h+S,0):fn(S,h-1)),To(n,ke(s,3),S,!0)}function th(n){var s=n==null?0:n.length;return s?an(n,1):[]}function hv(n){var s=n==null?0:n.length;return s?an(n,le):[]}function dv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ut(s),an(n,s)):[]}function pv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function nh(n){return n&&n.length?n[0]:t}function mv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:ut(l);return S<0&&(S=Qt(h+S,0)),Yr(n,s,S)}function gv(n){var s=n==null?0:n.length;return s?Xn(n,0,-1):[]}var _v=mt(function(n){var s=Ht(n,Nl);return s.length&&s[0]===n[0]?Tl(s):[]}),vv=mt(function(n){var s=Yn(n),l=Ht(n,Nl);return s===Yn(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Tl(l,ke(s,2)):[]}),xv=mt(function(n){var s=Yn(n),l=Ht(n,Nl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Tl(l,t,s):[]});function Sv(n,s){return n==null?"":gg.call(n,s)}function Yn(n){var s=n==null?0:n.length;return s?n[s-1]:t}function Mv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==t&&(S=ut(l),S=S<0?Qt(h+S,0):fn(S,h-1)),s===s?eg(n,s,S):To(n,Nu,S,!0)}function Ev(n,s){return n&&n.length?df(n,ut(s)):t}var yv=mt(ih);function ih(n,s){return n&&n.length&&s&&s.length?Rl(n,s):n}function bv(n,s,l){return n&&n.length&&s&&s.length?Rl(n,s,ke(l,2)):n}function Tv(n,s,l){return n&&n.length&&s&&s.length?Rl(n,s,t,l):n}var Av=bi(function(n,s){var l=n==null?0:n.length,h=Ml(n,s);return gf(n,Ht(s,function(S){return Ti(S,l)?+S:S}).sort(Af)),h});function wv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],A=n.length;for(s=ke(s,3);++h<A;){var P=n[h];s(P,h,n)&&(l.push(P),S.push(h))}return gf(n,S),l}function $l(n){return n==null?n:Sg.call(n)}function Cv(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&_n(n,s,l)?(s=0,l=h):(s=s==null?0:ut(s),l=l===t?h:ut(l)),Xn(n,s,l)):[]}function Rv(n,s){return Xo(n,s)}function Lv(n,s,l){return Dl(n,s,ke(l,2))}function Pv(n,s){var l=n==null?0:n.length;if(l){var h=Xo(n,s);if(h<l&&Qn(n[h],s))return h}return-1}function Dv(n,s){return Xo(n,s,!0)}function Iv(n,s,l){return Dl(n,s,ke(l,2),!0)}function Uv(n,s){var l=n==null?0:n.length;if(l){var h=Xo(n,s,!0)-1;if(Qn(n[h],s))return h}return-1}function Nv(n){return n&&n.length?vf(n):[]}function Fv(n,s){return n&&n.length?vf(n,ke(s,2)):[]}function Ov(n){var s=n==null?0:n.length;return s?Xn(n,1,s):[]}function Bv(n,s,l){return n&&n.length?(s=l||s===t?1:ut(s),Xn(n,0,s<0?0:s)):[]}function zv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ut(s),s=h-s,Xn(n,s<0?0:s,h)):[]}function Gv(n,s){return n&&n.length?Yo(n,ke(s,3),!1,!0):[]}function Hv(n,s){return n&&n.length?Yo(n,ke(s,3)):[]}var Vv=mt(function(n){return Wi(an(n,1,qt,!0))}),kv=mt(function(n){var s=Yn(n);return qt(s)&&(s=t),Wi(an(n,1,qt,!0),ke(s,2))}),Wv=mt(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,Wi(an(n,1,qt,!0),t,s)});function Xv(n){return n&&n.length?Wi(n):[]}function Yv(n,s){return n&&n.length?Wi(n,ke(s,2)):[]}function qv(n,s){return s=typeof s=="function"?s:t,n&&n.length?Wi(n,t,s):[]}function Zl(n){if(!(n&&n.length))return[];var s=0;return n=zi(n,function(l){if(qt(l))return s=Qt(l.length,s),!0}),dl(s,function(l){return Ht(n,ul(l))})}function rh(n,s){if(!(n&&n.length))return[];var l=Zl(n);return s==null?l:Ht(l,function(h){return Ln(s,t,h)})}var Kv=mt(function(n,s){return qt(n)?Xs(n,s):[]}),$v=mt(function(n){return Ul(zi(n,qt))}),Zv=mt(function(n){var s=Yn(n);return qt(s)&&(s=t),Ul(zi(n,qt),ke(s,2))}),jv=mt(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,Ul(zi(n,qt),t,s)}),Jv=mt(Zl);function Qv(n,s){return Ef(n||[],s||[],Ws)}function e0(n,s){return Ef(n||[],s||[],Ks)}var t0=mt(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,rh(n,l)});function sh(n){var s=y(n);return s.__chain__=!0,s}function n0(n,s){return s(n),n}function ta(n,s){return s(n)}var i0=bi(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(A){return Ml(A,n)};return s>1||this.__actions__.length||!(h instanceof _t)||!Ti(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ta,args:[S],thisArg:t}),new kn(h,this.__chain__).thru(function(A){return s&&!A.length&&A.push(t),A}))});function r0(){return sh(this)}function s0(){return new kn(this.value(),this.__chain__)}function o0(){this.__values__===t&&(this.__values__=xh(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function a0(){return this}function l0(n){for(var s,l=this;l instanceof Go;){var h=Jf(l);h.__index__=0,h.__values__=t,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function c0(){var n=this.__wrapped__;if(n instanceof _t){var s=n;return this.__actions__.length&&(s=new _t(this)),s=s.reverse(),s.__actions__.push({func:ta,args:[$l],thisArg:t}),new kn(s,this.__chain__)}return this.thru($l)}function u0(){return Mf(this.__wrapped__,this.__actions__)}var f0=qo(function(n,s,l){Lt.call(n,l)?++n[l]:Ei(n,l,1)});function h0(n,s,l){var h=st(n)?Iu:n_;return l&&_n(n,s,l)&&(s=t),h(n,ke(s,3))}function d0(n,s){var l=st(n)?zi:rf;return l(n,ke(s,3))}var p0=Df(Qf),m0=Df(eh);function g0(n,s){return an(na(n,s),1)}function _0(n,s){return an(na(n,s),le)}function v0(n,s,l){return l=l===t?1:ut(l),an(na(n,s),l)}function oh(n,s){var l=st(n)?Hn:ki;return l(n,ke(s,3))}function ah(n,s){var l=st(n)?Om:nf;return l(n,ke(s,3))}var x0=qo(function(n,s,l){Lt.call(n,l)?n[l].push(s):Ei(n,l,[s])});function S0(n,s,l,h){n=Tn(n)?n:rs(n),l=l&&!h?ut(l):0;var S=n.length;return l<0&&(l=Qt(S+l,0)),aa(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&Yr(n,s,l)>-1}var M0=mt(function(n,s,l){var h=-1,S=typeof s=="function",A=Tn(n)?Z(n.length):[];return ki(n,function(P){A[++h]=S?Ln(s,P,l):Ys(P,s,l)}),A}),E0=qo(function(n,s,l){Ei(n,l,s)});function na(n,s){var l=st(n)?Ht:uf;return l(n,ke(s,3))}function y0(n,s,l,h){return n==null?[]:(st(s)||(s=s==null?[]:[s]),l=h?t:l,st(l)||(l=l==null?[]:[l]),pf(n,s,l))}var b0=qo(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function T0(n,s,l){var h=st(n)?ll:Ou,S=arguments.length<3;return h(n,ke(s,4),l,S,ki)}function A0(n,s,l){var h=st(n)?Bm:Ou,S=arguments.length<3;return h(n,ke(s,4),l,S,nf)}function w0(n,s){var l=st(n)?zi:rf;return l(n,sa(ke(s,3)))}function C0(n){var s=st(n)?Ju:S_;return s(n)}function R0(n,s,l){(l?_n(n,s,l):s===t)?s=1:s=ut(s);var h=st(n)?jg:M_;return h(n,s)}function L0(n){var s=st(n)?Jg:y_;return s(n)}function P0(n){if(n==null)return 0;if(Tn(n))return aa(n)?Kr(n):n.length;var s=hn(n);return s==Ie||s==R?n.size:wl(n).length}function D0(n,s,l){var h=st(n)?cl:b_;return l&&_n(n,s,l)&&(s=t),h(n,ke(s,3))}var I0=mt(function(n,s){if(n==null)return[];var l=s.length;return l>1&&_n(n,s[0],s[1])?s=[]:l>2&&_n(s[0],s[1],s[2])&&(s=[s[0]]),pf(n,an(s,1),[])}),ia=dg||function(){return on.Date.now()};function U0(n,s){if(typeof s!="function")throw new Vn(u);return n=ut(n),function(){if(--n<1)return s.apply(this,arguments)}}function lh(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,yi(n,I,t,t,t,t,s)}function ch(n,s){var l;if(typeof s!="function")throw new Vn(u);return n=ut(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var jl=mt(function(n,s,l){var h=m;if(l.length){var S=Hi(l,ns(jl));h|=G}return yi(n,h,s,l,S)}),uh=mt(function(n,s,l){var h=m|g;if(l.length){var S=Hi(l,ns(uh));h|=G}return yi(s,h,n,l,S)});function fh(n,s,l){s=l?t:s;var h=yi(n,T,t,t,t,t,t,s);return h.placeholder=fh.placeholder,h}function hh(n,s,l){s=l?t:s;var h=yi(n,D,t,t,t,t,t,s);return h.placeholder=hh.placeholder,h}function dh(n,s,l){var h,S,A,P,B,V,ie=0,oe=!1,he=!1,Te=!0;if(typeof n!="function")throw new Vn(u);s=qn(s)||0,Vt(l)&&(oe=!!l.leading,he="maxWait"in l,A=he?Qt(qn(l.maxWait)||0,s):A,Te="trailing"in l?!!l.trailing:Te);function Be(Kt){var ei=h,Ci=S;return h=S=t,ie=Kt,P=n.apply(Ci,ei),P}function Ye(Kt){return ie=Kt,B=js(gt,s),oe?Be(Kt):P}function ht(Kt){var ei=Kt-V,Ci=Kt-ie,Dh=s-ei;return he?fn(Dh,A-Ci):Dh}function qe(Kt){var ei=Kt-V,Ci=Kt-ie;return V===t||ei>=s||ei<0||he&&Ci>=A}function gt(){var Kt=ia();if(qe(Kt))return vt(Kt);B=js(gt,ht(Kt))}function vt(Kt){return B=t,Te&&h?Be(Kt):(h=S=t,P)}function Un(){B!==t&&yf(B),ie=0,h=V=S=B=t}function vn(){return B===t?P:vt(ia())}function Nn(){var Kt=ia(),ei=qe(Kt);if(h=arguments,S=this,V=Kt,ei){if(B===t)return Ye(V);if(he)return yf(B),B=js(gt,s),Be(V)}return B===t&&(B=js(gt,s)),P}return Nn.cancel=Un,Nn.flush=vn,Nn}var N0=mt(function(n,s){return tf(n,1,s)}),F0=mt(function(n,s,l){return tf(n,qn(s)||0,l)});function O0(n){return yi(n,de)}function ra(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Vn(u);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],A=l.cache;if(A.has(S))return A.get(S);var P=n.apply(this,h);return l.cache=A.set(S,P)||A,P};return l.cache=new(ra.Cache||Mi),l}ra.Cache=Mi;function sa(n){if(typeof n!="function")throw new Vn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function B0(n){return ch(2,n)}var z0=T_(function(n,s){s=s.length==1&&st(s[0])?Ht(s[0],Pn(ke())):Ht(an(s,1),Pn(ke()));var l=s.length;return mt(function(h){for(var S=-1,A=fn(h.length,l);++S<A;)h[S]=s[S].call(this,h[S]);return Ln(n,this,h)})}),Jl=mt(function(n,s){var l=Hi(s,ns(Jl));return yi(n,G,t,s,l)}),ph=mt(function(n,s){var l=Hi(s,ns(ph));return yi(n,N,t,s,l)}),G0=bi(function(n,s){return yi(n,K,t,t,t,s)});function H0(n,s){if(typeof n!="function")throw new Vn(u);return s=s===t?s:ut(s),mt(n,s)}function V0(n,s){if(typeof n!="function")throw new Vn(u);return s=s==null?0:Qt(ut(s),0),mt(function(l){var h=l[s],S=Yi(l,0,s);return h&&Gi(S,h),Ln(n,this,S)})}function k0(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new Vn(u);return Vt(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),dh(n,s,{leading:h,maxWait:s,trailing:S})}function W0(n){return lh(n,1)}function X0(n,s){return Jl(Fl(s),n)}function Y0(){if(!arguments.length)return[];var n=arguments[0];return st(n)?n:[n]}function q0(n){return Wn(n,x)}function K0(n,s){return s=typeof s=="function"?s:t,Wn(n,x,s)}function $0(n){return Wn(n,_|x)}function Z0(n,s){return s=typeof s=="function"?s:t,Wn(n,_|x,s)}function j0(n,s){return s==null||ef(n,s,rn(s))}function Qn(n,s){return n===s||n!==n&&s!==s}var J0=jo(bl),Q0=jo(function(n,s){return n>=s}),Er=af(function(){return arguments}())?af:function(n){return Xt(n)&&Lt.call(n,"callee")&&!Yu.call(n,"callee")},st=Z.isArray,ex=wu?Pn(wu):l_;function Tn(n){return n!=null&&oa(n.length)&&!Ai(n)}function qt(n){return Xt(n)&&Tn(n)}function tx(n){return n===!0||n===!1||Xt(n)&&gn(n)==Ne}var qi=mg||cc,nx=Cu?Pn(Cu):c_;function ix(n){return Xt(n)&&n.nodeType===1&&!Js(n)}function rx(n){if(n==null)return!0;if(Tn(n)&&(st(n)||typeof n=="string"||typeof n.splice=="function"||qi(n)||is(n)||Er(n)))return!n.length;var s=hn(n);if(s==Ie||s==R)return!n.size;if(Zs(n))return!wl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function sx(n,s){return qs(n,s)}function ox(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?qs(n,s,t,l):!!h}function Ql(n){if(!Xt(n))return!1;var s=gn(n);return s==Ve||s==Mt||typeof n.message=="string"&&typeof n.name=="string"&&!Js(n)}function ax(n){return typeof n=="number"&&Ku(n)}function Ai(n){if(!Vt(n))return!1;var s=gn(n);return s==W||s==Wt||s==$e||s==at}function mh(n){return typeof n=="number"&&n==ut(n)}function oa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ee}function Vt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Xt(n){return n!=null&&typeof n=="object"}var gh=Ru?Pn(Ru):f_;function lx(n,s){return n===s||Al(n,s,kl(s))}function cx(n,s,l){return l=typeof l=="function"?l:t,Al(n,s,kl(s),l)}function ux(n){return _h(n)&&n!=+n}function fx(n){if(K_(n))throw new nt(a);return lf(n)}function hx(n){return n===null}function dx(n){return n==null}function _h(n){return typeof n=="number"||Xt(n)&&gn(n)==Ze}function Js(n){if(!Xt(n)||gn(n)!=Je)return!1;var s=Io(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ro.call(l)==cg}var ec=Lu?Pn(Lu):h_;function px(n){return mh(n)&&n>=-ee&&n<=ee}var vh=Pu?Pn(Pu):d_;function aa(n){return typeof n=="string"||!st(n)&&Xt(n)&&gn(n)==M}function In(n){return typeof n=="symbol"||Xt(n)&&gn(n)==Q}var is=Du?Pn(Du):p_;function mx(n){return n===t}function gx(n){return Xt(n)&&hn(n)==_e}function _x(n){return Xt(n)&&gn(n)==ge}var vx=jo(Cl),xx=jo(function(n,s){return n<=s});function xh(n){if(!n)return[];if(Tn(n))return aa(n)?jn(n):bn(n);if(zs&&n[zs])return jm(n[zs]());var s=hn(n),l=s==Ie?ml:s==R?Ao:rs;return l(n)}function wi(n){if(!n)return n===0?n:0;if(n=qn(n),n===le||n===-le){var s=n<0?-1:1;return s*ce}return n===n?n:0}function ut(n){var s=wi(n),l=s%1;return s===s?l?s-l:s:0}function Sh(n){return n?vr(ut(n),0,xe):0}function qn(n){if(typeof n=="number")return n;if(In(n))return fe;if(Vt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Vt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Bu(n);var l=k.test(n);return l||j.test(n)?Um(n.slice(2),l?2:8):C.test(n)?fe:+n}function Mh(n){return ui(n,An(n))}function Sx(n){return n?vr(ut(n),-ee,ee):n===0?n:0}function wt(n){return n==null?"":Dn(n)}var Mx=es(function(n,s){if(Zs(s)||Tn(s)){ui(s,rn(s),n);return}for(var l in s)Lt.call(s,l)&&Ws(n,l,s[l])}),Eh=es(function(n,s){ui(s,An(s),n)}),la=es(function(n,s,l,h){ui(s,An(s),n,h)}),Ex=es(function(n,s,l,h){ui(s,rn(s),n,h)}),yx=bi(Ml);function bx(n,s){var l=Qr(n);return s==null?l:Qu(l,s)}var Tx=mt(function(n,s){n=It(n);var l=-1,h=s.length,S=h>2?s[2]:t;for(S&&_n(s[0],s[1],S)&&(h=1);++l<h;)for(var A=s[l],P=An(A),B=-1,V=P.length;++B<V;){var ie=P[B],oe=n[ie];(oe===t||Qn(oe,Zr[ie])&&!Lt.call(n,ie))&&(n[ie]=A[ie])}return n}),Ax=mt(function(n){return n.push(t,zf),Ln(yh,t,n)});function wx(n,s){return Uu(n,ke(s,3),ci)}function Cx(n,s){return Uu(n,ke(s,3),yl)}function Rx(n,s){return n==null?n:El(n,ke(s,3),An)}function Lx(n,s){return n==null?n:sf(n,ke(s,3),An)}function Px(n,s){return n&&ci(n,ke(s,3))}function Dx(n,s){return n&&yl(n,ke(s,3))}function Ix(n){return n==null?[]:ko(n,rn(n))}function Ux(n){return n==null?[]:ko(n,An(n))}function tc(n,s,l){var h=n==null?t:xr(n,s);return h===t?l:h}function Nx(n,s){return n!=null&&Vf(n,s,r_)}function nc(n,s){return n!=null&&Vf(n,s,s_)}var Fx=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),n[s]=l},rc(wn)),Ox=Uf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},ke),Bx=mt(Ys);function rn(n){return Tn(n)?ju(n):wl(n)}function An(n){return Tn(n)?ju(n,!0):m_(n)}function zx(n,s){var l={};return s=ke(s,3),ci(n,function(h,S,A){Ei(l,s(h,S,A),h)}),l}function Gx(n,s){var l={};return s=ke(s,3),ci(n,function(h,S,A){Ei(l,S,s(h,S,A))}),l}var Hx=es(function(n,s,l){Wo(n,s,l)}),yh=es(function(n,s,l,h){Wo(n,s,l,h)}),Vx=bi(function(n,s){var l={};if(n==null)return l;var h=!1;s=Ht(s,function(A){return A=Xi(A,n),h||(h=A.length>1),A}),ui(n,Hl(n),l),h&&(l=Wn(l,_|v|x,F_));for(var S=s.length;S--;)Il(l,s[S]);return l});function kx(n,s){return bh(n,sa(ke(s)))}var Wx=bi(function(n,s){return n==null?{}:__(n,s)});function bh(n,s){if(n==null)return{};var l=Ht(Hl(n),function(h){return[h]});return s=ke(s),mf(n,l,function(h,S){return s(h,S[0])})}function Xx(n,s,l){s=Xi(s,n);var h=-1,S=s.length;for(S||(S=1,n=t);++h<S;){var A=n==null?t:n[fi(s[h])];A===t&&(h=S,A=l),n=Ai(A)?A.call(n):A}return n}function Yx(n,s,l){return n==null?n:Ks(n,s,l)}function qx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Ks(n,s,l,h)}var Th=Of(rn),Ah=Of(An);function Kx(n,s,l){var h=st(n),S=h||qi(n)||is(n);if(s=ke(s,4),l==null){var A=n&&n.constructor;S?l=h?new A:[]:Vt(n)?l=Ai(A)?Qr(Io(n)):{}:l={}}return(S?Hn:ci)(n,function(P,B,V){return s(l,P,B,V)}),l}function $x(n,s){return n==null?!0:Il(n,s)}function Zx(n,s,l){return n==null?n:Sf(n,s,Fl(l))}function jx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Sf(n,s,Fl(l),h)}function rs(n){return n==null?[]:pl(n,rn(n))}function Jx(n){return n==null?[]:pl(n,An(n))}function Qx(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=qn(l),l=l===l?l:0),s!==t&&(s=qn(s),s=s===s?s:0),vr(qn(n),s,l)}function eS(n,s,l){return s=wi(s),l===t?(l=s,s=0):l=wi(l),n=qn(n),o_(n,s,l)}function tS(n,s,l){if(l&&typeof l!="boolean"&&_n(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=wi(n),s===t?(s=n,n=0):s=wi(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=$u();return fn(n+S*(s-n+Im("1e-"+((S+"").length-1))),s)}return Ll(n,s)}var nS=ts(function(n,s,l){return s=s.toLowerCase(),n+(l?wh(s):s)});function wh(n){return ic(wt(n).toLowerCase())}function Ch(n){return n=wt(n),n&&n.replace(Re,Ym).replace(ym,"")}function iS(n,s,l){n=wt(n),s=Dn(s);var h=n.length;l=l===t?h:vr(ut(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function rS(n){return n=wt(n),n&&ve.test(n)?n.replace(Se,qm):n}function sS(n){return n=wt(n),n&&nn.test(n)?n.replace(Rt,"\\$&"):n}var oS=ts(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),aS=ts(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),lS=Pf("toLowerCase");function cS(n,s,l){n=wt(n),s=ut(s);var h=s?Kr(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return Zo(Oo(S),l)+n+Zo(Fo(S),l)}function uS(n,s,l){n=wt(n),s=ut(s);var h=s?Kr(n):0;return s&&h<s?n+Zo(s-h,l):n}function fS(n,s,l){n=wt(n),s=ut(s);var h=s?Kr(n):0;return s&&h<s?Zo(s-h,l)+n:n}function hS(n,s,l){return l||s==null?s=0:s&&(s=+s),xg(wt(n).replace($n,""),s||0)}function dS(n,s,l){return(l?_n(n,s,l):s===t)?s=1:s=ut(s),Pl(wt(n),s)}function pS(){var n=arguments,s=wt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var mS=ts(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function gS(n,s,l){return l&&typeof l!="number"&&_n(n,s,l)&&(s=l=t),l=l===t?xe:l>>>0,l?(n=wt(n),n&&(typeof s=="string"||s!=null&&!ec(s))&&(s=Dn(s),!s&&qr(n))?Yi(jn(n),0,l):n.split(s,l)):[]}var _S=ts(function(n,s,l){return n+(l?" ":"")+ic(s)});function vS(n,s,l){return n=wt(n),l=l==null?0:vr(ut(l),0,n.length),s=Dn(s),n.slice(l,l+s.length)==s}function xS(n,s,l){var h=y.templateSettings;l&&_n(n,s,l)&&(s=t),n=wt(n),s=la({},s,h,Bf);var S=la({},s.imports,h.imports,Bf),A=rn(S),P=pl(S,A),B,V,ie=0,oe=s.interpolate||Oe,he="__p += '",Te=gl((s.escape||Oe).source+"|"+oe.source+"|"+(oe===yt?tl:Oe).source+"|"+(s.evaluate||Oe).source+"|$","g"),Be="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Cm+"]")+`
`;n.replace(Te,function(qe,gt,vt,Un,vn,Nn){return vt||(vt=Un),he+=n.slice(ie,Nn).replace(We,Km),gt&&(B=!0,he+=`' +
__e(`+gt+`) +
'`),vn&&(V=!0,he+=`';
`+vn+`;
__p += '`),vt&&(he+=`' +
((__t = (`+vt+`)) == null ? '' : __t) +
'`),ie=Nn+qe.length,qe}),he+=`';
`;var Ye=Lt.call(s,"variable")&&s.variable;if(!Ye)he=`with (obj) {
`+he+`
}
`;else if(Mo.test(Ye))throw new nt(c);he=(V?he.replace(L,""):he).replace(ae,"$1").replace(Ue,"$1;"),he="function("+(Ye||"obj")+`) {
`+(Ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var ht=Lh(function(){return At(A,Be+"return "+he).apply(t,P)});if(ht.source=he,Ql(ht))throw ht;return ht}function SS(n){return wt(n).toLowerCase()}function MS(n){return wt(n).toUpperCase()}function ES(n,s,l){if(n=wt(n),n&&(l||s===t))return Bu(n);if(!n||!(s=Dn(s)))return n;var h=jn(n),S=jn(s),A=zu(h,S),P=Gu(h,S)+1;return Yi(h,A,P).join("")}function yS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.slice(0,Vu(n)+1);if(!n||!(s=Dn(s)))return n;var h=jn(n),S=Gu(h,jn(s))+1;return Yi(h,0,S).join("")}function bS(n,s,l){if(n=wt(n),n&&(l||s===t))return n.replace($n,"");if(!n||!(s=Dn(s)))return n;var h=jn(n),S=zu(h,jn(s));return Yi(h,S).join("")}function TS(n,s){var l=b,h=U;if(Vt(s)){var S="separator"in s?s.separator:S;l="length"in s?ut(s.length):l,h="omission"in s?Dn(s.omission):h}n=wt(n);var A=n.length;if(qr(n)){var P=jn(n);A=P.length}if(l>=A)return n;var B=l-Kr(h);if(B<1)return h;var V=P?Yi(P,0,B).join(""):n.slice(0,B);if(S===t)return V+h;if(P&&(B+=V.length-B),ec(S)){if(n.slice(B).search(S)){var ie,oe=V;for(S.global||(S=gl(S.source,wt(Eo.exec(S))+"g")),S.lastIndex=0;ie=S.exec(oe);)var he=ie.index;V=V.slice(0,he===t?B:he)}}else if(n.indexOf(Dn(S),B)!=B){var Te=V.lastIndexOf(S);Te>-1&&(V=V.slice(0,Te))}return V+h}function AS(n){return n=wt(n),n&&Y.test(n)?n.replace(O,tg):n}var wS=ts(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),ic=Pf("toUpperCase");function Rh(n,s,l){return n=wt(n),s=l?t:s,s===t?Zm(n)?rg(n):Hm(n):n.match(s)||[]}var Lh=mt(function(n,s){try{return Ln(n,t,s)}catch(l){return Ql(l)?l:new nt(l)}}),CS=bi(function(n,s){return Hn(s,function(l){l=fi(l),Ei(n,l,jl(n[l],n))}),n});function RS(n){var s=n==null?0:n.length,l=ke();return n=s?Ht(n,function(h){if(typeof h[1]!="function")throw new Vn(u);return[l(h[0]),h[1]]}):[],mt(function(h){for(var S=-1;++S<s;){var A=n[S];if(Ln(A[0],this,h))return Ln(A[1],this,h)}})}function LS(n){return t_(Wn(n,_))}function rc(n){return function(){return n}}function PS(n,s){return n==null||n!==n?s:n}var DS=If(),IS=If(!0);function wn(n){return n}function sc(n){return cf(typeof n=="function"?n:Wn(n,_))}function US(n){return ff(Wn(n,_))}function NS(n,s){return hf(n,Wn(s,_))}var FS=mt(function(n,s){return function(l){return Ys(l,n,s)}}),OS=mt(function(n,s){return function(l){return Ys(n,l,s)}});function oc(n,s,l){var h=rn(s),S=ko(s,h);l==null&&!(Vt(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=ko(s,rn(s)));var A=!(Vt(l)&&"chain"in l)||!!l.chain,P=Ai(n);return Hn(S,function(B){var V=s[B];n[B]=V,P&&(n.prototype[B]=function(){var ie=this.__chain__;if(A||ie){var oe=n(this.__wrapped__),he=oe.__actions__=bn(this.__actions__);return he.push({func:V,args:arguments,thisArg:n}),oe.__chain__=ie,oe}return V.apply(n,Gi([this.value()],arguments))})}),n}function BS(){return on._===this&&(on._=ug),this}function ac(){}function zS(n){return n=ut(n),mt(function(s){return df(s,n)})}var GS=Bl(Ht),HS=Bl(Iu),VS=Bl(cl);function Ph(n){return Xl(n)?ul(fi(n)):v_(n)}function kS(n){return function(s){return n==null?t:xr(n,s)}}var WS=Nf(),XS=Nf(!0);function lc(){return[]}function cc(){return!1}function YS(){return{}}function qS(){return""}function KS(){return!0}function $S(n,s){if(n=ut(n),n<1||n>ee)return[];var l=xe,h=fn(n,xe);s=ke(s),n-=xe;for(var S=dl(h,s);++l<n;)s(l);return S}function ZS(n){return st(n)?Ht(n,fi):In(n)?[n]:bn(jf(wt(n)))}function jS(n){var s=++lg;return wt(n)+s}var JS=$o(function(n,s){return n+s},0),QS=zl("ceil"),eM=$o(function(n,s){return n/s},1),tM=zl("floor");function nM(n){return n&&n.length?Vo(n,wn,bl):t}function iM(n,s){return n&&n.length?Vo(n,ke(s,2),bl):t}function rM(n){return Fu(n,wn)}function sM(n,s){return Fu(n,ke(s,2))}function oM(n){return n&&n.length?Vo(n,wn,Cl):t}function aM(n,s){return n&&n.length?Vo(n,ke(s,2),Cl):t}var lM=$o(function(n,s){return n*s},1),cM=zl("round"),uM=$o(function(n,s){return n-s},0);function fM(n){return n&&n.length?hl(n,wn):0}function hM(n,s){return n&&n.length?hl(n,ke(s,2)):0}return y.after=U0,y.ary=lh,y.assign=Mx,y.assignIn=Eh,y.assignInWith=la,y.assignWith=Ex,y.at=yx,y.before=ch,y.bind=jl,y.bindAll=CS,y.bindKey=uh,y.castArray=Y0,y.chain=sh,y.chunk=tv,y.compact=nv,y.concat=iv,y.cond=RS,y.conforms=LS,y.constant=rc,y.countBy=f0,y.create=bx,y.curry=fh,y.curryRight=hh,y.debounce=dh,y.defaults=Tx,y.defaultsDeep=Ax,y.defer=N0,y.delay=F0,y.difference=rv,y.differenceBy=sv,y.differenceWith=ov,y.drop=av,y.dropRight=lv,y.dropRightWhile=cv,y.dropWhile=uv,y.fill=fv,y.filter=d0,y.flatMap=g0,y.flatMapDeep=_0,y.flatMapDepth=v0,y.flatten=th,y.flattenDeep=hv,y.flattenDepth=dv,y.flip=O0,y.flow=DS,y.flowRight=IS,y.fromPairs=pv,y.functions=Ix,y.functionsIn=Ux,y.groupBy=x0,y.initial=gv,y.intersection=_v,y.intersectionBy=vv,y.intersectionWith=xv,y.invert=Fx,y.invertBy=Ox,y.invokeMap=M0,y.iteratee=sc,y.keyBy=E0,y.keys=rn,y.keysIn=An,y.map=na,y.mapKeys=zx,y.mapValues=Gx,y.matches=US,y.matchesProperty=NS,y.memoize=ra,y.merge=Hx,y.mergeWith=yh,y.method=FS,y.methodOf=OS,y.mixin=oc,y.negate=sa,y.nthArg=zS,y.omit=Vx,y.omitBy=kx,y.once=B0,y.orderBy=y0,y.over=GS,y.overArgs=z0,y.overEvery=HS,y.overSome=VS,y.partial=Jl,y.partialRight=ph,y.partition=b0,y.pick=Wx,y.pickBy=bh,y.property=Ph,y.propertyOf=kS,y.pull=yv,y.pullAll=ih,y.pullAllBy=bv,y.pullAllWith=Tv,y.pullAt=Av,y.range=WS,y.rangeRight=XS,y.rearg=G0,y.reject=w0,y.remove=wv,y.rest=H0,y.reverse=$l,y.sampleSize=R0,y.set=Yx,y.setWith=qx,y.shuffle=L0,y.slice=Cv,y.sortBy=I0,y.sortedUniq=Nv,y.sortedUniqBy=Fv,y.split=gS,y.spread=V0,y.tail=Ov,y.take=Bv,y.takeRight=zv,y.takeRightWhile=Gv,y.takeWhile=Hv,y.tap=n0,y.throttle=k0,y.thru=ta,y.toArray=xh,y.toPairs=Th,y.toPairsIn=Ah,y.toPath=ZS,y.toPlainObject=Mh,y.transform=Kx,y.unary=W0,y.union=Vv,y.unionBy=kv,y.unionWith=Wv,y.uniq=Xv,y.uniqBy=Yv,y.uniqWith=qv,y.unset=$x,y.unzip=Zl,y.unzipWith=rh,y.update=Zx,y.updateWith=jx,y.values=rs,y.valuesIn=Jx,y.without=Kv,y.words=Rh,y.wrap=X0,y.xor=$v,y.xorBy=Zv,y.xorWith=jv,y.zip=Jv,y.zipObject=Qv,y.zipObjectDeep=e0,y.zipWith=t0,y.entries=Th,y.entriesIn=Ah,y.extend=Eh,y.extendWith=la,oc(y,y),y.add=JS,y.attempt=Lh,y.camelCase=nS,y.capitalize=wh,y.ceil=QS,y.clamp=Qx,y.clone=q0,y.cloneDeep=$0,y.cloneDeepWith=Z0,y.cloneWith=K0,y.conformsTo=j0,y.deburr=Ch,y.defaultTo=PS,y.divide=eM,y.endsWith=iS,y.eq=Qn,y.escape=rS,y.escapeRegExp=sS,y.every=h0,y.find=p0,y.findIndex=Qf,y.findKey=wx,y.findLast=m0,y.findLastIndex=eh,y.findLastKey=Cx,y.floor=tM,y.forEach=oh,y.forEachRight=ah,y.forIn=Rx,y.forInRight=Lx,y.forOwn=Px,y.forOwnRight=Dx,y.get=tc,y.gt=J0,y.gte=Q0,y.has=Nx,y.hasIn=nc,y.head=nh,y.identity=wn,y.includes=S0,y.indexOf=mv,y.inRange=eS,y.invoke=Bx,y.isArguments=Er,y.isArray=st,y.isArrayBuffer=ex,y.isArrayLike=Tn,y.isArrayLikeObject=qt,y.isBoolean=tx,y.isBuffer=qi,y.isDate=nx,y.isElement=ix,y.isEmpty=rx,y.isEqual=sx,y.isEqualWith=ox,y.isError=Ql,y.isFinite=ax,y.isFunction=Ai,y.isInteger=mh,y.isLength=oa,y.isMap=gh,y.isMatch=lx,y.isMatchWith=cx,y.isNaN=ux,y.isNative=fx,y.isNil=dx,y.isNull=hx,y.isNumber=_h,y.isObject=Vt,y.isObjectLike=Xt,y.isPlainObject=Js,y.isRegExp=ec,y.isSafeInteger=px,y.isSet=vh,y.isString=aa,y.isSymbol=In,y.isTypedArray=is,y.isUndefined=mx,y.isWeakMap=gx,y.isWeakSet=_x,y.join=Sv,y.kebabCase=oS,y.last=Yn,y.lastIndexOf=Mv,y.lowerCase=aS,y.lowerFirst=lS,y.lt=vx,y.lte=xx,y.max=nM,y.maxBy=iM,y.mean=rM,y.meanBy=sM,y.min=oM,y.minBy=aM,y.stubArray=lc,y.stubFalse=cc,y.stubObject=YS,y.stubString=qS,y.stubTrue=KS,y.multiply=lM,y.nth=Ev,y.noConflict=BS,y.noop=ac,y.now=ia,y.pad=cS,y.padEnd=uS,y.padStart=fS,y.parseInt=hS,y.random=tS,y.reduce=T0,y.reduceRight=A0,y.repeat=dS,y.replace=pS,y.result=Xx,y.round=cM,y.runInContext=H,y.sample=C0,y.size=P0,y.snakeCase=mS,y.some=D0,y.sortedIndex=Rv,y.sortedIndexBy=Lv,y.sortedIndexOf=Pv,y.sortedLastIndex=Dv,y.sortedLastIndexBy=Iv,y.sortedLastIndexOf=Uv,y.startCase=_S,y.startsWith=vS,y.subtract=uM,y.sum=fM,y.sumBy=hM,y.template=xS,y.times=$S,y.toFinite=wi,y.toInteger=ut,y.toLength=Sh,y.toLower=SS,y.toNumber=qn,y.toSafeInteger=Sx,y.toString=wt,y.toUpper=MS,y.trim=ES,y.trimEnd=yS,y.trimStart=bS,y.truncate=TS,y.unescape=AS,y.uniqueId=jS,y.upperCase=wS,y.upperFirst=ic,y.each=oh,y.eachRight=ah,y.first=nh,oc(y,function(){var n={};return ci(y,function(s,l){Lt.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,Hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),Hn(["drop","take"],function(n,s){_t.prototype[n]=function(l){l=l===t?1:Qt(ut(l),0);var h=this.__filtered__&&!s?new _t(this):this.clone();return h.__filtered__?h.__takeCount__=fn(l,h.__takeCount__):h.__views__.push({size:fn(l,xe),type:n+(h.__dir__<0?"Right":"")}),h},_t.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Hn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==z||l==te;_t.prototype[n]=function(S){var A=this.clone();return A.__iteratees__.push({iteratee:ke(S,3),type:l}),A.__filtered__=A.__filtered__||h,A}}),Hn(["head","last"],function(n,s){var l="take"+(s?"Right":"");_t.prototype[n]=function(){return this[l](1).value()[0]}}),Hn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");_t.prototype[n]=function(){return this.__filtered__?new _t(this):this[l](1)}}),_t.prototype.compact=function(){return this.filter(wn)},_t.prototype.find=function(n){return this.filter(n).head()},_t.prototype.findLast=function(n){return this.reverse().find(n)},_t.prototype.invokeMap=mt(function(n,s){return typeof n=="function"?new _t(this):this.map(function(l){return Ys(l,n,s)})}),_t.prototype.reject=function(n){return this.filter(sa(ke(n)))},_t.prototype.slice=function(n,s){n=ut(n);var l=this;return l.__filtered__&&(n>0||s<0)?new _t(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ut(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},_t.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},_t.prototype.toArray=function(){return this.take(xe)},ci(_t.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=y[h?"take"+(s=="last"?"Right":""):s],A=h||/^find/.test(s);S&&(y.prototype[s]=function(){var P=this.__wrapped__,B=h?[1]:arguments,V=P instanceof _t,ie=B[0],oe=V||st(P),he=function(gt){var vt=S.apply(y,Gi([gt],B));return h&&Te?vt[0]:vt};oe&&l&&typeof ie=="function"&&ie.length!=1&&(V=oe=!1);var Te=this.__chain__,Be=!!this.__actions__.length,Ye=A&&!Te,ht=V&&!Be;if(!A&&oe){P=ht?P:new _t(this);var qe=n.apply(P,B);return qe.__actions__.push({func:ta,args:[he],thisArg:t}),new kn(qe,Te)}return Ye&&ht?n.apply(this,B):(qe=this.thru(he),Ye?h?qe.value()[0]:qe.value():qe)})}),Hn(["pop","push","shift","sort","splice","unshift"],function(n){var s=wo[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var A=this.value();return s.apply(st(A)?A:[],S)}return this[l](function(P){return s.apply(st(P)?P:[],S)})}}),ci(_t.prototype,function(n,s){var l=y[s];if(l){var h=l.name+"";Lt.call(Jr,h)||(Jr[h]=[]),Jr[h].push({name:s,func:l})}}),Jr[Ko(t,g).name]=[{name:"wrapper",func:t}],_t.prototype.clone=Ag,_t.prototype.reverse=wg,_t.prototype.value=Cg,y.prototype.at=i0,y.prototype.chain=r0,y.prototype.commit=s0,y.prototype.next=o0,y.prototype.plant=l0,y.prototype.reverse=c0,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=u0,y.prototype.first=y.prototype.head,zs&&(y.prototype[zs]=a0),y},$r=sg();pr?((pr.exports=$r)._=$r,sl._=$r):on._=$r}).call(oo)})(ka,ka.exports);var Wc=ka.exports;const v1={dotSize:5,genePercentile:.99,cameraPositionZ:200},Zt=new Us(v1);function gp(r){const t={...Zt.getValue(),dotSize:r};Zt.next(t)}function _p(r){const e=Zt.getValue(),t=r*.01,i={...e,genePercentile:t};Zt.next(i)}const x1=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},S1=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),M1(t)})};function M1(r){const e=document.getElementById("cellNotFound");let t=St.value.listPalette;r?(t=St.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Wa(t)):Wa(St.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Wa(r){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",r.sort((o,a)=>o[0].toLowerCase()<a[0].toLowerCase()?-1:o[0].toLowerCase()>a[0].toLowerCase()?1:0),r.forEach(([o,a])=>{const u=document.createElement("input");u.type="checkbox",u.className="box",u.id=o,u.value=o,xt.value.selectedCelltypes.includes(o)&&(u.checked=!0);const c=document.createElement("label");c.htmlFor=o,c.style.color=a,c.appendChild(u),c.appendChild(document.createTextNode(o));let f,d,p,_,x=((E,w)=>{for(const m in E)if(E[m].includes(w))return m;return!1})(St.value.groups,o);if(x){const E=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),d=document.getElementById(E),p=document.getElementById(`${x}-label`),_=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,p=document.createElement("label"),p.htmlFor=x,p.setAttribute("for",E),p.style.color="white",p.id=`${x}-label`,d=document.createElement("input"),d.type="checkbox",d.classList.add("box"),d.classList.add("group-input"),d.value=x,d.id=E,p.appendChild(d),p.appendChild(document.createTextNode(x.toUpperCase())),_=document.createElement("ul"),_.id=`${x}-list`,_.style.marginBottom=0,f.appendChild(p),f.appendChild(_),t.appendChild(f));const w=document.createElement("li");w.id=`${x}-item`,_.appendChild(c),_.append(document.createElement("br")),e[x].push(u),t.appendChild(f)}else t.appendChild(c),t.appendChild(document.createElement("br"));u.addEventListener("change",E=>{console.log(E),E1(o,E.target.checked)})});const i=document.getElementsByClassName("group-input");Array.prototype.slice.call(i).forEach(o=>{o.addEventListener("change",a=>{let u=xt.value.selectedCelltypes.map(c=>c);console.log("CHECKING",u),e[a.target.value].forEach(c=>{c.checked=a.target.checked,a.target.checked?u.push(c.value):u.splice(u.indexOf(c.value),1)}),po(u)}),e[o.value].forEach(a=>{let u=!0;a.checked||(u=!1),o.checked=u,a.addEventListener("change",()=>{let c=!0;e[o.value].forEach(f=>{f.checked||(c=!1)}),o.checked=c})})})}async function E1(r,e){let t=xt.value.selectedCelltypes.map(i=>i);e?(t.push(r),po(t)):(t=t.filter(i=>i!==r),po(t))}const y1=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{po([]),Wa(St.value.listPalette),cellTextbox.value=""})},b1=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",xt.value.selectedCelltypes.length!==0?xt.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=St.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function vo(r,e){const t=await fetch(`https://fisheyes.techkyra.com/getdata?data=${e}&gene=${r}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();if(i===null)return"[]";const o=["clusters","clusters_pal","genes","hierarchical_clusters"],a=i._id,u=o.includes(a);return console.log(r,e),u?i.values:i.values.map(f=>parseFloat(f))}function vp(r){return vo(r,St.value.prefix)}function T1(r,e){const t={r:255,g:255,b:255},i={r:0,g:255,b:0},o={r:255,g:0,b:255},a={r:Math.round(i.r+(t.r-i.r)*e),g:Math.round(i.g+(t.g-i.g)*e),b:Math.round(i.b+(t.b-i.b)*e)},u={r:Math.round(o.r+(t.r-o.r)*r),g:Math.round(o.g+(t.g-o.g)*r),b:Math.round(o.b+(t.b-o.b)*r)},c={r:(a.r+u.r)/2,g:(a.g+u.g)/2,b:(a.b+u.b)/2};return`rgb(${Math.round(c.r)}, ${Math.round(c.g)}, ${Math.round(c.b)})`}function xp(r,e){const t={r:0,g:0,b:255},i={r:255,g:255,b:255},o={r:255,g:0,b:0};return e==null?r<.5?`rgb(${Math.floor(i.r*r*2)}, ${Math.floor(i.g*r*2)}, ${t.b})`:r===.5?`rgb(${i.r}, ${i.g}, ${i.b})`:`rgb(${o.r}, ${Math.floor(i.g-i.g*(r-.5)*2)}, ${Math.floor(i.b-i.b*(r-.5)*2)})`:T1(r,e)}function Sp(r,e){const t=r.slice().sort((o,a)=>o-a),i=Math.floor(t.length*e)-1;return t[i]}function Mp(r,e){return r.map(t=>Math.min(t/e,1))}const A1=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),w1(t)})};function w1(r){const e=document.getElementById("geneNotFound");if(r){const t=St.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),Xa(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Xa(St.value.genes.slice(0,10))}function Xa(r){const e=document.getElementById("geneRadio");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="checkbox",i.className="box",i.id=t,i.value=t,i.name="radio",xt.value.selectedGenes.includes(t)&&(i.checked=!0);const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("geneRadioGroup");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{if(xt.value.selectedGenes.length>=xt.value.mode&&(u.target.checked=!1),xt.value.mode===1&&xt.value.selectedGenes.length===1){const c=document.querySelector(`[value=${CSS.escape(xt.value.selectedGenes[0])}]`);c.checked=!1,c.value!==u.target.value&&(mo([]),u.target.checked=!0)}R1(t,u.target.checked)})})}function C1(){const r=document.getElementById("modeButton");r.onclick=()=>{const e=r.value==="1";e?(r.innerText="2 Gene Mode",r.classList.replace("btn-info","btn-success")):(r.innerText="Single Gene Mode",r.classList.replace("btn-success","btn-info")),r.value=e?"2":"1",g1(Number(r.value))}}function R1(r,e){let t=xt.value.selectedGenes.map(i=>i);e?(t.push(r),mo(t)):(t=t.filter(i=>i!==r),mo(t))}const L1=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{mo([]),Xa(St.value.genes.slice(0,10)),geneTextbox.value=""})},P1=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",xt.value.selectedGenes.length!==0?xt.value.selectedGenes.forEach((e,t)=>{const i=document.createElement("p");i.style.color=t===0?"red":"cyan",i.style.fontStyle="italic",i.style.fontWeight="bold",i.innerHTML=e,r.appendChild(i)}):r.innerHTML="No gene filters selected"},au=r=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r.toString();window.history.pushState({path:e},"",e)},D1=new URL(window.location),nr=new URLSearchParams(D1.search);class I1{constructor(e){Ih(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update();const e=this.camera.quaternion;let t=co.value.items;for(let i=0;i<t.length*2;i++){const o=new kt,a=new X,u=new X;this.instancedMesh.getMatrixAt(i,o),o.decompose(a,new ur,u),o.compose(a,e,u),this.instancedMesh.setMatrixAt(i,o)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=hm.value.scene,this.camera=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new pu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=Zt.value.cameraPositionZ,this.controls=new dm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){co.pipe(er(e=>e.items),tr((e,t)=>Wc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:")}),St.pipe(er(e=>e.prefix),tr((e,t)=>Wc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e),console.log(St.value.prefix)}),uo.pipe(er(e=>e.isLoading),tr((e,t)=>Wc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),console.log(uo.value.isLoading),x1(uo.value.isLoading)}),xt.pipe(er(e=>e.selectedCelltypes),tr((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected celltypes changed:",e),console.log(xt.value.selectedCelltypes),nr.has("celltype")&&nr.delete("celltype"),hi(!0),xt.value.selectedCelltypes?await this.updateInstancedMesh(xt.value.selectedCelltypes):await this.updateInstancedMesh([]),hi(!1),b1(),xt.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(xt.value.selectedCelltypes));nr.append("celltype",t)}au(nr)}),xt.pipe(er(e=>e.selectedGenes),tr((e,t)=>e.join()===t.join())).subscribe(async e=>{if(console.log("Selected genes changed:",e),console.log(xt.value.selectedGenes),nr.has("gene")&&nr.delete("gene"),hi(!0),xt.value.selectedGenes?(await this.updateInstancedMesh(xt.value.selectedGenes),await this.updateInstancedMesh(xt.value.selectedGenes)):await this.updateInstancedMesh([]),hi(!1),P1(),xt.value.selectedGenes.length>0){const t=encodeURIComponent(JSON.stringify(xt.value.selectedGenes));nr.append("gene",t)}au(nr)}),Zt.pipe(er(e=>e.dotSize),tr()).subscribe(async e=>{console.log("Dot Size Changed:",e),console.log(Zt.value.dotSize),hi(!0),Zt.value.dotSize?await this.updateInstancedMesh(Zt.value.dotSize):await this.updateInstancedMesh([]),hi(!1)}),Zt.pipe(er(e=>e.cameraPositionZ),tr()).subscribe(async e=>{console.log("Zoom",e),console.log(Zt.value.cameraPositionZ),Zt.value.cameraPositionZ?await this.updateInstancedMesh(Zt.value.cameraPositionZ):await this.updateInstancedMesh([])}),Zt.pipe(er(e=>e.genePercentile),tr()).subscribe(async e=>{console.log("Gene Percentile",e),console.log(Zt.value.genePercentile),hi(!0),Zt.value.genePercentile?await this.updateInstancedMesh(Zt.value.genePercentile):await this.updateInstancedMesh([]),hi(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=St.value.pallete,i=co.value.items;const o=new mu(.1,32,32),a=new hu,u=i.length;console.log(u),this.instancedMesh=new sp(o,a,u),this.instancedMeshUmap=new sp(o,a,u);const c=new En,f=new En;let d,p,_,v=200,x=.5,E=xt.value.selectedCelltypes,w=xt.value.selectedGenes,m=Zt.value.dotSize,g=Math.floor(m/5);this.camera.position.z=Zt.value.cameraPositionZ;let F=Zt.value.genePercentile;if(w.length>0)try{let T=await vp(w[0]);if(w.length==2){let G=await vp(w[1]),N=Sp(G,F);_=Mp(G,N)}let D=Sp(T,F);p=Mp(T,D)}catch(T){console.error("Error fetching data:",T)}for(let T=0;T<u;T++){if(w.length>0)if(E.length===0||E.includes(i[T].clusters)){let G,N;_?(G=xp(p[T],_[T]),N=(p[T]+_[T])/2*m+m/5):(G=xp(p[T]),N=p[T]*m+m/5),d=new bt(G),c.scale.set(N,N,N),f.scale.set(N*x,N*x,N*x)}else d=new bt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*x,1*x,1*x);else E.includes(i[T].clusters)||E.length==0?(d=new bt(t[i[T].clusters]),c.scale.set(m,m,m),f.scale.set(m*x,m*x,m*x)):(d=new bt("#5e5e5e"),c.scale.set(g,g,g),f.scale.set(g*x,g*x,g*x));c.position.set(i[T].global_sphere0_norm*v,i[T].global_sphere1_norm*v,i[T].global_sphere2_norm*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(T,c.matrix),this.instancedMesh.setColorAt(T,d);let D=1e4;St.value.prefix=="75pe"?f.position.set(i[T].X_umap0_norm*80+D,i[T].X_umap1_norm*80,10):f.position.set(i[T].X_umap0_norm*60+D-25,i[T].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(T,f.matrix),this.instancedMeshUmap.setColorAt(T,d)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const Qa=St.value.prefix;async function U1(){const r=St.value.palleteColumn;try{const e=await vo(r,Qa);console.log(e),c1(JSON.parse(e))}catch(e){console.error("Failed to load items:",e)}}async function N1(){try{const r=await vo("genes",Qa);u1(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}async function F1(){const r=St.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>vo(o,Qa)));console.log(i),r.forEach((o,a)=>{console.log(o),e[o]=i[a]}),console.log("trfdata"),console.log(e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}o1(t)}catch(i){console.error("Error combining data:",i)}}async function O1(){try{const r=await vo("hierarchical_clusters",Qa);h1(JSON.parse(r))}catch(r){console.error("Failed to load items:",r)}}const B1=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none",t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white")})},z1=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},G1=()=>{const r=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),i=document.getElementById("pointSizeSlider"),o=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),u=document.getElementById("geneSliderBox"),c=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),d=document.getElementById("cellCheckbox"),p=document.getElementById("geneRadioContainer"),_=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");r.forEach(x=>{const E=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="block"},w=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="none"};["mouseenter"].forEach(m=>{x.addEventListener(m,function(){E()})}),["mouseleave"].forEach(m=>{x.addEventListener(m,function(){w()})})}),e.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),u.style.display==="block"&&(u.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),i.oninput=function(){o.value=parseFloat(this.value).toFixed(2),gp(parseFloat(this.value).toFixed(2))},o.oninput=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),i.value=parseFloat(this.value).toFixed(2),gp(parseFloat(this.value).toFixed(2))},o.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="rgb(97, 97, 97)",_.style.color="white"),p.style.display==="block"&&(p.style.display="none",v.style.backgroundColor="rgb(97, 97, 97)",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),u.style.display=u.style.display==="none"?"block":"none"}),c.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),_p(parseFloat(this.value).toFixed(2))}),f.oninput=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),c.value=parseFloat(this.value).toFixed(2),_p(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};function H1(){const r=document.createElement("div");r.className="filter";const e=document.createElement("div");e.className="desc-container";const t=Ep("toggleCellCheckbox","Celltype","cell-desc"),i=Ya("cell-desc","Click to filter by celltypes");e.appendChild(t),e.appendChild(i),r.appendChild(e);const o=V1();r.appendChild(o);const a=document.createElement("div");a.className="desc-container";const u=Ep("toggleGeneRadio","Gene","gene-desc"),c=Ya("gene-desc","Click to filter by genes");a.appendChild(u),a.appendChild(c),r.appendChild(a);const f=k1();r.appendChild(f);const d=W1();return r.appendChild(d),r}function Ep(r,e,t){const i=document.createElement("button");return i.setAttribute("type","button"),i.setAttribute("data-target",t),i.classList.add("toggles","btn"),i.id=r,i.textContent=e,i}function V1(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="cellCheckbox",r.style.display="none",r.style.zIndex=1e3;const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="cellTextbox",t.placeholder="Search celltype";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="cellClearButton",i.textContent="Clear",i.title="Clear all celltype filters.",e.appendChild(t),e.appendChild(i);const o=document.createElement("div");o.classList.add("checkboxes"),o.id="cellCheckboxes";const a=document.createElement("div");return a.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),a.id="cellNotFound",a.textContent="No cell types of that name found.",r.appendChild(e),r.appendChild(o),r.appendChild(a),r}function k1(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="geneRadioContainer",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="geneTextbox",t.placeholder="Search gene (only 2 can be selected)";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="geneClearButton",i.textContent="Clear",i.title="Clear all gene filters.";const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("modeButton","btn","btn-info"),o.id="modeButton",o.textContent="Single Gene Mode",o.value="1",o.title="Change between only being able to select 1 gene or 2 genes.",e.appendChild(t),e.appendChild(i),e.appendChild(o);const a=document.createElement("div");a.classList.add("checkboxes"),a.id="geneRadio";const u=document.createElement("div");return u.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),u.id="geneNotFound",u.textContent="No genes of that name found.",r.appendChild(e),r.appendChild(a),r.appendChild(u),r}function W1(){const r=document.createElement("div");r.classList.add("icon");const e=bp("togglePointSize","pointSizeBox","M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"),t=Ya("pointSizeBox","Click to change dot size."),i=yp("pointSizeSliderBox","pointSizeSlider","pointSizeSliderNumContainer","pointSizeSliderValue","pointSizeMinId","pointSizeMaxId",.1,15,5),o=bp("toggleGenePercentile","genePercentileBox","M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z","M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"),a=Ya("genePercentileBox","Click to change the gene percentile."),u=yp("geneSliderBox","geneSlider","geneSliderNumContainer","geneSliderValue","geneMinId","geneMaxId",80,99.99,99),c=document.createElement("div");c.style.display="flex",c.style.flexDirection="row",c.style.width="max-content",c.style.gap="5px",c.appendChild(e),c.appendChild(t),r.appendChild(c),r.appendChild(i);const f=document.createElement("div");return f.style.display="flex",f.style.flexDirection="row",f.style.width="max-content",f.style.gap="5px",f.appendChild(o),f.appendChild(a),r.appendChild(f),r.appendChild(u),r}function Ya(r,e){const t=document.createElement("div");return t.classList.add("descBox"),t.id=r,t.textContent=e,t.style.display="none",t}function yp(r,e,t,i,o,a,u,c,f){const d=document.createElement("div");d.id=r,d.classList.add("slider-container"),d.style.display="none";const p=document.createElement("input");p.setAttribute("type","range"),p.setAttribute("min",u),p.setAttribute("max",c),p.setAttribute("value",f),p.setAttribute("step",.01),p.classList.add("slider"),p.id=e;const _=document.createElement("div");_.id=t,_.classList.add("slider-container-inner");const v=document.createElement("div");v.classList.add("slider-min-max"),v.id=o,v.innerText="Min: "+parseFloat(u).toFixed(2);const x=document.createElement("input");x.classList.add("slider-value"),x.id=i,x.setAttribute("step",.01),x.setAttribute("type","text"),x.value=parseFloat(f).toFixed(2),x.min=u,x.max=c;const E=document.createElement("div");return E.classList.add("slider-min-max"),E.id=a,E.innerText="Max: "+parseFloat(c).toFixed(2),d.appendChild(p),_.appendChild(v),_.appendChild(x),_.appendChild(E),d.appendChild(_),d}function bp(r,e,t,i){const o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("data-target",e),o.classList.add("iconBtn","btn"),o.id=r;const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","24"),a.setAttribute("height","24"),a.setAttribute("viewBox","0 0 24 24"),a.setAttribute("fill","none");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("fill-rule","evenodd"),u.setAttribute("clip-rule","evenodd"),u.setAttribute("d",t),u.setAttribute("fill","currentColor");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("fill-rule","evenodd"),c.setAttribute("clip-rule","evenodd"),c.setAttribute("d",i),c.setAttribute("fill","currentColor"),a.appendChild(u),a.appendChild(c),o.appendChild(a),o}function X1(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}const Y1=r=>{const e=document.getElementById("dropdownMenuButton");new URL(window.location);const t=new URLSearchParams("");t.append("prefix",r),au(t),r!==St.value.prefix&&(f1(r),e.innerHTML=St.value.prefix,window.location.reload())};function q1(){const r=document.createElement("div");r.id="prefix-dropdown-container",r.style.display="flex",r.style.justifyContent="flex-end",r.style.zIndex="1000";const e=document.createElement("div");e.className="dropdown dropdown-center",r.appendChild(e);const t=document.createElement("button");t.className="btn btn-secondary dropdown-toggle",t.type="button",t.id="dropdownMenuButton",t.dataset.bsToggle="dropdown",t.setAttribute("aria-expanded","false"),t.innerHTML=St.value.prefix,t.title="Set the prefix.",t.style.width="80px";const i=document.createElement("ul");return i.className="dropdown-menu",i.style.minWidth="80px",i.style.maxWidth="80px",i.style.backgroundColor="rgb(60, 60, 60)",i.style.boxShadow="0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",i.appendChild(Xc("50pe")),i.appendChild(Xc("75pe")),i.appendChild(Xc("6s")),e.appendChild(t),e.appendChild(i),r}function Xc(r){const e=document.createElement("p"),t=document.createElement("a");return t.className="dropdown-item",t.style.cursor="pointer",t.innerHTML=r,t.style.textAlign="center",t.style.color="white",e.style.margin="7.5px",t.onmouseover=()=>{e.style.backgroundColor="rgb(33, 37, 41)",t.style.backgroundColor="rgb(33, 37, 41)"},t.onmouseout=()=>{e.style.backgroundColor="rgb(60, 60, 60)",t.style.backgroundColor="rgb(60, 60, 60)"},t.onclick=()=>{Y1(r)},e.appendChild(t),e}function K1(){const r=document.createElement("div");r.classList.add("dropdown","dropdown-center"),r.id="filter-container";const e=document.createElement("button");e.classList.add("btn","btn-secondary","dropdown-toggle"),e.type="button",e.dataset.bsToggle="dropdown",e.setAttribute("aria-expanded","false"),e.textContent="Show Selected Filters",e.title="View all selected filters.";const t=document.createElement("ul");t.classList.add("dropdown-menu","list");const i=document.createElement("div"),o=document.createElement("b");o.textContent="Celltype Filters: ";const a=document.createElement("div");a.classList.add("listFilters"),a.id="cellFilters",a.textContent="No celltype filters selected",i.appendChild(o),i.appendChild(a);const u=document.createElement("hr"),c=document.createElement("div"),f=document.createElement("b");f.textContent="Gene Filter: ";const d=document.createElement("p");return d.classList.add("listFilters"),d.id="geneFilters",d.textContent="No gene filters selected",c.appendChild(f),c.appendChild(d),t.appendChild(i),t.appendChild(u),t.appendChild(c),r.appendChild(e),r.appendChild(t),r}function $1(){const r=document.createElement("nav");r.className="sidenav navbar navbar-expand-lg navbar-dark bg-dark",r.setAttribute("data-mdb-sidenav-init",""),r.setAttribute("data-mdb-right","true");const e=document.createElement("div");return e.className="container-fluid nav-container",e.appendChild(Z1()),e.appendChild(K1()),e.appendChild(q1()),r.appendChild(e),r}function Z1(){const r=document.createElement("div");r.id="title";const e=document.createElement("a");e.className="navbar-brand",e.href="/#",e.innerHTML="<b>FISHEYES</b>";const t=document.createElement("div");return t.className="title-paragraph",t.innerHTML="<p>by <i>Bintu Lab</i>, </p><p>data by <i>Schier Lab</i></p>",r.appendChild(e),r.appendChild(t),r}function pm(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls",e.style.zIndex=1,e.style.position="absolute";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",i.title="Drag to resize UMAP.",e.appendChild(t),e.appendChild(i),r.appendChild(e);let o=!1,a=0,u=0;t.addEventListener("mousedown",N=>{o=!0,a=N.offsetX,u=N.offsetY});const c=()=>{r.offsetLeft<0&&(r.style.left="0%"),r.offsetLeft+r.offsetWidth>window.innerWidth&&(r.style.left=`${(window.innerWidth-r.offsetWidth)/window.innerWidth*100}%`);const N=document.getElementsByClassName("navbar")[0].offsetHeight;r.offsetTop<N&&(r.style.top=`${N/window.innerHeight*100}%`),r.offsetTop+r.offsetHeight>window.innerHeight&&(r.style.top=`${(window.innerHeight-r.offsetHeight)/window.innerHeight*100}%`),r.offsetTop<=N&&r.offsetTop+r.offsetHeight>=window.innerHeight&&(r.style.top=`${N/window.innerHeight*100}%`,r.style.height=`${window.innerHeight-N}px`,m.aspect=r.offsetWidth/r.offsetHeight,m.updateProjectionMatrix(),g.setSize(r.offsetWidth,r.offsetHeight)),r.offsetLeft<=0&&r.offsetLeft+r.offsetWidth>=window.innerWidth&&(r.style.left="0%",r.style.width=`${window.innerWidth}px`,m.aspect=r.offsetWidth/r.offsetHeight,m.updateProjectionMatrix(),g.setSize(r.offsetWidth,r.offsetHeight))};document.addEventListener("mousemove",N=>{o&&(r.style.left=`${(N.clientX-a)/window.innerWidth*100}%`,r.style.top=`${(N.clientY-u)/window.innerHeight*100}%`,c())}),document.addEventListener("mouseup",()=>{o=!1}),i.addEventListener("mousedown",f);function f(N){window.addEventListener("mousemove",d),window.addEventListener("mouseup",p),N.preventDefault()}function d(N){const I=document.getElementsByClassName("navbar")[0].offsetHeight;let K=N.clientX<0?0:N.clientX,de=N.clientY<I?I:N.clientY;const b=100,U=100;r.offsetWidth==b&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==U&&de>r.offsetTop&&(de=r.offsetTop);const pe=r.offsetWidth+(r.offsetLeft-K),ue=r.offsetHeight+(r.offsetTop-de);r.style.width=`${Math.max(pe,b)}px`,r.style.height=`${Math.max(ue,U)}px`,pe>b&&(r.style.left=`${K}px`),ue>U&&(r.style.top=`${de}px`),m.aspect=pe/ue,m.updateProjectionMatrix(),g.setSize(pe,ue)}function p(){window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",p)}t.addEventListener("touchstart",N=>{o=!0,a=N.changedTouches[0].clientX,u=N.changedTouches[0].clientY}),document.addEventListener("touchmove",N=>{if(o){let I=N.changedTouches[0].clientX;I+r.offsetWidth>window.innerWidth&&(I=window.innerWidth-r.offsetWidth),r.style.left=`${I/window.innerWidth*100}%`,r.style.top=`${N.changedTouches[0].clientY/window.innerHeight*100}%`,c()}}),document.addEventListener("touchend",()=>{o=!1}),i.addEventListener("touchstart",_);function _(N){window.addEventListener("touchmove",v),window.addEventListener("touchend",x),N.preventDefault()}function v(N){const I=document.getElementsByClassName("navbar")[0].offsetHeight;let K=N.changedTouches[0].clientX<0?0:N.changedTouches[0].clientX,de=N.changedTouches[0].clientY<I?I:N.changedTouches[0].clientY;const b=100,U=100;r.offsetWidth==b&&K>r.offsetLeft&&(K=r.offsetLeft),r.offsetHeight==U&&de>r.offsetTop&&(de=r.offsetTop);const pe=r.offsetWidth+(r.offsetLeft-K),ue=r.offsetHeight+(r.offsetTop-de);r.style.width=`${Math.max(pe,b)}px`,r.style.height=`${Math.max(ue,U)}px`,pe>b&&(r.style.left=`${K}px`),ue>U&&(r.style.top=`${de}px`),m.aspect=pe/ue,m.updateProjectionMatrix(),g.setSize(pe,ue)}function x(){window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)}const E=document.createElement("div");E.id="overlayScene",E.style.width="100%",E.style.height="100%",r.appendChild(E);const w=hm.value.scene,m=new Bn(75,E.offsetWidth/E.offsetHeight,.1,1e3),g=new pu,F=window.innerWidth*.25,T=window.innerHeight*.5;m.aspect=F/T,m.updateProjectionMatrix(),g.setSize(F,T),g.render(w,m),E.appendChild(g.domElement),m.position.x=1e4,m.position.z=150;const D=new dm(m,g.domElement);D.enableRotate=!1,D.mouseButtons={LEFT:Ni.PAN,MIDDLE:Ni.DOLLY,RIGHT:Ni.ROTATE},D.touches={ONE:Rr.PAN},m.lookAt(1e4,0,10),D.target.set(1e4,0,10),D.update(),g.render(w,m);function G(){requestAnimationFrame(G),g.render(w,m)}return G(),window.addEventListener("resize",()=>{c()}),r}document.body.appendChild(pm());document.addEventListener("DOMContentLoaded",async()=>{const r=$1();pm();const e=X1(),t=H1();document.body.insertBefore(r,document.body.firstChild),document.body.appendChild(e),document.body.appendChild(t),B1(),z1(),G1(),C1(),hi(!0);try{await U1(),console.log(St.value.pallete),await F1(),await N1(),console.log(St.value.genes),await O1(),console.log(St.value.groups);const i=document.body;new I1(i);const o=new URL(window.location),a=new URLSearchParams(o.search);if(a.has("celltype")){const c=JSON.parse(decodeURIComponent(a.get("celltype"))).filter(f=>Object.keys(St.value.pallete).includes(f));console.log("new cells",c),po(c)}if(a.has("gene")){const c=JSON.parse(decodeURIComponent(a.get("gene"))).filter(f=>St.value.genes.includes(f));console.log("new genes",c),mo(c)}Wa(St.value.listPalette),y1(),S1(),Xa(St.value.genes.slice(0,10)),L1(),A1()}catch(i){console.error("Failed to load data:",i)}finally{hi(!1)}});
